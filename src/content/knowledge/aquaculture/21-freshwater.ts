import type { KnowledgeArea } from "../types";

export const freshwater: KnowledgeArea = {
  number: "21",
  slug: "freshwater",
  title: "Freshwater Aquaculture",
  navSummary: "Carps, catfish and tilapia in inland ponds — the largest and most accessible part of the sector.",
  summary:
    "Freshwater aquaculture is the production of fish in inland water bodies of negligible salinity, and it is by a wide margin the largest part of Indian aquaculture by volume. Its characteristic system is the earthen pond stocked with complementary species, managed so that the pond's own biological productivity does much of the feeding, and its characteristic skill is reading the water rather than operating machinery.",
  difficulty: "beginner",
  topics: ["water", "production", "fish"],
  tags: ["carp polyculture", "earthen ponds", "pond fertilisation", "inland fisheries", "composite culture"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-25",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Freshwater farming means keeping fish in inland ponds, tanks or reservoirs where the water is not salty. Most Indian farms stock several kinds of carp together so that each eats a different food in the pond, and fertilise the water so that the pond grows some of that food itself.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Freshwater aquaculture covers everything from a village pond of a few hundred square metres to a commercial farm of many hectares, and from reservoir ranching that is closer to fisheries management than to farming, to intensive tank culture of air-breathing catfish. What they share is water with essentially no salt in it, which means the species available, the chemistry that must be managed and the sources that can be drawn on are all quite different from the coastal picture.",
        },
        {
          kind: "text",
          value:
            "In India the sector is built on the Indian major carps — catla, rohu and mrigal — usually stocked together and often with the exotic carps: silver carp, grass carp and common carp. Tilapia, pangasius and the indigenous catfishes such as magur and singhi form a growing second tier, and the freshwater prawn Macrobrachium rosenbergii is farmed both alone and alongside carp.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The pond is a production system, not a container",
          value:
            "An earthen pond generates food. Phytoplankton, zooplankton, benthic invertebrates and detritus all contribute to fish nutrition, and in a well-managed extensive or semi-intensive pond a meaningful share of the harvest was never bought as feed. Managing that natural productivity is the core skill of freshwater farming.",
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
            "Freshwater production supplies the domestic protein market rather than the export market, which makes it economically different from coastal shrimp farming in almost every respect. Prices are lower and steadier, the buyer is usually local, and the capital required to start is small enough that the sector is genuinely accessible to smallholders. Village ponds, irrigation tanks and seasonal water bodies that would otherwise produce nothing can be brought into production with modest investment.",
        },
        {
          kind: "text",
          value:
            "It matters technically because it is where the largest gap sits between typical yield and achievable yield. Many inland ponds are stocked and then largely left alone, and the difference between that and a pond where stocking ratio, fertilisation, supplementary feeding and water depth are actively managed is substantial. The interventions involved are not capital-intensive; they are knowledge-intensive, which is precisely the kind of gap that extension work and better measurement can close.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Polyculture and feeding niches" },
        {
          kind: "text",
          value:
            "Composite fish culture stocks species that occupy different feeding niches so that the whole pond volume is used. Catla feeds on zooplankton in the surface layer, rohu on plankton and detritus in the column, mrigal and common carp on the bottom, silver carp on phytoplankton and grass carp on macrophytes. The ratio between them is the primary design decision, and it should follow the productivity of the specific pond rather than a textbook proportion.",
        },
        { kind: "subheading", value: "Pond fertility" },
        {
          kind: "text",
          value:
            "Fertilisation, organic or inorganic, is an attempt to run a controlled algal bloom. Nutrients drive phytoplankton, phytoplankton support zooplankton, and both feed fish directly or indirectly. The pond is being farmed as much as the fish are. Too little fertility and the pond produces nothing beyond the feed added; too much and the bloom crashes, taking the dissolved oxygen with it.",
        },
        { kind: "subheading", value: "The daily oxygen cycle" },
        {
          kind: "text",
          value:
            "A pond with an algal bloom produces oxygen in daylight and consumes it continuously. Dissolved oxygen therefore peaks in the late afternoon and reaches its minimum just before dawn, and the amplitude of that swing increases with bloom density. Almost every unexplained overnight mortality in a fertilised pond is a pre-dawn oxygen event.",
        },
        { kind: "subheading", value: "Water source and seasonality" },
        {
          kind: "text",
          value:
            "Freshwater farms draw from rain-fed ponds, canals, rivers, groundwater or a combination. Each has a different reliability profile and a different chemistry. Groundwater is chemically stable but frequently arrives supersaturated with nitrogen, low in oxygen, and sometimes carrying iron that must be oxidised out before use.",
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
            "Pond management rests on a small number of quantities that can be computed from records a farm already keeps.",
        },
        {
          kind: "formula",
          name: "Pond yield per unit area",
          expression: "Y = (H - St) / A",
          terms: [
            { symbol: "Y", meaning: "Net yield per unit area over the crop", unit: "kg/ha" },
            { symbol: "H", meaning: "Total biomass harvested", unit: "kg" },
            { symbol: "St", meaning: "Total biomass stocked", unit: "kg" },
            { symbol: "A", meaning: "Pond water surface area", unit: "ha" },
          ],
          example:
            "Consider a hypothetical one-hectare pond stocked with 120 kg of fingerlings and harvested at 3,200 kg. Net yield is 3,080 kg/ha for that crop, and comparing this figure across crops on the same pond reveals whether a change in stocking ratio or fertilisation actually did anything.",
          limitations:
            "Net yield conflates stocking density, survival, growth rate and crop duration into one number, so it compares crops but does not diagnose them. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Daily feed allowance",
          expression: "Fd = B x r",
          terms: [
            { symbol: "Fd", meaning: "Feed to be delivered that day", unit: "kg" },
            { symbol: "B", meaning: "Estimated standing biomass in the pond", unit: "kg" },
            { symbol: "r", meaning: "Feeding rate as a fraction of body weight per day", unit: "fraction" },
          ],
          example:
            "Consider a hypothetical pond estimated to hold 900 kg of fish, fed at a rate of 0.03 of body weight per day. The allowance is 27 kg. The critical term is B: if the biomass estimate has drifted because survival was overestimated, the pond is being overfed every single day and the excess is going straight into the sediment.",
          limitations:
            "The feeding rate declines as fish grow and varies with temperature, and natural pond productivity supplies nutrition this expression does not account for. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "Secchi disc transparency is the field measurement that connects these. It is a crude proxy for bloom density, it costs nothing, and read daily at a fixed time it tracks the trajectory of pond fertility well enough to guide fertilisation and to warn of a bloom heading towards a crash.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Principal freshwater species groups in Indian aquaculture and their characteristics",
          columns: ["Group", "Feeding niche", "Notable characteristic", "Main constraint"],
          rows: [
            [
              "Indian major carps",
              "Surface, column and bottom, depending on species",
              "Well adapted to Indian pond conditions and established markets",
              "Slower growth than several exotics; seed quality varies widely",
            ],
            [
              "Exotic carps",
              "Phytoplankton, macrophytes and pond bottom",
              "Complete the niche coverage of a polyculture",
              "Grass carp requires a vegetation supply; breeding control matters",
            ],
            [
              "Tilapia",
              "Omnivorous, uses a wide range of natural and formulated food",
              "Robust, tolerant of poor water, fast growing",
              "Uncontrolled breeding in ponds; regulated species status in India",
            ],
            [
              "Pangasius",
              "Omnivorous, feeds actively on formulated diets",
              "High yield per unit area, tolerant of low oxygen",
              "Dependent on formulated feed and on a market that accepts it",
            ],
            [
              "Air-breathing catfish",
              "Carnivorous and detrital",
              "Can be held at high density because of aerial respiration",
              "Cannibalism at early stages; specialised seed supply",
            ],
            [
              "Freshwater prawn",
              "Benthic omnivore",
              "Fits alongside carp without competing directly",
              "Territorial behaviour limits density; longer cycle",
            ],
          ],
          basis:
            "A qualitative comparison of species characteristics as described in Indian freshwater aquaculture extension material, not a performance ranking. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "Beyond pond culture, freshwater production includes cage culture in reservoirs, pen culture in shallow water bodies, running-water culture where a stream can be diverted, and integrated systems where fish are combined with paddy, ducks or livestock so that one enterprise's waste becomes the other's fertiliser. Each of these has a section of its own in this knowledge base; the point of listing them here is that they are all attempts to obtain more production from the same fresh water.",
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
            "Preparing a pond before stocking determines much of what follows, and it is the stage most often rushed. The sequence below is the conventional order, and each step exists because skipping it creates a problem that is expensive to fix once fish are present.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Drain and dry the pond bottom until it cracks, which oxidises accumulated organic matter and interrupts the life cycle of pathogens and pests.",
            "Remove excess black sediment, and repair dykes, inlet screens and the outlet structure while the pond is empty.",
            "Test the bottom soil for pH and organic content, and apply lime where the soil is acidic, allowing time for it to react before filling.",
            "Eradicate predatory and weed fish, and screen the inlet so that they cannot simply return with the filling water.",
            "Fill through a screen, and fertilise to establish a plankton bloom before stocking rather than after it.",
            "Stock advanced fingerlings rather than fry where predation and competition are likely, and stock in the cool part of the day.",
            "Begin supplementary feeding once the fish have settled, adjusting to observed intake rather than to a table.",
          ],
        },
        {
          kind: "text",
          value:
            "During the crop the routine is short but must be daily: observe the fish at feeding, read transparency, note water colour and smell, check the depth, and inspect the dyke and screens. Fish congregating at the surface at dawn is the single most urgent observation on a freshwater farm, and the response — emergency aeration or water exchange — needs to be already available rather than arranged at that moment.",
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
            "The biological consideration is that a pond is an ecosystem with its own dynamics, and the farmer influences it rather than controls it. A fertilisation decision made today produces a bloom response over days and an oxygen consequence over weeks. Management in this setting is anticipatory: the operator acts on the trend, because by the time the pond is visibly in trouble the corrective options have narrowed to emergency ones.",
        },
        {
          kind: "text",
          value:
            "Alkalinity and hardness deserve specific attention in freshwater. Soft, low-alkalinity water has little buffering capacity, so photosynthesis drives pH up steeply during the day and respiration drives it down at night. That swing affects ammonia toxicity, which rises with pH, and it stresses fish independently. Liming raises alkalinity and reduces the amplitude of the swing, which is why it is a routine practice rather than a corrective one.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Depth is a management tool",
          value:
            "Pond depth buffers temperature, limits rooted weed growth by reducing light at the bottom, and provides a thermal refuge in hot weather. Ponds that are allowed to shallow through the dry season lose all three benefits at once, at the point in the year when they are most needed.",
        },
        {
          kind: "text",
          value:
            "Engineering in freshwater aquaculture is mostly earthwork and hydraulics: dyke slope and compaction to resist seepage and erosion, an inlet that can be screened and measured, an outlet that can drain the pond completely, and a layout that allows a pond to be emptied without flooding its neighbour. Where aeration is added, its purpose is usually to cover the pre-dawn minimum and to break stratification, not to raise average oxygen through the day.",
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
            "Sample and weigh fish on a fixed schedule so that the biomass estimate driving feed and oxygen decisions stays connected to reality.",
            "Read water transparency and colour daily, at the same time and the same place, and record it even when nothing appears to be changing.",
            "Fertilise in small, frequent applications rather than large infrequent ones, so that the bloom is steered rather than shocked.",
            "Feed at fixed points in the pond and observe consumption there, since a feeding response is the cheapest health indicator available.",
            "Watch the pond at dawn, because that is when the oxygen minimum and the first sign of trouble both occur.",
            "Keep species ratios deliberate and grade at harvest, because an unplanned mix of sizes sells badly regardless of total yield.",
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
          caption: "Frequent freshwater pond problems and their usual underlying causes",
          columns: ["Symptom", "Usual underlying cause"],
          rows: [
            [
              "Fish gulping at the surface before dawn",
              "Nightly oxygen depletion from a dense bloom, high organic load or thermal stratification",
            ],
            [
              "Water turns clear and brown after being green",
              "Bloom crash, with the decomposing algae now consuming oxygen instead of producing it",
            ],
            [
              "Dense rooted weed across the pond bottom",
              "Water too shallow and too transparent, allowing light to reach the sediment",
            ],
            [
              "Harvest dominated by one species out of a polyculture",
              "Stocking ratio not matched to the pond's actual productivity, or differential survival after stocking",
            ],
            [
              "Poor growth despite adequate feed being delivered",
              "Overestimated biomass leading to real under-feeding, or a temperature or pH regime outside the comfortable range",
            ],
            [
              "Unwanted small fish dominating the catch",
              "Predatory and weed fish entering through an unscreened inlet, or uncontrolled breeding of a stocked species",
            ],
          ],
          basis:
            "Patterns commonly reported in freshwater aquaculture extension literature, offered as diagnostic starting points rather than conclusions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Prepare the pond completely between crops, including drying, liming and structural repair, rather than refilling and restocking straight away.",
            "Source seed from a hatchery that can state the broodstock origin, and stock a size large enough to survive the pond it is entering.",
            "Establish the plankton bloom before stocking so that fry and fingerlings find food on arrival.",
            "Screen every inlet, and treat the screen as an item requiring inspection rather than an item installed once.",
            "Keep a single written record of stocking, feed, sampling weights, transparency, mortality and water chemistry for each pond.",
            "Provide an emergency aeration or exchange capability sized for the worst night of the crop, not the average one.",
            "Harvest to a market specification, grading at harvest rather than sorting after the fish have already been handled twice.",
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
            "Intensifying a freshwater pond means progressively replacing natural productivity with purchased feed and mechanical support, and the interesting question is where on that path a given farm should sit. Each step up adds yield and adds a dependency: aeration adds an electricity dependency and a failure mode with a short time constant; complete formulated feeding adds a working-capital requirement and makes feed price the dominant cost line. The correct intensity is the one where the marginal yield still exceeds the marginal cost and the marginal risk, and that point differs between a smallholder pond and a commercial farm even on identical water.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Sediment as a stored liability",
          value:
            "Uneaten feed and faeces accumulate in the pond bottom across successive crops. Design and management can reasonably assume that this store consumes oxygen, releases ammonia when disturbed and reduces effective depth, and that the cost of removing it between crops is lower than the cost of the water quality problems it eventually causes.",
        },
        {
          kind: "text",
          value:
            "Genetic improvement is the other lever with room to move. Selective breeding programmes for Indian major carps and for tilapia have produced improved strains, and the practical implication for a farm is that seed source is a technical decision with a measurable effect on growth rate and uniformity, not a procurement decision to be settled on price. Traceable seed also makes cycle-to-cycle comparison meaningful, because the genetics are no longer an uncontrolled variable behind every yield figure.",
        },
        {
          kind: "text",
          value:
            "Finally, freshwater aquaculture competes for water with agriculture and with domestic supply, and that competition is intensifying in much of India. Approaches that raise production per unit of water consumed — deeper ponds with lower evaporative loss per tonne, reuse of pond water for irrigation, and reduced-exchange systems — are becoming design objectives rather than optional refinements.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "An earthen pond is a production system in its own right, and managing its natural productivity is the core freshwater skill.",
    "Composite culture works by filling different feeding niches, so the stocking ratio should follow the pond's productivity rather than a fixed table.",
    "Dissolved oxygen in a fertilised pond swings daily and reaches its minimum before dawn, which is when most unexplained losses occur.",
    "Alkalinity determines how far pH swings between day and night, which is why liming is routine practice rather than a remedy.",
    "Feeding decisions depend entirely on the biomass estimate, so sampling discipline matters more than feed table precision.",
    "Pond preparation between crops — drying, liming, repair and screening — prevents more problems than any in-crop intervention resolves.",
  ],
  related: ["pond", "fundamentals", "water-quality", "species"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Programme material on inland aquaculture systems, freshwater species and pond management.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute publications and extension material on composite fish culture and freshwater species in India.",
    },
    {
      organisation: "State fisheries departments and agricultural universities in India",
      description: "Regional advisory material, seed sourcing guidance and pond management recommendations for local conditions.",
    },
  ],
};
