import Link from 'next/link';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import SectionHeading from '@/components/SectionHeading';
import { referenceCount, referenceGroups } from '@/data/references';
import { site } from '@/data/site';
import { pageGraph, pageMetadata, type PageDescriptor } from '@/lib/site-metadata';

/**
 * References, grouped by where the work happened.
 *
 * Names, roles and organizations only. Contact details are deliberately absent
 * — see data/references.ts — so this page answers "who will vouch, and from
 * what vantage point" and leaves reaching them to a request. Grouping by
 * organization is what makes it useful rather than a flat list of strangers:
 * each group ties the people to a program described elsewhere on the site.
 */
const page: PageDescriptor = {
  path: '/references',
  ogSlug: 'references',
  title: 'References',
  description: `Professional references for ${site.founder} — ${referenceCount} colleagues, managers and clinicians across four organizations.`,
  keywords: [
    'references', 'professional references', 'Jasvant Dosanjh references',
    'program manager references', 'reference list',
  ],
};

export const metadata = pageMetadata(page);

export default function References() {
  return (
    <>
      <JsonLd data={pageGraph(page)} />

      <section className="container-x pt-32 sm:pt-40">
        <div className="max-w-3xl">
          <p className="eyebrow">In their words, on request</p>
          <h1 className="mt-3 type-display-1 text-navy-900" data-kinetic>
            <span className="kin-line"><span className="kin-inner">References</span></span>
          </h1>
          <p className="reveal mt-6 type-title-3 font-medium text-ink-600">
            {referenceCount} people who have managed, partnered with, or been on the receiving end
            of the programs described across this site — grouped by where we worked together, so
            you can pick the vantage point that matters for the role.
          </p>
          <p className="reveal mt-4 type-subhead text-ink-500">
            Contact details are not published here. Ask and they will be shared directly, with
            each person given the heads-up first.
          </p>
        </div>
      </section>

      <section className="container-x mt-16 sm:mt-20">
        <div className="grid gap-5 md:grid-cols-2 items-start">
          {referenceGroups.map((group) => (
            <div key={group.org} className="reveal card p-6 sm:p-7">
              <h2 className="font-display type-callout font-semibold text-navy-900 leading-snug">
                {group.org}
              </h2>
              <p className="mt-1.5 type-caption text-ink-500">{group.context}</p>
              <ul className="mt-5 space-y-4 border-t border-navy-800/[0.07] pt-5" role="list">
                {group.people.map((person) => (
                  <li key={person.name} className="flex gap-3.5">
                    <span
                      className="mt-0.5 grid place-items-center h-9 w-9 rounded-xl bg-paper-200 border border-navy-800/12 text-navy-600 shrink-0"
                      aria-hidden="true"
                    >
                      <span className="font-display font-bold type-footnote leading-none">
                        {person.name.charAt(0)}
                      </span>
                    </span>
                    <span className="min-w-0">
                      <span className="block type-subhead font-semibold text-navy-900 leading-snug">
                        {person.name}
                      </span>
                      <span className="block type-caption text-ink-600 leading-snug mt-0.5">
                        {person.role}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-20 sm:mt-24 mb-24">
        <div className="reveal card p-8 sm:p-10 text-center max-w-2xl mx-auto">
          <SectionHeading
            eyebrow="Next step"
            title="Want to speak with any of them?"
            align="center"
          >
            <p className="mt-4 text-ink-600">
              Send a note saying which program you want the read on, and the right introduction
              gets made.
            </p>
          </SectionHeading>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-primary btn-press">
              Get in touch
              <Icon name="arrow" size={16} />
            </Link>
            <Link href="/work" className="btn btn-ghost btn-press">
              Read the case studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
