import type { KnowledgeArea } from "../types";

export const energy: KnowledgeArea = {
  number: "20",
  slug: "energy",
  title: "Energy",
  navSummary: "Where the power goes, and what it costs to keep water moving and fish alive.",
  summary:
    "A recirculating farm converts electricity into water quality. Pumping, aeration and thermal control run continuously, which makes energy both a major operating cost and a standing risk.",
  difficulty: "intermediate",
  topics: ["engineering", "economics", "operations"],
  tags: ["energy consumption", "pumping energy", "heat recovery", "efficiency", "power cost"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-04-27",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "The farm runs on electricity. Pumps push water, blowers make air, heaters or chillers hold temperature — all day, every day. Design choices made once decide how big that bill is for the whole life of the farm.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Energy in a recirculating system is the electrical and thermal input required to maintain the conditions the fish need. The principal continuous loads are water movement, gas transfer, and heating or cooling; the principal intermittent loads are filtration equipment, lighting, feeding and ancillary services.",
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
            "Energy is generally among the largest operating costs after feed, and unlike feed it is consumed whether or not the fish are growing.",
            "The loads run continuously, so an inefficiency is paid for every hour rather than per batch.",
            "Energy dependency is a risk as well as a cost: loss of supply becomes a loss of life support within minutes.",
            "Energy intensity per kilogram of production is central to both the cost position and the environmental case for recirculating aquaculture.",
          ],
        },
        {
          kind: "callout",
          tone: "established",
          title: "Continuous loads dominate the bill",
          value:
            "Equipment that runs continuously determines the energy cost far more than equipment with a high nameplate rating that runs occasionally. Attention belongs on the pumps, blowers and thermal plant that never stop.",
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "Where the energy goes",
      blocks: [
        {
          kind: "table",
          caption: "Principal energy consumers and what governs each",
          columns: ["Consumer", "Duty", "What governs consumption"],
          rows: [
            [
              "Recirculation pumping",
              "Moving water around the loop continuously",
              "Total system head, pump efficiency at the actual duty point, flow rate, pipe sizing and fouling",
            ],
            [
              "Aeration and oxygenation",
              "Gas transfer into and out of the water",
              "Transfer method and its efficiency, oxygen demand, whether oxygen is generated on site",
            ],
            [
              "Heating and cooling",
              "Holding culture temperature against ambient",
              "The difference between target and ambient temperature, building insulation, exchange rate, heat recovery",
            ],
            [
              "Mechanical filtration",
              "Screening, backwashing, sludge handling",
              "Solids load, backwash frequency, drive and pump sizing",
            ],
            [
              "Disinfection",
              "UV lamps or ozone generation",
              "Treated flow, dose applied, lamp or generator efficiency",
            ],
            [
              "Building services",
              "Lighting, ventilation, controls, ancillary equipment",
              "Facility design and operating hours",
            ],
          ],
          basis:
            "A structural breakdown of consumers, not a distribution of consumption. The proportions differ substantially between systems depending on target temperature, ambient conditions, oxygen supply arrangement and hydraulic design.",
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Engineering principles",
      blocks: [
        {
          kind: "formula",
          name: "Energy intensity of production",
          expression: "E_specific = E_total / P",
          terms: [
            { symbol: "E_specific", meaning: "Energy consumed per unit of production", unit: "kWh/kg" },
            { symbol: "E_total", meaning: "Total energy consumed over the period", unit: "kWh" },
            { symbol: "P", meaning: "Fish produced over the same period", unit: "kg" },
          ],
          example:
            "Consider a hypothetical farm metering its total consumption over a production cycle. Dividing by the harvested weight gives a figure that can be compared against the same farm's earlier cycles.",
          limitations:
            "This figure is only comparable between systems that share a target temperature, ambient climate, species, production intensity and system boundary. Whether it includes building services, oxygen generation and effluent treatment changes the result substantially, so the boundary must be stated. It is most useful as an internal trend rather than as a benchmark.",
        },
        {
          kind: "list",
          items: [
            "Pumping energy is a function of head, so pipe sizing, fitting selection and elevation design determine it before any pump is chosen.",
            "Gravity flow costs nothing and does not stop when a breaker trips. Every gravity transfer designed in is a permanent saving and a resilience gain.",
            "Variable speed drives allow output to follow demand; throttling controls flow by destroying energy deliberately.",
            "Thermal load depends on the temperature difference against ambient, on exchange rate and on insulation, and is often the dominant load where the target temperature is far from ambient.",
            "Efficiency at the actual operating point matters more than rated efficiency, and equipment run far from its design point can be markedly worse than its specification.",
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
            "Use elevation and gravity wherever the civil design allows, since this is decided once and cannot be retrofitted.",
            "Size pipework generously; the capital difference is paid once and the friction is paid continuously.",
            "Select pumps and blowers for the actual duty point, and specify variable speed where the load varies.",
            "Insulate the building and the loop where the target temperature differs from ambient.",
            "Consider heat recovery between discharge and makeup water, particularly at higher exchange rates.",
            "Sub-meter the major loads. Without sub-metering, energy management is guesswork.",
            "Evaluate on-site oxygen generation against delivered oxygen as an energy and risk decision together.",
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
            "Trend energy consumption against production, and investigate departures rather than absorbing them.",
            "Watch pump power against flow. Rising power at falling flow indicates fouling somewhere in the loop and is one of the earliest maintenance signals available.",
            "Match flow to actual demand rather than running everything at full output continuously, where the process allows.",
            "Maintain equipment for efficiency, not only for function; a fouled heat exchanger or a worn impeller works while costing more.",
            "Review tariff structure and load timing where the supply arrangement makes that meaningful.",
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
          caption: "Energy symptoms and first checks",
          columns: ["Symptom", "Measure first", "Common direction"],
          rows: [
            [
              "Consumption rising with no production change",
              "Sub-meter breakdown, pump power against flow, thermal load",
              "Progressive fouling raising system head, or a thermal loss that has developed",
            ],
            [
              "Pumping energy higher than the design estimate",
              "Actual duty point against the pump curve, head loss across each process",
              "Undersized pipework, excess fittings, or throttling used for control",
            ],
            [
              "Thermal cost dominating the bill",
              "Insulation, exchange rate, ambient against target temperature, heat recovery",
              "Exchange rate higher than necessary, or heat lost through an uninsulated envelope",
            ],
            [
              "Oxygenation energy high",
              "Transfer efficiency at the operating concentration, gas losses, generator performance",
              "Transfer equipment operating far from its efficient condition, or unabsorbed gas escaping",
            ],
            [
              "Energy intensity worse than a comparable farm",
              "Whether the system boundaries and target temperatures are actually comparable",
              "Frequently a comparison problem rather than an efficiency problem",
            ],
          ],
          basis:
            "A diagnostic ordering. Consumption depends on species, target temperature, ambient climate, loading and system configuration, so external comparisons should be made with care.",
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
            "Trend sub-metered consumption by load and review it on a schedule.",
            "Clean heat exchangers, which lose performance gradually and expensively.",
            "Service pumps, blowers and motors, including impeller and bearing condition.",
            "Clean filters and screens on schedule, since head loss is paid in energy continuously.",
            "Verify variable speed drives are actually modulating rather than running at maximum with the control disabled.",
            "Inspect insulation and building envelope, particularly after any modification.",
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
            "Sizing pipework to minimise capital and paying friction loss for the life of the plant.",
            "Throttling to control flow where variable speed was available.",
            "Failing to sub-meter, leaving no basis for any efficiency decision.",
            "Neglecting insulation where the target temperature differs substantially from ambient.",
            "Selecting equipment on rated efficiency without checking efficiency at the actual duty point.",
            "Comparing energy intensity figures between farms without checking that the system boundaries match.",
            "Treating rising energy consumption as a tariff issue rather than as a maintenance signal.",
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
            "Heat recovery from the discharge stream is the largest available thermal saving in systems operating away from ambient temperature, and its value scales with the exchange rate. It couples the water management decision to the energy decision, since reducing exchange reduces thermal loss but increases the treatment duty for nitrate and dissolved organics.",
        },
        {
          kind: "text",
          value:
            "On-site generation and renewable integration change the risk profile as well as the cost. Solar generation aligns poorly with a load that runs through the night, so its value depends on the tariff structure and on whether storage is included. Whatever the arrangement, the emergency supply for life-support loads remains a separate requirement.",
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
            "Energy is a continuous cost determined largely by decisions made at design: elevation and gravity, pipe sizing, equipment selection at the real duty point, insulation and heat recovery. Sub-meter the major loads, trend consumption against production, and treat rising energy use as a maintenance signal rather than as a fact of operation.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Continuous loads — pumping, gas transfer, thermal control — dominate the energy bill.",
    "Pumping energy is set by system head, so pipe sizing and elevation decide it before pump selection.",
    "Variable speed follows demand; throttling wastes energy deliberately.",
    "Thermal load depends on temperature difference, insulation and exchange rate, and heat recovery scales with exchange.",
    "Sub-metering is the prerequisite for any energy management at all.",
    "Rising pump power at falling flow is an early fouling signal, not just a cost.",
  ],
  related: ["hydraulics", "pumps", "economics", "electrical"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical publications on aquaculture production systems, resource use and sustainability.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension publications on equipment selection and operating efficiency in aquaculture systems.",
    },
  ],
};
