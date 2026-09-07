import type { KnowledgeArea } from "../types";

export const economics: KnowledgeArea = {
  number: "21",
  slug: "economics",
  title: "Economics",
  navSummary: "Capital, operating cost, margin and the assumptions behind every model.",
  summary:
    "A recirculating farm is a capital-intensive plant producing a commodity-priced animal. The economics turn on the assumptions in the model far more than on the equipment in the building.",
  difficulty: "advanced",
  topics: ["economics", "operations"],
  tags: ["capital cost", "operating cost", "margin", "cash flow", "assumptions"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-05-01",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Building a recirculating farm costs a lot up front, and then costs money every day to run whether the fish are growing or not. Whether it makes money depends on a handful of assumptions — growth rate, survival, feed conversion, sale price — and small errors in those compound into large errors in the answer.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "The economics of a recirculating system covers the capital required to build it, the operating cost to run it, the revenue from what it produces, and the timing of all three. Because production cycles are long and the plant runs continuously, cash flow timing matters as much as the margin itself.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The model is mostly assumptions",
          value:
            "A financial model for a fish farm is a small amount of arithmetic applied to a set of biological and market assumptions. Growth rate, survival, feed conversion and sale price dominate the result, and each carries genuine uncertainty. A model that presents a single confident number is concealing that uncertainty rather than resolving it.",
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
            "Capital intensity means the plant must run near its designed production to service its own cost, which leaves little tolerance for underperformance.",
            "Continuous operating cost accrues whether or not a cycle is going well, so a lost batch costs the batch and the period of running that produced it.",
            "The break-even point is determined at design, because it is fixed by capacity and by the fixed cost of operating that capacity.",
            "Investment decisions rest on the model, so the honesty of its assumptions is a governance matter and not only a technical one.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "The cost structure",
      blocks: [
        {
          kind: "table",
          caption: "Where money is spent, and what governs each item",
          columns: ["Category", "Includes", "What governs it"],
          rows: [
            [
              "Capital — civil and building",
              "Land, site works, building shell, floors, drainage",
              "Site conditions, climate, required insulation, biosecurity zoning",
            ],
            [
              "Capital — process equipment",
              "Tanks, filtration, biofilters, pumps, oxygenation, degassing, disinfection",
              "Design capacity, number of independent loops, redundancy level",
            ],
            [
              "Capital — services and controls",
              "Electrical, standby power, instrumentation, automation, plumbing",
              "Redundancy requirements and the level of automation chosen",
            ],
            [
              "Operating — feed",
              "Feed purchased and consumed",
              "Feed price, feed conversion achieved, waste and storage losses",
            ],
            [
              "Operating — energy",
              "Pumping, gas transfer, thermal control, services",
              "Hydraulic design, target temperature against ambient, tariff",
            ],
            [
              "Operating — labour",
              "Operators, technical supervision, management",
              "Degree of automation, number of loops, shift coverage required",
            ],
            [
              "Operating — stock and consumables",
              "Seed or fingerlings, oxygen, chemicals, test reagents, spares",
              "Seed availability and price, treatment regime, maintenance policy",
            ],
            [
              "Operating — overheads",
              "Insurance, compliance, finance cost, administration, effluent handling",
              "Regulatory context, financing structure, disposal arrangements",
            ],
          ],
          basis:
            "A structural breakdown of cost categories, without figures. Costs are specific to site, scale, species, market and time, and any figure quoted generically would be misleading.",
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Engineering principles",
      blocks: [
        {
          kind: "formula",
          name: "Production cost per unit",
          expression: "C = (F_fixed + F_variable) / P",
          terms: [
            { symbol: "C", meaning: "Cost per unit of fish produced", unit: "currency/kg" },
            { symbol: "F_fixed", meaning: "Fixed costs over the period, including finance and depreciation", unit: "currency" },
            { symbol: "F_variable", meaning: "Variable costs over the period, principally feed, energy and stock", unit: "currency" },
            { symbol: "P", meaning: "Fish produced and sold over the period", unit: "kg" },
          ],
          example:
            "Consider a hypothetical farm operating for a full year. Dividing total cost by total production gives the unit cost against which the achievable sale price must be compared. Because fixed costs do not fall with production, unit cost rises sharply when output is below plan.",
          limitations:
            "The result depends entirely on the production figure, which is itself a function of growth rate, survival and cycle length — the three most uncertain inputs in the model. It also depends on the treatment of depreciation and financing, which must be stated. The appropriate values depend on species, market, site, scale and system configuration.",
        },
        {
          kind: "list",
          items: [
            "Fixed costs dominate at low utilisation, which is why underperformance is punished disproportionately.",
            "Feed conversion connects biology directly to margin: it is simultaneously the largest cost driver and a biological outcome.",
            "Survival compounds. Losses early in a cycle remove the fish that would have carried the fixed cost of the whole period.",
            "Cycle length determines how many harvests the capital produces per year, so growth rate affects capital productivity as well as cost.",
            "Price realisation depends on size, form, timing and market access, none of which are properties of the system.",
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
            "Design for the market first. Species, size at harvest and market form determine the revenue, and the system should be designed to deliver them rather than the market found afterwards.",
            "Consider whether phased construction is possible, so that capital is committed as production is proven rather than in a single commitment.",
            "Weigh redundancy against the value of the standing biomass it protects, and treat that as an insurance calculation rather than a preference.",
            "Recognise that automation trades capital for labour, and that the trade depends on local labour cost and availability.",
            "Include the costs that are routinely omitted at design: effluent and sludge handling, spares holding, instrument consumables, and the working capital to carry stock through a cycle.",
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
            "Track cost per unit of production continuously, not only at year end, and against the model's assumption for the same period.",
            "Record feed conversion, survival and growth rate as financial indicators, because that is what they are.",
            "Manage cash flow against the production cycle. Cost accrues continuously while revenue arrives at harvest.",
            "Revisit the model against actual performance each cycle, and correct the assumptions rather than the explanation.",
            "Treat any biological performance shortfall as a financial event immediately, because the fixed cost continues regardless.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Model with ranges, not point values",
          value:
            "Because growth, survival, conversion and price are all uncertain, the useful output of a financial model is a range and the sensitivity of the result to each input. Knowing which assumption the answer is most sensitive to is worth more than the answer itself.",
        },
      ],
    },
    {
      id: "common-problems",
      heading: "Common problems and troubleshooting",
      blocks: [
        {
          kind: "table",
          caption: "Economic symptoms and where to look",
          columns: ["Symptom", "Check first", "Common direction"],
          rows: [
            [
              "Unit cost above plan",
              "Actual production against planned production, then the cost lines",
              "Usually a production shortfall spreading fixed cost over fewer kilograms, rather than a cost overrun",
            ],
            [
              "Feed cost above plan",
              "Feed conversion achieved, uneaten feed, biomass estimate accuracy, feed price",
              "Overfeeding or a poor biomass estimate as often as a price movement",
            ],
            [
              "Energy cost above plan",
              "Sub-metered loads, pump power against flow, thermal load",
              "Fouling raising system head, or thermal loss underestimated at design",
            ],
            [
              "Margin below plan despite good production",
              "Realised price against assumed price, size and form at harvest, market access",
              "A market assumption rather than a production problem",
            ],
            [
              "Cash flow pressure mid-cycle",
              "Working capital assumptions, cycle length, harvest timing",
              "Cycle length longer than modelled, delaying revenue against continuous cost",
            ],
          ],
          basis:
            "A diagnostic ordering. Actual costs and prices are specific to site, scale, species, market and period.",
        },
      ],
    },
    {
      id: "maintenance",
      heading: "Financial discipline",
      blocks: [
        {
          kind: "list",
          items: [
            "Reconcile production records against sales records each cycle.",
            "Maintain a cost record structured the same way as the model, so the two can be compared directly.",
            "Re-derive the model's key assumptions from actual performance at the end of every cycle.",
            "Record the basis and date of every assumption, so that a figure is never carried forward without knowing where it came from.",
            "Review insurance cover against the actual value of standing biomass, which changes through the cycle.",
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
            "Building a model on growth, survival and conversion figures taken from another species, system or climate.",
            "Presenting a single point estimate rather than a range with stated sensitivities.",
            "Omitting working capital, so the plant is built but cannot be stocked and carried through a cycle.",
            "Omitting sludge and effluent handling, spares and instrument consumables from the operating cost.",
            "Assuming design capacity is achieved from the first cycle.",
            "Treating the biofilter establishment period and commissioning as free time rather than as cost with no revenue.",
            "Assuming a price that requires market access the business does not have.",
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
            "Risk-adjusted analysis is more informative than a base case. Modelling the consequence of a lost batch, an extended cycle or a price fall shows whether the business survives the events that actually occur, and it frequently changes design decisions — particularly around redundancy and around the number of independent loops.",
        },
        {
          kind: "text",
          value:
            "Scale is the other consideration. Fixed costs of management, compliance and technical supervision do not scale in proportion to production, so unit economics generally improve with scale. That has to be weighed against the larger capital commitment, the larger standing biomass at risk in any single event, and the market's ability to absorb the output at the assumed price.",
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
            "Recirculating aquaculture is capital-intensive with continuous operating cost, which makes production performance the dominant financial variable. The model rests on growth, survival, conversion and price, all uncertain, so it should be built as a range with explicit sensitivities. Design for the market, include the costs that are habitually forgotten, and correct the assumptions against actual performance every cycle.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Capital intensity plus continuous operating cost means production shortfalls are punished disproportionately.",
    "Growth, survival, feed conversion and price dominate the model, and all four are uncertain.",
    "Model with ranges and sensitivities; a single confident number conceals the real question.",
    "Feed conversion and survival are financial indicators as much as biological ones.",
    "Working capital, sludge handling, spares and commissioning time are the costs most often omitted.",
    "Design for the market first — species, harvest size and form determine the revenue side entirely.",
  ],
  related: ["feed-management", "energy", "biomass", "farm-design"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Publications on aquaculture economics, sector development and production planning.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research (ICAR)",
      description:
        "Economic and extension studies on aquaculture production systems in the Indian context.",
    },
    {
      organisation: "National Fisheries Development Board (NFDB), India",
      description:
        "Guidance and scheme information relevant to aquaculture investment and development in India.",
    },
  ],
};
