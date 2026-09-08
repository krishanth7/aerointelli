import type { KnowledgeArea } from "../types";

export const pond: KnowledgeArea = {
  number: "15",
  slug: "pond",
  title: "Pond Aquaculture",
  navSummary: "The earthen pond as a production system: how its soil, water and natural productivity are managed.",
  summary:
    "Pond culture remains the dominant form of aquaculture in India and much of the world, because an earthen pond is inexpensive to build and does part of the treatment work by itself. Understanding pond farming means understanding that the pond is a living system with its own plankton community, oxygen rhythm and soil chemistry, and that the farmer manages those rather than replacing them.",
  difficulty: "beginner",
  topics: ["production", "water", "systems", "environment"],
  tags: ["earthen ponds", "natural productivity", "liming", "fertilisation", "pond soil", "aeration"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-13",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "A pond is a shallow body of water held by earthen banks, stocked with fish and managed so that the water stays fit to live in. Part of the fish's food grows in the pond itself as plankton, and part of the waste is broken down by the pond's own bacteria and bottom soil. The farmer's job is to keep that natural machinery working while adding enough feed and oxygen to carry more fish than the pond would hold on its own.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "A pond is an excavated or embanked basin holding a shallow body of standing water, stocked deliberately and managed for production. It is the oldest form of aquaculture and still the most widely practised, and its persistence is not a matter of tradition alone. A pond provides, at very low capital cost, several functions that an engineered system has to build and pay for: oxygen transfer at the surface, waste breakdown in the sediment, nitrification on every wetted surface, and a supply of natural food organisms.",
        },
        {
          kind: "text",
          value:
            "The trade for that economy is control. Pond conditions follow weather, sunlight and season, and the operator's influence is indirect. Fertiliser encourages a plankton bloom but does not determine which organisms bloom. Aeration raises oxygen but does not remove the nightly draw-down that respiration causes. Pond management is therefore a matter of steering a system that has its own dynamics, rather than of setting conditions directly.",
        },
        {
          kind: "text",
          value:
            "Ponds span the full range of intensity. An extensive pond is fertilised and relies almost entirely on natural food. A semi-intensive pond adds supplementary feed. An intensive pond supplies complete formulated feed and mechanical aeration, and begins to resemble an open-air tank in which the soil still participates. The management questions change substantially along that range.",
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
            "Most fish farmed in India comes from ponds, and most people entering aquaculture will do so through a pond rather than through an engineered system. The decisions that determine whether such a farm succeeds — where the pond is dug, in what soil, with what water supply, and how the bottom is treated between cycles — are made early and are expensive to reverse.",
        },
        {
          kind: "text",
          value:
            "Pond principles also underlie the systems that came after. Oxygen budgets, nitrification, solids accumulation and the relationship between feed input and waste load all appear in a pond in a slower and more forgiving form. An operator who understands why a pond crashes at dawn after a cloudy day understands, in outline, why a recirculating tank crashes when its blower stops.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The pond bottom is part of the system",
          value:
            "Sediment stores organic matter, exchanges nutrients with the water, hosts a large share of the pond's bacterial activity, and turns anaerobic when overloaded. A pond that is managed only from the water surface is being managed at half its area.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Natural productivity" },
        {
          kind: "text",
          value:
            "Sunlight and dissolved nutrients drive phytoplankton growth, phytoplankton supports zooplankton, and both are grazed by the stocked animals or by the organisms the stocked animals eat. This food chain is free, and in extensive and semi-intensive systems it supplies a meaningful share of nutrition. It is also the pond's primary oxygen source during daylight, which means productivity and oxygen supply are the same phenomenon viewed from two angles.",
        },
        { kind: "subheading", value: "The diurnal oxygen cycle" },
        {
          kind: "text",
          value:
            "Photosynthesis produces oxygen only while there is light. Respiration by fish, plankton, bacteria and sediment continues all the time. Dissolved oxygen therefore rises through the day, peaks in the afternoon and falls through the night to a minimum near dawn. The intensity of the bloom sets the amplitude of that swing: a dense bloom gives a high afternoon peak and a dangerously low dawn minimum. This is the single most important rhythm in pond management.",
        },
        {
          kind: "flow",
          caption:
            "The daily oxygen rhythm in a fertilised pond, and where the risk sits.",
          steps: [
            { label: "Sunrise", detail: "Dissolved oxygen is at its lowest after a full night of respiration with no production." },
            { label: "Morning", detail: "Photosynthesis begins and oxygen climbs; fish resume active feeding as conditions improve." },
            { label: "Afternoon peak", detail: "Production exceeds consumption and the water can reach supersaturation in a dense bloom." },
            { label: "Evening", detail: "Light fails, photosynthesis stops, and consumption becomes the only active process." },
            { label: "Night decline", detail: "Fish, plankton, bacteria and sediment draw oxygen down steadily through the dark hours." },
            { label: "Pre-dawn minimum", detail: "The lowest point of the cycle, and the hour at which most pond mortality occurs." },
          ],
        },
        { kind: "subheading", value: "Stratification and turnover" },
        {
          kind: "text",
          value:
            "In deeper or sheltered ponds, warm surface water floats on cooler bottom water and the two stop mixing. The lower layer, cut off from the atmosphere and from light, becomes oxygen-depleted and accumulates reduced compounds from the sediment. When a cold rain or a strong wind breaks the stratification, that layer mixes upward all at once. A pond turnover of this kind can remove almost all the oxygen from the whole water column within minutes.",
        },
        { kind: "subheading", value: "Alkalinity and hardness" },
        {
          kind: "text",
          value:
            "A pond's ability to hold pH steady against the daily photosynthetic swing depends on its buffering capacity, which comes from the water source and from the soil. Ponds on acidic soils buffer poorly, and the resulting pH swing between dawn and afternoon stresses stock and alters ammonia toxicity. Liming addresses the cause rather than the symptom, which is why it is a routine part of pond preparation rather than an emergency measure.",
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
            "Two calculations govern most pond decisions: how much water the pond actually holds, and whether the oxygen supply can meet the demand at the worst hour.",
        },
        {
          kind: "formula",
          name: "Effective pond volume",
          expression: "V = A x Dm",
          terms: [
            { symbol: "V", meaning: "Effective water volume of the pond", unit: "m3" },
            { symbol: "A", meaning: "Water surface area at operating level", unit: "m2" },
            { symbol: "Dm", meaning: "Mean depth, which in a pond with sloped banks is less than the depth at the centre", unit: "m" },
          ],
          example:
            "Consider a hypothetical pond of one hectare surface area with a mean depth of 1.4 m. Effective volume is 10,000 x 1.4, or 14,000 m3. Treatment doses, fertiliser applications and stocking calculations must all use this figure rather than a volume derived from the deepest sounding.",
          limitations:
            "Mean depth changes with seepage, evaporation and sediment accumulation over a pond's life, so a volume measured at construction is not a permanent property. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Night-time oxygen balance",
          expression: "dDO = (Ra - (Rf + Rp + Rs) ) x t / V",
          terms: [
            { symbol: "dDO", meaning: "Change in dissolved oxygen concentration over the dark period", unit: "mg/L" },
            { symbol: "Ra", meaning: "Oxygen added by aerators and by surface transfer over the period", unit: "g/h" },
            { symbol: "Rf", meaning: "Oxygen consumed by the fish", unit: "g/h" },
            { symbol: "Rp", meaning: "Oxygen consumed by plankton respiration", unit: "g/h" },
            { symbol: "Rs", meaning: "Oxygen consumed by the sediment and its bacterial community", unit: "g/h" },
            { symbol: "t", meaning: "Duration of the dark period", unit: "h" },
            { symbol: "V", meaning: "Effective pond volume", unit: "m3" },
          ],
          example:
            "Consider a hypothetical pond in which fish, plankton and sediment together consume 900 g of oxygen per hour and aeration supplies 700 g per hour over a ten-hour night in 14,000 m3 of water. The net deficit is 200 g per hour, or 2,000 g over the night, which is a fall of about 0.14 mg/L across the whole volume — modest in this example, but the same arithmetic with a denser bloom and no aeration produces a very different answer.",
          limitations:
            "Plankton and sediment respiration are difficult to measure directly and are usually estimated, and the calculation assumes complete mixing that a stratified pond does not provide. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "The second relationship explains why aeration is added to ponds long before the fish appear crowded. As feeding increases, plankton and sediment respiration rise faster than fish respiration does, because the extra feed nourishes the whole pond community and not only the stock. Oxygen demand therefore tracks feed input more closely than it tracks fish biomass.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        { kind: "subheading", value: "Site and soil" },
        {
          kind: "text",
          value:
            "Soil determines whether a pond will hold water and how it will behave chemically. Clay content governs seepage; acid sulphate soils release acidity when disturbed and can make a site unusable without extensive treatment; organic soils compact and settle. Soil should be tested at construction depth before any earthmoving, because the alternatives to a bad soil finding — lining, relocation, prolonged reclamation — are all far cheaper to choose than to retrofit.",
        },
        { kind: "subheading", value: "Pond preparation" },
        {
          kind: "text",
          value:
            "Between cycles, a pond is drained, the bottom is dried and tilled, accumulated sludge is removed, lime is applied where the soil requires it, and the pond is refilled and fertilised to establish a bloom before stocking. Each of those steps has a purpose: drying oxidises accumulated organic matter, tilling restores exchange between sediment and water, liming corrects acidity and raises buffering, and fertilising ensures the stocked animals meet food rather than bare water.",
        },
        { kind: "subheading", value: "Polyculture" },
        {
          kind: "table",
          caption: "Feeding niches used in Indian carp polyculture and what each contributes",
          columns: ["Niche", "Role in the pond", "Effect on the system"],
          rows: [
            ["Surface feeder", "Grazes phytoplankton from the upper water column", "Controls bloom density and converts primary production directly"],
            ["Column feeder", "Feeds on zooplankton and suspended material at mid-depth", "Uses a food resource that would otherwise be unharvested"],
            ["Bottom feeder", "Works the sediment surface for detritus and benthic organisms", "Stirs the bottom, returning nutrients to the water column"],
            ["Macrophyte feeder", "Consumes aquatic vegetation and supplied green fodder", "Limits weed growth and adds a second nutrient pathway"],
            ["Supplementary carnivore", "Consumes unwanted recruits and small wild fish", "Reduces competition from uncontrolled reproduction"],
          ],
          basis:
            "A description of feeding niches rather than a stocking recommendation; the species combination and proportions are chosen for the local water, market and seed availability. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "Polyculture works because different species harvest different parts of the pond's production without competing directly. It also spreads market risk across several products from one water body. It complicates harvest and grading, and it makes the pond's response to a feeding change harder to attribute to any one species.",
        },
        { kind: "subheading", value: "Aeration and water exchange" },
        {
          kind: "text",
          value:
            "Paddlewheel, aspirator and diffused aeration all serve to raise oxygen and to move water, and in a pond the movement often matters as much as the transfer, because it reduces stratification and concentrates settleable solids where they can be removed. Water exchange is the older remedy, but it imports whatever the source water carries, including pathogens, and it is increasingly constrained by availability and by discharge regulation.",
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
            "A pond cycle follows a repeatable sequence, and most of the work that decides the outcome happens before stocking.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Drain fully, remove accumulated sludge from the bottom, and allow the exposed soil to dry until it cracks.",
            "Till the bottom to restore aerobic exchange, and repair banks, inlets, outlets and screens while the pond is empty.",
            "Test the soil and apply lime according to what the test shows, allowing time for it to react before filling.",
            "Fill through a screen that excludes wild fish and their eggs, and check the source water chemistry as it enters.",
            "Fertilise to develop a plankton bloom, and wait for the bloom to establish before stocking rather than stocking into clear water.",
            "Stock seed of known origin and uniform size, acclimatising for temperature and chemistry before release.",
            "Feed to observed response, and increase the ration only as the pond's oxygen behaviour shows it can absorb the extra load.",
            "Monitor dissolved oxygen at dawn, bloom density through the day, and pH at both extremes of the daily swing.",
            "Sample the stock periodically for growth and condition, and adjust the feed calculation to the measured biomass.",
            "Plan the harvest around water availability, temperature and the buyer's schedule, and prepare the drainage route in advance.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Read the pond before reading the meter",
          value:
            "Experienced pond operators judge bloom density by transparency, judge oxygen stress by fish behaviour at dawn, and judge sediment condition by smell when the bottom is disturbed. Instruments confirm and quantify these observations; they rarely provide the first warning.",
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
            "A pond's principal engineering virtue is thermal and chemical inertia. A large volume of water changes temperature slowly, dilutes a sudden ammonia release, and continues to hold oxygen for some time after an aerator stops. That buffer is why pond farming tolerates a level of operational imprecision that would be fatal in an intensive tank.",
        },
        {
          kind: "text",
          value:
            "The corresponding weakness is that the same inertia works against correction. A pond that has developed a problem — an over-dense bloom, an anaerobic bottom, a chronic pH swing — cannot be reset quickly. The intervention that works is usually slow, and the fastest available action is frequently just aeration while the underlying cause is addressed over days.",
        },
        {
          kind: "text",
          value:
            "Environmentally, ponds interact with their surroundings through seepage, through discharge at harvest, and through the sludge removed between cycles. Effluent carries nutrients and suspended solids, and where ponds are clustered the discharge from one becomes the intake of another. Settlement of discharge water and considered placement of intakes relative to outfalls are both site design questions rather than operating decisions.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Natural food contribution is site-specific",
          value:
            "How much of the animals' nutrition comes from the pond rather than the feed bag varies with fertility, species, stocking density and season. Budgets that assume a fixed contribution should be checked against the farm's own feed conversion records, since an overestimate shows up as slow growth rather than as an obvious error.",
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
            "Check dissolved oxygen at dawn, because that is when the pond is at its limit and any other time of day is reassuring rather than informative.",
            "Manage the bloom rather than maximising it. A dense bloom is a large oxygen producer by day and a large consumer by night, and it can collapse.",
            "Feed what is eaten. Uneaten feed does not vanish; it becomes sediment load, bloom fertiliser and night-time oxygen demand.",
            "Keep the pond bottom in the record. Note sludge depth and smell at every drain-down and treat a worsening trend as a production issue.",
            "Screen every inlet, so that wild fish, predators and their eggs stay outside the pond that is being managed.",
            "Lime according to a soil test rather than to a habit, since both under-liming and over-liming carry real costs.",
            "Have aeration available before it is needed, and confirm it starts, because the hour it is required is the hour there is no time to fetch it.",
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
          caption: "Frequent pond problems and their usual underlying causes",
          columns: ["Symptom", "Usual underlying cause"],
          rows: [
            ["Fish gasping at the surface near dawn", "Night-time oxygen demand exceeding supply, typically after cloudy weather or with a dense bloom"],
            ["Water turns suddenly clear and mortality follows", "Plankton bloom collapse, with decomposition consuming the remaining oxygen"],
            ["Wide pH swing between dawn and afternoon", "Low alkalinity, so photosynthetic removal of carbon dioxide is not buffered"],
            ["Black, foul-smelling sediment when the bottom is disturbed", "Organic accumulation from overfeeding, with the sediment gone anaerobic"],
            ["Whole-pond mortality after heavy cold rain", "Stratification breaking down and oxygen-depleted bottom water mixing through the column"],
            ["Filamentous algae covering the shallows", "Water too clear for too long, letting light reach the bottom before a bloom established"],
            ["Harvest yield well below the stocked number", "Predation, unscreened inlets admitting competitors, or unrecorded early mortality"],
            ["Growth stalls despite normal feeding", "Standing biomass overestimated, or the pond has reached its oxygen-limited carrying capacity"],
          ],
          basis:
            "Patterns widely reported in pond extension literature and field practice, given as diagnostic starting points rather than conclusions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Test the soil before excavation, not after, and treat an adverse finding as a site decision rather than a treatment problem.",
            "Build with a proper drain and a harvest sump, so that the pond can be emptied completely and the bottom dried between cycles.",
            "Dry and till the bottom every cycle where the schedule allows; it is the cheapest sediment management available.",
            "Establish the bloom before stocking, and stock only when transparency shows the food chain is running.",
            "Keep a written daily record of dawn oxygen, transparency, feed given and observed feeding response.",
            "Size aeration against feed input rather than fish biomass alone, since the whole pond community respires on what is fed.",
            "Settle discharge water before it leaves the farm, and keep intakes clear of any outfall, including a neighbour's.",
            "Review each cycle's feed conversion against the plan and adjust the assumed contribution from natural food accordingly.",
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
            "The most useful advanced idea in pond culture is that the pond has two distinct carrying capacities, and they bind at different times. The daytime capacity is set by how much biomass the pond can support while photosynthesis is producing oxygen, and it is generous. The night-time capacity is set by respiration alone, and it is much lower. Intensifying a pond is essentially the work of raising the night-time capacity, which is why aeration rather than volume is the usual first investment.",
        },
        {
          kind: "text",
          value:
            "A second refinement concerns where solids go. Aerator placement can be arranged so that circulation carries settleable solids towards a central depression from which they can be drawn off, concentrating the sediment burden in one manageable area instead of spreading it across the whole bottom. This borrows a principle from tank hydraulics and applies it to an earthen basin, and it changes what the operator finds at the next drain-down.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Sediment as an active management target",
          value:
            "Interest continues in managing the pond bottom during the cycle rather than only between cycles, through bottom aeration, microbial amendment and circulation design. The direction is credible and being actively worked on, but the specific interventions have not settled into standard practice.",
        },
        {
          kind: "text",
          value:
            "Finally, the boundary between pond and engineered system is not sharp. Ponds with lined bottoms, central drains, mechanical aeration and partial recirculation retain the pond's economy of construction while acquiring some of the tank's control. Deciding how far along that continuum a particular site should sit is an economic question about the value of control, and it should be answered before construction rather than through incremental retrofit.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "A pond performs aeration, waste breakdown and food production naturally, which is why it costs so little to build and so much to control.",
    "The daily oxygen cycle peaks in the afternoon and bottoms before dawn, and the pre-dawn minimum is when most pond mortality occurs.",
    "Oxygen demand tracks feed input more closely than fish biomass, because the whole pond community feeds on what is added.",
    "Pond soil and sediment are part of the production system and should be tested, dried, tilled and recorded like any other asset.",
    "Alkalinity from water and soil determines how far pH swings each day, so liming is a routine preparation step rather than an emergency measure.",
    "The pond's large volume buffers mistakes but also resists correction, so problems are prevented at preparation rather than fixed mid-cycle.",
  ],
  related: ["fundamentals", "water-quality", "freshwater", "systems"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Programme material on pond culture, polyculture systems and inland aquaculture development.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center",
      description: "Extension publications on pond construction, water quality management, liming and aeration.",
    },
    {
      organisation: "State fisheries departments and agricultural universities in India",
      description: "Region-specific guidance on pond preparation, species combinations and seed supply.",
    },
  ],
};
