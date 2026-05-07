# Jasvant Dosanjh — Portfolio Website

[![Live Site](https://img.shields.io/badge/Live%20Site-jsdosanj.github.io%2Fwebsite-4169E1?style=flat-square)](https://jsdosanj.github.io/website/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=github&logoColor=white)](https://pages.github.com/)

> A dark-mode, terminal-inspired portfolio website for a Senior Systems Administrator

**🔗 Live Demo:** [https://jsdosanj.github.io/website/](https://jsdosanj.github.io/website/)

---

## 📖 Description

A fully static, single-page portfolio for **Jasvant Dosanjh** — Technical Project Manager based in Seattle, WA with 9+ years of IT infrastructure expertise. Built without JavaScript frameworks or build tools (pure HTML, CSS, and vanilla JavaScript), the site delivers a professional, accessible, and secure experience that reflects both technical depth and personality through a macOS terminal aesthetic.

---

## 🎨 Design Philosophy

This portfolio embraces a **macOS terminal window aesthetic** — dark backgrounds, monospace fonts, royal blue (`#4169E1`) as the primary accent color, and subtle terminal UI chrome (three colored dots, `>` command prefixes, blinking cursor). The goal is a memorable, professional presence that reflects technical expertise without being over the top.

Key design decisions:
- **Dark mode only** — deepest dark (`#0d1117`) body, slightly lighter card backgrounds — easy on the eyes for technical audiences
- **Royal blue accent** (`#4169E1`) — distinctive, professional, readable against dark backgrounds
- **Compact two-column experience layout** — job metadata (title, company, dates) on the left; `>` bullet points on the right — reads like terminal output
- **Continuous parallax background** — `IMG_1500.JPG` behind all content sections with a dark overlay, providing depth without distraction
- **Fira Code monospace** for terminal elements (nav, section titles, skill tags, dates); clean Lato sans-serif for body copy

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure with ARIA landmarks |
| CSS3 | Custom properties, Grid, Flexbox, animations |
| Vanilla JavaScript | Smooth scroll, Intersection Observer, input validation |
| Font Awesome 6.4 | Icon library (loaded with SRI integrity hash) |
| Google Fonts / Fira Code | Typography — Lato body, Fira Code terminal elements |
| GitHub Pages | Static deployment — no build step required |

---

## 🏗️ Architecture

```
website/
├── index.html                       # Full portfolio — semantic HTML5, ARIA landmarks, security headers
├── styles.css                       # All styling: variables → reset → navbar → sections → responsive
├── scripts.js                       # Smooth scroll (XSS-safe), active nav, Intersection Observer animations
├── IMG_0654.JPG                     # Headshot — circular with royal blue glow ring in hero & about sections
├── IMG_1180.JPG                     # Landscape — hero section background image
├── IMG_1500.JPG                     # Full-length — parallax background for all content sections
└── JSD Feb 26 SysAdmin Resume.pdf   # Resume PDF served via raw GitHub URL
```

**CSS organization:** Variables → Reset → Skip link → Navbar (terminal chrome) → Hero → Buttons → Sections → About → Experience → Leadership → Skills → Education → Passions → Recommendations → Contact → Footer → Animations → Accessibility → Responsive (1024px, 768px, 480px)

**Image usage:**
- `IMG_0654.JPG` — circular headshot with royal blue glow ring in hero and about sections
- `IMG_1180.JPG` — hero section background with `rgba(13,17,23,0.85)` dark overlay
- `IMG_1500.JPG` — `background-attachment: fixed` parallax behind all non-hero sections with `rgba(13,17,23,0.88)` overlay

---

## ✨ Features

### Visual Design
- Dark mode terminal aesthetic with royal blue (`#4169E1`) accents
- macOS terminal title bar in navbar (🔴 🟡 🟢 dots + dynamic `jasvant@portfolio ~ % cd /path` prompt)
- Blinking cursor (`_`) animation after hero greeting
- Subtle CRT scanline overlay on body (repeating gradient, ~0.03 opacity)
- Terminal `>` command-style section titles
- Headshot with pulsing royal blue glow ring
- Hero section background image with dark overlay
- Continuous parallax background for all content sections

### Layout & Animations
- **Compact two-column experience section** — metadata left (30%), bullet points right (70%), blue vertical separator
- Scroll-triggered fade-in animations via Intersection Observer (fires on viewport entry, not page load)
- Staggered reveal delays (repeating groups of 7, 80ms apart)
- Hover animations on every interactive element (lift, glow, color inversion)
- Responsive grid layouts for skills (4→3→2→1 col), education, certifications, passions (4→2→1 col)
- Mobile-first responsive design (breakpoints at 1024px, 768px, 480px)

### Content Sections
- Hero with headshot, greeting, title, description, and contact buttons
- About with extended bio and contact buttons
- Experience (13 roles, 2-column terminal layout)
- Leadership & Activities (5 items)
- Skills grid (7 categories with double-wide AI category)
- Education & Certifications
- Passions & Community (4 cards + personal interests grid)
- LinkedIn Recommendations (3 cards)
- Contact section with unified buttons

---

## ♿ Accessibility (WCAG 2.1/2.2 AA)

| Feature | Implementation |
|---|---|
| Skip-to-content link | Visible on focus at top of page |
| ARIA landmarks | `role="banner"`, `role="contentinfo"`, `aria-label`, `aria-labelledby` on all sections |
| Semantic HTML5 | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` |
| Focus indicators | `:focus-visible` outline (2px royal blue, 2px offset) on all interactive elements |
| Color contrast | Text colors meet WCAG 4.5:1 AA ratio on dark backgrounds |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` disables all animations/transitions |
| Touch targets | Primary touch targets sized to align with WCAG 2.5.5 guidance on mobile |
| Keyboard navigation | Full Tab-key navigation, logical focus order |
| Screen readers | `aria-hidden="true"` on decorative icons; descriptive `alt` text on all images |
| Lazy loading | `loading="lazy"` on below-fold images |
| Language | `<html lang="en">` |

---

## 🔍 SEO

| Feature | Implementation |
|---|---|
| Title tag | Keyword-rich: "Jasvant Dosanjh \| Senior Systems Administrator \| IT Infrastructure Expert, Seattle WA" |
| Meta description | Comprehensive with target keywords and location |
| Keywords meta | Systems Administrator, Cloud, HIPAA, AWS, Azure, Seattle |
| Open Graph | `og:type`, `og:url`, `og:title`, `og:description`, `og:image` |
| Twitter Card | `twitter:card`, `twitter:title`, `twitter:description` |
| Canonical URL | Self-referencing canonical link |
| JSON-LD structured data | Schema.org `Person` with `jobTitle`, `worksFor`, `address`, `knowsAbout`, `alumniOf`, `sameAs` |
| Heading hierarchy | Single `<h1>` → `<h2>` sections → `<h3>`/`<h4>` items |
| Image alt text | Descriptive alt text on all images |
| Semantic landmarks | All sections have `id` attributes for deep linking |

> **Sitemap note:** For multi-page expansion, add a `sitemap.xml` and reference it in a `robots.txt` at the repository root. GitHub Pages will serve these files if they are present there.

---

## 🔒 Security

| ID | Category | Test | Status |
|---|---|---|---|
| T1 | XSS / Input Validation | DOM-based XSS via querySelector | ✅ PASS — href validated with `/^#[a-zA-Z0-9_-]+$/` before use |
| T2 | Reverse Tabnapping | Missing `rel="noopener noreferrer"` | ✅ PASS — all `target="_blank"` links patched |
| T3 | Content Security Policy | No CSP header/meta | ✅ PASS — CSP meta tag with `base-uri 'self'`, `form-action 'none'`, `object-src 'none'` |
| T4 | Clickjacking | No X-Frame-Options | ⚠️ PARTIAL — meta tag included; full protection requires HTTP response header from host |
| T5 | MIME Sniffing | No X-Content-Type-Options | ⚠️ PARTIAL — meta tag included; full enforcement requires HTTP response header |
| T6 | Referrer Leakage | No Referrer-Policy | ⚠️ PARTIAL — meta tag included; HTTP header required for reliable enforcement |
| T7 | Permissions Policy | No Permissions-Policy | ⚠️ PARTIAL — meta tag included; HTTP header required for full effect |
| T8 | Supply Chain / SRI | CDN without integrity hash | ✅ PASS — Font Awesome loaded with SRI hash |
| T9 | Info Disclosure | `console.log` in production | ✅ PASS — removed |
| T10 | Info Disclosure | Raw GitHub URL path disclosure | ⚠️ ACCEPTED RISK — PDF resume served via raw GitHub URL |
| T11 | Base Tag Injection | Missing `base-uri` directive | ✅ PASS — `base-uri 'self'` added to CSP |
| T12 | Form Action Hijack | Missing `form-action` directive | ✅ PASS — `form-action 'none'` added to CSP |
| T13 | Plugin Injection | Missing `object-src` directive | ✅ PASS — `object-src 'none'` added to CSP |

### Security features summary:
- **Content Security Policy (CSP)** — via `<meta http-equiv>` (effective in modern browsers); includes `base-uri 'self'`, `form-action 'none'`, `object-src 'none'`
- **`rel="noopener noreferrer"`** on all external links (reverse tabnapping prevention)
- **Subresource Integrity (SRI)** hash on Font Awesome CDN
- **DOM XSS prevention** — anchor `href` validated with regex before `querySelector()`
- **No `console.log`** in production
- **`try/catch`** error handling around all DOM operations

> **HTTP Headers note:** `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy` are included as `<meta>` tags for documentation intent. Full enforcement requires configuring **real HTTP response headers** at the server level. On GitHub Pages, this typically requires placing it behind a compatible CDN/proxy (e.g., Cloudflare) or using a different host that supports custom response headers. If you deploy to Netlify instead of GitHub Pages, you can use a `_headers` file to serve these headers.

---

## 📱 Responsive Breakpoints

| Breakpoint | Target | Key Changes |
|---|---|---|
| > 1024px | Desktop | Full 4-column skills/passions grid, 2-column experience layout |
| ≤ 1024px | Large tablet | 3-column skills, 2-column passions, 35/65 experience split |
| ≤ 768px | Tablet / Mobile | Single-column everything, stacked experience/leadership |
| ≤ 480px | Small mobile | Buttons full-width centered, 1-column skills/passions |

---

## ⚡ Performance

- **No JavaScript frameworks** — vanilla JS only (~4KB)
- **Lazy loading** — `loading="lazy"` on below-fold images
- **`font-display: swap`** — via Google Fonts URL parameter (prevents FOIT)
- **Minimal repaints** — scroll handlers use `requestAnimationFrame` with RAF-pending guard
- **Intersection Observer** — deferred scroll-reveal instead of scroll-event-based animation
- **CSS custom properties** — single source of truth for colors and shadows

---

## 🌐 Browser Compatibility

Modern evergreen browsers (Chrome 90+, Firefox 90+, Safari 14+, Edge 90+).
- CSS Grid and `backdrop-filter` used with `-webkit-` prefix fallback
- `IntersectionObserver` has a graceful fallback (elements shown immediately if unsupported)
- `background-attachment: fixed` (parallax) degrades gracefully on iOS (static background)

---

## 🚀 Deployment

Deployed automatically via GitHub Pages from the `main` branch.
Live at: **https://jsdosanj.github.io/website/**

No build step required — push to `main` and GitHub Pages serves the static files directly.

---

## 📄 License

© 2025 Jasvant Dosanjh. All rights reserved.

