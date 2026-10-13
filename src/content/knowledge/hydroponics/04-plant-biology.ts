import type { KnowledgeArea } from "../types";

export const plantBiology: KnowledgeArea = {
  number: "04",
  slug: "plant-biology",
  title: "Plant Biology for Hydroponics",
  navSummary: "Roots, uptake, transpiration, photosynthesis and development, and how each one constrains the system.",
  summary:
    "Every hydroponic control decision is an attempt to keep a biological process inside its working range. Root respiration sets the oxygen requirement, the transpiration stream carries most of the mineral uptake, vapour pressure deficit governs that stream, and photosynthesis with source-sink allocation decides where the resulting biomass goes. Understanding the mechanism is what makes a setpoint meaningful.",
  difficulty: "intermediate",
  topics: ["biology", "climate", "nutrition"],
  tags: ["root anatomy", "ion uptake", "transpiration", "vapour pressure deficit", "photosynthesis", "phenology"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-22",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Roots breathe and need oxygen in the water around them. Water is pulled up through the plant because it evaporates from the leaves, and most minerals ride along in that stream. Leaves use light and carbon dioxide to make sugars, and the plant decides how much of that sugar goes into leaves, roots or fruit. Almost every problem in a hydroponic crop is one of these four processes being blocked.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "A hydroponic system is only meaningful in relation to the plant it serves. Solution temperature matters because root respiration and oxygen solubility respond to it. Humidity matters because it sets how fast water leaves the leaf and therefore how fast calcium reaches the growing point. Light matters because photosynthesis is the only source of the carbon that becomes yield.",
        },
        {
          kind: "text",
          value:
            "This section covers five areas: root anatomy and oxygen demand, water and ion uptake, transpiration and vapour pressure deficit, photosynthesis and source-sink relations, and phenology. They are treated together because they are coupled. Changing the environment to help one of them almost always changes the operating point of another.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why mechanism beats setpoints",
      blocks: [
        {
          kind: "text",
          value:
            "A grower who knows a target humidity and nothing else can hold it and still lose a crop, because the target was appropriate for a different leaf area, a different light level or a different stage. A grower who understands that humidity acts through vapour pressure deficit on the transpiration stream can reason about what to do when the light doubles or the canopy closes.",
        },
        {
          kind: "text",
          value:
            "Mechanism is also what makes diagnosis possible. Blossom end rot in a fruit is not solved by adding calcium to the tank when the actual failure is calcium transport, which depends on the transpiration stream reaching a low-transpiring organ during a period of rapid expansion. Without the mechanism, the response is to dose more of an element already present in excess.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Calcium moves in the transpiration stream",
          value:
            "Calcium is carried in the xylem and is not appreciably redistributed by the phloem afterwards. Organs that transpire little, such as enclosed leaves and expanding fruit, receive it poorly whatever the concentration in the solution.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Root anatomy and oxygen demand" },
        {
          kind: "text",
          value:
            "A root is not a uniform tube. Behind the tip lies a zone of elongation and then a zone of root hairs, and it is this young region that does most of the water and ion absorption. Older root sections suberise, becoming conductive pipework rather than absorbing surface. This is why root growth and yield are linked: a plant that stops producing new root loses absorbing area even while its total root mass looks unchanged.",
        },
        {
          kind: "text",
          value:
            "Root tissue respires to power active ion transport and growth. That respiration requires oxygen, and roots cannot obtain it from the air unless the system provides access. Respiration rate rises with temperature while oxygen solubility in water falls with it, so warm standing water is a compounding problem rather than a single one. Under low oxygen, active transport slows first, then root tips die, and the loss of absorbing surface persists long after the oxygen is restored.",
        },
        { kind: "subheading", value: "Water and ion uptake" },
        {
          kind: "text",
          value:
            "Water moves into the root along a water potential gradient, driven ultimately by evaporation at the leaf. It travels through the cortex both between cells and through them, but at the endodermis a suberised band forces everything through a cell membrane. That membrane is where selectivity happens: the plant controls which ions enter rather than passively accepting whatever the solution contains.",
        },
        {
          kind: "text",
          value:
            "Ion uptake therefore has two components. Mass flow carries ions along with the transpiration stream, and active transport moves specific ions against their concentration gradient at metabolic cost. Nitrate and potassium are taken up strongly and actively; calcium and several others depend far more on mass flow. This split explains why some elements deplete quickly in a recirculating tank while others accumulate, and why raising a concentration does not reliably raise uptake.",
        },
        { kind: "subheading", value: "Transpiration and vapour pressure deficit" },
        {
          kind: "text",
          value:
            "Stomata open to admit carbon dioxide and lose water while they are open. Transpiration is the price of photosynthesis, and it also cools the leaf and drives the mineral-carrying stream. The rate depends on the difference between the water vapour pressure inside the leaf, which is close to saturation at leaf temperature, and that of the surrounding air. That difference is the vapour pressure deficit.",
        },
        {
          kind: "text",
          value:
            "Both extremes cause problems. A very low deficit, meaning humid air, slows transpiration and with it calcium delivery, and leaves water sitting on tissue where pathogens establish. A very high deficit drives water loss faster than the roots can supply, so stomata close, photosynthesis stops and the plant wilts while its root zone is wet. The workable range differs by crop, by stage and by how much light is falling on the canopy at the time.",
        },
        { kind: "subheading", value: "Photosynthesis and source-sink relations" },
        {
          kind: "text",
          value:
            "Photosynthesis converts light energy, carbon dioxide and water into sugars. Its rate rises with light until another factor becomes limiting, usually carbon dioxide supply, temperature or the plant's own capacity to use the products. Respiration runs continuously and consumes some of the output, so net gain is the difference between the two, and a warm night with no light is a net cost.",
        },
        {
          kind: "text",
          value:
            "The sugars produced are exported from leaves, which act as sources, to sinks: growing points, roots, and above all developing fruit. Sinks compete. A heavy fruit load draws assimilate away from root and leaf growth, which is why an overloaded plant develops a thin head and a weak root system and then cannot support the next set of fruit. Managing that competition is what crop steering does.",
        },
        { kind: "subheading", value: "Phenology" },
        {
          kind: "text",
          value:
            "Development is a sequence of stages, and the plant's requirements change at each transition. Germination, establishment, vegetative growth, floral initiation, fruit set and fruit fill each have a different water demand, nutrient ratio and stress sensitivity. Some transitions are triggered by daylength, some by accumulated temperature, and some by the plant's own carbohydrate status. A stress applied during a sensitive window, particularly around flowering, produces a consequence that appears weeks later and cannot be undone.",
        },
      ],
    },
    {
      id: "technical-fundamentals",
      heading: "Technical fundamentals",
      blocks: [
        {
          kind: "formula",
          name: "Vapour pressure deficit",
          expression: "VPD = e_s(T_leaf) - e_a",
          terms: [
            { symbol: "VPD", meaning: "Difference between saturation vapour pressure at the leaf and actual vapour pressure of the air", unit: "kPa" },
            { symbol: "e_s(T_leaf)", meaning: "Saturation vapour pressure at leaf temperature", unit: "kPa" },
            { symbol: "e_a", meaning: "Actual vapour pressure of the surrounding air", unit: "kPa" },
          ],
          example:
            "Consider a hypothetical canopy where the leaf sits slightly below air temperature because it is transpiring under moderate light. The saturation pressure inside the leaf is then lower than it would be at air temperature, so the true deficit is smaller than a calculation using air temperature alone suggests. Under strong radiation with closed stomata the leaf runs hotter than air and the deficit is larger than the room reading implies.",
          limitations:
            "Deficit calculated from air temperature alone ignores the leaf-to-air temperature difference, which changes with radiation, air movement and stomatal state. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "formula",
          name: "Net carbon gain over a day",
          expression: "Net = P_gross - R_day - R_night",
          terms: [
            { symbol: "Net", meaning: "Net carbon assimilated and available for growth", unit: "g CO2 equivalent per plant per day" },
            { symbol: "P_gross", meaning: "Gross photosynthesis during the light period", unit: "g CO2 equivalent per plant" },
            { symbol: "R_day", meaning: "Respiration during the light period", unit: "g CO2 equivalent per plant" },
            { symbol: "R_night", meaning: "Respiration during the dark period", unit: "g CO2 equivalent per plant" },
          ],
          example:
            "Consider a hypothetical crop in which night temperature is raised to accelerate development. Night respiration rises with it and consumes a larger share of the day's assimilate, so faster development is paid for with less accumulated biomass. Whether that trade is worthwhile depends on whether the crop is sold by weight or by earliness.",
          limitations:
            "Respiration is split between maintenance and growth components that respond differently to temperature and plant size, so the relationship is not a simple subtraction in practice. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "table",
          caption: "Physiological processes and the system variables that control them",
          columns: ["Process", "Primary controlling variable", "Consequence when it moves out of range"],
          rows: [
            ["Root respiration", "Dissolved oxygen and root-zone temperature", "Active uptake slows, root tips die, absorbing surface is lost"],
            ["Water uptake", "Water potential gradient and root health", "Wilting despite a wet root zone when supply cannot match demand"],
            ["Active ion transport", "Root energy status, oxygen, pH at the root surface", "Selective deficiency with no change in total solution concentration"],
            ["Transpiration", "Vapour pressure deficit and air movement", "Calcium-related disorders when too slow; stomatal closure when too fast"],
            ["Photosynthesis", "Light, carbon dioxide, leaf temperature", "Assimilate supply falls below what the current sink load requires"],
            ["Assimilate partitioning", "Sink strength, fruit load, temperature regime", "Vegetative or generative imbalance, weak head or poor fruit fill"],
            ["Development rate", "Accumulated temperature and daylength signals", "Stage transitions arrive out of step with the plant's carbon supply"],
          ],
          basis:
            "A structural mapping of physiological processes to controllable variables, not measured response data. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "How the processes connect",
      blocks: [
        {
          kind: "flow",
          caption: "The chain from environment to yield. Diagnosis works backwards along it, because a symptom appears downstream of its cause.",
          steps: [
            { label: "Light at the canopy", detail: "Supplies the energy for photosynthesis and, through radiation load, raises leaf temperature." },
            { label: "Stomatal opening", detail: "Admits carbon dioxide and permits water loss; regulated by light, humidity and plant water status." },
            { label: "Transpiration stream", detail: "Water pulled from root to leaf, carrying dissolved minerals with it." },
            { label: "Root uptake", detail: "Water and ions cross the root, with selectivity imposed at the endodermal membrane and powered by respiration." },
            { label: "Xylem transport", detail: "Delivers water and mass-flow minerals to organs in proportion to how much they transpire." },
            { label: "Photosynthesis", detail: "Produces sugars in the leaf, limited by whichever of light, carbon dioxide and temperature is scarcest." },
            { label: "Phloem allocation", detail: "Distributes assimilate to competing sinks according to their relative strength and the plant's stage." },
            { label: "Growth and yield", detail: "The visible result, appearing days or weeks after the conditions that determined it." },
          ],
        },
        {
          kind: "text",
          value:
            "The important property of this chain is delay. Conditions during flower initiation determine fruit that will be picked weeks later, and root damage from a warm week appears as canopy weakness afterwards. A grower reading only today's canopy is reading the record of a previous fortnight.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The limiting factor governs the response",
          value:
            "Increasing any input raises output only while that input is the one in shortest supply. Adding light to a crop already limited by carbon dioxide, temperature or root capacity increases the energy bill and the stress, not the yield.",
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
            "Physiology becomes usable when it is read off the plant. Plants report their own state continuously, and those signals are more direct than any environmental sensor.",
        },
        {
          kind: "list",
          items: [
            "Root colour and structure. White, branching, actively growing tips indicate an adequate root zone; brown, sparse or slimy roots indicate an oxygen, temperature or pathogen problem.",
            "Time of day of wilting. Wilting at peak radiation with a wet root zone points to supply rate or root capacity, not to water availability.",
            "Guttation and leaf-edge moisture in the early morning. It indicates root pressure with very low transpiration, which is a humidity and air movement observation.",
            "Stem diameter measured at a fixed position over time, which reflects the balance between assimilate supply and sink demand.",
            "Flowering position relative to the growing point in fruiting crops, which reports whether the plant is running vegetative or generative.",
            "Leaf colour and where symptoms appear. Mobile elements show first on old leaves and immobile ones on new growth, which narrows the cause immediately.",
          ],
        },
        {
          kind: "text",
          value:
            "These observations cost nothing but time and are more reliable than a single tank reading, because they integrate everything the plant experienced rather than the state of the water at one moment.",
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
            "Root zone and canopy are coupled through the transpiration stream, which means an environmental change is also a nutritional change. Raising ventilation to reduce disease pressure increases the vapour pressure deficit, increases transpiration, and increases the water and calcium flux to the leaves at the expense of the fruit. None of those consequences appears in the humidity setpoint.",
        },
        {
          kind: "text",
          value:
            "Temperature acts at both ends of the plant and does not have to be the same at both. Root-zone temperature governs respiration, oxygen availability and uptake; canopy temperature governs photosynthesis, development rate and pollen viability. Systems that allow them to be managed separately, such as substrate systems with cooled solution, offer control that a single air-temperature setpoint cannot.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Averages hide stress",
          value:
            "A daily average within range can conceal hours spent outside it. Pollen viability, calcium transport and root oxygen respond to the extreme, not to the mean, so exposure duration outside the range is usually the more informative figure.",
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
            "Inspect roots at a fixed interval and record what was seen, not only when something looks wrong.",
            "Interpret humidity through vapour pressure deficit alongside light level, rather than as a standalone number.",
            "Treat night temperature as a cost as well as a development lever, since respiration consumes assimilate with no light to replace it.",
            "Look for deficiency symptoms by leaf age before adjusting any recipe, because position on the plant identifies mobility and narrows the candidate elements.",
            "Match sink load to current light. Reducing fruit load in a dull period is a physiological decision, not an admission of failure.",
            "Record the duration of excursions outside the crop's range, not just the daily averages.",
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
          caption: "Physiological symptoms and their mechanism",
          columns: ["Symptom", "Mechanism involved"],
          rows: [
            ["Wilting at midday with a saturated root zone", "Root water supply rate below demand, usually from lost absorbing surface or low oxygen"],
            ["Necrosis at leaf margins of new enclosed growth", "Calcium delivery failing at a low-transpiring organ during rapid expansion"],
            ["Yellowing between veins of the oldest leaves", "Remobilisation of a phloem-mobile element from old tissue to new growth"],
            ["Yellowing on the newest growth only", "An immobile element unavailable at the root surface, often a pH availability issue"],
            ["Flowers dropping without setting fruit", "Temperature or humidity outside the range for pollen viability and release"],
            ["Thin growing point and small leaves under a heavy fruit load", "Sink competition, with fruit drawing assimilate away from vegetative growth"],
            ["Slow growth despite adequate light and nutrition", "Root-zone oxygen or temperature limiting active uptake and respiration"],
          ],
          basis:
            "Mechanistic starting points drawn from plant physiology as generally described, requiring confirmation on the crop rather than treated as diagnoses. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
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
            "Protect the root zone first: oxygen and temperature there limit everything that happens above.",
            "Maintain air movement through the canopy so that leaves are not sitting in their own boundary layer of saturated air.",
            "Manage the vapour pressure deficit as a function of light rather than holding one humidity figure through the day.",
            "Keep sink load proportionate to the current light supply in fruiting crops.",
            "Diagnose from symptom position and timing before touching the nutrient recipe.",
            "Record plant measurements alongside environmental data so that the two can be read together after the fact.",
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
            "Beyond steady-state physiology lie the dynamics. Stomatal response, root pressure and assimilate transport all have characteristic timescales, and control systems that ignore them oscillate. Irrigation triggered on a signal that lags the plant's actual water status by an hour will chase the crop rather than serve it.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Root-zone microbial communities",
          value:
            "The composition and function of microbial communities in soilless root zones, and how far they can be managed to suppress disease or support uptake, is an active area with results that appear to depend heavily on system type and crop.",
        },
        {
          kind: "text",
          value:
            "The other frontier is non-destructive plant measurement. Continuous stem diameter, sap flow, chlorophyll fluorescence and thermal imaging all offer a reading of plant state rather than environment state. Their practical value depends on calibration for the specific crop and on having a defined action for each signal, which is more often the missing piece than the sensor itself.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Roots respire and require dissolved oxygen; warm water simultaneously raises their demand and lowers the supply.",
    "Ion uptake is selective and partly active, so concentration in the tank does not translate directly into uptake by the plant.",
    "Transpiration driven by vapour pressure deficit carries calcium and other mass-flow elements, so humidity is a nutritional variable.",
    "Photosynthesis is capped by whichever input is scarcest, and respiration, especially at night, is a continuous cost against it.",
    "Sinks compete: an excessive fruit load starves root and vegetative growth and reduces the plant's future capacity.",
    "The chain from environment to yield contains delays, so today's symptom reports conditions from days or weeks earlier.",
  ],
  related: ["fundamentals", "root-zone", "climate-control", "nutrients"],
  furtherReading: [
    {
      organisation: "Wageningen University and Research",
      description: "Public material on greenhouse crop physiology, climate strategy and plant response.",
    },
    {
      organisation: "International Society for Horticultural Science",
      description: "Working groups covering protected cultivation, crop physiology and plant nutrition.",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute publications on crop physiology and protected cultivation under Indian conditions.",
    },
  ],
};
