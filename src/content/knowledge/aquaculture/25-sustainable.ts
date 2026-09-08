import type { KnowledgeArea } from "../types";

export const sustainable: KnowledgeArea = {
  number: "25",
  slug: "sustainable",
  title: "Sustainable Aquaculture",
  navSummary: "Producing at a rate the water, the feed supply and the surrounding system can carry indefinitely.",
  summary:
    "Sustainability in aquaculture is not a category of farm but a property of one: the capacity to keep producing at the same rate without degrading the resource base the production depends on. It has environmental, economic and social dimensions that constrain each other, and the practical work of it is mostly unglamorous — resource efficiency, waste accounting, siting decisions and honest measurement rather than declarations.",
  difficulty: "intermediate",
  topics: ["sustainability", "environment", "operations"],
  tags: ["resource efficiency", "effluent management", "feed sustainability", "carrying capacity", "life cycle thinking"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-08-02",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "A sustainable farm is one that can keep going. It does not exhaust its water, spoil the water body it discharges into, depend on a feed supply that is running down, or rely on prices and practices that only work for one good year. Most of the work is measuring what goes in and what comes out, and reducing the gap between them.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Aquaculture is often described as an efficient way to produce animal protein, and on several measures it is: aquatic animals are ectothermic and buoyant, so they spend less energy on maintaining body temperature and on supporting their own weight than terrestrial livestock do. That efficiency is real, but it is a starting condition rather than a guarantee. A farm converts water, land, feed, energy and seed into product and into waste, and whether the operation is sustainable depends on the rates at which it does both.",
        },
        {
          kind: "text",
          value:
            "Three constraints operate at once. Environmental sustainability asks whether the surrounding system can absorb the farm's discharge and supply its inputs indefinitely. Economic sustainability asks whether the enterprise remains viable across bad years as well as good ones, since an insolvent farm stops doing anything well. Social sustainability asks whether the farm's use of shared water, land and labour is acceptable to the people who share them. A farm failing any one of these does not continue, whatever its performance on the other two.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Sustainability is a rate question",
          value:
            "Almost every sustainability issue in aquaculture reduces to a comparison of two rates: the rate at which the farm draws on or loads a resource, against the rate at which that resource is replenished or the load assimilated. Framed this way the question becomes measurable rather than rhetorical.",
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
            "The immediate reason is self-interest. A farm that degrades its own water source, salinises its own land or accumulates sediment it never removes is reducing its own future production, and usually does so gradually enough that the decline is attributed to something else. Coastal farm clusters that discharge into the water they collectively draw from are the clearest instance: each farm's effluent is another farm's intake, and the aggregate effect exceeds what any single operator sees.",
        },
        {
          kind: "text",
          value:
            "The second reason is regulatory and commercial. Coastal aquaculture in India operates under an authority framework governing siting, registration and effluent, and export markets impose requirements on antimicrobial residues, traceability and, increasingly, environmental documentation. Practices that were once optional become conditions of market access, and a farm that has been recording its inputs and discharges all along meets them far more easily than one that must reconstruct a history.",
        },
        {
          kind: "text",
          value:
            "The third reason is that the sector's growth depends on it. Aquaculture is expected to supply a rising share of aquatic food as capture fisheries plateau, and that expansion has to occur on limited coastline, limited fresh water and a feed ingredient supply that is itself constrained. How efficiently the sector uses those inputs determines how much it can grow.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Assimilative capacity" },
        {
          kind: "text",
          value:
            "The receiving environment can absorb a certain nutrient and organic load without a change in its state. Below that rate, discharge disperses and is processed; above it, nutrients accumulate, algal production rises, and oxygen in the receiving water falls as that production decomposes. Assimilative capacity is a property of the water body — its volume, flushing rate and existing load — not of the farm, which is why the same discharge is acceptable at one site and not at another.",
        },
        { kind: "subheading", value: "Nutrient balance" },
        {
          kind: "text",
          value:
            "Nitrogen and phosphorus enter the farm almost entirely in feed and leave in three streams: harvested biomass, dissolved and suspended discharge, and sediment. The proportions are determined by feed composition, feed conversion efficiency and how much of the waste is captured before discharge. Improving feed conversion is therefore simultaneously an economic measure and an environmental one, which is unusual and worth exploiting.",
        },
        { kind: "subheading", value: "Feed ingredient dependence" },
        {
          kind: "text",
          value:
            "Aquafeeds have historically drawn on fishmeal and fish oil derived from wild-caught small pelagic fish, which links farmed production to a capture fishery. Substitution with plant proteins, processing by-products, insect meal and microbial biomass has advanced substantially, particularly for omnivorous species, though carnivorous species remain more dependent on marine-derived long-chain fatty acids. The ratio of wild fish input to farmed fish output is the metric usually used to describe this dependence.",
        },
        { kind: "subheading", value: "Habitat and land use" },
        {
          kind: "text",
          value:
            "Where a farm is built matters as much as how it is run. Conversion of mangrove and coastal wetland removes habitat that provides nursery function, sediment stabilisation and storm protection, and the loss is difficult to reverse. Siting on already-degraded or agriculturally marginal land avoids that trade entirely, which is why zoning and site selection are the highest-leverage sustainability decisions available and are made only once.",
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
            "Sustainability performance is measured with input-output arithmetic that a farm keeping ordinary records can already perform.",
        },
        {
          kind: "formula",
          name: "Nitrogen retention efficiency",
          expression: "Nr = (Gh x nf) / (Fd x nd)",
          terms: [
            { symbol: "Nr", meaning: "Fraction of nitrogen input retained in harvested biomass", unit: "fraction" },
            { symbol: "Gh", meaning: "Biomass gain harvested over the cycle", unit: "kg" },
            { symbol: "nf", meaning: "Nitrogen content of the harvested biomass", unit: "fraction by mass" },
            { symbol: "Fd", meaning: "Total feed delivered over the cycle", unit: "kg" },
            { symbol: "nd", meaning: "Nitrogen content of the feed", unit: "fraction by mass" },
          ],
          example:
            "Consider a hypothetical cycle in which 10,000 kg of gain was produced from 15,000 kg of feed, with the fish containing 0.028 nitrogen by mass and the feed 0.056. Retention is (10,000 x 0.028) / (15,000 x 0.056), which is about 0.33. The remaining two thirds of the nitrogen entered the water, the sediment or the atmosphere, and that is the quantity the farm's waste management has to account for.",
          limitations:
            "Nitrogen contents are taken from composition data rather than measured on the farm, and the expression does not distinguish between nitrogen discharged, buried in sediment or lost to denitrification. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Water use per unit of production",
          expression: "Wp = Wt / P",
          terms: [
            { symbol: "Wp", meaning: "Water consumed per unit of production", unit: "m3/kg" },
            { symbol: "Wt", meaning: "Total water withdrawn and not returned over the cycle, including evaporation and seepage", unit: "m3" },
            { symbol: "P", meaning: "Production over the same cycle", unit: "kg" },
          ],
          example:
            "Consider a hypothetical farm that withdrew and consumed 18,000 m3 of water over a cycle producing 6,000 kg. Water use is 3 m3/kg. Recording this figure cycle after cycle shows whether reduced exchange, deeper ponds or reuse actually changed anything, which a single measurement never does.",
          limitations:
            "Water that is returned to the source in usable condition is not consumed in the same sense as water lost to evaporation and seepage, and treating all withdrawal alike overstates consumption in flow-through systems. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "Energy per unit of production is the third indicator, and it is where recirculating and heavily aerated systems perform worst while performing best on water and effluent. This is the characteristic pattern of sustainability assessment: improving one indicator usually worsens another, and the honest conclusion is a trade-off statement rather than a verdict.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Resource pressures in aquaculture and the mechanisms that address them",
          columns: ["Pressure", "Mechanism of impact", "Practical responses"],
          rows: [
            [
              "Nutrient discharge",
              "Nitrogen and phosphorus from uneaten feed and excretion raise productivity in receiving water",
              "Improved feed conversion, settlement ponds, reduced exchange, nutrient recovery into a second crop",
            ],
            [
              "Fresh water consumption",
              "Withdrawal and evaporative loss compete with agricultural and domestic use",
              "Reduced exchange, deeper ponds, water reuse, siting where supply is genuinely surplus",
            ],
            [
              "Feed ingredient dependence",
              "Marine-derived ingredients link farmed output to a capture fishery",
              "Alternative protein and oil sources, species choice, precise feeding to cut waste",
            ],
            [
              "Habitat conversion",
              "Construction on mangrove and wetland removes ecosystem function permanently",
              "Siting on degraded or marginal land, zoning compliance, restoration of unused areas",
            ],
            [
              "Energy use",
              "Aeration, pumping and temperature control consume electricity continuously",
              "Efficient aerator and pump selection, gravity flow where topography allows, renewable generation",
            ],
            [
              "Disease and antimicrobial use",
              "Outbreaks cause losses and drive treatment that raises resistance concerns",
              "Biosecurity, seed quality, lower stress husbandry, health planning rather than reactive treatment",
            ],
            [
              "Escapes and genetic interaction",
              "Escaped stock may compete with or interbreed with wild populations",
              "Physical containment, outlet screening, careful choice of species relative to the catchment",
            ],
          ],
          basis:
            "A qualitative mapping of pressures to mechanisms and responses described in aquaculture environmental management literature, not a ranking of severity. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "flow",
          caption:
            "Following nitrogen through a farm. The proportions differ by system, but the structure of the pathway does not.",
          steps: [
            { label: "Feed nitrogen input", detail: "Essentially all nitrogen entering the farm arrives in feed, so feed composition and quantity set the total." },
            { label: "Consumed and uneaten fractions", detail: "Feed not eaten becomes waste directly, which is why feeding accuracy is the first and cheapest environmental control." },
            { label: "Retention in biomass", detail: "The portion incorporated into growth, and the only fraction that leaves the farm as product." },
            { label: "Excretion and faeces", detail: "Dissolved nitrogen from metabolism and particulate nitrogen in faeces, entering the water continuously." },
            { label: "In-system transformation", detail: "Nitrification, denitrification and uptake by algae or bacteria, each altering the form and fate of the nitrogen present." },
            { label: "Sediment accumulation", detail: "Particulate nitrogen settling and stored in the pond bottom, released when the sediment is disturbed or removed." },
            { label: "Capture before discharge", detail: "Settlement, filtration or biological polishing, which determines how much of the remainder actually leaves the boundary." },
            { label: "Discharge to receiving water", detail: "What finally reaches the environment, to be compared against that water body's assimilative capacity rather than against a farm-level target alone." },
          ],
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
            "Improving sustainability on an operating farm is a sequence of measurement and correction rather than a redesign. The order below places the cheapest and most immediately profitable steps first, because those are the ones that actually get done.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Measure feed conversion honestly per pond and per cycle, and treat a poor figure as a waste problem before treating it as a feed quality problem.",
            "Improve feeding accuracy — frequency, distribution and response to observed intake — since feed that is never eaten is pure loss in both directions.",
            "Record water withdrawn, exchanged and discharged, so that reduction can be demonstrated rather than assumed.",
            "Capture solids where they concentrate, at the tail of a raceway or the centre of an aerated pond, rather than allowing them to disperse and then attempting to treat the whole flow.",
            "Provide settlement capacity before discharge, and give it enough residence time to do something rather than enough to satisfy a drawing.",
            "Remove and use accumulated sediment between crops instead of leaving it to consume oxygen and release ammonia through the next cycle.",
            "Reduce exchange progressively while watching the water response, rather than in a single step that leaves no margin for error.",
            "Review energy use per unit of production annually, and address the largest continuous consumers first.",
          ],
        },
        {
          kind: "text",
          value:
            "Sediment removed from ponds is a nutrient resource rather than a disposal problem in most inland settings, and applying it to agricultural land returns nitrogen and phosphorus to productive use. Whether it is suitable depends on its salinity and on any accumulated residues, which is a reason to know what has been applied to the pond over its history.",
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
            "The biological consideration is that unstressed animals are efficient animals. A fish held within its comfortable temperature and oxygen range, at a density it tolerates, on a diet matched to its requirement, converts feed well, resists disease better and requires less intervention. Almost every husbandry improvement made for the animal's sake also reduces waste per unit of production, which means the biological and environmental objectives point the same way far more often than they conflict.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Waste capture is cheapest where waste is concentrated",
          value:
            "It is reasonable to design on the basis that removing solids where they are dense and localised costs far less than treating the same mass once diluted across the whole discharge. This is why unit geometry, aerator placement and drain design are environmental decisions, not only hydraulic ones.",
        },
        {
          kind: "text",
          value:
            "The engineering consideration is that sustainability measures are additions to a system that must continue to work. A settlement pond occupies land that could hold production; a treatment train consumes energy and requires maintenance; reduced exchange narrows the operating margin and demands closer monitoring. These are real costs, and a design that ignores them produces infrastructure that is bypassed within a year of commissioning. The measures that persist are the ones sized realistically and integrated into normal operation rather than bolted on.",
        },
        {
          kind: "text",
          value:
            "Climate exposure sits underneath all of it. Temperature ranges, rainfall patterns, cyclone frequency, sea level and river flows are all moving, and each affects a design assumption. A farm intended to operate for two decades should be assessed against the range those variables may occupy over two decades rather than against a recent record, which usually means margin in embankment height, drainage capacity, thermal headroom and water security.",
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
            "Measure inputs and outputs — feed, water, energy, seed, product and discharge — as a matter of routine, because nothing can be improved that is not recorded.",
            "Treat feed conversion as the central sustainability indicator, since it links profitability and environmental load in one number.",
            "Match production intensity to the site's water availability and the receiving water's assimilative capacity, rather than to the maximum the equipment could support.",
            "Manage health preventively through biosecurity, seed quality and husbandry, so that antimicrobial use is a rare exception rather than a routine input.",
            "Coordinate with neighbouring farms where water is shared, because cumulative load is a cluster property that no single farm controls.",
            "Retain, and where possible restore, natural buffer vegetation between the farm and the receiving water body.",
            "Review each cycle's resource indicators against the previous one and change practice on the evidence rather than on intention.",
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
          caption: "Common sustainability failures and their usual underlying causes",
          columns: ["Symptom", "Usual underlying cause"],
          rows: [
            [
              "Intake water quality declining year on year across a cluster",
              "Cumulative discharge from farms sharing the same water body exceeding its assimilative capacity",
            ],
            [
              "Feed cost rising without a matching rise in production",
              "Deteriorating feed conversion from overfeeding, poor distribution or an inflated biomass estimate",
            ],
            [
              "Settlement pond having no measurable effect on discharge quality",
              "Residence time too short, or the pond never desludged so that it has ceased to settle anything",
            ],
            [
              "Pond productivity falling over successive crops on the same site",
              "Sediment accumulation, salinisation of the surrounding soil, or loss of the water source's original quality",
            ],
            [
              "Repeated disease events prompting routine antimicrobial use",
              "Biosecurity and stocking practice treated as a cost rather than as the control that prevents the events",
            ],
            [
              "Environmental infrastructure bypassed during normal operation",
              "Treatment sized or located without regard to how the farm actually runs, making the bypass the path of least effort",
            ],
          ],
          basis:
            "Patterns commonly described in aquaculture environmental management literature, offered as diagnostic starting points rather than conclusions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Site new farms on land that is already degraded or agriculturally marginal, and comply fully with the coastal and inland zoning frameworks that apply.",
            "Design the water path with settlement and, where justified, biological polishing included from the outset, sized to be used rather than to be shown.",
            "Keep a resource ledger per cycle covering feed, water, energy, seed, chemicals and production, and compare cycles against each other.",
            "Adopt feeding practices that minimise uneaten feed, since this is the single measure that improves cost and discharge simultaneously.",
            "Prefer prevention to treatment in health management, and record any therapeutic use fully, including the reason and the withdrawal observed.",
            "Reuse pond sediment and nutrient-rich water productively where its composition permits, rather than treating both purely as disposal.",
            "Engage with neighbouring farms and local water users on shared intake, discharge and fallow scheduling.",
            "State environmental performance only where it has been measured on the farm concerned, and describe the method alongside the figure.",
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
            "Life cycle thinking extends the accounting beyond the farm gate. A substantial share of the environmental burden associated with farmed aquatic products originates in feed ingredient production and transport rather than at the farm itself, and a further share arises downstream in processing, cold chain and distribution. A farm optimising only what happens between its own inlet and outlet may be improving a minority of the total. This does not diminish on-farm efficiency, since feed use is exactly where the farm influences the upstream burden, but it does mean that claims about a product's footprint require a defined boundary before they mean anything.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Integrated multi-trophic aquaculture",
          value:
            "Combining fed species with extractive species — bivalves, seaweed, deposit feeders — so that waste from one becomes input to another is conceptually well founded and has been demonstrated at various scales. The operational and commercial questions, particularly the synchronisation of two or three crops with different cycles and markets, are still being worked out for most settings.",
        },
        {
          kind: "text",
          value:
            "Certification and standard schemes exist to make sustainability performance legible to buyers, and where they are credible they operate by requiring documented practice and independent verification rather than by asserting an outcome. Their practical effect on a farm is mostly to formalise record keeping that a well-run operation should be doing regardless. Whether a particular scheme is worth its cost is a market question specific to the farm and its buyers, and no scheme's requirements substitute for understanding what the farm's own measurements show.",
        },
        {
          kind: "text",
          value:
            "The deepest version of the question is spatial planning. Individual farm optimisation cannot resolve cumulative impact, because the relevant capacity belongs to the water body and is shared. Approaches that allocate production across a bay, creek or catchment against its estimated assimilative capacity — setting aggregate limits, coordinating fallow periods and zoning by suitability — address a class of problem that farm-level measures cannot. They require institutional capacity and cooperation that is harder to build than any piece of treatment equipment, which is precisely why it is where the largest remaining gains sit.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Sustainability is a comparison of rates: resource use and waste loading against replenishment and assimilative capacity.",
    "Feed conversion is the central indicator because it links profitability and environmental load in a single measured number.",
    "Most nitrogen entering a farm arrives in feed, so feeding accuracy is the first and cheapest environmental control available.",
    "Waste is far cheaper to capture where it is concentrated, which makes unit geometry and drain design environmental decisions.",
    "Sustainability indicators trade against each other, so honest assessment produces a stated trade-off rather than a verdict.",
    "Cumulative impact belongs to the shared water body, so the largest remaining gains lie in cluster and catchment-level coordination.",
  ],
  related: ["engineering", "economics", "water-quality", "feed-nutrition"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Programme material on responsible aquaculture development, environmental management and sector sustainability.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute publications and extension material on environmental management of aquaculture systems in India.",
    },
    {
      organisation: "State fisheries departments and agricultural universities in India",
      description: "Regional guidance on siting, effluent management and regulatory compliance for aquaculture enterprises.",
    },
  ],
};
