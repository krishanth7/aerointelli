import type { KnowledgeArea } from "../types";

export const degassing: KnowledgeArea = {
  number: "10",
  slug: "degassing",
  title: "Degassing and CO2",
  navSummary: "Carbon dioxide accumulation, stripping, nitrogen supersaturation and degasser placement.",
  summary:
    "Carbon dioxide is produced everywhere in the loop and removed nowhere unless a process is built to do it. Left alone it depresses pH, slows the biofilter and impairs the fish's ability to use the oxygen present.",
  difficulty: "advanced",
  topics: ["water", "engineering"],
  tags: ["carbon dioxide", "degassing", "stripping", "total dissolved gas", "pH"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-03-18",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Fish and bacteria breathe out carbon dioxide, and in a closed loop it has nowhere to go. Too much of it makes the water acidic and makes the fish struggle to breathe even when there is plenty of oxygen. A degasser gives the water a chance to release it to the air.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Degassing is the removal of dissolved gases from the culture water by contacting it with air. In a recirculating system the target is almost always carbon dioxide, though the same process also relieves nitrogen supersaturation and brings the water toward equilibrium with the atmosphere generally.",
        },
        {
          kind: "text",
          value:
            "Unlike aeration, whose purpose is to add oxygen, degassing works in the other direction: it exploits the very low carbon dioxide content of air to drive CO2 out of the water.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why it matters",
      blocks: [
        {
          kind: "callout",
          tone: "established",
          title: "High CO2 impairs fish even when oxygen is adequate",
          value:
            "Fish offload carbon dioxide from the blood by diffusion across the gills into the water. When the water already carries a high CO2 concentration, that gradient is reduced, blood CO2 rises and the fish's ability to carry oxygen is impaired — which produces respiratory distress in water whose dissolved oxygen reading looks satisfactory.",
        },
        {
          kind: "list",
          items: [
            "Dissolved CO2 forms carbonic acid, consuming alkalinity and depressing pH.",
            "Falling pH slows nitrification, so a CO2 problem becomes an ammonia problem.",
            "Pure oxygen systems make it worse: they raise oxygen without providing the gas exchange that would strip CO2, so intensive systems on pure oxygen accumulate it fastest.",
            "The symptoms — poor appetite, reduced growth, respiratory distress — look like an oxygen problem and are frequently misdiagnosed as one.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "How it works",
      blocks: [
        {
          kind: "text",
          value:
            "Stripping depends on contact between water and a large volume of air with a low carbon dioxide content. Two variables govern performance: the surface area created between water and air, and the ratio of air volume to water volume passing through the contactor. A degasser with insufficient ventilation saturates its own air stream with CO2 and stops working, however well distributed the water is.",
        },
        {
          kind: "flow",
          caption: "How a stripping column works",
          steps: [
            {
              label: "Water distribution",
              detail:
                "Water is spread evenly over the top of a packed column. Uneven distribution creates channelling, and channelled water is not contacted.",
            },
            {
              label: "Film formation over packing",
              detail:
                "The packing breaks the water into thin films and droplets, creating the surface area across which gas transfer occurs.",
            },
            {
              label: "Counter-current airflow",
              detail:
                "Air is drawn or blown upward through the packing. Because it is continuously renewed and low in CO2, the concentration gradient driving stripping is maintained through the full column height.",
            },
            {
              label: "CO2 leaves with the air",
              detail:
                "Carbon dioxide transfers from water to air and is exhausted. The exhaust must go outside the building, or the room air itself becomes the limiting condition.",
            },
            {
              label: "Water collects and moves on",
              detail:
                "Water leaves near equilibrium with air, which also means near air saturation for oxygen — which is why oxygenation follows degassing rather than preceding it.",
            },
          ],
        },
      ],
    },
    {
      id: "system-role",
      heading: "Placement in the loop",
      blocks: [
        {
          kind: "text",
          value:
            "Degassing belongs after biofiltration and before oxygenation. After biofiltration, because nitrification itself produces carbon dioxide and stripping upstream of it would miss that contribution. Before oxygenation, because a degasser brings water toward air equilibrium and would strip away any supersaturated oxygen added beforehand.",
        },
        {
          kind: "table",
          caption: "Degassing arrangements",
          columns: ["Arrangement", "Principle", "Characteristics"],
          rows: [
            [
              "Packed stripping column",
              "Water falls over packing against a forced or induced airflow",
              "Effective and controllable, with performance set by height, packing and air-to-water ratio. Requires vertical space and pumping to the top.",
            ],
            [
              "Cascade or stepped aeration",
              "Water falls in stages through open air",
              "Simple and robust with no fan. Performance depends on drop height and turbulence, and it is harder to tune.",
            ],
            [
              "Diffused aeration in a vessel",
              "Air bubbled through a water volume",
              "Easy to retrofit and combines partial degassing with aeration, but generally needs a large air volume for the CO2 removal achieved.",
            ],
            [
              "Trickling biofilter",
              "Biofiltration over open media with airflow",
              "Performs nitrification and CO2 stripping in one vessel. Attractive where vertical space exists, but the two duties must be balanced in the design.",
            ],
          ],
          basis:
            "A comparison of principles. Which arrangement is appropriate depends on required removal, available head and space, species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Engineering principles",
      blocks: [
        {
          kind: "list",
          items: [
            "Air-to-water ratio is the primary design variable. Too little air and the exhaust saturates with CO2, ending transfer regardless of contact area.",
            "Column height and packing set the contact area and therefore how close to equilibrium the water gets.",
            "Removal is driven by the concentration difference, so a degasser removes a great deal from heavily loaded water and progressively less as the concentration falls.",
            "Exhaust must leave the building. Recirculating CO2-laden air back through the degasser defeats it and creates a workplace hazard.",
            "Alkalinity and CO2 are coupled: stripping CO2 raises pH, and dosing alkalinity changes how the carbonate system responds to the CO2 present.",
          ],
        },
        {
          kind: "formula",
          name: "Carbon dioxide removed by a degasser",
          expression: "M_CO2 = Q x (C_in - C_out)",
          terms: [
            { symbol: "M_CO2", meaning: "Carbon dioxide removed per unit time", unit: "g/h" },
            { symbol: "Q", meaning: "Flow through the degasser", unit: "m3/h" },
            { symbol: "C_in", meaning: "Dissolved CO2 entering", unit: "g/m3" },
            { symbol: "C_out", meaning: "Dissolved CO2 leaving", unit: "g/m3" },
          ],
          example:
            "Consider a hypothetical degasser where dissolved CO2 is measured or calculated at inlet and outlet. The product of flow and the difference is the mass being removed, which can be compared against the mass the system is producing.",
          limitations:
            "Dissolved CO2 is frequently calculated from pH, temperature and alkalinity rather than measured directly, and that calculation is sensitive to the accuracy of all three. Removal falls as inlet concentration falls, so performance measured at one loading does not transfer to another. The appropriate design values depend on species, loading, temperature, water chemistry and system configuration.",
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
            "Size for CO2 production at peak feeding, including the biofilter's contribution, not for fish respiration alone.",
            "Provide adequate and adjustable airflow, and duct the exhaust outside the building.",
            "Place after biofiltration and before oxygenation.",
            "Provide even water distribution over the packing, and access to inspect and clean it, because fouled packing channels.",
            "Account for the degasser's head requirement in the hydraulic design; it is often the highest point in the loop.",
            "Provide the means to measure pH, temperature and alkalinity so that dissolved CO2 can be tracked at all.",
            "Consider building ventilation as part of the same design, since the CO2 removed from the water ends up in the air.",
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
            "Track pH and alkalinity together as the routine indicator of the carbonate system, and calculate dissolved CO2 from them.",
            "Verify that the degasser fan or blower is actually moving air, rather than assuming it from run hours.",
            "Inspect packing for biofouling and for uneven wetting, which are the two common causes of gradual performance loss.",
            "Suspect CO2 whenever fish show respiratory signs and dissolved oxygen measures adequately.",
            "Watch building air quality where degasser exhaust is poorly ducted, for the sake of the staff as well as the process.",
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
          caption: "Degassing symptoms and first checks",
          columns: ["Symptom", "Measure or inspect first", "Common direction"],
          rows: [
            [
              "Respiratory distress with adequate dissolved oxygen",
              "pH, temperature and alkalinity to derive dissolved CO2",
              "Carbon dioxide accumulation reducing the fish's blood gas gradient",
            ],
            [
              "pH falling steadily despite alkalinity dosing",
              "Degasser airflow, packing condition, water distribution",
              "CO2 not being stripped, so the carbonate system is continuously loaded",
            ],
            [
              "Degasser performance falling gradually",
              "Packing fouling, distributor blockage, fan or blower output",
              "Channelling from fouled packing, or reduced airflow",
            ],
            [
              "CO2 high only at high feeding",
              "Air-to-water ratio at design flow",
              "Airflow sized for average rather than peak production",
            ],
            [
              "Gas bubble signs in fish",
              "Total dissolved gas pressure, air entrainment on pump suctions",
              "Nitrogen supersaturation from entrained air, which degassing relieves and pressurised leaks cause",
            ],
          ],
          basis:
            "A diagnostic ordering. Acceptable CO2 concentrations depend on species, loading, temperature, water chemistry and system configuration.",
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
            "Clean packing and distribution trays on a schedule; biofilm growth is continuous and its effect is gradual.",
            "Verify and record airflow rather than inferring it from equipment status.",
            "Service fans, blowers and their filters, and inspect exhaust ducting for obstruction.",
            "Calibrate the pH and temperature instruments the CO2 calculation depends on.",
            "Inspect for air entrainment on pump suctions and at inlets, which is the usual source of nitrogen supersaturation.",
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
            "Diagnosing every respiratory symptom as an oxygen problem and never calculating dissolved CO2.",
            "Placing the degasser before the biofilter and missing the CO2 the biofilter produces.",
            "Oxygenating before degassing and stripping out the oxygen just paid for.",
            "Providing insufficient airflow, so the degasser saturates its own exhaust.",
            "Exhausting CO2-laden air into the building and drawing it back in.",
            "Adding alkalinity to hold pH without addressing the CO2 that is depressing it.",
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
            "Total dissolved gas pressure is the parameter that matters for gas bubble disease, and it is not the same as dissolved oxygen. Nitrogen supersaturation arises from entrained air on pump suctions, from pressurised leaks and from certain water sources, and it is relieved by the same degassing process — which is why a degasser has a safety function beyond CO2 control.",
        },
        {
          kind: "text",
          value:
            "The carbonate system links CO2, pH and alkalinity into one interacting equilibrium. Managing pH by alkalinity dosing alone, without adequate stripping, treats a symptom and increases chemical consumption. The two levers are used together, and understanding which is doing the work at any time requires measuring all three variables.",
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
            "Carbon dioxide is produced by fish and by the biofilter, and accumulates unless stripped. Degassing sits after biofiltration and before oxygenation, depends on air-to-water ratio as much as on contact area, and must exhaust outside. When respiratory signs appear in water with adequate oxygen, dissolved CO2 is the first thing to calculate.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "CO2 accumulates in a closed loop unless a process is built specifically to strip it.",
    "High dissolved CO2 impairs respiration even when dissolved oxygen is adequate.",
    "CO2 depresses pH and consumes alkalinity, which then slows nitrification.",
    "Pure oxygen systems accumulate CO2 fastest, because they add oxygen without providing gas exchange.",
    "Degassing belongs after biofiltration and before oxygenation.",
    "Air-to-water ratio is the primary design variable, and the exhaust must leave the building.",
  ],
  related: ["oxygen", "water-quality", "biofiltration", "system-architecture"],
  furtherReading: [
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension fact sheets on carbon dioxide, gas transfer and water quality in recirculating systems.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description: "Technical guidance on gas management and water quality in aquaculture systems.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
  ],
};
