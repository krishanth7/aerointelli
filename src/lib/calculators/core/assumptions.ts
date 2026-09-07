/**
 * The assumption library.
 *
 * Every default coefficient the engine can fall back on is declared here with
 * the reason it was chosen and the date it was last reviewed. Nothing in the
 * calculation modules is allowed to hard-code a magic number: if a value is not
 * supplied by the user it must be looked up here, so the report can list
 * exactly what was assumed on the reader's behalf.
 *
 * `source` is deliberately descriptive rather than a citation we cannot stand
 * behind. Where a figure is a typical design range rather than a published
 * constant, it says so — an invented citation is worse than an honest range.
 */

export type Assumption = {
  id: string;
  label: string;
  value: number;
  unit: string;
  /** Where the figure comes from, in plain words. */
  source: string;
  /** Why this default rather than another. */
  rationale: string;
  reviewed: string;
};

export const assumptions: Assumption[] = [
  {
    id: "tan-per-feed",
    label: "Total ammonia nitrogen produced per unit of feed",
    value: 0.03,
    unit: "kg TAN / kg feed",
    source: "Standard recirculating aquaculture design range (0.025–0.035).",
    rationale:
      "Derived from feed protein content and nitrogen excretion. The mid-range value is used when protein content is not supplied.",
    reviewed: "2026",
  },
  {
    id: "tss-per-feed",
    label: "Total suspended solids produced per unit of feed",
    value: 0.25,
    unit: "kg TSS / kg feed",
    source: "Typical design range for extruded pelleted diets (0.2–0.3).",
    rationale: "Uneaten feed and faecal solids combined. Varies with diet and feeding accuracy.",
    reviewed: "2026",
  },
  {
    id: "oxygen-per-feed",
    label: "Oxygen consumed per unit of feed",
    value: 0.25,
    unit: "kg O2 / kg feed",
    source: "Typical design range for warm-water recirculating systems.",
    rationale:
      "Covers fish respiration plus biofilter and heterotrophic demand. Species and temperature shift this materially.",
    reviewed: "2026",
  },
  {
    id: "co2-per-oxygen",
    label: "Carbon dioxide produced per unit of oxygen consumed",
    value: 1.375,
    unit: "kg CO2 / kg O2",
    source: "Respiratory quotient of approximately 1.0 converted by molar mass.",
    rationale: "Stoichiometric, not empirical. Holds while respiration dominates the oxygen budget.",
    reviewed: "2026",
  },
  {
    id: "biofilter-areal-tan",
    label: "Biofilter areal TAN removal rate",
    value: 0.3,
    unit: "g TAN / m2 / day",
    source: "Conservative design figure for moving bed media in warm water.",
    rationale:
      "Actual rate depends on media type, temperature, alkalinity and organic loading. A conservative value oversizes rather than undersizes.",
    reviewed: "2026",
  },
  {
    id: "alkalinity-per-tan",
    label: "Alkalinity consumed per unit of TAN nitrified",
    value: 7.05,
    unit: "kg CaCO3 / kg TAN",
    source: "Nitrification stoichiometry.",
    rationale: "Fixed by the reaction. Determines the buffering dose the system needs.",
    reviewed: "2026",
  },
  {
    id: "pump-efficiency",
    label: "Combined pump and motor efficiency",
    value: 0.6,
    unit: "fraction",
    source: "Typical wire-to-water efficiency for centrifugal pumps at duty point.",
    rationale: "Selection, wear and off-duty operation all reduce this. Used when no pump is specified.",
    reviewed: "2026",
  },
  {
    id: "system-turnover",
    label: "Culture tank turnover rate",
    value: 1.5,
    unit: "turnovers / hour",
    source: "Common design range for circular culture tanks (1–2).",
    rationale: "Sets the recirculation flow. Higher turnover improves solids removal and raises pumping energy.",
    reviewed: "2026",
  },
  {
    id: "daily-exchange",
    label: "Daily new water exchange",
    value: 0.05,
    unit: "fraction of system volume / day",
    source: "Typical recirculating system make-up range (2–10 percent).",
    rationale: "Covers evaporation, backwash and nitrate control. Lower exchange raises treatment load.",
    reviewed: "2026",
  },
  {
    id: "mortality",
    label: "Cycle mortality",
    value: 0.1,
    unit: "fraction",
    source: "Planning allowance, not a performance target.",
    rationale: "Applied to stocked numbers so harvest biomass is not overstated.",
    reviewed: "2026",
  },
];

const byId = new Map(assumptions.map((item) => [item.id, item]));

/** Looks up an assumption, throwing rather than silently returning zero. */
export function assume(id: string): Assumption {
  const found = byId.get(id);
  if (!found) throw new Error(`Unknown assumption: ${id}`);
  return found;
}

export function assumptionValue(id: string): number {
  return assume(id).value;
}
