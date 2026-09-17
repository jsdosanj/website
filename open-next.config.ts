import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import incrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache';

/**
 * OpenNext on Cloudflare Workers.
 *
 * The incremental cache is backed by Workers KV, which is what makes the live
 * figures in data/live.ts actually revalidate in production: without a shared
 * cache each isolate would refetch on its own schedule, and the six-hour
 * window would mean nothing. Bind a KV namespace as NEXT_INC_CACHE_KV before
 * deploying — without it the adapter falls back to no caching, which still
 * works but refetches per render.
 */
export default defineCloudflareConfig({
  incrementalCache,
});
