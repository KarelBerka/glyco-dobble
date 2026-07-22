// js/app.js — Main Application Controller for GlycoDobble

const _VALID_LANGS = ["cs", "en", "de", "fr"];
const _urlLang = new URLSearchParams(window.location.search).get("lang");
const _storedLang = localStorage.getItem("glyco_dobble_lang");
const _resolvedLang = _VALID_LANGS.includes(_urlLang) ? _urlLang : (_VALID_LANGS.includes(_storedLang) ? _storedLang : "cs");

window.currentLang = _resolvedLang;
window.currentGlycoVersion = localStorage.getItem("glyco_dobble_version") || "extended"; // basic (q=3), extended (q=4), complete (q=7)

const TRANSLATIONS = {
  cs: {
    tab_home: "Úvod", tab_encyclopedia: "Encyklopedie", tab_game: "Tréninková Hra", tab_generator: "Generátor Karet",
    hero_title: "Glyco-Dobble se sacharidy",
    hero_desc: "Interaktivní trenažér a generátor kariet hry Dobble pro glykonomiku. Poznávejte monosacharidy, disacharidy a oficiální barevné <strong>SNFG symboly</strong>!",
    hero_btn_play: "Hrát Hru", hero_btn_print: "Tisknout Karty",
    ver_basic: "Základní (q=3, 13 cukrů)", ver_extended: "Rozšířený (q=4, 21 cukrů)", ver_complete: "SNFG Atlas (q=7, 57 cukrů)",
    search_placeholder: "Hledat podle názvu, zkratky nebo vzorce...", filter_all: "Všechny",
    btn_print: "Tisknout sadu karet", preview_title: "Náhled karet", btn_regenerate: "Přegenerovat sady",
    footer_text: "<p>&copy; 2026 Glyco-Dobble. Součást <a href=\"https://karelberka.github.io/bio-dobble/\" style=\"color: var(--primary); font-weight: 700;\">BioDobble Portal</a>. Autor: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. <a href=\"https://github.com/KarelBerka/glyco-dobble\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">GitHub</a>.</p>"
  },
  en: {
    tab_home: "Home", tab_encyclopedia: "Encyclopedia", tab_game: "Training Game", tab_generator: "Card Generator",
    hero_title: "Glyco-Dobble with Sugars",
    hero_desc: "Interactive card generator and training deck simulator for glycomics. Practice recognizing monosaccharides, disaccharides, and official colorful <strong>SNFG symbols</strong>!",
    hero_btn_play: "Play Game", hero_btn_print: "Print Cards",
    ver_basic: "Basic (q=3, 13 sugars)", ver_extended: "Extended (q=4, 21 sugars)", ver_complete: "SNFG Atlas (q=7, 57 sugars)",
    search_placeholder: "Search by name, code, or formula...", filter_all: "All",
    btn_print: "Print Card Deck", preview_title: "Card Preview", btn_regenerate: "Regenerate Decks",
    footer_text: "<p>&copy; 2026 Glyco-Dobble. Part of <a href=\"https://karelberka.github.io/bio-dobble/\" style=\"color: var(--primary); font-weight: 700;\">BioDobble Portal</a>. Author: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. <a href=\"https://github.com/KarelBerka/glyco-dobble\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">GitHub</a>.</p>"
  },
  de: {
    tab_home: "Startseite", tab_encyclopedia: "Enzyklopädie", tab_game: "Trainingsspiel", tab_generator: "Kartengenerator",
    hero_title: "Glyco-Dobble mit Zuckern",
    hero_desc: "Interaktiver Kartengenerator und Trainingssimulator für die Glykomik.",
    hero_btn_play: "Spiel starten", hero_btn_print: "Karten drucken",
    ver_basic: "Basis (q=3, 13 Zucker)", ver_extended: "Erweitert (q=4, 21 Zucker)", ver_complete: "SNFG Atlas (q=7, 57 Zucker)",
    search_placeholder: "Suchen nach Name, Code oder Formel...", filter_all: "Alle",
    btn_print: "Kartensatz drucken", preview_title: "Kartenvorschau", btn_regenerate: "Decks neu generieren",
    footer_text: "<p>&copy; 2026 Glyco-Dobble. Teil von <a href=\"https://karelberka.github.io/bio-dobble/\" style=\"color: var(--primary); font-weight: 700;\">BioDobble Portal</a>. Autor: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. <a href=\"https://github.com/KarelBerka/glyco-dobble\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">GitHub</a>.</p>"
  },
  fr: {
    tab_home: "Accueil", tab_encyclopedia: "Encyclopédie", tab_game: "Jeu d'entraînement", tab_generator: "Générateur de cartes",
    hero_title: "Glyco-Dobble avec les glucides",
    hero_desc: "Générateur de cartes interactif et entraîneur pour la glycobiologie.",
    hero_btn_play: "Jouer", hero_btn_print: "Imprimer les cartes",
    ver_basic: "De base (q=3, 13 sucres)", ver_extended: "Étendu (q=4, 21 sucres)", ver_complete: "SNFG Atlas (q=7, 57 sucres)",
    search_placeholder: "Rechercher par nom, code...", filter_all: "Tous",
    btn_print: "Imprimer le jeu", preview_title: "Aperçu des cartes", btn_regenerate: "Régénérer",
    footer_text: "<p>&copy; 2026 Glyco-Dobble. Fait partie de <a href=\"https://karelberka.github.io/bio-dobble/\" style=\"color: var(--primary); font-weight: 700;\">BioDobble Portal</a>. Auteur: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. <a href=\"https://github.com/KarelBerka/glyco-dobble\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">GitHub</a>.</p>"
  }
};

