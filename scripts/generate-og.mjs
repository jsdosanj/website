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
import sharp from 'sharp';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'public', 'og');

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

// Literal hex, not design tokens: satori resolves no custom properties and no
// cascade, so every value has to be concrete. The comments name the token each
// one mirrors, so a palette change has a checklist.
const WINE_950 = '#1a0d10'; // navy-950
const WINE_800 = '#421d24'; // navy-800
const LILAC = '#d4c7ff'; // kesari-400

/** Every page that opts into a generated OG image, keyed by its `ogSlug`. */
const ogPages = {
  home: { eyebrow: 'technical program manager', title: 'Programs that ship: scoped, staffed and measured.' },
  work: { eyebrow: 'case studies', title: 'Four programs, start to finish.' },
  about: { eyebrow: 'background', title: 'Jasvant Singh Dosanjh' },
  skills: { eyebrow: 'capabilities', title: 'What I bring to the table.' },
  products: { eyebrow: 'products', title: 'Tools that turn friction into momentum.' },
  seva: { eyebrow: 'ik onkar', title: 'Parchar & Seva' },
  contact: { eyebrow: 'technical program manager', title: "Let's connect." },
  resume: { eyebrow: 'résumé', title: 'Résumé' },
  blog: { eyebrow: 'writing', title: 'Notes on AI, security & building things that last' },
  'blog-the-ai-race-just-fractured': {
    eyebrow: 'essay',
    title: 'The AI race just fractured, and the US did it to itself',
  },
  'blog-the-future-of-ai-runs-on-your-device': {
    eyebrow: 'essay',
    title: 'AI just became a single point of failure, and the fix is local',
  },
};

/** satori takes a plain VNode tree, so no JSX and no React needed here. */
const el = (type, props, children) => ({ type, props: { ...props, children } });

/**
 * The shared card: midnight wine falling to near-black, a lilac mono eyebrow,
 * white display type, and my face on the right. A link preview with a face and
 * a name on it is recognised in a feed far faster than a text-only card.
 */
function card({ eyebrow, title }, faceDataUri) {
  return el(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        background: WINE_950,
        backgroundImage: `linear-gradient(135deg, ${WINE_800} 0%, ${WINE_950} 100%)`,
        padding: 64,
        fontFamily: 'Inter',
      },
    },
    [
      // left column: eyebrow, title, byline
      el(
        'div',
        { style: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingRight: 32 } },
        [
          el(
            'div',
            {
              style: {
                display: 'flex',
                color: LILAC,
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
                color: '#ffffff',
                // Two steps only: a continuous scale would render a 33- and a
                // 35-character title at visibly different sizes for no reason
                // a reader could perceive.
                fontSize: title.length > 34 ? 56 : 68,
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: -1.5,
                maxWidth: 700,
              },
            },
            title
          ),
          el(
            'div',
            { style: { display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'JetBrains Mono', fontSize: 21 } },
            [
              el('span', { style: { color: '#ffffff', fontWeight: 500 } }, 'Jasvant Singh Dosanjh'),
              el('span', { style: { color: LILAC } }, 'Technical Program Manager · Seattle, WA'),
              el('span', { style: { color: 'rgba(255,255,255,0.6)' } }, 'jasvant.me'),
            ]
          ),
        ]
      ),
      // right column: the face
      el(
        'div',
        { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', width: 340 } },
        el('img', {
          src: faceDataUri,
          width: 300,
          height: 300,
          style: { width: 300, height: 300, borderRadius: 150, border: `6px solid ${LILAC}` },
        })
      ),
    ]
  );
}

async function loadFonts() {
  const read = (pkg) => readFile(path.join(ROOT, 'node_modules', pkg));
  const [display, mono] = await Promise.all([
    read('@fontsource/inter/files/inter-latin-500-normal.woff'),
    read('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff'),
  ]);
  return [
    { name: 'Inter', data: display, weight: 500, style: 'normal' },
    { name: 'JetBrains Mono', data: mono, weight: 500, style: 'normal' },
  ];
}

/** satori reads PNG or JPEG data URIs, not WebP, so the face is re-encoded once here. */
async function loadFace() {
  const png = await sharp(path.join(ROOT, 'public/images/logo-face.webp')).resize(300, 300).png().toBuffer();
  return `data:image/png;base64,${png.toString('base64')}`;
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
  const face = await loadFace();

  for (const [slug, props] of Object.entries(ogPages)) {
    const svg = await satori(card(props, face), { width: OG_WIDTH, height: OG_HEIGHT, fonts });
    const png = new Resvg(svg, { fitTo: { mode: 'width', value: OG_WIDTH } }).render().asPng();
    await writeFile(path.join(OUT_DIR, `${slug}.png`), png);
  }
  console.log(`  generated ${Object.keys(ogPages).length} OG images into public/og/`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
