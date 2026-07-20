// Shared command registry — powers both the ⌘K command palette
// (CommandPalette.astro) and the typeable InteractiveTerminal's `open`
// command, so there's exactly one source of truth for "everything you can
// jump to on this site."
import { nav, site } from './site';
import { products } from './products';

export type CommandAction =
  | { type: 'navigate'; href: string }
  | { type: 'external'; href: string }
  | { type: 'download'; href: string };

export type Command = {
  id: string;
  label: string;
  hint?: string;
  group: string;
  keywords?: string[];
  action: CommandAction;
};

const navCommands: Command[] = nav.map((n) => ({
  id: `nav-${n.href}`,
  label: n.label,
  hint: n.href === '/' ? '~' : `~${n.href}`,
  group: 'Navigate',
  action: { type: 'navigate', href: n.href },
}));

const utilityCommands: Command[] = [
  {
    id: 'nav-resume',
    label: 'Résumé (web)',
    hint: '~/resume',
    group: 'Navigate',
    keywords: ['resume', 'cv', 'print'],
    action: { type: 'navigate', href: '/resume' },
  },
];

const productCommands: Command[] = products.map((p) => {
  const primary = p.links[0];
  const action: CommandAction = !primary
    ? { type: 'navigate', href: '/products' }
    : primary.href.startsWith('http')
      ? { type: 'external', href: primary.href }
      : { type: 'navigate', href: primary.href };
  return {
    id: `product-${p.slug}`,
    label: p.name,
    hint: p.category,
    group: 'Products',
    keywords: [p.tagline, ...p.tech],
    action,
  };
});

const resumeCommands: Command[] = site.resumes.map((r) => ({
  id: `resume-${r.label}`,
  label: `${r.label} résumé (PDF)`,
  hint: 'download',
  group: 'Résumé',
  keywords: ['resume', 'cv', 'pdf', 'download'],
  action: { type: 'download', href: r.href },
}));

const socialCommands: Command[] = [
  { id: 'social-linkedin', label: 'LinkedIn', hint: site.socials.linkedin.replace(/^https?:\/\//, ''), group: 'Connect', action: { type: 'external', href: site.socials.linkedin } },
  { id: 'social-github', label: 'GitHub', hint: site.socials.github.replace(/^https?:\/\//, ''), group: 'Connect', action: { type: 'external', href: site.socials.github } },
  { id: 'social-huggingface', label: 'HuggingFace', hint: site.socials.huggingface.replace(/^https?:\/\//, ''), group: 'Connect', action: { type: 'external', href: site.socials.huggingface } },
];

export const commands: Command[] = [...navCommands, ...utilityCommands, ...productCommands, ...resumeCommands, ...socialCommands];
