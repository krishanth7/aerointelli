import type { KnowledgeArea } from "../types";

export const shrimp: KnowledgeArea = {
  number: "23",
  slug: "shrimp",
  title: "Shrimp Farming",
  navSummary: "The most intensive, most valuable and least forgiving crop in Indian aquaculture.",
  summary:
    "Shrimp farming is the economic centre of Indian coastal aquaculture and the most demanding production system in it. The animal grows fast, tolerates high density, and carries a market value that justifies substantial investment — but it moults, lives on the pond bottom, has no adaptive immunity in the vertebrate sense, and is vulnerable to viral disease that no treatment addresses once present. Everything in shrimp practice follows from that combination.",
  difficulty: "advanced",
  topics: ["production", "health", "operations"],
  tags: ["penaeid culture", "postlarvae", "pond bottom management", "biosecurity", "moult cycle", "specific pathogen free"],
  species: [
    "Litopenaeus vannamei (Pacific white shrimp)",
    "Penaeus monodon (black tiger shrimp)",
    "Penaeus indicus (Indian white shrimp)",
    "Macrobrachium rosenbergii (giant freshwater prawn)",
  ],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-29",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Shrimp are farmed in coastal ponds at high density, fed a formulated diet and kept alive by continuous aeration. They grow quickly and sell for a good price, but they catch diseases that cannot be cured, so the entire method is built around keeping pathogens out and keeping the pond bottom clean.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Indian shrimp farming is concentrated in the coastal tracts of Andhra Pradesh, Tamil Nadu, Gujarat, West Bengal and Odisha, with production dominated by the Pacific white shrimp Litopenaeus vannamei following its introduction, and by the black tiger Penaeus monodon which preceded it and retains a place in certain systems and markets. The freshwater prawn Macrobrachium rosenbergii is farmed inland under quite different conditions and is included here because its husbandry shares much of the same logic.",
        },
        {
          kind: "text",
          value:
            "The industry's history is instructive. Rapid expansion in the early years was followed by widespread viral disease that closed farms across whole districts, and the recovery was built on a specific set of changes: hatchery-produced postlarvae certified free of named pathogens, water treatment before intake, reduced or zero water exchange during the crop, and reservoir and settlement infrastructure inside the farm boundary. Those changes are the reason modern shrimp farming looks the way it does.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Exclusion, not treatment",
          value:
            "The principal viral diseases of penaeid shrimp have no curative treatment. Health management is therefore entirely a matter of exclusion and of maintaining conditions in which the animal is not stressed — the pathogen is kept out, or the crop is at risk for its entire duration.",
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
            "Shrimp is India's leading aquaculture export by value and a major source of coastal employment, spanning hatcheries, feed mills, farms, processing plants and cold chain logistics. A shrimp crop turns over in months rather than years, which means capital cycles quickly and both gains and losses are realised quickly.",
        },
        {
          kind: "text",
          value:
            "It also matters as a technical discipline because shrimp farming forced the sector to take biosecurity seriously. The practices that are now standard in shrimp — certified seed, treated intake water, reduced exchange, crop records and disease reporting — were developed under commercial pressure after very large losses, and they transfer usefully to other species and systems where the consequences of failure have simply not yet been as visible.",
        },
        {
          kind: "text",
          value:
            "Finally, the export market imposes requirements that reach back into farm practice: traceability of seed and feed, restrictions on antimicrobial use, residue testing and documentation. A farm that cannot produce a credible record of what it did cannot reliably sell into that market regardless of the quality of the animal it grew.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "The moult cycle" },
        {
          kind: "text",
          value:
            "Shrimp grow by shedding the exoskeleton and expanding before the new shell hardens. The animal is soft, vulnerable and largely defenceless during that window, and moulting draws heavily on calcium, magnesium and other minerals from the water. Mineral balance, and particularly the relationship between calcium, magnesium and potassium, therefore has a direct effect on moulting success — a consideration that becomes acute in low-salinity inland culture where the ionic profile of the water differs from diluted seawater.",
        },
        { kind: "subheading", value: "A benthic animal" },
        {
          kind: "text",
          value:
            "Shrimp live at the pond bottom, which is also where uneaten feed, faeces and dead algae accumulate. The sediment surface is where oxygen is lowest, where anaerobic pockets generate hydrogen sulphide, and where the animal spends its entire life. Pond bottom condition is not one factor among several in shrimp culture; it is the environment the crop actually occupies.",
        },
        { kind: "subheading", value: "Postlarval quality" },
        {
          kind: "text",
          value:
            "The crop begins with postlarvae, and their quality determines a large share of the outcome before the farm has done anything. Origin from a hatchery operating a specific-pathogen-free broodstock programme, screening for the relevant pathogens, uniformity of size, activity, gut fullness and response to stress testing are all assessable before stocking, and none of them can be corrected afterwards.",
        },
        { kind: "subheading", value: "Aeration as life support" },
        {
          kind: "text",
          value:
            "Intensive shrimp ponds depend on mechanical aeration continuously, not intermittently. Aerators supply oxygen and, equally importantly, create a circulation pattern that concentrates settleable solids into a central zone where they can be removed. Aerator placement is therefore a sediment management decision as much as an oxygenation one, and a power interruption at high biomass produces losses within a very short time.",
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
            "Shrimp crops are managed by a small set of derived quantities, all of which depend on an honest estimate of how many animals are still alive.",
        },
        {
          kind: "formula",
          name: "Survival rate",
          expression: "S = Nh / Ns",
          terms: [
            { symbol: "S", meaning: "Survival over the crop", unit: "fraction" },
            { symbol: "Nh", meaning: "Number of animals harvested", unit: "count" },
            { symbol: "Ns", meaning: "Number of postlarvae stocked", unit: "count" },
          ],
          example:
            "Consider a hypothetical pond stocked with 500,000 postlarvae from which 350,000 animals are harvested. Survival is 0.70. Because shrimp are invisible in a turbid pond and mortality leaves little trace, survival is unknown during the crop and only estimated — which is why feed tray observation and sampling discipline matter so much.",
          limitations:
            "Survival is only known with confidence at harvest, and in-crop estimates from cast nets or feed trays carry substantial error that compounds every feeding decision made from them. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Standing biomass from sampling",
          expression: "B = Ns x S x w",
          terms: [
            { symbol: "B", meaning: "Estimated standing biomass in the pond", unit: "kg" },
            { symbol: "Ns", meaning: "Number of postlarvae stocked", unit: "count" },
            { symbol: "S", meaning: "Assumed survival to date", unit: "fraction" },
            { symbol: "w", meaning: "Mean individual weight from sampling", unit: "kg" },
          ],
          example:
            "Consider a hypothetical pond stocked with 500,000 postlarvae, assumed survival of 0.80, and a sampled mean weight of 0.012 kg. Estimated biomass is 4,800 kg. If actual survival were 0.65, the true biomass would be nearer 3,900 kg, and the pond would have been overfed by roughly a fifth every day since the assumption was adopted.",
          limitations:
            "The survival term is an assumption rather than a measurement, and errors in it propagate directly into feed rate, aeration demand and harvest planning. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "Water chemistry in shrimp ponds turns on a few interacting variables. Alkalinity buffers the daily pH swing driven by algal photosynthesis; pH in turn governs how much of the total ammonia is present in its un-ionised, toxic form; and both alkalinity and mineral ratios affect moulting. In low-salinity inland ponds these relationships require deliberate management, because the water has not arrived with the ionic proportions of seawater.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "flow",
          caption:
            "The shrimp production cycle from broodstock to market. Each transition is a biosecurity boundary as well as a stage change.",
          steps: [
            {
              label: "Broodstock",
              detail:
                "Mature animals held in a maturation facility, ideally from a specific-pathogen-free line, conditioned under controlled temperature and photoperiod to spawn on schedule.",
            },
            {
              label: "Spawning and hatching",
              detail:
                "Females spawn into individual tanks; eggs hatch into nauplii within a day and are transferred away from spawning water to break the carry-over of pathogens and organic load.",
            },
            {
              label: "Nauplius",
              detail:
                "A non-feeding stage living on yolk reserves, passing through several substages before requiring external food.",
            },
            {
              label: "Zoea",
              detail:
                "First feeding, on microalgae. The most delicate hatchery phase, sensitive to algal quality, temperature and bacterial load.",
            },
            {
              label: "Mysis",
              detail:
                "Transition towards carnivory, taking Artemia nauplii alongside algae and beginning to resemble the adult form.",
            },
            {
              label: "Postlarvae",
              detail:
                "Benthic and robust enough to count, screen and transport. The stage at which the farm buys, and at which pathogen screening and stress testing are performed.",
            },
            {
              label: "Acclimation and stocking",
              detail:
                "Gradual matching of salinity, temperature and pH between transport water and pond water before release, timed for the cooler part of the day.",
            },
            {
              label: "Nursery",
              detail:
                "An optional intermediate phase in a smaller, controlled unit, which improves survival estimation and shortens the exposure of small animals to full pond conditions.",
            },
            {
              label: "Grow-out",
              detail:
                "The main feeding phase in aerated ponds, where biomass, feed load, sediment accumulation and disease risk all rise together.",
            },
            {
              label: "Harvest",
              detail:
                "Drain or net harvest timed to moult stage and market size, followed immediately by chilling to preserve quality.",
            },
            {
              label: "Pond preparation",
              detail:
                "Drying, sediment removal, liming and disinfection between crops, which is where the next crop's disease risk is largely determined.",
            },
          ],
        },
        {
          kind: "table",
          caption: "Shrimp production intensities and what each requires",
          columns: ["Intensity", "Water management", "Feed and aeration", "Principal exposure"],
          rows: [
            [
              "Extensive",
              "Tidal exchange, little treatment",
              "Largely natural productivity, no mechanical aeration",
              "Whatever enters with the tide; weather",
            ],
            [
              "Semi-intensive",
              "Reservoir with treatment before intake, limited exchange",
              "Formulated feed with partial aeration",
              "Disease entry through water and seed; oxygen at peak biomass",
            ],
            [
              "Intensive",
              "Treated reservoir water, minimal exchange during the crop",
              "Complete formulated feeding with continuous aeration",
              "Power failure; sediment accumulation; rapid disease progression",
            ],
            [
              "Biofloc or low-exchange",
              "Effectively closed, waste converted in situ",
              "Continuous aeration and carbon supplementation",
              "Narrow operating window; total dependence on mixing energy",
            ],
            [
              "Inland low-salinity",
              "Saline groundwater or transported brine, regulated",
              "Formulated feed with mineral correction of the water",
              "Ionic imbalance affecting moulting; groundwater and soil salinisation",
            ],
          ],
          basis:
            "A qualitative comparison of the structural requirements of each intensity level, not a yield or profitability ranking. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "The crop is decided before stocking. Pond preparation, water preparation and seed selection together determine most of the outcome, and the in-crop management that follows is largely about not losing what those three steps established.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Drain the pond fully, remove accumulated black sediment, and dry the bottom until it cracks, allowing organic matter to oxidise.",
            "Lime according to the measured soil pH, and repair liners, dykes, central drains and aerator mountings while the pond is empty.",
            "Fill through a reservoir where the water has been screened, settled and, where practised, treated and left to stand before transfer.",
            "Establish a stable plankton bloom in the pond before stocking, so that early postlarvae encounter both natural food and a stabilised chemistry.",
            "Select postlarvae on documented pathogen screening, uniformity, activity and stress-test response, and reject a batch that fails rather than negotiating on price.",
            "Acclimate to the receiving pond's measured salinity, temperature and pH, over a period matched to the size of the difference to be crossed.",
            "Feed conservatively at first and use check trays to establish the pond's actual consumption before increasing the ration.",
            "Sample weight and observe animals routinely, adjusting the survival assumption downwards when tray behaviour and sampled counts suggest it.",
          ],
        },
        {
          kind: "text",
          value:
            "Feed tray observation is the central daily practice. Trays report on consumption rate, on the health and gut fullness of animals that come to them, and on whether feed is being left in a pond where the operator cannot see the population. Trays are read after a fixed interval, and the next feed is adjusted from what they show rather than from a table.",
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
            "Shrimp lack the adaptive immune response of vertebrates. They possess an innate immune system that can be supported by good nutrition and unstressed conditions, but they cannot be vaccinated and they do not acquire lasting immunity from exposure. This single fact explains why the entire industry is organised around exclusion: certified seed, treated water, controlled movement of people and equipment, and crop-to-crop disinfection.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Stress precedes disease",
          value:
            "Outbreaks in shrimp ponds very commonly follow a stressor — a sudden salinity change after rain, an oxygen sag at peak biomass, a bloom crash, or handling. The practical implication is that disease prevention and water quality management are the same activity, not two adjacent ones.",
        },
        {
          kind: "text",
          value:
            "The engineering considerations concentrate on the pond bottom and on power. Sediment management determines whether the animal's living surface stays aerobic, and it is influenced by pond shape, slope, liner choice, aerator placement and central drain design. Aerators must be positioned to sweep solids inward consistently rather than to create competing currents, and their number is set by peak biomass in the warmest month rather than by pond area.",
        },
        {
          kind: "text",
          value:
            "Power reliability deserves separate treatment. In an intensive pond at high biomass the time between aeration stopping and serious loss is measured in a small number of hours at most, and shorter in hot weather. Standby generation with automatic changeover, tested under load rather than assumed functional, is the difference between an interruption and a crop failure.",
        },
        {
          kind: "text",
          value:
            "Effluent is the third consideration. Shrimp ponds discharge water carrying suspended solids, nitrogen and phosphorus into coastal water bodies shared with other farms and with natural ecosystems. Settlement ponds, biological polishing and reduced exchange all limit that load, and in India discharge is subject to regulation under the coastal aquaculture authority framework.",
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
            "Treat the farm boundary as a real boundary: control vehicle and personnel movement, use dedicated equipment per pond, and disinfect anything that crosses between ponds.",
            "Never introduce untreated water directly into a production pond, regardless of how clean the source appears at the moment of intake.",
            "Read feed trays every feeding and let them, not a feed chart, determine the next ration.",
            "Monitor dissolved oxygen through the night at peak biomass, because that is when demand is highest and photosynthetic supply is absent.",
            "Track alkalinity, pH range and mineral ratios rather than single spot values, particularly in low-salinity ponds where moulting depends on them.",
            "Keep a complete written crop record — seed source and screening, feed lot numbers, water chemistry, treatments and mortality — because both diagnosis and market access depend on it.",
            "Plan an emergency harvest threshold in advance, so that the decision to take a partial crop early is a prepared option rather than a panic.",
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
          caption: "Recurring shrimp crop problems and their usual underlying causes",
          columns: ["Symptom", "Usual underlying cause"],
          rows: [
            [
              "Feed trays consistently empty long before the check time",
              "Real biomass higher than assumed, or feed being taken by other organisms in the pond",
            ],
            [
              "Feed left in trays with no change in weather",
              "Water quality has moved, an early disease process is underway, or a moulting peak has suppressed feeding",
            ],
            [
              "Black or foul-smelling pond bottom in the central zone",
              "Sediment accumulation exceeding the aeration pattern's ability to keep it aerobic, generating hydrogen sulphide",
            ],
            [
              "Soft shells persisting after moult",
              "Mineral deficiency or imbalance in the water, particularly in low-salinity ponds, or inadequate dietary mineral supply",
            ],
            [
              "Sudden mortality within weeks of stocking",
              "Seed carrying pathogens despite documentation, or stocking into a pond whose water chemistry was not stabilised",
            ],
            [
              "Growth slows across the pond in the second half of the crop",
              "Standing biomass beyond what aeration and sediment management support, so conditions rather than feed are limiting",
            ],
            [
              "Mass mortality after a night-time power interruption",
              "Standby generation absent, undersized or not tested under actual load",
            ],
          ],
          basis:
            "Patterns commonly described in shrimp aquaculture extension material, offered as diagnostic starting points rather than conclusions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Build reservoir and settlement capacity into the farm layout from the beginning, since the water path cannot be redesigned once ponds are constructed.",
            "Buy seed on documented screening and hatchery practice, and maintain the relationship with a hatchery whose programme can be inspected.",
            "Use a nursery phase where the farm can support it, because it improves early survival and gives a far better count entering grow-out.",
            "Size aeration for peak biomass in the warmest month and provide standby power with automatic changeover, tested on load at regular intervals.",
            "Manage the pond bottom actively through aerator placement, central drainage and, between crops, full drying and sediment removal.",
            "Follow the regulatory framework for coastal aquaculture registration, effluent and antimicrobial use, and keep the documentation that demonstrates it.",
            "Adopt a farm-level crop calendar and coordinate fallow periods with neighbouring farms sharing the same creek, because disease does not respect a boundary fence.",
            "Chill immediately at harvest and keep the cold chain unbroken, since quality lost in the first hour cannot be recovered downstream.",
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
            "Genetic improvement has changed shrimp farming more than any single piece of equipment. Domesticated lines selected for growth rate, and separately for tolerance of specific pathogens, are the basis of the specific-pathogen-free supply chain, and they explain why current production is possible at densities that would have been untenable earlier. The trade-off is a dependence on a small number of broodstock sources, and the recognition that pathogen-free is a statement about the animal's history rather than a property it retains once it enters an unprotected pond.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Microbial community management",
          value:
            "Steering the bacterial community of the pond — through carbon addition, biofloc approaches, and the use of beneficial bacterial cultures — is an active area of work aimed at suppressing opportunistic pathogens without antimicrobials. Which interventions produce reliable, repeatable effects at commercial pond scale remains under investigation.",
        },
        {
          kind: "text",
          value:
            "Recirculating and near-zero-exchange shrimp systems represent the other direction of development. By treating water inside the farm rather than exchanging it, they reduce both the disease entry route and the effluent load, and they permit production away from the coast. The cost is energy, capital and a much narrower margin for operational error, since a closed system has no dilution to fall back on when something goes wrong.",
        },
        {
          kind: "text",
          value:
            "The commercial frontier is a question of crop strategy rather than technology. Partial harvesting to relieve density and capture size premiums, multi-phase production using nursery and transfer stages, and shorter crops accepting a smaller animal in exchange for reduced disease exposure are all rational responses to the same underlying fact: risk in a shrimp pond accumulates with time and with biomass, so the optimum is rarely the largest animal the pond could theoretically produce.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Shrimp cannot be vaccinated and the major viral diseases have no treatment, so the entire method is exclusion rather than cure.",
    "The animal lives on the pond bottom, which makes sediment condition the environment the crop actually occupies rather than a secondary variable.",
    "Survival is unknown during the crop, so every feeding and aeration decision rests on an assumption that must be tested against tray and sampling evidence.",
    "Moulting depends on water mineral balance, which requires deliberate correction in low-salinity inland ponds.",
    "Intensive ponds depend on continuous aeration, so tested standby power is a production requirement and not a contingency.",
    "Risk accumulates with biomass and time, which makes crop strategy — partial harvest, nursery phases, shorter cycles — a genuine management lever.",
  ],
  related: ["brackishwater", "biosecurity", "pond", "fish-health"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Programme material on shrimp culture systems, health management and coastal aquaculture development.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "World Organisation for Animal Health",
      description: "Aquatic animal health standards, listed crustacean diseases and diagnostic guidance.",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute publications and extension material on brackishwater shrimp culture and health management in India.",
    },
  ],
};
