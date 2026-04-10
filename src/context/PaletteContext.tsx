import { createContext, useContext, useEffect, useState } from "react";

export interface Palette {
  name: string;
  bg: string;
  surface: string;
  border: string;
  primary: string;
  primaryDark: string;
  primaryMid: string;
  primaryLight: string;
  accent: string;
  heroText: string;
  heroBg: string;
  textBody: string;   // main body copy
  textMuted: string;  // secondary / placeholder text
}

export const palettes: Record<string, Palette> = {
  // ── Warm ───────────────────────────────────────────────────
  butter: {
    name: "Butter",
    bg: "#FFFDF0", surface: "#FFF8D0", border: "#F5E898",
    primary: "#B07800", primaryDark: "#5C3D00", primaryMid: "#C88E10", primaryLight: "#E0B840",
    accent: "#F5D978", heroText: "white", heroBg: "#5C3D00",
    textBody: "#4A3600", textMuted: "#9A7C20",
  },
  champagne: {
    name: "Champagne",
    bg: "#FBF8F0", surface: "#F2EAD8", border: "#DDD0B0",
    primary: "#8A6830", primaryDark: "#3E2C0A", primaryMid: "#A07C40", primaryLight: "#C4A060",
    accent: "#E0C888", heroText: "white", heroBg: "#3E2C0A",
    textBody: "#4A380A", textMuted: "#9A8050",
  },
  peach: {
    name: "Peach",
    bg: "#FFF7F2", surface: "#FFE8D8", border: "#FFCDB0",
    primary: "#C4541C", primaryDark: "#6E2408", primaryMid: "#D86830", primaryLight: "#EE9060",
    accent: "#FFBF98", heroText: "white", heroBg: "#6E2408",
    textBody: "#5A2C10", textMuted: "#B07050",
  },
  coral: {
    name: "Coral",
    bg: "#FDF6F2", surface: "#FAECE7", border: "#F5C4B3",
    primary: "#712B13", primaryDark: "#4A1B0C", primaryMid: "#993C1D", primaryLight: "#D85A30",
    accent: "#F0997B", heroText: "#FAECE7", heroBg: "#712B13",
    textBody: "#5C2E1A", textMuted: "#B0644A",
  },
  blush: {
    name: "Blush",
    bg: "#FFF8FB", surface: "#FFE8F2", border: "#F9C8DC",
    primary: "#A0305A", primaryDark: "#5C1030", primaryMid: "#C04870", primaryLight: "#DC7898",
    accent: "#F0A8C0", heroText: "white", heroBg: "#5C1030",
    textBody: "#5A1830", textMuted: "#B06080",
  },

  // ── Cool ───────────────────────────────────────────────────
  lavender: {
    name: "Lavender",
    bg: "#FAF8FF", surface: "#EDE8FF", border: "#DDD5F5",
    primary: "#6D4FC4", primaryDark: "#3C1F6B", primaryMid: "#7C5FB5", primaryLight: "#B09FD9",
    accent: "#C5B3E8", heroText: "white", heroBg: "#3C1F6B",
    textBody: "#4B4060", textMuted: "#8070A8",
  },
  wisteria: {
    name: "Wisteria",
    bg: "#F8F5FF", surface: "#EAE0FF", border: "#CEBEFF",
    primary: "#5B3E9E", primaryDark: "#2A1460", primaryMid: "#7254B4", primaryLight: "#9B7FD4",
    accent: "#C4AEFF", heroText: "white", heroBg: "#2A1460",
    textBody: "#3A2868", textMuted: "#7A5FAA",
  },
  periwinkle: {
    name: "Periwinkle",
    bg: "#F5F7FF", surface: "#E0E8FF", border: "#BCCAFF",
    primary: "#3D52C4", primaryDark: "#18206E", primaryMid: "#5468D8", primaryLight: "#8894E8",
    accent: "#AABCFF", heroText: "white", heroBg: "#18206E",
    textBody: "#202A68", textMuted: "#6070B8",
  },
  powder: {
    name: "Powder Blue",
    bg: "#F2F8FF", surface: "#DAF0FF", border: "#AADAFF",
    primary: "#1E78C8", primaryDark: "#0A3864", primaryMid: "#3090DC", primaryLight: "#60B4F0",
    accent: "#90D0F8", heroText: "white", heroBg: "#0A3864",
    textBody: "#0A3864", textMuted: "#4880B0",
  },
  slate: {
    name: "Slate",
    bg: "#F8FAFC", surface: "#EFF6FF", border: "#BFDBFE",
    primary: "#2563EB", primaryDark: "#1E3A5F", primaryMid: "#3B82F6", primaryLight: "#60A5FA",
    accent: "#93C5FD", heroText: "white", heroBg: "#1E3A5F",
    textBody: "#1E3A5F", textMuted: "#5A7BA8",
  },

  // ── Fresh / botanical ──────────────────────────────────────
  mint: {
    name: "Mint",
    bg: "#F2FDF8", surface: "#D0F5E8", border: "#98E0C8",
    primary: "#0D7A58", primaryDark: "#04382A", primaryMid: "#189068", primaryLight: "#34B884",
    accent: "#78DDB4", heroText: "white", heroBg: "#04382A",
    textBody: "#0A3828", textMuted: "#4A9878",
  },
  sage: {
    name: "Sage",
    bg: "#F4F8F3", surface: "#E2EDD9", border: "#C0D9B0",
    primary: "#3B6D11", primaryDark: "#1A3316", primaryMid: "#4A7040", primaryLight: "#7AAD5E",
    accent: "#C0DD97", heroText: "white", heroBg: "#1A3316",
    textBody: "#2E4425", textMuted: "#6A8F55",
  },
  pistachio: {
    name: "Pistachio",
    bg: "#F8FAF0", surface: "#ECF2D8", border: "#CCE0A0",
    primary: "#507020", primaryDark: "#28400A", primaryMid: "#688030", primaryLight: "#90AC50",
    accent: "#C0D888", heroText: "white", heroBg: "#28400A",
    textBody: "#304010", textMuted: "#78A040",
  },
  celadon: {
    name: "Celadon",
    bg: "#F5FAF7", surface: "#DDF0E8", border: "#B0D8C4",
    primary: "#2E7858", primaryDark: "#0E3828", primaryMid: "#489070", primaryLight: "#78B898",
    accent: "#A8D8C0", heroText: "white", heroBg: "#0E3828",
    textBody: "#1A4838", textMuted: "#5898788",
  },

  // ── Muted / dusty ──────────────────────────────────────────
  mauve: {
    name: "Mauve",
    bg: "#FBF7FA", surface: "#F0E4EE", border: "#DDBCD8",
    primary: "#884878", primaryDark: "#441038", primaryMid: "#A85E90", primaryLight: "#C888B0",
    accent: "#E0B0D0", heroText: "white", heroBg: "#441038",
    textBody: "#4A1838", textMuted: "#A06888",
  },
  dustyrose: {
    name: "Dusty Rose",
    bg: "#FDF8F8", surface: "#F4E8E8", border: "#E4C8C4",
    primary: "#A05858", primaryDark: "#502020", primaryMid: "#C07070", primaryLight: "#D89898",
    accent: "#ECC0BC", heroText: "white", heroBg: "#502020",
    textBody: "#503030", textMuted: "#A07070",
  },
  dustyteal: {
    name: "Dusty Teal",
    bg: "#F4FAFA", surface: "#DFF0EE", border: "#B0D4D0",
    primary: "#357870", primaryDark: "#103830", primaryMid: "#489088", primaryLight: "#78B4B0",
    accent: "#A8D4D0", heroText: "white", heroBg: "#103830",
    textBody: "#184038", textMuted: "#5898908",
  },
  rose: {
    name: "Rose Gold",
    bg: "#FDF8F8", surface: "#F7E8E8", border: "#EEC8C8",
    primary: "#9B4D52", primaryDark: "#5C2226", primaryMid: "#B5686E", primaryLight: "#D4939A",
    accent: "#E8BBBF", heroText: "white", heroBg: "#5C2226",
    textBody: "#4A2226", textMuted: "#A07075",
  },

  // ── Earthy / warm neutral ──────────────────────────────────
  linen: {
    name: "Linen",
    bg: "#FAF7F2", surface: "#F0EAE0", border: "#DDD0BC",
    primary: "#6B5344", primaryDark: "#38251A", primaryMid: "#8C6E5A", primaryLight: "#B8998A",
    accent: "#D4BCA8", heroText: "white", heroBg: "#38251A",
    textBody: "#4A3828", textMuted: "#9A7A68",
  },
  parchment: {
    name: "Parchment",
    bg: "#FAF5E8", surface: "#F0E8CC", border: "#DDD0A0",
    primary: "#785828", primaryDark: "#382808", primaryMid: "#987040", primaryLight: "#C09860",
    accent: "#D8C080", heroText: "white", heroBg: "#382808",
    textBody: "#402E08", textMuted: "#907040",
  },
  dove: {
    name: "Dove",
    bg: "#F8F8F6", surface: "#EEEEED", border: "#D8D8D4",
    primary: "#586878", primaryDark: "#202C38", primaryMid: "#708090", primaryLight: "#9AAAB8",
    accent: "#C0CCD8", heroText: "white", heroBg: "#202C38",
    textBody: "#283848", textMuted: "#7888A0",
  },

  // ── Dark themes ────────────────────────────────────────────
  noir: {
    name: "Noir",
    bg: "#16151A", surface: "#1F1E26", border: "#2E2C3A",
    primary: "#C4A95A", primaryDark: "#F5EDD0", primaryMid: "#D9BE78", primaryLight: "#8A7040",
    accent: "#4A4030", heroText: "#F5EDD0", heroBg: "#0D0C10",
    textBody: "#C8C4B8", textMuted: "#706A58",
  },
  ink: {
    name: "Ink",
    bg: "#0F1623", surface: "#172035", border: "#253352",
    primary: "#60A5FA", primaryDark: "#E0EEFF", primaryMid: "#93C5FD", primaryLight: "#3B5A80",
    accent: "#1E3A60", heroText: "#E0EEFF", heroBg: "#080E18",
    textBody: "#B8CCEC", textMuted: "#4A6A98",
  },
  espresso: {
    name: "Espresso",
    bg: "#18100A", surface: "#231708", border: "#3A2810",
    primary: "#D9884A", primaryDark: "#F5DCC0", primaryMid: "#C87040", primaryLight: "#7A4820",
    accent: "#4A2E10", heroText: "#F5DCC0", heroBg: "#0E0805",
    textBody: "#C8A880", textMuted: "#7A5830",
  },
  aubergine: {
    name: "Aubergine",
    bg: "#130B1A", surface: "#1C1026", border: "#2E1A45",
    primary: "#C084FC", primaryDark: "#F0E0FF", primaryMid: "#D8A8FF", primaryLight: "#7040A8",
    accent: "#3A2060", heroText: "#F0E0FF", heroBg: "#0A0510",
    textBody: "#C8A8E8", textMuted: "#6A4898",
  },
  forest: {
    name: "Deep Forest",
    bg: "#0C1510", surface: "#121E15", border: "#1E3020",
    primary: "#4ADE80", primaryDark: "#D0F0D8", primaryMid: "#34C464", primaryLight: "#1A7038",
    accent: "#163022", heroText: "#D0F0D8", heroBg: "#060E08",
    textBody: "#A0D8A8", textMuted: "#386840",
  },
  graphite: {
    name: "Graphite",
    bg: "#141618", surface: "#1C2025", border: "#2C3038",
    primary: "#22D3EE", primaryDark: "#E0F8FF", primaryMid: "#67E8F9", primaryLight: "#185A68",
    accent: "#0E3845", heroText: "#E0F8FF", heroBg: "#0A0C0E",
    textBody: "#B0C8D0", textMuted: "#485A60",
  },
  midnight: {
    name: "Midnight",
    bg: "#0E0F1A", surface: "#161828", border: "#252840",
    primary: "#818CF8", primaryDark: "#E8EAFF", primaryMid: "#A5B4FC", primaryLight: "#3730A3",
    accent: "#202448", heroText: "#E8EAFF", heroBg: "#08090F",
    textBody: "#B8BCE8", textMuted: "#484A80",
  },
  dusk: {
    name: "Dusk",
    bg: "#100C18", surface: "#18122A", border: "#281E45",
    primary: "#E879F9", primaryDark: "#FDEEFF", primaryMid: "#F0ABFC", primaryLight: "#7E22CE",
    accent: "#3A1860", heroText: "#FDEEFF", heroBg: "#08060E",
    textBody: "#D8B0F0", textMuted: "#7040A0",
  },
  charcoal: {
    name: "Charcoal",
    bg: "#1C1C1E", surface: "#2C2C2E", border: "#3A3A3C",
    primary: "#E8A87C", primaryDark: "#F5EFE8", primaryMid: "#D4906A", primaryLight: "#806050",
    accent: "#4A3828", heroText: "#F5EFE8", heroBg: "#101010",
    textBody: "#C8BEB4", textMuted: "#706860",
  },
  plum: {
    name: "Plum",
    bg: "#120A18", surface: "#1C1028", border: "#30184A",
    primary: "#D8A0F8", primaryDark: "#F8F0FF", primaryMid: "#E8C0FF", primaryLight: "#8840C8",
    accent: "#3C1870", heroText: "#F8F0FF", heroBg: "#090412",
    textBody: "#D0A8F0", textMuted: "#7848B0",
  },
};

