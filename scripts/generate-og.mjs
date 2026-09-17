// Generates the per-page Open Graph images into public/og/ at build time.
//
// These used to be a Next route handler using next/og. It prerendered
// correctly, but a prerendered ROUTE HANDLER's body lives in the incremental
// cache rather than in the static assets — so on Workers the request reached
// the server function, which re-rendered the image and tried to read the font
// files out of node_modules. There is no node_modules in a Worker bundle, so
// every OG image 500'd unless a KV cache happened to be bound and populated.
// Link previews quietly depending on a cache binding is not a good trade.
//
// Writing real PNGs into public/ removes the whole class of problem: they are
// served straight from Workers Assets with immutable caching, cost no worker
// invocation, and need no fonts at runtime. satori and resvg stay
// devDependencies — they run here and never reach the bundle.
//
// The slugs below must match the `ogSlug` values passed to pageMetadata() in
// lib/site-metadata.ts. A page asking for a slug with no entry here gets a
// 404 for its image, so the check at the bottom of this file fails the build
// instead of letting that ship.
import { Resvg } from '@resvg/resvg-js';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import satori from 'satori';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'public', 'og');

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

// Literal hex, not design tokens: satori resolves no custom properties and no
// cascade, so every value has to be concrete. The comments name the token each
// one mirrors, so a palette change has a checklist.
const PAPER_50 = '#ffffff';
const PAPER_100 = '#fbfcfd';
const PAPER_300 = '#eaeef3';
const NAVY_900 = '#10203a';
const NAVY_600 = '#35598f';
const INK_500 = '#5d6e88';
const INK_400 = '#7b8aa0';
const KESARI_500 = '#e09c22';
const KESARI_700 = '#94620d';

/** Every page that opts into a generated OG image, keyed by its `ogSlug`. */
const ogPages = {
  home: { eyebrow: 'technical program manager', title: 'Programs that ship — scoped, staffed, and measured.' },
  work: { eyebrow: 'case studies', title: 'Three programs, start to finish.' },
  about: { eyebrow: 'background', title: 'Jasvant Singh Dosanjh' },
  skills: { eyebrow: 'capabilities', title: 'What I bring to the table.' },
  products: { eyebrow: 'products', title: 'Tools that turn friction into momentum.' },
  seva: { eyebrow: 'ik onkar', title: 'Parchar & Seva' },
  contact: { eyebrow: 'technical program manager', title: "Let's connect." },
  resume: { eyebrow: 'résumé', title: 'Résumé' },
  references: { eyebrow: 'on request', title: 'References' },
  blog: { eyebrow: 'writing', title: 'Notes on AI, security & building things that last' },
  'blog-the-ai-race-just-fractured': {
    eyebrow: 'essay',
    title: 'The AI race just fractured — and the US did it to itself',
  },
  'blog-the-future-of-ai-runs-on-your-device': {
    eyebrow: 'essay',
    title: 'AI just became a single point of failure — the fix is local',
  },
};

/** satori takes a plain VNode tree, so no JSX and no React needed here. */
const el = (type, props, children) => ({ type, props: { ...props, children } });

/**
 * The shared card: paper ground, a kesari rule above a mono eyebrow, navy
 * display type, and a footer byline — so a shared link looks like it came from
 * this specific site rather than a generic template.
 */
