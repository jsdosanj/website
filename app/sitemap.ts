import type { MetadataRoute } from 'next';
import { essayBySlug, essays } from './blog/essays';
import { site } from '@/data/site';

/**
 * Priorities carry over from the Astro sitemap integration: the home page and
 * the conversion pages lead, the AI policy trails.
 *
 * `lastModified` is a real date, not "now". A sitemap that claims every URL
 * changed at every build teaches search engines to ignore its dates, so pages
 * use site.lastUpdated (bumped when content changes) and essays use their own
 * publish date.
 */
const PRIORITY: Record<string, number> = {
  '/': 1,
  '/work': 0.9,
  '/about': 0.9,
  '/technical-program-manager': 0.9,
  '/products': 0.9,
  '/contact': 0.9,
  '/blog': 0.8,
  '/ai-policy': 0.3,
};

const routes = [
  '/', '/technical-program-manager', '/work', '/about', '/skills', '/products', '/seva',
  '/resume', '/contact', '/blog', '/ai-policy',
  ...essays.map((e) => `/blog/${e.slug}`),
];

/** Pages that carry the author's face, so image search can associate it with the name. */
const WITH_FACE = new Set(['/', '/about']);

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => {
    const slug = route.startsWith('/blog/') ? route.slice('/blog/'.length) : undefined;
    const essay = slug ? essayBySlug(slug) : undefined;
    return {
      url: new URL(route, site.url).href,
      lastModified: new Date(essay?.published ?? site.lastUpdated),
      changeFrequency: essay ? 'yearly' : route === '/' || route === '/blog' ? 'weekly' : 'monthly',
      priority: essay ? 0.7 : PRIORITY[route] ?? 0.6,
      ...(WITH_FACE.has(route) ? { images: [new URL(site.faceImage, site.url).href] } : {}),
    };
  });
}
