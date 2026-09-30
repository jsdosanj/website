// Regenerates the face-based logo and icons from public/images/logo-face.webp
// (a 512px square crop of the portrait). Run by hand when the photo changes:
//
//   node scripts/generate-icons.mjs
//
// Not part of the build: the outputs are committed, so a build never depends
// on this script or on the source photo.
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const SRC = 'public/images/logo-face.webp';
const WINE = '#421d24';

const circle = (size) =>
  Buffer.from(`<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`);

/** The face as a circle on a transparent background. */
const round = (size) =>
  sharp(SRC).resize(size, size).composite([{ input: circle(size), blend: 'dest-in' }]).png({ compressionLevel: 9, palette: size > 64, quality: 88 }).toBuffer();

const out = (path, buf) => sharp(buf).toFile(path);

// Standard icons: a transparent circle.
await out('public/icons/icon-512.png', await round(512));
await out('public/icons/icon-192.png', await round(192));
await out('public/icons/favicon-32.png', await round(32));
await out('public/icons/favicon-48.png', await round(48));

// Apple touch icon: iOS supplies its own rounded mask and forbids transparency.
await sharp(SRC).resize(180, 180).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile('public/icons/apple-touch-icon.png');

// Maskable icon: the face sits inside the central 80% safe zone on a wine field.
const inner = 512 * 0.62;
await sharp({ create: { width: 512, height: 512, channels: 4, background: WINE } })
  .composite([{ input: await round(Math.round(inner)), gravity: 'center' }])
  .png({ compressionLevel: 9, palette: true, quality: 88 })
  .toFile('public/icons/icon-maskable-512.png');

// favicon.ico: PNG-compressed entries at 16, 32 and 48.
const sizes = [16, 32, 48];
const pngs = await Promise.all(sizes.map((s) => round(s)));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(sizes.length, 4);
let offset = 6 + 16 * sizes.length;
const entries = sizes.map((s, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(s, 0);
  e.writeUInt8(s, 1);
  e.writeUInt16LE(1, 4); // planes
  e.writeUInt16LE(32, 6); // bits per pixel
  e.writeUInt32LE(pngs[i].length, 8);
  e.writeUInt32LE(offset, 12);
  offset += pngs[i].length;
  return e;
});
writeFileSync('public/favicon.ico', Buffer.concat([header, ...entries, ...pngs]));

// The small square used by the nav and footer logo.
await sharp(SRC).resize(128, 128).webp({ quality: 88 }).toFile('public/images/logo-face-128.webp');
console.log('icons written');
