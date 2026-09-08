import type { KnowledgeArea } from "../types";

export const engineering: KnowledgeArea = {
  number: "26",
  slug: "engineering",
  title: "Aquaculture Engineering",
  navSummary: "Tanks, pumps, pipework, aeration and structures — the physical plant that holds a biological process together.",
  summary:
    "Aquaculture engineering is the discipline of building and sizing the physical plant that keeps farmed animals in water fit to live in: culture units, hydraulics, aeration and oxygenation, solids handling, thermal control and civil works. It is distinguished from general process engineering by the fact that the process cannot be shut down, and by the very small margins that separate a working system from a lethal one.",
  difficulty: "advanced",
  topics: ["engineering", "systems", "water"],
  tags: ["hydraulics", "tank design", "aeration", "pumping", "civil works", "redundancy"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-08-04",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Engineering is everything on the farm that is not alive. It moves water, adds oxygen, takes waste away and holds the animals in a defined space. Because the animals keep breathing whether the plant is running or not, aquaculture engineering is judged less on efficiency than on what happens when something stops.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "An aquaculture facility is a chemical process plant with a living reactor inside it. Water enters a culture unit, picks up oxygen demand, ammonia, carbon dioxide and suspended solids from the stock, and must be returned to an acceptable condition before it comes back. The equipment that performs that loop — pumps, pipes, tanks, screens, blowers, contactors, heat exchangers and the civil structures that carry them — is the subject of aquaculture engineering.",
        },
        {
          kind: "text",
          value:
            "The discipline draws on hydraulics, mass transfer, structural and geotechnical engineering and control systems, but it applies them under an unusual constraint. Most process plants can be tripped safely. A culture unit cannot: stock consumes dissolved oxygen continuously, and the time between a failure and irreversible loss is measured in the residence time of the oxygen already in the water. Every design decision is therefore also a decision about failure.",
        },
        {
          kind: "text",
          value:
            "Good aquaculture engineering is unglamorous. It is correct pipe sizing, accessible valves, drains that self-clean, tanks that can be emptied without a pump, and a layout in which a person carrying a net can reach everything. Sophistication that cannot be maintained by the staff who will actually operate the farm is a liability rather than an asset.",
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
            "The engineering fixes the ceiling on production. A farm cannot feed beyond the rate at which its plant can supply oxygen and remove waste, and it cannot carry biomass beyond the point at which a single failure would exceed the buffer time available to respond. Both limits are set on the drawing board, and neither is negotiable once concrete has been poured.",
        },
        {
          kind: "text",
          value:
            "The engineering also fixes the operating cost. Pumping and aeration typically dominate the energy bill of an intensive facility, and their consumption is decided almost entirely by hydraulic layout — the head that has to be lifted, the losses in the pipework, the depth at which air is released. A design that adds unnecessary head charges for it every hour of every cycle for the life of the plant.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Head is a permanent tax",
          value:
            "Energy consumed in pumping is proportional to the product of flow and total head. Head added by a poor layout, an undersized pipe or an unnecessary elevation change cannot be recovered by better operation later; it is paid for continuously.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "The culture unit as a reactor" },
        {
          kind: "text",
          value:
            "A tank or pond is best understood as a mixed reactor with a continuous internal source of oxygen demand and ammonia. Its water quality at any point is the result of the inflow condition, the internal generation rate and the degree of mixing. A tank that is well mixed presents one condition to every animal in it; a tank that is poorly mixed contains dead zones where local conditions may be far worse than any measurement taken at the outlet.",
        },
        { kind: "subheading", value: "Hydraulic residence time and exchange rate" },
        {
          kind: "text",
          value:
            "Exchange rate — how many times the unit volume is replaced per hour — determines how far conditions inside the unit can drift from the inflow condition. Raising exchange improves water quality but raises pumping energy and reduces the residence time available to treatment units downstream. Almost every recirculating design is an argument about where to sit on that curve.",
        },
        { kind: "subheading", value: "Self-cleaning and solids transport" },
        {
          kind: "text",
          value:
            "Solids that settle inside a culture unit break down, consume oxygen and release ammonia where the animals are. A well engineered unit moves faeces and uneaten feed to a drain before they disintegrate, using the rotational velocity of a circular tank, the longitudinal velocity of a raceway, or the slope and hydraulics of a pond drain. Solids removal begins in the tank, not in the filter.",
        },
        { kind: "subheading", value: "Redundancy and failure mode" },
        {
          kind: "text",
          value:
            "Redundancy in aquaculture is not primarily about availability, it is about survival time. The relevant question is not whether a duty-standby pump raises uptime but whether the standby can start, or an operator can arrive, inside the window that the water's dissolved oxygen provides at peak biomass on the hottest day of the year.",
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
            "Three relationships underlie most sizing work: the head a pump must overcome, the oxygen a transfer device delivers, and the flow a culture unit requires to hold a target water quality.",
        },
        {
          kind: "formula",
          name: "Total dynamic head",
          expression: "H = Hs + Hf + Hv",
          terms: [
            { symbol: "H", meaning: "Total dynamic head the pump must develop", unit: "m" },
            { symbol: "Hs", meaning: "Static lift between source and discharge surface", unit: "m" },
            { symbol: "Hf", meaning: "Friction loss in pipework at design flow", unit: "m" },
            { symbol: "Hv", meaning: "Losses across fittings, valves and treatment units", unit: "m" },
          ],
          example:
            "Consider a hypothetical loop with a static lift of 2 m, pipe friction of 0.6 m and 1.4 m of loss across a drum filter and a degasser. Total dynamic head is 4 m, and the pump must be selected at that duty point and not at the static lift alone — a mistake that leaves the delivered flow well short of the design figure.",
          limitations:
            "Friction and fitting losses depend on pipe material, age, fouling and actual flow, and rise as biofilm accumulates, so a clean-pipe calculation is optimistic. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Oxygen transfer requirement",
          expression: "OTR = (Rf x F) + Rb + Rn",
          terms: [
            { symbol: "OTR", meaning: "Oxygen that transfer equipment must deliver per unit time", unit: "kg/h" },
            { symbol: "Rf", meaning: "Oxygen consumed per unit of feed delivered", unit: "kg O2 per kg feed" },
            { symbol: "F", meaning: "Feed delivery rate at peak", unit: "kg/h" },
            { symbol: "Rb", meaning: "Oxygen demand of biofilm and biofilter nitrification", unit: "kg/h" },
            { symbol: "Rn", meaning: "Residual demand of settled and suspended organic matter", unit: "kg/h" },
          ],
          example:
            "Consider a hypothetical unit at peak feeding where the fish, the biofilter and the residual organic load together define an hourly oxygen demand. The transfer equipment is then selected for that demand at the lowest expected saturation deficit — that is, at the warmest water and the highest operating dissolved oxygen — because that is when transfer efficiency is poorest.",
          limitations:
            "Oxygen consumption per unit feed varies with species, diet composition, temperature and the proportion of feed that is actually eaten, and transfer efficiency falls as the saturation deficit narrows. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "The second relationship is the one that connects the feed plan to the plant. Feed rate is the single input that drives oxygen demand, ammonia production and solids production together, so a feed table is simultaneously an equipment sizing document. Any decision to feed harder than the plan is a decision to load the plant beyond its design point.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Principal engineering subsystems and the failure each one guards against",
          columns: ["Subsystem", "Function", "Consequence of undersizing"],
          rows: [
            ["Culture units", "Contain stock, mix water, transport solids to drain", "Dead zones, solids accumulation, uneven growth"],
            ["Pumping and pipework", "Move water around the loop at design flow", "Reduced exchange, rising internal ammonia, higher energy per unit flow"],
            ["Aeration and oxygenation", "Maintain dissolved oxygen against consumption", "Feed intake falls before any visible distress appears"],
            ["Degassing", "Strip carbon dioxide and nitrogen supersaturation", "Falling pH, respiratory stress, gas bubble problems"],
            ["Solids removal", "Take particulate waste out of the loop intact", "Organic load transferred to the biofilter and to oxygen demand"],
            ["Biological filtration", "Convert ammonia and nitrite", "Nitrogen accumulation that limits the whole system's biomass"],
            ["Thermal control", "Hold temperature within the growth window", "Slow growth, extended cycles, higher fixed cost per kilogram"],
            ["Power and standby", "Keep critical equipment running through supply loss", "Total stock loss within the oxygen buffer time"],
          ],
          basis:
            "A structural description of what each subsystem does and how its absence is expressed, not a performance ranking. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        { kind: "subheading", value: "Civil and structural work" },
        {
          kind: "text",
          value:
            "Tanks, sumps, channels and pond embankments carry sustained hydrostatic load, and in Indian conditions they also carry thermal movement and monsoon groundwater pressure. Empty tanks in high water tables can float, embankments saturated from behind can slip, and buried pipework laid without bedding fails at the joints. These are conventional civil problems, but they are frequently treated as secondary on farms and are a common source of expensive early failure.",
        },
        { kind: "subheading", value: "Layout and access" },
        {
          kind: "text",
          value:
            "Layout decides operating cost as surely as equipment selection does. Distances walked during feeding and grading, the reach of a hose, whether a filter can be serviced without draining a tank, and whether a vehicle can bring feed to the point of use are all layout properties that cannot be improved afterwards.",
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
            "A design proceeds from the biological plan outward. Peak standing biomass and peak feed rate are established first, because every subsequent number is derived from them. Only then is it sensible to select tanks, flows and equipment.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Fix peak standing biomass and peak daily feed rate from the production plan, at the highest temperature the site will reach.",
            "Derive oxygen demand, ammonia production and solids production from that feed rate.",
            "Select culture unit geometry and volume for the biomass, then check that its internal velocity will move solids to the drain.",
            "Set exchange rate from the water quality that must be held inside the unit, and derive the loop flow from it.",
            "Size pipework for a velocity that neither erodes nor allows settlement, then compute total dynamic head at that flow.",
            "Select pumps at the calculated duty point with an allowance for fouling, and confirm the operating point sits near the efficiency peak.",
            "Size transfer, degassing, solids and biological units for the derived loads at worst-case temperature.",
            "Determine the oxygen buffer time at peak biomass with all equipment stopped, and size standby power and alarms to fit inside it.",
            "Walk the layout on paper as an operator would, and correct anything that requires a tank to be drained for routine work.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Commission against a simulated load",
          value:
            "Plant is commonly proved by running clean water through it, which tests nothing that matters. Loading the system artificially — for example by dosing a nitrogen source to develop the biofilter and verify its response — establishes capacity before stock depends on it.",
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
            "The animals set the specification and the plant meets it. Species have a temperature range within which they grow, a dissolved oxygen level below which feeding stops, and tolerances for un-ionised ammonia, nitrite, carbon dioxide and suspended solids. None of these move to accommodate an equipment budget, and a plant that cannot hold them simply produces less than its nameplate.",
        },
        {
          kind: "text",
          value:
            "There are also interactions the biology imposes on the engineering that have no analogue in industrial process work. Nitrifying biofilm takes weeks to establish and is lost quickly if starved, so a biofilter cannot be commissioned on demand. Carbon dioxide stripping and pH are coupled, and alkalinity is consumed by nitrification, so a system that removes ammonia well will drift acidic unless alkalinity is replaced. Fine solids that pass a screen are the fraction that most affects gill health, which means removal efficiency at small particle sizes matters more than bulk removal.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Design margins are assumptions, not facts",
          value:
            "Every safety factor applied to a flow, a transfer rate or a filter area encodes an assumption about how far the real load will exceed the calculated one. Recording those assumptions in the design documentation is what allows a later operator to know which margins have already been spent.",
        },
        {
          kind: "text",
          value:
            "Site conditions in India add their own constraints. Ambient temperature ranges are wide, grid supply may be intermittent, water sources vary in hardness and alkalinity between seasons, and monsoon inflow can alter both the quantity and the chemistry of a surface source within days. A design validated on a single dry-season water analysis has not been validated.",
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
            "Treat the plant as a machine with a maintenance schedule, not as infrastructure that runs until it stops. Impellers wear, diffusers foul, screens blind and check valves stick.",
            "Record pump duty points, blower pressures and filter differential pressures periodically. A slow rise in pressure is the earliest available warning of fouling.",
            "Test standby power under real load at a fixed interval, and time the full sequence from mains loss to restored aeration.",
            "Keep critical spares for anything whose failure exceeds the oxygen buffer time — not for everything, but certainly for those items.",
            "Keep as-built drawings and valve schedules current. During an incident, nobody has time to trace a pipe.",
            "Change one thing at a time when tuning flows or aeration, and observe long enough for the biology to respond before changing another.",
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
          caption: "Recurring engineering faults and their usual origin",
          columns: ["Observation", "Usual underlying cause"],
          rows: [
            ["Delivered flow is below design", "Pump selected on static lift rather than total dynamic head, or pipework fouled since commissioning"],
            ["Solids accumulate on the tank floor", "Insufficient rotational or longitudinal velocity, or a drain geometry that does not capture the boundary layer"],
            ["Dissolved oxygen falls late in the cycle only", "Transfer equipment sized for average rather than peak feed load"],
            ["pH drifts downward over weeks", "Alkalinity consumed by nitrification and not replaced, often combined with poor carbon dioxide stripping"],
            ["Biofilter performance collapses after a stoppage", "Nitrifying biomass starved or oxygen-deprived during the outage"],
            ["Standby generator fails to carry the load", "Sized on running load without allowing for motor starting current, or never tested under full load"],
            ["Pipework leaks at buried joints", "Laid without bedding or thermal allowance, then loaded by ground movement"],
          ],
          basis:
            "Fault patterns commonly described in aquaculture engineering and extension literature, offered as diagnostic starting points rather than conclusions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Derive every equipment size from the peak feed rate, and keep the derivation on file so it can be rechecked when the plan changes.",
            "Design for gravity wherever the site allows it. Water that falls does not consume energy and does not stop when a motor does.",
            "Provide independent, differently powered aeration for critical units, so that a single fault cannot remove all oxygen supply.",
            "Make every treatment unit isolatable and bypassable without stopping the loop, so maintenance does not require a shutdown.",
            "Instrument dissolved oxygen and water level as alarm points before instrumenting anything else, because those two carry the shortest response times.",
            "Specify materials for the water chemistry actually present, particularly in brackish and marine installations where corrosion decides service life.",
            "Build in the ability to sample every stream. A treatment unit that cannot be measured across cannot be diagnosed.",
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
            "Beyond sizing, the significant engineering questions are about allocation and coupling. Given a fixed energy budget, the same dissolved oxygen target can be met by higher exchange with modest aeration or by lower exchange with intensive oxygenation, and the two choices produce different carbon dioxide profiles, different biofilter loading and different failure behaviour. There is no universally correct answer, only an answer for a given species, water source and tariff structure.",
        },
        {
          kind: "flow",
          caption: "How a design decision propagates through the plant. Each step constrains the next, which is why changes late in design are expensive.",
          steps: [
            { label: "Production target", detail: "Species, harvest size and harvest date set the biomass curve and its peak." },
            { label: "Feed plan", detail: "The biomass curve and a feeding rate assumption give peak daily and hourly feed delivery." },
            { label: "Waste loads", detail: "Feed rate converts into oxygen demand, ammonia production, carbon dioxide production and solids production." },
            { label: "Unit sizing", detail: "Each load sizes its treatment unit at the worst-case temperature and water chemistry." },
            { label: "Hydraulics", detail: "Unit arrangement and required exchange fix loop flow, pipe sizes and total dynamic head." },
            { label: "Energy", detail: "Flow and head, plus transfer efficiency, fix the connected load and the operating cost per kilogram produced." },
            { label: "Resilience", detail: "Peak biomass and oxygen buffer time fix the required standby power, alarm coverage and response procedure." },
          ],
        },
        {
          kind: "callout",
          tone: "research",
          title: "Where the engineering is still developing",
          value:
            "Active directions in the field include energy recovery from low-head recirculating loops, improved removal of fine and colloidal solids, denitrification and phosphorus recovery to close nutrient loops, and material selection for long service life in warm brackish water. These are areas of ongoing work across the sector rather than settled practice.",
        },
        {
          kind: "text",
          value:
            "The final advanced consideration is that a plant is designed once and operated for years, during which the production plan will change. Designing in headroom on the interfaces — spare pipe stubs, spare pump bays, electrical capacity, physical space around treatment units — costs comparatively little at construction and is the difference between a farm that can adapt and one that must be rebuilt.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Every equipment size on a farm derives from peak feed rate, because feed drives oxygen demand, nitrogen production and solids production together.",
    "Pumps must be selected at total dynamic head, not static lift, and head added by layout is an energy cost paid continuously.",
    "Solids removal begins inside the culture unit; a tank that does not transport waste to its drain loads every downstream process.",
    "Redundancy in aquaculture is sized against oxygen buffer time, not against conventional availability targets.",
    "Nitrification consumes alkalinity and interacts with carbon dioxide stripping, so nitrogen removal and pH control cannot be designed separately.",
    "Layout, access and maintainability determine operating cost as much as equipment selection does, and cannot be corrected after construction.",
  ],
  related: ["ras", "systems", "water-quality", "automation-ai"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Technical material on aquaculture systems, facility design and production infrastructure.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center",
      description: "Extension publications on tank design, aeration, pumping and pond engineering.",
    },
    {
      organisation: "Bureau of Indian Standards",
      description: "Standards relevant to materials, pipework, structures and electrical installation used in farm construction.",
    },
  ],
};
