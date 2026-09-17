import Link from 'next/link';
import Icon from '@/components/Icon';
import Jali from '@/components/Jali';
import Khanda from '@/components/Khanda';
import Marquee from '@/components/Marquee';
import MetricsDashboard from '@/components/MetricsDashboard';
import Portrait from '@/components/Portrait';
import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/SectionHeading';
import { pageMetadata } from '@/lib/site-metadata';
import { products } from '@/data/products';
import { recommendations } from '@/data/recommendations';
import { site } from '@/data/site';
import { helpAreas } from '@/data/value';

export const metadata = pageMetadata({
  path: '/',
  ogSlug: 'home',
  description:
    'Jasvant Singh Dosanjh — Technical Program Manager, open to relocating. 10 years delivering technical programs across healthcare, education, gaming, and big tech: roadmaps, budgets, vendors, SDLC, and GRC.',
  keywords: ['TPM', 'program management', 'roadmap', 'SDLC', 'Agile', 'Waterfall', 'open to work'],
});

const stackTop = [
  'Jira', 'Confluence', 'Azure DevOps', 'Microsoft Project', 'Workday',
  'Agile / Scrum', 'Waterfall', 'Lean', 'SAFe', 'Kanban',
];
const stackBottom = [
  'NIST CSF', 'NIST SP 800-53', 'HIPAA', 'FERPA', 'CMMC', 'SOC 2',
  'Jamf Pro', 'Microsoft Intune', 'JumpCloud', 'AWS', 'Azure', 'GCP', 'CI/CD',
];

