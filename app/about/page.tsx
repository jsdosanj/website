import Link from 'next/link';
import Icon from '@/components/Icon';
import JourneyTrail from '@/components/JourneyTrail';
import JsonLd from '@/components/JsonLd';
import Portrait from '@/components/Portrait';
import ProgramMark from '@/components/ProgramMark';
import ProgramRoadmap from '@/components/ProgramRoadmap';
import SectionHeading from '@/components/SectionHeading';
import Tabs from '@/components/Tabs';
import { certifications, education } from '@/data/education';
import { journeyCreed } from '@/data/journey';
import { leadership } from '@/data/leadership';
import { products, type Product } from '@/data/products';
import { headlineProjects, moreProjects } from '@/data/projectsLed';
import { recommendations } from '@/data/recommendations';
import { site } from '@/data/site';
import { pageGraph, pageMetadata, type PageDescriptor } from '@/lib/site-metadata';

const page: PageDescriptor = {
  path: '/about',
  ogSlug: 'about',
  title: 'About — Track Record & Experience',
  description:
    'The track record of Jasvant Singh Dosanjh: a Technical Program Manager who has delivered programs across healthcare, education, gaming, and big tech — roadmaps, budgets, vendors, SDLC, and GRC.',
  keywords: [
    'Jasvant Dosanjh about', 'Technical Program Manager experience',
    'technical program management track record', 'Technical Project Manager',
    'IT Program Manager', 'problem solver', 'program manager résumé',
  ],
};

export const metadata = pageMetadata(page);

// "How I work" as the register a PM actually keeps, rather than a grid of
// abstract values. Each entry pairs the operating rule with a real program
// from the track record, so the claim is checkable.
const raid = [
  {
    key: 'R',
    heading: 'Risks',
    rule: 'Surfaced in week two, not week ten.',
    text: 'A risk raised early is a scheduling conversation; the same risk raised late is an apology. I would rather give a later date I can hold than an early one that slips twice — and I would rather be the one who names the problem.',
    evidence: 'Sequenced a six-month, multi-building security migration building by building specifically so a failure could never take the whole college down. Zero downtime.',
  },
  {
    key: 'A',
    heading: 'Assumptions',
    rule: 'Written down, then re-tested.',
    text: 'Most slipped programs were scoped on an assumption nobody wrote down. I put them on the page where stakeholders can disagree with them early, and I revisit them when the ground moves.',
    evidence: 'Forecast a $250K annual hardware program with department heads rather than for them — so the device counts were their numbers, aligned to their budgets, before a PO was raised.',
  },
  {
    key: 'I',
    heading: 'Issues',
    rule: 'Owned by a name, not a team.',
    text: 'Work assigned to "IT" is work nobody has picked up. Every open issue gets a person and a date, and the dispatch is visible enough that the team can hold each other to it.',
    evidence: 'Stepping into a three-month leadership vacancy, established formal ticket-dispatch accountability across a 9-person team — including 4 union civil-service staff — and service never dropped.',
  },
  {
    key: 'D',
    heading: 'Dependencies',
    rule: 'Mapped before the date is given.',
    text: 'The vendor who needs four weeks, the clinician who is only free on Tuesdays, the approval that takes a committee — those set the critical path, not the engineering estimate. I find them first.',
    evidence: 'Coordinated five healthcare vendors, clinicians, and infrastructure stakeholders through a HIPAA clinic onboarding, taking the SLA from 48 hours to 2 and cutting $30K a year.',
  },
];

// RAG status presentation for the program cards. "Recovered" is called out
// separately from "Delivered" because a program that arrived escalated and
// ended green is a different (harder) claim than one that was never red.
const statusChip = { delivered: 'chip-delivered', active: 'chip-active', recovered: 'chip-recovered' } as const;
const statusLabel = { delivered: 'Delivered', active: 'In flight', recovered: 'Recovered' } as const;

