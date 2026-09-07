import type { KnowledgeArea } from "../types";

export const feedManagement: KnowledgeArea = {
  number: "15",
  slug: "feed-management",
  title: "Feed Management",
  navSummary: "Feed rate, conversion, quality, scheduling and waste.",
  summary:
    "Feed is the largest operating cost and the single input that drives every treatment load. Managing it well is simultaneously the biggest cost lever and the biggest water quality lever on the farm.",
  difficulty: "intermediate",
  topics: ["operations", "fish", "economics"],
  tags: ["FCR", "feeding rate", "feed quality", "overfeeding", "feed storage"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-04-07",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Feed is the biggest bill and the biggest source of pollution in the same bag. Feed too little and the fish grow slowly. Feed too much and you pay twice — once for the pellet, once for cleaning up what the fish did not eat.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Feed management covers what is fed, how much, how often, how it is delivered and how the result is measured. In a recirculating system it also covers the consequences: every kilogram fed produces a corresponding oxygen demand, ammonia load, solids load and carbon dioxide load.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why it matters",
      blocks: [
        {
          kind: "callout",
          tone: "established",
          title: "Feed is the input that sets every treatment load",
          value:
            "Oxygen consumption, ammonia production, solids production and carbon dioxide production all scale with feed. A feeding decision is therefore a water quality decision made hours in advance, and a change in feeding regime is a change in the duty on every unit process.",
        },
        {
          kind: "list",
          items: [
            "Feed is typically the largest single operating cost in fish production.",
            "Uneaten feed is paid for as feed, and then paid for again as solids and ammonia to be treated.",
            "Feed conversion links biology and economics directly: it is the ratio the whole production plan is built on.",
            "Feed quality degrades in storage, and degraded feed produces poorer conversion and more waste from the same expenditure.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "How it works",
      blocks: [
        {
          kind: "flow",
          caption: "From feed decision to system load",
          steps: [
            {
              label: "Ration is set",
              detail:
                "Feeding rate is determined from biomass, fish size, temperature and observed appetite, expressed as a proportion of body weight per day or as a fixed quantity per tank.",
            },
            {
              label: "Delivery",
              detail:
                "Feed is distributed by hand or by automatic feeder, over a period and across an area. Distribution determines whether all fish get access or only the dominant ones.",
            },
            {
              label: "Intake and refusal",
              detail:
                "What is eaten drives growth and metabolic load. What is not eaten becomes solids at full mass and dissolves over the following hours.",
            },
            {
              label: "Metabolic response",
              detail:
                "Oxygen demand and ammonia excretion rise after feeding and remain elevated. This is the period against which the system should be designed and assessed.",
            },
            {
              label: "Treatment load",
              detail:
                "The biofilter, mechanical filter and oxygenation system all carry the consequence of the feeding decision, on a lag of hours.",
            },
          ],
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Engineering principles",
      blocks: [
        {
          kind: "formula",
          name: "Feed conversion ratio",
          expression: "FCR = Feed fed / Biomass gained",
          terms: [
            { symbol: "FCR", meaning: "Feed conversion ratio", unit: "dimensionless" },
            { symbol: "Feed fed", meaning: "Total feed delivered over the period", unit: "kg" },
            { symbol: "Biomass gained", meaning: "Increase in standing biomass over the period", unit: "kg" },
          ],
          example:
            "Consider a hypothetical cohort over one month. Dividing total feed delivered by the biomass increase over the same period gives the ratio actually achieved, which can then be compared against the figure the production plan assumed.",
          limitations:
            "FCR is only as accurate as the biomass estimate, which depends on sampling method and sample size. Whether mortality biomass is included changes the result, so the convention must be stated. It is a period average and conceals variation within the period. The appropriate expected value depends on species, diet, life stage, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "list",
          items: [
            "Feeding rate as a proportion of body weight falls as fish grow, so a fixed percentage applied through a cycle progressively overfeeds.",
            "Temperature governs appetite and digestion, so the ration must follow temperature rather than the calendar.",
            "Frequency and distribution matter as much as quantity: the same daily ration delivered differently produces different growth and different size variation.",
            "Physical feed quality — pellet integrity, dust content, water stability — determines how much of the feed is available to be eaten before it becomes waste.",
            "Feeding is the only immediate lever available for reducing system load during an excursion.",
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
            "Provide feed distribution that reaches the whole tank rather than one point, so access is not decided by dominance.",
            "Specify feeders that can be calibrated and verified, and provide the means to check delivered quantity against set quantity.",
            "Design feed storage for cool, dry, pest-free conditions with stock rotation, because storage losses are silent.",
            "Size treatment capacity to the peak feeding scenario, then confirm the system holds through the post-feeding demand peak.",
            "Provide the ability to observe feeding, whether directly or by camera, because unobserved feeding is unmanaged feeding.",
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
            "Feed to observed appetite, adjusting the planned ration rather than following it regardless of response.",
            "Record feed offered and feed consumed as separate figures. The difference is the most useful number on the sheet.",
            "Treat a fall in appetite as a water quality or health signal and investigate before adjusting the ration downward and moving on.",
            "Reduce feeding as the first response to any water quality excursion, because it acts on production of load rather than removal.",
            "Increase feeding in steps after any interruption, because the biofilter must recover its capacity alongside the fish recovering appetite.",
            "Rotate feed stock and inspect each batch for dust, breakage and odour on delivery.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "The gap between offered and consumed is the control signal",
          value:
            "Recording only the quantity offered hides the two things worth knowing: whether appetite is changing, and how much feed is entering the water as waste rather than as fish.",
        },
      ],
    },
    {
      id: "common-problems",
      heading: "Common problems and troubleshooting",
      blocks: [
        {
          kind: "table",
          caption: "Feeding symptoms and first checks",
          columns: ["Symptom", "Measure or observe first", "Common direction"],
          rows: [
            [
              "Appetite falling across a tank",
              "Dissolved oxygen at the outlet, dissolved CO2, ammonia and nitrite, temperature",
              "A water quality change, since appetite is one of the earliest responses",
            ],
            [
              "FCR worse than planned",
              "Uneaten feed, biomass estimate quality, mortality accounting, feed storage condition",
              "Overfeeding, a poor biomass estimate, or feed degraded in storage",
            ],
            [
              "Solids and ammonia load higher than the feeding record implies",
              "Feeder calibration, uneaten feed, feed dust content",
              "Actual delivery exceeding recorded delivery, or feed breaking down before it is eaten",
            ],
            [
              "Wide size variation developing",
              "Feed distribution across the tank, feeding frequency",
              "Point feeding allowing dominant fish to monopolise the ration",
            ],
            [
              "Oxygen falling only after feeding",
              "Oxygen through the post-feeding peak",
              "Transfer capacity adequate for average but not peak metabolic demand",
            ],
          ],
          basis:
            "A diagnostic ordering. Appropriate feeding rates and conversion expectations depend on species, diet, life stage, loading, temperature, water chemistry and system configuration.",
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
            "Calibrate feeders on a fixed schedule and after any change of feed size or type.",
            "Clean feeders and hoppers to prevent caking and blockage, which cause silent under-delivery.",
            "Inspect feed storage for moisture, pests and temperature, and enforce stock rotation.",
            "Check each delivered batch for physical quality and record the batch against the production period it was used in.",
            "Reconcile feed stock against recorded feeding periodically; a persistent discrepancy indicates a measurement or delivery problem.",
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
            "Feeding to a table rather than to observed appetite.",
            "Applying a fixed percentage of body weight through a whole cycle, and overfeeding progressively as fish grow.",
            "Recording only feed offered, so appetite trends are invisible.",
            "Increasing feeding in a single step after stocking or after an interruption, ahead of biofilter capacity.",
            "Storing feed in warm humid conditions and attributing the resulting conversion loss to the fish.",
            "Treating uneaten feed as a small loss rather than as a doubled cost.",
            "Reporting FCR without stating whether mortality biomass is included.",
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
            "Feed formulation is where cost and load are decided together. Higher digestibility reduces solids production for the same nutrition; nitrogen and phosphorus content set the treatment duty; and ingredient choice determines both cost volatility and the sustainability position of the whole operation.",
        },
        {
          kind: "text",
          value:
            "Automated feeding response systems use acoustic, optical or waste-detection methods to adjust delivery to actual appetite in real time. The concept directly addresses the largest source of avoidable waste, and its practical value depends on how reliably the sensing performs in the specific tank, species and turbidity conditions of the system concerned.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Appetite sensing is an area of active development",
          value:
            "Automated detection of satiation in commercial tanks is advancing, and the performance of any particular method should be established in the system it is deployed in rather than assumed from vendor specification.",
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
            "Feed is simultaneously the largest cost and the source of every treatment load. Feed to appetite, record offered and consumed separately, follow temperature rather than the calendar, distribute across the tank rather than at a point, and protect feed quality in storage. Reducing feed is also the fastest available lever when the system is under stress.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Feed drives oxygen demand, ammonia, solids and CO2 — a feeding decision is a water quality decision.",
    "Uneaten feed is paid for twice: as feed and as treatment load.",
    "Feeding rate as a percentage of body weight falls as fish grow.",
    "Record offered and consumed separately; the gap is the control signal.",
    "FCR is only as good as the biomass estimate and the stated mortality convention.",
    "Reducing feeding is the fastest lever during a water quality excursion.",
  ],
  related: ["fish-biology", "biomass", "tss-solids", "economics"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on aquaculture feeds, feed management and responsible feed use.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description: "Extension fact sheets on feeding practice and feed management in aquaculture.",
    },
    {
      organisation: "Indian Council of Agricultural Research (ICAR)",
      description: "Research and extension material on aquafeed formulation and feeding under Indian conditions.",
    },
  ],
};
