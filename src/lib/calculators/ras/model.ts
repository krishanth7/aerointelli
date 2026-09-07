/**
 * The RAS model.
 *
 * One function, `runRasModel`, that takes everything the wizard collected and
 * returns every result grouped for the dashboard. The wizard component knows
 * how to collect numbers and nothing about what they mean; this module knows
 * what they mean and nothing about React. That separation is what lets the
 * same model feed the dashboard, the report and, later, a saved model URL.
 */

import {
  cycleFeed,
  dailyFeed,
  harvestNumbers,
  standingBiomass,
  stockingNumbers,
  type ProductionInput,
} from "../core/production";
import {
  alkalinityDemand,
  co2Production,
  oxygenDemand,
  oxygenWarning,
  tanProduction,
  tssProduction,
} from "../core/waterQuality";
import {
  biofilterArea,
  biofilterVolume,
  makeUpWater,
  pumpPower,
  recirculationFlow,
  tankCount,
  tankDepth,
} from "../core/systems";
import {
  costPerKg,
  cycleMargin,
  cycleOperatingCost,
  cycleRevenue,
  dailyEnergy,
  energyCost,
  scenario,
  scenarioFactors,
  type ScenarioCase,
} from "../core/economics";
import { findSpecies, mid, speciesList, type Species } from "../core/species";
import type { CalcResult } from "../core/types";

export type RasInputs = {
  speciesId: string;
  systemVolume: number;
  density: number;
  harvestWeight: number;
  cycleDays: number;
  fcr: number;
  feedRate: number;
  tankVolume: number;
  tankDiameter: number;
  turnover: number;
  head: number;
  mediaSpecificArea: number;
  dissolvedOxygenSetpoint: number;
  /** Auxiliary electrical load beyond the main pump: aeration, blowers, controls. */
  auxiliaryLoad: number;
  runningHours: number;
  tariff: number;
  feedPrice: number;
  salePrice: number;
  otherOperatingCost: number;
};

/**
 * Defaults derived from the species, not invented.
 *
 * Every prefilled field is the midpoint of a published band for that species,
 * so a visitor who changes nothing still sees a coherent system rather than a
 * set of round numbers that happen to look tidy together.
 */
export function defaultsForSpecies(species: Species): RasInputs {
  return {
    speciesId: species.id,
    systemVolume: 300,
    density: Math.round(mid(species.density)),
    harvestWeight: Math.round(mid(species.harvestWeight)),
    cycleDays: Math.round(mid(species.cycleDays)),
    fcr: Number(mid(species.fcr).toFixed(2)),
    feedRate: Number(mid(species.feedRate).toFixed(1)),
    tankVolume: 50,
    tankDiameter: 6,
    turnover: 1.5,
    head: 8,
    mediaSpecificArea: 800,
    dissolvedOxygenSetpoint: species.minDissolvedOxygen + 1,
    auxiliaryLoad: 4,
    runningHours: 24,
    tariff: 8,
    feedPrice: 70,
    salePrice: 250,
    otherOperatingCost: 400000,
  };
}

export const defaultSpecies = speciesList[0];

export type ResultGroup = {
  id: string;
  title: string;
  results: CalcResult[];
};

export type RasModel = {
  species: Species;
  groups: ResultGroup[];
  scenarios: { id: ScenarioCase; label: string; margin: CalcResult }[];
  /** Flattened for the warning panel, in the order they were produced. */
  all: CalcResult[];
};

export function runRasModel(inputs: RasInputs): RasModel {
  const species = findSpecies(inputs.speciesId) ?? defaultSpecies;

  const production: ProductionInput = {
    species,
    systemVolume: inputs.systemVolume,
    density: inputs.density,
    harvestWeight: inputs.harvestWeight,
    fcr: inputs.fcr,
    feedRate: inputs.feedRate,
  };

  const biomass = standingBiomass(production);
  const harvest = harvestNumbers(production);
  const stocking = stockingNumbers(production);
  const feedDaily = dailyFeed(production);
  const feedCycle = cycleFeed(production, inputs.cycleDays);

  const tan = tanProduction(feedDaily.value);
  const tss = tssProduction(feedDaily.value);
  const oxygen = oxygenDemand(feedDaily.value);
  const co2 = co2Production(oxygen.value);
  const alkalinity = alkalinityDemand(tan.value);

  // The oxygen setpoint is a target the operator sets, so the objection to a
  // low one belongs on the oxygen result rather than in its own pseudo-result.
  oxygen.warnings = [
    ...oxygen.warnings,
    ...oxygenWarning(inputs.dissolvedOxygenSetpoint, species.minDissolvedOxygen, species.name),
  ];

  const tanks = tankCount(inputs.systemVolume, inputs.tankVolume);
  const depth = tankDepth(inputs.tankVolume, inputs.tankDiameter);
  const flow = recirculationFlow(inputs.systemVolume, inputs.turnover);
  const pump = pumpPower(flow.value, inputs.head);
  const filterArea = biofilterArea(tan.value);
  const filterVolume = biofilterVolume(filterArea.value, inputs.mediaSpecificArea);
  const newWater = makeUpWater(inputs.systemVolume);

  const energyInput = {
    connectedLoad: pump.value + inputs.auxiliaryLoad,
    hoursPerDay: inputs.runningHours,
    tariff: inputs.tariff,
  };
  const energyDaily = dailyEnergy(energyInput);
  const energyPerCycle = energyCost(energyInput, inputs.cycleDays);

  const economicsInput = {
    harvestBiomass: biomass.value,
    salePrice: inputs.salePrice,
    cycleFeedKg: feedCycle.value,
    feedPrice: inputs.feedPrice,
    energyCostPerCycle: energyPerCycle.value,
    otherOperatingCost: inputs.otherOperatingCost,
  };

  const revenue = cycleRevenue(economicsInput);
  const operating = cycleOperatingCost(economicsInput);
  const perKg = costPerKg(economicsInput);
  const margin = cycleMargin(economicsInput);

  const groups: ResultGroup[] = [
    { id: "production", title: "Production", results: [biomass, harvest, stocking, feedDaily, feedCycle] },
    { id: "water-quality", title: "Waste and gas load", results: [tan, tss, oxygen, co2, alkalinity] },
    { id: "tanks", title: "Tanks and hydraulics", results: [tanks, depth, flow, pump, newWater] },
    { id: "biofilter", title: "Biofiltration", results: [filterArea, filterVolume] },
    { id: "energy", title: "Energy", results: [energyDaily, energyPerCycle] },
    { id: "economics", title: "Economics", results: [revenue, operating, perKg, margin] },
  ];

  return {
    species,
    groups,
    scenarios: (Object.keys(scenarioFactors) as ScenarioCase[]).map((id) => ({
      id,
      label: scenarioFactors[id].label,
      margin: scenario(economicsInput, id),
    })),
    all: groups.flatMap((group) => group.results),
  };
}
