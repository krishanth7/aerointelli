import type { KnowledgeArea } from "../types";

export const marine: KnowledgeArea = {
  number: "19",
  slug: "marine",
  title: "Marine Aquaculture",
  navSummary: "Farming in full-strength seawater, where the chemistry, the species and the exposure are all different.",
  summary:
    "Marine aquaculture covers finfish, shellfish and seaweed grown in seawater, in coastal cages, on suspended structures and in land-based systems supplied from the sea. Full-salinity water changes the engineering through corrosion and biofouling, changes the biology through species with demanding larval stages, and changes the economics through the length and difficulty of the hatchery phase.",
  difficulty: "intermediate",
  topics: ["production", "environment", "biology", "engineering"],
  tags: ["mariculture", "seawater systems", "bivalve culture", "seaweed farming", "larval rearing", "coastal siting"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-21",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Marine farming means growing sea species in sea water, either in cages and on ropes in the sea itself or in tanks on land fed by a seawater intake. Seawater corrodes metal, encourages heavy fouling growth and supports species whose young stages are very small and difficult to feed. Shellfish and seaweed need no feed at all, which makes them the easiest place to start.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Marine aquaculture, or mariculture, is production in water at or near full oceanic salinity. It includes finfish in coastal cages and in land-based tanks, bivalve molluscs on ropes, racks and the seabed, seaweed on longlines and nets, and a range of higher-value species produced in closed systems. What these share is the medium, and the medium shapes almost every technical decision.",
        },
        {
          kind: "text",
          value:
            "The three groups behave as different businesses. Finfish require hatcheries, formulated feed and daily management, and produce dissolved and particulate waste. Bivalves feed themselves by filtering the water and require no feed input at all, but depend absolutely on the water body's natural productivity and on its sanitary quality. Seaweed absorbs dissolved nutrients and light, requires no feed and no hatchery in most cases, and is limited chiefly by handling labour and by market.",
        },
        {
          kind: "text",
          value:
            "India has an extensive coastline, and marine production has historically come far more from capture than from culture. The species, the sites and the demand exist; the constraints have been seed supply, the difficulty of marine hatchery work, and the institutional questions around who may occupy a stretch of coastal water and on what terms.",
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
            "Capture fisheries in most regions are fully exploited, and additional marine protein has to come from culture. Marine aquaculture also avoids competing for the fresh water and arable land that inland production requires, which becomes more important as both grow scarcer.",
        },
        {
          kind: "text",
          value:
            "The extractive part of the sector matters for a further reason. Bivalves and seaweed remove nutrients and particulates from the water rather than adding them, so they can be sited where nutrient enrichment is a problem and produce food while reducing it. Very few forms of food production have that property, and it is the reason extractive mariculture attracts attention out of proportion to its current volume.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Seawater is a different engineering environment",
          value:
            "Full-salinity water is corrosive to most metals, conducts electricity readily, supports rapid and heavy biofouling, and carries dissolved species that alter treatment chemistry. Equipment and materials that perform well in fresh water frequently do not survive in seawater, and material selection is a design decision rather than a procurement detail.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Salinity and osmoregulation" },
        {
          kind: "text",
          value:
            "A marine teleost lives in water saltier than its own body fluids, so it loses water continuously by osmosis and must drink seawater and excrete the excess salt through specialised gill cells. This is metabolically expensive, and it means salinity change is a physiological event rather than a chemical inconvenience. Species differ widely in how much salinity variation they tolerate, and euryhaline species that handle a wide range are considerably easier to farm in coastal water subject to seasonal freshwater inflow.",
        },
        { kind: "subheading", value: "Oxygen at salinity" },
        {
          kind: "text",
          value:
            "Seawater holds less dissolved oxygen at saturation than fresh water at the same temperature, and the difference widens as the water warms. Warm tropical seawater therefore offers a thinner oxygen margin than the same design would enjoy inland, and oxygen budgets for marine systems must be computed at the site's actual salinity and temperature rather than borrowed from freshwater practice.",
        },
        { kind: "subheading", value: "Buffering and stability" },
        {
          kind: "text",
          value:
            "Seawater is strongly buffered by its carbonate system, so pH is far more stable in a marine system than in soft fresh water. This is a genuine operating advantage: the daily pH swings that trouble freshwater ponds are largely absent. It also means that when pH does move appreciably in a closed marine system, something substantial has changed and the reading deserves immediate attention.",
        },
        { kind: "subheading", value: "The larval bottleneck" },
        {
          kind: "text",
          value:
            "Most marine finfish produce very small pelagic larvae with tiny mouths and undeveloped digestive systems. They cannot take formulated feed at first feeding and must be given live organisms of appropriate size, cultured on the hatchery site and enriched to supply the fatty acids the larvae require. This is the reason marine hatchery work is difficult, why seed supply constrains the sector, and why species whose larvae are large and robust reach commercial production far sooner than those whose larvae are not.",
        },
        {
          kind: "flow",
          caption:
            "The live feed chain in a marine finfish hatchery. Each stage is a culture operation in its own right, running continuously alongside the larvae.",
          steps: [
            { label: "Microalgae culture", detail: "Grown continuously as feed for the rotifers and to condition the larval rearing water." },
            { label: "Rotifer culture", detail: "Small live prey suited to the mouth size of newly feeding larvae, produced in dedicated tanks." },
            { label: "Enrichment", detail: "Live prey are held with a lipid emulsion so that they carry the essential fatty acids the larvae cannot synthesise." },
            { label: "First feeding", detail: "Larvae are offered enriched rotifers at a density and light level that let them locate and capture prey." },
            { label: "Artemia stage", detail: "As the larvae grow, larger enriched brine shrimp nauplii replace rotifers in the ration." },
            { label: "Weaning", detail: "Formulated microdiets are introduced gradually alongside live feed until the fish accept dry feed entirely." },
            { label: "Nursery", detail: "Weaned juveniles are graded and grown on dry feed until robust enough to transfer to the production system." },
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
            "Two quantitative relationships recur across marine systems: how much oxygen the water can hold at the site's conditions, and how much water a filter-feeding crop needs to pass to obtain its ration.",
        },
        {
          kind: "formula",
          name: "Oxygen saturation deficit at salinity",
          expression: "Cs = Cf x (1 - Ks x S)",
          terms: [
            { symbol: "Cs", meaning: "Dissolved oxygen concentration at saturation in seawater at the operating temperature", unit: "mg/L" },
            { symbol: "Cf", meaning: "Saturation concentration in fresh water at the same temperature and pressure", unit: "mg/L" },
            { symbol: "Ks", meaning: "Salinity correction coefficient, an empirical factor describing the reduction per unit salinity", unit: "per practical salinity unit" },
            { symbol: "S", meaning: "Salinity of the culture water", unit: "practical salinity units" },
          ],
          example:
            "Consider a hypothetical site whose fresh water saturation at the working temperature would be 8.0 mg/L, at a salinity of 35 units with an assumed correction coefficient of 0.006 per unit. Saturation becomes 8.0 x (1 - 0.21), about 6.3 mg/L. Every oxygen calculation for that site starts from the lower figure, not from a freshwater table.",
          limitations:
            "This is a simplified linearisation of a non-linear relationship, it ignores barometric pressure and altitude effects, and standard solubility tables should be used for design rather than an approximation. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Filtration demand of a bivalve stock",
          expression: "Qb = N x Cr",
          terms: [
            { symbol: "Qb", meaning: "Total volume of water the stock must process per hour to obtain its ration", unit: "L/h" },
            { symbol: "N", meaning: "Number of individuals held on the structure", unit: "count" },
            { symbol: "Cr", meaning: "Clearance rate per individual at the operating temperature and size", unit: "L/h per individual" },
          ],
          example:
            "Consider a hypothetical longline holding 50,000 individuals with an assumed clearance rate of 2 L per hour each. The stock must process 100,000 L per hour, and if the current through the structure cannot deliver that volume of unfiltered water the animals are competing with one another for a food supply that has already been depleted upstream.",
          limitations:
            "Clearance rate varies strongly with temperature, animal size, particle concentration and water quality, and the calculation says nothing about whether the particles delivered are of a usable type. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "The second relationship is the whole of shellfish site selection in one line. Bivalves are not fed, so their growth is set by how much food-bearing water passes them. Density, structure spacing and orientation to the current are the only levers available, and they all act on the same term.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        { kind: "subheading", value: "Production groups" },
        {
          kind: "table",
          caption: "Marine production groups and their defining characteristics",
          columns: ["Group", "Nutrition", "Principal constraint", "Environmental effect"],
          rows: [
            ["Marine finfish in cages", "Formulated feed supplied daily", "Seed supply and exposure of the site", "Adds dissolved nutrients and organic solids to the water body"],
            ["Marine finfish in land-based systems", "Formulated feed with full water control", "Capital cost, energy and seawater intake reliability", "Waste is captured, so the effect depends on discharge management"],
            ["Bivalve molluscs", "Filter natural particles from the water", "Natural productivity and sanitary classification of the water", "Removes particulates and nutrients from the water column"],
            ["Seaweed", "Absorbs dissolved nutrients and light", "Handling labour, seeding material and market outlet", "Removes dissolved nutrients; can shade the water beneath"],
            ["Crustaceans in coastal ponds", "Formulated feed with managed pond water", "Disease pressure and water exchange", "Effluent nutrients and solids unless treated before discharge"],
            ["Ornamental and high-value species", "Specialised diets, often live at early stages", "Larval rearing difficulty and narrow markets", "Small volumes; concern centres on wild collection of broodstock"],
          ],
          basis:
            "A qualitative comparison of the structural characteristics of each production group rather than a ranking. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        { kind: "subheading", value: "Seawater intakes and land-based systems" },
        {
          kind: "text",
          value:
            "A land-based marine farm depends on its intake. Open intakes deliver water at ambient quality and carry whatever the sea carries, including plankton blooms, sediment after storms and pathogens, so they demand filtration and disinfection. Beach wells and sub-sand intakes draw water that has been filtered through sediment, arriving clearer, biologically more stable and at steadier temperature, but usually oxygen-depleted and sometimes carrying dissolved iron or hydrogen sulphide that must be removed before use.",
        },
        { kind: "subheading", value: "Biofouling" },
        {
          kind: "text",
          value:
            "Seawater fouls surfaces quickly and heavily. Nets lose exchange capacity and gain drag, intake pipes narrow, sensors drift and heat exchangers lose efficiency. Fouling management is a continuous operating cost with no permanent solution: net changing, cleaning cycles, antifouling treatments where permitted and materials chosen for cleanability. In marine work it should be planned into the labour and maintenance budget from the outset rather than treated as a periodic surprise.",
        },
        { kind: "subheading", value: "Materials and corrosion" },
        {
          kind: "text",
          value:
            "Seawater attacks most metals, and it attacks them faster where dissimilar metals are in contact. Marine systems therefore favour plastics, fibre-reinforced composites, appropriate stainless grades and properly protected structures, with attention to galvanic pairing at every joint and fastener. Pumps, valves, sensors and even fasteners must be specified for seawater duty, and the cost difference over freshwater equivalents is a real line in the capital budget.",
        },
        { kind: "subheading", value: "Sanitary considerations for shellfish" },
        {
          kind: "text",
          value:
            "Because bivalves concentrate whatever they filter, the sanitary quality of the growing water directly determines whether the product is safe. Growing areas are classified, harvest is suspended when conditions require it, and depuration in clean water is used where the classification demands it. Biotoxins produced by harmful algal blooms accumulate in the same way, are not destroyed by cooking, and are managed by monitoring the water and closing harvest rather than by treating the animals.",
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
            "Starting a marine operation is dominated by site characterisation and by the question of where seed will come from, both of which should be settled before any structure is ordered.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Characterise the site across a full year, recording salinity, temperature, current, depth, wave exposure and turbidity through the seasons.",
            "Establish the sanitary and biotoxin history of the water where shellfish are intended, since classification governs whether the crop can be sold at all.",
            "Confirm the seed supply before committing to a species, and treat wild-collected seed as a supply risk rather than a plan.",
            "Obtain the necessary coastal authorisations, and understand what conditions attach to occupying the water and to discharging into it.",
            "Specify every wetted component for seawater duty, checking galvanic compatibility at each connection.",
            "Design moorings and structures for the extreme condition the site can produce, not for the conditions on the day of the survey.",
            "Plan the fouling management programme, including net changes or cleaning intervals, before the first structure is deployed.",
            "Acclimatise stock carefully for both salinity and temperature at every transfer, since marine species pay a physiological cost for abrupt change.",
            "Schedule handling operations around weather, and build a margin into the harvest plan for days that will be lost to sea conditions.",
            "Monitor the water body as well as the farm, including algal bloom warnings and any upstream or coastal discharge activity.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Weather is a production input",
          value:
            "Marine operations lose working days to sea state in a way inland farms do not. Feeding, inspection, grading and harvest all require access, and a plan built on uninterrupted access will be late. Experienced operators budget lost days explicitly and keep enough feed and capacity on the structure to ride out a period without access.",
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
            "Biologically, the marine sector's defining constraint remains the hatchery. Producing reliable numbers of uniform juveniles depends on broodstock conditioning, on the live feed chain, and on water and light management during the larval period. Farms that depend on wild-collected seed inherit variable quality, uncertain supply, unknown health status and a regulatory exposure that grows over time, and closing the life cycle in captivity is the step that changes a species from opportunistic to farmable.",
        },
        {
          kind: "text",
          value:
            "On the engineering side, the governing consideration is that seawater is simultaneously corrosive, fouling and abrasive. A structure exposed to it degrades continuously, so maintenance is not a response to failure but a standing obligation. Designing for inspection and replacement — accessible fasteners, components that can be changed in place, netting that can be exchanged without emptying the cage — is worth more over the life of a marine installation than an initial specification chosen for strength alone.",
        },
        {
          kind: "text",
          value:
            "Environmentally, marine farms operate in a public resource with other users. Fed finfish culture adds nutrients and organic matter; extractive culture removes them. Both occupy space that fishing, navigation, tourism and conservation also claim. Coastal zoning, siting relative to sensitive habitats, and monitoring of the seabed beneath structures are all part of the operating framework rather than optional additions to it.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Site conditions are inferred more than measured",
          value:
            "Current, oxygen and productivity at a marine site are usually estimated from short surveys, from nearby stations or from regional data. Those estimates are assumptions, and the difference between an assumed and an actual current regime shows up as unexpected growth variation between structures rather than as a recognisable measurement error.",
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
            "Compute oxygen budgets at the site's own salinity and temperature, since seawater holds appreciably less oxygen than fresh water.",
            "Treat fouling as a continuous scheduled task with a fixed budget, not as maintenance triggered by observation.",
            "Specify and inspect for corrosion and galvanic pairing routinely, giving particular attention to fasteners and connections.",
            "Acclimatise stock gradually for salinity and temperature at every movement between systems.",
            "Track the source of seed and its health status, and move towards hatchery-produced seed of known origin wherever it is available.",
            "Monitor the wider water body for algal blooms, sanitary events and coastal discharges, since all three can close a harvest.",
            "Plan around weather access, keeping margins in feed logistics and harvest scheduling for days that cannot be worked.",
            "Where extractive and fed culture are co-located, treat the arrangement as a designed system with a spacing rationale rather than an incidental adjacency.",
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
          caption: "Recurring marine aquaculture problems and their usual underlying causes",
          columns: ["Symptom", "Usual underlying cause"],
          rows: [
            ["Rapid corrosion of fittings and fasteners", "Dissimilar metals in contact, or components not specified for seawater service"],
            ["Growth falls off progressively across a cycle", "Biofouling restricting exchange through nets, or stock exceeding what the local current can supply"],
            ["Shellfish grow slowly despite healthy water", "Density or structure spacing too high for the food-bearing flow reaching the site"],
            ["Larval mortality at first feeding", "Live feed of unsuitable size, insufficient density, or inadequate fatty acid enrichment"],
            ["Stock stressed after heavy rainfall", "Salinity drop from freshwater inflow, particularly in estuarine and near-shore locations"],
            ["Harvest suspended without any farm fault", "Harmful algal bloom or sanitary event in the surrounding water body"],
            ["Intake flow declining gradually", "Fouling or sediment accumulation inside the intake line, or a blinding sub-sand intake"],
            ["Anaerobic sediment beneath cage positions", "Feed load exceeding the dispersal capacity of the depth and current at that position"],
            ["Inconsistent juvenile quality between batches", "Reliance on wild-collected seed of mixed origin, age and health status"],
          ],
          basis:
            "Patterns commonly reported in marine aquaculture extension literature and operating experience, given as diagnostic starting points rather than conclusions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Base species selection on the site's measured salinity and temperature range across the year, including its extremes.",
            "Secure a reliable source of hatchery-produced seed before designing production capacity around a species.",
            "Specify all wetted components for seawater duty and record the specification, so that replacements do not silently reintroduce a corrosion problem.",
            "Design structures and moorings for the extreme sea state, with redundancy such that one failure does not release the installation.",
            "Operate a scheduled fouling programme and treat net condition as both a fish welfare and a structural safety matter.",
            "Where shellfish are grown, verify the sanitary classification of the area and follow the monitoring and closure regime that applies to it.",
            "Settle and manage effluent from land-based marine systems before discharge, and monitor the seabed beneath cage positions.",
            "Fallow or rotate cage and longline positions between cycles so that the bed and the local pathogen burden can recover.",
            "Keep records per structure rather than per farm, since position within a site strongly influences performance.",
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
            "The most developed advanced concept in marine farming is integrated multi-trophic production: siting fed finfish, filter-feeding bivalves and nutrient-absorbing seaweed together so that waste from one becomes input to another. The ecological logic is straightforward, and the practical difficulty lies in spatial arrangement, because the dissolved and particulate streams disperse differently and the extractive species must be placed where each stream actually goes. The recovery achieved is a function of hydrodynamics as much as of biology.",
        },
        {
          kind: "text",
          value:
            "A second direction is the movement of production into more exposed offshore water and, in parallel, into fully land-based recirculating marine systems. These are opposite responses to the same constraint. Offshore siting accepts greater dispersal and better water quality in exchange for far higher structural and operational demands; land-based recirculation accepts high capital and energy cost in exchange for complete control, containment and freedom from siting conflict. Which is appropriate depends on species value, market proximity and the cost of energy at the location.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Broodstock control for emerging marine species",
          value:
            "Closing the life cycle reliably for additional marine species — controlling spawning without hormonal induction, improving larval survival and reducing dependence on live feed — is an active field. Progress is real but species-specific, and a technique developed for one species rarely transfers directly to another.",
        },
        {
          kind: "text",
          value:
            "Finally, marine systems sit downstream of environmental changes they cannot influence. Ocean warming shifts species suitability at a given latitude, alters disease and parasite distributions and changes the timing of natural productivity that extractive culture depends upon. Changing carbonate chemistry affects the ability of bivalves to build shell, most acutely at the larval stage. A marine operation being designed now is being designed for conditions that will drift over its working life, which argues for species with wide tolerance, for sites with margin rather than sites at the edge of suitability, and for structures that can be relocated.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Seawater holds less oxygen than fresh water at the same temperature, so marine oxygen budgets must be computed at the site's own salinity.",
    "The larval bottleneck and the live feed chain are why seed supply, rather than grow-out capacity, limits most marine finfish sectors.",
    "Corrosion, biofouling and abrasion are continuous rather than occasional, which makes maintainability a primary design criterion.",
    "Bivalves and seaweed require no feed and remove nutrients from the water, but their output is set entirely by what the site's flow delivers.",
    "Shellfish concentrate whatever they filter, so sanitary classification and biotoxin monitoring determine whether the crop can be sold.",
    "Marine farms occupy a shared public resource, so siting, zoning, seabed monitoring and fallowing are part of the operating framework.",
  ],
  related: ["cage", "brackishwater", "species", "sustainable"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Programme material on mariculture, coastal aquaculture development and integrated multi-trophic systems.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Central Marine Fisheries Research Institute",
      description: "Research and demonstration material on marine finfish, bivalve and seaweed culture in Indian waters.",
    },
    {
      organisation: "National Oceanic and Atmospheric Administration",
      description: "Guidance on marine aquaculture siting, environmental interactions and shellfish sanitation programmes.",
    },
  ],
};
