import Link from 'next/link';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { certifications, education } from '@/data/education';
import { experience } from '@/data/experience';
import { site } from '@/data/site';
import { skillGroups } from '@/data/skills';
import { pageGraph, pageMetadata, type PageDescriptor } from '@/lib/site-metadata';
import PrintButton from './PrintButton';

/**
 * A live, always-current web résumé generated from the same data as the rest of
 * the site — recruiters can share a link instead of a PDF, and it never drifts
 * out of sync. The PDF download (site.resumes) stays available alongside it.
 *
 * One résumé, one narrative: the experience/education/skills below are the
 * single source of truth for all three target roles. Forking them into
 * divergent bullet sets not backed by real work would misrepresent it.
 */
const page: PageDescriptor = {
  path: '/resume',
  ogSlug: 'resume',
  title: 'Résumé',
  description: `The live web résumé of ${site.founder} — ${site.positioning}`,
  keywords: ['resume', 'CV', 'Technical Program Manager resume', 'TPM resume', 'program manager CV', 'printable resume'],
};

export const metadata = pageMetadata(page);

export default function Resume() {
  const profile = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${site.url}/resume#profilepage`,
    name: `${site.founder} — Résumé`,
    mainEntity: { '@id': `${site.url}/#person` },
  };

  return (
    <>
      <JsonLd data={pageGraph(page, [profile])} />

      <section className="resume-shell container-x pt-32 sm:pt-40 pb-20">
        {/* Screen-only controls */}
        <div className="no-print reveal is-visible flex flex-wrap items-end justify-between gap-4 max-w-[62rem] mx-auto mb-8">
          <div>
            <p className="eyebrow">Résumé</p>
            <h1 className="mt-3 type-title-1 font-bold text-navy-900" data-kinetic>
              <span className="kin-line"><span className="kin-inner">Résumé</span></span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <PrintButton />
          </div>
        </div>

        {/* PDF download — same content, 2-page ATS layout */}
        <div className="no-print reveal max-w-[62rem] mx-auto mb-8">
          <p className="type-label font-semibold text-ink-500 mb-2.5">Prefer the PDF?</p>
          <div className="flex flex-wrap gap-1.5">
            {site.resumes.map((r) => (
              <a key={r.href} href={r.href} download className="tab-btn">
                <span className="text-ink-400" aria-hidden="true">#</span> {r.short}
                <Icon name="download" size={13} className="inline ml-1 -mt-0.5" />
              </a>
            ))}
          </div>
        </div>

        {/* The résumé document itself */}
        <article className="resume-doc max-w-[62rem] mx-auto card border-glow p-8 sm:p-12">
          <header className="pb-8 hairline">
            <h2 className="type-title-2 font-bold text-navy-900">{site.founder}</h2>
            <p className="mt-1.5 text-kesari-700 font-medium">{site.tagline}</p>
            <p className="mt-4 type-subhead leading-relaxed text-ink-600 max-w-3xl">{site.positioning}</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 type-subhead">
              <span className="text-ink-600">{site.location}</span>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-control text-navy-700 hover:underline underline-offset-4"
              >
                linkedin.com/in/jasvantsd
              </a>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-control text-navy-700 hover:underline underline-offset-4"
              >
                github.com/jsdosanj
              </a>
              <Link href="/contact" className="link-control text-navy-700 hover:underline underline-offset-4">
                {site.url.replace('https://', '')}
              </Link>
              <Link href="/references" className="link-control text-navy-700 hover:underline underline-offset-4">
                References
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {site.roles.map((r) => (
                <span
                  key={r}
                  className="mono rounded-lg bg-navy-900/[0.04] border border-navy-800/12 text-ink-800 px-2.5 py-1 type-caption"
                >
                  {r}
                </span>
              ))}
            </div>
          </header>

          <section className="py-8 hairline">
            <h3 className="eyebrow">Experience</h3>
            <div className="mt-5 space-y-6">
              {experience.map((role) => (
                <div key={`${role.company}-${role.title}`} className="resume-entry">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="font-display type-callout font-semibold text-navy-900">
                      {role.title} <span className="text-kesari-700 font-normal">· {role.company}</span>
                    </h4>
                    <span className="type-mono-sm text-ink-500 shrink-0">{role.date}</span>
                  </div>
                  {role.note && <p className="mt-1.5 type-caption text-ink-500">{role.note}</p>}

                  {/* One official title, more than one job: the sections keep
                      the title as UW would confirm it while giving each scope
                      its own dates and bullets. */}
                  {role.sections?.map((section) => (
                    <div key={section.label} className="mt-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                        <h5 className="font-display type-subhead font-semibold text-navy-700">
                          {section.label}
                        </h5>
                        <span className="type-mono-sm text-ink-500 shrink-0">{section.date}</span>
                      </div>
                      <ul className="mt-2 space-y-1.5" role="list">
                        {section.bullets.map((b) => (
                          <li key={b} className="flex gap-2.5 type-subhead text-ink-600 leading-relaxed">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-navy-600 shrink-0" aria-hidden="true" />
                            <span className="min-w-0">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {role.bullets && (
                    <ul className="mt-2 space-y-1.5" role="list">
                      {role.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 type-subhead text-ink-600 leading-relaxed">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-navy-600 shrink-0" aria-hidden="true" />
                          <span className="min-w-0">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="py-8 hairline grid gap-8 sm:grid-cols-2">
            {/* min-w-0 on both columns: a grid item defaults to min-width:auto
                and will not let a long credential name wrap. */}
            <div className="min-w-0">
              <h3 className="eyebrow">Education</h3>
              <div className="mt-5 space-y-4">
                {education.map((e) => (
                  <div key={e.credential} className="resume-entry">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h4 className="font-display type-subhead font-semibold text-navy-900">{e.credential}</h4>
                      {e.date && <span className="type-mono-sm text-ink-500 shrink-0">{e.date}</span>}
                    </div>
                    <p className="text-kesari-700 type-subhead">{e.school}</p>
                    {e.detail && <p className="mt-1 type-caption text-ink-600">{e.detail}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="eyebrow">Certifications</h3>
              <ul className="mt-5 space-y-1.5" role="list">
                {certifications.map((c) => (
                  <li key={c} className="flex gap-2.5 type-subhead text-ink-700">
                    <Icon name="shield" size={14} className="text-kesari-600/90 shrink-0 mt-0.5" />
                    <span className="min-w-0">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="pt-8">
            <h3 className="eyebrow">Skills</h3>
            <div className="mt-5 space-y-4">
              {skillGroups.map((g) => (
                <div key={g.title} className="resume-entry">
                  <p className="type-subhead font-semibold text-navy-900">{g.title}</p>
                  <p className="mt-1 type-subhead text-ink-600">{g.skills.join(' · ')}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <p className="no-print reveal mt-8 text-center type-caption text-ink-500 max-w-[62rem] mx-auto">
          This page is generated from the same source data as the rest of the site — it will never
          drift out of date. The PDF above is the 2-page, ATS-friendly version, current as of
          September 2026.
        </p>
      </section>
    </>
  );
}
