/**
 * Copy for the about page.
 *
 * Same integrity rule as the sustainability content: this page describes what
 * the company is, how it thinks and what it is building — never a result that
 * has not been measured. There are deliberately no counts, no percentages and
 * no dates. Where a reader would expect a statistic, the page states a
 * descriptor instead, because a descriptor can be true today.
 */

/** Scroll chapters. `id` must match the `id` on the corresponding <section>. */
export const aboutChapters: { id: string; label: string }[] = [
  { id: "who", label: "Who we are" },
  { id: "why", label: "Why we exist" },
  { id: "build", label: "What we build" },
  { id: "system", label: "The system" },
  { id: "philosophy", label: "Philosophy" },
  { id: "mission", label: "Mission" },
  { id: "vision", label: "Vision" },
  { id: "values", label: "Values" },
  { id: "leadership", label: "Leadership" },
  { id: "stack", label: "Technology" },
  { id: "bridge", label: "Physical to digital" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "sustainability", label: "Sustainability" },
  { id: "research", label: "Research" },
  { id: "process", label: "How we work" },
  { id: "future", label: "Where we're going" },
  { id: "evidence", label: "Evidence" },
];

/** The disciplines the company works across. Rendered as hero metadata. */
export const focusDomains: string[] = [
  "Food",
  "Water",
  "Biology",
  "Engineering",
  "AI",
];

/** Section 02. The intersection Aero Intelli operates at. */
export const intersectionFields: string[] = [
  "Agriculture",
  "Aquaculture",
  "Water",
  "Biology",
  "Engineering",
  "Automation",
  "Artificial intelligence",
  "Data",
];

/**
 * Section 03. Pressures on production systems.
 *
 * Written as conditions rather than statistics. Each one is observable without
 * a citation, which is why none of them carries a number.
 */
export const systemPressures: string[] = [
  "Water availability",
  "Resource constraints",
  "Agricultural land efficiency",
  "Food-system resilience",
  "Climate variability",
  "Aquaculture waste management",
  "Energy consumption",
  "Fragmented production systems",
  "Operational complexity",
];

/** The response, stated as a belief rather than a claim about outcomes. */
export const responseStatement =
  "We believe the next generation of food and resource infrastructure will be more controlled, measurable, connected and intelligent.";

/** The equation animated in the response section. */
export const responseTerms: string[] = ["Biology", "Engineering", "Water", "Data", "AI"];
export const responseResult = "Intelligent systems";

export type BuildDomain = {
  id: string;
  index: string;
  name: string;
  summary: string;
  capabilities: string[];
};

/** Section 04. The technology domains, as platforms rather than services. */
export const buildDomains: BuildDomain[] = [
  {
    id: "cultivation",
    index: "01",
    name: "Controlled cultivation",
    summary:
      "Soilless production where the root zone, the nutrient supply and the surrounding environment are all engineered rather than inherited from the site.",
    capabilities: [
      "NFT hydroponics",
      "Aeroponics",
      "Controlled-environment cultivation",
      "Crop monitoring",
      "Nutrient management",
    ],
  },
  {
    id: "aquaculture",
    index: "02",
    name: "Aquaculture",
    summary:
      "Recirculating systems that treat water as a managed asset, so the same volume can carry a production cycle instead of being exchanged for fresh intake.",
    capabilities: [
      "Recirculating aquaculture systems",
      "Water treatment",
      "Biofiltration",
      "Solids management",
      "Aquaculture monitoring",
    ],
  },
  {
    id: "water",
    index: "03",
    name: "Water systems",
    summary:
      "Treatment and recirculation engineered for the specific load a facility places on it, with monitoring designed in rather than retrofitted.",
    capabilities: [
      "Water treatment",
      "Recirculation",
      "Monitoring",
      "Resource recovery",
      "Efficient water utilisation",
    ],
  },
  {
    id: "intelligence",
    index: "04",
    name: "Intelligence",
    summary:
      "The layer that turns what a facility measures into what an operator should do next, and records the result so the next decision is better informed.",
    capabilities: [
      "Sensors",
      "Data platforms",
      "AI analytics",
      "Predictive systems",
      "Automation",
      "Optimisation",
    ],
  },
  {
    id: "integration",
    index: "05",
    name: "Resource integration",
    summary:
      "Designing water, nutrients, energy and biomass as one connected budget, so an output from one process can become an input to another.",
    capabilities: ["Water", "Nutrients", "Energy", "Biomass", "Food production"],
  },
];

/**
 * Section 05. The pinned system diagram, in the order a resource travels.
 * The last node feeds the first — the loop is the point of the section.
 */
export const systemSequence: { id: string; label: string; note: string }[] = [
  { id: "water", label: "Water", note: "Intake and stored volume" },
  { id: "treatment", label: "Treatment", note: "Solids, biology, conditioning" },
  { id: "ras", label: "RAS", note: "Aquaculture production" },
  { id: "nutrients", label: "Nutrients", note: "Recovered from the fish loop" },
  { id: "cultivation", label: "Cultivation", note: "Hydroponics and aeroponics" },
  { id: "food", label: "Food", note: "The output the system exists for" },
  { id: "data", label: "Data", note: "What every stage reports" },
  { id: "ai", label: "AI", note: "Interpretation and prediction" },
  { id: "optimisation", label: "Optimisation", note: "Acted on, then measured" },
  { id: "recovery", label: "Recovery", note: "Returns to intake" },
];

