import type { KnowledgeArea } from "../types";

export const operations: KnowledgeArea = {
  number: "26",
  slug: "operations",
  title: "Operations",
  navSummary: "Daily routine, records, staffing, procedures and the discipline that holds them.",
  summary:
    "A recirculating farm is run rather than owned. The difference between two identical plants is almost entirely the routine, the records and whether the procedures are followed when nobody is watching.",
  difficulty: "intermediate",
  topics: ["operations"],
  tags: ["daily routine", "records", "procedures", "staffing", "shift handover"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-05-21",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Running the farm is a rhythm: check the water, feed the fish, watch how they behave, clean what needs cleaning, write it down. The writing down is what turns a good day into something you can repeat and a bad day into something you can explain.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Operations covers everything done to run the plant day to day: monitoring, feeding, observation, cleaning, maintenance, stock movements, record keeping, handover between shifts, and the procedures that define how each is carried out and by whom.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The plant is a system with people in it",
          value:
            "Engineering determines what the facility is capable of; operation determines what it achieves. Two farms with identical equipment routinely produce different results, and the difference is in routine, observation and record keeping rather than in hardware.",
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
            "Most incidents are detected by a person noticing something, so the quality of routine observation determines how early problems are found.",
            "Records are the only means of distinguishing a trend from a bad morning, and they are what any later investigation depends on.",
            "Consistency of feeding, cleaning and handling drives feed conversion, growth and survival more than any individual intervention.",
            "Handover between shifts is where information is lost, and lost information is how a developing problem becomes an event.",
            "Procedures are what allow the farm to run correctly when the most experienced person is not there.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "The operating rhythm",
      blocks: [
        {
          kind: "flow",
          caption: "The layers of the routine",
          steps: [
            {
              label: "Continuous",
              detail:
                "Automated monitoring and alarms on the critical parameters, running whether or not anyone is present.",
            },
            {
              label: "Each shift",
              detail:
                "Walk the plant. Observe fish behaviour and appearance, check flows and levels, verify key readings against instruments, remove mortalities, and hand over what was seen.",
            },
            {
              label: "Daily",
              detail:
                "Water quality testing, feeding to the plan and recording what was actually eaten, cleaning of screens and surfaces, review of the previous day's records.",
            },
            {
              label: "Weekly",
              detail:
                "Fuller water chemistry, sensor cross-checks against manual measurement, scheduled maintenance tasks, stock and consumable levels.",
            },
            {
              label: "Periodic",
              detail:
                "Sampling and grading, biomass reassessment, alarm and standby testing, calibration, review of performance against plan.",
            },
            {
              label: "Per cycle",
              detail:
                "Stocking, harvest, disinfection and turnaround, and a review of what the cycle showed about the system and the assumptions behind it.",
            },
          ],
        },
        {
          kind: "text",
          value:
            "The layers matter because each catches a different class of problem. Continuous monitoring catches fast events; the shift walk catches what instruments do not measure, principally the behaviour of the fish; the weekly and periodic layers catch slow drift that neither of the others would ever reveal.",
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Records and what they are for",
      blocks: [
        {
          kind: "table",
          caption: "What to record, and the question each record answers",
          columns: ["Record", "Contents", "What it answers"],
          rows: [
            [
              "Water quality log",
              "Parameters measured, time, location, method, who measured",
              "Whether a reading is a trend or an outlier, and whether the method was consistent",
            ],
            [
              "Feed record",
              "Feed offered, feed eaten, feed type, response observed",
              "Feed conversion, and whether appetite changed before anything else did",
            ],
            [
              "Stock record",
              "Numbers, mean weight, sampling date and method, movements between tanks",
              "Biomass, growth rate and the basis of every loading calculation",
            ],
            [
              "Mortality record",
              "Number, tank, size, date, observations and any cause identified",
              "Survival, and the shape of a developing health problem",
            ],
            [
              "Maintenance record",
              "Task, date, who performed it, what was found, parts used",
              "Whether a failure was foreseeable, and when the next intervention is due",
            ],
            [
              "Event and incident record",
              "Alarms, outages, interventions, treatments, unusual observations",
              "The explanation for variation in every other record",
            ],
            [
              "Shift handover",
              "State of the plant, outstanding tasks, anything unusual observed",
              "Whether the incoming shift knows what the outgoing shift knew",
            ],
          ],
          basis:
            "A record structure. The parameters, frequencies and thresholds appropriate to a given farm depend on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Record what was done, not what was planned",
          value:
            "A feed record that repeats the feeding table every day is a copy of the plan, not a record of the farm. The value is entirely in the difference between the two — the day the fish ate less, the tank that was skipped, the sample that was taken late. Those differences are the data.",
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
            "Design the routine alongside the plant, since layout, access and instrumentation determine how long the daily round takes.",
            "Write procedures for the tasks that are done rarely and under pressure — outage, mortality event, emergency harvest — rather than only for the routine ones.",
            "Structure records so they can be compared with the financial and design models directly.",
            "Provide the means to record where the work happens, since anything requiring a later trip to an office is recorded late or not at all.",
            "Decide the staffing model against the degree of automation and the number of independent loops, including out-of-hours cover.",
            "Define who is authorised to make which decisions, particularly for treatments and emergency actions.",
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
            "Observe the fish before reading the instruments. Behaviour, appetite and distribution frequently change before any measured parameter does.",
            "Record at the time of the observation, not at the end of the day.",
            "Review records rather than only collecting them; a log nobody reads has no operational value.",
            "Make handover explicit and written, not a conversation in a doorway.",
            "Train every operator on the manual procedures, so the plant can run without automation.",
            "Investigate anomalies rather than absorbing them, and record what the investigation found.",
            "Keep procedures current with the plant, since a procedure that describes equipment no longer installed teaches operators to ignore procedures.",
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
          caption: "Operational symptoms and where to look",
          columns: ["Symptom", "Examine first", "Common direction"],
          rows: [
            [
              "Performance varies between shifts or operators",
              "Feeding practice, cleaning consistency, procedure clarity, training",
              "Procedures that describe intent rather than method, so each operator interprets them differently",
            ],
            [
              "A problem discovered late that had been developing for days",
              "The records for the period, and whether the trend was visible and unreviewed",
              "Data collected but not reviewed, or observation not recorded at the time",
            ],
            [
              "Information lost between shifts",
              "Handover practice and whether it is written",
              "Verbal handover under time pressure, with the unusual observation the first thing dropped",
            ],
            [
              "Records incomplete or written retrospectively",
              "Where and when recording is expected to happen",
              "Recording that requires leaving the work area, so it is deferred and then reconstructed",
            ],
            [
              "Maintenance repeatedly deferred",
              "Task scheduling against actual workload and physical access",
              "A routine with no time in it for maintenance, or access that makes the task disproportionate",
            ],
            [
              "Feed conversion worse than plan with healthy fish",
              "Feeding method, uneaten feed observation, biomass estimate accuracy",
              "Feeding to the table rather than to the response, or a stale biomass estimate",
            ],
          ],
          basis:
            "A diagnostic ordering. Appropriate routines, frequencies and staffing depend on species, loading, degree of automation and system configuration.",
        },
      ],
    },
    {
      id: "maintenance",
      heading: "Maintaining the operating system",
      blocks: [
        {
          kind: "list",
          items: [
            "Review procedures against how the work is actually done, and correct whichever is wrong.",
            "Audit record completeness periodically rather than discovering gaps during an investigation.",
            "Refresh training, particularly on the rare, high-consequence procedures.",
            "Review the alarm and event log for patterns that individual entries do not show.",
            "Reconcile stock records against physical counts at each opportunity, typically at grading and harvest.",
            "Update the routine after any change to the plant.",
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
            "Collecting records that nobody reviews.",
            "Recording the plan rather than what actually happened.",
            "Relying on verbal handover for information that matters.",
            "Writing procedures for routine work only, leaving the rare emergency undocumented.",
            "Depending on one experienced person whose knowledge exists nowhere else.",
            "Feeding to a table rather than to observed response.",
            "Treating an anomaly as noise without investigating or recording it.",
            "Leaving procedures unchanged after the plant has been modified.",
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
            "Structured records are the prerequisite for every analytical method the farm might later adopt. Consistent parameters, consistent sampling points, timestamps, and events recorded alongside measurements are what allow performance to be modelled at all. A farm that has kept such records for several cycles has an asset that cannot be acquired retrospectively, and one that has not cannot buy its way to the same position.",
        },
        {
          kind: "text",
          value:
            "Operational culture is the harder part. The behaviours that matter — recording an inconvenient observation, reporting a mistake, investigating an anomaly that could be ignored — depend on whether doing so is treated as diligence or as a problem. That is a management decision rather than a technical one, and it determines whether the records describe the farm or describe what was expected of it.",
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
            "Operations is where a designed system becomes a producing farm. Build the routine in layers so that fast events, human observation and slow drift are each caught. Record what actually happened, at the time, and review it. Make handover written, document the rare procedures as carefully as the daily ones, and keep both current with the plant.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Identical plants perform differently; the difference is routine, observation and records.",
    "Layer the routine — continuous, shift, daily, weekly, per cycle — because each catches a different class of problem.",
    "Record what happened, not what was planned; the difference is the data.",
    "Observe the fish before the instruments; behaviour changes first.",
    "Written handover, because the unusual observation is what verbal handover drops.",
    "Document the rare emergency procedures, not only the daily ones.",
  ],
  related: ["troubleshooting", "feed-management", "fish-health", "automation"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on aquaculture farm management, record keeping and good practice.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension publications on farm management routines and production record keeping.",
    },
    {
      organisation: "Indian Council of Agricultural Research (ICAR)",
      description:
        "Extension material on aquaculture management practice in the Indian context.",
    },
  ],
};
