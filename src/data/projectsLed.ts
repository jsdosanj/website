// Programs and projects Jasvant has led across his career — the recruiter-facing
// showcase on the About page, tiered: headline programs (big cards), more work
// (compact list), and personal / open-source projects.
//
// Headline cards are ordered by how directly they demonstrate program and
// project management, not strictly by date, and each is written in XYZ form:
// the outcome, the number that proves it, then the method.
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
    title: '12-product security & compliance suite',
    org: 'Dosanjh Labs',
    date: '2026 – present',
    text: 'Took a security and compliance suite from zero to market — 12 live products spanning GRC, HIPAA risk, vendor risk, policy management, and incident response — by owning product strategy, the roadmap, and the end-to-end SDLC from requirements through CI/CD deployment, using Agile sprints and AI-assisted development to keep release cadence up.',
  },
  {
    title: 'Speech & Hearing Sciences Clinic onboarding',
    org: 'University of Washington',
    date: '2025 – 2026',
    text: 'Rescued an escalated clinical department’s IT service — a 96% SLA improvement (48 hours to 2) and $30,000 a year in redundant spend eliminated — by leading the clinic’s transition to centralized IT as Project Lead, running HIPAA security audits, coordinating five healthcare vendors, and rebuilding a fractured faculty–IT relationship along the way.',
  },
  {
    title: 'Leading a 9-person team through a vacancy',
    org: 'University of Washington',
    date: '2025 – 2026',
    text: 'Kept college-wide IT service uninterrupted through a three-month leadership vacancy — a 9-person infrastructure and help desk team, including 4 union civil-service staff, delivering without a gap — by stepping in operationally, owning work assignments, and establishing formal ticket-dispatch accountability that outlasted the interim period.',
  },
  {
    title: 'Zero-to-one gaming-studio IT buildout',
    org: 'Tencent — Team Kaiju Studio',
    date: '2022',
    text: 'Built a new gaming studio’s entire IT foundation in five months against a $750K budget — 100+ custom high-end gaming PCs, AWS infrastructure, networking, and identity — by vetting vendors including Google, JumpCloud, AWS, Cisco, and 1Password while supervising a systems administrator and a project manager through launch. The stack became the standard for Tencent’s LA and Montreal studios.',
  },
  {
    title: 'District 1:1 rollout under COVID-19 closure',
    org: 'Rochester Community Schools',
    date: '2019 – 2020',
    text: 'Equipped 15,000 students across 31 schools with 1:1 Chromebooks and a full asset inventory in eight weeks, in the middle of a district-wide closure, by serving as operational IT lead and directing six technical assistants across seven schools on a fixed deadline nobody could move.',
  },
  {
    title: 'Zero-touch endpoint enrollment pipeline',
    org: 'University of Washington',
    date: '2023 – 2025',
    text: 'Brought zero-touch enrollment to 2,000+ devices college-wide — including 400+ Macs and iPads across 40+ departments, delivered ahead of executive deadlines — by designing and administering the Windows Autopilot and Jamf Pro enrollment and lifecycle pipeline. Additional university departments later adopted the compliance framework behind it.',
  },
  {
    title: '$2M ed-tech product foundation',
    org: 'Chef Koochooloo',
    date: '2019',
    text: 'Positioned an early-stage ed-tech startup to raise $2M+ from Nestlé and the Chilean government, and launched it across multiple Mountain View schools, by defining MVP requirements, managing the development team, interviewing game-development vendors, and holding stakeholders to a single launch plan.',
  },
  {
    title: 'BeyondTrust Linux integration & bug tooling',
    org: 'Meta — Enterprise Engineering',
    date: '2020 – 2022',
    text: 'Unblocked 5,000+ AR/VR engineers on Linux privileged access — with the documentation adopted by Meta’s Director of Enterprise Operations and by BeyondTrust as its first-party solution for Bomgar Linux users globally — by authoring the porting documentation from the failures Oculus teams kept hitting, plus Python tooling that surfaced remediation steps from Meta’s internal knowledge base.',
  },
];

export const moreProjects: MoreProject[] = [
  { title: 'Zero-downtime network security migration', org: 'University of Washington', date: '2023 – 2025', note: '6 months · zero downtime · reusable framework' },
  { title: 'NIST SP 800-53 audit program', org: 'University of Washington', date: '2025 – 2026', note: '40 servers assessed · remediation plans delivered' },
  { title: 'CSSCR CIO & System Security Officer', org: 'University of Washington', date: '2025 – 2026', note: 'certified restricted-data destruction · WA/CA + federal IES' },
  { title: 'College-wide documentation hub', org: 'University of Washington', date: '2023 – 2026', note: 'runbooks adopted college-wide' },
  { title: 'Automation tooling for redundant tasks', org: 'University of Washington', date: '2023 – 2026' },
  { title: 'Server imaging & deployment automation', org: 'Omni Group', date: '2022', note: 'ramp-up 4 hrs → 1 per server' },
  { title: 'PowerShell self-service tooling', org: 'Oakland University — Technology Services', date: '2020', note: '−40% ticket volume' },
  { title: 'Athletics facility reservation system', org: 'Oakland Community College', date: '2016 – 2018' },
];

export const personalProjects: PersonalProject[] = [
  {
    title: 'AI Sikh Library — open dataset',
    org: 'Personal · open-source',
    date: '2024 – present',
    text: 'Launched the largest open-source multilingual dataset in the Sikh community — a 758M+ word corpus of manuscripts and scripture now used by 13+ independent projects worldwide, and the source behind a 558-course learning platform — by building a custom OCR pipeline for scripts no off-the-shelf engine handles and publishing the result openly on HuggingFace.',
    href: 'https://huggingface.co/datasets/jsdosanj/SikhLibrary',
    linkLabel: 'HuggingFace',
  },
  {
    title: 'GurmukhiFix',
    org: 'Personal · open-source',
    date: '2024 – present',
    text: 'Made OCR usable on handwritten South Asian and Persian scripts where off-the-shelf tools fail, measured by a Tesseract post-processing engine shipping publicly to PyPI as gurmukhifix, by building evidence-gated correction rules that only fire when the source image actually supports the fix.',
    href: 'https://github.com/jsdosanj/gurmukhifix',
    linkLabel: 'GitHub',
  },
];
