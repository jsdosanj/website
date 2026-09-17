import Link from 'next/link';
import Icon from '@/components/Icon';
import Jali from '@/components/Jali';
import JsonLd from '@/components/JsonLd';
import Khanda from '@/components/Khanda';
import SectionHeading from '@/components/SectionHeading';
import { pageGraph, pageMetadata, type PageDescriptor } from '@/lib/site-metadata';

const page: PageDescriptor = {
  path: '/ai-policy',
  title: 'AI & Content Usage Policy',
  description:
    'How AI systems may use jasvant.dosanjhlabs.com: answer engines may crawl and cite this site; AI/ML training on its content is reserved and requires a license.',
  keywords: ['AI content policy', 'TDM reservation', 'AI training opt-out', 'robots.txt AI', 'content licensing', 'llms.txt'],
};

export const metadata = pageMetadata(page);

const lastUpdated = 'July 7, 2026';

const welcome = [
  'OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot', 'Claude-User',
  'PerplexityBot', 'Perplexity-User', 'Applebot', 'Amzn-SearchBot',
  'Amzn-User', 'meta-webindexer', 'meta-externalfetcher',
  'MistralAI-Index', 'MistralAI-User', 'DuckAssistBot',
];

const reserved = [
  'GPTBot', 'ClaudeBot', 'anthropic-ai', 'Claude-Web', 'Google-Extended',
  'Applebot-Extended', 'Meta-ExternalAgent', 'FacebookBot', 'Amazonbot',
  'CCBot', 'Bytespider', 'cohere-ai', 'cohere-training-data-crawler',
  'Diffbot', 'Omgilibot', 'Omgili', 'webzio-extended', 'PetalBot',
  'PanguBot', 'YouBot', 'ImagesiftBot', 'VelenPublicWebCrawler',
  'Timpibot', 'Scrapy',
];

const declarations: { icon: string; label: string; text: string; href?: string }[] = [
  { icon: 'globe', label: '/robots.txt', text: 'Per-bot Allow/Disallow rules for every crawler listed below.', href: '/robots.txt' },
  { icon: 'shield', label: '/.well-known/tdmrep.json', text: 'Machine-readable W3C TDM Reservation Protocol declaration.', href: '/.well-known/tdmrep.json' },
  { icon: 'book', label: '/ai.txt', text: 'Human- and machine-readable summary of this policy.', href: '/ai.txt' },
  { icon: 'sparkles', label: '/llms.txt', text: 'A concise, structured overview for AI answer engines (GEO).', href: '/llms.txt' },
  { icon: 'server', label: 'HTTP response headers', text: 'X-Robots-Tag, Content-Usage, and TDM-Reservation headers on every response.' },
];

