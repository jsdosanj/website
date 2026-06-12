export type ProductStatus = 'live' | 'wip' | 'planned';

export type Product = {
  slug: string;
  name: string;
  gurmukhi?: string;
  category: string;
  status: ProductStatus;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: { label: string; href: string; icon: string }[];
  accent: 'kesari' | 'azure';
  featured?: boolean;
  published?: string; // e.g. "Jun 7, 2026" or "Ongoing"
};

export const products: Product[] = [
  {
    slug: 'mcat-prep',
    published: 'Jun 11, 2026',
    name: 'MCAT Prep',
    category: 'Education / Pre-Med',
    status: 'live',
    tagline: 'Everything you need to study for the MCAT — for free.',
    description:
      'A free, no-sign-up MCAT study toolkit that runs entirely in the browser. It is fully interactive: 165+ original AAMC-style practice questions across all four sections, a timed exam simulator that scores you per section on the 472–528 scale, 250+ spaced-repetition flashcards, printable cheat sheets, curated free video lessons, deep study guides, a notes editor, and a progress dashboard — with one-click Markdown export/import and nothing to install.',
    highlights: [
      'Original AAMC-style questions for Chem/Phys, CARS, Bio/Biochem, and Psych/Soc — plus a timed, section-weighted exam simulator.',
      '250+ spaced-repetition flashcards, printable cheat sheets, study guides, and curated free Khan Academy videos.',
      'Runs 100% in the browser; progress saves locally and exports to Markdown. Not affiliated with the AAMC.',
    ],
    tech: ['JavaScript', 'GitHub Pages', 'EdTech', 'Pre-Med'],
    links: [
      { label: 'Visit site', href: 'https://jsdosanj.github.io/mcat-prep/', icon: 'external' },
      { label: 'GitHub', href: 'https://github.com/jsdosanj/mcat-prep', icon: 'github' },
    ],
    accent: 'azure',
    featured: true,
  },
  {
    slug: 'sightline',
    published: 'Jun 7, 2026',
    name: 'Sightline',
    category: 'IT / Device Health',
    status: 'live',
    tagline: 'See problems before they find you.',
    description:
      'Sightline keeps an eye on all of your company’s computers — Mac, Windows, and Linux — in one simple view. Instead of waiting for something to break, it shows you which devices are healthy, which are behind on updates, and which could put your data at risk. That way your team can fix the small stuff before it ever becomes a big problem.',
    highlights: [
      'Brings every device into one clear dashboard, no matter which system it runs.',
      'Flags security and update gaps early — before they turn into outages or failed audits.',
      'Turns constant firefighting into a calm, planned routine.',
    ],
    tech: ['Device Management', 'Security', 'Dashboards', 'Automation'],
    links: [
      { label: 'Visit site', href: 'https://jsdosanj.github.io/sightline-site/', icon: 'external' },
      { label: 'GitHub', href: 'https://github.com/jsdosanj/sightline', icon: 'github' },
    ],
    accent: 'azure',
    featured: true,
  },
  {
    slug: 'gurmukhifix',
    published: 'Jun 11, 2026',
    name: 'GurmukhiFix',
    gurmukhi: 'ਗ',
    category: 'Python / OCR / NLP',
    status: 'wip',
    tagline: 'OCR that finally respects South Asian scripts.',
    description:
      'A Tesseract post-processing engine for handwritten South Asian and Persian scripts. It corrects character misrecognition, ligature errors, and diacritic placement for Gurmukhi, Punjabi, Hindi, Devanagari, Urdu, and Farsi — recovering correct text where off-the-shelf OCR fails 30–40% of the time.',
    highlights: [
      'Applies Unicode-level linguistic rules post-OCR to repair handwritten Gurmukhi and Urdu.',
      'Targets a systematic gap: Tesseract misrecognition for these scripts frequently exceeds 30–40%.',
      'Shipping to PyPI as `pip install gurmukhifix`; installable today from GitHub.',
    ],
    tech: ['Python', 'Tesseract', 'Unicode', 'PyPI'],
    links: [
      { label: 'Visit site', href: 'https://jsdosanj.github.io/gurmukhifix/index.html', icon: 'external' },
      { label: 'GitHub', href: 'https://github.com/jsdosanj/gurmukhifix', icon: 'github' },
    ],
    accent: 'kesari',
    featured: true,
  },
  {
    slug: 'lookout',
    published: 'Jun 11, 2026',
    name: 'Lookout',
    category: 'Infrastructure / Monitoring',
    status: 'wip',
    tagline: 'Know your servers are healthy — before they’re not.',
    description:
      'Lookout is open-source infrastructure monitoring built for humans. Lightweight agents report each server’s health to one dashboard in plain English — “disk /data is 94% full” instead of a wall of raw metrics — so anyone can tell what needs attention at a glance.',
    highlights: [
      'Single, dependency-free agent for Linux, Windows, and macOS — outbound-only, no open ports.',
      'Plain-English OK / WARNING / CRITICAL alerts via email, Slack, or webhooks, with deduplication and escalation.',
      'Nagios-plugin compatible; self-host for free (AGPL-3.0) or use the managed version.',
    ],
    tech: ['Monitoring', 'Agents', 'Self-Hosted', 'Open Source'],
    links: [
      { label: 'Visit site', href: 'https://jsdosanj.github.io/lookout-site/', icon: 'external' },
      { label: 'GitHub', href: 'https://github.com/jsdosanj/lookout', icon: 'github' },
    ],
    accent: 'azure',
    featured: false,
  },
  {
    slug: 'cairn',
    published: 'Jun 10, 2026',
    name: 'Cairn',
    category: 'Team Knowledge',
    status: 'live',
    tagline: 'Never lose what your team has learned.',
    description:
      'Cairn captures the know-how that usually lives in one person’s head — how to set up a new hire, fix a recurring issue, or run a big project — and turns it into clear, shareable guides. Named after the stacked stones that mark a trail for the next hiker, it makes sure nobody on your team ever has to figure things out from scratch again.',
    highlights: [
      'Saves step-by-step guides, checklists, and playbooks in one organized place.',
      'Keeps important knowledge from walking out the door when people change roles.',
      'Helps new team members get up to speed in days instead of months.',
    ],
    tech: ['Documentation', 'Onboarding', 'Knowledge Base'],
    links: [
      { label: 'Visit site', href: 'https://jsdosanj.github.io/cairn-site/#top', icon: 'external' },
      { label: 'GitHub', href: 'https://github.com/jsdosanj/cairn', icon: 'github' },
    ],
    accent: 'azure',
    featured: true,
  },
  {
    slug: 'certprep',
    published: 'Jun 12, 2026',
    name: 'CertPrep',
    category: 'Education / Cert Prep',
    status: 'live',
    tagline: 'Pass Security+, CISM, and PMP — for free.',
    description:
      'CertPrep is a free, self-contained study platform for professional certification exams — no sign-up, no install. Three fully interactive tracks (CompTIA Security+, ISACA CISM, and PMP) bundle 900+ practice questions, timed exam simulators that score you by domain, spaced-repetition flashcards, video lessons, printable cheat sheets, and progress dashboards — so anyone can prepare without financial barriers.',
    highlights: [
      'Three fully interactive tracks — CompTIA Security+ (SY0-701), ISACA CISM, and PMP.',
      '900+ original practice questions with timed, domain-weighted exam simulators and per-domain scoring.',
      'Spaced-repetition flashcards, video lessons, cheat sheets, and progress that exports to Markdown — completely free.',
    ],
    tech: ['Education', 'Web', 'Free', 'No Sign-up'],
    links: [
      { label: 'Visit site', href: 'https://jsdosanj.github.io/cert-prep/index.html', icon: 'external' },
      { label: 'GitHub', href: 'https://github.com/jsdosanj/cert-prep', icon: 'github' },
    ],
    accent: 'kesari',
    featured: false,
  },
  {
    slug: 'mcat-prep',
    published: 'Jun 12, 2026',
    name: 'MCAT Prep',
    category: 'Education / MCAT Prep',
    status: 'live',
    tagline: 'Everything you need to study for the MCAT — for free.',
    description:
      'MCAT Prep is a free, browser-based study platform for pre-med students — no sign-up, no cost. It bundles AAMC-style practice questions across all four sections, a full-length timed simulator with scaled scoring, spaced-repetition flashcards, study guides, and a progress dashboard. (Original questions; unaffiliated with the AAMC.)',
    highlights: [
      'Original AAMC-style questions across all four sections with instant feedback and full explanations.',
      'Full-length timed exam simulator with per-section scoring and a 472–528 estimated range.',
      'Spaced-repetition flashcards, study guides, a progress dashboard, and a curated free-resources hub.',
    ],
    tech: ['Education', 'Web', 'Free', 'No Sign-up'],
    links: [
      { label: 'Visit site', href: 'https://jsdosanj.github.io/mcat-prep/index.html', icon: 'external' },
      { label: 'GitHub', href: 'https://github.com/jsdosanj/mcat-prep', icon: 'github' },
    ],
    accent: 'azure',
    featured: false,
  },
  {
    slug: 'sikh-library-dataset',
    published: 'May 31, 2026',
    name: 'Sikh Library — Living Dataset',
    category: 'NLP / Dataset',
    status: 'live',
    tagline: 'The open corpus underneath it all.',
    description:
      'A continuously updated multilingual corpus of Sikh manuscripts, scripture, and classical literature spanning English, Punjabi, Urdu, Hindi, and Devanagari script — over 758 million words across a 9 GB corpus. Curated to support RAG pipelines, semantic search, and NLP research on underrepresented South Asian languages.',
    highlights: [
      'Structured to power RAG pipelines, semantic search, and NLP research.',
      'Focused on underrepresented South Asian languages and rare historical texts.',
      'Open-access — built to preserve and democratize Sikh heritage for the global community.',
    ],
    tech: ['Dataset', 'HuggingFace', 'Multilingual', 'Open Access'],
    links: [
      { label: 'HuggingFace Dataset', href: 'https://huggingface.co/datasets/jsdosanj/SikhLibrary', icon: 'external' },
      { label: 'GitHub', href: 'https://github.com/jsdosanj/AI-Sikh-Librarian', icon: 'github' },
    ],
    accent: 'kesari',
    featured: false,
  },
  {
    slug: 'sikharchive',
    published: 'Ongoing',
    name: 'SikhArchive.net',
    gurmukhi: 'ੴ',
    category: 'Collaboration · Digital Heritage',
    status: 'live',
    tagline: 'Five centuries of Sikh literature, open to the world.',
    description:
      'SikhArchive.net is a collaborative, open-access archive that makes centuries of Sikh manuscripts and literature freely searchable. This isn’t my own project — I contribute to it as a developer, helping push the platform forward alongside the team.',
    highlights: [
      'Working on integrating the 758M+ word Sikh Library dataset into the platform.',
      'Built Gurbani search and an AI-powered search engine, plus design improvements.',
      'Patching security vulnerabilities and shipping mobile web-app improvements.',
    ],
    tech: ['Web', 'AI Search', 'Security', 'Mobile Web'],
    links: [
      { label: 'Visit SikhArchive.net', href: 'https://www.sikharchive.net/', icon: 'external' },
    ],
    accent: 'kesari',
    featured: false,
  },
];

export const statusMeta: Record<ProductStatus, { label: string; symbol: string }> = {
  live: { label: 'Live', symbol: '✦' },
  wip: { label: 'In Progress', symbol: '⚙' },
  planned: { label: 'In the Lab', symbol: '◷' },
};
