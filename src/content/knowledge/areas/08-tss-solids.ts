import type { KnowledgeArea } from "../types";

export const tssSolids: KnowledgeArea = {
  number: "08",
  slug: "tss-solids",
  title: "Solids and TSS",
  navSummary: "Solids production, particle size, loading and sludge handling.",
  summary:
    "Solids are the waste stream that becomes every other waste stream. Where they are captured, and how quickly, determines the load carried by biofiltration, disinfection and oxygenation.",
  difficulty: "intermediate",
  topics: ["filtration", "water", "operations"],
  tags: ["TSS", "solids", "sludge", "particle size", "settleable solids"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-03-10",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Solids are the visible waste: faeces and uneaten feed. They matter more than they look like they should, because if they are not taken out quickly they fall apart, dissolve, and turn into the invisible problems — ammonia, cloudy water and oxygen demand.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Total suspended solids, TSS, is the mass of particulate material held in a volume of water, measured by filtration and drying. In a recirculating system that material is predominantly fish faeces, uneaten feed, sloughed biofilm and bacterial floc.",
        },
        {
          kind: "text",
          value:
            "TSS is a single number describing a population of particles with very different behaviours. Settleable solids fall out of quiet water and can be removed by gravity or rotation. Suspended solids stay in the water column and require screening. Fine and colloidal solids pass most conventional equipment and are the fraction that accumulates.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Particle size distribution matters more than total mass",
          value:
            "Two systems can carry the same TSS and behave completely differently. A loop whose solids are large and settleable is easy to treat; a loop whose solids have been sheared into fine particles carries the same mass in a form that no screen will remove.",
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
            "Solids left in suspension mineralise, adding ammonia and dissolved organic carbon to the loop.",
            "Organic loading on the biofilter favours heterotrophic bacteria that displace nitrifiers.",
            "Suspended solids scatter and absorb ultraviolet light, reducing the delivered disinfection dose.",
            "Decomposing solids exert a continuous oxygen demand that must be met by the oxygenation system.",
            "Fine particles irritate gills, contributing to stress and secondary infection independently of chemistry.",
            "Solids accumulating in pipework and dead zones go anaerobic, producing hydrogen sulphide.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "How solids behave in the loop",
      blocks: [
        {
          kind: "flow",
          caption: "The life of a particle in a recirculating system",
          steps: [
            {
              label: "Production",
              detail:
                "A faecal pellet or uneaten feed particle enters the water, initially large, cohesive and readily settleable.",
            },
            {
              label: "Transport",
              detail:
                "Tank hydraulics move it toward the drain. Time spent in the tank is the first opportunity for degradation.",
            },
            {
              label: "Shear",
              detail:
                "Pumps, sharp fittings, aeration and turbulence progressively break the particle into smaller fragments, each harder to capture than the last.",
            },
            {
              label: "Capture, or not",
              detail:
                "Fragments above the screen aperture are removed. Those below it pass and return to the tank, to be sheared again on the next circuit.",
            },
            {
              label: "Mineralisation",
              detail:
                "Particles that remain in the loop are hydrolysed and consumed by bacteria, converting to dissolved organic carbon, ammonia and oxygen demand.",
            },
            {
              label: "Sludge removal",
              detail:
                "Captured solids leave as a concentrated stream. If they are stored on site without control, their leachate returns the dissolved load to the system.",
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
          name: "Solids production from feed",
          expression: "P_TSS = F x (1 - D) + W",
          terms: [
            { symbol: "P_TSS", meaning: "Solids produced per day", unit: "kg/day" },
            { symbol: "F", meaning: "Feed fed per day", unit: "kg/day" },
            { symbol: "D", meaning: "Apparent digestibility of the feed, as a fraction", unit: "dimensionless" },
            { symbol: "W", meaning: "Uneaten feed and other particulate inputs per day", unit: "kg/day" },
          ],
          example:
            "Consider a hypothetical system fed 40 kg/day. The undigested fraction of that feed leaves the fish as faecal solids, and any feed not eaten adds to the same stream at full mass.",
          limitations:
            "Digestibility is a property of a specific diet fed to a specific species at a specific size and temperature, not a general figure, and uneaten feed depends entirely on feeding practice. This expression estimates mass and says nothing about the particle size distribution, which governs how much of that mass can actually be captured. The appropriate design values depend on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "list",
          items: [
            "Minimise shear between production and capture. Every pump and every sharp fitting upstream of the filter reduces the capturable fraction.",
            "Capture concentrated streams concentrated. The tank bottom drain carries most of the settleable load in a small flow and should be treated as such.",
            "Removal efficiency at a given aperture is meaningless without knowing the particle size distribution arriving at it.",
            "Uneaten feed is the most expensive solid in the system: it is paid for as feed and then paid for again as treatment.",
            "Solids removed from the water but retained on the farm are only partially removed.",
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
            "Design the tank for solids transport first, since nothing downstream can capture what never left the tank.",
            "Route the bottom drain to a dedicated separation step rather than combining it with the clean side flow.",
            "Place mechanical filtration before any pump where the layout permits it.",
            "Size sludge thickening, storage and removal for peak production, and provide a route off site.",
            "Provide a means of sampling solids at several points in the loop, so capture performance can be measured rather than assumed.",
            "Eliminate dead legs and low points in pipework where solids can settle and go anaerobic.",
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
            "Feed to appetite and observe. Uneaten feed is both a production loss and the largest avoidable solids input.",
            "Trend backwash frequency and sludge volume as proxies for solids load; they respond faster than laboratory TSS.",
            "Inspect tank floors and pipework low points routinely for accumulation.",
            "Remove sludge from site on schedule, and keep sludge handling physically separated from clean areas.",
            "Correlate any biofilter or UV performance change with the solids record before investigating those units in isolation.",
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
          caption: "Solids symptoms and first checks",
          columns: ["Symptom", "Inspect or measure first", "Common direction"],
          rows: [
            [
              "Water persistently cloudy, filter apparently working",
              "Particle size in the water, shear points upstream of the filter",
              "Solids sheared below the screen aperture and now circulating indefinitely",
            ],
            [
              "Solids on the tank floor",
              "Inlet velocity, rotation, drain condition",
              "Tank hydraulics failing to transport solids to the drain",
            ],
            [
              "Sludge volume rising with no feed increase",
              "Feed uptake, feeder calibration, biofilm sloughing",
              "Uneaten feed, or a biofilter shedding biofilm",
            ],
            [
              "Hydrogen sulphide odour at a sump or pipe run",
              "Low points and dead legs for accumulation",
              "Solids settled in a quiescent zone and turned anaerobic",
            ],
            [
              "UV performance falling at constant lamp hours",
              "Water clarity and transmittance at the UV inlet",
              "Suspended solids reducing the delivered dose",
            ],
          ],
          basis:
            "A diagnostic ordering. Acceptable solids levels depend on species, loading, temperature, water chemistry and system configuration.",
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
            "Flush low points and dead legs on a schedule rather than when odour appears.",
            "Clean separator underflows and sludge lines, which block progressively and silently.",
            "Calibrate feeders and verify delivered quantity against intended quantity.",
            "Inspect and maintain sludge thickening and dewatering equipment as production equipment, not as ancillary plant.",
            "Sample and record TSS periodically to anchor the operational proxies against a real measurement.",
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
            "Judging solids management by water clarity, which reflects only the fine fraction.",
            "Pumping raw tank water before filtration and destroying the capturable particle size.",
            "Overfeeding, then treating the resulting solids and ammonia as an equipment shortfall.",
            "Storing sludge on site and allowing its leachate back into the loop.",
            "Ignoring settled solids in pipework until hydrogen sulphide announces them.",
            "Measuring TSS without ever considering particle size distribution.",
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
            "Fine and colloidal solids are the unresolved fraction. Foam fractionation removes surface-active colloidal material and is most effective in saline water; ozone can alter particle surface properties to improve their removal, at the cost of introducing a residual that must be controlled. Both are additions to screening rather than replacements for it.",
        },
        {
          kind: "text",
          value:
            "Sludge is also a resource question. Thickening and stabilisation determine disposal cost, and anaerobic treatment or nutrient recovery can change the economics of the waste stream. Those options constrain the design of the collection system, so they belong in the original design rather than in a later retrofit.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Particle size management is an active engineering problem",
          value:
            "Controlling the particle size distribution in a recirculating loop — minimising shear while still moving water efficiently — remains an area where practice depends heavily on measurement and system-specific experience.",
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
            "Solids are the upstream cause of most downstream problems. Their mass comes from feed digestibility and feeding accuracy; their treatability comes from particle size, which is destroyed by shear. Move them out of the tank quickly, capture them before they are broken up, and remove them from the site — then biofiltration, disinfection and oxygenation all work closer to design.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Particle size distribution governs treatability more than total TSS does.",
    "Shear from pumps and turbulence converts capturable solids into permanently circulating fines.",
    "Solids left in the loop mineralise into ammonia, dissolved organic carbon and oxygen demand.",
    "Uneaten feed is paid for twice: once as feed, once as treatment load.",
    "Suspended solids reduce UV dose and promote heterotrophic growth on biofilter media.",
    "Solids removed from the water but stored on site return as dissolved load.",
  ],
  related: ["mechanical-filtration", "culture-tanks", "biofiltration", "feed-management"],
  furtherReading: [
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension fact sheets on solids removal, waste characterisation and sludge management in aquaculture.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on aquaculture waste management and effluent handling.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
  ],
};
