import type { KnowledgeArea } from "../types";

export const sustainable: KnowledgeArea = {
  number: "29",
  slug: "sustainable",
  title: "Closed-Loop Sustainability and Resource Conservation",
  navSummary: "Recirculation runoff sanitation, rainwater harvesting, substrate recycling, nutrient recovery and solar integration.",
  summary:
    "Sustainability in commercial hydroponics is not a marketing label; it is the physical discipline of resource conservation. Closed-loop recirculation of irrigation drainage reduces water and fertilizer consumption by up to 80–90% relative to open-field farming. Managing closed loops requires systematic biological and physical sanitation (UV irradiation, ozone, slow sand filtration) to sanitize drainage without accumulating phytotoxic sodium and heavy salts.",
  difficulty: "intermediate",
  topics: ["sustainability", "water", "operations", "environment"],
  tags: [
    "sustainability",
    "closed loop",
    "recirculation",
    "water conservation",
    "uv sanitation",
    "nutrient recovery",
    "rainwater harvesting",
    "circular horticulture",
  ],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-08-25",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Open hydroponics dumps 20–30% of drainage water and fertilizer directly onto the ground. Closed-loop hydroponics captures this drainage, cleans it with UV or ozone, tests its remaining nutrients, and pumps it right back to the plants. This cuts water and fertilizer bills dramatically while keeping agricultural runoff out of local groundwater.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Modern commercial horticulture faces severe regulatory and environmental pressures: aquifer depletion, nitrogen and phosphorus pollution in groundwater, rising chemical fertilizer prices, and corporate ESG scrutiny. Hydroponics provides the technological platform to transform agriculture into a circular, closed-loop industrial process.",
        },
        {
          kind: "text",
          value:
            "The transition from 'drain-to-waste' (open system) to 'closed-loop' (recirculating) represents the single greatest leap in resource productivity a farm can make. Captured drain water retains valuable unabsorbed nitrates, phosphates and potassium, transforming an environmental hazard into a reusable asset.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "The sodium accumulation barrier in closed loops",
      blocks: [
        {
          kind: "text",
          value:
            "Plants absorb essential macronutrients rapidly but reject non-essential ballast ions such as sodium (Na+) and chloride (Cl-). When raw source water contains even moderate sodium (e.g. 30–50 mg/L), continuous recirculation concentrates sodium over multiple irrigation cycles until electrical conductivity is dominated by sodium, inducing osmotic stress and nutrient antagonism.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The clean water prerequisite",
          value:
            "True 100% closed-loop recirculation is only achievable when the primary raw water source has near-zero sodium and chloride (such as harvested rainwater or reverse osmosis permeate). Without pure makeup water, growers must periodically dump or bleed off solution.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Disinfection technologies for drainage water" },
        {
          kind: "table",
          caption: "Comparison of drain water sanitation methods for closed-loop recirculation",
          columns: ["Technology", "Pathogen Log-Reduction", "Nutrient Breakdown Risk", "CapEx / OpEx"],
          rows: [
            ["UV-C Irradiation (>250 mJ/cm²)", "99.9% (Bacteria, Fungi, Viruses)", "De-chelates standard iron complexes", "Moderate CapEx / Low OpEx"],
            ["Ozone Injection (0.5–1.0 g O3/m³)", "99.99% (Broad Spectrum)", "Oxidises iron and manganese out of solution", "High CapEx / Moderate OpEx"],
            ["Slow Sand Bio-Filtration", "95 – 99% (Fungal zoospores)", "None (Retains chelated minerals)", "Low CapEx / Very Low OpEx"],
            ["Pasteurization / Heat (95 °C for 30s)", "100% (Complete Sterility)", "None", "High CapEx / High Energy OpEx"],
          ],
          basis: "European and international greenhouse drainage recirculation disinfection standards.",
        },
        { kind: "subheading", value: "Rainwater harvesting integration" },
        {
          kind: "text",
          value:
            "Greenhouse roofs serve as pristine rainwater collection surfaces. Capturing 1,000 mm of annual rainfall over a 10,000 m² (1 hectare) roof yields 8,500 to 9,000 m³ of near-zero EC water, drastically reducing dependence on groundwater and providing the ideal low-sodium base for closed-loop recirculation.",
        },
      ],
    },
    {
      id: "practice",
      heading: "Implementation protocols for closed-loop farms",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            "Use UV-resistant iron chelates (such as Fe-DTPA or Fe-EDDHA) rather than fragile Fe-EDTA when using in-line UV-C sanitation units.",
            "Install dual drain collection sumps so newly gathered drainage settles coarse substrate particulates before passing into mechanical fine disc filters.",
            "Test recirculating tank solution by laboratory ICP analysis weekly to adjust individual element top-up dosing rather than relying strictly on bulk EC.",
            "Compost spent organic coco coir slabs on-site for blending into organic soil amendments or landscape mulch.",
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
            "Next-generation closed-loop facilities deploy real-time Ion-Selective Field Effect Transistor (ISFET) electrode arrays directly in the return manifold. Instead of inferring total ions via bulk electrical conductivity, ISFET arrays measure individual concentrations of potassium, calcium and nitrate ions in real time, automatically calculating dynamic single-ion dosing recipes.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Closed-loop recirculation cuts water and mineral fertilizer usage by up to 80–90%.",
    "Low-sodium source water (rainwater harvesting or RO) is essential to prevent toxic sodium accumulation.",
    "Drainage water must be disinfected (UV, ozone or slow sand) before returning to healthy crops.",
    "UV and ozone degrade conventional iron chelates, requiring photo-stable iron complexes.",
    "Laboratory ICP testing prevents unbalanced nutrient accumulation in closed recirculation loops.",
  ],
  related: ["water-management", "nutrients", "operations", "energy"],
  furtherReading: [
    {
      organisation: "Wageningen University and Research",
      description: "Circular greenhouse horticulture manuals and zero-emission closed-loop management protocols.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Water harvesting and recycling guidelines for protected agricultural facilities.",
    },
  ],
};
