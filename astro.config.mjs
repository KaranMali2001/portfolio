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
    server: {
      // Allow reaching the dev server through an ngrok tunnel (e.g. to preview
      // on a phone). Leading dot = wildcard, so it survives ngrok restarts
      // (the free subdomain changes each time).
      allowedHosts: [".ngrok-free.app", ".ngrok.app"],
    },
  },
});
