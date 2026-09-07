/**
 * The calculator catalogue.
 *
 * `status` is the whole point of this file. A tool is `live` only when the
 * route exists and the engine behind it returns real numbers; everything else
 * is `preparing` and renders as a non-link. Listing thirty-four tools and
 * wiring six of them would look complete and behave like a broken site, so the
 * catalogue carries the truth and the page renders whatever the truth is.
 *
 * When a calculator ships, flip its status and add its href. Nothing else has
 * to change.
 */

export type CalculatorStatus = "live" | "preparing";

export type CalculatorEntry = {
  id: string;
  name: string;
  summary: string;
  status: CalculatorStatus;
  href?: string;
  /** Marks the primary tool in a category, which the landing page leads with. */
  flagship?: boolean;
};

export type CalculatorCategory = {
  id: string;
  title: string;
  intro: string;
  calculators: CalculatorEntry[];
};

export const calculatorCategories: CalculatorCategory[] = [
  {
    id: "aquaculture",
    title: "Aquaculture",
    intro:
      "Recirculating system design, from stocking density through to the load each piece of life support has to carry.",
    calculators: [
      {
        id: "ras",
        name: "RAS System Designer",
        summary:
          "Ten steps from species to economics, producing a sized system with every assumption on the record.",
        status: "live",
        href: "/calculators/ras",
        flagship: true,
      },
      {
        id: "biomass",
        name: "Biomass & Stocking",
        summary: "Standing biomass, harvest numbers and fingerlings to stock for a given volume and density.",
        status: "preparing",
      },
      { id: "feed", name: "Feed Load", summary: "Daily and per-cycle feed from biomass, feed rate and FCR.", status: "preparing" },
      { id: "tan", name: "TAN Production", summary: "Daily ammonia load, the figure that sizes the biofilter.", status: "preparing" },
      { id: "biofilter", name: "Biofilter Sizing", summary: "Media surface area and volume for a given ammonia load.", status: "preparing" },
      { id: "oxygen", name: "Oxygen Demand", summary: "Daily oxygen consumption across fish, biofilter and solids.", status: "preparing" },
      { id: "hydraulics", name: "Hydraulics & Pumping", summary: "Recirculation flow, head and pump power at the duty point.", status: "preparing" },
      { id: "solids", name: "Solids Removal", summary: "Suspended solids produced daily and the capture duty implied.", status: "preparing" },
      { id: "co2", name: "CO2 & Degassing", summary: "Carbon dioxide produced and the stripping load it creates.", status: "preparing" },
      { id: "alkalinity", name: "Alkalinity & Buffering", summary: "Daily buffering dose consumed by nitrification.", status: "preparing" },
      { id: "tank", name: "Tank Geometry", summary: "Tank count, depth and depth-to-diameter ratio.", status: "preparing" },
      { id: "water-exchange", name: "Water Exchange", summary: "Daily new water for make-up, backwash and nitrate control.", status: "preparing" },
      { id: "energy", name: "Energy Load", summary: "Connected load, daily energy and cost per cycle.", status: "preparing" },
      { id: "ras-roi", name: "RAS Economics", summary: "Cost per kg and operating margin across three cases.", status: "preparing" },
      { id: "grow-out", name: "Grow-out Schedule", summary: "Growth trajectory and cycle length to harvest weight.", status: "preparing" },
      { id: "nursery", name: "Nursery Sizing", summary: "Nursery volume and stocking to feed the grow-out.", status: "preparing" },
      { id: "backup", name: "Backup & Redundancy", summary: "Standby oxygen and power duration against standing biomass.", status: "preparing" },
      { id: "site-water", name: "Site Water Assessment", summary: "Source water volume and treatment implied by the design.", status: "preparing" },
    ],
  },
  {
    id: "hydroponics",
    title: "Hydroponics",
    intro: "Nutrient solution, water use and yield planning for soil-free growing under cover.",
    calculators: [
      { id: "hydroponics", name: "Hydroponic System Planner", summary: "Plant count, channel length and reservoir volume for a growing area.", status: "preparing", flagship: true },
      { id: "nutrient", name: "Nutrient Solution", summary: "Stock solution and dilution to a target electrical conductivity.", status: "preparing" },
      { id: "ec-ph", name: "EC & pH Targets", summary: "Crop-specific conductivity and pH bands through the growth stages.", status: "preparing" },
      { id: "reservoir", name: "Reservoir Sizing", summary: "Working volume, turnover and top-up rate.", status: "preparing" },
      { id: "water-use", name: "Water Consumption", summary: "Daily uptake and evaporative loss for a planted area.", status: "preparing" },
      { id: "nft-flow", name: "NFT Flow Rate", summary: "Channel flow, slope and film depth.", status: "preparing" },
      { id: "lighting", name: "Lighting Load", summary: "Daily light integral and the electrical load to deliver it.", status: "preparing" },
      { id: "hydro-yield", name: "Yield & Economics", summary: "Cycle yield, cost per kg and operating margin.", status: "preparing" },
    ],
  },
  {
    id: "aeroponics",
    title: "Aeroponics",
    intro: "Misting, pressure and root-zone environment for high-pressure and low-pressure systems.",
    calculators: [
      { id: "aeroponics", name: "Aeroponic System Planner", summary: "Chamber volume, plant sites and nozzle layout for a growing area.", status: "preparing", flagship: true },
      { id: "misting", name: "Misting Cycle", summary: "On and off intervals against root-zone moisture retention.", status: "preparing" },
      { id: "nozzle", name: "Nozzle Selection", summary: "Droplet size, flow and coverage per nozzle.", status: "preparing" },
      { id: "pressure", name: "Pressure & Pump Duty", summary: "Operating pressure, accumulator sizing and pump power.", status: "preparing" },
      { id: "aero-nutrient", name: "Nutrient Delivery", summary: "Solution delivered per cycle and per plant per day.", status: "preparing" },
      { id: "root-zone", name: "Root Zone Environment", summary: "Chamber temperature and humidity targets by crop.", status: "preparing" },
      { id: "aero-water", name: "Water Efficiency", summary: "Consumption per plant compared against hydroponic and soil growing.", status: "preparing" },
      { id: "aero-yield", name: "Yield & Economics", summary: "Cycle yield, cost per kg and operating margin.", status: "preparing" },
    ],
  },
];

export function liveCalculators(): CalculatorEntry[] {
  return calculatorCategories.flatMap((category) =>
    category.calculators.filter((entry) => entry.status === "live"),
  );
}

/**
 * The disclaimer shown on every calculator surface.
 *
 * One string, used everywhere, so it cannot drift between the landing page,
 * the results dashboard and the generated report.
 */
export const calculatorDisclaimer =
  "These calculators produce planning estimates, not engineering designs. Results depend on inputs, site conditions and assumptions that are stated alongside every figure. Confirm any design with a qualified engineer before committing capital.";
