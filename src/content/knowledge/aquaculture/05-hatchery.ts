import type { KnowledgeArea } from "../types";

export const hatchery: KnowledgeArea = {
  number: "05",
  slug: "hatchery",
  title: "Hatchery and Seed Production",
  navSummary: "Broodstock, spawning, incubation and larval rearing — the stage where survival is decided.",
  summary:
    "A hatchery takes mature animals and returns fingerlings of known origin, known health status and predictable quality. It is the most technically demanding part of aquaculture because the animals are smallest, most fragile and least tolerant of error at exactly the point where the greatest number of interventions is required. Everything a grow-out farm can achieve is bounded by the seed the hatchery supplied.",
  difficulty: "advanced",
  topics: ["production", "biology", "operations"],
  tags: ["broodstock", "induced spawning", "incubation", "larval rearing", "live feed", "weaning"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-23",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "A hatchery conditions parent fish until they are ready to breed, collects and fertilises the eggs, hatches them, and feeds the larvae through the few weeks in which most of them would otherwise die. It sells the survivors as fingerlings. Success depends far more on broodstock condition and water stability than on any single technique.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Hatchery work divides into four operations that are usually run as separate physical areas: broodstock holding and conditioning, spawning and fertilisation, incubation of eggs, and larval rearing through to a size that can be handled and transported. Each has different water requirements, different biosecurity risk and different staffing rhythm, and combining them in one space is the source of a great many hatchery problems.",
        },
        {
          kind: "text",
          value:
            "The biology varies enormously between groups. Indian major carps do not spawn spontaneously in still water and are induced hormonally, releasing large numbers of small eggs that hatch within a day or so at warm temperature. Tilapia are mouth-brooders that spawn readily and repeatedly, so the challenge is collection and synchronisation rather than induction. Marine finfish produce very small larvae with tiny mouths that require sequential live feeds. Penaeid shrimp pass through distinct naupliar, protozoeal, mysis and postlarval stages, each with a different feeding requirement. A hatchery is built for one of these patterns and adapts poorly to another.",
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
            "Seed quality sets the ceiling for everything downstream. Fingerlings from poorly conditioned broodstock, or from a larval run that survived on marginal nutrition, carry deficits that no grow-out management corrects: uneven size, deformities, poor stress tolerance and reduced disease resistance. The grow-out farm sees these as its own problems, several months after the decision that caused them.",
        },
        {
          kind: "text",
          value:
            "The hatchery is also the principal entry point for pathogens into a production chain. Seed moves between regions in large numbers and small volumes of water, and an infection established in a hatchery is distributed efficiently across every farm it supplies. This is why hatchery biosecurity is disproportionately important relative to the biomass involved.",
        },
        {
          kind: "text",
          value:
            "Finally, a reliable hatchery sector is what allows farms to plan. Stocking to a calendar, matching harvest to a market window, and running consistent trials all depend on seed arriving in the quantity and at the time agreed.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Broodstock conditioning" },
        {
          kind: "text",
          value:
            "Gonad development is fuelled by nutrition and triggered by environmental cues. Conditioning means supplying a diet adequate in protein, essential fatty acids, vitamins and pigments over the weeks or months during which gametes are formed, while manipulating temperature, photoperiod and, for some species, water flow or a simulated rainfall event. Egg quality is largely determined during this period, and it cannot be improved afterwards by any technique applied at spawning.",
        },
        { kind: "subheading", value: "Induced spawning" },
        {
          kind: "text",
          value:
            "Many cultured species will not complete final oocyte maturation and ovulation under captive conditions. Hormonal induction supplies the signal that captivity withholds, using pituitary extract or synthetic analogues, typically in a priming and resolving dose sequence. Induction only works on fish that are already fully conditioned; applied to unready broodstock it produces poor ovulation, low fertilisation and broodstock mortality.",
        },
        { kind: "subheading", value: "Incubation" },
        {
          kind: "text",
          value:
            "Fertilised eggs need oxygen, gentle movement to prevent settling and fungal colonisation, and water free of silt and pathogens. Development rate is governed by temperature, which is why hatcheries think in degree-days rather than in calendar days. Incubation equipment differs by egg type: buoyant marine eggs are held in gently upwelling incubators, adhesive eggs on substrates or after de-adhesion treatment, and the semi-buoyant eggs of carps in circular hatching jars or pools that keep them in suspension.",
        },
        { kind: "subheading", value: "Larval rearing and first feeding" },
        {
          kind: "text",
          value:
            "After hatching, the larva lives on its yolk reserve for a period set by temperature. The transition to exogenous feeding is the critical window of the entire hatchery: the larva must find, capture and digest food before the reserve is exhausted, using an incompletely developed digestive system and, in many species, a mouth too small for any formulated particle. Missing this window produces a cohort that never recovers even if feeding is corrected afterwards.",
        },
        { kind: "subheading", value: "Live feed" },
        {
          kind: "text",
          value:
            "Where larvae cannot take formulated diets, the hatchery must culture their food. Microalgae are grown both as feed for rotifers and to condition larval tank water. Rotifers serve as the first prey for small-mouthed larvae, and brine shrimp nauplii follow as the larvae grow. Both are nutritionally incomplete as cultured and must be enriched before feeding, because the larva ultimately receives whatever the prey organism contained.",
        },
      ],
    },
    {
      id: "technical-fundamentals",
      heading: "Technical fundamentals",
      blocks: [
        {
          kind: "flow",
          caption: "The broodstock-to-fingerling chain. Each stage has its own water regime and its own failure mode, and quality lost at any stage cannot be recovered later.",
          steps: [
            { label: "Broodstock selection", detail: "Mature animals chosen for size, condition and documented origin, held separately by sex where the species and method require it, and screened for health status." },
            { label: "Conditioning", detail: "Weeks to months of controlled nutrition, temperature and photoperiod during which gonads develop and egg quality is effectively determined." },
            { label: "Readiness assessment", detail: "Examination of external condition and, where appropriate, of oocytes to confirm that the animals will respond to induction rather than be damaged by it." },
            { label: "Induction and spawning", detail: "Hormonal induction where the species requires it, followed by natural spawning in a controlled enclosure or by stripping and dry fertilisation." },
            { label: "Fertilisation", detail: "Gametes combined under conditions that preserve sperm motility, then water-hardened before any handling." },
            { label: "Incubation", detail: "Eggs held in flowing, well-oxygenated, low-silt water with gentle movement, with dead eggs removed to limit fungal spread." },
            { label: "Hatching and yolk-sac stage", detail: "Larvae supported entirely by internal reserves, requiring stable water and minimal disturbance rather than feeding." },
            { label: "First feeding", detail: "Introduction of live or formulated feed before yolk exhaustion, at a density and particle size the larva can actually capture." },
            { label: "Larval rearing", detail: "Progressive feeding, grading where cannibalism is a risk, and steadily increasing water exchange as biomass and waste rise." },
            { label: "Weaning", detail: "Gradual replacement of live feed with formulated diets through a co-feeding period rather than an abrupt switch." },
            { label: "Fry and fingerling rearing", detail: "Growth to a size robust enough to count, grade and transport, with conditioning towards the water the receiving farm will provide." },
            { label: "Health screening and dispatch", detail: "Sampling for pathogens and deformities, counting, conditioning by short feed withdrawal, and packing for transport under controlled oxygen and temperature." },
          ],
        },
        {
          kind: "formula",
          name: "Degree-days to a developmental milestone",
          expression: "DD = T x d",
          terms: [
            { symbol: "DD", meaning: "Accumulated thermal units required to reach a developmental stage", unit: "degree-days" },
            { symbol: "T", meaning: "Mean water temperature over the period, expressed above the species' developmental threshold", unit: "degrees Celsius" },
            { symbol: "d", meaning: "Elapsed time", unit: "days" },
          ],
          example:
            "Consider a hypothetical batch whose hatching requirement is 30 degree-days above threshold. Held at an effective 10 degrees it hatches in about three days; held at an effective 6 degrees the same batch takes about five. Planning staffing and tank availability from calendar days alone therefore fails whenever the incubation temperature moves.",
          limitations:
            "The linear relationship holds only within the species' viable developmental range and breaks down near its limits, and thresholds differ between species and sometimes between strains. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Fertilisation rate",
          expression: "FR = 100 x Ef / Et",
          terms: [
            { symbol: "FR", meaning: "Proportion of eggs successfully fertilised", unit: "%" },
            { symbol: "Ef", meaning: "Number of eggs showing normal development at the assessment point", unit: "count" },
            { symbol: "Et", meaning: "Total number of eggs in the sample", unit: "count" },
          ],
          example:
            "Consider a hypothetical sample of 400 eggs of which 340 are developing normally at the first cleavage check. The fertilisation rate is 85 per cent, and comparing that figure across spawns from the same broodstock group is what makes it informative.",
          limitations:
            "The result depends heavily on when the assessment is made, since early mortality is easily mistaken for failed fertilisation, and on whether the sample was drawn representatively. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Hatchery stages, their dominant requirement and their characteristic failure",
          columns: ["Stage", "Dominant requirement", "Characteristic failure"],
          rows: [
            ["Broodstock conditioning", "Nutrition, temperature and photoperiod control over a sustained period", "Poor egg quality that becomes visible only at first feeding"],
            ["Induction and spawning", "Correct assessment of readiness and careful gamete handling", "Low ovulation response, poor fertilisation, or injury to broodstock"],
            ["Incubation", "Stable temperature, oxygen supply and silt-free water with gentle movement", "Fungal colonisation spreading from dead eggs through the batch"],
            ["Yolk-sac stage", "Stability and minimal disturbance", "Handling or water quality shock during a stage with no compensatory capacity"],
            ["First feeding", "Correct prey size, density and timing relative to yolk exhaustion", "A cohort that never starts feeding and declines steadily thereafter"],
            ["Live feed production", "Reliable microalgae supply and consistent enrichment", "Culture crash removing the feed supply at the moment it is indispensable"],
            ["Weaning", "Gradual co-feeding transition", "Growth check and size divergence following an abrupt switch"],
            ["Fingerling rearing and dispatch", "Grading, health screening and conditioning for transport", "Losses in transit or shortly after arrival at the receiving farm"],
          ],
          basis:
            "A structural summary of hatchery stages drawn from established hatchery practice across species groups. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Live feed is a parallel farm",
          value:
            "A marine or crustacean hatchery is effectively two production operations running simultaneously: the larvae, and the algae and zooplankton that feed them. The live feed operation has its own staffing, its own contamination risks and its own failure modes, and its collapse is one of the commonest causes of an otherwise well-run larval run being lost.",
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
            "A hatchery cycle is planned backwards from the date the receiving farms need fingerlings, through the rearing period, the larval period and the incubation period, to the date broodstock conditioning must begin. Because conditioning is the longest and least reversible stage, that back-calculation determines almost the entire annual calendar of the facility.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Fix the dispatch window from the farms being supplied, and work backwards through each stage using the species' thermal requirements at the temperatures the hatchery will actually hold.",
            "Confirm broodstock numbers, sex ratio and condition well before the conditioning period is due to start, allowing for animals that will not come into condition.",
            "Begin live feed cultures far enough in advance that a crash can be recovered from before larvae depend on them, and maintain independent backup cultures.",
            "Prepare and disinfect incubation and larval systems, then run them on water for long enough to prove stability before any eggs arrive.",
            "Assess broodstock readiness individually rather than treating a holding tank as a uniform group.",
            "Induce and spawn in batches rather than all at once, so that a failure affects part of the season and not all of it.",
            "Sample and record fertilisation, hatching and survival at fixed points so that a poor outcome can be traced to a stage.",
            "Grade, screen and condition fingerlings before dispatch, and record which broodstock group and which run each consignment came from.",
          ],
        },
        {
          kind: "text",
          value:
            "Record keeping in a hatchery has a different purpose from record keeping in grow-out. Because a single conditioning decision affects a whole season, the value of the records lies in comparing seasons, and that requires that the same measurements be taken at the same developmental points every time.",
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
            "Water treatment for a hatchery differs from grow-out treatment in emphasis. The load is small, so capacity is rarely the issue; stability and cleanliness are. Incoming water is usually filtered to a fine particle size and disinfected, because larvae have essentially no immune capacity in the early stages and cannot be treated once infected. Temperature control needs to be tight, since development rate and staffing schedules both follow from it, and it must be tight in the sense of low variability rather than merely correct on average.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Egg quality is set before spawning",
          value:
            "The yolk reserve, its lipid and vitamin composition, and the larva's capacity to survive to first feeding are all determined during broodstock conditioning. No incubation technique, water treatment or feeding protocol applied afterwards can compensate for a poorly conditioned parent stock.",
        },
        {
          kind: "text",
          value:
            "Larval tank hydraulics require unusual care. Flow must distribute feed and remove waste while remaining gentle enough that weak-swimming larvae are not carried against screens or trapped in surface films. Screens must be sized to retain larvae and prey without blinding, and they need attention on a schedule measured in hours rather than days. Surface skimming is often necessary in marine larval rearing, where an oily surface film interferes with initial swim bladder inflation.",
        },
        {
          kind: "text",
          value:
            "Genetic management is a consideration that becomes visible only over years. A hatchery working from a small number of parents, or repeatedly using the same easily spawned individuals, narrows the genetic base of every farm it supplies. Maintaining effective population size through structured mating and periodic introduction of unrelated stock is part of hatchery operation, not an academic concern.",
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
            "Separate the hatchery physically into broodstock, incubation, larval and live feed zones, with distinct equipment and controlled movement between them.",
            "Treat and monitor incoming water as a critical process rather than as a utility, since the larval stages cannot tolerate what later stages shrug off.",
            "Keep broodstock records by individual or by group, including origin, spawning history and condition, so that performance can be attributed.",
            "Maintain redundant live feed cultures in separate rooms, because a single contaminated culture room can end a season.",
            "Standardise assessment points across runs so that comparisons between them mean something.",
            "Handle larvae as little as possible, and design procedures so that necessary handling is brief and done in water.",
            "Screen for pathogens before dispatch and keep the results with the consignment record, because the receiving farm inherits whatever leaves the hatchery.",
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
          caption: "Hatchery failures and the stage at which the cause usually lies",
          columns: ["Observed outcome", "Stage where the cause usually lies"],
          rows: [
            ["Poor ovulation response to induction", "Conditioning incomplete, or readiness assessed on the group rather than the individual"],
            ["Low fertilisation rate", "Gamete handling, sperm quality, or excessive delay between stripping and mixing"],
            ["Fungal loss spreading through an incubator", "Dead eggs not removed, silt in the incubation water, or insufficient water movement"],
            ["Larvae fail to begin feeding", "First feed offered late relative to yolk exhaustion, at the wrong particle size, or at too low a prey density"],
            ["Larvae feed but decline steadily", "Live feed not enriched, so essential nutrients are absent despite apparently adequate intake"],
            ["Growth check and size divergence at weaning", "Transition to formulated diet made abruptly rather than through a co-feeding period"],
            ["Deformities appearing in a proportion of fingerlings", "Broodstock nutrition, incubation temperature outside the viable range, or a narrow genetic base"],
            ["Mortality shortly after arrival at the receiving farm", "Conditioning, packing density or acclimatisation at the destination, often in combination"],
          ],
          basis:
            "Failure patterns commonly documented in hatchery practice across species groups, presented to direct investigation towards the responsible stage. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Start broodstock conditioning early enough that the schedule tolerates animals that fail to respond, rather than depending on a full response.",
            "Commission and run larval systems on water before the season, and confirm that temperature and water quality hold steady under continuous operation.",
            "Establish live feed cultures ahead of need and keep isolated backup lines, treating culture room hygiene with the same discipline as larval hygiene.",
            "Overlap live and formulated feeds during weaning and extend the overlap rather than shortening it when the schedule is under pressure.",
            "Sample survival and size at fixed developmental points, and keep the same protocol between runs so the data set accumulates value.",
            "Screen broodstock and outgoing seed for the pathogens relevant to the species and region, and retain the records.",
            "Manage broodstock genetics deliberately, rotating and refreshing parent stock rather than relying on the individuals that spawn most conveniently.",
            "Pack and transport fingerlings with controlled temperature and oxygen, and agree an acclimatisation procedure with the receiving farm rather than assuming one.",
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
            "The microbial community of a larval rearing system is increasingly understood as a manageable variable rather than a contaminant to be eliminated. Aggressive disinfection removes competition and can leave a system open to rapid colonisation by opportunists when any organic load appears. Approaches based on establishing a stable, largely non-opportunistic community — through matured water, controlled organic loading, or the deliberate use of beneficial strains — aim at resilience rather than sterility.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Replacing live feed",
          value:
            "Microdiet formulations intended to reduce or replace live feed dependence continue to develop, and their success varies considerably between species and larval stages. Digestive enzyme development in early larvae remains a limiting factor, and results for one species should not be assumed to transfer to another.",
        },
        {
          kind: "text",
          value:
            "Broodstock management is the other advanced frontier. Photothermal manipulation to shift or extend spawning seasons, cryopreservation of milt to widen the available genetic pool, and structured family-based breeding programmes all change what a hatchery can offer. Each also raises the technical demand on the facility, and a hatchery that has not yet stabilised its basic survival through first feeding rarely benefits from adding them.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Egg quality is determined during broodstock conditioning and cannot be improved by anything done after spawning.",
    "Induced spawning supplies a signal that captivity withholds; it does not substitute for readiness in the animal.",
    "Development is governed by accumulated temperature, so hatchery schedules must be built in degree-days rather than calendar days.",
    "First feeding is the critical window of the whole hatchery, and a cohort that misses it does not recover.",
    "Where live feed is required, the hatchery runs a second production operation whose failure ends the larval run.",
    "Hatcheries distribute both quality and pathogens across every farm they supply, which makes their biosecurity disproportionately important.",
  ],
  related: ["breeding-genetics", "nursery", "species", "biosecurity"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Hatchery manuals and technical papers covering broodstock management, larval rearing and live feed production.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute protocols and extension material on induced breeding and seed production of Indian cultured species.",
    },
    {
      organisation: "World Organisation for Animal Health",
      description: "Standards on health surveillance and certification relevant to the movement of live aquatic animals and seed.",
    },
  ],
};
