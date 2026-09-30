// Recruiter-facing positioning: how Jasvant maps to each target role, and the
// quantified outcomes that prove it.
//
// The three lanes mirror site.roles exactly — Technical Program Manager,
// Technical Project Manager, IT Program Manager — so a hiring manager sees
// their own req described back to them. Proof lines use the XYZ formula in
// compact form: outcome, metric, method.

export const helpAreas = [
  {
    icon: 'workflow',
    role: 'Technical Program Manager',
    blurb:
      'I run programs with many workstreams from start to finish: strategy, roadmap, budget and the software lifecycle underneath them. Engineering, vendors and leadership all work from one plan they can trust.',
    proof: [
      'Shipped 12 live security and compliance products by owning strategy, the roadmap and the software lifecycle from requirements to deployment',
      'Brought 22+ compliance frameworks into one dashboard by building Sightline on top of the tools an organization already runs',
      'Helped a startup raise $2M+ from Nestlé and the Chilean government by defining MVP requirements and managing stakeholders through launch',
    ],
  },
  {
    icon: 'target',
    role: 'Technical Project Manager',
    blurb:
      'Hand me the escalated project: five vendors, a missed deadline, and a department that no longer trusts IT. I scope it, plan the order of work, and land it without breaking anything that already works.',
    proof: [
      'Cut a clinic’s response time by 96% (48 hours to 2) by leading the program that moved it onto central IT, starting with rebuilding a broken relationship between faculty and IT',
      'Finished a six-month, multi-building security migration with zero downtime by planning the cutover one building at a time',
      'Built a gaming studio’s whole IT environment in five months on a $750K budget by owning vendor selection and supervising two people',
    ],
  },
  {
    icon: 'shield',
    role: 'IT Program Manager',
    blurb:
      'The programs that never end: hardware lifecycle, the device fleet, audit readiness, and the team that keeps them moving. I own the budget, the compliance posture and the people side of all three.',
    proof: [
      'Kept a $250K annual hardware program on budget as the only Workday buyer by forecasting with department heads and negotiating with Dell and Apple',
      'Kept a 9-person team delivering through a 3-month leadership gap by setting up formal ticket-dispatch accountability',
      'Assessed 40 servers and sent fix-it plans to department heads by leading the college’s NIST SP 800-53 audits',
    ],
  },
];

// Grouped KPIs for the delivery dashboard. Every figure is tied to the program
// that produced it, so the panel reads as a portfolio rather than trivia —
// and so any number can be traced back to a bullet in experience.ts.
export type Metric = {
  value: string;
  unit?: string;
  label: string;
  source: string;
};
export type MetricGroup = {
  title: string;
  icon: string;
  metrics: Metric[];
};

export const metricGroups: MetricGroup[] = [
  {
    title: 'Delivery',
    icon: 'workflow',
    metrics: [
      { value: '12', label: 'products shipped end to end', source: 'Dosanjh Labs · requirements → CI/CD' },
      { value: '8', label: 'departments moved onto central IT', source: 'UW · Dean’s Office onboarding program' },
      { value: 'Zero', label: 'downtime across a 6-month migration', source: 'UW · multi-building security cutover' },
      { value: '96', unit: '%', label: 'faster response, 48 hrs to 2', source: 'UW · Speech & Hearing Clinic' },
      { value: '8', unit: ' wks', label: 'to a full district 1:1 rollout', source: 'Rochester · COVID-19 closure' },
    ],
  },
  {
    title: 'Budget owned',
    icon: 'target',
    metrics: [
      { value: '$250K', unit: '/yr', label: 'hardware lifecycle program', source: 'UW · sole Workday buyer' },
      { value: '$750K', label: 'studio buildout, zero to launch', source: 'Tencent · Team Kaiju Studio' },
      { value: '$2M+', label: 'raised after MVP scoping', source: 'Chef Koochooloo · Nestlé & Chile' },
      { value: '$30K', unit: '/yr', label: 'redundant spend eliminated', source: 'UW · clinic centralization' },
    ],
  },
  {
    title: 'Scale',
    icon: 'server',
    metrics: [
      { value: '9', label: 'person team led through a vacancy', source: 'UW · incl. 4 union civil-service staff' },
      { value: '15,000', label: 'students equipped 1:1', source: 'Rochester · one device per student, 31 schools inventoried' },
      { value: '2,000+', label: 'devices on zero-touch enrollment', source: 'UW · Autopilot + Jamf pipeline' },
      { value: '5,000+', label: 'engineers unblocked on Linux', source: 'Meta · BeyondTrust porting docs' },
    ],
  },
  {
    title: 'Compliance',
    icon: 'shield',
    metrics: [
      { value: '22+', label: 'frameworks mapped in one dashboard', source: 'Sightline · NIST, HIPAA, SOC 2, CMMC…' },
      { value: '40', label: 'servers assessed and remediated', source: 'UW · NIST SP 800-53 audits' },
      { value: '5', label: 'healthcare vendors coordinated', source: 'UW · HIPAA clinic onboarding' },
      { value: '100', unit: '%', label: 'restricted data destruction certified', source: 'UW CSSCR · WA/CA + federal IES' },
    ],
  },
];
