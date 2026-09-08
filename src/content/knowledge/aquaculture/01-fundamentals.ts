import type { KnowledgeArea } from "../types";

export const fundamentals: KnowledgeArea = {
  number: "01",
  slug: "fundamentals",
  title: "Aquaculture Fundamentals",
  navSummary: "What aquaculture is, the forms it takes and the variables that decide whether it works.",
  summary:
    "Aquaculture is the farming of aquatic organisms under some degree of human control over stocking, feeding, water and protection from predators. That definition sounds narrow, and it is the whole subject: every decision further on — species, system, site, feed, water treatment, harvest — is an argument about how much control is worth paying for, and the answer changes with the animal, the water and the market.",
  difficulty: "beginner",
  topics: ["production", "systems", "biology"],
  tags: ["definition", "intensity", "carrying capacity", "production cycle", "inputs"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-15",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "A farm holds aquatic animals in water, feeds them, keeps that water fit to live in, and harvests them at a size somebody will buy. Everything technical in aquaculture follows from one fact: the animal lives inside its own waste stream, so the rate at which you can feed is set by the rate at which you can clean.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Aquaculture covers finfish, crustaceans, molluscs and aquatic plants, produced in fresh, brackish and marine water, in systems ranging from an earthen pond that is barely distinguishable from a natural water body to a fully enclosed recirculating plant that treats every litre before it returns to the animal. What unites them is intervention: somebody chooses what is stocked, at what density, and takes responsibility for keeping it alive.",
        },
        {
          kind: "text",
          value:
            "That responsibility is the reason aquaculture is an engineering subject as much as a biological one. A wild fish in a river has effectively unlimited water; the river dilutes its waste, aerates itself, and moves food past it. A farmed fish has whatever water the farm gives it. Every gram of feed added to that water becomes growth, faeces, dissolved ammonia and consumed oxygen, and the farm has to handle all four.",
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
            "Most farm failures are not exotic. They are a stocking density that the water treatment could not support, a feed rate that outran the oxygen supply, or a species chosen for its market price rather than for the water available at the site. Each of those is a fundamentals error, made before anything was built, and no amount of operational skill afterwards recovers it.",
        },
        {
          kind: "text",
          value:
            "Getting the fundamentals right is also what makes the rest of this knowledge base usable. Terms like carrying capacity, intensity and production cycle recur in every later section; if they are held loosely, the specific guidance on biofilters or biosecurity or harvest reads as a list of rules rather than as consequences of something.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Intensity" },
        {
          kind: "text",
          value:
            "Intensity describes how much production is extracted from a unit of water or area, and therefore how much of the animal's environment the farmer has taken over. Extensive production relies mainly on what the water body produces naturally. Semi-intensive adds fertiliser and supplementary feed. Intensive supplies all nutrition as formulated feed and manages oxygen and waste actively. Intensity is not a quality ranking — it is a statement about which risks the farm has accepted.",
        },
        { kind: "subheading", value: "Carrying capacity" },
        {
          kind: "text",
          value:
            "Carrying capacity is the standing biomass a system can hold indefinitely without water quality degrading past the animal's tolerance. It is set by whichever supporting process saturates first — usually oxygen supply, ammonia removal or solids removal — not by how much room the fish appear to have. A tank that looks half empty can already be at capacity.",
        },
        { kind: "subheading", value: "The production cycle" },
        {
          kind: "text",
          value:
            "Production runs as a chain of life stages, each with different water, feed and handling requirements. Treating it as one continuous process is the commonest planning error, because the hatchery, the nursery and the grow-out unit have almost nothing in common operationally.",
        },
        {
          kind: "flow",
          caption:
            "The production chain. Each transition is a handling event and a change of system, and each is a point where survival is decided.",
          steps: [
            { label: "Broodstock", detail: "Mature animals held and conditioned to produce viable gametes on a predictable schedule." },
            { label: "Egg", detail: "Fertilised eggs incubated under tightly controlled temperature and water quality." },
            { label: "Larvae", detail: "The most fragile stage, often requiring live feed and near-continuous attention." },
            { label: "Fry", detail: "First feeding on formulated diets, weaning off live feed where live feed was used." },
            { label: "Fingerling", detail: "Robust enough to grade, count and transport; the usual unit of trade between hatchery and farm." },
            { label: "Juvenile", detail: "Nursery phase, building size and uniformity before entering the main production unit." },
            { label: "Grow-out", detail: "The long feeding phase where most of the biomass and nearly all of the feed cost accumulate." },
            { label: "Harvest", detail: "Removal, handling and chilling, which determine the quality that reaches the buyer." },
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
            "Three quantities describe almost any production plan, and they are related closely enough that fixing two of them fixes the third.",
        },
        {
          kind: "formula",
          name: "Standing biomass",
          expression: "B = D x V",
          terms: [
            { symbol: "B", meaning: "Standing biomass held in the unit", unit: "kg" },
            { symbol: "D", meaning: "Stocking density", unit: "kg/m3" },
            { symbol: "V", meaning: "Effective water volume of the culture unit", unit: "m3" },
          ],
          example:
            "Consider a hypothetical tank of 40 m3 operated at a density of 25 kg/m3. Standing biomass is 1,000 kg, and every downstream process — oxygen, ammonia, solids — must be sized against that figure rather than against the tank volume.",
          limitations:
            "Density is an outcome of the system's supporting capacity, not an input that can be chosen freely. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Feed conversion ratio",
          expression: "FCR = F / G",
          terms: [
            { symbol: "FCR", meaning: "Feed conversion ratio", unit: "dimensionless" },
            { symbol: "F", meaning: "Total feed delivered over the period", unit: "kg" },
            { symbol: "G", meaning: "Biomass gained over the same period", unit: "kg" },
          ],
          example:
            "Consider a hypothetical cycle in which 1,800 kg of feed produced 1,200 kg of gain. FCR is 1.5, meaning one and a half kilograms of feed bought each kilogram of fish — and the half kilogram that did not become fish entered the water as waste.",
          limitations:
            "FCR is a whole-system indicator, not a feed property: mortality, uneaten feed, grading losses and sampling error all land in it. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "The second formula is the one that connects biology to engineering. Feed drives growth, and the fraction of feed that does not become growth becomes load — solids, dissolved nitrogen and oxygen demand. A farm that cannot handle its load cannot feed at the rate its growth plan assumes, which is why treatment capacity, not tank volume, is the real constraint on production.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "The main production approaches and what each trades away",
          columns: ["Approach", "Control gained", "Cost accepted"],
          rows: [
            ["Pond", "Low capital, natural productivity contributes to nutrition", "Weather exposure, limited control of water quality"],
            ["Cage", "Very low water treatment cost, uses an existing water body", "No control of the surrounding environment, exposure to external events"],
            ["Raceway", "High flushing rate, simple observation and grading", "Large continuous water requirement"],
            ["Recirculating", "Near-complete control of temperature and water chemistry", "High capital cost, energy dependence, technical staffing"],
            ["Biofloc", "In-situ waste conversion, very low water exchange", "Continuous aeration dependence, narrow operating window"],
            ["Aquaponic", "Nutrient recovery into a second crop", "Two production systems whose optima do not coincide"],
          ],
          basis:
            "A qualitative comparison of the structural characteristics of each approach, not a performance ranking. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "Each of these has its own section later in this knowledge base. The purpose of listing them here is to make clear that they are alternatives on a single axis — how much of the animal's environment the farm builds and pays for — rather than unrelated technologies.",
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
            "A production plan is built backwards from the market, then checked forwards against the site. Backwards: the buyer wants a particular species at a particular size at a particular time, which sets harvest weight and harvest date, which sets stocking date and stocking number once growth rate and expected survival are assumed. Forwards: the site has a water source of a certain quality, quantity and temperature, a certain power supply, and a certain amount of land, and those either support the plan or they do not.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Establish what the water source actually is — quantity, temperature range through the year, and full chemistry, measured rather than assumed.",
            "Choose species that suit that water, not species that suit the price list.",
            "Set target harvest size and date from the buyer, not from the hatchery's convenience.",
            "Work back to stocking number using a conservative survival assumption, and a growth curve for the temperature the site will actually deliver.",
            "Size the culture volume for peak standing biomass, which occurs immediately before harvest.",
            "Size oxygen, solids and nitrogen handling for peak feed load, which occurs at the same moment.",
            "Confirm power, staffing and feed logistics can meet that peak — not the average.",
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
            "The biology sets the targets and the engineering meets them, and the two are not negotiable against each other. A species has a temperature range in which it grows, a dissolved oxygen level below which it stops feeding, and a tolerance for un-ionised ammonia that does not move because the budget moved. Engineering decides how reliably those conditions are held and at what cost.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Peak load, not average load",
          value:
            "Support systems are sized for the worst hour of the cycle: maximum biomass, maximum feeding, highest water temperature, lowest oxygen solubility. A design that works on annual averages fails in the week it matters most.",
        },
        {
          kind: "text",
          value:
            "The second consideration is failure behaviour. Systems differ less in how well they run than in how quickly they kill stock when they stop. A pond has hours of buffer; a densely stocked recirculating tank without aeration has minutes. That difference should drive redundancy and alarm decisions at design time, not after the first incident.",
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
            "Measure the water on a fixed schedule, and write the numbers down whether or not they look interesting. Trends are the diagnostic; single readings rarely are.",
            "Know the standing biomass in every unit at all times. Feeding, oxygen and treatment decisions all depend on it, and an estimate that has drifted is worse than no estimate.",
            "Feed to observed appetite, and treat a fall in appetite as the first symptom of a water or health problem rather than a feed problem.",
            "Keep life stages separated. Mixing sizes produces competition, cannibalism in some species, and a harvest that cannot be graded to a market specification.",
            "Handle stock as rarely as possible and as gently as possible. Most disease outbreaks follow a handling event.",
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
          caption: "Frequent early-stage failures and what actually caused them",
          columns: ["Symptom", "Usual underlying cause"],
          rows: [
            ["Growth slows across a whole unit", "Sustained sub-optimal temperature or oxygen, or an overestimate of standing biomass leading to under-feeding"],
            ["Feed intake falls suddenly", "Water quality has moved outside tolerance, most often oxygen or un-ionised ammonia"],
            ["Mortality follows every grading or transfer", "Handling method, crowding duration, or moving stock that was already stressed"],
            ["Harvest size is uneven", "Size grading skipped, or feed distribution favouring a dominant fraction of the population"],
            ["Cycle finishes late", "Growth curve taken from literature at a temperature the site never reached"],
          ],
          basis:
            "Patterns commonly reported in aquaculture extension literature, presented as diagnostic starting points rather than conclusions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Commission the water treatment before stocking, and prove it holds a simulated load rather than assuming it will.",
            "Start a cycle below the intended density and increase only when the water response has been observed.",
            "Record feed, mortality, water chemistry and temperature daily in one place, so a later investigation has something to read.",
            "Define in advance what reading triggers what action, so a decision at three in the morning is a lookup rather than a judgement call.",
            "Review each completed cycle against its plan, and change the plan rather than the memory of it.",
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
            "Once the basic loop is stable, the interesting questions become allocation questions. Given a fixed water treatment capacity, is the farm better off running fewer animals to a larger size or more animals to a smaller one? Given a fixed capital budget, is the marginal rupee better spent on oxygen capacity, on nitrogen removal, or on the redundancy that prevents a total loss?",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "The binding constraint moves",
          value:
            "Early in a cycle a system is usually limited by nothing at all; late in a cycle it is limited by one specific process. Identifying which process binds first, and instrumenting that one, is worth more than instrumenting everything equally.",
        },
        {
          kind: "text",
          value:
            "These are optimisation problems with real answers for a specific farm, and no general answer at all. That is why this knowledge base states principles and relationships rather than numbers: a threshold copied from another site is a guess wearing the clothes of a fact.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Aquaculture is defined by intervention: the farm has taken responsibility for the water, so the water becomes an engineering problem.",
    "Carrying capacity is set by the first supporting process to saturate, not by the apparent room in the tank.",
    "Feed drives both growth and waste load, which is why treatment capacity limits production more often than volume does.",
    "Production is a chain of distinct life stages, and each transition between them is a handling risk.",
    "Support systems must be sized for peak biomass and peak feed load, which coincide immediately before harvest.",
    "Systems differ most in how fast they fail, and that should drive redundancy decisions at design time.",
  ],
  related: ["systems", "species", "water-quality", "grow-out"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Fisheries and aquaculture programme material covering production systems, species and sector development.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute publications and extension material on Indian aquaculture practice and species.",
    },
    {
      organisation: "National Fisheries Development Board, India",
      description: "Guidance and programme documentation for aquaculture development in India.",
    },
  ],
};