export default function AiPolicy() {
  return (
    <>
      <JsonLd data={pageGraph(page)} />

      {/* Hero */}
      <section className="relative pt-36 sm:pt-48 pb-8 overflow-hidden">
        <Jali className="absolute inset-0 text-navy-500/[0.055]" opacity={1} />
        <div
          className="absolute left-1/2 -translate-x-1/2 top-24 h-72 w-72 rounded-full bg-kesari-500/10 blur-[100px]"
          aria-hidden="true"
        />
        <div className="container-x relative text-center">
          <Khanda size={48} className="mx-auto text-kesari-600 animate-float" />
          <p className="reveal is-visible mt-5 eyebrow eyebrow-center">AI &amp; content policy</p>
          <h1 className="reveal is-visible mt-4 type-display-2 text-navy-900">AI &amp; Content Usage Policy</h1>
          <p className="reveal is-visible mt-6 max-w-2xl mx-auto type-body text-ink-600 leading-relaxed">
            This site welcomes AI answer and search engines — they may crawl and cite it, and that
            traffic is welcome. Its content is reserved against use for AI/ML training, fine-tuning, or
            dataset creation without a license.
          </p>
          <p className="reveal is-visible mt-4 type-mono-sm text-ink-500">Last updated {lastUpdated}</p>
        </div>
      </section>

      {/* The two lanes */}
      <section className="container-x mt-16">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="reveal card card-hover border-glow p-6 sm:p-8">
            <div className="flex items-center gap-3 min-w-0">
              <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-status-green/10 border border-status-green/25 text-status-green">
                <Icon name="globe" size={20} />
              </span>
              <h2 className="type-title-4 text-navy-900">Crawl &amp; cite — welcome</h2>
            </div>
            <p className="mt-4 type-subhead leading-relaxed text-ink-600">
              Answer engines and search assistants may crawl this site and cite it when responding to a
              question. That’s exactly the kind of traffic a personal site is built for.
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {welcome.map((bot) => (
                <span key={bot} className="type-mono-sm text-status-green border border-status-green/25 rounded-md px-2 py-1">
                  {bot}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal card card-hover border-glow p-6 sm:p-8">
            <div className="flex items-center gap-3 min-w-0">
              <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-paper-200 border border-navy-800/12 text-kesari-600">
                <Icon name="shield" size={20} />
              </span>
              <h2 className="type-title-4 text-navy-900">Training &amp; datasets — reserved</h2>
            </div>
            <p className="mt-4 type-subhead leading-relaxed text-ink-600">
              Automated collection of this site’s content for AI/ML training, fine-tuning, RAG-corpus
              construction, or dataset creation is not permitted without a license. This content is
              TDM-reserved.
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {reserved.map((bot) => (
                <span key={bot} className="type-mono-sm text-ink-600 border border-navy-800/12 rounded-md px-2 py-1">
                  {bot}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it's enforced */}
      <section className="container-x mt-24">
        <SectionHeading eyebrow="How it's declared" title="Machine-readable, everywhere it matters" align="center">
          <p className="reveal mt-4 max-w-2xl mx-auto text-ink-600">
            The reservation above isn’t just a page of prose — it’s backed by the W3C TDM Reservation
            Protocol and declared in every place a crawler or agent is likely to check.
          </p>
        </SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {declarations.map((d) => {
            const inner = (
              <>
                <span className="grid place-items-center h-10 w-10 rounded-lg bg-paper-200 border border-navy-800/12 text-navy-600 shrink-0">
                  <Icon name={d.icon} size={18} />
                </span>
                <div className="min-w-0">
                  <p
                    className={`type-mono font-medium text-navy-900 ${d.href ? 'group-hover:text-kesari-700 transition-colors' : ''}`}
                  >
                    {d.label}
                  </p>
                  <p className="mt-1 type-subhead text-ink-600 leading-relaxed">{d.text}</p>
                </div>
              </>
            );
            return d.href ? (
              <a key={d.label} href={d.href} className="reveal card card-hover p-5 flex items-start gap-4 group btn-press">
                {inner}
              </a>
            ) : (
              <div key={d.label} className="reveal card p-5 flex items-start gap-4">
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* Why */}
      <section className="container-x mt-24">
        <div className="reveal card border-glow overflow-hidden p-8 sm:p-10 text-center">
          <p className="gurmukhi type-title-2 text-kesari-600" lang="pa">ੴ</p>
          <h2 className="mt-4 type-title-2 text-navy-900 max-w-2xl mx-auto">Why the split policy</h2>
          <p className="mt-4 max-w-2xl mx-auto text-ink-600 leading-relaxed">
            Search and answer traffic is a two-way exchange — the same one this site has always relied
            on with traditional search engines. Model training is different: it’s a one-way extraction
            with no attribution and no way back to the source. This policy keeps the door open to the
            first and closed to the second, unless a license is arranged.
          </p>
        </div>
      </section>

      {/* Licensing / contact */}
      <section className="container-x mt-24 mb-8">
        <div className="reveal text-center">
          <h2 className="type-title-2 text-navy-900">Want to license this content for training?</h2>
          <p className="mt-3 max-w-lg mx-auto text-ink-600">Reach out and let’s talk terms.</p>
          <Link href="/contact" className="mt-6 btn btn-primary">
            Get in touch <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
