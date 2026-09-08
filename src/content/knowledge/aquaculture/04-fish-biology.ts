import type { KnowledgeArea } from "../types";

export const fishBiology: KnowledgeArea = {
  number: "04",
  slug: "fish-biology",
  title: "Fish Biology",
  navSummary: "The physiology behind every water quality limit, feeding decision and stress response on a farm.",
  summary:
    "Fish are ectothermic animals that breathe, excrete and osmoregulate through the same thin, permeable gill surface, and they do all of it inside the water that carries their own waste. Almost every operating rule in aquaculture is a consequence of that arrangement. Understanding respiration, nitrogen excretion, osmoregulation, digestion and the stress axis turns a list of thresholds into a set of explanations.",
  difficulty: "intermediate",
  topics: ["biology", "fish", "health"],
  tags: ["respiration", "osmoregulation", "ammonia excretion", "stress response", "digestion", "thermal biology"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-21",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "A fish takes oxygen out of water, puts ammonia back into it, and controls its internal salt balance across the same gill. Its body temperature is whatever the water's temperature is. So when the water changes, everything about the animal changes with it, and the farmer's job is to keep those changes small and slow.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "The gill is the organ around which fish biology and aquaculture engineering meet. It is a very large surface area, only a few cells thick, held in direct contact with the water so that oxygen can diffuse in. That same thinness makes it the route by which ammonia leaves, ions move in or out, and dissolved toxicants enter. A gill cannot be selectively permeable to only the useful things, so anything a farm allows into the water reaches the bloodstream quickly.",
        },
        {
          kind: "text",
          value:
            "The second organising fact is ectothermy. A fish does not maintain its own body temperature; it adopts the water's. Enzyme activity, digestion rate, immune function, growth and oxygen consumption therefore all move with water temperature. This is why temperature appears in every other section of this knowledge base and why a farm's thermal regime is a biological specification rather than a comfort setting.",
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
            "Operators who know only the rules follow them until conditions fall outside the situation the rules were written for, and then they are guessing. Operators who understand the physiology can reason about a novel situation: why appetite has fallen at an unchanged oxygen reading, why a pH shift matters more than the number suggests, why fish that looked fine at transfer died three days later.",
        },
        {
          kind: "text",
          value:
            "Biology also explains why so many problems are delayed. The stress response mobilises energy quickly and suppresses immune function slowly, so the consequence of a rough handling event appears days afterwards as disease rather than immediately as mortality. Without that model the two events are never connected, and the same handling practice continues.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Respiration and the countercurrent gill" },
        {
          kind: "text",
          value:
            "Water passes over the gill lamellae in the opposite direction to blood flow within them. This countercurrent arrangement maintains a diffusion gradient along the whole length of the exchange surface, and it is why fish can extract a large fraction of the oxygen from water despite water holding far less oxygen than air. It also means anything that damages lamellar structure, coats it with mucus, or reduces water flow across it cuts oxygen uptake sharply.",
        },
        { kind: "subheading", value: "Nitrogen excretion" },
        {
          kind: "text",
          value:
            "Fish are ammonotelic: they excrete the nitrogen from protein catabolism mostly as ammonia, directly across the gill, rather than converting it to urea at metabolic cost. This is efficient for the animal and inconvenient for the farm, because ammonia enters the culture water continuously and in proportion to protein fed. In water, total ammonia exists in equilibrium between the ionised ammonium form and the un-ionised ammonia form, and only the latter crosses membranes freely. The position of that equilibrium shifts towards the more toxic un-ionised form as pH and temperature rise, which is why the same total ammonia measurement can mean quite different things in two ponds.",
        },
        { kind: "subheading", value: "Osmoregulation" },
        {
          kind: "text",
          value:
            "Freshwater fish are saltier than their surroundings, so water enters them constantly and salts leak out; they respond by producing large volumes of dilute urine and actively taking up ions at the gill. Marine fish face the reverse and drink seawater, excreting excess salt through specialised chloride cells. Both processes cost energy, and both are disrupted by gill damage, sudden salinity change and stress. This is the physiological basis for gradual acclimatisation and for the use of salt as a supportive treatment in some freshwater situations.",
        },
        { kind: "subheading", value: "The stress response" },
        {
          kind: "text",
          value:
            "Stress in fish follows a recognisable sequence: an immediate catecholamine release that raises heart rate, gill perfusion and blood glucose; a slower cortisol response that mobilises energy reserves; and, if the stressor persists, a tertiary phase in which growth slows, osmoregulation is impaired and immune competence declines. Short, resolved stress is survivable and normal. Chronic stress is what turns a healthy population into a susceptible one.",
        },
      ],
    },
    {
      id: "technical-fundamentals",
      heading: "Technical fundamentals",
      blocks: [
        {
          kind: "formula",
          name: "Un-ionised ammonia fraction",
          expression: "f = 1 / (1 + 10^(pKa - pH))",
          terms: [
            { symbol: "f", meaning: "Fraction of total ammonia nitrogen present as un-ionised ammonia", unit: "dimensionless" },
            { symbol: "pKa", meaning: "Dissociation constant of the ammonium-ammonia equilibrium, itself dependent on temperature and ionic strength", unit: "dimensionless" },
            { symbol: "pH", meaning: "Measured pH of the culture water", unit: "dimensionless" },
          ],
          example:
            "Consider a hypothetical case where the pKa at the measured temperature is 9.4 and the water sits at pH 7.4. The un-ionised fraction is about one per cent of total ammonia nitrogen; at pH 8.4 in the same water it would be roughly ten times that, from an identical total ammonia reading.",
          limitations:
            "The relationship is sensitive to temperature and salinity through pKa, and pH in a productive water body swings through the day with photosynthesis, so a single reading may not represent the exposure the animals actually experienced. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Oxygen consumption from a flow-through unit",
          expression: "MO2 = Q x (DOin - DOout) / B",
          terms: [
            { symbol: "MO2", meaning: "Oxygen consumption rate per unit biomass", unit: "mg O2 per kg per hour" },
            { symbol: "Q", meaning: "Water flow through the unit", unit: "L/h" },
            { symbol: "DOin", meaning: "Dissolved oxygen concentration entering the unit", unit: "mg/L" },
            { symbol: "DOout", meaning: "Dissolved oxygen concentration leaving the unit", unit: "mg/L" },
            { symbol: "B", meaning: "Standing biomass in the unit", unit: "kg" },
          ],
          example:
            "Consider a hypothetical tank holding 500 kg of fish, supplied at 30,000 L/h, with inlet and outlet readings differing by 2 mg/L. Consumption is 120 mg of oxygen per kilogram per hour, a figure that can then be tracked across the cycle and against temperature.",
          limitations:
            "The calculation attributes all oxygen depletion to the fish, although biofilm on tank surfaces and suspended solids also respire, and it assumes the outlet sample represents the whole discharge. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "Both formulas are diagnostic instruments. Oxygen consumption per kilogram rises with temperature, with feeding and with activity, and falls as fish grow larger; watching how it moves over a cycle tells an operator more about the population than any single water reading does.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Organ systems and their direct operational consequences on a farm",
          columns: ["System", "Function", "What it means for daily operation"],
          rows: [
            ["Gill", "Gas exchange, ammonia excretion, ion regulation, acid-base balance", "Water quality reaches the bloodstream immediately; gill damage impairs several functions at once"],
            ["Skin and mucus", "Physical barrier, antimicrobial defence, osmotic seal", "Handling that strips mucus opens a route for infection days later"],
            ["Digestive tract", "Nutrient breakdown and absorption, with form varying by feeding habit", "Transit time and enzyme activity are temperature-driven, so feeding rate must follow temperature"],
            ["Swim bladder", "Buoyancy regulation", "Rapid pressure or gas supersaturation changes cause dysfunction and abnormal swimming"],
            ["Kidney", "Water and ion balance, and in part haematopoiesis", "Osmoregulatory load rises with salinity mismatch and with stress"],
            ["Lateral line and sensory organs", "Detection of flow, vibration and chemical cues", "Explains crowding response, feeding behaviour and reaction to disturbance around tanks"],
            ["Immune system", "Innate and adaptive defence, strongly temperature-dependent", "Immune competence falls at low temperature and under sustained cortisol elevation"],
          ],
          basis:
            "A summary of well-established teleost physiology, expressed in terms of its operational consequences rather than as anatomy. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "One surface, several jobs",
          value:
            "Gas exchange, nitrogen excretion and ion regulation share the same gill epithelium. A parasite burden, a chemical irritant or a chronic solids load therefore does not produce a single symptom; it degrades respiration, nitrogen clearance and osmotic balance together, which is why gill problems escalate faster than their initial appearance suggests.",
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
            "The most useful practical skill in fish biology is reading behaviour, because behaviour changes before any laboratory result does. Fish gathering at an inflow or at the surface indicates that oxygen at the point they have left is inadequate. Rapid opercular movement indicates respiratory difficulty, whether from low oxygen, gill damage or a raised carbon dioxide concentration. Flashing against surfaces suggests irritation. Loss of appetite is the broadest early signal there is, and it almost always precedes visible disease.",
        },
        {
          kind: "flow",
          caption: "How a stressor propagates through a fish, and where an operator can still intervene.",
          steps: [
            { label: "Stressor applied", detail: "Handling, crowding, transport, an abrupt water quality change, or a sustained sub-optimal condition." },
            { label: "Primary response", detail: "Catecholamines released within seconds, raising heart rate, gill perfusion and blood glucose." },
            { label: "Secondary response", detail: "Cortisol elevation over minutes to hours, mobilising energy reserves and altering ion balance at the gill." },
            { label: "Behavioural change", detail: "Appetite falls and swimming pattern alters. This is the last easily reversible stage and the point at which intervention is cheapest." },
            { label: "Tertiary response", detail: "If the stressor persists, growth slows, osmoregulation is impaired and immune competence declines." },
            { label: "Clinical outcome", detail: "Opportunistic infection or mortality, typically days after the original event and easily misattributed to a new cause." },
          ],
        },
        {
          kind: "text",
          value:
            "The practical implication is that the interval between the event and the consequence must be held in mind. When investigating a mortality, the question is not only what changed today but what happened to this population over the preceding week.",
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
            "Carbon dioxide is the consideration most often overlooked. Fish excrete it continuously, it is highly soluble, and in systems with limited gas exchange it accumulates. Elevated dissolved carbon dioxide lowers blood pH, reduces the affinity of haemoglobin for oxygen, and therefore causes respiratory distress even when the dissolved oxygen reading looks satisfactory. It also depresses water pH, which incidentally shifts ammonia towards its less toxic form and can mask a rising nitrogen load. Any intensive system that adds oxygen without stripping carbon dioxide is solving half a problem.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Oxygenation is not aeration",
          value:
            "Injecting oxygen raises dissolved oxygen but does little to remove dissolved carbon dioxide or nitrogen. Aeration with air performs gas stripping but cannot push oxygen much above saturation. Systems operated at high density generally need both functions, and treating them as interchangeable is a recurring design error.",
        },
        {
          kind: "text",
          value:
            "Gas supersaturation is the mirror-image risk. Air entrained on the suction side of a pump, or water warmed after being saturated at a lower temperature, can produce total dissolved gas pressure above equilibrium. Gas then comes out of solution inside the animal, causing bubble formation in fins, eyes and gills. It is an engineering fault with a purely biological expression, and it is invisible in a dissolved oxygen reading alone.",
        },
        {
          kind: "text",
          value:
            "Alkalinity links biology to treatment. Nitrification consumes alkalinity, and as alkalinity falls the water loses its ability to resist pH change. Fish experience the resulting pH instability as an osmoregulatory and respiratory stressor, and the nitrifying community itself performs poorly at low alkalinity, so the load rises at the same moment the treatment weakens.",
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
            "Change conditions slowly. Fish tolerate a wide range of temperature, salinity and pH far better than they tolerate rapid movement within that range.",
            "Treat appetite as the primary biological instrument on the farm, and record intake against offered feed rather than only the amount delivered.",
            "Withhold feed before handling, so that the digestive tract is empty and oxygen demand is at its lowest during the event.",
            "Handle in cooler water where the option exists, since oxygen solubility is higher and metabolic demand lower.",
            "Protect the mucus layer during any handling by using wet, smooth equipment and minimising air exposure.",
            "Interpret every water quality reading alongside temperature and pH, because both alter what the same number means to the animal.",
            "Allow a recovery interval after any stressful procedure before applying the next one, rather than combining grading, transport and treatment into one day.",
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
          caption: "Observed signs and the physiological mechanisms that most often explain them",
          columns: ["Observed sign", "Likely physiological mechanism"],
          rows: [
            ["Fish crowding at inflow or gulping at the surface", "Dissolved oxygen inadequate where the fish were, or oxygen carrying capacity reduced by elevated carbon dioxide"],
            ["Rapid opercular movement with adequate dissolved oxygen", "Gill surface compromised by irritation or parasites, or blood pH depressed by dissolved carbon dioxide"],
            ["Appetite falls with no visible lesion", "Early stress response, a water quality parameter outside the optimum band, or temperature outside the digestive range"],
            ["Mortality several days after grading or transport", "Cortisol-mediated immune suppression allowing opportunistic infection to establish"],
            ["Fish darkening and isolating from the group", "Chronic stress or systemic infection, both of which alter pigment control and social behaviour"],
            ["Bubbles in fins or behind the eye", "Total dissolved gas supersaturation, usually from air entrainment or post-saturation warming"],
            ["Loss of balance shortly after transfer", "Swim bladder or osmoregulatory disturbance following an abrupt change in pressure, temperature or salinity"],
          ],
          basis:
            "Associations between clinical presentation and underlying physiology as described in fish health literature, intended to direct investigation rather than to confirm a diagnosis. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Record temperature with every other water measurement, since almost every biological rate and chemical equilibrium in the system depends on it.",
            "Measure dissolved carbon dioxide, or infer it from pH and alkalinity, in any system operated at high density.",
            "Keep a written behavioural baseline for each unit so that a deviation is recognised as a deviation.",
            "Design handling procedures around minimising duration and air exposure rather than around convenience.",
            "Examine gills first in any health investigation, as they carry the earliest evidence of both water quality and parasitic problems.",
            "Correlate mortality events with the preceding week's operations log, not only with the day's water readings.",
            "Train staff in the physiological reasoning behind each rule, so that a novel situation is met with judgement rather than with a rule that does not apply.",
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
            "Aerobic scope is a useful advanced framing. The difference between an animal's maximum sustainable oxygen uptake and the uptake required simply to stay alive is the capacity available for digestion, growth, activity, immune function and recovery from stress. Every environmental burden — elevated temperature, raised carbon dioxide, osmotic mismatch, gill irritation — consumes part of that scope. Growth and immunity are what remain after the compulsory costs are paid, which explains why a fish in marginal conditions can appear healthy while growing poorly and being unusually susceptible to disease.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Chronic sub-lethal exposure",
          value:
            "The effects of long-term exposure to concentrations well below acutely harmful levels — nitrate in heavily recirculated water, low-grade suspended solids, persistent mild hypoxia — on growth, welfare and disease resistance remain an active area of investigation, and the interactions between these factors are not well characterised.",
        },
        {
          kind: "text",
          value:
            "A second advanced theme is thermal history. Fish acclimate physiologically to the temperature regime they have experienced, adjusting enzyme expression, membrane composition and metabolic rate over days to weeks. A population moved to a new temperature performs differently from one that has been held there, and performance data gathered without recording thermal history is difficult to interpret afterwards.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "The gill performs gas exchange, nitrogen excretion and ion regulation on one thin surface, so anything that damages it degrades several functions at once.",
    "Only the un-ionised fraction of total ammonia crosses membranes freely, and pH and temperature govern how large that fraction is.",
    "Ectothermy means water temperature sets metabolic rate, digestion, immune function and oxygen demand simultaneously.",
    "The stress response separates cause from consequence in time, which is why handling errors show up as disease days later.",
    "Dissolved carbon dioxide impairs oxygen transport independently of the dissolved oxygen reading, so oxygenation and gas stripping are different jobs.",
    "Aerobic scope is finite: growth and immunity are funded only by what remains after environmental burdens are paid for.",
  ],
  related: ["species", "water-quality", "fish-health", "feed-nutrition"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Technical material on fish physiology, welfare and environmental requirements in culture.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "World Organisation for Animal Health",
      description: "Standards and guidance on aquatic animal health, welfare and diagnostic approach.",
    },
    {
      organisation: "Southern Regional Aquaculture Center",
      description: "Extension publications explaining fish physiology and water quality interactions for farm use.",
    },
  ],
};
