import type { KnowledgeArea } from "../types";

export const feedNutrition: KnowledgeArea = {
  number: "08",
  slug: "feed-nutrition",
  title: "Feed and Nutrition",
  navSummary: "What farmed aquatic animals require, how feeds are formulated to deliver it, and why feeding is the largest lever on both cost and water quality.",
  summary:
    "Feed is normally the largest single operating cost on a fed aquaculture farm, and it is simultaneously the source of almost all the waste the farm has to treat. Nutrition therefore sits at the junction of biology and engineering: the diet has to meet a requirement expressed in amino acids, fatty acids, minerals and vitamins, and the feeding regime has to deliver it without loading the water beyond what the system can clear.",
  difficulty: "intermediate",
  topics: ["production", "biology", "economics", "operations"],
  tags: ["formulated feed", "protein requirement", "feed conversion", "feeding regime", "nutrient loading", "feed management"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-29",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Farmed fish and shrimp eat a manufactured pellet designed to supply everything they need to grow. Part of that pellet becomes flesh, and the rest becomes faeces, dissolved nitrogen and oxygen demand in the water. Good feeding means giving enough for growth without giving more than the animal and the water treatment can absorb.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Nutrition in aquaculture is the study of what an aquatic animal requires to build tissue, and feed technology is the study of how to package those requirements into something that survives manufacture, storage and immersion in water long enough to be eaten. The two disciplines are usually taught separately, but on a farm they arrive as one question: what goes into the feeder, how much of it, and how often.",
        },
        {
          kind: "text",
          value:
            "Aquatic animals differ from terrestrial livestock in ways that change the arithmetic. They are ectothermic, so they spend nothing maintaining body temperature and their intake and growth track water temperature directly. They excrete nitrogen mainly as ammonia across the gill rather than as urea, so protein metabolism appears in the water almost immediately. They are supported by water, so the skeletal and postural cost of being large is lower. The combined effect is that a well-fed fish converts feed to gain more efficiently than most farmed terrestrial species, but only within a narrow band of conditions.",
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
            "On most fed farms, feed dominates the variable cost structure. A change in feed conversion that looks small on paper compounds across an entire cycle and across every unit on the site, and it moves the margin more reliably than almost any other operational decision. That alone would justify treating feeding as a managed process rather than a routine chore.",
        },
        {
          kind: "text",
          value:
            "The second reason is environmental and engineering rather than financial. Every kilogram of feed that is not converted to harvestable biomass appears somewhere else: as settleable solids, as dissolved organic carbon, as total ammonia nitrogen, and as oxygen consumed in oxidising all of it. The feed rate is therefore the true control input for the whole treatment train. A farm that feeds beyond its clearance capacity is not overfeeding a fish, it is overloading a plant.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Feed is the load",
          value:
            "Waste production scales with feed input rather than with biomass alone. Two tanks holding the same standing biomass but feeding at different rates impose materially different loads on aeration, solids removal and nitrification.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Requirement versus inclusion" },
        {
          kind: "text",
          value:
            "A nutritional requirement is a property of the animal: the quantity of a nutrient it must absorb per unit of body weight per day to sustain maintenance and growth. An inclusion level is a property of the feed: the quantity of an ingredient placed in the formula. The two are connected by digestibility and by intake, and confusing them is the root of a great deal of poor formulation. Raising the crude protein printed on a bag does nothing if the protein source is poorly digested, or if the animal is not eating.",
        },
        { kind: "subheading", value: "Protein, energy and the sparing relationship" },
        {
          kind: "text",
          value:
            "Aquatic animals will burn dietary protein for energy if non-protein energy is short, which is expensive and produces avoidable ammonia. Supplying adequate digestible energy from lipid and, where the species can use it, carbohydrate allows dietary protein to be spared for tissue synthesis. Push non-protein energy too far in the other direction and intake falls, because most species regulate intake to satisfy an energy demand and will stop eating before they have consumed enough protein.",
        },
        { kind: "subheading", value: "Essential nutrients" },
        {
          kind: "text",
          value:
            "Certain amino acids and fatty acids cannot be synthesised at a useful rate and must be present in the diet. Requirements for essential fatty acids differ sharply between freshwater and marine species, and between warm-water and cold-water species, which is why a diet performing well for one group can fail quietly for another. Vitamins and trace minerals are needed in small quantities but their absence produces characteristic deficiency signs, and several are heat-labile or oxidise during storage.",
        },
        { kind: "subheading", value: "Feeding level and appetite" },
        {
          kind: "text",
          value:
            "Feeding level is normally expressed as a percentage of standing biomass per day, adjusted for temperature and animal size. That figure is a starting estimate only. Observed appetite is the real instrument: a population that has stopped clearing its ration is reporting a change in temperature, oxygen, health or water chemistry long before any of those appear in a laboratory result.",
        },
      ],
    },
    {
      id: "technical-fundamentals",
      heading: "Technical fundamentals",
      blocks: [
        {
          kind: "text",
          value:
            "Three relationships describe most of what a feed manager needs to compute, and they connect directly to the sizing of oxygen supply and nitrogen removal.",
        },
        {
          kind: "formula",
          name: "Daily ration",
          expression: "R = B x r / 100",
          terms: [
            { symbol: "R", meaning: "Daily feed quantity for the unit", unit: "kg/day" },
            { symbol: "B", meaning: "Standing biomass in the unit", unit: "kg" },
            { symbol: "r", meaning: "Feeding rate as a percentage of body weight per day", unit: "%/day" },
          ],
          example:
            "Consider a hypothetical tank holding 900 kg of fish fed at a rate of 1.6 per cent of body weight per day. The daily ration is 14.4 kg, which would normally be split across several meals rather than delivered at once.",
          limitations:
            "The percentage rate is a planning estimate that changes with temperature, animal size, diet energy density and health status, and it must be corrected against observed intake. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Specific growth rate",
          expression: "SGR = 100 x (ln W2 - ln W1) / t",
          terms: [
            { symbol: "SGR", meaning: "Specific growth rate", unit: "%/day" },
            { symbol: "W1", meaning: "Mean individual weight at the start of the period", unit: "g" },
            { symbol: "W2", meaning: "Mean individual weight at the end of the period", unit: "g" },
            { symbol: "t", meaning: "Duration of the period", unit: "days" },
          ],
          example:
            "Consider a hypothetical batch growing from 40 g to 62 g over 30 days. The specific growth rate is approximately 1.46 per cent per day, which can then be compared with the same figure from the previous period to detect a slowdown early.",
          limitations:
            "SGR falls naturally as animals grow, so it is only meaningful when compared against the same size range, and it is sensitive to sampling error in mean weight. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Nitrogen released to the water",
          expression: "N = (F x Pf x fN) - (G x Pb x fN)",
          terms: [
            { symbol: "N", meaning: "Nitrogen entering the water over the period", unit: "kg" },
            { symbol: "F", meaning: "Feed delivered over the period", unit: "kg" },
            { symbol: "Pf", meaning: "Protein fraction of the feed", unit: "dimensionless" },
            { symbol: "G", meaning: "Biomass gained over the period", unit: "kg" },
            { symbol: "Pb", meaning: "Protein fraction of the wet body tissue", unit: "dimensionless" },
            { symbol: "fN", meaning: "Nitrogen fraction of protein", unit: "dimensionless" },
          ],
          example:
            "Consider a hypothetical period in which 1,000 kg of a 35 per cent protein feed produced 700 kg of gain in a species whose wet tissue is about 16 per cent protein, with nitrogen taken as 16 per cent of protein. Nitrogen in equals 56 kg, nitrogen retained equals about 17.9 kg, and the difference of roughly 38 kg is what the water and the biofilter have to deal with.",
          limitations:
            "This is a mass balance, not a rate: it says how much nitrogen appears but not when, and it ignores losses to sedimented uneaten feed and to denitrification. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Feed types and what each is suited to",
          columns: ["Feed type", "Characteristics", "Where it fits"],
          rows: [
            ["Farm-made moist or wet feed", "Made from local ingredients, high moisture, poor water stability, short shelf life", "Low-intensity ponds where ingredient cost dominates and loading is light"],
            ["Steam-pelleted sinking feed", "Dense, moderate oil capacity, dissolves relatively quickly once wetted", "Bottom-feeding species and pond systems where feeding response cannot be seen"],
            ["Extruded floating feed", "Expanded structure, high oil absorption, good water stability, feeding visible at the surface", "Species that surface-feed, and any system where observing intake matters"],
            ["Extruded slow-sinking feed", "Controlled density, remains in the water column longer", "Cages and tanks where surface feeding is impractical but drop-through must be avoided"],
            ["Microdiets and crumbles", "Very small particle size, high protein density, fragile", "First-feeding fry and nursery stages, often alongside or replacing live feed"],
            ["Live feed", "Rotifers, artemia and cultured algae, produced on site", "Larval stages that cannot yet accept or digest a formulated particle"],
          ],
          basis:
            "A structural comparison of feed manufacturing routes and their handling characteristics rather than a performance ranking. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        { kind: "subheading", value: "Ingredient strategy" },
        {
          kind: "text",
          value:
            "Aquafeed formulation has moved steadily away from dependence on marine protein and oil towards plant proteins, rendered animal by-products where regulation permits, and a growing set of novel ingredients including single-cell proteins and insect meals. Each substitution brings a constraint: anti-nutritional factors in some plant meals, amino acid profiles that need supplementation, palatability effects, and altered faecal characteristics that change how well solids can be removed downstream.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Ingredient substitution and faecal stability",
          value:
            "The effect of ingredient composition on faecal pellet integrity, and therefore on how much solid waste can be captured before it disintegrates, is an active area of investigation rather than settled design guidance.",
        },
        { kind: "subheading", value: "Feed additives" },
        {
          kind: "text",
          value:
            "Binders, attractants, enzymes, organic acids, prebiotics and probiotics are added to address specific formulation or health objectives. Their value is real but conditional, and it is largely lost when the underlying problem is a water quality or husbandry failure rather than a nutritional one.",
        },
      ],
    },
    {
      id: "practical-knowledge",
      heading: "Practical knowledge",
      blocks: [
        {
          kind: "text",
          value:
            "Feed management on a working farm is a short daily loop repeated without exception. The steps below describe that loop in the order it is normally performed.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Confirm the current standing biomass estimate for each unit, updated for the mortality and sampling data since the last revision.",
            "Read temperature and dissolved oxygen before deciding the day's ration, because both change what the animals can safely metabolise.",
            "Select pellet size against the current mean weight, and check that the batch in the store is the size the plan assumes.",
            "Split the ration into meals appropriate to the species and the delivery method, rather than delivering it in a single event.",
            "Observe the first minutes of each meal and stop feeding when the feeding response drops rather than when the measured quantity runs out.",
            "Record delivered quantity, not planned quantity, and record it per unit.",
            "Inspect for uneaten feed where the system allows it, and treat its presence as an instruction to reduce the next meal.",
            "Review feed conversion against the plan at each sampling interval, and investigate divergence before adjusting the target.",
          ],
        },
        { kind: "subheading", value: "Storage" },
        {
          kind: "text",
          value:
            "Feed quality degrades in storage through lipid oxidation, vitamin loss, moisture uptake and fungal growth, all accelerated by heat and humidity. In Indian conditions the store is often the weakest link in the nutrition chain: a correctly formulated feed held badly for several weeks is no longer the feed that was purchased. Stock rotation, pallets off the floor, ventilation and protection from direct sun are unglamorous and decisive.",
        },
      ],
    },
    {
      id: "considerations",
      heading: "Biological and engineering considerations",
      blocks: [
        {
          kind: "text",
          value:
            "Temperature governs everything on the biological side. Intake, digestion rate, gastric evacuation and growth all rise with temperature within a species range and collapse outside it, so a feeding table is only valid for the temperature band it was constructed for. Above the optimum, maintenance demand continues to rise while intake and oxygen availability fall, and the animal loses ground while apparently being fed adequately.",
        },
        {
          kind: "text",
          value:
            "On the engineering side, the feeding schedule shapes the load profile through the day. Concentrating the ration into few large meals produces a sharp oxygen demand and a pulse of ammonia excretion some hours later; spreading it produces a flatter demand that smaller equipment can meet. This is why feed distribution strategy belongs in the design conversation and not only in the husbandry manual.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Feeding tables are starting points",
          value:
            "Published feeding rate tables are constructed from trials under specific conditions. Treating them as a design input is reasonable; treating them as a control setpoint without correction against observed intake is not.",
        },
        {
          kind: "text",
          value:
            "Feed also determines the physical character of the waste. Pellet durability, fines content and faecal cohesion decide how much material reaches a settling device intact and how much has already dispersed into fine suspended solids that only a mechanical filter or foam fractionator will remove.",
        },
      ],
    },
    {
      id: "management-principles",
      heading: "Management principles",
      blocks: [
        {
          kind: "list",
          items: [
            "Feed to appetite within a planned ceiling, rather than to a table without observation or to observation without a ceiling.",
            "Keep the biomass estimate honest. Feeding is calculated from it, and a drifted estimate produces a systematic error every day until it is corrected.",
            "Match pellet size to mouth size throughout the cycle, and change size on a size criterion rather than when the previous batch runs out.",
            "Never increase the ration on the same day that water quality has moved adversely, even if the animals appear willing.",
            "Record feed per unit per day. Aggregated farm-level feed figures cannot diagnose anything.",
            "Treat a sustained fall in feeding response as a health and water investigation, not as a feed palatability question, until the first two are excluded.",
          ],
        },
      ],
    },
    {
      id: "common-problems",
      heading: "Common problems",
      blocks: [
        {
          kind: "table",
          caption: "Feeding faults and their usual origins",
          columns: ["Observation", "Likely underlying cause"],
          rows: [
            ["Feed conversion worsening across the cycle", "Overfeeding relative to appetite, uneaten feed unaccounted for, or a biomass estimate that has drifted upward"],
            ["Animals feed vigorously then stop early", "Ration split too coarsely, or dissolved oxygen falling during the meal as demand rises"],
            ["Fines and dust in the feed hopper", "Mechanical damage in transport and augering, or a pellet whose durability was inadequate for the handling route"],
            ["Wide size variation at harvest", "Feed not reaching all of the population, dominance at the feeding point, or insufficient feeding stations"],
            ["Growth below plan with normal intake", "Temperature below the assumption used for the growth curve, or a diet whose digestible energy does not match the specification"],
            ["Deficiency signs appearing late in a cycle", "Vitamin degradation in storage, or a single feed batch held far beyond its intended shelf life"],
            ["Ammonia rising faster than feed increased", "Nitrification capacity lagging behind the feed ramp, or dietary protein higher than the growth being achieved can use"],
          ],
          basis:
            "Diagnostic associations commonly described in aquaculture extension and feed management literature, offered as investigation starting points. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "best-practices",
      heading: "Best-practice guidance",
      blocks: [
        {
          kind: "list",
          items: [
            "Buy feed against a written specification including proximate composition, pellet size and durability, and keep batch identification with the delivery record.",
            "Sample and retain a small quantity from each delivered batch, so that a later performance question can be investigated against the actual material.",
            "Calibrate feeders and weigh deliveries rather than counting scoops or trusting volumetric settings.",
            "Increase feed rate in steps and observe the water response between steps, particularly when approaching the upper end of the system's treatment capacity.",
            "Keep a feeding log that a person who was absent can read: quantity, time, response, water conditions and any deviation.",
            "Reconcile feed issued from store against feed recorded as delivered to units, and investigate the gap rather than absorbing it.",
            "Review conversion at the end of every cycle against the feed specification and the temperature record together, since neither explains performance alone.",
          ],
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
            "Beyond meeting requirements, nutrition becomes an optimisation across three currencies that do not share units: feed cost, growth rate and waste load. A cheaper formulation that raises the nitrogen load may consume treatment capacity worth more than the saving. A high-energy diet that accelerates growth may shorten the cycle enough to justify its price, or may simply deposit lipid the market will not pay for. These trade-offs are farm-specific, and they change when the binding constraint changes.",
        },
        {
          kind: "text",
          value:
            "A second advanced theme is the interaction between diet and the microbial community the farm depends on. In systems that rely on heterotrophic conversion, the carbon-to-nitrogen ratio of the total input, of which feed is the largest part, is a controllable variable. In systems relying on autotrophic nitrification, the same input mainly determines how much oxygen the biofilter competes for.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Functional feeds",
          value:
            "Diets formulated to support health during predictable stress periods, such as grading, transfer or seasonal temperature transitions, are used in several sectors. They are a risk-reduction measure around a known event rather than a substitute for husbandry.",
        },
        {
          kind: "text",
          value:
            "Finally, feeding is increasingly instrumented. Acoustic and optical detection of uneaten pellets, biomass estimation from imaging, and demand feeders that let the population set the rate all move the control loop closer to the animal. Each of them replaces an estimate with a measurement, which is worth doing precisely because the estimate being replaced is the one that drives the largest cost on the farm.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Feed is normally the largest operating cost and simultaneously the source of nearly all the waste the treatment system must handle.",
    "A nutritional requirement belongs to the animal and an inclusion level belongs to the feed; digestibility and intake connect them.",
    "Adequate non-protein energy spares dietary protein for growth and reduces avoidable ammonia excretion.",
    "Feeding tables are planning estimates that must be corrected against observed appetite, temperature and dissolved oxygen.",
    "The way a ration is split through the day shapes the oxygen and ammonia load profile, and therefore the equipment needed to meet it.",
    "Feed quality is lost in storage as readily as it is lost in formulation, and the store is often the weakest link on the farm.",
  ],
  related: ["fundamentals", "water-quality", "grow-out", "economics"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Technical material on aquafeed formulation, ingredient supply and feed management practice.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute research and extension publications on feed development for Indian aquaculture species.",
    },
    {
      organisation: "Southern Regional Aquaculture Center",
      description: "Extension fact sheet programme covering feeds, feeding practice and pond nutrition.",
    },
  ],
};
