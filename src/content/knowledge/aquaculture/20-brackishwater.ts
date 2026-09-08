import type { KnowledgeArea } from "../types";

export const brackishwater: KnowledgeArea = {
  number: "20",
  slug: "brackishwater",
  title: "Brackishwater Aquaculture",
  navSummary: "Farming in the zone between river and sea, where salinity moves and the site is the design.",
  summary:
    "Brackishwater aquaculture occupies estuaries, tidal creeks and coastal lowlands where fresh and marine water mix. The defining feature is not a salinity value but salinity variation: the same pond may be nearly fresh after monsoon rain and near-marine in late summer, and every decision about species, water intake and pond engineering follows from how far that swing goes and how fast.",
  difficulty: "intermediate",
  topics: ["water", "production", "environment"],
  tags: ["estuarine culture", "salinity management", "tidal exchange", "coastal ponds", "euryhaline species"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-23",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Brackishwater farms sit where a river meets the sea, so the water is saltier than a pond and fresher than the ocean, and it changes with the tide and the season. Farmers there choose animals that tolerate a moving salinity, and build ponds that can take water in and let it out on the tide.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Brackishwater is the transition between river and sea. In India it means the estuarine belts of the east and west coasts, the tidal creeks of Gujarat and Maharashtra, the deltaic tracts of Andhra Pradesh, Odisha and West Bengal, and the backwater systems of Kerala. These are the areas where coastal aquaculture is concentrated, because tidal energy delivers and removes water without pumping, and because the land is often unsuited to conventional agriculture already.",
        },
        {
          kind: "text",
          value:
            "The sector is dominated by shrimp, but it is not only shrimp. Milkfish, mullets, pearlspot, seabass and mud crab are all farmed in the same water, and traditional systems in the Sundarbans and the Kerala pokkali fields have combined rice, fish and shrimp in the same fields for generations, alternating with the salinity of the season rather than fighting it.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Salinity is a range, not a number",
          value:
            "A brackishwater site is characterised by the shape of its annual salinity curve — the highest and lowest values, how long each persists, and how abruptly the transitions occur. Two sites with the same annual mean can require entirely different species and pond designs.",
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
            "Brackishwater aquaculture converts land with little agricultural value into high-value protein production, and it does so on coastlines where alternative livelihoods are limited. In India it is a significant source of export earnings and coastal employment, and the majority of farmed shrimp originates from these tracts.",
        },
        {
          kind: "text",
          value:
            "It also carries the sector's sharpest environmental questions. Coastal farms sit inside mangrove and wetland systems, draw from and discharge into shared tidal water, and can influence groundwater salinity where inland pumping of saline water occurs. A brackishwater farm is never hydraulically isolated from its neighbours; a disease or an effluent problem at one farm arrives at the next on the incoming tide. That shared-water reality is what makes regulation, zoning and cluster-level coordination more important here than in almost any other production setting.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Euryhalinity" },
        {
          kind: "text",
          value:
            "Euryhaline species tolerate a wide salinity range because they can osmoregulate in both directions — excreting salt in water saltier than their body fluids, and retaining it in water that is fresher. This is metabolically expensive work, and the energetic cost is lowest near the isosmotic point where internal and external osmotic pressure are close. Growth is therefore usually best somewhere in the middle of a species' tolerance range rather than at its edges, even though survival extends much further.",
        },
        { kind: "subheading", value: "Tidal amplitude and the water budget" },
        {
          kind: "text",
          value:
            "The tidal range at a site sets whether ponds can be filled and drained by gravity. Where amplitude is generous, intake at high tide and discharge at low tide costs nothing but a sluice gate and attention to timing. Where it is small, pumping is unavoidable, and pumping is one of the largest recurring energy costs a coastal farm carries.",
        },
        { kind: "subheading", value: "Acid sulphate soils" },
        {
          kind: "text",
          value:
            "Many coastal lowlands contain pyritic sediments laid down under mangrove. Left submerged they are inert; exposed to air during pond construction or drying, the pyrite oxidises and generates sulphuric acid, which lowers pH sharply on the next flooding and mobilises aluminium and iron. Recognising acid sulphate soil at survey stage is far cheaper than treating its consequences for the life of the farm.",
        },
        { kind: "subheading", value: "Seasonality" },
        {
          kind: "text",
          value:
            "The brackishwater year has a structure: a pre-monsoon period of rising salinity and temperature, a monsoon period of dilution and turbidity, and a post-monsoon recovery. Crop calendars are built around this, and the species stocked in one window is frequently not the species stocked in the next.",
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
            "Two calculations recur constantly on a coastal farm: what salinity results from mixing two water sources, and how much water a tidal exchange actually moves.",
        },
        {
          kind: "formula",
          name: "Mixing salinity",
          expression: "Sm = (V1 x S1 + V2 x S2) / (V1 + V2)",
          terms: [
            { symbol: "Sm", meaning: "Resulting salinity of the mixed water", unit: "ppt" },
            { symbol: "V1", meaning: "Volume of the first water source", unit: "m3" },
            { symbol: "S1", meaning: "Salinity of the first source", unit: "ppt" },
            { symbol: "V2", meaning: "Volume of the second water source", unit: "m3" },
            { symbol: "S2", meaning: "Salinity of the second source", unit: "ppt" },
          ],
          example:
            "Consider a hypothetical pond holding 4,000 m3 of water at 22 ppt, into which 1,000 m3 of a freshwater source at 2 ppt is introduced. The mixed salinity is (4,000 x 22 + 1,000 x 2) / 5,000, which is 18 ppt. The same arithmetic run in reverse tells the operator how much dilution water a planned salinity reduction would require, and whether the site can supply it.",
          limitations:
            "The expression assumes complete mixing and ignores evaporation, rainfall and seepage during the exchange, all of which act on the result within hours in shallow ponds. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Gravity exchange volume",
          expression: "Ve = A x h",
          terms: [
            { symbol: "Ve", meaning: "Water volume exchangeable by gravity in one tidal cycle", unit: "m3" },
            { symbol: "A", meaning: "Pond water surface area", unit: "m2" },
            { symbol: "h", meaning: "Usable head between high tide level and pond water level", unit: "m" },
          ],
          example:
            "Consider a hypothetical pond of 10,000 m2 at a site where the usable head at spring tide is 0.3 m. Gravity exchange delivers about 3,000 m3 per cycle, which is the ceiling on exchange for that pond unless pumps are added. If the crop plan assumes a larger exchange, the plan is assuming a pump the budget has not bought.",
          limitations:
            "Usable head varies through the spring-neap cycle and with river discharge, and sluice geometry, silt accumulation and screen fouling all reduce the volume actually achieved. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "Salinity itself is measured in practice as conductivity or with a refractometer, both of which are temperature-sensitive. An instrument that has not been checked against a standard is producing a number that looks like data, and salinity readings drive stocking decisions that cannot be undone.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Brackishwater production approaches and their structural characteristics",
          columns: ["Approach", "Typical setting", "What it demands", "What it trades away"],
          rows: [
            [
              "Traditional tide-fed pond",
              "Estuarine and deltaic tracts, large shallow impoundments",
              "Sluice management and tidal timing",
              "Low yield per hectare, little control over what enters with the tide",
            ],
            [
              "Improved extensive pond",
              "Coastal lowland with reliable tidal access",
              "Stocking of selected seed, supplementary feed, some aeration",
              "Still weather-exposed, limited disease control",
            ],
            [
              "Semi-intensive shrimp pond",
              "Engineered coastal farms with reservoirs",
              "Formulated feed, aeration, water treatment before intake",
              "Capital cost, energy dependence, biosecurity discipline",
            ],
            [
              "Pen and cage in creeks",
              "Sheltered tidal creeks and backwaters",
              "Net maintenance, site tenure, fouling control",
              "No control of surrounding water quality at all",
            ],
            [
              "Integrated rice and fish fields",
              "Seasonally saline paddy such as pokkali and bheri systems",
              "Alignment of crop calendar with the salinity year",
              "Neither crop achieves its individual optimum",
            ],
            [
              "Polyculture of finfish and crab",
              "Estuarine ponds with mixed salinity",
              "Species selection by feeding niche and size grading",
              "Complex harvest and marketing of several products",
            ],
          ],
          basis:
            "A qualitative comparison of the structural characteristics of each approach as practised in Indian coastal aquaculture, not a yield ranking. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "The species commonly cultured in these systems fall into a small number of functional groups. Penaeid shrimp are the economic centre. Milkfish and mullets are efficient users of natural pond productivity and tolerate a very wide salinity range. Pearlspot and seabass occupy the finfish market, the first as a hardy omnivore and the second as a carnivore requiring a feed strategy of its own. Mud crab is farmed both as grow-out from small crablets and as short-cycle fattening of soft-shelled animals.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Polyculture as risk management",
          value:
            "Stocking complementary species that feed at different levels of the pond is widely practised in estuarine systems less to maximise yield than to ensure that a salinity excursion or a disease event does not take the entire crop. A monoculture in a variable environment concentrates risk in one tolerance curve.",
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
            "Site selection dominates outcomes in brackishwater aquaculture more than in any other setting, because the operator cannot substantially change the water that arrives. Selection is a survey exercise carried out across a full year, not a single visit.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Record salinity, temperature and turbidity at the intake point through a complete annual cycle, including the monsoon peak and the driest month.",
            "Establish the tidal datum and the amplitude range, and confirm the elevation at which ponds can be gravity-filled and fully drained.",
            "Test the soil profile to below the intended pond bottom for pyrite content, texture and permeability before any earthwork begins.",
            "Identify what lies upstream — sewage outfalls, industrial discharge, agricultural drainage and other farms' effluent — because all of it arrives on the flood tide.",
            "Confirm the regulatory position of the land under coastal zone rules and the relevant aquaculture authority before committing capital.",
            "Design the water path so that intake and discharge are separated, and so that incoming water can be held and settled before it reaches stock.",
            "Plan the crop calendar around the salinity year, choosing species for the window rather than choosing a window for the species.",
          ],
        },
        {
          kind: "text",
          value:
            "Seed acclimation deserves particular attention. Hatchery seed is produced at a salinity that may differ substantially from the receiving pond, and a mismatch imposes an osmotic shock at exactly the moment the animal is already stressed from transport. Acclimation is a gradual, monitored transition rather than a formality, and its duration should be set by the size of the difference to be crossed.",
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
            "The biological consideration is osmotic work. An animal held near the edge of its salinity tolerance spends energy on ion regulation that would otherwise go to growth, and it does so continuously. The visible result is not mortality but a quietly poor feed conversion ratio and a cycle that runs long, which is easy to blame on feed quality and hard to attribute correctly without salinity records.",
        },
        {
          kind: "text",
          value:
            "Salinity also alters water chemistry in ways that matter operationally. Oxygen solubility falls as salinity rises, so the same aeration plant supports less biomass in saltier water at the same temperature. Ammonia speciation depends on pH and temperature, and brackishwater ponds with strong algal blooms swing in pH across the day. Alkalinity and hardness in estuarine water vary with the freshwater contribution, and low-alkalinity periods reduce the pond's ability to buffer that swing.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Rain is a salinity event",
          value:
            "Heavy rainfall on a shallow pond forms a fresher surface layer that can stratify rather than mix, leaving stock in a salinity and oxygen gradient. The engineering response — surface mixing and controlled removal of the diluted layer — has to be available before the rain arrives, not procured after it.",
        },
        {
          kind: "text",
          value:
            "On the engineering side, coastal structures live in a corrosive environment. Sluice gates, pump components, aerator shafts and electrical enclosures all degrade faster in salt spray than their freshwater equivalents, and a maintenance schedule copied from an inland farm will under-service them. Embankment design must also account for wave action, monsoon overtopping and the possibility of cyclonic surge.",
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
            "Log salinity, temperature, pH and water depth daily at a fixed time and a fixed depth, so that the record describes a trend rather than an assortment of conditions.",
            "Treat incoming tidal water as untreated: screen it, settle it and, where the risk justifies it, hold it in a reservoir before it reaches stock.",
            "Match the crop calendar to the salinity year, and accept a fallow or a species change rather than stocking into a window the species cannot use.",
            "Maintain pond depth against evaporation in the dry season, because a shallowing pond concentrates salinity and amplifies daily temperature swing at the same time.",
            "Coordinate with neighbouring farms on intake and discharge timing where water is shared, since unilateral biosecurity in a common creek is largely symbolic.",
            "Keep the drainage path complete and functional, so a pond can be emptied fully for drying and disinfection between crops.",
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
          caption: "Recurring brackishwater failures and their usual underlying causes",
          columns: ["Symptom", "Usual underlying cause"],
          rows: [
            [
              "Persistent low pH after filling a new pond",
              "Acid sulphate soil oxidised during construction or drying, releasing acidity on reflooding",
            ],
            [
              "Growth stalls in the dry season despite good feeding",
              "Salinity and temperature both rising as the pond shallows, raising osmotic and metabolic cost",
            ],
            [
              "Mass mortality shortly after heavy monsoon rain",
              "Sudden dilution of the surface layer combined with stratification and an oxygen deficit below it",
            ],
            [
              "Poor survival in the first week after stocking",
              "Salinity mismatch between hatchery and pond, with acclimation carried out too quickly",
            ],
            [
              "Disease appearing across several farms at once",
              "A shared tidal water body carrying pathogens between farms with uncoordinated intake and discharge",
            ],
            [
              "Pond water fails to drain completely at low tide",
              "Pond bottom set above the drainage datum, or the outlet channel silted since construction",
            ],
          ],
          basis:
            "Patterns commonly described in coastal aquaculture extension material, offered as diagnostic starting points rather than conclusions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Survey the site across a full annual cycle before designing anything, and design to the extremes the survey found rather than to its averages.",
            "Build a reservoir or settlement pond into the water path from the outset; retrofitting one into a completed farm layout is rarely possible.",
            "Separate intake and discharge points so that a farm does not re-use its own effluent on the next tide.",
            "Acclimate seed against the measured salinity of the receiving pond, not the salinity the pond had last week.",
            "Specify corrosion-resistant materials and an accelerated inspection interval for all coastal mechanical and electrical equipment.",
            "Keep a written water-exchange record, including what was taken in and when, so that a later disease investigation has a timeline to work from.",
            "Dry and prepare pond bottoms fully between crops where soil chemistry allows it, and where acid sulphate soil is present, manage drying deliberately rather than by default.",
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
            "The frontier in brackishwater aquaculture is reducing dependence on the tide without losing its economics. Water exchange was historically the primary tool for managing accumulated waste, and it is also the primary vector for disease entry and the primary route by which nutrients leave the farm. Systems that treat water internally — settlement and biological polishing within the farm boundary, partial recirculation between reservoir and production ponds, and biofloc approaches adapted to saline conditions — reduce exchange substantially, at the cost of aeration energy and closer operational attention.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Integrated multi-trophic approaches in coastal water",
          value:
            "Combining fed species with extractive species such as bivalves and seaweed in the same water path is an active area of investigation for coastal systems, on the reasoning that the nutrients leaving a fed crop are an input to another. The engineering, siting and market questions that determine whether it is practicable at farm scale are not yet settled.",
        },
        {
          kind: "text",
          value:
            "The second advanced question is spatial rather than technical. Because coastal water is shared, the meaningful unit of management is often the creek or the cluster rather than the individual farm. Coordinated stocking calendars, shared intake and discharge scheduling, and common fallow periods across a cluster address risks that no single farm can address alone. Where this coordination exists, individual biosecurity investment becomes far more effective; where it does not, a well-run farm remains hostage to its neighbours.",
        },
        {
          kind: "text",
          value:
            "Finally, climate exposure is a design variable now rather than a background condition. Sea level, storm surge frequency, monsoon variability and salinity intrusion further inland all change the assumptions behind embankment height, drainage datum and the shape of the salinity year. A farm designed to last two decades should be designed against the range those variables may occupy over two decades, not the range recorded in the year of the survey.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Brackishwater sites are defined by the shape of their annual salinity curve, not by a single salinity value.",
    "Tidal amplitude determines whether water exchange is a gravity operation or a pumping cost, and that distinction shapes the entire farm economy.",
    "Acid sulphate soils must be identified at survey stage, because their consequences persist for the working life of the pond.",
    "Osmotic work at the edge of a species' tolerance shows up as poor feed conversion long before it shows up as mortality.",
    "Rainfall and evaporation are salinity events in shallow ponds, and both need a planned engineering response.",
    "Shared tidal water makes biosecurity a cluster-level problem that no single farm can solve on its own.",
  ],
  related: ["shrimp", "pond", "water-quality", "marine"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Programme material on coastal and brackishwater aquaculture systems, species and sector development.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute publications and extension material on brackishwater culture systems and coastal species in India.",
    },
    {
      organisation: "Central Marine Fisheries Research Institute",
      description: "Research and advisory output on coastal and estuarine resources, mariculture and species biology.",
    },
  ],
};
