import type { KnowledgeArea } from "../types";

export const nursery: KnowledgeArea = {
  number: "06",
  slug: "nursery",
  title: "Nursery Management",
  navSummary: "The intermediate phase that turns fragile hatchery output into stock a grow-out unit can use.",
  summary:
    "The nursery is the bridge between hatchery seed and grow-out stock. It takes small, fragile, variable animals and returns a uniform, robust, counted population conditioned to the water and the diet they will meet next. Farms that skip this stage or run it casually pay for it later in poor survival, wide size variation and an inability to plan a harvest.",
  difficulty: "intermediate",
  topics: ["production", "operations", "fish"],
  tags: ["nursery phase", "grading", "acclimatisation", "weaning", "survival", "stocking density"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-25",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Small fish are fragile, hard to count and easy to lose in a big pond or tank. The nursery holds them in a smaller, closely watched space until they are big enough to survive the main system, then grades them so that the batch going out is even in size and known in number.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Nursery rearing covers the interval between the animal leaving the hatchery and entering the grow-out unit. In Indian carp culture this is traditionally split into a fry nursery of a few weeks followed by a rearing pond producing fingerlings. In shrimp culture it is a nursery raceway or lined tank holding postlarvae before pond stocking. In intensive finfish systems it is a set of small tanks with fine screens, high exchange and close observation. The scale and equipment differ; the function does not.",
        },
        {
          kind: "text",
          value:
            "That function has four parts: to raise the animals past the size at which they are most vulnerable, to condition them to the diet and water they will encounter next, to grade them into uniform size classes, and to establish an accurate count. Each of these is difficult to do in a grow-out unit and comparatively straightforward in a nursery, which is the entire argument for having one.",
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
            "Mortality in small animals is high and largely invisible. A fingerling that dies in a large pond is not observed, not recovered and not counted, so the loss appears only at harvest as a shortfall against the stocking record. The nursery makes that mortality visible, and visible mortality can be investigated. It also concentrates the losses into a period when the biomass at risk, and therefore the financial exposure, is at its lowest point in the cycle.",
        },
        {
          kind: "text",
          value:
            "The nursery is also the last practical opportunity to impose uniformity. Size variation compounds: larger individuals feed more effectively, grow faster and widen the gap, and in some species begin to predate on smaller siblings. Grading during the nursery phase, when handling is cheap and the animals are numerous but small, is far more effective than attempting it later against a large standing biomass.",
        },
        {
          kind: "text",
          value:
            "Finally, an accurate count entering grow-out is what makes feeding, growth tracking and harvest forecasting possible. Without it, feed rate is guesswork and every subsequent calculation inherits the error.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Acclimatisation" },
        {
          kind: "text",
          value:
            "Seed arriving from a hatchery has been held in specific water at a specific temperature, often for many hours in a sealed transport bag in which temperature and carbon dioxide have drifted. Acclimatisation means bringing the transport water and the receiving water into agreement gradually — temperature first, then the chemistry that differs most, typically salinity or pH — before releasing the animals. Direct transfer produces osmotic and thermal shock whose consequences appear over the following days rather than immediately.",
        },
        { kind: "subheading", value: "Conditioning to the next environment" },
        {
          kind: "text",
          value:
            "The nursery is where the animals learn to eat what the grow-out farm will feed them and to tolerate the water it will supply. Where hatchery output has been weaned onto a starter diet, the nursery advances it through particle sizes towards the grow-out feed. Where the grow-out water differs in salinity, temperature or hardness, the nursery moves the animals towards it over days rather than presenting the change at transfer.",
        },
        { kind: "subheading", value: "Grading" },
        {
          kind: "text",
          value:
            "Grading separates a population into size classes so that each can be fed and managed appropriately. It reduces competition, removes the cannibalism risk in species where it exists, and allows the farm to stock grow-out units with populations that will reach market size together. Grading is itself a handling stress, so its frequency is a balance between the harm of the procedure and the harm of the divergence it prevents.",
        },
        { kind: "subheading", value: "Counting and inventory" },
        {
          kind: "text",
          value:
            "The number transferred out of the nursery is the number every downstream calculation depends on. Counting is done by sample weight, by volumetric displacement, by automated counters or by direct enumeration of subsamples, each with its own error characteristics. Whichever method is used, it should be the same method every time, so that the error at least stays consistent and comparisons between batches remain meaningful.",
        },
      ],
    },
    {
      id: "technical-fundamentals",
      heading: "Technical fundamentals",
      blocks: [
        {
          kind: "formula",
          name: "Survival rate through the nursery phase",
          expression: "S = 100 x Nout / Nin",
          terms: [
            { symbol: "S", meaning: "Survival across the nursery period", unit: "%" },
            { symbol: "Nout", meaning: "Number of animals transferred out at the end of the phase", unit: "count" },
            { symbol: "Nin", meaning: "Number stocked into the nursery at the start", unit: "count" },
          ],
          example:
            "Consider a hypothetical nursery stocked with 200,000 fry and transferring out 152,000 fingerlings. Survival is 76 per cent, and that figure is only as reliable as the counting method used at both ends of the period.",
          limitations:
            "Counting error at stocking propagates directly into the survival figure, and losses to predation or escape are indistinguishable from mortality in the result. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Population coefficient of variation in size",
          expression: "CV = 100 x s / m",
          terms: [
            { symbol: "CV", meaning: "Coefficient of variation of individual weight within the population", unit: "%" },
            { symbol: "s", meaning: "Standard deviation of individual weights in the sample", unit: "g" },
            { symbol: "m", meaning: "Mean individual weight in the sample", unit: "g" },
          ],
          example:
            "Consider a hypothetical sample with a mean weight of 12 g and a standard deviation of 3 g. The coefficient of variation is 25 per cent, and tracking whether that figure rises or falls between samplings indicates whether the population is diverging or converging under current management.",
          limitations:
            "The result depends on the sample being drawn representatively, which is difficult when larger individuals behave differently at capture, and a single value carries far less information than the trend across a series. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "These two measures together summarise nursery performance. Survival says how many animals the phase delivered; the coefficient of variation says whether they are a batch or merely a collection. A nursery that achieves high survival while allowing size variation to widen has solved only half of its job.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "flow",
          caption: "The nursery cycle from arrival of seed to transfer into grow-out.",
          steps: [
            { label: "Preparation", detail: "Units cleaned, disinfected, dried where possible and refilled, with water quality confirmed stable before any animals arrive." },
            { label: "Reception and acclimatisation", detail: "Transport containers tempered to the receiving water, then chemistry equalised gradually before release." },
            { label: "Settling period", detail: "Minimal disturbance for the first days, with light feeding and close observation of behaviour rather than intervention." },
            { label: "Active rearing", detail: "Feeding advanced through particle sizes as the animals grow, with water exchange increased as biomass and waste load rise." },
            { label: "Sampling", detail: "Periodic weighing of a representative sample to track growth, adjust feed rate and monitor size variation." },
            { label: "Grading", detail: "Separation into size classes at a frequency matched to the species' tendency to diverge and to cannibalise." },
            { label: "Pre-transfer conditioning", detail: "Water parameters moved towards those of the receiving unit and feed withheld briefly before handling." },
            { label: "Counting and transfer", detail: "Population enumerated by a consistent method and moved to grow-out with controlled temperature and oxygen." },
          ],
        },
        {
          kind: "table",
          caption: "Nursery arrangements and the conditions under which each is appropriate",
          columns: ["Arrangement", "Typical context", "Principal advantage", "Principal limitation"],
          rows: [
            ["Earthen nursery pond", "Carp and traditional pond culture", "Natural food organisms supplement the diet at very low cost", "Predators, poor visibility of stock and imprecise counting"],
            ["Hapa or net enclosure within a pond", "Fry rearing in existing water bodies", "Containment and observation without separate infrastructure", "Fouling of the mesh restricting exchange, and exposure to pond conditions"],
            ["Lined tank or raceway", "Shrimp postlarvae and intensive finfish", "Close control, easy grading and reliable counting", "Requires water treatment, aeration and continuous attention"],
            ["Recirculating nursery module", "High-value species and biosecure operations", "Full control of temperature and water chemistry, and strong biosecurity", "Capital cost and technical staffing relative to the biomass held"],
            ["Cage-based nursery", "Sites where grow-out is in open water", "Conditions the stock to the water body it will grow out in", "No protection from external water quality or weather events"],
          ],
          basis:
            "A qualitative comparison of nursery arrangements in common use, presented to inform selection rather than to rank them. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Nursery capacity limits the farm",
          value:
            "A nursery is often sized as an afterthought and then becomes the constraint on the whole production calendar, because grow-out units cannot be stocked until the nursery releases them. Sizing the nursery against the intended stocking schedule, including any staggering, prevents a bottleneck that is expensive to relieve later.",
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
            "The first days after stocking deserve disproportionate attention. Animals arriving from transport are depleted, their osmotic balance is disturbed and their immune competence is temporarily reduced. The instinct to feed heavily and to check on them frequently both work against recovery. Light feeding, stable water and minimal disturbance produce better outcomes than intervention, and mortality in this window should be recorded carefully because it distinguishes a transport problem from a nursery problem.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Prepare and fill the nursery unit well ahead of arrival, and confirm that water quality is stable rather than merely acceptable at the moment of filling.",
            "Agree transport conditions and arrival time with the hatchery, and inspect the consignment before releasing it.",
            "Acclimatise temperature first and then chemistry, at a rate determined by how far apart the two waters are.",
            "Feed lightly for the first days and increase only as feeding response confirms the animals have recovered.",
            "Sample at a fixed interval, weighing enough individuals for the mean to be meaningful, and record both mean weight and variation.",
            "Adjust feed rate to sampled biomass and observed appetite rather than to an assumed growth curve.",
            "Grade when size variation warrants it, before rather than after cannibalism or feed monopolisation becomes visible.",
            "Condition and count the population before transfer, and hand the receiving unit a number that was measured rather than estimated.",
          ],
        },
        {
          kind: "text",
          value:
            "Sampling technique is worth attention because it is a common source of error. Larger individuals often evade a net differently from smaller ones, so a sample taken casually is biased towards whichever size class is easier to catch. Sampling from more than one location in the unit, and in a consistent manner between occasions, keeps the bias at least constant.",
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
            "Small animals have a high surface area to volume ratio and a high metabolic rate per unit of body mass. They consume more oxygen and excrete more ammonia per kilogram than the same species does at market size, and they have very little energy reserve to draw on if feeding is interrupted. A nursery therefore carries a higher specific load than its modest total biomass suggests, and support systems sized on biomass alone tend to be undersized.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Small animals carry a high specific load",
          value:
            "Oxygen demand and ammonia production per unit of biomass are substantially higher in early life stages than at market size. A nursery holding a small total biomass can still impose a treatment and aeration demand comparable to a much larger grow-out population.",
        },
        {
          kind: "text",
          value:
            "Engineering details that are unimportant at grow-out become critical here. Screens must retain small animals without blinding, which means either a large screen area or frequent cleaning. Inlet velocities must be low enough that weak swimmers are not pinned. Drains and standpipes must be designed so that small animals cannot pass into them. Surfaces must be smooth, since abrasion damages the mucus layer, and every net and container used must be graded for the size being handled.",
        },
        {
          kind: "text",
          value:
            "Feeding presentation matters more than formulation at this stage. Particle size must match mouth size and be advanced as the animals grow; sinking rate must suit where the species feeds; and distribution must be even enough that a dominant fraction of the population cannot monopolise the ration. Frequent small meals suit the limited gut capacity of small animals better than a few large ones.",
        },
        {
          kind: "text",
          value:
            "Predation is a specific nursery risk in open systems. Aquatic insects, predatory fish that entered with the water supply, birds and amphibians all take small stock efficiently and leave no evidence. Screening the inlet, netting the unit and preparing the pond before stocking are cheaper than investigating unexplained shortfalls afterwards.",
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
            "Keep the nursery physically and operationally separate from grow-out, with its own equipment, so that stock at its most vulnerable is not exposed to the rest of the farm.",
            "Operate on an all-in, all-out basis per unit, with cleaning and drying between batches rather than continuous occupation.",
            "Record daily mortality, and treat the shape of the mortality curve over the first week as the primary indicator of transport and acclimatisation quality.",
            "Match feed particle size to the population as it grows rather than to the bag that is currently open.",
            "Grade on the evidence of size variation rather than on a fixed calendar, and record the coefficient of variation so that the decision is based on data.",
            "Space handling events so that grading, treatment and transfer are not imposed within a short interval.",
            "Count out with a consistent method and pass the number, the mean weight and the variation to the grow-out unit as a documented handover.",
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
          caption: "Nursery problems and the practice usually responsible",
          columns: ["Problem", "Usual underlying cause"],
          rows: [
            ["Heavy mortality within days of arrival", "Transport condition or acclimatisation too rapid, particularly on temperature and salinity"],
            ["Steady low-level mortality through the phase", "Water quality drifting under a high specific load, or a sub-clinical health problem carried in with the seed"],
            ["Size variation widening despite adequate feeding", "Uneven feed distribution allowing a dominant fraction to monopolise the ration"],
            ["Losses concentrated among smaller individuals", "Cannibalism in a species prone to it, following a grading interval that was too long"],
            ["Growth slower than expected with good water quality", "Feed particle size mismatched to mouth size, or feeding frequency too low for limited gut capacity"],
            ["Unexplained shortfall at transfer", "Predation in an open unit, escape through a damaged screen, or counting error at stocking"],
            ["Poor performance in grow-out despite a good nursery record", "Transfer conditions, or a step change in water chemistry the nursery had not conditioned the stock towards"],
          ],
          basis:
            "Common nursery failure patterns reported in extension practice, offered as starting points for investigation. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Size the nursery against the stocking calendar, including staggered batches, rather than against a single batch in isolation.",
            "Prepare units fully and prove water stability before seed arrives, since there is no opportunity to correct a system once fragile stock is in it.",
            "Inspect and document the condition of every incoming consignment, so that responsibility between hatchery and nursery can be established from evidence.",
            "Acclimatise deliberately and slowly, and treat the time it takes as part of the procedure rather than as a delay.",
            "Sample consistently, weigh enough individuals for the mean to be reliable, and record variation alongside it every time.",
            "Screen inlets and cover open units against predators before stocking rather than in response to losses.",
            "Withhold feed briefly before any handling event and allow a recovery interval afterwards before the next one.",
            "Close each batch with a written record of survival, growth, feed used and final size distribution, and use it to set the next batch's plan.",
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
            "Once basic nursery survival is consistent, the question becomes what size to transfer at. A longer nursery phase produces larger, more robust animals with better survival in grow-out, shortens the grow-out occupancy and improves the utilisation of expensive production units. It also occupies nursery capacity for longer, raises the specific load that capacity must handle, and delays the stocking calendar. The optimum transfer size is therefore a facility-specific answer determined by which capacity is scarcer, and it is worth calculating rather than inheriting.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Nursery survival assumptions propagate",
          value:
            "Production plans are usually built on a nursery survival figure taken from an earlier cycle or from published guidance. Because stocking numbers, feed purchase and harvest forecasts all derive from it, an assumption carried forward without verification against the farm's own recent records distorts the entire plan rather than one line of it.",
        },
        {
          kind: "text",
          value:
            "Nursery conditions also appear to influence later performance in ways that are still being characterised. Rearing temperature, early nutrition and the microbial environment encountered in early life have been associated with differences in growth, robustness and deformity rates that persist well beyond the nursery phase. Farms in a position to keep good records across the full cycle are better placed than most published work to see whether such effects hold in their own operation.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "The nursery exists to make early mortality visible, at the point in the cycle when the biomass at risk is smallest.",
    "It is the last practical opportunity to impose size uniformity, because variation compounds once it is established.",
    "Acclimatisation should move temperature first and chemistry afterwards, at a rate set by how far the two waters differ.",
    "Small animals impose a high oxygen and ammonia load per unit of biomass, so support systems cannot be sized on total biomass alone.",
    "Survival and the coefficient of variation together describe nursery performance; either alone is misleading.",
    "An accurate, consistently measured count at transfer is what makes every downstream feeding and harvest calculation possible.",
  ],
  related: ["hatchery", "grow-out", "fish-health", "feed-nutrition"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Technical guidance on nursery rearing, seed handling and transport of live aquatic animals.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Extension material on fry and fingerling rearing practice for Indian cultured species.",
    },
    {
      organisation: "Southern Regional Aquaculture Center",
      description: "Publications on fingerling production, grading, counting and stock handling.",
    },
  ],
};
