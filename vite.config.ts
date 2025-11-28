import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-responsive"],
          "three-stack": [
            "three",
            "@react-three/fiber",
            "@react-three/drei",
            "three-stdlib",
          ],
          "gsap-stack": ["gsap", "@gsap/react"],
          "state-vendor": ["zustand"],
        },
      },
    },
  },
});
