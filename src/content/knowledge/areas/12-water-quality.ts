import type { KnowledgeArea } from "../types";

export const waterQuality: KnowledgeArea = {
  number: "12",
  slug: "water-quality",
  title: "Water Quality",
  navSummary: "Every parameter: what it is, how to measure it, and how it interacts with the rest.",
  summary:
    "Water quality is not a list of independent numbers. The parameters move each other, and reading any one of them in isolation is the most common analytical error made on a recirculating farm.",
  difficulty: "intermediate",
  topics: ["water", "operations", "fish"],
  tags: ["pH", "alkalinity", "nitrite", "nitrate", "temperature", "monitoring"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-03-26",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Water quality is the farm's dashboard. But the gauges are connected to each other: change one and others move. A pH reading that drops is usually telling you something about the biofilter or the carbon dioxide, not about pH.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Water quality in a recirculating system is the set of physical and chemical parameters that determine whether fish can grow and whether the treatment processes can function. It covers dissolved gases, nitrogen compounds, the carbonate buffer system, temperature, solids and the ionic composition of the water.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why it matters",
      blocks: [
        {
          kind: "text",
          value:
            "In a closed loop there is no dilution. Every parameter is the accumulated result of what the fish produce, what the treatment train removes and what the exchange water replaces. Water quality is therefore the direct output of the system's engineering, and it is the earliest available evidence that something in that engineering has changed.",
        },
        {
          kind: "list",
          items: [
            "Fish performance responds to chronic marginal conditions long before any acute event occurs.",
            "Treatment processes have their own water quality requirements, so poor water degrades the equipment meant to fix it.",
            "Trends carry the information. A single reading tells you a value; a series tells you a direction.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "The parameters",
      blocks: [
        {
          kind: "table",
          caption: "Core water quality parameters and what each one is telling you",
          columns: ["Parameter", "What it is", "What moves it"],
          rows: [
            [
              "Dissolved oxygen",
              "Oxygen available for respiration and for nitrification",
              "Fish and bacterial consumption, temperature, transfer equipment performance, flow",
            ],
            [
              "Temperature",
              "Sets metabolic rate, gas solubility and nitrification rate",
              "Heating and cooling, ambient conditions, equipment heat input",
            ],
            [
              "Total ammonia nitrogen",
              "The sum of NH3 and NH4+ produced by protein metabolism",
              "Feed rate, protein content, biofilter capacity, solids left in the loop",
            ],
            [
              "Nitrite",
              "The intermediate between ammonia and nitrate",
              "The balance between the two nitrifying populations, particularly after disturbance",
            ],
            [
              "Nitrate",
              "The end product of nitrification",
              "Accumulation over time, controlled by water exchange or denitrification",
            ],
            [
              "pH",
              "Acidity, which sets ammonia toxicity and nitrification rate",
              "Alkalinity, dissolved carbon dioxide, nitrification, dosing",
            ],
            [
              "Alkalinity",
              "Buffering capacity against pH change",
              "Consumed by nitrification, replaced by dosing and by makeup water",
            ],
            [
              "Dissolved carbon dioxide",
              "Respiratory gas that depresses pH and impairs fish respiration",
              "Fish and biofilter production, degasser performance",
            ],
            [
              "Total suspended solids",
              "Particulate material in the water",
              "Feed input, digestibility, tank hydraulics, mechanical filtration performance",
            ],
            [
              "Salinity and hardness",
              "Ionic composition affecting osmoregulation and the carbonate system",
              "Source water, makeup, deliberate addition",
            ],
          ],
          basis:
            "A parameter reference, deliberately without target values. Appropriate ranges depend on species, life stage, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "How the parameters interact",
      blocks: [
        {
          kind: "flow",
          caption: "The chain that connects most water quality problems",
          steps: [
            {
              label: "Feed is delivered",
              detail:
                "Feeding sets ammonia production, solids production, oxygen demand and carbon dioxide production simultaneously.",
            },
            {
              label: "Nitrification consumes alkalinity",
              detail:
                "The biofilter removes ammonia and, in doing so, consumes buffering capacity and produces carbon dioxide.",
            },
            {
              label: "Alkalinity falls, CO2 rises",
              detail:
                "With buffer consumed and CO2 accumulating, pH begins to fall. Nothing has broken; the system is doing exactly what it does.",
            },
            {
              label: "pH falls, nitrification slows",
              detail:
                "The nitrifying population becomes less effective at lower pH, so ammonia removal declines.",
            },
            {
              label: "Ammonia rises",
              detail:
                "The operator observes an ammonia problem. The cause is in the buffer and the degasser, three steps upstream.",
            },
          ],
        },
        {
          kind: "callout",
          tone: "established",
          title: "Most water quality problems are chains, not points",
          value:
            "The parameter that moves visibly is usually the last link. Diagnosis means walking back along the chain — ammonia to pH, pH to alkalinity and carbon dioxide, carbon dioxide to the degasser, alkalinity to dosing — rather than correcting the reading that moved.",
        },
        {
          kind: "list",
          items: [
            "pH sets ammonia toxicity and nitrification rate in opposite directions, so it cannot be optimised for both.",
            "Temperature raises metabolic demand while reducing gas solubility.",
            "Solids left in the loop increase ammonia, oxygen demand and turbidity together.",
            "Water exchange rate controls nitrate and dissolved organics, and dilutes every other accumulating parameter as a side effect.",
          ],
        },
      ],
    },
    {
      id: "design-considerations",
      heading: "Design considerations",
      blocks: [
        {
          kind: "list",
          items: [
            "Define target ranges for the species and life stage before commissioning, and record the basis for each.",
            "Provide sampling points at every meaningful location: tank outlet, before and after the biofilter, after degassing, after oxygenation.",
            "Instrument continuously where the failure is fast — oxygen and temperature — and by scheduled testing where it is slow.",
            "Provide alkalinity dosing as controlled infrastructure with measurement, not as a manual addition.",
            "Set the exchange rate deliberately against nitrate and dissolved organic accumulation.",
            "Design the makeup water treatment for what the source water contains, including chlorine, metals and gas supersaturation.",
          ],
        },
      ],
    },
    {
      id: "operational-considerations",
      heading: "Operational considerations",
      blocks: [
        {
          kind: "list",
          items: [
            "Sample the same points at the same times, at a fixed interval that does not vary with workload.",
            "Record temperature, pH and feed alongside every reading, since several parameters are uninterpretable without them.",
            "Plot trends rather than reading tables. Direction and rate of change carry more information than any single value.",
            "Investigate a change before correcting it, because correcting the observed parameter often moves the problem elsewhere.",
            "Keep the log where the operators are, and make it the same record that engineering reviews.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "A reading without its conditions is an unusable record",
          value:
            "Ammonia without pH and temperature, oxygen without the sampling location, alkalinity without the dosing history — each is a number that cannot be interpreted later, when it matters most.",
        },
      ],
    },
    {
      id: "common-problems",
      heading: "Common problems and troubleshooting",
      blocks: [
        {
          kind: "table",
          caption: "Water quality symptoms and where the cause usually is",
          columns: ["Symptom", "Measure first", "Common direction"],
          rows: [
            [
              "pH drifting down over days",
              "Alkalinity, dissolved CO2 from pH and temperature, degasser airflow",
              "Alkalinity consumed by nitrification, or CO2 not being stripped",
            ],
            [
              "Ammonia rising with no feed change",
              "Alkalinity, pH, temperature, oxygen at the biofilter",
              "Nitrification slowed by buffer loss, temperature or oxygen limitation",
            ],
            [
              "Nitrite rising alone",
              "Recent cleaning, chemical exposure, temperature change",
              "The nitrite-oxidising population disturbed",
            ],
            [
              "Nitrate climbing steadily",
              "Exchange rate against feed input",
              "Exchange insufficient for the load, or a denitrification step underperforming",
            ],
            [
              "Everything reads acceptable but fish perform poorly",
              "Dissolved CO2, total dissolved gas, sampling location, instrument calibration",
              "An unmeasured parameter, or readings taken where conditions are best rather than worst",
            ],
            [
              "Readings changing sharply with no operational cause",
              "Instrument calibration and reagent condition",
              "Measurement error rather than a water quality event",
            ],
          ],
          basis:
            "A diagnostic ordering. Target values and thresholds depend on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "maintenance",
      heading: "Maintenance",
      blocks: [
        {
          kind: "list",
          items: [
            "Calibrate every probe on a written schedule and record each calibration.",
            "Verify routine test kits against a second method or a reference laboratory periodically.",
            "Check reagent expiry and storage conditions; degraded reagents fail toward plausible values.",
            "Clean sampling lines and sensor surfaces, which foul and then report the biofilm rather than the water.",
            "Review the trend record as a scheduled task rather than only during an incident.",
          ],
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      blocks: [
        {
          kind: "list",
          items: [
            "Reading parameters as independent numbers rather than as a connected system.",
            "Correcting the parameter that moved instead of the cause that moved it.",
            "Sampling at whichever point is convenient, and comparing readings from different points.",
            "Adjusting pH during an ammonia excursion, increasing the toxic fraction immediately.",
            "Trusting uncalibrated instruments, which is worse than having no instrument.",
            "Recording values without the conditions needed to interpret them later.",
            "Testing more frequently during an incident and less frequently during normal operation, which is exactly backwards for trend detection.",
          ],
        },
      ],
    },
    {
      id: "advanced",
      heading: "Advanced considerations",
      blocks: [
        {
          kind: "text",
          value:
            "The carbonate system deserves separate study. pH, alkalinity and dissolved carbon dioxide are three views of one equilibrium, and understanding which of them is driving a change is the difference between dosing chemicals continuously and fixing a degasser once.",
        },
        {
          kind: "text",
          value:
            "Beyond the routine parameters, mature systems accumulate dissolved organic matter, metals and micronutrients that are rarely measured and can affect fish performance and biofilter behaviour. Where a system shows persistent unexplained performance differences, extending the analytical panel is often more productive than re-examining the parameters already being logged.",
        },
      ],
    },
    {
      id: "summary",
      heading: "Summary",
      blocks: [
        {
          kind: "text",
          value:
            "Water quality is the observable output of the whole system. The parameters interact, most problems are chains rather than points, and interpretation depends on recording conditions alongside values. Measure consistently, trend continuously, walk back along the chain before intervening, and keep instruments calibrated — because every decision downstream rests on their readings.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Water quality parameters interact; reading them independently is the most common analytical error.",
    "pH, alkalinity and dissolved CO2 are three views of one carbonate equilibrium.",
    "Most problems are chains — the visible parameter is usually the last link, not the cause.",
    "pH cannot be optimised for both ammonia toxicity and nitrification rate simultaneously.",
    "A reading without its sampling point, temperature and pH cannot be interpreted later.",
    "Trends carry the information; single values only report a state.",
  ],
  related: ["tan-ammonia", "degassing", "oxygen", "biofiltration"],
  furtherReading: [
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension fact sheet series covering individual water quality parameters and their management.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on water quality requirements and monitoring for aquaculture production.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research (ICAR)",
      description:
        "Research and extension material on aquaculture water quality management in Indian conditions.",
    },
  ],
};
