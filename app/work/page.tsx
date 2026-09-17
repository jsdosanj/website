import Link from 'next/link';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import SectionHeading from '@/components/SectionHeading';
import { caseStudies } from '@/data/caseStudies';
import { site } from '@/data/site';
import { pageGraph, pageMetadata, type PageDescriptor } from '@/lib/site-metadata';

/**
 * Case-study section. PM screening turns on how a program is narrated, so each
 * study is laid out in the order an interviewer probes: situation, scope,
 * stakeholders, plan, risks, what went wrong, outcome, retro.
 *
 * One page rather than one page per study: a hiring manager reads these in a
 * single sitting, and three studies at this depth is a comfortable read while
 * three separate pages would bury two of them.
 */
const page: PageDescriptor = {
  path: '/work',
  ogSlug: 'work',
  title: 'Case Studies — Programs Delivered',
  description:
    'Three programs delivered by Jasvant Singh Dosanjh at interview depth: an escalated clinical IT rescue, a zero-to-one gaming studio buildout, and a 15,000-student district rollout in eight weeks.',
  keywords: [
    'program management case study', 'technical program manager portfolio',
    'project management case study', 'stakeholder management', 'risk register',
    'delivery plan', 'PM case study',
  ],
};

export const metadata = pageMetadata(page);

const statusChip = { delivered: 'chip-delivered', active: 'chip-active', recovered: 'chip-recovered' } as const;
const statusLabel = { delivered: 'Delivered', active: 'In flight', recovered: 'Recovered' } as const;

