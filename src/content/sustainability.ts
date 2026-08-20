/**
 * Sustainability page content.
 *
 * RULE: this page describes how systems are designed, not results that have not
 * been measured. Nothing here states a saving, a percentage or an outcome that
 * Aero Intelli cannot evidence from an operating project. Metrics are published
 * as the list of quantities that will be measured, and the performance index and
 * project and report collections stay empty until real data exists.
 */

export type Principle = {
  title: string;
  body: string;
};

export const approachPrinciples: Principle[] = [
  {
    title: "Resource efficiency",
    body: "Use less water, energy, land and raw material for the same productive output. Efficiency is set by the design of the system long before it reaches an operator.",
  },
  {
    title: "Circularity",
    body: "Recover and reuse water, nutrients and biomass wherever it is technically and economically viable, so an output of one process becomes an input to the next.",
  },
  {
    title: "Intelligent optimisation",
    body: "Use sensors, automation and applied intelligence to hold a system at its efficient operating point instead of letting it drift and correcting after the fact.",
  },
];

/** Stages of the integrated loop, in flow order. Drives the diagram and its legend. */
export type LoopStage = {
  id: string;
  label: string;
  body: string;
};

export const loopStages: LoopStage[] = [
  {
    id: "water",
    label: "Water",
    body: "Charged once, then held in circulation. Replenishment covers evaporation, biomass and the small volume lost to solids removal.",
  },
  {
    id: "aquaculture",
    label: "RAS aquaculture",
    body: "Fish are grown in a controlled water volume. Feed enters, growth and metabolic waste leave.",
  },
  {
    id: "solids",
    label: "Solids & nutrients",
    body: "Uneaten feed and faecal solids are separated early, before they break down and load the rest of the system.",
  },
  {
    id: "biofiltration",
    label: "Biofiltration",
    body: "Nitrifying bacteria convert ammonia to nitrite and nitrite to nitrate, keeping dissolved nitrogen within a safe band.",
  },
  {
    id: "recovery",
    label: "Nutrient recovery",
    body: "The nitrate-bearing water and the captured solids carry plant-available nutrients that a discharge-based system would throw away.",
  },
  {
    id: "cultivation",
    label: "Hydroponic cultivation",
    body: "Those nutrients feed crops in NFT channels or aeroponic root zones, which draw nitrogen down as they grow.",
  },
  {
    id: "return",
    label: "Return & recirculation",
    body: "Treated water returns to the fish. What began as a waste stream has done a second round of productive work.",
  },
];

export const waterCapabilities: string[] = [
  "Recirculating aquaculture rather than flow-through",
  "Mechanical solids separation — drum filtration and radial flow",
  "Biological treatment through fixed or moving bed biofilters",
  "Dissolved oxygen management and controlled aeration",
  "Degassing to strip carbon dioxide and nitrogen",
  "UV disinfection, and ozone where the application justifies it",
  "Continuous water-quality monitoring and alarming",
  "Leak and level detection on tanks and sumps",
  "Controlled, measured replenishment instead of routine exchange",
];

/** Progression of growing environments, from least to most controlled. */
export const landProgression: { label: string; body: string }[] = [
  {
    label: "Open field",
    body: "Yield is bounded by soil, season and rainfall. Inputs disperse into the environment.",
  },
  {
    label: "Protected greenhouse",
    body: "Climate is partly controlled, extending the season and reducing weather exposure.",
  },
  {
    label: "NFT hydroponics",
    body: "Soil is removed from the equation. Nutrient and water delivery become directly measurable.",
  },
  {
    label: "Vertical & aeroponic",
    body: "Growing area is stacked and root-zone delivery is precise, so productive area is decoupled from ground area.",
  },
];

export const rasCycle: { step: string; body: string }[] = [
  { step: "Feed input", body: "The only substantial nutrient entering the system." },
  { step: "Fish growth", body: "The fraction of feed converted into harvestable biomass." },
  {
    step: "Metabolic waste",
    body: "Ammonia excreted across the gills, plus settleable and suspended solids.",
  },
  {
    step: "Mechanical filtration",
    body: "Solids are removed quickly, before they dissolve and add to the biological load.",
  },
  {
    step: "Biological treatment",
    body: "Total ammonia nitrogen is oxidised to nitrate by the biofilter's bacterial population.",
  },
  {
    step: "Recovery & treatment",
    body: "Captured solids and nitrate-rich water are treated as recoverable inputs, not effluent.",
  },
  { step: "Water reuse", body: "Conditioned water returns to the culture tanks and the cycle repeats." },
];

