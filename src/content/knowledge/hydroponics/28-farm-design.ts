import type { KnowledgeArea } from "../types";

export const farmDesign: KnowledgeArea = {
  number: "28",
  slug: "farm-design",
  title: "Commercial Farm Master Planning and Facility Layout",
  navSummary: "Site selection, civil engineering, biosecurity zoning, workflow layout, fertigation room design and cold-chain staging.",
  summary:
    "A commercial hydroponic farm functions as an intensive biological food-processing plant. Master planning begins with thorough site evaluation—including solar azimuth, prevailing seasonal winds, reliable raw water sourcing and electrical grid capacity. Internal layout must partition dirty activities (substrate intake, chemical storage, plant waste disposal) from sterile propagation, growing compartments, grading, packhouse and temperature-controlled dispatch.",
  difficulty: "advanced",
  topics: ["engineering", "operations", "economics"],
  tags: [
    "farm design",
    "master planning",
    "site selection",
    "packhouse layout",
    "cold chain",
    "biosecurity zoning",
    "fertigation room",
  ],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-08-21",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Design the farm layout around the flow of people and plants. Material must move in one direction: from clean zones (propagation, young plants) toward mature production and finally to the packhouse. Never design a layout where workers carry dirty waste or spent substrates back through young nursery compartments.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Facility layout dictates daily operational efficiency for decades. An improperly situated packhouse or fertigation room introduces thousands of unnecessary worker walking steps each week, inflating labor overheads and creating cross-contamination risks.",
        },
        {
          kind: "text",
          value:
            "Effective facility master planning coordinates civil earthworks, stormwater drainage, internal logistics paths, biosecurity barriers and utility distribution networks (pressurized water, electricity, communications, automated heating/cooling loops).",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Unidirectional workflow and biosecurity containment",
      blocks: [
        {
          kind: "text",
          value:
            "Biosecurity is a physical architecture discipline. Diseases and insect pests travel on workers' clothing, harvest crates, and equipment wheels. A facility designed with a unidirectional workflow—clean inputs entering from one perimeter and finished product leaving the opposite—prevents pathogens from cycling back into clean areas.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The fertigation room as the facility heart",
          value:
            "Position the fertigation room centrally relative to the growing bays. Locating it at an extreme corner requires long pipe runs, resulting in uneven pressure drops, slow injection delivery lag times, and increased thermal heating of standing water inside long headers.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Functional zone allocation" },
        {
          kind: "table",
          caption: "Key functional zones and area allocations in a commercial CEA facility",
          columns: ["Facility Zone", "Target % of Footprint", "Key Technical Requirements"],
          rows: [
            ["Growing Compartments (Bays)", "70 – 80%", "Optimal solar transmission, laser-leveled floors, gutter drains"],
            ["Propagation & Nursery", "5 – 8%", "Isolated climate, sealed double-entry vestibules, dedicated fertigation"],
            ["Packhouse & Cold Storage", "8 – 12%", "Food-grade washable epoxy, 4–8 °C cold room, dispatch loading dock"],
            ["Fertigation & Utilities", "3 – 5%", "Chemical-resistant bunded flooring, acid-proof ventilation, 3-phase power"],
            ["Offices, Staff & Sanitisation", "2 – 4%", "Handwashing stations, foot baths, changing lockers, canteen"],
          ],
          basis: "Standard planning metrics for commercial 1 to 5 hectare CEA facilities.",
        },
        { kind: "subheading", value: "Cold chain integration" },
        {
          kind: "text",
          value:
            "Harvested produce must enter pre-cooling immediately to remove field heat. For leafy greens and culinary herbs, delay of two hours at ambient temperatures (30 °C) can cut retail shelf life in half. The packhouse must link directly to the growing bays via shaded or enclosed corridors leading into pre-cooling and storage at 4–6 °C.",
        },
      ],
    },
    {
      id: "practice",
      heading: "Civil and master planning rules",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            "Conduct geotechnical soil core drilling and seasonal groundwater table surveys prior to greenhouse foundation engineering.",
            "Grade the overall site at a 0.5–1.0% slope to ensure peripheral surface stormwater runs cleanly into retention ponds without ponding against greenhouse walls.",
            "Pave central logistics corridors with broom-finished concrete wide enough (minimum 3.0 m) for electric tugs and pallet jacks to pass comfortably.",
            "Segregate employee and visitor entry through mandatory sanitary stations featuring touchless hand sanitization and sole-disinfecting mats.",
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
            "High-throughput modern facilities utilize Building Information Modeling (BIM) to integrate architectural structural models with dynamic hydraulic, electrical and HVAC routing. 3D spatial coordination eliminates clash points between overhead heating pipes, HAF fan throw paths, shade screen drive shafts and high-wire trellising infrastructure.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Farm layout should enforce a strict unidirectional workflow from clean zones to dispatch.",
    "Centralize the fertigation room to minimize pipe lengths, pressure loss and delivery latency.",
    "The packhouse must provide uninterrupted cold-chain handling to protect produce shelf life.",
    "Civil site grading prevents external stormwater from flooding greenhouse foundations.",
    "Dedicated sanitary airlocks and wash stations protect growing compartments from pathogen ingress.",
  ],
  related: ["economics", "engineering", "operations", "greenhouse"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Horticultural facility design, post-harvest infrastructure and packhouse ergonomics.",
    },
    {
      organisation: "American Society of Agricultural and Biological Engineers (ASABE)",
      description: "Standards on commercial agricultural building layout, ventilation and structural loads.",
    },
  ],
};