export default function Work() {
  const articles = caseStudies.map((c) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${site.url}/work#${c.slug}`,
    headline: c.title,
    description: c.summary,
    author: { '@id': `${site.url}/#person` },
    about: c.org,
  }));

  return (
    <>
      <JsonLd data={pageGraph(page, articles)} />

      {/* ===================== HERO ===================== */}
      <section className="container-x pt-36 sm:pt-44">
        <div className="max-w-3xl">
          <p className="eyebrow reveal is-visible">Case studies</p>
          <h1 className="mt-4 type-display-2 text-navy-900" data-kinetic>
            <span className="kin-line"><span className="kin-inner">Three programs, start to finish.</span></span>
          </h1>
          <p className="reveal is-visible mt-5 type-body text-ink-600 leading-relaxed">
            A card can tell you a program shipped. It can’t tell you how it was scoped, who had to be
            moved, what was actually at risk, or what went wrong — which is the part worth interviewing
            about. So here are three at the depth I’d discuss them in a room, including the parts I got
            wrong first.
          </p>
        </div>

        {/* Index — a swipeable rail on a phone, a grid from `sm` up. See
            .snap-rail in globals.css for why. */}
        <nav className="reveal is-visible mt-10 snap-rail" aria-label="Case studies">
          {caseStudies.map((c, i) => (
            <a key={c.slug} href={`#${c.slug}`} className="card card-hover p-5 flex flex-col group btn-press">
              <div className="flex items-center justify-between gap-3">
                <span className="type-mono-sm font-semibold text-ink-400">{String(i + 1).padStart(2, '0')}</span>
                <span className={`chip ${statusChip[c.status]}`}>{statusLabel[c.status]}</span>
              </div>
              <h2 className="mt-3 font-display type-subhead font-semibold text-navy-900 leading-snug flex-1">
                {c.title}
              </h2>
              <p className="mt-2 type-caption text-navy-600">{c.org}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 type-footnote font-semibold text-navy-700 group-hover:gap-2.5 transition-all">
                Read <Icon name="arrow" size={14} />
              </span>
            </a>
          ))}
        </nav>
      </section>

      {/* ===================== STUDIES ===================== */}
      {caseStudies.map((c, i) => (
        <section key={c.slug} id={c.slug} className="container-x mt-24 sm:mt-28 scroll-mt-28">
          <article className="card overflow-hidden">
            <header className="px-6 py-6 sm:px-8 sm:py-8 border-b border-navy-800/10 bg-paper-200/50">
              <div className="flex flex-wrap items-center gap-3">
                <span className="type-mono-sm font-semibold text-ink-400">
                  CASE {String(i + 1).padStart(2, '0')}
                </span>
                <span className={`chip ${statusChip[c.status]}`}>{statusLabel[c.status]}</span>
                <span className="type-mono-sm text-ink-500">{c.date}</span>
              </div>
              <h2 className="mt-3 type-title-2 text-navy-900">{c.title}</h2>
              <p className="mt-2 type-subhead font-medium text-navy-600">{c.org}</p>
              <p className="mt-1 type-mono-sm text-ink-500">{c.role}</p>
              <p className="mt-5 max-w-3xl type-subhead leading-relaxed text-ink-700">{c.summary}</p>

              <dl className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden border border-navy-800/10 bg-navy-900/[0.06]">
                {c.metrics.map((m) => (
                  <div key={m.label} className="bg-paper-50 px-4 py-3.5">
                    <dd className="type-metric">{m.value}</dd>
                    <dt className="mt-1.5 type-caption leading-snug text-ink-600">{m.label}</dt>
                  </div>
                ))}
              </dl>
            </header>

            <div className="px-6 py-8 sm:px-8 sm:py-10 space-y-10">
              <div>
                <h3 className="eyebrow">Situation inherited</h3>
                <p className="mt-3 max-w-3xl type-subhead leading-relaxed text-ink-700">{c.situation}</p>
              </div>

              <div>
                <h3 className="eyebrow">Scope</h3>
                <div className="mt-4 grid gap-5 md:grid-cols-2">
                  <div className="rounded-xl border border-navy-800/10 bg-paper-200/50 p-5">
                    <p className="type-label font-semibold text-status-green">In scope</p>
                    <ul className="mt-3 space-y-2" role="list">
                      {c.scope.inScope.map((x) => (
                        <li key={x} className="flex gap-2.5 type-footnote leading-relaxed text-ink-700">
                          <span className="mt-[7px] h-1 w-1 rounded-full bg-status-green shrink-0" aria-hidden="true" />
                          <span className="min-w-0">{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-navy-800/10 bg-paper-200/50 p-5">
                    <p className="type-label font-semibold text-ink-400">Explicitly out of scope</p>
                    <ul className="mt-3 space-y-2" role="list">
                      {c.scope.outOfScope.map((x) => (
                        <li key={x} className="flex gap-2.5 type-footnote leading-relaxed text-ink-600">
                          <span className="mt-[7px] h-1 w-1 rounded-full bg-ink-400 shrink-0" aria-hidden="true" />
                          <span className="min-w-0">{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="eyebrow">Stakeholder map</h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left min-w-[30rem]">
                    <caption className="sr-only">
                      Stakeholder groups and what each needed from the program
                    </caption>
                    <thead>
                      <tr className="type-label text-ink-400">
                        <th scope="col" className="font-medium pb-2 pr-6">Group</th>
                        <th scope="col" className="font-medium pb-2">What they needed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {c.stakeholders.map((sh) => (
                        <tr key={sh.group} className="border-t border-navy-800/[0.08]">
                          <th
                            scope="row"
                            className="py-3 pr-6 align-top type-footnote font-semibold text-navy-900 md:whitespace-nowrap"
                          >
                            {sh.group}
                          </th>
                          <td className="py-3 align-top type-footnote leading-relaxed text-ink-700">{sh.need}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="eyebrow">How it was sequenced</h3>
                <ol className="mt-4 space-y-3" role="list">
                  {c.plan.map((ph) => (
                    <li key={ph.phase} className="rounded-xl border border-navy-800/10 bg-paper-200/40 p-4 sm:p-5">
                      <p className="font-display type-subhead font-semibold text-navy-900">{ph.phase}</p>
                      <p className="mt-1.5 type-footnote leading-relaxed text-ink-700">{ph.detail}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="eyebrow">Risk register</h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left min-w-[32rem]">
                    <caption className="sr-only">Risks identified and how each was mitigated</caption>
                    <thead>
                      <tr className="type-label text-ink-400">
                        <th scope="col" className="font-medium pb-2 pr-6 w-1/2">Risk</th>
                        <th scope="col" className="font-medium pb-2">Mitigation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {c.risks.map((r) => (
                        <tr key={r.risk} className="border-t border-navy-800/[0.08]">
                          <th
                            scope="row"
                            className="py-3 pr-6 align-top type-footnote font-normal leading-relaxed text-navy-900"
                          >
                            {r.risk}
                          </th>
                          <td className="py-3 align-top type-footnote leading-relaxed text-ink-700">
                            {r.mitigation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-xl border border-kesari-500/35 bg-kesari-500/[0.07] p-5 sm:p-6">
                <h3 className="type-label font-semibold text-kesari-700">What went wrong</h3>
                <p className="mt-2.5 max-w-3xl type-subhead leading-relaxed text-ink-800">{c.wentWrong}</p>
              </div>

              <div>
                <h3 className="eyebrow">Outcome</h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2" role="list">
                  {c.outcome.map((o) => (
                    <li key={o} className="flex gap-2.5 type-footnote leading-relaxed text-ink-700">
                      <Icon name="arrow" size={14} className="mt-1 text-kesari-600 shrink-0" />
                      <span className="min-w-0">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 hairline">
                <h3 className="eyebrow">What I’d do differently</h3>
                <p className="mt-3 max-w-3xl type-subhead leading-relaxed text-ink-700">{c.retro}</p>
              </div>
            </div>
          </article>
        </section>
      ))}

      {/* ===================== CTA ===================== */}
      <section className="container-x mt-24">
        <div className="card border-glow overflow-hidden">
          <div className="text-center px-6 py-12 sm:px-10 sm:py-16">
            <SectionHeading eyebrow="Next" title="Want the version with follow-up questions?" align="center">
              <p className="reveal mt-4 max-w-xl mx-auto text-ink-600">
                These are the written versions. The interesting parts are the ones you’d ask about —
                happy to walk through any of them.
              </p>
            </SectionHeading>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" data-magnetic="0.3" className="btn btn-primary">
                Let’s talk <Icon name="arrow" size={18} />
              </Link>
              <Link href="/about" className="btn btn-secondary">
                Full track record
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
