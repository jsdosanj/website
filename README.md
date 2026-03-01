# Jasvant Dosanjh — Portfolio Website

> A dark-mode, terminal-inspired portfolio website for a Senior Systems Administrator

## 🎨 Design Philosophy

This portfolio embraces a **macOS terminal window aesthetic** — dark backgrounds, monospace fonts, royal blue (`#4169E1`) as the primary accent color, and subtle terminal UI chrome (three colored dots, `>` command prefixes, cursor blink). The goal is to create a memorable, professional presence that reflects both technical expertise and personality, without being over the top.

Key design decisions:
- **Dark mode only** — deepest dark (`#0d1117`) body, slightly lighter card backgrounds — easy on the eyes for technical audiences
- **Royal blue accent** — distinctive, professional, and readable against dark backgrounds
- **Compact two-column experience layout** — job metadata (title, company, dates) on the left; `>` bullet points on the right — reads like terminal output
- **Continuous parallax background** — a single photo (`IMG_1500.JPG`) runs behind all content sections with a dark overlay, giving the site depth without distraction
- **Fira Code monospace** for terminal elements (nav links, section prefixes, skill tags, dates), clean sans-serif for body copy

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure with ARIA landmarks |
| CSS3 | Custom properties, Grid, Flexbox, animations, glassmorphism |
| Vanilla JavaScript | Smooth scroll, Intersection Observer, input validation |
| Font Awesome 6.4 | Icon library (loaded with SRI integrity hash) |
| Google Fonts / Fira Code | Typography — Lato for body, Fira Code for terminal elements |
| GitHub Pages | Static deployment — no build step required |

## 🏗️ Architecture

```
website/
├── index.html          # Full portfolio — semantic HTML5, ARIA landmarks, security headers
├── styles.css          # All styling: variables → reset → navbar → sections → responsive
├── scripts.js          # Smooth scroll (XSS-safe), active nav, Intersection Observer animations
├── IMG_0654.JPG        # Headshot — used in hero section and about section
├── IMG_1180.JPG        # Landscape — hero section background image
├── IMG_1500.JPG        # Full-length — continuous parallax background for all sections
└── JSD Feb 26 SysAdmin Resume.pdf
```

**CSS organization:** Variables → Reset → Skip link → Navbar (terminal chrome) → Hero → Buttons → Sections → About → Experience → Skills → Education → Passions → Recommendations → Contact → Footer → Animations → Responsive

**Image usage:**
- `IMG_0654.JPG` — circular headshot with royal blue glow ring in hero and about sections
- `IMG_1180.JPG` — hero background with `rgba(13,17,23,0.85)` dark overlay
- `IMG_1500.JPG` — `background-attachment: fixed` parallax behind all non-hero sections with `rgba(13,17,23,0.88)` overlay

## ✨ Features

### Visual Design
- Dark mode terminal aesthetic with royal blue accents
- macOS terminal title bar in navbar (🔴 🟡 🟢 colored dots + `jasvant@portfolio ~ %` prompt)
- Blinking cursor (`_`) animation after hero greeting
- Subtle CRT scanline overlay on body (opacity ~0.03)
- Terminal command-style section titles (`> section_name`)
- Headshot with pulsing royal blue glow ring (`IMG_0654.JPG`)
- Hero section background image with dark overlay (`IMG_1180.JPG`)
- Continuous parallax background for all content sections (`IMG_1500.JPG`)

### Layout & Animations
- **Compact two-column experience section** — metadata left (30%), `>` bullet points right (70%), subtle blue vertical separator
- Scroll-triggered fade-in animations via Intersection Observer (fires when elements enter viewport, not on page load)
- Staggered reveal delays for elements within each section
- Hover animations on every interactive element (lift, glow, color inversion)
- Responsive grid layouts for skills, education, certifications
- Mobile-first responsive design (breakpoints at 768px, 480px)

### Security Hardening
- Content Security Policy (CSP) meta tag
- X-Frame-Options DENY (clickjacking protection)
- X-Content-Type-Options nosniff
- Referrer-Policy strict-origin-when-cross-origin
- Permissions-Policy (camera, mic, geolocation denied)
- `rel="noopener noreferrer"` on all external links (reverse tabnapping prevention)
- Subresource Integrity (SRI) hash on Font Awesome CDN
- DOM XSS prevention — anchor `href` values validated with `/^#[a-zA-Z0-9_-]+$/` before passing to `querySelector()`
- No `console.log` in production
- `try/catch` error handling around all DOM operations

### Accessibility
- Skip-to-content link (keyboard accessible)
- ARIA landmarks (`role="navigation"`, `role="main"`, `role="contentinfo"`)
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- `aria-labelledby` on all sections
- `aria-hidden="true"` on decorative icons
- `alt` text on all images
- `loading="lazy"` on non-critical images
- Keyboard navigable with visible focus states

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| > 768px | Desktop / Tablet |
| ≤ 768px | Mobile — experience stacks to single column |
| ≤ 480px | Small mobile — contact/about buttons stack vertically |

## 🔒 Security Audit Results

| ID | Category | Test | Status |
|---|---|---|---|
| T1 | XSS / Input Validation | DOM-based XSS via querySelector | ✅ PASS — href validated with regex before use |
| T2 | Reverse Tabnapping | Missing `rel="noopener noreferrer"` | ✅ PASS — all `target="_blank"` links patched |
| T3 | Content Security Policy | No CSP header/meta | ✅ PASS — CSP meta tag added |
| T4 | Clickjacking | No X-Frame-Options | ✅ PASS — `X-Frame-Options: DENY` added |
| T5 | MIME Sniffing | No X-Content-Type-Options | ✅ PASS — `nosniff` added |
| T6 | Referrer Leakage | No Referrer-Policy | ✅ PASS — `strict-origin-when-cross-origin` added |
| T7 | Permissions Policy | No Permissions-Policy | ✅ PASS — camera/mic/geo denied |
| T8 | Supply Chain / SRI | CDN without integrity hash | ✅ PASS — Font Awesome loaded with SRI hash |
| T9 | Info Disclosure | `console.log` in production | ✅ PASS — removed |
| T10 | Info Disclosure | Raw GitHub URL path disclosure | ⚠️ ACCEPTED RISK — PDF resume served via raw GitHub URL |
| T11 | Broken CSS | Truncated `ition:` property | ✅ PASS — fixed to `transition: var(--transition)` |
| T12 | Functional Bug | Wrong nav anchor for Passions | ✅ PASS — fixed `href="#passions"` |
| T13 | Accessibility | Missing a11y features | ✅ PASS — skip link, ARIA landmarks, roles added |
| T14 | HTTPS Enforcement | Mixed content check | ✅ PASS — all resources use HTTPS |
| T15 | Error Handling | Missing try/catch | ✅ PASS — try/catch added to all DOM operations |

## 🚀 Deployment

Deployed automatically via GitHub Pages from the `main` branch.  
Live at: **https://jsdosanj.github.io/website/**

## 📄 License

© 2025 Jasvant Dosanjh. All rights reserved.

