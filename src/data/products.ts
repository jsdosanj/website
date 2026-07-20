export type ProductStatus = 'live' | 'beta' | 'wip' | 'planned';

export type Product = {
  slug: string;
  name: string;
  gurmukhi?: string; // single glyph shown in the icon badge
  gurmukhiName?: string; // full Gurmukhi wordmark shown under the title
  category: string;
  status: ProductStatus;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: { label: string; href: string; icon: string }[];
  accent: 'kesari' | 'azure';
  featured?: boolean;
  openSource?: boolean; // surfaced in the "Open source" group + a badge
  freeLimited?: boolean; // "free · limited time" badge — being built out, free for now
  published?: string; // e.g. "Jun 7, 2026" or "Ongoing"
};

export const products: Product[] = [
  {
    slug: 'sikh-university',
    published: 'Ongoing',
    name: 'Sikhi University',
    gurmukhi: 'ੴ',
    gurmukhiName: 'ਸਿੱਖ ਯੂਨੀਵਰਸਿਟੀ',
    category: 'Education / Sikhi',
    status: 'live',
    tagline: 'A free, open online university for Sikhi — from the basics to the depths.',
    description:
      'Sikhi University is a free, open online university where anyone, anywhere can study Sikhi — from its basics to its depths. 200+ courses across 19 subjects (theology, history, philosophy, ethics, comparative religion, apologetics, science, language, music, the arts and more), each drawn from the works of a named Sikh scholar acting as the course professor, with tests, certificates, learning paths and magic-link accounts. It also has a read-along reader for the complete Sri Guru Granth Sahib Ji, Dasam Granth and Sri Sarbloh Granth Sahib with Santhya audio. Built free and open on Cloudflare, alongside Sikhi.io.',
    highlights: [
      '200+ courses across 19 subjects, each attributed to a real Sikh scholar, with key terms in Punjabi (Gurmukhi) and Chicago-style citations.',
      'A read-along reader for the complete SGGS, Dasam Granth and Sri Sarbloh Granth Sahib, plus a beginner Gurmukhi primer (Baal Updesh).',
      'A full platform: magic-link accounts, 80%-to-pass tests, printable certificates, learning paths, search, and one site-wide light/dark theme — on Cloudflare (Workers + D1 + R2), in Astro + Tailwind.',
    ],
    tech: ['Astro', 'Tailwind', 'Cloudflare Workers', 'D1 / R2'],
    links: [
      { label: 'Visit site', href: 'https://sikhiuni.com/', icon: 'external' },
    ],
    accent: 'kesari',
    featured: true,
  },
  {
    slug: 'sikhinteractive',
    published: 'Ongoing',
    name: 'Sikhinteractive.com',
    gurmukhi: 'ੴ',
    category: 'Education / Sikhi',
    status: 'live',
    tagline: 'Touch-first Sikhi learning, built for gurdwara kiosks.',
    description:
      'Sikhinteractive.com is a touch-interactive learning experience built for kiosks installed at gurdwaras. Sangat of any age can walk up and explore Sikhi — no account, no instructions, just touch. Designed for the environment it lives in: large-format touchscreens, short walk-up sessions, and content that meets absolute beginners where they are.',
    highlights: [
      'Built for walk-up use: large touch targets, zero sign-in, and interactions that make sense in seconds.',
      'Designed for kiosk installs at gurdwaras — full-screen, touch-first, ready for shared public use.',
    ],
    tech: ['Touchscreen UI', 'Kiosk', 'Education / Sikhi'],
    links: [
      { label: 'Visit site', href: 'https://sikhinteractive.com/', icon: 'external' },
    ],
    accent: 'kesari',
    featured: false,
  },
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
      { label: 'Visit site', href: 'https://dosanjhlabs.com/sightline/', icon: 'external' },
    ],
    accent: 'azure',
    featured: false,
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
      { label: 'Visit site', href: 'https://dosanjhlabs.com/bastion/', icon: 'external' },
    ],
    accent: 'azure',
    featured: true,
  },
  {
    slug: 'ward',
    published: 'Jun 13, 2026',
    name: 'Ward',
    category: 'Compliance / GRC',
    status: 'live',
    tagline: 'Prove HIPAA compliance before an auditor — or 2026 — does.',
    description:
      'Ward is a guided, plain-English HIPAA Security Risk Assessment plus a full compliance program: SRA, risk register, policy and BAA management, training records, and a one-click 2026 Security Rule readiness gap report. Local-first so PHI never leaves the machine, with optional cloud sync for multi-device and MSP multi-client management.',
    highlights: [
      'Guided HIPAA Security Risk Assessment across all 7 ONC sections with a plain-English risk register.',
      'One-click 2026 HIPAA Security Rule gap report with a prioritized POA&M.',
      'Local-first (PHI never leaves the machine) with optional cloud sync and an MSP multi-client console.',
    ],
    tech: ['HIPAA', 'Security Risk Assessment', 'GRC', 'Local-First'],
    links: [
      { label: 'Visit site', href: '/ward/', icon: 'external' },
    ],
    accent: 'azure',
    featured: true,
  },
  {
    slug: 'charter',
    published: 'Jun 13, 2026',
    name: 'Charter',
    category: 'Compliance / GRC',
    status: 'live',
    tagline: 'Write, version, and prove your security policies.',
    description:
      'Charter is a guided security-policy generator plus a version-controlled, audit-ready policy library and full attestation workflow — draft, review, approve, publish, assign, attest. Real version diffs, framework-mapped clauses (HIPAA, FERPA, CMMC/800-171, SOC 2, ISO 27001, CIS, NIST), and machine-readable evidence that flows into Sightline, Bastion, and Ward.',
    highlights: [
      'Generates 25+ framework-mapped security policies from a plain-English questionnaire.',
      'Built-in version control with real clause-level diffs and an employee attestation workflow.',
      'Approved policies and attestations become evidence that feeds Sightline, Bastion, and Ward.',
    ],
    tech: ['Policy Management', 'Attestation', 'Version Control', 'GRC'],
    links: [
      { label: 'Visit site', href: '/charter/', icon: 'external' },
    ],
    accent: 'azure',
    featured: false,
  },
  {
    slug: 'covenant',
    published: 'Jun 13, 2026',
    name: 'Covenant',
    category: 'Vendor / TPRM',
    status: 'live',
    tagline: 'Vendor & third-party risk + BAA tracking.',
    description:
      'Covenant tracks third-party risk, security reviews, and Business Associate Agreements across every vendor — so you always know who touches your data, what they signed, and when each agreement expires. Risk scoring, questionnaire workflows, and BAA lifecycle management in one console.',
    highlights: [
      'One register for every vendor: risk tier, security review status, and BAA on file.',
      'BAA lifecycle tracking with renewal and expiry alerts so no agreement lapses.',
      'Multi-tenant MSP console with white-label vendor portals and bulk reporting.',
    ],
    tech: ['TPRM', 'BAA Tracking', 'Vendor Risk', 'GRC'],
    links: [
      { label: 'Visit site', href: '/covenant/', icon: 'external' },
    ],
    accent: 'azure',
    featured: false,
  },
  {
    slug: 'watchword',
    published: 'Jun 13, 2026',
    name: 'Watchword',
    category: 'Awareness / Phishing',
    status: 'live',
    tagline: 'Phishing simulation + security-awareness training.',
    description:
      'Watchword runs phishing simulations and delivers security-awareness training that actually changes behavior — with per-user risk scores that prove your workforce is getting harder to fool. Scheduled campaigns, branded landing pages, and compliance training tracks.',
    highlights: [
      'Realistic phishing simulations with per-user risk scoring over time.',
      'SCORM courses and compliance training tracks with completion reporting.',
      'Per-user pricing with a volume MSP tier and cross-client benchmarking.',
    ],
    tech: ['Phishing Simulation', 'Security Awareness', 'Training', 'Reporting'],
    links: [
      { label: 'Visit site', href: '/watchword/', icon: 'external' },
    ],
    accent: 'azure',
    featured: false,
  },
  {
    slug: 'passage',
    published: 'Jun 13, 2026',
    name: 'Passage',
    category: 'IT Lifecycle',
    status: 'live',
    tagline: 'IT onboarding & offboarding, automated.',
    description:
      'Passage automates the IT side of onboarding and offboarding so nothing — and no access — slips through the cracks. Provision, transfer, and revoke across every app on day one and last day, with approval workflows, app connectors, and a full audit trail.',
    highlights: [
      'Automated provisioning and deprovisioning across your app stack via connectors.',
      'Approval workflows, role templates, and SSO/SCIM sync for clean access control.',
      'Per-user pricing with a multi-tenant MSP console and per-client runbooks.',
    ],
    tech: ['IT Lifecycle', 'Onboarding / Offboarding', 'Provisioning', 'IT Ops'],
    links: [
      { label: 'Visit site', href: '/passage/', icon: 'external' },
    ],
    accent: 'azure',
    featured: false,
  },
  {
    slug: 'perimeter',
    published: 'Jun 13, 2026',
    name: 'Perimeter',
    category: 'Attack Surface',
    status: 'live',
    tagline: 'Continuous vuln & external attack-surface scanner.',
    description:
      'Perimeter continuously scans your external attack surface and known vulnerabilities, and tells you what to fix first — discovering the assets, domains, and exposures attackers can already see. Continuous scanning, vuln prioritization, and ticketing integrations.',
    highlights: [
      'Discovers your external attack surface — domains, assets, and exposures.',
      'Continuous scanning with vulnerability prioritization and Slack/email alerts.',
      'Ticketing integrations, scheduled reports, and a multi-tenant MSP tier.',
    ],
    tech: ['Attack Surface', 'Vulnerability Scanning', 'Security', 'Continuous Monitoring'],
    links: [
      { label: 'Visit site', href: '/perimeter/', icon: 'external' },
    ],
    accent: 'azure',
    featured: false,
  },
  {
    slug: 'klaxon',
    published: 'Jun 13, 2026',
    name: 'Klaxon',
    category: 'Incident Response',
    status: 'live',
    tagline: 'Incident response + breach notification playbook.',
    description:
      'Klaxon gives you guided incident-response and breach-notification playbooks so you know exactly who to tell, and when — with jurisdiction-aware HIPAA and all-50-state notification timelines built in. Runbook builder, evidence log, tabletop exercises, and SLA timers.',
    highlights: [
      'Jurisdiction-aware HIPAA and all-50-state breach-notification timelines.',
      'Runbook builder, evidence log, and notification templates for live incidents.',
      'Tabletop exercises, SLA timers, and a multi-tenant MSP IR dashboard.',
    ],
    tech: ['Incident Response', 'Breach Notification', 'HIPAA', 'Security'],
    links: [
      { label: 'Visit site', href: '/klaxon/', icon: 'external' },
    ],
    accent: 'azure',
    featured: false,
  },
  {
    slug: 'ledger',
    published: 'Jun 13, 2026',
    name: 'Ledger',
    category: 'IT Documentation',
    status: 'live',
    tagline: 'Turn an Obsidian vault into a governed company documentation hub.',
    description:
      'Ledger turns an Obsidian vault into a governed, company-grade documentation hub: a shared org vault with roles and permissions, review/approval governance, org-wide search, read-only published portals, and a full audit trail. Everything stays Obsidian-compatible Markdown — no lock-in. Run it hosted, or self-host the open-source core.',
    highlights: [
      'Shared org vault with roles, permissions, and review/approval governance over every doc.',
      'Org-wide search, read-only published portals for readers, and a complete audit trail.',
      'Obsidian-compatible Markdown with no lock-in — hosted, or self-host the open-source core.',
    ],
    tech: ['Documentation', 'Obsidian', 'Markdown', 'Knowledge Base'],
    links: [
      { label: 'Visit site', href: '/ledger/', icon: 'external' },
    ],
    accent: 'azure',
    featured: false,
    openSource: true,
  },
  {
    slug: 'gurmukhifix',
    published: 'Jun 11, 2026',
    name: 'GurmukhiFix',
    gurmukhi: 'ਗ',
    category: 'Python / OCR / NLP',
    status: 'live',
    tagline: 'Safe, evidence-gated OCR correction for Gurmukhi & Indic scripts.',
    description:
      'An OCR post-processing engine that repairs the systematic Unicode-order and diacritic errors OCR makes on Gurmukhi (Punjabi), Hindi and Devanagari — and is built so it can never silently corrupt correct text, including Gurbani. Every automatic change must clear an evidence gate: verbatim scripture is locked, and any substitution needs a validity gain or a dictionary hit. It is engine-agnostic, reading Tesseract, Surya, Gemini and Google Vision output alike.',
    highlights: [
      'An evidence gate plus a 67,000-word Gurbani lexicon lock scripture and refuse any blind, unsupported edit — proven by property-based tests across every supported script.',
      'OCR-engine-agnostic input (Tesseract JSON/TSV/hOCR, ALTO, Surya, Google Vision), so it survives the shift beyond Tesseract.',
      'On 300 real Sri Guru Granth Sahib lines with OCR errors injected, character error rate drops to 0.00 — with zero corruption of clean text.',
      'Live on PyPI — pip install gurmukhifix — with the Gurbani lexicon bundled inside the wheel.',
    ],
    tech: ['Python', 'Unicode', 'Gurbani lexicon', 'PyPI'],
    links: [
      { label: 'Visit site', href: 'https://gurmukhifix.dosanjhlabs.com/', icon: 'external' },
      { label: 'Source (GitHub)', href: 'https://github.com/jsdosanj/gurmukhifix', icon: 'external' },
      { label: 'PyPI', href: 'https://pypi.org/project/gurmukhifix/', icon: 'external' },
    ],
    accent: 'kesari',
featured: false,
    openSource: true,
  },
  {
    slug: 'cert-prep',
    published: 'Jun 12, 2026',
    name: 'CertPrep',
    category: 'Education / Certification',
    status: 'beta',
    freeLimited: true,
    tagline: 'An in-depth, no-fluff study platform for Security+, CISM & PMP.',
    description:
      'A self-study platform for three IT certifications — CompTIA Security+, ISACA CISM and PMI PMP — on one shared, no-build engine. It pairs 1,200+ original practice questions with a timed exam simulator, Leitner spaced-repetition flashcards, rapid drills, quick-reference sheets, an interactive study planner with calendar export, and topic-organised video lessons — with all progress kept locally in the browser.',
    highlights: [
      '1,200+ original practice questions across Security+, CISM and PMP, with a timed exam simulator and scaled-score estimate.',
      'Leitner spaced-repetition flashcards, rapid drills, quick-reference sheets, and an interactive study planner with `.ics` calendar export.',
      'A fast, no-build engine — everything runs in the browser (localStorage) with Markdown export/import, installable as a PWA.',
    ],
    tech: ['Vanilla JS', 'HTML', 'JSON', 'PWA'],
    links: [
      { label: 'Visit site', href: 'https://cert-prep.dosanjhlabs.com/', icon: 'external' },
    ],
    accent: 'azure',
  },
  {
    slug: 'aim528',
    published: 'Jun 12, 2026',
    name: 'Aim528',
    category: 'Education / MCAT',
    status: 'beta',
    freeLimited: true,
    tagline: 'MCAT practice tests, questions and flashcards — aim for 528.',
    description:
      'A MCAT study toolkit: 900+ original AAMC-style practice questions, five full-length timed exam simulators, spaced-repetition flashcards, a progress dashboard, cheat sheets, curated videos, and a three-month study plan — built on the same no-build engine as CertPrep, with all progress kept in the browser. Not affiliated with the AAMC.',
    highlights: [
      '900+ original AAMC-style questions and five distinct full-length exam simulators with scaled-score estimates.',
      'Leitner spaced-repetition flashcards, cheat sheets, curated video lessons, and a day-by-day three-month study plan.',
      'A fast, no-build engine — everything runs in the browser (localStorage) with Markdown export/import; original items with site-wide AAMC disclaimers.',
    ],
    tech: ['Vanilla JS', 'HTML', 'JSON', 'PWA'],
    links: [
      { label: 'Visit site', href: 'https://aim528.dosanjhlabs.com/', icon: 'external' },
    ],
    accent: 'azure',
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
      { label: 'Visit site', href: 'https://dosanjhlabs.com/lookout/', icon: 'external' },
    ],
    accent: 'azure',
    featured: false,
    openSource: true,
  },
  {
    slug: 'cairn',
    published: 'Jun 10, 2026',
    name: 'Cairn',
    category: 'IT Asset Reconciliation',
    status: 'live',
    tagline: 'Every device. One source of truth.',
    description:
      'Cairn reconciles your device fleet across every tool you already run — Jamf, Intune, Kandji, JumpCloud, CrowdStrike, Defender, and more — and syncs one authoritative inventory into Snipe-IT. It resolves conflicting records by serial number, previews every change with a dry run, and finally makes your asset system of record actually accurate. Open-source under AGPL-3.0, and live on PyPI — pip install cairn-sync.',
    highlights: [
      'Pulls from 12+ MDM and EDR sources and writes one reconciled source of truth to Snipe-IT.',
      'Serial-based reconciliation with a trust-priority system and a dry-run preview before any change.',
      'Single cross-platform binary (macOS, Windows, Linux) with a guided GUI — no YAML required.',
    ],
    tech: ['Snipe-IT', 'MDM / EDR Sync', 'Open Source (AGPL)', 'Cross-Platform', 'PyPI'],
    links: [
      { label: 'Visit site', href: 'https://dosanjhlabs.com/cairn/', icon: 'external' },
      { label: 'Source (GitHub)', href: 'https://github.com/jsdosanj/cairn', icon: 'external' },
      { label: 'PyPI', href: 'https://pypi.org/project/cairn-sync/', icon: 'external' },
    ],
    accent: 'azure',
    featured: false,
    openSource: true,
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
    openSource: true,
  },
  {
    slug: 'sikharchive',
    published: 'Ongoing',
    name: 'Sikhi.io',
    gurmukhi: 'ੴ',
    category: 'Collaboration · Digital Heritage',
    status: 'live',
    tagline: 'Five centuries of Sikh literature, open to the world.',
    description:
      'Sikhi.io is a collaborative, open-access archive that makes centuries of Sikh manuscripts and literature freely searchable. This isn’t my own project — I contribute to it as a developer, helping push the platform forward alongside the team.',
    highlights: [
      'Working on integrating the 758M+ word Sikh Library dataset into the platform.',
      'Built Gurbani search and an AI-powered search engine, plus design improvements.',
      'Patching security vulnerabilities and shipping mobile web-app improvements.',
    ],
    tech: ['Web', 'AI Search', 'Security', 'Mobile Web'],
    links: [
      { label: 'Visit Sikhi.io', href: 'https://sikhi.io/', icon: 'external' },
    ],
    accent: 'kesari',
    featured: false,
  },
];

export const statusMeta: Record<ProductStatus, { label: string; symbol: string }> = {
  live: { label: 'Live', symbol: '◆' },
  beta: { label: 'Beta', symbol: '◆' },
  wip: { label: 'In Progress', symbol: '◆' },
  planned: { label: 'In the Lab', symbol: '◆' },
};
