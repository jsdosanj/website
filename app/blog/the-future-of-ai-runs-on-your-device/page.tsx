import EssayShell from '@/components/EssayShell';
import JsonLd from '@/components/JsonLd';
import { pageGraph, pageMetadata, type PageDescriptor } from '@/lib/site-metadata';
import { essayBySlug } from '../essays';

const SLUG = 'the-future-of-ai-runs-on-your-device';
const essay = essayBySlug(SLUG)!;

const page: PageDescriptor = {
  path: `/blog/${SLUG}`,
  ogSlug: `blog-${SLUG}`,
  title: essay.title,
  description:
    'Last week the U.S. government switched off the most powerful AI model on Earth — for everyone, overnight. Here’s why that’s the strongest argument yet for running AI you actually own.',
  keywords: [
    'local AI', 'on-device AI', 'Ollama', 'open weights', 'Mellum2', 'GRC',
    'vendor concentration risk', 'Fable 5', 'Mythos 5', 'Gemma 3', 'Qwen3',
  ],
};

const base = pageMetadata(page);
export const metadata = { ...base, openGraph: { ...base.openGraph, type: 'article' as const } };

const sources = [
  { label: 'Anthropic — Statement on the directive to suspend Fable 5 & Mythos 5', href: 'https://www.anthropic.com/news/fable-mythos-access' },
  { label: 'Bloomberg', href: 'https://www.bloomberg.com/news/articles/2026-06-13/anthropic-says-us-limits-foreign-access-to-fable-5-mythos-5' },
  { label: 'CNN', href: 'https://www.cnn.com/2026/06/13/business/anthropic-mythos-model-national-security' },
  { label: 'Fortune', href: 'https://fortune.com/2026/06/13/anthropic-disables-fable-mythos-export-controls-national-security-threat/' },
  { label: 'NBC News', href: 'https://www.nbcnews.com/tech/tech-news/anthropic-suspends-new-ai-models-fable-mythos-government-directive-rcna349901' },
  { label: 'JetBrains — Mellum2 goes open source (Apache 2.0)', href: 'https://blog.jetbrains.com/ai/2026/06/mellum2-goes-open-source-a-fast-model-for-ai-workflows/' },
  { label: 'Apple — next-gen Apple Intelligence & Siri (WWDC 2026, iOS 27)', href: 'https://www.apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/' },
  { label: 'Google I/O 2026 AI subscription pricing', href: 'https://blog.google/products-and-platforms/products/google-one/google-ai-subscriptions/' },
  { label: 'Open-weight models to run locally (2026)', href: 'https://huggingface.co/blog/daya-shankar/open-source-llm-models-to-run-locally' },
];

