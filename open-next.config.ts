import { defineCloudflareConfig } from '@opennextjs/cloudflare';

/**
 * OpenNext on Cloudflare Workers.
 *
 * No incremental cache override, so every render of a page that reads
 * data/live.ts refetches the GitHub / PyPI / HuggingFace figures instead of
 * sharing the six-hour revalidate window across isolates. Those are three
 * cheap GETs behind ISR, and the pages render fine either way.
 *
 * Backing the cache with Workers KV is a two-part change and both parts have
 * to land together:
 *
 *   1. `npx wrangler kv namespace create NEXT_INC_CACHE_KV`, then uncomment
 *      the `kv_namespaces` block in wrangler.jsonc with the id it prints.
 *   2. Re-add the override here:
 *        import incrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache';
 *        export default defineCloudflareConfig({ incrementalCache });
 *
 * Doing only (2) breaks deploys. A missing binding is survivable at runtime —
 * the adapter treats the lookup as a miss — but `opennextjs-cloudflare deploy`
 * runs a populateCache step first, and that step throws
 * `No KV binding "NEXT_INC_CACHE_KV" found!` and never reaches the upload.
 */
export default defineCloudflareConfig();
