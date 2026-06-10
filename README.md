# Dosanjh Labs

> Turning technology that hinders into technology that helps you succeed.

The website of **Dosanjh Labs** — the independent studio of [Jasvant Singh Dosanjh](https://linkedin.com/in/jasvantsd), a Technical Project Manager and builder in Seattle. It showcases the studio's products (Sightline, GurmukhiFix, Cairn, SikhLibrarian, and more), Jasvant's experience and skills, and his parchar & seva work.

**Live:** https://jsdosanj.github.io/website/

## Stack

- **[Astro 5](https://astro.build)** — multi-page static site, ships minimal JS
- **[Tailwind CSS 4](https://tailwindcss.com)** — design system via CSS-first `@theme`
- Vanilla JS for the mobile nav and scroll-reveal (IntersectionObserver)
- Deployed to **GitHub Pages** via GitHub Actions

## Design

Dark, premium, and technical — with Sikh heritage motifs (kesari/saffron gold + Khalsa blue on deep ink, Khanda and jali lattice accents, Gurmukhi typography). Dark mode only, WCAG-minded (focus states, reduced-motion, skip link, semantic landmarks).

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — brand, featured products, principles, seva teaser |
| `/about` | Who I am — bio, experience timeline, leadership, education, recommendations |
| `/skills` | Capabilities, with **Development with AI** featured |
| `/products` | All products — live and in-the-lab |
| `/seva` | Parchar & seva — speaking, Basics of Sikhi, SikhArchive.net |
| `/contact` | Ways to connect + résumés |

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/website/
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

## Custom domain

To move to e.g. `dosanjhlabs.com`: set `site` in `astro.config.mjs` to the domain, remove `base`, add a `public/CNAME` file, and update the URLs in `src/data/site.ts`.

---

© 2026 Jasvant Singh Dosanjh · Dosanjh Labs. Built in chardi kala.
