import type { KnowledgeArea } from "../types";

export const propagation: KnowledgeArea = {
  number: "05",
  slug: "propagation",
  title: "Plant Propagation and Nursery Management",
  navSummary: "Starting the crop: seed germination, plug media, environmental staging and hardening off before transplant.",
  summary:
    "A commercial crop is bounded by the quality and uniformity of its transplants. A seedling that stalls, stretches or develops root pathogen pressure in the nursery carries those deficits into production, where correcting them costs far more in time, labour and lost yield. Managing germination temperature, nursery lighting, root moisture and transplant timing ensures every production site begins with high vigour.",
  difficulty: "intermediate",
  topics: ["production", "crops", "biology", "operations"],
  tags: [
    "propagation",
    "germination",
    "nursery management",
    "rockwool plugs",
    "coco plugs",
    "transplanting",
    "seedling vigour",
  ],
  species: ["Lettuce", "Tomato", "Capsicum", "Cucumber", "Herbs"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-23",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Transplants set the ceiling on crop yield. Germinate seed in dedicated plugs at controlled temperature and high humidity, provide immediate photon flux upon emergence to prevent stretching, feed at low electrical conductivity, and transplant before root boundness or media breakdown occurs.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Propagation is the stage with the highest plant density on any farm. Tens of thousands of seedlings occupy a fraction of the floor space required for finishing, making environmental control in the nursery both cost-effective and critical. Mistakes made here multiply across the entire production acreage.",
        },
        {
          kind: "text",
          value:
            "Successful propagation requires staging the environment across three distinct phases: germination (darkness or diffuse light, high humidity, stable medium temperature), seedling emergence and cotyledon expansion (high light uniformity, modest nutrient dosing, active air movement), and hardening off (gradual acclimatisation to greenhouse solar radiation and lower humidity).",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why nursery quality sets crop yield",
      blocks: [
        {
          kind: "text",
          value:
            "A weak or uneven seedling never achieves parity with an undamaged peer. In short-cycle crops like butterhead lettuce, losing three days of initial growth reduces final head mass at harvest by ten to fifteen percent. In vine crops like tomatoes, hypocotyl stretching leads to lodging, weak early stem diameter and delayed first flower trusses.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The nursery is the bio-barrier of the farm",
          value:
            "Pathogens introduced in propagation—particularly Pythium, damping-off fungi and seed-borne viruses—are inoculated directly into production channels. The nursery must operate as the cleanest sanitary zone on the facility.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Plug media selection" },
        {
          kind: "text",
          value:
            "Propagation plugs must balance capillary water retention with high air-filled porosity. Pre-formed rockwool cubes, stabilized coco coir plugs and cellular sponge media offer predictable geometry and clean detachment. Loose media mixtures must be uniformly consolidated without compaction.",
        },
        { kind: "subheading", value: "Moisture and aeration balance" },
        {
          kind: "text",
          value:
            "Over-wetting plugs during the first 48 hours excludes oxygen and invites seed rot. Plugs should be fully saturated and drained prior to seeding, then maintained in a high-humidity chamber (90–95% RH) without continuous heavy overhead watering until radicle emergence.",
        },
        {
          kind: "table",
          caption: "Typical environmental staging for commercial propagation",
          columns: ["Phase", "Temperature (°C)", "Relative Humidity (%)", "Photoperiod / DLI", "Target EC (mS/cm)"],
          rows: [
            ["Germination", "22 – 25", "90 – 95", "Dark or 20 µmol/m²/s", "0.4 – 0.8"],
            ["Cotyledon / First True Leaf", "20 – 23", "70 – 80", "16 h / 10–12 mol/m²/d", "0.8 – 1.2"],
            ["Nursery Growth", "19 – 22", "65 – 75", "16 h / 12–15 mol/m²/d", "1.2 – 1.6"],
            ["Hardening / Pre-Transplant", "Match production", "Match production", "Match production", "Match production"],
          ],
          basis: "Values vary with species, cultivar, regional ambient climate and greenhouse light transmission.",
        },
      ],
    },
    {
      id: "practice",
      heading: "Field engineering and nursery practice",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            "Use dedicated ebb-and-flow benches or sub-irrigation trays to keep seedling foliage dry and suppress foliar fungal diseases.",
            "Install vertical airflow fans above benches to minimize microclimate temperature gradients and strengthen stems.",
            "Grade seedlings strictly prior to transplanting; discard stunted or off-type plants rather than nursing them into production.",
            "Disinfect propagation trays, benches and working surfaces with oxidising sanitisers between every batch.",
          ],
        },
      ],
    },
    {
      id: "troubleshooting",
      heading: "Troubleshooting propagation problems",
      blocks: [
        {
          kind: "table",
          caption: "Diagnostic guide for seedling anomalies",
          columns: ["Symptom", "Probable Primary Cause", "Corrective Action"],
          rows: [
            ["Etiolation / weak spindly stems", "Insufficient light intensity or excessive air temperature", "Increase PPFD immediately; lower day/night temperature setpoints"],
            ["Damping-off / stem collapse at base", "Pythium or Rhizoctonia in over-saturated media", "Reduce irrigation frequency, improve bench airflow, sanitize trays"],
            ["Slow, uneven germination", "Fluctuating substrate temperature or poor seed contact", "Verify bottom heat cable calibration; maintain uniform plug pre-soak"],
            ["Yellowing cotyledons", "Nutrient deficiency or waterlogged root zone", "Verify plug drainage; initiate balanced low-EC starter fertigation"],
          ],
          basis: "Observations derived from commercial CEA nursery diagnostics.",
        },
      ],
    },
    {
      id: "advanced",
      heading: "Advanced knowledge",
      blocks: [
        {
          kind: "text",
          value:
            "Modern indoor nurseries deploy spectrum-tuned LED recipes with elevated blue (450 nm) fractions (15–25%) to suppress stem elongation, promote compact morphology and stimulate early chlorophyll synthesis. Far-red end-of-day pulses are calibrated to manage hypocotyl extension without inducing excessive shade-avoidance response.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Transplant uniformity dictates final harvest uniformity and packing efficiency.",
    "The germination chamber must maintain steady temperature and high humidity without waterlogging.",
    "Light must be introduced immediately upon radicle emergence to prevent irreversible seedling stretching.",
    "Sub-irrigation (ebb-and-flow) is superior to overhead misting for keeping foliage dry and disease-free.",
    "Rigorous seedling grading protects production acreage from carrying unproductive plants.",
  ],
  related: ["fundamentals", "substrates", "root-zone", "crop-knowledge"],
  furtherReading: [
    {
      organisation: "International Society for Horticultural Science",
      description: "Working groups on seedling physiology, plug technology and greenhouse propagation.",
    },
    {
      organisation: "Wageningen University and Research",
      description: "Horticultural research publications on young plant production and lighting recipes.",
    },
  ],
};
