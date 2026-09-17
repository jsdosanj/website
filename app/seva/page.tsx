import Icon from '@/components/Icon';
import Jali from '@/components/Jali';
import JsonLd from '@/components/JsonLd';
import Khanda from '@/components/Khanda';
import SectionHeading from '@/components/SectionHeading';
import { engagements, sevaIntro, sevaValues } from '@/data/seva';
import { pageGraph, pageMetadata, type PageDescriptor } from '@/lib/site-metadata';

const page: PageDescriptor = {
  path: '/seva',
  ogSlug: 'seva',
  title: 'Seva & Parchar — Sikh Heritage Work',
  description:
    'The parcharik and seva work of Jasvant Dosanjh — speaking with Basics of Sikhi, preserving heritage with Sikhi.io, and teaching Gurbani Santhiya worldwide.',
  keywords: [
    'Sikh parcharik', 'Basics of Sikhi speaker', 'Sikhi.io', 'Guru Nanak', 'seva',
    'Sikh heritage technology', 'Gurbani Santhiya',
  ],
};

export const metadata = pageMetadata(page);

export default function Seva() {
  return (
    <>
      <JsonLd data={pageGraph(page)} />

      {/* Hero */}
      <section className="relative pt-36 sm:pt-48 pb-8 overflow-hidden">
        <Jali className="absolute inset-0 text-kesari-500/[0.09]" opacity={1} />
        <div
          className="absolute left-1/2 -translate-x-1/2 top-24 h-72 w-72 rounded-full bg-kesari-500/10 blur-[100px]"
          aria-hidden="true"
        />
        <div className="container-x relative text-center">
          <p className="gurmukhi type-display-1 text-kesari-600 reveal is-visible animate-pulse-glow" lang="pa">
            {sevaIntro.gurmukhi}
          </p>
          <p className="reveal is-visible mt-3 type-mono-sm uppercase tracking-[0.25em] text-ink-500">
            {sevaIntro.mool}
          </p>
          <h1 className="mt-6 type-display-2 text-navy-900" data-kinetic>
            <span className="kin-line"><span className="kin-inner">{sevaIntro.heading}</span></span>
          </h1>
          <p className="reveal is-visible mt-6 max-w-2xl mx-auto type-body text-ink-600 leading-relaxed">
            {sevaIntro.lead}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="container-x mt-16">
        <div className="grid gap-5 sm:grid-cols-3">
          {sevaValues.map((v) => (
            <div key={v.title} className="reveal card card-hover border-glow p-6 text-center">
              <p className="gurmukhi type-title-2 text-kesari-600" lang="pa">{v.gurmukhi}</p>
              <h3 className="mt-3 font-display type-body font-semibold text-navy-900">{v.title}</h3>
              <p className="mt-2 type-subhead leading-relaxed text-ink-600">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engagements */}
      <section className="container-x mt-28">
        <SectionHeading eyebrow="Where I serve" title="Speaking & community work" />
        <div className="mt-10 space-y-5">
          {engagements.map((e) => (
            <div key={e.org} className="reveal card card-hover p-6 sm:p-8">
              <div className="grid lg:grid-cols-[auto_1fr] gap-5 sm:gap-6 items-start">
                <span className="grid place-items-center h-14 w-14 rounded-2xl bg-paper-200 border border-kesari-500/20 text-kesari-600">
                  <Icon name={e.icon} size={26} />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-display type-body font-semibold text-navy-900">{e.org}</h3>
                    <span className="type-mono-sm text-ink-500 shrink-0">{e.date}</span>
                  </div>
                  <p className="text-kesari-700 type-subhead font-medium mt-0.5">{e.role}</p>
                  <p className="mt-3 type-subhead leading-relaxed text-ink-600">{e.description}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {e.tags.map((t) => (
                      <span key={t} className="type-mono-sm text-ink-600 border border-navy-800/12 rounded-md px-2 py-1">
                        {t}
                      </span>
                    ))}
                    {e.link && (
                      <a
                        href={e.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto link-control type-subhead font-medium text-navy-700 hover:underline underline-offset-4 btn-press"
                      >
                        <Icon name="external" size={14} /> {e.link.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Heritage + tech bridge */}
      <section className="container-x mt-28">
        <div className="turn relative card border-glow overflow-hidden p-8 sm:p-12 text-center">
          <Jali className="absolute inset-0 text-navy-500/[0.055]" opacity={1} />
          <div className="relative">
            <Khanda size={64} className="mx-auto text-kesari-600 animate-float" />
            <h2 className="mt-6 type-title-2 text-navy-900 max-w-2xl mx-auto">
              Where the seva meets the science
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-ink-600 leading-relaxed">
              The parchar and the products serve the same mission. The open dataset and OCR engines I
              build exist so that over a billion words of Sikh heritage — manuscripts, scripture, and
              history — can be searched, understood, and shared by the global Sangat. Preservation is
              seva. Access is seva. Building the tools is seva.
            </p>
            <p className="mt-6 gurmukhi type-title-4 text-kesari-700" lang="pa">ਚੜ੍ਹਦੀ ਕਲਾ</p>
          </div>
        </div>
      </section>
    </>
  );
}
