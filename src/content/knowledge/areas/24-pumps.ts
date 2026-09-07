import type { KnowledgeArea } from "../types";

export const pumps: KnowledgeArea = {
  number: "24",
  slug: "pumps",
  title: "Pumps",
  navSummary: "Types, curves, duty point selection, cavitation and redundancy.",
  summary:
    "A pump does not deliver a flow rate; it delivers whatever flow the system head allows. Selection is therefore about the intersection of two curves, not about a number on a nameplate.",
  difficulty: "advanced",
  topics: ["engineering", "operations"],
  tags: ["pump curve", "duty point", "cavitation", "NPSH", "redundancy"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-05-13",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Pumps keep the water moving, and if they stop the fish have minutes rather than hours. A pump only gives its rated flow if the pipework lets it. Choosing the wrong one wastes power every day and wears out early.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "A pump adds energy to water, expressed as head, so that it can overcome elevation and friction and move around the loop. In a recirculating system pumps carry the recirculation duty, and often also sludge transfer, backwashing, makeup water and dosing.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Flow is set by where the curves cross",
          value:
            "A pump has a characteristic curve of head against flow. The pipework has a system curve of required head against flow. The pump operates where they intersect, and nowhere else. A pump installed on a system with more head than assumed delivers less flow than its specification, at worse efficiency.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why it matters",
      blocks: [
        {
          kind: "list",
          items: [
            "Recirculation pumping runs continuously, so it is generally the largest single electrical load in the plant.",
            "Loss of pumping is loss of life support, because gas transfer and filtration both depend on flow.",
            "Efficiency at the actual duty point, not the rated point, determines the energy cost.",
            "A pump run far from its best efficiency point wears faster, vibrates more and fails sooner.",
            "Pump behaviour is the most sensitive available indicator of change elsewhere in the system.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "Types and their duty",
      blocks: [
        {
          kind: "table",
          caption: "Pump types used in recirculating systems",
          columns: ["Type", "Typical duty", "Considerations"],
          rows: [
            [
              "Centrifugal, end suction",
              "General recirculation against moderate head",
              "Efficient over a broad range, widely available. Requires a flooded suction or priming, and is sensitive to suction conditions",
            ],
            [
              "Axial and mixed flow",
              "High flow against low head, typical of large loops with gravity return",
              "Well matched to the low-head, high-flow character of many recirculating loops, where a centrifugal pump would be poorly used",
            ],
            [
              "Submersible",
              "Sumps, transfer, drainage",
              "Simple installation with no priming. Maintenance requires removal, and heat and seal condition are less visible",
            ],
            [
              "Airlift",
              "Low-head circulation and simultaneous aeration",
              "No moving parts in the water and inherent gas transfer. Limited to low lift, and its performance depends on submergence",
            ],
            [
              "Progressive cavity and diaphragm",
              "Sludge transfer, dosing, viscous or solids-bearing duty",
              "Handles solids and gives controllable displacement. Wearing parts are consumable and must be held as spares",
            ],
          ],
          basis:
            "A functional overview of pump types. Selection depends on required flow, available head, solids content, layout and system configuration, and the appropriate choice depends on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Engineering principles",
      blocks: [
        {
          kind: "formula",
          name: "Hydraulic power delivered by a pump",
          expression: "P_hydraulic = rho x g x Q x H",
          terms: [
            { symbol: "P_hydraulic", meaning: "Hydraulic power imparted to the water", unit: "W" },
            { symbol: "rho", meaning: "Density of the water", unit: "kg/m^3" },
            { symbol: "g", meaning: "Acceleration due to gravity", unit: "m/s^2" },
            { symbol: "Q", meaning: "Volumetric flow rate", unit: "m^3/s" },
            { symbol: "H", meaning: "Total head delivered", unit: "m" },
          ],
          example:
            "Consider a hypothetical recirculation duty where the flow and the total head are both known from the hydraulic design. The expression gives the power actually delivered to the water; the electrical power drawn is larger, by the combined efficiency of the pump and its motor and drive.",
          limitations:
            "This is the ideal hydraulic power only. Electrical consumption depends on pump efficiency at the actual duty point, motor efficiency, drive losses and any throttling. Head must be the true system head including friction and fittings, not the static lift alone. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "list",
          items: [
            "Select at the duty point, not the rated point, and confirm that the intersection sits near the best efficiency point.",
            "Calculate the system curve from the real pipework, including fittings, filters and their fouled condition, not the clean condition alone.",
            "Check suction conditions. Available net positive suction head must exceed the pump's requirement with margin, or the pump cavitates.",
            "Prefer variable speed where the duty varies, since speed reduction reduces power steeply, whereas throttling wastes it as heat.",
            "Anticipate that head rises as filters and pipework foul, so the duty point migrates over the maintenance interval.",
            "Design redundancy around the consequence of stopping, not around the cost of the pump.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Cavitation is a suction problem, not a pump fault",
          value:
            "When the pressure at the impeller eye falls below the vapour pressure of the water, vapour bubbles form and collapse, eroding the impeller and producing a characteristic rattling noise. The cause is almost always suction-side: insufficient submergence, an undersized or partly blocked suction line, or a throttled suction valve. Replacing the pump without correcting the suction repeats the failure.",
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
            "Establish the system curve before selecting any pump, and include a fouling allowance.",
            "Provide standby capacity for life-support duty, with automatic changeover and an alarm on the changeover event.",
            "Consider several smaller pumps rather than one large one, since this gives partial capacity on failure and better turndown.",
            "Design suction pipework generously and short, with the pump flooded wherever possible.",
            "Provide isolation valves and removable spool pieces so a pump can be lifted without cutting pipe or draining the loop.",
            "Specify materials for the water chemistry, including salinity, ozone and any dosing chemicals.",
            "Provide a flow measurement and a power measurement, since the relationship between them is the diagnostic.",
            "Place pumps where noise and vibration do not reach the culture tanks, and mount them on suitable bases.",
          ],
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
            "Trend power against flow. Rising power at falling flow is the earliest reliable indication of fouling in the loop.",
            "Run standby pumps regularly rather than leaving them idle, since an unrun standby is frequently unavailable when needed.",
            "Test automatic changeover functionally, including the alarm, rather than assuming it works.",
            "Listen to pumps. Cavitation, bearing wear and impeller damage are audible before they are terminal.",
            "Record vibration and temperature where the plant warrants condition monitoring.",
            "Never throttle the suction side to control flow.",
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
          caption: "Pump symptoms and first checks",
          columns: ["Symptom", "Check first", "Common direction"],
          rows: [
            [
              "Flow lower than expected",
              "Actual duty point against the pump curve, total system head, valve positions",
              "System head higher than assumed at design, or fouling that has raised it since",
            ],
            [
              "Rattling or gravelly noise, vibration",
              "Suction conditions, submergence, suction line restriction, available suction head",
              "Cavitation from a suction-side restriction rather than a fault in the pump",
            ],
            [
              "Power rising while flow falls",
              "Filters, screens, pipework fouling, valve positions",
              "Progressive fouling moving the duty point up the curve",
            ],
            [
              "Repeated seal or bearing failure",
              "Alignment, duty point against best efficiency point, suction conditions, dry running",
              "Operation far from best efficiency, misalignment, or intermittent loss of suction",
            ],
            [
              "Pump loses prime",
              "Suction line air ingress, foot or check valve, sump level control",
              "Air drawn in through a joint or a vortex at low sump level",
            ],
            [
              "Standby fails to start on demand",
              "Changeover logic, control power, the pump's own condition after standing idle",
              "A standby that was never exercised, or a changeover never functionally tested",
            ],
          ],
          basis:
            "A diagnostic ordering. Appropriate flows, heads and margins depend on species, loading, temperature, water chemistry and system configuration.",
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
            "Inspect impellers and wear rings, since clearance loss reduces efficiency long before it stops the pump.",
            "Service seals and bearings on a schedule based on running hours.",
            "Check and record alignment on directly coupled units after any disturbance.",
            "Exercise standby pumps and log the run.",
            "Verify variable speed drives are modulating rather than pinned at maximum.",
            "Keep spares for the pumps installed, including seals, bearings and at least one complete critical unit where the consequence of failure warrants it.",
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
            "Selecting on rated flow rather than on the duty point where the curves actually intersect.",
            "Calculating system head from the clean condition and ignoring fouling.",
            "Oversizing and then throttling, which wastes energy continuously and runs the pump away from its efficient point.",
            "Ignoring net positive suction head and then replacing cavitation-damaged impellers repeatedly.",
            "Providing no standby on a life-support duty.",
            "Providing a standby but never running or testing it.",
            "Omitting flow or power measurement, leaving no basis for diagnosis.",
            "Throttling the suction side to control flow.",
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
            "Parallel and series operation behave less intuitively than expected. Two identical pumps in parallel do not deliver twice the flow, because adding flow raises the system head and moves the combined duty point up the system curve; the gain depends on how steep that curve is. On a steep, friction-dominated system the second pump adds relatively little. Series operation adds head rather than flow and is appropriate where the head requirement rather than the flow requirement is the constraint.",
        },
        {
          kind: "text",
          value:
            "The affinity relationships explain why variable speed is so effective: flow varies with speed, head with the square of speed, and power with the cube. A modest speed reduction therefore produces a disproportionate power saving, provided the system curve is friction-dominated. Where static lift dominates, the saving is much smaller, and the choice between variable speed and staged fixed-speed units should be made against the actual system curve.",
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
            "Pumps deliver flow at the intersection of their curve and the system's, so selection begins with the system curve and a fouling allowance. Sit the duty point near best efficiency, protect the suction to avoid cavitation, prefer variable speed on friction-dominated systems, provide and actually exercise standby capacity on life-support duty, and trend power against flow as the plant's earliest fouling signal.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "A pump delivers flow at the curve intersection, not at its nameplate rating.",
    "Compute the system curve including fouling before selecting anything.",
    "Cavitation is a suction-side problem; replacing the pump repeats the failure.",
    "Variable speed saves steeply on friction-dominated systems; throttling wastes deliberately.",
    "Life-support duty needs standby capacity that is exercised and functionally tested.",
    "Power trended against flow is the plant's earliest fouling indicator.",
  ],
  related: ["hydraulics", "piping", "energy", "failure-modes"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical publications on aquaculture engineering and water conveyance systems.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension publications on pump selection, sizing and operation for aquaculture facilities.",
    },
  ],
};
