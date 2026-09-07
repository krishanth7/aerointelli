import type { KnowledgeArea } from "../types";

export const piping: KnowledgeArea = {
  number: "23",
  slug: "piping",
  title: "Piping",
  navSummary: "Materials, sizing, layout, valves and the joints that decide reliability.",
  summary:
    "Pipework is the part of the plant that is cheapest to specify well and most expensive to correct. Sizing sets the energy cost permanently, and jointing sets the failure rate.",
  difficulty: "intermediate",
  topics: ["engineering", "operations"],
  tags: ["pipework", "materials", "valves", "sizing", "installation"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-05-09",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Pipes carry the water between every part of the farm. Bigger pipes cost a little more once and save pumping money forever. Bad joints and awkward valve positions cause most of the leaks and most of the jobs nobody wants to do.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Piping covers the pipes, fittings, valves and supports that convey water, air, oxygen and sludge through the facility. It is the physical realisation of the hydraulic design, and it determines how much of that design survives contact with the building.",
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
            "Pipe diameter sets friction loss, and friction loss is paid in pumping energy every hour for the life of the plant.",
            "Joints are the usual location of leaks, and a leak in a recirculating loop is a loss of water, of head and sometimes of level protection.",
            "Valve position and type determine whether a section can be isolated for maintenance without draining the system.",
            "Material selection determines service life in a wet, saline, ozonated or chemically treated environment.",
            "Layout determines whether pipes can be inspected, cleaned and replaced, or whether they are buried behind equipment.",
          ],
        },
        {
          kind: "callout",
          tone: "established",
          title: "Diameter is a permanent decision",
          value:
            "Friction loss falls steeply as diameter increases, so a modest increase in pipe size produces a large reduction in head. The capital difference is paid once at construction; the friction is paid continuously in pump power. Undersized pipework is among the hardest design errors to correct later.",
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "Materials and their fit",
      blocks: [
        {
          kind: "table",
          caption: "Common pipework materials and where each is used",
          columns: ["Material", "Typical use", "Considerations"],
          rows: [
            [
              "uPVC",
              "General pressure and gravity water lines",
              "Widely available, solvent welded, low cost. Sensitive to ultraviolet exposure and to impact at low temperature; requires support against sagging",
            ],
            [
              "HDPE",
              "Buried lines, larger diameters, ground movement",
              "Tough and fusion jointed, giving a homogeneous joint. Requires fusion equipment and trained operators; thermal expansion is significant",
            ],
            [
              "PP and PPR",
              "Warm water lines, chemical service",
              "Good chemical and temperature tolerance, heat fused. Cost higher than uPVC",
            ],
            [
              "Stainless steel",
              "Selected process lines, ozone service, hygienic areas",
              "Durable and cleanable. Grade must be selected against the actual water chemistry, since chloride can cause pitting in unsuitable grades",
            ],
            [
              "Flexible hose",
              "Temporary connections, vibration isolation, harvest and transfer",
              "Convenient but consumable. Should not become permanent process pipework, as it collapses, fouls and is rarely supported",
            ],
          ],
          basis:
            "A materials overview. Suitability depends on temperature, pressure, chemical exposure, salinity, ultraviolet exposure and local availability, and the appropriate selection depends on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "system-role",
      heading: "Valves and isolation",
      blocks: [
        {
          kind: "table",
          caption: "Valve types and their duty",
          columns: ["Type", "Duty", "Notes"],
          rows: [
            [
              "Butterfly",
              "Isolation and coarse regulation on larger lines",
              "Compact and economical at diameter. Disc sits in the flow path, so it adds loss even when fully open",
            ],
            [
              "Ball",
              "Isolation on smaller lines",
              "Full bore when open, low loss, quick to operate. Not intended for throttling",
            ],
            [
              "Knife gate",
              "Sludge and solids-bearing lines",
              "Tolerates solids that would jam other types",
            ],
            [
              "Check",
              "Preventing reverse flow, typically at pump discharge",
              "A maintenance item; a failed check valve can drain a sump or allow backflow through a stopped pump",
            ],
            [
              "Air release and vacuum breaker",
              "Releasing trapped air and preventing siphon or collapse",
              "Placed at high points and where a siphon could form. Frequently omitted and then diagnosed as a mysterious flow loss",
            ],
          ],
          basis:
            "A functional overview of valve types. Selection depends on line size, duty, solids content, chemical exposure and system configuration.",
        },
        {
          kind: "text",
          value:
            "The isolation principle is that every item requiring maintenance should be removable without draining the loop or interrupting life support to the fish. That means isolation valves either side of pumps, filters, heat exchangers and instruments, and it means deciding this at design because retrofitting a valve requires the shutdown it was meant to avoid.",
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
            "Size for velocity, not for the fitting that happens to be on the pump. Excessive velocity produces friction loss, noise and erosion; very low velocity allows solids to settle in the line.",
            "Minimise fittings. Every bend, tee and reducer adds loss, and long-radius bends cost less head than sharp ones.",
            "Design gravity lines with continuous fall and no local high points, since a high point collects air and throttles the line.",
            "Provide air release at unavoidable high points and drain points at low points.",
            "Support pipework properly. Unsupported plastic sags with temperature and time, creating low points and stress at joints.",
            "Allow for thermal expansion, particularly in long plastic runs and where water or air temperature varies.",
            "Keep solids-bearing lines short, straight and steep, and give them rodding or flushing access.",
            "Label every line and valve, so isolation during an incident does not depend on tracing pipes.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Joints fail where the work was rushed",
          value:
            "Most pipework failures are workmanship rather than material: inadequate solvent cement preparation, an unsupported joint carrying load, an over-tightened threaded fitting, or a flange pulled into alignment by its bolts. Installation quality is a design deliverable, not a site detail.",
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
            "Route pipework where it can be reached, inspected and replaced, rather than where it is tidiest.",
            "Keep pipe runs short by placing the plant room close to the tanks it serves.",
            "Separate clean and dirty lines physically, and never cross-connect them, so that a valve error cannot route sludge into culture water.",
            "Provide sampling points where water quality actually needs to be measured.",
            "Provide spool pieces or removable sections at equipment, so a unit can be lifted out without cutting pipe.",
            "Consider oxygen service separately, since oxygen lines require compatible materials, cleanliness and dedicated fittings.",
            "Design for the flushing and cleaning regime the lines will need, rather than assuming they stay clean.",
            "Record the as-built layout with line sizes, materials and valve numbers.",
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
            "Exercise valves periodically, since a valve never operated is frequently seized when it is finally needed.",
            "Flush solids-bearing lines on schedule rather than when they block.",
            "Watch for rising pump power at falling flow, which indicates progressive fouling or partial blockage in the pipework.",
            "Inspect joints and supports for movement, weeping and stress marks.",
            "Keep the valve schedule and line labelling current when anything changes.",
            "Hold spares for the fittings and valve types actually installed, since a failure at night is repaired with what is on site.",
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
          caption: "Pipework symptoms and first checks",
          columns: ["Symptom", "Check first", "Common direction"],
          rows: [
            [
              "Flow below design with correct pump speed",
              "Head loss across each section, valve positions, air at high points",
              "Undersized pipework, excess fittings, a partly closed valve, or trapped air",
            ],
            [
              "Gravity line running at reduced capacity",
              "Fall along the run, high points, vent provision, internal fouling",
              "A local high point holding air, or accumulated solids reducing the effective bore",
            ],
            [
              "Recurring leaks at joints",
              "Support spacing, alignment, jointing method and preparation",
              "Pipe weight or misalignment carried by the joint rather than by supports",
            ],
            [
              "Sludge line blocking repeatedly",
              "Fall, velocity, bends, flushing frequency",
              "Insufficient slope or velocity, or too many changes of direction",
            ],
            [
              "Noise and vibration in pipework",
              "Velocity, pump condition, support and anchoring, cavitation at valves",
              "Velocity too high for the line size, or throttling causing cavitation",
            ],
            [
              "Material degradation",
              "Exposure to ultraviolet light, ozone, chemicals and temperature against material specification",
              "A material used outside the service it was selected for",
            ],
          ],
          basis:
            "A diagnostic ordering. Appropriate velocities, slopes and materials depend on species, loading, temperature, water chemistry and system configuration.",
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
            "Inspect joints, flanges and supports on a schedule, looking for movement and weeping before failure.",
            "Exercise and lubricate valves, and record which ones were found stiff.",
            "Flush and rod solids-bearing lines before they restrict.",
            "Check air release and vacuum breaker devices, which fail silently.",
            "Inspect any pipework exposed to sunlight for ultraviolet degradation.",
            "Update the as-built drawing and valve schedule after every modification.",
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
            "Sizing pipework down to save capital and paying the friction in energy indefinitely.",
            "Using the pump's connection size as the pipe size for the whole run.",
            "Omitting isolation valves, so any maintenance requires draining the loop.",
            "Creating high points with no air release, then treating the resulting flow loss as a pump problem.",
            "Leaving flexible hose in place as permanent process pipework.",
            "Using sharp elbows throughout where long-radius bends were available.",
            "Failing to label lines and valves, so isolation during an incident depends on guesswork.",
            "Cross-connecting clean and waste lines for convenience.",
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
            "Surge and water hammer deserve attention wherever a valve can close quickly or a pump can stop suddenly on a long line. The pressure transient can exceed the steady operating pressure substantially, and it acts on joints and fittings rather than on the pipe wall. Slow-acting valves, soft starting and stopping, and surge protection where the geometry warrants it are the usual responses.",
        },
        {
          kind: "text",
          value:
            "Biofouling inside pipework is a slow, cumulative process that reduces effective diameter and raises head continuously. It is one of the reasons pump power trended against flow is such a useful maintenance indicator: the pipework degrades before anything visible happens, and the energy record shows it first.",
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
            "Pipework converts hydraulic design into a working plant. Size generously because friction is a permanent cost, select materials against the actual service, provide isolation so maintenance does not require a shutdown, avoid high points without vents, support the pipe rather than the joints, and label everything. Most failures are workmanship and access, not material.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Pipe diameter is a permanent decision: capital once, friction forever.",
    "Isolation valves must be designed in, because retrofitting one requires the shutdown it would have avoided.",
    "High points without air release throttle a line and get misdiagnosed as pump problems.",
    "Most leaks are workmanship and support, not material failure.",
    "Solids-bearing lines need slope, velocity, few bends and flushing access.",
    "Label every line and valve, so isolation during an incident is not guesswork.",
  ],
  related: ["hydraulics", "pumps", "energy", "farm-design"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on aquaculture system design and infrastructure.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension publications on plumbing, water conveyance and equipment installation for aquaculture.",
    },
  ],
};
