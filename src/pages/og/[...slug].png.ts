// Build-time per-page OG images. Static output (getStaticPaths), rendered
// once at build via satori (VNode → SVG) + resvg (SVG → PNG) — no runtime
// cost, no headless browser dependency. See src/og/template.ts for the
// shared visual, and Base.astro's `ogImage` prop for how pages opt in.
import type { APIRoute, GetStaticPaths } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';
import { buildOgTree, OG_WIDTH, OG_HEIGHT, type OgProps } from '../../og/template';

export const ogPages: Record<string, OgProps> = {
  home: { eyebrow: 'whoami', title: 'IT Manager who sprints, ships & scales.' },
  about: { eyebrow: 'whoami', title: 'Jasvant Singh Dosanjh' },
  skills: { eyebrow: 'man jasvant', title: 'What I bring to the table.' },
  products: { eyebrow: 'ls ./products', title: 'Tools that turn friction into momentum.' },
  seva: { eyebrow: 'ik onkar', title: 'Parchar & Seva' },
  contact: { eyebrow: './contact --role "IT Manager"', title: "Let's connect." },
  resume: { eyebrow: 'cat resume.md', title: 'Résumé' },
  blog: { eyebrow: 'ls ./writing', title: 'Notes on AI, security & building things that last' },
  'blog-the-ai-race-just-fractured': { eyebrow: 'essay', title: 'The AI race just fractured — and the US did it to itself' },
  'blog-the-future-of-ai-runs-on-your-device': { eyebrow: 'essay', title: 'AI just became a single point of failure — the fix is local' },
};

export const getStaticPaths = (() => {
  return Object.keys(ogPages).map((slug) => ({ params: { slug } }));
}) satisfies GetStaticPaths;

type Font = { name: string; data: Buffer; weight: number; style: 'normal' };
let fontCache: Font[] | null = null;
function loadFonts(): Font[] {
  if (fontCache) return fontCache;
  const root = process.cwd();
  const read = (p: string) => fs.readFileSync(path.join(root, 'node_modules', p));
  fontCache = [
    { name: 'Bricolage Grotesque', data: read('@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-700-normal.woff'), weight: 700, style: 'normal' },
    { name: 'Hanken Grotesk', data: read('@fontsource/hanken-grotesk/files/hanken-grotesk-latin-400-normal.woff'), weight: 400, style: 'normal' },
    { name: 'JetBrains Mono', data: read('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff'), weight: 500, style: 'normal' },
  ];
  return fontCache;
}

export const GET: APIRoute = async ({ params }) => {
  const props = ogPages[params.slug as string] ?? { eyebrow: 'jasvant.dosanjhlabs.com', title: 'Jasvant Singh Dosanjh' };
  const svg = await satori(buildOgTree(props) as any, {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts: loadFonts(),
  });
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: OG_WIDTH } });
  const png = resvg.render().asPng();
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};
