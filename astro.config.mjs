// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages at https://jsdosanj.github.io/website/
// If you later move to a custom domain (e.g. dosanjhlabs.com), set
// `site` to that domain and remove `base`.
// Tailwind runs via PostCSS (see postcss.config.mjs) — compatible with
// Astro 6's Rolldown-based Vite.
export default defineConfig({
  site: 'https://jsdosanj.github.io',
  base: '/website',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
