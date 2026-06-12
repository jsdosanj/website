// Join the configured base path with an internal route so links work both
// locally and when served at the site root on Cloudflare Pages.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  if (path === '/') return BASE || '/';
  return BASE + (path.startsWith('/') ? path : '/' + path);
}
