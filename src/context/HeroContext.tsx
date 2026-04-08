import { createContext, useContext, useState } from "react";

export const heroStyles = {
  solid:    { name: "Solid" },
  gradient: { name: "Gradient" },
  light:    { name: "Light" },
  surface:  { name: "Surface" },
  split:    { name: "Split" },
  wave:     { name: "Wave" },
} as const;

export type HeroStyleKey = keyof typeof heroStyles;
export const heroStyleKeys = Object.keys(heroStyles) as HeroStyleKey[];

interface HeroContextValue {
  heroStyle: HeroStyleKey;
  setHeroStyle: (k: HeroStyleKey) => void;
  nextHero: () => void;
  prevHero: () => void;
}

const HeroContext = createContext<HeroContextValue>({
  heroStyle: "solid",
  setHeroStyle: () => {},
  nextHero: () => {},
  prevHero: () => {},
});

export function HeroProvider({ children }: { children: React.ReactNode }) {
  const [heroStyle, setHeroStyleState] = useState<HeroStyleKey>(() => {
    return (localStorage.getItem("hc_hero") as HeroStyleKey) || "solid";
  });

  function setHeroStyle(k: HeroStyleKey) {
    setHeroStyleState(k);
    localStorage.setItem("hc_hero", k);
  }

  function nextHero() {
    const idx = heroStyleKeys.indexOf(heroStyle);
    setHeroStyle(heroStyleKeys[(idx + 1) % heroStyleKeys.length]);
  }

  function prevHero() {
    const idx = heroStyleKeys.indexOf(heroStyle);
    setHeroStyle(heroStyleKeys[(idx - 1 + heroStyleKeys.length) % heroStyleKeys.length]);
  }

  return (
    <HeroContext.Provider value={{ heroStyle, setHeroStyle, nextHero, prevHero }}>
      {children}
    </HeroContext.Provider>
  );
}

export function useHero() {
  return useContext(HeroContext);
}
