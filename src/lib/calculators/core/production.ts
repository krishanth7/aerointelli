/**
 * Biomass, stocking and feed.
 *
 * The first three results in the chain. Everything downstream — ammonia,
 * oxygen, biofilter media, pump duty, running cost — is driven by the daily
 * feed figure computed here, which is why this module is deliberately small
 * and heavily checked. An error in feed load propagates into every other
 * number on the dashboard.
 */

import { assumptionValue } from "./assumptions";
import type { CalcResult, CalcWarning } from "./types";
import { result } from "./types";
import type { Species } from "./species";

export type ProductionInput = {
  species: Species;
  /** Total culture volume, cubic metres. */
  systemVolume: number;
  /** Standing density at harvest, kg/m3. */
  density: number;
  /** Individual harvest weight, grams. */
  harvestWeight: number;
  /** Feed conversion ratio, kg feed per kg gain. */
  fcr: number;
  /** Percentage of standing biomass fed per day. */
  feedRate: number;
};

/**
 * Standing biomass the system carries at harvest.
 *
 * Density x volume, and nothing more. The honesty here is in the warning: a
 * density above the species band is arithmetically valid and operationally
 * reckless, so the number is returned with the objection attached rather than
 * quietly produced.
 */
export function standingBiomass(input: ProductionInput): CalcResult {
  const value = input.systemVolume * input.density;
  const warnings: CalcWarning[] = [];

  if (input.density > input.species.density.max) {
    warnings.push({
      level: "critical",
      title: "High stocking density",
      detail: `${input.density} kg/m3 is above the ${input.species.density.min}–${input.species.density.max} kg/m3 band usually held for ${input.species.name}. Oxygen and solids removal become the binding constraints before the biofilter does.`,
    });
  } else if (input.density < input.species.density.min) {
    warnings.push({
      level: "info",
      title: "Low stocking density",
      detail: `Below the usual band for ${input.species.name}. The system will be under-utilised relative to its capital cost.`,
    });
  }

  return result({
    id: "standing-biomass",
    label: "Standing biomass at harvest",
    value,
    unit: "kg",
    precision: 0,
    confidence: "calculated",
    formula: "Standing biomass = System volume x Standing density",
    inputs: [
      { label: "System volume", value: input.systemVolume, unit: "m3" },
      { label: "Standing density", value: input.density, unit: "kg/m3" },
    ],
    warnings,
    note: "The mass of fish in the water on the heaviest day of the cycle. Every life-support component is sized against this, not against the average.",
  });
}

/** Fish carried at harvest, derived from biomass and individual weight. */
export function harvestNumbers(input: ProductionInput): CalcResult {
  const biomass = standingBiomass(input).value;
  const value = biomass / (input.harvestWeight / 1000);

  return result({
    id: "harvest-numbers",
    label: "Fish at harvest",
    value,
    unit: "fish",
    precision: 0,
    confidence: "calculated",
    formula: "Fish at harvest = Standing biomass / Individual harvest weight",
    inputs: [
      { label: "Standing biomass", value: Math.round(biomass), unit: "kg" },
      { label: "Individual harvest weight", value: input.harvestWeight, unit: "g" },
    ],
    note: "How many animals the system holds at the end of the cycle.",
  });
}

/**
 * Fingerlings to stock, grossed up for expected mortality.
 *
 * Assumption-based rather than calculated: the mortality allowance is our
 * number, not the user's, and the status says so.
 */
export function stockingNumbers(input: ProductionInput): CalcResult {
  const mortality = assumptionValue("mortality");
  const harvest = harvestNumbers(input).value;
  const value = harvest / (1 - mortality);

  return result({
    id: "stocking-numbers",
    label: "Fingerlings to stock",
    value,
    unit: "fingerlings",
    precision: 0,
    confidence: "assumption",
    formula: "Fingerlings = Fish at harvest / (1 − Mortality allowance)",
    inputs: [
      { label: "Fish at harvest", value: Math.round(harvest), unit: "fish" },
      { label: "Mortality allowance", value: mortality * 100, unit: "%" },
    ],
    assumptions: ["mortality"],
    note: "A planning allowance, not a performance target. Replace it with your own hatchery and nursery survival data once you have it.",
  });
}

/**
 * Peak daily feed load.
 *
 * The single most important number in the model. Ammonia, solids, oxygen
 * demand and biofilter media all scale directly from it.
 */
export function dailyFeed(input: ProductionInput): CalcResult {
  const biomass = standingBiomass(input).value;
  const value = biomass * (input.feedRate / 100);
  const warnings: CalcWarning[] = [];

  const feedPerVolume = value / input.systemVolume;
  if (feedPerVolume > 1.5) {
    warnings.push({
      level: "caution",
      title: "High feed loading",
      detail: `${feedPerVolume.toFixed(2)} kg of feed per m3 per day is a heavy load. Solids capture and degassing, rather than biofilter area, usually fail first at this intensity.`,
    });
  }
  if (input.feedRate > input.species.feedRate.max) {
    warnings.push({
      level: "caution",
      title: "Feed rate above species band",
      detail: `${input.feedRate}% of body weight per day exceeds the ${input.species.feedRate.min}–${input.species.feedRate.max}% usually fed to ${input.species.name} at grow-out size.`,
    });
  }

  return result({
    id: "daily-feed",
    label: "Peak daily feed",
    value,
    unit: "kg/day",
    precision: 1,
    confidence: "calculated",
    formula: "Daily feed = Standing biomass x Feed rate",
    inputs: [
      { label: "Standing biomass", value: Math.round(biomass), unit: "kg" },
      { label: "Feed rate", value: input.feedRate, unit: "% body weight/day" },
    ],
    warnings,
    note: "Feed drives the whole system. Ammonia, solids and oxygen demand are all computed from this figure.",
  });
}

/** Total feed consumed across one grow-out cycle, from FCR. */
export function cycleFeed(input: ProductionInput, cycleDays: number): CalcResult {
  const biomass = standingBiomass(input).value;
  const value = biomass * input.fcr;
  const warnings: CalcWarning[] = [];

  if (input.fcr < input.species.fcr.min) {
    warnings.push({
      level: "critical",
      title: "Unrealistic FCR",
      detail: `An FCR of ${input.fcr} is better than the ${input.species.fcr.min}–${input.species.fcr.max} range achieved commercially for ${input.species.name}. Planning on it will understate both feed cost and waste load.`,
    });
  }

  return result({
    id: "cycle-feed",
    label: "Feed per cycle",
    value,
    unit: "kg",
    precision: 0,
    confidence: "estimated",
    formula: "Cycle feed = Harvest biomass x FCR",
    inputs: [
      { label: "Harvest biomass", value: Math.round(biomass), unit: "kg" },
      { label: "FCR", value: input.fcr, unit: "kg feed/kg gain" },
      { label: "Cycle length", value: cycleDays, unit: "days" },
    ],
    warnings,
    note: "Ignores the mass of the stocked fingerlings, which is immaterial at commercial harvest weights.",
  });
}
