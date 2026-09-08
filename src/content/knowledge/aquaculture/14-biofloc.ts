import type { KnowledgeArea } from "../types";

export const biofloc: KnowledgeArea = {
  number: "14",
  slug: "biofloc",
  title: "Biofloc Technology",
  navSummary: "Growing a managed microbial community in the culture water so that waste nitrogen is converted in place.",
  summary:
    "Biofloc technology treats the culture water itself as the biofilter. By supplying organic carbon alongside the nitrogen that feed releases, the farmer promotes heterotrophic bacteria that assimilate ammonia into microbial biomass rather than letting it accumulate. The resulting suspended aggregates are both a waste sink and a supplementary food, but they exist only while aeration and mixing continue, which makes the system unusually intolerant of interruption.",
  difficulty: "advanced",
  topics: ["water", "systems", "production", "biology"],
  tags: ["heterotrophic bacteria", "carbon nitrogen ratio", "suspended solids", "minimal exchange", "aeration dependence"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-11",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Instead of pumping dirty water out to a separate filter, you keep it in the tank and grow bacteria in it that eat the fish waste. To make those bacteria multiply you add a cheap carbon source such as molasses or flour along with the feed. The bacteria clump into flocs, the animals eat some of the flocs, and the water stays usable — but only for as long as the aerators keep the flocs suspended and supplied with oxygen.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Biofloc systems are minimal-exchange culture units in which a dense, actively managed microbial community is maintained in suspension throughout the water column. The community is not incidental. It is cultivated deliberately, fed with an added carbon source, kept in suspension by continuous mixing, and monitored as carefully as the animals themselves. In a biofloc unit the water is not a medium that has to be cleaned; it is the treatment process.",
        },
        {
          kind: "text",
          value:
            "The approach is most established with shrimp and with tilapia — animals that tolerate high suspended solids and that can physically ingest and digest microbial aggregates. It has been trialled with other species, but tolerance of turbidity and the ability to derive nutritional value from the floc are the two traits that decide whether the method makes sense for a given animal at all.",
        },
        {
          kind: "text",
          value:
            "Structurally, biofloc sits between a pond and a recirculating system. It shares the pond's simplicity of plumbing — often there is no external filter loop at all — and the recirculating system's dependence on continuous mechanical support. That combination is what makes it attractive on paper and demanding in practice.",
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
            "Water is the binding constraint on aquaculture in a great many Indian locations, whether because the source is limited, because discharge is regulated, or because exchanging water is the route by which pathogens enter a farm. A system that runs on very little exchange changes the site selection problem entirely: land without a large reliable water body becomes usable, and the biosecurity perimeter becomes something that can actually be maintained.",
        },
        {
          kind: "text",
          value:
            "There is a second reason, which is nutritional. A fraction of the nitrogen that would otherwise leave the farm as waste is recaptured as microbial protein and re-consumed by the animals. That fraction is genuinely useful, but it is a partial recovery rather than a replacement for formulated feed, and treating it as the latter is one of the commoner ways biofloc projects disappoint.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Biofloc is not a low-technology option",
          value:
            "It is frequently promoted as a way to farm without capital. In operation it demands continuous aeration, a carbon dosing routine, daily solids measurement and an operator who understands what the readings mean. The capital moves from concrete and filters to power supply, redundancy and skill, but it does not disappear.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Two competing nitrogen pathways" },
        {
          kind: "text",
          value:
            "Ammonia excreted by the animals can leave the water by two microbial routes. Autotrophic nitrifying bacteria oxidise it to nitrite and then to nitrate, consuming oxygen and alkalinity and producing very little biomass. Heterotrophic bacteria assimilate it directly into cell protein, but only if they have organic carbon available in the right proportion. Biofloc management is the deliberate choice to favour the second route by supplying that carbon.",
        },
        {
          kind: "text",
          value:
            "In practice a mature biofloc system runs both pathways at once. Early in a cycle, when carbon is being added generously and the community is young, assimilation dominates. As the system ages and the nitrifying population establishes on the floc particles themselves, oxidation takes a larger share and nitrate begins to accumulate. Recognising which pathway is currently dominant is what tells the operator whether to keep dosing carbon and whether to expect alkalinity to fall.",
        },
        { kind: "subheading", value: "The floc particle" },
        {
          kind: "text",
          value:
            "A floc is an aggregate of bacteria, microalgae, protozoa, filamentous organisms, extracellular polymers, uneaten feed and faecal fragments, bound loosely enough that shear breaks it and rebuilt continuously by the same community. Its composition drifts with light, carbon source, salinity and age. Because the aggregate has mass, it settles the moment mixing stops, and a settled floc layer goes anaerobic quickly.",
        },
        { kind: "subheading", value: "Floc volume as the control variable" },
        {
          kind: "text",
          value:
            "The operator's principal handle is the standing quantity of floc, usually assessed as settleable volume in a cone. Too little and there is insufficient microbial capacity to absorb the nitrogen load. Too much and the floc itself becomes the oxygen consumer, the water becomes too turbid, and gill irritation follows. Managing biofloc is largely the work of holding that quantity inside a workable band by adjusting carbon input and by removing solids.",
        },
      ],
    },
    {
      id: "technical-fundamentals",
      heading: "Technical fundamentals",
      blocks: [
        {
          kind: "text",
          value:
            "The quantitative core of biofloc is the relationship between the nitrogen a feed releases and the organic carbon required to assimilate it into bacterial biomass. Both terms follow from the feeding rate, which means carbon dosing is a calculation from the feed sheet rather than an independent decision.",
        },
        {
          kind: "formula",
          name: "Nitrogen released to water from feed",
          expression: "TAN = F x Pf x Nc x (1 - Ar)",
          terms: [
            { symbol: "TAN", meaning: "Total ammonia nitrogen released to the water over the period", unit: "kg" },
            { symbol: "F", meaning: "Feed delivered over the period", unit: "kg" },
            { symbol: "Pf", meaning: "Crude protein fraction of the feed", unit: "dimensionless" },
            { symbol: "Nc", meaning: "Nitrogen content of protein, conventionally taken as one part in about six", unit: "dimensionless" },
            { symbol: "Ar", meaning: "Fraction of fed nitrogen retained in animal tissue", unit: "dimensionless" },
          ],
          example:
            "Consider a hypothetical unit feeding 20 kg of a 35 per cent protein diet in a day, with an assumed retention of 30 per cent of the fed nitrogen. Nitrogen offered is 20 x 0.35 x 0.16, which is 1.12 kg, of which roughly 0.78 kg is released to the water. Every subsequent dosing and aeration calculation for that day starts from this figure.",
          limitations:
            "Retention fraction is species-specific, size-specific and diet-specific, and uneaten feed shifts the whole balance towards the water. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Supplemental carbon requirement",
          expression: "Cs = (TAN x Y / Ey) - Cf",
          terms: [
            { symbol: "Cs", meaning: "Mass of supplemental organic carbon to be dosed", unit: "kg C" },
            { symbol: "TAN", meaning: "Nitrogen released to the water, from the previous relationship", unit: "kg N" },
            { symbol: "Y", meaning: "Carbon-to-nitrogen ratio of bacterial biomass, the mass of carbon fixed per unit nitrogen assimilated", unit: "kg C per kg N" },
            { symbol: "Ey", meaning: "Conversion efficiency of the supplied carbon into bacterial biomass", unit: "dimensionless" },
            { symbol: "Cf", meaning: "Organic carbon already entering the water from feed residues", unit: "kg C" },
          ],
          example:
            "Consider a hypothetical day releasing 0.78 kg of nitrogen, an assumed bacterial requirement of 4 kg of carbon per kilogram of nitrogen, an assumed conversion efficiency of 0.5, and 0.4 kg of carbon already present from feed residue. Supplemental carbon is (0.78 x 4 / 0.5) - 0.4, about 5.8 kg of carbon, which is then converted to a mass of the chosen carbon source by dividing by that source's carbon fraction.",
          limitations:
            "Both the bacterial ratio and the conversion efficiency are assumptions rather than measured constants, they drift with carbon source and community age, and over-dosing raises oxygen demand faster than it raises treatment capacity. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "flow",
          caption:
            "The carbon-to-nitrogen management loop. Each step is driven by the one before it, which is why carbon dosing is recalculated whenever the feed rate changes.",
          steps: [
            { label: "Feed delivered", detail: "Protein in the ration sets the total nitrogen entering the unit for the day." },
            { label: "Nitrogen released", detail: "The portion not retained as animal tissue appears in the water, chiefly as ammonia across the gills." },
            { label: "Carbon dosed", detail: "An organic carbon source is added in proportion to that nitrogen, raising the carbon-to-nitrogen ratio of the water." },
            { label: "Heterotrophic growth", detail: "Bacteria assimilate ammonia together with the added carbon and multiply, consuming oxygen and producing carbon dioxide as they do so." },
            { label: "Floc formation", detail: "Bacterial biomass aggregates with algae, protozoa and particulates into settleable flocs held in suspension by mixing." },
            { label: "Partial ingestion", detail: "The animals graze on the suspended flocs, returning a share of the nitrogen to production." },
            { label: "Solids removal", detail: "Excess floc is drawn off so that standing solids stay inside the workable band and oxygen demand does not run away." },
          ],
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        { kind: "subheading", value: "Carbon sources" },
        {
          kind: "table",
          caption: "Common supplemental carbon sources and their working characteristics",
          columns: ["Source", "Behaviour in the system", "Practical consideration"],
          rows: [
            ["Molasses", "Rapidly available, produces a fast bacterial response", "Sharp short-term oxygen demand; easy to overdose"],
            ["Cane or beet sugar", "Very rapid, highly soluble, predictable carbon content", "Cost per unit of carbon is usually the highest"],
            ["Wheat or rice flour", "Slower release, part of the carbon arrives as particulate", "Requires pre-mixing or cooking to disperse properly"],
            ["Rice bran", "Slow and partly particulate, contributes to floc structure", "Variable composition between batches; can carry contaminants"],
            ["Tapioca or cassava starch", "Intermediate release rate, forms stable flocs", "Needs gelatinisation to be available to bacteria"],
            ["Glycerol", "Highly available liquid carbon, simple to dose accurately", "Availability and price vary regionally"],
          ],
          basis:
            "A qualitative comparison of release behaviour and handling characteristics rather than a performance ranking. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        { kind: "subheading", value: "Aeration and mixing" },
        {
          kind: "text",
          value:
            "Aeration in a biofloc unit performs two jobs that are usually specified separately in other systems: it transfers oxygen, and it maintains the hydraulic energy that keeps solids in suspension. Sizing for oxygen alone produces a tank with dead corners where floc settles and decomposes anaerobically; sizing for mixing alone can leave the oxygen transfer short at peak load. Both requirements must be met, and the mixing requirement rises as standing solids rise.",
        },
        { kind: "subheading", value: "Alkalinity and carbon dioxide" },
        {
          kind: "text",
          value:
            "Both nitrification and heterotrophic respiration draw down alkalinity and raise dissolved carbon dioxide. In a minimal-exchange system there is no incoming water to replenish buffering, so alkalinity falls steadily over a cycle unless it is replaced deliberately. A falling buffer destabilises pH, which in turn changes the proportion of total ammonia present in its toxic un-ionised form — so alkalinity management is an ammonia safety measure, not merely a chemistry housekeeping task.",
        },
        { kind: "subheading", value: "Solids control" },
        {
          kind: "text",
          value:
            "Because the treatment biomass grows continuously, a biofloc unit accumulates solids indefinitely unless some are removed. Settling cones, side-stream clarifiers and periodic partial draw-off all serve this purpose. The removed solids are a genuine waste stream requiring disposal, which means a system marketed as producing no effluent still produces sludge.",
        },
      ],
    },
    {
      id: "practical-knowledge",
      heading: "Practical knowledge",
      blocks: [
        {
          kind: "text",
          value:
            "A biofloc unit is not stocked into finished water. The microbial community has to be established first, and doing that with animals already present means the animals experience the ammonia and nitrite peaks that accompany community development.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Fill and stabilise the water, adjusting salinity, alkalinity and temperature to the target before any biology is introduced.",
            "Begin aeration and mixing, and confirm there are no zones where solids will settle out of suspension.",
            "Prime the community with a nitrogen source and a carbon source, with or without an inoculum from a running unit, and let it develop.",
            "Track ammonia and nitrite through the development period and wait for nitrite to peak and then decline before considering the water ready.",
            "Stock lightly and observe animal behaviour and gill condition before increasing towards the intended density.",
            "Recalculate carbon dosing whenever the feed rate changes, since the dose is derived from the feed and not from the tank volume.",
            "Measure settleable solids on a fixed daily schedule and begin removal before the reading reaches the top of the working band, not after.",
            "Replenish alkalinity on a routine basis, tracking the trend rather than reacting to a single low reading.",
          ],
        },
        {
          kind: "callout",
          tone: "established",
          title: "The community is the asset",
          value:
            "Restocking animals after a loss takes weeks. Rebuilding a mature microbial community that handles the full nitrogen load takes comparably long, and until it is rebuilt the unit cannot carry its design biomass. Protecting the community is therefore protecting the production schedule.",
        },
      ],
    },
    {
      id: "considerations",
      heading: "Biological and engineering considerations",
      blocks: [
        {
          kind: "text",
          value:
            "The defining engineering property of a biofloc system is its short failure horizon. Standing oxygen demand includes not only the animals but a large and continuously respiring microbial biomass, so an aeration failure depletes oxygen far faster than in a pond holding the same animals. At the same moment mixing stops, solids begin to settle and the settled layer starts consuming oxygen anaerobically and releasing reduced compounds. The two failures compound.",
        },
        {
          kind: "text",
          value:
            "This makes power redundancy a design requirement rather than an upgrade. A standby generator that starts automatically, an emergency aeration path independent of the main blowers, and an alarm that reaches a person who can act are not optional accessories in a biofloc unit; they are the difference between an interruption and a total loss.",
        },
        {
          kind: "text",
          value:
            "Biologically, the constraint is the animal's tolerance of suspended solids. Species that filter or graze naturally, and that have robust gill structures, cope with turbidity that would abrade or clog the gills of a clear-water species. This is why the method has concentrated on a small group of animals rather than spreading across the sector.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Nutritional contribution is a planning assumption",
          value:
            "The share of the animal's nutrition that comes from grazing floc varies with species, animal size, floc composition and feeding regime. Treating it as a fixed reduction in feed cost when budgeting is an assumption, and one that should be tested against the farm's own feed and growth records before it is relied upon.",
        },
      ],
    },
    {
      id: "management-principles",
      heading: "Management principles",
      blocks: [
        {
          kind: "list",
          items: [
            "Treat carbon dosing as a calculation from the day's feed, recorded alongside it, rather than as a habitual fixed addition.",
            "Watch the trend in settleable solids, ammonia, nitrite and alkalinity together. Each is uninformative alone and diagnostic in combination.",
            "Never allow mixing to stop, even briefly, while animals are in the unit. Plan maintenance so that a redundant path is running before the primary one is shut down.",
            "Remove solids gradually and continuously rather than in large infrequent events, so the community and the animals are not shocked.",
            "Replace alkalinity proactively on a schedule, because in a minimal-exchange system nothing else will.",
            "Keep a source of mature floc available from another running unit, so a crash can be reseeded rather than restarted from nothing.",
            "Record the carbon source and batch used, since composition variation between batches is a common and otherwise invisible cause of inconsistent response.",
          ],
        },
      ],
    },
    {
      id: "common-problems",
      heading: "Common problems",
      blocks: [
        {
          kind: "table",
          caption: "Recurring biofloc failures and their usual underlying causes",
          columns: ["Symptom", "Usual underlying cause"],
          rows: [
            ["Ammonia rises despite routine carbon dosing", "Feed rate increased without recalculating the dose, or the carbon source is not bioavailable as supplied"],
            ["Nitrite climbs and stays elevated", "Community in transition between heterotrophic and nitrifying dominance, often after a carbon reduction"],
            ["Water becomes excessively thick and animals stop feeding", "Solids removal deferred; floc oxygen demand now competing directly with the animals"],
            ["pH drifts downward across the cycle", "Alkalinity consumed by nitrification and respiration with no exchange to replenish it"],
            ["Sudden mortality shortly after a power interruption", "Combined oxygen crash and anaerobic release from freshly settled solids"],
            ["Foam accumulates and floc will not settle in the test cone", "Community imbalance, often following over-dosing of a rapidly available carbon source"],
            ["Gill irritation and reduced growth without a clear pathogen", "Chronic exposure to abrasive suspended solids above the animal's tolerance"],
          ],
          basis:
            "Patterns commonly described in aquaculture extension literature and operator experience, offered as diagnostic starting points rather than conclusions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "best-practices",
      heading: "Best-practice guidance",
      blocks: [
        {
          kind: "list",
          items: [
            "Establish and mature the microbial community before stocking, and prove it against a simulated nitrogen load rather than assuming readiness.",
            "Specify aeration for the combined oxygen demand of animals and microbial biomass at peak feeding, and separately confirm the mixing energy keeps every part of the unit in suspension.",
            "Install automatic standby power with an independent emergency aeration path, and test the changeover on a schedule with the result written down.",
            "Keep a settling cone at the tank side and read it at the same time each day, so the number is comparable across days.",
            "Log feed, carbon dose, solids, ammonia, nitrite, alkalinity and pH in a single record, since biofloc diagnosis depends on reading them against one another.",
            "Define in advance the solids reading, ammonia reading and alkalinity reading that each trigger a specific action, so night decisions are lookups.",
            "Plan and cost sludge disposal at design time; minimal water exchange does not mean minimal waste.",
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
            "The interesting technical question in a mature biofloc system is not how to remove nitrogen but which community to select for. A heterotrophically dominated system responds quickly and buffers ammonia spikes well, but it produces a great deal of biomass per unit of nitrogen handled, which means a large solids burden and a high oxygen demand. A system allowed to shift towards nitrifying dominance produces far less sludge and consumes less oxygen per unit of nitrogen, but it responds slowly to load changes and accumulates nitrate.",
        },
        {
          kind: "text",
          value:
            "Operators who understand this stop treating carbon dosing as a fixed protocol and start using it as a throttle: heavier dosing early in a cycle when load is changing rapidly and the community is young, tapering as the nitrifying population establishes and the system can absorb steadier loading with less intervention.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Floc composition and animal health",
          value:
            "Work continues on how the microbial composition of the floc — rather than simply its quantity — influences animal immune response, digestive function and resistance to opportunistic pathogens. The relationship is credible and actively investigated, but it is not yet at the stage where an operator can specify a target community composition and manage towards it.",
        },
        {
          kind: "text",
          value:
            "A further open area is the interaction between biofloc and light. Units run outdoors under strong sunlight develop a substantial algal component, which contributes oxygen during the day and consumes it at night, superimposing a diurnal swing on an already tight oxygen budget. Covered units lose that contribution but gain predictability. Which trade suits a given site is a design decision that deserves explicit thought rather than being settled by whether a roof happened to be affordable.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Biofloc turns the culture water into the treatment process by cultivating a microbial community that assimilates waste nitrogen in place.",
    "Carbon dosing is calculated from the day's feed and its protein content, so it must be recalculated whenever the feeding rate changes.",
    "The system runs both heterotrophic assimilation and autotrophic nitrification, and knowing which currently dominates explains the water chemistry.",
    "Standing solids are the principal control variable: too little gives insufficient treatment capacity, too much makes the floc itself the oxygen consumer.",
    "Alkalinity falls continuously in a minimal-exchange system and must be replaced on a schedule rather than in response to a low reading.",
    "The failure horizon is short because animals and microbial biomass consume oxygen together, which makes automatic standby power a design requirement.",
  ],
  related: ["ras", "shrimp", "water-quality", "systems"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Technical material on intensive and minimal-exchange aquaculture systems and their management.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center",
      description: "Extension publications on intensive culture systems, water chemistry and aeration practice.",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute research and extension material on biofloc culture under Indian conditions.",
    },
  ],
};
