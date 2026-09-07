import type { KnowledgeArea } from "../types";

export const failureModes: KnowledgeArea = {
  number: "29",
  slug: "failure-modes",
  title: "Failure Modes",
  navSummary: "How systems fail, how fast, and what protection is worth having.",
  summary:
    "Every recirculating system fails eventually. What separates an incident from a total loss is whether the failure was anticipated, detected in time, and covered by something that did not fail with it.",
  difficulty: "advanced",
  topics: ["engineering", "operations"],
  tags: ["risk", "redundancy", "single point of failure", "detection", "resilience"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-02",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Things break. Some breakages give you days, some give you minutes. Knowing which is which tells you where to spend money on backups and alarms, and where a spare part on a shelf is enough.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "A failure mode is a specific way a system can stop performing its function, together with its cause, its consequence and the time available to respond. Analysing failure modes means enumerating them deliberately rather than discovering them, and deciding for each whether to prevent it, detect it, or tolerate it.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Time to consequence is the organising variable",
          value:
            "Failures in a recirculating system differ enormously in how quickly they harm the fish. Loss of oxygen supply acts within minutes; loss of the biofilter acts over days. The response — redundancy, alarming, spares, or nothing — should be chosen against that time, and not against the cost of the item that failed.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why it matters",
      blocks: [
        {
          kind: "list",
          items: [
            "The standing biomass concentrates the entire value of a production cycle in a system that depends on continuous operation.",
            "Failures are coupled: one failure changes the conditions under which the next is more likely, so events cascade.",
            "A failure that is not detected is functionally the same as one with no protection at all.",
            "Redundancy misplaced is money spent without reducing risk, and a shared dependency can make two devices fail as one.",
            "Insurance and financing decisions both rest on how the failure risk has actually been addressed.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "The principal failure modes",
      blocks: [
        {
          kind: "table",
          caption: "Failure modes ordered by how fast they act",
          columns: ["Failure", "Consequence", "Typical protection"],
          rows: [
            [
              "Loss of oxygen supply",
              "The fastest-acting failure in the system; the standing biomass is at risk almost immediately",
              "Independent emergency oxygen that does not depend on mains power, with an independent low-oxygen alarm",
            ],
            [
              "Loss of electrical supply",
              "Stops circulation, gas transfer and filtration together",
              "Standby generation with tested automatic changeover, plus an uninterruptible supply for monitoring and alarms",
            ],
            [
              "Pump failure or loss of flow",
              "Removes gas transfer and filtration; oxygen falls and waste accumulates",
              "Standby pumps with automatic changeover, flow alarms independent of the pump control",
            ],
            [
              "Tank drain blockage or overflow",
              "Loss of water level, or flooding, with a direct risk to the fish in that tank",
              "Level alarms high and low, overflow routing, screened and accessible drains",
            ],
            [
              "Loss of water through a leak or a valve error",
              "Level falls, loading rises, and life support degrades progressively",
              "Level monitoring, makeup capacity, valve labelling and interlocks against cross-connection",
            ],
            [
              "Biofilter failure or loss of nitrification",
              "Ammonia and then nitrite rise over hours to days",
              "Redundant or divided biofilter capacity, exchange capability, feeding reduction as the immediate lever",
            ],
            [
              "Mechanical filtration failure",
              "Solids accumulate, loading the biofilter and consuming oxygen",
              "Bypass with alarm, spare screens and drive components, monitoring of differential head",
            ],
            [
              "Sensor failure reading plausibly",
              "Control and operators both act on a value the water does not have",
              "Redundant measurement, manual cross-checks, plausibility limits in the control logic",
            ],
            [
              "Disease introduction",
              "Affects the biomass over days to weeks and may persist in the system",
              "Quarantine, zoning, dedicated equipment, controlled stock sourcing",
            ],
            [
              "Loss of thermal control",
              "Temperature drifts toward ambient, affecting appetite, oxygen demand and stress",
              "Insulation limiting the rate of drift, thermal redundancy where ambient is far from target",
            ],
          ],
          basis:
            "A structural enumeration of failure modes and protection classes. The time available before harm, and the level of protection that is justified, depend on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Engineering principles",
      blocks: [
        {
          kind: "list",
          items: [
            "Enumerate failure modes deliberately at design, with the cause, the consequence, the time to consequence, the means of detection and the protection for each.",
            "Look for shared dependencies. Two pumps on one board, or a sensor and its alarm on one power supply, are one failure and not two.",
            "Detection must be independent of the thing it monitors, or a single failure removes both the function and the knowledge of its loss.",
            "Allocate redundancy by time to consequence and by the value at risk, not evenly across the plant.",
            "Prefer failures that are obvious over failures that are quiet, and design instruments and actuators so that loss is announced.",
            "Divide the plant where it is affordable to do so, since independent loops confine a failure to part of the biomass.",
            "Assume that any single protection can fail, and ask what covers the fish if it does.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Most losses are cascades, not single events",
          value:
            "A total loss rarely follows from one failure. It follows from a failure that was not detected, or that was covered by a standby which had never been tested, or that occurred at a time when nobody was present to act on an alarm that did reach them. Each link is individually unremarkable; the loss requires the sequence.",
        },
      ],
    },
    {
      id: "design-considerations",
      heading: "Design considerations",
      blocks: [
        {
          kind: "list",
          items: [
            "Provide emergency oxygen that is independent of mains power and of the normal delivery path.",
            "Power monitoring and alarms separately from the plant they monitor.",
            "Provide standby capacity on the fast-acting duties, with automatic changeover and an alarm on operation.",
            "Consider several independent loops rather than one large one, weighing the capital against the biomass exposed to any single event.",
            "Design overflow and drain routing so that a blockage or a level failure does not empty a tank.",
            "Provide redundant measurement on the critical parameters so a plausible sensor failure is detectable.",
            "Hold spares for the components whose failure acts fastest, since procurement time is part of the consequence.",
            "Write the emergency procedures at design, when the failure analysis is fresh.",
          ],
        },
      ],
    },
    {
      id: "operational-considerations",
      heading: "Operational considerations",
      blocks: [
        {
          kind: "list",
          items: [
            "Test protective systems functionally on a schedule: standby power on load, changeover, alarms including the out-of-hours path, and emergency oxygen.",
            "Exercise standby equipment rather than leaving it idle.",
            "Review near misses as seriously as incidents, since a near miss is a cascade that stopped early by chance.",
            "Keep the emergency procedures current and practised with the people who would actually be on site.",
            "Maintain the spares holding against the failure analysis, not against what happens to be cheap.",
            "Reassess the failure analysis after any modification to the plant.",
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
          caption: "Protection failures and where they originate",
          columns: ["Symptom", "Examine first", "Common direction"],
          rows: [
            [
              "Standby did not operate when required",
              "Whether it had ever been tested on load, and the changeover scheme",
              "Untested standby, or a changeover never functionally exercised",
            ],
            [
              "Event occurred with no alarm delivered",
              "Alarm configuration, signal path, notification delivery, alarm power supply",
              "The path broken between detection and the person, often at the notification stage",
            ],
            [
              "Alarm delivered but not acted on",
              "Escalation, acknowledgement, nuisance alarm history, out-of-hours arrangements",
              "Alarm fatigue from nuisance alarms, or no defined person to respond",
            ],
            [
              "Two systems failed together",
              "Shared power supply, shared controller, shared network, shared cooling",
              "A common dependency treated as two independent devices",
            ],
            [
              "Recovery from an outage was slow or partial",
              "Restart sequencing, procedure availability, whether operators had practised it",
              "No documented restart sequence, or one never rehearsed",
            ],
            [
              "Repair delayed by parts",
              "Spares holding against the failure analysis, supplier lead time",
              "Spares selected by cost rather than by time to consequence",
            ],
          ],
          basis:
            "A diagnostic ordering for protective systems. The appropriate level of protection depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Test standby generation on load and record the changeover time.",
            "Test emergency oxygen delivery under a simulated loss of the normal supply.",
            "Test the full alarm path including out-of-hours notification and escalation.",
            "Exercise standby pumps and automatic changeover.",
            "Audit spares against the failure analysis and against supplier lead times.",
            "Review and rehearse the emergency procedures, and update them after any plant change.",
          ],
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
            "Providing redundancy without independence, so both units share a supply, a controller or a network.",
            "Powering the alarm from the system it monitors.",
            "Owning standby equipment that has never been tested under load.",
            "Allocating redundancy by equipment cost rather than by time to consequence.",
            "Trusting a single sensor on a parameter that acts fast.",
            "Treating near misses as non-events and losing the warning they contained.",
            "Holding spares by price rather than against the failures that cannot wait for delivery.",
            "Writing emergency procedures that have never been rehearsed by the people who would use them.",
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
            "Structured failure analysis, carried out systematically at design, converts an intuition about risk into a list that can be argued with. Enumerating each function, the ways it can fail, the consequence, the time available and the existing detection makes gaps visible — most usefully the failures that are currently undetectable, which are the ones that turn into cascades.",
        },
        {
          kind: "text",
          value:
            "Dividing the plant into independent loops is the most effective structural protection available, because it converts a total loss into a partial one. It costs capital, duplicated equipment and floor area, and it complicates operation. Whether it is justified is a calculation against the value of the biomass a single loop would hold and the probability of an event that affects a whole loop, and it is a decision that cannot be revisited after construction.",
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
            "Failures are certain; total losses are not. Enumerate the failure modes at design, order them by time to consequence, and allocate detection and redundancy against that order rather than against equipment cost. Make protection independent of what it protects, test it functionally rather than inspecting it, treat near misses as warnings, and remember that losses come from sequences, not single events.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Time to consequence, not equipment cost, decides where redundancy belongs.",
    "Redundancy without independence is one failure wearing two labels.",
    "An undetected failure is equivalent to an unprotected one.",
    "Total losses are cascades: an unnoticed failure, an untested standby, an unanswered alarm.",
    "Test protective systems functionally; inspecting their configuration proves nothing.",
    "Independent loops convert a total loss into a partial one, and cannot be retrofitted.",
  ],
  related: ["oxygen", "electrical", "automation", "safety"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on aquaculture risk management and system reliability.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension fact sheets on emergency preparedness and backup systems for aquaculture facilities.",
    },
  ],
};