function card({ eyebrow, title }) {
  return el(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: PAPER_100,
        // the same two ambient washes the site's .bg-page uses
        backgroundImage:
          'radial-gradient(52% 58% at 6% -12%, rgba(224,156,34,0.16), rgba(255,255,255,0)), radial-gradient(48% 55% at 98% 2%, rgba(53,89,143,0.16), rgba(255,255,255,0))',
        padding: 56,
        fontFamily: 'Hanken Grotesk',
      },
    },
    [
      el(
        'div',
        {
          style: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 24,
            background: PAPER_50,
            border: `1px solid ${PAPER_300}`,
            overflow: 'hidden',
          },
        },
        [
          // top rule — the kesari accent as a full-bleed hairline
          el('div', { style: { display: 'flex', height: 6, background: KESARI_500 } }),
          el(
            'div',
            {
              style: {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 62px',
              },
            },
            [
              el(
                'div',
                {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    color: KESARI_700,
                    fontSize: 22,
                    fontWeight: 500,
                    letterSpacing: 3,
                    textTransform: 'uppercase',
                    fontFamily: 'JetBrains Mono',
                  },
                },
                eyebrow
              ),
              el(
                'div',
                {
                  style: {
                    display: 'flex',
                    marginTop: 24,
                    color: NAVY_900,
                    // Two steps only: a continuous scale would render a 33- and
                    // a 35-character title at visibly different sizes for no
                    // reason a reader could perceive.
                    fontSize: title.length > 34 ? 58 : 70,
                    fontWeight: 700,
                    lineHeight: 1.06,
                    fontFamily: 'Bricolage Grotesque',
                    letterSpacing: -1.5,
                    maxWidth: 980,
                  },
                },
                title
              ),
            ]
          ),
          el(
            'div',
            {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '20px 62px 26px',
                borderTop: `1px solid ${PAPER_300}`,
                fontSize: 21,
                fontFamily: 'JetBrains Mono',
              },
            },
            [
              el('span', { style: { color: NAVY_900, fontWeight: 500 } }, 'Jasvant Singh Dosanjh'),
              el('span', { style: { color: INK_400 } }, '·'),
              el('span', { style: { color: NAVY_600 } }, 'Technical Program Manager'),
              el('span', { style: { color: INK_500, marginLeft: 'auto' } }, 'jasvant.dosanjhlabs.com'),
            ]
          ),
        ]
      ),
    ]
  );
}

async function loadFonts() {
  const read = (pkg) => readFile(path.join(ROOT, 'node_modules', pkg));
  const [display, body, mono] = await Promise.all([
    read('@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-700-normal.woff'),
    read('@fontsource/hanken-grotesk/files/hanken-grotesk-latin-400-normal.woff'),
    read('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff'),
  ]);
  return [
    { name: 'Bricolage Grotesque', data: display, weight: 700, style: 'normal' },
    { name: 'Hanken Grotesk', data: body, weight: 400, style: 'normal' },
    { name: 'JetBrains Mono', data: mono, weight: 500, style: 'normal' },
  ];
}

/**
 * Every `ogSlug:` in lib/site-metadata.ts callers must have an entry above.
 * Reading them back out of the source is cruder than importing them, but the
 * pages are .tsx and this script is plain Node — and a build that fails here
 * beats a link preview that 404s in someone's Slack.
 */
async function checkSlugsMatchPages() {
  const used = new Set();
  const walk = async (dir) => {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
        const src = await readFile(full, 'utf8');
        for (const m of src.matchAll(/ogSlug:\s*['"`]([^'"`]+)['"`]/g)) {
          // Skip interpolated values; they are resolved just below.
          if (!m[1].includes('${')) used.add(m[1]);
        }
        // The two essays build theirs from the file's own SLUG constant.
        for (const m of src.matchAll(/ogSlug:\s*`([^`]*)\$\{SLUG\}([^`]*)`/g)) {
          const slug = /const SLUG = '([^']+)'/.exec(src)?.[1];
          if (slug) used.add(`${m[1]}${slug}${m[2]}`);
        }
      }
    }
  };
  await walk(path.join(ROOT, 'app'));

  const missing = [...used].filter((slug) => !(slug in ogPages));
  if (missing.length) {
    throw new Error(
      `These pages ask for an OG image with no entry in scripts/generate-og.mjs: ${missing.join(', ')}`
    );
  }
  const unused = Object.keys(ogPages).filter((slug) => !used.has(slug));
  if (unused.length) console.warn(`  note: no page references ${unused.join(', ')}`);
}

async function main() {
  await checkSlugsMatchPages();
  await mkdir(OUT_DIR, { recursive: true });
  const fonts = await loadFonts();

  for (const [slug, props] of Object.entries(ogPages)) {
    const svg = await satori(card(props), { width: OG_WIDTH, height: OG_HEIGHT, fonts });
    const png = new Resvg(svg, { fitTo: { mode: 'width', value: OG_WIDTH } }).render().asPng();
    await writeFile(path.join(OUT_DIR, `${slug}.png`), png);
  }
  console.log(`  generated ${Object.keys(ogPages).length} OG images into public/og/`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
