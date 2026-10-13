import type { KnowledgeArea } from "./types";

/**
 * The shape the navigation components read.
 *
 * Deliberately plain data — slugs and titles, no functions and no full
 * articles. The sidebar, the mobile sheet and the search box are client
 * components, so anything they take has to cross the server boundary as
 * serialisable props, and shipping thirty complete articles to the browser so
 * it can render thirty titles would be absurd.
 */
export type NavItem = { slug: string; title: string };

export type NavGroup = {
  id: string;
  number: string;
  title: string;
  items: NavItem[];
};

export type DomainLike = {
  id: string;
  number: string;
  title: string;
  summary: string;
  sections: string[];
};

/** Resolves a domain list into the navigation groups, dropping unwritten slugs. */
export function buildNavGroups(
  domains: DomainLike[],
  sections: KnowledgeArea[],
): NavGroup[] {
  const byslug = new Map(sections.map((section) => [section.slug, section]));

  return domains
    .map((domain) => ({
      id: domain.id,
      number: domain.number,
      title: domain.title,
      items: domain.sections
        .map((slug) => byslug.get(slug))
        .filter((found): found is KnowledgeArea => Boolean(found))
        .map((found) => ({ slug: found.slug, title: found.title })),
    }))
    .filter((group) => group.items.length > 0);
}

/**
 * A flattened, lowercase index for the client-side search.
 *
 * Species, tags, topics and section headings are folded into one haystack so a
 * query for "lettuce", "EC" or "fertigation" matches without three passes.
 */
export type SearchEntry = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  haystack: string;
};

export function buildSearchIndex(
  domains: DomainLike[],
  sections: KnowledgeArea[],
  fallbackCategory: string,
): SearchEntry[] {
  const categoryOf = (slug: string) =>
    domains.find((domain) => domain.sections.includes(slug))?.title ?? fallbackCategory;

  return sections.map((section) => ({
    slug: section.slug,
    number: section.number,
    title: section.title,
    category: categoryOf(section.slug),
    description: section.navSummary,
    haystack: [
      section.title,
      section.navSummary,
      section.summary,
      section.tags.join(" "),
      section.topics.join(" "),
      (section.species ?? []).join(" "),
      section.sections.map((part) => part.heading).join(" "),
      categoryOf(section.slug),
    ]
      .join(" ")
      .toLowerCase(),
  }));
}

/** Previous and next in reading order, given the flattened slug order. */
export function neighboursOf(
  order: string[],
  sections: KnowledgeArea[],
  slug: string,
): { previous?: KnowledgeArea; next?: KnowledgeArea } {
  const index = order.indexOf(slug);
  if (index === -1) return {};

  const find = (target?: string) => sections.find((section) => section.slug === target);

  return {
    previous: index > 0 ? find(order[index - 1]) : undefined,
    next: index < order.length - 1 ? find(order[index + 1]) : undefined,
  };
}
