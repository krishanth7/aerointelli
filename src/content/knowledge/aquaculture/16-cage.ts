import type { KnowledgeArea } from "../types";

export const cage: KnowledgeArea = {
  number: "16",
  slug: "cage",
  title: "Cage Aquaculture",
  navSummary: "Farming inside an existing water body, where the environment is borrowed rather than built.",
  summary:
    "Cage culture suspends a net enclosure in a reservoir, lake, river or coastal water and lets the surrounding water body supply oxygen and carry away waste. That removes almost all water treatment cost and replaces it with exposure: the farm has no control over the conditions it depends on, and it must be engineered to survive weather, currents and events that originate outside its boundary.",
  difficulty: "intermediate",
  topics: ["production", "engineering", "environment", "systems"],
  tags: ["net pens", "mooring", "reservoir culture", "carrying capacity", "biofouling", "site selection"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-15",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "A cage is a net bag held open by a frame and floated or moored in a lake, reservoir or sheltered sea. Water flows through the net continuously, bringing oxygen and carrying waste away, so there is no filter and no pump. In exchange, the farm depends completely on the water body it sits in, and it has to be built strongly enough to survive whatever the weather does to it.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "A cage is a net enclosure held in shape by a rigid or flexible frame and positioned within a larger water body. The animals are confined; the water is not. Exchange happens continuously and passively, driven by current, wind and tide, and the surrounding water supplies oxygen and dilutes dissolved waste without any equipment on the farm's side of the net.",
        },
        {
          kind: "text",
          value:
            "This makes cage culture the least equipment-intensive form of intensive aquaculture. There is no biofilter, usually no pumping, and often no aeration. The engineering effort moves instead to structure, mooring and netting — to keeping the enclosure intact and in position under load — and to the selection of a site whose water will remain suitable through the year.",
        },
        {
          kind: "text",
          value:
            "In India, cage culture is practised in reservoirs and in sheltered coastal and estuarine waters, and it is often the only way to make productive use of a large water body whose bed and banks cannot be modified. The technology is well established internationally, but its viability at any given location is decided almost entirely by site characteristics rather than by the equipment chosen.",
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
            "India holds a very large area of reservoir and inland open water whose fisheries yield far less than the water could support. Cage culture is one of the few approaches that can add production to such a water body without draining it, excavating it or acquiring land around it, and without the capital required by land-based intensive systems.",
        },
        {
          kind: "text",
          value:
            "The corresponding importance is on the risk side. A cage farm concentrates a large biomass in a small volume within a shared water body, which means its waste is another user's water, its escapes are another user's fishery, and its stock is exposed to whatever passes through the site. Cage culture done without regard to the surrounding system fails both environmentally and commercially, usually in that order.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The site is the system",
          value:
            "In a land-based farm, poor water can be corrected by equipment. In a cage farm there is no equipment between the water body and the fish. Depth, current, exchange, shelter and seasonal water quality are therefore design parameters, and no operational skill compensates for choosing them badly.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Passive exchange" },
        {
          kind: "text",
          value:
            "Water enters and leaves the cage through the mesh, driven by ambient current. The exchange rate determines how quickly oxygen is replenished and dissolved waste removed, and it is a property of the site and of the net's condition rather than of the design intent. A clean net in moving water exchanges freely; the same net fouled with algae and mussels can restrict flow severely while looking, from above, exactly the same.",
        },
        { kind: "subheading", value: "Two carrying capacities" },
        {
          kind: "text",
          value:
            "A cage farm is limited twice. The cage carrying capacity is the biomass that a single net can hold given the flow through it — an oxygen and ammonia question at the scale of metres. The water body carrying capacity is the total production the whole system can absorb before nutrient enrichment, sediment accumulation beneath the cages or oxygen depletion degrade the environment. Individual farms usually respect the first and collectively breach the second.",
        },
        { kind: "subheading", value: "The benthic footprint" },
        {
          kind: "text",
          value:
            "Uneaten feed and faeces settle beneath the cage. Where current is strong and depth generous, that material disperses across a wide area and is assimilated. Where current is weak or the cage sits close to the bed, it accumulates into an organically enriched patch that goes anaerobic, releases reduced compounds and changes the benthic community. Depth beneath the net and current speed are therefore not conveniences but environmental controls.",
        },
        { kind: "subheading", value: "Containment" },
        {
          kind: "text",
          value:
            "The net is the only thing separating the stock from the wider water body. A tear releases the crop and, where the species is not native to the water body, releases a genetic and ecological problem as well. Net integrity is consequently both an asset protection matter and a regulatory one, and it is checked rather than assumed.",
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
            "The two quantities that govern cage engineering are the volumetric exchange the site delivers and the hydrodynamic force the structure has to resist.",
        },
        {
          kind: "formula",
          name: "Water exchange through a cage",
          expression: "Q = U x Ac x Ke",
          terms: [
            { symbol: "Q", meaning: "Volumetric flow through the cage", unit: "m3/s" },
            { symbol: "U", meaning: "Ambient current speed approaching the cage", unit: "m/s" },
            { symbol: "Ac", meaning: "Cross-sectional area of the cage presented to the flow", unit: "m2" },
            { symbol: "Ke", meaning: "Flow reduction coefficient accounting for mesh resistance, fouling and the wake of upstream cages", unit: "dimensionless" },
          ],
          example:
            "Consider a hypothetical cage 6 m square in cross-section, in a current of 0.1 m/s, with an assumed flow reduction coefficient of 0.6. Flow through the cage is 36 x 0.1 x 0.6, or about 2.2 m3/s. The oxygen that flow can deliver, and the dilution it provides for excreted ammonia, together bound the biomass the cage can carry.",
          limitations:
            "The reduction coefficient is an estimate that worsens markedly with biofouling and with position in a cage array, and current speed at a site varies with tide, season and depth. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Hydrodynamic drag on a net structure",
          expression: "Fd = 0.5 x rho x Cd x As x U^2",
          terms: [
            { symbol: "Fd", meaning: "Drag force acting on the net and frame", unit: "N" },
            { symbol: "rho", meaning: "Water density", unit: "kg/m3" },
            { symbol: "Cd", meaning: "Drag coefficient of the netting, dependent on twine thickness, mesh solidity and fouling", unit: "dimensionless" },
            { symbol: "As", meaning: "Projected solid area of the net presented to the flow", unit: "m2" },
            { symbol: "U", meaning: "Current speed", unit: "m/s" },
          ],
          example:
            "Consider a hypothetical net presenting 20 m2 of solid area in fresh water at a current of 0.5 m/s, with an assumed drag coefficient of 1.2. Drag is 0.5 x 1000 x 1.2 x 20 x 0.25, or about 3,000 N. Because the term is squared, a doubling of current to 1.0 m/s raises that force to roughly 12,000 N on the same net.",
          limitations:
            "Solid area increases substantially as fouling builds, and the squared dependence on current means a modest underestimate of peak flow becomes a large underestimate of load. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "The second relationship is the reason net cleaning is a structural safety task and not only a flow management one. A fouled net both restricts exchange to the fish and increases the load on the mooring, so the same neglect degrades the biology and the engineering at once.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        { kind: "subheading", value: "Site selection" },
        {
          kind: "table",
          caption: "Site parameters and why each governs the design",
          columns: ["Parameter", "What it controls", "Consequence of getting it wrong"],
          rows: [
            ["Depth beneath the net", "Dispersal of settling waste and clearance in low water", "Organic enrichment of the bed; nets grounding at drawdown"],
            ["Current speed", "Oxygen delivery, waste removal and structural load", "Too little starves the cage; too much overloads the mooring"],
            ["Shelter and fetch", "Wave height the structure must survive", "Structural failure and mass escape during storms"],
            ["Seasonal water quality", "Whether conditions stay within tolerance all year", "A cycle that cannot be completed at the site"],
            ["Seabed or bed substrate", "Holding capacity for anchors and moorings", "Anchor drag and cage displacement"],
            ["Access and services", "Feeding, inspection and emergency response", "Delayed intervention when it matters most"],
            ["Other users and inflows", "Exposure to pollution, navigation and conflict", "Contamination events and disputes over access"],
          ],
          basis:
            "A qualitative account of the parameters that govern cage siting, presented as design considerations rather than as thresholds. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        { kind: "subheading", value: "Cage types" },
        {
          kind: "text",
          value:
            "Floating cages with a flexible collar dominate open water because they follow the surface and dissipate wave energy rather than resisting it. Rigid framed cages are simpler to build and service and suit sheltered inland water. Submersible cages can be lowered below the surface layer during storms or during a surface algal event, at the cost of complexity and of losing direct observation of the stock. Fixed cages driven into the bed suit shallow, calm, protected water only.",
        },
        { kind: "subheading", value: "Netting and mooring" },
        {
          kind: "text",
          value:
            "Net material, twine diameter and mesh size are chosen against three competing requirements: exchange, containment of the smallest animal held, and resistance to predators and abrasion. Moorings are designed for the extreme condition rather than the usual one, with a grid or single-point arrangement chosen for the site's directional variability, and with redundancy such that failure of one component does not release the structure.",
        },
        { kind: "subheading", value: "Feeding and observation" },
        {
          kind: "text",
          value:
            "Feed that passes through a cage uneaten is lost entirely and lands on the bed, so feeding control is both an economic and an environmental discipline. Underwater cameras, sensors and careful surface observation are used to stop feeding at the point where response falls off, and feeding is the principal daily contact the operator has with stock that cannot otherwise be seen.",
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
            "Cage operation is a routine of inspection, feeding and net management, punctuated by the handling events that carry most of the risk.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Survey the site through a full year where possible, recording current, depth, drawdown and water quality across seasons before committing.",
            "Design moorings for the extreme event the site can produce, not for the conditions observed on the day of the survey.",
            "Install and load-test the mooring system before nets are hung and stock is introduced.",
            "Stock uniform, healthy seed of known origin, and record the number placed in each individual cage.",
            "Feed to observed response and stop at the first clear reduction, because uneaten feed leaves the system entirely.",
            "Inspect nets on a fixed schedule for fouling, abrasion at attachment points, and damage from predators.",
            "Change or clean nets before fouling restricts exchange, treating the schedule as preventive rather than responsive.",
            "Remove mortalities promptly, and record numbers so that surviving biomass estimates remain usable.",
            "Grade and split populations as they grow, planning each handling event for calm conditions.",
            "Harvest by crowding within the cage, and keep crowding duration as short as the operation allows.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Fallowing between cycles",
          value:
            "Leaving a cage position empty for a period, or rotating cages across positions, allows the bed beneath to recover and interrupts the persistence of parasites and pathogens at the site. It is a widely used practice in established cage regions and depends on having more positions than are stocked at once.",
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
            "The biological reality of a cage is that the fish share water with everything else in the water body. Wild fish aggregate around cages, drawn by waste feed, and they carry parasites and pathogens both ways across the net. Treatment options are limited because a bath treatment in an open cage disperses into shared water, so cage health management leans heavily on stocking quality, density restraint, fallowing and vaccination where it is available.",
        },
        {
          kind: "text",
          value:
            "Engineering-wise, the governing design case is nearly always the storm rather than the operating day. Structures fail when peak current, peak wave and a fouled net coincide, and because drag scales with the square of velocity, the margin that looks generous in normal conditions can vanish in an event that recurs every few years.",
        },
        {
          kind: "text",
          value:
            "There is also an environmental accounting that a land-based farm does differently. In a tank system, waste is collected and disposed of deliberately. In a cage, waste is dispersed into a shared resource, and whether that is assimilation or pollution depends on the water body's capacity relative to the total production placed in it — including production by neighbouring farms that the operator does not control.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Flow through the cage is not the ambient current",
          value:
            "Design calculations often use measured ambient current directly. In practice mesh resistance, biofouling and the wake of upstream cages all reduce the flow that actually reaches the fish, and the reduction is an estimate rather than a measurement. Assuming ambient conditions inside the net will overstate the biomass a cage can carry.",
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
            "Treat net inspection and mooring inspection as scheduled work with a written record, not as something done when there is time.",
            "Manage fouling continuously. It reduces the oxygen the fish receive and increases the load the structure carries, simultaneously.",
            "Keep stocking records per cage rather than per farm, since a cage is the unit that fails and the unit that is harvested.",
            "Stop feeding at the first fall in response. Feed that passes the net is money on the bed and an environmental liability.",
            "Plan every handling operation around weather, and postpone rather than proceed when conditions are marginal.",
            "Monitor the water body, not just the cage, including inflows, upstream activity and seasonal stratification.",
            "Assume the array influences itself, so that downstream cages in a group receive water already used by those upstream.",
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
          caption: "Recurring cage farming problems and their usual underlying causes",
          columns: ["Symptom", "Usual underlying cause"],
          rows: [
            ["Growth slows in cages at one end of an array", "Those cages receive water already depleted by the cages upstream of them"],
            ["Fish crowd at the cage surface without obvious cause", "Restricted exchange from a fouled net, or low oxygen in the ambient water body"],
            ["Stock numbers at harvest far below stocking records", "Net damage and escape, predator loss, or unrecorded mortality between inspections"],
            ["Structure displaced or lost after a storm", "Mooring designed to typical rather than extreme conditions, or degraded by fouling load"],
            ["Persistent parasite burden across successive cycles", "No fallowing, so the site maintains a reservoir of the parasite between crops"],
            ["Anaerobic sediment and gassing beneath the cages", "Insufficient depth or current for the feed load placed at that position"],
            ["Sudden mortality unrelated to farm activity", "An external event in the shared water body, such as an algal bloom, turnover or upstream discharge"],
            ["Feed conversion much worse than the same species in tanks", "Feed passing uneaten through the net, which no growth record captures directly"],
          ],
          basis:
            "Patterns commonly reported in cage culture extension literature and operating experience, given as diagnostic starting points rather than conclusions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Base the site decision on a full seasonal record of current, depth, drawdown and water quality rather than on a single visit.",
            "Design and specify moorings and structure for the extreme condition, with redundancy so that one failed component does not release the cage.",
            "Leave working space between cages and orient the array to the prevailing current so that units do not consume one another's water.",
            "Operate a planned net-changing programme rather than cleaning in response to visible fouling.",
            "Maintain a per-cage record of stocking number, feed, mortality and inspections, so that biomass estimates stay defensible.",
            "Fallow or rotate positions between cycles where the site layout permits it.",
            "Secure the necessary approvals for use of the water body and observe the conditions attached, since cage farming occupies a shared resource.",
            "Prepare an escape and emergency response plan before it is needed, including who acts and what equipment is on hand.",
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
            "The advanced question in cage culture is capacity at the scale of the water body rather than the cage. A reservoir or a bay can assimilate a certain nutrient and organic load, distributed according to its circulation, before its own water quality begins to limit every farm in it. That capacity is a shared resource, and once several operators are present the individually rational decision to add one more cage is collectively self-defeating. Zoning, coordinated fallowing and agreed production ceilings are the mechanisms that address this, and they are institutional rather than technical.",
        },
        {
          kind: "text",
          value:
            "A second area is movement offshore and into more exposed water. Exposed sites disperse waste better, are less prone to warm surface layers and algal events, and are usually free of the user conflicts of sheltered water. What they demand is structure that survives far higher energy, submersion capability, remote monitoring and vessels able to work in a sea state that would keep a small boat in port. The cost profile changes from netting and labour towards steel, instrumentation and marine operations.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Integrated multi-trophic arrangements",
          value:
            "Placing filter feeders and seaweed near finfish cages so that dissolved and particulate waste is recovered as a second crop is an active line of work. The ecological logic is sound and pilot systems exist, but the spatial arrangement, the recovery achieved and the commercial case remain under investigation rather than settled.",
        },
        {
          kind: "text",
          value:
            "Finally, instrumentation is changing what cage operators can know. Oxygen and temperature profiling at cage depth, current measurement in place and camera-based feeding control together replace inference from the surface with measurement in the water the fish occupy. The value is not the data itself but the change in decision quality: a farm that knows the oxygen at the bottom of its nets can stock and feed to what the site actually delivers rather than to what it is assumed to deliver.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Cage culture borrows the surrounding water body for oxygen supply and waste removal, which eliminates treatment cost and eliminates control at the same time.",
    "Site parameters — depth, current, shelter, seasonal water quality and bed substrate — are design decisions that no operational skill can compensate for later.",
    "Flow through a cage is always less than ambient current, and biofouling reduces it further while simultaneously increasing structural load.",
    "A cage farm is limited both by what one net can carry and by what the whole water body can assimilate, and the second limit is shared with neighbours.",
    "Structures must be designed for the extreme event, because drag rises with the square of current speed.",
    "Uneaten feed leaves the system entirely, making feeding control simultaneously an economic and an environmental discipline.",
  ],
  related: ["marine", "fundamentals", "systems", "sustainable"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Technical material on cage culture in inland and marine waters, including siting and environmental management.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Central Marine Fisheries Research Institute",
      description: "Research and demonstration material on marine and brackishwater cage farming in Indian waters.",
    },
    {
      organisation: "National Fisheries Development Board, India",
      description: "Programme guidance for reservoir and open-water cage culture development in India.",
    },
  ],
};