let activeGameInstance = null;
let generatedDeck = [];

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initVersionSelector();
  initTabs();
  initLanguage();
  initEncyclopedia();
  initGenerator();

  activeGameInstance = new window.GlycoDobbleGame("game-container");
  activeGameInstance.init();
});

function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("glyco_dobble_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("glyco_dobble_theme", newTheme);
    });
  }
}

function initVersionSelector() {
  document.querySelectorAll(".version-btn").forEach(btn => {
    if (btn.getAttribute("data-version") === window.currentGlycoVersion) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
    btn.addEventListener("click", () => {
      document.querySelectorAll(".version-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      window.currentGlycoVersion = btn.getAttribute("data-version");
      localStorage.setItem("glyco_dobble_version", window.currentGlycoVersion);

      renderEncyclopedia("all", "");
      if (document.getElementById("generator-tab").classList.contains("active")) {
        renderGeneratorPreview(true);
      }
      if (activeGameInstance) activeGameInstance.updateLang();
    });
  });
}

function initLanguage() {
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.value = window.currentLang;
    translatePage();
    langToggle.addEventListener("change", () => {
      window.currentLang = langToggle.value;
      localStorage.setItem("glyco_dobble_lang", window.currentLang);
      translatePage();
      renderEncyclopedia("all", "");
      if (activeGameInstance) activeGameInstance.updateLang();
    });
  }
}

function translatePage() {
  const lang = window.currentLang;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (dict[key]) el.innerHTML = dict[key];
  });
}

function initTabs() {
  window.switchTab = function(tabId) {
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    if (activeBtn) activeBtn.classList.add("active");
    const activeContent = document.getElementById(tabId);
    if (activeContent) activeContent.classList.add("active");

    if (tabId === "generator-tab") renderGeneratorPreview(true);
  };

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.getAttribute("data-tab")));
  });
}

function initEncyclopedia() {
  const searchInput = document.getElementById("ref-search");
  const filterBtns = document.querySelectorAll("#ref-filters .filter-btn");

  renderEncyclopedia("all", "");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      const activeFilter = document.querySelector("#ref-filters .filter-btn.active")?.getAttribute("data-filter") || "all";
      renderEncyclopedia(activeFilter, query);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
      renderEncyclopedia(filter, query);
    });
  });
}

