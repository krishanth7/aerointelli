import type { KnowledgeArea } from "../types";

export const systemArchitecture: KnowledgeArea = {
  number: "02",
  slug: "system-architecture",
  title: "System Architecture",
  navSummary: "Process flow, loop configuration, redundancy and biosecurity zoning.",
  summary:
    "How the unit processes are arranged into a working plant: the order of the treatment train, how many loops a farm should have, and where redundancy is worth its capital.",
  difficulty: "intermediate",
  topics: ["engineering", "operations", "water"],
  tags: ["process flow", "loop configuration", "redundancy", "zoning"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-02-14",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "The same equipment can be plumbed together in several ways, and the arrangement decides how the farm behaves when something breaks. One big shared loop is cheaper to build. Several smaller loops cost more but stop one problem from reaching every tank.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "System architecture is the arrangement of culture tanks, treatment processes and the piping between them into one or more independent loops. It answers three questions: what order the water passes through, which tanks share which equipment, and what happens to the rest of the farm when any one item stops.",
        },
        {
          kind: "text",
          value:
            "It is decided early and is expensive to change. Sizing a pump wrongly is a purchase order; choosing the wrong loop topology is a rebuild.",
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
            "Architecture sets the blast radius of every failure and the reach of every pathogen. Two farms with identical equipment lists and identical capacity can have completely different risk profiles depending on how many tanks share water.",
        },
        {
          kind: "list",
          items: [
            "A shared loop means a single biofilter, a single oxygen system and a single set of operators to maintain — and one contamination event that reaches every fish on site.",
            "Split loops multiply capital and maintenance, and give the farm the ability to lose a loop without losing a year.",
            "Architecture determines whether a batch can be harvested, the tank disinfected and restocked without disturbing the rest of production.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "How it works",
      blocks: [
        {
          kind: "text",
          value:
            "The treatment order follows from what each process needs from the water it receives. Solids first, because they foul everything downstream. Biofiltration next, because it needs clarified, oxygen-bearing water. Degassing after biofiltration, because the biofilter itself produces carbon dioxide. Oxygenation last, so the water arrives at the tank at its highest dissolved oxygen. Disinfection sits wherever it can be given clear water and adequate contact.",
        },
        {
          kind: "flow",
          caption: "Treatment order and the reason for each position",
          steps: [
            {
              label: "Tank outlet",
              detail:
                "Water leaves carrying solids, dissolved nitrogen and carbon dioxide, depleted of oxygen. A dual-drain tank separates a small, solids-rich bottom flow from a larger, cleaner side flow.",
            },
            {
              label: "Solids removal",
              detail:
                "Placed first so that biofilter media, degasser packing and UV sleeves all receive clarified water. Treating a solids-rich stream separately reduces the volume that must be handled at full concentration.",
            },
            {
              label: "Biofiltration",
              detail:
                "Placed after solids because organic loading favours heterotrophic bacteria that outcompete the nitrifiers the system depends on.",
            },
            {
              label: "Degassing",
              detail:
                "Placed after biofiltration because nitrification and fish respiration both add carbon dioxide, and stripping is only useful once the total load is present.",
            },
            {
              label: "Oxygenation",
              detail:
                "Placed last so the water reaching the tank carries its full oxygen charge, and so no downstream process consumes it before the fish do.",
            },
            {
              label: "Return to tank",
              detail:
                "Inlet design converts the returning flow into the tank's rotational velocity, which is what makes the tank self-cleaning.",
            },
          ],
        },
      ],
    },
    {
      id: "system-role",
      heading: "Loop configurations",
      blocks: [
        {
          kind: "table",
          caption: "Common loop topologies and what each buys",
          columns: ["Configuration", "Arrangement", "Trade-off"],
          rows: [
            [
              "Single shared loop",
              "All culture tanks share one treatment train.",
              "Lowest capital and simplest operation. A water-borne problem reaches every tank, and the whole farm depends on one biofilter.",
            ],
            [
              "Multiple independent loops",
              "Groups of tanks each have a complete treatment train.",
              "Failure and disease are contained to one loop. Higher capital, more equipment to maintain, more instrumentation.",
            ],
            [
              "Staged loops by life stage",
              "Hatchery, nursery and grow-out on separate loops with separate water quality set points.",
              "Each stage runs at its own temperature and loading. Requires transfer handling between stages, which is a stress and biosecurity event.",
            ],
            [
              "Partial reuse",
              "A share of flow is discharged and replaced rather than treated.",
              "Reduces treatment duty and nitrate accumulation. Requires a water source and an effluent route that a fully closed system does not.",
            ],
          ],
          basis:
            "A comparison of arrangements, not a recommendation. Which configuration is appropriate depends on species, site water availability, biosecurity requirements, capital constraints and the production plan.",
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Engineering principles",
      blocks: [
        {
          kind: "list",
          items: [
            "Gravity where possible. Every point in the train that requires a pump is a point that requires power, standby and maintenance. Elevation differences designed in at the civil stage are free forever after.",
            "One pumping stage per loop is the usual target. Multiple lifts multiply the head loss, the energy bill and the number of things that can stop.",
            "Hydraulic capacity is set by the largest flow the loop must carry, not the average. Sizing pipework to average flow guarantees a bottleneck at peak.",
            "Every process must be isolatable. If a drum filter cannot be valved out and drained without stopping the loop, it will be serviced late.",
            "Instrumentation belongs where a decision is made, not where the pipe is convenient.",
          ],
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Redundancy is bought against time-to-harm, not against cost",
          value:
            "The correct place to spend on redundancy is the failure with the shortest interval between occurrence and irreversible loss. In most recirculating systems that is loss of oxygen supply or loss of water movement, which is why those are duplicated before anything else.",
        },
      ],
    },
    {
      id: "design-considerations",
      heading: "Design considerations",
      blocks: [
        {
          kind: "list",
          items: [
            "Decide the number of loops from the biosecurity and production plan, before any equipment is selected.",
            "Lay out the plant so that dirty and clean zones do not cross. Staff movement, equipment movement and water movement should all run one way.",
            "Provide quarantine capability that is genuinely separate — separate water, separate equipment, separate access.",
            "Allow physical space around every unit process for the maintenance it will actually need, including media removal and filter panel replacement.",
            "Design the sludge route at the same time as the water route. It is not a smaller problem.",
            "Provide an emergency path: a way to aerate every tank and a way to supply oxygen when the primary system and its pumps are unavailable.",
          ],
        },
      ],
    },
    {
      id: "operational-considerations",
      heading: "Operational considerations",
      blocks: [
        {
          kind: "text",
          value:
            "An architecture is only as good as the procedures that use it. Isolation valves that exist but are never exercised seize. Independent loops that share nets, buckets and boots are not independent.",
        },
        {
          kind: "list",
          items: [
            "Label every valve and every line, and keep an up-to-date process diagram where the operators are, not in a drawing register.",
            "Exercise isolation valves and standby equipment on schedule.",
            "Keep loop-dedicated equipment physically colour-coded so cross-use is a visible mistake rather than an invisible one.",
            "Record which tanks are on which loop in every water quality log, so a reading can be attributed to a treatment train.",
          ],
        },
      ],
    },
    {
      id: "common-problems",
      heading: "Common problems and troubleshooting",
      blocks: [
        {
          kind: "table",
          caption: "Architectural symptoms and where to look",
          columns: ["Symptom", "Measure or inspect first", "Common direction"],
          rows: [
            [
              "One tank consistently poorer than its neighbours on the same loop",
              "Inlet flow and inlet velocity at that tank, drain condition",
              "Hydraulic imbalance across the distribution manifold rather than a treatment fault",
            ],
            [
              "Water quality good at the treatment plant, poor at the far tanks",
              "Flow and dissolved oxygen at the first and last tank on the run",
              "Undersized distribution pipework or oxygen consumed along the delivery path",
            ],
            [
              "Disease appearing across all tanks at once",
              "Loop map, shared equipment, staff movement route",
              "A shared loop or shared handling equipment doing what a shared loop does",
            ],
            [
              "Head loss higher than design, pump running off its duty point",
              "Differential pressure across each unit process in turn",
              "One fouled process, or pipework sized to average rather than peak flow",
            ],
          ],
          basis:
            "Diagnostic ordering only. Thresholds depend on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "maintenance",
      heading: "Maintenance",
      blocks: [
        {
          kind: "list",
          items: [
            "Verify the process diagram against the physical plant after any modification, however small.",
            "Exercise every isolation valve and every standby unit on a fixed interval.",
            "Inspect distribution manifolds for partial blockage, which shows up as tank-to-tank flow imbalance long before it shows up as a fault.",
            "Re-measure head loss across each unit process periodically and compare against commissioning figures.",
          ],
        },
      ],
    },
    {
      id: "practical-example",
      heading: "Practical example",
      blocks: [
        {
          kind: "text",
          value:
            "Consider a hypothetical grow-out hall of eight culture tanks. Built as one loop, it needs one drum filter, one biofilter, one degasser and one oxygenation stage, and the capital is at its lowest. Built as two loops of four, it needs two of each, the footprint grows, and the operators have twice as much equipment to maintain.",
        },
        {
          kind: "text",
          value:
            "The second arrangement buys one thing: the farm can lose a loop — to a pathogen, a biofilter crash or a mechanical failure — and still have half its production intact and half its treatment capacity available to help recover. Whether that is worth the additional capital is a question about the value of the standing biomass and the consequences of losing all of it at once, not a question about the equipment.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      blocks: [
        {
          kind: "list",
          items: [
            "Choosing a single loop for capital reasons without pricing the loss of the entire standing biomass.",
            "Sizing distribution pipework for average flow, then discovering the far tanks cannot be given design flow.",
            "Placing degassing before biofiltration, so the carbon dioxide the biofilter produces is never stripped.",
            "Building loops that are hydraulically separate but operationally shared through nets, boots and hands.",
            "Leaving no maintenance access, so servicing a unit process requires draining the loop.",
            "Treating the sludge handling route as something to solve after commissioning.",
          ],
        },
      ],
    },
    {
      id: "advanced",
      heading: "Advanced considerations",
      blocks: [
        {
          kind: "text",
          value:
            "Side-stream treatment is the main architectural refinement. Denitrification, fine solids polishing and ozone contact are frequently applied to a fraction of the flow rather than the whole, because the process needs a long contact time or a controlled environment that the main loop cannot provide. The design question becomes what fraction, taken from where, and returned where.",
        },
        {
          kind: "text",
          value:
            "Thermal architecture is the other. Where the target temperature differs from ambient, heat exchange between the discharge and the makeup stream, and insulation of the loop itself, change the operating cost more than any pump selection will.",
        },
      ],
    },
    {
      id: "summary",
      heading: "Summary",
      blocks: [
        {
          kind: "text",
          value:
            "Architecture is the decision that all later decisions inherit. The treatment order is set by what each process needs from the water it receives; the number of loops is set by how much of the farm may be allowed to fail at once; and redundancy is placed where the interval between failure and loss is shortest.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Treatment order follows process requirements: solids, biofiltration, degassing, oxygenation, return.",
    "The number of independent loops sets the blast radius of any failure or pathogen.",
    "Hydraulic capacity is sized to peak flow, not average, or the far tanks are starved.",
    "Redundancy belongs where time-to-harm is shortest — oxygen supply and water movement first.",
    "Every unit process must be isolatable and physically accessible, or it will be maintained late.",
    "Hydraulic separation without operational separation is not separation.",
  ],
  related: ["fundamentals", "hydraulics", "piping", "farm-design"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on recirculating system design, biosecurity and aquaculture facility planning.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension publications on recirculating system component selection and system layout.",
    },
  ],
};
