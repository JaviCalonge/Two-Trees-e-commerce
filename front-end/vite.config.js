import { fileURLToPath, URL } from "node:url";
import fs from "fs";
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
    https: {
      key: fs.readFileSync("./localhost-key.pem"),
      cert: fs.readFileSync("./localhost-cert.pem"),
    },
    proxy: {
      "/images": {
        target: "https://two-trees-e-commerce.onrender.com",
        changeOrigin: true,
        secure: true,
      },
      "/api": {
        target: "https://two-trees-e-commerce.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
