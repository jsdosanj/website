// Shared metadata helper. Next's Metadata API replaces the hand-written <head>
// the Astro layout built, so per-route SEO is typed rather than stringly.
import type { Metadata } from 'next';
import { site } from '@/data/site';

const BASE_KEYWORDS = [
  'Jasvant Dosanjh', 'Jasvant Singh Dosanjh', 'Technical Program Manager', 'TPM',
  'Technical Project Manager', 'IT Program Manager', 'program management', 'project management',
  'roadmap', 'risk management', 'budget management', 'vendor management', 'stakeholder management',
  'Agile', 'Waterfall', 'Scrum', 'SDLC', 'Jira', 'Azure DevOps', 'PMP',
  'Sightline', 'Bastion', 'Cairn', 'Jamf Pro', 'Intune', 'JumpCloud',
  'NIST', 'HIPAA', 'FERPA', 'GRC', 'open to work', 'open to relocating',
];

/**
 * One descriptor per route, passed to both `pageMetadata` (for <head>) and
 * `pageGraph` (for JSON-LD), so a page's title, description and canonical can
 * never drift between the two.
 */
export type PageDescriptor = {
  title?: string;
  description?: string;
  keywords?: string[];
  path: string;
  ogSlug?: string;
  noindex?: boolean;
};

export function pageMetadata(opts: PageDescriptor): Metadata {
  const { title, description = site.description, keywords = [], path, ogSlug, noindex } = opts;
  const fullTitle = title ? `${title} · ${site.brand}` : `${site.founder} — ${site.shortTagline}`;
  const canonical = new URL(path, site.url).href;
  const ogImage = new URL(`/og/${ogSlug ?? 'home'}.png`, site.url).href;

  return {
    title: fullTitle,
    description,
    keywords: [...new Set([...BASE_KEYWORDS, ...keywords])],
    authors: [{ name: site.founder, url: site.url }],
    alternates: { canonical },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    openGraph: {
      type: 'website',
      siteName: site.brand,
      title: fullTitle,
      description,
      url: canonical,
      locale: 'en_US',
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${site.brand} — ${site.tagline}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

/** Structured-data graph: Organization + Person + ProfilePage + WebSite. */
export function personGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://dosanjhlabs.com/#organization',
        name: 'Dosanjh Labs',
        url: 'https://dosanjhlabs.com',
        founder: { '@id': `${site.url}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${site.url}/#person`,
        name: site.founder,
        alternateName: 'Jasvant Dosanjh',
        url: site.url,
        image: new URL('/images/headshot-v2.jpg', site.url).href,
        description: site.description,
        jobTitle: 'Technical Program Manager',
        worksFor: { '@id': 'https://dosanjhlabs.com/#organization' },
        address: { '@type': 'PostalAddress', addressCountry: 'US' },
        knowsLanguage: ['English', 'Punjabi', 'Hindi', 'Urdu'],
        knowsAbout: [
          'Technical Program Management', 'Technical Project Management', 'Agile Delivery',
          'SDLC', 'Roadmapping', 'Risk Management', 'Budget Management', 'Vendor Management',
          'Stakeholder Management', 'NIST CSF', 'HIPAA', 'FERPA', 'GRC', 'IT Security',
          'Cloud Infrastructure', 'Jamf Pro', 'Microsoft Intune', 'JumpCloud',
          'Endpoint Management', 'AI', 'NLP', 'OCR', 'Gurmukhi OCR',
          'Sikh Heritage Preservation', 'Gurmat Education',
        ],
        hasOccupation: site.roles.map((r) => ({ '@type': 'Occupation', name: r })),
        seeks: site.roles.map((r) => ({ '@type': 'Demand', name: `${r} role` })),
        sameAs: [site.socials.linkedin, site.socials.github, site.socials.huggingface],
      },
      {
        '@type': 'ProfilePage',
        '@id': `${site.url}/#profilepage`,
        url: site.url,
        name: site.founder,
        mainEntity: { '@id': `${site.url}/#person` },
        isPartOf: { '@id': `${site.url}/#website` },
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.brand,
        description: site.description,
        publisher: { '@id': `${site.url}/#person` },
        inLanguage: 'en',
      },
    ],
  };
}

/**
 * Per-page structured data: the WebPage node and the breadcrumb trail derived
 * from its path. The site-wide Organization / Person / WebSite graph lives in
 * the root layout; this is only what changes per route.
 */
export function pageGraph(opts: PageDescriptor, extra: object[] = []) {
  const { title, description = site.description, path, ogSlug } = opts;
  const fullTitle = title ? `${title} · ${site.brand}` : `${site.founder} — ${site.shortTagline}`;
  const canonical = new URL(path, site.url).href;

  const segments = path.split('/').filter(Boolean);
  const crumbs = [{ name: 'Home', href: site.url }];
  let acc = '';
  for (const s of segments) {
    acc += `/${s}`;
    crumbs.push({ name: s.charAt(0).toUpperCase() + s.slice(1), href: `${site.url}${acc}` });
  }

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: fullTitle,
      description,
      isPartOf: { '@id': `${site.url}/#website` },
      about: { '@id': `${site.url}/#person` },
      inLanguage: 'en',
      primaryImageOfPage: new URL(`/og/${ogSlug ?? 'home'}.png`, site.url).href,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.href,
      })),
    },
    ...extra,
  ];
}
