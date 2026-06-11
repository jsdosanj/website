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
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date('2026-06-11'),
      serialize(item) {
        // Home and key conversion pages get top priority
        if (/\/website\/?$/.test(item.url)) item.priority = 1.0;
        else if (/\/(about|products|contact)\/?$/.test(item.url)) item.priority = 0.9;
        else item.priority = 0.7;
        return item;
      },
    }),
  ],
});
