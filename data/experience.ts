// Career history, written for a Technical Program Manager audience.
//
// Every bullet follows Google's XYZ formula — "accomplished [X], as measured
// by [Y], by doing [Z]" — so a recruiter gets the outcome, the number that
// proves it, and the method, in that order. Facts come from the Sept 2026
// Technical Program Manager résumé; roles the two-page résumé had to trim
// (Omni Group, Oakland University, Shabad OS, OCC) are kept here because
// the site has room for the full record.
export type Role = {
  title: string;
  company: string;
  /** Human-readable span, shown verbatim in the timeline and résumé. */
  date: string;
  /**
   * Machine-readable span for the roadmap view, as decimal years
   * (2025.0 = Jan 2025, 2025.5 = Jul 2025). `end: null` means "present".
   * Kept alongside `date` rather than parsed out of it, because the display
   * strings are deliberately loose ("2016 – 2018") and a parser would have to
   * guess at the months.
   */
  start: number;
  end: number | null;
  /** Which swimlane colour the roadmap bar uses. */
  track: 'program' | 'ic' | 'contract';
  /** Short label for the roadmap bar, where the full title won't fit. */
  shortLabel: string;
  /**
   * Bullets for a role with a single scope. A role with `sections` carries
   * its bullets inside those instead, so this is absent — the renderers
   * handle one or the other, and TypeScript makes them say which.
   */
  bullets?: string[];
  /**
   * Set when one official title covered materially different jobs. The
   * roadmap draws a bar segment per section, in that section's own track
   * colour; the résumé lists them as sections under the single title.
   * Newest first, like the role list itself.
   */
  sections?: RoleSection[];
  /** Shown under the title where the sections need a word of explanation. */
  note?: string;
};

/**
 * A distinct scope held under the same official title.
 *
 * This exists because of the UW entry: one title from Jan 2023 to Mar 2026,
 * two substantially different jobs inside it. Splitting it into two role
 * entries would have claimed a title that was never conferred — which an
 * employment verification returns as a discrepancy — and merging it into one
 * flat list of bullets would have buried the program work in the middle of an
 * infrastructure role. Sections keep the title honest and the scope visible.
 */
export type RoleSection = {
  /** Short name for the scope, e.g. 'Program & project delivery'. */
  label: string;
  date: string;
  start: number;
  end: number | null;
  track: 'program' | 'ic' | 'contract';
  bullets: string[];
};

/** Month as a fraction of a year: Jan = .0, Feb = .083 … Dec = .917. */
export const MONTH = {
  jan: 0, feb: 1 / 12, mar: 2 / 12, apr: 3 / 12, may: 4 / 12, jun: 5 / 12,
  jul: 6 / 12, aug: 7 / 12, sep: 8 / 12, oct: 9 / 12, nov: 10 / 12, dec: 11 / 12,
} as const;

