// Shared helpers for the design audits.
//
// These scripts check the things the design system claims, against the real
// rendered pages, in a real browser. They are here rather than in a scratch
// directory because every one of them found a genuine bug at least once, and
// because a claim like "every control clears 44pt" should be re-checkable
// after any change rather than taken on trust.
//
// IMPORTANT: run them against a CLEAN build. `next build` over an existing
// .next can leave prerendered HTML pointing at a CSS chunk hash the new build
// replaced — the page then loads with no stylesheet at all and every audit
// passes vacuously. `npm run audit` does the clean build for you.
const { chromium } = require('playwright');
const fs = require('node:fs');

const BASE = process.env.AUDIT_BASE || 'http://localhost:4321';

const PATHS = [
  '/', '/work', '/about', '/skills', '/products', '/blog', '/seva',
  '/contact', '/resume', '/references', '/ai-policy', '/404',
];

/** Phone and desktop. The two widths where the layout decisions differ most. */
const VIEWPORTS = [390, 1440];

/**
 * This sandbox ships Chromium at a fixed path and blocks the download
 * Playwright would otherwise attempt; CI installs it the normal way. Use the
 * explicit binary when one is actually there, and otherwise let Playwright
 * resolve its own — hard-coding the path made the audit unrunnable anywhere
 * else.
 */
async function browser() {
  const explicit = process.env.CHROMIUM || '/opt/pw-browsers/chromium';
  const opts = fs.existsSync(explicit) ? { executablePath: explicit } : {};
  return chromium.launch(opts);
}

module.exports = { BASE, PATHS, VIEWPORTS, browser };
