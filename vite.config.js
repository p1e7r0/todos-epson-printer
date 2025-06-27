import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    // Assicurati che il percorso a setupTests sia corretto
    setupFiles: "./src/setupTests.js",
  },
});
