import type { KnowledgeArea } from "../types";

export const fertigation: KnowledgeArea = {
  number: "11",
  slug: "fertigation",
  title: "Fertigation and Dosing Strategies",
  navSummary: "Dosing injectors, multi-channel injection loops, leaching fraction, radiation-sum triggering and run-off control.",
  summary:
    "Fertigation combines irrigation delivery with precision dissolved mineral fertilizer dosing. Achieving consistent nutrient uptake requires calibrated injection equipment—such as proportional hydraulic injectors, positive displacement pumps or automated mixing tanks—along with systematic regulation of drainage percentages, electrical conductivity differentials and solar radiation-sum triggering.",
  difficulty: "intermediate",
  topics: ["water", "nutrition", "engineering", "operations"],
  tags: [
    "fertigation",
    "dosing systems",
    "venturi injectors",
    "drainage fraction",
    "leaching percentage",
    "solar radiation triggering",
    "EC steering",
  ],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-07",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Do not water plants on a fixed clock timer. Plants transpire in proportion to solar light intensity and temperature. Irrigate based on cumulative light energy (Joules/cm²), deliver nutrient solution at a stable EC and pH, and ensure 20–30% drainage to wash out unused salts and maintain root balance.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Fertigation transforms irrigation from simple moisture replacement into real-time crop nutrition. In a soilless system with minimal substrate buffer, the concentration, pH and timing of each irrigation shot directly alter the root-zone electrochemical balance within minutes.",
        },
        {
          kind: "text",
          value:
            "Modern commercial systems decouple stock tanks into Tank A (calcium nitrate, iron chelate, potassium nitrate), Tank B (potassium phosphate, magnesium sulphate, potassium sulphate, micronutrients), and Tank C (acid/alkali for pH regulation). Automated fertigation units inject concentrates in precise ratios into an in-line mixing manifold or batch tank before distribution.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why solar radiation triggering outperforms timers",
      blocks: [
        {
          kind: "text",
          value:
            "Fixed-interval clock timers deliver identical water volumes on bright sunny afternoons and cool overcast mornings. On hot days with high light, plants consume water rapidly and run dry; on cloudy days, the same timer causes over-saturation, root hypoxia and wasted fertiliser.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The leaching fraction principle",
          value:
            "Drainage (or leaching) fraction is defined as the volume of drainage collected divided by the total volume delivered, multiplied by 100%. Maintaining a 20–30% drainage fraction prevents unabsorbed ions (like sodium or excess sulphate) from concentrating in the substrate.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Irrigation triggering methods" },
        {
          kind: "text",
          value:
            "Commercial fertigation controllers trigger irrigation shots primarily through solar radiation accumulation (e.g. initiating a shot every 150–250 J/cm² of cumulative global radiation), supplemented by substrate moisture threshold sensors (TDR) and minimum/maximum time gates.",
        },
        { kind: "subheading", value: "Root EC steering" },
        {
          kind: "text",
          value:
            "When drainage EC rises significantly above dripper EC (delta > 0.8–1.0 mS/cm), the plant is absorbing water faster than nutrients, indicating high transpiration and salt accumulation. The grower lowers dripper EC or increases shot volume. Conversely, when drainage EC equals dripper EC, nutrients are passing unabsorbed, signaling low light, over-watering or low crop demand.",
        },
        {
          kind: "formula",
          name: "Drainage Percentage (Leaching Fraction)",
          expression: "LF = (V_drain / V_applied) * 100",
          terms: [
            { symbol: "LF", meaning: "Leaching Fraction", unit: "%" },
            { symbol: "V_drain", meaning: "Volume of drainage water collected from measuring slab/bench", unit: "L" },
            { symbol: "V_applied", meaning: "Total volume of nutrient solution applied by emitters", unit: "L" },
          ],
          limitations: "Valid for substrate drip and gutter systems with dedicated drainage collection trays.",
        },
      ],
    },
    {
      id: "practice",
      heading: "Operational protocol for daily fertigation",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            "Start the first irrigation cycle 1 to 2 hours after sunrise, once the crop has initiated transpiration and slab temperature begins to rise.",
            "End the final irrigation cycle 1 to 2 hours before sunset to allow the slab to achieve target overnight dry-back (8–12%).",
            "Measure input EC/pH and drainage EC/pH daily using handheld calibrated meters to verify controller accuracy.",
            "Install in-line disc or screen filters downstream of dosing units to prevent fertilizer precipitates from clogging drippers.",
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
            "Modern automated fertigation incorporates feedback from drain EC and drain volume sensors. Closed-loop algorithms dynamically trim the next day's base EC and shot interval based on yesterday's total solar sum and drainage profile, maintaining target root-zone salinity with zero manual recalibration.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Stock concentrate separation into Tank A, Tank B and Acid Tank is non-negotiable to prevent precipitation.",
    "Solar radiation accumulation (Joules/cm²) provides the most reliable trigger for daytime irrigation shots.",
    "A 20–30% drainage fraction flushes unabsorbed mineral ions and prevents toxic root-zone salt buildup.",
    "Comparing dripper EC to drainage EC provides real-time feedback on plant water versus nutrient uptake.",
    "Night dry-back aerates the root zone and prevents waterlogging between cropping cycles.",
  ],
  related: ["nutrients", "ph-ec", "water-management", "drip-systems", "automation-ai"],
  furtherReading: [
    {
      organisation: "International Commission on Irrigation and Drainage",
      description: "Technical papers and guidelines on micro-irrigation and precision fertigation control.",
    },
    {
      organisation: "Wageningen University and Research",
      description: "Crop steering manuals for greenhouse substrate cultivation and drainage management.",
    },
  ],
};
