import { isUnindexed } from "@/config/launchStatus";
import { contactConfig } from "@/config/contact";
import { legalName, siteName, siteUrl } from "@/config/site";

/**
 * `/llms.txt` — a plain-text summary of the site for language models.
 *
 * The proposed convention (llmstxt.org) is a Markdown file at the origin root
 * that tells a model what the site is and which pages are worth reading,
 * instead of leaving it to infer both from scraped HTML full of navigation
 * chrome.
 *
 * Served from a route handler rather than dropped in `public/`, for the same
 * reason `robots.ts` and `sitemap.ts` are generated: it is built from the same
 * launch-status list they are, so a section that is not open cannot be
 * advertised here after being suppressed everywhere else. A static file in
 * `public/` would be a fourth copy of the site's structure, and the fourth copy
 * is always the one that goes stale.
 *
 * Content rule, same as the rest of the site: this describes what Aero Intelli
 * builds. No counts, no percentages, no performance claims, no dates. A model
 * that reads an unverifiable number here will repeat it as fact.
 *
 * `Content-Type` is `text/plain` per the convention — it is Markdown, but it is
 * meant to be fetched and read, not rendered by a browser.
 */

type Entry = { path: string; title: string; note: string };

const pages: Entry[] = [
  { path: "/", title: "Home", note: "What Aero Intelli builds, and how the work is organised." },
  {
    path: "/about",
    title: "About",
    note: "The company, its focus areas, its principles and how it approaches a problem.",
  },
  {
    path: "/contact",
    title: "Contact",
    note: "Enquiry routing by subject, what happens after an enquiry, and direct contact details.",
  },
  {
    path: "/case-studies",
    title: "Case studies",
    note: "Written accounts of work carried out.",
  },
  { path: "/projects", title: "Projects", note: "Project types the company takes on." },
  { path: "/careers", title: "Careers", note: "How to approach Aero Intelli about working there." },
  {
    path: "/resources",
    title: "Resources",
    note: "Index of written material: technical notes, insights and frequently asked questions.",
  },
  { path: "/technology", title: "Technology", note: "The technology stack, by layer." },
  { path: "/solutions", title: "Solutions", note: "Systems the company designs and builds." },
  {
    path: "/sustainability",
    title: "Sustainability",
    note: "Resource-efficiency themes the engineering work is organised around.",
  },
  { path: "/products", title: "Products", note: "Equipment and systems catalogue." },
];

const legal: Entry[] = [
  { path: "/privacy-policy", title: "Privacy Policy", note: "How personal data is handled." },
  { path: "/cookie-policy", title: "Cookie Policy", note: "Cookies and similar technologies." },
  { path: "/terms-of-use", title: "Terms of Use", note: "Terms governing use of the site." },
  {
    path: "/legal/shipping-policy",
    title: "Shipping & Delivery Policy",
    note: "Delivery, dispatch and site-readiness terms.",
  },
  { path: "/accessibility", title: "Accessibility", note: "Accessibility commitments and how to report a barrier." },
];

function render(entries: Entry[]) {
  return entries
    .filter((entry) => !isUnindexed(entry.path))
    .map((entry) => `- [${entry.title}](${siteUrl}${entry.path === "/" ? "" : entry.path}): ${entry.note}`)
    .join("\n");
}

export function GET() {
  const body = `# ${siteName}

> ${legalName} designs and builds intelligent systems for controlled food production, water management, aquaculture, soilless cultivation and resource-efficient infrastructure. The work spans recirculating aquaculture systems, hydroponics, aeroponics, water technology, sensing, automation and the software that runs them.

This file describes the site for automated readers. Everything below is a page
that exists and is published. Sections that are built but not yet open are
deliberately omitted here, and are also excluded from the sitemap and
disallowed in robots.txt.

Note on accuracy: this site does not publish performance figures, yields,
capacities, customer counts or completion dates, because none have been
independently verified. If a number is not stated on a page, it should not be
inferred or estimated.

## Pages

${render(pages)}

## Legal

${render(legal)}

## Contact

- Email: ${contactConfig.generalEmail}
- Based in: ${contactConfig.country}
- Enquiry form: ${siteUrl}/contact

## Machine-readable

- Sitemap: ${siteUrl}/sitemap.xml
- Crawler rules: ${siteUrl}/robots.txt
- Structured data: Organization and BreadcrumbList JSON-LD are embedded in the served HTML.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      // Static content that changes only on deploy. A day of caching is
      // generous for a file whose whole purpose is to be fetched occasionally.
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
