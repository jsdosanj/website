import Icon from '@/components/Icon';
import Jali from '@/components/Jali';
import JsonLd from '@/components/JsonLd';
import Khanda from '@/components/Khanda';
import { site } from '@/data/site';
import { pageGraph, pageMetadata, type PageDescriptor } from '@/lib/site-metadata';
import ContactForm from './ContactForm';

const page: PageDescriptor = {
  path: '/contact',
  ogSlug: 'contact',
  title: 'Contact — Hire a Technical Program Manager',
  description:
    'Get in touch with Jasvant Singh Dosanjh — Technical Program Manager open to relocating, open to Technical Program Manager, Technical Project Manager, and IT Program Manager roles.',
};

export const metadata = pageMetadata(page);

const channels = [
  { icon: 'linkedin', label: 'LinkedIn', value: 'in/jasvantsd', href: site.socials.linkedin, note: 'Best way to reach me' },
  { icon: 'github', label: 'GitHub', value: 'jsdosanj', href: site.socials.github, note: 'Code & projects' },
];

export default function Contact() {
  return (
    <>
      <JsonLd data={pageGraph(page)} />

      <section className="relative pt-36 sm:pt-48 overflow-hidden">
        <Jali className="absolute inset-0 text-navy-500/[0.055]" opacity={1} />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto">
            <Khanda size={56} className="mx-auto text-kesari-600 animate-float" />
            <span className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-status-green/30 bg-status-green/10 px-3.5 py-1.5 type-caption font-semibold text-status-green">
              <span className="h-2 w-2 rounded-full bg-status-green animate-pulse-glow" aria-hidden="true" />
              open to work · remote / open to relocating
            </span>
            <p className="reveal is-visible mt-5 eyebrow eyebrow-center">Technical Program Manager</p>
            <h1 className="mt-3 type-display-2 text-navy-900" data-kinetic>
              <span className="kin-line"><span className="kin-inner">Let’s connect.</span></span>
            </h1>
            <p className="reveal is-visible mt-5 type-body text-ink-600 leading-relaxed">
              I’m actively interviewing for <span className="text-ink-800">Technical Program Manager</span>,{' '}
              <span className="text-ink-800">Technical Project Manager</span>, and{' '}
              <span className="text-ink-800">IT Program Manager</span> roles — and always happy to talk
              delivery, infrastructure, or a tool worth building. If you’re hiring, let’s find 20
              minutes.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal card card-hover border-glow p-6 flex items-center gap-4 group btn-press"
              >
                <span className="grid place-items-center h-12 w-12 shrink-0 rounded-xl bg-paper-200 border border-navy-800/12 text-kesari-600 group-hover:scale-105 transition-transform">
                  <Icon name={c.icon} size={22} />
                </span>
                <div className="min-w-0">
                  <p className="font-display type-callout font-semibold text-navy-900">{c.label}</p>
                  <p className="type-subhead text-ink-600 truncate">{c.value}</p>
                  <p className="type-caption-2 text-ink-500 mt-0.5">{c.note}</p>
                </div>
                <Icon
                  name="arrow"
                  size={18}
                  className="ml-auto shrink-0 text-ink-500 group-hover:text-kesari-700 group-hover:translate-x-0.5 transition-all"
                />
              </a>
            ))}
          </div>

          {/* Résumé — role-tailored, 2-page, ATS-friendly */}
          <div id="resumes" className="mt-16 max-w-3xl mx-auto scroll-mt-28">
            <p className="reveal eyebrow eyebrow-center w-full">Résumé</p>
            <div className="reveal mt-5 grid gap-3 sm:grid-cols-2">
              {site.resumes.map((r) => (
                <a key={r.href} href={r.href} download className="card card-hover p-4 flex items-center gap-3 group btn-press">
                  <span className="grid place-items-center h-10 w-10 rounded-lg bg-paper-200 border border-navy-800/12 text-kesari-600 shrink-0">
                    <Icon name="file" size={18} />
                  </span>
                  <span className="font-display type-subhead font-semibold text-navy-900 group-hover:text-kesari-700 transition-colors min-w-0">
                    {r.label}
                  </span>
                  <Icon
                    name="download"
                    size={16}
                    className="ml-auto shrink-0 text-ink-500 group-hover:text-kesari-700 transition-colors"
                  />
                </a>
              ))}
            </div>
            <p className="reveal mt-4 text-center type-caption text-ink-500">
              A 2-page, ATS-friendly résumé — current as of September 2026.
            </p>
          </div>

          {/* Message form */}
          <div className="mt-16 max-w-2xl mx-auto">
            <p className="reveal eyebrow eyebrow-center w-full">Or send a message</p>
            <h2 className="reveal mt-3 text-center type-title-2 font-bold text-navy-900">Drop me a line.</h2>
            <p className="reveal mt-3 text-center type-subhead text-ink-600">
              Tell me about the role, the team, or the program you need landed. I read every message.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
