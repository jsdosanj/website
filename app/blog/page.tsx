import Link from 'next/link';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import SectionHeading from '@/components/SectionHeading';
import { posts as linkedinPosts } from '@/data/posts';
import { site } from '@/data/site';
import { pageGraph, pageMetadata, type PageDescriptor } from '@/lib/site-metadata';
import { essays } from './essays';

const page: PageDescriptor = {
  path: '/blog',
  ogSlug: 'blog',
  title: 'Writing — AI, Security & GRC Essays',
  description:
    'Essays by Jasvant Singh Dosanjh on AI, security, GRC, and building local-first, privacy-respecting software — plus recent posts on LinkedIn.',
  keywords: ['Jasvant Dosanjh blog', 'local AI', 'GRC writing', 'privacy-respecting software', 'security essays'],
};

export const metadata = pageMetadata(page);

export default function Blog() {
  const postsUrl = `${site.socials.linkedin}/recent-activity/all/`;

  return (
    <>
      <JsonLd data={pageGraph(page)} />

      {/* ===================== HERO ===================== */}
      <section className="relative pt-36 sm:pt-48 pb-4 overflow-hidden">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-20 h-80 w-80 rounded-full bg-kesari-500/10 blur-[100px]"
          aria-hidden="true"
        />
        <div className="container-x relative">
          <p className="reveal is-visible eyebrow">Writing</p>
          <h1 className="mt-4 type-display-2 text-navy-900" data-kinetic>
            <span className="kin-line">
              <span className="kin-inner">Notes on AI, security &amp; building things that last</span>
            </span>
          </h1>
          <p className="reveal mt-4 max-w-2xl text-ink-600 leading-relaxed">
            Occasional essays on local-first AI, resilience and compliance, and the craft of building
            software people can actually trust.
          </p>
        </div>
      </section>

      {/* ===================== ESSAYS ===================== */}
      <section className="container-x mt-12 sm:mt-16">
        <ul className="space-y-5 max-w-3xl" role="list">
          {essays.map((p) => (
            <li key={p.slug} className="reveal">
              <Link href={`/blog/${p.slug}`} className="group block card card-hover border-glow p-6 sm:p-6 btn-press">
                <span className="type-label text-kesari-700">{p.date}</span>
                <h2 className="mt-2 type-title-3 text-navy-900 group-hover:text-kesari-700 transition-colors">
                  {p.title}
                </h2>
                <p className="mt-3 type-subhead text-ink-600">{p.dek}</p>
                <span className="mt-4 link-control type-subhead font-semibold text-navy-700">
                  Read the post <Icon name="arrow" size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ===================== LINKEDIN POSTS ===================== */}
      <section className="container-x mt-24">
        <SectionHeading eyebrow="From LinkedIn" title="More short-form posts">
          <p className="reveal mt-4 max-w-2xl text-ink-600 leading-relaxed">
            I share most of my day-to-day thinking on LinkedIn — from AI and cybersecurity to heritage
            and seva. Here are a few recent ones.
          </p>
        </SectionHeading>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {linkedinPosts.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal card card-hover border-glow p-6 flex flex-col group btn-press"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="type-label text-kesari-700">{p.category}</span>
                <span className="type-mono-sm text-ink-500">{p.date}</span>
              </div>
              <h3 className="mt-3 font-display type-body font-semibold text-navy-900 group-hover:text-kesari-700 transition-colors">
                {p.title}
              </h3>
              <p className="mt-3 type-subhead leading-relaxed text-ink-600 flex-1">{p.excerpt}</p>
              <div className="mt-5 flex flex-wrap items-center gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="type-mono-sm text-ink-600 border border-navy-800/12 rounded-md px-2 py-1">
                    {t}
                  </span>
                ))}
                <span className="ml-auto link-control type-subhead font-medium text-kesari-700">
                  <Icon name="linkedin" size={14} /> Read
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a href={postsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Icon name="linkedin" size={18} /> See all my posts on LinkedIn <Icon name="arrow" size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
