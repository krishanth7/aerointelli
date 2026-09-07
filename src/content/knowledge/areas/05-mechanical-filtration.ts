import type { KnowledgeArea } from "../types";

export const mechanicalFiltration: KnowledgeArea = {
  number: "05",
  slug: "mechanical-filtration",
  title: "Mechanical Filtration",
  navSummary: "Drum filters, separators and settlement — taking solids out while they are still solids.",
  summary:
    "Solids removal is a race against time. Captured early, waste leaves as sludge; left in suspension, it dissolves and becomes a load on the biofilter and the oxygen system instead.",
  difficulty: "intermediate",
  topics: ["filtration", "engineering", "water"],
  tags: ["drum filter", "swirl separator", "settlement", "solids capture"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-02-26",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Fish waste and uneaten feed start as particles you can strain out. The longer they stay in the water, the more they break apart into pieces too small to catch, and then they dissolve. Mechanical filtration is about catching them early, gently, and getting them out of the building.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Mechanical filtration is the physical removal of suspended and settleable solids from the culture water by straining, settling or hydrocyclonic separation. It is the first engineered treatment stage after the culture tank, and its output is two streams: clarified water to the rest of the loop, and a concentrated sludge stream that leaves the system.",
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
            "Organic solids do not stay solid. Suspended in warm, aerated, biologically active water, they hydrolyse and are consumed by heterotrophic bacteria, which converts particulate waste into dissolved organic carbon, ammonia and an oxygen demand distributed throughout the loop.",
        },
        {
          kind: "list",
          items: [
            "Every particle removed early is a load the biofilter never has to carry.",
            "Heterotrophic bacteria feeding on dissolved organics compete with nitrifiers for space and oxygen on the biofilter media.",
            "Suspended solids scatter ultraviolet light, so disinfection performance depends directly on clarification upstream.",
            "Fine solids irritate gill tissue, which affects fish health independently of any chemical parameter.",
            "Solids left in the loop consume oxygen continuously, and that consumption is paid for at the oxygenation stage.",
          ],
        },
        {
          kind: "callout",
          tone: "established",
          title: "Particles break down, and the pieces cannot be strained",
          value:
            "Solids in a recirculating loop are progressively broken up by pumps, aeration and turbulence. Each pass makes the remaining particles smaller and harder to capture, which is why removal is placed as close to the tank as the layout allows.",
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
            "Three mechanisms are in common use, and most farms use more than one. Settling uses gravity and requires quiet water and time. Hydrocyclonic separation uses induced rotation to throw dense particles outward and downward, in a small footprint with no moving parts. Screening physically intercepts anything larger than the aperture, which is the only method that captures non-settleable particles.",
        },
        {
          kind: "table",
          caption: "Mechanical separation methods compared",
          columns: ["Method", "Mechanism", "Characteristics"],
          rows: [
            [
              "Settling basin",
              "Gravity separation in quiescent flow",
              "Simple, no power, no moving parts. Requires large footprint and long retention, and captured solids continue to degrade in place unless removed frequently.",
            ],
            [
              "Swirl separator / hydrocyclone",
              "Induced rotation drives dense particles outward and down",
              "Compact, no moving parts, effective on the concentrated bottom-drain stream. Captures only the settleable fraction; fine solids pass through.",
            ],
            [
              "Rotating drum or disc filter",
              "Screening on a fine mesh, backwashed by spray",
              "Captures a defined particle size continuously and produces a manageable backwash stream. Requires power, water for backwashing, and regular mesh maintenance.",
            ],
            [
              "Granular or bead filter",
              "Straining and adsorption through a packed media bed",
              "Captures finer material and can carry some biological activity. Requires backwashing that interrupts flow and must be managed so the bed does not go anaerobic.",
            ],
          ],
          basis:
            "A comparison of mechanisms and their characteristics. Which combination is appropriate depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "flow",
          caption: "Typical solids removal path",
          steps: [
            {
              label: "Tank bottom drain",
              detail:
                "A small, solids-rich flow leaves the tank centre carrying the majority of the settleable load.",
            },
            {
              label: "Primary separation",
              detail:
                "A swirl separator or settler concentrates that stream further, removing bulk solids with minimal shear.",
            },
            {
              label: "Screening",
              detail:
                "The combined flow passes a drum or disc filter, which intercepts particles above the mesh aperture and discharges them as backwash.",
            },
            {
              label: "Sludge handling",
              detail:
                "The backwash and separator underflow are thickened, stored and removed from site. Solids that stay on the farm continue to release dissolved load.",
            },
            {
              label: "Clarified water onward",
              detail:
                "Water proceeds to biofiltration with a reduced organic load, so the media supports nitrifiers rather than heterotrophs.",
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
          kind: "list",
          items: [
            "Capture early and gently. Every pump, every sharp bend and every aeration stage upstream of the filter shears particles into fractions that will not be caught.",
            "Mesh aperture is a choice, not a maximum. A finer screen captures more but blinds faster, uses more backwash water and imposes more head loss.",
            "Backwash water is a real loss. It leaves the loop carrying heat and treated water, and it must be counted in the water and energy balance.",
            "Separation performance is a function of retention and quiescence in settling devices, and of rotation and residence in hydrocyclonic ones — both are degraded by excess flow.",
            "The filter is a hydraulic component as well as a treatment one. Its head loss varies continuously with fouling and must be accommodated in the pump selection.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Design the sludge route before choosing the filter",
          value:
            "A mechanical filter concentrates waste. If there is nowhere for the concentrate to go, the sludge is stored on site, continues to break down, and returns to the loop as dissolved load through drains and handling.",
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
            "Place the filter as close to the culture tank as the layout allows, with the minimum of pumping and turbulence between them.",
            "Size for peak solids production, which is peak feeding, and confirm behaviour at low load where flow may be too high for good separation.",
            "Provide isolation and bypass so the filter can be serviced without stopping the loop, with a clear procedure for what happens to solids during the bypass.",
            "Specify backwash supply and drainage properly. An undersized backwash supply produces a filter that cannot clean itself at peak load.",
            "Choose materials and mesh for the water chemistry, including any ozone or disinfection residual that may reach them.",
            "Allow physical access for mesh panel replacement, which is a routine task.",
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
            "Trend backwash frequency. It is the most sensitive available indicator of the system's solids load, and it responds to feeding changes before water chemistry does.",
            "Inspect the backwash discharge visually every day; a clear discharge on a heavily fed system means solids are going somewhere else.",
            "Watch the level differential across the screen. A rising differential at constant load indicates blinding, fouling or a failing spray bar.",
            "Remove sludge from site on a schedule, not when storage is full.",
            "Record filter condition alongside water quality, so a biofilter excursion can be correlated with the solids load that preceded it.",
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
          caption: "Mechanical filtration symptoms and first checks",
          columns: ["Symptom", "Inspect or measure first", "Common direction"],
          rows: [
            [
              "Water turbid despite the filter running",
              "Mesh condition, seals and bypass paths, particle size in the water",
              "Damaged mesh, water bypassing the screen, or particles already finer than the aperture",
            ],
            [
              "Backwash running almost continuously",
              "Solids load, spray nozzle condition, backwash pressure",
              "Genuine overload from increased feeding, or nozzles blocked so cleaning is ineffective",
            ],
            [
              "Backwash discharge nearly clear on a heavily fed system",
              "Upstream shear points, separator performance, tank floor condition",
              "Solids broken down before reaching the filter, or never leaving the tank",
            ],
            [
              "Head loss across the filter rising steadily",
              "Screen differential, biofilm growth on the mesh",
              "Biofouling of the mesh requiring chemical or mechanical cleaning",
            ],
            [
              "Biofilter performance declining without a feeding change",
              "Filter capture performance and sludge storage handling",
              "Solids reaching the biofilter and favouring heterotrophic growth over nitrification",
            ],
          ],
          basis:
            "A diagnostic ordering. Appropriate apertures, differentials and backwash frequencies depend on species, loading, temperature, water chemistry and system configuration.",
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
            "Clean or replace spray nozzles routinely; blocked nozzles are the most common cause of a filter that appears overloaded.",
            "Inspect mesh panels and seals for damage and bypass at every opportunity.",
            "Chemically clean the screen when mechanical backwashing no longer restores the differential, following the manufacturer's method and isolating the loop from the cleaning agent.",
            "Service drive motors, bearings and level switches on schedule.",
            "Clean and inspect separator underflow valves, which block silently.",
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
            "Pumping raw tank water through a centrifugal pump before filtration, shearing the solids the filter was bought to catch.",
            "Selecting the finest available mesh without accounting for blinding, backwash water use and head loss.",
            "Storing sludge on site indefinitely and allowing its leachate back into the loop.",
            "Treating rising backwash frequency as a filter fault rather than as information about the solids load.",
            "Providing no bypass, so the filter is serviced only when the loop can be stopped.",
            "Judging performance from water clarity alone rather than from what leaves in the backwash.",
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
            "Fine and colloidal solids are the fraction mechanical filtration does not reach. Protein skimming, or foam fractionation, removes surface-active dissolved and colloidal material by adsorbing it onto fine bubbles and stripping the resulting foam. It is most effective in saline water, where bubble behaviour supports stable foam, and its role is complementary to screening rather than a substitute for it.",
        },
        {
          kind: "text",
          value:
            "Sludge itself is increasingly treated as a process stream rather than a waste. Thickening, dewatering and anaerobic treatment change both the disposal cost and the nutrient recovery available, and they belong in the system design rather than in a later contract.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "The fine solids fraction remains the hardest problem",
          value:
            "Efficient, low-energy removal of fine and colloidal solids from freshwater recirculating systems is an area where engineering options remain limited and under active development.",
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
            "Mechanical filtration exists to remove waste before biology has to. Capture early, capture gently, get the concentrate off site, and every downstream process — biofiltration, disinfection, oxygenation — works closer to its design. Neglect it and each of those processes quietly inherits the difference.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Particulate waste becomes dissolved waste with time, so capture speed matters as much as capture efficiency.",
    "Shear from pumps and turbulence creates fine particles that no screen will catch — filter close to the tank.",
    "Finer mesh captures more but blinds faster, uses more backwash water and adds head loss.",
    "Backwash frequency is the most responsive available indicator of system solids load.",
    "A filter concentrates waste; without a sludge route the concentrate returns to the loop.",
    "Solids reaching the biofilter favour heterotrophs over nitrifiers, degrading ammonia removal.",
  ],
  related: ["tss-solids", "biofiltration", "culture-tanks", "disinfection"],
  furtherReading: [
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension fact sheets on solids removal, filtration and waste handling in recirculating systems.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on water treatment and effluent management for aquaculture production systems.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
  ],
};
