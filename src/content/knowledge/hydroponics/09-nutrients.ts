import type { KnowledgeArea } from "../types";

export const nutrients: KnowledgeArea = {
  number: "09",
  slug: "nutrients",
  title: "Nutrient Management",
  navSummary: "What each essential element does, why deficiencies appear where they do, and how a formulation is derived rather than copied.",
  summary:
    "Seventeen elements are essential to a higher plant, fourteen of which the grower supplies in a soilless system. Managing them is not a matter of finding the right recipe: it is a matter of understanding what each element does, how mobile it is inside the plant, which ions compete with which at the root surface, and how pH governs whether an element that is present is actually available. A formulation is derived from the source-water analysis and the crop stage, and it belongs to that site.",
  difficulty: "intermediate",
  topics: ["nutrition", "biology", "water", "production"],
  tags: ["essential elements", "deficiency", "antagonism", "chelates", "stock solutions", "formulation"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-02",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Plants need a fixed list of mineral elements. Some move freely inside the plant, so shortages show on the oldest leaves first; others do not move, so shortages show on the newest growth. Elements also compete: too much of one can block another even when both are present. There is no universal recipe, because your water already supplies part of the mix and your crop changes what it wants as it grows.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "The essential elements are those a plant cannot complete its life cycle without and for which nothing else substitutes. Carbon, hydrogen and oxygen come from air and water. The remainder arrive as ions dissolved in the root-zone solution, and in soilless cultivation every one of them is there because the grower or the source water put it there.",
        },
        {
          kind: "text",
          value:
            "They are conventionally split by the quantity a crop uses rather than by importance. Macronutrients — nitrogen, phosphorus, potassium, calcium, magnesium and sulphur — are taken up in amounts measured in tens or hundreds of milligrams per litre of solution. Micronutrients — iron, manganese, zinc, copper, boron, molybdenum, chlorine and nickel — are taken up in amounts smaller by two or three orders of magnitude. A micronutrient at ten times its intended concentration is a toxicity problem; a macronutrient at ten per cent above target usually is not.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "This article deliberately gives no recipe",
          value:
            "A gram-per-litre schedule is only valid for the water it was written for, the crop it was written for and the stage it was written for. Publishing one as generally applicable would be misleading. What follows is the logic by which a formulation is derived, so that a site can produce its own from its own water report.",
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
            "Nutrition is where most avoidable crop losses in soilless systems originate, and where most wasted money is spent. The waste comes from dosing elements the water already supplies, from correcting a symptom with the element named in the symptom rather than the element causing it, and from buying a proprietary schedule designed for water that bears no resemblance to what comes out of the pump.",
        },
        {
          kind: "text",
          value:
            "The loss comes from the speed of expression. A soil-grown crop draws on exchangeable reserves held on clay and organic surfaces; a hydroponic crop has only what is in solution now. A dosing error, a stock tank run dry, or a pH excursion that puts iron out of reach can produce visible symptoms within days, and in a fruiting crop a calcium interruption at the wrong moment produces damage on fruit that are already set and cannot be repaired.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Function determines where the symptom appears" },
        {
          kind: "text",
          value:
            "Each element has a structural or metabolic role, and the tissue that fails first is the tissue that role serves. Nitrogen is in every protein and in chlorophyll, so shortage shows as general pallor and reduced growth. Magnesium sits at the centre of the chlorophyll molecule, so shortage shows as yellowing between veins while the veins stay green. Calcium is a structural component of cell walls and middle lamellae, so shortage shows as collapse of the most rapidly expanding tissue — growing points, leaf margins, fruit tips.",
        },
        { kind: "subheading", value: "Mobility determines which leaves show it" },
        {
          kind: "text",
          value:
            "An element that the plant can withdraw from old tissue and redirect to new tissue is phloem-mobile. When it runs short, the plant cannibalises the old leaves to supply the new, so the symptom appears on the oldest leaves. An immobile element cannot be moved once deposited, so shortage appears on the youngest tissue, which has nowhere to draw from. This single distinction narrows a diagnosis faster than any other observation.",
        },
        { kind: "subheading", value: "Calcium moves with water, not with sugar" },
        {
          kind: "text",
          value:
            "Calcium is carried almost entirely in the transpiration stream, so it goes where water is evaporating. Tissues that transpire little — the inside of a dense head, the distal end of an enclosed fruit — receive little calcium regardless of how much is in the solution. This is why calcium-related disorders are so often an environmental and irrigation problem rather than a dosing problem, and why raising solution calcium in response frequently changes nothing.",
        },
        { kind: "subheading", value: "Availability is not presence" },
        {
          kind: "text",
          value:
            "An element in the tank is only useful if it is in a form the root can absorb at the prevailing pH. Iron, manganese, zinc and copper become progressively less soluble as pH rises; phosphate precipitates with calcium at high pH; molybdenum becomes less available as pH falls. A solution can be correctly formulated on paper and functionally deficient in the root zone.",
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
            "Formulation arithmetic rests on two ideas: that the target is a concentration of each element in the final solution, and that the source water has already delivered part of that target for free.",
        },
        {
          kind: "formula",
          name: "Element to be dosed after crediting the source water",
          expression: "C_dose = C_target - C_source",
          terms: [
            { symbol: "C_dose", meaning: "Concentration of the element that must be supplied by fertiliser", unit: "mg/L" },
            { symbol: "C_target", meaning: "Intended concentration of the element in the final solution", unit: "mg/L" },
            { symbol: "C_source", meaning: "Concentration of that element already present in the source water", unit: "mg/L" },
          ],
          example:
            "Consider a hypothetical hard bore water that already carries a substantial calcium concentration. Crediting that against the calcium target may leave little or no calcium to dose, which in turn removes calcium nitrate as a nitrogen carrier and forces the nitrogen to come from a different salt. The same subtraction on reverse-osmosis permeate has the opposite effect: nothing is credited, and calcium, magnesium and sulphur must all be supplied deliberately.",
          limitations:
            "The subtraction is valid only for elements the analysis actually reports, and it says nothing about whether the resulting salt combination is chemically compatible or whether the ratios suit the stage. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "formula",
          name: "Element delivered by a fertiliser salt",
          expression: "C_element = (m_salt / V) x p_element",
          terms: [
            { symbol: "C_element", meaning: "Concentration of the element contributed to the final solution", unit: "mg/L" },
            { symbol: "m_salt", meaning: "Mass of the fertiliser salt dissolved", unit: "mg" },
            { symbol: "V", meaning: "Final volume of solution", unit: "L" },
            { symbol: "p_element", meaning: "Mass fraction of the element within that salt, from its analysis", unit: "dimensionless" },
          ],
          example:
            "Consider a hypothetical salt supplying both potassium and nitrate. Dosing it to meet the potassium target simultaneously fixes a nitrate contribution that must be counted before any other nitrogen source is added. Every salt carries at least two ions, so a formulation is solved as a set of simultaneous constraints rather than element by element in isolation.",
          limitations:
            "Mass fractions differ between grades and between hydrated and anhydrous forms, and technical-grade fertilisers carry impurities the label may not state. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "text",
          value:
            "Because each salt supplies more than one ion, changing one target moves others. Raising potassium using potassium nitrate raises nitrogen; raising it using potassium sulphate raises sulphate, which accumulates in a recirculating loop. There is no neutral way to add a single element, and choosing which counter-ion to accept is most of the craft of formulation.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Essential mineral elements: principal function, mobility within the plant, and where a shortage first appears",
          columns: ["Element", "Principal function", "Mobility", "Where shortage shows first"],
          rows: [
            ["Nitrogen", "Amino acids, proteins, chlorophyll, nucleic acids", "Mobile", "Uniform pallor and reduced vigour on older leaves"],
            ["Phosphorus", "Energy transfer, membranes, nucleic acids, root development", "Mobile", "Older leaves, often with dull or purplish tones and stunted roots"],
            ["Potassium", "Osmotic regulation, stomatal control, enzyme activation, sugar transport", "Mobile", "Margins and tips of older leaves"],
            ["Calcium", "Cell wall structure, membrane stability, signalling", "Immobile", "Growing points and enclosed or low-transpiring tissue"],
            ["Magnesium", "Central atom of chlorophyll, enzyme cofactor", "Mobile", "Interveinal yellowing on older leaves, veins remaining green"],
            ["Sulphur", "Sulphur-containing amino acids, coenzymes", "Weakly mobile", "General pallor tending to appear on younger leaves"],
            ["Iron", "Chlorophyll synthesis, electron transport", "Immobile", "Interveinal yellowing on the youngest leaves"],
            ["Manganese", "Photosynthetic water splitting, enzyme activation", "Weakly mobile", "Younger leaves, finer pattern than iron"],
            ["Zinc", "Enzyme systems, auxin metabolism", "Weakly mobile", "Small young leaves and shortened internodes"],
            ["Copper", "Electron transport, lignification", "Weakly mobile", "Young growth, distortion and wilting of shoot tips"],
            ["Boron", "Cell wall formation, pollen viability, membrane function", "Immobile", "Growing points, flowers and fruit set"],
            ["Molybdenum", "Nitrate reduction, nitrogen metabolism", "Mobile", "Older and middle leaves, often resembling nitrogen shortage"],
          ],
          basis:
            "A summary of established plant mineral nutrition, presented as function and mobility rather than as concentration targets; no dose figures are implied. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        { kind: "subheading", value: "Antagonisms" },
        {
          kind: "text",
          value:
            "Ions of similar charge and size compete for the same uptake pathways, so an excess of one suppresses another that is present in adequate quantity. The best-known set is potassium, calcium and magnesium: raising potassium strongly can reduce calcium and magnesium uptake, and heavy magnesium can do the same to calcium. Among the micronutrients, iron and manganese interfere with each other, and heavy zinc or copper can suppress iron. Excess ammonium suppresses uptake of potassium, calcium and magnesium at the same time.",
        },
        {
          kind: "text",
          value:
            "The practical consequence is that a deficiency symptom is a question, not an answer. Adding more of the element that appears short is as likely to deepen the imbalance as to correct it, because the shortage may be caused by an excess of its competitor. Ratios matter more than absolute concentrations for this group of elements.",
        },
        { kind: "subheading", value: "Chelates" },
        {
          kind: "text",
          value:
            "Iron and the other metallic micronutrients precipitate out of solution readily at the pH range most crops are grown in. A chelate is an organic molecule that wraps the metal ion and holds it in solution until the root can take it. Different chelating agents remain stable over different pH ranges: weaker ones release their metal as pH rises and become ineffective above a certain point, while stronger ones hold on across a much wider range at higher cost. Choosing a chelate is choosing the pH range over which the micronutrient will still be delivered, and it is a decision that follows from the source water's alkalinity.",
        },
        {
          kind: "text",
          value:
            "Chelates are also vulnerable to strong oxidants and to ultraviolet exposure. Ozone or hypochlorite introduced into a nutrient solution will break chelates and drop the metal out; ultraviolet disinfection of a solution containing chelated iron can degrade it. This is why disinfection is placed on the water rather than on the fully dosed solution wherever possible.",
        },
      ],
    },
    {
      id: "practical-knowledge",
      heading: "Practical knowledge",
      blocks: [
        { kind: "subheading", value: "Stock solution chemistry" },
        {
          kind: "text",
          value:
            "Concentrated fertiliser stocks are held in at least two separate tanks because some combinations precipitate at concentration even though they coexist happily in the dilute working solution. Calcium must be kept away from sulphate and from phosphate: calcium sulphate and calcium phosphate are both sparingly soluble and will form a solid that settles in the tank, blocks the injector and silently removes both elements from the schedule. Acid is also kept separate from concentrated stocks.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Keep one stock built around calcium — typically calcium nitrate with the iron chelate — and a second built around sulphates and phosphates with the remaining micronutrients.",
            "Never combine the two concentrates directly. They may only meet after both have been diluted into the working volume.",
            "Add salts to water with agitation running, one at a time, allowing each to dissolve fully before the next.",
            "Use water at a workable temperature for dissolution; several common salts absorb heat as they dissolve and go slowly in cold water.",
            "Label every tank unambiguously, and use physically distinct fittings or colour coding so the two lines cannot be swapped.",
            "Do not exceed the solubility of any salt at the lowest temperature the stock tank will reach overnight, or it will crystallise out and the morning's dose will be wrong.",
            "Inspect stock tanks for settled solids on a fixed schedule; a layer at the bottom means an element is no longer being delivered.",
          ],
        },
        {
          kind: "callout",
          tone: "established",
          title: "Separation is chemistry, not convention",
          value:
            "Calcium with sulphate or phosphate at stock concentration forms a precipitate. The two-tank arrangement exists to prevent that specific reaction, and no amount of stirring makes a single-tank concentrate safe.",
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
            "The nitrogen form is the most consequential single choice in a formulation. Nitrate is the dominant form supplied in soilless systems; ammonium is supplied in small proportion or not at all. The reason is partly pH — the two forms drive root-zone pH in opposite directions — and partly toxicity, because ammonium at more than a modest share of total nitrogen suppresses calcium and magnesium uptake and damages roots, particularly at warm root-zone temperatures. The proportion that is safe differs by crop and by temperature, so it is a site decision.",
        },
        {
          kind: "text",
          value:
            "Stage changes demand. A vegetative crop uses proportionally more nitrogen; a fruiting crop shifts towards potassium as fruit load builds. A propagation stage is run at lower total strength than a mature crop. These are directional statements, not numbers: the magnitude of each shift depends on the cultivar, the light environment and the temperature the crop is carrying.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Tissue analysis closes the loop",
          value:
            "Solution analysis says what was offered; tissue analysis says what was taken up. Where a disorder is suspected and the solution reads correctly, a leaf analysis of affected and unaffected plants from the same block is the standard next step in commercial practice.",
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
            "Derive the formulation from the current source-water report and the crop stage, and re-derive it when either changes.",
            "Record what is dosed, not only what was intended. An injector that has drifted delivers a formulation nobody wrote.",
            "Send the working solution for individual-ion analysis periodically. Conductivity cannot report composition.",
            "Treat a deficiency symptom as a hypothesis. Check pH and root health before changing any dose.",
            "Change one element at a time and allow the crop enough time to respond before changing another.",
            "Verify stock tanks visually for precipitate and for level; a stock that has run out looks the same on a conductivity trace as a crop that stopped eating.",
            "Keep the fertiliser certificate of analysis for each batch on file, because grade and mass fraction vary between suppliers.",
          ],
        },
      ],
    },
    {
      id: "common-problems",
      heading: "Common problems",
      blocks: [
        {
          kind: "text",
          value:
            "Most nutrition complaints resolve into one of four causes: the element was never dosed, the element was dosed but is unavailable at the prevailing pH, the element is available but a competing ion is suppressing its uptake, or the element is being taken up but not transported to the tissue that needs it. These require entirely different responses, and only the first is fixed by adding more.",
        },
        {
          kind: "table",
          caption: "Common presentations and the differential to work through",
          columns: ["Presentation", "Cause to exclude first", "Cause to exclude second"],
          rows: [
            ["Interveinal yellowing on the newest leaves", "Root-zone pH too high for iron availability", "Chelate unsuitable for the prevailing pH, or degraded by an oxidant"],
            ["Marginal or tip collapse on rapidly expanding tissue", "Transpiration too low for calcium delivery to that tissue", "Potassium or ammonium excess suppressing calcium uptake"],
            ["Interveinal yellowing on the oldest leaves", "Magnesium shortage in the solution", "Potassium excess suppressing magnesium uptake"],
            ["General pallor with reduced growth", "Nitrogen supply or a dosing interruption", "Root function compromised by low oxygen or disease"],
            ["Symptoms confined to one block or one line", "Emitter blockage or dosing non-uniformity", "Local root-zone pH or drainage difference, not formulation"],
            ["Solution reads on target but symptoms persist", "Uptake limited by root condition rather than supply", "Ratio drift within an on-target total conductivity"],
          ],
          basis:
            "A structured differential drawn from routine horticultural diagnosis; each row lists directions to investigate rather than a verdict. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
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
            "Start from the water report every time, and credit what the source supplies before choosing a single salt.",
            "Keep calcium separated from sulphate and phosphate at stock concentration, without exception.",
            "Select the iron chelate for the pH range the system will actually run at, not the range it is supposed to run at.",
            "Place disinfection on the water rather than on the fully dosed solution, so chelates are not destroyed.",
            "Hold micronutrient dosing to a tighter tolerance than macronutrient dosing, because the margin between shortage and toxicity is far narrower.",
            "Confirm injector delivery by measurement at commissioning and on a fixed schedule thereafter.",
            "Write the formulation down with its date, its water report and its intended crop stage, so it can be audited later rather than remembered.",
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
            "Beyond stable nutrition, the interesting work is in deliberate manipulation. Solution strength and composition influence quality attributes as well as yield: higher salinity in a fruiting crop tends to raise soluble solids while reducing size and total mass, which is a commercial trade rather than an agronomic improvement. Nitrogen form and total supply influence nitrate accumulation in leafy vegetables, which in several markets is regulated. Adjusting these is legitimate crop steering, and it is site-specific enough that transferring a strategy between farms rarely reproduces the outcome.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Uptake ratios are not dosing ratios",
          value:
            "A crop removes elements in proportions that differ from the proportions in the solution, so a recirculating system drifts away from the dosed composition even when every dose is correct. Replenishing to the original ratio is an approximation whose error grows with time in the loop.",
        },
        {
          kind: "text",
          value:
            "The long-term goal is to dose against measured composition rather than against total conductivity, replenishing each element at the rate the crop is actually removing it. The obstacle is measurement: robust, drift-tolerant in-line sensing of individual ions in a working fertigation stream. Until that is dependable, periodic laboratory analysis remains the reference and everything between analyses is a controlled approximation.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "There is no universally applicable recipe: a formulation is derived from the current source-water analysis and the crop stage, and belongs to that site.",
    "Mobility within the plant determines whether a shortage appears on old or new leaves, which is the fastest diagnostic split available.",
    "Calcium travels in the transpiration stream, so calcium disorders are often environmental and irrigation problems rather than dosing problems.",
    "Potassium, calcium and magnesium compete, as do iron and manganese, so adding more of a deficient element can worsen the imbalance.",
    "Chelate choice determines the pH range over which micronutrients stay available, and strong oxidants or ultraviolet exposure destroy chelates.",
    "Calcium must be held in a separate stock from sulphate and phosphate, because both form sparingly soluble precipitates at concentration.",
  ],
  related: ["ph-ec", "water-management", "fertigation", "plant-health"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Reference material on plant nutrition, fertiliser use and protected horticulture.",
      url: "https://www.fao.org/plant-production-protection/en",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute and extension publications on crop nutrition and protected cultivation in Indian conditions.",
    },
    {
      organisation: "International Society for Horticultural Science",
      description: "Horticultural science programme covering soilless culture and mineral nutrition of protected crops.",
      url: "https://www.ishs.org",
    },
  ],
};
