'use server';

/**
 * Contact form delivery.
 *
 * The Astro version posted straight from the browser to FormSubmit, with the
 * destination address base64'd in a `data-` attribute and decoded by an inline
 * script. That worked, but it put the endpoint and the address in the page
 * source, needed JavaScript to submit at all, and gave the page no way to
 * validate or rate-limit anything.
 *
 * Now the form posts to this Server Action and the relay happens server-side:
 * the address never reaches the browser, submission works with JavaScript
 * disabled, and validation runs somewhere it can't be edited.
 *
 * The destination is read from CONTACT_ENDPOINT so it can be rotated without a
 * code change; the literal below is the existing FormSubmit address, kept so
 * the form keeps working if the variable is unset. It is server-only either
 * way — nothing in this file is bundled for the client.
 */

const FALLBACK_TO = Buffer.from('ZG90cy13aGlza3MuNnJAaWNsb3VkLmNvbQ==', 'base64').toString('utf8');

export type ContactState = { ok: boolean; error?: string };

/** Fields a person fills in. Anything else in the payload is ignored. */
const MAX = { name: 120, email: 160, company: 160, message: 4000 } as const;

function field(data: FormData, key: keyof typeof MAX): string {
  const raw = data.get(key);
  return typeof raw === 'string' ? raw.trim().slice(0, MAX[key]) : '';
}

export async function sendMessage(_prev: ContactState, data: FormData): Promise<ContactState> {
  // Honeypot: a real person never fills a field they cannot see. Report
  // success so a bot has nothing to tune against.
  if ((data.get('_honey') as string | null)?.trim()) return { ok: true };

  const name = field(data, 'name');
  const email = field(data, 'email');
  const company = field(data, 'company');
  const message = field(data, 'message');

  if (!name || !email || !message) {
    return { ok: false, error: 'Name, email, and message are all needed.' };
  }
  // Deliberately permissive: the only thing worth rejecting here is an address
  // that cannot possibly be deliverable. Anything stricter turns away valid
  // addresses, and the reply itself is the real validation.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return { ok: false, error: 'That email address doesn’t look right.' };
  }

  const endpoint = process.env.CONTACT_ENDPOINT ?? `https://formsubmit.co/ajax/${FALLBACK_TO}`;

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      cache: 'no-store',
      body: JSON.stringify({
        _subject: 'New message from jasvant.dosanjhlabs.com',
        _template: 'table',
        _captcha: 'false',
        name,
        email,
        company: company || '—',
        message,
      }),
    });
    if (!res.ok) throw new Error(`relay responded ${res.status}`);
  } catch {
    return {
      ok: false,
      error: 'The message couldn’t be sent just now — please try again, or reach me on LinkedIn.',
    };
  }

  return { ok: true };
}
