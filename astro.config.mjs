// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Deployed to Cloudflare Pages at https://jasvant.dosanjhlabs.com/ (served at root).
// Tailwind runs via the official @tailwindcss/vite plugin — the PostCSS
// plugin (@tailwindcss/postcss) stopped resolving the bare `@import
// "tailwindcss"` specifier under Astro 7's Vite/Rolldown bundler.
export default defineConfig({
  site: 'https://jasvant.dosanjhlabs.com',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      // Keep the noindex 404 page and generated OG image endpoints out of the sitemap.
      filter: (page) => !/\/404\/?$/.test(page) && !/\/og\//.test(page),
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
