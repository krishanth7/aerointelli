import type { KnowledgeArea } from "../types";

export const oxygen: KnowledgeArea = {
  number: "09",
  slug: "oxygen",
  title: "Oxygen Management",
  navSummary: "Demand, transfer, supply, and the failure that kills fastest.",
  summary:
    "Oxygen is the only parameter in a recirculating system with a time to mortality measured in minutes. Everything about its design and monitoring follows from that.",
  difficulty: "advanced",
  topics: ["water", "engineering", "operations"],
  tags: ["dissolved oxygen", "aeration", "oxygenation", "saturation", "transfer efficiency"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-03-14",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Fish breathe oxygen dissolved in the water, and a tank holds only a few minutes' worth. Water quality problems give you days to react. An oxygen problem does not. That is why oxygen is measured continuously, alarmed, and backed up.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Oxygen management is the supply of dissolved oxygen to the culture water at a rate matching its consumption. It has three parts: knowing the demand, transferring oxygen into the water efficiently enough to meet it, and detecting a shortfall before it becomes a loss.",
        },
        {
          kind: "text",
          value:
            "Water holds only a limited amount of dissolved oxygen, and less as it gets warmer. That ceiling is why oxygen is the parameter that most often sets the biomass a system can carry.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why it matters",
      blocks: [
        {
          kind: "callout",
          tone: "established",
          title: "The standing oxygen inventory in a tank is small",
          value:
            "The mass of dissolved oxygen in a culture tank is a short buffer against consumption at commercial loading. This is why a loss of supply is measured against minutes rather than hours, and why oxygen redundancy is the first redundancy purchased.",
        },
        {
          kind: "list",
          items: [
            "Acute deficiency causes mortality quickly and across a whole tank at once.",
            "Chronic marginal oxygen suppresses appetite, growth and feed conversion long before any fish is visibly distressed.",
            "The biofilter has its own oxygen demand; starving it converts an oxygen problem into an ammonia problem.",
            "Decomposing solids consume oxygen continuously, so poor solids management raises the oxygen bill.",
            "Oxygen supply and pumping are usually the two largest continuous electrical loads on the farm.",
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
            "Oxygen moves from a gas phase into water across a gas-liquid interface, and the driving force is the difference between the oxygen the water could hold at equilibrium with that gas and what it currently holds. Two consequences follow. Transfer is fastest into oxygen-poor water, and using pure oxygen rather than air raises the equilibrium concentration substantially, which is what allows supersaturation.",
        },
        {
          kind: "flow",
          caption: "Oxygen through the loop",
          steps: [
            {
              label: "Consumption in the tank",
              detail:
                "Fish respiration is the largest demand, and it rises with feeding, activity, temperature and fish size. Bacteria on surfaces and in suspension consume more.",
            },
            {
              label: "Depleted water leaves",
              detail:
                "The tank outlet carries the lowest oxygen in the system. This is the point that should be monitored, because it is the water the fish are actually living in.",
            },
            {
              label: "Biofilter demand",
              detail:
                "Nitrification consumes oxygen. A biofilter receiving already-depleted water becomes oxygen-limited and its ammonia removal falls.",
            },
            {
              label: "Degassing",
              detail:
                "Stripping carbon dioxide also brings the water toward equilibrium with air, which partially re-oxygenates it as a side effect.",
            },
            {
              label: "Oxygenation",
              detail:
                "Aeration brings water toward air saturation; pure oxygen contacting equipment can take it above that. The choice determines the biomass the system can support.",
            },
            {
              label: "Return to tank",
              detail:
                "Water enters at its highest dissolved oxygen and is drawn down across the tank. The difference between inlet and outlet is the tank's consumption.",
            },
          ],
        },
        {
          kind: "table",
          caption: "Transfer methods and their characteristics",
          columns: ["Method", "Principle", "Characteristics"],
          rows: [
            [
              "Surface and diffused aeration",
              "Air contacting water at the surface or as bubbles",
              "Simple, robust, and limited to air saturation. Also strips carbon dioxide, which is a genuine benefit.",
            ],
            [
              "Packed column / low head oxygenator",
              "Water distributed over media in an enclosed oxygen atmosphere",
              "Efficient use of pure oxygen at modest head. Requires a sealed vessel and gas handling.",
            ],
            [
              "Oxygen cone / speece cone",
              "Water and pure oxygen contacted under pressure in a tapered vessel",
              "High transfer efficiency and capable of substantial supersaturation. Requires pumping head and careful control.",
            ],
            [
              "Fine bubble diffusion of pure oxygen",
              "Oxygen released as fine bubbles into deep water",
              "Simple to install and to retrofit. Efficiency depends strongly on depth and bubble size, with unabsorbed gas lost at the surface.",
            ],
          ],
          basis:
            "A comparison of transfer principles. Which is appropriate depends on required transfer rate, available head, oxygen supply arrangement, species, loading, temperature and system configuration.",
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Engineering principles",
      blocks: [
        {
          kind: "formula",
          name: "Oxygen delivered by a flow",
          expression: "M = Q x (DO_in - DO_out)",
          terms: [
            { symbol: "M", meaning: "Oxygen delivered to the tank per unit time", unit: "g/h" },
            { symbol: "Q", meaning: "Flow through the tank", unit: "m3/h" },
            { symbol: "DO_in", meaning: "Dissolved oxygen at the tank inlet", unit: "g/m3" },
            { symbol: "DO_out", meaning: "Dissolved oxygen at the tank outlet", unit: "g/m3" },
          ],
          example:
            "Consider a hypothetical tank where the inlet and outlet oxygen concentrations are both measured. The product of flow and the difference between them is the oxygen the fish and the bacteria in that tank are consuming.",
          limitations:
            "This measures delivery, and equals consumption only at steady state. It assumes both measurements are properly calibrated and representative, and it excludes any oxygen entering through the water surface. The appropriate operating values depend on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "list",
          items: [
            "Saturation falls as temperature rises and as salinity rises. A warmer system has both higher demand and lower capacity.",
            "Transfer rate depends on the deficit, so equipment that performs well on depleted water performs less well as the water approaches its target.",
            "Supersaturation at the inlet extends the biomass a given flow can support, but total dissolved gas pressure must be controlled to avoid gas bubble disease.",
            "Design must satisfy demand at peak feeding, peak temperature and peak biomass simultaneously.",
            "Oxygen supply requires an independent backup path that does not depend on the primary pumps or the primary power supply.",
          ],
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
            "Calculate demand from peak feed rate, biomass and temperature, then add the biofilter and bacterial demand explicitly rather than as a margin.",
            "Select transfer equipment for the required rate at the operating oxygen concentration, not at its rated performance into oxygen-free water.",
            "Provide continuous monitoring at every tank outlet, with alarms that reach a person who can act.",
            "Provide emergency oxygen that is independent of mains power and independent of the recirculation pumps.",
            "Where pure oxygen is used, size storage and supply for the peak day and for a supply interruption.",
            "Monitor total dissolved gas wherever supersaturation is used deliberately.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Alarms must reach someone who can act",
          value:
            "An oxygen alarm that sounds in an empty building at night is a record of the event rather than a prevention of it. The alarm path, the response time and the emergency oxygen supply are one system, not three separate purchases.",
        },
      ],
    },
    {
      id: "operational-considerations",
      heading: "Operational considerations",
      blocks: [
        {
          kind: "list",
          items: [
            "Monitor at the tank outlet. Inlet readings describe the equipment, not the fish.",
            "Calibrate oxygen probes on a fixed schedule and verify against a second instrument; probe drift is the most common cause of a false sense of safety.",
            "Expect demand to rise after feeding, and confirm the system holds oxygen through that peak rather than only between feeds.",
            "Treat any change in fish behaviour at the surface or near the inlet as an oxygen observation until measurement says otherwise.",
            "Test the emergency oxygen system by using it, at intervals, under load.",
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
          caption: "Oxygen symptoms and first checks",
          columns: ["Symptom", "Measure first", "Common direction"],
          rows: [
            [
              "Fish at the surface or crowding the inlet",
              "Dissolved oxygen at the tank outlet",
              "A genuine deficit, or flow to that tank reduced",
            ],
            [
              "Oxygen falling after every feed and recovering between",
              "Oxygen through the post-feeding peak, feed quantity and timing",
              "Transfer capacity adequate for average demand but not for peak demand",
            ],
            [
              "Oxygen adequate at the tank but ammonia rising",
              "Dissolved oxygen entering the biofilter",
              "The biofilter oxygen-limited, so nitrification rate has fallen",
            ],
            [
              "Reading steady and plausible while fish show distress",
              "Probe calibration against a reference measurement",
              "Sensor drift or fouling reporting a value the water does not have",
            ],
            [
              "Oxygen consumption apparently high for the biomass held",
              "Solids load, biofilm accumulation, temperature",
              "Bacterial demand from solids and biofilm rather than fish respiration",
            ],
            [
              "Gas bubble signs in fish where oxygen is supersaturated",
              "Total dissolved gas pressure, not dissolved oxygen alone",
              "Total gas pressure above tolerance, often from entrained air rather than from oxygen",
            ],
          ],
          basis:
            "A diagnostic ordering. Target and minimum oxygen concentrations depend on species, loading, temperature, water chemistry and system configuration.",
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
            "Clean and calibrate dissolved oxygen probes on schedule; fouled membranes and optical caps drift low or high without any obvious sign.",
            "Inspect diffusers for blockage and uneven bubble distribution.",
            "Check oxygen cones, columns and their gas supply lines for leaks, which waste an expensive consumable silently.",
            "Service blowers and compressors, including filters, which quietly reduce delivered air.",
            "Exercise the emergency oxygen path fully, including its regulators and valves, not only its cylinders.",
          ],
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
            "Monitoring oxygen at the inlet and reporting it as the tank's condition.",
            "Sizing for average demand and discovering the shortfall at the post-feeding peak.",
            "Forgetting the biofilter's oxygen demand, then investigating an ammonia problem that is an oxygen problem.",
            "Relying on probes that are not verified against a second method.",
            "Providing an emergency oxygen system that depends on the same power supply as the primary one.",
            "Using supersaturation without monitoring total dissolved gas.",
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
            "Oxygen supply is a make-or-buy decision. On-site generation removes the logistics of delivered liquid oxygen but adds an electrical load and a piece of plant that must itself be maintained and backed up. Delivered oxygen shifts the risk to supply continuity and storage. Neither removes the requirement for an independent emergency path.",
        },
        {
          kind: "text",
          value:
            "Control strategy is the other axis. Oxygen delivery can be modulated against measured dissolved oxygen, and doing so saves energy and consumable, but a control loop that fails closed is more dangerous than no control at all. The failure mode of the controller is part of the oxygen design.",
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
            "Oxygen is the fastest-acting risk in a recirculating system and often the binding constraint on biomass. Size supply for peak demand at peak temperature, include the biofilter and bacterial demand, monitor at the tank outlet with verified probes, and provide an emergency path that shares no dependency with the primary system.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Oxygen has the shortest time to mortality of any parameter, which drives monitoring and redundancy decisions.",
    "Saturation falls with rising temperature while demand rises — the two work against each other.",
    "Demand includes fish, biofilter and bacterial consumption from solids and biofilm.",
    "Monitor at the tank outlet; the inlet describes the equipment, not the fish.",
    "Transfer rate depends on the oxygen deficit, so equipment performs worst near the target concentration.",
    "Emergency oxygen must be independent of the primary power supply and the recirculation pumps.",
  ],
  related: ["degassing", "water-quality", "fish-biology", "energy"],
  furtherReading: [
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension fact sheets on aeration, oxygenation and dissolved oxygen management in aquaculture systems.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on water quality and aeration requirements for aquaculture production systems.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
  ],
};
