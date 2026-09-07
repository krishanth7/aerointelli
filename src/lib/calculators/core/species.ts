/**
 * Species database.
 *
 * Ranges, not single numbers. A species does not have "a" stocking density; it
 * has a band that depends on system design, water quality and the operator's
 * appetite for risk. Presenting one figure would imply a precision that does
 * not exist, so the engine takes the midpoint as a default and the interface
 * shows the band around it.
 *
 * Every entry says where its figures come from. Where the honest answer is
 * "typical Indian commercial practice" it says that rather than borrowing an
 * authority that was never consulted.
 */

export type Range = { min: number; max: number };

export type Species = {
  id: string;
  name: string;
  scientificName: string;
  /** Culture temperature band, degrees Celsius. */
  temperature: Range;
  /** Safe standing density in a well-run recirculating system, kg/m3. */
  density: Range;
  /** Feed conversion ratio, kg feed per kg gain. */
  fcr: Range;
  /** Typical harvest weight, grams. */
  harvestWeight: Range;
  /** Typical grow-out duration from stocking to harvest, days. */
  cycleDays: Range;
  /** Percentage of body weight fed per day at grow-out size. */
  feedRate: Range;
  /** Dissolved oxygen the species should not be held below, mg/L. */
  minDissolvedOxygen: number;
  source: string;
};

export const speciesList: Species[] = [
  {
    id: "tilapia",
    name: "Tilapia",
    scientificName: "Oreochromis niloticus",
    temperature: { min: 26, max: 32 },
    density: { min: 60, max: 100 },
    fcr: { min: 1.4, max: 1.8 },
    harvestWeight: { min: 500, max: 900 },
    cycleDays: { min: 180, max: 240 },
    feedRate: { min: 1.5, max: 2.5 },
    minDissolvedOxygen: 5,
    source: "Typical warm-water recirculating design ranges and Indian commercial practice.",
  },
  {
    id: "asian-seabass",
    name: "Asian Seabass",
    scientificName: "Lates calcarifer",
    temperature: { min: 27, max: 32 },
    density: { min: 30, max: 60 },
    fcr: { min: 1.5, max: 2.0 },
    harvestWeight: { min: 800, max: 1200 },
    cycleDays: { min: 240, max: 330 },
    feedRate: { min: 1.2, max: 2.0 },
    minDissolvedOxygen: 5,
    source: "Typical brackish-water recirculating design ranges and Indian commercial practice.",
  },
  {
    id: "pangasius",
    name: "Pangasius",
    scientificName: "Pangasianodon hypophthalmus",
    temperature: { min: 26, max: 32 },
    density: { min: 60, max: 120 },
    fcr: { min: 1.5, max: 1.9 },
    harvestWeight: { min: 800, max: 1200 },
    cycleDays: { min: 180, max: 270 },
    feedRate: { min: 1.5, max: 2.5 },
    minDissolvedOxygen: 4,
    source: "Typical warm-water recirculating design ranges and Indian commercial practice.",
  },
  {
    id: "rohu",
    name: "Rohu",
    scientificName: "Labeo rohita",
    temperature: { min: 25, max: 32 },
    density: { min: 25, max: 50 },
    fcr: { min: 1.6, max: 2.2 },
    harvestWeight: { min: 700, max: 1200 },
    cycleDays: { min: 270, max: 365 },
    feedRate: { min: 1.0, max: 2.0 },
    minDissolvedOxygen: 5,
    source: "Indian major carp culture practice, adapted to recirculating conditions.",
  },
  {
    id: "vannamei",
    name: "Pacific White Shrimp",
    scientificName: "Litopenaeus vannamei",
    temperature: { min: 28, max: 32 },
    density: { min: 3, max: 9 },
    fcr: { min: 1.2, max: 1.6 },
    harvestWeight: { min: 20, max: 35 },
    cycleDays: { min: 90, max: 130 },
    feedRate: { min: 2.5, max: 4.0 },
    minDissolvedOxygen: 5,
    source: "Intensive shrimp culture practice. Density is expressed as kg/m3, not animals/m2.",
  },
  {
    id: "trout",
    name: "Rainbow Trout",
    scientificName: "Oncorhynchus mykiss",
    temperature: { min: 12, max: 18 },
    density: { min: 40, max: 80 },
    fcr: { min: 1.0, max: 1.3 },
    harvestWeight: { min: 300, max: 500 },
    cycleDays: { min: 240, max: 330 },
    feedRate: { min: 1.0, max: 1.8 },
    minDissolvedOxygen: 6,
    source: "Cold-water recirculating design ranges. Requires active chilling in most of India.",
  },
];

const byId = new Map(speciesList.map((item) => [item.id, item]));

export function findSpecies(id: string): Species | undefined {
  return byId.get(id);
}

/** Midpoint of a range, used as the default when the user supplies nothing. */
export function mid(range: Range): number {
  return (range.min + range.max) / 2;
}
