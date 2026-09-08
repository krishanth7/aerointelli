import type { KnowledgeArea, Topic } from "../types";
import { domains, domainOf, sectionOrder, type Domain, type DomainId } from "./domains";
import { fundamentals } from "./01-fundamentals";
import { systems } from "./02-systems";
import { species } from "./03-species";
import { fishBiology } from "./04-fish-biology";
import { hatchery } from "./05-hatchery";
import { nursery } from "./06-nursery";
import { growOut } from "./07-grow-out";
import { feedNutrition } from "./08-feed-nutrition";
import { waterQuality } from "./09-water-quality";
import { fishHealth } from "./10-fish-health";
import { biosecurity } from "./11-biosecurity";
import { breedingGenetics } from "./12-breeding-genetics";
import { ras } from "./13-ras";
import { biofloc } from "./14-biofloc";
import { pond } from "./15-pond";
import { cage } from "./16-cage";
import { raceway } from "./17-raceway";
import { aquaponics } from "./18-aquaponics";
import { marine } from "./19-marine";
import { brackishwater } from "./20-brackishwater";
import { freshwater } from "./21-freshwater";
import { coldwater } from "./22-coldwater";
import { shrimp } from "./23-shrimp";
import { ornamental } from "./24-ornamental";
import { sustainable } from "./25-sustainable";
import { engineering } from "./26-engineering";
import { automationAi } from "./27-automation-ai";
import { economics } from "./28-economics";
import { harvest } from "./29-harvest";
import { research } from "./30-research";

export { domains, domainOf, sectionOrder };
export type { Domain, DomainId };

/**
 * The thirty aquaculture sections, in reading order.
 *
 * The same `KnowledgeArea` shape as the RAS tree, deliberately: the two bodies
 * of knowledge differ in subject, not in structure, and sharing the type means
 * they share the article renderer rather than growing a second one that drifts.
 */
export const aquacultureSections: KnowledgeArea[] = [
  fundamentals,
  systems,
  species,
  fishBiology,
  hatchery,
  nursery,
  growOut,
  feedNutrition,
  waterQuality,
  fishHealth,
  biosecurity,
  breedingGenetics,
  ras,
  biofloc,
  pond,
  cage,
  raceway,
  aquaponics,
  marine,
  brackishwater,
  freshwater,
  coldwater,
  shrimp,
  ornamental,
  sustainable,
  engineering,
  automationAi,
  economics,
  harvest,
  research,
];

export function findSection(slug: string): KnowledgeArea | undefined {
  return aquacultureSections.find((section) => section.slug === slug);
}

export function sectionsIn(domain: Domain): KnowledgeArea[] {
  return domain.sections
    .map((slug) => findSection(slug))
    .filter((found): found is KnowledgeArea => Boolean(found));
}

export function relatedSections(section: KnowledgeArea): KnowledgeArea[] {
  return section.related
    .map((slug) => findSection(slug))
    .filter((found): found is KnowledgeArea => Boolean(found));
}

/**
 * The previous and next section in reading order.
 *
 * Ordering comes from `sectionOrder`, which is derived from the domain list, so
 * the pagination and the sidebar can never disagree about what follows what.
 */
export function neighbours(slug: string): {
  previous?: KnowledgeArea;
  next?: KnowledgeArea;
} {
  const index = sectionOrder.indexOf(slug);
  if (index === -1) return {};

  return {
    previous: index > 0 ? findSection(sectionOrder[index - 1]) : undefined,
    next: index < sectionOrder.length - 1 ? findSection(sectionOrder[index + 1]) : undefined,
  };
}

export const aquacultureTopics: Topic[] = Array.from(
  new Set(aquacultureSections.flatMap((section) => section.topics)),
);

/**
 * The flattened index the client-side search reads.
 *
 * Built once at module scope and shipped as data rather than being derived in
 * the browser, because the alternative is sending thirty full articles to the
 * client so it can throw away everything but the titles. Species, tags and
 * topics are folded into one lowercase haystack so a query for "murrel",
 * "ammonia" or "biofilter" matches without three separate passes.
 */
export type SearchEntry = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  haystack: string;
};

export const searchIndex: SearchEntry[] = aquacultureSections.map((section) => {
  const domain = domainOf(section.slug);
  const headings = section.sections.map((part) => part.heading).join(" ");

  return {
    slug: section.slug,
    number: section.number,
    title: section.title,
    category: domain ? domain.title : "Aquaculture",
    description: section.navSummary,
    haystack: [
      section.title,
      section.navSummary,
      section.summary,
      section.tags.join(" "),
      section.topics.join(" "),
      (section.species ?? []).join(" "),
      headings,
      domain?.title ?? "",
    ]
      .join(" ")
      .toLowerCase(),
  };
});
