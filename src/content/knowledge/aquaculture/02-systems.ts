import type { KnowledgeArea } from "../types";

export const systems: KnowledgeArea = {
  number: "02",
  slug: "systems",
  title: "Aquaculture Systems",
  navSummary: "The families of culture system, what each one controls, and how to choose between them.",
  summary:
    "An aquaculture system is the physical arrangement that holds water, holds animals and moves waste away from them. Ponds, cages, raceways, recirculating plants, biofloc units and aquaponic loops are not competing technologies so much as different answers to one question: how much of the animal's environment is the farm willing to build, power and maintain. The choice fixes capital cost, running cost, staffing and failure behaviour for the life of the farm.",
  difficulty: "beginner",
  topics: ["systems", "engineering", "water"],
  tags: ["culture systems", "water exchange", "system selection", "capital cost", "failure modes"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-17",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Every culture system does the same three jobs: supply oxygen, remove waste, and keep the animals contained. What differs is who does the work. In a pond the water body and the weather do most of it; in a recirculating plant, pumps, blowers and filters do all of it, and somebody pays the electricity bill.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "A culture system is usually described by its shape — a pond, a tank, a net enclosure — but the shape is the least interesting part of it. What defines a system is its water regime: whether water passes through once and leaves, is exchanged partially, is treated and returned, or is barely exchanged at all and instead conditioned in place by a microbial community. That regime determines everything downstream, from the pumps required to the response time available when something fails.",
        },
        {
          kind: "text",
          value:
            "The systems in common use fall into a small number of families. Static and semi-static ponds rely on natural productivity and periodic exchange. Cages suspend the culture volume inside a larger water body and let that body do the treatment. Flow-through raceways use a large, continuous supply of clean water. Recirculating aquaculture systems treat and reuse the same water. Biofloc systems convert waste in situ through a managed heterotrophic community. Aquaponic systems route dissolved nutrients into a plant crop. Integrated multi-trophic arrangements combine species so that one animal's waste is another organism's input.",
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
            "System choice is the least reversible decision a farm makes. Species can be changed between cycles, feed suppliers can be changed in a week, staff can be trained. Concrete, earthworks, pumps and buildings cannot be changed without writing off the investment that created them. A farm that chooses a system unsuited to its water source, its power reliability or its market spends the rest of its life compensating for that choice.",
        },
        {
          kind: "text",
          value:
            "The choice also fixes the skills required. A pond farm is an agricultural business with a strong seasonal rhythm and a tolerance for approximate control. A recirculating plant is a small process industry that happens to contain fish, requiring continuous monitoring, mechanical maintenance and staff who understand why the biofilter matters. Recruiting for one and building the other is a common and expensive mismatch.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Water exchange rate" },
        {
          kind: "text",
          value:
            "Exchange rate is the proportion of a system's volume replaced with new water per unit time. It is the single most useful descriptor of a system, because it says how much of the waste-handling burden is exported and how much must be handled internally. A high exchange rate buys simplicity at the cost of water and pumping energy; a low exchange rate buys water independence at the cost of treatment equipment and the risk that comes with depending on it.",
        },
        { kind: "subheading", value: "Internal versus external treatment" },
        {
          kind: "text",
          value:
            "Every system treats its waste somewhere. In a cage, treatment happens in the surrounding water body and the farm neither pays for it nor controls it. In a pond, treatment happens in the sediment and the algal community, on a timescale of days. In a recirculating system, treatment happens in named unit processes with measurable performance. Moving treatment inside the farm boundary makes it controllable and also makes it the farm's responsibility when it fails.",
        },
        { kind: "subheading", value: "Buffer and response time" },
        {
          kind: "text",
          value:
            "Buffer is how long a system holds acceptable conditions after its supporting processes stop. It scales roughly with water volume per unit of biomass. A large, lightly stocked pond can lose all mechanical support overnight without loss. A densely stocked tank loses its dissolved oxygen in a time measured in minutes. Buffer, not sophistication, is what determines how much alarm and standby capacity a system needs.",
        },
        {
          kind: "flow",
          caption: "The common path of water through an intensive culture system, and what each stage is responsible for.",
          steps: [
            { label: "Culture unit", detail: "Where the animals are held, feed is delivered and waste is generated. Hydraulics here also determine whether solids are carried out or settle in place." },
            { label: "Solids removal", detail: "Settled or screened separation of faeces and uneaten feed, taken out while the particles are still intact." },
            { label: "Biological treatment", detail: "Nitrifying and other microbial communities converting dissolved nitrogen into less harmful forms." },
            { label: "Gas exchange", detail: "Oxygen added and dissolved carbon dioxide and nitrogen stripped, usually in the same unit." },
            { label: "Disinfection", detail: "Optional reduction of pathogen load in the returning stream, where the biosecurity plan calls for it." },
            { label: "Return", detail: "Conditioned water delivered back to the culture unit at the flow and inlet velocity the unit was designed around." },
          ],
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
            "Two quantities describe how a system behaves hydraulically, and both are more informative than tank size on its own.",
        },
        {
          kind: "formula",
          name: "Hydraulic retention time",
          expression: "HRT = V / Q",
          terms: [
            { symbol: "HRT", meaning: "Time an average parcel of water spends in the unit", unit: "h" },
            { symbol: "V", meaning: "Effective water volume of the unit", unit: "m3" },
            { symbol: "Q", meaning: "Volumetric flow rate through the unit", unit: "m3/h" },
          ],
          example:
            "Consider a hypothetical culture tank of 60 m3 supplied at 90 m3/h. Retention time is about 0.67 hours, so the tank contents turn over roughly every forty minutes and waste has that long, on average, to accumulate before it is carried to treatment.",
          limitations:
            "The calculation assumes ideal mixing, which no real tank achieves; short-circuiting and dead zones mean parts of the volume are exchanged far faster or slower than the average implies. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "System recirculation fraction",
          expression: "R = (Qt - Qn) / Qt",
          terms: [
            { symbol: "R", meaning: "Fraction of the circulating flow that is reused rather than replaced", unit: "dimensionless" },
            { symbol: "Qt", meaning: "Total flow delivered to the culture units", unit: "m3/h" },
            { symbol: "Qn", meaning: "New water added to the system over the same period", unit: "m3/h" },
          ],
          example:
            "Consider a hypothetical system circulating 100 m3/h of which 5 m3/h is new water. The recirculation fraction is 0.95, meaning ninety-five per cent of the flow has been treated and returned and only the remainder dilutes accumulating substances.",
          limitations:
            "A high recirculation fraction concentrates any substance the treatment train does not remove, including nitrate, alkalinity by-products and dissolved organic matter, so it must be read alongside what the treatment actually does. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "These two quantities pull in opposite directions. Reducing new water raises the recirculation fraction and therefore the treatment burden; raising flow through the culture unit shortens retention time and improves waste transport but increases pumping energy. Most system design is the negotiation of that pair against a species requirement and an energy budget.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "System families compared by water regime, treatment location and characteristic constraint",
          columns: ["System", "Water regime", "Where treatment happens", "Characteristic constraint"],
          rows: [
            ["Earthen pond", "Static with periodic exchange", "Sediment, algae and natural microbial community", "Weather, evaporation and slow response to any problem"],
            ["Cage or pen", "Continuous natural exchange", "The surrounding water body", "No control over incoming water quality or external events"],
            ["Flow-through raceway", "High continuous single-pass flow", "Downstream of the farm, after discharge treatment", "Availability of a large, clean, gravity-fed water supply"],
            ["Recirculating system", "Very low exchange with engineered treatment", "Named unit processes inside the farm", "Capital cost, energy dependence and technical staffing"],
            ["Biofloc unit", "Minimal exchange with in-situ conversion", "Suspended heterotrophic community in the culture water", "Continuous aeration and a carefully managed carbon balance"],
            ["Aquaponic loop", "Low exchange with nutrient recovery", "Biofilter and plant uptake in series", "Fish and plant optima that do not naturally coincide"],
            ["Integrated multi-trophic", "Variable, usually open water", "Extractive species stocked alongside the fed species", "Species compatibility, siting and harvest logistics"],
          ],
          basis:
            "A structural comparison of how each family handles water and waste, offered to frame selection rather than to rank performance. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "Hybrid arrangements are increasingly common and often more rational than any pure form. Partial-reuse systems recirculate a fraction of the flow to reduce pumping without carrying a full treatment train. Pond farms add mechanical aeration and central drains, borrowing intensive techniques without abandoning the earthen structure. A hatchery may run recirculating larval tanks while its grow-out is entirely pond-based.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "The system follows the water source",
          value:
            "In practice the water available at a site rules out most options before any preference is expressed. A site with a large, cool, clean gravity supply naturally suits flow-through; a site with a limited borewell of variable chemistry naturally suits recirculation; a sheltered coastal lease naturally suits cages. Selection usually means recognising the constraint rather than choosing freely.",
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
            "System selection is a screening exercise rather than an optimisation. Each candidate is tested against the site's fixed conditions, and the ones that survive are then compared on cost and risk. Doing this in the wrong order — choosing the system first and then looking for a site that supports it — is how farms end up trucking water or running generators as a routine cost.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Characterise the water source across a full year: volume available, temperature range, salinity, hardness, alkalinity and contaminants, measured rather than reported.",
            "Establish the reliability of grid power and the real cost of standby generation at the site.",
            "Identify the species the market wants and the temperature and salinity range it requires.",
            "Eliminate every system family the water and power cannot support, and write down why.",
            "For the survivors, estimate capital cost, energy per kilogram produced and staffing requirement at the intended production scale.",
            "Compare the failure behaviour of each survivor: how long conditions stay acceptable with no power, and what standby capacity closes that gap.",
            "Select on total risk-adjusted cost rather than capital cost alone, since the cheapest structure often carries the highest running cost.",
          ],
        },
        {
          kind: "text",
          value:
            "Scale interacts with this in a way that is easy to underestimate. Treatment equipment, instrumentation and technical staff are largely fixed costs, so intensive systems become more defensible as throughput rises. A small recirculating unit carries the same complexity as a large one and spreads it over far less production.",
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
            "Culture unit hydraulics deserve more attention than they usually receive. A circular tank with a properly angled inlet establishes a rotational flow that carries settleable solids to a central drain, keeping the animals in clean water and removing waste while the particles are still whole. A rectangular tank without that pattern accumulates solids in corners, where they break down, consume oxygen and release dissolved nitrogen back into the water. The same volume, the same fish and the same filter can give quite different results depending on how water enters.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Solids are best removed early and intact",
          value:
            "Faecal and feed particles release dissolved nitrogen and consume oxygen as they break apart. Any system design that lets solids remain in suspension or in dead zones converts a manageable solid load into a dissolved load, which is far more expensive to treat.",
        },
        {
          kind: "text",
          value:
            "Biologically, the system also shapes behaviour. Fish in a raceway orient into the current and distribute along its length; fish in a circular tank swim continuously against rotation, which can improve condition but also raises maintenance energy demand. Cage-held fish school in a volume they cannot leave and are exposed to whatever passes through the net. These differences change feeding response, grading behaviour and the observability of early disease signs.",
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
            "Operate the system within the envelope it was designed for. Adding biomass beyond the treatment train's capacity converts a well-designed system into an overloaded one without any visible change.",
            "Treat flow rate as a controlled variable and verify it, since pumps degrade, screens foul and the delivered flow drifts below the design figure long before anyone notices.",
            "Maintain the solids removal stage first among all maintenance tasks, because every other unit process performs worse when it is fed poorly clarified water.",
            "Keep a written record of what each unit process is achieving, not merely that it is running, so degradation is detected as a trend.",
            "Match staffing patterns to buffer time. A system that fails in minutes requires either somebody present or an alarm that reliably wakes somebody.",
            "Plan disinfection, drying and restocking of each unit between cycles as part of the operating routine rather than as an exceptional event.",
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
          caption: "Recurring system-level faults and the design or operating cause usually behind them",
          columns: ["Observed problem", "Usual underlying cause"],
          rows: [
            ["Solids accumulate in the culture unit", "Inlet arrangement or tank geometry that does not establish the intended flow pattern"],
            ["Dissolved nitrogen rises despite an adequately sized biofilter", "Solids reaching the biofilter and breaking down there, or media surface lost to clogging"],
            ["Oxygen falls sharply during feeding", "Aeration sized on average rather than peak demand, or gas transfer degraded by fouling"],
            ["Water quality deteriorates gradually over a cycle", "Accumulation of a substance the treatment train does not remove, uncorrected by makeup water"],
            ["Whole-unit loss during a short power interruption", "Buffer time overestimated and standby capacity not tested under load"],
            ["Running cost far above the plan", "Pumping head or aeration duty higher than assumed, often from pipework and fouling rather than the equipment itself"],
          ],
          basis:
            "Patterns commonly described in aquaculture engineering and extension literature, presented as diagnostic starting points. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Commission each unit process separately and prove its performance before the system is stocked, so a later fault can be isolated to one stage.",
            "Instrument the parameters that bind first — usually oxygen at the culture unit outlet — continuously, and the rest on a schedule.",
            "Design pipework for cleaning and inspection, since a system that cannot be opened will not be maintained.",
            "Provide standby capacity for the process with the shortest buffer time, and test it under real load rather than at start-up only.",
            "Keep the treatment train's sizing basis on file, so future increases in stocking can be checked against it rather than guessed at.",
            "Choose the simplest system that meets the biological requirement, because every added unit process is another thing that can stop.",
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
            "Beyond selection, the interesting engineering questions concern where marginal capacity should go. A system whose oxygen supply and nitrogen removal are both near their limits gains nothing from improving only one. Identifying the binding process, improving it, and then re-identifying the new binding process is the whole of capacity development, and it usually reveals that the limiting stage is not the one that was most expensive to build.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Water reuse and its accumulating chemistry",
          value:
            "As recirculation fractions rise, substances with no dedicated removal step — nitrate, dissolved organic carbon, certain metals and off-flavour compounds — become the practical limit rather than ammonia. Denitrification, ozonation, foam fractionation and controlled purging are active areas of development, and their interactions with the nitrifying community are not fully settled.",
        },
        {
          kind: "text",
          value:
            "Energy accounting is the other advanced theme. Expressed per kilogram produced, energy use varies by more than an order of magnitude across system families, and within a family it varies with head, aeration efficiency and how well the building is thermally managed. A system that appears energy-intensive on paper may compare well once water pumping, heating and transport for the alternatives are counted honestly.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "A system is defined by its water regime and where its waste treatment happens, not by the shape of its holding structure.",
    "Exchange rate and treatment burden trade against one another: less water used means more treatment owned.",
    "Buffer time, the interval before conditions become unacceptable after support stops, should drive redundancy and alarm design.",
    "Culture unit hydraulics determine whether solids leave intact or dissolve in place, which changes the load on every later stage.",
    "The water source and power reliability at a site eliminate most system options before preference enters the decision.",
    "Capacity is governed by whichever unit process binds first, and improving anything else yields nothing until that one moves.",
  ],
  related: ["fundamentals", "ras", "pond", "engineering"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Technical material on culture systems, water use and aquaculture development across regions.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center",
      description: "Extension publications on pond, raceway and recirculating system design and operation.",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute guidance on culture systems suited to Indian water sources and climatic conditions.",
    },
  ],
};
