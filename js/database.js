// js/database.js — Carbohydrate (Sugar) Database for GlycoDobble

/**
 * Complete Database of 57 Carbohydrates (Monosaccharides, Derivatives, Disaccharides, Oligosaccharides)
 * Supports Dobble order q=3 (13 cards), q=4 (21 cards), q=5 (31 cards), and q=7 (57 cards).
 */
const SUGARS = [
  // ─── 0 to 12 (q=3 Core Set - 13 Sugars) ───────────────────────────────────
  {
    id: 0,
    name: "D-Glukosa",
    engName: "D-Glucose",
    nameDe: "D-Glucose",
    nameFr: "D-Glucose",
    code3: "Glc",
    group: "hexose",
    groupCz: "Hexosa (Aldosa)",
    formula: "C6H12O6",
    condensed: "CH₂OH(CHOH)₄CHO",
    desc: "Nejdůležitější aldohexosa, hlavní energetický substrát buněk a monomerní jednotka škrobu, glykogenu a celulosy.",
    descEn: "The primary aldohexose, major cellular energy substrate, and building block of starch, glycogen, and cellulose.",
    descDe: "Die wichtigste Aldohexose, Hauptenergiequelle von Zellen und Baustein von Stärke, Glykogen und Cellulose.",
    descFr: "L'aldohexose principal, source majeure d'énergie cellulaire et composant de l'amidon, du glycogène et de la cellulose.",
    smiles: "OC[C@@H]1O[C@H](O)[C@H](O)[C@@H](O)[C@@H]1O",
    snfg: { shape: "circle", color: "#005BCB", label: "Glc" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" },   // 0 (O5)
        { x: 80, y: 45, label: "OH", type: "O" },  // 1 (C1-OH)
        { x: 65, y: 70, label: "OH", type: "O" },  // 2 (C2-OH)
        { x: 35, y: 70, label: "OH", type: "O" },  // 3 (C3-OH)
        { x: 20, y: 45, label: "OH", type: "O" },  // 4 (C4-OH)
        { x: 22, y: 15, label: "HOCH₂", type: "C" },// 5 (C6)
        { x: 70, y: 45, label: "", type: "C" },   // 6 (C1)
        { x: 58, y: 60, label: "", type: "C" },   // 7 (C2)
        { x: 42, y: 60, label: "", type: "C" },   // 8 (C3)
        { x: 30, y: 45, label: "", type: "C" },   // 9 (C4)
        { x: 42, y: 30, label: "", type: "C" }    // 10 (C5)
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },  { from: 7, to: 8, type: 1 },
        { from: 8, to: 9, type: 1 },  { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 },  { from: 7, to: 2, type: 1 },
        { from: 8, to: 3, type: 1 },  { from: 9, to: 4, type: 1 },
        { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 1,
    name: "D-Galaktosa",
    engName: "D-Galactose",
    nameDe: "D-Galactosis",
    nameFr: "D-Galactose",
    code3: "Gal",
    group: "hexose",
    groupCz: "Hexosa (C4-epimer glukosy)",
    formula: "C6H12O6",
    condensed: "CH₂OH(CHOH)₄CHO",
    desc: "C4-epimer glukosy, součást laktosy (mléčného cukru) a glykolipidů buněčných membrán.",
    descEn: "C4-epimer of glucose, component of lactose (milk sugar) and cell membrane glycolipids.",
    descDe: "C4-Epimer der Glucose, Bestandteil von Lactose (Milchzucker) und Glykolipiden.",
    descFr: "Épimère C4 du glucose, composant du lactose (sucre du lait) et des glycolipides.",
    smiles: "OC[C@H]1O[C@H](O)[C@H](O)[C@@H](O)[C@@H]1O",
    snfg: { shape: "circle", color: "#FFD700", label: "Gal" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" },
        { x: 80, y: 45, label: "OH", type: "O" },
        { x: 65, y: 70, label: "OH", type: "O" },
        { x: 35, y: 70, label: "OH", type: "O" },
        { x: 15, y: 35, label: "HO", type: "O" },
        { x: 25, y: 12, label: "HOCH₂", type: "C" },
        { x: 70, y: 45, label: "", type: "C" },
        { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" },
        { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },  { from: 7, to: 8, type: 1 },
        { from: 8, to: 9, type: 1 },  { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 },  { from: 7, to: 2, type: 1 },
        { from: 8, to: 3, type: 1 },  { from: 9, to: 4, type: 1 },
        { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 2,
    name: "D-Manosa",
    engName: "D-Mannose",
    nameDe: "D-Mannose",
    nameFr: "D-Mannose",
    code3: "Man",
    group: "hexose",
    groupCz: "Hexosa (C2-epimer glukosy)",
    formula: "C6H12O6",
    condensed: "CH₂OH(CHOH)₄CHO",
    desc: "C2-epimer glukosy, klíčový monosacharid pro N-glykosylaci proteinů v zárodečném retikulu a Golgiho aparátu.",
    descEn: "C2-epimer of glucose, key monosaccharide in protein N-glycosylation.",
    descDe: "C2-Epimer der Glucose, schlüsselmonosaccharid bei der N-Glykosylierung von Proteinen.",
    descFr: "Épimère C2 du glucose, monosaccharide clé dans la N-glycosylation des protéines.",
    smiles: "OC[C@@H]1O[C@H](O)[C@@H](O)[C@@H](O)[C@@H]1O",
    snfg: { shape: "circle", color: "#00A651", label: "Man" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" },
        { x: 80, y: 45, label: "OH", type: "O" },
        { x: 60, y: 80, label: "HO", type: "O" },
        { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" },
        { x: 22, y: 15, label: "HOCH₂", type: "C" },
        { x: 70, y: 45, label: "", type: "C" },
        { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" },
        { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },  { from: 7, to: 8, type: 1 },
        { from: 8, to: 9, type: 1 },  { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 },  { from: 7, to: 2, type: 1 },
        { from: 8, to: 3, type: 1 },  { from: 9, to: 4, type: 1 },
        { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 3,
    name: "D-Fruktosa",
    engName: "D-Fructose",
    nameDe: "D-Fructose",
    nameFr: "D-Fructose",
    code3: "Fru",
    group: "hexose",
    groupCz: "Ketohexosa (Ovocný cukr)",
    formula: "C6H12O6",
    condensed: "CH₂OHCO(CHOH)₃CH₂OH",
    desc: "Nejsladší přírodní monosacharid (ketohexosa), tvoří furanosový kruh v sacharose.",
    descEn: "Sweetest natural monosaccharide (ketohexose), forms furanose ring in sucrose.",
    descDe: "Süßester natürlicher Monosaccharid (Ketohexose), bildet Furanosering in Saccharose.",
    descFr: "Le monosaccharide naturel le plus doux (ketohexose), forme un cycle furanose dans le sucrose.",
    smiles: "OCC1(O)OC(CO)C(O)C1O",
    snfg: { shape: "circle", color: "#00A651", label: "Fru" },
    structure: {
      atoms: [
        { x: 50, y: 22, label: "O", type: "O" },
        { x: 72, y: 40, label: "", type: "C" },
        { x: 62, y: 68, label: "", type: "C" },
        { x: 38, y: 68, label: "", type: "C" },
        { x: 28, y: 40, label: "", type: "C" },
        { x: 88, y: 32, label: "CH₂OH", type: "C" },
        { x: 12, y: 32, label: "HOCH₂", type: "C" },
        { x: 68, y: 84, label: "OH", type: "O" },
        { x: 32, y: 84, label: "OH", type: "O" }
      ],
      bonds: [
        { from: 4, to: 0, type: 1 }, { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 },
        { from: 3, to: 4, type: 1 }, { from: 1, to: 5, type: 1 },
        { from: 4, to: 6, type: 1 }, { from: 2, to: 7, type: 1 },
        { from: 3, to: 8, type: 1 }
      ]
    }
  },
  {
    id: 4,
    name: "D-Ribosa",
    engName: "D-Ribose",
    nameDe: "D-Ribose",
    nameFr: "D-Ribose",
    code3: "Rib",
    group: "pentose",
    groupCz: "Aldopentosa (RNA)",
    formula: "C5H10O5",
    condensed: "CH₂OH(CHOH)₃CHO",
    desc: "Základní sacharidová složka RNK a nukleotidů ATP, NADH a FAD.",
    descEn: "Essential carbohydrate component of RNA and energy nucleotides ATP, NADH, and FAD.",
    descDe: "Wesentlicher Kohlenhydratbestandteil von RNA sowie ATP, NADH und FAD.",
    descFr: "Composant glucidique essentiel de l'ARN et des nucléotides énergétiques ATP, NADH, FAD.",
    smiles: "OC[C@@H]1O[C@H](O)[C@H](O)[C@@H]1O",
    snfg: { shape: "star", color: "#FF69B4", label: "Rib" },
    structure: {
      atoms: [
        { x: 50, y: 22, label: "O", type: "O" },
        { x: 72, y: 40, label: "", type: "C" },
        { x: 62, y: 68, label: "", type: "C" },
        { x: 38, y: 68, label: "", type: "C" },
        { x: 28, y: 40, label: "", type: "C" },
        { x: 86, y: 45, label: "OH", type: "O" },
        { x: 68, y: 84, label: "OH", type: "O" },
        { x: 32, y: 84, label: "OH", type: "O" },
        { x: 15, y: 28, label: "HOCH₂", type: "C" }
      ],
      bonds: [
        { from: 4, to: 0, type: 1 }, { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 },
        { from: 3, to: 4, type: 1 }, { from: 1, to: 5, type: 1 },
        { from: 2, to: 6, type: 1 }, { from: 3, to: 7, type: 1 },
        { from: 4, to: 8, type: 1 }
      ]
    }
  },
  {
    id: 5,
    name: "D-Xylosa",
    engName: "D-Xylose",
    nameDe: "D-Xylose",
    nameFr: "D-Xylose",
    code3: "Xyl",
    group: "pentose",
    groupCz: "Aldopentosa (Dřevný cukr)",
    formula: "C5H10O5",
    condensed: "CH₂OH(CHOH)₃CHO",
    desc: "Hlavní pentosa hemicelulos (xylanu) v rolinách a iniciační cukr proteoglykanových řetězců.",
    descEn: "Main pentose of plant hemicellulose (xylan) and initiator of proteoglycan chains.",
    descDe: "Hauptpentose der Hemicellulose (Xylan) und Initiatorzucker von Proteoglykanketten.",
    descFr: "Pentose principal de l'hémicellulose végétale et initiateur des chaînes de protéoglycanes.",
    smiles: "OC[C@@H]1O[C@H](O)[C@H](O)[C@@H](O)1",
    snfg: { shape: "star", color: "#FF8C00", label: "Xyl" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" },
        { x: 80, y: 45, label: "OH", type: "O" },
        { x: 65, y: 70, label: "OH", type: "O" },
        { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" },
        { x: 70, y: 45, label: "", type: "C" },
        { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" },
        { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 9, to: 0, type: 1 }, { from: 0, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 },
        { from: 5, to: 1, type: 1 }, { from: 6, to: 2, type: 1 },
        { from: 7, to: 3, type: 1 }, { from: 8, to: 4, type: 1 }
      ]
    }
  },
  {
    id: 6,
    name: "L-Fukosa",
    engName: "L-Fucose",
    nameDe: "L-Fucose",
    nameFr: "L-Fucose",
    code3: "Fuc",
    group: "deoxy",
    groupCz: "6-Deoxy-L-galaktosa",
    formula: "C6H12O5",
    condensed: "CH₃(CHOH)₄CHO",
    desc: "Deoxysacharid s L-konfigurací, klíčový terminální cukr krevních skupin ABO a Selektinových ligandů.",
    descEn: "Deoxysugar with L-configuration, key terminal sugar of ABO blood groups and Selectin ligands.",
    descDe: "Deoxyszucker mit L-Konfiguration, endständiger Zucker der ABO-Blutgruppen.",
    descFr: "Désoxysucre de configuration L, sucre terminal majeur des groupes sanguins ABO.",
    smiles: "C[C@H]1O[C@H](O)[C@H](O)[C@@H](O)[C@@H]1O",
    snfg: { shape: "triangle", color: "#E8000D", label: "Fuc" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" },
        { x: 80, y: 45, label: "OH", type: "O" },
        { x: 65, y: 70, label: "OH", type: "O" },
        { x: 35, y: 70, label: "OH", type: "O" },
        { x: 15, y: 35, label: "HO", type: "O" },
        { x: 25, y: 12, label: "CH₃", type: "C" },
        { x: 70, y: 45, label: "", type: "C" },
        { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" },
        { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },  { from: 7, to: 8, type: 1 },
        { from: 8, to: 9, type: 1 },  { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 },  { from: 7, to: 2, type: 1 },
        { from: 8, to: 3, type: 1 },  { from: 9, to: 4, type: 1 },
        { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 7,
    name: "N-Acetylglukosamin",
    engName: "N-Acetylglucosamine",
    nameDe: "N-Acetylglucosamin",
    nameFr: "N-Acétylglucosamine",
    code3: "GlcNAc",
    group: "hexosamine",
    groupCz: "N-Acetylovaný aminosacharid",
    formula: "C8H15NO6",
    condensed: "CH₃CONHC6H11O5",
    desc: "Základní stavební jednotka chitinu, bakteriálního peptidoglykanu a N-glykanů.",
    descEn: "Essential building block of chitin, bacterial peptidoglycan, and N-glycans.",
    descDe: "Baustein von Chitin, bakteriellem Peptidoglykan und N-Glykanen.",
    descFr: "Composant essentiel de la chitine, du peptidoglycane bactérien et des N-glycanes.",
    smiles: "CC(=O)N[C@@H]1[C@H](O)OC(CO)[C@@H](O)[C@@H]1O",
    snfg: { shape: "square", color: "#005BCB", label: "GlcNAc" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" },
        { x: 80, y: 45, label: "OH", type: "O" },
        { x: 72, y: 75, label: "NHAc", type: "N" },
        { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" },
        { x: 22, y: 15, label: "HOCH₂", type: "C" },
        { x: 70, y: 45, label: "", type: "C" },
        { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" },
        { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },  { from: 7, to: 8, type: 1 },
        { from: 8, to: 9, type: 1 },  { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 },  { from: 7, to: 2, type: 1 },
        { from: 8, to: 3, type: 1 },  { from: 9, to: 4, type: 1 },
        { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 8,
    name: "N-Acetylgalaktosamin",
    engName: "N-Acetylgalactosamine",
    nameDe: "N-Acetylgalactosamin",
    nameFr: "N-Acétylgalactosamine",
    code3: "GalNAc",
    group: "hexosamine",
    groupCz: "N-Acetylovaný aminosacharid",
    formula: "C8H15NO6",
    condensed: "CH₃CONHC6H11O5",
    desc: "Iniciační cukr O-glykosylace (mucinový typ) a determinanta krevní skupiny A.",
    descEn: "Initiating sugar of O-glycosylation (mucin type) and blood group A antigen determinant.",
    descDe: "Initiationszucker der O-Glykosylierung und Determinante der Blutgruppe A.",
    descFr: "Sucre initiateur de la O-glycosylation et déterminant du groupe sanguin A.",
    smiles: "CC(=O)N[C@@H]1[C@H](O)OC(CO)[C@H](O)[C@@H]1O",
    snfg: { shape: "square", color: "#FFD700", label: "GalNAc" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" },
        { x: 80, y: 45, label: "OH", type: "O" },
        { x: 72, y: 75, label: "NHAc", type: "N" },
        { x: 35, y: 70, label: "OH", type: "O" },
        { x: 15, y: 35, label: "HO", type: "O" },
        { x: 25, y: 12, label: "HOCH₂", type: "C" },
        { x: 70, y: 45, label: "", type: "C" },
        { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" },
        { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },  { from: 7, to: 8, type: 1 },
        { from: 8, to: 9, type: 1 },  { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 },  { from: 7, to: 2, type: 1 },
        { from: 8, to: 3, type: 1 },  { from: 9, to: 4, type: 1 },
        { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 9,
    name: "Kyselina N-acetylneuraminová",
    engName: "N-Acetylneuraminic acid",
    nameDe: "N-Acetylneuraminsäure",
    nameFr: "Acide N-acétylneuraminique",
    code3: "Neu5Ac",
    group: "acidic",
    groupCz: "Sialová kyselina (9-uhlíkatý cukr)",
    formula: "C11H19NO9",
    condensed: "Neu5Ac / Sia",
    desc: "Dominantní sialová kyselina u lidí, nese záporný náboj na povrchu buněk a slouží jako receptor viru chřipky.",
    descEn: "Predominant sialic acid in humans, provides negative surface charge and receptor for influenza.",
    descDe: "Dominierende Sialinsäure beim Menschen, verleiht negative Oberflächenladung.",
    descFr: "Acide sialique prédominant chez l'homme, confère une charge négative à la surface cellulaire.",
    smiles: "CC(=O)NC1C(O)CC(O)(C(=O)O)OC1C(O)C(O)CO",
    snfg: { shape: "diamond", color: "#8B008B", label: "Neu5Ac" },
    structure: {
      atoms: [
        { x: 65, y: 30, label: "O", type: "O" },
        { x: 82, y: 45, label: "COOH", type: "O" },
        { x: 70, y: 72, label: "OH", type: "O" },
        { x: 45, y: 78, label: "NHAc", type: "N" },
        { x: 20, y: 55, label: "Glycerol", type: "C" },
        { x: 75, y: 45, label: "", type: "C" },
        { x: 62, y: 60, label: "", type: "C" },
        { x: 45, y: 60, label: "", type: "C" },
        { x: 32, y: 45, label: "", type: "C" },
        { x: 45, y: 35, label: "", type: "C" }
      ],
      bonds: [
        { from: 9, to: 0, type: 1 }, { from: 0, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 },
        { from: 5, to: 1, type: 1 }, { from: 6, to: 2, type: 1 },
        { from: 7, to: 3, type: 1 }, { from: 8, to: 4, type: 1 }
      ]
    }
  },
  {
    id: 10,
    name: "Kyselina D-glukuronová",
    engName: "D-Glucuronic acid",
    nameDe: "D-Glucuronsäure",
    nameFr: "Acide D-glucuronique",
    code3: "GlcA",
    group: "acidic",
    groupCz: "Uronová kyselina (C6-oxidovaná glukosa)",
    formula: "C6H10O7",
    condensed: "HOOC(CHOH)₄CHO",
    desc: "Oxidovaná forma glukosy na C6, složka glycosaminoglykanů (hyaluronan, heparan sulfát) a detoxikační konjugát v játrech.",
    descEn: "Oxidized form of glucose at C6, component of glycosaminoglycans and liver detoxification.",
    descDe: "Oxidierte Form der Glucose an C6, Bestandteil von Glykosaminoglykanen.",
    descFr: "Forme oxydée du glucose en C6, composant des glycosaminoglycanes.",
    smiles: "O=C(O)[C@@H]1O[C@H](O)[C@H](O)[C@@H](O)[C@@H]1O",
    snfg: { shape: "divided-diamond", color: "#005BCB", secondaryColor: "#89CFF0", label: "GlcA" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" },
        { x: 80, y: 45, label: "OH", type: "O" },
        { x: 65, y: 70, label: "OH", type: "O" },
        { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" },
        { x: 22, y: 15, label: "HOOC", type: "O" },
        { x: 70, y: 45, label: "", type: "C" },
        { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" },
        { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },  { from: 7, to: 8, type: 1 },
        { from: 8, to: 9, type: 1 },  { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 },  { from: 7, to: 2, type: 1 },
        { from: 8, to: 3, type: 1 },  { from: 9, to: 4, type: 1 },
        { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 11,
    name: "D-Arabinosa",
    engName: "D-Arabinose",
    nameDe: "D-Arabinose",
    nameFr: "D-Arabinose",
    code3: "Ara",
    group: "pentose",
    groupCz: "Aldopentosa (C2-epimer ribosy)",
    formula: "C5H10O5",
    condensed: "CH₂OH(CHOH)₃CHO",
    desc: "Aldopentosa přítomná v rostlinných arabinogalaktanech a v buněčné stěně mykobakterií (arabinogalaktan TBC).",
    descEn: "Aldopentose present in plant arabinogalactans and mycobacterial cell wall.",
    descDe: "Aldopentose in pflanzlichen Arabinogalactanen und mykobakterieller Zellwand.",
    descFr: "Aldopentose présente dans les arabinogalactanes végétaux et la paroi mycobactérienne.",
    smiles: "OC[C@@H]1O[C@H](O)[C@@H](O)[C@@H]1O",
    snfg: { shape: "star", color: "#00A651", label: "Ara" },
    structure: {
      atoms: [
        { x: 50, y: 22, label: "O", type: "O" },
        { x: 72, y: 40, label: "", type: "C" },
        { x: 62, y: 68, label: "", type: "C" },
        { x: 38, y: 68, label: "", type: "C" },
        { x: 28, y: 40, label: "", type: "C" },
        { x: 86, y: 45, label: "OH", type: "O" },
        { x: 68, y: 84, label: "OH", type: "O" },
        { x: 32, y: 84, label: "OH", type: "O" },
        { x: 15, y: 28, label: "HOCH₂", type: "C" }
      ],
      bonds: [
        { from: 4, to: 0, type: 1 }, { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 },
        { from: 3, to: 4, type: 1 }, { from: 1, to: 5, type: 1 },
        { from: 2, to: 6, type: 1 }, { from: 3, to: 7, type: 1 },
        { from: 4, to: 8, type: 1 }
      ]
    }
  },
  {
    id: 12,
    name: "D-Glyceraldehyd",
    engName: "D-Glyceraldehyde",
    nameDe: "D-Glycerinaldehyd",
    nameFr: "D-Glycéraldéhyde",
    code3: "Gra",
    group: "triose",
    groupCz: "Najjednodušší aldotriosa",
    formula: "C3H6O3",
    condensed: "CH₂OHCHOHCHO",
    desc: "Nejjednodušší aldotriosa, referenční standard D/L konfigurační řady všech sacharidů.",
    descEn: "Simplest aldotriose, reference standard for D/L absolute configuration of sugars.",
    descDe: "Einfachste Aldotriose, Referenzstandard der D/L-Konfiguration.",
    descFr: "L'aldotriose le plus simple, étalon de référence pour la configuration D/L.",
    smiles: "OCC(O)C=O",
    snfg: { shape: "rectangle", color: "#808080", label: "Gra" },
    structure: {
      atoms: [
        { x: 50, y: 20, label: "CHO", type: "C" },
        { x: 50, y: 50, label: "", type: "C" },
        { x: 25, y: 50, label: "H", type: "H" },
        { x: 75, y: 50, label: "OH", type: "O" },
        { x: 50, y: 80, label: "CH₂OH", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 1, to: 3, type: 1 }, { from: 1, to: 4, type: 1 }
      ]
    }
  },

  // ─── 13 to 20 (q=4 Expansion Set - 21 Sugars Total) ───────────────────────
  {
    id: 13,
    name: "D-Glukosamin",
    engName: "D-Glucosamine",
    nameDe: "D-Glucosamin",
    nameFr: "D-Glucosamine",
    code3: "GlcN",
    group: "hexosamine",
    groupCz: "2-Amino-2-deoxy-D-glukosa",
    formula: "C6H13NO5",
    condensed: "CH₂OH(CHOH)₃CH(NH₂)CHO",
    desc: "Prekurzor glycosaminoglykanů, přirozeně přítomný v kloubní chrupavce.",
    descEn: "Precursor of glycosaminoglycans, naturally present in joint cartilage.",
    descDe: "Vorläufer von Glykosaminoglykanen, natürlich in Gelenkknorpeln enthalten.",
    descFr: "Précurseur des glycosaminoglycanes, présent dans le cartilage articulaire.",
    smiles: "NC1C(O)OC(CO)C(O)C1O",
    snfg: { shape: "divided-square", color: "#005BCB", secondaryColor: "#ffffff", label: "GlcN" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 65, y: 70, label: "NH₂", type: "N" }, { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" }, { x: 22, y: 15, label: "HOCH₂", type: "C" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 14,
    name: "D-Galaktosamin",
    engName: "D-Galactosamine",
    nameDe: "D-Galactosamin",
    nameFr: "D-Galactosamine",
    code3: "GalN",
    group: "hexosamine",
    groupCz: "2-Amino-2-deoxy-D-galaktosa",
    formula: "C6H13NO5",
    condensed: "CH₂OH(CHOH)₃CH(NH₂)CHO",
    desc: "Aminosacharid obsažený v chondroitin sulfátu a některých hormonálních glykoproteinech.",
    descEn: "Amino sugar contained in chondroitin sulfate and glycoprotein hormones.",
    descDe: "Aminozucker in Chondroitinsulfat und Glykoproteinhormonen.",
    descFr: "Sucre aminé contenu dans le sulfate de chondroïtine.",
    smiles: "NC1C(O)OC(CO)C(O)C1O",
    snfg: { shape: "divided-square", color: "#FFD700", secondaryColor: "#ffffff", label: "GalN" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 65, y: 70, label: "NH₂", type: "N" }, { x: 35, y: 70, label: "OH", type: "O" },
        { x: 15, y: 35, label: "HO", type: "O" }, { x: 25, y: 12, label: "HOCH₂", type: "C" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 15,
    name: "N-Acetylmanosamin",
    engName: "N-Acetylmannosamine",
    nameDe: "N-Acetylmannosamin",
    nameFr: "N-Acétylmannosamine",
    code3: "ManNAc",
    group: "hexosamine",
    groupCz: "N-Acetylovaný aminosacharid",
    formula: "C8H15NO6",
    condensed: "ManNAc",
    desc: "Klíčový meziprodukt biosyntézy sialových kyselin (Neu5Ac) v živých buňkách.",
    descEn: "Key intermediate in the biosynthesis of sialic acids (Neu5Ac).",
    descDe: "Schlüsselzwischenprodukt der Biosynthese von Sialinsäuren.",
    descFr: "Intermédiaire clé de la biosynthèse des acides sialiques.",
    smiles: "CC(=O)NC1C(O)OC(CO)C(O)C1O",
    snfg: { shape: "square", color: "#00A651", label: "ManNAc" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 60, y: 80, label: "NHAc", type: "N" }, { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" }, { x: 22, y: 15, label: "HOCH₂", type: "C" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 16,
    name: "Kyselina D-galakturonová",
    engName: "D-Galacturonic acid",
    nameDe: "D-Galacturonsäure",
    nameFr: "Acide D-galacturonique",
    code3: "GalA",
    group: "acidic",
    groupCz: "Uronová kyselina (Pektin)",
    formula: "C6H10O7",
    condensed: "HOOC(CHOH)₄CHO",
    desc: "Monomer pektinu v rostlinných buněčných stěnách.",
    descEn: "Major monomer component of pectin in plant cell walls.",
    descDe: "Hauptmonomer von Pektin in pflanzlichen Zellwänden.",
    descFr: "Monomère principal de la pectine des parois végétales.",
    smiles: "O=C(O)[C@H]1O[C@H](O)[C@H](O)[C@@H](O)[C@@H]1O",
    snfg: { shape: "divided-diamond", color: "#FFD700", secondaryColor: "#89CFF0", label: "GalA" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 65, y: 70, label: "OH", type: "O" }, { x: 35, y: 70, label: "OH", type: "O" },
        { x: 15, y: 35, label: "HO", type: "O" }, { x: 25, y: 12, label: "HOOC", type: "O" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 17,
    name: "L-Rhamnosa",
    engName: "L-Rhamnose",
    nameDe: "L-Rhamnose",
    nameFr: "L-Rhamnose",
    code3: "Rha",
    group: "deoxy",
    groupCz: "6-Deoxy-L-manosa",
    formula: "C6H12O5",
    condensed: "CH₃(CHOH)₄CHO",
    desc: "Deoxysacharid v rostlinných glykosidech a bakteriálních lipopolysacharidech.",
    descEn: "Deoxysugar present in plant glycosides and bacterial LPS.",
    descDe: "Deoxyszucker in Pflanzenglykosiden und bakteriellem LPS.",
    descFr: "Désoxysucre présent dans les glycosides végétaux.",
    smiles: "C[C@H]1O[C@H](O)[C@@H](O)[C@@H](O)[C@@H]1O",
    snfg: { shape: "triangle", color: "#00A651", label: "Rha" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 60, y: 80, label: "HO", type: "O" }, { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" }, { x: 22, y: 15, label: "CH₃", type: "C" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 18,
    name: "2-Deoxy-D-ribosa",
    engName: "2-Deoxy-D-ribose",
    nameDe: "2-Desoxy-D-ribose",
    nameFr: "2-Désoxy-D-ribose",
    code3: "dRib",
    group: "deoxy",
    groupCz: "Deoxysacharid (DNK)",
    formula: "C5H10O4",
    condensed: "dRib",
    desc: "Sacharidová složka řetězce deoxynukleové kyseliny (DNK).",
    descEn: "Monosaccharide component of the deoxyribonucleic acid (DNA) backbone.",
    descDe: "Monosaccharid-Baustein des DNA-Rückgrats.",
    descFr: "Composant glucidique du squelette de l'ADN.",
    smiles: "OC[C@@H]1O[C@H](O)CC1O",
    snfg: { shape: "star", color: "#FF69B4", label: "dRib" },
    structure: {
      atoms: [
        { x: 50, y: 22, label: "O", type: "O" }, { x: 72, y: 40, label: "", type: "C" },
        { x: 62, y: 68, label: "", type: "C" }, { x: 38, y: 68, label: "", type: "C" },
        { x: 28, y: 40, label: "", type: "C" }, { x: 86, y: 45, label: "OH", type: "O" },
        { x: 32, y: 84, label: "OH", type: "O" }, { x: 15, y: 28, label: "HOCH₂", type: "C" }
      ],
      bonds: [
        { from: 4, to: 0, type: 1 }, { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }, { from: 1, to: 5, type: 1 },
        { from: 3, to: 6, type: 1 }, { from: 4, to: 7, type: 1 }
      ]
    }
  },
  {
    id: 19,
    name: "Sacharosa",
    engName: "Sucrose",
    nameDe: "Saccharose",
    nameFr: "Sucrose",
    code3: "Suc",
    group: "disaccharide",
    groupCz: "Disacharid (Glc α1-2β Fru)",
    formula: "C12H22O11",
    condensed: "Glc(α1-2β)Fru",
    desc: "Běžný řepný nebo třtinový cukr, neredukující disacharid složený z glukosy a fruktosy.",
    descEn: "Common table sugar, non-reducing disaccharide composed of glucose and fructose.",
    descDe: "Haushaltszucker, nicht-reduzierendes Disaccharid aus Glucose und Fructose.",
    descFr: "Sucre de table, disaccharide non réducteur composé de glucose et fructose.",
    smiles: "OC[C@H]1O[C@@H](O[C@]2(CO)O[C@H](CO)[C@@H](O)[C@@H]2O)[C@H](O)[C@@H](O)[C@@H]1O",
    snfg: { shape: "circle", color: "#005BCB", label: "Suc" },
    structure: {
      atoms: [
        { x: 30, y: 50, label: "Glc", type: "C" },
        { x: 50, y: 50, label: "O", type: "O" },
        { x: 70, y: 50, label: "Fru", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },
  {
    id: 20,
    name: "Laktosa",
    engName: "Lactose",
    nameDe: "Lactose",
    nameFr: "Lactose",
    code3: "Lac",
    group: "disaccharide",
    groupCz: "Disacharid (Gal β1-4 Glc)",
    formula: "C12H22O11",
    condensed: "Gal(β1-4)Glc",
    desc: "Mléčný cukr, redukující disacharid složený z galaktosy a glukosy spojených β(1→4) vazbou.",
    descEn: "Milk sugar, reducing disaccharide composed of galactose and glucose with β(1→4) bond.",
    descDe: "Milchzucker, reduzierendes Disaccharid aus Galactose und Glucose.",
    descFr: "Sucre du lait, disaccharide réducteur composé de galactose et glucose.",
    smiles: "OCC1OC(OC2C(CO)OC(O)C(O)C2O)C(O)C(O)C1O",
    snfg: { shape: "circle", color: "#FFD700", label: "Lac" },
    structure: {
      atoms: [
        { x: 30, y: 50, label: "Gal", type: "C" },
        { x: 50, y: 50, label: "O", type: "O" },
        { x: 70, y: 50, label: "Glc", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }
      ]
    }
  },

  // ─── 21 to 30 (q=5 Expansion Set - 31 Sugars Total) ───────────────────────
  {
    id: 21,
    name: "Maltosa",
    engName: "Maltose",
    nameDe: "Maltose",
    nameFr: "Maltose",
    code3: "Mal",
    group: "disaccharide",
    groupCz: "Disacharid (Glc α1-4 Glc)",
    formula: "C12H22O11",
    condensed: "Glc(α1-4)Glc",
    desc: "Sladový cukr vznikající štěpením škrobu α-amylasou.",
    descEn: "Malt sugar produced during starch hydrolysis by amylase.",
    descDe: "Malzzucker aus dem Stärkeabbau.",
    descFr: "Sucre de malt issu de l'hydrolyse de l'amidon.",
    smiles: "OCC1OC(OC2C(CO)OC(O)C(O)C2O)C(O)C(O)C1O",
    snfg: { shape: "circle", color: "#005BCB", label: "Mal" },
    structure: {
      atoms: [
        { x: 30, y: 50, label: "Glc", type: "C" }, { x: 50, y: 50, label: "O", type: "O" }, { x: 70, y: 50, label: "Glc", type: "C" }
      ],
      bonds: [ { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 } ]
    }
  },
  {
    id: 22,
    name: "Trehalosa",
    engName: "Trehalose",
    nameDe: "Trehalose",
    nameFr: "Tréhalose",
    code3: "Tre",
    group: "disaccharide",
    groupCz: "Neredukující disacharid (Glc α1-1α Glc)",
    formula: "C12H22O11",
    condensed: "Glc(α1-1α)Glc",
    desc: "Ochranný disacharid u hmyzu, hub a kvasinek chránící před vysušením a mrazem.",
    descEn: "Protective disaccharide in insects, fungi, and yeast against desiccation and freezing.",
    descDe: "Schutzdisaccharid in Pilzen und Insekten gegen Trockenheit und Kälte.",
    descFr: "Disaccharide protecteur chez les champignons et insectes.",
    smiles: "OCC1OC(OC2OC(CO)C(O)C(O)C2O)C(O)C(O)C1O",
    snfg: { shape: "circle", color: "#005BCB", label: "Tre" },
    structure: {
      atoms: [
        { x: 30, y: 50, label: "Glc", type: "C" }, { x: 50, y: 50, label: "O", type: "O" }, { x: 70, y: 50, label: "Glc", type: "C" }
      ],
      bonds: [ { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 } ]
    }
  },
  {
    id: 23,
    name: "Cellobiosa",
    engName: "Cellobiose",
    nameDe: "Cellobiose",
    nameFr: "Cellobiose",
    code3: "Cel",
    group: "disaccharide",
    groupCz: "Disacharid (Glc β1-4 Glc)",
    formula: "C12H22O11",
    condensed: "Glc(β1-4)Glc",
    desc: "Základní opakující se disacharidový prvek polymerní celulosy.",
    descEn: "Repeating disaccharide unit of the cellulose polymer.",
    descDe: "Wiederkehrende Disaccharideinheit der Cellulose.",
    descFr: "Unité disaccharidique répétitive de la cellulose.",
    smiles: "OCC1OC(OC2C(CO)OC(O)C(O)C2O)C(O)C(O)C1O",
    snfg: { shape: "circle", color: "#005BCB", label: "Cel" },
    structure: {
      atoms: [
        { x: 30, y: 50, label: "Glc", type: "C" }, { x: 50, y: 50, label: "O", type: "O" }, { x: 70, y: 50, label: "Glc", type: "C" }
      ],
      bonds: [ { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 } ]
    }
  },
  {
    id: 24,
    name: "Kyselina L-iduronová",
    engName: "L-Iduronic acid",
    nameDe: "L-Iduronsäure",
    nameFr: "Acide L-idurunique",
    code3: "IdoA",
    group: "acidic",
    groupCz: "Uronová kyselina (Dermatan/Heparan)",
    formula: "C6H10O7",
    condensed: "IdoA",
    desc: "Uronová kyselina klíčová pro vazbu antithrombinu v heparinu a dermatan sulfátu.",
    descEn: "Uronic acid key for antithrombin binding in heparin and dermatan sulfate.",
    descDe: "Uronsäure, wichtig für Antithrombin-Bindung in Heparin.",
    descFr: "Acide uronique majeur de l'héparine.",
    smiles: "O=C(O)C1OC(O)C(O)C(O)C1O",
    snfg: { shape: "divided-diamond", color: "#8B4513", secondaryColor: "#89CFF0", label: "IdoA" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 65, y: 70, label: "OH", type: "O" }, { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" }, { x: 22, y: 15, label: "HOOC", type: "O" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 25,
    name: "Kyselina N-glykolylneuraminová",
    engName: "N-Glycolylneuraminic acid",
    nameDe: "N-Glykolylneuraminsäure",
    nameFr: "Acide N-glycolylneuraminique",
    code3: "Neu5Gc",
    group: "acidic",
    groupCz: "Sialová kyselina (ne-lidská)",
    formula: "C11H19NO10",
    condensed: "Neu5Gc",
    desc: "Sialová kyselina běžná u savců, u lidí chybí z důvodu mutace v genu CMAH.",
    descEn: "Sialic acid common in mammals, absent in humans due to CMAH gene mutation.",
    descDe: "Sialinsäure bei Säugetieren, fehlt beim Menschen.",
    descFr: "Acide sialique présent chez les mammifères, absent chez l'homme.",
    smiles: "OCC(=O)NC1C(O)CC(O)(C(=O)O)OC1C(O)C(O)CO",
    snfg: { shape: "diamond", color: "#87CEEB", label: "Neu5Gc" },
    structure: {
      atoms: [
        { x: 65, y: 30, label: "O", type: "O" }, { x: 82, y: 45, label: "COOH", type: "O" },
        { x: 70, y: 72, label: "OH", type: "O" }, { x: 45, y: 78, label: "NHGc", type: "N" },
        { x: 20, y: 55, label: "Glycerol", type: "C" }, { x: 75, y: 45, label: "", type: "C" },
        { x: 62, y: 60, label: "", type: "C" }, { x: 45, y: 60, label: "", type: "C" },
        { x: 32, y: 45, label: "", type: "C" }, { x: 45, y: 35, label: "", type: "C" }
      ],
      bonds: [
        { from: 9, to: 0, type: 1 }, { from: 0, to: 5, type: 1 }, { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 },
        { from: 5, to: 1, type: 1 }, { from: 6, to: 2, type: 1 }, { from: 7, to: 3, type: 1 },
        { from: 8, to: 4, type: 1 }
      ]
    }
  },
  {
    id: 26,
    name: "Kyselina D-mannuronová",
    engName: "D-Mannuronic acid",
    nameDe: "D-Mannuronsäure",
    nameFr: "Acide D-mannuronique",
    code3: "ManA",
    group: "acidic",
    groupCz: "Uronová kyselina (Alginát)",
    formula: "C6H10O7",
    condensed: "ManA",
    desc: "Monomerní složka alginátů hnědých řas.",
    descEn: "Monomeric component of brown algae alginates.",
    descDe: "Monomereinheit von Alginaten aus Braunalgen.",
    descFr: "Composant monomérique de l'alginate d'algues brunes.",
    smiles: "O=C(O)C1OC(O)C(O)C(O)C1O",
    snfg: { shape: "divided-diamond", color: "#00A651", secondaryColor: "#89CFF0", label: "ManA" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 60, y: 80, label: "HO", type: "O" }, { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" }, { x: 22, y: 15, label: "HOOC", type: "O" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 27,
    name: "D-Alosa",
    engName: "D-Allose",
    nameDe: "D-Allose",
    nameFr: "D-Allose",
    code3: "All",
    group: "hexose",
    groupCz: "Vzácná aldohexosa (C3-epimer glukosy)",
    formula: "C6H12O6",
    condensed: "CH₂OH(CHOH)₄CHO",
    desc: "Vzácná aldohexosa s antineoplastickým a protizánětlivým účinkem.",
    descEn: "Rare aldohexose with antineoplastic and anti-inflammatory activity.",
    descDe: "Seltene Aldohexose mit entzündungshemmenden Eigenschaften.",
    descFr: "Aldohexose rare ayant des propriétés anti-inflammatoires.",
    smiles: "OCC1OC(O)C(O)C(O)C1O",
    snfg: { shape: "circle", color: "#FF69B4", label: "All" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 65, y: 70, label: "OH", type: "O" }, { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" }, { x: 22, y: 15, label: "HOCH₂", type: "C" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 28,
    name: "D-Altrosa",
    engName: "D-Altrose",
    nameDe: "D-Altrose",
    nameFr: "D-Altrose",
    code3: "Alt",
    group: "hexose",
    groupCz: "Vzácná aldohexosa",
    formula: "C6H12O6",
    condensed: "CH₂OH(CHOH)₄CHO",
    desc: "Vzácný monosacharid nerozpustný v alkoholu.",
    descEn: "Rare monosaccharide insoluble in alcohol.",
    descDe: "Seltenes Monosaccharid.",
    descFr: "Monosaccharide rare.",
    smiles: "OCC1OC(O)C(O)C(O)C1O",
    snfg: { shape: "circle", color: "#9ACD32", label: "Alt" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 65, y: 70, label: "OH", type: "O" }, { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" }, { x: 22, y: 15, label: "HOCH₂", type: "C" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 29,
    name: "D-Gulosa",
    engName: "D-Gulose",
    nameDe: "D-Gulose",
    nameFr: "D-Gulose",
    code3: "Gul",
    group: "hexose",
    groupCz: "Vzácná aldohexosa",
    formula: "C6H12O6",
    condensed: "CH₂OH(CHOH)₄CHO",
    desc: "C3-epimer galaktosy, nepřirozený aldohexosový isomer.",
    descEn: "C3-epimer of galactose, unnatural aldohexose isomer.",
    descDe: "C3-Epimer der Galactose.",
    descFr: "Épimère C3 du galactose.",
    smiles: "OCC1OC(O)C(O)C(O)C1O",
    snfg: { shape: "circle", color: "#FF8C00", label: "Gul" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 65, y: 70, label: "OH", type: "O" }, { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" }, { x: 22, y: 15, label: "HOCH₂", type: "C" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 30,
    name: "D-Idosa",
    engName: "D-Idose",
    nameDe: "D-Idose",
    nameFr: "D-Idose",
    code3: "Ido",
    group: "hexose",
    groupCz: "Vzácná aldohexosa",
    formula: "C6H12O6",
    condensed: "CH₂OH(CHOH)₄CHO",
    desc: "Aldohexosa, jejíž uronová kyselina (IdoA) je klíčovou složkou heparinu.",
    descEn: "Aldohexose whose uronic acid derivative (IdoA) is key in heparin.",
    descDe: "Aldohexose, deren Uronsäure im Heparin vorkommt.",
    descFr: "Aldohexose dont l'acide uronique est présent dans l'héparine.",
    smiles: "OCC1OC(O)C(O)C(O)C1O",
    snfg: { shape: "circle", color: "#8B4513", label: "Ido" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 65, y: 70, label: "OH", type: "O" }, { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" }, { x: 22, y: 15, label: "HOCH₂", type: "C" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },

  // ─── 31 to 56 (q=7 SNFG Atlas Full Set - 57 Sugars Total) ────────────────
  {
    id: 31,
    name: "D-Talosa",
    engName: "D-Talose",
    nameDe: "D-Talose",
    nameFr: "D-Talose",
    code3: "Tal",
    group: "hexose",
    groupCz: "Hexosa (C2-epimer galaktosy)",
    formula: "C6H12O6",
    condensed: "CH₂OH(CHOH)₄CHO",
    desc: "C2-epimer galaktosy, vzácný přírodní aldohexosový cukr.",
    descEn: "C2-epimer of galactose, rare natural aldohexose.",
    descDe: "C2-Epimer der Galactose.",
    descFr: "Épimère C2 du galactose.",
    smiles: "OCC1OC(O)C(O)C(O)C1O",
    snfg: { shape: "circle", color: "#87CEEB", label: "Tal" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 65, y: 70, label: "OH", type: "O" }, { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" }, { x: 22, y: 15, label: "HOCH₂", type: "C" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 32,
    name: "L-Sorbosa",
    engName: "L-Sorbose",
    nameDe: "L-Sorbose",
    nameFr: "L-Sorbose",
    code3: "Sor",
    group: "hexose",
    groupCz: "Ketohexosa (Prekurzor vit. C)",
    formula: "C6H12O6",
    condensed: "Sor",
    desc: "Ketohexosa s konfigurací podobnou fruktose, průmyslový meziprodukt syntézy vitaminu C.",
    descEn: "Ketohexose, industrial intermediate in vitamin C synthesis.",
    descDe: "Ketohexose, Zwischenprodukt der Vitamin-C-Synthese.",
    descFr: "Kétohexose, intermédiaire dans la synthèse de la vitamine C.",
    smiles: "OCC1OC(O)C(O)C(O)C1CO",
    snfg: { shape: "circle", color: "#FF8C00", label: "Sor" },
    structure: {
      atoms: [
        { x: 50, y: 22, label: "O", type: "O" }, { x: 72, y: 40, label: "", type: "C" },
        { x: 62, y: 68, label: "", type: "C" }, { x: 38, y: 68, label: "", type: "C" },
        { x: 28, y: 40, label: "", type: "C" }, { x: 88, y: 32, label: "CH₂OH", type: "C" },
        { x: 12, y: 32, label: "HOCH₂", type: "C" }
      ],
      bonds: [
        { from: 4, to: 0, type: 1 }, { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }, { from: 1, to: 5, type: 1 },
        { from: 4, to: 6, type: 1 }
      ]
    }
  },
  {
    id: 33,
    name: "D-Tagatosa",
    engName: "D-Tagatose",
    nameDe: "D-Tagatose",
    nameFr: "D-Tagatose",
    code3: "Tag",
    group: "hexose",
    groupCz: "Ketohexosa (Nízkokalorické sladidlo)",
    formula: "C6H12O6",
    condensed: "Tag",
    desc: "Ketohexosa (C4-epimer fruktosy) používaná jako nízkokalorické sladidlo s nízkým glykemickým indexem.",
    descEn: "Ketohexose used as a low-calorie sweetener with low glycemic index.",
    descDe: "Ketohexose, kaloriensarmer Süßstoff.",
    descFr: "Kétohexose utilisée comme édulcorant faible en calories.",
    smiles: "OCC1OC(O)C(O)C(O)C1CO",
    snfg: { shape: "circle", color: "#FFD700", label: "Tag" },
    structure: {
      atoms: [
        { x: 50, y: 22, label: "O", type: "O" }, { x: 72, y: 40, label: "", type: "C" },
        { x: 62, y: 68, label: "", type: "C" }, { x: 38, y: 68, label: "", type: "C" },
        { x: 28, y: 40, label: "", type: "C" }, { x: 88, y: 32, label: "CH₂OH", type: "C" },
        { x: 12, y: 32, label: "HOCH₂", type: "C" }
      ],
      bonds: [
        { from: 4, to: 0, type: 1 }, { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }, { from: 1, to: 5, type: 1 },
        { from: 4, to: 6, type: 1 }
      ]
    }
  },
  {
    id: 34,
    name: "D-Psikosa",
    engName: "D-Psicose / Allulose",
    nameDe: "D-Psicose / Allulose",
    nameFr: "D-Psicose / Allulose",
    code3: "Psi",
    group: "hexose",
    groupCz: "Ketohexosa (Allulosa)",
    formula: "C6H12O6",
    condensed: "Psi",
    desc: "Vzácný monosacharid (C3-epimer fruktosy), známý jako allulosa, s minimálním energetickým obsahem.",
    descEn: "Rare monosaccharide known as allulose with ultra-low caloric density.",
    descDe: "Seltenes Monosaccharid (Allulose) mit minimalen Kalorien.",
    descFr: "Monosaccharide rare (allulose) très faible en calories.",
    smiles: "OCC1OC(O)C(O)C(O)C1CO",
    snfg: { shape: "circle", color: "#FF69B4", label: "Psi" },
    structure: {
      atoms: [
        { x: 50, y: 22, label: "O", type: "O" }, { x: 72, y: 40, label: "", type: "C" },
        { x: 62, y: 68, label: "", type: "C" }, { x: 38, y: 68, label: "", type: "C" },
        { x: 28, y: 40, label: "", type: "C" }, { x: 88, y: 32, label: "CH₂OH", type: "C" },
        { x: 12, y: 32, label: "HOCH₂", type: "C" }
      ],
      bonds: [
        { from: 4, to: 0, type: 1 }, { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }, { from: 1, to: 5, type: 1 },
        { from: 4, to: 6, type: 1 }
      ]
    }
  },
  {
    id: 35,
    name: "D-Lyxosa",
    engName: "D-Lyxose",
    nameDe: "D-Lyxose",
    nameFr: "D-Lyxose",
    code3: "Lyx",
    group: "pentose",
    groupCz: "Aldopentosa (C2-epimer xylose)",
    formula: "C5H10O5",
    condensed: "Lyx",
    desc: "Vzácná aldoopentosa nalézaná v bakteriálních glycolipidech.",
    descEn: "Rare aldopentose found in bacterial glycolipids.",
    descDe: "Seltene Aldopentose in bakteriellen Glykolipiden.",
    descFr: "Aldopentose rare présente dans certains glycolipides.",
    smiles: "OCC1OC(O)C(O)C1O",
    snfg: { shape: "star", color: "#FFD700", label: "Lyx" },
    structure: {
      atoms: [
        { x: 50, y: 22, label: "O", type: "O" }, { x: 72, y: 40, label: "", type: "C" },
        { x: 62, y: 68, label: "", type: "C" }, { x: 38, y: 68, label: "", type: "C" },
        { x: 28, y: 40, label: "", type: "C" }, { x: 86, y: 45, label: "OH", type: "O" }
      ],
      bonds: [
        { from: 4, to: 0, type: 1 }, { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }, { from: 1, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 36,
    name: "D-Ribulosa",
    engName: "D-Ribulose",
    nameDe: "D-Ribulose",
    nameFr: "D-Ribulose",
    code3: "Rbu",
    group: "pentose",
    groupCz: "Ketopentosa (Calvinův cyklus)",
    formula: "C5H10O5",
    condensed: "Rbu",
    desc: "Ketopentosa, její 1,5-bisdufostát je akceptorem CO2 v fotosyntéze (RuBisCO).",
    descEn: "Ketopentose whose 1,5-bisphosphate accepts CO2 in photosynthesis.",
    descDe: "Ketopentose, deren 1,5-Bisphosphat CO2 in der Fotosynthese fixiert.",
    descFr: "Kétopentose dont le 1,5-bisphosphate fixe le CO2 lors de la photosynthèse.",
    smiles: "OCC(=O)C(O)C(O)CO",
    snfg: { shape: "star", color: "#FF69B4", label: "Rbu" },
    structure: {
      atoms: [
        { x: 50, y: 22, label: "O", type: "O" }, { x: 72, y: 40, label: "", type: "C" },
        { x: 62, y: 68, label: "", type: "C" }, { x: 38, y: 68, label: "", type: "C" },
        { x: 28, y: 40, label: "", type: "C" }
      ],
      bonds: [
        { from: 4, to: 0, type: 1 }, { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }
      ]
    }
  },
  {
    id: 37,
    name: "D-Xylulosa",
    engName: "D-Xylulose",
    nameDe: "D-Xylulose",
    nameFr: "D-Xylulose",
    code3: "Xxu",
    group: "pentose",
    groupCz: "Ketopentosa (Pentosový cyklus)",
    formula: "C5H10O5",
    condensed: "Xxu",
    desc: "Ketopentosový meziprodukt pentosofosfátové dráhy.",
    descEn: "Ketopentose intermediate of the pentose phosphate pathway.",
    descDe: "Zwischenprodukt des Pentosephosphatwegs.",
    descFr: "Intermédiaire de la voie des pentoses phosphates.",
    smiles: "OCC(=O)C(O)C(O)CO",
    snfg: { shape: "star", color: "#FF8C00", label: "Xxu" },
    structure: {
      atoms: [
        { x: 50, y: 22, label: "O", type: "O" }, { x: 72, y: 40, label: "", type: "C" },
        { x: 62, y: 68, label: "", type: "C" }, { x: 38, y: 68, label: "", type: "C" },
        { x: 28, y: 40, label: "", type: "C" }
      ],
      bonds: [
        { from: 4, to: 0, type: 1 }, { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }
      ]
    }
  },
  {
    id: 38,
    name: "D-Manosamin",
    engName: "D-Mannosamine",
    nameDe: "D-Mannosamin",
    nameFr: "D-Mannosamine",
    code3: "ManN",
    group: "hexosamine",
    groupCz: "2-Amino-2-deoxy-D-manosa",
    formula: "C6H13NO5",
    condensed: "ManN",
    desc: "Hexosaminový prekurzor v bakteriálních polysacharidech.",
    descEn: "Hexosamine precursor in bacterial polysaccharides.",
    descDe: "Hexosamin-Vorläufer in bakteriellen Polysacchariden.",
    descFr: "Hexosamine présente dans les polysaccharides bactériens.",
    smiles: "NC1C(O)OC(CO)C(O)C1O",
    snfg: { shape: "divided-square", color: "#00A651", secondaryColor: "#ffffff", label: "ManN" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 60, y: 80, label: "NH₂", type: "N" }, { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" }, { x: 22, y: 15, label: "HOCH₂", type: "C" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 39,
    name: "D-Quinovosa",
    engName: "D-Quinovose",
    nameDe: "D-Quinovose",
    nameFr: "D-Quinovose",
    code3: "Qui",
    group: "deoxy",
    groupCz: "6-Deoxy-D-glukosa",
    formula: "C6H12O5",
    condensed: "Qui",
    desc: "6-Deoxyglukosa obsažená v sulfolipidech fotosyntetických thylakoidních membrán (SQDG).",
    descEn: "6-Deoxyglucose contained in plant thylakoid membrane sulfolipids (SQDG).",
    descDe: "6-Deoxyglucose in Pflanzensulfolipiden.",
    descFr: "6-Désoxyglucose présent dans les sulfolipides des thylakoïdes.",
    smiles: "CC1OC(O)C(O)C(O)C1O",
    snfg: { shape: "triangle", color: "#005BCB", label: "Qui" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 65, y: 70, label: "OH", type: "O" }, { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" }, { x: 22, y: 15, label: "CH₃", type: "C" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 40,
    name: "KDO",
    engName: "KDO (3-Deoxy-D-manno-oct-2-ulosonic acid)",
    nameDe: "KDO",
    nameFr: "KDO",
    code3: "Kdo",
    group: "acidic",
    groupCz: "Kyselina 8-uhlíkatá ulosonová (LPS)",
    formula: "C8H14O8",
    condensed: "Kdo",
    desc: "Unikátní 8-uhlíkatá sacharidová složka jádra gramnegativního bakteriálního lipopolysacharidu (LPS).",
    descEn: "8-carbon sugar essential in Gram-negative bacterial lipopolysaccharide core.",
    descDe: "Essentielle 8-Kohlenstoff-Säure im bakteriellem LPS.",
    descFr: "Sucre à 8 carbones essentiel du LPS bactérien.",
    smiles: "OC1(CC(O)C(O)C(O1)C(O)CO)C(=O)O",
    snfg: { shape: "diamond", color: "#FFD700", label: "Kdo" },
    structure: {
      atoms: [
        { x: 65, y: 30, label: "O", type: "O" }, { x: 82, y: 45, label: "COOH", type: "O" },
        { x: 70, y: 72, label: "OH", type: "O" }, { x: 45, y: 78, label: "OH", type: "O" },
        { x: 20, y: 55, label: "SideChain", type: "C" }, { x: 75, y: 45, label: "", type: "C" },
        { x: 62, y: 60, label: "", type: "C" }, { x: 45, y: 60, label: "", type: "C" },
        { x: 32, y: 45, label: "", type: "C" }, { x: 45, y: 35, label: "", type: "C" }
      ],
      bonds: [
        { from: 9, to: 0, type: 1 }, { from: 0, to: 5, type: 1 }, { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 },
        { from: 5, to: 1, type: 1 }, { from: 6, to: 2, type: 1 }, { from: 7, to: 3, type: 1 },
        { from: 8, to: 4, type: 1 }
      ]
    }
  },
  {
    id: 41,
    name: "Kyselina muramová",
    engName: "Muramic acid",
    nameDe: "Muraminsäure",
    nameFr: "Acide muramique",
    code3: "Mur",
    group: "hexosamine",
    groupCz: "Aminosacharid s kyselinou mléčnou",
    formula: "C9H17NO7",
    condensed: "Mur",
    desc: "Glukosamin etherově spojený na C3 s kyselinou mléčnou, základ peptidoglykanu.",
    descEn: "Glucosamine ether-linked at C3 to lactic acid, backbone of peptidoglycan.",
    descDe: "Glucosamin verethert mit Milchsäure an C3.",
    descFr: "Glucosamine liée à l'acide lactique en C3.",
    smiles: "CC(OC1C(CO)OC(O)C(N)C1O)C(=O)O",
    snfg: { shape: "divided-square", color: "#005BCB", secondaryColor: "#89CFF0", label: "Mur" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 65, y: 70, label: "NH₂", type: "N" }, { x: 35, y: 70, label: "Laktát", type: "C" },
        { x: 20, y: 45, label: "OH", type: "O" }, { x: 22, y: 15, label: "HOCH₂", type: "C" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 42,
    name: "Kyselina N-acetylmuramová",
    engName: "N-Acetylmuramic acid",
    nameDe: "N-Acetylmuraminsäure",
    nameFr: "Acide N-acétylmuramique",
    code3: "MurNAc",
    group: "hexosamine",
    groupCz: "Klíčová složka peptidoglykanu",
    formula: "C11H19NO8",
    condensed: "MurNAc",
    desc: "Základní stavební jednotka peptidoglykanové sítě bakteriálních buněčných stěn.",
    descEn: "Core building block of peptidoglycan in bacterial cell walls.",
    descDe: "Hauptbaustein des Peptidoglykans bakterieller Zellwände.",
    descFr: "Composant majeur du peptidoglycane de la paroi bactérienne.",
    smiles: "CC(=O)NC1C(O)OC(CO)C(OC(C)C(=O)O)C1O",
    snfg: { shape: "square", color: "#005BCB", label: "MurNAc" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 72, y: 75, label: "NHAc", type: "N" }, { x: 35, y: 70, label: "Laktát", type: "C" },
        { x: 20, y: 45, label: "OH", type: "O" }, { x: 22, y: 15, label: "HOCH₂", type: "C" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 43,
    name: "N-Acetylfukosamin",
    engName: "N-Acetylfucosamine",
    nameDe: "N-Acetylfucosamin",
    nameFr: "N-Acétylfucosamine",
    code3: "FucNAc",
    group: "deoxy",
    groupCz: "Deoxy-acetylamino-sacharid",
    formula: "C8H15NO5",
    condensed: "FucNAc",
    desc: "N-Acetylovaný 6-deoxysacharid obsažený v bakteriálních O-antigenech.",
    descEn: "N-Acetyl 6-deoxysugar present in bacterial O-antigens.",
    descDe: "N-Acetylierter Deoxyszucker in O-Antigenen.",
    descFr: "Sucre désoxy-acétylé des antigènes O bactériens.",
    smiles: "CC(=O)NC1C(O)OC(C)C(O)C1O",
    snfg: { shape: "triangle", color: "#E8000D", label: "FucNAc" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 72, y: 75, label: "NHAc", type: "N" }, { x: 35, y: 70, label: "OH", type: "O" },
        { x: 15, y: 35, label: "HO", type: "O" }, { x: 25, y: 12, label: "CH₃", type: "C" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 44,
    name: "N-Acetylrhamnosamin",
    engName: "N-Acetylrhamnosamine",
    nameDe: "N-Acetylrhamnosamin",
    nameFr: "N-Acétylrhamnosamine",
    code3: "RhaNAc",
    group: "deoxy",
    groupCz: "Deoxy-acetylamino-sacharid",
    formula: "C8H15NO5",
    condensed: "RhaNAc",
    desc: "Bakteriální deoxysacharid vyskytující se v povrchových kapsulárních polysacharidech.",
    descEn: "Bacterial deoxysugar found in capsular polysaccharides.",
    descDe: "Bakterieller Deoxyszucker in Kapselpolysacchariden.",
    descFr: "Sucre désoxy bactérien des polysaccharides capsulaires.",
    smiles: "CC(=O)NC1C(O)OC(C)C(O)C1O",
    snfg: { shape: "triangle", color: "#00A651", label: "RhaNAc" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 60, y: 80, label: "NHAc", type: "N" }, { x: 35, y: 70, label: "OH", type: "O" },
        { x: 20, y: 45, label: "OH", type: "O" }, { x: 22, y: 15, label: "CH₃", type: "C" },
        { x: 70, y: 45, label: "", type: "C" }, { x: 58, y: 60, label: "", type: "C" },
        { x: 42, y: 60, label: "", type: "C" }, { x: 30, y: 45, label: "", type: "C" },
        { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 10, to: 0, type: 1 }, { from: 0, to: 6, type: 1 }, { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 6, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }, { from: 10, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 45,
    name: "2-Deoxy-D-glukosa",
    engName: "2-Deoxy-D-glucose",
    nameDe: "2-Desoxy-D-glucose",
    nameFr: "2-Désoxy-D-glucose",
    code3: "2dGlc",
    group: "deoxy",
    groupCz: "Inhibitor glykolýzy",
    formula: "C6H12O5",
    condensed: "2dGlc",
    desc: "Analóg glukosy inhibující hexokinasu a glykolýzu v nádorových buňkách.",
    descEn: "Glucose analog that inhibits hexokinase and glycolysis in tumor cells.",
    descDe: "Glucose-Analog, inhibiert Hexokinase.",
    descFr: "Analogue du glucose inhibant la glycolyse.",
    smiles: "OCC1OC(O)CC(O)C1O",
    snfg: { shape: "circle", color: "#005BCB", label: "2dGlc" },
    structure: {
      atoms: [
        { x: 65, y: 25, label: "O", type: "O" }, { x: 80, y: 45, label: "OH", type: "O" },
        { x: 35, y: 70, label: "OH", type: "O" }, { x: 20, y: 45, label: "OH", type: "O" },
        { x: 22, y: 15, label: "HOCH₂", type: "C" }, { x: 70, y: 45, label: "", type: "C" },
        { x: 58, y: 60, label: "", type: "C" }, { x: 42, y: 60, label: "", type: "C" },
        { x: 30, y: 45, label: "", type: "C" }, { x: 42, y: 30, label: "", type: "C" }
      ],
      bonds: [
        { from: 9, to: 0, type: 1 }, { from: 0, to: 5, type: 1 }, { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 },
        { from: 5, to: 1, type: 1 }, { from: 7, to: 2, type: 1 }, { from: 8, to: 3, type: 1 },
        { from: 9, to: 4, type: 1 }
      ]
    }
  },
  {
    id: 46,
    name: "Isomaltosa",
    engName: "Isomaltose",
    nameDe: "Isomaltose",
    nameFr: "Isomaltose",
    code3: "Iso",
    group: "disaccharide",
    groupCz: "Disacharid (Glc α1-6 Glc)",
    formula: "C12H22O11",
    condensed: "Glc(α1-6)Glc",
    desc: "Disacharid představující rozvětvení v amylopektinu a glykogenu.",
    descEn: "Disaccharide representing branch points in amylopectin and glycogen.",
    descDe: "Disaccharid an Verzweigungspunkten in Glykogen.",
    descFr: "Disaccharide représentant les points de ramification du glycogène.",
    smiles: "OCC1OC(OCC2OC(O)C(O)C(O)C2O)C(O)C(O)C1O",
    snfg: { shape: "circle", color: "#005BCB", label: "Iso" },
    structure: {
      atoms: [
        { x: 30, y: 50, label: "Glc", type: "C" }, { x: 50, y: 50, label: "O", type: "O" }, { x: 70, y: 50, label: "Glc", type: "C" }
      ],
      bonds: [ { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 } ]
    }
  },
  {
    id: 47,
    name: "Melibiosa",
    engName: "Melibiose",
    nameDe: "Melibiose",
    nameFr: "Melibiose",
    code3: "Mel",
    group: "disaccharide",
    groupCz: "Disacharid (Gal α1-6 Glc)",
    formula: "C12H22O11",
    condensed: "Gal(α1-6)Glc",
    desc: "Redukující disacharid získaný ze štěpení raffinosa.",
    descEn: "Reducing disaccharide formed by cleavage of raffinose.",
    descDe: "Reduzierendes Disaccharid aus Raffinose-Spaltung.",
    descFr: "Disaccharide réducteur issu de la raffinose.",
    smiles: "OCC1OC(OCC2OC(O)C(O)C(O)C2O)C(O)C(O)C1O",
    snfg: { shape: "circle", color: "#FFD700", label: "Mel" },
    structure: {
      atoms: [
        { x: 30, y: 50, label: "Gal", type: "C" }, { x: 50, y: 50, label: "O", type: "O" }, { x: 70, y: 50, label: "Glc", type: "C" }
      ],
      bonds: [ { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 } ]
    }
  },
  {
    id: 48,
    name: "N,N'-Diacetylchitobiosa",
    engName: "Chitobiose",
    nameDe: "Chitobiose",
    nameFr: "Chitobiose",
    code3: "Chb",
    group: "disaccharide",
    groupCz: "Disacharid (GlcNAc β1-4 GlcNAc)",
    formula: "C16H28N2O11",
    condensed: "GlcNAc(β1-4)GlcNAc",
    desc: "Opakující se dimer chitinu a jádrový motiv všech N-glykanů.",
    descEn: "Repeating dimer of chitin and core motif of all N-glycans.",
    descDe: "Wiederkehrender Dimer von Chitin und Kern-Motiv aller N-Glykane.",
    descFr: "Dimère répétitif de la chitine et noyau des N-glycanes.",
    smiles: "CC(=O)NC1C(O)OC(CO)C(OC2C(CO)OC(O)C(NHAc)C2O)C1O",
    snfg: { shape: "square", color: "#005BCB", label: "Chb" },
    structure: {
      atoms: [
        { x: 30, y: 50, label: "GlcNAc", type: "C" }, { x: 50, y: 50, label: "O", type: "O" }, { x: 70, y: 50, label: "GlcNAc", type: "C" }
      ],
      bonds: [ { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 } ]
    }
  },
  {
    id: 49,
    name: "Gentiobiosa",
    engName: "Gentiobiose",
    nameDe: "Gentiobiose",
    nameFr: "Gentiobiose",
    code3: "Gnb",
    group: "disaccharide",
    groupCz: "Disacharid (Glc β1-6 Glc)",
    formula: "C12H22O11",
    condensed: "Glc(β1-6)Glc",
    desc: "Disacharid přítomný v crocinu (barvivo šafránu) a amygdalinu.",
    descEn: "Disaccharide present in crocin (saffron pigment) and amygdalin.",
    descDe: "Disaccharid in Safran-Farbstoffen.",
    descFr: "Disaccharide présent dans le safran.",
    smiles: "OCC1OC(OCC2OC(O)C(O)C(O)C2O)C(O)C(O)C1O",
    snfg: { shape: "circle", color: "#005BCB", label: "Gnb" },
    structure: {
      atoms: [
        { x: 30, y: 50, label: "Glc", type: "C" }, { x: 50, y: 50, label: "O", type: "O" }, { x: 70, y: 50, label: "Glc", type: "C" }
      ],
      bonds: [ { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 } ]
    }
  },
  {
    id: 50,
    name: "N-Acetyllaktosamin",
    engName: "N-Acetyllactosamine",
    nameDe: "N-Acetyllactosamin",
    nameFr: "N-Acétyllactosamine",
    code3: "LacNAc",
    group: "disaccharide",
    groupCz: "Disacharid (Gal β1-4 GlcNAc)",
    formula: "C14H25NO11",
    condensed: "Gal(β1-4)GlcNAc",
    desc: "Klíčový disacharidový prvek v komplexních N-glykanech a antigenových větvích.",
    descEn: "Key disaccharide unit in complex N-glycans and antigen branches.",
    descDe: "Wichtiges Disaccharid in komplexen N-Glykanen.",
    descFr: "Motif disaccharidique majeur des N-glycanes complexes.",
    smiles: "CC(=O)NC1C(O)OC(CO)C(OC2C(CO)OC(O)C(O)C2O)C1O",
    snfg: { shape: "square", color: "#005BCB", label: "LacNAc" },
    structure: {
      atoms: [
        { x: 30, y: 50, label: "Gal", type: "C" }, { x: 50, y: 50, label: "O", type: "O" }, { x: 70, y: 50, label: "GlcNAc", type: "C" }
      ],
      bonds: [ { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 } ]
    }
  },
  {
    id: 51,
    name: "Raffinosa",
    engName: "Raffinoses",
    nameDe: "Raffinose",
    nameFr: "Raffinose",
    code3: "Raf",
    group: "oligosaccharide",
    groupCz: "Trisacharid (Gal α1-6 Glc α1-2β Fru)",
    formula: "C18H32O16",
    condensed: "Gal(α1-6)Glc(α1-2β)Fru",
    desc: "Trisacharid v luštěninách způsobený nadýmáním kvůli absenci α-galaktosidasy u lidí.",
    descEn: "Trisaccharide in legumes causing flatulence due to lack of human α-galactosidase.",
    descDe: "Trisaccharid in Hülsenfrüchten.",
    descFr: "Trisaccharide présent dans les légumineuses.",
    smiles: "OCC1OC(OC2(CO)OC(CO)C(O)C2O)C(O)C(O)C1OCC3OC(O)C(O)C(O)C3O",
    snfg: { shape: "circle", color: "#FFD700", label: "Raf" },
    structure: {
      atoms: [
        { x: 20, y: 50, label: "Gal", type: "C" }, { x: 50, y: 50, label: "Glc", type: "C" }, { x: 80, y: 50, label: "Fru", type: "C" }
      ],
      bonds: [ { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 } ]
    }
  },
  {
    id: 52,
    name: "Stachyosa",
    engName: "Stachyose",
    nameDe: "Stachyose",
    nameFr: "Stachyose",
    code3: "Sta",
    group: "oligosaccharide",
    groupCz: "Tetrasacharid",
    formula: "C24H42O21",
    condensed: "Gal-Gal-Glc-Fru",
    desc: "Tetrasacharid z kusu zásoby v semenech rostlin.",
    descEn: "Tetrasaccharide storage sugar in plant seeds.",
    descDe: "Tetrasaccharid-Speicherzucker in Pflanzensamen.",
    descFr: "Tétrasaccharide de réserve des graines.",
    smiles: "C24H42O21",
    snfg: { shape: "circle", color: "#FFD700", label: "Sta" },
    structure: {
      atoms: [
        { x: 20, y: 50, label: "Gal2", type: "C" }, { x: 50, y: 50, label: "Gal1", type: "C" }, { x: 80, y: 50, label: "Glc-Fru", type: "C" }
      ],
      bonds: [ { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 } ]
    }
  },
  {
    id: 53,
    name: "D-Sorbitol",
    engName: "D-Sorbitol / Glucitol",
    nameDe: "D-Sorbitol",
    nameFr: "D-Sorbitol",
    code3: "Srb",
    group: "polyol",
    groupCz: "Cukerný alkohol (Polyol)",
    formula: "C6H14O6",
    condensed: "CH₂OH(CHOH)₄CH₂OH",
    desc: "Cukerný alkohol vznikající redukcí glukosy, náhradní sladidlo pro diabetiky.",
    descEn: "Sugar alcohol produced by glucose reduction, sweetener for diabetics.",
    descDe: "Zuckeralkohol durch Glucose-Reduktion.",
    descFr: "Alcool de sucre issu de la réduction du glucose.",
    smiles: "OCC(O)C(O)C(O)C(O)CO",
    snfg: { shape: "circle", color: "#005BCB", label: "Srb" },
    structure: {
      atoms: [
        { x: 20, y: 50, label: "HOCH₂", type: "C" }, { x: 50, y: 50, label: "(CHOH)₄", type: "C" }, { x: 80, y: 50, label: "CH₂OH", type: "C" }
      ],
      bonds: [ { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 } ]
    }
  },
  {
    id: 54,
    name: "D-Mannitol",
    engName: "D-Mannitol",
    nameDe: "D-Mannitol",
    nameFr: "D-Mannitol",
    code3: "Mtl",
    group: "polyol",
    groupCz: "Cukerný alkohol (Osmotické diuretikum)",
    formula: "C6H14O6",
    condensed: "Mtl",
    desc: "Polyol manosy používaný v medicíně jako osmotické diuretikum při otoku mozku.",
    descEn: "Polyol of mannose used as an osmotic diuretic in brain edema.",
    descDe: "Polyol der Mannose, osmotisches Diuretikum.",
    descFr: "Polyol de mannose utilisé comme diurétique osmotique.",
    smiles: "OCC(O)C(O)C(O)C(O)CO",
    snfg: { shape: "circle", color: "#00A651", label: "Mtl" },
    structure: {
      atoms: [
        { x: 20, y: 50, label: "HOCH₂", type: "C" }, { x: 50, y: 50, label: "(CHOH)₄", type: "C" }, { x: 80, y: 50, label: "CH₂OH", type: "C" }
      ],
      bonds: [ { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 } ]
    }
  },
  {
    id: 55,
    name: "Xylitol",
    engName: "Xylitol",
    nameDe: "Xylit",
    nameFr: "Xylitol",
    code3: "Xylt",
    group: "polyol",
    groupCz: "Pentosový cukerný alkohol (Březový cukr)",
    formula: "C5H12O5",
    condensed: "Xylitol",
    desc: "Březový cukr chránící zubní sklovinu před zubním kazem tím, že ho mutující streptokoky nemohou fermentovat.",
    descEn: "Birch sugar preventing dental caries as oral bacteria cannot ferment it.",
    descDe: "Birkenzucker zur Kariesprophylaxe.",
    descFr: "Sucre de bouleau prévenant les caries dentaires.",
    smiles: "OCC(O)C(O)C(O)CO",
    snfg: { shape: "star", color: "#FF8C00", label: "Xylt" },
    structure: {
      atoms: [
        { x: 20, y: 50, label: "HOCH₂", type: "C" }, { x: 50, y: 50, label: "(CHOH)₃", type: "C" }, { x: 80, y: 50, label: "CH₂OH", type: "C" }
      ],
      bonds: [ { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 } ]
    }
  },
  {
    id: 56,
    name: "Myo-Inositol",
    engName: "Myo-Inositol",
    nameDe: "Myo-Inositol",
    nameFr: "Myo-Inositol",
    code3: "Ino",
    group: "polyol",
    groupCz: "Cyklický polyol (Sekundární posel)",
    formula: "C6H12O6",
    condensed: "Inositol",
    desc: "Cyklický šestisytný alkohol, základ fosfatidylinositolu (PIP2/PIP3) v buněčné signalizaci.",
    descEn: "Cyclic polyol precursor of phosphatidylinositol in cell signaling.",
    descDe: "Zyklischer Polyol-Vorläufer in der Signaltransduktion.",
    descFr: "Polyol cyclique précurseur du phosphatidylinositol.",
    smiles: "OC1C(O)C(O)C(O)C(O)C1O",
    snfg: { shape: "circle", color: "#808080", label: "Ino" },
    structure: {
      atoms: [
        { x: 50, y: 20, label: "OH", type: "O" }, { x: 75, y: 35, label: "OH", type: "O" },
        { x: 75, y: 65, label: "OH", type: "O" }, { x: 50, y: 80, label: "OH", type: "O" },
        { x: 25, y: 65, label: "OH", type: "O" }, { x: 25, y: 35, label: "OH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 },
        { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 0, type: 1 }
      ]
    }
  }
];

// ─── Utility Functions ────────────────────────────────────────────────────────

/**
 * Returns localized sugar name based on language code.
 */
function getSugarName(sugar, lang = "cs") {
  if (!sugar) return "";
  switch (lang) {
    case "cs": return sugar.name;
    case "de": return sugar.nameDe || sugar.engName;
    case "fr": return sugar.nameFr || sugar.engName;
    case "en":
    default: return sugar.engName;
  }
}

/**
 * Returns localized sugar description based on language code.
 */
function getSugarDesc(sugar, lang = "cs") {
  if (!sugar) return "";
  switch (lang) {
    case "cs": return sugar.desc;
    case "de": return sugar.descDe || sugar.descEn;
    case "fr": return sugar.descFr || sugar.descEn;
    case "en":
    default: return sugar.descEn;
  }
}

/**
 * Returns localized sugar group badge label.
 */
function getSugarGroup(sugar, lang = "cs") {
  if (!sugar) return "";
  if (lang === "cs") return sugar.groupCz;
  const groupMap = {
    hexose: "Hexose",
    hexosamine: "Hexosamine",
    deoxy: "Deoxysugar",
    pentose: "Pentose",
    acidic: "Acidic sugar",
    disaccharide: "Disaccharide",
    oligosaccharide: "Oligosaccharide",
    polyol: "Sugar alcohol",
    triose: "Triose"
  };
  return groupMap[sugar.group] || sugar.group;
}

/**
 * Renders SNFG SVG graphic based on snfg properties.
 */
function renderSNFGToSVG(snfg, width = 70, height = 70) {
  if (!snfg) return "";
  const shape = snfg.shape || "circle";
  const color = snfg.color || "#005BCB";
  const secondaryColor = snfg.secondaryColor || "#ffffff";
  const label = snfg.label || "";
  
  let shapePath = "";
  const strokeColor = "#0f172a";
  const strokeW = 4;

  switch (shape) {
    case "circle":
      shapePath = `<circle cx="50" cy="50" r="38" fill="${color}" stroke="${strokeColor}" stroke-width="${strokeW}"/>`;
      break;
    case "square":
      shapePath = `<rect x="14" y="14" width="72" height="72" rx="6" fill="${color}" stroke="${strokeColor}" stroke-width="${strokeW}"/>`;
      break;
    case "diamond":
      shapePath = `<polygon points="50,8 92,50 50,92 8,50" fill="${color}" stroke="${strokeColor}" stroke-width="${strokeW}"/>`;
      break;
    case "triangle":
      shapePath = `<polygon points="50,10 90,86 10,86" fill="${color}" stroke="${strokeColor}" stroke-width="${strokeW}"/>`;
      break;
    case "star":
      shapePath = `<polygon points="50,6 62,34 93,34 68,54 77,84 50,65 23,84 32,54 7,34 38,34" fill="${color}" stroke="${strokeColor}" stroke-width="${strokeW}"/>`;
      break;
    case "divided-square":
      shapePath = `
        <polygon points="14,14 86,14 14,86" fill="${color}"/>
        <polygon points="86,14 86,86 14,86" fill="${secondaryColor}"/>
        <rect x="14" y="14" width="72" height="72" rx="6" fill="none" stroke="${strokeColor}" stroke-width="${strokeW}"/>
        <line x1="14" y1="86" x2="86" y2="14" stroke="${strokeColor}" stroke-width="${strokeW}"/>
      `;
      break;
    case "divided-diamond":
      shapePath = `
        <polygon points="50,8 92,50 8,50" fill="${color}"/>
        <polygon points="8,50 92,50 50,92" fill="${secondaryColor}"/>
        <polygon points="50,8 92,50 50,92 8,50" fill="none" stroke="${strokeColor}" stroke-width="${strokeW}"/>
        <line x1="8" y1="50" x2="92" y2="50" stroke="${strokeColor}" stroke-width="${strokeW}"/>
      `;
      break;
    case "rectangle":
    default:
      shapePath = `<rect x="10" y="25" width="80" height="50" rx="6" fill="${color}" stroke="${strokeColor}" stroke-width="${strokeW}"/>`;
      break;
  }

  const textLabel = label ? `
    <text x="50" y="53" font-family="'Outfit', sans-serif" font-size="18px" font-weight="900" 
          fill="#ffffff" stroke="#000000" stroke-width="1.2px" paint-order="stroke fill" 
          text-anchor="middle" dominant-baseline="middle">${label}</text>
  ` : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${width}" height="${height}" class="item-snfg-svg">${shapePath}${textLabel}</svg>`;
}

/**
 * Renders 2D chemical structure formula to SVG string.
 */
function renderStructureToSVG(structure, width = "100%", height = "100%") {
  if (!structure || !structure.atoms) return "";

  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  
  structure.atoms.forEach(atom => {
    const cleanLabel = atom.label ? atom.label.replace(/[\u2080-\u2089]/g, m => String.fromCharCode(m.charCodeAt(0) - 0x2080 + 48)) : "";
    const isAliphaticCarbon = atom.label && /^(CH\d*|H\d*C|C)$/i.test(cleanLabel);
    const hasVisibleLabel = atom.label && !isAliphaticCarbon;
    
    // Calculate padding dynamically to avoid unnecessary empty margin
    const labelWidth = atom.label ? atom.label.length * 7 : 0;
    const paddingX = hasVisibleLabel ? Math.max(labelWidth / 2 + 1, 4) : 2;
    const paddingY = hasVisibleLabel ? 6 : 2;
    
    if (atom.x - paddingX < minX) minX = atom.x - paddingX;
    if (atom.x + paddingX > maxX) maxX = atom.x + paddingX;
    if (atom.y - paddingY < minY) minY = atom.y - paddingY;
    if (atom.y + paddingY > maxY) maxY = atom.y + paddingY;
  });

  const contentW = maxX - minX;
  const contentH = maxY - minY;
  
  const margin = 3; // Tight margin to enlarge the molecule
  const paddedW = contentW + 2 * margin;
  const paddedH = contentH + 2 * margin;
  
  const vbX = minX - margin;
  const vbY = minY - margin;
  const vbW = paddedW;
  const vbH = paddedH;

  const bondColor = "#000000"; // Solid Wikipedia Black
  const bondWidth = 2.0;       // Delicate skeletal line weight

  let svgContent = "";

  if (structure.bonds) {
    structure.bonds.forEach(bond => {
      const from = structure.atoms[bond.from];
      const to = structure.atoms[bond.to];
      if (!from || !to) return;

      if (bond.type === 2) {
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        const px = -dy / len * 2;
        const py = dx / len * 2;

        svgContent += `
          <line x1="${from.x - px}" y1="${from.y - py}" x2="${to.x - px}" y2="${to.y - py}" stroke="${bondColor}" stroke-width="${bondWidth}" stroke-linecap="round"/>
          <line x1="${from.x + px}" y1="${from.y + py}" x2="${to.x + px}" y2="${to.y + py}" stroke="${bondColor}" stroke-width="${bondWidth}" stroke-linecap="round"/>
        `;
      } else {
        svgContent += `
          <line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" stroke="${bondColor}" stroke-width="${bondWidth}" stroke-linecap="round"/>
        `;
      }
    });
  }

  structure.atoms.forEach(atom => {
    if (atom.label && atom.label.trim() !== "") {
      const cleanLabel = atom.label.replace(/[\u2080-\u2089]/g, m => String.fromCharCode(m.charCodeAt(0) - 0x2080 + 48));
      const isAliphaticCarbon = /^(CH\d*|H\d*C|C)$/i.test(cleanLabel);
      if (!isAliphaticCarbon) {
        let color = "#000000";
        if (atom.type === "O") color = "#d32f2f"; // Wikipedia Red
        if (atom.type === "N") color = "#1976d2"; // Wikipedia Blue
        if (atom.type === "S") color = "#d97706"; // Wikipedia Gold
        if (atom.type === "P") color = "#7b1fa2"; // Wikipedia Purple

        const labelW = atom.label.length * 7;
        const labelH = 12;

        svgContent += `
          <rect x="${atom.x - labelW/2}" y="${atom.y - labelH/2 - 1}" width="${labelW}" height="${labelH * 1.3}" fill="#ffffff" />
          <text x="${atom.x}" y="${atom.y + 1}" font-family="Arial, Helvetica, sans-serif" font-size="11px" font-weight="normal" fill="${color}" text-anchor="middle" dominant-baseline="middle">${atom.label}</text>
        `;
      }
    }
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vbX} ${vbY} ${vbW} ${vbH}" width="${width}" height="${height}" class="item-structure-svg">${svgContent}</svg>`;
}

/**
 * Returns sub-array of sugars based on game version.
 * basic: 13, extended: 21, complete: 57
 */
function getSugarsForVersion(version) {
  if (version === "basic") return SUGARS.slice(0, 13);
  if (version === "extended") return SUGARS.slice(0, 21);
  return SUGARS;
}

