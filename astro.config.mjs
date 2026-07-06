import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build
export default defineConfig({
  site: "https://karan5599.in",
  integrations: [sitemap()],
  // Prefetch internal links (/, /now) on hover so navigation feels instant.
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  vite: {
    plugins: [tailwindcss()],
  },
});
