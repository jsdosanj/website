// Programs and projects Jasvant has led across his career — the recruiter-facing
// showcase on the About page, in two tiers: headline programs (big cards) and
// more work (a compact list). Personal and open-source work lives in
// products.ts, which the same page reads for its "Things I build" tabs.
//
// Headline cards are ordered by how directly they demonstrate program and
// project management, not strictly by date, and each is written in XYZ form:
// the outcome, the number that proves it, then the method. Plain English, no em dashes.
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
    text: 'Took a security and compliance suite from zero to market, with 12 live products covering GRC, HIPAA risk, vendor risk, policy management and incident response. I did it by owning product strategy, the roadmap and the full software lifecycle from requirements to deployment, using Agile sprints and AI tools (Claude Code, GitHub Copilot and OpenRouter) to keep releases moving.',
  },
  {
    title: 'Departmental onboarding program',
    mark: 'rollout',
    status: 'delivered',
    facts: [
      { label: 'Departments', value: '8' },
      { label: 'Per department', value: '1–2 months' },
      { label: 'Target', value: '2h / 48h' },
      { label: 'Role', value: 'Program Manager' },
    ],
    org: 'University of Washington, College of Arts & Sciences Dean’s Office',
    date: 'Feb 2025 – Mar 2026',
    text: 'Moved eight departments from their own IT onto the Dean’s Office IT team, each with a 2-hour response and 48-hour resolution target. I did it by building one repeatable process: workflows, Power Automate automations, a checklist, a kickoff, a handoff, a runbook and documentation guidelines. The departments were Speech & Hearing Sciences, Music, Anthropology, Statistics, Mathematics, the Jackson School of International Studies, Political Science and Biology.',
  },
  {
    title: 'Speech & Hearing Sciences Clinic onboarding',
    mark: 'recovery',
    status: 'recovered',
    facts: [
      { label: 'Vendors', value: '5' },
      { label: 'Response time', value: '48h → 2h' },
      { label: 'Saved', value: '$30K/yr' },
      { label: 'Role', value: 'Project Lead' },
    ],
    org: 'University of Washington',
    date: '2025 – 2026',
    text: 'Moved a clinical department onto central IT after its own IT staff left, cutting response time by 96% (48 hours to 2) and removing $30,000 a year in duplicate spend. I did it by leading the program. I rebuilt trust with the clinic first, over two months, then ran HIPAA security audits, combined five healthcare vendors, and moved systems and servers around the clinic’s patient schedule.',
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
    text: 'Kept college-wide IT running through a three-month leadership gap, with a 9-person infrastructure and help desk team (4 of them union civil-service staff) working with no break in service. I did it by leading the team day to day, owning work assignments and setting up formal ticket-dispatch accountability that lasted beyond the gap.',
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
    org: 'Tencent, Team Kaiju Studio',
    date: '2022',
    text: 'Built a new gaming studio’s whole IT foundation in five months on a $750K budget: 100+ custom high-end gaming PCs, AWS infrastructure, networking and identity. I did it by comparing vendors that included Google, JumpCloud, AWS, Cisco and 1Password, while supervising a systems administrator and a project manager through launch. The setup became the standard for Tencent’s Los Angeles and Montreal studios.',
  },
  {
    title: 'District 1:1 rollout under COVID-19 closure',
    mark: 'rollout',
    status: 'delivered',
    facts: [
      { label: 'Devices', value: '15,000' },
      { label: 'Schools inventoried', value: '31' },
      { label: 'Team', value: '6' },
      { label: 'Delivered', value: '8 weeks' },
    ],
    org: 'Rochester Community Schools',
    date: '2019 – 2020',
    text: 'Put a Chromebook in the hands of each of 15,000 students and counted every machine in all 31 schools within eight weeks, during a district-wide closure. I did it as operational IT lead: I ran device handout from one district site with six technical assistants, and personally led the count and retirement of old machines in 10 schools. The deadline was fixed and nobody could move it.',
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
    text: 'Brought zero-touch enrollment to 2,000+ devices across the college, including 400+ Macs and iPads in 40+ departments, ahead of executive deadlines. I did it by designing and running the Windows Autopilot and Jamf Pro enrollment and lifecycle pipeline. Other university departments later adopted its compliance framework.',
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
    text: 'Got an early-stage ed-tech startup ready to raise $2M+ from Nestlé and the Chilean government, and launched it in several Mountain View schools. I did it by defining MVP requirements, managing the development team, interviewing game-development vendors and keeping stakeholders on a single launch plan.',
  },
  {
    title: 'BeyondTrust Linux integration & bug tooling',
    mark: 'bridge',
    status: 'delivered',
    facts: [
      { label: 'Engineers', value: '5,000+' },
      { label: 'Adopted by', value: 'BeyondTrust' },
    ],
    org: 'Meta, Enterprise Engineering',
    date: '2020 – 2022',
    text: 'Unblocked 5,000+ AR/VR engineers on Linux privileged access. Meta’s Director of Enterprise Operations adopted the documentation, and BeyondTrust adopted it as its own supported solution for Bomgar Linux users worldwide. I did it by writing the porting guide from the failures Oculus teams kept hitting, plus Python tooling that surfaced fixes from Meta’s internal knowledge base.',
  },
];

export const moreProjects: MoreProject[] = [
  { title: 'Zero-downtime network security migration', org: 'University of Washington', date: '2023 – 2025', note: '6 months · zero downtime · reusable framework' },
  { title: 'NIST SP 800-53 audit program', org: 'University of Washington', date: '2025 – 2026', note: '40 servers assessed · fix-it plans delivered' },
  { title: 'CSSCR CIO & System Security Officer', org: 'University of Washington', date: '2025 – 2026', note: 'certified restricted-data destruction · WA/CA + federal IES' },
  { title: 'College-wide documentation hub', org: 'University of Washington', date: '2023 – 2026', note: 'runbooks used college-wide' },
  { title: 'Automation tooling for repeat tasks', org: 'University of Washington', date: '2023 – 2026' },
  { title: 'Server imaging & deployment automation', org: 'Omni Group', date: '2022', note: 'ramp-up 4 hrs → 1 per server' },
  { title: 'PowerShell self-service tooling', org: 'Oakland University, Technology Services', date: '2020', note: '−40% ticket volume' },
  { title: 'Athletics facility reservation system', org: 'Oakland Community College', date: '2016 – 2018' },
];
