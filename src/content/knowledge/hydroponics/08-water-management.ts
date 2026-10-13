import type { KnowledgeArea } from "../types";

export const waterManagement: KnowledgeArea = {
  number: "08",
  slug: "water-management",
  title: "Water Management",
  navSummary: "The source water is the first ingredient of every nutrient solution, and it is never blank.",
  summary:
    "A hydroponic nutrient solution is the source water plus whatever is dosed into it. Bore water, municipal supply, harvested rain and reverse-osmosis permeate each arrive with a different starting chemistry, and that chemistry decides which fertilisers can be used, how hard pH will be to hold and how long a recirculating solution can run before it has to be discarded. Water management is the discipline of measuring that starting point, correcting what needs correcting, and deciding where used solution goes.",
  difficulty: "intermediate",
  topics: ["water", "filtration", "systems", "operations", "sustainability"],
  tags: ["source water", "water analysis", "alkalinity", "reverse osmosis", "recirculation", "sodium"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-30",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Get the water tested before you buy anything. The test tells you how much calcium, magnesium and sulphate you are already being given free, how much acid you will have to add every day, and whether sodium and chloride will force you to throw solution away. A farm designed around an untested water source is designed around a guess.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Every soilless system begins with a water source, and no natural water source is chemically neutral. Rain that fell on a roof carries dust and whatever the roof is made of. Municipal supply carries residual disinfectant and the mineral signature of its own source. Groundwater carries what the aquifer rock has dissolved into it over a very long time, which in much of peninsular and northern India means substantial calcium, magnesium and bicarbonate, and in coastal or over-extracted areas can mean sodium and chloride as well.",
        },
        {
          kind: "text",
          value:
            "The practical consequence is that the fertiliser schedule cannot be chosen before the water is known. A formulation written for soft water, dosed into hard water, delivers far more calcium than the crop needs and fights a bicarbonate buffer with acid every single day. The same formulation dosed into reverse-osmosis permeate leaves the crop short of calcium, magnesium and sulphur, because those were supposed to arrive with the water and did not.",
        },
        {
          kind: "text",
          value:
            "Water management therefore sits upstream of nutrition, upstream of irrigation design and upstream of the choice between recirculating and run-to-waste. It is the constraint that the rest of the system is fitted around.",
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
            "Three failure modes trace directly back to unexamined water. The first is chronic pH instability: water with very low alkalinity has almost no buffering, so the solution swings with every uptake shift, while water with very high alkalinity resists correction until a large acid dose overshoots. The second is silent accumulation: elements the crop takes up slowly, notably sodium, chloride and sulphate, concentrate in a recirculating loop until they suppress uptake of the ions that matter. The third is fouling: dissolved iron and manganese that are invisible in a clear glass oxidise on contact with air and dosed oxidants, then precipitate inside filters, drippers and emitters.",
        },
        {
          kind: "text",
          value:
            "None of these announce themselves in the first week. They appear as gradually reducing uniformity, a crop that stops responding to nutrition changes, or a dripline that has to be replaced far earlier than expected. Because the cause is upstream and slow, it is usually diagnosed last.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Water quality sets the ceiling on nutrient control",
          value:
            "You can only dose what the water leaves room for. If the source already supplies more of an element than the target concentration, no fertiliser decision can reduce it; only dilution, treatment or discharge can.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Sources and what each brings" },
        {
          kind: "text",
          value:
            "Rainwater is typically very low in dissolved solids, which makes it the easiest base to formulate into, but it is intermittent, needs storage volume, and arrives with whatever the catchment surface contributes biologically. Groundwater is reliable in supply and variable in chemistry, often hard and alkaline, sometimes carrying iron, manganese or fluoride. Municipal water is treated and consistent enough to design around, but carries residual chlorine or chloramine and a chloride load. Reverse-osmosis permeate is close to blank, which is an advantage for control and a cost in energy, membrane life and rejected water.",
        },
        { kind: "subheading", value: "Alkalinity is not pH" },
        {
          kind: "text",
          value:
            "pH is the present hydrogen ion activity; alkalinity is the capacity of the water to neutralise added acid, carried mostly as bicarbonate. Two waters can both read pH 7.6 while one needs a trace of acid to move and the other needs many times that. Alkalinity, not pH, is the number that predicts daily acid consumption and the stability of the root zone, and it is the number most often missing from a basic water report.",
        },
        { kind: "subheading", value: "Ballast ions" },
        {
          kind: "text",
          value:
            "Sodium and chloride are the classic ballast ions. Plants take up very little of either relative to water, so in a closed loop their concentration rises while nitrate, potassium and calcium are drawn down. They contribute to electrical conductivity, which means a conductivity-controlled dosing system reads them as nutrients and doses less fertiliser in response, compounding the problem. This is the single strongest argument for measuring individual ions periodically rather than trusting conductivity alone.",
        },
        { kind: "subheading", value: "Microbiology" },
        {
          kind: "text",
          value:
            "Open reservoirs, harvested rain and surface water carry a living population. Some of it is harmless; some of it includes water-mould pathogens that move readily through a shared solution. Disinfection is a design decision about how much of that risk is acceptable, not a universal requirement.",
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
            "Two calculations govern most water decisions: how much of an element the source already contributes to the final solution, and how quickly a ballast ion concentrates in a recirculating loop.",
        },
        {
          kind: "formula",
          name: "Blend concentration of an ion",
          expression: "C_blend = (C_a x V_a + C_b x V_b) / (V_a + V_b)",
          terms: [
            { symbol: "C_blend", meaning: "Concentration of the ion in the blended water", unit: "mg/L" },
            { symbol: "C_a", meaning: "Concentration of that ion in the first source", unit: "mg/L" },
            { symbol: "V_a", meaning: "Volume taken from the first source", unit: "L" },
            { symbol: "C_b", meaning: "Concentration of that ion in the second source", unit: "mg/L" },
            { symbol: "V_b", meaning: "Volume taken from the second source", unit: "L" },
          ],
          example:
            "Consider a hypothetical site blending hard bore water with reverse-osmosis permeate. If the bore water carries a sodium concentration the grower judges too high for a closed loop, blending it in a fixed ratio with permeate reduces sodium proportionally — but it reduces calcium, magnesium and bicarbonate in exactly the same proportion, so the fertiliser schedule and the acid demand both have to be recalculated for the blend rather than for either source.",
          limitations:
            "Blending is linear only for conservative dissolved ions; it does not describe species that precipitate, degas or oxidise on mixing, and it assumes both analyses are current. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "formula",
          name: "Steady-state accumulation of a non-absorbed ion",
          expression: "C_ss = C_in / f_discharge",
          terms: [
            { symbol: "C_ss", meaning: "Steady-state concentration of the ion in the recirculating solution", unit: "mg/L" },
            { symbol: "C_in", meaning: "Concentration of that ion in the incoming top-up water", unit: "mg/L" },
            { symbol: "f_discharge", meaning: "Fraction of throughput leaving as discharge rather than crop uptake and transpiration", unit: "dimensionless" },
          ],
          example:
            "Consider a hypothetical closed system where the crop takes up almost no sodium and only a small fraction of the water entering the loop leaves as discharge. Sodium then concentrates towards a multiple of its inlet concentration set by that discharge fraction. Halving the discharge fraction roughly doubles the equilibrium sodium level, which is why water-saving and salt control pull against each other and have to be traded off deliberately.",
          limitations:
            "The relation assumes zero uptake and a constant discharge fraction, neither of which holds exactly; real crops take up some sodium and chloride, and discharge is usually episodic rather than continuous. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Test before you design, not after you fail",
          value:
            "A full analysis costs a fraction of one season's fertiliser and determines the fertiliser choice, the acid choice, the treatment train and the discharge strategy. Repeating it when the season or the borewell drawdown changes is normal practice, not excess caution.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "The analysis to run before designing a system, and what each parameter decides",
          columns: ["Parameter", "What it tells the designer", "What it changes in the design"],
          rows: [
            ["Electrical conductivity", "Total dissolved ionic load already present", "How much headroom remains before the target solution strength is reached"],
            ["pH", "Present acidity of the source", "Little on its own; interpreted only alongside alkalinity"],
            ["Alkalinity (as bicarbonate)", "Buffering capacity and daily acid demand", "Acid selection, dosing pump sizing, pH stability expectations"],
            ["Hardness (calcium, magnesium)", "Free calcium and magnesium supplied by the water", "How much calcium and magnesium salt to omit from the schedule"],
            ["Sodium", "Principal ballast cation", "Whether a closed loop is viable and how often solution must be discarded"],
            ["Chloride", "Principal ballast anion", "Discharge frequency and the crop's salinity exposure"],
            ["Sulphate", "Sulphur already supplied, and an accumulating anion", "Whether sulphate-based fertiliser salts can be used at all"],
            ["Iron and manganese", "Reduced metals that oxidise on aeration", "Need for oxidation and filtration ahead of emitters"],
            ["Boron", "An element with a narrow window between deficiency and toxicity", "Whether boron may be dosed at all, or must be avoided"],
            ["Microbiology", "Living load in the source and reservoir", "Whether disinfection is required and which method fits"],
          ],
          basis:
            "A checklist of parameters routinely reported by irrigation water laboratories, with the design decision each one informs; no threshold values are given because thresholds are site-specific. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        { kind: "subheading", value: "Treatment options" },
        {
          kind: "list",
          items: [
            "Sediment filtration: screen, disc or sand filters remove suspended solids that would block emitters. This is protection of hardware, not chemistry, and is required on almost every source.",
            "Oxidation and media filtration: aeration or an oxidant converts dissolved iron and manganese to particles that a media filter can then remove, preventing them from precipitating inside the irrigation network instead.",
            "Reverse osmosis: removes most dissolved ions including sodium and chloride, giving full formulation control. It costs energy, needs pre-treatment to protect membranes, and produces a concentrate stream that must go somewhere.",
            "Blending: mixing a high-quality and a low-quality source to reach a workable middle. Cheaper than treating everything, but it dilutes the useful ions along with the unwanted ones.",
            "Ultraviolet disinfection: inactivates waterborne organisms in a clear stream. It leaves no residual, so it protects only at the point of treatment and requires low turbidity to work.",
            "Ozone: a strong oxidant that disinfects and also oxidises iron, manganese and organic matter. It requires contact time, off-gas handling and degassing before the water reaches roots, and it will oxidise chelates if introduced into the nutrient solution.",
            "Slow sand filtration: a biologically active bed that removes pathogen propagules from returning drain water at low energy cost. It needs area, a stable flow rate and time to mature, and it is not a general disinfectant.",
          ],
        },
        {
          kind: "text",
          value:
            "Treatment is a train, not a single device. The order matters: coarse solids before fine, oxidation before the filter that catches its products, disinfection where the water is clearest, and any oxidant well upstream of the point where chelated micronutrients enter.",
        },
      ],
    },
    {
      id: "practical-knowledge",
      heading: "Practical knowledge",
      blocks: [
        {
          kind: "flow",
          caption: "A representative water train from source to root zone and back, with the decision each stage carries.",
          steps: [
            { label: "Source", detail: "Bore, municipal, harvested rain or a blend; sampled and analysed before any equipment is specified." },
            { label: "Raw storage", detail: "Buffer volume that decouples abstraction from demand and allows settling, aeration and temperature moderation." },
            { label: "Pre-filtration", detail: "Sand, disc or screen filtration sized to the smallest orifice downstream, with differential pressure monitored." },
            { label: "Treatment", detail: "Reverse osmosis, oxidation, disinfection or nothing at all, selected from what the analysis showed rather than by default." },
            { label: "Treated storage", detail: "Clean water held ready for dosing, kept covered and dark to limit algal growth and re-contamination." },
            { label: "Dosing and mixing", detail: "Fertiliser stocks and acid introduced and homogenised to the target conductivity and pH." },
            { label: "Root zone", detail: "The only stage the crop experiences; measured at the emitter and in the drain, not only in the tank." },
            { label: "Return or discharge", detail: "Drain captured for reuse after disinfection, or sent to disposal or to a lower-value use when the accumulation limit is reached." },
          ],
        },
        {
          kind: "text",
          value:
            "Sampling discipline matters as much as the analysis itself. Sample from the point that represents what the plants receive, flush the line first, use a clean container supplied by the laboratory, and keep the sample cool and in the dark until it is delivered. A well-run laboratory analysing a badly taken sample produces a confident wrong answer.",
        },
      ],
    },
    {
      id: "considerations",
      heading: "Biological and engineering considerations",
      blocks: [
        { kind: "subheading", value: "Recirculation versus run-to-waste" },
        {
          kind: "text",
          value:
            "Run-to-waste supplies fresh solution at every irrigation, so composition is exactly what was dosed and accumulation is impossible. It consumes more water and more fertiliser, and it produces a nutrient-bearing discharge that has to be managed responsibly. Recirculation captures and re-doses the drain, which reduces water and fertiliser use substantially, but it accepts three consequences: ballast ions accumulate, individual nutrient ratios drift away from the dosed ratio, and any root pathogen that enters is distributed to the whole crop.",
        },
        {
          kind: "text",
          value:
            "The choice is usually made by the water. Good-quality water with low sodium and chloride makes recirculation straightforward. Water high in ballast ions makes a closed loop short-lived, because the solution reaches its accumulation limit quickly and must be discarded so often that the saving disappears. Treating the water to permit recirculation is a capital decision weighed against the recurring cost of running open.",
        },
        { kind: "subheading", value: "Deciding when to discard" },
        {
          kind: "text",
          value:
            "A dump criterion is a rule written before the season, not a judgement made when the crop looks unwell. It is typically expressed as a limit on the concentration of a specific accumulating ion measured by laboratory analysis, supported by conductivity trends and drain observations. Partial replacement — discarding a fraction and making up with fresh solution — moves the loop back towards target without the full cost and disruption of a complete change.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Discharge is a design output, not an accident",
          value:
            "Whatever is discarded carries nitrate, phosphate and potassium. Planning where it goes — a lower-sensitivity crop, a field application matched to agronomic need, or treatment — is part of designing the system, and in many jurisdictions is a regulatory obligation. Confirm local requirements rather than assuming.",
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
            "Hold a current full analysis of every source in use, and repeat it at least seasonally and whenever the source or its yield changes.",
            "Record daily acid consumption. A rising trend usually means the source alkalinity has changed before anything else reveals it.",
            "Measure conductivity and pH at the emitter and in the drain, not only in the mixing tank. The difference between them is the crop's actual behaviour.",
            "Send a recirculating solution for individual-ion analysis on a fixed interval, because conductivity cannot see accumulation.",
            "Monitor differential pressure across filters and flush on that signal rather than on a calendar.",
            "Keep reservoirs covered and opaque. Light in a nutrient reservoir means algae, and algae means blocked emitters and an oxygen demand at night.",
            "Log every discard: date, volume, the reading that triggered it and where it went.",
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
          caption: "Water-related symptoms and the upstream cause to check first",
          columns: ["Observation", "Likely origin", "First check"],
          rows: [
            ["Acid demand climbing week on week", "Rising source alkalinity, or a drifting pH probe", "Fresh alkalinity titration on the raw source; recalibrate the probe"],
            ["Emitters blocking with reddish-brown deposit", "Dissolved iron oxidising after the filter", "Whether oxidation is happening upstream or downstream of the media filter"],
            ["Conductivity on target but crop showing deficiency", "Ballast ion accumulation displacing nutrient share of the reading", "Individual-ion laboratory analysis of the recirculating solution"],
            ["Slime and biofilm in lines and drippers", "Biological growth in a warm, lit, nutrient-rich reservoir or line", "Reservoir light exclusion, line temperature and disinfection strategy"],
            ["Root disease spreading rapidly across a closed loop", "Untreated drain returned to the whole crop", "Whether drain disinfection exists and is actually operating"],
            ["Uniformity falling from the head of a block to its end", "Partial blockage or pressure loss rather than nutrition", "Filtration state and emitter discharge measured along the line"],
          ],
          basis:
            "Diagnostic starting points drawn from routine irrigation and greenhouse practice; each row is a direction to investigate, not a conclusion. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
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
            "Design the fertiliser schedule from the water report, subtracting what the source already supplies before deciding what to add.",
            "Size raw and treated storage for the longest realistic supply interruption, not the average one.",
            "Specify filtration by the smallest orifice it protects, and install pressure gauges either side of every filter.",
            "Put any strong oxidant well upstream of the point where chelated micronutrients enter the water.",
            "Write the dump criterion and the partial-replacement rule before the crop is planted, and keep them where the operator can see them.",
            "Keep the drain return path physically separate from clean water, with no cross-connection that a valve error could open.",
            "Treat harvested rainwater as a biological input requiring first-flush diversion, screening and covered storage.",
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
            "The advanced question in water management is how far to close the loop. A fully closed system is attractive on water and fertiliser cost and on discharge, but its stability depends entirely on how quickly ballast ions accumulate and how confidently pathogens can be excluded from the return. A partially closed system — recirculating within a crop block, discharging on a defined rule, disinfecting the return — is often the practical optimum, because it captures most of the saving while keeping an escape route for accumulation and disease.",
        },
        {
          kind: "text",
          value:
            "Ion-selective measurement is the technology that would most change this trade-off, because it removes the blindness of conductivity control. Continuous, drift-free measurement of nitrate, potassium, calcium and sodium in a working solution would let dosing correct composition rather than only total strength. The instrumentation exists, and its practical limitation in a fertigation environment is calibration stability and fouling rather than the underlying principle.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Composition control is the open problem",
          value:
            "Dosing to conductivity is dosing to a sum. Reliable in-line measurement of individual ions in a working nutrient solution is an active area of development, and its maturity would change how closed loops are operated. Treat current claims about it as capability to be verified on site.",
        },
        {
          kind: "text",
          value:
            "Until then, the honest position is that a recirculating solution is understood by periodic laboratory analysis and managed between those analyses by rules written in advance. Conductivity and pH tell you the system is running; only an ion analysis tells you what it is running on.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "The nutrient solution is source water plus dosed salts, so the schedule cannot be written until the water has been analysed.",
    "Alkalinity, not pH, predicts daily acid demand and how stable the root zone will be.",
    "Sodium and chloride accumulate in a closed loop because the crop takes up water far faster than it takes up either.",
    "Conductivity reports a total, so ballast accumulation can hide behind an on-target reading; periodic ion analysis is the only way to see it.",
    "Treatment is a train ordered by function — solids, oxidation, filtration, disinfection — and any oxidant must sit upstream of chelated micronutrients.",
    "Recirculation saves water and fertiliser but accepts accumulation, ratio drift and shared disease risk; the dump criterion must be written before the crop is planted.",
  ],
  related: ["fundamentals", "ph-ec", "fertigation", "root-zone"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Guidance material on irrigation water quality, water management and protected horticulture.",
      url: "https://www.fao.org/land-water/en",
    },
    {
      organisation: "Bureau of Indian Standards",
      description: "Indian standards covering water quality testing methods and irrigation equipment specifications.",
    },
    {
      organisation: "Central Ground Water Board, Government of India",
      description: "Regional groundwater quality and availability reporting relevant to siting and source selection.",
    },
  ],
};
