// Projects Jasvant has led across his career — the recruiter-facing showcase
// on the About page, tiered: headline projects (big cards), more work
// (compact list), and personal / open-source projects.
export type LedProject = {
  title: string;
  org: string;
  date: string;
  text: string;
};
export type MoreProject = {
  title: string;
  org: string;
  date: string;
  note?: string;
};
export type PersonalProject = LedProject & { href: string; linkLabel: string };

export const headlineProjects: LedProject[] = [
  {
    title: 'Interim Helpdesk Manager — leading through a vacancy',
    org: 'University of Washington',
    date: '2025 – 2026',
    text: 'Stepped up to manage a 9-person infrastructure and help desk team, including 4 union civil-service staff, for 3 months during an extended leadership vacancy. Established formal ticket-dispatch accountability and kept service uninterrupted college-wide.',
  },
  {
    title: 'Speech & Hearing Sciences Clinic onboarding',
    org: 'University of Washington',
    date: '2023 – 2026',
    text: 'Led the clinic’s onboarding into centralized IT — coordinated 5 clinical vendors, enforced HIPAA, and rebuilt a fractured faculty–IT relationship. Improved the SLA 96% (48 hours to 2) and cut $30,000/year in spend.',
  },
  {
    title: 'Scalable Jamf Pro rebuild',
    org: 'University of Washington',
    date: '2023 – 2026',
    text: 'Rebuilt Jamf Pro to scale across the entire College of Arts & Sciences — 40+ departments and 400+ Apple devices (Macs and iPads) — with an enrollment and compliance framework later adopted by additional university departments.',
  },
  {
    title: 'College-wide documentation hub',
    org: 'University of Washington',
    date: '2023 – 2026',
    text: 'Built the college’s documentation hub from scratch — extensive runbooks and guides that became a shared resource for IT staff across the entire college, not just the Dean’s Office team.',
  },
  {
    title: 'Zero-to-one gaming-studio IT',
    org: 'Tencent — Team Kaiju Studio',
    date: '2022',
    text: 'Built a new gaming studio’s entire IT foundation in five months — 100+ custom high-end gaming PCs, networking, and identity — vetting vendors like Google, JumpCloud, AWS, Cisco, and 1Password, while supervising a systems administrator and a project manager ahead of launch. The stack was adopted as the standard for studios in LA and Montreal.',
  },
  {
    title: 'BeyondTrust Linux integration & developer bug tooling',
    org: 'Meta — Enterprise Engineering',
    date: '2020 – 2022',
    text: 'Wrote Bomgar-on-Linux documentation that started with Oculus’s AR/VR teams and was adopted by BeyondTrust as the first-party solution for its Bomgar Linux users globally. Also built Python tooling that helped developers pinpoint bugs and surfaced remediation steps from Meta’s internal knowledge base.',
  },
  {
    title: '$2M ed-tech infrastructure foundation',
    org: 'Chef Koochooloo',
    date: '2019',
    text: 'Managed the development team, interviewed game-development vendors, and built the IT infrastructure foundation for the ed-tech startup — work that helped secure over $2M in funding from Nestlé and the Chilean government.',
  },
];

export const moreProjects: MoreProject[] = [
  { title: 'Zero-downtime network security migration', org: 'University of Washington', date: '2023 – 2026', note: '6 months · repeatable framework' },
  { title: 'Automation tooling for redundant tasks', org: 'University of Washington', date: '2023 – 2026' },
  { title: 'CSSCR System Security Officer', org: 'University of Washington', date: '2023 – 2026', note: 'NIST & HIPAA audits · multi-state compliance' },
  { title: 'Server imaging & deployment automation', org: 'Omni Group', date: '2022', note: '~2 hrs saved per server' },
  { title: 'COVID-19 remote-learning enablement', org: 'Rochester Community Schools', date: '2019 – 2020', note: 'adopted district-wide' },
  { title: 'PowerShell self-service tooling', org: 'Oakland University — Technology Services', date: '2020', note: '−40% ticket volume' },
  { title: 'Tech-support training & mentorship', org: 'Oakland University — Kresge Library', date: '2018 – 2020' },
  { title: 'Athletics facility reservation system', org: 'Oakland Community College', date: '2016 – 2018' },
];

export const personalProjects: PersonalProject[] = [
  {
    title: 'AI Sikh Library — open dataset',
    org: 'Personal · open-source',
    date: '2024 – present',
    text: 'A 758M+ word multilingual corpus of Sikh manuscripts and scripture (powering Sikhi.io) built to make rare heritage searchable. Born from problems I kept seeing in my own work and conversations at cybersecurity conferences.',
    href: 'https://huggingface.co/datasets/jsdosanj/SikhLibrary',
    linkLabel: 'HuggingFace',
  },
  {
    title: 'GurmukhiFix',
    org: 'Personal · open-source',
    date: '2024 – present',
    text: 'A Tesseract post-processing engine that repairs OCR errors in handwritten South Asian and Persian scripts where off-the-shelf tools fail. Shipping to PyPI as gurmukhifix.',
    href: 'https://github.com/jsdosanj/gurmukhifix',
    linkLabel: 'GitHub',
  },
];
