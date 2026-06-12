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
    slug: 'sightline',
    published: 'Jun 7, 2026',
    name: 'Sightline',
    category: 'Compliance / GRC',
    status: 'live',
    tagline: 'Know your compliance before an auditor — or an attacker — does.',
    description:
      'Sightline is a compliance platform that continuously checks your security posture against 22+ frameworks — NIST CSF 2.0, HIPAA, SOC 2, PCI DSS, ISO 27001, CMMC, FERPA, GDPR, and more. It connects to the identity, device, cloud, and ticketing tools you already run and tells you, in plain English, exactly where you stand — before a gap turns into a failed audit or a breach.',
    highlights: [
      'Continuous, plain-English verdicts on controls across 22+ regulatory frameworks at once.',
      'Connects to your existing identity, MDM, cloud, and ticketing tools to gather evidence automatically.',
      'Board-ready executive summaries with drill-down findings and licensed-professional GRC sign-off.',
    ],
    tech: ['Compliance', 'GRC', 'NIST / SOC 2 / HIPAA', 'Security Posture'],
    links: [
      { label: 'Visit site', href: 'https://jsdosanj.github.io/sightline-site/', icon: 'external' },
    ],
    accent: 'azure',
    featured: true,
  },
  {
    slug: 'bastion',
    published: 'Jun 12, 2026',
    name: 'Bastion',
    category: 'Cybersecurity / GRC',
    status: 'live',
    tagline: 'CMMC Level 2, without the consultant.',
    description:
      'Bastion walks defense suppliers through all 110 NIST 800-171 controls, calculates a live DoD SPRS score, and generates an audit-ready System Security Plan and POA&M — entirely in the browser, so sensitive CUI never leaves the machine. Built for the small and mid-size suppliers that primes like Boeing now require to reach CMMC Level 2.',
    highlights: [
      'Guided 110-control NIST 800-171 self-assessment with a live, methodology-accurate DoD SPRS score.',
      'Auto-generates the SSP and POA&M assessors expect, and prioritizes the highest-impact gaps to fix first.',
      'Integrates with Sightline (compliance posture) and Cairn (asset inventory) to auto-evidence controls.',
    ],
    tech: ['NIST 800-171', 'CMMC', 'GRC', 'JavaScript'],
    links: [
      { label: 'Visit site', href: 'https://jsdosanj.github.io/bastion/', icon: 'external' },
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
    ],
    accent: 'kesari',
    featured: false,
  },
  {
    slug: 'lookout',
    published: 'Jun 11, 2026',
    name: 'Lookout',
    category: 'Infrastructure / Monitoring',
    status: 'live',
    tagline: 'Know your servers are healthy — before they’re not.',
    description:
      'Lookout is infrastructure monitoring built for humans. Lightweight agents report each server’s health to one dashboard in plain English — “disk /data is 94% full” instead of a wall of raw metrics — so anyone can tell what needs attention at a glance.',
    highlights: [
      'Single, dependency-free agent for Linux, Windows, and macOS — outbound-only, no open ports.',
      'Plain-English OK / WARNING / CRITICAL alerts via email, Slack, or webhooks, with deduplication and escalation.',
      'Nagios-plugin compatible, with managed and on-prem deployment options.',
    ],
    tech: ['Monitoring', 'Agents', 'Alerting', 'Cross-Platform'],
    links: [
      { label: 'Visit site', href: 'https://jsdosanj.github.io/lookout-site/', icon: 'external' },
    ],
    accent: 'azure',
    featured: false,
  },
  {
    slug: 'cairn',
    published: 'Jun 10, 2026',
    name: 'Cairn',
    category: 'IT Asset Reconciliation',
    status: 'live',
    tagline: 'Every device. One source of truth.',
    description:
      'Cairn reconciles your device fleet across every tool you already run — Jamf, Intune, Kandji, JumpCloud, CrowdStrike, Defender, and more — and syncs one authoritative inventory into Snipe-IT. It resolves conflicting records by serial number, previews every change with a dry run, and finally makes your asset system of record actually accurate. Open-source under AGPL-3.0.',
    highlights: [
      'Pulls from 12+ MDM and EDR sources and writes one reconciled source of truth to Snipe-IT.',
      'Serial-based reconciliation with a trust-priority system and a dry-run preview before any change.',
      'Single cross-platform binary (macOS, Windows, Linux) with a guided GUI — no YAML required.',
    ],
    tech: ['Snipe-IT', 'MDM / EDR Sync', 'Open Source (AGPL)', 'Cross-Platform'],
    links: [
      { label: 'Visit site', href: 'https://jsdosanj.github.io/cairn-site/#top', icon: 'external' },
    ],
    accent: 'azure',
    featured: true,
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
  live: { label: 'Live', symbol: '◆' },
  wip: { label: 'In Progress', symbol: '◆' },
  planned: { label: 'In the Lab', symbol: '◆' },
};
