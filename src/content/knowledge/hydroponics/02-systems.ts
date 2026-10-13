import type { KnowledgeArea } from "../types";

export const systems: KnowledgeArea = {
  number: "02",
  slug: "systems",
  title: "Hydroponic Systems",
  navSummary: "The six system families, what each one actually delivers, and what it costs to keep running.",
  summary:
    "Every hydroponic system is a different answer to one question: how do water, dissolved nutrients and oxygen reach the root surface, and what happens when the delivery stops. The six commercial families differ in capital cost, oxygen supply, failure tolerance, crop fit and labour, and none of them is better than the others in the abstract.",
  difficulty: "beginner",
  topics: ["systems", "engineering", "production"],
  tags: ["nft", "deep water culture", "ebb and flow", "drip irrigation", "aeroponics", "system design"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-18",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "There are six common ways to get nutrient solution to a root. Some hold water around the root all the time, some pass it by in a thin stream, some wet the root and then let it drain, and one sprays it as mist. The choice sets how much the system costs to build, how much oxygen the roots get, how long the crop survives a power cut, and which crops it suits.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "A hydroponic system is a delivery mechanism. Behind the differences in pipework and trays, each family is making the same three supplies available to a root — water, dissolved ions and oxygen — and trading them off against one another. Water and oxygen compete for the same space at the root surface, so a system that is generous with one is usually careful with the other.",
        },
        {
          kind: "text",
          value:
            "Six families cover almost all commercial practice: wick, deep water culture, nutrient film technique, ebb and flow, drip into a substrate, and aeroponics. Hybrids exist and are common, but they are recombinations of these, and understanding what each family does badly is more useful than memorising what each does well.",
        },
        {
          kind: "text",
          value:
            "The correct system for a site follows from the crop, the length of its cycle, the reliability of the power supply, the availability of skilled labour and the quality of the source water. It does not follow from which family a supplier happens to sell.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why the choice binds everything downstream",
      blocks: [
        {
          kind: "text",
          value:
            "The system family is the least reversible decision on a farm. Nutrient recipes can be changed between crops, lighting can be retrofitted, staff can be trained. Channels, tanks, gutters and their supporting structure are fixed capital, and they set the plant spacing, the irrigation strategy, the sanitation regime and the labour pattern for years.",
        },
        {
          kind: "text",
          value:
            "The choice also sets the shape of failure. Every system fails eventually; the difference is what the grower has when it does. A substrate-based system holds a reserve of water and nutrient in the medium, so a pump failure at midday is a problem measured in hours. A thin-film channel holds almost nothing, so the same failure is measured in tens of minutes on a hot afternoon. That single difference drives the alarm design, the standby pump policy and the generator decision more than any efficiency figure.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Buy the failure mode, not the brochure",
          value:
            "System comparisons are usually written around water-use efficiency and yield potential. The variables a grower actually lives with are how quickly the crop is damaged when a component stops, how long a cleaning turnaround takes and how many people are needed at harvest.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Recirculating and run-to-waste" },
        {
          kind: "text",
          value:
            "Any family can be plumbed to return drain solution to the tank or to discard it. Recirculating systems use far less water and fertiliser but accumulate whatever the crop does not take up, including sodium from the source water, and they spread a root pathogen through the whole crop once one plant is infected. Run-to-waste systems avoid both problems and pay for it in inputs and in effluent that has to go somewhere legally acceptable.",
        },
        { kind: "subheading", value: "Continuous and intermittent supply" },
        {
          kind: "text",
          value:
            "Deep water culture and nutrient film technique keep solution in contact with the root continuously. Ebb and flow, drip and aeroponics wet the root and then let it drain or dry. Intermittent supply is how a system gives roots access to air; the cost is that the irrigation interval becomes a control variable the grower has to get right for the crop, the medium and the weather of the day.",
        },
        { kind: "subheading", value: "Where the buffer lives" },
        {
          kind: "text",
          value:
            "Every system stores water somewhere: in a tank, in a raft pond, in a substrate, or nowhere at all. That storage is the crop's insurance against interruption and also its inertia against change. A large stored volume is slow to move in temperature and pH, which is stabilising, and slow to correct when a mistake has been dosed into it, which is not.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Oxygen solubility falls as water warms",
          value:
            "Warm solution holds less dissolved oxygen while root respiration rises with temperature. Both effects run the same way, which is why root-zone oxygen problems in standing-water systems concentrate in the hottest part of the season.",
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
            "Two calculations recur across every family: how long the stored solution can support the crop without replenishment, and how much solution has to move through a channel or emitter to keep the root zone in range.",
        },
        {
          kind: "formula",
          name: "Reservoir turnover time",
          expression: "T = V / Q",
          terms: [
            { symbol: "T", meaning: "Time for a volume equal to the reservoir to pass through the system", unit: "hours" },
            { symbol: "V", meaning: "Working volume of solution in the reservoir", unit: "litres" },
            { symbol: "Q", meaning: "Circulation flow rate delivered by the pump", unit: "litres per hour" },
          ],
          example:
            "Consider a hypothetical recirculating bench holding 600 litres of working solution with a pump moving 1200 litres per hour. Turnover time is 0.5 hours, so any dosing correction made at the tank reaches the far end of the crop within roughly that interval, and any contamination does too.",
          limitations:
            "Turnover describes mixing and correction speed, not adequacy of supply; a fast turnover through an undersized channel still starves the last plants in the run. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "formula",
          name: "Crop survival window after supply failure",
          expression: "t_safe = W_available / U_peak",
          terms: [
            { symbol: "t_safe", meaning: "Time before the crop enters water stress with no delivery", unit: "hours" },
            { symbol: "W_available", meaning: "Plant-available water held in substrate, film or pond per plant", unit: "millilitres per plant" },
            { symbol: "U_peak", meaning: "Peak hourly water uptake per plant under the day's conditions", unit: "millilitres per plant per hour" },
          ],
          example:
            "Consider a hypothetical fruiting crop in a substrate block holding 900 millilitres of plant-available water per plant, transpiring at a peak of 150 millilitres per hour. The window is about six hours, which is a maintenance decision. The same crop in a thin film with a few millilitres at the root has a window measured in minutes, which is an alarm and standby-pump decision.",
          limitations:
            "Peak uptake changes hour by hour with radiation, vapour pressure deficit and canopy size, so the window is shortest exactly when a failure is most likely. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "text",
          value:
            "Channel slope and film depth in nutrient film technique are the other classic fundamentals. Too little slope and solution pools, deepens and loses its oxygen exchange; too much and the film thins to the point where roots at the downstream end sit in wetted air rather than solution. Long runs compound both effects, because the solution arriving at the last plant has already had oxygen stripped and nutrients removed by every plant upstream.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "The six families",
      blocks: [
        { kind: "subheading", value: "Wick" },
        {
          kind: "text",
          value:
            "A passive system in which a wick draws solution from a reservoir into a substrate by capillary action. It has no pump, no power requirement and no moving parts, and it cannot supply water fast enough for a crop with a high transpiration demand. Its role is demonstration, teaching and very small low-demand plantings, not commercial production.",
        },
        { kind: "subheading", value: "Deep water culture" },
        {
          kind: "text",
          value:
            "Roots hang into a body of aerated solution, usually with the plants supported on floating rafts over a shallow pond. The large volume is thermally and chemically stable and the labour pattern is simple, since rafts can be moved and harvested off the pond. The whole design depends on continuous aeration, and it shares one water body across the entire crop, so a root pathogen has an uninterrupted path from any plant to every other.",
        },
        { kind: "subheading", value: "Nutrient film technique" },
        {
          kind: "text",
          value:
            "A shallow stream of solution runs down a sloped channel over a mat of roots, with the upper root surface in humid air. Oxygen access is good and water use is low, and there is essentially no stored water in the channel. It suits fast, light, shallow-rooted crops and is a poor fit for heavy fruiting plants whose root mass eventually dams the channel.",
        },
        { kind: "subheading", value: "Ebb and flow" },
        {
          kind: "text",
          value:
            "A tray or bed of substrate is periodically flooded from below and then drained back to the tank. The drain stroke pulls air into the medium behind the receding water, which is an effective and mechanically simple way to aerate. It requires reliable drainage, is sensitive to a blocked overflow, and floods every container in a bed from the same water, which again links plant health across the bed.",
        },
        { kind: "subheading", value: "Drip into substrate" },
        {
          kind: "text",
          value:
            "Individual emitters deliver measured solution to each plant in an inert or organic medium, with drain either recovered or discarded. It is the dominant method for long-cycle fruiting crops because it gives per-plant control, holds a real water reserve and isolates plants from one another. It carries the highest maintenance burden of the six: emitters block, lines develop biofilm, and uniformity across a long block has to be measured rather than assumed.",
        },
        { kind: "subheading", value: "Aeroponics" },
        {
          kind: "text",
          value:
            "Roots are suspended in an enclosed chamber and wetted by intermittent mist. Oxygen availability is the highest of the six and water use the lowest, and root inspection is direct. It is also the least forgiving: nozzles block, misting intervals are short, and a bare root with no substrate reserve desiccates quickly when the cycle stops. It demands clean water, filtration and disciplined maintenance.",
        },
        {
          kind: "table",
          caption: "Comparison of the six families across the variables that decide a site. These are relative characteristics, not a ranking.",
          columns: ["Family", "Capital cost", "Oxygen delivery", "Failure tolerance", "Crop fit", "Labour"],
          rows: [
            ["Wick", "Lowest", "Limited, set by substrate porosity", "High, nothing to fail", "Low-demand small plants only", "Very low, but not scalable"],
            ["Deep water culture", "Low to moderate", "Depends entirely on aeration equipment", "Moderate; large volume buys time, aeration loss does not", "Leafy greens, herbs, short cycles", "Low per plant, raft handling at harvest"],
            ["Nutrient film technique", "Moderate", "Good, thin film with roots in humid air", "Low, almost no stored water", "Fast shallow-rooted crops", "Moderate, channel cleaning between crops"],
            ["Ebb and flow", "Moderate", "Good, air drawn in on each drain stroke", "Moderate, substrate retains a reserve", "Wide, including nursery and potted work", "Moderate, drainage and overflow checks"],
            ["Drip into substrate", "Moderate to high", "Set by substrate air-filled porosity and drain fraction", "High, medium holds hours of reserve", "Long-cycle fruiting crops", "Highest, emitter and line maintenance"],
            ["Aeroponics", "Highest", "Highest, roots mostly in air", "Lowest, no reserve at the root", "High-value crops and propagation", "High, nozzle and filtration discipline"],
          ],
          basis:
            "Qualitative comparison of system characteristics as generally described in horticultural practice, not measured performance from any installation. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
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
            "Selection is a process of elimination against site constraints rather than a search for the best option.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Fix the crop and its cycle length first. A twelve-month tomato crop and a thirty-day lettuce crop have almost nothing in common as engineering loads.",
            "Assess the power supply honestly. Frequent or long outages rule out families with no stored water unless standby power is genuinely funded.",
            "Test the source water. High sodium or high alkalinity pushes a recirculating design towards periodic dumping, which changes the economics of the choice.",
            "Estimate available labour and skill. Drip and aeroponics reward maintenance discipline and punish its absence.",
            "Decide recirculating or run-to-waste, and confirm that effluent from a run-to-waste design can be lawfully and practically disposed of.",
            "Check the turnaround: how long the house is empty between crops for cleaning, and whether the chosen family can be sanitised in that window.",
            "Only then select components, and size the pump for the whole run rather than for the first bench.",
          ],
        },
        {
          kind: "flow",
          caption: "The solution path common to all pumped families. Each junction is a place a system can be designed well or badly.",
          steps: [
            { label: "Reservoir", detail: "Stores mixed solution, sets thermal and chemical inertia, and is where dosing and monitoring happen." },
            { label: "Pump and filtration", detail: "Moves solution and removes particulates that would otherwise block emitters or nozzles." },
            { label: "Distribution manifold", detail: "Splits flow between benches or blocks; uniformity problems usually originate here." },
            { label: "Delivery to root", detail: "Channel, flood, emitter or mist. This is the step that defines the family." },
            { label: "Root zone", detail: "Where solution, air and root surface meet, and the only place the crop responds to." },
            { label: "Drain collection", detail: "Carries away excess solution; its volume and conductivity report what the root zone did with the supply." },
            { label: "Treatment or discard", detail: "Filtration, disinfection and correction before return, or controlled disposal in a run-to-waste design." },
            { label: "Return to reservoir", detail: "Closes the loop in a recirculating system, along with whatever the crop failed to remove." },
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
            "Root architecture is the first biological filter. A crop that builds a dense fibrous mat will eventually obstruct a narrow channel; a crop with a heavy taproot-like structure needs volume around it. Cycle length is the second: a system that must be cleaned between crops is far more attractive when there are eight turnovers a year than when the crop occupies the house for eleven months.",
        },
        {
          kind: "text",
          value:
            "On the engineering side, uniformity is usually the hidden constraint. A design that performs well on one bench can lose several per cent of delivery per metre along a long manifold, and the plants at the end of the run report it as poor growth rather than as a plumbing fault. Pressure-compensating emitters, looped manifolds and shorter runs are all ways of buying uniformity, and all of them cost capital.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Shared water is shared risk",
          value:
            "Any family that returns drain to a common tank couples the health of every plant to every other. Where a root pathogen is a realistic threat, the choice between recirculating and run-to-waste is a disease-management decision before it is a water-efficiency one.",
        },
        {
          kind: "text",
          value:
            "Thermal behaviour is often ignored at selection. A large open pond gains heat slowly but also sheds it slowly, and in a hot climate it can sit above the crop's root-temperature range for weeks. A small tank in a shaded plant room follows ambient conditions closely but can be cooled cheaply. Neither is inherently better; they demand different equipment.",
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
            "Record drain volume and drain conductivity as routinely as tank readings. In substrate systems the drain is the only direct report on the root zone.",
            "Measure delivery uniformity at commissioning and periodically after, using collected volumes from emitters or channels at the near, middle and far positions.",
            "Define the alarm set for the family in use. A standing-water system needs an aeration alarm; a film or mist system needs a flow alarm with a very short tolerance.",
            "Clean channels, trays and lines between crops on a written procedure, not on judgement, and record that it was done.",
            "Keep spare pumps, nozzles and emitters on site in proportion to how quickly their failure damages the crop.",
            "Review each crop cycle for the failures that actually occurred and adjust the maintenance interval, rather than the maintenance intention.",
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
          caption: "Recurring system faults and where the cause usually sits",
          columns: ["Observation", "Usual underlying cause"],
          rows: [
            ["Growth declines steadily along a channel from inlet to outlet", "Nutrient depletion and oxygen loss along the run, or a run that is simply too long"],
            ["Roots brown and slimy in a raft pond", "Aeration failure or solution temperature above the crop's root range"],
            ["Some plants in a drip block wilt while neighbours are saturated", "Emitter blockage or pressure variation across the manifold"],
            ["Flood tray drains slowly and roots stay wet", "Blocked drain or overflow, or a substrate that has slumped and lost porosity"],
            ["Aeroponic chamber shows uneven root development", "Nozzle blockage or a mist pattern that leaves part of the chamber dry"],
            ["Recirculating conductivity climbs while the crop looks starved", "Accumulation of ions the crop takes up slowly, often sodium from the source water"],
          ],
          basis:
            "Diagnostic starting points drawn from common horticultural practice, not conclusions about any particular installation. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
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
            "Commission with clean water, then with solution and no crop, and measure uniformity before the first transplant.",
            "Size the reservoir for the peak transpiration day, not the average one, and leave headroom for correction.",
            "Filter ahead of every emitter or nozzle, and treat the filter as a scheduled consumable.",
            "Keep the propagation area on a separate system and separate water from production.",
            "Slope, support and level channels and trays properly at installation; a structural error here cannot be corrected by management later.",
            "Document the intended irrigation strategy for each crop stage so that decisions during a hot week are a lookup rather than an improvisation.",
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
            "Hybrid designs are where most practical progress happens. Drip into a substrate over a recovery gutter with partial disinfection of the return stream, or deep water culture with a chilled and filtered side loop, take the strong property of one family and the buffer of another. The engineering question is which failure mode the hybrid inherits, because it usually inherits both.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Disinfection of recirculated solution",
          value:
            "How far a treated return stream reduces root disease pressure without disturbing beneficial root-zone biology remains an active question, and the answer appears to depend on the treatment method, the pathogen and the crop.",
        },
        {
          kind: "text",
          value:
            "The other advanced question is automation depth. Sensor-driven irrigation based on substrate water content or drain fraction can outperform a clock, but only where the sensors are calibrated to the specific medium and where a failed sensor has a defined fallback. An automated system without that fallback replaces a slow human error with a fast machine one.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Six families cover commercial practice, and each trades water availability against oxygen availability at the root in a different way.",
    "The most useful comparison variable is failure tolerance: how long the crop survives when delivery stops.",
    "Systems with no stored water at the root demand alarms and standby power; substrate systems buy hours of reserve instead.",
    "Recirculating designs save water and fertiliser but couple every plant's health and accumulate what the crop does not take up.",
    "Uniformity across a block is a design property that must be measured at commissioning, not assumed from the specification.",
    "The system family follows from crop, cycle length, power reliability, labour and source water, not from supplier preference.",
  ],
  related: ["fundamentals", "nft", "dwc", "drip-systems"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Programme material on protected cultivation and soilless growing systems.",
      url: "https://www.fao.org/plant-production-protection/en",
    },
    {
      organisation: "Wageningen University and Research",
      description: "Public material on greenhouse horticulture systems and irrigation strategy.",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute and extension publications on protected cultivation suited to Indian conditions.",
    },
  ],
};
