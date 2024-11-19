import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000", // Backend en localhost:3000
        changeOrigin: true,
        secure: false,
      },
      "/images": {
        target: "http://localhost:8000", // Servir imágenes desde el backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
