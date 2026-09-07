/**
 * The RAS Knowledge Center map.
 *
 * All thirty-five sections are declared because the map is the product — an
 * engineer should be able to see the whole shape of the subject on one page and
 * know what is coming. But a section is only navigable once it holds a
 * published article, and the four layers below are the organising idea rather
 * than decoration: learn the system, design the system, operate the system,
 * then model it.
 *
 * `articles` holds slugs. A section with an empty list renders as a heading with
 * a status, not a link, which is the only honest way to publish a map of
 * something largely unwritten.
 */

export type Layer = "learn" | "design" | "operate" | "calculate";

export const layerMeta: Record<Layer, { title: string; intro: string }> = {
  learn: {
    title: "Learn",
    intro: "What a recirculating system is, what the water is doing, and why any of it matters.",
  },
  design: {
    title: "Design",
    intro: "The engineering: tanks, flow, filtration, gas transfer and the plant around them.",
  },
  operate: {
    title: "Operate",
    intro: "Running the farm — stock, feed, health, maintenance, failure and recovery.",
  },
  calculate: {
    title: "Calculate",
    intro: "Reference data and worked methods behind the numbers used in planning.",
  },
};

export type KnowledgeCategory = {
  slug: string;
  title: string;
  summary: string;
  layer: Layer;
  articles: string[];
};

export const rasCategories: KnowledgeCategory[] = [
  {
    slug: "fundamentals",
    title: "RAS Fundamentals",
    summary: "What a recirculating system is, how the loop works, and where it does and does not make sense.",
    layer: "learn",
    articles: ["what-is-ras"],
  },
  {
    slug: "system-design",
    title: "System Architecture",
    summary: "Process flow, loop configurations, redundancy and biosecurity zoning.",
    layer: "design",
    articles: [],
  },
  { slug: "tanks", title: "Culture Tanks", summary: "Geometry, inlets, drains, flow patterns and self-cleaning behaviour.", layer: "design", articles: [] },
  { slug: "hydraulics", title: "Hydraulics", summary: "Flow, turnover, retention time, head loss and pump duty.", layer: "design", articles: [] },
  { slug: "mechanical-filtration", title: "Mechanical Filtration", summary: "Drum filters, separators and settlement — capturing solids before they dissolve.", layer: "design", articles: [] },
  {
    slug: "biofiltration",
    title: "Biofiltration",
    summary: "Nitrification, media, reactor types, startup and the ways a biofilter fails.",
    layer: "design",
    articles: [],
  },
  {
    slug: "tan",
    title: "TAN and Ammonia",
    summary: "Where ammonia comes from, what makes it toxic, and how much a system produces.",
    layer: "learn",
    articles: ["what-is-tan"],
  },
  { slug: "tss", title: "Solids and TSS", summary: "Solids production, loading and sludge handling.", layer: "design", articles: [] },
  { slug: "oxygen", title: "Oxygen Management", summary: "Demand, transfer, supply and the failure that kills fastest.", layer: "design", articles: [] },
  { slug: "degassing", title: "Degassing and CO2", summary: "Carbon dioxide accumulation, stripping and degasser placement.", layer: "design", articles: [] },
  { slug: "disinfection", title: "UV and Disinfection", summary: "UV dose, ozone, ORP — and the difference between disinfection and sterilisation.", layer: "design", articles: [] },
  { slug: "water-quality", title: "Water Quality", summary: "Every parameter: what it is, how to measure it, and how it interacts with the rest.", layer: "learn", articles: [] },
  { slug: "fish-biology", title: "Fish Biology", summary: "Metabolism, growth, excretion, stress and the numbers that describe them.", layer: "learn", articles: [] },
  { slug: "murrel", title: "Murrel and Channa", summary: "Species-specific culture knowledge for murrel in recirculating systems.", layer: "operate", articles: [] },
  { slug: "feed", title: "Feed Management", summary: "Feed rate, conversion, quality, scheduling and waste.", layer: "operate", articles: [] },
  { slug: "biomass", title: "Biomass Management", summary: "Standing biomass, sampling, grading and production forecasting.", layer: "operate", articles: [] },
  { slug: "fish-health", title: "Fish Health and Biosecurity", summary: "Quarantine, handling, prevention and mortality investigation.", layer: "operate", articles: [] },
  { slug: "automation", title: "Automation", summary: "Sensors, control, alarms, logging and fail-safe behaviour.", layer: "design", articles: [] },
  { slug: "ai", title: "AI in Aquaculture", summary: "What is deployed, what is in research, and the line between the two.", layer: "design", articles: [] },
  { slug: "energy", title: "Energy", summary: "Where the power goes, and what a kilogram of fish costs to keep alive.", layer: "operate", articles: [] },
  { slug: "economics", title: "Economics", summary: "Capital, operating cost, margin and the assumptions behind every model.", layer: "operate", articles: [] },
  { slug: "farm-design", title: "Farm Design", summary: "Site, building, rooms, movement and biosecurity zoning.", layer: "design", articles: [] },
  { slug: "piping", title: "Piping", summary: "Materials, sizing, valves, manifolds and maintenance access.", layer: "design", articles: [] },
  { slug: "pumps", title: "Pumps", summary: "Types, curves, duty point, NPSH and redundancy.", layer: "design", articles: [] },
  { slug: "electrical", title: "Electrical and Backup", summary: "Load, critical circuits, standby power and alarm systems.", layer: "design", articles: [] },
  { slug: "operations", title: "Operations", summary: "Daily, weekly and monthly routines, and the logs that make them auditable.", layer: "operate", articles: [] },
  { slug: "troubleshooting", title: "Troubleshooting", summary: "Structured diagnosis: symptom, measurement, cause, direction, escalation.", layer: "operate", articles: [] },
  { slug: "startup", title: "Startup and Commissioning", summary: "Leak testing, calibration, biofilter cycling and gradual loading.", layer: "operate", articles: [] },
  { slug: "failure-modes", title: "Failure Modes", summary: "Cause, early warning, impact, detection, response and prevention.", layer: "operate", articles: [] },
  { slug: "safety", title: "Safety", summary: "Electrical, oxygen, ozone, chemical and confined-space hazards.", layer: "operate", articles: [] },
  { slug: "case-studies", title: "Case Studies", summary: "Real projects, with every figure labelled verified, reported, estimated or target.", layer: "calculate", articles: [] },
  { slug: "research", title: "Research Library", summary: "Papers, standards and technical reports, catalogued with their provenance.", layer: "calculate", articles: [] },
  { slug: "regulations", title: "Regulations", summary: "Indian fisheries and environmental requirements, each with a review date.", layer: "calculate", articles: [] },
  { slug: "glossary", title: "Glossary", summary: "The vocabulary, defined once and linked from everywhere.", layer: "calculate", articles: [] },
  { slug: "emergency", title: "Emergency Response", summary: "Power, oxygen, ammonia and equipment failure — what to do in the first minutes.", layer: "operate", articles: [] },
];

export const categoriesByLayer = (layer: Layer) =>
  rasCategories.filter((category) => category.layer === layer);

export function findCategory(slug: string) {
  return rasCategories.find((category) => category.slug === slug);
}

export const publishedCategoryCount = () =>
  rasCategories.filter((category) => category.articles.length > 0).length;
