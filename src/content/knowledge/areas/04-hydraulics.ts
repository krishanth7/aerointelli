import type { KnowledgeArea } from "../types";

export const hydraulics: KnowledgeArea = {
  number: "04",
  slug: "hydraulics",
  title: "Hydraulics",
  navSummary: "Flow, turnover, retention time, head loss and where the energy goes.",
  summary:
    "Every treatment process is really a contact-time process. Hydraulics decides how much water arrives, how long it stays, and how much power is spent moving it around the loop.",
  difficulty: "intermediate",
  topics: ["engineering", "water"],
  tags: ["flow rate", "head loss", "retention time", "turnover"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-02-22",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Water has to be pushed around the loop, and pushing costs electricity. Bends, valves and narrow pipes all make it harder to push. Design the plumbing well once and the farm pays a smaller power bill every day it operates.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Hydraulics in a recirculating system covers the flow rate through each part of the loop, the time water spends in each process, the pressure lost getting it there, and the energy required to make up that loss. It is the discipline that connects a process requirement — so many minutes of contact, so many tank turnovers — to a pump on a nameplate and a figure on an electricity bill.",
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
            "Pumping is typically the largest continuous electrical load on a recirculating farm, and it runs every hour of every day for the life of the facility. A hydraulic design decision made once is paid for continuously.",
        },
        {
          kind: "list",
          items: [
            "Flow sets treatment. Every unit process removes a concentration from a flow; halving the flow halves the mass removed at the same efficiency.",
            "Retention time sets performance. A UV unit, a degasser and a biofilter all depend on how long the water is in contact with them.",
            "Head loss sets energy. Undersized pipework converts electricity into friction and heat, permanently.",
            "Distribution sets uniformity. If the manifold cannot deliver equal flow to every tank, no amount of treatment capacity fixes the far end of the run.",
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
            "A pump adds energy to the water, expressed as head. That head is spent against three things: static lift, the elevation the water must be raised; friction loss along straight pipe; and minor losses at fittings, valves, screens and process equipment. The pump settles at the duty point where the head it can produce equals the head the system demands at that flow.",
        },
        {
          kind: "flow",
          caption: "Where a pump's energy goes",
          steps: [
            {
              label: "Static lift",
              detail:
                "The elevation difference between the source water surface and the discharge point. Irreducible for a given layout, which is why elevation is designed at the civil stage.",
            },
            {
              label: "Pipe friction",
              detail:
                "Loss along straight runs, rising steeply as velocity increases. Doubling velocity in the same pipe increases friction loss disproportionately, which is why generous pipe sizing pays back continuously.",
            },
            {
              label: "Fittings and valves",
              detail:
                "Every bend, tee, reducer and partly closed valve adds loss. A long run of sweeping bends can cost less than a short run of sharp ones.",
            },
            {
              label: "Process equipment",
              detail:
                "Screens, filter panels, media beds, degasser packing and heat exchangers each impose a loss that increases as they foul.",
            },
            {
              label: "Duty point",
              detail:
                "The pump operates where its curve intersects the system curve. As equipment fouls, the system curve steepens and the pump moves to a lower flow at higher head.",
            },
          ],
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Engineering principles",
      blocks: [
        {
          kind: "formula",
          name: "Hydraulic retention time",
          expression: "HRT = V / Q",
          terms: [
            { symbol: "HRT", meaning: "Mean time water spends in the vessel", unit: "min" },
            { symbol: "V", meaning: "Effective working volume of the vessel", unit: "m3" },
            { symbol: "Q", meaning: "Flow through the vessel", unit: "m3/min" },
          ],
          example:
            "Consider a hypothetical contact vessel of 4 m3 receiving 2 m3/min. Mean retention is two minutes; whether that is sufficient depends entirely on the process being carried out in it.",
          limitations:
            "HRT is a mean, and means conceal short-circuiting. A vessel with a mean retention of two minutes may pass some water in seconds if it is poorly baffled. Effective retention should be confirmed by tracer testing rather than assumed from geometry. The appropriate value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "list",
          items: [
            "Design for peak flow with the dirtiest expected equipment condition, not for clean commissioning conditions.",
            "Keep velocities in a band: too low and solids settle in the pipe, too high and friction loss and erosion rise.",
            "Prefer fewer, larger pipes over many small ones for the same duty.",
            "Use gravity for every transfer that geometry permits. Gravity flow is free and does not stop when a breaker trips.",
            "Measure flow where it matters — at each tank and across each process — not only at the pump discharge.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Pipe sizing is an operating cost decision, not a capital one",
          value:
            "The additional capital in a larger pipe is paid once. The friction loss in an undersized pipe is paid every hour the pump runs, for the life of the plant.",
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
            "Build the system curve before selecting a pump, including fouled-condition losses and the flow control method.",
            "Select pumps so the normal duty point sits in the efficient region of the curve, not at the extreme end where a small system change moves the operating point substantially.",
            "Prefer variable speed control over throttling. A throttle valve controls flow by wasting energy on purpose.",
            "Design distribution manifolds so that flow to the last tank equals flow to the first, using velocity reduction or balancing valves as appropriate.",
            "Provide flow measurement, isolation and drain points at every branch, or the system cannot be commissioned or diagnosed.",
            "Allow for the transient case: what the hydraulics do at startup, at shutdown, and when a standby pump takes over.",
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
            "Log flow and pump power together. A rising power draw at falling flow is the clearest early signal of fouling anywhere in the loop.",
            "Compare current head loss across each process against its commissioning figure, not against a manufacturer's clean-condition value.",
            "Re-balance tank flows after any change to pumping, pipework or filtration.",
            "Watch for air entrainment at inlets and at pump suction, which reduces both flow and pump life.",
            "Confirm that standby pumps can actually hold the duty point, not just that they run.",
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
          caption: "Hydraulic symptoms and first checks",
          columns: ["Symptom", "Measure first", "Common direction"],
          rows: [
            [
              "Flow below design across the whole loop",
              "Pump suction condition, differential pressure across each process in turn",
              "One fouled process, a partly closed valve, or air on the suction side",
            ],
            [
              "Pump power rising, flow steady or falling",
              "System head against the pump curve, filter differentials",
              "Progressive fouling moving the duty point up the curve",
            ],
            [
              "Far tanks receiving less flow than near tanks",
              "Flow at first and last branch, manifold velocity",
              "Manifold sized to average flow, or balancing never carried out",
            ],
            [
              "Noise, vibration or damage at the pump",
              "Suction pressure and available NPSH, strainer condition",
              "Cavitation from insufficient suction head or a blocked strainer",
            ],
            [
              "Solids settling inside pipework",
              "Velocity in the affected run",
              "Pipe oversized for the actual flow, or flow reduced below the self-scouring range",
            ],
          ],
          basis:
            "A diagnostic ordering. Target velocities, retention times and head losses depend on species, loading, temperature, water chemistry and system configuration.",
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
            "Record differential pressure across each unit process at a fixed interval and trend it.",
            "Clean strainers and screens on schedule rather than on symptom.",
            "Verify flow meters against a second method periodically; a drifting meter hides a developing fault.",
            "Inspect and exercise control and isolation valves so they can be closed when they are needed.",
            "Re-measure the full system head after any pipework modification.",
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
            "Consider a hypothetical loop where a designer must move a given flow either through a long run of large-diameter pipe with sweeping bends, or a short run of smaller pipe with several sharp elbows and a throttling valve for balance. The second option is cheaper to install and occupies less space.",
        },
        {
          kind: "text",
          value:
            "The first option almost always wins over the life of the plant, because its friction and fitting losses are lower at every hour of operation and it does not rely on a valve that controls flow by destroying head. The correct way to make the comparison is to build both system curves, find both duty points, and compare annual pumping energy — not to compare the two material quotations.",
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
            "Selecting a pump from a required flow alone, without constructing the system curve.",
            "Sizing pipework to minimise capital, then paying the friction loss for twenty years.",
            "Controlling flow by throttling when variable speed drive was available.",
            "Ignoring fouled-condition head, so the system only meets design flow when it is brand new.",
            "Assuming mean retention time equals effective contact time, without tracer confirmation.",
            "Omitting flow measurement at the branches, leaving the plant undiagnosable.",
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
            "Airlift pumping is used where a modest lift is required and air is already being supplied, converting a low-pressure air stream into water movement with no moving parts in the water. It combines transfer and lift, and its efficiency is strongly dependent on submergence and lift height.",
        },
        {
          kind: "text",
          value:
            "Surge and transient analysis matters wherever large flows are stopped quickly. Rapid valve closure or an abrupt pump trip can generate pressure transients capable of damaging pipework, and the mitigation — slow-closing valves, relief paths, correct pipe support — is designed in rather than added later.",
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
            "Hydraulics converts process requirements into flow, contact time and pumping energy. Generous pipe sizing, gravity wherever geometry allows, variable speed rather than throttling, and measurement at every branch are the decisions that determine both whether the plant meets its design and what it costs to run.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Pumping is a continuous load, so hydraulic decisions are operating cost decisions.",
    "Flow sets mass removal; retention time sets process performance.",
    "Head is spent on static lift, pipe friction, fittings and process equipment — build the system curve before selecting a pump.",
    "Design for peak flow at fouled-equipment condition, not clean commissioning condition.",
    "Throttling controls flow by wasting energy; variable speed does not.",
    "Mean retention time hides short-circuiting; confirm effective contact time by tracer testing.",
  ],
  related: ["pumps", "piping", "culture-tanks", "energy"],
  furtherReading: [
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension publications on pumping, piping and water flow in recirculating aquaculture systems.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description: "Technical guidance covering water handling and system engineering for aquaculture facilities.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
  ],
};
