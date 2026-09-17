// Professional references, grouped by the organization where we worked together.
//
// NAME, ROLE AND ORGANIZATION ONLY — no email addresses and no phone numbers,
// deliberately. These are real people who gave their contact details for
// private reference checks, not for publication, so the page names who will
// vouch and leaves reaching them to a request. If a new reference is added
// here, it carries the same three fields and nothing more.
export type Reference = {
  name: string;
  role: string;
};

export type ReferenceGroup = {
  org: string;
  /** Where this org sits in the career, for the group's caption. */
  context: string;
  people: Reference[];
};

export const referenceGroups: ReferenceGroup[] = [
  {
    org: 'University of Washington — Speech & Hearing Sciences Clinic',
    context: 'The clinical IT recovery — the clinicians on the other side of it.',
    people: [
      { name: 'Susan J. Anderson', role: 'Director, Audiology Clinic' },
      { name: 'Cara Sauder', role: 'Assistant Teaching Professor' },
    ],
  },
  {
    org: 'University of Washington — College of Arts & Sciences',
    context: 'Infrastructure, security and the help desk, 2023 – 2026.',
    people: [
      { name: 'Helen Øland', role: 'Director of Computing' },
      { name: 'Matthew King', role: 'Senior Solutions Architect, Dean’s Office IT' },
      { name: 'Philip Costello', role: 'Manager of Help Desk, Dean’s Office IT' },
      { name: 'Kristin Weinman', role: 'Director of Finance & Administration, CAS Advancement' },
      { name: 'James Clauss', role: 'Professor of Classics' },
    ],
  },
  {
    org: 'Meta',
    context: 'Enterprise Engineering, 2020 – 2022.',
    people: [
      { name: 'Ilia Lopez', role: 'Enterprise Support Tech Lead' },
      { name: 'Aune Mitchell', role: 'Enterprise Support Tech' },
    ],
  },
  {
    org: 'Rochester Community Schools',
    context: 'The 1:1 Chromebook rollout during the COVID-19 closure.',
    people: [{ name: 'Amy O’Rourke', role: 'Librarian' }],
  },
];

/** Total for the page's standfirst, so the count never drifts from the list. */
export const referenceCount = referenceGroups.reduce((n, g) => n + g.people.length, 0);
