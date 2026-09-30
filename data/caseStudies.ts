// Four flagship programs, told at interview depth.
//
// A one-paragraph card can't show how a program was run, so each study below
// follows the order an interviewer asks in: the situation, what was in and out
// of scope, who had to be moved, how the work was sequenced, what was at risk,
// what went wrong, and the measured result.
//
// Everything here comes from the résumé and from facts Jasvant supplied. The
// `wentWrong` sections say what actually happened. A study with no friction in
// it reads like marketing, and the recovery is the part worth talking about.
// Copy is plain English on purpose: short sentences, no em dashes, and results
// stated as "did X, measured by Y, by doing Z".

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
  /** `outOfScope` may be empty; the page then shows only the in-scope list. */
  scope: { inScope: string[]; outOfScope: string[] };
  stakeholders: { group: string; need: string }[];
  plan: { phase: string; detail: string }[];
  risks: { risk: string; mitigation: string }[];
  wentWrong: string;
  outcome: string[];
  /** What Jasvant would do differently. Every panel asks this. */
  retro: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'department-onboarding-program',
    title: 'One repeatable process to move eight departments onto central IT',
    org: 'University of Washington, College of Arts & Sciences Dean’s Office',
    role: 'Program manager, departmental onboarding',
    date: 'Feb 2025 – Mar 2026',
    status: 'delivered',
    summary:
      'Eight departments ran their own IT. I built one process and used it to move each of them onto the Dean’s Office IT team, with a 2-hour response and 48-hour resolution target.',
    metrics: [
      { value: '8', label: 'departments moved onto central IT' },
      { value: '1–2 months', label: 'per department after the first' },
      { value: '3–4 months', label: 'for the first, the clinic' },
      { value: '2h / 48h', label: 'response and resolution target for every department' },
    ],
    situation:
      'Each department ran its own IT, and the Dean’s Office IT team (CAS IT) did not have a full picture of any of them. The eight departments were Speech and Hearing Sciences, Music, Anthropology, Statistics, Mathematics, the Jackson School of International Studies, Political Science and Biology. Each move involved the same groups: the dean, the chair, administrators, faculty, staff, UW-IT and facilities. Eight one-off migrations would have meant learning the same lessons eight times. So I built one process that could be reused, and ran every onboarding through it.',
    scope: {
      inScope: [
        'Move each department from its own IT onto the Dean’s Office IT team (CAS IT)',
        'Take a full inventory of the department’s equipment, software and infrastructure',
        'Record the department’s IT budget',
        'Find out what the department needs from IT, such as help desk, systems administration and web development',
        'Put the department on the CAS IT targets: 2-hour response, 48-hour resolution',
        'Build the reusable kit: workflows, Power Automate automations, a checklist, phases, a kickoff, a handoff, a runbook and documentation guidelines',
      ],
      outOfScope: [],
    },
    stakeholders: [
      { group: 'Dean', need: 'How the department can save money and keep faculty and staff happier, and how central IT can support the department’s research' },
      { group: 'Department chair and co-chair', need: 'Save money, raise faculty and staff satisfaction, white-glove IT support, help with technical projects, upkeep of the infrastructure, and a review of the IT budget' },
      { group: 'Administrators', need: 'Support during business hours, remote or in person, help automating workflows, an inventory, a hardware refresh lifecycle, and help setting up classrooms and labs' },
      { group: 'Faculty', need: 'Excellent IT support, help with their research, and help writing grants' },
      { group: 'Staff', need: 'Excellent IT support, help automating workflows, and better documentation' },
      { group: 'CAS IT (our own team)', need: 'What we can support without adding staff, what we would need to hire for, what is in the project backlog, and the state of the inventory' },
      { group: 'UW-IT', need: 'What access CAS IT needs, including network and DNS access and server needs' },
      { group: 'Facilities', need: 'Whether CAS IT needs physical access to rooms, labs and other spaces' },
    ],
    plan: [
      { phase: '1 · Kickoff (PMBOK: initiating)', detail: 'Start every department with the same kickoff. Identify the stakeholders (dean, chair and co-chair, administrators, faculty, staff, UW-IT and facilities), write down what each group needs, and agree on the goal: the department on CAS IT, with a 2-hour response and 48-hour resolution target. In PMBOK terms, this means knowing who is involved and what success looks like before any work starts.' },
      { phase: '2 · Investigate (PMBOK: planning)', detail: 'Work through the checklist to build a baseline: inventory, IT budget, infrastructure, vendors to keep in mind, and what the department needs from IT, such as help desk, systems administration and web development. In PMBOK terms this is gathering requirements and setting scope. It also answers CAS IT’s own questions: what it can support without adding staff, what it would need to hire for, and what is in the project backlog.' },
      { phase: '3 · Get access (PMBOK: risk and resource planning)', detail: 'Turn the checklist into access requests for IT, faculty, staff, the chair and the dean, and send them to UW-IT as soon as onboarding can begin. Facilities is asked for access to physical spaces. Access was the biggest risk in the first onboarding, so this step plans for it up front, as PMBOK risk management asks.' },
      { phase: '4 · Move to CAS IT (PMBOK: executing, monitoring and controlling)', detail: 'Do the move: help desk, systems administration and any other services the department needs. Power Automate workflows handle the steps that repeat. Track the department against the 2-hour response and 48-hour resolution targets, which is monitoring against a baseline in PMBOK terms, and deal with changes to the plan as they come up.' },
      { phase: '5 · Hand off and document (PMBOK: closing)', detail: 'Close the onboarding with a handoff and a runbook that follow the same documentation guidelines every time. In PMBOK terms this is the transition to operations plus lessons learned. The standard access plan came from the first onboarding and was reused for the rest.' },
    ],
    risks: [
      { risk: 'CAS IT cannot get into the department’s physical spaces, software or hardware', mitigation: 'A standard access plan, sent to UW-IT as soon as onboarding can start' },
      { risk: 'The former IT staff have left, so nobody can explain how things are set up', mitigation: 'A checklist of specific things to investigate, so the inventory, budget and infrastructure are found directly' },
      { risk: 'Each department gets a different process, and quality varies', mitigation: 'One kickoff, checklist, runbook and set of documentation guidelines used for all eight' },
    ],
    wentWrong:
      'The same problem came up in each department: making sure CAS IT had proper access to the physical spaces, software and hardware. After the first onboarding, the clinic, we wrote a standard plan for the access that IT, faculty, staff, the chair and the dean each needed. From then on we sent those requests to UW-IT as soon as we were told onboarding could begin. The two hardest departments were Speech and Hearing Sciences and Anthropology. In both, the former IT staff had already left, so we could not ask them for information or access.',
    outcome: [
      'All eight departments moved from their own IT to the Dean’s Office IT team',
      'For each one, a full picture of its inventory, IT budget and infrastructure, and a clear list of what it needs from IT',
      'Every department on the same targets: 2-hour response and 48-hour resolution',
      'The first onboarding, the clinic, took 3 to 4 months. The rest took 1 to 2 months each',
      'A reusable kit: workflows, Power Automate automations, checklist, phases, kickoff, handoff, runbook and documentation guidelines',
    ],
    retro:
      'I would change three things. First, I would ask the university PMI office for help building fuller documentation and runbooks. Second, I would attend faculty, staff and department meetings during the kickoff phase, so I meet every stakeholder in person and gather what the investigate phase needs. Third, I would get as much information as I could from the departing IT staff and teams before they leave. At the clinic and in Anthropology the old IT staff were already gone, and that made those two the hardest.',
  },
  {
    slug: 'clinic-onboarding',
    title: 'Onboarding a clinic onto central IT after its IT team left',
    org: 'University of Washington, Speech & Hearing Sciences Clinic',
    role: 'Program lead, department onboarding and technical projects',
    date: '2025 – 2026',
    status: 'recovered',
    summary:
      'A clinic lost its own IT staff and had little trust left in IT. Moving it to central IT took several projects. Rebuilding that trust was the first one, and nothing else could start until it was done.',
    metrics: [
      { value: '48h → 2h', label: 'response time, a 96% cut' },
      { value: '$30K/yr', label: 'duplicate spend removed' },
      { value: '7d → 48h', label: 'resolution time, to the CAS IT standard' },
      { value: '2 months', label: 'to rebuild the relationship' },
    ],
    situation:
      'The Speech and Hearing Sciences Clinic ran its own IT: its own staff, systems, servers and vendor contracts. The relationship with the college’s central IT had broken down over the years. The clinic’s response time had drifted to 48 hours and its resolution time to 7 days. Tickets went unanswered so often that clinical staff stopped filing them. Equipment was set up for IT’s convenience, not for how clinicians work. Then the clinic’s IT staff left, and the clinic came under central IT with no IT of its own. The systems moved over, and so did the distrust, which was now aimed at IT as a whole. Because the clinic holds patient data, every gap was also a HIPAA risk. The technical problems were real, but they were not the blocker. A department that no longer believed IT would answer was not going to hand over its systems because of a plan. So rebuilding the relationship became the first project.',
    scope: {
      inScope: [
        'Rebuild the working relationship between clinical staff and IT, as the first project',
        'Move the clinic onto central IT support, systems and servers, with no clinic IT staff left to hand over',
        'Run a HIPAA security audit of the clinic’s environment and fix what it finds',
        'Combine and renegotiate five overlapping clinical vendor relationships',
        'Bring the clinic up to the CAS IT standard: 2-hour response and 48-hour resolution',
        'Fix the systems and server faults the clinic had been living with',
      ],
      outOfScope: [
        'Choosing clinical software, which belongs to the clinicians',
        'Patient scheduling and records workflows',
        'Building renovation and physical plant',
      ],
    },
    stakeholders: [
      { group: 'Clinicians and clinical staff', need: 'Support that answers inside a patient appointment window, not the next day' },
      { group: 'Department faculty leadership', need: 'Proof that moving to central IT would not cost them control or speed' },
      { group: 'Five healthcare vendors', need: 'Clear technical ownership and one point of contact' },
      { group: 'Central IT infrastructure team', need: 'An environment they can support, not a pile of exceptions' },
      { group: 'College finance', need: 'The duplicate spend found and removed' },
    ],
    plan: [
      { phase: '1 · Rebuild the relationship first', detail: 'Before proposing anything, I met the clinicians on their terms and in their language. I fixed several long-standing complaints right away and asked for nothing in return. The first thing they saw from central IT was work delivered, not a plan to approve. The distrust had been earned by the team that left, so it could not be argued away, only outlasted. It took two months to go from hostile to cooperative, and nothing below could start until it did.' },
      { phase: '2 · Audit before promising', detail: 'With the clinic on board, I ran the HIPAA security audit and wrote down every finding. The scope was based on the real environment, not on what either side believed was there.' },
      { phase: '3 · Combine vendors', detail: 'I mapped which of the five vendors owned which system, cut the overlaps, and gave each remaining contract one owner.' },
      { phase: '4 · Migrate in clinical downtime', detail: 'I planned the systems and server cutover around the clinic’s patient schedule, so no appointment was affected.' },
      { phase: '5 · Commit to a response time', detail: 'I published the CAS IT commitment (2-hour response, 48-hour resolution) and the dispatch process behind it, so the numbers were a process and not just a promise.' },
    ],
    risks: [
      { risk: 'Clinicians refuse to cooperate because the last IT team let them down', mitigation: 'Deliver visible fixes early, with no strings attached, before asking for anything' },
      { risk: 'A HIPAA finding appears mid-migration and stops the work', mitigation: 'Audit first, so findings are known and planned for' },
      { risk: 'Vendor boundaries stay unclear and faults bounce between vendors', mitigation: 'Write down who owns each system and make one vendor accountable for each' },
      { risk: 'A cutover disrupts patient appointments', mitigation: 'Schedule all work against the clinic’s own calendar, in its downtime' },
    ],
    wentWrong:
      'Putting the relationship first was the right call, but two months is a long time with nothing to show. There were no migrated systems and no closed findings, only goodwill, and goodwill does not fit on a status report. The schedule kept running and the clinic had no IT of its own in the meantime. Holding the line against pressure to start cutting over early was the hardest part. It would have been easier if the trust-building had been a named project in the plan, with its own deliverables and dates, and not something that happened before the plan officially began.',
    outcome: [
      'Response time cut from 48 hours to 2 (a 96% improvement) and resolution time from 7 days to 48 hours, kept in place by a published dispatch process',
      '$30,000 a year in duplicate IT spend removed',
      'Five vendor relationships combined, each with clear technical ownership',
      'HIPAA audit findings fixed and compliance kept up under central IT',
      'A department with no IT staff of its own now runs fully on central IT, by design',
      'Two months from hostile to cooperative, which every other result depended on',
      'Several IT projects running at once in a department that had blocked single ones before',
      'Clinical staff filing tickets again and expecting an answer within two hours',
    ],
    retro:
      'Reading the stakeholder map before the systems diagram is what made this work. The technical scope was never the hard part. The trust gap was, and it showed in the first conversation. The gap was inherited: the team that left earned it, and it passed to whoever showed up next with the same label. An onboarding takes on the old team’s reputation along with its servers, so I now plan for that as its own workstream. What I would change is the planning, not the order. Trust-building was real work on the critical path. Naming it as a project with deliverables and dates would have saved me weeks of explaining why the Gantt chart looked empty.',
  },
  {
    slug: 'studio-buildout',
    title: 'A gaming studio’s IT, from zero to launch in five months',
    org: 'Tencent, Team Kaiju Studio',
    role: 'Technical Program Manager (Contract), buildout owner',
    date: '2022',
    status: 'delivered',
    summary:
      'An empty office, a fixed launch date, a $750K budget and no IT of any kind. Cloud, identity, network and 100+ workstations all had to exist and work on day one.',
    metrics: [
      { value: '5 months', label: 'from zero to fully working' },
      { value: '$750K', label: 'budget owned' },
      { value: '100+', label: 'multi-OS workstations delivered' },
      { value: '2 studios', label: 'later adopted the identity setup' },
    ],
    situation:
      'Tencent was opening a new games studio, and hiring set the launch date, not IT. There was no infrastructure, no identity provider, no network, no devices and no IT staff. A studio of engineers and artists would arrive expecting high-end workstations that worked. The budget was $750,000 and the team was one systems administrator and one project manager. Order mattered more than any single decision: identity had to exist before devices could be enrolled, and the network had to exist before either.',
    scope: {
      inScope: [
        'AWS cloud infrastructure for the studio',
        'Identity: MDM, single sign-on and multi-factor login across every platform',
        'Office networking from end to end',
        '100+ custom high-end multi-OS workstations, from spec to deployment',
        'Vendor selection and negotiation across the whole stack',
        'Supervising a systems administrator and a project manager',
      ],
      outOfScope: [
        'Game engine and content pipeline tools, which belong to the studio’s technical directors',
        'Studio hiring and org design',
        'Office fit-out beyond network and workstation setup',
      ],
    },
    stakeholders: [
      { group: 'Studio leadership', need: 'Everything working on launch day, inside budget' },
      { group: 'Engineers and artists', need: 'Workstations strong enough for real production work, ready when they arrive' },
      { group: 'Tencent corporate IT', need: 'A setup consistent enough to support across studios' },
      { group: 'Vendors (Google, JumpCloud, AWS, Cisco, 1Password)', need: 'Clear requirements and realistic delivery dates' },
      { group: 'Finance and procurement', need: 'Spend tracked against the $750K limit' },
    ],
    plan: [
      { phase: '1 · Identity first', detail: 'I chose and set up JumpCloud MDM and Google Workspace single sign-on with MFA before anything else, because every later decision depended on one source of identity.' },
      { phase: '2 · Network and cloud in parallel', detail: 'I built the office network and the AWS infrastructure at the same time. Neither blocked the other, and both blocked devices.' },
      { phase: '3 · Vendor comparison', detail: 'I compared Google, JumpCloud, AWS, Cisco and 1Password against the studio’s needs, and did not just default to corporate standards.' },
      { phase: '4 · Workstation pipeline', detail: 'I specified, ordered, imaged and enrolled 100+ multi-OS machines through the MDM from phase one. They were zero-touch by design, not by retrofit.' },
      { phase: '5 · Handover', detail: 'I documented the setup so the studio’s own administrator could run it after my contract ended.' },
    ],
    risks: [
      { risk: 'Hardware lead times slip past the launch date', mitigation: 'Order workstations against the identity milestone, not the launch date, to build in slack' },
      { risk: 'The identity choice locks the studio into a setup it outgrows', mitigation: 'Choose against the studio’s needs and write down the reasons for corporate review' },
      { risk: 'Two reports and a fixed date leave no room for rework', mitigation: 'Order the phases so each one’s output is the next one’s starting point, with no speculative work' },
      { risk: 'Workstations use up the budget before infrastructure is done', mitigation: 'Fund infrastructure first and treat workstation specs as the adjustable line' },
    ],
    wentWrong:
      'Hardware lead times were the constant threat. My first plan put workstation orders too late in the sequence, because they were the most visible step and I treated them as the last one. Re-ordering them against the identity milestone, not the launch date, won back the slack. But it meant fixing workstation specs before every requirements conversation was finished, and a few machines were more than their role needed. With a fixed launch date that was the right trade. With more time, I would have run the spec conversations earlier, in parallel.',
    outcome: [
      'Studio fully working on its launch date: cloud, identity, network and 100+ workstations',
      'Delivered in five months against a $750,000 budget',
      'The JumpCloud MDM and Google Workspace single sign-on and MFA setup, including the JumpCloud Go MFA rollout, became the standard for Tencent studios in Los Angeles and Montreal',
      'Handed over documented, so the studio’s own administrator could support it',
    ],
    retro:
      'Order long-lead hardware against the dependency that gates it, not against the date you need it. The other lesson held up too: choosing identity first made every later decision cheaper, and it is why two other studios could reuse the setup.',
  },
  {
    slug: 'district-rollout',
    title: '15,000 students on 1:1 devices in eight weeks',
    org: 'Rochester Community Schools',
    role: 'Lead Technical Consultant, operational IT lead',
    date: '2020',
    status: 'delivered',
    summary:
      'The whole district closed, remote learning was not set up, and the school calendar set the deadline. Every one of 15,000 students needed a device. Every machine in 31 schools needed counting. Teachers had to be able to teach on it all.',
    metrics: [
      { value: '15,000', label: 'students given a device' },
      { value: '31', label: 'schools inventoried' },
      { value: '8 weeks', label: 'from start to finish' },
      { value: 'District-wide', label: 'curriculum adoption' },
    ],
    situation:
      'COVID-19 closed the district, and remote learning was not in place. All 15,000 students needed a Chromebook. The asset list was so incomplete that nobody knew what the district already owned. Teachers had no training on the tools they were about to depend on. The deadline was the school calendar, which does not move. The two halves of the job pulled against each other. With buildings closed, devices had to go out from one district site, with one queue, one staging area, six technical assistants and every device passing through. At the same time, the inventory had to reach into all 31 schools, every cart, lab and classroom, to count what was there and pull what was dead.',
    scope: {
      inScope: [
        'A 1:1 Chromebook rollout: a device for each of 15,000 students, staged from one district site',
        'An inventory of every computer and laptop in all 31 schools, in every cart, lab and classroom',
        'Retiring and recycling old desktops and laptops as the count went',
        'A Google Workspace remote-learning curriculum for teachers',
        'Train-the-trainer sessions so IT staff at each school could teach it',
        'Directing six technical assistants across seven schools, and consulting in 10 of the 31 schools',
      ],
      outOfScope: [
        'Academic curriculum and lesson design, which belong to teaching staff',
        'Home internet for families',
        'Student information system changes',
      ],
    },
    stakeholders: [
      { group: 'Principals', need: 'Their students equipped and their teachers able to use the tools' },
      { group: 'Teachers', need: 'Training that worked for non-technical staff under time pressure' },
      { group: 'Families', need: 'Devices in hand, with pickup that worked within closure rules' },
      { group: 'District administration', need: 'An accurate asset list and accountability for 15,000 devices' },
      { group: 'Six technical assistants', need: 'A clear stage on the staging line and a clear set of schools, with no doubt about either' },
    ],
    plan: [
      { phase: '1 · Count as you go', detail: 'I ran the inventory alongside distribution, not before it. Waiting for a clean count would have cost weeks the calendar did not have. Each new Chromebook was recorded to its student at handover, so distribution was its own audit trail.' },
      { phase: '2 · Work in parallel inside one site', detail: 'I split the staging line into owned stages: unboxing, enrollment, asset tagging, cart building and handout. Six people could work on different batches at once, and nobody walked a device through every step.' },
      { phase: '3 · Walk every room in 31 schools', detail: 'We counted every computer and laptop in every cart, lab and classroom, and pulled dead machines for recycling as we went. I consulted in 10 of the 31 schools.' },
      { phase: '4 · Train the trainers', detail: 'I wrote the Google Workspace remote-learning curriculum once, then trained IT staff at each school to teach it locally. That was the only way to reach every teacher in the time we had.' },
      { phase: '5 · One path for escalations', detail: 'I kept a single point of escalation, so a blocked site could be unblocked in hours and not wait for a weekly meeting.' },
    ],
    risks: [
      { risk: 'An incomplete inventory means devices go missing', mitigation: 'Record each device to a student at handover, so distribution becomes the inventory' },
      { risk: 'One distribution site becomes the limit for the whole district', mitigation: 'Run the staging line in parallel stages and hand out by school and grade band' },
      { risk: 'Teachers get devices they cannot teach on', mitigation: 'Build and deliver the curriculum alongside the rollout, not after it' },
      { risk: 'Closure rules block physical handout', mitigation: 'Plan pickup around the access the closure allowed, school by school' },
    ],
    wentWrong:
      'I under-planned teacher training. The first plan trained teachers directly, which could not reach a whole district in eight weeks. It had to be rebuilt as train-the-trainer once that was clear, with IT staff at each school teaching the curriculum locally and not one team teaching it everywhere. The logistics had a second trap. Sending devices out from one site was right with buildings closed, but it made that site the only place things could jam, while the 31-school sweep pulled the same six people the other way. Handing out by school and grade band, and keeping the sweep off the critical path, mattered more than it would have if we had worked school by school.',
    outcome: [
      '15,000 students had a 1:1 device within eight weeks, all staged from a single site',
      'Every computer and laptop in all 31 schools counted, with old machines retired and recycled',
      'The Google Workspace remote-learning curriculum was adopted district-wide at the principal’s request',
      'IT staff at every school trained to teach the curriculum locally',
    ],
    retro:
      'Plan training as delivery capacity, not content. The question is never "is the material good". It is "how many people can teach it". Answering that late cost me a rebuild of the training plan in the middle of the rollout. On the logistics, running everything through one site was right for a closed district, but it means the slowest stage sets the speed of the whole line. Next time I would measure each stage from day one, not after the first backlog.',
  },
];
