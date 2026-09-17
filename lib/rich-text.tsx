import type { ReactNode } from 'react';

/**
 * Renders `backtick` spans in authored copy as inline code.
 *
 * The Astro version did this with a regex into `set:html`, which meant every
 * content string was trusted as markup. Splitting into React nodes instead
 * keeps the same authoring convenience with no HTML surface at all — a stray
 * angle bracket in a product description is text, not a tag.
 */
export function withInlineCode(text: string): ReactNode[] {
  return text.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith('`') && part.endsWith('`') && part.length > 2 ? (
      <code key={i} className="type-mono-sm bg-paper-300 text-ink-800 px-1.5 py-0.5 rounded">
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    )
  );
}
