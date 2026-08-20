/**
 * Home page copy.
 *
 * Same standing rule as `about.ts`: no counts, no percentages, no dates, no
 * claim that would need verifying before it could go up. Aero Intelli has not
 * yet published a measurement from an operating project, so this page describes
 * what the company builds and how it builds it, and says plainly where the
 * numbers are not. A home page is the most tempting place on a site to invent a
 * statistic and the worst place to be caught having done it.
 */

/** 01 — Hero. Three authored lines; the reveal animates per authored line. */
export const heroHeadline: string[] = [
  "Engineering the future",
  "of food, water and",
  "sustainable production.",
];

export const heroLede =
  "Aero Intelli designs aquaculture, controlled-environment cultivation and water systems as one instrumented whole — the tanks and the trays, the sensors reading them, and the intelligence that acts on what is read.";

/**
 * The layered scene beside the hero headline.
 *
 * Read bottom to top: the physical system is the base, instrumentation sits on
 * it, and intelligence sits on that. Ordered deliberately — the company's
 * position is that the software is worth nothing without the layer under it.
 */
export const heroLayers: { id: string; label: string; description: string }[] = [
  {
    id: "intelligence",
    label: "Intelligence",
    description: "Models that turn readings into a decision.",
  },
  {
    id: "instrumentation",
    label: "Instrumentation",
    description: "Sensors reading the system continuously.",
  },
  {
    id: "system",
    label: "Physical system",
    description: "Water, biology and the equipment around them.",
  },
];

/** 02 — What the company builds. */
export const capabilities: {
  id: string;
  index: string;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    id: "aquaculture",
    index: "01",
    title: "Recirculating aquaculture",
    description:
      "Closed-loop fish production, where water is treated and returned rather than replaced.",
    href: "/solutions/recirculating-aquaculture-systems",
  },
  {
    id: "cultivation",
    index: "02",
    title: "Hydroponics and aeroponics",
    description:
      "Soil-free cultivation with the root zone, nutrients and climate held under control.",
    href: "/solutions/nft-hydroponics",
  },
  {
    id: "water",
    index: "03",
    title: "Water technology",
    description:
      "Treatment, filtration and recirculation designed as part of the system, not bolted to it.",
    href: "/solutions/water-technology",
  },
  {
    id: "intelligence",
    index: "04",
    title: "Monitoring and automation",
    description:
      "Continuous measurement, and control that responds to it without waiting for a round.",
    href: "/solutions/ai-monitoring",
  },
];

/**
 * 03 — Why one engineered system.
 *
 * Stated as a position the company holds, not as a result it has measured.
 */
export const positions: { id: string; title: string; body: string }[] = [
  {
    id: "whole",
    title: "The system is the unit",
    body: "A pump, a sensor and a model bought separately are three products. Specified together they are one system, and only the system has behaviour worth predicting.",
  },
  {
    id: "measure",
    title: "Instrument before you optimise",
    body: "A change to an uninstrumented system is a change, not an improvement. Measurement comes first because without it there is no baseline to improve against.",
  },
  {
    id: "bounded",
    title: "Bounded on purpose",
    body: "Food, water, cultivation and the intelligence over them. Adjacent markets are adjacent, and the company does not claim to operate in them.",
  },
];

/** 04 — The chain, top to bottom. Mirrors the about page's hero chain. */
export const stack: { id: string; layer: string; items: string[] }[] = [
  { id: "decision", layer: "Decision", items: ["Automation", "Operations", "Optimisation"] },
  { id: "intelligence", layer: "Intelligence", items: ["Models", "Prediction", "Alerts"] },
  { id: "data", layer: "Data", items: ["Sensors", "Telemetry", "History"] },
  { id: "physical", layer: "Physical", items: ["Water", "Biology", "Equipment"] },
];

/** 05 — How the company works. The fifth step returns to the fourth. */
export const method: { index: string; title: string; body: string }[] = [
  {
    index: "01",
    title: "Understand",
    body: "Site, species or crop, water source, constraints and what the operation is actually trying to produce.",
  },
  {
    index: "02",
    title: "Engineer",
    body: "The system specified as a whole — flow, treatment, climate and control designed against each other rather than in sequence.",
  },
  {
    index: "03",
    title: "Integrate",
    body: "Equipment, instrumentation and software commissioned together, so the data path exists from the first day of operation.",
  },
  {
    index: "04",
    title: "Monitor",
    body: "Continuous measurement against the design intent, which is what makes any later claim about performance checkable.",
  },
  {
    index: "05",
    title: "Optimise",
    body: "Changes made against that baseline and measured again. Optimisation that is not measured again is a change, not an improvement.",
  },
];

/**
 * 06 — What this site does not claim.
 *
 * Kept on the home page rather than buried on a policy page. It is the single
 * most differentiating thing the company can say while it has no published
 * measurements, and hiding it would waste it.
 */
export const evidenceNote =
  "This site publishes no water savings, carbon reductions, energy figures or efficiency percentages, because none has yet been measured on an operating Aero Intelli project. When performance is claimed here it will state the baseline it was measured against.";

export const evidenceBasis: string[] = [
  "Measurement taken on an operating system",
  "A stated baseline the measurement is against",
  "The method and the instrument used",
  "The period the reading covers",
];
