'use client';

import { useActionState } from 'react';
import Icon from '@/components/Icon';
import { sendMessage, type ContactState } from './actions';

/**
 * The form posts to a Server Action, so it submits and validates with
 * JavaScript disabled — React only adds the pending state and the inline
 * result. There is no client-side redirect and no `?sent=1` in the URL: the
 * success panel replaces the form in place, which is also what makes the
 * back button behave.
 */

const FIELD =
  'w-full rounded-lg bg-paper-200 border border-navy-800/12 px-4 py-3 type-subhead text-navy-900 placeholder:text-ink-500 transition-colors focus:border-kesari-500/50 focus:outline-none focus:ring-1 focus:ring-kesari-500/40';
const LABEL = 'font-display type-caption font-medium uppercase tracking-wider text-ink-700';

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendMessage, { ok: false });

  if (state.ok) {
    return (
      <div
        className="mt-6 flex items-start gap-3 rounded-xl border border-status-green/30 bg-status-green/10 px-5 py-4"
        role="status"
      >
        <span className="mt-0.5 grid place-items-center h-6 w-6 rounded-full bg-status-green/15 text-status-green shrink-0">
          <Icon name="arrow" size={16} />
        </span>
        <div>
          <p className="font-display type-subhead font-semibold text-status-green">
            Thanks — your message is on its way.
          </p>
          <p className="type-caption text-status-green/80 mt-0.5">I’ll get back to you as soon as I can.</p>
        </div>
      </div>
    );
  }

  return (
    <form action={action} className="reveal card border-glow p-6 sm:p-8 mt-6 grid gap-5">
      {/* Honeypot — hidden from people, irresistible to bots. */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid gap-2">
        <label htmlFor="cf-name" className={LABEL}>
          Name <span className="text-kesari-700" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={FIELD} />
      </div>

      <div className="grid gap-2">
        <label htmlFor="cf-email" className={LABEL}>
          Email <span className="text-kesari-700" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={FIELD}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="cf-company" className={LABEL}>
          Company / Organization{' '}
          <span className="text-ink-500 normal-case tracking-normal">(optional)</span>
        </label>
        <input
          id="cf-company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Where you’re reaching out from"
          className={FIELD}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="cf-message" className={LABEL}>
          Message <span className="text-kesari-700" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="What’s on your mind?"
          className={`${FIELD} resize-y`}
        />
      </div>

      {state.error && (
        <p className="type-subhead text-status-amber" role="alert">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        data-magnetic="0.25"
        className="group inline-flex items-center justify-center gap-2 min-h-11 rounded-lg bg-kesari-500 px-6 py-3 font-display type-subhead font-semibold text-navy-950 transition-all hover:bg-kesari-400 hover:shadow-[0_12px_40px_-12px_var(--color-kesari-500)] btn-press disabled:opacity-60 disabled:cursor-progress"
      >
        {pending ? 'Sending…' : 'Send message'}
        <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
