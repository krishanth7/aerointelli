import type { KnowledgeArea } from "../types";

export const fishBiology: KnowledgeArea = {
  number: "13",
  slug: "fish-biology",
  title: "Fish Biology",
  navSummary: "Metabolism, growth, excretion, stress and the numbers that describe them.",
  summary:
    "Every load the engineering has to handle originates in fish physiology. Understanding metabolism, excretion and the stress response is what turns a set of equipment into a production system.",
  difficulty: "intermediate",
  topics: ["fish", "water", "operations"],
  tags: ["metabolism", "growth", "excretion", "stress", "osmoregulation"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-03-30",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "The fish is the process. It takes in feed and oxygen and puts out growth, waste and carbon dioxide. Everything the filtration equipment does is a response to what the fish is doing, and the fish does more of it when it is warm, active or recently fed.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "For engineering purposes, a fish is a temperature-dependent converter. It takes in feed and dissolved oxygen and produces new tissue, ammonia, carbon dioxide and faecal solids. Its rates are governed by water temperature, because fish do not regulate their own body temperature, and by size, activity and feeding state.",
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
            "The design loads in a recirculating system are biological outputs. Oxygen demand, ammonia production, solids production and carbon dioxide production all come from the same physiology, which means they rise and fall together and cannot be treated as independent design cases.",
        },
        {
          kind: "list",
          items: [
            "Temperature governs metabolic rate, so it governs every load in the system simultaneously.",
            "Feeding drives a post-prandial rise in oxygen demand and ammonia excretion, so the design case is the hours after feeding rather than the daily average.",
            "Stress diverts energy away from growth and suppresses immune function, so handling practice has a direct production cost.",
            "Growth rate determines how the standing biomass, and therefore the treatment load, changes over a production cycle.",
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
          caption: "What happens to a meal",
          steps: [
            {
              label: "Ingestion and digestion",
              detail:
                "Feed is consumed and broken down. Digestibility determines what fraction is absorbed and what fraction leaves as faecal solids.",
            },
            {
              label: "Metabolic cost of feeding",
              detail:
                "Digestion and assimilation themselves consume energy and oxygen, producing a measurable rise in oxygen demand after every meal.",
            },
            {
              label: "Protein use and nitrogen excretion",
              detail:
                "Absorbed protein is used for growth or catabolised for energy. Nitrogen not retained is excreted, largely as ammonia across the gills.",
            },
            {
              label: "Respiration",
              detail:
                "Oxygen is consumed and carbon dioxide is produced continuously, at a rate rising with temperature, activity and feeding.",
            },
            {
              label: "Growth",
              detail:
                "What remains after maintenance, activity and waste is deposited as new tissue. Anything that raises maintenance cost reduces this residual.",
            },
          ],
        },
        {
          kind: "text",
          value:
            "The gill is the organ that couples the fish to the water. It is where oxygen is taken up, where carbon dioxide is released, where ammonia is excreted and where osmoregulation is performed. This is why gill health is central, and why a single tissue is affected by suspended solids, ammonia, carbon dioxide and pathogens alike.",
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Engineering principles",
      blocks: [
        {
          kind: "callout",
          tone: "established",
          title: "Smaller fish have higher metabolic rates per unit weight",
          value:
            "Metabolic rate does not scale in direct proportion to body mass. A kilogram of small fish consumes more oxygen and excretes more ammonia than a kilogram of large fish, which is why nursery systems are more intensively treated per unit of biomass than grow-out systems.",
        },
        {
          kind: "formula",
          name: "Specific growth rate",
          expression: "SGR = 100 x (ln W2 - ln W1) / t",
          terms: [
            { symbol: "SGR", meaning: "Specific growth rate", unit: "percent per day" },
            { symbol: "W1", meaning: "Mean weight at the start of the period", unit: "g" },
            { symbol: "W2", meaning: "Mean weight at the end of the period", unit: "g" },
            { symbol: "t", meaning: "Duration of the period", unit: "days" },
          ],
          example:
            "Consider a hypothetical cohort sampled at the start and end of a month. The expression converts the two mean weights into a daily percentage rate that can be compared across periods of different length.",
          limitations:
            "SGR is a descriptive statistic of a period that has already happened, not a prediction. It falls as fish grow, varies with temperature and feeding, and is highly sensitive to sampling error in the two mean weights. The appropriate expected values depend on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "list",
          items: [
            "Temperature sets the rate of everything. A system specified at one temperature carries different loads at another.",
            "Design oxygen and ammonia capacity for the post-feeding peak, not the daily mean.",
            "Osmoregulation is an energetic cost that varies with the match between water ionic composition and the species' requirements.",
            "The stress response is adaptive in the short term and damaging when sustained, which is why chronic mild stressors cost more production than occasional acute ones.",
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
            "Design around the species' physiological requirements — temperature, oxygen, ionic composition, light and velocity — rather than fitting the species to a generic system.",
            "Size treatment for the life stage with the highest specific rates, which is usually the smallest fish held.",
            "Provide water velocities appropriate to the species and size, giving exercise without imposing continuous energetic cost.",
            "Design handling, grading and transfer facilities to minimise the stress events that a production plan requires.",
            "Consider light regime and tank colour, which affect behaviour, feeding and stress in ways that are easy to overlook and expensive to retrofit.",
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
            "Observe the fish daily. Behaviour, feeding response and distribution in the tank are the earliest available indicators, ahead of any instrument.",
            "Record feed intake against offered feed. A drop in appetite precedes almost every problem.",
            "Minimise handling, and where handling is required, plan for the recovery period afterwards rather than resuming normal feeding immediately.",
            "Sample for weight on a schedule, using a method and sample size that produce a mean worth acting on.",
            "Interpret any physiological observation together with the water quality record from the same period.",
          ],
        },
      ],
    },
    {
      id: "common-problems",
      heading: "Common problems and troubleshooting",
      blocks: [
        {
          kind: "table",
          caption: "Biological symptoms and first checks",
          columns: ["Symptom", "Measure or observe first", "Common direction"],
          rows: [
            [
              "Appetite falling",
              "Dissolved oxygen at the tank outlet, dissolved CO2, ammonia and nitrite, temperature",
              "A water quality change, since appetite responds before most other signs",
            ],
            [
              "Growth below expectation with good water quality",
              "Feed intake, feed distribution, size grading, velocity, temperature stability",
              "Feed not reaching all fish, competition, or an energetic cost from velocity or temperature swings",
            ],
            [
              "Wide size variation within a cohort",
              "Feed distribution, feeding frequency, tank hydraulics, stocking history",
              "Uneven access to feed, often reinforced by dominance once variation begins",
            ],
            [
              "Fish at the surface or gathered at the inlet",
              "Dissolved oxygen at the outlet, then dissolved CO2",
              "Respiratory distress from oxygen deficit or CO2 accumulation",
            ],
            [
              "Elevated mortality following handling",
              "Handling method, duration out of water, oxygen during handling, recovery conditions",
              "Cumulative stress rather than a single cause, commonly with a secondary infection",
            ],
          ],
          basis:
            "A diagnostic ordering. Expected behaviours, growth rates and tolerances depend on species, life stage, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "maintenance",
      heading: "Routine biological monitoring",
      blocks: [
        {
          kind: "list",
          items: [
            "Record mortality daily by tank, with cause where it can be established.",
            "Sample weights at a fixed interval using a consistent method, so figures are comparable over the cycle.",
            "Log feed offered and feed consumed separately.",
            "Observe and record behaviour at the same time each day, when conditions are comparable.",
            "Keep the biological record and the water quality record in the same system, so they can be read against each other.",
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
            "Designing treatment capacity for average load rather than for the post-feeding peak.",
            "Assuming metabolic rates scale linearly with biomass, and under-treating nursery systems as a result.",
            "Treating handling as free, and absorbing the resulting growth loss as normal.",
            "Interpreting behavioural changes without checking water quality from the same period.",
            "Sampling too few fish and acting on a mean weight that is mostly sampling error.",
            "Applying published growth or excretion figures from one species, diet or temperature to another.",
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
            "Energy budgeting formalises the picture: ingested energy is partitioned between maintenance, activity, waste and growth. It makes explicit why an environmental stressor reduces growth without any change in feeding, and it is the framework within which temperature, velocity and water quality decisions can be compared against one another.",
        },
        {
          kind: "text",
          value:
            "Chronic low-grade stress is the most consequential and least visible production factor. It suppresses immune function and growth simultaneously, and it usually originates in something continuous — a marginal parameter, an ongoing noise or light disturbance, a velocity slightly too high — rather than in any discrete event.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Welfare indicators are still maturing",
          value:
            "Practical, non-invasive indicators of chronic stress and welfare state in production systems remain an active area of research, and commercial practice still relies substantially on behavioural observation.",
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
            "Fish physiology generates every load the engineering exists to handle. Temperature governs the rates, feeding produces the peaks, smaller fish are more intensive per unit weight, and the gill is where the fish meets every water quality parameter at once. Observation of the fish remains the earliest and most sensitive instrument on the farm.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Oxygen demand, ammonia, CO2 and solids are all outputs of one physiology and rise together.",
    "Temperature governs metabolic rate, so it governs every system load simultaneously.",
    "Metabolic rate per unit weight is higher in smaller fish, which makes nursery systems more intensive.",
    "Design for the post-feeding peak, not the daily average.",
    "The gill couples the fish to every water quality parameter at once.",
    "Behaviour and appetite change before instruments register a problem.",
  ],
  related: ["feed-management", "water-quality", "fish-health", "biomass"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance and species information covering fish biology and culture requirements.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research (ICAR)",
      description:
        "Research and extension material on cultured species biology and production under Indian conditions.",
    },
    {
      organisation: "Central Marine Fisheries Research Institute (CMFRI)",
      description: "Research publications on fish biology and aquaculture species in Indian waters.",
    },
  ],
};
