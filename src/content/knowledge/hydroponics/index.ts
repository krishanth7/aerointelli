import type { KnowledgeArea, Topic } from "../types";
import {
  buildNavGroups,
  buildSearchIndex,
  neighboursOf,
  type NavGroup,
  type SearchEntry,
} from "../navigation";
import { domains, domainOf, sectionOrder, type Domain, type DomainId } from "./domains";
import { fundamentals } from "./01-fundamentals";
import { systems } from "./02-systems";
import { cropKnowledge } from "./03-crop-knowledge";
import { plantBiology } from "./04-plant-biology";
import { propagation } from "./05-propagation";
import { substrates } from "./06-substrates";
import { rootZone } from "./07-root-zone";
import { waterManagement } from "./08-water-management";
import { nutrients } from "./09-nutrients";
import { phEc } from "./10-ph-ec";
import { fertigation } from "./11-fertigation";
import { nft } from "./12-nft";
import { dwc } from "./13-dwc";
import { dripSystems } from "./14-drip-systems";
import { vertical } from "./15-vertical";
import { lighting } from "./16-lighting";
import { climateControl } from "./17-climate-control";
import { greenhouse } from "./18-greenhouse";
import { indoorFarming } from "./19-indoor-farming";
import { plantHealth } from "./20-plant-health";
import { pestManagement } from "./21-pest-management";
import { pollinationTraining } from "./22-pollination-training";
import { engineering } from "./23-engineering";
import { automationAi } from "./24-automation-ai";
import { operations } from "./25-operations";
import { energy } from "./26-energy";
import { economics } from "./27-economics";
import { farmDesign } from "./28-farm-design";
import { sustainable } from "./29-sustainable";
import { research } from "./30-research";

export { domains, domainOf, sectionOrder };
export type { Domain, DomainId };

/**
 * The thirty hydroponics sections, in reading order.
 *
 * The same `KnowledgeArea` shape as the RAS and aquaculture trees. Three bodies
 * of knowledge, one structure, one article renderer — a second shape would only
 * be a second thing to keep in step.
 */
export const hydroponicsSections: KnowledgeArea[] = [
  fundamentals,
  systems,
  cropKnowledge,
  plantBiology,
  propagation,
  substrates,
  rootZone,
  waterManagement,
  nutrients,
  phEc,
  fertigation,
  nft,
  dwc,
  dripSystems,
  vertical,
  lighting,
  climateControl,
  greenhouse,
  indoorFarming,
  plantHealth,
  pestManagement,
  pollinationTraining,
  engineering,
  automationAi,
  operations,
  energy,
  economics,
  farmDesign,
  sustainable,
  research,
];

export function findSection(slug: string): KnowledgeArea | undefined {
  return hydroponicsSections.find((section) => section.slug === slug);
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
export function neighbours(slug: string) {
  return neighboursOf(sectionOrder, hydroponicsSections, slug);
}

export const hydroponicsTopics: Topic[] = Array.from(
  new Set(hydroponicsSections.flatMap((section) => section.topics)),
);

/**
 * Navigation groups and the search index, built once at module scope.
 *
 * Shipped to the client as plain data rather than derived in the browser: the
 * alternative is sending thirty complete articles so the page can render thirty
 * titles.
 */
export const navGroups: NavGroup[] = buildNavGroups(domains, hydroponicsSections);

export const searchIndex: SearchEntry[] = buildSearchIndex(
  domains,
  hydroponicsSections,
  "Hydroponics",
);

export type { NavGroup, SearchEntry };
