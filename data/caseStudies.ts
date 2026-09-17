// Three flagship programs told at interview depth.
//
// PM screening turns on how a candidate narrates a program, and a one-paragraph
// card can't carry that. Each study below follows the shape an interviewer
// probes for: the situation inherited, what was in and out of scope, who had to
// be moved, how it was sequenced, what was actually at risk, what went wrong,
// and the measured outcome.
//
// Everything here is drawn from the Sept 2026 résumé and the facts already on
// this site. The `wentWrong` sections are the honest reading of the same facts
// — a study with no friction in it reads as marketing, and the recovery is the
// part worth interviewing about — but they do not assert incidents beyond what
// the record supports.

export type CaseStudy = {
  slug: string;
  title: string;
  org: string;
  role: string;
  date: string;
  status: 'delivered' | 'active' | 'recovered';
  /** One-line framing shown in the index and at the top of the study. */
  summary: string;
  /** Headline figures for the study's metric strip. */
  metrics: { value: string; label: string }[];
  situation: string;
  scope: { inScope: string[]; outOfScope: string[] };
  stakeholders: { group: string; need: string }[];
  plan: { phase: string; detail: string }[];
  risks: { risk: string; mitigation: string }[];
  wentWrong: string;
  outcome: string[];
  /** What Jasvant would do differently — the question every panel asks. */
  retro: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'clinic-onboarding',
    title: 'Rescuing an escalated clinical IT service',
    org: 'University of Washington — Speech & Hearing Sciences Clinic',
    role: 'Project Lead · Technical Project Manager',
    date: '2025 – 2026',
    status: 'recovered',
    summary:
      'A healthcare clinic running its own shadow IT, a 48-hour response time, and a faculty–IT relationship that had broken down. Centralizing it meant fixing the trust problem before the technical one.',
    metrics: [
      { value: '48h → 2h', label: 'SLA, a 96% reduction' },
      { value: '$30K/yr', label: 'redundant spend eliminated' },
      { value: '5', label: 'healthcare vendors coordinated' },
      { value: 'HIPAA', label: 'audited and enforced' },
    ],
    situation:
      'The Speech and Hearing Sciences Clinic sat outside centralized IT, running its own systems and servers with its own vendor contracts. Response times had drifted to roughly 48 hours, clinical staff had stopped filing tickets because filing them had stopped working, and the relationship between the faculty and central IT was openly adversarial. Because the clinic handles patient data, every one of those gaps was also a HIPAA exposure. The technical debt was real, but the reason nothing had been fixed for years was that nobody on either side trusted the other enough to start.',
    scope: {
      inScope: [
        'Migrate the clinic into centralized IT support, systems, and servers',
        'HIPAA security audit of the clinic’s existing environment, with remediation',
        'Consolidate and renegotiate five overlapping clinical vendor relationships',
        'Establish a response-time commitment the clinical staff would actually rely on',
        'Resolve the outstanding systems and server faults the clinic had been living with',
      ],
      outOfScope: [
        'Clinical software selection — owned by the clinicians, not IT',
        'Patient scheduling and records workflows',
        'Building renovation and physical plant',
      ],
    },
    stakeholders: [
      { group: 'Clinicians & clinical staff', need: 'Support that responds inside a patient appointment window, not the next day' },
      { group: 'Department faculty leadership', need: 'Assurance that centralizing would not mean losing control or responsiveness' },
      { group: 'Five healthcare vendors', need: 'Clear technical ownership boundaries and a single point of contact' },
      { group: 'Central IT infrastructure team', need: 'A supportable environment, not an inherited pile of exceptions' },
      { group: 'College finance', need: 'The duplicate spend identified and removed' },
    ],
    plan: [
      { phase: '1 · Audit before promising', detail: 'Ran the HIPAA security audit first and documented every finding, so the scope was based on the real environment rather than on what either side believed was there.' },
      { phase: '2 · Rebuild the relationship', detail: 'Met the clinicians on their terms and in their language, fixed several long-standing complaints immediately, and used those as proof that the migration was worth their cooperation.' },
      { phase: '3 · Vendor consolidation', detail: 'Mapped which of the five vendors owned which system, cut the overlaps, and established single-threaded ownership for each remaining contract.' },
      { phase: '4 · Migrate in clinical downtime', detail: 'Sequenced the systems and server cutover around the clinic’s patient schedule so no appointment was affected.' },
      { phase: '5 · Commit to the SLA', detail: 'Published a response-time commitment and the dispatch process behind it, so the 2-hour figure was a process rather than a promise.' },
    ],
    risks: [
      { risk: 'Clinicians refuse to cooperate, having been burned before', mitigation: 'Delivered visible early fixes with no strings attached, before asking for anything' },
      { risk: 'A HIPAA finding surfaces mid-migration and halts everything', mitigation: 'Audited up front so findings were known and planned for, not discovered' },
      { risk: 'Vendor boundaries stay ambiguous and faults ping-pong between them', mitigation: 'Documented ownership per system and made one vendor accountable for each' },
      { risk: 'Patient appointments disrupted by a cutover', mitigation: 'Scheduled all work against the clinic’s own calendar, in their downtime' },
    ],
    wentWrong:
      'The first mistake was treating it as a migration project. The initial plan was technically sound and went nowhere, because it asked a department that had lost faith in IT to hand over its systems on trust it did not have. The plan had to be re-sequenced to put relationship repair ahead of the technical work — fixing smaller irritations first, with nothing asked in return, to earn the standing to do the migration at all. That cost weeks that a better read of the stakeholder map would have saved.',
    outcome: [
      'Response time cut from roughly 48 hours to 2 — a 96% improvement, sustained by a published dispatch process',
      '$30,000 a year in redundant IT spend eliminated',
      'Five vendor relationships consolidated with clear technical ownership',
      'HIPAA audit findings remediated and compliance enforced under centralized IT',
      'A working faculty–IT relationship, which is what made the rest hold',
    ],
    retro:
      'Read the stakeholder map before the systems diagram. The technical scope was never the hard part; the trust deficit was, and it was visible from the first conversation if I had been listening for it. On anything inherited and escalated, I now budget the first phase for credibility rather than delivery.',
  },
  {
    slug: 'studio-buildout',
    title: 'A gaming studio’s IT, from zero to launch in five months',
    org: 'Tencent — Team Kaiju Studio',
    role: 'Lead Systems Administrator (Contract) · buildout owner',
    date: '2022',
    status: 'delivered',
    summary:
      'An empty office, a fixed launch date, a $750K budget, and no existing IT of any kind. Everything — cloud, identity, network, and 100+ workstations — had to exist and work on day one.',
    metrics: [
      { value: '5 months', label: 'zero to fully operational' },
      { value: '$750K', label: 'budget owned' },
      { value: '100+', label: 'multi-OS workstations delivered' },
      { value: '2 studios', label: 'later adopted the identity stack' },
    ],
    situation:
      'Tencent was standing up a new games studio and the launch date was fixed by hiring, not by IT readiness. There was no infrastructure, no identity provider, no network, no device fleet, and no IT staff — and a studio full of engineers and artists who would arrive expecting high-end workstations that worked. The budget was $750,000, the team was a systems administrator and a project manager, and the sequencing mattered more than any individual decision: identity had to exist before devices could be enrolled, and the network had to exist before either.',
    scope: {
      inScope: [
        'AWS cloud infrastructure for the studio',
        'Identity: MDM, SSO, and MFA across every platform',
        'Office networking end to end',
        '100+ custom high-end multi-OS workstations, specified through to deployment',
        'Vendor selection and negotiation across the full stack',
        'Supervising a systems administrator and a project manager',
      ],
      outOfScope: [
        'Game engine and content pipeline tooling — owned by the studio’s technical directors',
        'Studio hiring and org design',
        'Physical office fit-out beyond network and workstation provisioning',
      ],
    },
    stakeholders: [
      { group: 'Studio leadership', need: 'Everything operational on the launch date, inside budget' },
      { group: 'Engineers & artists', need: 'Workstations powerful enough for real production work, ready on arrival' },
      { group: 'Tencent corporate IT', need: 'A configuration consistent enough to support across studios' },
      { group: 'Vendors (Google, JumpCloud, AWS, Cisco, 1Password)', need: 'Clear requirements and realistic delivery windows' },
      { group: 'Finance / procurement', need: 'Spend tracked against the $750K envelope' },
    ],
    plan: [
      { phase: '1 · Identity first', detail: 'Chose and stood up the JumpCloud MDM plus Google Workspace SSO/MFA stack before anything else, because every later decision depended on having one identity source.' },
      { phase: '2 · Network and cloud in parallel', detail: 'Built out office networking and AWS infrastructure concurrently, since neither blocked the other and both blocked devices.' },
      { phase: '3 · Vendor bake-off', detail: 'Vetted Google, JumpCloud, AWS, Cisco, and 1Password against studio requirements rather than defaulting to corporate standards.' },
      { phase: '4 · Workstation pipeline', detail: 'Specified, ordered, imaged, and enrolled 100+ multi-OS machines through the MDM built in phase one — zero-touch by design, not by retrofit.' },
      { phase: '5 · Handover', detail: 'Documented the stack so the studio’s own administrator could run it after the contract ended.' },
    ],
    risks: [
      { risk: 'Hardware lead times slip past the launch date', mitigation: 'Ordered workstations against the identity milestone, not the launch date, buying float' },
      { risk: 'Identity choice locks the studio into a stack it outgrows', mitigation: 'Selected against studio requirements and documented the rationale for corporate review' },
      { risk: 'Two reports and a fixed date leaves no capacity for rework', mitigation: 'Sequenced so each phase’s output was the next phase’s prerequisite — no speculative work' },
      { risk: 'Budget consumed by workstations before infrastructure is complete', mitigation: 'Held infrastructure spend first; workstation specs were the adjustable line' },
    ],
    wentWrong:
      'Hardware lead times were the constant threat, and the original plan had workstation orders placed too late in the sequence — they were treated as the last step because they were the most visible one. Re-ordering against the identity milestone rather than the launch date recovered the float, but it meant committing to workstation specifications before every requirement conversation had finished, and a few specs were more machine than the role needed. Inside a fixed launch date that was the right trade; with more float I would have run the spec conversations earlier in parallel rather than accepting the overshoot.',
    outcome: [
      'Studio fully operational on its launch date — cloud, identity, network, and 100+ workstations',
      'Delivered in five months against a $750,000 budget',
      'The unified JumpCloud MDM + Google Workspace SSO/MFA architecture, including the JumpCloud Go MFA rollout, was adopted as the standard across Tencent studios in Los Angeles and Montreal',
      'Handed over documented and supportable to the studio’s own administrator',
    ],
    retro:
      'Order long-lead hardware against the dependency that gates it, not against the date it is needed. The other lesson held up: choosing identity first made every subsequent decision cheaper, and it is why the stack was reusable enough for two other studios to adopt it.',
  },
  {
    slug: 'district-rollout',
    title: '15,000 students to 1:1 devices in eight weeks',
    org: 'Rochester Community Schools',
    role: 'Operational IT lead · directed six technical assistants',
    date: '2020',
    status: 'delivered',
    summary:
      'A district-wide closure, no remote-learning capability, and a deadline set by the school calendar. Thirty-one schools had to go 1:1 and teachers had to be able to actually teach on it.',
    metrics: [
      { value: '15,000', label: 'students equipped 1:1' },
      { value: '31', label: 'schools covered' },
      { value: '8 weeks', label: 'from start to complete' },
      { value: 'District-wide', label: 'curriculum adoption' },
    ],
    situation:
      'COVID-19 closed the district with no remote-learning capability in place. Fifteen thousand students across thirty-one schools needed devices, the asset inventory was incomplete enough that nobody knew what the district already owned, and teachers had no training on the tools they were about to depend on entirely. The deadline was the school calendar, which does not move. The team was six technical assistants across seven school sites, and the work had to happen while buildings were closed.',
    scope: {
      inScope: [
        '1:1 Chromebook rollout to 15,000 students across 31 schools',
        'Full district asset inventory, built while distributing',
        'Google Workspace remote-learning curriculum for teachers',
        'Train-the-trainer so IT staff at each school could deliver it',
        'Directing six technical assistants across seven sites',
      ],
      outOfScope: [
        'Academic curriculum and instructional design — owned by teaching staff',
        'Home internet provisioning for families',
        'Student information system changes',
      ],
    },
    stakeholders: [
      { group: 'Principals', need: 'Their school’s students equipped, and teachers able to use the tools' },
      { group: 'Teachers', need: 'Training that worked for non-technical staff under time pressure' },
      { group: 'Families', need: 'Devices in hand, with the handover working around closure restrictions' },
      { group: 'District administration', need: 'An accurate asset inventory and accountability for 15,000 devices' },
      { group: 'Six technical assistants', need: 'Clear assignments across seven sites with no ambiguity about ownership' },
    ],
    plan: [
      { phase: '1 · Inventory as you go', detail: 'Built the asset inventory during distribution rather than before it — waiting for a clean inventory would have cost weeks the calendar did not have.' },
      { phase: '2 · Parallelize by site', detail: 'Assigned each technical assistant a defined set of schools with end-to-end ownership, so thirty-one schools progressed concurrently instead of serially.' },
      { phase: '3 · Train the trainers', detail: 'Wrote the Google Workspace remote-learning curriculum once, then trained IT staff at each school to deliver it locally — the only way to reach every teacher inside the window.' },
      { phase: '4 · Escalation path', detail: 'Kept a single point of escalation so a blocked site could be unblocked in hours rather than waiting for a weekly check-in.' },
    ],
    risks: [
      { risk: 'Incomplete inventory means devices go unaccounted for', mitigation: 'Recorded each device to a student at the point of handover, making distribution the inventory' },
      { risk: 'Six people cannot cover thirty-one schools serially', mitigation: 'Gave each assistant full ownership of a site group so the work ran in parallel' },
      { risk: 'Teachers receive devices they cannot teach on', mitigation: 'Built and delivered the curriculum alongside the rollout, not after it' },
      { risk: 'Closure restrictions block physical distribution', mitigation: 'Structured handover around the access the closure permitted, school by school' },
    ],
    wentWrong:
      'The first week ran as a single centralized queue, which was the wrong shape for thirty-one sites and immediately became the bottleneck — everything waited on one dispatcher. Breaking it into site-owned workstreams fixed the throughput, but the restructure cost most of that first week. Teacher training was also underscoped at the start: the original plan trained teachers directly, which could not scale to a whole district inside eight weeks, and had to be rebuilt as train-the-trainer once that became obvious.',
    outcome: [
      '15,000 students across 31 schools equipped 1:1 within eight weeks',
      'Full district asset inventory completed as a by-product of distribution',
      'Google Workspace remote-learning curriculum adopted district-wide at the principal’s request',
      'IT staff at every school trained to deliver the curriculum locally',
    ],
    retro:
      'Decide the work’s shape before starting it. A centralized queue and a distributed queue are not a small difference across thirty-one sites, and the cost of guessing wrong was a week I could not get back. I also learned to scope training as delivery capacity rather than content: the question is never "is the material good" but "how many people can deliver it."',
  },
];
