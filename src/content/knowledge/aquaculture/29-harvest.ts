import type { KnowledgeArea } from "../types";

export const harvest: KnowledgeArea = {
  number: "29",
  slug: "harvest",
  title: "Harvest and Post-Harvest",
  navSummary: "Conditioning, removal, chilling and despatch — the few hours in which a cycle's quality is decided.",
  summary:
    "Harvest is the point at which a season of biological work becomes a product with a grade and a price. The handling sequence — pre-harvest conditioning, crowding, removal, killing, chilling and transport — determines flesh quality, shelf life and buyer acceptance, and none of it can be recovered afterwards by better storage.",
  difficulty: "intermediate",
  topics: ["production", "operations", "health"],
  tags: ["purging", "crowding", "chilling", "cold chain", "grading", "shelf life"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-08-10",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Harvest is the last few hours of a cycle that lasted months, and it can undo all of it. Fish that are stressed, warm or slowly chilled lose quality quickly, and the buyer pays for what arrives rather than for what was grown. Preparing the stock beforehand and getting the temperature down fast are the two things that matter most.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Everything that happens between the decision to harvest and the arrival of product at the buyer belongs to a single continuous process. It begins days earlier with conditioning of the stock, passes through crowding and removal, and continues through killing, chilling, grading, packing and transport. Each step affects the ones after it, and quality lost at any point cannot be regained.",
        },
        {
          kind: "text",
          value:
            "Fish are unusually perishable. Their muscle tissue has a low collagen content, their enzymes remain active at low temperatures, and their surface microflora is adapted to cool conditions. In warm ambient conditions, spoilage begins immediately after death and proceeds at a rate that roughly doubles with each increment of temperature. The dominant variable in post-harvest quality is therefore the time spent above chill temperature, and the dominant intervention is to make that time short.",
        },
        {
          kind: "text",
          value:
            "Before death, the dominant variable is stress. Struggling fish consume muscle glycogen and accumulate lactate, which changes the pH trajectory of the flesh after death, shortens the time to rigor onset, and produces softer texture, greater drip loss and reduced shelf life. Calm handling is not a welfare consideration alone; it is a quality specification.",
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
            "The entire commercial value of a cycle is realised in these hours. Growth, feed conversion and survival determine how much biomass exists; harvest and post-harvest handling determine what grade it achieves and therefore what price it earns. A batch that is downgraded for texture, gaping, off-odour or poor appearance loses value that no upstream efficiency can replace.",
        },
        {
          kind: "text",
          value:
            "Harvest is also the point of maximum operational risk. The farm holds its peak biomass, stock is crowded into a small volume with rapidly falling oxygen, staff are working quickly under time pressure, and equipment is being used in ways it is not used at any other time in the cycle. Mortality during crowding is a well-documented risk and it destroys value at the moment that value is highest.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Temperature and time set shelf life",
          value:
            "Spoilage in chilled fish is governed by microbial growth and enzymatic activity, both of which accelerate with temperature. Shelf life is therefore a function of the cumulative time spent at each temperature, which is why delays early in the chain cannot be compensated by better refrigeration later.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Pre-harvest conditioning" },
        {
          kind: "text",
          value:
            "Feed is withdrawn for a period before harvest so that the gut is empty at the point of death. A full gut accelerates spoilage from the inside, increases the risk of contamination during gutting, and raises oxygen demand during crowding and transport. In some systems a further period in clean water is used to clear off-flavour compounds absorbed from the culture environment, which is a separate objective with a different duration.",
        },
        { kind: "subheading", value: "Crowding and removal" },
        {
          kind: "text",
          value:
            "Crowding concentrates stock so it can be removed efficiently, and it is the most stressful event of the process. Dissolved oxygen falls rapidly in the crowded volume, physical contact causes scale loss and abrasion, and the fish exert themselves heavily. Managing crowding means limiting its duration, supplementing oxygen within the crowded volume, and monitoring the stock rather than the clock.",
        },
        { kind: "subheading", value: "Rigor mortis and the post-mortem sequence" },
        {
          kind: "text",
          value:
            "After death, muscle glycogen is converted to lactate, pH falls, energy reserves are exhausted and the muscle enters rigor. The time to onset and the resolution of rigor influence texture, filleting yield and the tendency to gape. Stressed fish enter rigor sooner and resolve it faster, generally with poorer texture outcomes. Rapid chilling delays the whole sequence.",
        },
        { kind: "subheading", value: "The cold chain" },
        {
          kind: "text",
          value:
            "The cold chain is the unbroken sequence of chilled conditions from the moment of death to the point of sale. Its performance is measured by the worst link, not the average, because any interval spent warm produces microbial growth that subsequent cooling does not reverse. Chain integrity depends on ice quantity, insulation, container design, loading practice and journey planning.",
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
            "Two quantitative relationships govern most harvest planning: how much ice is needed to remove the heat in the fish, and how quickly oxygen is depleted in a crowded or transported volume.",
        },
        {
          kind: "formula",
          name: "Ice requirement for chilling",
          expression: "Mi = (M x Cp x dT) / Lf",
          terms: [
            { symbol: "Mi", meaning: "Mass of ice required to remove the sensible heat of the catch", unit: "kg" },
            { symbol: "M", meaning: "Mass of fish to be chilled", unit: "kg" },
            { symbol: "Cp", meaning: "Specific heat capacity of the fish", unit: "kJ/kg per degree C" },
            { symbol: "dT", meaning: "Temperature reduction required", unit: "degrees C" },
            { symbol: "Lf", meaning: "Latent heat of fusion of ice", unit: "kJ/kg" },
          ],
          example:
            "Consider a hypothetical batch of 500 kg to be brought down through a substantial temperature drop. The calculation gives the ice needed to remove the heat in the fish alone, and the working requirement is larger, because ice is also consumed cooling the container, offsetting heat entering through the walls and holding the temperature for the duration of the journey.",
          limitations:
            "Specific heat varies with species and fat content, the calculation ignores container heat gain and ambient conditions entirely, and it assumes good contact between ice and fish rather than layering that leaves warm pockets. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Oxygen depletion time in a crowded volume",
          expression: "T = (V x (Ci - Cmin)) / (M x R)",
          terms: [
            { symbol: "T", meaning: "Time before dissolved oxygen reaches the minimum acceptable level", unit: "h" },
            { symbol: "V", meaning: "Water volume available to the crowded stock", unit: "m3" },
            { symbol: "Ci", meaning: "Initial dissolved oxygen concentration", unit: "g/m3" },
            { symbol: "Cmin", meaning: "Lowest acceptable dissolved oxygen concentration for the species", unit: "g/m3" },
            { symbol: "M", meaning: "Mass of stock in the crowded volume", unit: "kg" },
            { symbol: "R", meaning: "Oxygen consumption rate per unit mass under stress", unit: "g per kg per h" },
          ],
          example:
            "Consider a hypothetical crowd in which a large mass of fish is concentrated into a small volume. Because the mass term is large and the volume term small, the calculated time is short, and it shortens further because the consumption rate under crowding stress is well above the resting rate used in routine planning.",
          limitations:
            "Consumption under crowding stress is considerably higher and less predictable than resting consumption, surface reaeration is negligible at high loading, and the calculation gives no margin for delay. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "Both formulae point the same way. Harvest tolerances are much tighter than routine operating tolerances, so the plan must be built around the shortest of these times rather than around what is convenient for the harvest crew.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "flow",
          caption: "The harvest and post-harvest chain. Each step has a defined objective and a defined failure mode.",
          steps: [
            { label: "Pre-harvest conditioning", detail: "Feed withdrawal empties the gut, and where required a period in clean water clears absorbed off-flavour compounds. Duration is set by temperature and species." },
            { label: "Planning and readiness", detail: "Ice, containers, chilled transport, labour and the buyer's acceptance window are confirmed before any stock is disturbed." },
            { label: "Crowding", detail: "Stock is concentrated with supplementary oxygen, monitored continuously, and held for the shortest possible period." },
            { label: "Removal", detail: "Fish are lifted or pumped from the water with minimal air exposure, abrasion and scale loss." },
            { label: "Stunning and killing", detail: "A rapid and reliable method minimises struggle, protecting muscle glycogen and therefore texture and shelf life." },
            { label: "Bleeding and dressing", detail: "Where the market requires it, bleeding and gutting are performed promptly and hygienically, using clean water at chill temperature." },
            { label: "Chilling", detail: "Core temperature is brought down as fast as practicable using ice or chilled water, since this interval dominates shelf life." },
            { label: "Grading and packing", detail: "Product is sorted to the buyer's size and quality specification and packed with adequate ice and drainage, held at chill throughout." },
            { label: "Despatch", detail: "Insulated, pre-cooled transport departs with the cold chain intact and documentation, traceability and timing agreed with the buyer." },
          ],
        },
        {
          kind: "table",
          caption: "Harvest methods and what each trades away",
          columns: ["Method", "Where it suits", "Principal risk"],
          rows: [
            ["Seine netting in ponds", "Large earthen units harvested in bulk", "Prolonged crowding, sediment disturbance and abrasion"],
            ["Complete draining", "Ponds where full removal and pond preparation are both required", "Rapidly falling oxygen and rising temperature in the residual volume"],
            ["Tank draw-down and netting", "Tank and raceway systems with controllable water level", "Oxygen depletion in the reduced volume if aeration is not maintained"],
            ["Fish pumping", "High-volume operations with suitable size range", "Mechanical damage if pump selection or pipe geometry is wrong"],
            ["Partial harvest and grading", "Extending market supply and reducing standing biomass", "Handling stress imposed on the fish that remain in the unit"],
            ["Live transport", "Markets that require live product", "Sustained oxygen and ammonia management for the whole journey"],
          ],
          basis:
            "A qualitative comparison of harvest approaches and their characteristic risks, not a performance ranking. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        { kind: "subheading", value: "Off-flavour" },
        {
          kind: "text",
          value:
            "Earthy and musty off-flavours arise from compounds produced by certain microorganisms in the culture environment and absorbed into the flesh. They are not a food safety issue but they are a commercial one, and they are addressed by holding stock in clean water before harvest for a period determined by testing rather than by assumption. Sensory checking of a sample before committing to a harvest is the practical control.",
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
            "A harvest is a logistics operation with a very short window, and most failures are preparation failures rather than execution failures. The sequence below reflects that emphasis.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Agree the specification with the buyer first: size grades, presentation, volume, delivery time and acceptance criteria.",
            "Sample the stock in advance for size distribution and for off-flavour, and confirm the batch will meet the specification before disturbing it.",
            "Begin feed withdrawal at the time appropriate to the species and water temperature, and record when it started.",
            "Confirm ice, containers, chilled transport and labour are on site and pre-cooled before crowding begins.",
            "Harvest during the coolest part of the day where the buyer's schedule allows it.",
            "Crowd in stages, with supplementary oxygen and continuous observation, and remove stock promptly rather than crowding the whole batch at once.",
            "Move fish from water to chill in the shortest practicable time, and measure that interval rather than estimating it.",
            "Grade and pack to specification with adequate ice and drainage, keeping product out of direct sun and moving air.",
            "Record temperatures at despatch and, where possible, on arrival, so the chain can be reviewed against the outcome.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Rehearse before the first commercial harvest",
          value:
            "A trial run on a small quantity exposes container shortfalls, pump damage, drainage problems and timing errors while the cost of finding them is small. Discovering them during a full harvest is expensive and cannot be paused.",
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
            "The biological considerations centre on stress physiology. Struggling depletes muscle glycogen, raises lactate and cortisol, and alters the post-mortem pH trajectory in ways that reduce texture quality, water-holding capacity and shelf life. Air exposure, abrasion and rapid temperature change each add to that load. Every design choice in the harvest sequence should be judged by how much struggling it causes.",
        },
        {
          kind: "text",
          value:
            "The engineering considerations centre on capacity and hygiene. Ice-making or ice supply must match peak hourly throughput rather than daily tonnage. Chilling capacity must be sized against the heat content of the catch plus container and ambient heat gain. Contact surfaces, containers and water used after killing must be clean, because from that point the product is a food and every surface it touches is part of its microbial history.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Conditioning periods are situational",
          value:
            "The appropriate duration of feed withdrawal and of clean-water holding depends on species, water temperature, feed type and the specific off-flavour problem present. These are determined by observation and testing on a given farm, and a period copied from another operation is an assumption rather than a specification.",
        },
        {
          kind: "text",
          value:
            "Indian conditions add particular difficulty. High ambient temperatures shorten every permissible interval, ice availability and quality vary between locations, road journeys can be long relative to the product's tolerance, and much production reaches market through channels where the cold chain is not continuously controlled. Planning around the actual chain rather than the intended one is essential.",
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
            "Write the harvest plan down and brief every person involved on their specific role before crowding starts.",
            "Nominate one person to watch the stock during crowding, with the authority to stop the operation, and give them nothing else to do.",
            "Maintain supplementary oxygen and monitoring in every crowded volume, and treat crowding duration as the tightest constraint in the plan.",
            "Measure and record the interval from removal to chill for each batch, since it is the most predictive number in the whole process.",
            "Keep post-kill hygiene as a separate discipline from farm hygiene, with dedicated clean containers, clean water and clean surfaces.",
            "Reconcile harvested quantity against the stock record, and investigate the discrepancy rather than adjusting the record to match.",
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
          caption: "Frequent harvest and post-harvest defects and their usual origin",
          columns: ["Observation", "Usual underlying cause"],
          rows: [
            ["Soft texture and excessive drip loss", "Severe pre-slaughter stress depleting muscle glycogen, often from prolonged crowding"],
            ["Gaping in fillets", "Fillets worked during rigor, or rapid temperature change before rigor resolution"],
            ["Short shelf life despite adequate ice on arrival", "A long interval between removal from water and the start of chilling"],
            ["Scale loss, bruising and skin damage", "Abrasive contact during crowding, unsuitable pump geometry or excessive handling"],
            ["Earthy or musty flavour", "Insufficient holding in clean water, or holding water that carried the same problem"],
            ["Mortality during crowding", "Oxygen depletion in the crowded volume, or crowding held too long while waiting for transport"],
            ["Batch rejected on size specification", "Grading performed on an unrepresentative sample, or size distribution never checked before harvest"],
            ["Product warm on arrival despite ice at despatch", "Ice quantity calculated for the fish alone, without allowance for container and journey heat gain"],
          ],
          basis:
            "Defect patterns commonly described in fish handling and post-harvest technology literature, presented as diagnostic starting points rather than conclusions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Plan the harvest backwards from the buyer's acceptance window, so the cold chain is continuous from the first fish to the last.",
            "Crowd in small batches sized to what the killing and chilling line can absorb, rather than crowding the whole unit at once.",
            "Use a stunning method that is rapid and reliable for the species, and verify insensibility rather than assuming it.",
            "Chill to core temperature quickly, using chilled water where volumes and species allow, since it removes heat faster than ice contact alone.",
            "Pre-cool containers and transport, and load them so that meltwater drains away from the product.",
            "Keep traceability from unit to consignment, so a quality complaint can be linked back to a specific batch and its records.",
            "Review every consignment against its outcome, and treat downgrades as process information rather than as bad luck.",
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
            "Advanced practice concentrates on the biochemistry of the immediate post-mortem period. The rate of pH decline, the timing of rigor onset and resolution, and the residual energy status of the muscle at death together determine texture, water-holding capacity, colour stability and filleting yield. Because all of these depend on how much the animal struggled and how quickly it was cooled, the harvest procedure is effectively a control system for flesh quality.",
        },
        {
          kind: "text",
          value:
            "This creates a genuine trade-off. Very rapid chilling before rigor can, in some species, produce contraction effects that harm texture, while slower chilling allows more microbial growth. The optimum sequence and its timing differ by species, size and intended product form, and are established by trial on a given operation rather than adopted wholesale from another.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Areas of continuing development",
          value:
            "Work across the sector continues on humane and reliable stunning methods for a wider range of farmed species, on superchilling and modified atmosphere approaches for extending chilled shelf life, on objective instrumental measures of freshness, and on cold chain monitoring suitable for distributed supply chains. These are developing directions rather than settled practice.",
        },
        {
          kind: "text",
          value:
            "Finally, harvest scheduling is a production decision as much as a logistics one. Partial harvesting reduces standing biomass and therefore the load on the plant, extends the supply period and can improve realised price by matching size grades to demand, but it imposes repeated handling on the stock that remains. Whether that trade is worthwhile depends on the species' tolerance of handling and on how much the market rewards continuity of supply.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Harvest quality is decided in hours, and nothing done in storage afterwards recovers what is lost during removal and chilling.",
    "Pre-slaughter stress depletes muscle glycogen and alters the post-mortem pH trajectory, producing softer texture and shorter shelf life.",
    "The interval between removal from water and the start of chilling is the most predictive single measurement in the process.",
    "Crowding is the highest-risk step of the cycle, combining peak biomass, rapidly falling oxygen and time pressure on staff.",
    "Ice requirements must allow for container and journey heat gain, not only for the sensible heat of the fish.",
    "Most harvest failures are preparation failures, so readiness of ice, containers, transport and labour should be confirmed before any stock is disturbed.",
  ],
  related: ["grow-out", "economics", "fish-health", "sustainable"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Guidance on fish handling, chilling, quality assurance and post-harvest technology.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "World Organisation for Animal Health",
      description: "Standards and guidance on the welfare of farmed aquatic animals, including handling and slaughter.",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute work and extension material on fish processing, preservation and cold chain practice in India.",
    },
  ],
};
