// Programs and projects Jasvant has led across his career — the recruiter-facing
// showcase on the About page, in two tiers: headline programs (big cards) and
// more work (a compact list). Personal and open-source work lives in
// products.ts, which the same page reads for its "Things I build" tabs.
//
// Headline cards are ordered by how directly they demonstrate program and
// project management, not strictly by date, and each is written in XYZ form:
// the outcome, the number that proves it, then the method.
import type { MarkName } from '@/components/ProgramMark';

/** RAG-style reporting status for a program card. */
export type ProgramStatus = 'delivered' | 'active' | 'recovered';

export type LedProject = {
  title: string;
  org: string;
  date: string;
  text: string;
  /**
   * How the program closed out. `recovered` marks the ones that arrived
   * already escalated or red — worth distinguishing from work that was
   * green the whole way, because turning those around is the harder skill.
   */
  status: ProgramStatus;
  /**
   * Which drawn program mark heads the card — see components/ProgramMark.tsx.
   * The mark describes the shape of the program (a recovery, a greenfield
   * build, a rollout), not its subject matter.
   */
  mark: MarkName;
  /**
   * Portfolio facts a PM would report on: team size, budget, vendor or
   * stakeholder count, and the headline result. Each is optional because not
   * every program had, say, a budget line — and an invented one would be worse
   * than an absent one.
   */
  facts?: { label: string; value: string }[];
};
export type MoreProject = {
  title: string;
  org: string;
  date: string;
  note?: string;
};

export const headlineProjects: LedProject[] = [
  {
    title: '12-product security & compliance suite',
    mark: 'suite',
    status: 'active',
    facts: [
      { label: 'Products', value: '12 live' },
      { label: 'Frameworks', value: '22+' },
      { label: 'Role', value: 'Owner' },
    ],
    org: 'Dosanjh Labs',
    date: '2026 – present',
    text: 'Took a security and compliance suite from zero to market — 12 live products spanning GRC, HIPAA risk, vendor risk, policy management, and incident response — by owning product strategy, the roadmap, and the end-to-end SDLC from requirements through CI/CD deployment, using Agile sprints and AI-assisted development to keep release cadence up.',
  },
  {
    title: 'Speech & Hearing Sciences Clinic onboarding',
    mark: 'recovery',
    status: 'recovered',
    facts: [
      { label: 'Vendors', value: '5' },
      { label: 'SLA', value: '48h → 2h' },
      { label: 'Saved', value: '$30K/yr' },
      { label: 'Role', value: 'Project Lead' },
    ],
    org: 'University of Washington',
    date: '2025 – 2026',
    text: 'Rescued an escalated clinical department’s IT service — a 96% SLA improvement (48 hours to 2) and $30,000 a year in redundant spend eliminated — by leading the clinic’s transition to centralized IT as Project Lead, running HIPAA security audits, coordinating five healthcare vendors, and rebuilding a fractured faculty–IT relationship along the way.',
  },
  {
    title: 'Leading a 9-person team through a vacancy',
    mark: 'interim',
    status: 'delivered',
    facts: [
      { label: 'Team', value: '9' },
      { label: 'Union staff', value: '4' },
      { label: 'Duration', value: '3 months' },
      { label: 'Service', value: 'Uninterrupted' },
    ],
    org: 'University of Washington',
    date: '2025 – 2026',
    text: 'Kept college-wide IT service uninterrupted through a three-month leadership vacancy — a 9-person infrastructure and help desk team, including 4 union civil-service staff, delivering without a gap — by stepping in operationally, owning work assignments, and establishing formal ticket-dispatch accountability that outlasted the interim period.',
  },
  {
    title: 'Zero-to-one gaming-studio IT buildout',
    mark: 'greenfield',
    status: 'delivered',
    facts: [
      { label: 'Budget', value: '$750K' },
      { label: 'Reports', value: '2' },
      { label: 'Workstations', value: '100+' },
      { label: 'Delivered', value: '5 months' },
    ],
    org: 'Tencent — Team Kaiju Studio',
    date: '2022',
    text: 'Built a new gaming studio’s entire IT foundation in five months against a $750K budget — 100+ custom high-end gaming PCs, AWS infrastructure, networking, and identity — by vetting vendors including Google, JumpCloud, AWS, Cisco, and 1Password while supervising a systems administrator and a project manager through launch. The stack became the standard for Tencent’s LA and Montreal studios.',
  },
  {
    title: 'District 1:1 rollout under COVID-19 closure',
    mark: 'rollout',
    status: 'delivered',
    facts: [
      { label: 'Students', value: '15,000' },
      { label: 'Schools', value: '31' },
      { label: 'Team', value: '6' },
      { label: 'Delivered', value: '8 weeks' },
    ],
    org: 'Rochester Community Schools',
    date: '2019 – 2020',
    text: 'Equipped 15,000 students across 31 schools with 1:1 Chromebooks and a full asset inventory in eight weeks, in the middle of a district-wide closure, by serving as operational IT lead and directing six technical assistants across seven schools on a fixed deadline nobody could move.',
  },
  {
    title: 'Zero-touch endpoint enrollment pipeline',
    mark: 'pipeline',
    status: 'delivered',
    facts: [
      { label: 'Devices', value: '2,000+' },
      { label: 'Departments', value: '40+' },
      { label: 'Apple fleet', value: '400+' },
    ],
    org: 'University of Washington',
    date: '2023 – 2025',
    text: 'Brought zero-touch enrollment to 2,000+ devices college-wide — including 400+ Macs and iPads across 40+ departments, delivered ahead of executive deadlines — by designing and administering the Windows Autopilot and Jamf Pro enrollment and lifecycle pipeline. Additional university departments later adopted the compliance framework behind it.',
  },
  {
    title: '$2M ed-tech product foundation',
    mark: 'foundation',
    status: 'delivered',
    facts: [
      { label: 'Raised', value: '$2M+' },
      { label: 'Backers', value: 'Nestlé · Chile' },
      { label: 'Role', value: 'Contract TPM' },
    ],
    org: 'Chef Koochooloo',
    date: '2019',
    text: 'Positioned an early-stage ed-tech startup to raise $2M+ from Nestlé and the Chilean government, and launched it across multiple Mountain View schools, by defining MVP requirements, managing the development team, interviewing game-development vendors, and holding stakeholders to a single launch plan.',
  },
  {
    title: 'BeyondTrust Linux integration & bug tooling',
    mark: 'bridge',
    status: 'delivered',
    facts: [
      { label: 'Engineers', value: '5,000+' },
      { label: 'Adopted by', value: 'BeyondTrust' },
    ],
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
