import { createContext, useContext, useState } from "react";

export type HeroLayout  = "centered" | "split" | "portrait";
export type AboutLayout = "circle"   | "beside" | "card";
export type PhotoSide   = "left"     | "right";

interface PhotoCtx {
  photo:          1 | 2;
  setPhoto:       (p: 1 | 2) => void;
  heroLayout:     HeroLayout;
  setHeroLayout:  (l: HeroLayout) => void;
  aboutLayout:    AboutLayout;
  setAboutLayout: (l: AboutLayout) => void;
  photoSide:      PhotoSide;
  setPhotoSide:   (s: PhotoSide) => void;
}

const Ctx = createContext<PhotoCtx>(null!);
export const usePhoto = () => useContext(Ctx);

export function PhotoProvider({ children }: { children: React.ReactNode }) {
  const [photo,        setPhoto]        = useState<1 | 2>(1);
  const [heroLayout,   setHeroLayout]   = useState<HeroLayout>("centered");
  const [aboutLayout,  setAboutLayout]  = useState<AboutLayout>("circle");
  const [photoSide,    setPhotoSide]    = useState<PhotoSide>("right");

  return (
    <Ctx.Provider value={{ photo, setPhoto, heroLayout, setHeroLayout, aboutLayout, setAboutLayout, photoSide, setPhotoSide }}>
      {children}
    </Ctx.Provider>
  );
}