const philosophyQuotes = [
  { text: 'What truly sets him apart is how approachable, patient, and generous he is with that expertise.', name: 'Kevin P. Thompson', role: 'Associate Dean for Advancement, UW' },
  { text: 'In a space often occupied by people unable to explain complexity, Jasvant has always valued being the complete opposite.', name: 'Tiffany Calverley', role: 'Director of Development, Social Sciences, UW' },
];

/** One card in the "Things I build" showcase. */
function ShowcaseCard({ p }: { p: Product }) {
  const href = p.links[0]?.href ?? '/products';
  const external = href.startsWith('http');
  const accent = p.accent === 'kesari' ? 'text-kesari-700' : 'text-navy-600';
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group card card-hover border-glow p-6 flex flex-col btn-press"
    >
      <div className="flex items-center gap-3 min-w-0">
        <span
          className={`grid place-items-center h-11 w-11 rounded-xl bg-paper-200 border border-navy-800/12 shrink-0 ${accent}`}
        >
          {p.gurmukhi ? (
            <span className="gurmukhi type-title-4 leading-none" lang="pa">{p.gurmukhi}</span>
          ) : (
            <span className="font-display font-bold type-body">{p.name.charAt(0)}</span>
          )}
        </span>
        <div className="min-w-0">
          <h4 className="font-display type-callout font-semibold text-navy-900 leading-tight">{p.name}</h4>
          <p className="type-label text-ink-500 mt-0.5">{p.category}</p>
        </div>
        {p.openSource && (
          <span className="ml-auto shrink-0 type-mono-sm text-status-green border border-status-green/25 rounded-md px-2 py-0.5">
            OSS
          </span>
        )}
      </div>
      <p className={`mt-4 type-subhead font-medium ${accent}`}>{p.tagline}</p>
      <p className="mt-4 link-control type-subhead font-medium text-ink-600 group-hover:text-navy-900">
        <Icon name="arrow" size={15} className="group-hover:translate-x-0.5 transition-transform" />{' '}
        {p.links[0]?.label ?? 'Learn more'}
      </p>
    </a>
  );
}