export const cultivationMethods: { title: string; body: string }[] = [
  {
    title: "NFT",
    body: "A thin, continuously flowing film of nutrient solution over the root mat. Low volume held, high contact, easy to measure.",
  },
  {
    title: "Aeroponics",
    body: "Nutrient solution delivered to suspended roots as a fine mist, giving direct control of the root-zone oxygen and moisture.",
  },
  {
    title: "Controlled environment",
    body: "The surrounding conditions are treated as inputs in their own right and held within deliberate bounds.",
  },
];

export const controlledVariables: string[] = [
  "pH",
  "Electrical conductivity",
  "Root-zone and air temperature",
  "Relative humidity",
  "Irrigation frequency and duration",
  "Nutrient concentration and ratio",
  "Light intensity and photoperiod",
];

export const energyMeasures: string[] = [
  "High-efficiency pump selection matched to the duty point",
  "Variable-speed drives instead of throttling",
  "Efficient aeration and oxygen transfer",
  "Hydraulic design that minimises total dynamic head",
  "Automated scheduling of non-critical equipment",
  "Solar generation where the site and load profile suit it",
  "Sub-metered energy monitoring by system area",
  "Load shifting away from peak demand",
  "Heat retention and recovery in temperature-controlled systems",
];

export const aiApplications: { verb: string; body: string }[] = [
  { verb: "Predict", body: "Where water quality is heading, early enough to act rather than react." },
  { verb: "Detect", body: "Abnormal equipment behaviour before it becomes a failure or a mortality event." },
  { verb: "Optimise", body: "Pump, aeration and filtration duty against real demand instead of a fixed schedule." },
  { verb: "Forecast", body: "Crop development and fish performance against feed, environment and time." },
  { verb: "Automate", body: "The routine operating decisions that otherwise depend on who is on shift." },
  { verb: "Learn", body: "From the accumulated history of the system, so each cycle informs the next." },
];

export const circularityStreams: { stream: string; path: string; body: string }[] = [
  {
    stream: "Water",
    path: "Treatment → recovery → reuse",
    body: "Held in circulation and conditioned continuously, rather than drawn, used once and discharged.",
  },
  {
    stream: "Organic solids",
    path: "Capture → processing → resource recovery",
    body: "Removed early and concentrated, which keeps recovery options open instead of dispersing them into the water.",
  },
  {
    stream: "Nutrients",
    path: "Capture → treatment → reuse",
    body: "Dissolved nitrogen and other plant-available nutrients directed into cultivation rather than to effluent.",
  },
  {
    stream: "Packaging",
    path: "Material efficiency → responsible sourcing → recovery",
    body: "Specified for the minimum material that still protects the product through distribution.",
  },
  {
    stream: "Biomass",
    path: "Recovery → processing → downstream use",
    body: "Crop residue and processing by-product assessed for onward use before disposal is considered.",
  },
];

export const biodiversityCommitments: string[] = [
  "Protecting biodiversity on and around operating sites",
  "Agroforestry and mixed planting where land use allows",
  "Soil health and restoration on associated land",
  "Water conservation in the surrounding catchment",
  "Habitat preservation rather than clearance",
  "Native vegetation in preference to ornamental planting",
  "Ecological restoration of degraded ground",
  "Responsible land use decisions at the siting stage",
];

export const foodSystemChain: string[] = [
  "Production",
  "Processing",
  "Storage",
  "Distribution",
  "Consumer",
];

export const foodSystemGoals: string[] = [
  "Production sited closer to consumption",
  "Controlled conditions that reduce seasonal dependence",
  "Shorter transport distances where local production is viable",
  "Freshness measured in days rather than weeks",
  "Traceability from production batch to point of sale",
  "Digital monitoring across the chain",
];

export type Pillar = {
  id: string;
  name: string;
  focus: string;
};

export const sustainabilityPillars: Pillar[] = [
  { id: "water", name: "Water", focus: "Conservation, recycling and treatment" },
  { id: "energy", name: "Energy", focus: "Efficiency and renewable integration" },
  { id: "food", name: "Food", focus: "Resilient and controlled production" },
  { id: "circularity", name: "Circularity", focus: "Recovery and reuse" },
  { id: "biodiversity", name: "Biodiversity", focus: "Ecological protection" },
  { id: "intelligence", name: "Intelligence", focus: "Applied optimisation" },
];

/**
 * A single measured quantity.
 *
 * `value` is null until a figure comes from an operating project, and the UI
 * renders an em dash rather than a number. Keeping the field nullable rather
 * than absent is what lets a future data source populate this shape without any
 * change to the components that read it.
 */
