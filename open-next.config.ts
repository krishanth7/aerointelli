import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

/**
 * OpenNext adapter configuration for Cloudflare Workers.
 *
 * The site is almost entirely statically prerendered — 43 routes, of which only
 * `/api/contact` and `/llms.txt` are rendered per request. The incremental
 * cache therefore does very little work in practice, but it is still pointed at
 * R2 rather than left on the default, because the default keeps cache entries
 * in the Worker bundle and that puts a ceiling on how large the site can grow
 * before deploys start failing on bundle size.
 *
 * The bucket is bound in `wrangler.jsonc` as `NEXT_INC_CACHE_R2_BUCKET`; this
 * override is the half that tells Next to use it.
 */
export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
});