export type Principle = { index: string; title: string; body: string };

/** Section 06. How the company thinks. */
export const principles: Principle[] = [
  {
    index: "01",
    title: "Systems before silos",
    body: "Food, water, energy and biological production should not always be designed independently. Treating them as one system is what makes an output from one process available as an input to another.",
  },
  {
    index: "02",
    title: "Measure before optimising",
    body: "What cannot be measured cannot be intelligently managed. A change to an operating point is only an improvement if the system was instrumented well enough to prove it.",
  },
  {
    index: "03",
    title: "Intelligence at the core",
    body: "Sensors, data and AI exist to support better operational decisions — not to produce dashboards that nobody acts on.",
  },
  {
    index: "04",
    title: "Engineering for reality",
    body: "Technology has to work outside presentations: in farms, facilities and production environments, under real operating conditions and real failure modes.",
  },
  {
    index: "05",
    title: "Efficiency by design",
    body: "Resource efficiency belongs in the system architecture. Added afterwards it becomes a constraint to work around rather than a property of the design.",
  },
];

export const missionStatement =
  "To engineer intelligent and resource-efficient systems that improve how food, water and biological resources are produced, managed and sustained.";

export const missionPillars: string[] = ["Food", "Water", "Biology", "Intelligence", "Resources"];

export const visionStatement =
  "A future where food and resource systems are connected, intelligent, measurable and designed for long-term resilience.";

export type Value = { index: string; title: string; body: string };

/** Section 09. Six, not twelve. */
export const coreValues: Value[] = [
  { index: "01", title: "Engineering", body: "Build with technical discipline." },
  { index: "02", title: "Intelligence", body: "Use data to understand and improve systems." },
  { index: "03", title: "Sustainability", body: "Design around responsible resource use." },
  { index: "04", title: "Integrity", body: "Build with transparency and measurable evidence." },
  {
    index: "05",
    title: "Innovation",
    body: "Continuously explore better ways to solve complex problems.",
  },
  {
    index: "06",
    title: "Resilience",
    body: "Design systems capable of adapting to changing conditions.",
  },
];

export const founder = {
  name: "Bunga Krishanth",
  // Matches the roster entry below verbatim. Two different titles for the same
  // person on the same page is the kind of small inconsistency that makes a
  // reader doubt everything else on it.
  role: "Founder & Chief Executive Officer (CEO)",
  message:
    "Aero Intelli exists because the systems that produce food and manage water are still largely designed in isolation from one another, and largely operated without the measurement needed to improve them. We are building at the point where engineering, biology and intelligence meet — carefully, and with evidence.",
  caption:
    "Building Aero Intelli at the intersection of technology, biology and resource systems.",
};

export type TeamMember = { name: string; role: string };

/**
 * The leadership team.
 *
 * Name and role only. No portraits — the site does not have any, and a stock
 * photograph standing in for a real person is worse than a plain register. No
 * biographies either, for the same reason the rest of this file carries no
 * metrics: anything written here would be unverifiable filler.
 *
 * The founder appears here as well as in the fuller treatment above. The
 * duplication is intentional: a roster that omits him reads as "everyone except
 * the person you just read about".
 *
 * Titles are written out in full rather than as initials. "CTO" and "MD" are
 * read fluently by someone who already works in this world and not at all by a
 * grower, a municipal engineer or a student reading the page for the first
 * time, and those are the readers this page is written for. Spelled out, the
 * titles also carry meaning in a search result and to a screen reader, neither
 * of which expands an acronym for you.
 *
 * The abbreviation is kept in parentheses after the long form where it is the
 * name people actually use in conversation, so nothing is lost for the reader
 * who was scanning for "CEO".
 */
export const teamMembers: TeamMember[] = [
  { name: "Bunga Krishanth", role: "Founder & Chief Executive Officer (CEO)" },
  { name: "Arunasree", role: "Co-Founder" },
  { name: "Ramesh", role: "Chief Technology Officer (CTO)" },
  { name: "Krishna Veni", role: "Managing Director (MD)" },
  { name: "Karuna Nidhi", role: "Chief Financial Officer (CFO)" },
  { name: "Naresh", role: "Lead Electrical Engineer" },
];

/** Disciplines represented in the team. Described, not counted. */
export const teamDisciplines: string[] = [
  "Systems engineering",
  "Aquaculture biology",
  "Water treatment",
  "Controlled-environment agriculture",
  "Instrumentation and control",
  "Data and software",
];

export type StackLayer = { id: string; name: string; items: string[] };

