import type { KnowledgeArea } from "../types";

export const greenhouse: KnowledgeArea = {
  number: "18",
  slug: "greenhouse",
  title: "Greenhouse Structures and Environmental Engineering",
  navSummary: "Structural frame engineering, cladding films, natural ventilation geometry, pad-and-fan and shading screens.",
  summary:
    "Greenhouses capture natural solar radiation while protecting crops from adverse weather, excessive heat loads and insect pests. The structural selection—naturally ventilated polyhouses, multispan saw-tooth structures, or gutter-connected venlo glasshouses—dictates solar transmission efficiency, convective air exchange volume, thermal energy retention and structural resilience across monsoon and storm cycles.",
  difficulty: "intermediate",
  topics: ["environment", "engineering", "systems"],
  tags: [
    "greenhouse",
    "polyhouse",
    "pad and fan",
    "glazing materials",
    "shading screens",
    "natural ventilation",
    "sawtooth design",
  ],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-25",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "A greenhouse is not just a plastic tent; it is an engineered solar machine. The gutter height, roof vent opening area, cladding light transmission and shading screen properties decide whether plants thrive or roast in tropical sun. High gutter clearance (4.5–6.0 m) creates a crucial thermal buffer that keeps hot air above the crop canopy.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Protected cultivation structures exist on a technological continuum: from passive naturally ventilated polyhouses (NVPH) to fully automated gutter-connected multispan greenhouses equipped with positive-pressure cooling and motorized thermal screens.",
        },
        {
          kind: "text",
          value:
            "In tropical and subtropical regions such as southern India, the primary engineering challenge is heat dissipation and insect exclusion. In temperate zones, heat retention and winter solar gain dominate. Matching structural design to the regional microclimate determines commercial viability.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Gutter height and natural stack ventilation",
      blocks: [
        {
          kind: "text",
          value:
            "The volume of air within a greenhouse serves as a thermal buffer. Low-gutter structures (under 3.5 m) concentrate solar heat directly around the plant canopy. Raising gutter heights to 5.0–6.5 m positions the overheated air layer well above the plants, where roof ridge vents evacuate it via the thermal buoyancy chimney effect.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The insect net ventilation penalty",
          value:
            "Installing 40-mesh or 50-mesh insect-proof netting over side and roof vents restricts pest entry but reduces effective airflow area by 40% to 55%. Vent sizes must be scaled up correspondingly to avoid creating a heat trap.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Cladding and glazing materials" },
        {
          kind: "table",
          caption: "Performance metrics of commercial greenhouse covering materials",
          columns: ["Material", "PAR Light Transmission (%)", "Diffusion (%)", "Thermal IR Retention", "Lifespan (Years)"],
          rows: [
            ["UV-Stabilized Polyethylene (200 µm)", "88 – 90", "20 – 60 (diffuse films)", "Moderate to High", "3 – 5"],
            ["Polycarbonate (Twin-Wall 8mm)", "80 – 82", "High (diffused)", "Very High", "10 – 12"],
            ["Horticultural Float Glass (4mm)", "90 – 92", "Low (specular)", "High", "25+"],
            ["Diffuse AR-Coated Glass", "95 – 98", "High (up to 70% haze)", "High", "25+"],
          ],
          basis: "Tested according to ASTM and European greenhouse film performance standards.",
        },
        { kind: "subheading", value: "Active cooling: pad-and-fan mechanics" },
        {
          kind: "text",
          value:
            "In arid climates, evaporative cooling pads paired with heavy-duty exhaust fans drop incoming air temperature towards the ambient wet-bulb temperature. The system relies on creating a slight negative pressure, pulling air through saturated cellulose pads. However, wet-bulb depression decreases rapidly in high-humidity monsoon conditions, limiting evaporative efficiency.",
        },
      ],
    },
    {
      id: "practice",
      heading: "Structural layout and wind-load specifications",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            "Orient greenhouse gutters north-south where feasible to achieve uniform diurnal light distribution and prevent continuous shadow bands.",
            "Design foundation footings and steel frames to resist local design wind speeds (minimum 120–150 km/h wind gusts for cyclonic zones).",
            "Install automated retractable aluminized shade screens (40–50% shading) to reject excess infra-red radiation during peak midday hours.",
            "Ensure concrete walkways and drainage trenches slope away from growing bays to prevent external rainwater ingress.",
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
            "Semi-closed greenhouse concepts utilize positive pressure fans drawing air through a centralized climate corridor before distributing it evenly through inflated perforated polythene ducts beneath growing gutters. Positive internal pressure prevents insect infiltration through minor frame leaks, allows year-round CO2 enrichment without venting losses, and decouples climate control from outside wind turbulence.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "High gutter clearance (4.5–6.0 m) provides the essential thermal buffer to keep hot air above the canopy.",
    "Diffuse polyethylene films scatter light, allowing photons to penetrate deep into the lower canopy.",
    "Fine insect netting severely restricts natural airflow and requires larger ventilation aperture ratios.",
    "Evaporative pad-and-fan cooling performance is limited by ambient wet-bulb depression.",
    "North-south ridge orientation guarantees balanced daily solar illumination across all crop rows.",
  ],
  related: ["climate-control", "indoor-farming", "engineering", "farm-design"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Technical specifications and guidelines on protected cultivation structures in tropical climates.",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Standards and design parameters for polyhouse construction in diverse Indian agro-climatic zones.",
    },
  ],
};
