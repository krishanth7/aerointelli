import type { KnowledgeArea } from "../types";

export const fundamentals: KnowledgeArea = {
  number: "01",
  slug: "fundamentals",
  title: "RAS Fundamentals",
  navSummary: "What a recirculating system is, how the loop works, and where it fits.",
  summary:
    "A recirculating aquaculture system treats and reuses its own water. This is the loop, the reason each stage exists, and the conditions under which the approach earns its cost.",
  difficulty: "beginner",
  topics: ["water", "engineering", "operations"],
  tags: ["RAS", "water reuse", "process flow", "loop"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-02-10",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "A recirculating system keeps the same water working. Fish eat, and what they release stays in the water; the equipment takes it back out and returns the water to the tank. Instead of buying new water, you buy the power and the attention needed to clean the water you already have.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "A recirculating aquaculture system, RAS, is a fish production system in which the culture water is treated and returned to the culture tanks rather than discharged. Only a fraction is replaced each day — enough to remove what the treatment train cannot, and to make up for evaporation and sludge losses.",
        },
        {
          kind: "text",
          value:
            "That single decision defines everything else. Because the water comes back, every waste the fish produce accumulates unless a unit process is placed in the loop specifically to remove it. A RAS is therefore best understood not as a tank with filters attached, but as a wastewater treatment plant that happens to have fish living in its headworks.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Recirculation is a treatment obligation, not a saving",
          value:
            "Reusing water does not remove waste from the system; it removes the river that used to carry the waste away. Each unit process in the loop exists because one specific waste stream would otherwise reach a concentration the fish cannot tolerate.",
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
            "Recirculation decouples fish production from the site's water supply. A farm no longer needs a river, a large groundwater yield or a coastal intake to hold a given standing biomass — it needs power, equipment and operators. That changes where a farm can be built, and it changes what can go wrong.",
        },
        {
          kind: "list",
          items: [
            "Location. Production can sit near the market rather than near the water, shortening the cold chain.",
            "Environment. Temperature, photoperiod and water chemistry become set points rather than seasons, so growth is planned rather than observed.",
            "Biosecurity. A closed loop with treated intake keeps most pathogens out, which matters more than any single production number.",
            "Discharge. Waste leaves as a concentrated sludge stream that can be handled, rather than as a dilute effluent that cannot.",
            "Exposure. In exchange, the farm accepts an electrical and mechanical dependency that an open system does not carry.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "How the loop works",
      blocks: [
        {
          kind: "text",
          value:
            "Water leaves the culture tank carrying three things: settleable and suspended solids, dissolved nitrogen compounds, and dissolved carbon dioxide. It is depleted of oxygen. The treatment train addresses those in an order set by physics, not preference.",
        },
        {
          kind: "flow",
          caption: "The core recirculation loop",
          steps: [
            {
              label: "Culture tank",
              detail:
                "Fish consume oxygen and feed, and release solids, total ammonia nitrogen and carbon dioxide. Tank hydraulics concentrate settleable solids at the centre drain.",
            },
            {
              label: "Mechanical filtration",
              detail:
                "Solids are removed while they are still particles. Every hour they stay in suspension they break down further, releasing dissolved waste the biofilter must then handle.",
            },
            {
              label: "Biofiltration",
              detail:
                "Nitrifying bacteria on fixed media oxidise ammonia to nitrite and nitrite to nitrate. This is a biological process with its own oxygen, alkalinity and temperature demands.",
            },
            {
              label: "Degassing",
              detail:
                "Dissolved carbon dioxide produced by fish and by the biofilter is stripped to air. Left in the water it depresses pH and reduces the fish's ability to offload CO2 from the blood.",
            },
            {
              label: "Oxygenation",
              detail:
                "Oxygen is returned to the water, by aeration or by dissolving pure oxygen, before the water re-enters the tank.",
            },
            {
              label: "Disinfection and return",
              detail:
                "A side stream or full flow may pass ultraviolet or ozone treatment to suppress waterborne pathogens, then the water is returned to the culture tank.",
            },
          ],
        },
        {
          kind: "text",
          value:
            "Solids removal comes first because it protects everything downstream: a biofilter fed with unremoved solids blinds, a UV lamp shining through turbid water delivers a fraction of its rated dose. Degassing sits before oxygenation because stripping CO2 and adding oxygen are different operations with different contact requirements, and doing them in the wrong order wastes both.",
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Engineering principles",
      blocks: [
        {
          kind: "text",
          value:
            "Almost every load in a RAS traces back to one input. Feed entering the system determines oxygen demand, solids production, ammonia production and carbon dioxide production. Size the system from the feed, not from the tank volume.",
        },
        {
          kind: "formula",
          name: "Ammonia production from feed",
          expression: "P_TAN = F x PC x k",
          terms: [
            { symbol: "P_TAN", meaning: "Total ammonia nitrogen produced per day", unit: "kg N/day" },
            { symbol: "F", meaning: "Feed fed per day", unit: "kg/day" },
            { symbol: "PC", meaning: "Protein content of the feed, as a fraction", unit: "dimensionless" },
            { symbol: "k", meaning: "Fraction of feed nitrogen excreted as TAN", unit: "dimensionless" },
          ],
          example:
            "Consider a hypothetical system fed 40 kg/day of a feed at 0.40 protein. The nitrogen entering the system is fixed by that feeding; the excreted share depends on the species, the diet and how well the fish are digesting it.",
          limitations:
            "The excreted fraction k is not a universal constant. It varies with species, feed formulation, feeding rate, temperature and fish condition, and it changes as the fish grow. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration, and should be confirmed against measured data from the system being designed.",
        },
        {
          kind: "list",
          items: [
            "Mass balance governs. What enters as feed leaves as fish, as sludge, as gas or as dissolved load in the exchange water. Nothing else.",
            "Retention time, not volume, sets treatment. A large tank with poor turnover treats less than a small one with good turnover.",
            "The slowest process sets the ceiling. Standing biomass is limited by whichever unit process saturates first, usually oxygen supply or nitrification capacity.",
            "Alkalinity is consumed by nitrification and must be replaced, or pH falls until the biofilter slows and the problem compounds.",
          ],
        },
      ],
    },
    {
      id: "design-considerations",
      heading: "Design considerations",
      blocks: [
        {
          kind: "text",
          value:
            "A design is a set of commitments about peak load, not average load. The system must hold water quality on the heaviest feeding day of the heaviest cohort, at the highest water temperature the site will see, with one item of equipment out of service.",
        },
        {
          kind: "list",
          items: [
            "Design to peak standing biomass and peak feed rate, then confirm the system still works at low biomass, where flows may be too high and heating costs disproportionate.",
            "Decide the exchange rate deliberately. It controls nitrate and dissolved organics, and it sets both the makeup water demand and the effluent volume.",
            "Provide redundancy where failure is fast and fatal. Oxygen supply and the pumps that move water are the first candidates.",
            "Separate the loop into zones if biosecurity matters, accepting the extra capital and the extra plumbing that implies.",
            "Plan for sludge from the start. A treatment train that concentrates waste and has nowhere to send it is not finished.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Size the biofilter for the load it will meet, then check the load it starts with",
          value:
            "A biofilter matched to peak feeding is oversized during the first weeks of a cycle. That is acceptable, but it means the startup regime and the mature regime are different operating conditions and should be planned separately.",
        },
      ],
    },
    {
      id: "operational-considerations",
      heading: "Operational considerations",
      blocks: [
        {
          kind: "text",
          value:
            "A recirculating system is stable until it is not. Because the water is reused, a fault does not wash through — it accumulates. The operating discipline that matters most is measurement at a fixed cadence, recorded, so that a trend is visible before it becomes an event.",
        },
        {
          kind: "list",
          items: [
            "Measure dissolved oxygen continuously, with alarms. It is the parameter with the shortest time to mortality.",
            "Measure total ammonia nitrogen, nitrite, pH and alkalinity on a routine that does not change with how busy the week is.",
            "Record temperature and feed alongside every water quality reading, because neither number means anything without them.",
            "Treat a rising nitrite reading in a mature system as a signal about the biofilter, not as a number to be corrected in isolation.",
            "Backwash, clean and calibrate on a schedule. Most instrument surprises are calibration drift.",
          ],
        },
      ],
    },
    {
      id: "common-problems",
      heading: "Common problems and troubleshooting",
      blocks: [
        {
          kind: "table",
          caption: "Symptom, first measurement, likely direction",
          columns: ["Symptom", "Measure first", "Common direction"],
          rows: [
            [
              "Fish crowding the inlet or gasping at surface",
              "Dissolved oxygen at the tank outlet, not the inlet",
              "Oxygen supply, transfer efficiency, or a sudden rise in demand",
            ],
            [
              "Ammonia rising in a previously stable system",
              "TAN, nitrite, pH, alkalinity, temperature, recent feed",
              "Biofilter capacity, alkalinity depletion, or a step change in feeding",
            ],
            [
              "Nitrite rising while ammonia is controlled",
              "Nitrite, TAN, temperature, recent biofilter disturbance",
              "The second nitrification step lagging the first, often after cleaning or a chemical exposure",
            ],
            [
              "pH drifting down day over day",
              "Alkalinity, dissolved carbon dioxide, degasser performance",
              "Alkalinity consumed by nitrification, or CO2 not being stripped",
            ],
            [
              "Water turbid, biofilter fouling",
              "Solids at the mechanical filter inlet and outlet, filter differential",
              "Mechanical filtration underperforming or bypassing",
            ],
          ],
          basis:
            "A diagnostic ordering, not a set of thresholds. Each row lists what to measure before forming a conclusion; the appropriate action depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "The discipline is to measure before acting. Most compound failures in recirculating systems begin with a correct observation followed by an intervention aimed at the wrong stage of the loop.",
        },
      ],
    },
    {
      id: "maintenance",
      heading: "Maintenance",
      blocks: [
        {
          kind: "list",
          items: [
            "Daily. Check oxygen and flow at every tank, inspect the mechanical filter's discharge, count and remove mortalities, confirm alarms are armed.",
            "Weekly. Full water chemistry panel, pump and blower inspection, sensor cross-check against a reference measurement, sludge handling.",
            "Monthly. Calibrate instruments, inspect UV sleeves and lamp hours, check biofilter media distribution, exercise standby equipment under load.",
            "Periodically. Verify the standby power system by running it, not by testing that it starts.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Exercise standby equipment under real load",
          value:
            "Standby pumps and generators that are only ever started, never loaded, fail at the moment they are first asked to do work. A scheduled changeover to standby equipment is a maintenance task, not a risk.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      blocks: [
        {
          kind: "list",
          items: [
            "Sizing the system from tank volume rather than from peak daily feed.",
            "Treating the biofilter as a fixed capacity rather than a living population that takes time to build and can be lost quickly.",
            "Cleaning biofilter media aggressively, then being surprised by an ammonia and nitrite excursion.",
            "Allowing solids to remain in the loop, then blaming the biofilter for the dissolved load they produced.",
            "Buying redundancy for the equipment that is easy to duplicate rather than for the failure that kills fastest.",
            "Running instruments uncalibrated and making decisions from their readings.",
          ],
        },
      ],
    },
    {
      id: "advanced",
      heading: "Advanced considerations",
      blocks: [
        {
          kind: "text",
          value:
            "Beyond the core loop, systems diverge. Denitrification can be added to control nitrate at low exchange rates, at the cost of an anoxic process that needs a carbon source and careful control. Ozone can improve water clarity and microbial control, but introduces a residual hazard to fish and to staff that must be managed with instrumentation rather than judgement.",
        },
        {
          kind: "text",
          value:
            "Heat is the other axis. In a closed loop the water carries thermal history, and heat recovery between discharge and makeup water changes the operating cost structure materially at sites where the target temperature differs from ambient.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Loop integration is where the field is still moving",
          value:
            "Coupling nitrogen removal, heat recovery and sludge valorisation into a single controlled system remains an active area of engineering research rather than settled practice.",
        },
      ],
    },
    {
      id: "summary",
      heading: "Summary",
      blocks: [
        {
          kind: "text",
          value:
            "A recirculating system trades water for equipment, power and operator attention. Feed drives every load in the loop; each unit process removes one of those loads; and the standing biomass a farm can hold is set by whichever process saturates first. Understanding the system means being able to name, for any parameter that moves, which stage of the loop is responsible.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "A RAS is a treatment plant with fish in it: reusing water converts every waste stream into a design obligation.",
    "Feed input drives oxygen demand, solids, ammonia and carbon dioxide production. Size from feed, not from volume.",
    "Solids are removed first because they protect biofiltration and disinfection downstream.",
    "Nitrification consumes alkalinity, so pH control is a consequence of biofilter operation, not a separate topic.",
    "Standing biomass is capped by the first unit process to saturate — usually oxygen supply or nitrification.",
    "Recirculation replaces water dependency with power and mechanical dependency, which is why redundancy and alarms are part of the design, not an accessory.",
  ],
  related: ["system-architecture", "biofiltration", "oxygen", "water-quality"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance and aquaculture development publications covering recirculating systems and their operation.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension fact sheet series on recirculating system components, water quality and management practices.",
    },
    {
      organisation: "Indian Council of Agricultural Research (ICAR)",
      description:
        "Institutional research and extension material on aquaculture production systems in the Indian context.",
    },
  ],
};