/** Section 11. Physical up to decision. Drawn as a stack. */
export const technologyStack: StackLayer[] = [
  {
    id: "physical",
    name: "Physical systems",
    items: ["Pumps", "Filters", "Tanks", "Cultivation systems"],
  },
  { id: "sensing", name: "Sensors", items: ["Instrumentation", "Signal conditioning", "Telemetry"] },
  { id: "data", name: "Data layer", items: ["Monitoring", "Historical data", "System state"] },
  { id: "intelligence", name: "Intelligence layer", items: ["AI", "Prediction", "Alerts"] },
  { id: "decision", name: "Decision layer", items: ["Automation", "Operations", "Optimisation"] },
];

export const physicalWorld: string[] = [
  "Water",
  "Fish",
  "Plants",
  "Nutrients",
  "Equipment",
  "Environment",
];

export const digitalWorld: string[] = [
  "Sensors",
  "Data",
  "AI",
  "Models",
  "Predictions",
  "Automation",
];

/**
 * The hero chain: the five links the company works along, in order.
 *
 * Each descriptor states what the link is, never how well it performs. Same
 * rule as the rest of this file — nothing here would need verifying before it
 * could go up, because none of it is a measurement or a claim.
 */
export const heroChain: { id: string; label: string; description: string }[] = [
  { id: "water", label: "Water", description: "Sourced, treated and recirculated." },
  { id: "biology", label: "Biology", description: "Fish, plants and the living load they place on a system." },
  { id: "cultivation", label: "Cultivation", description: "Recirculating aquaculture, hydroponic and aeroponic systems." },
  { id: "data", label: "Data", description: "Sensors reading the system continuously rather than on a round." },
  { id: "intelligence", label: "Intelligence", description: "Models that turn those readings into a decision." },
];

/** Section 13. The ecosystem, kept to what Aero Intelli actually works on. */
export const ecosystemDomains: string[] = [
  "Food",
  "Water",
  "Aquaculture",
  "Hydroponics",
  "Aeroponics",
  "AI",
  "Automation",
  "Research",
  "Sustainability",
];

/** Section 14. A teaser only. The dedicated page carries the detail. */
export const sustainabilityThemes: string[] = [
  "Water efficiency",
  "Resource recovery",
  "Controlled production",
  "Circularity",
  "Energy awareness",
  "Measurement",
];

/** Section 15. Directions under development. Stated as areas, not deliverables. */
export const researchDirections: string[] = [
  "AI-enabled RAS",
  "Intelligent hydroponics",
  "Aeroponics",
  "Advanced water systems",
  "Digital twins",
  "Predictive maintenance",
  "Automation",
  "Resource recovery",
];

export type ProcessStep = { index: string; title: string; body: string };

/** Section 16. The operating method. */
export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Understand",
    body: "Establish the biological, operational and resource requirements the system actually has to meet.",
  },
  {
    index: "02",
    title: "Engineer",
    body: "Design the physical and digital architecture together, so instrumentation is part of the system rather than an addition to it.",
  },
  {
    index: "03",
    title: "Integrate",
    body: "Connect equipment, sensors, software and the operational routines the facility runs on.",
  },
  {
    index: "04",
    title: "Monitor",
    body: "Collect and interpret data from the system as it operates, under real conditions.",
  },
  {
    index: "05",
    title: "Optimise",
    body: "Improve performance against what was measured, and measure again.",
  },
];

export type Horizon = { id: string; label: string; items: string[] };

/** Section 17. Direction without dates — nothing here is a committed timeline. */
export const horizons: Horizon[] = [
  {
    id: "today",
    label: "Today",
    items: ["Controlled food production", "RAS", "Hydroponics", "Aeroponics", "Water systems"],
  },
  {
    id: "next",
    label: "Next",
    items: ["AI monitoring", "Predictive analytics", "Automation", "Digital twins"],
  },
  {
    id: "future",
    label: "Future",
    items: [
      "Connected production ecosystems",
      "Autonomous optimisation",
      "Integrated food-water systems",
      "Intelligent resource infrastructure",
    ],
  },
];

/** Section 18. What a performance or sustainability claim has to rest on. */
export const evidenceBasis: string[] = [
  "Operational data",
  "System measurements",
  "Project-specific results",
  "Testing",
  "Documentation",
  "Verification where applicable",
];

/**
 * The strip that closes the hero.
 *
 * Registration, place and field — three facts already published in the terms of
 * use and in the footer, restated here because a corporate identity page is the
 * one place a reader goes looking for them. Same rule as the rest of this file:
 * nothing that would need verifying before it could go up.
 */
export const heroMeta: { term: string; description: string }[] = [
  { term: "Registered as", description: "Aero Intelli Private Limited" },
  { term: "Based in", description: "Hyderabad, India" },
  { term: "Field", description: "Food, water, aquaculture, cultivation, AI" },
];

/**
 * Section 19. Descriptors rather than statistics.
 *
 * Deliberately no counts of projects, staff or litres saved. Each entry states
 * something that is true now and needs no verification to publish.
 */
export const keyFacts: { term: string; description: string }[] = [
  {
    term: "Technology domains",
    description: "Food · Water · Aquaculture · Controlled cultivation · AI",
  },
  { term: "Core approach", description: "Engineering + data + biology" },
  { term: "Operating model", description: "Design · Integrate · Monitor · Optimise" },
  { term: "Focus", description: "Resource-efficient production systems" },
];
