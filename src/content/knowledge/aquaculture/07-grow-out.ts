import type { KnowledgeArea } from "../types";

export const growOut: KnowledgeArea = {
  number: "07",
  slug: "grow-out",
  title: "Grow-Out Farming",
  navSummary: "The long feeding phase where most of the biomass, nearly all of the feed cost and the margin are decided.",
  summary:
    "Grow-out is the phase in which stocked juveniles are fed to market size. It accounts for most of the feed bill, most of the water treatment burden and almost all of the standing biomass on a farm, so it is where the difference between a profitable and an unprofitable operation is made. The work is not complicated, but it is relentless: feed correctly, keep the water fit, know the inventory, and reach the market window with the size the buyer wants.",
  difficulty: "intermediate",
  topics: ["production", "operations", "economics"],
  tags: ["stocking density", "feeding management", "growth tracking", "biomass inventory", "harvest planning"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-27",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Grow-out is the long stretch where the fish simply eat and grow. The farmer's job is to feed the right amount, keep the water good enough that the feed converts into fish rather than waste, and know at all times how much biomass is in each unit so that both of those decisions are made on fact rather than on impression.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "By the time stock enters grow-out, most of the difficult biology is behind it. The animals are robust, they accept formulated feed, and they will grow if conditions permit. What remains is a sustained operational discipline over months: delivering feed at a rate matched to biomass, temperature and appetite; maintaining water quality against a load that grows steadily through the cycle; and tracking the population accurately enough to make both decisions correctly.",
        },
        {
          kind: "text",
          value:
            "The defining feature of grow-out is that everything intensifies towards the end. Standing biomass, feed input, oxygen demand, nitrogen production and solids production all peak in the final weeks, at the same moment as the value at risk in the unit is at its maximum. A grow-out system that is comfortable for most of the cycle and marginal in its last fortnight is, for practical purposes, a system that is marginal.",
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
            "Feed usually represents the largest single operating cost in a fed aquaculture system, and grow-out consumes most of it. Small differences in feed conversion, accumulated across a whole cycle and a whole farm, move the margin more than almost any other manageable factor. A farm that improves conversion modestly through better feeding discipline has done more for its accounts than one that negotiated a discount on feed price.",
        },
        {
          kind: "text",
          value:
            "Grow-out also carries the greatest exposure to catastrophic loss. A failure late in the cycle destroys a population that has absorbed months of feed and management, and unlike a hatchery or nursery loss it cannot be repeated within the season. This is why redundancy, alarms and response procedures are justified by the value at risk rather than by the frequency of the events they guard against.",
        },
        {
          kind: "text",
          value:
            "Third, grow-out is where the market is met. Harvest size, harvest timing and product uniformity are all determined here, and a batch that reaches the right weight a month after the window has closed realises a different price for the same production cost.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Standing biomass and its trajectory" },
        {
          kind: "text",
          value:
            "Standing biomass is the total live weight held in a unit at a given moment. It rises through the cycle as growth outpaces mortality, and every operational quantity that matters — feed ration, oxygen demand, ammonia production, solids load — is proportional to it. A farm that does not know its standing biomass accurately is estimating all four, and the errors compound in the same direction.",
        },
        { kind: "subheading", value: "Feeding rate and its determinants" },
        {
          kind: "text",
          value:
            "Feed is delivered as a percentage of standing biomass per day, and that percentage falls as animals grow larger and rises with temperature within the species' range. Both effects operate simultaneously, so a fixed percentage applied through a cycle is wrong at both ends. Appetite observation corrects the calculation, and where the two disagree, appetite is the better guide.",
        },
        { kind: "subheading", value: "Feed conversion" },
        {
          kind: "text",
          value:
            "Feed conversion measures how much feed was required per unit of biomass gained. It is a whole-system indicator rather than a property of the feed: uneaten feed, mortality, poor water quality, disease and inaccurate biomass estimates all degrade it. A rising conversion ratio is usually the first quantitative sign that something is wrong, often before any water parameter or clinical sign appears.",
        },
        { kind: "subheading", value: "Carrying capacity in practice" },
        {
          kind: "text",
          value:
            "The maximum biomass a grow-out unit can support is set by whichever supporting process saturates first — oxygen supply, nitrogen removal, solids handling or, in ponds, the natural assimilative capacity of the water body. Because biomass rises continuously, a unit passes through that limit at a definite point in the cycle, and the operator either knows when that will be or discovers it.",
        },
        { kind: "subheading", value: "Single-batch and staggered production" },
        {
          kind: "text",
          value:
            "Stocking a unit once and harvesting it once gives clean records, straightforward biosecurity and a simple calendar, but leaves capacity underused early in the cycle and produces revenue in lumps. Staggered or partially harvested systems use capacity more evenly and supply the market continuously, at the cost of mixed populations, more complex inventory and weaker batch separation.",
        },
      ],
    },
    {
      id: "technical-fundamentals",
      heading: "Technical fundamentals",
      blocks: [
        {
          kind: "formula",
          name: "Daily feed ration",
          expression: "F = B x r / 100",
          terms: [
            { symbol: "F", meaning: "Feed to be delivered over the day", unit: "kg" },
            { symbol: "B", meaning: "Estimated standing biomass in the unit", unit: "kg" },
            { symbol: "r", meaning: "Feeding rate as a percentage of body weight per day, set by size and temperature", unit: "%" },
            { symbol: "100", meaning: "Conversion from percentage to fraction", unit: "dimensionless" },
          ],
          example:
            "Consider a hypothetical unit holding an estimated 2,400 kg at a feeding rate of 1.6 per cent of body weight per day. The ration is 38.4 kg, which would then be divided across the day's meals and adjusted against observed feeding response.",
          limitations:
            "The calculation is only as good as the biomass estimate behind it, and it takes no account of feed wastage, competition within the population or a suppressed appetite caused by water quality. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Projected standing biomass at harvest",
          expression: "Bh = N x S x Wh / 1000",
          terms: [
            { symbol: "Bh", meaning: "Standing biomass expected at harvest", unit: "kg" },
            { symbol: "N", meaning: "Number of animals stocked", unit: "count" },
            { symbol: "S", meaning: "Expected survival through the grow-out phase, as a fraction", unit: "dimensionless" },
            { symbol: "Wh", meaning: "Target mean individual weight at harvest", unit: "g" },
            { symbol: "1000", meaning: "Conversion from grams to kilograms", unit: "dimensionless" },
          ],
          example:
            "Consider a hypothetical unit stocked with 20,000 juveniles, an assumed survival of 0.9 and a harvest target of 450 g. Projected harvest biomass is 8,100 kg, and every support system in the unit must be capable of holding that figure rather than the average across the cycle.",
          limitations:
            "The survival term is an assumption carried from earlier cycles and is the largest source of error in the result, while the harvest weight assumes a growth curve the site's actual temperature regime may not deliver. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "The relationship between these two formulas is the core of grow-out planning. The second sizes the system and fixes the stocking number; the first governs daily operation and continuously tests whether the assumptions in the second are holding. When actual growth diverges from the projection, the response is to revise the plan rather than to feed to it.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "flow",
          caption: "A grow-out cycle from unit preparation to closing the batch record.",
          steps: [
            { label: "Unit preparation", detail: "Cleaning, disinfection, drying and, in ponds, bottom conditioning and liming, followed by filling and stabilisation of the water." },
            { label: "Stocking", detail: "Transfer of a counted, graded population with controlled acclimatisation, and recording of number, mean weight and origin." },
            { label: "Establishment", detail: "Light feeding while the population settles, with close observation of behaviour and early mortality." },
            { label: "Main feeding phase", detail: "Ration adjusted continuously to sampled biomass, temperature and appetite, with feed particle size advanced as animals grow." },
            { label: "Load management", detail: "Aeration, exchange and treatment increased in step with rising biomass, ahead of the demand rather than in response to it." },
            { label: "Periodic sampling", detail: "Representative weighing to update biomass, verify growth against plan and monitor size distribution." },
            { label: "Health surveillance", detail: "Routine observation, mortality recording and investigation of deviations before they become clinical events." },
            { label: "Pre-harvest conditioning", detail: "Feed withdrawal for an appropriate interval and, where relevant, purging to address flavour before removal." },
            { label: "Harvest", detail: "Removal, grading and chilling under conditions that preserve product quality and, for partial harvests, minimise disturbance to remaining stock." },
            { label: "Batch closure", detail: "Reconciliation of feed used, biomass produced, survival and cost against the plan, and revision of the assumptions for the next cycle." },
          ],
        },
        {
          kind: "table",
          caption: "Grow-out management emphasis by system type",
          columns: ["System", "Dominant daily concern", "Principal capacity limit", "Harvest characteristic"],
          rows: [
            ["Earthen pond", "Plankton balance, dissolved oxygen through the night and pond bottom condition", "Assimilative capacity of the pond and available aeration", "Drain or seine harvest, usually as a single event"],
            ["Cage in open water", "Net condition, fouling, feed loss through the net and external water quality", "Site hydrodynamics and permitted holding capacity", "Crowding within the net and removal by pump or brail"],
            ["Flow-through raceway", "Maintaining flow, cleaning quiescent zones and monitoring outlet water", "Available flow and the oxygen it can deliver", "Sequential removal along the raceway with simple grading"],
            ["Recirculating system", "Performance of each unit process and continuity of power", "The first unit process to saturate, commonly gas exchange or nitrogen removal", "Controlled partial harvests with purging before removal"],
            ["Biofloc unit", "Carbon to nitrogen balance, floc volume and continuous mixing", "Aeration capacity and stability of the microbial community", "Harvest planned around maintaining community stability"],
          ],
          basis:
            "A qualitative comparison of how grow-out management differs by system family, intended to orient practice rather than to rank systems. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Feed to appetite, not to the spreadsheet",
          value:
            "Calculated rations are estimates built on an estimated biomass. Where the calculation and the observed feeding response disagree, the animals are the better instrument. Persistent disagreement is itself information: it usually means the biomass estimate has drifted or that a water quality parameter is suppressing intake.",
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
            "The daily rhythm of grow-out is short and repetitive, and its value lies in being done the same way every day so that deviations stand out. Observation before feeding, feeding in several meals with attention to response, water measurement at fixed times, mortality collection and recording, and a check of mechanical equipment. None of this is difficult; the discipline is in doing it when nothing appears to be wrong.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Observe each unit before the first feed, noting swimming behaviour, distribution and any surface activity.",
            "Measure the parameters that change fastest at the times they are most likely to be extreme, which for oxygen in ponds is close to dawn.",
            "Deliver the ration in multiple meals, watching response and stopping when interest falls rather than completing the calculated amount.",
            "Collect and record mortalities daily, examining rather than merely counting them.",
            "Check aeration, pumps and alarms on a fixed daily round, and verify that standby equipment starts rather than assuming it will.",
            "Sample biomass at a fixed interval, and update the feeding calculation and the harvest projection from the result.",
            "Compare cumulative feed used against cumulative growth at each sampling, and investigate any adverse movement in conversion.",
            "Review the projected harvest date against the market window at each sampling, while there is still time to influence it.",
          ],
        },
        {
          kind: "text",
          value:
            "Harvest deserves as much preparation as stocking. Feed is withdrawn for a period appropriate to the species and temperature so that the gut is empty, which improves both handling survival for retained stock and product quality for harvested stock. Crowding should be brief, water quality within the crowded volume monitored, and chilling available immediately. Product quality is decided in the final hour of a cycle that took months.",
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
            "The peak load problem defines grow-out engineering. Oxygen demand, ammonia production and solids output all scale with feed input, which scales with biomass, which is maximal immediately before harvest. If the warm season coincides with that period, the demand peak meets the point of lowest oxygen solubility and highest metabolic rate. Support systems sized on cycle-average conditions are adequate for most of the cycle and inadequate exactly when a failure is most costly.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Waste output follows feed input",
          value:
            "The fraction of feed that does not become growth leaves the animal as solids and dissolved nitrogen and consumes oxygen as it degrades. Any increase in feeding rate is therefore simultaneously an increase in treatment demand, and the two cannot be planned separately.",
        },
        {
          kind: "text",
          value:
            "Density has effects beyond capacity. Within a species' tolerance, moderate density can improve feeding behaviour and reduce aggression in some species, while excessive density suppresses growth, widens size variation and raises disease transmission risk through contact and stress. The commercially optimal density is rarely the maximum the treatment system can support, because growth rate and conversion both deteriorate before mortality does.",
        },
        {
          kind: "text",
          value:
            "In pond systems the plankton community is both an asset and a hazard. Photosynthesis supplies oxygen during daylight and consumes it at night, so a dense bloom produces a wide daily oxygen swing and a corresponding pH swing that shifts the ammonia equilibrium. A bloom that crashes removes the oxygen source and adds a large decomposing organic load at the same time. Managing pond grow-out is in large part managing that community.",
        },
        {
          kind: "text",
          value:
            "Effluent is the consideration that increasingly constrains expansion. Solids and dissolved nutrients leaving a farm are a regulatory matter, a neighbour relations matter and, where the discharge can return to the intake, a self-inflicted water quality problem. Settlement, constructed wetlands, integrated extractive species and solids recovery for land application are all in use, and provision for them belongs in the original design rather than in a later retrofit.",
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
            "Maintain a current biomass figure for every unit, updated by sampling rather than carried forward by assumption.",
            "Increase aeration and treatment capacity ahead of the rising load rather than in response to a deteriorating reading.",
            "Record feed delivered per unit per day, and reconcile it against growth at every sampling so that conversion is tracked continuously.",
            "Treat a fall in appetite as a water quality or health signal first and a feed quality question second.",
            "Store feed in dry, cool, pest-proof conditions and use it in rotation, since a well-managed cycle can be undone by degraded feed.",
            "Keep units separated by batch where the system allows it, so that a health problem is contained and records remain attributable.",
            "Define in advance the readings and observations that trigger emergency aeration, water exchange or emergency harvest, so the decision is a lookup rather than a judgement made under pressure.",
            "Close every batch with a reconciliation against the plan, and revise the assumptions rather than the recollection of them.",
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
          caption: "Grow-out problems and the management cause most often behind them",
          columns: ["Problem", "Usual underlying cause"],
          rows: [
            ["Feed conversion drifting upward through the cycle", "Overfeeding against an overestimated biomass, feed wastage, or a sub-clinical health problem"],
            ["Growth plateaus in the second half of the cycle", "Density or treatment capacity limiting intake, or temperature moving outside the optimum range"],
            ["Night-time or dawn mortality in ponds", "Oxygen depletion following a dense bloom or a bloom crash, against aeration sized for daytime conditions"],
            ["Size variation widening towards harvest", "Uneven feed distribution, competition at density, or grading omitted at the nursery stage"],
            ["Repeated disease events later in the cycle", "Chronic stress from sustained marginal water quality, compounded by handling"],
            ["Harvest weight reached later than planned", "Growth curve assumed at a temperature the site did not deliver, or feeding interrupted by water quality"],
            ["Off-flavour in harvested product", "Compounds produced by the microbial community accumulating in flesh, with purging omitted or too short"],
            ["Total loss during a power interruption", "Buffer time overestimated and standby capacity untested at peak biomass"],
          ],
          basis:
            "Failure patterns commonly reported in grow-out practice across system types, presented as diagnostic starting points. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Size every support system against projected peak biomass and peak feed load rather than against the cycle average.",
            "Stock a counted, graded population and record the number, mean weight and origin as the basis of the batch record.",
            "Sample on a fixed schedule with a consistent method, so that growth data are comparable within and between cycles.",
            "Feed in several meals, observe response at each, and record what was actually consumed rather than what was scheduled.",
            "Test standby aeration and alarms under load at the point in the cycle when they would actually be needed.",
            "Investigate the first adverse movement in feed conversion rather than waiting for a clinical sign.",
            "Prepare harvest logistics, chilling and buyer arrangements before the batch reaches size, not once it has.",
            "Reconcile each completed cycle against its plan in writing, and carry the corrected assumptions into the next one.",
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
            "The central optimisation in grow-out is the timing of harvest. Growth in absolute terms often continues to increase for some time after the specific growth rate has begun to fall, while feed conversion deteriorates steadily with size and the standing biomass approaches the system's limit. Holding stock longer therefore buys additional weight at a rising marginal feed cost, an increasing risk of loss, and the opportunity cost of a unit that cannot be restocked. The economically optimal harvest point is generally earlier than the biologically maximal one, and it moves with feed price and market price.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Growth curves are site-specific",
          value:
            "Production plans routinely adopt a growth curve from a supplier or from published guidance. Because that curve embeds a temperature regime, a feed, a density and a management standard, applying it to a different site is an engineering assumption rather than a prediction, and it should be replaced by the farm's own data as soon as a cycle has been completed.",
        },
        {
          kind: "text",
          value:
            "Partial harvesting is the other advanced technique worth deliberate consideration. Removing the largest individuals periodically relieves the biomass pressure on the system, reduces competition for the remainder, spreads revenue across the year and can lift overall production from the same infrastructure. It requires reliable grading during harvest, careful handling of retained stock and an inventory system capable of tracking a population that changes in both number and size distribution at each event.",
        },
        {
          kind: "text",
          value:
            "Continuous monitoring and automated feeding change the character of the work rather than removing it. Instrumentation shortens the interval between a deviation and its detection, which is precisely the interval in which a late-cycle failure becomes total. Its value depends on the alarms being trusted, the sensors being calibrated and somebody being available to act, and a system that generates alerts nobody responds to is worse than none because it displaces the manual round it replaced.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Grow-out consumes most of the feed and holds most of the biomass, so margin is decided here more than anywhere else.",
    "Standing biomass drives feed ration, oxygen demand, nitrogen load and solids output simultaneously, and an inaccurate estimate corrupts all four.",
    "Support systems must be sized for the peak that occurs immediately before harvest, not for the cycle average.",
    "Feed conversion is a whole-system indicator and usually the earliest quantitative sign that something has gone wrong.",
    "The commercially optimal stocking density is lower than the maximum the treatment system can support, because growth and conversion deteriorate before mortality does.",
    "The economically optimal harvest point is generally earlier than the biologically maximal one, and it shifts with feed and market prices.",
  ],
  related: ["fundamentals", "nursery", "feed-nutrition", "harvest"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Technical material on grow-out practice, feed management and responsible aquaculture production.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center",
      description: "Extension publications on feeding management, pond grow-out operation and harvest handling.",
    },
    {
      organisation: "National Fisheries Development Board, India",
      description: "Programme guidance on grow-out production practice and productivity improvement in Indian aquaculture.",
    },
  ],
};