export default function Post() {
  const url = new URL(page.path, 'https://jasvant.dosanjhlabs.com').href;
  const posting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: essay.title,
    description: page.description,
    url,
    datePublished: essay.published,
    dateModified: essay.published,
    author: { '@type': 'Person', name: 'Jasvant Singh Dosanjh', url: 'https://jasvant.dosanjhlabs.com' },
    publisher: { '@type': 'Person', name: 'Jasvant Singh Dosanjh', url: 'https://jasvant.dosanjhlabs.com' },
    mainEntityOfPage: url,
  };

  return (
    <>
      <JsonLd data={pageGraph(page, [posting])} />
      <EssayShell slug={SLUG} sources={sources}>
        <h2 id="the-overnight-shutdown">The overnight shutdown</h2>
        <p>
          On June 12–13, 2026, the U.S. Commerce Department ordered Anthropic to suspend access to its
          two most capable models — <strong>Fable 5 and Mythos 5</strong> — for all foreign nationals,
          citing national security (reportedly tied to a jailbreaking method). Anthropic couldn’t
          restrict selectively; to comply, it had to disable the models for{' '}
          <strong>every customer worldwide</strong>. It was the first time the U.S. government had
          switched off a commercial AI model globally. People who had built on those models — and paid
          for them — woke up to a product that no longer existed, with refunds to follow.
        </p>
        <p>
          Set aside whether the order was right. The mechanism is the lesson: the most powerful AI on the
          planet was revoked for everyone, with effectively no notice, by a party that was neither the
          buyer nor the vendor.
        </p>

        <h2 id="the-pattern">The pattern: three ways your AI dependency fails</h2>
        <p>
          I work in security and compliance, and this is a textbook concentration-risk event. If your
          product, workflow, or business runs on a remote frontier model, you carry three live risks:
        </p>
        <ul>
          <li>
            <strong>Priced out.</strong> Flagship tiers now sit at $200/month (Google’s top plan, ChatGPT
            Pro), and the most capable features increasingly live behind enterprise contracts and rate
            limits. For most small businesses, the best AI is drifting out of reach on cost alone.
          </li>
          <li>
            <strong>Locked out.</strong> Access already varies by geography and citizenship — whole
            regions and user categories can be in or out depending on policy or export rules.
          </li>
          <li>
            <strong>Shut off.</strong> As Fable just showed, a single government letter can take a model
            offline for everyone, instantly.
          </li>
        </ul>
        <p>
          Any one of these belongs in a risk register. All three on the same dependency is not a
          foundation you can build a compliance program — or a company — on.
        </p>

        <h2 id="onto-your-device">Meanwhile, capable AI quietly moved onto your device</h2>
        <p>
          While frontier access gets more concentrated and conditional, high-quality AI got small, cheap,
          and open enough to run on hardware you already own.
        </p>
        <ul>
          <li>
            <strong>Open weights went credible.</strong> This month, JetBrains open-sourced{' '}
            <strong>Mellum2</strong> — a 12B mixture-of-experts coding model — under the permissive{' '}
            <strong>Apache 2.0</strong> license, free to self-host. It joins a deep bench: Qwen3,
            Google’s Gemma 3 (in sizes that run on a laptop, with long context and multimodal input),
            Meta’s Llama 3.3, and DeepSeek. For a large share of real tasks, “run it yourself” no longer
            means a meaningful quality drop.
          </li>
          <li>
            <strong>The plumbing got trivial.</strong> Ollama, LM Studio, and llama.cpp — plus Apple’s
            MLX on Apple Silicon — turned self-hosting into a one-line install. A modern laptop, with
            4-bit quantization, runs a genuinely capable model offline, with no API key and no per-token
            meter.
          </li>
          <li>
            <strong>Apple made local-first mainstream — with a telling caveat.</strong> Apple
            Intelligence already runs on-device foundation models across roughly a billion devices, and
            those models are open to developers through its Foundation Models framework. Yet for its
            biggest swing — the rebuilt Siri unveiled at WWDC 2026 and shipping in iOS 27 this fall
            (opt-in beta) — Apple reached for a large custom cloud model to handle the hardest reasoning.
            That’s not a contradiction; it’s the thesis in miniature: local for the everyday, cloud for
            the heavy lifting.
          </li>
        </ul>

        <h2 id="resilience-not-privacy">Why this is a resilience story, not just a privacy one</h2>
        <p>
          The usual case for local AI is privacy and cost. Both are real. But the Fable shutdown reframes
          it as something a security or GRC leader cares about more:{' '}
          <strong>resilience and control.</strong> When the model runs on your device or your own
          infrastructure:
        </p>
        <ul>
          <li>
            <strong>The data never leaves it.</strong> Privacy, data residency, and a large class of
            compliance obligations are solved by architecture — not by a vendor’s terms of service or a
            DPA you have to trust. A clinic can run a model over patient data; a defense supplier can use
            AI without controlled information leaving the building.
          </li>
          <li>
            <strong>It can’t be revoked out from under you.</strong> No letter, price hike, region block,
            or deprecation notice takes it away mid-project. Your baseline capability is yours.
          </li>
          <li>
            <strong>Vendor concentration risk drops.</strong> You’re no longer one policy change away
            from an outage you can’t fix.
          </li>
        </ul>

        <blockquote>
          This is the same principle I design my own products around: the assessment tools I build keep
          regulated data entirely on the user’s machine, precisely so nothing can be exfiltrated — or
          switched off.
        </blockquote>

        <p>
          What used to be a niche requirement for regulated industries is becoming a mainstream
          expectation.
        </p>

        <h2 id="what-id-do">What I’d actually do</h2>
        <p>
          This isn’t “abandon the cloud.” Frontier models are extraordinary, and for genuinely massive
          jobs you’ll still reach for one. The move is to stop treating a remote model as your{' '}
          <em>only</em> option:
        </p>
        <ul>
          <li>
            <strong>Individuals and small teams:</strong> install Ollama, pull a model like Gemma 3 or
            Qwen3, and run your everyday tasks locally. Keep a cloud subscription for the heavy lifting,
            not the basics.
          </li>
          <li>
            <strong>Regulated organizations:</strong> put “model-access revocation / region lock” in your
            risk register alongside your other third-party dependencies, and stand up a local/open-weight
            option for anything touching sensitive data. Treat it as business continuity.
          </li>
          <li>
            <strong>Builders:</strong> design so your product degrades gracefully — a local model as the
            floor, a cloud model as the ceiling. If your roadmap assumes a specific remote model will
            always be available to everyone, last week showed why that’s fragile.
          </li>
        </ul>

        <h2 id="the-bet">The bet</h2>
        <p>
          The era where the best AI meant the biggest monthly bill — or the right passport — is ending.
          What replaces it looks more like how computing is supposed to work: capable, private,
          resilient, and yours.
        </p>
        <p>
          <strong>Local by default. Cloud for the heavy lifting. But own your baseline.</strong>
        </p>
        <p>
          The companies that win the next phase won’t be whoever has the largest model. They’ll be
          whoever makes a <em>good</em> model effortless to run on infrastructure you control, with your
          data staying exactly where you put it.
        </p>
        <p className="signoff">
          — Jasvant Singh Dosanjh. I build local-first, privacy-respecting security &amp; compliance
          software at{' '}
          <a href="https://dosanjhlabs.com" target="_blank" rel="noopener noreferrer">
            Dosanjh Labs
          </a>
          .
        </p>
      </EssayShell>
    </>
  );
}
