import type { KnowledgeArea } from "../types";

export const aquaponics: KnowledgeArea = {
  number: "18",
  slug: "aquaponics",
  title: "Aquaponics",
  navSummary: "Coupling fish culture with hydroponic plant production so that dissolved waste becomes a crop.",
  summary:
    "Aquaponics joins a recirculating fish system to a soilless plant system, using bacteria to convert fish waste into a form plants can absorb. The nutrient recovery is real and the water economy is excellent, but the operator is running two crops with different optimum conditions on one body of water, and every decision is a compromise between them.",
  difficulty: "intermediate",
  topics: ["systems", "filtration", "sustainability", "production"],
  tags: ["nitrification", "hydroponics", "nutrient recovery", "coupled systems", "decoupled design", "plant fish ratio"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-19",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Fish produce waste that plants can use as fertiliser, but only after bacteria have converted it into the right chemical form. Aquaponics circulates the fish water through plant beds so that the plants take up those nutrients and return cleaner water to the fish. It saves water and produces two crops, but the fish, the bacteria and the plants each want slightly different conditions and you can only give the water one set.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Aquaponics is the integration of recirculating aquaculture with soilless plant production in a shared water circuit. Fish are fed, they excrete nitrogenous waste, a bacterial community converts that waste into nitrate, plants take up the nitrate along with other dissolved nutrients, and the water returns to the fish in better condition than it left. The plant bed is doing the work that a dedicated nitrogen removal stage would otherwise do, and producing a saleable crop in the process.",
        },
        {
          kind: "text",
          value:
            "The essential point is that this is not two systems sharing a building. It is one biological system with three living components — fish, bacteria and plants — each of which affects the other two through the water. Understanding aquaponics means holding all three in view at once, because an intervention that helps one commonly costs another.",
        },
        {
          kind: "text",
          value:
            "The bacterial community is the part most often overlooked and the part on which everything depends. Fish excrete ammonia, and plants take up nitrogen most readily as nitrate. The conversion between them is entirely microbial, so the nitrifying population is the hinge of the whole design rather than an auxiliary detail.",
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
            "In a conventional recirculating system, nitrate accumulates and is removed by water exchange or by a denitrification stage — in both cases at a cost, with nothing recovered. In aquaponics that same nitrate is the input to a second crop. The nutrient does not leave the farm as waste; it leaves as produce. That is a genuine structural improvement in resource use rather than a presentational one.",
        },
        {
          kind: "text",
          value:
            "Water consumption is the second reason. Because the loop is closed apart from evaporation, transpiration and sludge removal, a well-run aquaponic system uses a small fraction of the water that field horticulture would use for the same plant output. In water-constrained regions, and for production near urban markets where land is expensive and water is metered, that changes the economics.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Two crops, two skill sets",
          value:
            "Aquaponics requires competent fish husbandry and competent protected horticulture at the same time. Systems commonly underperform not because the concept fails but because the operator is strong in one discipline and improvising in the other. The weaker crop sets the return on the whole system.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "The nitrogen loop" },
        {
          kind: "text",
          value:
            "Everything in aquaponics follows one chain of conversions. Nitrogen enters as feed protein, is excreted by the fish as ammonia, is oxidised by bacteria first to nitrite and then to nitrate, and is taken up by plant roots. Each link has its own rate, and the slowest link determines what the system can carry. If the bacterial stage is undersized the fish are poisoned by their own ammonia; if the plant area is undersized nitrate accumulates and the recovery benefit disappears.",
        },
        {
          kind: "flow",
          caption:
            "The aquaponic nitrogen cycle. The loop closes, which is why a problem at any point appears everywhere.",
          steps: [
            { label: "Fish", detail: "Fed a formulated diet, the fish metabolise protein and excrete the surplus nitrogen across their gills." },
            { label: "Ammonia", detail: "Nitrogen enters the water chiefly as total ammonia, part of which is present in the un-ionised form that is toxic to fish." },
            { label: "Bacteria", detail: "Nitrifying bacteria on biofilter and root surfaces oxidise ammonia to nitrite and then nitrite to nitrate, consuming oxygen and alkalinity." },
            { label: "Nitrate", detail: "The stable end product accumulates in the water, tolerated by fish at far higher concentrations than ammonia and readily available to plants." },
            { label: "Plants", detail: "Roots take up nitrate together with phosphorus, potassium and micronutrients, building plant biomass from what would otherwise be waste." },
            { label: "Cleaner water", detail: "The flow leaving the plant beds carries a reduced nutrient load and returns towards the culture tanks." },
            { label: "Fish", detail: "The treated water re-enters the fish tanks, closing the loop, and the cycle begins again with the next feeding." },
          ],
        },
        { kind: "subheading", value: "The pH compromise" },
        {
          kind: "text",
          value:
            "Fish generally do best in water near neutral. Nitrifying bacteria are most active in slightly alkaline conditions. Plants absorb several essential micronutrients most readily in mildly acidic conditions, where those nutrients remain soluble. No single pH satisfies all three, so aquaponic systems are run at an intermediate value that suits none of them perfectly. Recognising this as an unavoidable compromise, rather than a problem to be solved, is a mark of understanding the system.",
        },
        { kind: "subheading", value: "Nutrient completeness" },
        {
          kind: "text",
          value:
            "Fish feed is formulated for fish, not for plants. It supplies nitrogen generously and phosphorus adequately, but potassium, calcium, iron and some micronutrients arrive in proportions below what a fruiting crop requires. Aquaponic systems therefore need supplementation of specific elements, chosen in forms that will not harm the fish. A system relying solely on fish waste will show classic deficiency symptoms in the plants regardless of how well the fish are doing.",
        },
        { kind: "subheading", value: "Coupled and decoupled arrangements" },
        {
          kind: "text",
          value:
            "In a coupled system one water body circulates continuously through both units, and every parameter is a shared compromise. In a decoupled system flow passes from fish to plants but not directly back, or returns only after conditioning, which allows each side to be managed nearer its own optimum at the cost of additional plumbing, control and a nutrient stream that must be managed rather than simply recirculated.",
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
            "The central design calculation in aquaponics is the balance between the nitrogen the fish system produces and the nitrogen the plant system can absorb. It is expressed most usefully as a feed rate per unit of plant growing area, because feed rather than fish biomass is what actually generates nutrient.",
        },
        {
          kind: "formula",
          name: "Feeding rate ratio",
          expression: "Fr = Fd / Ap",
          terms: [
            { symbol: "Fr", meaning: "Daily feed input per unit of plant growing area", unit: "g/m2/day" },
            { symbol: "Fd", meaning: "Daily feed delivered to the fish system", unit: "g/day" },
            { symbol: "Ap", meaning: "Plant growing area served by the circuit", unit: "m2" },
          ],
          example:
            "Consider a hypothetical system feeding 3,000 g of a formulated diet each day across 60 m2 of raft beds. The ratio is 50 g per square metre per day. If the crop is changed from leafy greens to a fruiting crop with a substantially higher nutrient demand, the same feed input now serves a hungrier plant population and the ratio must be reconsidered.",
          limitations:
            "The appropriate ratio changes with crop type and growth stage, with feed protein content, with temperature and with light availability, and it is a starting point for balancing rather than a specification. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Alkalinity consumed by nitrification",
          expression: "Ac = (Nox x Ka) - Up",
          terms: [
            { symbol: "Ac", meaning: "Alkalinity consumed over the period, expressed as calcium carbonate equivalent", unit: "g CaCO3" },
            { symbol: "Nox", meaning: "Mass of ammonia nitrogen oxidised to nitrate over the period", unit: "g N" },
            { symbol: "Ka", meaning: "Alkalinity consumed per unit of nitrogen oxidised, a stoichiometric coefficient", unit: "g CaCO3 per g N" },
            { symbol: "Up", meaning: "Plant uptake, which offsets a portion of that alkalinity demand and is treated as a correction term", unit: "g CaCO3" },
          ],
          example:
            "Consider a hypothetical system oxidising 100 g of ammonia nitrogen per day with an assumed stoichiometric coefficient of 7.1. Alkalinity demand is about 710 g of calcium carbonate equivalent daily, which must be replaced by base addition if pH is not to drift downward and eventually stall the nitrifying population.",
          limitations:
            "The coefficient is a stoichiometric idealisation, plant uptake and respiration both modify the net balance, and the choice of base used to replace alkalinity also determines which cation is added to the plants. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "The second relationship carries a useful design consequence. Since alkalinity must be replaced continuously, the base chosen to do it is also a nutrient dosing decision. Selecting calcium or potassium bases according to which element the crop is short of turns a routine pH correction into part of the plant nutrition programme.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        { kind: "subheading", value: "Hydroponic sub-systems" },
        {
          kind: "table",
          caption: "Plant production methods used in aquaponics and their working characteristics",
          columns: ["Method", "How it works", "Suits", "Main limitation"],
          rows: [
            ["Deep water culture", "Plants float on rafts with roots suspended in aerated flowing water", "Fast leafy greens and herbs", "Requires reliable root-zone aeration; poor support for tall crops"],
            ["Nutrient film technique", "A thin film of water runs along shallow channels past bare roots", "Compact leafy crops in high-density layouts", "Very little buffer; a short flow interruption damages roots"],
            ["Media bed", "Roots grow in inert gravel or expanded clay, flooded and drained", "Mixed and fruiting crops in smaller systems", "Media clogs with solids over time and is heavy to service"],
            ["Vertical or tower culture", "Water trickles down through stacked planting positions", "Small crops where floor area is expensive", "Uneven nutrient and water distribution down the tower"],
            ["Wicking bed", "Water is drawn upward into a growing medium by capillary action", "Root crops and plants that dislike saturated roots", "Isolated from the loop, so it removes little nutrient"],
          ],
          basis:
            "A qualitative comparison of hydroponic methods as used in aquaponic circuits rather than a performance ranking. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        { kind: "subheading", value: "Solids handling" },
        {
          kind: "text",
          value:
            "Suspended and settleable solids must be removed before water reaches the plant beds, or they will blanket roots, clog media and consume oxygen in the root zone. Clarifiers, drum filters and settling tanks all serve. The captured sludge still contains a substantial share of the system's phosphorus and organic nitrogen, so mineralising it separately and returning the liquid fraction to the loop recovers nutrient that would otherwise be discarded.",
        },
        { kind: "subheading", value: "Species and crop selection" },
        {
          kind: "text",
          value:
            "The workable combinations are those whose temperature ranges overlap. Warm-water fish pair naturally with warm-season crops; coldwater species pair with cool-season leafy crops. Fish that tolerate a wide temperature band give the most freedom in crop choice. Leafy greens and herbs are the usual starting crops because their nutrient demand is modest, their cycle is short and their market value per unit area is high; fruiting crops demand more nutrient, more light and more supplementation.",
        },
        { kind: "subheading", value: "Light and climate" },
        {
          kind: "text",
          value:
            "Plant production is limited by light in a way fish production is not. A system whose fish side performs perfectly will still yield poorly if the plants are shaded, and greenhouse structure, orientation and seasonal light availability therefore belong in the design from the outset. In Indian conditions the more common constraint is excess heat rather than insufficient light, which makes ventilation, shading and evaporative cooling design questions on the plant side that also govern water temperature on the fish side.",
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
            "Commissioning an aquaponic system means establishing the bacterial community before either crop can be relied upon, and doing so in a defined order.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Fill the system and run the water for several days to stabilise temperature, remove chlorine or chloramine, and confirm there are no leaks in the circuit.",
            "Establish the nitrifying community by introducing a nitrogen source, tracking ammonia and nitrite until both fall while nitrate rises.",
            "Confirm alkalinity and pH are stable under that load, and set up a routine base addition before adding stock.",
            "Introduce fish gradually and increase the feed rate in steps, watching for any ammonia or nitrite response after each increase.",
            "Plant only once nitrate is present, so that the crop meets a nutrient supply rather than bare water.",
            "Test the water weekly for ammonia, nitrite, nitrate, pH, alkalinity, temperature and dissolved oxygen, and record all of it together.",
            "Inspect plant leaves regularly for deficiency symptoms and supplement the specific element indicated in a form the fish tolerate.",
            "Clean solids capture on a fixed schedule, since a filter left unserviced becomes a source rather than a sink.",
            "Stagger planting and harvesting so the plant side's nutrient demand stays reasonably constant instead of cycling with the crop.",
            "Top up water lost to evaporation, transpiration and sludge removal, and check that the top-up source is not concentrating any unwanted ion.",
          ],
        },
        {
          kind: "callout",
          tone: "established",
          title: "The bacteria come first",
          value:
            "Neither fish nor plants can be added successfully until the nitrifying population is established and demonstrated to be converting ammonia through to nitrate. Attempting to shorten this period is the most common cause of loss in a new aquaponic system.",
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
            "Every treatment decision is constrained by the presence of the other crop. A therapeutant used routinely in fish culture may be phytotoxic or may persist in the produce; a pesticide or fungicide acceptable in horticulture may be lethal to fish or may destroy the nitrifying community. This mutual restriction pushes both sides towards prevention: exclusion screening, biological pest control, quarantine of incoming stock and plants, and stocking practices that reduce the likelihood of needing to treat at all.",
        },
        {
          kind: "text",
          value:
            "Hydraulically, the two sides have different requirements. Fish tanks want vigorous flow for solids transport and gas exchange; plant roots want steady low-velocity contact with well-oxygenated water. Serving both from a single pump usually means one is compromised, which is why separate loops with a controlled transfer between them are common in larger installations even when the system is nominally coupled.",
        },
        {
          kind: "text",
          value:
            "There is also a thermal tension. Plant growth in a greenhouse benefits from warm air, while the fish side may want a stable and often lower water temperature. Because the water body is large and thermally inert, it exchanges heat with the greenhouse continuously. In hot conditions the fish water gains heat all day, and cooling the water is a far larger energy expense than cooling the air.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Balance ratios are starting points",
          value:
            "Published ratios of feed input to growing area are convenient for initial sizing, but they were derived under particular crops, climates and feeds. Any specific system should be balanced by observing its own nitrate trend and its own plant condition, and adjusting from there.",
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
            "Manage the water for the bacteria first, because both other crops depend on the conversion the bacteria perform.",
            "Read nitrate as the balance indicator. A steady rise means plant capacity is short of nutrient supply; a steady fall means the reverse.",
            "Replace alkalinity continuously and use the choice of base to supply whichever cation the crop needs.",
            "Diagnose plant deficiency from leaf symptoms and supplement the specific element rather than adding a general fertiliser blend.",
            "Remove solids before the plant beds, and treat the captured sludge as a nutrient resource rather than only as waste.",
            "Stagger plantings so nutrient uptake stays approximately constant instead of collapsing at every harvest.",
            "Prevent rather than treat, since the treatments available to each crop are restricted by the presence of the other.",
            "Keep a single combined record for fish, water and plants, because the diagnosis almost always lies in the relationship between them.",
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
          caption: "Recurring aquaponic problems and their usual underlying causes",
          columns: ["Symptom", "Usual underlying cause"],
          rows: [
            ["Yellowing between the veins of young leaves", "Iron unavailable at the operating pH; chelated iron in a suitable form is usually required"],
            ["Ammonia or nitrite rising after a feed increase", "Nitrifying capacity not yet matched to the new load, or alkalinity depleted and limiting the bacteria"],
            ["Nitrate climbing steadily across weeks", "Plant area or crop demand insufficient for the feed input entering the system"],
            ["Plants pale and slow while fish are healthy", "Nutrient supply below crop demand, or light limitation being misread as a nutrient problem"],
            ["pH drifting downward continuously", "Alkalinity consumed by nitrification with no routine base replacement"],
            ["Root rot in raft or channel systems", "Insufficient root-zone oxygen, often combined with solids reaching the beds"],
            ["Media beds clogging and flooding", "Solids capture inadequate ahead of the beds, or the beds are being asked to do the filtration"],
            ["Fish loss shortly after a plant treatment", "A horticultural product applied without checking its effect on fish and on the nitrifying community"],
            ["Blossom end problems in fruiting crops", "Calcium availability or transport limited, frequently linked to the pH compromise and to transpiration conditions"],
          ],
          basis:
            "Patterns commonly described in aquaponic extension literature and operator experience, given as diagnostic starting points rather than conclusions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Establish and prove the nitrifying community before stocking fish or planting the beds.",
            "Size the plant area against the intended feed rate and the intended crop, and re-examine the balance whenever either changes.",
            "Install solids removal ahead of the plant beds and service it on a schedule rather than when a problem appears.",
            "Choose fish and crops whose temperature ranges genuinely overlap, rather than pairing them by market appeal alone.",
            "Maintain a supplementation programme for the elements fish feed does not supply, using forms that are safe for fish.",
            "Keep the alkalinity addition routine and record it, since it is both a pH control and a nutrient input.",
            "Design the greenhouse for the local climate, because in warm regions heat management governs both the crop and the water temperature.",
            "Quarantine incoming fish and incoming plant material, since a coupled system offers very few treatment options after the fact.",
            "Log water chemistry, feed, fish observations and plant condition in one record so that cross-effects are visible.",
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
            "The most substantial advance in the field has been the move to decoupled configurations. Separating the loops allows the fish side to be held at the pH and temperature that suit fish and bacteria, while the plant side receives a nutrient solution that can be adjusted, supplemented and acidified independently. Nutrient-rich water flows from fish to plants, but the plant solution is not returned unconditioned. The result is closer to optimum on both sides, at the cost of more control equipment and a nutrient stream that must be actively managed.",
        },
        {
          kind: "text",
          value:
            "Sludge mineralisation is the other significant refinement. A large share of the phosphorus, and a meaningful share of the nitrogen, ends up in captured solids rather than in solution. Digesting that sludge aerobically or anaerobically in a side vessel releases those nutrients into a liquid fraction that can be returned to the plant circuit, converting the system's principal waste stream into a fertiliser stream and improving the overall recovery considerably.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Root zone microbial communities",
          value:
            "The microbial community in aquaponic root zones differs from that in conventional hydroponics, and there is active interest in how it affects nutrient availability, plant health and suppression of root pathogens. The observations are consistent enough to be interesting but not yet developed into practices an operator can specify and manage.",
        },
        {
          kind: "text",
          value:
            "Economically, the honest assessment is that in most aquaponic operations the plants carry the revenue and the fish carry the cost. Fish produce nutrient, occupy capital and demand daily attention, while high-value short-cycle plant crops turn over quickly on a small footprint. Designing as though the fish were the product, with plants as a secondary benefit, produces a system whose economics do not close. Recognising which crop is the business, and sizing the other to serve it, is the decision that most often separates working aquaponic enterprises from demonstration installations.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Aquaponics is one biological system with three living components, and bacteria are the hinge that connects fish waste to plant nutrition.",
    "Fish, bacteria and plants each have a different pH optimum, so the operating value is a deliberate compromise rather than a target to be perfected.",
    "System balance is set by feed input relative to plant growing area, and nitrate trend is the practical indicator of whether that balance holds.",
    "Fish feed does not supply a complete plant nutrient profile, so supplementation of specific elements in fish-safe forms is a normal requirement.",
    "Treatment options on both sides are restricted by the presence of the other crop, which pushes management towards prevention and quarantine.",
    "Decoupled configurations and sludge mineralisation are the main routes to running each side nearer its own optimum and recovering more of the nutrient.",
  ],
  related: ["ras", "sustainable", "water-quality", "systems"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Technical material on small-scale and commercial aquaponic food production and integrated systems.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center",
      description: "Extension publications on recirculating system design, nitrification and integrated plant production.",
    },
    {
      organisation: "State fisheries departments and agricultural universities in India",
      description: "Regional guidance on integrated fish and horticulture production suited to local climate and markets.",
    },
  ],
};
