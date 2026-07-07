// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to Cloudflare Pages at https://jasvant.dosanjhlabs.com/ (served at root).
// Tailwind runs via PostCSS (see postcss.config.mjs) — compatible with
// Astro 6's Rolldown-based Vite.
export default defineConfig({
  site: 'https://jasvant.dosanjhlabs.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date('2026-07-07'),
      // Keep the noindex 404 page out of the sitemap.
      filter: (page) => !/\/404\/?$/.test(page),
      serialize(item) {
        // Home and key conversion pages get top priority
        if (/jasvant\.dosanjhlabs\.com\/?$/.test(item.url)) item.priority = 1.0;
        else if (/\/(about|products|contact)\/?$/.test(item.url)) item.priority = 0.9;
        else if (/\/ai-policy\/?$/.test(item.url)) item.priority = 0.3;
        else item.priority = 0.7;
        return item;
      },
    }),
  ],
});
