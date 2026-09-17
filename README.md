# Dosanjh Labs

> Turning technology that hinders into technology that helps you succeed.

The website of **Dosanjh Labs** — the independent studio of [Jasvant Singh Dosanjh](https://linkedin.com/in/jasvantsd), a Technical Program Manager and builder, open to relocating. It showcases the studio's products (Sightline, GurmukhiFix, Cairn, SikhLibrarian, and more), Jasvant's program-management track record and skills, and his parchar & seva work.

**Live:** https://jasvant.dosanjhlabs.com

## Stack

- **[Astro 6](https://astro.build)** — multi-page static site, ships minimal JS
- **[Tailwind CSS 4](https://tailwindcss.com)** — design system via CSS-first `@theme`
- Vanilla JS for the mobile nav and scroll-reveal (IntersectionObserver)
- Deployed to **Cloudflare Pages** (git-connected — merge to `main` = production deploy)

## Design

Dark, premium, and technical — with Sikh heritage motifs (kesari/saffron gold + Khalsa blue on deep ink, Khanda and jali lattice accents, Gurmukhi typography). Dark mode only, WCAG-minded (focus states, reduced-motion, skip link, semantic landmarks).

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — brand, featured products, principles, seva teaser |
| `/about` | Who I am — bio, experience timeline, leadership, education, recommendations |
| `/skills` | Capabilities, with **Development with AI** featured |
| `/products` | All products — live and in-the-lab |
| `/seva` | Parchar & seva — speaking, Basics of Sikhi, Sikhi.io |
| `/contact` | Ways to connect + résumés |

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Editing content

All content lives in `src/data/` — edit these TypeScript files, no template surgery required:

- `site.ts` — brand, tagline, nav, socials, résumé paths
- `products.ts` — every product (Sightline, GurmukhiFix, Cairn, SikhLibrarian, dataset)
- `experience.ts`, `leadership.ts`, `education.ts`, `skills.ts`
- `seva.ts` — parchar engagements and values
- `recommendations.ts` — testimonials

Images live in `public/images/`, résumés in `public/resumes/`.

## Domain

Live at `https://jasvant.dosanjhlabs.com`, set via `site` in `astro.config.mjs` (no `base`) and attached to the Cloudflare Pages project. `src/data/site.ts` mirrors the same URL.

## AI-crawler & SEO policy

`public/robots.txt`, `public/ai.txt`, `public/llms.txt`, and `public/.well-known/tdmrep.json` declare the AI-crawler policy: answer/search AI (e.g. OAI-SearchBot, PerplexityBot, Claude-SearchBot) may crawl and cite this site, while AI/ML training crawlers (e.g. GPTBot, ClaudeBot, CCBot) are disallowed and the content is TDM-reserved. `public/_headers` mirrors this via `X-Robots-Tag` / `Content-Usage` / `TDM-Reservation` response headers. The human-readable policy lives at `/ai-policy` (`src/pages/ai-policy.astro`). See `astro.config.mjs`'s `@astrojs/sitemap` config for sitemap priorities.

---

© 2026 Jasvant Singh Dosanjh · Dosanjh Labs. Built in chardi kala.
