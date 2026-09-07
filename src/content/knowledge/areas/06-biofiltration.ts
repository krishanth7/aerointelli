import type { KnowledgeArea } from "../types";

export const biofiltration: KnowledgeArea = {
  number: "06",
  slug: "biofiltration",
  title: "Biofiltration",
  navSummary: "Nitrification, media, reactor types, startup and the ways a biofilter fails.",
  summary:
    "The biofilter is a cultivated bacterial population that converts ammonia to nitrate. It is the one unit process that cannot be bought and installed on the day it is needed.",
  difficulty: "advanced",
  topics: ["filtration", "water", "engineering"],
  tags: ["nitrification", "biofilm", "moving bed", "media", "alkalinity"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-03-02",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Fish release ammonia, which is toxic. A biofilter is a tank full of plastic media covered in useful bacteria that eat ammonia and turn it into something far less harmful. The bacteria take weeks to grow, so a biofilter has to be started long before the fish arrive — and if you damage it, you wait weeks again.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "A biofilter is a reactor that provides surface area and conditions for nitrifying bacteria to grow as a biofilm. Those bacteria oxidise total ammonia nitrogen to nitrite, and nitrite to nitrate, converting the most acutely toxic nitrogen waste in the system into the least.",
        },
        {
          kind: "text",
          value:
            "Unlike every other item of equipment in the loop, its capacity is biological. It grows into its duty over weeks, responds slowly to increased load, and can be lost far faster than it can be rebuilt.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why it matters",
      blocks: [
        {
          kind: "text",
          value:
            "Without nitrification, ammonia accumulates in a closed loop until it reaches concentrations the fish cannot tolerate. The only alternatives are water exchange at rates that defeat the purpose of recirculation, or feeding less. The biofilter is what makes closed production possible at all.",
        },
        {
          kind: "list",
          items: [
            "It sets the standing biomass ceiling, jointly with the oxygen system.",
            "It is the slowest process in the loop to respond to change, so it constrains how quickly stocking or feeding can be increased.",
            "It consumes alkalinity and produces carbon dioxide, which makes pH control a downstream consequence of its operation.",
            "It is vulnerable to disinfectants, medications, chlorine in makeup water and sudden temperature or pH change.",
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
            "Nitrification proceeds in two microbially distinct steps. Ammonia-oxidising organisms convert total ammonia nitrogen to nitrite. A separate group of nitrite-oxidising organisms converts nitrite to nitrate. Both are autotrophic, both require dissolved oxygen, and both consume alkalinity. Because the two steps are carried out by different populations with different growth characteristics, they can be out of balance — which is why nitrite accumulates during startup and after a disturbance.",
        },
        {
          kind: "flow",
          caption: "The two-step nitrification pathway",
          steps: [
            {
              label: "Ammonia enters the biofilter",
              detail:
                "Total ammonia nitrogen excreted by the fish, plus ammonia released from any solids that reached the reactor, arrives dissolved in the water.",
            },
            {
              label: "Diffusion into the biofilm",
              detail:
                "Ammonia and oxygen must diffuse from the bulk water through a boundary layer into the biofilm. Transport, not just biology, limits the rate — which is why flow and turbulence across the media matter.",
            },
            {
              label: "Ammonia oxidation",
              detail:
                "Ammonia-oxidising bacteria convert TAN to nitrite, consuming oxygen and alkalinity and producing carbon dioxide.",
            },
            {
              label: "Nitrite oxidation",
              detail:
                "Nitrite-oxidising bacteria convert nitrite to nitrate. This population is generally the slower of the two to establish, which is why nitrite peaks after ammonia during cycling.",
            },
            {
              label: "Nitrate leaves in exchange water",
              detail:
                "Nitrate is far less acutely toxic and accumulates, controlled by daily water exchange or by a dedicated denitrification process.",
            },
          ],
        },
        {
          kind: "callout",
          tone: "established",
          title: "Nitrification consumes alkalinity",
          value:
            "Oxidising ammonia consumes carbonate alkalinity. In a system with no replacement, alkalinity falls, pH follows, and nitrification slows — which raises ammonia while the operator is watching the biofilter rather than the buffer. Alkalinity is a biofilter parameter, not a separate water chemistry topic.",
        },
      ],
    },
    {
      id: "system-role",
      heading: "Reactor types",
      blocks: [
        {
          kind: "table",
          caption: "Common biofilter reactor types",
          columns: ["Type", "How it works", "Characteristics"],
          rows: [
            [
              "Moving bed (MBBR)",
              "Free-floating plastic media kept in suspension by aeration or flow",
              "Self-cleaning through media collision, tolerant of variable load, no backwashing. Requires energy for mixing and provides some aeration and degassing incidentally.",
            ],
            [
              "Fixed bed / submerged fixed film",
              "Static media through which water is passed",
              "Simple and mechanically quiet, but prone to channelling and clogging if solids reach it, and needs a defined cleaning method.",
            ],
            [
              "Trickling filter",
              "Water distributed over media open to the atmosphere",
              "Provides nitrification together with aeration and carbon dioxide stripping. Requires vertical space and pumping to the top of the tower.",
            ],
            [
              "Granular / bead filter",
              "Packed fine media performing straining and biological treatment together",
              "Combines mechanical and biological function in one vessel. Backwashing disturbs the biofilm, so the two duties are in tension.",
            ],
            [
              "Rotating biological contactor",
              "Discs rotating through the water, alternately submerged and in air",
              "Simple in concept with low pumping head, but carries mechanical drive and bearing loads that must be maintained.",
            ],
          ],
          basis:
            "A comparison of reactor principles and their operating characteristics, not a ranking. Selection depends on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Engineering principles",
      blocks: [
        {
          kind: "text",
          value:
            "Biofilter sizing starts from the ammonia the system will produce at peak feeding, and converts it into a required area of active biofilm using an areal removal rate. That rate is the whole difficulty: it is not a property of the media, but of the media operating in a specific system.",
        },
        {
          kind: "formula",
          name: "Required biofilter media area",
          expression: "A = P_TAN / VTR_A",
          terms: [
            { symbol: "A", meaning: "Required active media surface area", unit: "m2" },
            { symbol: "P_TAN", meaning: "Total ammonia nitrogen produced per day at peak feeding", unit: "g N/day" },
            { symbol: "VTR_A", meaning: "Areal TAN removal rate achieved by the media in service", unit: "g N/m2/day" },
          ],
          example:
            "Consider a hypothetical system with a known peak daily TAN production. Dividing that load by the areal removal rate the media is expected to sustain gives the required area, and dividing by the media's specific surface area gives the media volume.",
          limitations:
            "The areal removal rate is not a constant and is not a media specification. It varies with temperature, pH, dissolved oxygen, organic loading, bulk ammonia concentration and how much of the nominal media surface is actually colonised and reached by flow. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration, and should be established from measured performance rather than assumed.",
        },
        {
          kind: "list",
          items: [
            "Nitrification is oxygen-consuming. The biofilter's own oxygen demand must be supplied, or it limits itself.",
            "Removal rate falls as bulk ammonia concentration falls, so a biofilter is least efficient exactly when water quality is best.",
            "Organic loading favours faster-growing heterotrophic bacteria that physically displace nitrifiers. Mechanical filtration upstream is therefore part of biofilter design.",
            "Temperature strongly affects nitrification rate, so a system designed at one temperature does not carry the same capacity at another.",
            "Nominal media surface area is a geometric figure. Effective area depends on colonisation and on whether flow actually reaches it.",
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
            "Size for peak feed load at the lowest operating temperature and least favourable pH the system will run at.",
            "Place the biofilter after solids removal, always.",
            "Provide alkalinity dosing as designed infrastructure, with control and measurement, rather than as a manual task.",
            "Ensure oxygen is available within the reactor, whether by aeration in a moving bed or by the dissolved oxygen carried in the incoming flow.",
            "Design for even flow distribution. Channelling reduces effective area far more than any media specification improves it.",
            "Provide sampling points before and after the reactor so removal can be measured rather than inferred.",
            "Allow a route to add, remove and inspect media without dismantling the vessel.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Cycle the biofilter before the fish arrive",
          value:
            "A biofilter must be established by dosing an ammonia source and following ammonia and nitrite until both are being removed reliably. Stocking a system whose biofilter has not been cycled means the fish themselves supply the ammonia for cycling, and they experience the excursion while it happens.",
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
            "Increase feeding in steps and allow the population to catch up. The biofilter grows into load; it does not step with it.",
            "Monitor ammonia and nitrite together. Ammonia controlled with nitrite rising is a specific signal about the second population.",
            "Monitor alkalinity and pH as biofilter parameters, and dose to hold the buffer rather than reacting to a pH reading.",
            "Never allow chlorinated makeup water to reach the reactor untreated.",
            "Treat any medication or disinfection decision as a biofilter decision, and plan for reduced capacity afterwards.",
            "Clean media conservatively. Aggressive cleaning removes the biofilm that is doing the work.",
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
          caption: "Biofilter symptoms and first checks",
          columns: ["Symptom", "Measure first", "Common direction"],
          rows: [
            [
              "Ammonia rising in a mature system",
              "Alkalinity, pH, temperature, dissolved oxygen at the reactor, recent feed increase",
              "Alkalinity depletion, a temperature drop, or load increased faster than the population could grow",
            ],
            [
              "Nitrite rising while ammonia is controlled",
              "Nitrite trend, recent cleaning, recent chemical exposure, temperature",
              "The nitrite-oxidising population lagging, commonly after disturbance or during startup",
            ],
            [
              "Both ammonia and nitrite rising suddenly",
              "Makeup water for chlorine, any recent medication or disinfectant, oxygen at the reactor",
              "A toxic exposure or an oxygen deficit suppressing the population",
            ],
            [
              "pH falling steadily",
              "Alkalinity, dissolved carbon dioxide, degasser performance",
              "Alkalinity consumed by nitrification, or CO2 accumulating because stripping is inadequate",
            ],
            [
              "Media clumping, channelling or fouling",
              "Upstream solids capture, mixing energy, flow distribution",
              "Organic overloading from poor mechanical filtration, or insufficient mixing in a moving bed",
            ],
          ],
          basis:
            "A diagnostic ordering. Thresholds and target values depend on species, loading, temperature, water chemistry and system configuration.",
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
            "Inspect media distribution and movement regularly; static pockets in a moving bed indicate failing aeration or mixing.",
            "Verify aeration or mixing equipment output rather than assuming it from motor run hours.",
            "Confirm alkalinity dosing equipment is delivering the dose it is set to deliver.",
            "Measure ammonia and nitrite across the reactor periodically to quantify removal, so decline is detected as a trend rather than as an excursion.",
            "Keep a record of every event that could have affected the population — cleaning, dosing, temperature change, power interruption — alongside the water quality log.",
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
            "Sizing from a published removal rate treated as a media property rather than a system-specific measurement.",
            "Stocking before the biofilter is cycled, and treating the resulting excursion as bad luck.",
            "Increasing feeding in a single step and expecting the biofilter to follow.",
            "Letting alkalinity fall, then diagnosing an ammonia problem as a biofilter capacity problem.",
            "Allowing solids into the reactor and then blaming the media for fouling.",
            "Cleaning media thoroughly, and losing weeks of nitrification in an afternoon.",
            "Adding a medication to the loop without planning for the biofilter's response.",
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
            "Denitrification is the natural extension. In an anoxic reactor with an available carbon source, bacteria reduce nitrate to nitrogen gas, allowing much lower water exchange. It introduces a process that must be controlled carefully: insufficient carbon leaves nitrite accumulating, excess carbon leads to sulphide production, and both are consequential in a closed loop.",
        },
        {
          kind: "text",
          value:
            "Alternative nitrogen pathways, including anaerobic ammonium oxidation, are studied for their lower oxygen and carbon requirements. Their application in commercial recirculating aquaculture remains an area of research rather than established practice.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Predicting biofilter capacity remains difficult",
          value:
            "Relating media specification, hydraulics, temperature and organic loading to a reliable achieved removal rate is still done substantially by measurement and experience rather than by prediction from first principles.",
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
            "The biofilter is a cultivated population, not a piece of equipment. It removes ammonia in two microbial steps, consumes oxygen and alkalinity, is suppressed by organic loading and disinfectants, and grows into load over weeks. Protect it with mechanical filtration upstream, feed it alkalinity and oxygen, load it gradually, and measure across it — because everything the biofilter does badly appears elsewhere as a water quality problem.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Nitrification is two microbial steps by two populations, which is why nitrite lags ammonia after any disturbance.",
    "Biofilter capacity is biological: it grows over weeks and cannot be increased on demand.",
    "Nitrification consumes alkalinity and produces CO2, so pH control is a biofilter concern.",
    "Areal removal rate is a system-specific measured value, not a media specification.",
    "Organic loading lets heterotrophs displace nitrifiers, so mechanical filtration is part of biofilter design.",
    "Cycle before stocking, load in steps, and clean media conservatively.",
  ],
  related: ["tan-ammonia", "water-quality", "mechanical-filtration", "commissioning"],
  furtherReading: [
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension fact sheets on biological filtration, nitrification and biofilter management in recirculating systems.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description: "Technical guidance covering biological treatment within recirculating aquaculture systems.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research (ICAR)",
      description:
        "Research and extension material on aquaculture water treatment under Indian production conditions.",
    },
  ],
};
