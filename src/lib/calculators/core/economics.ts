/**
 * Energy and farm economics.
 *
 * Deliberately conservative and deliberately incomplete. The engine computes
 * what follows arithmetically from the loads already established — connected
 * energy, feed cost, revenue, margin — and refuses to invent the figures it
 * cannot derive: capital cost, labour, land, finance and insurance are inputs
 * the user supplies, not numbers this module produces.
 *
 * A payback figure that quietly omitted half the cost base would be the single
 * most misleading number the platform could publish.
 */

import type { CalcResult } from "./types";
import { result } from "./types";

export type EnergyInput = {
  /** Continuous electrical load, kW. */
  connectedLoad: number;
  /** Hours per day the load runs. */
  hoursPerDay: number;
  /** Delivered electricity tariff, rupees per kWh. */
  tariff: number;
};

export function dailyEnergy(input: EnergyInput): CalcResult {
  const value = input.connectedLoad * input.hoursPerDay;

  return result({
    id: "daily-energy",
    label: "Daily energy",
    value,
    unit: "kWh/day",
    precision: 1,
    confidence: "calculated",
    formula: "Daily energy = Connected load x Running hours",
    inputs: [
      { label: "Connected load", value: Number(input.connectedLoad.toFixed(2)), unit: "kW" },
      { label: "Running hours", value: input.hoursPerDay, unit: "hours/day" },
    ],
    note: "Pumping and aeration run continuously in a recirculating system. Energy is a fixed cost of keeping stock alive, not a variable cost of producing it.",
  });
}

export function energyCost(input: EnergyInput, days: number): CalcResult {
  const value = dailyEnergy(input).value * input.tariff * days;

  return result({
    id: "energy-cost",
    label: "Energy cost per cycle",
    value,
    unit: "INR",
    precision: 0,
    confidence: "estimated",
    formula: "Energy cost = Daily energy x Tariff x Cycle days",
    inputs: [
      { label: "Daily energy", value: Number(dailyEnergy(input).value.toFixed(1)), unit: "kWh/day" },
      { label: "Tariff", value: input.tariff, unit: "INR/kWh" },
      { label: "Cycle length", value: days, unit: "days" },
    ],
    note: "Excludes demand charges, power factor penalties and standby generation, all of which are tariff-specific.",
  });
}

export type EconomicsInput = {
  harvestBiomass: number;
  /** Farm-gate price, rupees per kg. */
  salePrice: number;
  cycleFeedKg: number;
  /** Feed price, rupees per kg. */
  feedPrice: number;
  energyCostPerCycle: number;
  /** Everything the engine cannot derive: labour, seed, health, overheads. */
  otherOperatingCost: number;
};

export function cycleRevenue(input: EconomicsInput): CalcResult {
  const value = input.harvestBiomass * input.salePrice;

  return result({
    id: "cycle-revenue",
    label: "Revenue per cycle",
    value,
    unit: "INR",
    precision: 0,
    confidence: "estimated",
    formula: "Revenue = Harvest biomass x Farm-gate price",
    inputs: [
      { label: "Harvest biomass", value: Math.round(input.harvestBiomass), unit: "kg" },
      { label: "Farm-gate price", value: input.salePrice, unit: "INR/kg" },
    ],
    note: "Assumes the whole harvest sells at one price. Graded sales and seasonal price movement both change this materially.",
  });
}

export function cycleOperatingCost(input: EconomicsInput): CalcResult {
  const feed = input.cycleFeedKg * input.feedPrice;
  const value = feed + input.energyCostPerCycle + input.otherOperatingCost;

  return result({
    id: "cycle-operating-cost",
    label: "Operating cost per cycle",
    value,
    unit: "INR",
    precision: 0,
    confidence: "estimated",
    formula: "Operating cost = Feed cost + Energy cost + Other operating cost",
    inputs: [
      { label: "Feed cost", value: Math.round(feed), unit: "INR" },
      { label: "Energy cost", value: Math.round(input.energyCostPerCycle), unit: "INR" },
      { label: "Other operating cost", value: Math.round(input.otherOperatingCost), unit: "INR" },
    ],
    note: "Only as complete as the other operating cost you entered. Labour, seed, health management, testing and overheads are not derived by the engine.",
  });
}

export function costPerKg(input: EconomicsInput): CalcResult {
  const value = cycleOperatingCost(input).value / input.harvestBiomass;

  return result({
    id: "cost-per-kg",
    label: "Operating cost per kg",
    value,
    unit: "INR/kg",
    precision: 1,
    confidence: "estimated",
    formula: "Cost per kg = Operating cost / Harvest biomass",
    inputs: [
      { label: "Operating cost", value: Math.round(cycleOperatingCost(input).value), unit: "INR" },
      { label: "Harvest biomass", value: Math.round(input.harvestBiomass), unit: "kg" },
    ],
    note: "The number to compare against the market price. It excludes capital recovery, so it is a floor and not a break-even.",
  });
}

export function cycleMargin(input: EconomicsInput): CalcResult {
  const value = cycleRevenue(input).value - cycleOperatingCost(input).value;

  return result({
    id: "cycle-margin",
    label: "Operating margin per cycle",
    value,
    unit: "INR",
    precision: 0,
    confidence: "requires-validation",
    formula: "Operating margin = Revenue − Operating cost",
    inputs: [
      { label: "Revenue", value: Math.round(cycleRevenue(input).value), unit: "INR" },
      { label: "Operating cost", value: Math.round(cycleOperatingCost(input).value), unit: "INR" },
    ],
    note: "Operating margin, not profit. Capital cost, finance, depreciation, land and insurance are all outside this figure, and any of them can turn a positive margin into a loss.",
  });
}

/**
 * Three cases from one set of inputs.
 *
 * Rather than presenting a single answer with false confidence, the same model
 * is run at conservative, base and best price and yield assumptions. The spread
 * between them is the honest output.
 */
export type ScenarioCase = "conservative" | "base" | "best";

export const scenarioFactors: Record<ScenarioCase, { price: number; yield: number; label: string }> = {
  conservative: { price: 0.9, yield: 0.85, label: "Conservative" },
  base: { price: 1, yield: 1, label: "Base" },
  best: { price: 1.1, yield: 1.05, label: "Best" },
};

export function scenario(input: EconomicsInput, which: ScenarioCase): CalcResult {
  const factor = scenarioFactors[which];
  return cycleMargin({
    ...input,
    harvestBiomass: input.harvestBiomass * factor.yield,
    salePrice: input.salePrice * factor.price,
  });
}
