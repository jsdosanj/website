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
      {/* Dark, photographic hero over the light editorial page below. The
          portrait carries the emotion; the two glass cards float over it the
          way Superhuman composites product UI over photography — translucent
          white, 16px radius, no drop shadow, depth from the photo behind. */}
      <section className="hero-dark relative isolate overflow-hidden text-white pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="container-x relative">
          <div className="reveal flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="chip chip-delivered">Open to work</span>
            <span className="type-footnote text-white/75">
              In-person, hybrid, or remote · open to relocating
            </span>
          </div>

          <div className="mt-8 grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              {/* Sizes are tuned so no kinetic line wraps at any breakpoint —
                  see type-hero in globals.css. */}
              <h1 className="type-hero text-white" data-kinetic>
                <span className="kin-line"><span className="kin-inner">Technical Program</span></span>
                <span className="kin-line"><span className="kin-inner">Manager who sprints,</span></span>
                <span className="kin-line"><span className="kin-inner text-gradient">ships &amp; scales.</span></span>
              </h1>
              <p className="reveal mt-6 max-w-xl type-body leading-relaxed text-white/80">
                I’m <span className="text-white font-medium">Jasvant Singh Dosanjh</span> — 10 years
                delivering technical programs across higher ed, healthcare, gaming, and big tech. I own
                the roadmap, the budget, the vendors, and the SDLC behind them: 12 products shipped, eight
                university departments onboarded through a program I built, a $750K studio buildout, and a
                six-month security migration with zero downtime.
              </p>

              <div className="reveal mt-6 flex flex-wrap gap-2">
                {site.roles.map((r) => (
                  <span
                    key={r}
                    className="type-mono-sm max-w-full rounded-xl bg-white/[0.06] border border-white/15 text-white/90 px-3 py-1.5"
                  >
                    {r}
                  </span>
                ))}
              </div>

              <div className="reveal mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  data-magnetic="0.4"
                  className="group btn bg-kesari-400 text-navy-950 hover:bg-kesari-300"
                >
                  Let’s talk
                  <Icon name="arrow" size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/work"
                  data-magnetic="0.3"
                  className="btn border border-white/30 text-white hover:bg-white/10"
                >
                  See the case studies
                </Link>
              </div>

              <div className="reveal mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 type-subhead">
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-control text-white/75 hover:text-white"
                >
                  <Icon name="linkedin" size={16} /> LinkedIn
                </a>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-control text-white/75 hover:text-white"
                >
                  <Icon name="github" size={16} /> GitHub
                </a>
                <Link href="/contact" className="link-control text-white/75 hover:text-white">
                  <Icon name="arrow" size={15} /> Get in touch
                </Link>
              </div>
            </div>

            <div className="reveal order-1 lg:order-2 relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem] lg:max-w-none">
              <div className="relative" data-parallax="0.05">
              <div className="overflow-hidden rounded-3xl border border-white/15">
                <Portrait
                  src="/images/hero-hall.webp"
                  alt="Jasvant Singh Dosanjh in profile, in a gilded hall, wearing a royal-blue turban and saffron shawl"
                  className="aspect-[4/5] lg:aspect-[5/6]"
                  focus="50% 62%"
                  priority
                />
              </div>
                {/* Below the photo on phones so the face is never covered;
                    floating over it from `sm` up. */}
                <div className="mt-3 flex flex-col gap-2 sm:absolute sm:inset-x-3 sm:bottom-3 sm:mt-0 sm:flex-row">
                  <div className="flex-1 min-w-0 rounded-2xl bg-white/85 backdrop-blur-md border border-white/20 p-4 text-ink-900">
                    <p className="type-label text-ink-600">Program Manager · UW</p>
                    <p className="mt-1 font-display type-title-3">8 departments onboarded</p>
                    <p className="type-caption text-ink-600">Feb 2025 – Mar 2026 · one repeatable program</p>
                  </div>
                  <div className="flex-1 min-w-0 rounded-2xl bg-white/85 backdrop-blur-md border border-white/20 p-4 text-ink-900">
                    <p className="type-label text-ink-600">Clinic help desk</p>
                    <p className="mt-1 font-display type-title-3">48h → 2h response</p>
                    <p className="type-caption text-ink-600">$30K/yr in spend removed</p>
                  </div>
                </div>
              </div>
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
