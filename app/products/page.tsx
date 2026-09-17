import Link from 'next/link';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import LabStatus from '@/components/LabStatus';
import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/SectionHeading';
import { products } from '@/data/products';
import { site } from '@/data/site';
import { pageGraph, pageMetadata, type PageDescriptor } from '@/lib/site-metadata';

const page: PageDescriptor = {
  path: '/products',
  ogSlug: 'products',
  title: 'Products — Sikhi University, Sightline & Bastion',
  description:
    'Products from Jasvant Dosanjh — Sikhi University (free Sikhi education), a 12-product GRC & security suite (Sightline, Bastion, Ward & more), and open-source tools GurmukhiFix and Cairn.',
  keywords: [
    'Sikhi University', 'Sightline', 'Bastion', 'GurmukhiFix', 'Cairn', 'SikhLibrary dataset',
    'Gurmukhi OCR', 'compliance software', 'GRC suite',
  ],
};

export const metadata = pageMetadata(page);

export default function Products() {
  const live = products.filter((p) => p.status === 'live' && !p.openSource);
  const building = products.filter((p) => p.status !== 'live');
  const openSource = products.filter((p) => p.openSource);

  // Each product as a SoftwareApplication inside one ItemList.
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dosanjh Labs — Products',
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: p.name,
        applicationCategory: p.category,
        description: p.description,
        operatingSystem: 'Web, macOS, Windows, Linux',
        author: { '@type': 'Person', name: site.founder },
        ...(p.links[0] ? { url: p.links[0].href } : {}),
      },
    })),
  };

  return (
    <>
      <JsonLd data={pageGraph(page, [itemList])} />

      <section className="container-x pt-36 sm:pt-44">
        <div className="max-w-3xl">
          <p className="eyebrow reveal is-visible">Products</p>
          <h1 className="mt-4 type-display-2 text-navy-900" data-kinetic>
            <span className="kin-line">
              <span className="kin-inner">
                Tools that turn friction into <span className="text-kesari-gradient">momentum.</span>
              </span>
            </span>
          </h1>
          <p className="reveal is-visible mt-5 type-body text-ink-600 leading-relaxed">
            Every product here exists because something that should have been easy was needlessly hard
            — OCR that fails on the world’s scripts, knowledge locked in manuscripts, fleets that break
            before anyone notices. Some are live today; others are taking shape on the workbench.
          </p>
        </div>

        {/* Dosanjh Labs banner */}
        <div className="reveal is-visible mt-10 card border-glow p-6 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
          <div className="flex items-start gap-4">
            <span className="grid place-items-center h-12 w-12 shrink-0 rounded-xl bg-paper-200 border border-navy-800/12 text-kesari-600">
              <Icon name="sparkles" size={22} />
            </span>
            <div className="min-w-0">
              <p className="font-display type-body font-semibold text-navy-900">
                Built &amp; sold under <span className="text-kesari-700">Dosanjh Labs</span>
              </p>
              <p className="mt-1 max-w-xl type-subhead leading-relaxed text-ink-600">
                Sightline, Bastion, Lookout, and Cairn are my commercial security &amp; compliance
                suite, built and sold through Dosanjh Labs. Visit the storefront for pricing, docs, and
                product pages.
              </p>
            </div>
          </div>
          <a
            href="https://dosanjhlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 btn btn-primary"
          >
            dosanjhlabs.com <Icon name="external" size={18} />
          </a>
        </div>
      </section>

      {/* Open source */}
      <section className="container-x mt-16">
        <SectionHeading eyebrow="Free & open" title="Open source">
          <p className="reveal mt-4 max-w-xl text-ink-600">
            Tools I’ve open-sourced for IT and security teams to run, audit, and self-host — no
            lock-in.
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {openSource.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <p className="reveal mt-10 eyebrow">Live, not just claimed</p>
        <div className="reveal mt-5">
          <LabStatus />
        </div>
      </section>

      {/* Live */}
      <section className="container-x mt-20">
        <SectionHeading eyebrow="Shipping now" title="Live products" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {live.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* In progress / planned */}
      <section className="container-x mt-20">
        <SectionHeading eyebrow="On the workbench" title="In progress & in the lab">
          <p className="reveal mt-4 max-w-xl text-ink-600">
            Early-stage builds and concepts I’m actively shaping. Want to collaborate or pilot one?{' '}
            <Link href="/contact" className="text-navy-700 hover:underline underline-offset-4">
              Reach out
            </Link>
            .
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {building.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x mt-24">
        <div className="turn card border-glow p-8 sm:p-10 text-center">
          <h2 className="type-title-2 text-navy-900">More on the way.</h2>
          <p className="mt-3 max-w-lg mx-auto text-ink-600">
            Dosanjh Labs is a living workshop. Browse the storefront, follow along on GitHub and
            HuggingFace, or tell me what you wish existed.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://dosanjhlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Icon name="external" size={18} /> dosanjhlabs.com
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Icon name="github" size={18} /> GitHub
            </a>
            <a
              href={site.socials.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Icon name="sparkles" size={18} /> HuggingFace
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
