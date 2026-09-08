import type { KnowledgeArea } from "../types";

export const coldwater: KnowledgeArea = {
  number: "22",
  slug: "coldwater",
  title: "Coldwater Aquaculture",
  navSummary: "Trout and hill-stream species in fast, cold, oxygen-rich water, where flow is the whole design.",
  summary:
    "Coldwater aquaculture is practised in upland and hill regions where water is naturally cold, well oxygenated and moving. In India this means the Himalayan states and the Nilgiris, and the dominant species is rainbow trout alongside indigenous snow trout and mahseer. The engineering problem is almost the inverse of warmwater farming: oxygen is abundant and flow is plentiful, so production is limited by how much water can be legally and physically diverted, and by how cold that water stays through the summer.",
  difficulty: "intermediate",
  topics: ["water", "production", "engineering"],
  tags: ["trout culture", "raceway design", "hill streams", "flow-through systems", "cold water species"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-27",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Coldwater farms sit beside hill streams and use the stream's own flow to carry oxygen in and waste away. Trout and similar fish need cold, fast, clean water, so the size of the farm is set by how much water passes through it rather than by how big the tanks are.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Coldwater aquaculture occupies a narrow physical niche: places where water is cold enough year-round for salmonids and hill-stream species, and where enough of it moves past a site to be diverted through culture units and returned. In India this is the Himalayan belt — Jammu and Kashmir, Ladakh, Himachal Pradesh, Uttarakhand, Sikkim and the north-eastern hill states — together with pockets in the southern hills.",
        },
        {
          kind: "text",
          value:
            "Rainbow trout is the mainstay of commercial production, introduced long ago and now well established in the region's hatcheries and farms. Brown trout persists in some catchments. The indigenous species — snow trout of the genus Schizothorax, the mahseers, and various hill-stream carps — matter both as a fishery and increasingly as candidates for culture and for conservation stocking.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Cold water carries more oxygen and less tolerance",
          value:
            "Oxygen solubility rises as temperature falls, so cold water starts with an advantage. But coldwater species also have narrow thermal ranges and high oxygen requirements, so the advantage is spent quickly: a small rise in summer water temperature reduces both the oxygen available and the fish's ability to cope with its absence.",
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
            "Hill economies have few options for high-value agriculture. Land is fragmented and steep, growing seasons are short, and transport to market is expensive. Coldwater aquaculture converts an abundant local resource — cold running water — into a product that carries enough value per kilogram to absorb the transport cost, and it does so on land that is generally unsuitable for anything else.",
        },
        {
          kind: "text",
          value:
            "Technically it matters because coldwater systems are the clearest illustration of flow as the binding constraint. In a warmwater pond, treatment capacity limits production; in a flow-through raceway, the incoming water is the treatment, and production is limited directly by the volume passing through per unit time and by how much oxygen that volume can give up before the fish at the downstream end are compromised. This makes the design arithmetic unusually transparent, and it makes water rights a technical parameter rather than a legal footnote.",
        },
        {
          kind: "text",
          value:
            "It also matters as an environmental question. Hill streams are sensitive, often ecologically distinctive, and frequently the water supply for communities downstream. A farm that abstracts a large share of a stream's flow, warms it, and returns it with an added nutrient and solids load is making a change that the stream registers.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Flow-through culture" },
        {
          kind: "text",
          value:
            "In a flow-through system, water passes once through the culture unit and is returned to the stream. Nothing is recirculated and nothing is treated in the conventional sense. Oxygen arrives with the water and waste leaves with it, so the exchange rate — how many times the unit volume is replaced per hour — is simultaneously the oxygen supply, the ammonia removal and the solids transport mechanism.",
        },
        { kind: "subheading", value: "Thermal regime" },
        {
          kind: "text",
          value:
            "Coldwater species have a temperature range in which they feed and grow well, a wider range in which they survive without growing, and an upper limit beyond which they do not survive at all. The critical question at any site is not the winter minimum but the summer maximum and how long it persists, because that is the period that determines whether the site is viable and what standing biomass it can carry at its worst week.",
        },
        { kind: "subheading", value: "Sequential use and the oxygen gradient" },
        {
          kind: "text",
          value:
            "Water entering a raceway is at its most oxygenated at the head and its least at the tail. Fish at the downstream end therefore experience worse conditions than those at the upstream end, and if raceways are arranged in series so that the outflow of one becomes the inflow of the next, the gradient compounds. Re-aeration between units, usually by a simple drop or a weir, is how that gradient is reset.",
        },
        { kind: "subheading", value: "Silt and monsoon flow" },
        {
          kind: "text",
          value:
            "Hill streams carry a heavy sediment load during snowmelt and monsoon. Silt abrades gills, settles in raceways, and blocks intake screens at exactly the moment flow is most needed. A sedimentation basin ahead of the culture units, and an intake that can be closed and cleaned during a spate, are not refinements but basic requirements.",
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
            "The central relationship in flow-through design connects the available flow, the oxygen it carries and the biomass it can support.",
        },
        {
          kind: "formula",
          name: "Oxygen delivery by flow",
          expression: "Md = Q x (Cin - Cout)",
          terms: [
            { symbol: "Md", meaning: "Mass of oxygen deliverable to the unit per unit time", unit: "g/h" },
            { symbol: "Q", meaning: "Volumetric flow through the culture unit", unit: "L/h" },
            { symbol: "Cin", meaning: "Dissolved oxygen concentration at the inlet", unit: "mg/L" },
            { symbol: "Cout", meaning: "Dissolved oxygen concentration permitted at the outlet", unit: "mg/L" },
          ],
          example:
            "Consider a hypothetical raceway receiving 30,000 L/h of water at an inlet concentration of 10 mg/L, where the operator has decided the outlet must not fall below 7 mg/L. The deliverable oxygen is 30,000 x 3, which is 90,000 mg/h, or 90 g/h. Dividing that by the species' oxygen consumption rate at the prevailing temperature gives the biomass the raceway can carry, and no amount of additional raceway length changes it.",
          limitations:
            "The permitted outlet concentration is a management decision reflecting species tolerance and safety margin rather than a fixed quantity, and consumption rate varies strongly with temperature, fish size and time since feeding. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Exchange rate",
          expression: "R = Q / V",
          terms: [
            { symbol: "R", meaning: "Water exchanges per hour through the unit", unit: "1/h" },
            { symbol: "Q", meaning: "Volumetric flow through the unit", unit: "m3/h" },
            { symbol: "V", meaning: "Working water volume of the unit", unit: "m3" },
          ],
          example:
            "Consider a hypothetical raceway of 60 m3 receiving 90 m3/h. The exchange rate is 1.5 per hour, meaning the whole volume is replaced every forty minutes. Halving the flow halves the oxygen supply and doubles the residence time of waste, so the same raceway becomes a materially different environment.",
          limitations:
            "Exchange rate describes average replacement and says nothing about hydraulic short-circuiting, dead zones or self-cleaning velocity, all of which depend on unit geometry and inlet design. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "Gas supersaturation is the other quantity to watch, and it is peculiar to systems fed by falls, pressurised pipes or spring sources. Water that plunges into a plunge pool or leaks air into a suction line can carry total dissolved gas above equilibrium, and fish held in it develop gas bubble disease. The cure is degassing at the inlet — a packed column, a cascade or a well-designed splash structure — and it is far easier to build in than to retrofit.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Culture unit types used in coldwater aquaculture and their characteristics",
          columns: ["Unit type", "Hydraulic behaviour", "Best suited to", "Principal limitation"],
          rows: [
            [
              "Linear concrete raceway",
              "Plug flow along the length, oxygen declining from head to tail",
              "Sites with generous gravity-fed flow and slope",
              "Oxygen gradient limits length; solids settle at the tail",
            ],
            [
              "Circular tank",
              "Rotational flow with central solids collection",
              "Hatchery and nursery stages, and sites where solids capture matters",
              "Higher construction cost per unit volume than a raceway",
            ],
            [
              "Earthen coldwater pond",
              "Slow exchange, some natural productivity",
              "Indigenous species and lower-intensity production",
              "Poor temperature control; harder to observe and grade stock",
            ],
            [
              "Cage in a cold reservoir or lake",
              "Ambient exchange driven by wind and current",
              "Existing upland water bodies with sufficient depth",
              "No control of temperature, oxygen or the surrounding environment",
            ],
            [
              "Hatchery trough and incubation unit",
              "Low flow, high control, gravity-fed",
              "Egg incubation and first feeding",
              "Extremely sensitive to silt, temperature shift and flow interruption",
            ],
            [
              "Partial recirculation on a cold source",
              "Reuse of water with treatment between passes",
              "Sites where flow is limited but demand is high",
              "Adds energy cost and the failure modes of a treatment train",
            ],
          ],
          basis:
            "A qualitative comparison of the structural characteristics of each unit type, not a productivity ranking. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "flow",
          caption:
            "The water path through a typical hill-stream flow-through farm. Each stage exists because of a specific property of hill-stream water.",
          steps: [
            { label: "Stream intake", detail: "A diversion structure with a screen and a means of closing during spate conditions." },
            { label: "Sedimentation basin", detail: "Settles the silt load that snowmelt and monsoon flow carry, protecting gills and raceway bottoms." },
            { label: "Head channel", detail: "Distributes flow to units and provides a controlled drop that re-aerates and degasses the water." },
            { label: "Hatchery and nursery", detail: "The most sensitive stages, taking the cleanest water first, at low flow and high control." },
            { label: "Grow-out raceways", detail: "The main biomass, arranged so that oxygen is restored between series rather than allowed to decline continuously." },
            { label: "Solids collection", detail: "A quiescent zone at the tail of each unit from which settled solids are removed rather than flushed downstream." },
            { label: "Effluent treatment", detail: "Settlement and, where required, further polishing before water is returned to the stream." },
            { label: "Return to stream", detail: "Discharge at a point and condition that does not compromise the intake or the receiving water." },
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
            "Site assessment for a coldwater farm is a hydrological and thermal exercise, and it has to span a full year because the constraints appear in different seasons. Winter reveals the minimum flow and the risk of ice; summer reveals the maximum temperature; the monsoon reveals the silt load and the flood level.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Measure stream flow across a full year, and design against the lowest sustained flow rather than the average.",
            "Record water temperature continuously through at least one summer, since the warmest fortnight sets the site's real carrying capacity.",
            "Assess silt load during snowmelt and monsoon, and size the sedimentation basin against that period rather than against clear-water conditions.",
            "Establish the flood level and set all structures, particularly the intake and the hatchery, above it.",
            "Secure water abstraction rights and discharge consent formally, because a farm's entire capacity rests on them.",
            "Use the site's natural slope to move water by gravity throughout, since pumping cold water continuously is rarely economic at hill-farm scale.",
            "Locate the discharge point downstream of the intake by a margin sufficient that effluent cannot be drawn back in under any flow condition.",
          ],
        },
        {
          kind: "text",
          value:
            "Trout culture also depends on a reliable supply of eyed ova or fry, and in the Indian context that supply comes from a small number of hatcheries operating under the same thermal constraints as the farms. A production plan that assumes seed availability on a particular date without a confirmed arrangement is planning around the least controllable input in the system.",
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
            "Biologically, coldwater species combine high oxygen demand with narrow thermal tolerance and, in salmonids, a carnivorous nutritional requirement. Feed for trout is protein-rich and comparatively expensive, and it is the dominant operating cost. Because appetite and growth are both strongly temperature-dependent, the feeding plan for a coldwater farm is really a temperature plan: the same fish at the same size will take very different amounts of feed in April and in August.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The summer week decides the farm",
          value:
            "A coldwater site's capacity is set by the period when water is warmest and flow is lowest, because oxygen supply and fish tolerance both reach their minimum simultaneously. Standing biomass planned against spring conditions will exceed what the site can support at the moment it matters.",
        },
        {
          kind: "text",
          value:
            "Engineering considerations centre on hydraulics and on failure behaviour. A flow-through farm has almost no buffer: if the intake blocks, the oxygen supply stops, and stock at high density have a very short time before losses begin. Redundancy therefore takes the form of a duplicated intake, a bypass route, a level alarm at the head channel and the ability to reach the site quickly, rather than the standby blowers of a recirculating plant.",
        },
        {
          kind: "text",
          value:
            "Raceway geometry matters more than it appears to. Length-to-width ratio governs whether flow is genuinely plug-like or short-circuits along one side; velocity governs whether solids are transported to the collection zone or settle in place; and a quiescent zone at the tail is what allows solids to be captured rather than exported into the stream. Retrofitting geometry into a poured concrete structure is not practical, so it is decided once.",
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
            "Monitor inlet and outlet oxygen and temperature continuously where possible, because in a flow-through system these two pairs of numbers describe the entire operating state.",
            "Inspect and clear intake screens on a fixed schedule and after every rainfall event, since screen blockage is the commonest cause of catastrophic loss.",
            "Adjust feeding to measured water temperature rather than to a calendar-based schedule.",
            "Grade regularly, because salmonids show strong size hierarchies and an ungraded population wastes feed on suppressed fish.",
            "Remove settled solids from the tail of each unit routinely rather than flushing them, which both protects the stream and keeps oxygen demand inside the unit low.",
            "Reduce standing biomass ahead of the warm season rather than during it, by planning harvest timing around the thermal year.",
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
          caption: "Recurring coldwater farm problems and their usual underlying causes",
          columns: ["Symptom", "Usual underlying cause"],
          rows: [
            [
              "Fish crowding at the head of the raceway",
              "Oxygen declining along the unit, so the population has moved to the only acceptable water",
            ],
            [
              "Feeding stops abruptly in midsummer",
              "Water temperature approaching the upper limit of the species' feeding range",
            ],
            [
              "Gill damage and rising mortality after heavy rain",
              "Silt passing an overwhelmed or bypassed sedimentation basin",
            ],
            [
              "Bubbles visible in fins and eyes of young fish",
              "Total dissolved gas supersaturation from a fall, a spring source or air entrainment in the supply line",
            ],
            [
              "Very uneven size distribution at harvest",
              "Grading intervals too long, allowing dominant fish to monopolise feed",
            ],
            [
              "Sudden loss of stock overnight with no disease signs",
              "Interruption of flow, most often a blocked intake screen or a diversion structure damaged in a spate",
            ],
          ],
          basis:
            "Patterns commonly described in coldwater aquaculture extension material, offered as diagnostic starting points rather than conclusions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Design the farm against the summer temperature maximum and the winter flow minimum, and treat the rest of the year as surplus capacity.",
            "Build a sedimentation basin ahead of the culture units, sized for the monsoon load and arranged so that it can be cleaned without stopping the farm.",
            "Provide a redundant intake route and a low-level alarm on the head channel, because loss of flow is the fastest failure mode a coldwater farm has.",
            "Re-aerate between raceway series rather than extending a single series and accepting a declining gradient.",
            "Capture solids at the tail of each unit and treat effluent before return, both to protect the stream and to satisfy discharge conditions.",
            "Keep hatchery and nursery water upstream of and separate from grow-out water, so that the most vulnerable stages receive the cleanest supply.",
            "Record temperature, flow, feed and mortality daily against a common timeline, since almost every coldwater diagnosis is a comparison between those four series.",
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
            "The most consequential development in coldwater production has been partial reuse. Where abstraction is limited by rights or by low flow, treating and reusing a portion of the water raises the biomass a site can carry without increasing withdrawal. This converts a flow-through farm into something closer to a recirculating one, with the aeration, solids removal and nitrification steps that implies, and with the energy cost and technical staffing that follow. Whether that trade is worth making is a site-specific economic question, not a technological preference.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Culture of indigenous coldwater species",
          value:
            "Work on captive breeding and grow-out of snow trout, mahseer and other hill-stream species is ongoing, driven both by conservation stocking needs and by interest in species already adapted to local thermal regimes. Reliable hatchery protocols and formulated diets for several of these species are still being developed.",
        },
        {
          kind: "text",
          value:
            "A second advanced concern is the thermal trajectory of the resource itself. Glacier-fed and snowmelt-fed streams are changing in both volume and timing, and warming shifts the altitude at which coldwater culture is viable. A site that is comfortably within range today may sit near the margin over the design life of concrete raceways, which argues for building in thermal headroom and for locating new farms with that trajectory in mind rather than against present conditions alone.",
        },
        {
          kind: "text",
          value:
            "Finally, the interaction between farmed and wild populations deserves deliberate management. Escapes of introduced salmonids into catchments holding native species, and the movement of pathogens between farmed stock and wild fish, are real mechanisms with real consequences. Containment at the outlet, health screening of incoming ova, and honest siting decisions are the practical responses, and they are cheaper than the alternative.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "In flow-through culture the incoming water is the treatment system, so production is limited directly by flow and by the oxygen that flow can give up.",
    "A coldwater site's real capacity is set by the week when temperature is highest and flow is lowest, not by annual averages.",
    "Silt from snowmelt and monsoon is a primary design load, and a sedimentation basin ahead of the culture units is a requirement rather than a refinement.",
    "Oxygen declines along a raceway, so re-aeration between units matters more than extending unit length.",
    "Gas supersaturation from falls, springs and pressurised supply lines is a specifically coldwater hazard requiring degassing at the inlet.",
    "Flow-through systems have almost no buffer, so intake redundancy and flow alarms carry the redundancy burden that aeration carries elsewhere.",
  ],
  related: ["raceway", "water-quality", "species", "engineering"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Programme material on salmonid and coldwater aquaculture systems, species and production practice.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute publications and extension material on coldwater fisheries and hill-region aquaculture in India.",
    },
    {
      organisation: "State fisheries departments and agricultural universities in India",
      description: "Regional guidance on trout culture, seed supply and stream water use in Himalayan and hill states.",
    },
  ],
};
