/**
 * The eight domains of the Aquaculture Knowledge Center.
 *
 * The thirty sections are ordered the way somebody learns the subject rather
 * than alphabetically: what aquaculture is, then how a fish is produced, then
 * the water and the health that decide whether it survives, then the systems it
 * is produced in, then the environments those systems sit in, then two
 * production types that behave unlike the rest, then where the field is going,
 * then what happens after harvest.
 *
 * Domains exist for navigation, not for the URL. A section lives at
 * `/knowledge/aquaculture/<slug>` with no domain segment in between, because a
 * reader who has been given a link should not have to know which of eight
 * buckets we filed it under, and because moving a section between domains later
 * must not break an address.
 */
export type DomainId =
  | "foundations"
  | "production"
  | "water-health"
  | "farming-systems"
  | "environments"
  | "specific-production"
  | "future"
  | "value-research";

export type Domain = {
  id: DomainId;
  number: string;
  title: string;
  summary: string;
  /** Section slugs, in reading order. The single source of section ordering. */
  sections: string[];
};

export const domains: Domain[] = [
  {
    id: "foundations",
    number: "01",
    title: "Foundations",
    summary: "What aquaculture is, the systems it is practised in, the species it works with and the animal itself.",
    sections: ["fundamentals", "systems", "species", "fish-biology"],
  },
  {
    id: "production",
    number: "02",
    title: "Production",
    summary: "The production chain from broodstock and seed through nursery and grow-out to the feed that drives it.",
    sections: ["hatchery", "nursery", "grow-out", "feed-nutrition"],
  },
  {
    id: "water-health",
    number: "03",
    title: "Water and Health",
    summary: "The water the animal lives in, the diseases that reach it, the barriers that keep them out and the genetics behind resilience.",
    sections: ["water-quality", "fish-health", "biosecurity", "breeding-genetics"],
  },
  {
    id: "farming-systems",
    number: "04",
    title: "Farming Systems",
    summary: "Six ways of holding water and animals, each with a different exchange of control, capital and risk.",
    sections: ["ras", "biofloc", "pond", "cage", "raceway", "aquaponics"],
  },
  {
    id: "environments",
    number: "05",
    title: "Aquatic Environments",
    summary: "Marine, brackishwater, freshwater and coldwater production, and what the water itself dictates.",
    sections: ["marine", "brackishwater", "freshwater", "coldwater"],
  },
  {
    id: "specific-production",
    number: "06",
    title: "Specific Production",
    summary: "Two production types whose biology and economics diverge far enough from finfish to need their own treatment.",
    sections: ["shrimp", "ornamental"],
  },
  {
    id: "future",
    number: "07",
    title: "Future Aquaculture",
    summary: "Sustainability, engineering, automation and intelligence, and the economics that decide what gets built.",
    sections: ["sustainable", "engineering", "automation-ai", "economics"],
  },
  {
    id: "value-research",
    number: "08",
    title: "Value and Research",
    summary: "What happens to the animal after harvest, and where the field's open questions are.",
    sections: ["harvest", "research"],
  },
];

/** Every section slug in reading order, derived so the two cannot disagree. */
export const sectionOrder: string[] = domains.flatMap((domain) => domain.sections);

export function domainOf(slug: string): Domain | undefined {
  return domains.find((domain) => domain.sections.includes(slug));
}
