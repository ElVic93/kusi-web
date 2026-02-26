// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kusi-futbol-tour.vercel.app",
  output: "static",
  build: { format: "directory" },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});