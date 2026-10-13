import type { KnowledgeArea } from "../types";

export const dwc: KnowledgeArea = {
  number: "13",
  slug: "dwc",
  title: "Deep Water Culture (DWC) and Raft Systems",
  navSummary: "Pond aeration, floating rafts, dissolved oxygen maintenance, thermal inertia and pond hygiene.",
  summary:
    "Deep Water Culture (DWC), or floating raft hydroponics, suspends crops on floating buoyant boards over large, aerated ponds of nutrient solution. The large water volume creates exceptional thermal and chemical inertia, buffering the crop against sudden temperature swings and equipment failures. However, maintaining high dissolved oxygen throughout deep ponds and preventing systemic Pythium colonization require dedicated aeration and water sanitation engineering.",
  difficulty: "beginner",
  topics: ["systems", "water", "production"],
  tags: [
    "dwc",
    "deep water culture",
    "raft system",
    "thermal inertia",
    "pond aeration",
    "dissolved oxygen",
    "commercial lettuce",
  ],
  species: ["Butterhead Lettuce", "Romaine", "Bok Choy", "Watercress", "Mint", "Spinach"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-13",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "DWC grows plants on floating foam rafts over large shallow ponds (20–30 cm deep). The massive water volume means if power fails, the crop can survive unharmed for hours or even days. The primary challenge is pumping huge volumes of air continuously through diffusers to prevent roots from drowning in still water.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Deep Water Culture represents one of the most widely adopted formats for high-volume commercial production of culinary herbs and head lettuce. Ponds are typically concrete or timber troughs lined with heavy-duty EPDM, food-grade HDPE or poly liners, with water depths ranging between 20 and 35 cm.",
        },
        {
          kind: "text",
          value:
            "Plants sit in net pots or direct-fit plugs set into pre-drilled food-grade extruded polystyrene (XPS) or high-density polypropylene (HDPE) floating rafts. Rafts are pushed down the pond length in batches: newly transplanted rafts enter at one end, advance incrementally as harvested rafts are removed from the opposite end.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Thermal mass versus biological contamination",
      blocks: [
        {
          kind: "text",
          value:
            "The defining physical attribute of DWC is its hydraulic volume. A 1,000 m² pond holding 300 mm of water contains 300,000 litres of solution. This massive thermal mass resists ambient temperature swings between day and night, protecting root physiology. If delivery pumps trip, the crop remains submerged in water and suffers no immediate water stress.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The pathogen transmission risk",
          value:
            "Because hundreds of thousands of plants share a continuous body of water, waterborne pathogens such as Pythium ultimum or P. aphanidermatum can spread across an entire greenhouse bay within 48 hours if root health slips. Continuous dissolved oxygen (>7 mg/L) and routine sanitation are indispensable.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Aeration requirements in deep ponds" },
        {
          kind: "text",
          value:
            "Unlike NFT where air envelopes the roots, DWC roots are completely submerged. Dissolved oxygen must be introduced mechanically. Commercial systems utilize regenerative ring blowers feeding diffused aeration tubing (such as microporous aeration hose) running the full length of the pond floor, delivering 0.1 to 0.2 m³ of air per hour per square metre of pond surface area.",
        },
        {
          kind: "table",
          caption: "Comparison: Deep Water Culture (DWC) vs. Nutrient Film Technique (NFT)",
          columns: ["Parameter", "Deep Water Culture (DWC)", "Nutrient Film Technique (NFT)"],
          rows: [
            ["Water Volume per Plant", "High (8 – 15 L/plant)", "Very Low (0.2 – 0.5 L/plant)"],
            ["Power Failure Resilience", "High (Hours to days without water stress)", "Critically Low (15 – 30 minutes before damage)"],
            ["Thermal Inertia", "High (resists temperature fluctuations)", "Low (rapidly heats and cools with air)"],
            ["Cleaning Turnaround", "Substantial effort (draining/washing large ponds)", "Fast (flushing lightweight gutters)"],
            ["Root Disease Risk", "Systemic if DO drops or temperature spikes", "Localised to individual channel runs"],
          ],
          basis: "Operational benchmarks across industrial leafy green operations.",
        },
      ],
    },
    {
      id: "practice",
      heading: "Operational best practices for raft production",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            "Wash and sanitize floating rafts with food-contact approved chlorine dioxide or hydrogen peroxide between every cropping cycle.",
            "Maintain dissolved oxygen levels strictly above 7.0 mg/L measured at the furthest stagnant corner of the pond.",
            "Install surface circulation pumps or Venturi educators to prevent temperature stratification and oxygen depletion zones beneath rafts.",
            "Insulate pond sidewalls and earth foundations to minimize thermal ground heat transfer during peak summer months.",
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
            "Industrial raft facilities operate continuous recirculation loops through mechanical drum filters and high-intensity ultraviolet (UV-C) irradiation systems (>250 mJ/cm² dose) alongside ozone contact chambers. This continuous side-stream disinfection destroys water-borne zoospores while active nanobubble generators maintain oxygen levels above 12 mg/L.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "DWC offers unmatched thermal buffer and power failure security due to high solution volume.",
    "Root systems are completely submerged, making continuous heavy pond aeration non-negotiable.",
    "Dissolved oxygen should be maintained above 7 mg/L to inhibit Pythium zoospore colonization.",
    "Floating raft hygiene between cycles is critical to prevent pathogen transmission between plant generations.",
    "Recirculating filtration and UV disinfection provide essential defense against systemic pond contamination.",
  ],
  related: ["systems", "nft", "water-management", "root-zone", "operations"],
  furtherReading: [
    {
      organisation: "University of Arizona Controlled Environment Agriculture Center",
      description: "Research bulletins on deep water culture, dissolved oxygen dynamics and raft system hygiene.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Guidelines on commercial raft aquaponics and hydroponic pond construction.",
    },
  ],
};
