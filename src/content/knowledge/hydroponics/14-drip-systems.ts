import type { KnowledgeArea } from "../types";

export const dripSystems: KnowledgeArea = {
  number: "14",
  slug: "drip-systems",
  title: "Drip and Substrate Systems",
  navSummary: "Irrigating an inert substrate one measured shot at a time, and reading the drain to find out whether it worked.",
  summary:
    "Drip irrigation into an inert substrate is the dominant method for fruiting crops under protection. The substrate holds a buffer of water and air between irrigations, and the grower controls the crop by choosing how large each irrigation is, how often it arrives, and how much of it runs to drain. Drain volume and drain conductivity are the feedback that makes those choices measurable rather than habitual.",
  difficulty: "intermediate",
  topics: ["systems", "substrate", "water", "production", "engineering"],
  tags: ["drip irrigation", "dutch bucket", "substrate", "drain fraction", "emitters", "fertigation", "run-to-waste"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-12",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Each plant sits in a bag, slab or bucket of inert material such as coco coir, perlite or stone wool. A small tube delivers nutrient solution to the base of the stem several times a day. More solution is given than the plant will drink, so a fraction drains away; measuring how much drains and how concentrated it is tells the grower whether the last irrigation was too small, too large or about right.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "A drip system separates two things that a water-culture system fuses together. In a channel or a raft, the root sits permanently in the solution, so the solution's composition is the root zone's composition. In a substrate system the solution passes through a porous medium that retains part of it, and what the root experiences is the residue of previous irrigations modified by the newest one. That intermediate store is the reason substrate growing behaves differently, and the reason it is controllable in ways that water culture is not.",
        },
        {
          kind: "text",
          value:
            "The hardware is simple: a mixing tank or injection point, a pump, a filter, a mainline, laterals, and an emitter with a stake at each plant. Almost all of the skill sits in the irrigation strategy rather than the pipework. Two growers with identical equipment and identical nutrient recipes will get different crops if one irrigates in six large events and the other in eighteen small ones.",
        },
        {
          kind: "text",
          value:
            "This is also the family that scales most comfortably to tall, long-cycle, high-value crops. Tomato, capsicum, cucumber, aubergine, melon and increasingly soft fruit are grown this way under protection worldwide, because a substrate gives physical support to a heavy plant and a buffer against short interruptions in supply.",
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
            "Substrate irrigation is the main daily lever a grower has over a fruiting crop's balance between vegetative and generative growth. Frequent small irrigations that keep the substrate close to saturation push a plant towards leaf and stem. Fewer, larger irrigations with a longer overnight dry-back allow the substrate water content and its conductivity to rise, which the plant experiences as mild stress and which tends to push it towards flowering and fruit. Neither is correct in isolation; the correct setting is whichever moves the crop towards the balance the grower wants at that moment.",
        },
        {
          kind: "text",
          value:
            "It matters commercially for a second reason. In a run-to-waste system every litre that drains is water and fertiliser bought and discarded, and in most of India water availability, water quality and fertiliser cost all argue against discarding more than necessary. Drain fraction is therefore both an agronomic control and a cost line, and the two pull in opposite directions.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The substrate is a store, not a soil",
          value:
            "Inert substrates supply almost no nutrients of their own and buffer pH only weakly. Coco coir is a partial exception because it holds and exchanges potassium, sodium and calcium on its surfaces, which is why it is normally buffered with a calcium solution before use.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Shot size, frequency and dry-back" },
        {
          kind: "text",
          value:
            "A single irrigation event is a shot. Its size is expressed as a volume per plant or per emitter, or as a percentage of the substrate volume. Frequency is how many shots are delivered per day and how they are distributed across it. Dry-back is the fall in substrate water content between the last shot of one day and the first of the next. These three describe almost the entire strategy, and they are not independent: a large shot at low frequency and a small shot at high frequency can deliver the same daily volume while producing very different root-zone conditions.",
        },
        { kind: "subheading", value: "Drain fraction" },
        {
          kind: "text",
          value:
            "Drain fraction is the proportion of the solution supplied that leaves the substrate rather than being taken up or evaporated. Its purpose is to flush the substrate. Because a plant takes up water faster than it takes up salts, the solution remaining in the substrate becomes more concentrated than the solution supplied. Draining a fraction of every irrigation replaces that concentrated residue and keeps root-zone conductivity from climbing without limit.",
        },
        { kind: "subheading", value: "Drain conductivity as feedback" },
        {
          kind: "text",
          value:
            "Drain conductivity is the most useful single measurement in substrate growing. If drain conductivity is well above supply conductivity, the crop is taking up water faster than salts and the substrate is accumulating; the usual responses are a larger drain fraction, more frequent irrigation, or a lower supply concentration. If drain conductivity sits at or below supply, the crop is taking up salts at least as fast as water, which can indicate the supply is too dilute for the current load. Drain pH is read the same way, as the substrate's answer to what was supplied.",
        },
        {
          kind: "flow",
          caption: "The substrate irrigation feedback loop. Each measurement answers the irrigation that produced it, which is why drain is sampled per irrigation group rather than once a day.",
          steps: [
            { label: "Supply solution", detail: "Mixed to a target conductivity and pH from source water and stock solutions, with the recipe set for crop and stage." },
            { label: "Emitter delivery", detail: "A measured shot reaches each plant. Uniformity between emitters decides whether the target applies to every plant or only to the average." },
            { label: "Substrate residence", detail: "Solution displaces the previous solution, wets the medium, and refills air-filled pores as it drains." },
            { label: "Root uptake", detail: "Water and ions are removed selectively, so the residue changes in both concentration and composition." },
            { label: "Drain", detail: "The excess leaves the base of the container carrying the displaced residue." },
            { label: "Measurement", detail: "Drain volume, conductivity and pH are recorded against the shot that produced them." },
            { label: "Adjustment", detail: "Shot size, frequency, start and stop times or supply concentration are changed, one at a time." },
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
          name: "Drain fraction",
          expression: "DF = V_drain / V_supply",
          terms: [
            { symbol: "DF", meaning: "Drain fraction, the share of supplied solution that leaves the substrate", unit: "fraction or per cent" },
            { symbol: "V_drain", meaning: "Volume collected from the drain over the measurement period", unit: "L" },
            { symbol: "V_supply", meaning: "Volume supplied to the same plants over the same period", unit: "L" },
          ],
          example:
            "Consider a hypothetical block of plants supplied with 3.0 L per plant across a day, from which 0.9 L per plant is collected at the drain. The drain fraction is 0.9 divided by 3.0, or 30 per cent. If the drain conductivity from that block is still rising day on day, 30 per cent is not flushing the substrate adequately for that crop, climate and supply concentration, and either the fraction or the irrigation frequency has to increase.",
          limitations:
            "Drain fraction is meaningful only when supply and drain are measured on the same defined set of plants over the same period, and it says nothing about uniformity between them. Evaporation from the substrate surface, leakage and uncollected drain all bias it. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "formula",
          name: "Emission uniformity of a drip block",
          expression: "EU = (q_lq / q_avg) x 100",
          terms: [
            { symbol: "EU", meaning: "Emission uniformity of the block", unit: "per cent" },
            { symbol: "q_lq", meaning: "Mean discharge of the lowest quarter of emitters measured", unit: "L/h" },
            { symbol: "q_avg", meaning: "Mean discharge of all emitters measured", unit: "L/h" },
          ],
          example:
            "Consider a hypothetical block in which the average emitter delivers 2.0 L/h while the lowest quarter averages 1.6 L/h. Emission uniformity is 80 per cent, which means the driest quarter of the block receives a fifth less than the block average. If the irrigation schedule is set to satisfy the average plant, those plants are under-irrigated every event, and the deficit compounds across the day.",
          limitations:
            "Uniformity measured on clean new emitters at a fixed pressure is the best case; partial clogging, pressure loss along long laterals, elevation change and temperature effects on tubing all reduce it in service. A single measurement is a snapshot, not a property of the installation. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "text",
          value:
            "Uniformity deserves the emphasis it gets here because it silently caps everything else. Irrigation strategy, nutrient recipe and climate control are all specified as a single set of numbers for a block, and that specification is only true of every plant if every emitter delivers the same volume. A block at low uniformity does not have one irrigation strategy; it has a distribution of them, and the grower is managing the mean of a crop that is actually two crops.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Pressure-compensating emitters buy uniformity, not immunity",
          value:
            "A pressure-compensating emitter holds its discharge roughly constant across a working pressure band, which removes the effect of lateral length and slope. It does not remove clogging, and it only works inside its stated pressure range.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        { kind: "subheading", value: "Emitters" },
        {
          kind: "text",
          value:
            "Emitters differ in discharge rate, in whether they compensate for pressure, in whether they have an anti-drain or non-leakage mechanism, and in how easily they can be cleaned. Anti-drain emitters matter on sloped or tall installations because without them the laterals empty through the lowest emitters after every event, over-irrigating the bottom of the run and under-irrigating the top. Discharge rate interacts with strategy: a high-discharge emitter makes short precise shots harder to control, because the minimum practical run time of the valve sets a minimum shot size.",
        },
        { kind: "subheading", value: "Dutch buckets" },
        {
          kind: "text",
          value:
            "A Dutch bucket is an individual container with an internal siphon or elbow that holds a shallow reservoir at the base and passes the rest to a shared drain line. It suits vining crops, allows a single plant to be removed and replaced without disturbing its neighbours, and gives an easy point for drain collection. The trade-offs are that the small volume per plant demands frequent irrigation in hot weather, and that a shared drain line in a recirculating layout connects every bucket to every other one for pathogen purposes.",
        },
        { kind: "subheading", value: "Substrate choice" },
        {
          kind: "table",
          caption: "Common substrates for drip systems and the behaviour that follows from their structure",
          columns: ["Substrate", "Characteristic behaviour", "Main management consequence"],
          rows: [
            ["Coco coir", "High water retention, cation exchange capacity, biologically active", "Must be buffered before use and monitored for sodium and potassium interactions"],
            ["Stone wool", "Highly uniform, high porosity, little chemical activity", "Very responsive to irrigation strategy; water content and conductivity can be steered precisely"],
            ["Perlite", "Free draining, high air-filled porosity, low retention", "Needs frequent irrigation; dust must be washed out and handled with care"],
            ["Coir and perlite blends", "Retention and drainage traded against each other by ratio", "Blend ratio has to be consistent between batches or the strategy no longer transfers"],
            ["Expanded clay aggregate", "Very free draining, reusable, low retention", "Short buffer against pump failure; usually paired with high irrigation frequency"],
            ["Sand or fine gravel", "Low cost, locally available, heavy", "Poor aeration if fines are present; hard to guarantee uniform wetting"],
          ],
          basis:
            "A structural comparison of substrate behaviour, not a ranking, and not performance data. Retention and porosity vary widely within each material by grade, batch, compression and age. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        { kind: "subheading", value: "Filtration" },
        {
          kind: "text",
          value:
            "Emitters have small orifices and block easily. Filtration is normally layered: a coarse screen or hydrocyclone for sand and grit, then a disc or screen filter sized against the emitter's stated filtration requirement, with pressure gauges either side so a rising differential signals a fouled element. Biological fouling and chemical precipitation are separate problems from particulate blockage and need separate answers.",
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
            "The daily irrigation pattern is usually described by its two boundaries. The first irrigation of the day is timed relative to sunrise or to a cumulative light threshold. Starting too early wastes the overnight dry-back and keeps the substrate wet through the morning; starting too late lets the plant begin transpiring against a substrate that is already at its driest, which stresses it at exactly the moment it needs water. The last irrigation of the day is timed to leave the substrate at the water content the grower wants it to start the night from, since there is little uptake after dark and the dry-back that follows is slow.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Flush and pressure-test the lines before planting, and measure discharge from a sample of emitters spread across the block, including the last emitter on the longest lateral.",
            "Saturate and, where the substrate requires it, buffer and condition the medium before transplanting rather than after.",
            "Set an initial schedule from the substrate's volume and known retention, then correct it from measurement within the first week.",
            "Install drain collection on a defined group of plants that is representative, not on the most convenient one at the end of a row.",
            "Record supply volume, drain volume, supply conductivity and pH, and drain conductivity and pH every day at the same points in the day.",
            "Change one parameter at a time — shot size, or frequency, or start time, or supply concentration — and wait for the drain to answer before changing another.",
            "Check a sample of emitters physically at intervals; a blocked emitter is invisible in block-average data until the plant it serves collapses.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Drain is sampled, not totalled",
          value:
            "Most installations collect drain from a small representative group rather than the whole house. That makes the measurement affordable and it makes the choice of group critical: an unrepresentative group produces confident decisions about the wrong plants.",
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
            "Recirculating and run-to-waste are the two ends of the same design choice. Run-to-waste discards the drain, which means every irrigation is delivered at a known composition, root-zone salt accumulation is controlled simply by drain fraction, and there is no route for a root pathogen to travel from one plant to the whole house through the solution. It costs water and fertiliser continuously and creates a discharge that has to go somewhere.",
        },
        {
          kind: "text",
          value:
            "Recirculating collects the drain, corrects it and returns it. It cuts water and fertiliser use substantially, which matters wherever water is scarce or discharge is restricted. In exchange it requires disinfection of the returning solution, analysis deep enough to see individual ions rather than only total conductivity, and a plan for the elements that accumulate. Sodium is the usual limiting element, because the crop takes up little of it and it enters continuously with the source water; when sodium reaches the concentration at which it interferes, the only remedy is to discard part of the circulating volume, which returns some of the saved cost.",
        },
        {
          kind: "table",
          caption: "Recirculating against run-to-waste, by consequence rather than preference",
          columns: ["Aspect", "Run-to-waste", "Recirculating"],
          rows: [
            ["Water and fertiliser use", "Higher; the drain fraction is discarded", "Lower; the drain is corrected and reused"],
            ["Root-zone salt control", "Direct, through drain fraction", "Indirect; depends on correction and periodic discard"],
            ["Pathogen risk through solution", "Confined to the plant or the local group", "House-wide unless the return is disinfected"],
            ["Analytical requirement", "Supply and drain conductivity and pH", "Full ionic analysis at intervals, plus sodium tracking"],
            ["Capital and complexity", "Lower", "Higher; return lines, buffer tanks, disinfection, correction dosing"],
            ["Discharge to environment", "Continuous nutrient-bearing effluent", "Intermittent, when the circulating volume is discarded"],
          ],
          basis:
            "A qualitative comparison of design consequences, not measured savings; the actual water and nutrient saving depends entirely on source water quality and the discard rate it forces. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "text",
          value:
            "The engineering consideration that most often gets underspecified is buffer. A substrate system survives a pump failure for hours, unlike a thin-film channel, but that buffer shrinks as the substrate volume per plant shrinks and as evaporative demand rises. A small Dutch bucket in hot dry weather can be a short-buffer system in practice, and it should be given the alarms and redundancy that implies.",
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
            "Treat drain volume, drain conductivity and drain pH as the primary daily instrumentation of the crop, and read them together rather than singly.",
            "Set irrigation from the plant's demand, which follows radiation, temperature and humidity, rather than from a fixed clock schedule.",
            "Keep supply conductivity and irrigation frequency as separate levers and do not use one to correct a problem caused by the other.",
            "Verify emitter discharge on a schedule, and replace rather than clean emitters that have blocked repeatedly.",
            "Watch the filter's pressure differential as an early indicator; a filter that fouls faster than usual is reporting a change in the water, not only in itself.",
            "Keep a record of substrate batch, supplier and grade, because a change in any of them changes the retention the schedule was built on.",
            "Inspect roots in the substrate periodically. Healthy white roots distributed through the whole volume are the evidence that the wetting pattern is what the schedule assumes.",
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
          caption: "Recurring failures in drip and substrate systems, and where the cause usually sits",
          columns: ["Symptom", "Usual underlying cause"],
          rows: [
            ["Drain conductivity climbing day after day", "Drain fraction too small, or supply concentration too high for the crop's current uptake"],
            ["Drain conductivity below supply", "Supply too dilute for the load, or over-irrigation flushing before the substrate has been used"],
            ["Consistent weak plants at the end of long laterals", "Pressure loss along the lateral, or non-compensating emitters"],
            ["Plants at the low end of a slope over-irrigated", "Laterals draining through the lowest emitters between events; missing anti-drain function"],
            ["Dry pockets in the substrate despite adequate total volume", "Shot size too large and too infrequent, or channelling around a compacted or hydrophobic zone"],
            ["Root browning in a well-irrigated block", "Substrate saturated for too long, air-filled porosity lost, oxygen limited at the root surface"],
            ["Sudden loss of emitter discharge across a block", "Filter bypassed or failed, or precipitation in the lines after a change in solution chemistry"],
            ["Vegetative crop that will not set fruit", "Irrigation strategy too generous; insufficient overnight dry-back and no rise in root-zone conductivity"],
          ],
          basis:
            "Diagnostic starting points drawn from common protected-cultivation practice, offered as places to look rather than conclusions. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
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
            "Specify the filter against the emitter manufacturer's stated filtration requirement, and fit pressure gauges upstream and downstream of it.",
            "Size laterals and select emitters so that the calculated pressure variation across a block stays inside the emitter's compensating range.",
            "Buffer coco coir with a calcium solution before planting and account for what it releases in the first weeks of the crop.",
            "Establish the drain measurement point and the daily measurement routine before the first transplant, not after the first problem.",
            "Write the irrigation strategy down as start condition, shot size, frequency, stop condition and target drain fraction, and revise the written version when it changes.",
            "For recirculating systems, plan the disinfection method and the periodic discard rule at design stage rather than treating both as later additions.",
            "Keep spare emitters, stakes and filter elements on site; the cost of a stock-out is measured in plants, not in parts.",
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
            "Continuous substrate sensing changes what irrigation control can be. Sensors that report substrate water content, substrate conductivity and substrate temperature in the root zone turn the drain measurement from a once-a-day retrospective into a live signal, and allow irrigation to be triggered on a measured fall in water content rather than on a timer. Weighing gutters and load-cell platforms do something similar by mass, reporting uptake and drain almost in real time.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Sensor-driven irrigation moves the risk, it does not remove it",
          value:
            "Triggering on substrate water content makes the schedule responsive, but it also makes a single sensor's placement, calibration and drift into a whole-block decision. The usual mitigation is redundant sensors and a bounded schedule that cannot irrigate more or less often than defined limits.",
        },
        {
          kind: "text",
          value:
            "The second advanced theme is deliberate steering. Growers of long-cycle fruiting crops adjust the daily irrigation pattern week by week to hold the plant at a chosen point between vegetative and generative behaviour, reading plant measurements such as stem diameter, growth rate, truss development and fruit load alongside the drain figures. This is a skill built on a particular crop in a particular house, and the settings that produce it do not transfer between sites; what transfers is the method of observing, changing one thing, and waiting for the plant to answer.",
        },
        {
          kind: "text",
          value:
            "A third direction is closing the loop on the discarded fraction. Treating and reusing drain requires knowing its composition, which requires ionic analysis rather than conductivity alone, and requires a disinfection step whose capacity matches peak drain flow rather than average flow. Where water is scarce, the analysis and disinfection cost is often justified by the water saved alone, before the fertiliser is counted.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "In a substrate system the root zone is the residue of previous irrigations modified by the newest one, which is what makes shot size, frequency and timing the primary controls.",
    "Drain fraction exists to flush accumulated salts, because a plant takes up water faster than it takes up the ions dissolved in it.",
    "Drain volume, conductivity and pH read together are the most useful daily feedback available in substrate growing.",
    "Emission uniformity silently caps every other setting; a block at poor uniformity has a distribution of irrigation strategies rather than one.",
    "Run-to-waste trades water and fertiliser for simplicity and pathogen containment; recirculating trades that back for disinfection, ionic analysis and sodium management.",
    "The first and last irrigations of the day set the overnight dry-back, which is one of the main levers on the balance between vegetative and generative growth.",
  ],
  related: ["substrates", "fertigation", "root-zone", "water-management"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Programme material on protected cultivation, irrigation and soilless production systems.",
      url: "https://www.fao.org/plant-production-protection/en",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute and extension publications on micro-irrigation, fertigation and protected cultivation in India.",
    },
    {
      organisation: "International Society for Horticultural Science",
      description: "Working groups and symposium programmes covering substrate culture and soilless growing.",
      url: "https://www.ishs.org",
    },
  ],
};
