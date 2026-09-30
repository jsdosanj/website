import Link from 'next/link';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import SectionHeading from '@/components/SectionHeading';
import { site } from '@/data/site';
import { pageGraph, pageMetadata, type PageDescriptor } from '@/lib/site-metadata';

/**
 * A pillar page for the head term. The home page is a portfolio; this page
 * answers the questions people (and answer engines) actually ask about the
 * role, and backs each answer with results from the case studies.
 *
 * Every fact here is already on another page of the site. The answers are
 * written as short, complete sentences so a search or AI answer engine can
 * lift one without needing the text around it.
 */
const page: PageDescriptor = {
  path: '/technical-program-manager',
  ogSlug: 'technical-program-manager',
  title: 'Technical Program Manager: What I Deliver',
  description:
    'What a technical program manager does, and the results Jasvant Singh Dosanjh has delivered: 8 departments onto central IT, 12 products, zero-downtime migrations.',
  keywords: [
    'what does a technical program manager do', 'technical program manager Seattle',
    'technical program manager San Francisco', 'remote technical program manager',
    'TPM vs project manager', 'technical program manager higher education',
    'technical program manager security compliance', 'IT program manager',
  ],
};

export const metadata = pageMetadata(page);

const facts: { label: string; value: React.ReactNode }[] = [
  { label: 'Name', value: site.founder },
  { label: 'Role', value: 'Technical Program Manager (also Technical Project Manager and IT Program Manager roles)' },
  { label: 'Based in', value: 'Seattle, WA' },
  { label: 'Available for', value: site.workPreference.replace(/^Open to /, '') },
  { label: 'Experience', value: '10+ years in higher education, healthcare, gaming and big tech' },
  {
    label: 'Recent results',
    value:
      'Moved 8 University of Washington departments onto central IT with one repeatable process. Shipped 12 security and compliance products. Finished a six-month security migration with zero downtime.',
  },
  {
    label: 'Certifications',
    value: 'Jamf Pro Certified Technician, Google Cloud Digital Leader, PMI CPMAI micro-credential. PMP exam scheduled for October 2026.',
  },
  { label: 'Languages', value: 'English and Punjabi (fluent), Hindi and Urdu (conversational)' },
];

const results = [
  {
    stat: '8 departments',
    text: 'moved from their own IT onto the Dean’s Office IT team at the University of Washington, each with a 2-hour response and 48-hour resolution target, by building one repeatable onboarding process.',
    href: '/work#department-onboarding-program',
  },
  {
    stat: '48 hours to 2',
    text: 'response time for a clinic that had lost its IT team (and 7 days to 48 hours to resolve), plus $30,000 a year in duplicate spend removed.',
    href: '/work#clinic-onboarding',
  },
  {
    stat: '5 months, $750K',
    text: 'to build a new gaming studio’s whole IT environment, including 100+ workstations. The identity setup became the standard for two other studios.',
    href: '/work#studio-buildout',
  },
  {
    stat: '15,000 students',
    text: 'given a Chromebook, and every machine in 31 schools counted, in eight weeks during the COVID-19 closure.',
    href: '/work#district-rollout',
  },
  {
    stat: 'Zero downtime',
    text: 'across a six-month, multi-building security migration, planned one building at a time. Other UW colleges later adopted the framework.',
    href: '/about',
  },
  {
    stat: '12 products',
    text: 'shipped end to end in a security and compliance suite, from requirements to deployment, including Sightline, which brings 22+ compliance frameworks into one dashboard.',
    href: '/products',
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'What does a technical program manager do?',
    a: 'A technical program manager (TPM) plans and runs work that spans many teams, vendors and systems. They own the roadmap, budget, risks and dependencies, and keep engineering, security and business leaders working from one plan they can trust.',
  },
  {
    q: 'What is the difference between a technical program manager and a project manager?',
    a: 'A project manager runs one project with a defined scope and end date. A technical program manager runs a group of related projects, manages the dependencies between them, and understands the technology well enough to challenge estimates and make engineering trade-offs. Jasvant Dosanjh worked as a Technical Project Manager at the University of Washington from January 2023, then as a Technical Program Manager from January 2025.',
  },
  {
    q: 'Who is Jasvant Singh Dosanjh?',
    a: 'Jasvant Singh Dosanjh is a Technical Program Manager based in Seattle, Washington, with 10+ years of experience in higher education, healthcare, gaming and big tech. He built the repeatable process that moved eight University of Washington departments onto central IT, and he founded Dosanjh Labs, which has shipped 12 security and compliance products.',
  },
  {
    q: 'What has Jasvant delivered as a program manager?',
    a: 'He moved eight departments onto central IT with a 2-hour response and 48-hour resolution target, cut a clinic’s response time from 48 hours to 2, built a new gaming studio’s IT environment in five months on a $750K budget, put a Chromebook in the hands of 15,000 students in eight weeks, and finished a six-month security migration with zero downtime.',
  },
  {
    q: 'Which industries has he worked in?',
    a: 'Higher education (University of Washington), healthcare (a HIPAA-regulated clinic), gaming (Tencent), big tech (Meta) and K-12 education (Rochester Community Schools).',
  },
  {
    q: 'Is Jasvant open to work, and where?',
    a: 'Yes. He is open to hybrid or onsite roles in Seattle, WA and San Francisco, CA, and to remote roles anywhere in the USA. He is open to Technical Program Manager, Technical Project Manager and IT Program Manager roles.',
  },
  {
    q: 'What tools and methods does he use?',
    a: 'Agile, Scrum, Waterfall and Lean delivery, with Jira, Confluence, Azure DevOps and Microsoft Project. He works under NIST, HIPAA and FERPA requirements and builds software with Claude Code, GitHub Copilot and OpenRouter.',
  },
  {
    q: 'Does he hold the PMP certification?',
    a: 'His PMP exam is scheduled for October 2026. He already holds the Jamf Pro Certified Technician and Google Cloud Digital Leader certifications and the PMI CPMAI micro-credential.',
  },
  {
    q: 'How can I contact Jasvant?',
    a: 'Use the contact form at jasvant.me/contact, or message him on LinkedIn at linkedin.com/in/jasvantsd. His current résumé is available to download from the contact page.',
  },
];

