import type { KnowledgeArea } from "../types";

export const plantHealth: KnowledgeArea = {
  number: "20",
  slug: "plant-health",
  title: "Plant Health and Disease",
  navSummary: "Reading symptoms, separating abiotic from biotic causes, and protecting the root zone.",
  summary:
    "Plant health in a soilless system is mostly a diagnostic discipline. The same yellow leaf can be a nutrient availability problem, a root oxygen problem, a pathogen or a transport failure, and the four are managed in completely different ways. This area sets out how to read a symptom pattern before deciding what, if anything, to change.",
  difficulty: "intermediate",
  topics: ["health", "biology", "production", "operations"],
  tags: ["diagnosis", "deficiency", "root disease", "physiological disorder", "abiotic stress", "sanitation"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-24",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Most crop problems in hydroponics are not diseases. They are the root zone, the climate or the solution chemistry expressing themselves on the leaf. Work out what changed, where on the plant the symptom sits, which leaves are affected and how fast it spread, and the list of possible causes usually collapses to one or two before anything is applied to the crop.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "A hydroponic crop has no soil buffer between a management decision and the root, so it reports problems quickly and clearly. That speed is useful only if the report is read correctly. A grower who treats every discoloured leaf as a deficiency will dose into a solution that is already adequate; a grower who treats every wilting plant as a disease will apply an intervention to what is actually a pump fault or a warm reservoir.",
        },
        {
          kind: "text",
          value:
            "Plant health work therefore begins with classification rather than treatment. The first question is not what to apply but whether the cause is abiotic — something in the environment, the water, the solution or the equipment — or biotic, meaning a living organism is involved. Abiotic causes are far more common in a well-run enclosed system, and they are the ones the grower can correct directly.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "This area does not prescribe treatments",
          value:
            "No product, dose or chemical intervention is recommended anywhere in this article. Any chemical application must comply with local registration and label law for the crop and the site, and the decision to make one should be taken with a qualified agronomist who has seen the crop.",
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
            "A recirculating system shares its water, and therefore shares whatever is in it. A root pathogen that establishes in one gully can be circulating through the whole house within a single irrigation cycle. The same connectivity that makes nutrient control precise makes a root-zone problem a whole-farm problem rather than a local one.",
        },
        {
          kind: "text",
          value:
            "The cost of misdiagnosis is also asymmetric. Correcting an environmental cause is usually cheap and reversible. Applying an unnecessary intervention costs money, may harm beneficial organisms already present, can leave residues that affect marketability, and — most damaging — leaves the real cause running while the grower believes it has been addressed. Diagnosis is the part of plant health with the highest return per hour spent.",
        },
        {
          kind: "text",
          value:
            "There is a third reason, which is that symptoms lag. By the time a deficiency is visible on a leaf, the plant has been short of that element for some time and the growth already lost cannot be recovered. Routine monitoring of solution chemistry, root appearance and climate is what turns plant health from reaction into prevention.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "The four diagnostic questions" },
        {
          kind: "text",
          value:
            "Almost every field diagnosis can be narrowed by four questions asked in order. What changed, and when? Where on the plant is the symptom — old leaves, new leaves, stem, root, fruit? Which plants are affected, and is the pattern in the house random or structured? How fast did it appear and how fast is it spreading? The answers discriminate between the major causes more reliably than the appearance of any single leaf.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "What changed. A new nutrient batch, a different water source, a climate setpoint edit, a pump repair, a new plant delivery or a weather swing almost always precedes a new symptom. Establish the timeline before examining the plant.",
            "Where on the plant. Symptom position separates mobile from immobile nutrient problems, and separates root-driven from canopy-driven causes.",
            "Which plants. A random scatter suggests a biological cause or individual plant variation. A structured pattern — one gully, one bench, the end of a row, plants nearest a vent or a lamp — points at the system or the environment.",
            "How fast. Abiotic causes usually appear across many plants at once and stop spreading once corrected. Biotic causes usually start in a focus and expand outward over days.",
          ],
        },
        { kind: "subheading", value: "Abiotic and biotic" },
        {
          kind: "text",
          value:
            "An abiotic cause is a non-living one: a nutrient imbalance, a pH excursion, root-zone temperature, low root oxygen, excessive light, low humidity, a salinity problem in the source water, or physical damage. A biotic cause involves an organism — a fungus, an oomycete, a bacterium, a virus or a pest. The distinction matters because abiotic problems do not spread from plant to plant, while biotic ones generally do.",
        },
        {
          kind: "text",
          value:
            "The two also interact. Weak, stressed roots are colonised more easily than healthy ones, so an abiotic problem frequently becomes the opening for a biotic one. Correcting the underlying condition is therefore part of managing disease, not an alternative to it.",
        },
        { kind: "subheading", value: "Mobile and immobile nutrients" },
        {
          kind: "text",
          value:
            "When an element is in short supply, a plant that can move it internally will withdraw it from older tissue and send it to new growth. Elements that move readily in the phloem — nitrogen, phosphorus, potassium and magnesium among them — therefore show shortage on the oldest leaves first. Elements that move poorly or not at all once deposited — calcium, iron, boron, and in practice most micronutrients — show shortage on the youngest tissue, because the plant cannot recycle what it already placed.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Symptom position is the most useful single clue",
          value:
            "Old-leaf symptoms and new-leaf symptoms point at different halves of the periodic table. Recording which leaves are affected costs nothing and removes half the candidate causes immediately.",
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
            "Two quantitative relationships explain a large share of the disorders seen in protected crops. The first is that many nutrients are delivered by the transpiration stream rather than by concentration alone. The second is that root-zone oxygen availability falls as water warms, at exactly the time root demand for oxygen rises.",
        },
        {
          kind: "formula",
          name: "Mass flow delivery of a transpiration-carried element",
          expression: "U = E x C",
          terms: [
            { symbol: "U", meaning: "Mass of the element delivered to the shoot over the interval", unit: "mg/plant" },
            { symbol: "E", meaning: "Transpiration volume over the interval", unit: "L/plant" },
            { symbol: "C", meaning: "Concentration of the element in solution reaching the root", unit: "mg/L" },
          ],
          example:
            "Consider a hypothetical crop in which transpiration halves on a humid, overcast afternoon while solution concentration is unchanged. Delivery of an element carried mainly by mass flow halves with it. The reservoir analysis still reads correct, and the plant still receives less — which is why a calcium disorder can appear in a solution that has never been short of calcium.",
          limitations:
            "This describes only the mass-flow component of uptake; actively transported ions do not follow it, and distribution within the plant depends on which organs are transpiring. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "text",
          value:
            "Calcium is the clearest case. It moves almost entirely in the xylem, driven by transpiration, and it does not redistribute afterwards. Organs that transpire little — an enclosed young leaf at the growing point, a developing fruit sheathed in its own cuticle — compete poorly for it against fully exposed mature leaves, whatever the reservoir contains.",
        },
        {
          kind: "formula",
          name: "Root-zone oxygen supply relative to demand",
          expression: "OSI = (DO x Q) / R",
          terms: [
            { symbol: "OSI", meaning: "Oxygen supply index; below one, demand exceeds delivery", unit: "dimensionless" },
            { symbol: "DO", meaning: "Dissolved oxygen concentration in the solution reaching the roots", unit: "mg/L" },
            { symbol: "Q", meaning: "Solution flow past the root mass over the interval", unit: "L/h" },
            { symbol: "R", meaning: "Oxygen consumption by roots and root-zone microbes over the interval", unit: "mg/h" },
          ],
          example:
            "Consider a hypothetical channel where solution temperature rises over a hot week. Saturation dissolved oxygen falls with temperature, while root and microbial respiration rise with it, so the numerator shrinks and the denominator grows at the same time. Nothing in the nutrient recipe changed, yet the root environment moved decisively in the direction that favours opportunistic root pathogens.",
          limitations:
            "Root respiration is not directly measurable in production and microbial demand varies with organic load, so this is a way of reasoning about direction rather than a number to compute. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        { kind: "subheading", value: "Deficiency and toxicity patterns" },
        {
          kind: "text",
          value:
            "A deficiency symptom is not proof that the element is absent from the solution. It is proof that the element did not arrive in the tissue. Availability at the prevailing pH, antagonism between ions competing for the same uptake pathway, root damage, and low transpiration can each produce a classic deficiency picture in a fully dosed solution. Confirming with a solution analysis and, where available, a tissue analysis is what separates a diagnosis from a guess.",
        },
        {
          kind: "table",
          caption: "Symptom position and the class of cause it points to",
          columns: ["Where the symptom appears", "What it suggests", "First checks"],
          rows: [
            ["Oldest leaves, general yellowing from the base up", "Shortage of a phloem-mobile element being withdrawn to new growth", "Solution analysis, dosing records, drain concentration"],
            ["Oldest leaves, yellowing between the veins", "A mobile element being remobilised while veins stay supplied", "Solution ratios and any recent recipe change"],
            ["Youngest leaves, interveinal yellowing with green veins", "An immobile element unavailable at the current root-zone pH rather than absent", "Root-zone pH at the root, not only in the tank"],
            ["Growing point distorted, hooked or dying back", "Immobile element failing to reach low-transpiring tissue", "Humidity, air movement over the growing point, night conditions"],
            ["Leaf margins scorched on rapidly expanding leaves", "Transport limitation to the leaf edge during fast growth", "Climate at the growth flush, not the reservoir"],
            ["Uniform stunting with no colour change", "Root-zone condition, salinity or oxygen rather than a single element", "Root inspection, solution temperature, dissolved oxygen"],
            ["Fruit or head damage with healthy foliage", "Distribution within the plant, a source-sink problem", "Crop load, climate swings, irrigation pattern"],
          ],
          basis:
            "General horticultural diagnostic reasoning, presented as a starting point for investigation rather than as identification. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        { kind: "subheading", value: "Root disease" },
        {
          kind: "text",
          value:
            "Two groups of root pathogens dominate discussion in soilless production. Pythium species are oomycetes that produce motile zoospores in water and are therefore well suited to recirculating systems; they are widely associated with damping-off in propagation and with root rot in established crops. Fusarium species are true fungi, generally slower to express, and are associated with wilts and crown or root rots depending on the species and host.",
        },
        {
          kind: "text",
          value:
            "What matters operationally is that both are opportunists. They are strongly favoured by root-zone conditions the grower controls: warm solution, low dissolved oxygen, standing or stagnant water, accumulated organic debris, damaged roots from transplanting or handling, and plants already stressed by salinity or a climate extreme. A system held in good root-zone condition is a poor host; one held warm and stagnant is an invitation.",
        },
        {
          kind: "list",
          items: [
            "Solution temperature. Warm water carries less oxygen and accelerates both root respiration and pathogen activity.",
            "Dissolved oxygen and flow. Dead legs, low points, oversized gullies with too little slope and blocked emitters all create local zones with no exchange.",
            "Organic load. Dead root fragments, algae and spilled substrate feed microbial respiration and consume oxygen the crop needs.",
            "Root damage. Rough transplanting, a dried-out block, or roots crushed in a channel gives a pathogen an entry point that intact tissue does not.",
            "Inoculum entry. Incoming plants, untreated surface water, shared tools, footwear and standing water on floors are the routes by which an organism first arrives.",
          ],
        },
        { kind: "subheading", value: "Physiological disorders" },
        {
          kind: "text",
          value:
            "Tipburn in leafy crops and blossom-end rot in fruiting crops are the two disorders most often misread as deficiencies. Both are calcium-related, and in almost all cases neither is caused by a shortage of calcium in the nutrient solution. They are transport failures: calcium moves to where water moves, and the affected tissue is tissue that transpires very little.",
        },
        {
          kind: "text",
          value:
            "In a lettuce head, the inner leaves are enclosed by the outer ones. They sit in near-saturated air, transpire almost nothing, and are growing fast. Calcium follows the transpiration stream out to the exposed outer leaves instead, and the enclosed margin dies. The correction is environmental — air movement over the head, control of the humidity around the growing point, and moderation of the growth rate — not more calcium in the tank.",
        },
        {
          kind: "text",
          value:
            "Blossom-end rot follows the same logic in fruit. The distal end of a developing fruit is the furthest point from the vascular supply, the fruit has a low transpiration rate relative to leaves, and rapid expansion during a growth flush outruns delivery. Wide swings in irrigation, salinity or vapour pressure deficit make it worse because they interrupt the water flow that carries the calcium. Adding calcium to a solution that already holds enough does not repair a delivery route.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Calcium disorders are a transport problem, not a supply problem",
          value:
            "Tipburn and blossom-end rot appear in solutions with entirely adequate calcium. The variables that move them are humidity, air movement, root water uptake, growth rate and the stability of irrigation — not the concentration in the reservoir.",
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
            "A workable inspection routine is short enough to be done daily and structured enough to be comparable between days.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Walk the same route in the same order, so the comparison is between like and like.",
            "Look at roots on a fixed sample of plants. Healthy roots are typically firm and pale with visible white tips; browning, sliminess or an absence of new tips is a signal well before the canopy shows anything.",
            "Turn leaves over. Many problems, biotic and abiotic, present on the underside first.",
            "Record the position of any symptom on the plant and its position in the house, not just its appearance.",
            "Photograph anything new on the day it is seen, with a scale in frame, so progression can be judged later.",
            "Cross-check against the climate and irrigation logs for the preceding week before forming a hypothesis.",
            "Isolate and mark affected plants rather than removing them immediately, unless spread is the concern; a removed plant cannot be re-examined.",
          ],
        },
        {
          kind: "text",
          value:
            "Where a biotic cause is suspected and the decision matters commercially, laboratory identification is worth the delay. Symptoms overlap heavily between organisms, and between organisms and abiotic stress, and an intervention chosen against the wrong organism is simply a cost.",
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
            "Plant health sits at the boundary between biology and plumbing. Nearly every root-zone risk factor listed above is an engineering decision made earlier: channel slope, gully length, pipe sizing, reservoir siting and insulation, filtration, emitter selection, floor drainage and the presence or absence of a solution treatment step. A house designed with those in mind spends far less effort on disease than one that was not.",
        },
        {
          kind: "text",
          value:
            "Cultivar choice is the other structural lever. Resistance and tolerance vary widely between cultivars of the same crop, and susceptibility to physiological disorders such as tipburn is a well-known cultivar characteristic. Selecting for the conditions the site can actually hold is cheaper than trying to hold conditions a susceptible cultivar demands.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Sanitation targets the route, not the organism",
          value:
            "Cleaning between crops, restricting movement between zones and treating recirculated solution reduce the probability of introduction and the rate of spread. They do not make a system sterile, and a system that relies on being sterile will eventually fail.",
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
            "Diagnose before dosing. A change to the nutrient solution made on the basis of a leaf photograph is a guess with consequences.",
            "Keep root-zone temperature and dissolved oxygen on the daily record. They explain more disease than any other pair of numbers.",
            "Treat a structured pattern in the house as an engineering fault until proven otherwise.",
            "Separate propagation from production physically, and quarantine incoming plant material before it joins the crop.",
            "Log the intervention as well as the symptom, so that next season's diagnosis has a real history to work from.",
            "Escalate to a qualified agronomist and a diagnostic laboratory when the cause is unclear or the crop value is high, and follow local registration and label law for anything applied.",
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
          caption: "Frequently misread situations and what is usually going on",
          columns: ["What the grower sees", "Common misreading", "More likely explanation"],
          rows: [
            ["Interveinal yellowing on new leaves", "Iron missing from the solution", "Iron present but unavailable at the root-zone pH, or a damaged root system"],
            ["Wilting in the middle of a hot day, recovery by evening", "Root disease", "Transpiration demand briefly exceeding root water uptake"],
            ["Wilting that does not recover overnight", "Under-irrigation", "Root function lost — inspect roots and solution temperature first"],
            ["Leaf margin necrosis inside a lettuce head", "Calcium deficiency in the tank", "Calcium transport failure caused by low transpiration at the growing point"],
            ["Dark sunken end on developing fruit", "Calcium deficiency in the tank", "Delivery outrun by fruit expansion, worsened by irrigation or humidity swings"],
            ["Damping-off in propagation", "Bad seed", "Warm, wet, poorly ventilated propagation conditions favouring water-borne root pathogens"],
            ["One gully declining while the rest are fine", "A spreading disease", "Flow, slope or blockage in that gully — check the hydraulics before the biology"],
          ],
          basis:
            "Common diagnostic confusions in protected cultivation, offered to prompt further checking rather than to identify a cause. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
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
            "Establish what healthy looks like on this crop, at this site, in this season, before trying to recognise unhealthy.",
            "Inspect roots on a schedule rather than only when the canopy looks wrong.",
            "Hold solution temperature within the range the crop tolerates, and treat a rising trend as a health issue rather than a comfort issue.",
            "Remove dead root material, algae and crop debris promptly; organic load in the system is oxygen demand the crop has to compete with.",
            "Keep clean and dirty operations separate — tools, footwear, gloves, and the direction staff move through the house.",
            "Correct the underlying condition whenever an organism is found. An organism that arrived because the root zone was warm and stagnant will return to a root zone that is still warm and stagnant.",
            "Record every diagnosis, including the ones that turned out to be wrong.",
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
            "Beyond visual diagnosis, three areas repay attention. The first is analytical monitoring: comparing feed and drain solution analyses over time reveals which ions the crop is actually removing and which are accumulating, and it will often show a developing imbalance weeks before a leaf does. Tissue analysis adds the complementary view of what reached the plant rather than what was offered to it.",
        },
        {
          kind: "text",
          value:
            "The second is the microbial community of the root zone. A recirculating system is never sterile, and a stable, diverse root-zone community appears to make opportunistic colonisation harder. Approaches based on managing that community rather than eliminating it are an active area of work, and the practical implication today is modest: aggressive sterilisation of everything, all the time, is not obviously the optimal strategy.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Early detection without symptoms",
          value:
            "Work continues on detecting stress before it is visible — through imaging, transpiration behaviour, root-zone chemistry and volatile signals. These approaches are promising but are not a replacement for a competent grower walking the crop.",
        },
        {
          kind: "text",
          value:
            "The third is the deliberate use of climate as a health tool. Vapour pressure deficit, air movement and the difference between day and night temperature set the transpiration pattern, and the transpiration pattern determines how well immobile elements reach the tissue that needs them. Managing calcium disorders is, in practice, managing climate; managing root disease is, in practice, managing root-zone oxygen and temperature. Both are engineering problems dressed as biological ones.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Classify a problem as abiotic or biotic before doing anything else; in enclosed systems abiotic causes are far more common.",
    "Symptom position separates mobile from immobile nutrient problems — old leaves against new leaves is the single most informative observation.",
    "A structured pattern in the house points at hydraulics or environment; a random scatter points at biology.",
    "Pythium and Fusarium are opportunists favoured by warm, stagnant, low-oxygen root zones and damaged roots.",
    "Tipburn and blossom-end rot are calcium transport failures driven by transpiration, not shortages in the tank.",
    "Any chemical intervention must follow local registration and label law and be decided with a qualified agronomist.",
  ],
  related: ["root-zone", "nutrients", "climate-control", "pest-management"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Plant production and protection programme material covering crop health in protected cultivation.",
      url: "https://www.fao.org/plant-production-protection/en",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute and extension publications on horticultural crop disorders and plant pathology in Indian conditions.",
    },
    {
      organisation: "State agricultural universities and plant disease diagnostic laboratories in India",
      description: "Regional diagnostic services and guidance appropriate to local crops, climate and registered practice.",
    },
  ],
};
