import type { KnowledgeArea } from "../types";

export const raceway: KnowledgeArea = {
  number: "17",
  slug: "raceway",
  title: "Raceway Systems",
  navSummary: "Flow-through channels that trade a large continuous water requirement for simplicity and control.",
  summary:
    "A raceway is a long channel through which water passes once and leaves, carrying waste with it. Where a site has abundant cool water at constant quality, this is the simplest intensive system that exists: there is no biofilter to manage and no recirculation loop to fail. The design problem is entirely hydraulic — how to move enough water through the channel to support the biomass without creating velocities the fish cannot hold against.",
  difficulty: "intermediate",
  topics: ["engineering", "water", "systems", "production"],
  tags: ["flow-through", "hydraulic exchange", "quiescent zone", "spring water", "trout culture", "serial reuse"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-17",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "A raceway is a long narrow channel with water entering at one end and leaving at the other. Fish are held in the channel, and the constant flow brings oxygen in and washes waste out, so no filter is needed. It only works where there is a lot of good water available all year, because everything the system does depends on that flow continuing.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "A raceway is a flow-through culture unit: a channel, usually rectangular and considerably longer than it is wide, into which water enters continuously at the head and from which it discharges at the tail. Water makes a single pass. Oxygen arrives dissolved in the incoming water, dissolved waste leaves in the outgoing water, and settleable solids are either carried out or collected in a quiet section at the downstream end.",
        },
        {
          kind: "text",
          value:
            "The system is defined by what it does not have. There is no biofilter, because ammonia is diluted and exported rather than converted. There is no recirculation pump, where the site allows gravity flow. There is no oxygen generation, where the incoming water arrives saturated and cool. What replaces all of that is water — a large, continuous, reliable supply, which is the one thing the design cannot economise on.",
        },
        {
          kind: "text",
          value:
            "Raceways are historically associated with trout and other coldwater salmonids, because those species need cool well-oxygenated water and such water is typically found as springs and hill streams with the flow a raceway requires. The principle is not species-specific, but the water availability that makes it economic usually is.",
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
            "Where the water is available, a raceway delivers most of the control of an intensive system at a fraction of the complexity. Stock is visible along the whole channel, grading and harvest are straightforward, mortality is easily seen and removed, and there is very little that can break. For hill regions with spring or stream flow, including trout farming areas in the Indian Himalaya, it is frequently the correct answer.",
        },
        {
          kind: "text",
          value:
            "It matters equally as a study in constraint. Raceway design makes explicit something that other systems obscure: production is a direct function of water throughput. That relationship is visible in the arithmetic, and understanding it in a raceway makes it easier to see the equivalent, less obvious limits in ponds, cages and recirculating plants.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Production is bounded by flow",
          value:
            "In a flow-through system the biomass supported depends on the volume of water passing through per unit time and on the change in water quality permitted between inlet and outlet. Increasing stocking without increasing flow simply moves the outlet water further from the inlet water, and the animals at the tail end experience the difference first.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "The water quality gradient" },
        {
          kind: "text",
          value:
            "Water improves nothing as it travels down a raceway. Oxygen falls, ammonia and carbon dioxide rise, and suspended solids increase. A fish at the head of the channel therefore lives in different water from a fish at the tail, and the tail condition is what limits the unit. This gradient is the central concept of raceway design; every other feature exists to manage it.",
        },
        { kind: "subheading", value: "Exchange rate" },
        {
          kind: "text",
          value:
            "Exchange rate expresses how many times the channel's volume is replaced per hour. A high exchange rate keeps the gradient shallow and flushes solids effectively, but it also raises water velocity, and beyond a point the fish spend energy swimming rather than growing. Choosing an exchange rate is a compromise between water quality and the swimming ability of the species and size held.",
        },
        { kind: "subheading", value: "Hydraulic behaviour" },
        {
          kind: "text",
          value:
            "A raceway performs as designed only if the flow moves as plug flow along the channel. In practice, inlet arrangement, channel proportions and the presence of the fish themselves create recirculating eddies and dead zones where solids settle and water quality diverges from the average. A channel with poor hydraulics can have adequate flow on paper and stagnant corners in reality.",
        },
        {
          kind: "flow",
          caption:
            "The path of water through a raceway unit and what changes at each stage.",
          steps: [
            { label: "Source", detail: "Spring, stream, borehole or reservoir supplying water of known temperature, oxygen content and chemistry." },
            { label: "Headworks", detail: "Screening, flow measurement and distribution, with aeration where the source arrives under-saturated." },
            { label: "Inlet", detail: "Flow is spread across the channel width so the whole cross-section is used rather than a central jet." },
            { label: "Rearing section", detail: "Fish are held here; oxygen falls and ammonia, carbon dioxide and solids rise along the length." },
            { label: "Quiescent zone", detail: "A screened low-velocity section at the tail where settleable solids accumulate for periodic removal." },
            { label: "Outlet", detail: "Water leaves the unit at its poorest condition, which is the water quality the design must satisfy." },
            { label: "Reaeration or discharge", detail: "Flow is either re-oxygenated for serial reuse or treated and released under the site's discharge conditions." },
          ],
        },
        { kind: "subheading", value: "Serial reuse" },
        {
          kind: "text",
          value:
            "Where water is scarce relative to the site's ambition, the discharge from one raceway can be reaerated and passed to another below it. This multiplies production per unit of intake, but each successive unit starts from worse water: accumulated ammonia and carbon dioxide are not removed by aeration, only oxygen is restored. The number of usable reuses is therefore set by the parameter that cannot be reset.",
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
            "Raceway sizing rests on two relationships: how much flow the channel receives relative to its volume, and how much biomass that flow can support given the water quality change permitted along the channel.",
        },
        {
          kind: "formula",
          name: "Exchange rate",
          expression: "R = Q / V",
          terms: [
            { symbol: "R", meaning: "Number of complete water volume replacements per hour", unit: "per hour" },
            { symbol: "Q", meaning: "Volumetric flow entering the channel", unit: "m3/h" },
            { symbol: "V", meaning: "Effective water volume of the rearing section", unit: "m3" },
          ],
          example:
            "Consider a hypothetical channel 30 m long, 3 m wide and 1 m deep, giving 90 m3 of rearing volume, supplied at 180 m3/h. The exchange rate is 2 per hour, meaning the water in the channel is replaced twice each hour and the mean residence time of a parcel of water is thirty minutes.",
          limitations:
            "Exchange rate describes the average and says nothing about dead zones, and raising it raises velocity, which the species and size held may not tolerate. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Biomass supported by an oxygen budget",
          expression: "B = (Q x (Cin - Cout)) / OCR",
          terms: [
            { symbol: "B", meaning: "Standing biomass the flow can support", unit: "kg" },
            { symbol: "Q", meaning: "Volumetric flow through the channel", unit: "L/h" },
            { symbol: "Cin", meaning: "Dissolved oxygen concentration entering the channel", unit: "mg/L" },
            { symbol: "Cout", meaning: "Minimum acceptable dissolved oxygen concentration leaving the channel", unit: "mg/L" },
            { symbol: "OCR", meaning: "Oxygen consumption rate of the stock per unit biomass at the operating temperature and feeding level", unit: "mg/kg/h" },
          ],
          example:
            "Consider a hypothetical channel supplied at 180,000 L/h, with inlet oxygen of 10 mg/L, an outlet condition set at 7 mg/L, and an assumed consumption of 300 mg per kilogram of fish per hour. Supported biomass is 180,000 x 3 / 300, or about 1,800 kg. The same channel at a warmer inlet temperature would hold considerably less, because inlet oxygen falls while consumption rises.",
          limitations:
            "Oxygen consumption varies strongly with temperature, fish size and time since feeding, and the calculation ignores the ammonia and carbon dioxide limits that may bind before oxygen does. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "Both relationships depend on flow, which is why the first honest question about any raceway proposal is a measured record of the source's yield across the driest part of the year. A design sized on monsoon flow is a design that fails annually at a predictable time.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        { kind: "subheading", value: "Geometry and materials" },
        {
          kind: "table",
          caption: "Raceway design features and the function each performs",
          columns: ["Feature", "Function", "Consequence if compromised"],
          rows: [
            ["Length-to-width proportion", "Promotes plug flow along the channel", "Short-circuiting and recirculating eddies with stagnant corners"],
            ["Inlet distribution structure", "Spreads incoming water across the full cross-section", "A central jet, with dead water along the walls"],
            ["Uniform depth and level floor", "Keeps velocity consistent along the channel", "Local slack water where solids settle among the fish"],
            ["Quiescent zone at the tail", "Collects settleable solids clear of the stock", "Solids resuspended continuously and exported to the discharge"],
            ["Screens at both ends", "Retain stock and exclude debris and wild fish", "Escapes and blockages that reduce flow without warning"],
            ["Smooth impermeable surfaces", "Allow cleaning and limit abrasion injury", "Fouling, harbouring of pathogens and skin damage to stock"],
            ["Freeboard and overflow provision", "Absorbs a flow surge without loss of stock", "Overtopping during high inflow events"],
          ],
          basis:
            "A qualitative account of raceway design features and their purposes rather than a dimensional specification. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        { kind: "subheading", value: "Solids management" },
        {
          kind: "text",
          value:
            "Solids in a flow-through system are removed by hydraulics rather than by equipment. A quiescent zone behind a screen at the downstream end lets settleable material drop out of suspension where fish are not present to disturb it, and that material is then vacuumed or drawn off periodically. Whether solids are captured there or carried into the discharge determines what the farm's effluent looks like and, increasingly, whether it complies.",
        },
        { kind: "subheading", value: "Effluent and discharge" },
        {
          kind: "text",
          value:
            "Because everything the system rejects leaves in the water, a raceway's environmental profile is entirely a discharge question. Suspended solids, dissolved nitrogen, phosphorus and biological oxygen demand all appear downstream, and settling basins, constructed wetlands or solids capture ahead of discharge are the usual responses. In many jurisdictions this is the binding constraint on expansion rather than water supply.",
        },
        { kind: "subheading", value: "Aeration and supplementation" },
        {
          kind: "text",
          value:
            "Where the source arrives under-saturated, as groundwater often does, aeration at the headworks is required before the water reaches the fish. Where production is to be pushed beyond what dissolved oxygen alone supports, oxygen supplementation at the inlet or mid-channel raises the ceiling — but only until ammonia or carbon dioxide becomes the limiting parameter, at which point more oxygen buys nothing.",
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
            "The work of running a raceway is regular, physical and largely preventive. Very little goes wrong quickly except loss of flow, and almost everything else is a matter of routine.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Measure the source flow and temperature across a full annual cycle, and design against the minimum rather than the mean.",
            "Test the source chemistry, including dissolved gases, since groundwater may arrive under-saturated in oxygen or supersaturated in nitrogen.",
            "Set out channels so that flow reaches each unit by gravity where the terrain permits, removing pumping from the critical path.",
            "Commission the hydraulics before stocking, using dye or floats to confirm the flow reaches every part of the channel.",
            "Stock a uniform size class per channel, so that feeding and grading apply to the whole unit consistently.",
            "Feed along the channel length rather than at one point, so that the whole population has access.",
            "Clean the quiescent zone on a fixed schedule, before accumulated solids begin to resuspend into the rearing section.",
            "Brush or clean channel walls routinely to prevent fouling growth that harbours pathogens and reduces effective section.",
            "Check inlet and outlet screens daily, since a partly blocked screen reduces flow gradually and without any alarm.",
            "Monitor oxygen at the outlet rather than the inlet, because the outlet is where the design condition is tested.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "The outlet is the measurement point",
          value:
            "Inlet water quality describes the resource. Outlet water quality describes what the fish at the end of the channel are actually living in, and it is the number that determines whether the unit is loaded correctly.",
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
            "Velocity is the parameter that connects the engineering to the animal most directly. Some current is beneficial: it keeps the channel clean, distributes fish along its length and can improve condition. Excessive current makes the fish swim continuously, spending on locomotion the energy that was meant to become growth, and it bears hardest on the smallest individuals. Velocity tolerance changes with species and size, so a channel that suits fingerlings may not suit the same population at harvest weight.",
        },
        {
          kind: "text",
          value:
            "The failure mode of a raceway is loss of flow, and it is abrupt. Without incoming water there is no oxygen source at all, and a densely stocked channel has very little reserve. Screen blockage, intake obstruction after heavy rain, and diversion structure damage are the common causes, and each is silent until the water level or the fish behaviour betrays it. Flow alarms and physical overflow paths matter more here than any other instrumentation.",
        },
        {
          kind: "text",
          value:
            "Disease transmission follows the water. In a serial arrangement, everything shed by the fish in the upper channel passes through the lower ones, so a health event propagates downstream through the whole farm. This argues for independent supply to critical units, for keeping the youngest and most valuable stock highest in the sequence, and for treating unit order as a biosecurity decision rather than a convenience of the terrain.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Uniform conditions are an idealisation",
          value:
            "Design calculations treat the channel as if water quality varied only along its length. Real channels have crosswise variation, wall effects and fish-induced mixing. Where a unit performs below its calculated capacity, poor hydraulic distribution rather than an error in the biology is the usual explanation.",
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
            "Treat flow as the primary control variable and measure it continuously, since every other parameter is downstream of it.",
            "Assess loading against outlet water quality rather than against stocking density expressed per unit of volume.",
            "Keep one size class per channel, so that feeding, grading and observation are consistent along its length.",
            "Clean the quiescent zone regularly and record what is removed, since the trend indicates feed waste and loading.",
            "Order units so that the youngest and most valuable stock receives the freshest water, and accept the terrain constraints that follow.",
            "Inspect and clear screens at both ends daily, because gradual flow loss produces no alarm until it is severe.",
            "Capture and settle solids before discharge, and treat the effluent as part of the farm rather than as something that has left it.",
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
          caption: "Recurring raceway problems and their usual underlying causes",
          columns: ["Symptom", "Usual underlying cause"],
          rows: [
            ["Fish crowd at the head of the channel", "Water quality at the tail has deteriorated, so the population is seeking the inlet"],
            ["Growth is poorer in the lower units of a series", "Accumulated ammonia and carbon dioxide, which reaeration between units does not remove"],
            ["Solids accumulate among the fish rather than in the quiescent zone", "Insufficient velocity or an uneven floor creating slack water in the rearing section"],
            ["Sudden mortality with no water quality warning", "Loss of flow from a blocked screen or damaged intake, with no reserve in the channel"],
            ["Gas bubble signs in stock on groundwater supply", "Supersaturated dissolved gas in the source, not stripped at the headworks"],
            ["Uneven fish distribution along the channel", "Poor inlet distribution creating a central jet with slack water at the walls"],
            ["Condition declines while feeding appears normal", "Velocity too high for the size class held, so energy is spent on swimming"],
            ["Discharge fails a suspended solids expectation", "Quiescent zone cleaned too infrequently, allowing settled material to resuspend"],
          ],
          basis:
            "Patterns commonly described in flow-through culture extension literature and operating experience, given as diagnostic starting points rather than conclusions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Design against the measured minimum annual flow and the maximum annual source temperature, since those coincide with the tightest oxygen budget.",
            "Test the hydraulics of every channel at commissioning and correct distribution problems before stock is introduced.",
            "Install an independent flow or level alarm that does not depend on the same power or structure as the supply itself.",
            "Provide a gravity overflow and bypass so that a surge event cannot overtop the channels and remove the stock.",
            "Keep the quiescent zone on a fixed cleaning schedule and log the volume removed as a feed waste indicator.",
            "Where serial reuse is used, monitor the accumulating parameter that reaeration cannot correct and let it set the number of passes.",
            "Settle or capture solids ahead of discharge, and monitor the effluent as a routine rather than in response to an enquiry.",
            "Disinfect between cycles and manage unit order deliberately, since water carries pathogens down the whole sequence.",
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
            "The most interesting analytical question in raceway design is which parameter binds first. Oxygen is the obvious candidate and the easiest to relieve, since supplementation raises inlet concentration cheaply. Once oxygen has been supplemented, un-ionised ammonia or dissolved carbon dioxide takes over as the limit, and neither responds to adding oxygen. A farm that supplements without knowing which constraint it is relieving will spend money and see no additional production.",
        },
        {
          kind: "text",
          value:
            "Carbon dioxide is the frequently overlooked one. It accumulates along the channel in proportion to oxygen consumed, depresses pH, and impairs the blood's ability to carry oxygen, so its effect appears as an oxygen problem that adding oxygen does not fix. Stripping it requires gas exchange with air rather than dissolution of pure oxygen, which is a different unit operation with different equipment.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Mixed-cell and partial-reuse configurations",
          value:
            "Hydraulic arrangements that create controlled rotational cells within a rectangular channel, and partial-reuse designs that recycle a share of the flow through treatment while retaining flow-through simplicity, are actively developed. They aim to combine raceway operability with reduced water demand, and the balance point between the two remains a matter of ongoing work.",
        },
        {
          kind: "text",
          value:
            "Finally, the boundary between raceway and recirculating system is a spectrum rather than a category. Adding solids capture, then reaeration, then a small biofilter and a partial return loop turns a flow-through channel into a partial-reuse system without any single decisive step. The right position on that spectrum follows from what the site's water actually costs — in abstraction limits, in pumping energy and in discharge obligations — and that calculation should be done deliberately rather than arrived at by accumulation.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "A raceway exports waste in the water rather than treating it, so production is bounded directly by the volume of flow available.",
    "Water quality degrades along the channel, and the outlet condition rather than the inlet condition determines the safe loading.",
    "Exchange rate and velocity are in tension: flushing improves water quality but excessive current costs the fish growth.",
    "Hydraulic distribution decides whether the whole channel is usable, and poor distribution shows up as underperformance rather than as an obvious fault.",
    "Loss of flow is the defining failure mode and is abrupt, which makes independent flow alarms the most valuable instrumentation on the farm.",
    "Once oxygen is supplemented, ammonia or carbon dioxide becomes the limit, and adding more oxygen buys no further production.",
  ],
  related: ["ras", "coldwater", "engineering", "water-quality"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Technical material on flow-through culture systems, water requirements and effluent management.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center",
      description: "Extension publications on raceway design, hydraulics, aeration and solids handling.",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute material on coldwater fisheries and hill-region raceway trout culture in India.",
    },
  ],
};