export const experience: Role[] = [
  {
    title: 'Founder & Technical Program Manager',
    company: 'Dosanjh Labs',
    date: 'Mar 2026 – Present',
    start: 2026 + MONTH.mar,
    end: null,
    track: 'program',
    shortLabel: 'Dosanjh Labs · TPM',
    bullets: [
      'Took a security and compliance suite from zero to market, measured by 12 live products shipped and an early-stage release pipeline still expanding, by owning product strategy, the roadmap, and the end-to-end SDLC from requirements through CI/CD deployment.',
      'Replaced framework-by-framework spreadsheet audits with a single compliance view, measured by 22+ frameworks — NIST CSF 2.0, NIST SP 800-53, HIPAA, SOC 2, CMMC, ISO 27001, FERPA, and GDPR — mapped in one dashboard, by building Sightline to integrate data from the tools and systems an organization already runs.',
      'Cut CMMC Level 2 readiness from a consultant engagement to a self-service workflow, measured by a live DoD SPRS score plus an auto-generated, audit-ready SSP and POA&M, by building Bastion as a NIST SP 800-171 self-assessment tool.',
    ],
  },
  {
    title: 'Senior Computer Specialist',
    company: 'University of Washington — College of Arts & Sciences',
    date: 'Jan 2023 – Mar 2026',
    start: 2023 + MONTH.jan,
    end: 2026 + MONTH.mar,
    // The role's own track is the scope it started in; each section below
    // carries its own, so the roadmap bar changes colour where the job did.
    track: 'ic',
    shortLabel: 'UW · Sr Computer Specialist',
    note: 'One official title for the whole period. In January 2025 the scope changed to running programs and projects end to end; the title did not.',
    sections: [
      {
        label: 'Program & project delivery',
        date: 'Jan 2025 – Mar 2026',
        start: 2025 + MONTH.jan,
        end: 2026 + MONTH.mar,
        track: 'program',
        bullets: [
          'Took on a clinical department that had lost its own IT staff and its trust in the function, measured by a 96% SLA reduction (48 hours to 2), $30,000 in annual spend eliminated, and clinical staff filing tickets again, by leading the program that onboarded the Speech and Hearing Sciences Clinic into central College of Arts & Sciences IT — rebuilding the faculty–IT relationship as the first project, then running HIPAA security audits and coordinating five healthcare vendors, clinicians, and infrastructure stakeholders to closure.',
          'Held college-wide IT service steady through a three-month leadership vacancy, measured by a 9-person infrastructure and help desk team — including 4 union civil-service staff — delivering uninterrupted service, by operationally leading the team, owning work assignments, and establishing formal ticket-dispatch accountability.',
          'Kept a $250,000 annual hardware lifecycle program on budget as the team’s sole Workday buyer, measured by device forecasts aligned to every departmental budget across the college, by forecasting demand with department heads and negotiating pricing directly with Dell and Apple.',
          'Carried personal accountability for restricted research and healthcare data as CIO and System Security Officer of UW’s Center for Social Science Computation & Research, measured by certified secure destruction of every restricted dataset under multi-state (WA/CA) and federal IES requirements, by managing the center’s data servers and personally executing and certifying each destruction.',
          'Turned an unaudited server estate into a documented remediation plan, measured by 40 servers across multiple campus locations assessed and control gaps delivered to department heads with remediation steps, by leading NIST SP 800-53 security audits for the College of Arts & Sciences.',
        ],
      },
      {
        label: 'Infrastructure & security',
        date: 'Jan 2023 – Jan 2025',
        start: 2023 + MONTH.jan,
        end: 2025 + MONTH.jan,
        track: 'ic',
        bullets: [
          'Enabled zero-touch device enrollment at college-wide scale, measured by 2,000+ devices deployed and provisioned across the College of Arts & Sciences — including 400+ Macs and iPads standardized on Jamf Pro across 40+ departments ahead of executive deadlines — by designing and administering the Windows Autopilot and Jamf enrollment and lifecycle pipeline, whose compliance framework other university departments later adopted.',
          'Modernized network security across College of Arts & Sciences buildings without disrupting research or instruction, measured by zero downtime across six months and a migration framework later adopted by IT teams at other UW colleges, by sequencing building-by-building cutovers and documenting each step as a reusable playbook.',
          'Ended the college’s reliance on tribal knowledge, measured by a runbook and guide library adopted as the shared reference for IT staff across the entire college rather than just the Dean’s Office team, by building its documentation hub from scratch and writing the runbooks behind it.',
        ],
      },
    ],
  },
  {
    title: 'Lead Systems Administrator (Contract)',
    company: 'Tencent — Team Kaiju Studio',
    date: 'Jul 2022 – Dec 2022',
    start: 2022 + MONTH.jul,
    end: 2022 + MONTH.dec,
    track: 'contract',
    shortLabel: 'Tencent · Lead SysAdmin',
    bullets: [
      'Delivered a new gaming studio’s entire IT environment ahead of its launch date, measured by AWS infrastructure, identity and endpoint management, office networking, and 100+ multi-OS workstations live in five months against a $750,000 budget, by owning vendor selection across Google, JumpCloud, AWS, Cisco, and 1Password while supervising a systems administrator and a project manager.',
      'Set the identity standard for Tencent’s North American studios, measured by adoption as the default configuration across studios in Los Angeles and Montreal, by designing and implementing a unified JumpCloud MDM and Google Workspace SSO/MFA architecture, including the JumpCloud Go MFA rollout.',
    ],
  },
  {
    title: 'DevOps Engineer (Contract)',
    company: 'Omni Group',
    date: 'Feb 2022 – May 2022',
    start: 2022 + MONTH.feb,
    end: 2022 + MONTH.may,
    track: 'contract',
    shortLabel: 'Omni · DevOps',
    bullets: [
      'Removed the manual bottleneck in server provisioning, measured by per-server ramp-up cut 75% (4 hours to 1) and horizontal scaling achieved with no added headcount, by automating macOS server imaging, volume mounting, and API configuration in shell.',
    ],
  },
  {
    title: 'Lead Apprentice Systems Tech',
    company: 'Meta',
    date: 'Aug 2020 – Feb 2022',
    start: 2020 + MONTH.aug,
    end: 2022 + MONTH.feb,
    track: 'ic',
    shortLabel: 'Meta · Lead Apprentice Tech',
    bullets: [
      'Built the Pacific Northwest enterprise support bench, measured by 30 technicians and externs mentored, five Year Up externs converted to full-time roles, and the PNW Enterprise Support team ranked #1 nationally in ticket resolution, by running hands-on mentorship and onboarding for 20 externs and 10 enterprise support technicians.',
      'Resolved a privileged-access compatibility gap that blocked Linux users, measured by 5,000+ AR/VR engineers unblocked and the write-up adopted by Meta’s Director of Enterprise Operations and by BeyondTrust as a first-party supported solution, by authoring the Bomgar-on-Linux porting documentation from the failures the Oculus teams kept hitting.',
      'Unstalled platform-accessibility issues affecting international users, measured by resolution paths established across three functions — engineering, policy, and trust and safety — by owning the cross-functional escalation and driving each issue to an accountable team.',
    ],
  },
  {
    title: 'Lead Technical Consultant',
    company: 'Rochester Community Schools',
    date: 'Aug 2019 – Nov 2020',
    start: 2019 + MONTH.aug,
    end: 2020 + MONTH.nov,
    track: 'program',
    shortLabel: 'Rochester · IT Lead',
    bullets: [
      'Kept a district teaching through the COVID-19 closure, measured by a Chromebook delivered to every one of 15,000 students and every machine in all 31 schools inventoried inside eight weeks, by serving as operational IT lead — staging distribution from a single district site with six technical assistants while personally leading the inventory and decommissioning sweep in 10 of those schools.',
      'Got teachers and students productive on remote instruction instead of waiting on IT, measured by a curriculum adopted district-wide at the principal’s request and delivered by trained IT staff at every school, by developing a Google Workspace remote-learning curriculum and training the trainers.',
    ],
  },
  {
    title: 'Department Shares Administrator (Intern)',
    company: 'Oakland University UTS',
    date: 'Jan 2020 – Apr 2020',
    start: 2020 + MONTH.jan,
    end: 2020 + MONTH.apr,
    track: 'ic',
    shortLabel: 'Oakland UTS · Shares Admin',
    bullets: [
      'Cleared the university’s Shares Access backlog as a single intern, measured by over 18% of all cases closed, by processing employee access tickets end to end.',
      'Cut the ticket queue at its source, measured by over 40% of incoming requests eliminated, by building self-service portal features in PowerShell.',
    ],
  },
  {
    title: 'Technical Project Manager (Contract)',
    company: 'Chef Koochooloo',
    date: 'Aug 2019 – Nov 2019',
    start: 2019 + MONTH.aug,
    end: 2019 + MONTH.nov,
    track: 'contract',
    shortLabel: 'Chef Koochooloo · TPM',
    bullets: [
      'Positioned an early-stage ed-tech startup to raise, measured by $2M+ in funding from Nestlé and the Chilean government and a launch across multiple Mountain View schools, by defining MVP requirements, overseeing development, coordinating game-development vendors and developers, and managing stakeholders through launch.',
    ],
  },
  {
    title: 'Technology Services Mentor',
    company: 'Oakland University — Kresge Library',
    date: 'May 2018 – Jan 2020',
    start: 2018 + MONTH.may,
    end: 2020 + MONTH.jan,
    track: 'ic',
    shortLabel: 'Kresge Library · Mentor',
    bullets: [
      'Reduced the library’s support load while growing its student staff, measured by a 40% drop in ticket volume, by managing and mentoring student IT technicians and standardizing their onboarding workflows.',
    ],
  },
  {
    title: 'Researcher (Intern)',
    company: 'Shabad OS',
    date: 'Aug 2017 – Jul 2019',
    start: 2017 + MONTH.aug,
    end: 2019 + MONTH.jul,
    track: 'ic',
    shortLabel: 'Shabad OS · Researcher',
    bullets: [
      'Improved the reliability of software Gurdwaras depend on worldwide, measured by bug fixes accepted upstream into ShabadOS and Gurmukhi-to-English translation work delivered for Guru Granth Sahib Ji and the Dasam Granth, by testing releases against real congregation-facing use and contributing fixes back.',
    ],
  },
  {
    title: 'IT Support Specialist',
    company: 'Oakland Community College — Athletics Dept.',
    date: '2016 – 2018',
    start: 2016 + MONTH.sep,
    end: 2018 + MONTH.may,
    track: 'ic',
    shortLabel: 'OCC Athletics · IT Support',
    bullets: [
      'Covered an entire department’s technology needs as its only technologist, measured by sustained tier 1 and tier 2 support across hardware, networking, AV, and web systems plus a facility reservation system delivered into daily use, by owning every request end to end for the athletics department.',
    ],
  },
];
