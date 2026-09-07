import type { KnowledgeArea } from "../types";

export const tanAmmonia: KnowledgeArea = {
  number: "07",
  slug: "tan-ammonia",
  title: "TAN and Ammonia",
  navSummary: "Where ammonia comes from, what makes it toxic, and how much a system produces.",
  summary:
    "A single ammonia reading means little on its own. What matters is the split between the ionised and un-ionised forms, and that split is set by pH and temperature at the moment of measurement.",
  difficulty: "intermediate",
  topics: ["water", "fish", "filtration"],
  tags: ["TAN", "ammonia", "un-ionised ammonia", "pH", "toxicity"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-03-06",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Fish release ammonia the way people release carbon dioxide — it is a normal product of digesting protein. In water it exists in two forms. One is relatively harmless, the other is very toxic, and warm or high-pH water pushes more of it into the toxic form. So the same ammonia reading can be safe in one tank and dangerous in another.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Total ammonia nitrogen, TAN, is the sum of the two forms in which ammonia exists in water: un-ionised ammonia, NH3, and the ammonium ion, NH4+. A standard test kit or probe reports TAN — the total — not the split between them.",
        },
        {
          kind: "text",
          value:
            "That distinction is the entire subject. Un-ionised ammonia is the toxic form, because it is uncharged and crosses gill membranes readily. Ammonium is charged, crosses far less readily, and is markedly less harmful at the same concentration.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "TAN alone is not a toxicity measurement",
          value:
            "A TAN reading recorded without the pH and temperature at which it was taken cannot be interpreted. The fraction present as toxic un-ionised ammonia rises with both.",
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
            "Ammonia is the waste that closes the loop. It is produced continuously, it is toxic at low concentrations, and in a recirculating system there is no dilution to carry it away. Managing it is the reason the biofilter exists and the reason the system has a biomass ceiling.",
        },
        {
          kind: "list",
          items: [
            "Chronic exposure below acutely harmful levels still costs growth, feed conversion and disease resistance.",
            "The toxic fraction rises with pH, so a system that raises pH to help the biofilter simultaneously raises ammonia toxicity.",
            "Ammonia production tracks feeding, so the risk is highest at the moments of highest production intent.",
            "It is the parameter that most often reveals that a biofilter has been disturbed.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "How it works",
      blocks: [
        {
          kind: "text",
          value:
            "Fish digest dietary protein and excrete the resulting nitrogen, predominantly across the gills, as ammonia. A further contribution comes from the breakdown of uneaten feed and faeces in the water. Once in the water, ammonia partitions between NH3 and NH4+ according to an equilibrium governed by pH and temperature, and to a lesser extent by salinity.",
        },
        {
          kind: "flow",
          caption: "From feed to nitrate",
          steps: [
            {
              label: "Protein in feed",
              detail:
                "Dietary protein is digested and its nitrogen is either retained in new fish tissue or excreted.",
            },
            {
              label: "Excretion as TAN",
              detail:
                "Nitrogen not retained is released mainly across the gills as ammonia. Solids breaking down in the water add further TAN.",
            },
            {
              label: "Equilibrium in water",
              detail:
                "TAN divides into un-ionised NH3 and ionised NH4+. Higher pH and higher temperature shift the balance toward the toxic un-ionised form.",
            },
            {
              label: "Nitrification",
              detail:
                "Biofilter bacteria oxidise TAN to nitrite, then nitrite to nitrate, consuming oxygen and alkalinity.",
            },
            {
              label: "Nitrate removal",
              detail:
                "Nitrate accumulates and is controlled by water exchange or by a dedicated denitrification process.",
            },
          ],
        },
        {
          kind: "text",
          value:
            "The equilibrium responds immediately to a pH change. This is why a pH correction made to help one part of the system can produce an ammonia toxicity event without a single additional gram of nitrogen entering the water.",
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Engineering principles",
      blocks: [
        {
          kind: "formula",
          name: "TAN production from feed",
          expression: "P_TAN = F x PC x k",
          terms: [
            { symbol: "P_TAN", meaning: "Total ammonia nitrogen produced per day", unit: "kg N/day" },
            { symbol: "F", meaning: "Feed fed per day", unit: "kg/day" },
            { symbol: "PC", meaning: "Protein content of the feed, as a fraction", unit: "dimensionless" },
            { symbol: "k", meaning: "Fraction of feed nitrogen appearing in the water as TAN", unit: "dimensionless" },
          ],
          example:
            "Consider a hypothetical system fed 40 kg/day of a 0.40 protein feed. The nitrogen entering the system is fixed by that feeding; what fraction reaches the water as TAN depends on how much is retained by the fish and how much uneaten feed and faeces break down before removal.",
          limitations:
            "The coefficient k is not a universal constant. It varies with species, feed formulation, feeding rate, digestibility, fish size, temperature and how quickly solids are removed from the loop. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration, and should be confirmed against measured production in the system concerned.",
        },
        {
          kind: "list",
          items: [
            "TAN production is driven by feed, not by biomass. Two tanks holding the same weight of fish on different feeding regimes produce different loads.",
            "Un-ionised ammonia is the quantity of biological interest; TAN is the quantity measured. Converting between them requires pH and temperature.",
            "Effective solids removal reduces TAN production, because solids left in the loop mineralise into it.",
            "Ammonia removal capacity is biological and therefore lags load changes.",
            "Raising pH improves nitrification rate but increases un-ionised ammonia. The two effects pull in opposite directions and must be balanced deliberately.",
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
            "Base biofilter sizing on peak daily feed, at the least favourable temperature and pH combination the system will run at.",
            "Design solids removal as part of ammonia control, not as a separate objective.",
            "Provide alkalinity dosing so that pH can be held rather than allowed to drift, since a drifting pH moves the toxicity relationship as well as the nitrification rate.",
            "Provide sampling points that allow TAN to be measured entering and leaving the biofilter.",
            "Decide the exchange rate with ammonia excursion recovery in mind, not only nitrate control.",
          ],
        },
      ],
    },
    {
      id: "operational-considerations",
      heading: "Operational considerations",
      blocks: [
        {
          kind: "table",
          caption: "What to record alongside every TAN reading",
          columns: ["Record", "Why it is needed"],
          rows: [
            ["pH at the moment of sampling", "Sets the proportion of TAN present as toxic un-ionised ammonia."],
            ["Temperature", "Shifts the same equilibrium and also governs the biofilter's nitrification rate."],
            ["Salinity", "Modifies the equilibrium, and matters wherever brackish or marine water is used."],
            ["Sampling point and time", "TAN differs across the loop; a reading is only comparable to readings from the same point."],
            ["Feed fed in the preceding period", "Ammonia production tracks feeding, so feed history explains most short-term movement."],
            ["Nitrite", "Distinguishes a first-step problem from a second-step problem in the biofilter."],
            ["Alkalinity", "Falling alkalinity slows nitrification and is a common hidden cause of rising TAN."],
          ],
          basis:
            "A recording standard rather than a set of limits. Interpretation of any given value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "list",
          items: [
            "Sample at the same point and the same time of day, at a fixed interval, so readings form a trend.",
            "Treat a rising TAN reading as a question about the biofilter, the alkalinity and the feed history before it is treated as a number to correct.",
            "Do not adjust pH upward during an ammonia excursion without recognising that it increases the toxic fraction immediately.",
            "Reduce feeding as a first response to a genuine excursion, because it is the only lever that acts on production rather than on removal.",
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
          caption: "Ammonia symptoms and first checks",
          columns: ["Symptom", "Measure first", "Common direction"],
          rows: [
            [
              "TAN rising after a feed increase",
              "Feed history, TAN across the biofilter, nitrite",
              "Load increased faster than the nitrifying population could grow",
            ],
            [
              "TAN rising with no feed change",
              "Alkalinity, pH, temperature, dissolved oxygen at the biofilter",
              "Alkalinity depletion, temperature drop, or oxygen limitation suppressing nitrification",
            ],
            [
              "TAN stable but fish showing stress",
              "pH and temperature at the time of sampling",
              "The un-ionised fraction has risen even though the total has not",
            ],
            [
              "TAN and nitrite both rising sharply",
              "Makeup water for chlorine, recent medication or disinfectant use",
              "A toxic exposure suppressing both nitrifying populations",
            ],
            [
              "TAN high in one tank only",
              "Flow to that tank, tank floor condition, feeding at that tank",
              "A hydraulic or feeding issue at the tank rather than a loop-wide treatment issue",
            ],
          ],
          basis:
            "A diagnostic ordering. Thresholds depend on species, loading, temperature, water chemistry and system configuration.",
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
            "Calibrate pH probes on the same schedule as ammonia testing, since a pH error becomes a toxicity error.",
            "Check test reagents against their expiry and store them as specified; degraded reagents fail quietly.",
            "Cross-check the routine test method against a second method periodically.",
            "Maintain solids removal equipment, because its performance directly changes ammonia production.",
            "Confirm alkalinity dosing is functioning, not merely switched on.",
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
            "Recording TAN without pH and temperature, producing a log that cannot be interpreted afterwards.",
            "Comparing readings taken at different points in the loop as if they were the same measurement.",
            "Raising pH during an ammonia excursion and increasing the toxic fraction.",
            "Assuming a published nitrogen excretion coefficient applies to a different species, diet or temperature.",
            "Attributing rising ammonia to biofilter size when the cause is alkalinity depletion.",
            "Leaving uneaten feed in the system and treating the resulting ammonia as fish excretion.",
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
            "Nitrogen retention in the fish is the upstream lever. Feed formulation, digestibility and feeding accuracy determine how much of the nitrogen bought as feed ends up as fish rather than as dissolved waste, and improving that ratio reduces the treatment duty rather than treating it more effectively.",
        },
        {
          kind: "text",
          value:
            "The interaction between ammonia, nitrite and carbon dioxide in the blood of the fish is not a simple sum of independent stressors. Their combined physiological effect is why water quality is managed as a set of interacting parameters rather than as a list of individual limits.",
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
            "Ammonia enters the water as a consequence of feeding, exists in a toxic and a much less toxic form, and moves between them with pH and temperature. Measure TAN, record the conditions with it, remove solids so less is produced, and protect the biofilter that removes what remains. An ammonia problem is almost always a biofilter, alkalinity or solids problem observed at the ammonia test.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "TAN is the sum of un-ionised NH3 and ionised NH4+; only the first is markedly toxic.",
    "The split is set by pH and temperature, so a TAN reading without both is uninterpretable.",
    "Ammonia production tracks feed, not biomass.",
    "Solids left in the loop mineralise into additional TAN, so mechanical filtration reduces ammonia load.",
    "Raising pH improves nitrification but increases the toxic ammonia fraction immediately.",
    "Rising TAN is usually a symptom of biofilter capacity, alkalinity or solids — investigate before correcting.",
  ],
  related: ["biofiltration", "water-quality", "fish-biology", "tss-solids"],
  furtherReading: [
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension fact sheets on ammonia, nitrite and water quality management in aquaculture systems.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on water quality requirements and management for aquaculture production.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
  ],
};
