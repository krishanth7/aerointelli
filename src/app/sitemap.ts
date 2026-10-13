import type { MetadataRoute } from "next";
import { knowledgeAreas } from "@/content/knowledge/areas";
import { aquacultureSections } from "@/content/knowledge/aquaculture";
import { hydroponicsSections } from "@/content/knowledge/hydroponics";
import { featuredProjects } from "@/content/research/data";
import { isUnindexed } from "@/config/launchStatus";
import { siteUrl } from "@/config/site";

/**
 * The XML sitemap, served at `/sitemap.xml`.
 *
 * Listed by hand rather than by walking the app directory. A filesystem walk
 * looks tidier and is wrong here for two reasons: it would need Node APIs that
 * are not available when this route is statically generated, and it would
 * happily publish every route that happens to exist — including redirect stubs
 * and sections that are built but not open. A sitemap is an editorial
 * statement about what is worth indexing, so it is written down.
 *
 * `priority` is deliberately absent. Google has said for years that it ignores
 * it, and a made-up number is noise. `lastModified` is the build time, which is
 * honest: it is when the page was last published, and we do not track per-page
 * edit dates.
 *
 * Redirect sources (`/privacy`, `/terms`, `/cookies`,
 * `/delivery-and-shipping-policy`) are not listed. A sitemap should contain
 * canonical destinations only — listing a URL that 301s asks the crawler to
 * fetch something we already know is not the real address.
 */
const routes = [
  "/",
  "/about",
  "/contact",
  "/case-studies",
  "/projects",
  "/careers",
  "/resources",
  "/resources/faqs",
  "/resources/insights",
  "/resources/technical",
  "/technology",
  "/technology/ai-intelligence",
  "/technology/aeroponics",
  "/technology/automation",
  "/technology/data-platform",
  "/technology/farm-ai",
  "/technology/hydroponics",
  "/technology/intelligence-ras",
  "/technology/sensors-monitoring",
  "/technology/system-architecture",
  "/solutions",
  "/solutions/aeroponics",
  "/solutions/ai-monitoring",
  "/solutions/automation",
  "/solutions/commercial-farm",
  "/solutions/controlled-environment-farming",
  "/solutions/nft-hydroponics",
  "/solutions/precision-aquaculture",
  "/solutions/recirculating-aquaculture-systems",
  "/solutions/smart-agriculture",
  "/solutions/water-technology",
  "/sustainability",
  "/research",
  "/research/future-technologies",
  "/research/intelligence-engine",
  "/research/publications",
  "/research/r-and-d",
  ...featuredProjects.map((p) => `/research/projects/${p.relatedSlug || p.id}`),
  "/knowledge",
  "/knowledge/aeroponics",
  "/knowledge/aquaculture",
  // Generated for the same reason as the RAS tree below: the section list is
  // the content, and a second hand-written copy of it here would rot.
  ...aquacultureSections.map((section) => `/knowledge/aquaculture/${section.slug}`),
  "/knowledge/hydroponics",
  ...hydroponicsSections.map((section) => `/knowledge/hydroponics/${section.slug}`),
  "/knowledge/ras",
  // The Knowledge Center is the one tree generated rather than listed. It is
  // meant to keep growing, and a hand-maintained copy of it here would be
  // out of date by the second article.
  ...knowledgeAreas.map((area) => `/knowledge/ras/${area.slug}`),
  "/products",
  "/products/aeroponic-systems",
  "/products/automation-systems",
  "/products/hydroponic-systems",
  "/products/intelligence-platform",
  "/products/ras-systems",
  "/products/sustainable-products",
  "/privacy-policy",
  "/cookie-policy",
  "/terms-of-use",
  "/legal/shipping-policy",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes
    // Sections that are built but not open are filtered here rather than being
    // left out of the list above, so that opening one is a single deletion in
    // `launchStatus.ts` and the route does not also have to be remembered here.
    .filter((route) => !isUnindexed(route))
    .map((route) => ({
      url: `${siteUrl}${route === "/" ? "" : route}`,
      lastModified,
      changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
    }));
}
