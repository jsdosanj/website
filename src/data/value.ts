// Recruiter-facing positioning: how Jasvant maps to each target role,
// and the quantified outcomes that prove it. The three lanes here mirror
// site.roles exactly — Technical Program Manager, Technical Project Manager,
// IT Program Manager — so a hiring manager sees their own req described back
// to them. Proof lines use the XYZ formula in compact form: outcome, metric,
// method.

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

export const outcomes = [
  { value: '12', label: 'live security & compliance products shipped end to end' },
  { value: '96%', label: 'SLA cut (48 hrs → 2 hrs) rescuing an escalated clinic' },
  { value: '$250K', label: 'annual hardware program owned as sole Workday buyer' },
  { value: '$750K', label: 'budget managed building a gaming studio’s IT from zero' },
  { value: 'Zero', label: 'downtime across a 6-month, multi-building security migration' },
  { value: '9', label: 'person team led through a 3-month leadership vacancy' },
  { value: '22+', label: 'compliance frameworks unified in one dashboard' },
  { value: '$2M+', label: 'raised by an ed-tech startup after MVP scoping & vendor management' },
];
