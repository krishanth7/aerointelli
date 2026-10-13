import type { KnowledgeArea } from "../types";

export const nft: KnowledgeArea = {
  number: "12",
  slug: "nft",
  title: "Nutrient Film Technique (NFT)",
  navSummary: "Gutter geometry, slope gradients, laminar flow rates, root mat aeration and thermal buffer limitations.",
  summary:
    "Nutrient Film Technique recirculates a very shallow, continuous or pulsed film of nutrient solution down sloping gutters over bare plant roots. By holding negligible standing water in the channel, NFT provides exceptional aeration to fast-growing leafy greens and herbs. However, this absence of water reserve leaves zero buffer against mechanical pump outages, power failures or thermal swings.",
  difficulty: "intermediate",
  topics: ["systems", "engineering", "production"],
  tags: [
    "nft",
    "nutrient film technique",
    "gutter slope",
    "laminar flow",
    "leafy greens",
    "channel design",
    "root mat",
  ],
  species: ["Lettuce", "Basil", "Spinach", "Mint", "Kale", "Arugula"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-10",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "NFT runs a thin stream of nutrient water across bare roots sitting in sloping plastic channels. The top half of the root stays in air to absorb oxygen while the bottom half sits in flowing water to absorb fertilizer. If the pump stops on a hot sunny day, the plants can wilt and die within twenty minutes.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Conceived in the 1960s by Dr. Allen Cooper at the Glasshouse Crops Research Institute, NFT eliminated the need for solid growing media. Plants are held in net cups or nursery plugs positioned in rigid, flat-bottomed plastic channels inclined at a gentle slope. Solution introduced at the high end forms a shallow sheet—ideally 1 to 2 mm deep—flowing continuously over the roots and draining back into a central sump.",
        },
        {
          kind: "text",
          value:
            "NFT represents the dominant global production system for commercial greenhouse head lettuce, baby greens and culinary herbs. Its low water volume enables rapid system turnover, easy cleaning between batches and high spatial planting density.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Hydraulic precision and the zero-buffer penalty",
      blocks: [
        {
          kind: "text",
          value:
            "The engineering principle of NFT is that roots absorb oxygen directly from the humid air inside the channel while the thin moving film supplies water and minerals without submerging the entire root mass. If flow rate is too high, the film deepens, submerging the roots and causing hypoxia. If flow rate is too low, solution warms excessively and dry spots form.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Channel slope and length constraints",
          value:
            "Channels must maintain an unvarying slope of 1:30 to 1:40 (roughly 2.5% to 3.3%). Sagging gutters form stagnant puddles where roots drown. Channel lengths should not exceed 10–12 meters; beyond that, dissolved oxygen and nutrient concentrations deplete while temperature rises by several degrees between inlet and outlet.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Flow rate and channel profile" },
        {
          kind: "text",
          value:
            "A standard NFT channel requires a constant flow of 1.0 to 2.0 litres per minute per channel. The gutter base must be flat with ribbed or textured micro-grooves to spread water across the full width rather than channeling down the center. Curved-bottom pipes (such as circular PVC conduits) cause roots to clump in the bottom groove, damming water flow.",
        },
        {
          kind: "table",
          caption: "Key engineering parameters for commercial NFT systems",
          columns: ["Design Parameter", "Standard Specification", "Failure Consequence if Out of Spec"],
          rows: [
            ["Slope", "1:30 to 1:40 (2.5% – 3.3%)", "Shallower causes pooling; steeper causes rapid shallow runoff"],
            ["Inlet Flow Rate", "1.0 – 2.0 L/min per channel", "<1 L/min causes channel starvation; >2.5 L/min floods root crown"],
            ["Max Channel Length", "10 – 12 metres", ">12 m causes DO depletion and warm exit temperatures"],
            ["Channel Profile", "Flat-bottomed, 100–150 mm wide", "Round profile restricts root expansion and pools water"],
          ],
          basis: "Standard commercial European and North American CEA greenhouse engineering standards.",
        },
      ],
    },
    {
      id: "practice",
      heading: "System maintenance and plumbing safeguards",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            "Install dual redundant delivery pumps on an automatic mechanical transfer switch with generator or battery backup.",
            "Fit low-pressure differential pressure switches on the delivery manifold linked to instant SMS and audible alarms.",
            "Use black-on-white co-extruded UV-stabilized PVC/polypropylene gutters to reflect solar radiation and suppress internal algal blooms.",
            "Sanitize channels between harvest cycles with peracetic acid or chlorine dioxide flush, scrub and rinse thoroughly.",
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
            "In high-density commercial operations, automated mobile gutter systems (MGS) adjust the spacing between NFT channels continuously as plants grow. Seedlings start at 80–100 plants/m²; as the canopy expands, mechanical chains advance channels outwards to 25–30 plants/m² at final harvest. MGS increases greenhouse space utilization by 30–40% compared to fixed-bench layouts.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "NFT provides exceptional root oxygenation by exposing the upper root mat to air inside the channel.",
    "A continuous flow of 1.0–2.0 L/min per gutter and a 1:30 to 1:40 slope are standard design criteria.",
    "Channel lengths over 12 metres suffer downstream dissolved oxygen drop and temperature accumulation.",
    "Because there is no water buffer, pump backup systems and flow alarms are mandatory.",
    "Flat-bottom channels prevent root clumping and water damming seen in round PVC pipes.",
  ],
  related: ["systems", "dwc", "drip-systems", "operations", "engineering"],
  furtherReading: [
    {
      organisation: "International Society for Horticultural Science",
      description: "Symposium papers on NFT engineering, channel hydraulics and nutrient depletion curves.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Practical manuals on NFT greenhouse construction and leafy vegetable production.",
    },
  ],
};