function renderEncyclopedia(filter, query) {
  const grid = document.getElementById("ref-grid");
  if (!grid) return;
  grid.innerHTML = "";
  const lang = window.currentLang;
  const sugars = getSugarsForVersion(window.currentGlycoVersion);

  const filtered = sugars.filter(s => {
    if (filter !== "all" && s.group !== filter) return false;
    if (query) {
      return (
        s.name.toLowerCase().includes(query) ||
        s.engName.toLowerCase().includes(query) ||
        s.code3.toLowerCase().includes(query) ||
        s.formula.toLowerCase().includes(query)
      );
    }
    return true;
  });

  filtered.forEach(s => {
    const clean_code = s.code3.toLowerCase().replace("(", "_").replace(")", "_").replace(":", "_").replace("/", "_");
    const card = document.createElement("div");
    card.className = "sugar-card";
    card.innerHTML = `
      <div class="sugar-header">
        <div class="sugar-title">
          <span class="sugar-cz-name">${getSugarName(s, lang)}</span>
          <span class="sugar-eng-name">${s.engName}</span>
        </div>
        <span class="sugar-badge">${s.code3}</span>
      </div>
      <div class="sugar-previews">
        <div class="snfg-icon" title="SNFG barevný symbol">${renderSNFGToSVG(s.snfg, 44, 44)}</div>
        <div title="2D Haworthova projekce">${renderStructureToSVG(s.structure, 80, 80)}</div>
        <div title="3D PyMOL model"><img src="assets/structures/${clean_code}.png" style="width:80px;height:80px;object-fit:contain;" onerror="this.style.display='none'"></div>
      </div>
      <div style="font-size: 0.85rem; color: var(--text-muted);">
        <strong>Vzorec:</strong> ${s.formula}<br>
        <strong>SMILES:</strong> <span style="font-family: monospace; font-size: 0.75rem;">${s.smiles}</span>
      </div>
      <p style="font-size: 0.85rem; line-height: 1.4;">${s.desc}</p>
    `;
    grid.appendChild(card);
  });
}

function initGenerator() {
  const regenerateBtn = document.getElementById("btn-regenerate-deck");
  const printBtn = document.getElementById("btn-print-deck");
  const genQSelect = document.getElementById("gen-q-select");
  const shapeSelect = document.getElementById("set-card-shape");
  const rotationCheckbox = document.getElementById("set-random-rotation");
  const diffRepsCheckbox = document.getElementById("set-guarantee-diff-reps");
  const cheatCheckbox = document.getElementById("set-show-cheat");

  if (regenerateBtn) regenerateBtn.addEventListener("click", () => renderGeneratorPreview(true));
  if (printBtn) printBtn.addEventListener("click", () => window.print());
  
  if (genQSelect) {
    genQSelect.addEventListener("change", () => {
      window.currentGlycoVersion = genQSelect.value === "3" ? "basic" : (genQSelect.value === "7" ? "complete" : "extended");
      renderGeneratorPreview(true);
    });
  }

  if (shapeSelect) shapeSelect.addEventListener("change", () => renderGeneratorPreview(false));
  if (rotationCheckbox) rotationCheckbox.addEventListener("change", () => renderGeneratorPreview(false));
  if (diffRepsCheckbox) diffRepsCheckbox.addEventListener("change", () => renderGeneratorPreview(true));
  if (cheatCheckbox) cheatCheckbox.addEventListener("change", () => renderGeneratorPreview(false));

  document.querySelectorAll(".set-rep-toggle").forEach(cb => {
    cb.addEventListener("change", () => renderGeneratorPreview(true));
  });
}