export type MetricStatus = "verified" | "in-measurement" | "awaiting-data";

export type Metric = {
  id: string;
  name: string;
  unit: string;
  value: number | null;
  /** Reporting window the value covers. Null while there is no value. */
  period: string | null;
  /** Where the figure came from. Null while there is no value. */
  source: string | null;
  status: MetricStatus;
};

export const metricStatusLabels: Record<MetricStatus, string> = {
  verified: "Verified",
  "in-measurement": "In measurement",
  "awaiting-data": "Awaiting project data",
};

/** What will be measured. Deliberately no values — those follow from operation. */
export type MetricGroup = {
  id: string;
  label: string;
  intro: string;
  metrics: Metric[];
};

/** Every metric starts unmeasured. Written once so no entry can drift into a fake value. */
function pending(id: string, name: string, unit: string): Metric {
  return { id, name, unit, value: null, period: null, source: null, status: "awaiting-data" };
}

export const metricGroups: MetricGroup[] = [
  {
    id: "water",
    label: "Water",
    intro: "How much water a unit of production actually costs, and how much of it stays in the system.",
    metrics: [
      pending("water-intensity", "Water consumed per kilogram of production", "L/kg"),
      pending("recirculation-rate", "Recirculation rate", "%"),
      pending("freshwater-replacement", "Freshwater replacement volume", "L/day"),
      pending("water-recovered", "Water recovered and returned", "%"),
    ],
  },
  {
    id: "energy",
    label: "Energy",
    intro: "Where the energy goes, so that optimisation targets the largest loads first.",
    metrics: [
      pending("energy-intensity", "Kilowatt-hours per kilogram of production", "kWh/kg"),
      pending("renewable-share", "Share of demand met by renewable generation", "%"),
      pending("pumping-energy", "Pumping energy", "kWh/day"),
      pending("aeration-energy", "Aeration and oxygenation energy", "kWh/day"),
    ],
  },
  {
    id: "production",
    label: "Production",
    intro: "Whether the system is productive enough to justify the resources it consumes.",
    metrics: [
      pending("yield-density", "Yield per square metre", "kg/m²"),
      pending("survival-rate", "Fish survival rate", "%"),
      pending("fcr", "Feed conversion ratio", "ratio"),
      pending("crop-productivity", "Crop productivity per cycle", "kg/cycle"),
    ],
  },
  {
    id: "waste",
    label: "Waste",
    intro: "What leaves the system, and how much of it is recovered instead of discarded.",
    metrics: [
      pending("solid-waste", "Solid waste generated", "kg/cycle"),
      pending("nutrients-recovered", "Nutrients recovered", "%"),
      pending("organics-diverted", "Organic waste diverted from disposal", "%"),
      pending("material-reused", "Share of material reused", "%"),
    ],
  },
  {
    id: "carbon",
    label: "Carbon",
    intro: "Emissions in absolute terms and per unit of output, so growth is not mistaken for improvement.",
    metrics: [
      pending("ghg-absolute", "Greenhouse gas emissions", "tCO₂e"),
      pending("energy-emissions", "Energy-related emissions", "tCO₂e"),
      pending("emissions-intensity", "Emissions intensity per unit of production", "kgCO₂e/kg"),
    ],
  },
];

/**
 * Water treatment train, in flow order. Drives the pipeline diagram, which
 * activates stage by stage as the section scrolls.
 */
export const waterStages: { id: string; label: string; body: string }[] = [
  {
    id: "intake",
    label: "Intake",
    body: "The system is charged once. After that, replenishment covers only evaporation, biomass and the small volume lost with solids.",
  },
  {
    id: "separation",
    label: "Mechanical separation",
    body: "Drum filtration and radial flow remove settleable and suspended solids before they dissolve.",
  },
  {
    id: "biological",
    label: "Biological treatment",
    body: "Fixed or moving bed biofilters oxidise ammonia to nitrite, and nitrite to nitrate.",
  },
  {
    id: "conditioning",
    label: "Gas conditioning",
    body: "Degassing strips carbon dioxide and nitrogen; oxygen is added back under control.",
  },
  {
    id: "monitoring",
    label: "Quality monitoring",
    body: "Dissolved oxygen, pH, temperature and nitrogen species are measured continuously and alarmed.",
  },
  {
    id: "reuse",
    label: "Controlled reuse",
    body: "Conditioned water returns to the culture tanks. Replenishment is measured, not routine.",
  },
];

