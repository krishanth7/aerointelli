/**
 * Waste and gas loads.
 *
 * All four outputs are feed-driven. None of them are measurements: they are
 * design loads produced by multiplying the daily feed figure by a coefficient
 * from the assumption library, and every one of them is returned as
 * `estimated` rather than `calculated` for exactly that reason.
 */

import { assumptionValue } from "./assumptions";
import type { CalcResult, CalcWarning } from "./types";
import { result } from "./types";

/** Total ammonia nitrogen produced per day. Sets biofilter size. */
export function tanProduction(dailyFeedKg: number): CalcResult {
  const rate = assumptionValue("tan-per-feed");
  const value = dailyFeedKg * rate;

  return result({
    id: "tan-production",
    label: "TAN production",
    value,
    unit: "kg/day",
    precision: 2,
    confidence: "estimated",
    formula: "TAN = Daily feed x TAN yield per kg feed",
    inputs: [
      { label: "Daily feed", value: dailyFeedKg, unit: "kg/day" },
      { label: "TAN yield", value: rate, unit: "kg TAN/kg feed" },
    ],
    assumptions: ["tan-per-feed"],
    note: "Total ammonia nitrogen excreted by the fish plus that released from uneaten feed. The biofilter must remove this much every day or ammonia accumulates.",
  });
}

/** Suspended solids produced per day. Sets drum filter and settling duty. */
export function tssProduction(dailyFeedKg: number): CalcResult {
  const rate = assumptionValue("tss-per-feed");
  const value = dailyFeedKg * rate;

  return result({
    id: "tss-production",
    label: "Solids production",
    value,
    unit: "kg/day",
    precision: 1,
    confidence: "estimated",
    formula: "TSS = Daily feed x Solids yield per kg feed",
    inputs: [
      { label: "Daily feed", value: dailyFeedKg, unit: "kg/day" },
      { label: "Solids yield", value: rate, unit: "kg TSS/kg feed" },
    ],
    assumptions: ["tss-per-feed"],
    note: "Solids removal is the first line of treatment. Solids left in circulation break down, consume oxygen and load the biofilter with organic carbon.",
  });
}

/** Oxygen demand per day across fish, biofilter and heterotrophic activity. */
export function oxygenDemand(dailyFeedKg: number): CalcResult {
  const rate = assumptionValue("oxygen-per-feed");
  const value = dailyFeedKg * rate;

  return result({
    id: "oxygen-demand",
    label: "Oxygen demand",
    value,
    unit: "kg/day",
    precision: 1,
    confidence: "requires-validation",
    formula: "Oxygen demand = Daily feed x Oxygen consumed per kg feed",
    inputs: [
      { label: "Daily feed", value: dailyFeedKg, unit: "kg/day" },
      { label: "Oxygen per feed", value: rate, unit: "kg O2/kg feed" },
    ],
    assumptions: ["oxygen-per-feed"],
    note: "Oxygen is the constraint that kills stock within minutes rather than days. Size the supply and its backup against a validated design, not against this estimate.",
  });
}

/** Carbon dioxide produced, stoichiometric on oxygen consumed. */
export function co2Production(oxygenKgPerDay: number): CalcResult {
  const ratio = assumptionValue("co2-per-oxygen");
  const value = oxygenKgPerDay * ratio;

  return result({
    id: "co2-production",
    label: "Carbon dioxide production",
    value,
    unit: "kg/day",
    precision: 1,
    confidence: "estimated",
    formula: "CO2 = Oxygen consumed x CO2 per O2",
    inputs: [
      { label: "Oxygen consumed", value: Number(oxygenKgPerDay.toFixed(1)), unit: "kg/day" },
      { label: "CO2 per O2", value: ratio, unit: "kg/kg" },
    ],
    assumptions: ["co2-per-oxygen"],
    note: "Dissolved carbon dioxide suppresses appetite and depresses pH long before it is visible. It has to be stripped, not diluted.",
  });
}

/** Alkalinity consumed by nitrification, and so the daily buffering dose. */
export function alkalinityDemand(tanKgPerDay: number): CalcResult {
  const ratio = assumptionValue("alkalinity-per-tan");
  const value = tanKgPerDay * ratio;

  return result({
    id: "alkalinity-demand",
    label: "Alkalinity consumed",
    value,
    unit: "kg CaCO3/day",
    precision: 1,
    confidence: "estimated",
    formula: "Alkalinity = TAN nitrified x Alkalinity per TAN",
    inputs: [
      { label: "TAN nitrified", value: Number(tanKgPerDay.toFixed(2)), unit: "kg/day" },
      { label: "Alkalinity per TAN", value: ratio, unit: "kg CaCO3/kg TAN" },
    ],
    assumptions: ["alkalinity-per-tan"],
    note: "Nitrification is an acid-producing reaction. Without daily buffering, pH falls and the biofilter slows down, which raises ammonia, which is how a stable system unravels.",
  });
}

/** Flags a dissolved oxygen setpoint below the species minimum. */
export function oxygenWarning(setpoint: number, speciesMin: number, name: string): CalcWarning[] {
  if (setpoint >= speciesMin) return [];
  return [
    {
      level: "critical",
      title: "Low dissolved oxygen",
      detail: `A setpoint of ${setpoint} mg/L is below the ${speciesMin} mg/L usually held for ${name}. Feed intake and growth fall first; sustained exposure causes mortality.`,
    },
  ];
}
