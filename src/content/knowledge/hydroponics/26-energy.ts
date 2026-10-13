import type { KnowledgeArea } from "../types";

export const energy: KnowledgeArea = {
  number: "26",
  slug: "energy",
  title: "Hydroponic Energy Management",
  navSummary: "Where the kilowatt-hours actually go, and why energy decides whether an indoor farm works.",
  summary:
    "In a controlled-environment farm, energy is not one cost line among many. It is the line that determines whether the crop can be grown profitably at all, because lighting, heating, cooling, dehumidification and pumping are the price of replacing a climate that outdoor growers receive free. Managing it means knowing where it goes, when it peaks, and which reductions cost yield.",
  difficulty: "advanced",
  topics: ["engineering", "climate", "lighting", "sustainability", "economics"],
  tags: ["energy", "load profile", "peak demand", "dehumidification", "heat recovery", "solar", "efficiency"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-08-05",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Almost all the electricity an indoor farm uses ends up as heat, and much of the remaining energy is spent removing that heat and the water the crop transpires. Reducing energy use means either producing less waste heat, moving it somewhere useful, or buying it at a better time — not simply switching things off.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "An outdoor field receives light, warmth and air movement without charge and disposes of humidity without effort. A greenhouse receives some of these and pays to correct the rest. A closed indoor farm pays for all of them. Every step along that sequence buys more control and more independence from weather, and each step is paid for in kilowatt-hours.",
        },
        {
          kind: "text",
          value:
            "This makes energy the defining engineering constraint of the sector. A design that is elegant in every other respect will not operate if its energy demand exceeds what the crop's market value can carry. Conversely, most of the meaningful improvements available to indoor growing over the next decade are energy improvements: better conversion of electricity to usable photons, better recovery of the heat that conversion produces, and better matching of demand to when energy is cheap and clean.",
        },
        {
          kind: "text",
          value:
            "The figures in this section are structural rather than prescriptive. How much energy a given farm uses per unit of produce depends on crop, cultivar, growth stage, climate, system and water chemistry, on the building envelope, and on the local grid. What generalises is where the demand comes from and how the parts interact.",
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
            "Energy is a variable cost that scales with production, which means it cannot be diluted by growing more. Capital cost per unit falls as a facility fills; energy cost per unit does not. A farm whose energy cost per kilogram exceeds the achievable price will lose more money the harder it works, and no efficiency achieved elsewhere in the business will reverse that arithmetic.",
        },
        {
          kind: "text",
          value:
            "Energy also constrains what can be grown. Crops differ enormously in the light integral they need and in how much of their mass is saleable. A leafy crop harvested whole converts a comparatively large fraction of its intercepted light into sale weight. A fruiting crop carries a much larger structure to produce the part that is sold, and needs a higher light integral to do it. The energy cost per unit of value is what decides whether a crop belongs indoors, in a greenhouse, or in a field.",
        },
        {
          kind: "text",
          value:
            "Finally, energy is where environmental claims are settled. Water savings in hydroponics are real and easy to demonstrate. They are also, in carbon terms, usually much smaller than the emissions attached to the electricity used to light and condition the crop. Any honest sustainability position for indoor farming starts with the carbon intensity of its energy supply.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Nearly everything becomes heat" },
        {
          kind: "text",
          value:
            "Electrical energy entering a growing space leaves it almost entirely as heat. Light absorbed by leaves and surfaces becomes heat; the small fraction fixed into chemical bonds by photosynthesis is negligible in a thermal balance. Pump and fan motors deliver work that dissipates as heat through friction. This is why lighting and cooling are not independent decisions: a lighting choice sets a cooling load.",
        },
        { kind: "subheading", value: "Latent and sensible load" },
        {
          kind: "text",
          value:
            "Heat in a growing space arrives in two forms. Sensible heat raises air temperature and is removed by cooling. Latent heat is carried in water vapour transpired by the crop and is only removed by condensing that vapour or by exchanging the air. In a closed farm with a dense, well-watered canopy the latent load can rival or exceed the sensible load, and a system sized only for temperature will hold temperature while humidity climbs to the point where transpiration, and therefore calcium transport, is impaired.",
        },
        { kind: "subheading", value: "Efficiency is not effectiveness" },
        {
          kind: "text",
          value:
            "A luminaire's efficacy describes how many photosynthetic photons it emits per joule consumed. That is an efficiency. What matters commercially is how many of those photons reach a leaf that can use them, at a time when the rest of the environment allows their use. A highly efficient fixture aimed at a walkway, or run when carbon dioxide or temperature is limiting, is wasting energy efficiently. Effectiveness is measured in saleable yield per kilowatt-hour, not in photons per joule.",
        },
        { kind: "subheading", value: "Energy and power are different purchases" },
        {
          kind: "text",
          value:
            "A farm buys energy, measured in kilowatt-hours, and it also buys the right to draw power, measured in kilowatts. In many tariffs the second is billed on the highest demand recorded in a period, so a short simultaneous start of lighting, pumps and cooling can set a charge that persists for months. Managing the shape of demand is a separate discipline from reducing total consumption, and it is often the cheaper of the two to address.",
        },
      ],
    },
    {
      id: "technical-fundamentals",
      heading: "Technical fundamentals",
      blocks: [
        {
          kind: "formula",
          name: "Lighting energy per day",
          expression: "E_light = ( A x PPFD x t ) / ( eta x 1000 )",
          terms: [
            { symbol: "E_light", meaning: "Daily electrical energy consumed by lighting", unit: "kWh/day" },
            { symbol: "A", meaning: "Illuminated growing area", unit: "m2" },
            { symbol: "PPFD", meaning: "Photosynthetic photon flux density delivered at the canopy", unit: "umol/m2/s" },
            { symbol: "t", meaning: "Photoperiod duration", unit: "seconds" },
            { symbol: "eta", meaning: "System efficacy, photons delivered to the canopy per joule of electricity, including driver and fixture losses", unit: "umol/J" },
            { symbol: "1000", meaning: "Conversion from watt-hours to kilowatt-hours after unit reduction", unit: "constant" },
          ],
          example:
            "Consider a hypothetical 1,000 m2 growing area operated at 250 umol/m2/s for 16 hours, with a system efficacy of 2.5 umol/J. The photon demand is 1,000 x 250 x 57,600 micromoles, and dividing by efficacy and converting gives roughly 1,600 kWh per day for lighting alone. The same calculation run with an efficacy of 2.0 umol/J gives about 2,000 kWh, which is the whole case for fixture selection expressed in one line.",
          limitations:
            "System efficacy is not fixture efficacy: reflector losses, mounting height, spacing, dirt and the fraction of light falling outside the canopy all reduce it, and efficacy itself falls as fixtures age and as junction temperature rises. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "formula",
          name: "Latent load from crop transpiration",
          expression: "Q_latent = m_w x h_fg",
          terms: [
            { symbol: "Q_latent", meaning: "Latent heat load to be removed by dehumidification or ventilation", unit: "kJ/day" },
            { symbol: "m_w", meaning: "Mass of water transpired by the crop per day", unit: "kg/day" },
            { symbol: "h_fg", meaning: "Latent heat of vaporisation of water, approximately 2,450 at typical growing temperatures", unit: "kJ/kg" },
          ],
          example:
            "Consider a hypothetical crop transpiring 2,000 kg of water per day across the facility. The latent load is about 4.9 million kJ per day, or roughly 1,360 kWh of heat that must be removed as condensation or carried out in exhausted air. Recovering that condensate returns clean water to the farm; recovering the heat released as it condenses is a separate opportunity.",
          limitations:
            "Transpiration rate is not a constant of the crop: it responds to vapour pressure deficit, light, air movement, root-zone conditions and stage, and it changes hour by hour. Using a daily average will size equipment that cannot meet the midday peak. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Dehumidification is a lighting cost in disguise",
          value:
            "Light drives transpiration. Increasing the light integral to raise yield increases the mass of water the crop moves, and therefore increases the latent load. Lighting and dehumidification capacity should be sized together, because they move together.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Where energy goes in a controlled-environment farm, and what governs each demand",
          columns: ["Demand", "What it does", "Principal driver", "Main lever"],
          rows: [
            ["Lighting", "Supplies the photon flux the crop converts to biomass", "Target light integral, photoperiod, area", "Fixture efficacy, uniformity, photoperiod placement, spectrum choice"],
            ["Cooling", "Removes sensible heat, most of it produced by lighting", "Installed lighting power and envelope gains", "Lighting efficacy, insulation, heat rejection design"],
            ["Dehumidification", "Removes water the crop transpires", "Transpiration rate and target vapour pressure deficit", "Condensate recovery, air distribution, integrated design with cooling"],
            ["Heating", "Maintains temperature when losses exceed internal gains", "Climate, envelope, night setpoint", "Insulation, thermal screens, recovered waste heat"],
            ["Pumping and circulation", "Moves nutrient solution and air", "Flow rate, head, run hours, duct and pipe design", "Correct pump sizing, variable speed control, low-resistance layout"],
            ["Post-harvest cooling", "Removes field heat and holds product cold", "Harvest volume, target storage temperature", "Rapid pre-cooling, insulation, door discipline"],
            ["Controls and ancillaries", "Sensing, dosing, IT, lighting of work areas", "Facility scale", "Usually small; rarely the right place to look first"],
          ],
          basis:
            "A structural description of demand categories and their drivers, not a proportional breakdown, because the split varies enormously between a naturally lit greenhouse and a closed indoor facility. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        { kind: "subheading", value: "Load profile and peak demand" },
        {
          kind: "text",
          value:
            "A farm's load is not flat. Lighting switches in blocks, cooling responds to lighting with a lag, dehumidification tracks transpiration which follows light, and pumps cycle. The result is a daily curve with a pronounced plateau during the photoperiod and a much lower base at night. Staggering the photoperiod across zones flattens the curve, reduces the peak power that must be contracted and cabled for, and can move part of the load into cheaper hours.",
        },
        { kind: "subheading", value: "Heat recovery" },
        {
          kind: "text",
          value:
            "Heat rejected from a growing space is not necessarily waste. It can pre-heat a propagation area, warm nutrient solution in cold conditions, supply a neighbouring building, or be stored for night use. Whether recovery is worthwhile depends on whether a heat demand exists at the same time as the surplus and close enough to reach without large losses. In a warm climate the surplus and the demand rarely coincide, and recovery equipment can become capital that never pays back.",
        },
        { kind: "subheading", value: "Solar and intermittency" },
        {
          kind: "text",
          value:
            "On-site photovoltaic generation is attractive and partially mismatched with the load. Generation peaks at midday and disappears at night; a farm running a long photoperiod, or running lighting deliberately at night for cheaper tariffs, has substantial demand when generation is zero. The mismatch is closed by storage, by grid import, or by shifting the photoperiod towards daylight hours where the crop's developmental requirements allow it. A photovoltaic array sized against annual energy rather than against the shape of demand will overstate what it can supply.",
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
            "An energy management programme is built by measurement, then by reduction, then by procurement — in that order, because acting out of order means guessing.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Sub-meter the major loads separately: lighting, cooling and dehumidification, pumping, post-harvest. A single incoming meter cannot tell you where to act.",
            "Record the interval demand curve for at least a full week in each season, not just monthly totals, so the peak and its cause are visible.",
            "Read the tariff in full, including demand charges, time-of-day bands and any power factor penalty. The tariff often points to the cheapest available saving.",
            "Verify actual canopy light levels against design intent with a quantum sensor on a grid, because uniformity losses are common and invisible.",
            "Check that cooling and dehumidification are not fighting one another, and that neither is running against an open door or an uncontrolled infiltration path.",
            "Correct pump and fan oversizing before considering exotic measures; throttled oversized equipment wastes energy continuously and quietly.",
            "Only then evaluate capital measures — fixture replacement, heat recovery, storage, generation — against the measured baseline rather than a manufacturer's claim.",
          ],
        },
        {
          kind: "flow",
          caption: "The energy chain from purchase to saleable product. Losses at each step compound, so an early loss is the most expensive kind.",
          steps: [
            { label: "Purchased energy", detail: "Electricity and any fuel, bought under a tariff that prices both quantity and peak demand." },
            { label: "Conversion", detail: "Drivers, motors and compressors convert supply into light, air movement and heat transfer, losing a fraction at each stage." },
            { label: "Delivery", detail: "Photons and conditioned air reach the crop, or fail to; uniformity and distribution losses occur here and are rarely measured." },
            { label: "Interception", detail: "The canopy intercepts a fraction of delivered light, depending on plant spacing, leaf area and stage." },
            { label: "Conversion to biomass", detail: "Intercepted light is converted to dry matter, limited by whichever of temperature, carbon dioxide, water and nutrition is scarcest." },
            { label: "Partitioning", detail: "Biomass is allocated between root, stem, leaf and fruit according to cultivar and stage." },
            { label: "Saleable yield", detail: "The fraction of biomass that meets grade and reaches the customer, which is what the energy was actually spent to produce." },
            { label: "Waste heat", detail: "Everything not stored as chemical energy leaves as heat, becoming either a cooling load or a recoverable resource." },
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
            "Energy reduction has a biological floor. A crop needs a light integral to produce, a temperature band to develop, and a vapour pressure deficit range to transpire and move calcium. Cutting energy below the level that maintains those conditions does not save money per unit of produce; it raises cost per unit, because output falls faster than consumption. The correct measure of an energy decision is kilowatt-hours per saleable kilogram, never kilowatt-hours alone.",
        },
        {
          kind: "text",
          value:
            "There are also interactions that make marginal energy more or less productive. Additional light returns diminishing yield if carbon dioxide, temperature or nutrition become limiting first. Conversely, if the environment is otherwise well matched, a marginal unit of light may return more than a marginal unit spent on cooling. These trade-offs are site-specific and stage-specific and cannot be settled from a table.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Spectrum choices trade efficacy against crop response",
          value:
            "Fixtures optimised purely for photon efficacy may not deliver the spectral composition a particular crop responds to for morphology, colour or secondary metabolites. Where a spectral choice is made for a quality reason, the energy cost of that choice should be stated explicitly rather than absorbed silently.",
        },
        {
          kind: "text",
          value:
            "On the engineering side, redundancy and energy efficiency pull against each other. Equipment sized with generous margin for reliability spends much of its life at part load, where it is often least efficient. Multiple smaller units with staged or variable-speed control usually give both better part-load efficiency and better resilience than one large machine, at a higher capital cost and greater maintenance burden.",
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
            "Report energy as kilowatt-hours per saleable kilogram, tracked per crop cycle, and treat that as the primary operational number.",
            "Separate the energy question from the power question; reducing consumption and reducing peak demand require different actions.",
            "Measure before acting. An untested assumption about where energy goes routinely sends investment to the wrong system.",
            "Include the cooling and dehumidification consequences in every lighting decision, and price them together.",
            "Verify canopy light uniformity on a schedule; efficacy on the invoice is worth nothing if the photons land in the aisle.",
            "Review the tariff whenever the load profile changes materially, because the optimal tariff for a farm is not fixed.",
            "Treat condensate as a recovered resource with its own quality requirements rather than as an effluent to be drained.",
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
          caption: "Frequent energy failures and where the cause usually sits",
          columns: ["Observation", "Usual underlying cause"],
          rows: [
            ["Electricity bill dominated by a demand charge", "All lighting zones switching simultaneously, with cooling starting at the same moment"],
            ["Humidity climbs during the photoperiod despite adequate cooling", "System sized for sensible load only; latent load from transpiration not accounted for"],
            ["Yield does not rise after a lighting upgrade", "Another factor — carbon dioxide, temperature or nutrition — was limiting before the extra light was added"],
            ["Cooling and heating both active in the same zone", "Control deadband too narrow, poor sensor placement, or uncontrolled infiltration"],
            ["Pumps consuming far more than design", "Oversized pump throttled by a valve, or excessive head from undersized pipework and fittings"],
            ["Photovoltaic array delivering less benefit than modelled", "Generation profile matched against annual energy rather than against the actual hourly load"],
            ["Heat recovery equipment idle", "No coincident heat demand; surplus and requirement occur at different times or seasons"],
          ],
          basis:
            "Diagnostic starting points drawn from general controlled-environment engineering practice, offered as places to investigate rather than as conclusions. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
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
            "Sub-meter from the day the facility is commissioned; retrofitting metering is far more expensive than installing it.",
            "Stagger photoperiods across zones to flatten peak demand and to spread the cooling and dehumidification load.",
            "Specify fixtures on delivered canopy photons and on efficacy at expected operating temperature, not on catalogue figures alone.",
            "Design the envelope before the plant: insulation and air-tightness reduce every conditioning load permanently and require no operating attention.",
            "Recover condensate and treat it as part of the water balance.",
            "Size cooling and dehumidification against the peak hour of the peak season, not against a daily average.",
            "Keep an energy baseline per crop cycle so that any change can be assessed against a like-for-like comparison.",
            "Where a heat surplus and a heat demand genuinely coincide, connect them; where they do not, do not buy the equipment.",
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
            "The advanced question in this field is not how to use less energy but when to use it. A farm with thermal mass, condensate storage and flexible photoperiod placement can shift a large share of its load in time. If the tariff or the grid's carbon intensity varies by hour, that flexibility has direct value, and it costs comparatively little to build in at the design stage compared with retrofitting storage later.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Photoperiod shifting has biological limits that are still being mapped",
          value:
            "Moving lighting hours to match cheap or low-carbon supply is attractive, but photoperiod carries developmental signals and night temperature interacts with respiration and quality. How far a given crop and cultivar tolerates such shifting without a yield or quality penalty is an open question and should be tested on site before it is designed around.",
        },
        {
          kind: "text",
          value:
            "A second advanced theme is integration. Cooling, dehumidification and heating are three names for the movement of heat and moisture within one thermodynamic problem. Systems designed as separate machines fight each other; systems designed as one — reheating with recovered condenser heat, using the dehumidification circuit as part of the cooling capacity — do more with less. This integration is a design-stage decision and is very difficult to add afterwards.",
        },
        {
          kind: "text",
          value:
            "The honest conclusion is that indoor farming is an energy conversion business that happens to produce vegetables. Sites with cheap, low-carbon, reliable electricity can support crops that sites without it cannot, and no amount of horticultural skill compensates for the difference. Energy is therefore a siting decision as much as an operating one, and it should be settled before the first drawing is made.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Almost all electricity entering a growing space leaves as heat, so lighting choices are simultaneously cooling choices.",
    "Latent load from transpiration is a major demand in closed farms and is missed by any system sized only for temperature.",
    "Efficacy in photons per joule is not the same as effectiveness in saleable yield per kilowatt-hour; only the second pays.",
    "A farm buys both energy and peak power, and staggering photoperiods across zones addresses the second at little cost.",
    "Solar generation is mismatched with a long photoperiod unless storage, grid import or photoperiod placement closes the gap.",
    "Energy performance should be reported per saleable kilogram, because cutting consumption below the crop's requirement raises unit cost.",
  ],
  related: ["lighting", "climate-control", "economics", "sustainable"],
  furtherReading: [
    {
      organisation: "International Energy Agency",
      description: "Analysis of electricity systems, efficiency and the carbon intensity of supply.",
      url: "https://www.iea.org",
    },
    {
      organisation: "Bureau of Energy Efficiency, Government of India",
      description: "Guidance and programmes on industrial and commercial energy efficiency and metering practice.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Programme material on energy use in agriculture and protected cultivation.",
      url: "https://www.fao.org/plant-production-protection/en",
    },
  ],
};
