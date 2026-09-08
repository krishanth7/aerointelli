import type { KnowledgeArea } from "../types";

export const waterQuality: KnowledgeArea = {
  number: "09",
  slug: "water-quality",
  title: "Water Quality",
  navSummary: "The chemistry the animals live inside, how each parameter is generated and removed, and why they cannot be managed one at a time.",
  summary:
    "Water quality is the set of physical and chemical conditions inside the culture unit, and it is the medium through which every other decision on the farm expresses itself. Feed, stocking density, temperature and treatment capacity all arrive at the animal as a water chemistry, and the parameters interact strongly enough that managing any one of them in isolation is usually a mistake.",
  difficulty: "intermediate",
  topics: ["water", "filtration", "environment", "operations"],
  tags: ["dissolved oxygen", "ammonia", "nitrite", "alkalinity", "ph", "nitrogen cycle", "monitoring"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-01",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Fish breathe, eat and excrete in the same water. Oxygen is being consumed, ammonia is being produced, and bacteria are converting that ammonia into less harmful forms while using up alkalinity and more oxygen. Water quality management means keeping that whole set of processes in balance rather than watching a single number.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "A culture unit is a small, heavily loaded chemical reactor with animals in it. Oxygen enters from the atmosphere or from an aeration device and leaves through respiration by fish, bacteria and, in ponds, algae. Nitrogen enters as feed protein and leaves as ammonia, is oxidised to nitrite and then nitrate, and departs through water exchange, plant uptake or denitrification. Carbon dioxide accumulates. Alkalinity is consumed. Solids build up unless removed. Each of these processes has a rate, and the farm is stable only while removal rates match production rates.",
        },
        {
          kind: "text",
          value:
            "The parameters that matter are not independent. Temperature sets oxygen solubility and metabolic rate at once. pH determines what fraction of total ammonia is present in its toxic un-ionised form, and pH itself is held by alkalinity, which nitrification consumes. Carbon dioxide suppresses pH and impairs oxygen uptake at the gill even when dissolved oxygen appears adequate. A water quality problem is almost always a chain, and the visible symptom is rarely the first link.",
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
            "Water quality is the most common proximate cause of loss in fed aquaculture, and the most common ultimate cause of disease. Sub-lethal conditions do not kill animals directly; they suppress appetite, impair growth, damage gill and skin tissue and depress immune competence, after which an opportunistic pathogen that was already present becomes an outbreak. Investigating such an outbreak as a pathogen problem alone reliably misses the cause.",
        },
        {
          kind: "text",
          value:
            "It also determines the economics of the system. The point at which water quality can no longer be held defines carrying capacity, which defines how much biomass the capital investment carries, which defines whether the farm returns anything. Treatment capacity and production capacity are the same quantity described from two directions.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Sub-lethal is the normal case",
          value:
            "Acute water quality failures are visible and rare. Chronic sub-optimal conditions are invisible and common, and they express themselves as reduced growth, poor conversion and elevated background mortality rather than as an incident.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Dissolved oxygen" },
        {
          kind: "text",
          value:
            "Oxygen is the parameter with the shortest time constant, which is why it dominates operational attention. Solubility falls as temperature rises and as salinity rises, precisely when metabolic demand is highest. Demand comes from the animals, from bacteria oxidising organic matter and ammonia, and in ponds from algal and sediment respiration at night. Because the dissolved inventory in a heavily stocked unit represents only minutes of consumption, oxygen is managed by continuous supply rather than by storage.",
        },
        { kind: "subheading", value: "Ammonia and its speciation" },
        {
          kind: "text",
          value:
            "Total ammonia nitrogen exists in equilibrium between the ionised ammonium form and the un-ionised ammonia form. Only the un-ionised fraction crosses the gill membrane readily, and it is the toxicologically important species. That fraction rises with pH and with temperature, so an identical total ammonia measurement can be harmless in one water and damaging in another. Reporting total ammonia without the accompanying pH and temperature is reporting an incomplete measurement.",
        },
        { kind: "subheading", value: "Nitrite and nitrate" },
        {
          kind: "text",
          value:
            "Nitrite is the intermediate of nitrification and is toxic through its interference with oxygen transport in the blood. Its effect is strongly modified by chloride concentration, which competes for the same uptake pathway, so nitrite tolerance differs greatly between fresh and saline waters. Nitrate is the end product and is far less toxic, but it accumulates in systems with low water exchange and is the parameter that eventually forces either exchange or denitrification.",
        },
        { kind: "subheading", value: "pH, alkalinity and carbon dioxide" },
        {
          kind: "text",
          value:
            "Alkalinity is the water's capacity to resist pH change, supplied mainly by bicarbonate. Nitrification consumes alkalinity, and respiration adds carbon dioxide which forms carbonic acid, so an intensively loaded system drifts downward in both alkalinity and pH unless buffer is replaced. When alkalinity is exhausted, pH becomes unstable, nitrification slows, and the system can move quickly from apparently fine to failing.",
        },
        { kind: "subheading", value: "Solids" },
        {
          kind: "text",
          value:
            "Suspended and settleable solids matter in their own right, through gill abrasion and irritation, and indirectly because they are a reservoir of oxygen demand and of ammonia that is released as they decompose. Removing solids early, before they break down into fine particles, is one of the highest-value interventions in any intensive system.",
        },
      ],
    },
    {
      id: "technical-fundamentals",
      heading: "Technical fundamentals",
      blocks: [
        {
          kind: "flow",
          caption: "The nitrogen cycle as it operates in a culture system. Each step is a rate that can be limiting, and each has its own oxygen and alkalinity requirement.",
          steps: [
            { label: "Fish", detail: "Protein in the feed is metabolised and surplus nitrogen is excreted, mainly across the gill, together with nitrogen released from faeces and uneaten feed as they decompose." },
            { label: "Ammonia", detail: "Total ammonia nitrogen appears in the water and partitions between ionised and un-ionised forms according to pH and temperature; the un-ionised form is the toxic species." },
            { label: "Nitrifying bacteria", detail: "Autotrophic bacteria colonise surfaces and oxidise ammonia in two sequential steps, consuming oxygen and alkalinity as they do so. Their population responds to load slowly, over days to weeks." },
            { label: "Nitrite", detail: "The intermediate product, itself toxic, which accumulates whenever the second oxidation step lags behind the first — typically during start-up or after a sudden increase in feeding." },
            { label: "Nitrate", detail: "The stable end product, far less toxic, which accumulates in proportion to nitrogen input and inversely to water exchange." },
            { label: "Removal", detail: "Nitrate leaves through water exchange, through uptake by plants or algae, or through anoxic denitrification to nitrogen gas in systems designed to provide it." },
          ],
        },
        {
          kind: "formula",
          name: "Un-ionised ammonia fraction",
          expression: "NH3 = TAN x f(pH, T)",
          terms: [
            { symbol: "NH3", meaning: "Un-ionised ammonia concentration", unit: "mg/L as N" },
            { symbol: "TAN", meaning: "Total ammonia nitrogen measured by a standard test", unit: "mg/L as N" },
            { symbol: "f(pH, T)", meaning: "Fraction of total ammonia present in un-ionised form, increasing with pH and with temperature", unit: "dimensionless" },
          ],
          example:
            "Consider a hypothetical pond and tank holding the same measured total ammonia nitrogen of 1.0 mg/L. In the tank at pH 7.0 the un-ionised fraction might be a small fraction of one per cent, while in the pond at pH 8.5 during an afternoon algal bloom the same total corresponds to an un-ionised concentration an order of magnitude higher. The laboratory number is identical and the biological meaning is not.",
          limitations:
            "The fraction is derived from a temperature and pH dependent equilibrium and is further modified by ionic strength in brackish and marine water, so it must be computed for the actual water rather than read from a freshwater table. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Oxygen mass balance across a culture unit",
          expression: "DOout = DOin - (OCR x B + OCbio) / Q",
          terms: [
            { symbol: "DOout", meaning: "Dissolved oxygen leaving the unit", unit: "mg/L" },
            { symbol: "DOin", meaning: "Dissolved oxygen entering the unit", unit: "mg/L" },
            { symbol: "OCR", meaning: "Specific oxygen consumption rate of the animals", unit: "mg/kg/h" },
            { symbol: "B", meaning: "Standing biomass in the unit", unit: "kg" },
            { symbol: "OCbio", meaning: "Oxygen consumed by bacterial and organic demand within the unit", unit: "mg/h" },
            { symbol: "Q", meaning: "Water flow through the unit", unit: "L/h" },
          ],
          example:
            "Consider a hypothetical tank of 2,000 kg biomass with a flow of 60,000 L/h. If the animals consume 250 mg/kg/h and background biological demand adds 100,000 mg/h, the total draw is 600,000 mg/h, which over that flow corresponds to a drop of 10 mg/L between inlet and outlet — a figure that immediately shows the flow is insufficient for the load.",
          limitations:
            "Specific consumption is not constant: it rises with temperature, with recent feeding and with activity, and it rises sharply under stress. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Alkalinity consumed by nitrification",
          expression: "Aconsumed = k x Noxidised",
          terms: [
            { symbol: "Aconsumed", meaning: "Alkalinity destroyed, expressed as calcium carbonate equivalent", unit: "kg" },
            { symbol: "k", meaning: "Stoichiometric alkalinity demand per unit of ammonia nitrogen fully oxidised", unit: "kg CaCO3 per kg N" },
            { symbol: "Noxidised", meaning: "Ammonia nitrogen oxidised over the period", unit: "kg N" },
          ],
          example:
            "Consider a hypothetical system oxidising 4 kg of ammonia nitrogen per day. With a stoichiometric demand of about 7.05 kg of calcium carbonate equivalent per kilogram of nitrogen, roughly 28 kg of alkalinity is destroyed daily and must be replaced by make-up water or by deliberate buffer addition.",
          limitations:
            "The stoichiometric coefficient assumes complete two-step autotrophic nitrification; partial oxidation, heterotrophic assimilation and denitrification all change the net demand. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Principal parameters, their sources and their removal routes",
          columns: ["Parameter", "Where it comes from", "How it is removed or controlled"],
          rows: [
            ["Dissolved oxygen", "Atmospheric transfer, aeration, oxygen injection, algal photosynthesis in ponds", "Consumed by animals, bacteria and sediment; replaced continuously by transfer devices"],
            ["Total ammonia nitrogen", "Protein metabolism and decomposition of faeces and uneaten feed", "Nitrification on biofilter media, algal and bacterial assimilation, water exchange"],
            ["Nitrite", "Incomplete nitrification, particularly during start-up or load increase", "Completion of the second oxidation step; chloride reduces its physiological effect"],
            ["Nitrate", "End product of nitrification", "Water exchange, plant uptake, anoxic denitrification"],
            ["Carbon dioxide", "Respiration by animals and bacteria", "Stripping by aeration or dedicated degassing; increases with pure-oxygen operation"],
            ["Alkalinity", "Source water, deliberate buffer addition", "Consumed by nitrification and by carbon dioxide production"],
            ["Suspended solids", "Faeces, feed fines, biofilm sloughing, algal biomass", "Settling, screening, filtration, foam fractionation in saline water"],
            ["Temperature", "Ambient conditions, source water, heat added by equipment", "Heating, cooling, shading, insulation, source water blending"],
          ],
          basis:
            "A structural summary of parameter sources and removal mechanisms, without numerical targets. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        { kind: "subheading", value: "Diel variation in ponds" },
        {
          kind: "text",
          value:
            "In any water body with a significant algal population, oxygen, carbon dioxide and pH swing on a daily cycle: photosynthesis raises oxygen and pH through the afternoon and stops at dusk, after which respiration alone drives oxygen down and carbon dioxide up until dawn. The minimum oxygen and the maximum un-ionised ammonia therefore occur at different times of day, and a sampling regime that only visits mid-morning sees neither.",
        },
        { kind: "subheading", value: "Source water" },
        {
          kind: "text",
          value:
            "Groundwater is often low in oxygen, supersaturated with nitrogen or carbon dioxide, and may carry iron, manganese or hydrogen sulphide requiring aeration and oxidation before use. Surface water brings variable turbidity, agricultural residues and pathogens. Characterising the source across seasons, rather than from a single sample, is a fundamental site decision rather than a commissioning detail.",
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
            "A working monitoring regime distinguishes parameters that must be watched continuously from those that need periodic measurement, and it defines in advance what each reading will trigger.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Instrument dissolved oxygen and temperature continuously in every unit that cannot survive a short interruption, with an alarm path that reaches a person who can act.",
            "Measure total ammonia nitrogen, nitrite and pH on a fixed schedule, and always record pH and temperature alongside ammonia so speciation can be computed.",
            "Track alkalinity as a routine parameter rather than as a diagnostic reached for after a problem, because it is the early warning for pH instability.",
            "Sample at the time of day when the parameter is worst, not at the time of day that suits the round: before dawn for oxygen, mid-afternoon for pH and un-ionised ammonia.",
            "Sample from the outlet as well as the inlet of a culture unit, since the difference between them is the load the animals are actually imposing.",
            "Calibrate probes on a schedule and against known standards; an uncalibrated continuous reading is worse than no reading because it is trusted.",
            "Plot the record. A parameter walking slowly in one direction across two weeks is the signal, and a table of numbers hides it.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Define the action before the reading",
          value:
            "Writing down in advance which parameter movement triggers which response converts a night-time decision into a lookup. The judgement is made calmly at the desk rather than urgently at the tank.",
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
            "Species differ substantially in their tolerances, and the differences are not merely quantitative. Air-breathing species tolerate oxygen conditions that would be fatal to salmonids. Euryhaline species carry chloride that alters nitrite risk. Larvae and juveniles are consistently less tolerant than adults of the same species, and animals recovering from handling are less tolerant than the same animals a week later. A single farm-wide standard applied across life stages will be wrong for several of them.",
        },
        {
          kind: "text",
          value:
            "On the engineering side, the design question is not what the treatment train achieves at steady state but what it achieves during a transient. Nitrifying populations grow slowly, so a step increase in feeding produces an ammonia and then a nitrite excursion before the biofilter catches up. Aeration and oxygenation, by contrast, respond in seconds. Matching the ramp rate of feeding to the response rate of the slowest process is the practical expression of this.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Nominal capacity is not available capacity",
          value:
            "A treatment device rated under test conditions delivers less in service as temperature, organic loading, fouling and hydraulic short-circuiting all reduce effectiveness. Design margins exist to cover the difference rather than to permit higher stocking.",
        },
        {
          kind: "text",
          value:
            "Gas supersaturation deserves separate mention as an engineering-created hazard. Pressurised leaks on suction pipework, or heating water without degassing, can drive total dissolved gas above saturation and produce gas bubble disease even when every conventional parameter looks correct.",
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
            "Manage the whole set of parameters together. Correcting one in isolation frequently moves another in the wrong direction.",
            "Control the input rather than chasing the output: the feed rate is the primary lever on ammonia, solids and oxygen demand alike.",
            "Remove solids as early and as intact as possible, before they disperse and become dissolved load.",
            "Maintain alkalinity deliberately in any system where nitrification is doing the nitrogen work.",
            "Change conditions gradually. Aquatic animals tolerate a wider range of stable conditions than they tolerate rapid movement within a narrower range.",
            "Keep an independent means of measurement available, so that a suspicious continuous reading can be checked rather than debated.",
            "Treat every water quality investigation as a search for the chain, not the symptom.",
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
          caption: "Water quality patterns and what usually lies behind them",
          columns: ["Observation", "Likely underlying cause"],
          rows: [
            ["Ammonia rises shortly after a feed increase", "Nitrifying population has not yet expanded to match the new nitrogen load"],
            ["Nitrite rises while ammonia falls", "The second oxidation step is lagging the first, typical of start-up and of recovery after a biofilter disturbance"],
            ["pH drifting steadily downward", "Alkalinity consumed by nitrification and carbon dioxide accumulation, without replacement"],
            ["Fish at the surface before dawn in a pond", "Nocturnal respiration has drawn oxygen down; often follows a dense bloom or a cloudy day"],
            ["Sudden clearing of a pond followed by mortality", "Algal bloom collapse, producing an oxygen crash and a pulse of ammonia from decaying cells"],
            ["Animals lethargic despite adequate dissolved oxygen", "Carbon dioxide accumulation impairing oxygen uptake at the gill, common where pure oxygen is used without degassing"],
            ["Gill irritation and flared opercula across a unit", "Fine suspended solids, or un-ionised ammonia elevated by a pH rise rather than by a change in total ammonia"],
            ["Biofilter performance falling without a load change", "Organic overloading favouring heterotrophic growth, channelling in the media, or a temperature decline"],
          ],
          basis:
            "Diagnostic associations widely described in aquaculture water quality literature, presented as investigation starting points rather than conclusions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Characterise the source water fully and across seasons before designing anything that depends on it.",
            "Commission and mature the biological treatment before stocking, and prove it against a simulated nitrogen load.",
            "Increase feed in measured steps, holding each step until the water response has been observed and has settled.",
            "Log every parameter with date, time, unit and the identity of the person taking the reading.",
            "Keep aeration redundancy sized for the failure case rather than the operating case, with an independent power path.",
            "Review the record at fixed intervals rather than only when something goes wrong, so the trend is seen while it is still slow.",
            "Retain water samples when an unexplained event occurs, so that a later analysis has material to work with.",
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
            "Beyond the standard parameter set, intensive low-exchange systems accumulate constituents that routine testing does not look for: dissolved organic carbon, humic and coloured compounds, trace metals concentrated by evaporation, and metabolites that influence flavour. Off-flavour compounds produced by certain actinomycetes and cyanobacteria are the most commercially significant of these, and they are managed by purging in clean water before harvest rather than by treatment of the production water.",
        },
        {
          kind: "text",
          value:
            "A second advanced theme is the microbial ecology of the water itself. Systems can be operated to favour a stable, largely harmless microbial community rather than to minimise total bacterial counts, on the reasoning that a sterilised water column is rapidly recolonised by whatever arrives first. Managing organic carbon availability and avoiding repeated disinfection of the whole system are the practical levers.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Microbial community management",
          value:
            "Deliberate steering of water column microbial communities towards stable, non-opportunistic populations is an active research direction. The principle is well supported; reliable operating protocols across species and system types are not yet settled.",
        },
        {
          kind: "text",
          value:
            "Finally, continuous instrumentation changes what water quality management can be. When a parameter is sampled once a day, management is reactive by definition. When it is logged continuously, the rate of change becomes visible, and the rate of change is usually a better predictor of an incident than the value itself. Building control logic on trend rather than on threshold is the direction that instrumentation makes available.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Water quality parameters interact, and correcting one in isolation commonly moves another adversely.",
    "Total ammonia nitrogen is only interpretable alongside pH and temperature, because those determine the toxic un-ionised fraction.",
    "Nitrification consumes both oxygen and alkalinity, so an intensively loaded system drifts downward in pH unless buffer is replaced.",
    "Oxygen has the shortest time constant on the farm and must be supplied continuously rather than stored.",
    "Removing solids early, before they disintegrate, prevents them becoming dissolved oxygen demand and ammonia.",
    "Biological treatment responds over days while aeration responds in seconds, so feed increases must be ramped to the slowest process.",
  ],
  related: ["fundamentals", "feed-nutrition", "ras", "fish-health"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Technical guidance on water quality management across aquaculture production systems.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center",
      description: "Extension publications on pond and tank water chemistry, aeration and monitoring practice.",
    },
    {
      organisation: "Bureau of Indian Standards",
      description: "Standards relating to water quality measurement and sampling methods applicable to aquaculture supply water.",
    },
  ],
};
