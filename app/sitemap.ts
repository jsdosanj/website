import type { MetadataRoute } from 'next';
import { essays } from './blog/essays';
import { site } from '@/data/site';

/**
 * Priorities carry over from the Astro sitemap integration: the home page and
 * the four conversion pages lead, the AI policy trails. The 404 and the OG
 * image routes are simply absent rather than filtered — this lists routes
 * explicitly, so there is nothing to exclude.
 */
const PRIORITY: Record<string, number> = {
  '/': 1,
  '/work': 0.9,
  '/about': 0.9,
  '/products': 0.9,
  '/contact': 0.9,
  '/ai-policy': 0.3,
};

const routes = [
  '/', '/work', '/about', '/skills', '/products', '/seva',
  '/resume', '/references', '/contact', '/blog', '/ai-policy',
  ...essays.map((e) => `/blog/${e.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: new URL(route, site.url).href,
    lastModified,
    changeFrequency: 'weekly',
    priority: PRIORITY[route] ?? 0.7,
  }));
}