const principles = [
  {
    icon: 'workflow',
    title: 'Run it like a program',
    text: 'Matrixed teams, vendors, and budgets aligned to one roadmap. I own the SDLC end to end, hold the delivery cadence that actually ships, and keep a plan stakeholders can still trust two months out.',
  },
  {
    icon: 'shield',
    title: 'Compliant & secure by default',
    text: 'A decade across healthcare, education, and big tech taught me to plan around NIST, HIPAA, and FERPA from the first sprint — not to discover them halfway through an audit.',
  },
  {
    icon: 'sparkles',
    title: 'Estimates from someone who builds',
    text: 'I still ship real products — a 12-product compliance suite, OCR repair for endangered scripts — which is exactly why my scoping holds up when engineering pushes back on it.',
  },
  {
    icon: 'globe',
    title: 'Technology for human good',
    text: 'The throughline from infrastructure to heritage preservation: programs and teams that uplift people and help them do their best work.',
  },
];

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative pt-32 sm:pt-40 pb-12 overflow-hidden">
        <Jali
          className="absolute -top-24 right-[-10%] w-[42rem] h-[42rem] text-navy-500/[0.06] pointer-events-none"
          opacity={1}
        />
        <div className="container-x relative">
          {/* Availability, stated once and held still. This was a scrolling
              marquee, which meant the line was almost always caught mid-word
              and read as broken text — and perpetual decorative motion in a
              hero is exactly what the HIG means by motion that doesn't support
              the experience. */}
          <div className="reveal flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="chip chip-delivered">Open to work</span>
            <span className="type-footnote text-ink-600">
              In-person, hybrid, or remote · open to relocating
            </span>
          </div>

          <div className="mt-8 grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-16 items-center">
            {/* Left: headline + CTAs */}
            <div className="order-2 lg:order-1">
              {/* Sizes are tuned so no kinetic line wraps at any breakpoint: the
                  widest line ("Manager who sprints,") is 10.58em in Bricolage
                  Bold, and the text column narrows at lg when the two-column
                  grid kicks in before widening again at xl/2xl. */}
              <h1 className="type-hero text-navy-900" data-kinetic>
                <span className="kin-line"><span className="kin-inner">Technical Program</span></span>
                <span className="kin-line"><span className="kin-inner">Manager who sprints,</span></span>
                <span className="kin-line"><span className="kin-inner text-gradient">ships &amp; scales.</span></span>
              </h1>
              <p className="reveal mt-6 max-w-xl type-body leading-relaxed text-ink-600">
                I’m <span className="text-ink-800 font-medium">Jasvant Singh Dosanjh</span> — 10 years
                delivering technical programs across higher ed, healthcare, gaming, and big tech. I own
                the roadmap, the budget, the vendors, and the SDLC behind them: 12 products shipped, a
                $750K studio buildout, and a six-month security migration with zero downtime.
              </p>

              {/* Target roles */}
              <div className="reveal mt-6 flex flex-wrap gap-2">
                {site.roles.map((r) => (
                  <span
                    key={r}
                    className="type-mono-sm max-w-full rounded-lg bg-navy-900/[0.04] border border-navy-800/12 text-ink-800 px-3 py-1.5"
                  >
                    {r}
                  </span>
                ))}
              </div>

              <div className="reveal mt-8 flex flex-wrap gap-3">
                <Link href="/contact" data-magnetic="0.4" className="group btn btn-primary">
                  Let’s talk
                  <Icon name="arrow" size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link href="/work" data-magnetic="0.3" className="btn btn-secondary">
                  See the case studies
                </Link>
              </div>

              {/* Quick links — contact happens via the form, no inbox exposed */}
              <div className="reveal mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 type-subhead">
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-control text-ink-600 hover:text-navy-900"
                >
                  <Icon name="linkedin" size={16} /> LinkedIn
                </a>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-control text-ink-600 hover:text-navy-900"
                >
                  <Icon name="github" size={16} /> GitHub
                </a>
                <Link href="/contact" className="link-control text-ink-600 hover:text-navy-900">
                  <Icon name="arrow" size={15} /> Get in touch
                </Link>
              </div>
            </div>

            {/* Right: portrait + credential plate */}
            <div className="reveal order-1 lg:order-2 relative mx-auto w-full max-w-[20rem] sm:max-w-[22rem] lg:max-w-none">
              <div
                className="card overflow-hidden shadow-[0_28px_60px_-34px_rgba(10,22,40,0.32)]"
                data-parallax="0.05"
              >
                <Portrait
                  src="/images/headshot-spotlight.jpg"
                  alt="Jasvant Singh Dosanjh, Technical Program Manager"
                  className="aspect-[4/5]"
                  focus="50% 46%"
                  priority
                />
                <div className="flex items-start justify-between gap-3 px-5 py-4 border-t border-navy-800/10">
                  <div>
                    <p className="font-display type-callout font-semibold text-navy-900 leading-tight">
                      Jasvant Singh Dosanjh
                    </p>
                    <p className="type-mono-sm text-ink-500 mt-1">Technical Program Manager · 10 yrs</p>
                  </div>
                  <span
                    className="gurmukhi text-kesari-600 type-title-4 leading-none shrink-0"
                    lang="pa"
                    aria-hidden="true"
                  >
                    ੴ
                  </span>
                </div>
                <div className="flex items-center gap-2 px-5 py-2.5 border-t border-navy-800/10 bg-paper-200/70">
                  <span className="chip chip-delivered">open to work</span>
                  <span className="type-mono-sm text-ink-500">open to relocating</span>
                </div>
              </div>
              <Khanda size={48} className="absolute -top-4 -right-3 text-kesari-500 animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STACK MARQUEE ===================== */}
      <section
        className="mt-16 sm:mt-20 py-6 border-y border-navy-800/[0.11] bg-paper-300/40 space-y-3"
        aria-label="Tools, platforms, and frameworks I work with"
      >
        <Marquee items={stackTop} dur={52} label="Platforms and tools, row 1" />
        <Marquee items={stackBottom} dur={58} reverse label="Methods and frameworks, row 2" />
      </section>

      {/* ===================== OUTCOMES ===================== */}
      <section id="impact" className="container-x mt-16 sm:mt-24 scroll-mt-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="reveal eyebrow">Delivery record</p>
            <h2 className="reveal mt-3 type-title-1 text-navy-900">
              The numbers, and where they came from
            </h2>
          </div>
          <Link
            href="/work"
            className="reveal link-control type-subhead font-semibold text-navy-700 hover:text-navy-900 hover:gap-3"
          >
            Read the case studies <Icon name="arrow" size={16} />
          </Link>
        </div>
        <div className="mt-8">
          <MetricsDashboard />
        </div>
      </section>

      {/* ===================== HOW I HELP ===================== */}
      <section className="container-x mt-28">
        <SectionHeading
          eyebrow="What I bring to your team"
          title="Three ways I add value on day one"
          align="center"
        >
          <p className="reveal mt-4 max-w-2xl mx-auto text-ink-600">
            These are the three reqs I map to, and I’ve held all three at once. Whichever one you’re
            hiring for, here’s where I’d start.
          </p>
        </SectionHeading>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {helpAreas.map((a) => (
            <div key={a.role} className="reveal card card-hover border-glow p-6 flex flex-col">
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-paper-200 border border-navy-800/12 text-kesari-600">
                <Icon name={a.icon} size={22} />
              </span>
              <h3 className="mt-5 font-display type-body font-semibold text-navy-900">{a.role}</h3>
              <p className="mt-2 type-subhead leading-relaxed text-ink-600">{a.blurb}</p>
              <ul className="mt-5 space-y-2.5 flex-1" role="list">
                {a.proof.map((p) => (
                  <li key={p} className="flex gap-2.5 type-subhead text-ink-700">
                    <Icon name="arrow" size={14} className="mt-1 text-kesari-600 shrink-0" />
                    <span className="min-w-0">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="reveal mt-10 text-center type-callout text-ink-600 max-w-2xl mx-auto">
          Plenty of program managers can run the ceremony. Fewer can write the runbook, read the audit
          control, and still hold the roadmap — <span className="text-ink-800">all three</span>. That’s
          the combination that makes an estimate survive contact with engineering, and it’s what I
          bring.
        </p>
      </section>

      {/* ===================== SOCIAL PROOF ===================== */}
      <section className="container-x mt-28">
        <SectionHeading eyebrow="What colleagues say" title="Trusted by the people he’s served" align="center" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {recommendations.map((r) => (
            <figure key={r.name} className="reveal card p-6 flex flex-col">
              <div className="text-kesari-500/55 font-display type-title-1 leading-none" aria-hidden="true">
                “
              </div>
              <blockquote className="-mt-2 type-subhead leading-relaxed text-ink-700 flex-1">
                {r.text}
              </blockquote>
              <figcaption className="mt-5 pt-5 hairline">
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-control font-display type-subhead font-semibold text-navy-900 hover:text-navy-700"
                >
                  {r.name}
                </a>
                <p className="type-caption text-ink-500 mt-0.5">{r.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="reveal mt-6 text-center">
          <Link
            href="/about"
            className="link-control type-subhead font-semibold text-navy-700 hover:text-navy-900 hover:gap-3"
          >
            Full story &amp; track record <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>

      {/* ===================== PRODUCTS ===================== */}
      <section className="container-x mt-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="I stay close to the work" title="Products from the lab">
            <p className="reveal mt-4 max-w-xl text-ink-600">
              I build the tools I’d want as a program manager. It keeps me honest about what I’m asking
              engineers to do, and it’s why my scoping survives contact with the actual work.
            </p>
          </SectionHeading>
          <Link
            href="/products"
            className="reveal link-control type-subhead font-semibold text-navy-700 hover:text-navy-900 hover:gap-3"
          >
            All products <Icon name="arrow" size={16} />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* ===================== PRINCIPLES ===================== */}
      {/* ART DIRECTION: a numbered editorial list, not four more cards.
          These are stated positions, and four identical boxes in a 2×2 made
          them read as feature tiles — the same weight as the product cards
          above and the metric panels below, which flattens the whole page
          into one texture. A hairline-divided list with the number set large
          in the margin reads as a manifesto, which is what it is. */}
      <section className="container-x mt-28">
        <SectionHeading eyebrow="How I work" title="Principles that hold across everything" align="center" />
        <ol className="mt-12 max-w-3xl mx-auto" role="list">
          {principles.map((p, i) => (
            <li
              key={p.title}
              className="reveal grid grid-cols-[2.5rem_1fr] sm:grid-cols-[4rem_1fr] gap-x-4 sm:gap-x-8 py-7 first:pt-0 border-t first:border-t-0 border-navy-800/[0.10]"
            >
              {/* ink-400 rather than a navy tint: at 15% alpha these numerals
                  measured 1.16:1 against paper, which is a smudge rather than a
                  restrained accent. ink-400 is the palette's lightest
                  AA-passing step, and the smaller size keeps them secondary to
                  the heading beside them. */}
              <span
                className="font-display type-title-3 font-bold leading-none text-ink-400 tabular-nums"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0">
                <h3 className="flex items-center gap-2.5 font-display type-title-4 text-navy-900">
                  <Icon name={p.icon} size={19} className="shrink-0 text-kesari-600" />
                  {p.title}
                </h3>
                <p className="mt-2.5 type-body leading-relaxed text-ink-600">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ===================== SEVA TEASER ===================== */}
      <section className="container-x mt-28">
        <div className="turn relative card border-glow overflow-hidden p-8 sm:p-12">
          <Jali className="absolute inset-0 text-kesari-500/[0.08]" opacity={1} />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="gurmukhi type-title-2 text-kesari-600" lang="pa">ੴ</p>
              <h2 className="mt-3 type-title-2 text-navy-900">The character behind the résumé</h2>
              <p className="mt-4 max-w-2xl text-ink-600 leading-relaxed">
                Beyond the work, I serve as a parcharik — speaking at community events worldwide and
                preserving Sikh heritage with
                <span className="text-ink-800"> Basics of Sikhi</span> and{' '}
                <span className="text-ink-800">Sikhi.io</span>. The code and the seva come from the same
                place: leadership rooted in service, resilience, and putting people first.
              </p>
              <Link href="/seva" className="mt-6 btn btn-secondary">
                Read about the seva <Icon name="arrow" size={18} />
              </Link>
            </div>
            <Khanda size={140} className="hidden lg:block text-kesari-600/70 animate-float" />
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="container-x mt-28">
        <div className="turn card border-glow overflow-hidden">
          <div className="text-center px-6 py-12 sm:px-10 sm:py-16">
            <p className="eyebrow eyebrow-center">Currently interviewing</p>
            <h2 className="mt-4 type-title-1 text-navy-900">Hiring a Technical Program Manager?</h2>
            <p className="mt-4 max-w-xl mx-auto text-ink-600">
              Let’s talk about the program you need landed — the roadmap, the vendors, the budget, and
              the engineering work underneath it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" data-magnetic="0.35" className="btn btn-primary">
                Let’s talk <Icon name="arrow" size={18} />
              </Link>
              <Link href="/contact#resumes" data-magnetic="0.3" className="btn btn-secondary">
                <Icon name="file" size={18} /> Download résumé
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
