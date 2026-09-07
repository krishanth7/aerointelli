import type { Difficulty, KnowledgeArea, Topic } from "../types";

import { fundamentals } from "./01-fundamentals";
import { systemArchitecture } from "./02-system-architecture";
import { cultureTanks } from "./03-culture-tanks";
import { hydraulics } from "./04-hydraulics";
import { mechanicalFiltration } from "./05-mechanical-filtration";
import { biofiltration } from "./06-biofiltration";
import { tanAmmonia } from "./07-tan-ammonia";
import { tssSolids } from "./08-tss-solids";
import { oxygen } from "./09-oxygen";
import { degassing } from "./10-degassing";
import { disinfection } from "./11-disinfection";
import { waterQuality } from "./12-water-quality";
import { fishBiology } from "./13-fish-biology";
import { murrel } from "./14-murrel";
import { feedManagement } from "./15-feed-management";
import { biomass } from "./16-biomass";
import { fishHealth } from "./17-fish-health";
import { automation } from "./18-automation";
import { aiAquaculture } from "./19-ai-aquaculture";
import { energy } from "./20-energy";
import { economics } from "./21-economics";
import { farmDesign } from "./22-farm-design";
import { piping } from "./23-piping";
import { pumps } from "./24-pumps";
import { electrical } from "./25-electrical";
import { operations } from "./26-operations";
import { troubleshooting } from "./27-troubleshooting";
import { commissioning } from "./28-commissioning";
import { failureModes } from "./29-failure-modes";
import { safety } from "./30-safety";

/** All thirty RAS knowledge areas, in numbered order. */
export const knowledgeAreas: KnowledgeArea[] = [
  fundamentals,
  systemArchitecture,
  cultureTanks,
  hydraulics,
  mechanicalFiltration,
  biofiltration,
  tanAmmonia,
  tssSolids,
  oxygen,
  degassing,
  disinfection,
  waterQuality,
  fishBiology,
  murrel,
  feedManagement,
  biomass,
  fishHealth,
  automation,
  aiAquaculture,
  energy,
  economics,
  farmDesign,
  piping,
  pumps,
  electrical,
  operations,
  troubleshooting,
  commissioning,
  failureModes,
  safety,
];

export function findArea(slug: string): KnowledgeArea | undefined {
  return knowledgeAreas.find((area) => area.slug === slug);
}

export function areasByTopic(topic: Topic): KnowledgeArea[] {
  return knowledgeAreas.filter((area) => area.topics.includes(topic));
}

export function areasByDifficulty(difficulty: Difficulty): KnowledgeArea[] {
  return knowledgeAreas.filter((area) => area.difficulty === difficulty);
}

/** Areas referenced by `related`, resolved and filtered to those that exist. */
export function relatedAreas(area: KnowledgeArea): KnowledgeArea[] {
  return area.related
    .map((slug) => findArea(slug))
    .filter((found): found is KnowledgeArea => Boolean(found));
}

/** Most recently updated first, then by number, for a "latest knowledge" listing. */
export function areasByRecency(): KnowledgeArea[] {
  return [...knowledgeAreas].sort((a, b) => {
    if (a.publishedAt === b.publishedAt) return a.number.localeCompare(b.number);
    return b.publishedAt.localeCompare(a.publishedAt);
  });
}

export const topicsInUse: Topic[] = Array.from(
  new Set(knowledgeAreas.flatMap((area) => area.topics)),
);
