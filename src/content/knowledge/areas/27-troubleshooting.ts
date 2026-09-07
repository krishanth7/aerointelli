import type { KnowledgeArea } from "../types";

export const troubleshooting: KnowledgeArea = {
  number: "27",
  slug: "troubleshooting",
  title: "Troubleshooting",
  navSummary: "Diagnostic method, symptom-to-cause ordering and stabilise-before-diagnose.",
  summary:
    "Diagnosis on a live system has a constraint no laboratory has: the fish cannot wait for the answer. The method is therefore to stabilise first, then find the cause, then correct it.",
  difficulty: "advanced",
  topics: ["operations", "water", "engineering"],
  tags: ["diagnosis", "method", "symptoms", "root cause", "incident response"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-05-25",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Something looks wrong. The temptation is to guess and change things. The better order is: make the fish safe, check that the measurement is real, then work outward from the symptom to what actually caused it — changing one thing at a time so you can tell what worked.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Troubleshooting is the method by which an observed symptom is traced to its cause in a system where the processes are coupled. In a recirculating system almost every parameter influences several others, so a symptom rarely indicates its own cause and the ordering of the investigation matters more than the individual checks.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Stabilise before diagnosing",
          value:
            "Where the fish are at immediate risk, the first action is to make the environment survivable — supplementary oxygen, increased exchange, reduced or suspended feeding, reduced loading — and only then to investigate. Diagnosis performed while the biomass is deteriorating is diagnosis performed against a clock, and it is usually performed badly.",
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
            "The processes are coupled, so treating a symptom as its own cause frequently makes the underlying problem worse.",
            "The system has a live biomass, so the cost of a slow or wrong diagnosis is measured in fish rather than in downtime.",
            "Several distinct causes produce very similar symptoms, and distinguishing them requires method rather than experience alone.",
            "Changes made in combination cannot be evaluated, so undisciplined intervention destroys the information needed to find the cause.",
            "The same problem recurs indefinitely if the correction addressed the symptom rather than the cause.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "The diagnostic sequence",
      blocks: [
        {
          kind: "flow",
          caption: "Working from symptom to cause",
          steps: [
            {
              label: "Stabilise",
              detail:
                "Protect the biomass first. Oxygen, exchange, feeding and loading are the levers that buy time, and buying time is what makes a considered diagnosis possible.",
            },
            {
              label: "Verify the measurement",
              detail:
                "Confirm the symptom is real before acting on it. Cross-check the reading by a second method or instrument, since a substantial proportion of apparent problems are sensor problems.",
            },
            {
              label: "Establish when it began",
              detail:
                "Go to the records and trend. A parameter that stepped is a different problem from one that drifted, and the timing points at what changed.",
            },
            {
              label: "List what changed",
              detail:
                "Feed, stocking, temperature, maintenance, chemicals, weather, supply interruptions, personnel. Most problems follow a change, and the change is usually recorded somewhere.",
            },
            {
              label: "Work outward through the coupling",
              detail:
                "Trace the parameter to the processes that govern it, and those processes to their inputs. Ask what would have to be true upstream for this symptom to appear.",
            },
            {
              label: "Change one thing",
              detail:
                "Make a single intervention, then observe. Simultaneous changes leave the cause unidentified even when the symptom resolves.",
            },
            {
              label: "Confirm and record",
              detail:
                "Verify the parameter returns and stays. Record the symptom, the finding, the action and the outcome, because that record is what makes the next occurrence quick.",
            },
          ],
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Common symptoms and their coupling",
      blocks: [
        {
          kind: "table",
          caption: "Where each symptom usually leads",
          columns: ["Symptom", "Check in this order", "Common direction"],
          rows: [
            [
              "Dissolved oxygen falling",
              "Sensor calibration, flow, gas transfer equipment, feeding rate and biomass, temperature",
              "Demand risen with feeding or biomass, or transfer capacity fallen through fouling or a supply fault",
            ],
            [
              "Ammonia rising",
              "Test method, feeding rate, biofilter condition and flow, pH and temperature, recent chemical or antibiotic use",
              "A biofilter under-performing, or a load increase the biofilter has not yet adapted to",
            ],
            [
              "Nitrite rising",
              "Biofilter maturity and condition, ammonia trend, recent disturbance to the biofilm",
              "The second nitrification step lagging the first, typically after a disturbance or a load change",
            ],
            [
              "pH drifting down",
              "Alkalinity, nitrification rate, exchange rate, buffering practice",
              "Alkalinity consumed by nitrification faster than it is replaced",
            ],
            [
              "Solids visible in tanks",
              "Mechanical filtration performance, flow distribution, tank hydraulics, feeding practice",
              "Screening bypassed or overloaded, or tank hydraulics not delivering solids to the drain",
            ],
            [
              "Flow reduced",
              "Valve positions, screen and filter condition, air at high points, pump duty point",
              "Progressive fouling raising head, or trapped air throttling a line",
            ],
            [
              "Appetite reduced across a tank",
              "Water quality first, then temperature, handling history, health signs",
              "An environmental cause more often than a disease, and appetite is frequently the earliest signal of either",
            ],
            [
              "Mortality rising",
              "Water quality record, recent handling, feed, pattern by size and tank, gross signs",
              "Environmental or handling cause first; pathology after environment has been excluded",
            ],
          ],
          basis:
            "A diagnostic ordering, not a set of thresholds. What constitutes an abnormal value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Suspect the instrument before the system",
          value:
            "A meaningful share of reported water quality excursions are measurement artefacts: a fouled probe, an expired reagent, a calibration overdue, a sample taken from a different point. Cross-checking the reading takes minutes and prevents an intervention against a problem that does not exist.",
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
            "Provide sampling and measurement points where diagnosis will need them, particularly across each treatment process so that its performance can be assessed independently.",
            "Provide flow and pressure measurement around the loop, since head loss across a process localises a fault immediately.",
            "Sub-meter major electrical loads, because power against flow is a diagnostic as well as an energy record.",
            "Enable isolation of individual tanks and processes, so a hypothesis can be tested without disturbing the whole plant.",
            "Log continuously and retain the history, since diagnosis depends on comparison with a period when the system was well.",
            "Provide the standing capability to stabilise: supplementary oxygen, the means to increase exchange, and the means to reduce loading.",
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
            "Keep records good enough that the question 'when did this start' has an answer.",
            "Cross-check any reading before acting on it.",
            "Change one variable at a time, and write down what was changed and when.",
            "Record the whole investigation, including the hypotheses that were wrong, because the next occurrence begins there.",
            "Escalate rather than persisting alone when the biomass is at risk and the cause is not converging.",
            "Distinguish the correction that stabilised the system from the correction that fixed the cause, and complete the second one.",
          ],
        },
      ],
    },
    {
      id: "common-problems",
      heading: "Failures of method",
      blocks: [
        {
          kind: "table",
          caption: "How investigations go wrong",
          columns: ["Failure", "What it looks like", "Correction"],
          rows: [
            [
              "Treating the symptom",
              "The parameter is corrected repeatedly and returns each time",
              "Trace to the process that governs it and to that process's inputs",
            ],
            [
              "Multiple simultaneous changes",
              "The symptom resolves and nobody knows which action worked",
              "One change, then observe, then the next",
            ],
            [
              "Acting on an unverified reading",
              "An intervention against a problem the water did not have",
              "Cross-check by a second method before acting",
            ],
            [
              "Anchoring on the first hypothesis",
              "Evidence against it is explained away",
              "State what observation would disprove the hypothesis, then look for it",
            ],
            [
              "No baseline",
              "There is no way to establish what normal was",
              "Maintain the trend record continuously, not only during incidents",
            ],
            [
              "Investigating while the biomass deteriorates",
              "Decisions made under time pressure, usually poorly",
              "Stabilise first, then diagnose",
            ],
          ],
          basis:
            "A description of method failures. The correct response to any particular symptom depends on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "maintenance",
      heading: "Keeping the diagnostic capability",
      blocks: [
        {
          kind: "list",
          items: [
            "Calibrate instruments on schedule, since the entire method rests on trustworthy measurement.",
            "Keep reagents within date and stored correctly, and hold a second measurement method for the critical parameters.",
            "Maintain the trend record and its backup, because a gap in the history is a gap in every future diagnosis.",
            "Keep the incident record indexed and readable, so past findings are retrievable.",
            "Verify that isolation valves and sampling points still work before an incident requires them.",
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
            "Diagnosing before stabilising, with the biomass deteriorating throughout.",
            "Acting on a single unverified reading.",
            "Changing several things at once.",
            "Correcting a symptom without identifying what produced it.",
            "Assuming the cause is disease before excluding water quality and handling.",
            "Failing to record the investigation, so the same problem is diagnosed from scratch next time.",
            "Continuing alone when the situation warrants escalation.",
            "Stopping once the symptom clears, leaving the cause in place.",
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
            "Coupled systems produce delayed and displaced symptoms. An event in the biofilter appears as ammonia days later; a change in feeding appears as oxygen demand within hours and as solids loading over a longer period. Because of that lag, the moment a symptom appears is rarely the moment the cause acted, and the investigation should look back across a window rather than at the present state alone.",
        },
        {
          kind: "text",
          value:
            "Structured post-incident review is where the durable improvement comes from. Reconstructing the sequence, identifying what was detectable earlier and was not detected, and asking why the existing monitoring did not catch it, turns a single event into a change in the monitoring or the routine. Without that step each incident teaches only the individual who happened to be present.",
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
            "Diagnosis on a live system follows a fixed order: stabilise the biomass, verify the measurement, establish when the symptom began, list what changed, then trace outward through the coupling. Change one thing at a time and record everything, including the wrong hypotheses. Finish by separating the action that stabilised the system from the correction that removed the cause, and complete the second.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Stabilise the biomass first; diagnosis under a deteriorating clock is done badly.",
    "Verify the reading before acting — many excursions are measurement artefacts.",
    "The records answer 'when did this start', which points at what changed.",
    "Change one variable at a time, or the cause stays unidentified.",
    "Symptoms are delayed and displaced in a coupled system; look back across a window.",
    "Separate the stabilising action from the corrective one, and complete both.",
  ],
  related: ["water-quality", "operations", "failure-modes", "fish-health"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on aquaculture water quality management and production problems.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension fact sheets on diagnosing water quality and production problems in recirculating systems.",
    },
  ],
};
