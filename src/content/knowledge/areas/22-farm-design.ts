import type { KnowledgeArea } from "../types";

export const farmDesign: KnowledgeArea = {
  number: "22",
  slug: "farm-design",
  title: "Farm Design",
  navSummary: "Site, building, rooms, movement and biosecurity zoning.",
  summary:
    "The building is not a shed around the equipment. Layout decides how people and materials move, which decides biosecurity, labour cost and whether maintenance actually gets done.",
  difficulty: "intermediate",
  topics: ["engineering", "operations"],
  tags: ["site selection", "layout", "zoning", "building", "workflow"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-05-05",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Where the farm is and how the building is laid out shapes daily life on it. Short, sensible routes between rooms save hours of walking every week. Separating clean areas from dirty ones stops disease moving around on boots and nets.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Farm design covers the choice of site and the arrangement of the facility on it: the building envelope, the rooms and their relationships, the routes people and materials take, and the services that support all of it. It is the layer between the process design and the physical world.",
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
            "Layout determines biosecurity, because pathogen movement is largely a function of how people and equipment move.",
            "Layout determines labour cost, because every unnecessary metre is walked several times a day for the life of the farm.",
            "Access determines maintenance. Equipment that is hard to reach is serviced late, and late maintenance becomes failure.",
            "Site conditions determine the water supply, the thermal load, the power reliability and the effluent route — the four constraints hardest to change later.",
          ],
        },
        {
          kind: "callout",
          tone: "established",
          title: "The site decides the constraints the design must live within",
          value:
            "Water availability and quality, ambient temperature, power reliability, effluent disposal and market distance are all fixed by site selection. Every subsequent design decision is made inside the envelope those five set.",
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "Site selection",
      blocks: [
        {
          kind: "table",
          caption: "Site factors and why each matters",
          columns: ["Factor", "What to establish", "Consequence"],
          rows: [
            [
              "Water source",
              "Quantity available, chemistry, seasonal variation, reliability",
              "Determines makeup water treatment and whether the intended exchange rate is achievable",
            ],
            [
              "Power supply",
              "Capacity, reliability, interruption frequency and duration, tariff",
              "Determines standby generation requirement and a substantial part of the operating cost",
            ],
            [
              "Ambient temperature",
              "Seasonal range against the species' target temperature",
              "Determines heating or cooling load, which is often the dominant thermal cost",
            ],
            [
              "Effluent route",
              "Permitted discharge, sludge disposal options, regulatory requirements",
              "Determines the waste handling design and whether the exchange rate is permissible",
            ],
            [
              "Market access",
              "Distance, transport, cold chain, buyer proximity",
              "Determines realised price and the practical harvest form",
            ],
            [
              "Land and ground conditions",
              "Area, levels, bearing capacity, flood risk, expansion room",
              "Determines civil cost, whether gravity flow is available, and whether phased growth is possible",
            ],
            [
              "Labour and services",
              "Availability of operators, technical support, spares and contractors",
              "Determines staffing model and how quickly a failure can be repaired",
            ],
          ],
          basis:
            "A site assessment framework. The relative importance of each factor depends on species, scale, market and system configuration.",
        },
      ],
    },
    {
      id: "system-role",
      heading: "Layout and zoning",
      blocks: [
        {
          kind: "flow",
          caption: "One-way movement through the facility",
          steps: [
            {
              label: "Entry and staff facilities",
              detail:
                "Changing, hygiene and office space at the entrance, so everyone crosses a defined boundary before entering production.",
            },
            {
              label: "Quarantine",
              detail:
                "Positioned so incoming stock never passes through production areas, with independent water, equipment and access.",
            },
            {
              label: "Hatchery and nursery",
              detail:
                "The cleanest production zone, holding the most susceptible fish. Movement runs from here outward, never inward.",
            },
            {
              label: "Grow-out",
              detail:
                "The main production area, sized around tanks, access routes and the space needed for grading and harvest.",
            },
            {
              label: "Plant room",
              detail:
                "Filtration, pumps, blowers, oxygen and controls, positioned to minimise pipe runs and give full maintenance access.",
            },
            {
              label: "Harvest and dispatch",
              detail:
                "At the outer edge, so vehicles and external staff never enter production. Harvest moves outward and stops.",
            },
            {
              label: "Waste handling",
              detail:
                "Sludge and mortality routes separated entirely from clean areas, with their own external access.",
            },
          ],
        },
        {
          kind: "text",
          value:
            "The principle is one-way flow: people, equipment, stock and waste each move in a single direction, from clean toward dirty, never back. Where a return is unavoidable, a hygiene barrier is placed at the crossing point.",
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
            "Design the movement before the rooms. Trace a day's work — feeding, sampling, cleaning, grading, harvest, waste removal — and lay out the building so those routes are short and do not cross.",
            "Use levels deliberately. Elevation designed at the civil stage buys gravity flow permanently.",
            "Provide maintenance access as space, not as a note on a drawing: room to remove a filter panel, lift a pump, or extract biofilter media.",
            "Separate wet and dry areas, and specify surfaces and drainage that can actually be cleaned.",
            "Leave expansion room, and design services with capacity for it, if growth is intended.",
            "Ventilate for the building's own atmosphere, which carries humidity, carbon dioxide from degassers and any ozone in use.",
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
            "Insulate the envelope where the target temperature differs from ambient; this is a permanent operating cost decision.",
            "Design floor drainage so that spilled water and washdown go to the intended place, not into another zone.",
            "Provide adequate lighting for inspection and work, with the ability to control light regime in culture areas.",
            "Place the plant room to minimise pipe runs while keeping noise and vibration away from culture tanks.",
            "Provide secure, dry, pest-free feed storage with vehicle access that does not cross production.",
            "Provide space for spares, chemicals and equipment storage, correctly separated and appropriately ventilated.",
            "Design vehicle access, turning and delivery so that external vehicles never need to enter the production envelope.",
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
            "Enforce the zoning that the layout enables, since a one-way layout used casually provides no protection.",
            "Keep equipment dedicated to zones and visibly identified.",
            "Maintain hygiene barriers as working equipment rather than as a formality.",
            "Keep access routes clear; a corridor used for storage becomes a maintenance obstacle.",
            "Review the layout against how work is actually done after the first production cycle, because the real routes are always partly different from the planned ones.",
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
          caption: "Layout symptoms and their usual cause",
          columns: ["Symptom", "Examine first", "Common direction"],
          rows: [
            [
              "Cross-contamination between zones",
              "Actual staff and equipment routes against the intended ones",
              "A layout that requires a return path, or zoning not enforced in practice",
            ],
            [
              "Maintenance repeatedly deferred on one item",
              "Physical access to it",
              "Insufficient clearance, so the task requires disruption disproportionate to its value",
            ],
            [
              "Labour cost above plan with no production change",
              "Distances walked in a normal day, task sequencing",
              "Layout requiring excessive movement between related tasks",
            ],
            [
              "Persistent humidity, condensation or corrosion",
              "Ventilation rate, insulation, vapour control",
              "A building envelope designed for a dry occupancy",
            ],
            [
              "Harvest or delivery vehicles entering production areas",
              "External access design",
              "No dispatch area at the perimeter, so the biosecurity boundary is crossed routinely",
            ],
          ],
          basis:
            "A diagnostic ordering. Appropriate layouts depend on scale, species, biosecurity policy, site and system configuration.",
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
            "Inspect the building envelope, insulation and vapour barriers, which degrade in a humid environment.",
            "Maintain floor drainage and gullies so washdown reaches the intended route.",
            "Service ventilation equipment, including any degasser exhaust ducting.",
            "Keep hygiene barriers stocked and functional.",
            "Update the facility drawings whenever anything is changed, so the record matches the building.",
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
            "Designing the process and then fitting a building around it, rather than designing the two together.",
            "Omitting quarantine, or placing it inside the production envelope.",
            "Leaving no maintenance clearance and discovering it at the first service.",
            "Building on a flat site with no elevation strategy, and pumping forever as a result.",
            "Under-ventilating and under-insulating, then paying for both continuously.",
            "Providing no dispatch area, so external vehicles and people enter production.",
            "Making no allowance for expansion when growth is part of the plan.",
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
            "Phased development changes the design problem. A facility built to grow needs services, hydraulics and structure sized or routed for the final configuration while only the first phase is constructed, and it needs the later phases to be buildable without interrupting production in the earlier ones.",
        },
        {
          kind: "text",
          value:
            "Modular and prefabricated approaches shorten construction and improve repeatability, at the cost of flexibility in adapting to a particular site. The trade is worth evaluating explicitly rather than defaulting to either approach, and it interacts with the phasing decision.",
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
            "Farm design converts a process into a workplace. The site fixes the constraints; the layout fixes biosecurity, labour cost and whether maintenance happens. Design the movement first, use elevation for gravity, leave real access around equipment, separate clean from dirty in one direction only, and build the envelope for the humid, corrosive environment it will actually contain.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Site selection fixes water, power, thermal load, effluent route and market access — the constraints hardest to change later.",
    "Design the movement of people, stock and waste before designing the rooms.",
    "One-way flow from clean to dirty is the basis of practical biosecurity.",
    "Maintenance access must exist as physical space, or maintenance gets deferred.",
    "Elevation designed at the civil stage buys gravity flow permanently.",
    "The building envelope must suit a humid, corrosive occupancy, not a dry one.",
  ],
  related: ["system-architecture", "operations", "fish-health", "safety"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on aquaculture facility planning, site selection and biosecurity design.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension publications on facility layout and construction for recirculating aquaculture.",
    },
  ],
};
