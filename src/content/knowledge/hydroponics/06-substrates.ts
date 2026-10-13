import type { KnowledgeArea } from "../types";

export const substrates: KnowledgeArea = {
  number: "06",
  slug: "substrates",
  title: "Growing Media and Substrates",
  navSummary: "Physical and hydraulic properties: water-holding capacity, air-filled porosity, CEC and media handling.",
  summary:
    "Soilless substrates physically support plant root systems and govern the distribution between moisture retention and gas exchange. Rockwool, coco coir, perlite, expanded clay and volcanic aggregate each offer distinct hydraulic conductivity, air-filled porosity and cation exchange capacity. Selecting and conditioning the appropriate medium prevents root hypoxia, salt accumulation and uneven drainage across the growing bench.",
  difficulty: "intermediate",
  topics: ["substrate", "production", "engineering"],
  tags: [
    "substrates",
    "growing media",
    "rockwool",
    "coco coir",
    "perlite",
    "air filled porosity",
    "water holding capacity",
    "cation exchange capacity",
  ],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-25",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Substrates do not feed the plant; they hold water and air where roots can access both. Coarse media drain freely and provide abundant oxygen but demand frequent irrigation. Fine media hold large water reserves but risk suffocation if over-irrigated. Matching the media to irrigation cycles and local climate prevents root death.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "A hydroponic substrate replaces the physical matrix of natural soil without retaining its chemical variability. The ideal medium is physically stable, chemically inert or predictable, biologically sterile upon arrival, and engineered to maintain balanced pore space throughout the entire life of the crop.",
        },
        {
          kind: "text",
          value:
            "Substrates are broadly divided into inorganic synthetic media (stone wool/rockwool), inorganic natural minerals (perlite, vermiculite, pumice, expanded clay), and organic materials (coco coir, peat moss, wood fiber). Each material dictates the irrigation strategy: rockwool allows rapid steering of electrical conductivity and moisture content, whereas coco coir provides high capillary buffering but requires careful pre-treatment.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why substrate physics dictates irrigation strategy",
      blocks: [
        {
          kind: "text",
          value:
            "The physical performance of a substrate is defined by two competing numbers: Total Porosity (TP), partitioned into Container Capacity (CC, or water-holding capacity) and Air-Filled Porosity (AFP). If AFP drops below 10–15% after irrigation, root gas exchange is constrained, leading to root tip death, reduced auxin transport and calcium deficiency in new growth.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The container height effect",
          value:
            "Water holding capacity is not an intrinsic property of the medium alone; it depends strongly on container geometry. In shallow slabs or pots, gravity exerts less suction on water columns, resulting in a higher saturated zone at the base compared to deep containers filled with identical substrate.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Primary commercial media compared" },
        {
          kind: "table",
          caption: "Physical and chemical characteristics of common hydroponic substrates",
          columns: ["Substrate", "Air-Filled Porosity (%)", "Water Holding Capacity (%)", "CEC (meq/100g)", "Reusability"],
          rows: [
            ["Horticultural Rockwool", "15 – 25", "70 – 80", "0 (Inert)", "Low / Single Cycle"],
            ["Coco Coir (Pith/Chip blend)", "12 – 22", "60 – 75", "40 – 90 (High)", "Moderate (1–3 cycles)"],
            ["Coarse Perlite", "25 – 40", "35 – 50", "0 – 2", "High (after sanitisation)"],
            ["Expanded Clay Aggregates", "50 – 65", "15 – 30", "0 – 2", "Very High"],
          ],
          basis: "Measured at container capacity in standard commercial horticultural containers.",
        },
        { kind: "subheading", value: "Cation Exchange Capacity (CEC) and coco buffering" },
        {
          kind: "text",
          value:
            "Inert substrates like rockwool and perlite have zero CEC; what is injected in the irrigation dripper is directly what the root encounters. Coco coir, however, possesses negative surface charges naturally loaded with potassium and sodium ions. Unbuffered coir binds calcium and magnesium from the nutrient solution while releasing excess potassium. Commercial coir must be thoroughly washed and buffered with calcium nitrate prior to planting.",
        },
      ],
    },
    {
      id: "practice",
      heading: "Field handling and substrate conditioning",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            "Test incoming raw coir for electrical conductivity and sodium chloride content; leach with low-EC water if EC exceeds 0.5 mS/cm.",
            "Pre-soak rockwool slabs to full saturation (100% WC) with calibrated starter nutrient solution (EC 1.8–2.0 mS/cm, pH 5.2–5.5) before cutting drainage slits.",
            "Cut drainage slits at the lowest point of slabs on sloped gutters to prevent water pooling in the corners.",
            "Monitor dry-back percentages between morning and night irrigations to ensure fresh oxygen is drawn into pore spaces.",
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
            "Time domain reflectometry (TDR) and high-frequency capacitance sensors inserted directly into slabs continuously monitor slab moisture content (WC), bulk electrical conductivity (EC), and root temperature. Using dry-back rates (% decrease in slab water content from the final irrigation to dawn), growers steer crop balance generatively (higher dry-back, higher root EC) or vegetatively (lower dry-back, lower EC).",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Substrates serve as hydraulic reservoirs and physical matrices, not sources of nutrition.",
    "Air-filled porosity above 15% is essential to avoid root suffocation following irrigation events.",
    "Container height alters moisture distribution: shallow slabs hold more water near the base than tall pots.",
    "Coco coir must be buffered with calcium and magnesium to satisfy its cation exchange sites before planting.",
    "Daily dry-back dynamics regulate both root aeration and vegetative versus generative crop steering.",
  ],
  related: ["propagation", "root-zone", "drip-systems", "water-management"],
  furtherReading: [
    {
      organisation: "International Society for Horticultural Science",
      description: "Symposia and publications on soilless culture and substrate physics.",
    },
    {
      organisation: "Wageningen University and Research",
      description: "Substrate water retention curves, hydraulic conductivity and sensor-based irrigation protocols.",
    },
  ],
};