export default function About() {
  const sikhiProjects = products.filter((p) => p.accent === 'kesari');
  const ossProjects = products.filter((p) => p.openSource);
  const [feature, ...others] = headlineProjects;
  const seconds = others.slice(0, 2);
  const rest = others.slice(2);

  return (
    <>
      <JsonLd data={pageGraph(page)} />

      {/* ===================== STORY HERO ===================== */}
      <section className="relative pt-36 sm:pt-48 pb-12 overflow-hidden">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-20 h-80 w-80 rounded-full bg-kesari-500/12 blur-[100px]"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-44 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] orbit-ring opacity-40 animate-spin-slow hidden sm:block"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-44 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] orbit-ring opacity-60 hidden sm:block"
          aria-hidden="true"
        />

        <div className="container-x relative text-center">
          <p className="reveal is-visible eyebrow eyebrow-center">Background</p>
          <h1 className="mt-5 type-display-1 text-navy-900" data-kinetic>
            <span className="kin-line"><span className="kin-inner">Jasvant Singh Dosanjh</span></span>
          </h1>
          <p className="reveal is-visible mt-5 type-title-3 font-medium text-gradient">
            Problem-solver by instinct. Solutions-driven by choice.
          </p>
          <p className="reveal is-visible mt-4 type-subhead text-ink-600">
            Open to <span className="text-ink-800">Technical Program Manager</span> ·{' '}
            <span className="text-ink-800">Technical Project Manager</span> ·{' '}
            <span className="text-ink-800">IT Program Manager</span> roles
          </p>
          <p className="reveal is-visible mt-6 max-w-2xl mx-auto text-ink-600 leading-relaxed">
            The settings have changed a lot over ten years — healthcare, higher ed, gaming, big tech —
            but the job hasn’t. I take the program nobody can see the end of, break it into work people
            can actually schedule, and land it on a date I gave them up front.
          </p>
          <div className="reveal is-visible mt-8 flex flex-wrap justify-center gap-2.5">
            {journeyCreed.values.map((v) => (
              <span
                key={v}
                className="rounded-full bg-kesari-500/12 border border-kesari-500/25 px-4 py-1.5 type-subhead font-medium text-kesari-700"
              >
                {v}
              </span>
            ))}
          </div>
          <div className="reveal is-visible mt-8 flex flex-wrap justify-center gap-2.5">
            {site.resumes.map((r) => (
              <a key={r.href} href={r.href} download data-magnetic="0.3" className="btn btn-secondary type-subhead">
                <Icon name="download" size={16} /> {r.short} Résumé
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROBLEM-SOLVER SUMMARY ===================== */}
      <section className="container-x mt-28">
        <div className="reveal card border-glow p-8 sm:p-10">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-center">
            <div
              className="relative rounded-2xl overflow-hidden border border-navy-800/12 border-glow max-w-xs"
              data-parallax="0.05"
            >
              <Portrait
                src="/images/headshot-spotlight.jpg"
                alt="Jasvant Singh Dosanjh"
                className="aspect-[4/5]"
                focus="50% 46%"
                priority
                sizes="(max-width: 1024px) 80vw, 20rem"
              />
              <span className="pointer-events-none absolute bottom-3 left-3.5 rounded bg-paper-50/90 px-2 py-1 type-mono-sm tracking-[0.2em] text-ink-600">
                EST. 2016
              </span>
            </div>
            <div className="min-w-0">
              <h2 className="type-title-2 text-navy-900">The pattern behind every chapter</h2>
              <p className="mt-4 text-ink-600 leading-relaxed">
                Most problems aren’t really technical problems. They’re coordination problems, trust
                problems, or gaps in knowledge that eventually surface in the work. What Jasvant does
                well is spot those gaps and then work with the team to close them for good. Over 10+
                years across education, healthcare, gaming, and big tech, a lot of the frameworks he
                built outlived his involvement, picked up by other teams, departments, and studios.
              </p>
              <p className="mt-4 text-ink-600 leading-relaxed">
                He builds with one assumption —{' '}
                <span className="text-kesari-700">
                  that what he makes will be used far beyond its original scope
                </span>{' '}
                — and serves with one belief: that something valuable should never stay locked away
                where only one person can reach it.
              </p>
              <p className="mt-4 type-subhead text-ink-500">
                Fluent in English and Punjabi, conversational in Hindi and Urdu. Plays harmonium, tabla,
                and dholki. Loyal to Manchester United through every challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== THE TRAJECTORY ===================== */}
      <section className="container-x mt-28">
        <SectionHeading eyebrow="Origin story" title="The trajectory" align="center">
          <p className="reveal mt-4 max-w-2xl mx-auto text-ink-600">
            Same instinct, five very different rooms — from a schoolyard in Michigan to a global stage.
          </p>
        </SectionHeading>
        <div className="mt-12 max-w-2xl mx-auto">
          <JourneyTrail />
        </div>
      </section>

      {/* ===================== THE REGISTER ===================== */}
      <section className="container-x mt-28">
        <SectionHeading eyebrow="How I run a program" title="The register I keep" align="center">
          <p className="reveal mt-4 max-w-2xl mx-auto text-ink-600">
            Risks, assumptions, issues, dependencies. Every program I have run came down to how honestly
            these four were tracked — so rather than list values, here is the operating rule for each one
            and the program that proves it.
          </p>
        </SectionHeading>

        <div className="mt-12 card overflow-hidden divide-y divide-navy-800/[0.08]">
          {raid.map((r) => (
            <div
              key={r.key}
              className="reveal grid gap-x-6 gap-y-3 p-6 sm:p-6 md:grid-cols-[3.5rem_1fr_1fr] md:items-start hover:bg-paper-200/40 transition-colors"
            >
              <span
                className="grid place-items-center h-12 w-12 rounded-xl bg-kesari-500/14 border border-kesari-500/35 font-display type-title-4 font-bold text-kesari-700 shrink-0"
                aria-hidden="true"
              >
                {r.key}
              </span>
              <div className="min-w-0">
                <h3 className="font-display type-body font-semibold text-navy-900">{r.heading}</h3>
                <p className="mt-1 type-subhead font-semibold text-kesari-700">{r.rule}</p>
                <p className="mt-2.5 type-subhead leading-relaxed text-ink-600">{r.text}</p>
              </div>
              <figure className="rounded-xl bg-paper-200/70 border border-navy-800/[0.08] p-4 min-w-0">
                <figcaption className="type-label font-semibold text-ink-400">In practice</figcaption>
                <p className="mt-1.5 type-footnote leading-relaxed text-ink-700">{r.evidence}</p>
              </figure>
            </div>
          ))}
        </div>

        {/* The senior difference */}
        <div className="turn mt-8 relative card border-glow overflow-hidden p-8 sm:p-10">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-kesari-500/10 blur-3xl" aria-hidden="true" />
          <div className="relative grid lg:grid-cols-[1.25fr_1fr] gap-8 items-center">
            <div className="min-w-0">
              <h3 className="type-title-3 text-navy-900">Depth you can trust — explained so everyone gets it</h3>
              <p className="mt-4 text-ink-600 leading-relaxed">
                The part I take most seriously is understanding a system well enough to explain it
                simply. I’m not trying to sound like the smartest person in the room. I’m trying to make
                something complex feel approachable, for engineers and executives alike. When people
                understand the “why,” they trust the plan — and a plan people trust is the difference
                between a program that stalls in status meetings and one that ships.
              </p>
            </div>
            <div className="space-y-4">
              {philosophyQuotes.map((q) => (
                <figure key={q.name} className="rounded-xl bg-paper-200/60 border border-navy-800/[0.10] p-5">
                  <blockquote className="type-subhead leading-relaxed text-ink-700">“{q.text}”</blockquote>
                  <figcaption className="mt-3 type-caption text-ink-500">
                    — {q.name}, <span className="text-ink-600">{q.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROGRAMS I'VE LED ===================== */}
      <section className="container-x mt-28">
        <SectionHeading eyebrow="Selected work" title="Programs & projects I’ve led" align="center">
          <p className="reveal mt-4 max-w-2xl mx-auto text-ink-600">
            A decade of programs and projects across education, healthcare, gaming, and big tech — each
            one shipped on a date, and many adopted well beyond their original scope.
          </p>
        </SectionHeading>

        {/* ART DIRECTION: three tiers, not eight identical cards.
            Eight programs in one uniform grid says all eight are the same
            size, which is false and reads as a template. So the flagship gets
            a full-bleed feature with its mark at 40px and its facts as a
            metric strip; the two that follow get half-width cards; the rest
            get a compact tier where the mark carries the identification and
            the text is trimmed to its first claim. The hierarchy is the
            portfolio's own — it is not decoration. */}
        <div className="mt-12 space-y-5">
          {feature && (
            <article className="reveal card overflow-hidden">
              <div className="grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-8 p-6 sm:p-8">
                {/* flex-wrap + min-w-0: this rail is a flex row on a phone
                    and a column from lg up, and as a flex item it defaults to
                    min-width:auto — at 200% text it refused to shrink and
                    pushed the whole feature card past the screen, where the
                    card's own overflow-hidden then clipped the text outright. */}
                <div className="flex flex-wrap lg:flex-col items-center lg:items-start gap-4 min-w-0">
                  <span className="grid place-items-center h-16 w-16 shrink-0 rounded-2xl bg-kesari-500/12 border border-kesari-500/30 text-kesari-700">
                    <ProgramMark name={feature.mark} size={34} />
                  </span>
                  <div className="flex flex-wrap lg:flex-col items-center lg:items-start gap-2 min-w-0">
                    <span className={`chip ${statusChip[feature.status]}`}>{statusLabel[feature.status]}</span>
                    <span className="type-mono-sm text-ink-500">{feature.date}</span>
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="type-title-3 text-navy-900">{feature.title}</h3>
                  <p className="mt-1.5 type-subhead font-medium text-navy-600">{feature.org}</p>
                  <p className="mt-4 max-w-2xl type-subhead leading-relaxed text-ink-600">{feature.text}</p>
                  {feature.facts && (
                    <dl className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-px rounded-xl overflow-hidden border border-navy-800/10 bg-navy-900/[0.06]">
                      {feature.facts.map((f) => (
                        <div key={f.label} className="bg-paper-50 px-4 py-3 min-w-0">
                          <dt className="type-label text-ink-400">{f.label}</dt>
                          <dd className="type-callout font-semibold text-navy-900 mt-0.5">{f.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </div>
            </article>
          )}

          <div className="grid gap-5 md:grid-cols-2">
            {seconds.map((p) => (
              <article key={p.title} className="reveal card card-hover flex flex-col overflow-hidden">
                <header className="flex items-center justify-between gap-3 px-5 py-2.5 border-b border-navy-800/[0.08] bg-paper-200/50">
                  <span className={`chip ${statusChip[p.status]}`}>{statusLabel[p.status]}</span>
                  <span className="type-mono-sm text-ink-500">{p.date}</span>
                </header>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <span className="grid place-items-center h-11 w-11 rounded-xl bg-paper-200 border border-navy-800/12 text-kesari-700">
                    <ProgramMark name={p.mark} size={24} />
                  </span>
                  <h3 className="mt-4 font-display type-body font-semibold text-navy-900 leading-snug">{p.title}</h3>
                  <p className="text-navy-600 type-caption font-medium mt-1">{p.org}</p>
                  <p className="mt-3 type-subhead leading-relaxed text-ink-600 flex-1">{p.text}</p>
                  {p.facts && (
                    <dl className="mt-5 pt-4 hairline grid grid-cols-2 gap-x-4 gap-y-2.5">
                      {p.facts.map((f) => (
                        <div key={f.label} className="min-w-0">
                          <dt className="type-label text-ink-400">{f.label}</dt>
                          <dd className="type-footnote font-semibold text-navy-900 mt-0.5">{f.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Compact tier: one hairline-divided panel rather than five more
              cards, so the eye reads them as a list of further evidence
              instead of five competing headlines. */}
          <div className="reveal card overflow-hidden divide-y divide-navy-800/[0.08]">
            {rest.map((p) => (
              <div key={p.title} className="flex gap-4 px-5 py-4 sm:px-6 hover:bg-paper-200/40 transition-colors">
                <span className="grid place-items-center h-10 w-10 shrink-0 rounded-lg bg-paper-200 border border-navy-800/12 text-navy-600">
                  <ProgramMark name={p.mark} size={20} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="font-display type-subhead font-semibold text-navy-900">{p.title}</h3>
                    <span className="type-mono-sm text-ink-500 shrink-0">{p.date}</span>
                  </div>
                  <p className="type-caption text-navy-600 mt-0.5">{p.org}</p>
                  {p.facts && (
                    <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 type-caption text-ink-600">
                      {p.facts.map((f) => (
                        <span key={f.label}>
                          <span className="text-ink-400">{f.label}</span>{' '}
                          <span className="font-semibold text-navy-900">{f.value}</span>
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More work (compact) */}
        <h3 className="reveal mt-12 eyebrow eyebrow-center">More work</h3>
        <div className="reveal mt-5 max-w-4xl mx-auto grid sm:grid-cols-2 gap-x-8 gap-y-px rounded-2xl overflow-hidden border border-navy-800/[0.10]">
          {moreProjects.map((m) => (
            <div key={m.title} className="bg-paper-200/60 px-5 py-3.5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <span className="type-subhead font-medium text-ink-800">{m.title}</span>
                <span className="type-mono-sm text-ink-500 shrink-0">{m.date}</span>
              </div>
              <p className="type-caption text-navy-600 mt-0.5">
                {m.org}
                {m.note && <span className="text-ink-500"> · {m.note}</span>}
              </p>
            </div>
          ))}
        </div>

        {/* Personal / open-source showcase */}
        <h3 className="reveal mt-16 eyebrow eyebrow-center">Things I build</h3>
        <p className="reveal mt-3 text-center type-subhead text-ink-500 max-w-xl mx-auto">
          Two threads of the same work: preserving Sikh heritage, and open-sourcing tools for IT &amp;
          security teams. Browse both, or see the{' '}
          <Link href="/products" className="text-navy-700 hover:underline underline-offset-4">
            products page
          </Link>
          .
        </p>

        <div className="reveal mt-6 max-w-4xl mx-auto">
          <Tabs
            label="Project type"
            tabs={[
              {
                id: 'sikhi',
                label: 'sikhi & heritage',
                panel: sikhiProjects.map((p) => <ShowcaseCard key={p.slug} p={p} />),
              },
              {
                id: 'oss',
                label: 'open-source',
                panel: ossProjects.map((p) => <ShowcaseCard key={p.slug} p={p} />),
              },
            ]}
          />
        </div>
      </section>

      {/* ===================== CAREER ROADMAP ===================== */}
      <section className="container-x mt-28">
        <SectionHeading eyebrow="Experience" title="Career roadmap">
          <p className="reveal mt-4 max-w-2xl text-ink-600">
            Ten years of roles, to scale — including the stretches where a contract engagement ran
            alongside a full-time one.
          </p>
        </SectionHeading>
        <div className="mt-10">
          <ProgramRoadmap />
        </div>
      </section>

      {/* ===================== LEADERSHIP ===================== */}
      <section className="container-x mt-28">
        <SectionHeading eyebrow="Beyond the title" title="Leadership & activities" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {leadership.map((item) => (
            <div key={item.title} className="reveal card card-hover p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="font-display type-callout font-semibold text-navy-900">{item.title}</h3>
                <span className="type-mono-sm text-ink-500 shrink-0">{item.date}</span>
              </div>
              <p className="text-navy-600 type-subhead font-medium mt-0.5">{item.org}</p>
              <ul className="mt-4 space-y-2" role="list">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 type-subhead text-ink-600 leading-relaxed">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-navy-600 shrink-0" aria-hidden="true" />
                    <span className="min-w-0">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== EDUCATION ===================== */}
      <section className="container-x mt-28">
        <SectionHeading eyebrow="Foundations" title="Education & certifications" />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.credential} className="reveal card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-display type-callout font-semibold text-navy-900">{e.credential}</h3>
                  {e.date && <span className="type-mono-sm text-ink-500 shrink-0">{e.date}</span>}
                </div>
                <p className="text-kesari-700 type-subhead font-medium mt-0.5">{e.school}</p>
                {e.detail && <p className="mt-2 type-subhead text-ink-600">{e.detail}</p>}
              </div>
            ))}
          </div>
          <div className="reveal card p-6 h-max">
            <h3 className="eyebrow">Key certifications · 2023–2026</h3>
            <ul className="mt-5 space-y-3" role="list">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3 type-subhead text-ink-700">
                  <Icon name="shield" size={16} className="text-kesari-600/90 shrink-0 mt-0.5" />
                  <span className="min-w-0">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== RECOMMENDATIONS ===================== */}
      <section className="container-x mt-28">
        <SectionHeading eyebrow="In their words" title="Recommendations" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {recommendations.map((r) => (
            <figure key={r.name} className="reveal card p-6 flex flex-col">
              <div className="text-kesari-500/55 font-display type-display-2 leading-none" aria-hidden="true">
                “
              </div>
              <blockquote className="-mt-3 type-subhead leading-relaxed text-ink-700 flex-1">{r.text}</blockquote>
              <figcaption className="mt-5 pt-5 hairline">
                <p className="font-display type-subhead font-semibold text-navy-900">{r.name}</p>
                <p className="type-caption text-ink-500 mt-0.5">{r.title}</p>
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-control type-caption text-navy-600 hover:underline underline-offset-4"
                >
                  <Icon name="linkedin" size={13} /> LinkedIn
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="container-x mt-28">
        <div className="reveal text-center">
          <h2 className="type-title-1 text-navy-900">The next program could be yours.</h2>
          <Link href="/contact" data-magnetic="0.35" className="mt-6 btn btn-primary">
            Let’s talk <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
