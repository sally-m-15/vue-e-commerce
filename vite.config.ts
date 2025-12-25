import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";

const isGitHubPages = process.env.NODE_ENV === 'production' && !process.env.VERCEL;
// https://vite.dev/config/
export default defineConfig({
  base: isGitHubPages ? '/vue-e-commerce/' : '/',
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
    },
  },
});
