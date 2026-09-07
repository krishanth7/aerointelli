import type { KnowledgeArea } from "../types";

export const cultureTanks: KnowledgeArea = {
  number: "03",
  slug: "culture-tanks",
  title: "Culture Tanks",
  navSummary: "Geometry, inlets, drains, flow patterns and self-cleaning behaviour.",
  summary:
    "The tank is a process vessel. Its shape, inlet arrangement and drain design decide whether solids leave in minutes or dissolve in place, and whether every fish sees the same water.",
  difficulty: "intermediate",
  topics: ["engineering", "water", "fish"],
  tags: ["tank geometry", "dual drain", "rotational velocity", "self-cleaning"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-02-18",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "A good tank sweeps its own floor. Water comes in at an angle, spins gently around the tank, and carries waste to a drain in the middle. A badly designed tank leaves dead corners where waste sits, breaks down and pollutes the water the fish are living in.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "A culture tank is the vessel in which fish are held, but from an engineering standpoint it is the first unit process in the treatment train. It performs a separation: concentrating settleable solids into a small, dense flow at the centre drain while the bulk of the water leaves comparatively clean.",
        },
        {
          kind: "text",
          value:
            "How well it performs that separation is a function of geometry and hydraulics, not of size. A tank that does not move its water correctly is a settling basin the fish live in.",
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
            "Solids that leave the tank quickly can be removed as particles. Solids that linger break down, releasing dissolved organic carbon and ammonia into the loop — load that then has to be handled by the biofilter, which is slower, more expensive and less reliable than a drum filter.",
        },
        {
          kind: "list",
          items: [
            "Rapid solids removal reduces the dissolved load the biofilter must carry.",
            "Uniform water velocity gives every fish comparable conditions, which shows up as more uniform growth and less size grading.",
            "Gentle, consistent current provides exercise and supports fish condition; excessive velocity costs the fish energy that would otherwise go into growth.",
            "Dead zones concentrate solids and low oxygen in the same place, which is where health problems begin.",
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
            "In a circular tank, the returning flow is injected tangentially. That momentum sets the whole water mass rotating. Rotation creates a secondary radial flow along the floor toward the centre — the same effect that gathers tea leaves at the middle of a stirred cup — and that radial flow is what transports settled solids to the centre drain.",
        },
        {
          kind: "flow",
          caption: "How a circular tank cleans itself",
          steps: [
            {
              label: "Tangential inlet",
              detail:
                "Water enters through nozzles or a vertical pipe with orifices, aimed along the tank wall. The inlet does two jobs: it delivers treated water and it supplies the rotational momentum.",
            },
            {
              label: "Rotation",
              detail:
                "The bulk water rotates. Velocity is set by inlet momentum, not by flow rate alone — the same flow through smaller orifices delivers more momentum.",
            },
            {
              label: "Secondary radial flow",
              detail:
                "Friction at the floor slows the lower water layer, so it is thrown outward less strongly than the water above. The result is a slow inward sweep across the floor toward the centre.",
            },
            {
              label: "Centre bottom drain",
              detail:
                "Settleable solids concentrate here and leave in a small, solids-rich flow. This stream carries the majority of the settleable load in a minority of the volume.",
            },
            {
              label: "Side or elevated drain",
              detail:
                "The remaining, comparatively clean flow leaves separately and returns to the main treatment loop, having avoided the concentrated solids stream entirely.",
            },
          ],
        },
        {
          kind: "callout",
          tone: "established",
          title: "The dual drain separates the flows, not the solids",
          value:
            "A dual-drain tank does not remove solids by itself. It divides the outflow so that most of the settleable load leaves in a small stream that can be treated intensively, while the larger stream goes to the main loop with a much reduced solids burden.",
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Engineering principles",
      blocks: [
        {
          kind: "formula",
          name: "Tank turnover time",
          expression: "t = V / Q",
          terms: [
            { symbol: "t", meaning: "Time for a volume equal to the tank to pass through", unit: "min" },
            { symbol: "V", meaning: "Tank working volume", unit: "m3" },
            { symbol: "Q", meaning: "Total flow through the tank", unit: "m3/min" },
          ],
          example:
            "Consider a hypothetical tank of 60 m3 receiving 1.5 m3/min. One tank volume passes through every 40 minutes. That is a statement about water exchange only.",
          limitations:
            "Turnover time says nothing about mixing quality, rotational velocity or solids transport. A tank can have short turnover and still have dead zones, and a tank with long turnover can be well swept if the inlet momentum is right. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "list",
          items: [
            "Rotational velocity is driven by inlet momentum — flow multiplied by inlet velocity — not by flow alone. Adjustable inlet orifices are how velocity is tuned after commissioning.",
            "The diameter-to-depth ratio governs the flow pattern. Too shallow and rotation is dominated by floor friction; too deep and the lower water is poorly coupled to the rotating bulk.",
            "Floor slope toward the centre assists but does not replace the radial sweep.",
            "Velocity is a species and life-stage decision. It must exercise the fish without imposing a continuous energetic cost that suppresses growth.",
            "Both drains must be sized and valved so the split between them can be adjusted in operation.",
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
            "Choose the shape deliberately. Circular tanks give the best self-cleaning; rectangular and raceway tanks use floor space more efficiently but need engineered flow control to avoid dead zones; octagonal and square-with-rounded-corners tanks are a compromise between the two.",
            "Provide adjustable inlets. A fixed inlet fixes the tank's velocity at whatever the designer assumed, for every species and every life stage the tank will ever hold.",
            "Design the centre drain and its standpipe for the sludge stream, and make it accessible without entering the tank.",
            "Include a reliable water level control and an overflow route that cannot be blocked by a single obstruction.",
            "Plan for harvest and grading — how fish are crowded, moved and removed — before the tank is built, not after.",
            "Specify surfaces that can be disinfected and that will not abrade fish.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Commission the tank's hydraulics before stocking",
          value:
            "Rotational velocity, floor sweep and drain split should be measured and adjusted with clean water and a tracer. Once fish are in, the opportunity to observe the flow pattern directly is gone.",
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
            "Observe the floor daily. Visible settled material indicates the sweep is not working, whatever the water quality readings say.",
            "Watch fish position. Fish holding in one part of the tank are telling you about oxygen, velocity or light before any instrument does.",
            "Measure dissolved oxygen at the outlet, which is the worst water in the tank, not at the inlet, which is the best.",
            "Re-tune inlet velocity as fish grow and as biomass and flow requirements change.",
            "Check the drain split periodically; a partially blocked centre drain shifts the load to the main loop silently.",
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
          caption: "Tank symptoms and first checks",
          columns: ["Symptom", "Inspect or measure first", "Common direction"],
          rows: [
            [
              "Solids accumulating on the floor",
              "Inlet velocity and orifice condition, rotational speed, floor slope",
              "Insufficient inlet momentum, or partially blocked inlet orifices",
            ],
            [
              "Fish holding against one wall or in one quadrant",
              "Dissolved oxygen and velocity at that location, light and noise",
              "A dead zone, a local oxygen deficit, or an aversive stimulus",
            ],
            [
              "Fish swimming hard against the current continuously",
              "Rotational velocity relative to fish size and species",
              "Velocity set for a different life stage than the one in the tank",
            ],
            [
              "Uneven growth within a single tank",
              "Velocity and oxygen uniformity, feed distribution",
              "Non-uniform conditions or feed not reaching the whole tank",
            ],
            [
              "Water level unstable",
              "Standpipe, overflow, drain screen, inlet flow control",
              "A partially obstructed drain or a level control fighting a varying inlet flow",
            ],
          ],
          basis:
            "A diagnostic ordering. Appropriate velocities, densities and oxygen levels depend on species, loading, temperature, water chemistry and system configuration.",
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
            "Clear inlet orifices on a schedule. Partial blockage changes the flow pattern before it changes the flow rate.",
            "Inspect and clean drain screens, which are the most common cause of unexplained level changes.",
            "Check tank surfaces for biofilm, abrasion and damage during every fallow period.",
            "Disinfect and dry between batches where biosecurity policy requires it, and record it.",
            "Re-verify the drain split after any change to pumping or pipework anywhere in the loop.",
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
            "Sizing the inlet for flow and ignoring velocity, leaving the tank with no rotation.",
            "Building fixed inlets, then having no way to tune the tank for the fish actually in it.",
            "Choosing rectangular tanks for floor efficiency without designing the flow control that makes them work.",
            "Measuring oxygen at the inlet and reporting it as the tank's oxygen level.",
            "Treating visible floor solids as a cleaning task rather than a hydraulic fault.",
            "Leaving no practical way to crowd and harvest, so every harvest is a stress event improvised on the day.",
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
            "Mixed-cell raceways and partitioned rectangular tanks apply circular-tank hydraulics inside a rectangular footprint, using arranged inlet jets to create a series of counter-rotating cells each with its own bottom drain. They recover much of the floor-space efficiency of a raceway while retaining a solids sweep, at the cost of a more complex and more sensitive inlet arrangement.",
        },
        {
          kind: "text",
          value:
            "Computational fluid dynamics is increasingly used to evaluate tank flow patterns before construction. It is a design aid rather than a substitute for commissioning measurement, because the modelled tank has no fish in it and fish alter the flow field they live in.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Fish as a hydraulic element",
          value:
            "The effect of swimming fish on tank mixing, velocity profile and solids transport at commercial densities is an area where practice still relies substantially on observation rather than on predictive models.",
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
            "A culture tank is a separator. Tangential inlet momentum sets the water rotating, rotation produces a floor sweep toward the centre, and a dual drain divides the outflow into a small solids-rich stream and a large clean one. Get that right and the biofilter's job shrinks; get it wrong and every downstream process inherits the difference.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "The tank is the first unit process, not just a container — it separates solids before any filter sees them.",
    "Rotation is driven by inlet momentum, so inlet velocity matters more than flow rate alone.",
    "The floor sweep toward the centre drain is what makes a circular tank self-cleaning.",
    "A dual drain splits the flow so the solids-rich minority can be treated separately.",
    "Adjustable inlets are essential: one tank must serve several life stages.",
    "Measure oxygen at the outlet — the worst water in the tank is the water that matters.",
  ],
  related: ["hydraulics", "tss-solids", "mechanical-filtration", "system-architecture"],
  furtherReading: [
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension fact sheets on culture tank design, tank hydraulics and solids management in recirculating systems.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description: "Technical guidance covering culture unit design within recirculating aquaculture systems.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
  ],
};
