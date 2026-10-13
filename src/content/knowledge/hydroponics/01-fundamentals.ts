import type { KnowledgeArea } from "../types";

export const fundamentals: KnowledgeArea = {
  number: "01",
  slug: "fundamentals",
  title: "Hydroponics Fundamentals",
  navSummary: "Growing without soil, and what the grower has to supply once the soil is gone.",
  summary:
    "Hydroponics is cultivation in which the root zone is engineered rather than inherited. Soil is not a nutrient in itself: it is a buffer, a reservoir, a gas exchanger and a physical support all at once, and removing it means each of those four jobs has to be done deliberately. That substitution is the whole subject.",
  difficulty: "beginner",
  topics: ["production", "systems", "biology"],
  tags: ["soilless", "root zone", "nutrient solution", "controlled environment", "plant uptake"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-16",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "A plant needs water, dissolved mineral nutrients, oxygen at the roots, light, a workable temperature and carbon dioxide at the leaves. Soil supplies several of those unreliably and invisibly. Hydroponics supplies them directly, which makes them controllable and makes their failure immediate.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Growing plants in water with dissolved minerals is not a recent idea. Mineral nutrition was worked out in the nineteenth century by growing plants in defined solutions precisely because soil was too variable to experiment against, and the commercial forms in use now — thin-film channels, standing-water rafts, irrigated inert substrates — are engineering answers to problems that laboratory work identified long before greenhouses adopted them.",
        },
        {
          kind: "text",
          value:
            "The claim that plants do not need soil is true and slightly misleading. Plants need what soil normally provides. A root sitting in a well-structured soil is held in place, surrounded by air-filled pores, supplied with water held at a tension it can overcome, and fed by mineral ions released slowly from clay surfaces and organic matter. Take the soil away and every one of those has to be reproduced, on purpose, continuously.",
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
            "Control is the reason to do this, and control cuts both ways. A soil-grown crop with a nutrient problem often has weeks of buffer before the symptom appears; a hydroponic crop can express the same problem in days because there is no reserve between the dosing decision and the root. The grower gains precision and loses forgiveness in the same transaction.",
        },
        {
          kind: "text",
          value:
            "Most beginner failures come from treating a hydroponic system as soil with the dirt removed — watering on a schedule, ignoring root oxygen, topping up a reservoir without measuring what is left in it. Understanding what each part of the system replaces is what turns a collection of pumps and channels into a production method.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "The six supplies" },
        {
          kind: "text",
          value:
            "A production system is a machine for holding six things inside the range the crop can use: water, dissolved mineral nutrients, oxygen at the root surface, light at the canopy, temperature at both ends of the plant, and carbon dioxide in the air around the leaves. Every technology in this knowledge base is a way of delivering one of the six more reliably or more cheaply.",
        },
        { kind: "subheading", value: "Oxygen is the one people forget" },
        {
          kind: "text",
          value:
            "Roots respire. They consume oxygen and release carbon dioxide, and unlike leaves they cannot get it from the air unless the system gives them access to it. Water holds very little dissolved oxygen compared with air, and holds less of it as it warms. A root sitting in warm, still, nutrient-rich water is in the worst place it can be, which is why aeration, film depth and substrate porosity keep reappearing as design questions.",
        },
        { kind: "subheading", value: "The solution is a chemistry, not a recipe" },
        {
          kind: "text",
          value:
            "A nutrient solution is defined by which ions are present, in what proportion, at what total concentration, and at a pH where the plant can take them up. Two solutions with the same electrical conductivity can be entirely different chemistries, and one of them can be starving the crop of an element the other supplies.",
        },
        {
          kind: "flow",
          caption:
            "The uptake chain. A failure anywhere upstream shows up as a symptom on the leaf, which is why diagnosis works backwards along this line.",
          steps: [
            { label: "Source water", detail: "Its existing hardness, alkalinity and contaminants are the starting point of the final solution, not a neutral blank." },
            { label: "Nutrient solution", detail: "Source water plus dosed salts, adjusted to a pH range where the intended ions stay available." },
            { label: "Root zone", detail: "Where solution, air and root surface meet; the condition here is what the plant actually experiences." },
            { label: "Uptake", detail: "Water and ions cross the root, some passively with the transpiration stream and some by active transport." },
            { label: "Transport", detail: "Xylem carries water and minerals up to the canopy; phloem redistributes the products of photosynthesis." },
            { label: "Photosynthesis", detail: "Light, carbon dioxide and water are converted to sugars, subject to whichever of the three is scarcest." },
            { label: "Biomass", detail: "Sugars are partitioned into leaf, stem, root and fruit according to stage and variety." },
            { label: "Harvest", detail: "The portion of that biomass the market pays for, which is rarely the whole plant." },
          ],
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
            "Two relationships underpin most day-to-day decisions, and both are about the difference between what is in the tank and what the plant is doing with it.",
        },
        {
          kind: "formula",
          name: "Daily light integral",
          expression: "DLI = PPFD x t x 0.0036",
          terms: [
            { symbol: "DLI", meaning: "Daily light integral, total photosynthetic photons received in a day", unit: "mol/m2/day" },
            { symbol: "PPFD", meaning: "Photosynthetic photon flux density at the canopy", unit: "umol/m2/s" },
            { symbol: "t", meaning: "Duration of the photoperiod", unit: "hours" },
            { symbol: "0.0036", meaning: "Conversion from micromoles per second-hour to moles", unit: "constant" },
          ],
          example:
            "Consider a hypothetical crop receiving a canopy PPFD of 200 umol/m2/s for 16 hours. The daily light integral is 200 x 16 x 0.0036, or about 11.5 mol/m2/day. Doubling the photoperiod and halving the intensity gives the same integral but not necessarily the same crop, because photoperiod also carries developmental signals.",
          limitations:
            "Light integral describes supply, not use: temperature, carbon dioxide, nutrition and water status each cap what the crop can do with it. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "formula",
          name: "Nutrient solution balance over an interval",
          expression: "dM = M_added - M_taken_up - M_removed",
          terms: [
            { symbol: "dM", meaning: "Change in the mass of a given ion held in the system", unit: "g" },
            { symbol: "M_added", meaning: "Mass of that ion dosed in over the interval", unit: "g" },
            { symbol: "M_taken_up", meaning: "Mass removed by the crop", unit: "g" },
            { symbol: "M_removed", meaning: "Mass leaving in drain, dump or sampling", unit: "g" },
          ],
          example:
            "Consider a hypothetical recirculating system in which the crop takes up water faster than it takes up a particular ion. The mass balance for that ion stays positive even while the reservoir level falls, so its concentration climbs — which is how a solution can accumulate one element while another is being depleted, with total conductivity barely moving.",
          limitations:
            "Uptake is selective and stage-dependent, so a single conductivity reading cannot resolve this balance for individual ions. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Conductivity is a total, not a composition",
          value:
            "Electrical conductivity reports how many ions are dissolved, not which. A solution can hold a stable reading while its ratio of nitrate to calcium to potassium drifts far from what was dosed.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "What soil supplies, and what replaces it in a soilless system",
          columns: ["Function of soil", "Replacement in hydroponics", "What goes wrong when it is neglected"],
          rows: [
            ["Physical support", "Substrate, net pot, channel or trellis", "Lodging, stem damage, uneven canopy"],
            ["Water reservoir", "Reservoir volume and irrigation frequency", "Wilting between irrigations, or permanent saturation"],
            ["Gas exchange at the root", "Air-filled porosity, film depth, aeration", "Root browning, reduced uptake, root pathogens"],
            ["Mineral supply", "Dosed nutrient solution", "Deficiency or toxicity within days rather than weeks"],
            ["Chemical buffering", "Deliberate pH control and monitoring", "Rapid pH drift and elements dropping out of availability"],
            ["Biological community", "Sanitation, and in some systems managed biology", "Opportunistic pathogens colonising an empty niche"],
          ],
          basis:
            "A structural mapping of soil functions onto their engineered substitutes, not a performance comparison. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "text",
          value:
            "Each row of that table is a later section. The value of seeing them together at the start is that it explains why the sections exist: they are not a list of hydroponic topics, they are the list of jobs the soil stopped doing.",
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
            "A first system should be planned in the order the constraints bind, which is almost the reverse of the order people usually buy equipment in.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Test the source water fully before choosing anything else. Hardness, alkalinity, sodium and existing nutrient content all change what can be dosed into it.",
            "Choose the crop, and accept that the crop dictates the system rather than the other way round — a leafy green and a fruiting vine are not interchangeable loads.",
            "Choose the system family that suits the crop's root habit and cycle length.",
            "Design the environment before the plumbing. A perfect nutrient solution cannot compensate for a canopy sitting above its temperature range.",
            "Size the reservoir for stability, not just for supply: a larger volume moves more slowly in pH and temperature, which buys reaction time.",
            "Instrument what will be acted upon — conductivity, pH, solution temperature and level — and establish what reading triggers what response before stocking a crop.",
            "Run the system with water alone, then with solution and no plants, before the first transplant.",
          ],
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
            "The biology sets non-negotiable ranges and the engineering decides how reliably they are held. A cultivar has a temperature band in which it sets fruit, a root-zone oxygen requirement it cannot bargain over, and a pH window in which iron stays available to it. None of those move because a pump was cheaper.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Failure speed drives redundancy",
          value:
            "Systems differ less in how well they run than in how quickly they damage a crop when they stop. A substrate system holds water for hours after a pump fails; a thin-film channel does not. Redundancy and alarm decisions should follow that difference, not the equipment budget.",
        },
        {
          kind: "text",
          value:
            "The second consideration is interaction. Raising light without raising carbon dioxide, temperature and nutrient supply does not raise yield proportionally, because the crop is then limited by whichever of those became scarce first. Optimising one input in isolation is the most common way to spend money without changing the outcome.",
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
            "Measure pH, conductivity, solution temperature and reservoir level on a fixed schedule and record every reading, including the uninteresting ones. The trend is the diagnostic.",
            "Calibrate probes on a schedule rather than when a reading looks wrong. An uncalibrated sensor does not announce itself; it just quietly misleads.",
            "Change one variable at a time, and give the crop long enough to answer before changing another.",
            "Inspect roots, not only leaves. The root zone shows problems earlier and more honestly than the canopy does.",
            "Keep propagation physically separate from production. Young plants are the easiest route for a pest or pathogen into a clean system.",
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
          caption: "Frequent early failures and where the cause usually sits",
          columns: ["Symptom", "Usual underlying cause"],
          rows: [
            ["Roots browning, plants wilting in a wet system", "Root-zone oxygen, often from a warm reservoir or standing water with no exchange"],
            ["Conductivity stable but the crop shows deficiency", "Selective uptake shifting the ratio of ions while the total stays put"],
            ["pH swinging day to day", "Low source-water alkalinity, a small reservoir volume, or both"],
            ["Interveinal yellowing on new growth", "An availability problem at the current pH rather than an absence of the element"],
            ["Vigorous leaf, poor fruit set", "Environment or crop management at flowering, not nutrition"],
            ["Whole crop stalls after transplant", "Root damage or a step change in root-zone conditions between propagation and production"],
          ],
          basis:
            "Diagnostic starting points drawn from common horticultural practice, not conclusions. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
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
            "Commission the system with water before nutrients, and with nutrients before plants.",
            "Write down the target ranges for the crop and stage in advance, so a decision in the middle of a working day is a lookup rather than a judgement call.",
            "Keep a full source-water analysis on file and repeat it when the season or the source changes.",
            "Store stock solutions separately where their salts would otherwise react, and label them unambiguously.",
            "Review each finished crop against its plan, and change the plan rather than the memory of it.",
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
            "Beyond a stable first crop, the questions become allocation questions. Given a fixed energy budget, is a marginal unit better spent on light, on cooling, or on carbon dioxide? Given a fixed footprint, does another tier of vertical growing add saleable yield, or only add plants competing for the same environmental capacity?",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Density is not yield",
          value:
            "Adding plants per square metre raises yield only while light, air movement and root-zone capacity keep up. Past that point the extra plants shade each other and the yield per plant falls faster than the count rises.",
        },
        {
          kind: "text",
          value:
            "These have real answers for a specific site and no general answer at all, which is why this knowledge base states relationships and dependencies rather than universal setpoints. A number copied from another grower's crop is a guess wearing the clothes of a fact.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Hydroponics replaces the four jobs soil was doing — support, water storage, gas exchange and mineral supply — with deliberate engineering.",
    "Root oxygen is the supply most often overlooked, and warm still water is the condition that removes it.",
    "Electrical conductivity reports total dissolved ions, not composition, so a stable reading can hide a drifting chemistry.",
    "Source water chemistry is the starting point of every nutrient solution and must be measured before anything is formulated.",
    "Inputs interact: raising one without the others changes cost more reliably than it changes yield.",
    "Control is bought at the price of forgiveness — a hydroponic crop expresses a mistake in days rather than weeks.",
  ],
  related: ["systems", "plant-biology", "root-zone", "nutrients"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Programme material on horticulture, protected cultivation and soilless production systems.",
      url: "https://www.fao.org/plant-production-protection/en",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute publications and extension material on protected cultivation and horticulture in India.",
    },
    {
      organisation: "State agricultural universities and horticulture departments in India",
      description: "Regional guidance on protected cultivation suited to local climate and water conditions.",
    },
  ],
};
