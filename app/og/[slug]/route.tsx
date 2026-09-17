import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { OG_HEIGHT, OG_WIDTH, OgCard, ogPages } from '@/lib/og-template';

/**
 * Per-page OG images, prerendered at build. The URLs are unchanged from the
 * Astro build (`/og/<slug>.png`), so links already shared keep resolving to an
 * image.
 *
 * force-static plus generateStaticParams means every image is rasterized once
 * during the build and served as a static asset — no per-request render, and
 * nothing for a bot crawling a hundred links to melt.
 */
export const dynamic = 'force-static';

export function generateStaticParams() {
  return Object.keys(ogPages).map((slug) => ({ slug: `${slug}.png` }));
}

/**
 * Three weights of three families, read from the @fontsource packages in
 * node_modules. Loaded once per build rather than once per image: with eleven
 * images that is three file reads instead of thirty-three.
 */
let fontsPromise: Promise<{ name: string; data: ArrayBuffer; weight: 400 | 500 | 700; style: 'normal' }[]> | null = null;

function loadFonts() {
  if (!fontsPromise) {
    const read = async (pkg: string) => {
      const buf = await readFile(path.join(process.cwd(), 'node_modules', pkg));
      // A Buffer is a view into a possibly larger pool, so hand satori the
      // exact byte range rather than the whole underlying ArrayBuffer.
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
    };
    fontsPromise = Promise.all([
      read('@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-700-normal.woff'),
      read('@fontsource/hanken-grotesk/files/hanken-grotesk-latin-400-normal.woff'),
      read('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff'),
    ]).then(([display, body, mono]) => [
      { name: 'Bricolage Grotesque', data: display, weight: 700 as const, style: 'normal' as const },
      { name: 'Hanken Grotesk', data: body, weight: 400 as const, style: 'normal' as const },
      { name: 'JetBrains Mono', data: mono, weight: 500 as const, style: 'normal' as const },
    ]);
  }
  return fontsPromise;
}

export async function GET(_req: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const key = slug.replace(/\.png$/, '');
  const props = ogPages[key] ?? { eyebrow: 'jasvant.dosanjhlabs.com', title: 'Jasvant Singh Dosanjh' };

  return new ImageResponse(<OgCard {...props} />, {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts: await loadFonts(),
    headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
}
