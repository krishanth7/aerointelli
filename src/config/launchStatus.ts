/**
 * Routes that exist in the codebase but are not ready to be shown.
 *
 * These trees are built but unreviewed, so every link into them is intercepted
 * and answered with a "launching soon" notice instead of navigating. Keeping
 * the list here rather than editing each call site means one deletion opens a
 * section: remove the entry and every button pointing into it becomes an
 * ordinary link again, with no markup change anywhere.
 *
 * Matched by path prefix, so `/technology/sensors-monitoring` is covered by the
 * `/technology` entry.
 */
export type UnreleasedSection = {
  prefix: string;
  /** Names the thing that is coming, so the notice is specific. */
  name: string;
};

export const unreleasedSections: UnreleasedSection[] = [
  { prefix: "/technology", name: "Technology" },
  { prefix: "/solutions", name: "Solutions" },
  { prefix: "/sustainability", name: "Sustainability" },
  // Not `/knowledge` wholesale: the RAS, Aquaculture and Hydroponics Knowledge
  // Centers under it are live, and a prefix entry here would intercept every
  // link into them. The one discipline still a placeholder is named on its own.
  { prefix: "/knowledge/aeroponics", name: "Aeroponics Knowledge" },
];

/**
 * Route prefixes that must not be advertised to search engines.
 *
 * The unreleased sections, plus the product tree — the header CTA tells a human
 * the store is launching soon, and it would be incoherent to say that to a
 * visitor while inviting Google to index and rank the very pages we are saying
 * are not open. A page that ranks and then disappoints is worse than a page
 * that does not rank yet.
 *
 * These are excluded from `sitemap.xml` and disallowed in `robots.txt`. Both,
 * not either: a sitemap omission is only a hint, and `Disallow` alone can still
 * leave a URL indexed without a snippet if something links to it.
 *
 * Delete an entry here the same day the section opens.
 */
export const unindexedPrefixes: string[] = [
  ...unreleasedSections.map((section) => section.prefix),
  "/products",
];

/** Whether a path sits under any prefix that should stay out of search. */
export function isUnindexed(path: string): boolean {
  return unindexedPrefixes.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
}

/**
 * The section a link falls into, or `null` if the route is live.
 *
 * The prefix has to be followed by a boundary, otherwise `/technologies-old`
 * would be swallowed by the `/technology`… — it would not, but `/research` and
 * a hypothetical `/researchers` is exactly that trap, so the boundary check is
 * there rather than a bare `startsWith`.
 */
export function findUnreleasedSection(href: string): UnreleasedSection | null {
  // Query strings and hashes are not part of the path.
  const path = href.split("?")[0].split("#")[0];

  return (
    unreleasedSections.find(
      (section) => path === section.prefix || path.startsWith(`${section.prefix}/`),
    ) ?? null
  );
}
