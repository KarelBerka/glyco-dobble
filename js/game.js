// js/game.js — Interactive Training Game Controller for GlycoDobble

class GlycoDobbleGame {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.timeLeft = 60;
    this.gameInterval = null;
    this.gameState = "start";
    this.currentCardA = null;
    this.currentCardB = null;
    this.sharedSugar = null;
    this.deck = [];
    this.highScore = parseInt(localStorage.getItem("glyco_dobble_highscore") || "0");
    this.audioCtx = null;
  }

  init() {
    this.renderStartScreen();
  }

  playSound(type) {
    try {
      if (!this.audioCtx) this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain); gain.connect(this.audioCtx.destination);
      const now = this.audioCtx.currentTime;

      if (type === "correct") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.08);
        osc.frequency.setValueAtTime(783.99, now + 0.16);
        osc.frequency.setValueAtTime(1046.50, now + 0.24);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now); osc.stop(now + 0.4);
      } else if (type === "incorrect") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(80, now + 0.3);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now); osc.stop(now + 0.35);
      } else if (type === "gameover") {
        osc.type = "triangle";
        [349.23, 261.63, 220.00, 174.61].forEach((freq, idx) => {
          osc.frequency.setValueAtTime(freq, now + idx * 0.12);
        });
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.start(now); osc.stop(now + 0.65);
      }
    } catch (e) {}
  }

  t(key) {
    const lang = window.currentLang || "cs";
    const dict = {
      cs: { title: "Glyco-Dobble Trénink", rules: "Najděte společný cukr na obou kartách a klikněte na něj!", record: "Osobní rekord:", points: "bodů", startBtn: "Spustit trénink", scoreLabel: "Skóre", streakLabel: "Série", timeLabel: "Čas", gameOver: "Konec hry!", restartBtn: "Hrát znovu" },
      en: { title: "Glyco-Dobble Training", rules: "Find the matching sugar on both cards and click on it!", record: "Personal best:", points: "pts", startBtn: "Start Training", scoreLabel: "Score", streakLabel: "Streak", timeLabel: "Time", gameOver: "Game Over!", restartBtn: "Play Again" },
      de: { title: "Glyco-Dobble Training", rules: "Finden Sie den gemeinsamen Zucker auf beiden Karten!", record: "Persönlicher Rekord:", points: "Punkte", startBtn: "Training starten", scoreLabel: "Punkte", streakLabel: "Serie", timeLabel: "Zeit", gameOver: "Spiel vorbei!", restartBtn: "Nochmals spielen" },
      fr: { title: "Entraînement Glyco-Dobble", rules: "Trouvez le sucre commun sur les deux cartes et cliquez dessus !", record: "Meilleur score :", points: "points", startBtn: "Commencer", scoreLabel: "Score", streakLabel: "Série", timeLabel: "Temps", gameOver: "Fin du jeu !", restartBtn: "Rejouer" }
    };
    return (dict[lang] || dict["en"])[key] || key;
  }

  renderStartScreen() {
    this.gameState = "start";
    this.highScore = parseInt(localStorage.getItem("glyco_dobble_highscore") || "0");
    this.container.innerHTML = `
      <div class="game-start-screen">
        <div style="font-size: 4rem; margin-bottom: 0.5rem;">🍬</div>
        <h2>${this.t("title")}</h2>
        <p>${this.t("rules")}</p>
        <div style="margin: 1rem 0; font-size: 0.95rem;">
          <strong>${this.t("record")}</strong> <span style="color: var(--primary); font-weight: 800;">${this.highScore} ${this.t("points")}</span>
        </div>
        <button class="btn btn-primary" id="btn-start-game">${this.t("startBtn")}</button>
      </div>
    `;
    document.getElementById("btn-start-game").addEventListener("click", () => this.startGame());
  }

  startGame() {
    this.gameState = "playing";
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.timeLeft = 60;

    const currentVer = window.currentGlycoVersion || "extended";
    const q = currentVer === "basic" ? 3 : (currentVer === "complete" ? 7 : 4);
    const pool = getSugarsForVersion(currentVer);
    this.deck = generateDobbleDeck(pool, q, true);

    this.container.innerHTML = `
      <div class="game-header">
        <div class="stat-box"><span class="stat-label">${this.t("scoreLabel")}</span><span class="stat-value" id="game-score">0</span></div>
        <div class="stat-box"><span class="stat-label">${this.t("streakLabel")}</span><span class="stat-value" id="game-streak" style="color: var(--accent);">0</span></div>
        <div class="stat-box"><span class="stat-label">${this.t("timeLabel")}</span><span class="stat-value" id="game-timer" style="color: var(--danger);">60s</span></div>
      </div>
      <div class="game-arena" id="game-arena"></div>
    `;

    this.nextRound();
    if (this.gameInterval) clearInterval(this.gameInterval);
    this.gameInterval = setInterval(() => {
      this.timeLeft--;
      const timerEl = document.getElementById("game-timer");
      if (timerEl) timerEl.textContent = `${this.timeLeft}s`;
      if (this.timeLeft <= 0) {
        clearInterval(this.gameInterval);
        this.endGame();
      }
    }, 1000);
  }

  nextRound() {
    const idxA = Math.floor(Math.random() * this.deck.length);
    let idxB = Math.floor(Math.random() * this.deck.length);
    while (idxB === idxA) idxB = Math.floor(Math.random() * this.deck.length);

    this.currentCardA = this.deck[idxA];
    this.currentCardB = this.deck[idxB];

    const itemsA = this.currentCardA.items.map(i => i.symbol.id);
    const itemsB = this.currentCardB.items.map(i => i.symbol.id);
    const sharedId = itemsA.find(id => itemsB.includes(id));
    this.sharedSugar = SUGARS.find(s => s.id === sharedId);

    const arena = document.getElementById("game-arena");
    if (!arena) return;
    arena.innerHTML = "";
    arena.appendChild(this.renderCardElement(this.currentCardA));
    arena.appendChild(this.renderCardElement(this.currentCardB));
  }

  renderCardElement(cardData) {
    const card = document.createElement("div");
    card.className = "dobble-card";
    const k = cardData.items.length;
    
    if (k >= 8) {
      card.style.width = "300px";
      card.style.height = "300px";
    }

    // Position coordinates depending on number of items (k = q+1)
    let positions = [];
    if (k === 4) {
      positions = [{x:32,y:32},{x:68,y:32},{x:32,y:68},{x:68,y:68}];
    } else if (k === 5) {
      positions = [{x:50,y:50},{x:28,y:28},{x:72,y:28},{x:28,y:72},{x:72,y:72}];
    } else if (k === 6) {
      positions = [{x:50,y:25},{x:75,y:40},{x:75,y:70},{x:50,y:80},{x:25,y:70},{x:25,y:40}];
    } else { // k = 8 (q=7)
      positions = [{x:50,y:50},{x:50,y:20},{x:76,y:32},{x:80,y:62},{x:62,y:82},{x:38,y:82},{x:20,y:62},{x:24,y:32}];
    }

    const lang = window.currentLang || "cs";

    cardData.items.forEach((item, posIdx) => {
      const pos = positions[posIdx] || {x:50,y:50};
      const s = item.symbol;
      const rep = item.repType;
      const rot = Math.floor(Math.random() * 360);
      const scale = 0.85 + Math.random() * 0.2;

      let content = "";
      let classes = "card-item";

      if (rep === 0) content = `<span class="item-text">${getSugarName(s, lang)}</span>`;
      else if (rep === 1) content = `<span class="item-text">${s.code3}</span>`;
      else if (rep === 2) content = renderSNFGToSVG(s.snfg, 40, 40);
      else if (rep === 3) content = renderStructureToSVG(s.structure, 60, 60);
      else if (rep === 4) {
        const cleanCode = s.code3.toLowerCase().replace("(", "_").replace(")", "_").replace(":", "_").replace("/", "_");
        content = `<img src="assets/structures/${cleanCode}.png" style="width:48px;height:48px;object-fit:contain;" onerror="this.style.display='none'">`;
      }
      else if (rep === 5) content = `<span class="item-condensed">${s.formula}</span>`;
      else content = `<span class="item-smiles" style="font-size:0.55rem;word-break:break-all;line-height:1.1;display:block;max-width:65px;">${s.smiles}</span>`;

      const itemEl = document.createElement("div");
      itemEl.className = classes;
      itemEl.style.cssText = `--x: ${pos.x}%; --y: ${pos.y}%; --scale: ${scale}; --rot: ${rot}deg;`;
      itemEl.innerHTML = content;
      itemEl.addEventListener("click", (e) => {
        e.stopPropagation();
        this.handleSymbolClick(s);
      });
      card.appendChild(itemEl);
    });

    return card;
  }

  handleSymbolClick(clickedSugar) {
    if (this.gameState !== "playing") return;

    if (clickedSugar.id === this.sharedSugar.id) {
      this.playSound("correct");
      this.streak++;
      if (this.streak > this.maxStreak) this.maxStreak = this.streak;
      const pointsGain = 10 + Math.floor(this.streak / 3) * 5;
      this.score += pointsGain;
      this.timeLeft = Math.min(90, this.timeLeft + 3);

      document.getElementById("game-score").textContent = this.score;
      document.getElementById("game-streak").textContent = this.streak;
      this.nextRound();
    } else {
      this.playSound("incorrect");
      this.streak = 0;
      this.timeLeft = Math.max(0, this.timeLeft - 5);
      document.getElementById("game-streak").textContent = "0";
      document.getElementById("game-timer").textContent = `${this.timeLeft}s`;
    }
  }

  endGame() {
    this.gameState = "gameover";
    this.playSound("gameover");
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem("glyco_dobble_highscore", this.highScore.toString());
    }
    this.container.innerHTML = `
      <div class="game-start-screen">
        <div style="font-size: 4rem;">🎉</div>
        <h2>${this.t("gameOver")}</h2>
        <p style="font-size: 1.4rem; font-weight: 800; color: var(--primary); margin: 1rem 0;">${this.score} ${this.t("points")}</p>
        <p>Nejdelší série: ${this.maxStreak}</p>
        <p style="margin-bottom: 1.5rem;">${this.t("record")} ${this.highScore} ${this.t("points")}</p>
        <button class="btn btn-primary" id="btn-restart-game">${this.t("restartBtn")}</button>
      </div>
    `;
    document.getElementById("btn-restart-game").addEventListener("click", () => this.startGame());
  }

  updateLang() {
    if (this.gameState === "playing") this.nextRound();
    else this.renderStartScreen();
  }
}

window.GlycoDobbleGame = GlycoDobbleGame;
