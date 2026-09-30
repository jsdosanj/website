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
  /**
   * Shown under the title where the sections need a word of explanation.
   * Describes the scopes, not the title history: the PDF résumé presents
   * this period differently, and the site should not contradict it in
   * prose. The section headings and their date ranges carry the shape of
   * the role on their own.
   */
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
      'Took a security and compliance suite from zero to market, measured by 12 live products and a release pipeline that is still growing, by owning product strategy, the roadmap and the full software lifecycle from requirements to deployment, and by building with Claude Code, GitHub Copilot and OpenRouter.',
      'Replaced framework-by-framework spreadsheet audits with one compliance view, measured by 22+ frameworks (NIST CSF 2.0, NIST SP 800-53, HIPAA, SOC 2, CMMC, ISO 27001, FERPA and GDPR) mapped in one dashboard, by building Sightline to pull data from the tools an organization already runs.',
      'Turned CMMC Level 2 readiness from a consultant project into a self-service workflow, measured by a live DoD SPRS score and an auto-generated SSP and POA&M ready for audit, by building Bastion as a NIST SP 800-171 self-assessment tool.',
      'Built the largest open-source Sikh dataset, measured by 4,000+ texts translated from Punjabi to English, by using Claude Code, GitHub Copilot and OpenRouter with several models for OCR and translation.',
    ],
  },
  {
    title: 'Senior Computer Specialist',
    company: 'University of Washington, College of Arts & Sciences',
    date: 'Jan 2023 – Mar 2026',
    start: 2023 + MONTH.jan,
    end: 2026 + MONTH.mar,
    // The role's own track is the scope it started in; each section below
    // carries its own, so the roadmap bar changes colour where the job did.
    track: 'ic',
    shortLabel: 'UW · Sr Computer Specialist',
    note: 'One role with two scopes: infrastructure and security first, then program and project delivery from January 2025.',
    sections: [
      {
        label: 'Program & project delivery',
        date: 'Jan 2025 – Mar 2026',
        start: 2025 + MONTH.jan,
        end: 2026 + MONTH.mar,
        track: 'program',
        bullets: [
          'Moved eight departments from their own IT onto the Dean’s Office IT team, measured by 8 departments onboarded between Feb 2025 and Mar 2026 (Speech & Hearing Sciences, Music, Anthropology, Statistics, Mathematics, the Jackson School of International Studies, Political Science and Biology), each with a full inventory, IT budget and needs list and a 2-hour response and 48-hour resolution target, by building one repeatable process: workflows, Power Automate automations, a checklist, a kickoff, a handoff, a runbook and documentation guidelines.',
              'Won back a clinic that had lost its IT staff and its trust in IT, measured by a 96% faster response time (48 hours to 2), $30,000 a year in spend removed and clinical staff filing tickets again, by leading the program that moved the Speech and Hearing Sciences Clinic onto central IT: I rebuilt the relationship first, then ran HIPAA security audits and coordinated five healthcare vendors.',
          'Kept college-wide IT running through a three-month leadership gap, measured by a 9-person infrastructure and help desk team, including 4 union civil-service staff, working with no break in service, by leading the team day to day, owning work assignments and setting up formal ticket-dispatch accountability.',
          'Kept a $250,000 annual hardware program on budget as the team’s only Workday buyer, measured by device forecasts that matched every departmental budget in the college, by forecasting demand with department heads and negotiating prices directly with Dell and Apple.',
          'Took personal responsibility for restricted research and healthcare data as CIO and System Security Officer of UW’s Center for Social Science Computation & Research, measured by every restricted dataset securely destroyed and certified under Washington, California and federal IES rules, by managing the center’s data servers and carrying out and certifying each destruction myself.',
          'Turned an unaudited group of servers into a written fix-it plan, measured by 40 servers across several campus locations assessed and control gaps sent to department heads with steps to fix them, by leading NIST SP 800-53 security audits for the College of Arts & Sciences.',
        ],
      },
      {
        label: 'Infrastructure & security',
        date: 'Jan 2023 – Jan 2025',
        start: 2023 + MONTH.jan,
        end: 2025 + MONTH.jan,
        track: 'ic',
        bullets: [
          'Made device setup hands-off across the whole college, measured by 2,000+ devices deployed and set up, including 400+ Macs and iPads on Jamf Pro across 40+ departments ahead of executive deadlines, by designing and running the Windows Autopilot and Jamf enrollment and lifecycle pipeline. Other university departments later adopted its compliance framework.',
          'Upgraded network security across College of Arts & Sciences buildings without disrupting research or teaching, measured by zero downtime over six months and a migration framework that IT teams at other UW colleges later adopted, by planning the cutover one building at a time and writing down each step as a reusable playbook.',
          'Ended the college’s reliance on knowledge that only a few people had, measured by a library of runbooks and guides that IT staff across the whole college now use as their shared reference, by building the documentation hub from scratch and writing the runbooks in it.',
        ],
      },
    ],
  },
  {
    title: 'Lead Systems Administrator (Contract)',
    company: 'Tencent, Team Kaiju Studio',
    date: 'Jul 2022 – Dec 2022',
    start: 2022 + MONTH.jul,
    end: 2022 + MONTH.dec,
    track: 'contract',
    shortLabel: 'Tencent · Lead SysAdmin',
    bullets: [
      'Delivered a new gaming studio’s whole IT environment before its launch date, measured by AWS infrastructure, identity and device management, office networking and 100+ multi-OS workstations all live in five months on a $750,000 budget, by owning vendor selection across Google, JumpCloud, AWS, Cisco and 1Password while supervising a systems administrator and a project manager.',
      'Set the identity standard for Tencent’s North American studios, measured by its adoption as the default setup at the Los Angeles and Montreal studios, by designing and building one JumpCloud MDM and Google Workspace single sign-on and MFA setup, including the JumpCloud Go MFA rollout.',
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
      'Removed the manual bottleneck in server setup, measured by a 75% cut in ramp-up time per server (4 hours to 1) and room to scale with no added headcount, by automating macOS server imaging, volume mounting and API configuration in shell scripts.',
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
      'Built up the Pacific Northwest enterprise support team, measured by 30 technicians and externs mentored, five Year Up externs hired full time and the PNW Enterprise Support team ranked #1 in the country for ticket resolution, by mentoring and onboarding 20 externs and 10 enterprise support technicians hands on.',
      'Fixed a privileged-access problem that blocked Linux users, measured by 5,000+ AR/VR engineers unblocked and a guide that Meta’s Director of Enterprise Operations and BeyondTrust both adopted as a supported solution, by writing the Bomgar-on-Linux porting documentation from the failures the Oculus teams kept hitting.',
      'Got stuck platform-accessibility issues for international users moving again, measured by clear resolution paths set up across three teams (engineering, policy, and trust and safety), by owning the escalation and driving each issue to a team that was accountable for it.',
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
      'Kept a district teaching through the COVID-19 closure, measured by a Chromebook for each of 15,000 students and every machine in all 31 schools counted within eight weeks, by serving as operational IT lead: I ran device handout from one district site with six technical assistants and personally led the count and retirement of old machines in 10 of the schools.',
      'Got teachers and students working on remote learning without waiting on IT, measured by a curriculum the whole district adopted at the principal’s request and IT staff at every school trained to teach it, by writing a Google Workspace remote-learning curriculum and training the trainers.',
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
      'Cleared the university’s Shares Access backlog as a single intern, measured by over 18% of all cases closed, by working employee access tickets from start to finish.',
      'Cut the ticket queue at its source, measured by over 40% of incoming requests removed, by building self-service portal features in PowerShell.',
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
      'Got an early-stage ed-tech startup ready to raise money, measured by $2M+ from Nestlé and the Chilean government and a launch in several Mountain View schools, by defining MVP requirements, overseeing development, coordinating game-development vendors and developers, and managing stakeholders through launch.',
    ],
  },
  {
    title: 'Technology Services Mentor',
    company: 'Oakland University, Kresge Library',
    date: 'May 2018 – Jan 2020',
    start: 2018 + MONTH.may,
    end: 2020 + MONTH.jan,
    track: 'ic',
    shortLabel: 'Kresge Library · Mentor',
    bullets: [
      'Cut the library’s support load while growing its student staff, measured by a 40% drop in ticket volume, by managing and mentoring student IT technicians and standardizing how they were onboarded.',
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
      'Made software that Gurdwaras around the world rely on more reliable, measured by bug fixes accepted into ShabadOS and Gurmukhi-to-English translation work delivered for Guru Granth Sahib Ji and the Dasam Granth, by testing releases against real congregation use and contributing fixes back.',
    ],
  },
  {
    title: 'IT Support Specialist',
    company: 'Oakland Community College, Athletics Dept.',
    date: '2016 – 2018',
    start: 2016 + MONTH.sep,
    end: 2018 + MONTH.may,
    track: 'ic',
    shortLabel: 'OCC Athletics · IT Support',
    bullets: [
      'Covered a whole department’s technology needs as its only technologist, measured by steady tier 1 and tier 2 support across hardware, networking, AV and web systems, plus a facility reservation system in daily use, by owning every request from start to finish for the athletics department.',
    ],
  },
];
