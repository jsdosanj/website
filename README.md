# jasvant.dosanjhlabs.com

> Technical Program Manager. Programs that ship — scoped, staffed, and measured.

The personal site of [Jasvant Singh Dosanjh](https://linkedin.com/in/jasvantsd) — a Technical
Program Manager, open to relocating. It carries the delivery record (case studies at interview
depth, a career roadmap to scale, a live web résumé), the products built alongside it, and the
parchar & seva work.

**Live:** https://jasvant.dosanjhlabs.com

## Stack

- **[Next.js 15](https://nextjs.org)** (App Router) + React 19 + TypeScript in `strict` mode
- **[Tailwind CSS 4](https://tailwindcss.com)** — the design system lives in `app/globals.css`
  as `@theme` tokens and `@utility` steps, not as class soup in the markup
- **[GSAP](https://gsap.com)** + [Lenis](https://lenis.darkroom.engineering) for the motion
  layer, loaded dynamically and fully disabled under `prefers-reduced-motion`
- **[@opennextjs/cloudflare](https://opennext.js.org/cloudflare)** → Cloudflare Workers

Most of the site is prerendered. Two things are not, which is why it runs on a worker rather
than as static output:

- the contact form is a **Server Action** (`app/contact/actions.ts`), so the destination address
  never reaches the browser and the form submits with JavaScript disabled;
- the GitHub / PyPI / HuggingFace figures in `data/live.ts` **revalidate on a timer** instead of
  being frozen into the HTML at build time.

## Design

A paper-white ground with navy for structure and kesari gold as a deliberate, small accent. The
system is built to Apple's [Human Interface
Guidelines](https://developer.apple.com/design/human-interface-guidelines/) along five axes,
documented at the top of `app/globals.css`:

| Axis | What it means here |
|---|---|
| Type | The real iOS ramp (Large Title 34/41 → Caption 2 11/13), SF Pro's tracking curve, and Bricolage Grotesque's `opsz` axis wired up so the display face is drawn for its rendered size |
| Layout | An 8pt grid; a 44pt minimum on every control with ~12pt between them |
| Materials | Translucency belongs to the functional layer only — the nav is the one place glass is used, never the content layer |
| Motion | Purposeful, brief, and optional. Every animated element's resting CSS state is its finished state, so a blocked script costs the animation and never the content |
| Colour | Semantic tokens, never the sole carrier of meaning. `kesari-600` is documented as icons-and-rules only (3.4:1); `kesari-700` is the text-safe step |

The Sikh visual identity (Khanda, jali lattice, ੴ, Gurmukhi type) is part of whose site this is,
and is retuned for the light surface rather than dropped. Icons are drawn to one construction in
`components/Icon.tsx`, and each headline program has its own drawn mark in
`components/ProgramMark.tsx` — the mark describes the *shape* of the program (a recovery, a
greenfield build, a rollout), not its subject.

## Pages

| Route | Purpose |
|---|---|
| `/` | Delivery record, the three reqs I map to, products, principles |
| `/work` | Three case studies at interview depth — scope, stakeholders, plan, risks, what went wrong, retro |
| `/about` | Track record, the RAID register I keep, programs led, career roadmap, education |
| `/skills` | Capabilities, with program & delivery management featured |
| `/products` | Every product, plus live release data from GitHub / PyPI / HuggingFace |
| `/seva` | Parchar & seva — speaking, Basics of Sikhi, Sikhi.io |
| `/resume` | The live web résumé, generated from the same data as everything else |
| `/blog` | Essays, plus recent LinkedIn posts |
| `/contact` | Ways to connect, the PDF résumé, and the message form |
| `/references` | Professional references — name, role and organization only, no contact details |
| `/ai-policy` | Crawl-and-cite welcome; AI/ML training reserved |

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
npm run audit      # clean build + the full design audit (see below)
npm run preview    # build for Workers and run it in workerd locally
npm run deploy     # build for Workers and deploy
```

`npm run og` regenerates the Open Graph images into `public/og/`. It runs
automatically before `build`, `preview` and `deploy`, and fails the build if a page
asks for an `ogSlug` the generator has no entry for.

## Verifying the design system

The claims above are checkable, so they are checked. `scripts/audit/` drives a real browser over
every page at phone and desktop width:

| Check | What fails it |
|---|---|
| `contrast.cjs` | Any text under its WCAG AA ratio, any horizontal overflow, any JS error |
| `hit-targets.cjs` | Any control whose layout box is under 44×44 |
| `text-scaling.cjs` | Any text clipped, or any sideways scroll, at 200% text size |
| `motion.cjs` | Motion surviving `prefers-reduced-motion`, content left hidden by it, a missing focus ring, a control with no press state |

`npm run audit` does a **clean** build first and refuses to run if the served page has no
stylesheet — `next build` over an existing `.next`, or a leftover `next start`, can serve HTML
pointing at a replaced CSS chunk, and every check would then pass vacuously. Run one on its own
while iterating:

```bash
node scripts/audit/contrast.cjs           # all pages
node scripts/audit/contrast.cjs /work     # one page
```

CI runs the whole suite on every pull request.

## Editing content

All content lives in `data/` as plain TypeScript — no template surgery:

- `site.ts` — brand, positioning, target roles, nav, socials, résumé paths
- `experience.ts` — every role, every bullet in Google's XYZ form, plus the machine-readable
  spans the career roadmap draws from
- `caseStudies.ts` — the `/work` deep dives
- `projectsLed.ts` — headline programs (with their marks) and the compact tier
- `value.ts` — the three role lanes and the grouped KPIs, each metric carrying its source
- `products.ts`, `skills.ts`, `education.ts`, `leadership.ts`, `seva.ts`, `journey.ts`,
  `recommendations.ts`, `posts.ts`
- `references.ts` — professional references, grouped by organization; names, roles and
  organizations only, deliberately no emails or phone numbers
- `live.ts` — the fetchers behind the live release figures

Images live in `public/images/`, résumés in `public/resumes/`. Open Graph images are
generated into `public/og/` at build time by `scripts/generate-og.mjs` — they are plain
static files, not a route. A prerendered route handler's body lives in the incremental
cache rather than in the static assets, so on Workers the request reached the server
function, which re-rendered the image and tried to read fonts out of `node_modules` that
a Worker bundle does not contain. Generating real PNGs means link previews cost no worker
invocation and depend on no cache binding.

## Deploying

Cloudflare **Workers**, via OpenNext — not Pages. The old setup was a git-connected
Pages project that built Astro's `dist/`; there is no `dist/` any more.

`wrangler.jsonc` holds the Worker config and `open-next.config.ts` the adapter config.

### Automatic: the GitHub Actions workflow

`.github/workflows/deploy.yml` is the live deploy path. It runs on every push to
`main` — which includes every PR merge — and on manual dispatch, and it needs two
repository secrets:

| Secret | What it is |
|---|---|
| `CLOUDFLARE_API_TOKEN` | a token with **Edit Cloudflare Workers** |
| `CLOUDFLARE_ACCOUNT_ID` | the account the Worker lives in |

It runs `npm run deploy`, which is both build stages plus the upload:
`opennextjs-cloudflare build && opennextjs-cloudflare deploy`. A successful run ends
with `Uploaded website` and a `Current Version ID`.

If the secrets are absent the job reports a `::notice` and passes rather than failing,
so a fork or a fresh clone does not show a red X for a deploy it was never configured
to do. That also means a **revoked or mistyped token deploys nothing while still
reporting green** — if a merge looks deployed but the site has not changed, check that
step's log first.

Cloudflare's own git integration must stay **disconnected** (the Worker → Settings →
Build → disconnect repository). Leaving it connected gives you two paths deploying the
same commit; see the alternative below.

### Deploying by hand

```bash
npx wrangler login
npm run deploy      # builds both stages and deploys
```

Then point `jasvant.dosanjhlabs.com` at the Worker (Settings → Domains &amp; Routes → Add
custom domain). A hostname can only be attached to one project at a time, so remove it
from the old Pages project first, and delete or disconnect that project so it stops
building on push.

### The alternative: git-connected Workers Builds

**Not in use.** Documented because it is the obvious thing to reach for, and because it
fails in a way that is easy to misread.

A Next app on Workers is a two-stage build: `next build` produces `.next/`, and then
OpenNext compiles that into `.open-next/worker.js`, which is what `main` in
`wrangler.jsonc` points at. `npm run build` only does the first stage, so it is **not**
a valid build command here. Cloudflare auto-detects Next and sets exactly that, and the
deploy step then fails with:

```
Could not find compiled Open Next config, did you run the build command?
```

which is `retrieveCompiledConfig()` failing to find `.open-next/.build/open-next.config.edge.mjs`
— a file only the OpenNext stage writes. To use this path instead, set:

| Setting | Value |
|---|---|
| Build command | `npm run build:worker` |
| Deploy command | `npx wrangler deploy` |
| Node version | 22 |

`build:worker` runs the OG generation and both build stages. The build also needs
`devDependencies` — `@opennextjs/cloudflare`, `tailwindcss`, `typescript`, `satori` and
`@resvg/resvg-js` all live there — so the builder must not run with
`NODE_ENV=production`, which would make `npm ci` skip them.

Switching to this path means deleting `.github/workflows/deploy.yml` or unsetting its
two secrets, or both paths will deploy every merge.

### Incremental cache

Off by default, so the live release figures refetch per render rather than sharing the
six-hour revalidate window across isolates. To back it with Workers KV, change both
places together:

1. `npx wrangler kv namespace create NEXT_INC_CACHE_KV`, then uncomment the
   `kv_namespaces` block in `wrangler.jsonc` with the id it prints.
2. Re-add the `incrementalCache` override in `open-next.config.ts` (the file shows the
   two lines).

Only step 2 breaks deploys: a missing binding degrades to a cache miss at runtime, but
`opennextjs-cloudflare deploy` populates the cache *before* uploading and throws
`No KV binding "NEXT_INC_CACHE_KV" found!` when the override has nowhere to write.

## AI-crawler & SEO policy

`public/robots.txt`, `public/ai.txt`, `public/llms.txt` and `public/.well-known/tdmrep.json`
declare it: answer and search AI (OAI-SearchBot, PerplexityBot, Claude-SearchBot…) may crawl and
cite this site, while training crawlers (GPTBot, ClaudeBot, CCBot…) are disallowed and the content
is TDM-reserved. `next.config.ts` sends the matching `X-Robots-Tag` / `Content-Usage` /
`TDM-Reservation` headers on every response. The human-readable policy is at `/ai-policy`, and
sitemap priorities live in `app/sitemap.ts`.
