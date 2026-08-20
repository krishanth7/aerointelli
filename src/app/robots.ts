import type { MetadataRoute } from "next";
import { unindexedPrefixes } from "@/config/launchStatus";
import { siteUrl } from "@/config/site";

/**
 * `robots.txt`, generated rather than kept as a static file so it cannot drift
 * away from the sitemap and the launch-status list it has to agree with.
 *
 * `/api/` is disallowed because nothing under it is a page. The contact
 * endpoint in particular accepts POSTs and has no meaningful GET
 * representation, so a crawler fetching it wastes budget for nothing.
 *
 * Note what this file cannot do: `Disallow` is a request not to *crawl*, not a
 * promise not to *index*. A disallowed URL that is linked from elsewhere can
 * still appear in results as a bare link. That is why the unopened sections are
 * also kept out of the sitemap, and why the pages that must never be indexed
 * carry a `noindex` meta tag — a directive a crawler can only see if it is
 * allowed to fetch the page.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", ...unindexedPrefixes.map((prefix) => `${prefix}/`)],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
