import { create } from "zustand";

type LaptopStore = {
  color: string;
  setColor: (color: string) => void;
  scale: number;
  setScale: (scale: number) => void;
  texture: string;
  setTexture: (texture: string) => void;
  reset: () => void;
};

const useLaptopStore = create<LaptopStore>((set) => ({
  color: "#2e2c2e",
  setColor: (color: string) => set({ color }),
  scale: 0.6,
  setScale: (scale: number) => set({ scale }),
  texture: "/videos/compose-email.mp4",
  setTexture: (texture: string) => set({ texture }),
  reset: () =>
    set({ color: "#2e2c2e", scale: 0.6, texture: "/videos/compose-email.mp4" }),
}));

export default useLaptopStore;
