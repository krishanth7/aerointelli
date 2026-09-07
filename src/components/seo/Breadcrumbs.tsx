"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SHELL } from "@/components/shared/shell";
import { siteUrl } from "@/config/site";

/**
 * Breadcrumb navigation, derived from the URL.
 *
 * Derived rather than declared per page, because a hand-written trail on forty
 * pages is forty chances to disagree with the address bar — and a breadcrumb
 * that claims a parent the URL does not have is worse than no breadcrumb.
 *
 * Two jobs at once. For a reader it is an escape hatch up the hierarchy,
 * particularly for somebody who landed on a deep page from a search result and
 * has no idea what sits above it. For a crawler it is a `BreadcrumbList`, which
 * is what produces the path-style URL line in a search result instead of a raw
 * URL, and which reinforces the site's shape as internal links.
 *
 * Not rendered on the home page: a one-item trail pointing at the page you are
 * already on is noise.
 *
 * Every intermediate segment is a link even when that segment is a section
 * index, because the crumb has to be clickable to be useful. The last one is
 * not a link — it is the current page, and marking it `aria-current` says so
 * without offering a pointless navigation.
 */

/**
 * Segments whose readable form is not just their slug title-cased.
 *
 * Acronyms are the whole reason this exists: "Ras Systems" and "Nft
 * Hydroponics" are wrong in a way that looks careless, and they appear in
 * search results.
 */
const LABELS: Record<string, string> = {
  "ras-systems": "RAS Systems",
  "recirculating-aquaculture-systems": "Recirculating Aquaculture Systems",
  "nft-hydroponics": "NFT Hydroponics",
  "ai-monitoring": "AI Monitoring",
  "ai-intelligence": "AI Intelligence",
  faqs: "FAQs",
  "cookie-policy": "Cookie Policy",
  "privacy-policy": "Privacy Policy",
  "terms-of-use": "Terms of Use",
  legal: "Legal",
  "shipping-policy": "Shipping & Delivery Policy",
};

/**
 * Path segments that are grouping folders, not pages.
 *
 * `/legal/shipping-policy` exists; `/legal` does not. Deriving the trail from
 * the URL means a crumb gets generated for every segment, so without this the
 * shipping policy page would offer a "Legal" link straight to a 404 — and would
 * assert that URL to a crawler in the `BreadcrumbList` as well.
 */
const NON_NAVIGABLE = new Set(["legal"]);

function labelFor(segment: string) {
  return (
    LABELS[segment] ??
    segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

export function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const trail = segments.map((segment, index) => ({
    label: labelFor(segment),
    href: `/${segments.slice(0, index + 1).join("/")}`,
    navigable: !NON_NAVIGABLE.has(segment),
  }));

  const items = [{ label: "Home", href: "/", navigable: true }, ...trail];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      // `item` is omitted for a folder that is not a real URL. The property is
      // optional precisely for this, and naming a position without pointing it
      // at a page is the honest encoding of "this level has a name but no page".
      ...(item.navigable
        ? { item: `${siteUrl}${item.href === "/" ? "" : item.href}` }
        : {}),
    })),
  };

  /**
   * The nearest ancestor that is a real page, for the phone layout.
   *
   * Searched backwards past the current page, skipping grouping folders, so
   * `/legal/shipping-policy` offers "Home" rather than a dead "Legal".
   */
  const parent = [...items].slice(0, -1).reverse().find((item) => item.navigable);

  return (
    /* No background and no bottom border, deliberately.

       The header is a floating rounded pill sitting on the page, not a
       full-width bar. A bordered strip underneath it read as a seam between two
       unrelated things — and on the pages with a dark hero it put a hard light
       band directly above the dark band. Left transparent, the trail sits in
       the breathing space between the floating header and the section below,
       which is what the rest of the site's spacing already does. */
    /* Less top padding on a phone than the desktop trail gets, because the back
       link's own 44px target supplies the height there — the two together add
       up to the same optical gap. */
    <nav aria-label="Breadcrumb" className={`${SHELL} pb-3 pt-1 sm:pb-4 sm:pt-3 md:pb-5 md:pt-4`}>
      {/* Phones get one step up rather than the whole trail. A four-level trail
          at 375px either wraps to two lines or truncates to uselessness; the
          only thing a thumb actually wants there is "back to the parent". The
          full trail is still in the JSON-LD at every width, so nothing is lost
          to search by not painting it. */}
      {parent ? (
        <Link
          href={parent.href}
          className="inline-flex min-h-[44px] items-center gap-1.5 text-[12.5px] text-ink-soft transition-colors duration-200 hover:text-ink sm:hidden"
        >
          <span aria-hidden="true" className="text-[14px] leading-none">
            &larr;
          </span>
          {parent.label}
        </Link>
      ) : null}

      <ol className="hidden items-center gap-x-2 text-[12.5px] leading-none text-ink-soft sm:flex sm:flex-wrap sm:gap-y-1.5">
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-ink-soft/35">
                  /
                </span>
              ) : null}

              {last || !item.navigable ? (
                <span
                  {...(last ? { "aria-current": "page" as const } : {})}
                  className={last ? "font-medium text-ink" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-ink"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>

      <script
        type="application/ld+json"
        // Built from the pathname, which the router has already normalised, and
        // serialised with `JSON.stringify` — there is no path here that could
        // close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </nav>
  );
}