/** Energy sources and the loads they serve. Drives the energy flow diagram. */
export const energySources: string[] = ["Grid", "Solar", "Storage"];
export const energyLoads: string[] = ["Pumps", "Aeration", "Lighting", "Control systems"];

export const energyStrategies: { title: string; body: string }[] = [
  {
    title: "Energy monitoring",
    body: "Sub-metering by system area, so demand is attributed rather than estimated.",
  },
  {
    title: "Load optimisation",
    body: "Non-critical equipment scheduled away from peak demand, and duty matched to real load.",
  },
  {
    title: "Efficient equipment",
    body: "Pump and blower selection matched to the duty point, with variable-speed drives instead of throttling.",
  },
  {
    title: "Renewable integration",
    body: "Solar generation and storage where the site and load profile support it. Not assumed everywhere.",
  },
];

/** Inputs the control layer reads, and the actions it produces. */
export const aiInputs: string[] = [
  "Sensors",
  "Water quality",
  "Climate",
  "Fish data",
  "Crop data",
  "Energy",
  "Equipment",
];

export const aiOutputs: string[] = [
  "Prediction",
  "Optimisation",
  "Alerts",
  "Automation",
  "Forecasting",
];

/** The control loop, as a closed cycle rather than a one-way pipeline. */
export const aiLoop: string[] = [
  "Observe",
  "Understand",
  "Predict",
  "Optimise",
  "Act",
  "Learn",
];

/**
 * Interface concept only. No value is bound to a running system, so every entry
 * is labelled as a monitored channel rather than as a reading.
 */
export const systemChannels: { name: string; state: string }[] = [
  { name: "Water", state: "Monitored" },
  { name: "Energy", state: "Monitored" },
  { name: "Resource recovery", state: "Monitored" },
  { name: "Production", state: "Monitored" },
  { name: "Optimisation", state: "Monitored" },
];

/** Categories the efficiency index will score once operating data exists. */
export const indexCategories: string[] = [
  "Water efficiency",
  "Energy efficiency",
  "Resource recovery",
  "Production efficiency",
  "Operational stability",
];

/** Words revealed one at a time in the closing argument. */
export const connectedDomains: string[] = [
  "Food",
  "Water",
  "Energy",
  "Biology",
  "Data",
  "Intelligence",
];

export const measurementSequence: string[] = [
  "Baseline",
  "Measure",
  "Improve",
  "Verify",
  "Report",
];

export const researchAreas: string[] = [
  "AI-enabled agriculture",
  "Intelligent RAS control",
  "Integrated aquaculture and hydroponics",
  "Advanced water treatment",
  "Resource recovery",
  "Renewable energy integration",
  "Automation and control systems",
  "Digital twins",
  "Predictive maintenance",
  "Precision cultivation",
];

/**
 * Empty until real projects and real reports exist. The page renders an honest
 * explanation of what each will contain rather than a fabricated entry.
 */
export type SustainabilityProject = {
  id: string;
  name: string;
  system: string;
  challenge: string;
  approach: string;
  outcome: string;
  impact: string;
};

export const sustainabilityProjects: SustainabilityProject[] = [];

/** Fields every published case study will carry. Rendered as the empty-state promise. */
export const projectFields: string[] = [
  "Project",
  "System",
  "Challenge",
  "Engineering approach",
  "Measured outcome",
  "Resource impact",
];

/** Scroll chapters. `id` must match the `id` on the corresponding <section>. */
export const chapters: { id: string; label: string }[] = [
  { id: "approach", label: "Approach" },
  { id: "loop", label: "Loop" },
  { id: "water", label: "Water" },
  { id: "ras", label: "Aquaculture" },
  { id: "cultivation", label: "Cultivation" },
  { id: "energy", label: "Energy" },
  { id: "intelligence", label: "Intelligence" },
  { id: "circularity", label: "Circularity" },
  { id: "biodiversity", label: "Biodiversity" },
  { id: "metrics", label: "Measurement" },
  { id: "future", label: "Future" },
];

export type Disclosure = {
  title: string;
  body: string;
};

export const plannedDisclosures: Disclosure[] = [
  { title: "Sustainability report", body: "Annual summary of performance across every pillar." },
  { title: "Water performance", body: "Consumption, recirculation and recovery by system." },
  { title: "Energy performance", body: "Demand, intensity and renewable share." },
  { title: "Resource recovery", body: "Volumes captured, treated and returned to productive use." },
  { title: "Project assessments", body: "Per-project sustainability outcomes against baseline." },
];
