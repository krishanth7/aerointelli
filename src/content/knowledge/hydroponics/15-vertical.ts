import type { KnowledgeArea } from "../types";

export const vertical: KnowledgeArea = {
  number: "15",
  slug: "vertical",
  title: "Vertical Hydroponics",
  navSummary: "Stacking growing area above floor area, and what light, air and access charge for the privilege.",
  summary:
    "Vertical hydroponics multiplies growing area within a fixed footprint by stacking tiers or standing towers. The multiplication is real for floor area and only conditionally real for yield, because every added tier needs its own light, its own air movement and its own access. The design question is not how many tiers fit, but how many tiers can be given equal conditions and still be worked.",
  difficulty: "intermediate",
  topics: ["systems", "engineering", "production", "lighting", "economics"],
  tags: ["vertical farming", "stacked tiers", "towers", "growing area", "footprint", "uniformity", "layout"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-14",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Instead of one layer of plants on the floor, the plants are arranged in several layers one above another, or on upright columns. The floor area stays the same while the area actually planted goes up several times. Each layer still needs its own light, its own moving air and a way for a person to reach it, and those three requirements are what limit how far the stacking can go.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Vertical growing is a spatial strategy rather than a hydroponic technique. The nutrient delivery inside a vertical system is still one of the familiar families: a shallow film in a stacked channel, a thin irrigated substrate on a rack, a recirculating trickle down a tower. What changes is geometry, and geometry changes what has to be supplied and how it has to be distributed.",
        },
        {
          kind: "text",
          value:
            "Two layouts dominate. Horizontal racks stack shelves of channels or trays one above another, each shelf lit by fixtures mounted under the shelf above it. Towers stand plants in ports on a vertical column, lit either by the sun or by fixtures hung between the columns, with solution trickling down through the column and collected at the base. They fail in different ways and suit different crops, and mixing them into a single mental model of vertical farming is where most planning errors begin.",
        },
        {
          kind: "text",
          value:
            "The commercial motivation is straightforward. Where land or building floor space is expensive, or where the site is a shed or a room rather than a field, the ratio of growing area to floor area is the ratio that determines whether the site can carry its costs at all.",
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
            "The distinction between growing area and floor area is the single most misused number in this subject. A five-tier rack occupying ten square metres of floor gives fifty square metres of growing area, and it is entirely fair to say so. It is not fair to carry that factor of five through to yield, water use per unit produced, energy per unit produced or labour per unit produced without checking each one separately, because the five tiers do not share a single supply of light, air or attention — they each need their own.",
        },
        {
          kind: "text",
          value:
            "It matters again for capital planning. Racking, fixtures, distribution pipework, controls and the structure to carry the load all scale roughly with growing area, while the building envelope scales with floor area. Vertical growing therefore reduces one cost and increases another, and whether the trade is favourable depends on the price of the floor and the value of the crop, not on the number of tiers.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Tiers multiply area, not environment",
          value:
            "Adding a tier adds growing area but no light, no air movement and no cooling. Each of those must be supplied to the new tier deliberately, and each carries capital and running cost proportional to the area added.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Stacking geometry against light delivery" },
        {
          kind: "text",
          value:
            "In a horizontal rack the vertical pitch between tiers is a compromise between three things: the height the crop needs at harvest, the distance the fixture needs to spread its light evenly across the tier below, and the clearance a worker needs to reach in. Reducing the pitch fits more tiers into the same height but forces the fixture closer to the canopy, which makes uniformity harder and puts more heat near the leaves. Increasing it improves both and costs a tier.",
        },
        {
          kind: "text",
          value:
            "Towers invert the problem. A tower is lit from the side, so the plants face the light source rather than sitting under it, and illumination varies with height and with which side of the column a port is on. Rotating towers, moving them through a lit zone, or lighting from several sides are all attempts to even out that variation, and each adds mechanism or fixtures.",
        },
        { kind: "subheading", value: "Uniformity between tiers" },
        {
          kind: "text",
          value:
            "The practical measure of a vertical system is how similar the top tier and the bottom tier are. Differences arise in light, because fixtures and reflectors differ in age and mounting; in temperature, because warm air rises and the upper tiers of an enclosed rack sit in it; in air movement, because a fan array designed for an open room does not automatically reach into a shelf; and in solution, because a distribution manifold delivers unequally to different heights unless it is designed not to.",
        },
        { kind: "subheading", value: "Growing area, floor area and working area" },
        {
          kind: "text",
          value:
            "A third area is usually forgotten. Aisles, gangways, mobile-rack clearance, lifts and trolleys, propagation space, harvest and packing space and plant rooms all occupy floor and produce nothing. A layout that maximises growing area per unit of floor by narrowing aisles usually pays for it in labour time per plant, and labour time per plant is one of the largest recurring costs in leafy production.",
        },
        {
          kind: "flow",
          caption: "Where the multiplication is spent. Each step consumes part of the nominal area gain, which is why the delivered gain is always smaller than the tier count.",
          steps: [
            { label: "Nominal tier multiplication", detail: "Number of tiers times the plan area of the growing surface, before anything else is considered." },
            { label: "Aisle and access deduction", detail: "Gangways, clearance for trolleys or lifts and space to withdraw a tray reduce the plan area available for growing." },
            { label: "Headroom and pitch limit", detail: "Building clear height divided by the minimum workable pitch caps the tier count regardless of intent." },
            { label: "Light delivery per tier", detail: "Each tier needs its own fixtures at its own intensity; the light bill scales with growing area, not floor area." },
            { label: "Airflow per tier", detail: "Each tier needs air moved across its canopy to keep the boundary layer thin and humidity from stagnating." },
            { label: "Heat removal", detail: "All fixture and pump energy in an enclosed stack ends as heat that must be removed at the rate it is produced." },
            { label: "Access and labour", detail: "Every tier must be reachable for transplanting, inspection and harvest, at a time cost per tier." },
            { label: "Delivered growing area", detail: "What remains is the area that can actually be planted and worked under equal conditions." },
          ],
        },
      ],
    },
    {
      id: "technical-fundamentals",
      heading: "Technical fundamentals",
      blocks: [
        {
          kind: "formula",
          name: "Growing area ratio",
          expression: "GAR = A_grow / A_floor",
          terms: [
            { symbol: "GAR", meaning: "Growing area ratio, planted area achieved per unit of building floor area", unit: "dimensionless" },
            { symbol: "A_grow", meaning: "Total planted surface area summed across all tiers", unit: "m2" },
            { symbol: "A_floor", meaning: "Gross floor area of the room, including aisles and service space", unit: "m2" },
          ],
          example:
            "Consider a hypothetical room of 200 m2 gross floor area in which racks occupy 110 m2 in plan, at five tiers. The planted area is 550 m2 and the growing area ratio is 550 divided by 200, or 2.75 — appreciably less than the tier count of five, because aisles, service space and plant rooms consume the difference. Quoting five would overstate the site's capacity by more than eighty per cent.",
          limitations:
            "The ratio describes area only. It says nothing about whether the tiers receive equal light, air or temperature, and nothing about yield, because a tier that cannot be given adequate conditions still counts as area. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "formula",
          name: "Tier count from clear height",
          expression: "n = floor((H - h_service) / p)",
          terms: [
            { symbol: "n", meaning: "Number of tiers that physically fit", unit: "count" },
            { symbol: "H", meaning: "Clear internal height available to the rack", unit: "m" },
            { symbol: "h_service", meaning: "Height reserved for services, ducts, sprinklers and the base frame", unit: "m" },
            { symbol: "p", meaning: "Vertical pitch between tiers, comprising crop height, fixture standoff and working clearance", unit: "m" },
          ],
          example:
            "Consider a hypothetical shed with 4.2 m clear height, 0.7 m reserved for services and base frame, and a pitch of 0.6 m set by a short leafy crop plus fixture standoff. That gives 3.5 divided by 0.6, or five tiers. Raising the pitch to 0.7 m to improve light uniformity and reach reduces it to five as well, and to 0.8 m reduces it to four — which is how a modest change in crop height removes a fifth of the nominal capacity.",
          limitations:
            "Pitch is not a free parameter: it is bounded below by the crop's harvest height, by the distance the fixture needs to spread evenly, and by what a worker can physically reach into. Local fire, sprinkler and access requirements may also fix h_service. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Structure is a real constraint, not a formality",
          value:
            "A tier of channels carrying water, substrate and crop is a substantial distributed load, and the whole rack is a load path down to the floor slab. Racking capacity, slab loading and, where mobile racks are used, rail and drive loads all need to be established before the tier count is fixed.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Rack and tower layouts compared by the constraints each imposes",
          columns: ["Aspect", "Horizontal stacked racks", "Vertical towers"],
          rows: [
            ["Light delivery", "From fixtures under the tier above, close to the canopy", "From the side, varying with height and orientation of the port"],
            ["Uniformity problem", "Between tiers, and across the width of each tier", "Along the height of the column and around its circumference"],
            ["Crop suitability", "Short crops with a flat canopy", "Compact crops that hold their own weight on a port"],
            ["Access", "Every tier must be reachable; upper tiers need a lift or platform", "Whole tower can be taken to a workstation if it is movable"],
            ["Solution delivery", "Manifold to each tier; balancing between heights required", "Trickle from the top of each column, collected at the base"],
            ["Airflow", "Must be driven into each shelf; stagnation is easy", "Easier between columns, but the inner canopy can still stagnate"],
            ["Structure", "Distributed load on shelves and uprights", "Point loads and overturning moment on the column base"],
          ],
          basis:
            "A comparison of design constraints, not a performance ranking, and not measured output. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        { kind: "subheading", value: "Why short crops and why not fruiting crops" },
        {
          kind: "text",
          value:
            "Vertical layouts suit crops that are short, that finish quickly, that hold value per unit of area rather than per plant, and that are satisfied by a moderate daily light integral. Leafy greens, herbs, microgreens and propagation material fit all four. A short crop allows a small pitch, so more tiers fit; a quick cycle spreads the capital across more crops per year; a moderate light requirement keeps the electrical load per tier manageable.",
        },
        {
          kind: "text",
          value:
            "Fruiting crops fail most of those tests at once. A tomato or capsicum plant is tall and indeterminate, so it cannot live under a shelf at all without being trained into a shape it does not naturally take. It carries a high light requirement, so each tier would need far more installed lighting power, and that power arrives as heat inside a stack that is already hard to ventilate. It has a long cycle, so the capital turns over slowly. It also needs pollination and repeated detailed handwork at every truss, which multiplies the access problem by the number of tiers. The result is that fruiting crops are grown vertically only in specific research or trial contexts, and in commercial practice remain a single-layer greenhouse or substrate crop.",
        },
        {
          kind: "text",
          value:
            "There is a middle ground that is often overlooked: single-layer greenhouse production with a vertically trained crop. A high-wire tomato crop is vertical in the sense that matters biologically — the canopy occupies height and intercepts light through its depth — without any of the stacking problems, because the sun is above and the plant grows into it.",
        },
      ],
    },
    {
      id: "practical-knowledge",
      heading: "Practical knowledge",
      blocks: [
        {
          kind: "list",
          ordered: true,
          items: [
            "Fix the crop first. Crop height at harvest sets the pitch, and pitch sets the tier count; deciding the tier count first and then looking for a crop that fits is the common and expensive inversion.",
            "Measure the real clear height, allowing for beams, ducts, sprinkler heads and lighting suspension, before laying out any racking.",
            "Lay out aisles for the method of access that will actually be used, including trolleys, lifts or mobile-rack travel, and check that a full tray can be withdrawn without fouling anything.",
            "Design the solution manifold so that each tier can be balanced and isolated, and fit a valve and a flow indicator per tier rather than per rack.",
            "Plan airflow per tier from the start. Retrofitting air movement into a built stack is far harder than designing the fan positions with the rack.",
            "Calculate the heat load from the lighting and pump power that will run inside the enclosure, and check the cooling capacity against it before ordering fixtures.",
            "Commission one rack fully — light, air, solution and access — and measure top against bottom tier before replicating the design across the room.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Measure the tiers against each other, not against a target",
          value:
            "The useful commissioning test is the difference between tiers, at several points across each tier, for light intensity, air speed, temperature and humidity. A stack that is uniformly slightly wrong can be corrected with one setting; a stack that varies between tiers cannot.",
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
            "Air movement is the constraint that most often surprises people coming from greenhouse growing. In an open house, buoyancy, ventilation and canopy height combine to move air past leaves without much deliberate effort. Inside a shelf with a fixture above it and a tray below it, there is no natural circulation path, and still air around a leaf thickens the boundary layer, slows transpiration, slows carbon dioxide supply to the stomata, and lets humidity build in the canopy. The consequences show up as slow growth, soft tissue and calcium-related disorders that look like nutrition problems and are not.",
        },
        {
          kind: "text",
          value:
            "Heat is the second. Every watt of electricity delivered to a fixture, a pump or a fan inside the enclosure becomes heat inside the enclosure. In a stack, that heat is produced close to the canopy and has a poor natural escape route, so the cooling system is not a comfort system but a continuous process load sized against the installed electrical load.",
        },
        {
          kind: "text",
          value:
            "Access has a biological consequence as well as a labour one. If the top tier is awkward to reach, it gets inspected less often, and a pest or disease outbreak on it is found later. Layouts that make some tiers materially harder to work will produce a crop that is materially less well managed on those tiers, and the effect compounds over a season.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Yield per tier is not the yield of a single-layer crop",
          value:
            "It is reasonable to assume a tier yields less than an equivalent area of well-lit single-layer growing unless the tier has been given equal light, air and temperature. Planning on equality without having measured it is the most common source of overstated capacity.",
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
            "Report growing area and floor area separately and always state which one a figure refers to.",
            "Monitor at least the top and bottom tiers of each rack independently for temperature, humidity and light, rather than taking a single room reading.",
            "Rotate trays or batches between tiers where the tiers are known to differ, so a systematic difference does not fall on the same crop every time.",
            "Schedule inspection so that hard-to-reach tiers are examined on the same interval as easy ones, and record that they were.",
            "Balance the solution manifold periodically; a partially blocked or throttled tier feed changes slowly and is easy to miss.",
            "Track energy per unit of production rather than per unit of floor, since floor area is the number vertical layouts flatter.",
            "Keep the rack layout drawing current, including which fixture serves which tier, because fixture replacement over time is a common source of drift in uniformity.",
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
          caption: "Recurring problems in vertical layouts and where the cause usually sits",
          columns: ["Symptom", "Usual underlying cause"],
          rows: [
            ["Top tier consistently faster or softer than lower tiers", "Warm air accumulating at the top of the stack, or differences in fixture output"],
            ["Edges of a tier weaker than the middle", "Light falloff at the fixture's edge, with no overlap or reflector correction"],
            ["Humidity and condensation inside a shelf", "No driven airflow through the tier; the shelf is a still-air pocket"],
            ["Calcium-related disorders in leafy crops", "Weak transpiration from still air, not a shortage of calcium in the solution"],
            ["One tier drying or flooding relative to the others", "Unbalanced manifold, partially closed valve, or a blockage in that tier's feed"],
            ["Cooling unable to hold setpoint at full lighting", "Heat load calculated from floor area rather than installed electrical load"],
            ["Pest outbreak found late on upper tiers", "Access difficulty translating into less frequent inspection"],
            ["Actual output far below the tier multiple", "Growing area ratio quoted as the tier count, ignoring aisles, services and unequal tiers"],
          ],
          basis:
            "Diagnostic starting points drawn from common controlled-environment practice, offered as places to look rather than conclusions. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
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
            "Set the pitch from crop height plus fixture standoff plus working clearance, and treat the resulting tier count as an output rather than a target.",
            "Verify slab and racking load capacity for the fully wetted, fully cropped condition, not the empty one.",
            "Provide driven air movement to every tier and verify air speed at the canopy in each one at commissioning.",
            "Size cooling and dehumidification against installed lighting and pump power, with margin for the hottest expected outside condition.",
            "Fit isolation and balancing on each tier's solution feed and drain so a single tier can be worked on without stopping the rack.",
            "Keep aisle width sufficient for the actual harvest method; recovering lost labour productivity later is harder than losing one row of racking now.",
            "Design for cleaning between crops, including how a tier is emptied, washed and drained without wetting the fixtures below it.",
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
            "Mobile racking is the main way of recovering aisle area. Racks run on rails and are pushed together, with only one aisle open at a time, which can raise the growing area ratio substantially. It costs drive mechanism, rail and slab work, and it constrains operations, because only one aisle is accessible at any moment and services to a moving rack must be flexible. It suits crops with infrequent handling and hurts crops that need daily attention at many points.",
        },
        {
          kind: "text",
          value:
            "Moving-gutter and conveyor systems address a different inefficiency. A crop occupies a fixed spacing for its whole cycle even though it only fills that spacing near the end, so a system that starts trays close together and spreads them as the crop grows can raise the average occupancy of the growing area considerably. The cost is mechanical complexity and a layout that has to be designed around the movement from the start.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Spectrum and geometry are still being separated",
          value:
            "How far spectral adjustment can compensate for the compact geometry a stack forces on a plant — shorter internodes, flatter canopies, limited light penetration into the canopy — remains an active area of horticultural research, and results reported for one crop and cultivar do not transfer readily to another.",
        },
        {
          kind: "text",
          value:
            "The unifying advanced question is allocation. Given a fixed capital budget and a fixed electrical supply, the choice between another tier, better light uniformity on existing tiers, and better air and heat handling is a real trade with a site-specific answer. A tier that cannot be given conditions equal to the others adds capital, energy and labour while adding less than its share of output, and is often the worse of the three purchases.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Vertical growing multiplies area within a footprint; it does not multiply light, air movement, cooling or attention, each of which must be supplied per tier.",
    "Growing area, floor area and working area are three different numbers, and the tier count overstates the delivered gain once aisles and services are deducted.",
    "Vertical pitch is set by crop height, fixture standoff and human reach, and the tier count follows from it rather than the other way round.",
    "Still air inside a shelf is a first-order problem, producing weak transpiration, humidity build-up and disorders that mimic nutrition faults.",
    "All electrical power consumed inside an enclosed stack becomes heat close to the canopy, so cooling is sized against installed load, not floor area.",
    "Short, quick, moderate-light crops suit stacking; tall high-light fruiting crops rarely do, because pitch, light load, cycle length and handwork all work against them.",
  ],
  related: ["lighting", "farm-design", "climate-control", "indoor-farming"],
  furtherReading: [
    {
      organisation: "International Society for Horticultural Science",
      description: "Working groups and symposium programmes covering vertical farming and controlled-environment horticulture.",
      url: "https://www.ishs.org",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Programme material on urban and peri-urban horticulture and protected cultivation.",
      url: "https://www.fao.org/plant-production-protection/en",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute and extension publications on protected cultivation and controlled-environment horticulture in India.",
    },
  ],
};
