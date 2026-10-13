import type { KnowledgeArea } from "../types";

export const operations: KnowledgeArea = {
  number: "25",
  slug: "operations",
  title: "Hydroponic Farm Operations",
  navSummary: "The daily rhythm, the written procedure and the handover that keep a farm running without the grower.",
  summary:
    "A hydroponic farm is a repeating cycle of tasks executed on a schedule, not a series of decisions taken freshly each morning. Operations is the discipline of turning what a skilled grower knows into procedures, records and timed work that other people can execute to the same standard, on a day when the grower is not there.",
  difficulty: "intermediate",
  topics: ["operations", "production", "systems"],
  tags: ["standard operating procedure", "crop scheduling", "record keeping", "hygiene", "labour planning", "handover"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-08-03",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Plants do not take weekends. A farm needs a fixed rhythm of checks, feeds, transplants and harvests; a written way of doing each of them; a record of what was actually done; and enough trained people that any single absence does not break the cycle.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Most hydroponic farms that fail do not fail on technology. The pumps run, the lights come on, the solution is broadly correct. They fail because nobody wrote down when the pH probe is calibrated, because the transplant that should have happened on Tuesday happened on Friday, because two people each assumed the other had checked the drain, or because the one person who understood the system took a fortnight of leave.",
        },
        {
          kind: "text",
          value:
            "Operations is the part of the subject that has nothing to do with plant physiology and everything to do with whether the physiology gets the conditions it needs, reliably, on every day of a production year. It is the least glamorous section of this knowledge base and the one that separates a demonstration installation from a farm.",
        },
        {
          kind: "text",
          value:
            "The material below describes structure rather than setpoints. How often a task is done, and what the acceptable result is, depends on crop, cultivar, growth stage, climate, system and water chemistry, and no schedule copied from another site will be correct without adjustment. What transfers between sites is the shape of the schedule: that there is one, that it is written, that it is signed off, and that deviations are recorded rather than remembered.",
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
            "A controlled-environment crop expresses a mistake quickly. There is no soil reserve to absorb a missed irrigation and no buffer to absorb a dosing error. That speed makes consistency of execution worth more than occasional brilliance. A farm that does a merely adequate thing every single day out-produces a farm that does an excellent thing four days in five.",
        },
        {
          kind: "text",
          value:
            "Consistency also produces the only data worth having. If irrigation timing, solution strength and environment setpoints wander according to who was on shift, then a crop result cannot be attributed to anything. The farm cannot learn, because it never ran a stable enough process to measure a change against. Operational discipline is a precondition for improvement, not a substitute for it.",
        },
        {
          kind: "text",
          value:
            "There is a commercial dimension as well. Buyers of fresh produce buy continuity. A grower who can supply a fixed quantity every week of the year holds a very different negotiating position from one who supplies a large volume unpredictably. Continuity is manufactured in the crop schedule and defended by the operating routine.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "The absent grower test",
          value:
            "A useful audit of any farm is to ask what would happen if the head grower were unavailable for two weeks at short notice. If the honest answer involves a damaged crop, the gap is in documentation and training rather than in horticulture.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "The operating rhythm" },
        {
          kind: "text",
          value:
            "Farm work sorts naturally into nested cycles. Daily tasks are the ones a crop notices within a day: environment checks, solution readings, irrigation verification, scouting, harvest. Weekly tasks are those where a week of drift is tolerable but a month is not: full solution analysis, probe calibration, deep cleaning of a defined zone, stock reconciliation. Seasonal or per-cycle tasks attach to the crop cycle or the climate year: system sanitation between crops, substrate change or disposal, filter and lamp maintenance, contract and price review.",
        },
        { kind: "subheading", value: "Procedure over instruction" },
        {
          kind: "text",
          value:
            "A standard operating procedure is a written description of a task that a competent but unfamiliar person can execute correctly. It differs from an instruction in that it states the purpose, the acceptable result, and what to do when the result is not acceptable. An instruction says to set the dosing controller to a target; a procedure says what the target is for this crop and stage, how to confirm it took effect, and whom to call if it did not.",
        },
        { kind: "subheading", value: "The record is part of the task" },
        {
          kind: "text",
          value:
            "A task that is not recorded has, for management purposes, not happened. Records serve three separate functions and it is worth keeping them distinct: verification that work was done, measurement of the crop and environment over time, and traceability from a harvested batch back to its inputs. The first protects the routine, the second enables analysis, and the third is what a serious buyer will ask for.",
        },
        { kind: "subheading", value: "Zones of cleanliness" },
        {
          kind: "text",
          value:
            "Hygiene is an operational layout question before it is a chemical one. A farm has areas that must stay clean — propagation, production, packing — and areas that are inherently dirty — waste, substrate handling, deliveries, plant disposal. Movement of people, tools and material should run from clean towards dirty and not back. Most disinfection routines exist to compensate for a layout or a habit that violates that direction.",
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
            "Two calculations underlie almost every operating plan: how much labour the work requires, and how many plants must be started per interval to harvest a constant quantity.",
        },
        {
          kind: "formula",
          name: "Labour requirement per period",
          expression: "L = ( sum over tasks of ( n_i x t_i ) ) / ( h x u )",
          terms: [
            { symbol: "L", meaning: "Number of staff required over the period", unit: "persons" },
            { symbol: "n_i", meaning: "Number of repetitions of task i in the period", unit: "count" },
            { symbol: "t_i", meaning: "Measured time to perform task i once", unit: "hours" },
            { symbol: "h", meaning: "Working hours available per person in the period", unit: "hours" },
            { symbol: "u", meaning: "Realistic utilisation fraction, allowing for movement, breaks and interruption", unit: "dimensionless" },
          ],
          example:
            "Consider a hypothetical week in which transplanting, harvesting, scouting and cleaning together total 320 task-hours, each person is rostered 40 hours, and utilisation is taken as 0.8. The requirement is 320 divided by 32, or 10 people. Raising utilisation on paper rather than in practice is the most common way this figure is understated.",
          limitations:
            "Task times must be measured on the actual farm, with the actual crop and the actual staff, because they vary widely with layout, trolley distance, crop height and training level. Utilisation is an estimate, not a constant, and it falls when tasks are fragmented across the day. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "formula",
          name: "Succession planting rate for continuous harvest",
          expression: "N = ( H x C ) / ( y x s )",
          terms: [
            { symbol: "N", meaning: "Plants to be started per interval", unit: "plants" },
            { symbol: "H", meaning: "Target saleable output per interval", unit: "kg" },
            { symbol: "C", meaning: "Crop cycle length expressed in intervals", unit: "intervals" },
            { symbol: "y", meaning: "Expected saleable yield per plant over its whole cycle", unit: "kg/plant" },
            { symbol: "s", meaning: "Survival and grade-out fraction from sowing to sale", unit: "dimensionless" },
          ],
          example:
            "Consider a hypothetical leafy crop where the target is 500 kg per week, the cycle is five weeks, expected yield is 0.15 kg per plant over the cycle, and 0.9 of plants started reach saleable grade. The weekly start is 500 x 5 divided by (0.15 x 0.9), which is roughly 18,500 plants — and the same number must be harvested each week once the system fills.",
          limitations:
            "The relation assumes a steady state that only exists after the schedule has run for a full cycle, and it hides the ramp period entirely. Yield per plant and grade-out fraction both move with season and are the two terms most often assumed rather than measured. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Continuous harvest requires continuous planting",
          value:
            "In a succession system the number of plants started per interval and the number harvested per interval converge on the same figure. If starts are irregular, harvests will be irregular exactly one crop cycle later, and no amount of effort in the intervening weeks will smooth them.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "The operating rhythm by cycle length",
          columns: ["Cycle", "Representative tasks", "Consequence of skipping"],
          rows: [
            ["Daily", "Environment and solution readings, irrigation and drain verification, pest scouting, harvest, dosing check", "Immediate crop stress; a fault runs unnoticed for a full day"],
            ["Weekly", "Full solution analysis, probe calibration, zone cleaning, stock and consumable reconciliation, schedule review", "Sensor drift becomes the operating truth; small deviations accumulate"],
            ["Per crop cycle", "System sanitation, substrate change or disposal, crop record closure, plan-versus-actual review", "Carry-over of pathogens and of unexamined mistakes into the next crop"],
            ["Seasonal", "Filter and lamp servicing, climate setpoint revision, labour and contract planning, water source retest", "Equipment degrades quietly; the farm runs winter settings into summer"],
            ["Annual", "Full asset review, procedure revision, training refresh, supplier and market channel review", "Procedures diverge from actual practice until nobody follows them"],
          ],
          basis:
            "A structural allocation of task types to review intervals, not a prescription of frequencies for any particular farm. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        { kind: "subheading", value: "Crop registration" },
        {
          kind: "text",
          value:
            "Every batch of plants should carry an identity from sowing to sale. At minimum that means a batch code, the cultivar and seed lot, the sowing date, the location it occupies at each stage, the transplant dates, and the harvest dates and quantities. Without registration, a quality problem cannot be traced to a seed lot, a bench or a week, and the farm is left arguing from memory.",
        },
        { kind: "subheading", value: "Hygiene protocol" },
        {
          kind: "text",
          value:
            "A working hygiene protocol covers people, tools, material and water. People change footwear or use a boot wash at zone boundaries, wash hands before handling plants, and do not move from a diseased area to a clean one. Tools are allocated to a zone rather than shared across the farm, and cutting tools are disinfected between plants where a sap-transmitted problem is a real risk. Incoming plant material is quarantined or inspected before it joins production. Crop waste leaves by the dirty route and does not sit inside the growing area.",
        },
        { kind: "subheading", value: "Task timing" },
        {
          kind: "text",
          value:
            "When a task is done matters as much as whether it is done. Harvest timing interacts with turgor and shelf life, so many crops are cut early in the day. Scouting is most informative before the crop is disturbed. Irrigation events are placed relative to the light period rather than the clock. Maintenance that interrupts irrigation or airflow is scheduled into the least demanding part of the day.",
        },
      ],
    },
    {
      id: "practical-knowledge",
      heading: "Practical knowledge",
      blocks: [
        {
          kind: "text",
          value: "A workable procedure set can be built incrementally, in roughly this order.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Write down the tasks that already happen, as they actually happen, before trying to improve any of them. A procedure that describes an aspiration is not followed.",
            "For each task, state the purpose, the trigger, the steps, the acceptable result and the escalation path when the result is not acceptable.",
            "Attach a record to each task — a signature, a reading, a count — so that completion is evidenced rather than assumed.",
            "Time each task with a stopwatch at least once. Estimated task times are almost always optimistic, and they feed directly into the labour plan.",
            "Build a daily checklist that fits on one page and can be completed on the floor, not at a desk afterwards.",
            "Define who covers each task when the usual person is absent, and have that person perform it under supervision at least once before it is needed.",
            "Review procedures against reality at a fixed interval, and change the document when practice has legitimately improved.",
          ],
        },
        {
          kind: "flow",
          caption: "A representative daily cycle. The order matters: observation precedes intervention, and intervention is verified before the day closes.",
          steps: [
            { label: "Opening check", detail: "Confirm the systems ran overnight: pump status, alarm log, environment history, reservoir level, drain volume." },
            { label: "Measurement", detail: "Take pH, conductivity, solution and air temperature and humidity readings at fixed points, and record them whether or not they look interesting." },
            { label: "Scouting", detail: "Walk a defined route through the crop looking at roots, new growth and sticky traps, before the crop is handled for other reasons." },
            { label: "Intervention", detail: "Adjust dosing, irrigation or climate in response to what was measured, changing one variable at a time and noting the change." },
            { label: "Crop work", detail: "Transplant, train, prune, pollinate or harvest according to the week's schedule rather than according to what looks urgent." },
            { label: "Post-harvest", detail: "Move harvested product out of the growing area promptly, cool it, and record quantities and grades against the batch code." },
            { label: "Cleaning", detail: "Remove crop waste by the dirty route, clean the zone worked in, and return tools to their allocated zone." },
            { label: "Closing handover", detail: "Verify interventions took effect, log open issues, confirm alarms are armed, and leave a written note for whoever opens next." },
          ],
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
            "The biology sets which tasks cannot slip. A fruiting crop that is not pollinated within its receptive window loses that fruit permanently; no later effort recovers it. A propagation batch that is not transplanted on time becomes root-bound and never fully recovers vigour. These are hard deadlines and should be scheduled as such, ahead of tasks that merely accumulate.",
        },
        {
          kind: "text",
          value:
            "Other tasks are elastic. Deep cleaning of a walkway, replacement of a worn label, tidying of a store — these can move by days without cost. Separating hard-deadline work from elastic work is what lets a farm absorb an unexpected absence without damaging a crop, and it should be marked explicitly on the schedule rather than left to judgement in a busy week.",
        },
        {
          kind: "text",
          value:
            "On the engineering side, the operating routine and the automation should be designed together. Automation removes the routine execution of a task but not the responsibility for verifying it. An automated irrigation controller changes the daily task from performing irrigation to confirming that irrigation occurred and that drain volume matched expectation. Farms that automate without moving the verification into the routine are the ones that discover a failed valve on harvest day.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Alarms are only useful with a defined response",
          value:
            "An alarm with no named responder, no response time and no written action is a noise, and staff learn to silence it. The operational value of monitoring comes from the response procedure attached to each alarm, not from the sensor.",
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
            "Schedule the crop first and the people second. The crop's timing requirements are fixed; the roster is the variable that adapts.",
            "Record every reading on a fixed schedule, including the unremarkable ones, because the trend is what carries the diagnostic information.",
            "Keep one plan. A whiteboard that disagrees with a spreadsheet guarantees that at some point the wrong one will be followed.",
            "Train at least two people on every task on which a crop depends, and rotate them often enough that the second person stays competent.",
            "Treat deviation as information rather than as fault. Staff who expect blame stop reporting, and unreported deviation is far more expensive than the deviation itself.",
            "Close each crop cycle with a written comparison of plan against actual, and amend the plan rather than trusting anyone to remember the lesson.",
            "Keep the daily checklist short enough to be completed honestly. A long checklist gets ticked without being performed.",
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
          caption: "Recurring operational failures and where the cause usually sits",
          columns: ["Observed problem", "Usual underlying cause"],
          rows: [
            ["Harvest volume swings week to week", "Irregular sowing or transplant dates one crop cycle earlier"],
            ["A fault is discovered hours after it began", "No opening check on overnight logs, or alarms without a defined responder"],
            ["Procedures exist but are not followed", "The document describes an ideal rather than the real task, or it is stored where the work is not done"],
            ["Quality problem cannot be traced to a cause", "No batch identity carried from sowing through to despatch"],
            ["Disease appears repeatedly in the same zone", "Movement of people or tools from a dirty area into a clean one, not a treatment failure"],
            ["Labour cost above plan with no visible cause", "Task times estimated rather than measured, and utilisation assumed too high"],
            ["Farm destabilises when one person is absent", "Undocumented knowledge and no trained second person for critical tasks"],
          ],
          basis:
            "Diagnostic starting points drawn from general horticultural operating practice, offered as places to look rather than as conclusions. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
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
            "Keep the written procedure at the place the work is done, not in an office folder.",
            "Give every batch a code at sowing and carry it to the despatch note.",
            "Define zone boundaries physically — a change of floor colour, a footwear station, a door — so that hygiene rules are visible rather than remembered.",
            "Roster the hard-deadline crop tasks first, then fit elastic work around them.",
            "Log every intervention with the time, the person and the reason, so that a later crop result can be read against what was actually done.",
            "Hold a short daily handover between shifts, in person, with a written note that survives it.",
            "Revise every procedure on a fixed annual cycle, and immediately after any incident it failed to prevent.",
            "Keep a stock of the consumables whose absence stops work — probe calibration solution, propagation media, packaging — and reconcile them weekly.",
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
            "Once the basic rhythm is stable, the operational questions become questions of flow. Where does work queue? A harvest team that outruns the packing line simply moves the bottleneck and shortens shelf life. A transplant crew waiting on propagation trays is idle capacity that still costs money. Mapping the movement of plants, people and product through a day exposes constraints that no individual task time reveals.",
        },
        {
          kind: "text",
          value:
            "The second advanced topic is variance rather than average. A farm whose weekly output averages target but ranges widely around it is harder to sell from than one with a lower average and a tight range, because the buyer contracts against the reliable minimum. Reducing the spread of weekly output is often worth more commercially than raising its mean, and it is achieved almost entirely through scheduling discipline rather than horticulture.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Buffer belongs in the schedule, not in the day",
          value:
            "Absorbing variation by asking staff to work longer on a bad day works until it does not. Building deliberate slack into the plan — a spare propagation batch, an under-filled bench, an unallocated shift — is the version that survives a difficult season.",
        },
        {
          kind: "text",
          value:
            "Finally, operations is where continuous improvement actually lives. The farm that records what it did, compares it with what it planned, and changes one thing per cycle will out-learn a farm that changes many things at once and cannot attribute the result. That is an unspectacular method, and it is the only one that compounds.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "A farm runs on a nested rhythm of daily, weekly, per-cycle and seasonal tasks, and the rhythm must be written down rather than remembered.",
    "A standard operating procedure states purpose, steps, acceptable result and escalation — an instruction that omits the last two will not survive an unfamiliar operator.",
    "Batch registration from sowing to despatch is what makes a quality problem traceable to a cause.",
    "Continuous harvest is manufactured by continuous, regular planting one full crop cycle earlier.",
    "Hygiene is a question of one-way movement between clean and dirty zones before it is a question of disinfectant.",
    "Cross-training and a written handover are what allow the farm to survive the absence of any single person.",
  ],
  related: ["farm-design", "economics", "automation-ai", "plant-health"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Programme material on horticultural production, protected cultivation and good agricultural practice.",
      url: "https://www.fao.org/plant-production-protection/en",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute publications and extension material on protected cultivation management in Indian conditions.",
    },
    {
      organisation: "State agricultural universities and horticulture departments in India",
      description: "Regional extension guidance on crop scheduling, labour and post-harvest handling.",
    },
  ],
};
