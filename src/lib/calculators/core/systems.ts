/**
 * Tank geometry, hydraulics and biofilter sizing.
 *
 * These are the numbers that become steel, pipe and media on a purchase order,
 * which is why the biofilter and pump results carry `requires-validation`. The
 * arithmetic is sound; the coefficients behind it are design ranges, and a
 * quotation built on a range without an engineer's sign-off is a liability.
 */

import { assumptionValue } from "./assumptions";
import type { CalcResult } from "./types";
import { result } from "./types";

/** Number of circular tanks needed for a given volume and tank size. */
export function tankCount(systemVolume: number, tankVolume: number): CalcResult {
  const value = Math.ceil(systemVolume / tankVolume);

  return result({
    id: "tank-count",
    label: "Culture tanks",
    value,
    unit: "tanks",
    precision: 0,
    confidence: "calculated",
    formula: "Tanks = ceiling(System volume / Tank volume)",
    inputs: [
      { label: "System volume", value: systemVolume, unit: "m3" },
      { label: "Tank volume", value: tankVolume, unit: "m3" },
    ],
    note: "Rounded up. More, smaller tanks cost more per cubic metre and buy batch separation and biosecurity in return.",
  });
}

/** Water depth implied by a circular tank of a given diameter and volume. */
export function tankDepth(tankVolume: number, diameter: number): CalcResult {
  const area = Math.PI * (diameter / 2) ** 2;
  const value = tankVolume / area;

  return result({
    id: "tank-depth",
    label: "Water depth",
    value,
    unit: "m",
    precision: 2,
    confidence: "calculated",
    formula: "Depth = Tank volume / (pi x (Diameter / 2)^2)",
    inputs: [
      { label: "Tank volume", value: tankVolume, unit: "m3" },
      { label: "Diameter", value: diameter, unit: "m" },
    ],
    note: "Depth-to-diameter ratio governs whether a circular tank self-cleans. Shallow, wide tanks lose the rotational flow that carries solids to the centre drain.",
  });
}

/** Recirculation flow required to meet the turnover target. */
export function recirculationFlow(systemVolume: number, turnoverPerHour: number): CalcResult {
  const value = systemVolume * turnoverPerHour;

  return result({
    id: "recirculation-flow",
    label: "Recirculation flow",
    value,
    unit: "m3/hour",
    precision: 1,
    confidence: "calculated",
    formula: "Flow = System volume x Turnover rate",
    inputs: [
      { label: "System volume", value: systemVolume, unit: "m3" },
      { label: "Turnover rate", value: turnoverPerHour, unit: "turnovers/hour" },
    ],
    assumptions: ["system-turnover"],
    note: "Everything the treatment train sees passes at this rate. Raising turnover improves water quality and raises the pumping bill in proportion.",
  });
}

/** Hydraulic power at the pump shaft for a given flow and head. */
export function pumpPower(flowM3PerHour: number, headMetres: number): CalcResult {
  const efficiency = assumptionValue("pump-efficiency");
  // rho g Q H, with Q converted from m3/hour to m3/second, divided by efficiency.
  const value = (1000 * 9.81 * (flowM3PerHour / 3600) * headMetres) / efficiency / 1000;

  return result({
    id: "pump-power",
    label: "Pump power",
    value,
    unit: "kW",
    precision: 2,
    confidence: "requires-validation",
    formula: "Power = (Density x Gravity x Flow x Head) / Efficiency",
    inputs: [
      { label: "Flow", value: Number(flowM3PerHour.toFixed(1)), unit: "m3/hour" },
      { label: "Total head", value: headMetres, unit: "m" },
      { label: "Pump efficiency", value: efficiency * 100, unit: "%" },
    ],
    assumptions: ["pump-efficiency"],
    note: "Head has to come from a pipe layout, not a guess. Fittings, filters and static lift together often exceed the static height by a wide margin.",
  });
}

/** Biofilter media surface area required to nitrify the daily TAN load. */
export function biofilterArea(tanKgPerDay: number): CalcResult {
  const rate = assumptionValue("biofilter-areal-tan");
  // Rate is g/m2/day; the load arrives in kg/day.
  const value = (tanKgPerDay * 1000) / rate;

  return result({
    id: "biofilter-area",
    label: "Biofilter media area",
    value,
    unit: "m2",
    precision: 0,
    confidence: "requires-validation",
    formula: "Media area = TAN load / Areal removal rate",
    inputs: [
      { label: "TAN load", value: Number(tanKgPerDay.toFixed(2)), unit: "kg/day" },
      { label: "Areal removal rate", value: rate, unit: "g TAN/m2/day" },
    ],
    assumptions: ["biofilter-areal-tan"],
    note: "Removal rate is not a property of the media alone. Temperature, alkalinity, organic loading and how well the media actually moves all change it, so this figure sets a floor rather than a specification.",
  });
}

/** Media volume implied by an area requirement and the media's specific area. */
export function biofilterVolume(areaM2: number, specificAreaM2PerM3: number): CalcResult {
  const value = areaM2 / specificAreaM2PerM3;

  return result({
    id: "biofilter-volume",
    label: "Biofilter media volume",
    value,
    unit: "m3",
    precision: 1,
    confidence: "estimated",
    formula: "Media volume = Media area / Specific surface area",
    inputs: [
      { label: "Media area", value: Math.round(areaM2), unit: "m2" },
      { label: "Specific surface area", value: specificAreaM2PerM3, unit: "m2/m3" },
    ],
    note: "Manufacturers quote specific surface area for media at rest. Moving bed reactors are filled to a fraction of the reactor volume, so the vessel is larger than this figure.",
  });
}

/** New water required per day for make-up and nitrate control. */
export function makeUpWater(systemVolume: number): CalcResult {
  const fraction = assumptionValue("daily-exchange");
  const value = systemVolume * fraction;

  return result({
    id: "make-up-water",
    label: "Daily new water",
    value,
    unit: "m3/day",
    precision: 1,
    confidence: "assumption",
    formula: "New water = System volume x Daily exchange fraction",
    inputs: [
      { label: "System volume", value: systemVolume, unit: "m3" },
      { label: "Daily exchange", value: fraction * 100, unit: "%" },
    ],
    assumptions: ["daily-exchange"],
    note: "Covers evaporation, filter backwash and the exchange needed to hold nitrate down. Water availability at the site should be confirmed against this before anything else is decided.",
  });
}
