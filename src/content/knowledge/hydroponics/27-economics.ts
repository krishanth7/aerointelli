import type { KnowledgeArea } from "../types";

export const economics: KnowledgeArea = {
  number: "27",
  slug: "economics",
  title: "Hydroponic Farm Economics and Commercial Feasibility",
  navSummary: "CapEx structure, OpEx cost drivers, unit economics, yield assumptions, packaging, logistics and break-even modeling.",
  summary:
    "Commercial hydroponic ventures frequently fail from flawed economic modeling rather than horticultural failure. Capital expenditure (CapEx) in structures, automation and climate systems must be amortized against realistic saleable yields and verified off-take pricing. Operating expenses (OpEx)—particularly electricity tariffs, skilled labour, quality substrates, packaging and cold-chain transport—dominate monthly cash flows and dictate long-term farm solvency.",
  difficulty: "intermediate",
  topics: ["economics", "operations", "engineering"],
  tags: [
    "farm economics",
    "capex",
    "opex",
    "unit economics",
    "cost per kilogram",
    "financial feasibility",
    "market off-take",
  ],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-08-18",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Do not build a farm based on peak theoretical yield numbers from equipment brochures. Real-world farms have crop losses, seasonal pricing swings, grading cull rates (10–20%), and substantial packaging and cold-transport costs. Electricity and labor are typically the two largest recurring operating expenses.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Controlled Environment Agriculture (CEA) offers superior water efficiency, pesticide-free production and high yields per square metre. However, transforming biological productivity into financial profitability requires rigorous cost accounting.",
        },
        {
          kind: "text",
          value:
            "A comprehensive financial model dissects investments into upfront Capital Expenditure (civil works, structures, irrigation, lighting, climate control, cold storage) and ongoing Operating Expenditure (power, water, fertilizer, seeds, substrate, direct labor, packaging, maintenance, logistics and working capital).",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "The trap of theoretical yield modeling",
      blocks: [
        {
          kind: "text",
          value:
            "Equipment suppliers routinely market facilities using theoretical maximum crop density multiplied by ideal cycle times. Real commercial production must account for: harvest turnarounds, disease cull losses (typically 8–15%), quality grading downgrades, and seasonal demand fluctuations.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Saleable yield versus gross biomass",
          value:
            "Only produce that meets the buyer's strict grade specifications (weight, color, head firmness, defect-free foliage) commands premium retail price. Financial models calculated on total harvested fresh weight rather than graded saleable weight severely overestimate net revenue.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Typical OpEx breakdown for commercial CEA" },
        {
          kind: "table",
          caption: "Approximate cost distribution in commercial CEA operations",
          columns: ["Cost Category", "Typical % of Total OpEx", "Primary Influencing Variables"],
          rows: [
            ["Electricity / Energy", "25 – 45%", "HVAC, supplemental/sole-source LED lighting, cooling pads, pumping"],
            ["Direct & Supervisory Labour", "20 – 35%", "Transplanting, harvesting, pruning, packing, hygiene, local wages"],
            ["Packaging & Post-Harvest", "10 – 18%", "Clamshells, punnets, modified atmosphere bags, cartons, labels"],
            ["Substrates, Seeds & Nutrients", "8 – 14%", "Coir/rockwool cubes, hybrid/F1 seed, mineral fertilizers, acids"],
            ["Maintenance, Logistics & Admin", "8 – 15%", "Refrigerated vans, fuel, pump spares, probe replacement, certs"],
          ],
          basis: "Synthesized from commercial CEA operations across diverse global production regions.",
        },
        { kind: "subheading", value: "Unit economics and break-even formula" },
        {
          kind: "formula",
          name: "Cost of Goods Sold (COGS) per Unit",
          expression: "COGS_kg = (Annual OpEx + Annual Depreciation) / Annual Saleable Kg",
          terms: [
            { symbol: "COGS_kg", meaning: "Full production cost per saleable kilogram", unit: "₹ or $ / kg" },
            { symbol: "Annual OpEx", meaning: "Total annual cash operating expenditures", unit: "Currency" },
            { symbol: "Annual Depreciation", meaning: "Straight-line capital depreciation of plant and equipment", unit: "Currency" },
            { symbol: "Annual Saleable Kg", meaning: "Total net kilograms actually sold to buyers", unit: "kg" },
          ],
          limitations: "Assumes continuous commercial operation and excludes external retail distribution margins.",
        },
      ],
    },
    {
      id: "practice",
      heading: "Commercial risk mitigation practices",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            "Secure written off-take contracts or memoranda with commercial buyers (supermarkets, horeca, direct-to-consumer) before finalizing greenhouse CapEx.",
            "Diversify the crop matrix between fast-cashflow salad greens and steady-demand vine crops to hedge against single-crop market crashes.",
            "Install commercial solar PV or negotiate industrial Time-of-Day (ToD) electricity tariffs to reduce peak daytime power bills.",
            "Maintain a minimum 6-month operating cash buffer (working capital) to survive initial crop cycle learning curves.",
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
            "Advanced commercial producers build dynamic techno-economic optimization models. By linking spot energy prices, ambient weather forecasts and wholesale market futures, algorithmic dispatchers dynamically schedule lighting photoperiods and carbon dioxide enrichment to minimize marginal cost per kilogram harvested while maximizing delivery window margins.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "A commercial hydroponic farm must be modeled on realistic graded saleable yield, not theoretical maximums.",
    "Electricity and labor represent the two largest ongoing operating expenses in modern CEA.",
    "Packaging materials and refrigerated transport often exceed the cost of fertilizers and substrates.",
    "Off-take agreements and market channels should be established prior to capital deployment.",
    "Adequate working capital reserves are essential to bridge the ramp-up phase of a new facility.",
  ],
  related: ["farm-design", "operations", "energy", "systems"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Business planning and economic feasibility guides for greenhouse horticulture investments.",
    },
    {
      organisation: "Wageningen University and Research",
      description: "Horticultural economics research papers on CEA production costs, labor productivity and energy modeling.",
    },
  ],
};
