import type { KnowledgeArea } from "../types";

export const phEc: KnowledgeArea = {
  number: "10",
  slug: "ph-ec",
  title: "pH and EC Management",
  navSummary: "The two measurements every grower takes, what each one actually reports, and where both mislead.",
  summary:
    "pH and electrical conductivity are the instruments a soilless grower reads most often and understands least. pH reports hydrogen ion activity, which governs whether dissolved elements remain available, but says nothing about how hard the solution will resist correction. Conductivity reports the total ionic load, which says nothing about composition. Both are indispensable, both are routinely over-interpreted, and both depend on probes that drift quietly.",
  difficulty: "intermediate",
  topics: ["water", "nutrition", "operations", "automation"],
  tags: ["pH", "electrical conductivity", "alkalinity", "buffering", "probe calibration", "temperature compensation"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-04",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "pH tells you whether the nutrients in your tank can actually be absorbed. EC tells you how much dissolved salt is in the tank, but not which salts. Neither tells you whether the mix is right. And both readings are only as good as the last time you calibrated the probe.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Almost every soilless operation controls on two numbers. A pH controller doses acid or base to hold a setpoint; a conductivity controller doses fertiliser stock to hold a strength. Together they run the nutrient supply of the farm, and together they leave large parts of that supply unobserved.",
        },
        {
          kind: "text",
          value:
            "Both are indirect measurements. pH is the negative logarithm of hydrogen ion activity, measured as a voltage across a glass membrane. Conductivity is the ability of the solution to carry current between two electrodes, converted into a number that stands in for total dissolved ions. Neither measures a nutrient. They measure conditions under which nutrients behave in a certain way, and the difference between those two things is the subject of this article.",
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
            "The practical importance is that these two readings drive automated action. An acid pump runs because a pH probe said so; a fertiliser injector runs because a conductivity cell said so. If the probe is wrong, the system does not stop — it acts confidently on a false number and drives the solution away from target while displaying that it is on target.",
        },
        {
          kind: "text",
          value:
            "The second reason is diagnostic. A grower reading only conductivity cannot see a solution whose potassium has been drawn down while sodium has climbed to fill the same reading. A grower reading only pH cannot distinguish a solution that is stable because it is well buffered from one that is momentarily at setpoint on its way past. Understanding what each number excludes is what makes the pair useful rather than reassuring.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Two solutions with identical readings can be entirely different",
          value:
            "pH and conductivity together do not define a nutrient solution. They constrain it. Composition is determined only by knowing what was dosed and periodically confirming it by individual-ion analysis.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "What pH governs" },
        {
          kind: "text",
          value:
            "pH controls the chemical form and solubility of dissolved elements. As pH rises, iron, manganese, zinc and copper become progressively less soluble and can precipitate out of a solution in which they were correctly dosed; phosphate reacts with calcium and drops out as well. As pH falls, those metals become more available — to the point of toxicity in some crops — while molybdenum availability declines and root membranes come under stress. The workable band is not a preference but the overlap of these opposing constraints, and its position differs by crop, cultivar and stage.",
        },
        { kind: "subheading", value: "What pH does not tell you" },
        {
          kind: "text",
          value:
            "pH gives no information about how much acid or base is required to move it. That is alkalinity: the concentration of species, mostly bicarbonate, that neutralise added acid. A water with high alkalinity holds its pH stubbornly and then, once the buffer is consumed, moves suddenly. A water with almost no alkalinity moves with the smallest disturbance. Two solutions reading the same pH can require acid doses differing by an order of magnitude, and controlling both with the same pump settings will produce oscillation in one and sluggishness in the other.",
        },
        { kind: "subheading", value: "Why pH drifts by itself" },
        {
          kind: "text",
          value:
            "The crop moves pH, and the direction depends on which nitrogen form it is taking up. To maintain internal charge balance, a root absorbing nitrate releases bicarbonate or hydroxide into the solution, raising pH. A root absorbing ammonium releases hydrogen ions, lowering pH. Since nitrate is the dominant form in most soilless formulations, the characteristic drift in a healthy crop is upward. A small ammonium share is sometimes included specifically to counteract that rise, which is a chemistry decision with a biological cost, since ammonium at more than a modest proportion suppresses calcium and magnesium uptake and stresses roots at warm root-zone temperatures.",
        },
        { kind: "subheading", value: "What conductivity reports" },
        {
          kind: "text",
          value:
            "Electrical conductivity rises with the concentration of dissolved ions and with their individual mobilities. Every ion contributes: nitrate and potassium contribute, and so do sodium and chloride, which the crop barely uses. Conductivity is therefore a sum over both nutrients and ballast, and it cannot distinguish between them. A recirculating solution accumulating sodium reads as if it is well supplied and prompts the controller to dose less fertiliser, which is the opposite of what the crop needs.",
        },
      ],
    },
    {
      id: "technical-fundamentals",
      heading: "Technical fundamentals",
      blocks: [
        {
          kind: "formula",
          name: "pH definition",
          expression: "pH = -log10(a_H)",
          terms: [
            { symbol: "pH", meaning: "Measure of hydrogen ion activity in the solution", unit: "dimensionless" },
            { symbol: "a_H", meaning: "Activity of hydrogen ions, close to concentration in dilute solutions", unit: "mol/L" },
          ],
          example:
            "Consider a hypothetical solution moving from pH 6.5 to pH 5.5. That is a tenfold increase in hydrogen ion activity, not a small step. Because the scale is logarithmic, an apparently modest setpoint change alters the chemical environment of the root zone far more than the numeric difference suggests, which is why setpoint changes are made in small increments and given time to settle.",
          limitations:
            "The logarithmic scale means pH cannot be averaged arithmetically and gives no indication of buffering capacity; a reading is also meaningless without a stated solution temperature and a recent calibration. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "formula",
          name: "Temperature compensation of a conductivity reading",
          expression: "EC_25 = EC_T / (1 + alpha x (T - 25))",
          terms: [
            { symbol: "EC_25", meaning: "Conductivity referred to the standard temperature of 25 degrees Celsius", unit: "mS/cm" },
            { symbol: "EC_T", meaning: "Conductivity as measured at the actual solution temperature", unit: "mS/cm" },
            { symbol: "alpha", meaning: "Temperature coefficient of the solution, typically near 0.02 per degree for dilute salt solutions", unit: "per degree Celsius" },
            { symbol: "T", meaning: "Actual solution temperature at the moment of measurement", unit: "degrees Celsius" },
          ],
          example:
            "Consider a hypothetical solution measured in an unheated tank on a hot afternoon and again at dawn. With a coefficient near two per cent per degree, a difference of ten degrees between the two readings changes the raw conductivity by roughly a fifth even though not a single ion has entered or left the tank. An instrument without temperature compensation, or with compensation referenced to a different standard temperature than the recipe, will appear to show a strength change that never happened.",
          limitations:
            "The coefficient is an approximation that varies with the ionic composition of the solution, and compensation cannot rescue a reading taken with a fouled or uncalibrated cell. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "text",
          value:
            "A conductivity cell also has a cell constant, set by the geometry of its electrodes. It is determined at calibration against a standard solution and changes as electrodes foul, pit or scale. Two instruments reading the same solution differently is usually a cell constant problem, not a solution problem.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "What each measurement answers, and the question it cannot answer",
          columns: ["Measurement", "What it reports", "What it cannot report", "Correct follow-up"],
          rows: [
            ["pH", "Hydrogen ion activity now", "How much acid or base is needed to move it", "Alkalinity titration on the source water"],
            ["Alkalinity", "Capacity to neutralise added acid", "Whether the present pH is right for the crop", "pH measurement alongside it"],
            ["Electrical conductivity", "Total dissolved ionic load", "Which ions make up that load", "Individual-ion laboratory analysis"],
            ["Solution temperature", "Thermal state of the solution", "Dissolved oxygen actually available at the root", "Direct dissolved oxygen measurement"],
            ["Drain conductivity", "Net effect of crop uptake on strength", "Which element the crop is short of", "Comparison of drain against feed, then ion analysis"],
            ["Drain pH", "Net effect of crop uptake on acidity", "Whether the shift is nitrogen form or root disease", "Root inspection and nitrogen form review"],
          ],
          basis:
            "A mapping of routine greenhouse instrumentation onto the inference each reading does and does not support; no target values are given because targets are crop and site specific. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        { kind: "subheading", value: "Feed against drain" },
        {
          kind: "text",
          value:
            "The most informative use of both instruments is comparative. Measuring conductivity and pH in the feed and again in the drain gives the net effect of the crop and the root zone. Drain conductivity higher than feed means the crop is taking up water faster than salts, so the root zone is concentrating. Drain conductivity lower than feed means the reverse. Drain pH consistently above feed pH is the expected signature of nitrate-dominant uptake; a sudden change in that relationship is worth investigating before the canopy shows anything.",
        },
        { kind: "subheading", value: "Probe drift and fouling" },
        {
          kind: "text",
          value:
            "A pH glass electrode ages. Its slope — the voltage change per pH unit — declines over its life, and its reference junction can clog with precipitate or biofilm. The characteristic failure is not a wild reading but a slow, plausible offset. A conductivity cell fouls with biofilm, scale or fertiliser residue, which changes its effective geometry and its reading. Neither failure announces itself; both are found only by calibration against a standard.",
        },
      ],
    },
    {
      id: "practical-knowledge",
      heading: "Practical knowledge",
      blocks: [
        {
          kind: "flow",
          caption: "A disciplined measurement routine, from calibration to action.",
          steps: [
            { label: "Inspect the probe", detail: "Look for coating, scale, biofilm and a dry or crystallised reference junction before trusting anything it says." },
            { label: "Clean", detail: "Use the cleaning solution the manufacturer specifies; abrasives and improvised solvents damage the sensing surface permanently." },
            { label: "Calibrate", detail: "Two-point calibration for pH using buffers that bracket the working range, and a standard solution for conductivity, at the buffer temperature." },
            { label: "Record slope and offset", detail: "The calibration values themselves are the health record of the probe; a declining slope forecasts replacement before failure." },
            { label: "Measure", detail: "Rinse between samples, allow the reading to stabilise rather than reading the first number, and note the solution temperature." },
            { label: "Compare", detail: "Feed against drain, and today against the trend, before interpreting any single value as a problem." },
            { label: "Act", detail: "Change one setpoint at a time, in a small increment, and allow the system and the crop time to answer." },
          ],
        },
        {
          kind: "text",
          value:
            "Calibration frequency is a function of duty rather than a fixed interval. A probe permanently immersed in a warm, high-strength recirculating solution needs attention far more often than a handheld meter used twice a day in clean feed. The right frequency is found by calibrating often at first, recording how far each probe had drifted, and then setting the interval so that drift between calibrations stays smaller than the tolerance the crop can absorb.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Keep an independent handheld meter",
          value:
            "A second, separately calibrated instrument used to spot-check the in-line probes is the standard way to catch drift in a controller before it has been acting on a false reading for a week.",
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
            "Control loop tuning matters more than most growers expect. Acid dosing into a low-alkalinity solution overshoots easily, and a controller tuned aggressively will oscillate around the setpoint, subjecting roots to a repeated swing that is worse than a stable offset. The remedies are physical as much as electronic: dose into a mixing volume rather than directly into a supply line, give the solution time to homogenise before the probe reads it, and place the probe where flow is representative rather than where it is convenient.",
        },
        {
          kind: "text",
          value:
            "Reservoir volume is itself a control element. A large volume has thermal and chemical inertia, so pH and conductivity move slowly and the operator has time to react. A small volume moves quickly and demands more responsive control and tighter alarming. This is one of the clearest cases where a design decision made for cost reasons determines how much operational attention the system will require for the rest of its life.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Setpoints are inherited more often than derived",
          value:
            "Most published pH and conductivity setpoints are values that worked for a particular crop in a particular water and climate. Adopting one is a reasonable starting hypothesis and a poor conclusion; it should be tested against the crop's own response and the site's water report.",
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
            "Calibrate on a schedule derived from measured drift, and record the slope and offset every time rather than only the fact that calibration happened.",
            "Measure feed and drain, not the tank alone. The difference is the only thing that describes the crop.",
            "Record solution temperature with every conductivity reading, and confirm what reference temperature the instrument compensates to.",
            "Never diagnose a nutrition problem from conductivity alone; send a solution sample for ion analysis on a fixed interval.",
            "Change one setpoint at a time and in a small step, because the pH scale is logarithmic.",
            "Alarm on rate of change as well as on absolute value, since a fast excursion is usually an equipment failure while a slow one is usually the crop.",
            "Keep buffer and standard solutions in date, capped, and out of heat and light; a degraded buffer produces a confident, wrong calibration.",
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
          caption: "Instrument and control symptoms and their usual origin",
          columns: ["Symptom", "Usual origin"],
          rows: [
            ["pH oscillating around the setpoint", "Aggressive dosing into a poorly buffered solution, or a probe reading a badly mixed volume"],
            ["pH climbing steadily through the day", "Normal nitrate-dominant uptake; expected in a healthy crop rather than a fault"],
            ["pH falling unexpectedly", "Ammonium share too high, or microbial activity in a fouled reservoir or line"],
            ["Conductivity on target while the crop declines", "Ballast ion accumulation, or ratio drift within an unchanged total"],
            ["Two meters disagreeing on the same sample", "Cell constant or calibration difference, not a property of the solution"],
            ["Readings apparently changing overnight with no dosing", "Temperature effect on an uncompensated or wrongly referenced instrument"],
            ["Controller acting continuously without reaching setpoint", "Empty stock or acid drum, blocked injector, or a failed probe reading a fixed value"],
          ],
          basis:
            "Diagnostic starting points from routine greenhouse instrumentation practice, offered as directions to investigate. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
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
            "Titrate the source water for alkalinity before setting up any pH control, because alkalinity determines the dosing hardware and its tuning.",
            "Install probes in a well-mixed, representative flow path with isolation valves so they can be removed for cleaning without a shutdown.",
            "Use two-point pH calibration with buffers that bracket the working range, at the temperature of the buffers.",
            "Maintain a calibration log per probe and replace on evidence of declining slope rather than after a failure.",
            "Log feed and drain readings for every irrigation event where the system allows it, and review the trend weekly.",
            "Cross-check in-line instruments against an independent handheld meter at a fixed interval.",
            "Confirm that stock and acid supply levels are monitored, so a controller cannot chase a setpoint it has no reagent to reach.",
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
            "The frontier here is moving from control of aggregates to control of composition. Ion-selective electrodes for nitrate, potassium, calcium and ammonium exist and are used in research and in some commercial installations, and they would in principle allow dosing that replenishes each element at the rate the crop removes it. Their practical difficulty in a fertigation stream is calibration stability, cross-sensitivity to other ions and fouling, so they are best treated as a capability to be validated on site against laboratory analysis rather than assumed.",
        },
        {
          kind: "text",
          value:
            "A second direction is inference. Where composition cannot be measured directly, it can be estimated from what was dosed, what volume passed through, and how conductivity and pH responded, using a model of expected uptake. Such a model is only as good as its assumptions about crop demand, and it will drift, but it can flag divergence between expected and observed behaviour long before a symptom appears, which is exactly when investigation is cheapest.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Sensor redundancy over sensor sophistication",
          value:
            "For most operations, two independently calibrated conventional probes on a critical loop deliver more reliability than one advanced sensor, because the dominant failure is undetected drift rather than insufficient resolution.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "pH governs whether dissolved elements remain available; it says nothing about how much acid is needed to move it.",
    "Alkalinity is the buffering capacity, and it determines dosing hardware, control tuning and how stable the root zone will be.",
    "Nitrate uptake raises solution pH and ammonium uptake lowers it, so the characteristic drift in a nitrate-fed crop is upward.",
    "Conductivity is a sum over all dissolved ions including ballast, so an on-target reading can conceal a badly drifted composition.",
    "Conductivity readings are meaningless without temperature compensation and a known reference temperature.",
    "Probe drift is slow and plausible rather than obvious, so scheduled calibration with a recorded slope is the only defence.",
  ],
  related: ["nutrients", "water-management", "fertigation", "automation-ai"],
  furtherReading: [
    {
      organisation: "International Society for Horticultural Science",
      description: "Horticultural science programme covering soilless culture, nutrient solution management and sensing.",
      url: "https://www.ishs.org",
    },
    {
      organisation: "Bureau of Indian Standards",
      description: "Indian standards on water quality measurement methods, including pH and electrical conductivity determination.",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute and extension material on protected cultivation, irrigation water quality and crop nutrition.",
    },
  ],
};
