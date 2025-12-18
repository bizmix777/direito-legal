import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Versão LIMPA e SEGURA para produção
export default defineConfig(({ mode }) => ({
  // Caminho relativo (funciona em qualquer pasta)
  base: './',

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Removi o componentTagger para evitar erros de build
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