function renderGeneratorPreview(recompute = true) {
  const grid = document.getElementById("generator-cards-grid");
  if (!grid) return;

  const currentVer = window.currentGlycoVersion || "extended";
  const q = currentVer === "basic" ? 3 : (currentVer === "complete" ? 7 : (currentVer === "advanced" || currentVer === "extended" ? 4 : 5));

  // Gather allowed representations
  const checkedBoxes = document.querySelectorAll(".set-rep-toggle:checked");
  let allowedReps = Array.from(checkedBoxes).map(cb => parseInt(cb.value));
  if (allowedReps.length === 0) {
    allowedReps = [0, 1, 2, 3, 4, 5];
    document.querySelectorAll(".set-rep-toggle").forEach((cb, idx) => { if (idx < 6) cb.checked = true; });
  }

  if (recompute || generatedDeck.length === 0) {
    const sugars = getSugarsForVersion(currentVer);
    const guaranteeDiff = document.getElementById("set-guarantee-diff-reps")?.checked !== false;
    generatedDeck = generateDobbleDeck(sugars, q, guaranteeDiff, allowedReps);
  }

  grid.innerHTML = "";
  const lang = window.currentLang;
  const k = q + 1;

  let positions = [];
  if (k === 4) positions = [{x:30,y:30},{x:70,y:30},{x:30,y:70},{x:70,y:70}];
  else if (k === 5) positions = [{x:50,y:50},{x:27,y:27},{x:73,y:27},{x:27,y:73},{x:73,y:73}];
  else if (k === 6) positions = [{x:50,y:25},{x:75,y:40},{x:75,y:70},{x:50,y:80},{x:25,y:70},{x:25,y:40}];
  else positions = [{x:50,y:50},{x:50,y:20},{x:78,y:32},{x:82,y:62},{x:62,y:82},{x:38,y:82},{x:18,y:62},{x:22,y:32}];

  const printLayoutSelect = document.getElementById("set-print-layout");
  const layoutVal = printLayoutSelect ? printLayoutSelect.value : "6";
  grid.setAttribute("data-layout", layoutVal);

  const isSquare = document.getElementById("set-card-shape") ? document.getElementById("set-card-shape").value === "square" : true;
  const rotateEnabled = document.getElementById("set-random-rotation") ? document.getElementById("set-random-rotation").checked === true : false;
  const showCheat = document.getElementById("set-show-cheat") ? document.getElementById("set-show-cheat").checked === true : false;

  grid.className = isSquare ? "cards-grid shape-square" : "cards-grid shape-circle";

  generatedDeck.forEach((cardData, idx) => {
    const card = document.createElement("div");
    card.className = `dobble-card ${isSquare ? 'square' : ''}`;

    let itemsHTML = "";
    cardData.items.forEach((item, posIdx) => {
      const pos = positions[posIdx] || {x:50,y:50};
      const s = item.symbol;
      const rep = item.repType;
      const rot = rotateEnabled ? Math.floor(Math.random() * 360) : 0;
      const scale = 0.85;

      let content = "";
      // 0: Local Name, 1: Code3, 2: SNFG, 3: 2D, 4: 3D, 5: Formula, 6: SMILES
      if (rep === 0) content = `<span class="item-text">${getSugarName(s, lang)}</span>`;
      else if (rep === 1) content = `<span class="item-text">${s.code3}</span>`;
      else if (rep === 2) content = renderSNFGToSVG(s.snfg, 48, 48);
      else if (rep === 3) content = renderStructureToSVG(s.structure, 68, 68);
      else if (rep === 4) {
        // Clean filename
        const clean_code = s.code3.toLowerCase().replace("(", "_").replace(")", "_").replace(":", "_").replace("/", "_");
        content = `<img src="assets/structures/${clean_code}.png" style="width:84px;height:84px;object-fit:contain;" onerror="this.style.display='none'">`;
      }
      else if (rep === 5) content = `<span class="item-condensed">${s.formula}</span>`;
      else content = `<span class="item-smiles" style="font-size:0.55rem;word-break:break-all;line-height:1.1;display:block;max-width:65px;">${s.smiles}</span>`;

      itemsHTML += `
        <div class="card-item" style="--x: ${pos.x}%; --y: ${pos.y}%; --scale: ${scale} ; --rot: ${rot}deg;">
          ${content}
        </div>
      `;
    });

    if (showCheat) {
      const listNames = cardData.items.map(it => it.symbol.code3).join(", ");
      itemsHTML += `<span style="position: absolute; top: 8px; left: 8px; font-size: 0.5rem; color: var(--text-muted); max-width: 80%; text-align: left; pointer-events: none;">${listNames}</span>`;
    }

    itemsHTML += `<span style="position: absolute; bottom: 8px; left: 0; right: 0; font-size: 0.6rem; text-align: center; color: var(--text-muted);">Karta ${idx+1}</span>`;
    card.innerHTML = itemsHTML;
    grid.appendChild(card);
  });
}