export const paletteKeys = Object.keys(palettes);

interface PaletteContextValue {
  paletteKey: string;
  palette: Palette;
  setPaletteKey: (key: string) => void;
  nextPalette: () => void;
  prevPalette: () => void;
}

const PaletteContext = createContext<PaletteContextValue>({
  paletteKey: "pistachio",
  palette: palettes.pistachio,
  setPaletteKey: () => {},
  nextPalette: () => {},
  prevPalette: () => {},
});

export function PaletteProvider({ children }: { children: React.ReactNode }) {
  const [paletteKey, setPaletteKeyState] = useState<string>(() => {
    return localStorage.getItem("hc_palette") || "pistachio";
  });

  const palette = palettes[paletteKey] || palettes.pistachio;

  function setPaletteKey(key: string) {
    setPaletteKeyState(key);
    localStorage.setItem("hc_palette", key);
  }

  function nextPalette() {
    const idx = paletteKeys.indexOf(paletteKey);
    setPaletteKey(paletteKeys[(idx + 1) % paletteKeys.length]);
  }

  function prevPalette() {
    const idx = paletteKeys.indexOf(paletteKey);
    setPaletteKey(paletteKeys[(idx - 1 + paletteKeys.length) % paletteKeys.length]);
  }

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--hc-bg", palette.bg);
    root.style.setProperty("--hc-surface", palette.surface);
    root.style.setProperty("--hc-border", palette.border);
    root.style.setProperty("--hc-primary", palette.primary);
    root.style.setProperty("--hc-primary-dark", palette.primaryDark);
    root.style.setProperty("--hc-primary-mid", palette.primaryMid);
    root.style.setProperty("--hc-primary-light", palette.primaryLight);
    root.style.setProperty("--hc-accent", palette.accent);
    root.style.setProperty("--hc-hero-text", palette.heroText);
    root.style.setProperty("--hc-hero-bg", palette.heroBg);
    root.style.setProperty("--hc-text-body", palette.textBody);
    root.style.setProperty("--hc-text-muted", palette.textMuted);
    document.body.style.backgroundColor = palette.bg;
  }, [palette]);

  return (
    <PaletteContext.Provider value={{ paletteKey, palette, setPaletteKey, nextPalette, prevPalette }}>
      {children}
    </PaletteContext.Provider>
  );
}

export function usePalette() {
  return useContext(PaletteContext);
}
