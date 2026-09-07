import type { KnowledgeArea } from "../types";

export const biomass: KnowledgeArea = {
  number: "16",
  slug: "biomass",
  title: "Biomass Management",
  navSummary: "Standing biomass, sampling, grading and production forecasting.",
  summary:
    "Standing biomass is the number every other number depends on. It sets the feed, the treatment load and the harvest forecast — and on most farms it is an estimate carrying more error than anyone allows for.",
  difficulty: "intermediate",
  topics: ["operations", "fish", "economics"],
  tags: ["standing biomass", "sampling", "grading", "density", "forecasting"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-04-11",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "You cannot weigh every fish, so you weigh some and multiply. That estimate decides how much you feed, how hard the filters work and when you can sell. If the estimate is wrong, everything built on it is wrong in the same direction.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Standing biomass is the total live weight of fish held in a tank or system at a point in time. It is the product of the number of fish present and their mean weight, and both terms are estimates: the count carries the accumulated error of stocking records and mortality counting, and the mean weight carries sampling error.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Biomass is an estimate, and its error propagates",
          value:
            "Feed rations, treatment loading, density figures, feed conversion and harvest forecasts are all derived from the biomass estimate. An error in it does not stay contained — it appears in every derived figure, and it appears with the same sign.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why it matters",
      blocks: [
        {
          kind: "list",
          items: [
            "Feeding is set from biomass, so an overestimate causes systematic overfeeding and the water quality consequences that follow.",
            "Treatment load is proportional to feed, so a biomass error becomes a load error in the biofilter and oxygen system.",
            "Density limits are expressed against biomass, and exceeding them affects welfare, growth uniformity and disease risk.",
            "Harvest forecasting, contract commitments and cash flow all rest on the same estimate.",
            "Feed conversion cannot be calculated more accurately than the biomass figures used to derive it.",
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
          caption: "How the biomass figure is built and where error enters",
          steps: [
            {
              label: "Stocking count",
              detail:
                "The initial number is established by counting or by batch weight and mean weight. Any error here persists for the whole cycle.",
            },
            {
              label: "Mortality accounting",
              detail:
                "Every mortality removed must be recorded. Unrecorded losses inflate the population figure permanently, and the inflation grows over time.",
            },
            {
              label: "Weight sampling",
              detail:
                "A sample of fish is caught, weighed and released. Sample size, catching method and whether the sample is representative determine the reliability of the resulting mean.",
            },
            {
              label: "Biomass calculation",
              detail:
                "Population multiplied by mean weight. Both terms carry error, and the errors compound rather than cancel.",
            },
            {
              label: "Reconciliation at harvest",
              detail:
                "Harvest weight is the only exact measurement of the cycle. The difference between it and the final estimate is the accumulated error, and it should be examined rather than absorbed.",
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
          name: "Standing biomass and density",
          expression: "B = N x W ; D = B / V",
          terms: [
            { symbol: "B", meaning: "Standing biomass", unit: "kg" },
            { symbol: "N", meaning: "Number of fish present", unit: "count" },
            { symbol: "W", meaning: "Mean individual weight", unit: "kg" },
            { symbol: "D", meaning: "Stocking density", unit: "kg/m3" },
            { symbol: "V", meaning: "Tank working volume", unit: "m3" },
          ],
          example:
            "Consider a hypothetical tank holding 3,500 fish at a sampled mean weight of 100 g. The standing biomass is 350 kg, and dividing by the working volume gives the density figure against which feeding and treatment loading are assessed.",
          limitations:
            "Both N and W are estimates. Density expressed per unit volume says nothing about whether the treatment system can support that biomass, which depends on flow, oxygen supply and biofilter capacity rather than on volume. The appropriate density depends on species, life stage, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "list",
          items: [
            "Density in kilograms per cubic metre is a convenience figure, not a capacity limit. The real limits are oxygen delivery and ammonia removal per unit of flow.",
            "Sampling error falls with sample size, but only if the sample is representative — a net that preferentially catches slower fish produces a biased mean regardless of how many are weighed.",
            "Population error accumulates monotonically, because unrecorded mortality only ever inflates the count.",
            "Grading changes the distribution as well as the mean, so post-grading estimates must be rebuilt rather than adjusted.",
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
            "Provide sampling and grading infrastructure — crowding, netting, weighing and transfer — as designed facilities rather than improvised arrangements.",
            "Size tanks and treatment capacity for the biomass at the end of the cycle, when it is highest.",
            "Plan the production cycle so that peak biomass across all tanks does not coincide unnecessarily, if treatment is shared.",
            "Provide accurate weighing equipment appropriate to the sample size and fish size in use.",
            "Design record-keeping so that stocking, mortality, sampling and harvest are one continuous account per batch.",
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
            "Sample on a fixed schedule, with a defined method and a defined minimum sample size, so results are comparable across the cycle.",
            "Record every mortality, every day, by tank. This is the single highest-value record for biomass accuracy.",
            "Sample before feeding, consistently, so gut content does not vary between samplings.",
            "Treat sampling as a stress event: minimise duration, maintain oxygen during handling, and allow recovery before resuming full feeding.",
            "Reconcile estimate against actual at every harvest and grading, and carry the finding into the next cycle's method.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Mortality recording is biomass management",
          value:
            "Weight sampling attracts attention because it is a visible procedure. Unrecorded mortality is the larger and quieter source of biomass error, and it compounds across the whole cycle.",
        },
      ],
    },
    {
      id: "common-problems",
      heading: "Common problems and troubleshooting",
      blocks: [
        {
          kind: "table",
          caption: "Biomass symptoms and first checks",
          columns: ["Symptom", "Check first", "Common direction"],
          rows: [
            [
              "Harvest weight well below the final estimate",
              "Mortality record completeness, sampling method, stocking count",
              "Unrecorded mortality, or a sampling method biased toward larger fish",
            ],
            [
              "FCR appears to improve or worsen abruptly with no operational change",
              "The biomass estimate underlying both periods",
              "A sampling artefact rather than a real change in conversion",
            ],
            [
              "Water quality load higher than the biomass estimate suggests",
              "Feeding record against estimate, actual feed delivery, uneaten feed",
              "Biomass underestimated, or feed delivery exceeding the record",
            ],
            [
              "Growing size variation within a tank",
              "Size distribution at sampling, not only the mean",
              "Divergence developing that a mean weight cannot reveal",
            ],
            [
              "Successive samplings giving inconsistent means",
              "Sample size, catching method, timing relative to feeding",
              "Sampling error rather than genuine variation in growth",
            ],
          ],
          basis:
            "A diagnostic ordering. Appropriate sample sizes, densities and growth expectations depend on species, life stage, loading, temperature, water chemistry and system configuration.",
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
            "Calibrate and verify weighing equipment on a schedule.",
            "Inspect and maintain nets, crowders and graders, because damaged handling equipment injures fish and biases samples.",
            "Audit the batch record periodically against physical stock and against feed consumption.",
            "Review the sampling protocol after each cycle against the harvest reconciliation.",
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
            "Treating the biomass estimate as a measurement and never quantifying its error.",
            "Recording mortality inconsistently, or in a separate place from the stocking record.",
            "Sampling too few fish, then acting on a mean that is mostly noise.",
            "Using a catching method that preferentially samples one part of the size distribution.",
            "Recording only the mean weight and discarding the distribution.",
            "Absorbing the harvest discrepancy into the accounts without investigating what produced it.",
            "Using density in kilograms per cubic metre as if it were a system capacity limit.",
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
            "Optical and acoustic biomass estimation aims to remove handling from the measurement entirely, inferring size distribution from imaging in the tank. The attraction is obvious — continuous estimates with no stress event — and the practical accuracy depends on turbidity, density, species behaviour and calibration in the specific system rather than on any general specification.",
        },
        {
          kind: "text",
          value:
            "Production planning across multiple tanks and batches is where biomass management becomes an operations research problem: stocking intervals, grading points and harvest windows determine whether treatment capacity is used evenly or in peaks, and a plan that is optimal for the market may be poor for the plant.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Non-invasive biomass estimation is advancing but system-specific",
          value:
            "The accuracy achievable by imaging-based biomass estimation in commercial tanks varies substantially with conditions, and should be established by comparison against physical sampling in the system concerned.",
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
            "Standing biomass is an estimate that every operational and financial figure inherits. Its accuracy comes from complete mortality recording and disciplined, representative sampling — not from the sophistication of the calculation. Reconcile against harvest every cycle, keep the size distribution rather than only the mean, and remember that density per unit volume is a convenience, while oxygen and ammonia removal are the real limits.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Biomass is an estimate whose error propagates into feeding, loading, FCR and forecasting alike.",
    "Complete mortality recording contributes more to accuracy than any sampling refinement.",
    "Sampling method matters as much as sample size — a biased catch gives a biased mean.",
    "Keep the size distribution, not only the mean weight.",
    "Density per cubic metre is a convenience figure; oxygen and ammonia removal are the real capacity limits.",
    "Harvest weight is the only exact measurement in the cycle — reconcile against it.",
  ],
  related: ["feed-management", "fish-biology", "operations", "economics"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on aquaculture production planning, stocking and record keeping.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description: "Extension fact sheets on stocking, sampling and production management practices.",
    },
  ],
};
