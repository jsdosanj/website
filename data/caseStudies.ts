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
      'A healthcare clinic running its own shadow IT, a 48-hour response time, and a faculty–IT relationship that had broken down. The trust problem was the first thing visible and the first thing fixed — the technical work only became possible after it.',
    metrics: [
      { value: '48h → 2h', label: 'SLA, a 96% reduction' },
      { value: '$30K/yr', label: 'redundant spend eliminated' },
      { value: '5', label: 'healthcare vendors coordinated' },
      { value: 'HIPAA', label: 'audited and enforced' },
    ],
    situation:
      'The Speech and Hearing Sciences Clinic sat outside centralized IT, running its own systems and servers with its own vendor contracts. Response times had drifted to roughly 48 hours, tickets went unanswered often enough that clinical staff had stopped filing them at all, and the equipment itself had been configured around IT’s convenience rather than the way clinicians actually work. That had been accumulating for years, and the relationship between the faculty and central IT was openly adversarial because of it. Because the clinic handles patient data, every one of those gaps was also a HIPAA exposure. The technical debt was real, but the first thing apparent on walking in was that it was not the blocker: nobody on either side trusted the other enough to start. That was the read taken up front, and rebuilding it was where the work began.',
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
      { phase: '1 · Rebuild the relationship first', detail: 'Before proposing anything, met the clinicians on their terms and in their language and fixed several long-standing complaints immediately, with nothing asked in return — so the first thing they saw from IT was work delivered rather than a plan to approve. It took two months to get from adversarial to cooperative, and nothing else below could start until it did.' },
      { phase: '2 · Audit before promising', detail: 'With cooperation in hand, ran the HIPAA security audit and documented every finding, so the scope was based on the real environment rather than on what either side believed was there.' },
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
      'Leading with the relationship was the right call, but two months is a long time to report nothing shippable. There were no migrated systems and no closed findings to show for that stretch — only goodwill, which does not fit on a status report — while the schedule kept running and the pressure to start cutting over early kept building. Holding that line was the hardest part of the program, and it would have been easier with the trust-building written into the plan as named deliverables with dates rather than as the thing happening before the plan officially started.',
    outcome: [
      'Response time cut from roughly 48 hours to 2 — a 96% improvement, sustained by a published dispatch process',
      '$30,000 a year in redundant IT spend eliminated',
      'Five vendor relationships consolidated with clear technical ownership',
      'HIPAA audit findings remediated and compliance enforced under centralized IT',
      'Two months from adversarial to cooperative — the precondition for every other line here',
      'Multiple IT projects running concurrently in a department that had previously blocked single ones',
      'Clinical staff filing tickets again, and expecting an answer inside two hours',
    ],
    retro:
      'Reading the stakeholder map before the systems diagram is what made this one work — the technical scope was never the hard part, the trust deficit was, and it was visible in the first conversation. What I would change is how it was planned rather than how it was sequenced: credibility-building was real work on the critical path, and treating it as a named phase with its own deliverables from the start would have spared me weeks of explaining why the Gantt looked empty.',
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
    role: 'Lead Technical Consultant · operational IT lead',
    date: '2020',
    status: 'delivered',
    summary:
      'A district-wide closure, no remote-learning capability, and a deadline set by the school calendar. Every one of 15,000 students needed a device, every machine already in 31 schools needed counting, and teachers had to be able to actually teach on it.',
    metrics: [
      { value: '15,000', label: 'students equipped 1:1' },
      { value: '31', label: 'schools inventoried' },
      { value: '8 weeks', label: 'from start to complete' },
      { value: 'District-wide', label: 'curriculum adoption' },
    ],
    situation:
      'COVID-19 closed the district with no remote-learning capability in place. All 15,000 students needed a Chromebook each, the asset inventory was incomplete enough that nobody knew what the district already owned, and teachers had no training on the tools they were about to depend on entirely. The deadline was the school calendar, which does not move. The two halves of the job pulled against each other: with buildings closed, distribution had to run out of a single district staging site rather than school by school — one queue, one staging area, six technical assistants, every device passing through it — while the inventory had to reach into all 31 schools, every cart, lab and classroom, to count what was there and pull what was dead.',
    scope: {
      inScope: [
        '1:1 Chromebook rollout — a device for every one of 15,000 students, staged from a single district site',
        'Asset inventory of every computer and laptop in all 31 schools — every cart, lab and classroom',
        'Decommissioning and recycling end-of-life desktops and laptops as the count went',
        'Google Workspace remote-learning curriculum for teachers',
        'Train-the-trainer so IT staff at each school could deliver it',
        'Directing six technical assistants, and personally leading the work in 10 of the 31 schools',
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
      { group: 'Six technical assistants', need: 'An owned stage on the staging line and an owned set of schools, with no ambiguity either way' },
    ],
    plan: [
      { phase: '1 · Inventory as you go', detail: 'Ran the count alongside distribution rather than before it — waiting for a clean inventory would have cost weeks the calendar did not have. Each new Chromebook was recorded to its student at handover, so distribution was its own audit trail.' },
      { phase: '2 · Parallelize inside one site', detail: 'Split the staging line into owned stages — unboxing, enrollment, asset tagging, cart build, handout — so six people worked concurrently on different batches instead of walking each device through end to end.' },
      { phase: '3 · Walk every room in all 31 schools', detail: 'Counted every computer and laptop in every cart, lab and classroom across the district and pulled end-of-life machines for recycling as the count went. Personally led that sweep in 10 of the 31 schools.' },
      { phase: '4 · Train the trainers', detail: 'Wrote the Google Workspace remote-learning curriculum once, then trained IT staff at each school to deliver it locally — the only way to reach every teacher inside the window.' },
      { phase: '5 · Escalation path', detail: 'Kept a single point of escalation so a blocked site could be unblocked in hours rather than waiting for a weekly check-in.' },
    ],
    risks: [
      { risk: 'Incomplete inventory means devices go unaccounted for', mitigation: 'Recorded each device to a student at the point of handover, making distribution the inventory' },
      { risk: 'One distribution site becomes the throughput ceiling for the whole district', mitigation: 'Ran the staging line in parallel stages and sequenced handout by school and grade band' },
      { risk: 'Teachers receive devices they cannot teach on', mitigation: 'Built and delivered the curriculum alongside the rollout, not after it' },
      { risk: 'Closure restrictions block physical distribution', mitigation: 'Structured handover around the access the closure permitted, school by school' },
    ],
    wentWrong:
      'Teacher training was underscoped at the start. The original plan trained teachers directly, which could not scale to a whole district inside eight weeks, and had to be rebuilt as train-the-trainer once that became obvious — IT staff at each school delivering the curriculum locally instead of one team delivering it everywhere. The logistics had a second trap: distribution from one site was the right call with buildings closed, but it made that site the only place throughput could stall, while the 31-school inventory sweep pulled the same six people in the opposite direction. Sequencing handout by school and grade band, and keeping the sweep off the critical path, mattered more than it would have school by school.',
    outcome: [
      '15,000 students equipped 1:1 within eight weeks — one device each, all staged from a single site',
      'Every computer and laptop in all 31 schools inventoried, with end-of-life machines decommissioned and recycled',
      'Google Workspace remote-learning curriculum adopted district-wide at the principal’s request',
      'IT staff at every school trained to deliver the curriculum locally',
    ],
    retro:
      'Scope training as delivery capacity rather than content. The question is never "is the material good" but "how many people can deliver it" — and answering that late cost a rebuild of the training plan mid-rollout. On the logistics, running everything through one site was right for a closed district, but it means throughput is set by the slowest stage on the line, so I would instrument the stages from day one rather than after the first backlog.',
  },
];
