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
      'I run multi-workstream programs end to end — strategy, roadmap, budget, and the SDLC underneath them — so engineering, vendors, and leadership all work off one plan they can actually trust.',
    proof: [
      'Shipped 12 live security and compliance products by owning strategy, roadmap, and the SDLC from requirements through CI/CD',
      'Unified 22+ compliance frameworks into one dashboard by building Sightline over the tools an organization already runs',
      'Helped secure $2M+ from Nestlé and the Chilean government by defining MVP requirements and managing stakeholders through launch',
    ],
  },
  {
    icon: 'target',
    role: 'Technical Project Manager',
    blurb:
      'Hand me the escalated project — five vendors, a missed deadline, and a department that has stopped trusting IT. I scope it, sequence it, and land it without breaking anything that is already working.',
    proof: [
      'Cut an escalated clinic’s SLA 96% (48 hours to 2) by coordinating five healthcare vendors through a HIPAA onboarding as Project Lead',
      'Delivered a six-month, multi-building security migration with zero downtime by sequencing cutovers building by building',
      'Stood up a gaming studio’s entire IT environment in five months against a $750K budget by owning vendor selection and supervising two reports',
    ],
  },
  {
    icon: 'shield',
    role: 'IT Program Manager',
    blurb:
      'The programs that never finish — hardware lifecycle, endpoint fleet, audit readiness, and the team keeping them moving. I own the budget, the compliance posture, and the people side of all three.',
    proof: [
      'Held a $250K annual hardware program on budget as sole Workday buyer by forecasting with department heads and negotiating with Dell and Apple',
      'Kept a 9-person team delivering through a 3-month leadership vacancy by establishing formal ticket-dispatch accountability',
      'Assessed 40 servers and delivered gap-remediation plans to department heads by leading the college’s NIST SP 800-53 audits',
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
      { value: 'Zero', label: 'downtime across a 6-month migration', source: 'UW · multi-building security cutover' },
      { value: '96', unit: '%', label: 'SLA cut — 48 hrs to 2', source: 'UW · Speech & Hearing Clinic' },
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
      { value: '15,000', label: 'students equipped 1:1', source: 'Rochester · across 31 schools' },
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
