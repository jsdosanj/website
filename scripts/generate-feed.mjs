// Writes public/feed.xml (RSS 2.0) from app/blog/essays.ts at build time.
//
// A static file, for the same reason the OG images are: a prerendered route
// handler's body lives in the incremental cache on Workers, not in the static
// assets, so it can 500 when no cache is bound. A real file in public/ is
// served straight from Workers Assets.
//
// essays.ts is TypeScript and this script is plain Node, so the fields are read
// back out with a regex, the same trade generate-og.mjs makes for ogSlugs.
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const SITE = 'https://jasvant.me';
const AUTHOR = 'Jasvant Singh Dosanjh';

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const src = await readFile(path.join(ROOT, 'app/blog/essays.ts'), 'utf8');
const field = (block, name) => {
  const m = block.match(new RegExp(`${name}:\\s*(?:\\n\\s*)?(['"\`])((?:\\\\.|(?!\\1).)*)\\1`, 's'));
  return m ? m[2].replace(/\\'/g, "'") : '';
};

const items = [...src.matchAll(/\{\s*slug:[\s\S]*?\n  \},/g)].map((m) => {
  const block = m[0];
  return {
    slug: field(block, 'slug'),
    title: field(block, 'title'),
    published: field(block, 'published'),
    dek: field(block, 'dek'),
  };
});
if (items.length === 0) throw new Error('generate-feed: found no essays in app/blog/essays.ts');

const rfc822 = (iso) => new Date(`${iso}T12:00:00Z`).toUTCString();
const newest = items.map((i) => i.published).sort().at(-1);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${esc(AUTHOR)}: Writing</title>
    <link>${SITE}/blog</link>
    <description>Essays on AI, security, GRC and building local-first, privacy-respecting software.</description>
    <language>en-us</language>
    <lastBuildDate>${rfc822(newest)}</lastBuildDate>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
${items
  .map(
    (i) => `    <item>
      <title>${esc(i.title)}</title>
      <link>${SITE}/blog/${i.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${i.slug}</guid>
      <pubDate>${rfc822(i.published)}</pubDate>
      <dc:creator>${esc(AUTHOR)}</dc:creator>
      <description>${esc(i.dek)}</description>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>
`;

await writeFile(path.join(ROOT, 'public/feed.xml'), xml);
console.log(`  generated feed.xml with ${items.length} items`);