export default function TechnicalProgramManager() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${site.url}${page.path}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={pageGraph(page, [faqSchema])} />

      <section className="container-x pt-36 sm:pt-44">
        <div className="max-w-3xl">
          <p className="eyebrow reveal is-visible">Technical Program Manager</p>
          <h1 className="mt-4 type-display-2 text-navy-900" data-kinetic>
            <span className="kin-line"><span className="kin-inner">What a technical program manager delivers.</span></span>
          </h1>
          <p className="reveal is-visible mt-5 type-body text-ink-600 leading-relaxed">
            A technical program manager plans and runs work that spans many teams, vendors and systems,
            and keeps everyone on one plan. I’m <span className="text-ink-800 font-medium">Jasvant Singh Dosanjh</span>,
            a technical program manager in Seattle with 10+ years in higher education, healthcare, gaming and
            big tech. Below is what that looks like in practice, with numbers.
          </p>
          <div className="reveal is-visible mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Let’s talk <Icon name="arrow" size={18} />
            </Link>
            <Link href="/work" className="btn btn-secondary">
              Read the case studies
            </Link>
          </div>
        </div>
      </section>

      {/* Quick facts: short, complete lines that an answer engine can quote. */}
      <section className="container-x mt-16" aria-labelledby="facts-heading">
        <div className="reveal card p-6 sm:p-8">
          <h2 id="facts-heading" className="type-title-3 text-navy-900">Quick facts</h2>
          <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-[11rem_1fr]">
            {facts.map((f) => (
              <div key={f.label} className="contents">
                <dt className="type-label text-ink-500">{f.label}</dt>
                <dd className="type-subhead text-ink-800 leading-relaxed">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-x mt-24">
        <SectionHeading eyebrow="Results" title="What I’ve delivered">
          <p className="reveal mt-4 max-w-2xl text-ink-600">
            Each result is a program with a plan, a budget and a date. Follow the links for the full
            case study.
          </p>
        </SectionHeading>
        <ul className="mt-10 grid gap-5 md:grid-cols-2" role="list">
          {results.map((r) => (
            <li key={r.stat} className="reveal">
              <Link href={r.href} className="card card-hover p-6 h-full block btn-press">
                <p className="font-display type-title-3 text-navy-900">{r.stat}</p>
                <p className="mt-2 type-subhead leading-relaxed text-ink-600">{r.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 type-footnote font-semibold text-navy-700">
                  Read more <Icon name="arrow" size={14} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x mt-24">
        <SectionHeading eyebrow="Questions" title="Technical program manager FAQ" />
        <div className="mt-10 max-w-3xl space-y-8">
          {faqs.map((f) => (
            <div key={f.q} className="reveal">
              <h3 className="type-title-4 text-navy-900">{f.q}</h3>
              <p className="mt-2 type-body leading-relaxed text-ink-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-24">
        <div className="turn card border-glow text-center px-6 py-12 sm:px-10 sm:py-14">
          <h2 className="type-title-1 text-navy-900">Hiring a technical program manager?</h2>
          <p className="mt-4 max-w-xl mx-auto text-ink-600">
            I’m open to hybrid or onsite roles in Seattle and San Francisco, and remote roles across the USA.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Get in touch <Icon name="arrow" size={18} />
            </Link>
            <Link href="/contact#resumes" className="btn btn-secondary">
              <Icon name="file" size={18} /> Download résumé
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
