import Link from 'next/link';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { skillGroups } from '@/data/skills';
import { pageGraph, pageMetadata, type PageDescriptor } from '@/lib/site-metadata';

const page: PageDescriptor = {
  path: '/skills',
  ogSlug: 'skills',
  title: 'Skills — Program Delivery, Security & Cloud',
  description:
    "Jasvant Dosanjh's skills: technical program and project management (Agile, Waterfall, roadmaps, risk, budget, vendors), security & compliance (NIST, HIPAA), infrastructure, and AI development.",
  keywords: [
    'technical program management', 'technical project management', 'Agile', 'Waterfall', 'Lean',
    'SDLC', 'roadmapping', 'risk management', 'budget management', 'vendor management', 'Jira',
    'Azure DevOps', 'NIST CSF', 'CMMC', 'HIPAA', 'Jamf Pro', 'Microsoft Intune', 'JumpCloud',
    'RAG', 'CI/CD',
  ],
};

export const metadata = pageMetadata(page);

export default function Skills() {
  // The `wide` group is the one the page features as "where I go deep" —
  // currently Program & Delivery Management, matching the roles being targeted.
  const leadGroup = skillGroups.find((g) => g.wide);
  const rest = skillGroups.filter((g) => !g.wide);

  return (
    <>
      <JsonLd data={pageGraph(page)} />

      <section className="container-x pt-36 sm:pt-44">
        <div className="max-w-3xl">
          <p className="eyebrow reveal is-visible">Capabilities</p>
          <h1 className="mt-4 type-display-2 text-navy-900" data-kinetic>
            <span className="kin-line"><span className="kin-inner">What I bring to the table.</span></span>
          </h1>
          <p className="reveal is-visible mt-5 type-body text-ink-600 leading-relaxed">
            A decade of delivering technical programs — and enough time in the infrastructure
            underneath them to scope the work honestly. I pair the discipline of compliance and
            delivery with the appetite to ship things that didn’t exist yesterday.
          </p>
        </div>
      </section>

      {/* Featured: the `wide` skill group */}
      {leadGroup && (
        <section className="container-x mt-16">
          <div className="reveal card border-glow relative overflow-hidden p-8 sm:p-10">
            <div
              className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-kesari-500/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex items-center gap-3 min-w-0">
                <span className="grid place-items-center h-12 w-12 shrink-0 rounded-xl bg-kesari-500/15 border border-kesari-500/30 text-kesari-600">
                  <Icon name={leadGroup.icon} size={24} />
                </span>
                <div className="min-w-0">
                  <h2 className="font-display type-title-3 font-semibold text-navy-900">
                    {leadGroup.title}
                  </h2>
                  <p className="type-label font-semibold text-kesari-700">Where I go deep</p>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-ink-700 leading-relaxed">{leadGroup.blurb}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {leadGroup.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg bg-kesari-500/10 border border-kesari-500/25 text-kesari-700 px-3 py-1.5 type-subhead font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-6 hairline grid sm:grid-cols-3 gap-4 type-subhead">
                <p className="text-ink-600">
                  <span className="text-navy-900 font-medium">12 products</span> — shipped end to end,
                  requirements through CI/CD.
                </p>
                <p className="text-ink-600">
                  <span className="text-navy-900 font-medium">$250K &amp; $750K</span> — annual hardware
                  and studio-buildout budgets owned.
                </p>
                <p className="text-ink-600">
                  <span className="text-navy-900 font-medium">Zero downtime</span> — across a 6-month,
                  multi-building migration.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-6 link-control type-subhead font-semibold text-navy-700 hover:text-navy-900 hover:gap-3"
              >
                See the programs behind these numbers <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Other skill groups */}
      <section className="container-x mt-8">
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((g) => (
            <div key={g.title} className="reveal card card-hover p-6">
              <div className="flex items-center gap-3 min-w-0">
                <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-paper-200 border border-navy-800/12 text-navy-600">
                  <Icon name={g.icon} size={20} />
                </span>
                <h3 className="font-display type-body font-semibold text-navy-900">{g.title}</h3>
              </div>
              <p className="mt-3 type-subhead text-ink-600">{g.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="type-mono-sm text-ink-700 border border-navy-800/12 rounded-md px-2.5 py-1 hover:border-navy-500/40 hover:text-navy-700 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-24">
        <div className="reveal text-center">
          <h2 className="font-display type-title-2 font-semibold text-navy-900">
            Curious how this maps to your team?
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-ink-600">
            Let’s talk about the program you need landed, and where I’d start.
          </p>
          <Link href="/contact" data-magnetic="0.35" className="mt-6 btn btn-primary">
            Get in touch <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
