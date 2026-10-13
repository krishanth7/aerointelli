/**
 * The twelve groups of the Hydroponics Knowledge Center.
 *
 * Ordered as a syllabus: the plant and the systems that hold it, then how a
 * crop is started, then the root zone and the water and nutrition that reach
 * it, then the four system types in detail, then the environment built around
 * them, then health, then the plant and the business built on top.
 *
 * The groups are contiguous over the section numbering on purpose. Reading
 * order is derived from this file, so a group that jumped around would make
 * "next section" move backwards through the numbers.
 *
 * Groups exist for navigation, not for the URL: a section lives at
 * `/knowledge/hydroponics/<slug>` with no group segment, so regrouping later
 * never breaks an address.
 */
export type DomainId =
  | "foundations"
  | "production"
  | "water-nutrition"
  | "systems"
  | "environment"
  | "health"
  | "engineering"
  | "automation"
  | "operations"
  | "economics"
  | "sustainability"
  | "research";

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
    summary:
      "What growing without soil actually requires, the systems that deliver it, the crops worth growing and the plant itself.",
    sections: ["fundamentals", "systems", "crop-knowledge", "plant-biology"],
  },
  {
    id: "production",
    number: "02",
    title: "Production",
    summary:
      "Starting a crop: seed to transplant, the media that hold the roots, and the root zone those two decisions create.",
    sections: ["propagation", "substrates", "root-zone"],
  },
  {
    id: "water-nutrition",
    number: "03",
    title: "Water and Nutrition",
    summary:
      "Source water, mineral nutrition, the two measurements that describe a solution, and the plant that delivers it.",
    sections: ["water-management", "nutrients", "ph-ec", "fertigation"],
  },
  {
    id: "systems",
    number: "04",
    title: "Hydroponic Systems",
    summary:
      "The four families in technical detail — thin film, standing water, substrate irrigation and vertical arrangement.",
    sections: ["nft", "dwc", "drip-systems", "vertical"],
  },
  {
    id: "environment",
    number: "05",
    title: "Environment",
    summary:
      "Light, climate and the two structures built to control them, from a polyhouse to a fully enclosed room.",
    sections: ["lighting", "climate-control", "greenhouse", "indoor-farming"],
  },
  {
    id: "health",
    number: "06",
    title: "Crop Health",
    summary:
      "Diagnosing a struggling crop, keeping pests out in the first place, and the hand work that fruiting crops require.",
    sections: ["plant-health", "pest-management", "pollination-training"],
  },
  {
    id: "engineering",
    number: "07",
    title: "Engineering",
    summary: "The plant behind the plants: reservoirs, pumps, pipework, power and the redundancy that protects a crop.",
    sections: ["engineering"],
  },
  {
    id: "automation",
    number: "08",
    title: "Automation and Intelligence",
    summary: "Sensing, control, data and the analysis built on it.",
    sections: ["automation-ai"],
  },
  {
    id: "operations",
    number: "09",
    title: "Operations",
    summary: "The daily operating system of a working farm, and the energy it consumes to run.",
    sections: ["operations", "energy"],
  },
  {
    id: "economics",
    number: "10",
    title: "Commercial",
    summary: "What a farm costs, what it returns, and how a facility is laid out to make that work.",
    sections: ["economics", "farm-design"],
  },
  {
    id: "sustainability",
    number: "11",
    title: "Sustainability",
    summary: "Water, nutrients, energy, substrate and packaging, treated as resources to be accounted for.",
    sections: ["sustainable"],
  },
  {
    id: "research",
    number: "12",
    title: "Research and Innovation",
    summary: "Where controlled-environment agriculture is heading, and which of it is still an open question.",
    sections: ["research"],
  },
];

/** Every section slug in reading order, derived so the two cannot disagree. */
export const sectionOrder: string[] = domains.flatMap((domain) => domain.sections);

export function domainOf(slug: string): Domain | undefined {
  return domains.find((domain) => domain.sections.includes(slug));
}
