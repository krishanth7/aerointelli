import type { KnowledgeArea } from "../types";

export const automationAi: KnowledgeArea = {
  number: "27",
  slug: "automation-ai",
  title: "Automation and AI",
  navSummary: "Sensing, control, data and machine learning applied to farms — what the technology can do, and what it cannot.",
  summary:
    "Automation in aquaculture spans instrumentation, control loops, alarms, data capture and, increasingly, model-based decision support. The field is advancing quickly, but its value on a farm is bounded by measurement quality and by whether an automated decision has a physical actuator behind it; a prediction with nothing to act on changes nothing.",
  difficulty: "advanced",
  topics: ["automation", "engineering", "operations"],
  tags: ["sensors", "control loops", "telemetry", "machine learning", "decision support", "alarms"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-08-06",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Automation means instruments watch the water and equipment responds without a person present. Data systems record what happened so patterns can be found afterwards. Machine learning can help interpret that record, but only if the measurements underneath it are trustworthy and somebody has decided in advance what action a given reading should trigger.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Aquaculture has always been an information-poor activity. The animals are largely invisible, the water changes faster than a person can sample it, and the most important events happen at night. Automation addresses that gap in three distinct layers: instrumentation that observes continuously, control that acts on what is observed, and analytics that finds structure in the accumulated record.",
        },
        {
          kind: "text",
          value:
            "These layers are often discussed together and should not be. Instrumentation without control produces a farm that knows it is failing. Control without good instrumentation produces a farm that acts confidently on wrong information. Analytics without either produces attractive charts describing a process nobody influenced. The sequence matters, and it runs from sensing outward.",
        },
        {
          kind: "text",
          value:
            "This section describes the field as it exists across the sector generally. It sets out what the technology components are, how they are conventionally arranged, and where the practical limits sit.",
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
            "The first reason is response time. In an intensively stocked unit the interval between a failure and irreversible loss can be shorter than the interval between routine inspections. An automated alarm compresses detection time to seconds, and an automated response — starting standby aeration, opening an emergency oxygen supply — compresses reaction time further. This is the single highest-value application of automation on a farm, and it does not require any machine learning at all.",
        },
        {
          kind: "text",
          value:
            "The second is consistency. Feeding, dosing and water exchange executed to a fixed procedure remove a source of variation between shifts and between operators. The third is the record itself: a farm that has logged feed, mortality, water chemistry and equipment state at fine resolution can investigate a bad cycle. A farm relying on recollection cannot.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Alarms before optimisation",
          value:
            "Detecting the conditions that kill stock is worth more than optimising the conditions that grow it, because the first prevents total loss and the second improves a margin. Automation programmes that begin with analytics before securing alarm coverage have inverted the order of value.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Measurement, control and analytics" },
        {
          kind: "text",
          value:
            "A measurement converts a physical property into a number. A control loop compares that number with a setpoint and drives an actuator to reduce the difference. Analytics looks at many such numbers over time and infers something not directly measured. Each layer depends entirely on the one beneath it, and errors propagate upward without attenuation.",
        },
        { kind: "subheading", value: "Open loop and closed loop" },
        {
          kind: "text",
          value:
            "An open-loop action runs on a schedule regardless of conditions — a feeder that dispenses at fixed times. A closed-loop action responds to a measurement — an aerator that starts when dissolved oxygen falls below a setpoint. Closed loops are more capable and more dangerous, because a faulty sensor commands a real actuator. Every closed loop therefore needs a plausibility check and a defined behaviour when its input is missing or implausible.",
        },
        { kind: "subheading", value: "Edge and cloud" },
        {
          kind: "text",
          value:
            "Anything that protects stock must execute locally, on hardware at the farm, because connectivity fails. Remote infrastructure is appropriate for storage, cross-site comparison, model training and reporting. The dividing line is a safety question rather than an architectural preference: a control action whose failure kills stock cannot depend on a network link.",
        },
        { kind: "subheading", value: "Decision support versus decision making" },
        {
          kind: "text",
          value:
            "Most current analytical applications in aquaculture are decision support: they present an estimate to a person who decides. Genuine autonomous decision making requires that the estimate be reliable enough, and the consequence of error small enough, that no human review is warranted. Few farm decisions currently meet both tests, and honest deployments say which mode they are operating in.",
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
            "Two quantitative ideas do most of the work when specifying farm automation: how quickly a control system can be expected to act, and how far a sensor can be trusted.",
        },
        {
          kind: "formula",
          name: "Total response time",
          expression: "Tr = Ts + Tc + Ta",
          terms: [
            { symbol: "Tr", meaning: "Total time from an event occurring to a physical response beginning", unit: "s" },
            { symbol: "Ts", meaning: "Sensor detection and sampling interval", unit: "s" },
            { symbol: "Tc", meaning: "Communication, processing and decision latency", unit: "s" },
            { symbol: "Ta", meaning: "Actuator start-up and time to effect", unit: "s" },
          ],
          example:
            "Consider a hypothetical dissolved oxygen loop sampled once a minute, with a few seconds of processing and a blower that reaches full output shortly after starting. Total response time is dominated by the sampling interval, so shortening that interval improves protection far more than a faster controller would.",
          limitations:
            "Response time is only meaningful when compared with the oxygen buffer available at peak biomass, which is itself a function of stocking and temperature. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Sensor drift correction",
          expression: "Vt = Vr + (D x t)",
          terms: [
            { symbol: "Vt", meaning: "Estimated true value at time t", unit: "measurement units" },
            { symbol: "Vr", meaning: "Raw value reported by the instrument", unit: "measurement units" },
            { symbol: "D", meaning: "Observed drift rate since the last calibration", unit: "units per day" },
            { symbol: "t", meaning: "Elapsed time since the last calibration", unit: "days" },
          ],
          example:
            "Consider a hypothetical probe that has been shown by repeated reference checks to drift steadily in one direction between calibrations. Applying the observed drift rate makes the reading usable for longer, but the correction is only valid while the drift remains linear, which is why the reference check cannot be abandoned.",
          limitations:
            "Drift is frequently non-linear and is accelerated by fouling, temperature excursions and membrane ageing, so a correction term must never substitute for calibration against a reference. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "The practical implication of both is the same. The weakest element in a farm automation system is almost never the software; it is a probe sitting in warm, biologically active water that fouls, drifts and eventually reports a plausible number that is wrong.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "flow",
          caption: "The conventional data and control chain in an instrumented farm. Value is created only when the chain closes back onto the farm itself.",
          steps: [
            { label: "Sensors", detail: "Instruments in water and on equipment convert physical conditions into signals: dissolved oxygen, temperature, pH, level, flow, motor state." },
            { label: "Data", detail: "Signals are timestamped, validated against plausibility rules and stored with the context needed to interpret them later." },
            { label: "Edge and cloud", detail: "Protective logic runs locally so it survives loss of connectivity; remote infrastructure handles retention, aggregation and cross-site comparison." },
            { label: "Analytics", detail: "Trends, correlations and statistical baselines turn a stream of readings into a description of how the system normally behaves." },
            { label: "AI models", detail: "Learned models estimate quantities that are not directly measured, such as biomass, appetite or the early signature of a developing fault." },
            { label: "Decision", detail: "An estimate becomes an instruction only when a rule, a threshold or an operator converts it into a specific intended action." },
            { label: "Automation", detail: "Actuators execute the instruction: aerators, feeders, dosing pumps, valves and alarm devices with defined fail-safe states." },
            { label: "Farm", detail: "The physical result changes the water and the stock, which the sensors observe again, closing the loop and generating the next round of data." },
          ],
        },
        {
          kind: "table",
          caption: "Common application areas and what determines whether each is practical",
          columns: ["Application", "What it does", "Limiting factor"],
          rows: [
            ["Water quality monitoring", "Continuous measurement of oxygen, temperature, pH and related parameters", "Probe fouling and calibration discipline in warm, productive water"],
            ["Alarm and standby control", "Detects excursions and starts protective equipment automatically", "Reliable local power, tested actuators and an unambiguous escalation path"],
            ["Automated feeding", "Delivers feed on schedule or in response to observed demand", "Distribution uniformity and the quality of the appetite signal used"],
            ["Biomass estimation", "Infers standing biomass from imaging or acoustic data", "Water clarity, calibration against real sample weights, and stock behaviour"],
            ["Behaviour analysis", "Detects changes in swimming, distribution or feeding response", "Establishing what normal looks like for that unit before deviation means anything"],
            ["Health screening support", "Flags visual or behavioural signatures for human inspection", "Reference data quality and the cost of false positives to operations"],
            ["Predictive maintenance", "Detects equipment degradation from motor and pressure trends", "Long enough baselines to distinguish wear from normal seasonal variation"],
            ["Production planning tools", "Projects growth, feed demand and harvest timing from records", "Accuracy of the underlying record, particularly mortality and feed data"],
          ],
          basis:
            "A qualitative survey of application categories described in the aquaculture technology field, presented as a map rather than a recommendation or performance claim. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "An actively developing field",
          value:
            "Computer vision for biomass and health assessment, acoustic sensing of feeding behaviour, and model-based forecasting of water quality are all subjects of ongoing work across the sector. Their reliability varies widely with species, system type and water clarity, and general claims about accuracy should be treated cautiously.",
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
            "Automation is best introduced in an order that puts protection first and inference last. Each stage should be stable before the next is attempted, because a later stage that depends on an unreliable earlier one inherits its faults invisibly.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Instrument the parameters whose excursion kills stock fastest, typically dissolved oxygen, water level and equipment running state.",
            "Establish alarms with a written escalation procedure, including who is called, in what order, and what they are expected to do.",
            "Automate protective responses that have a physical actuator, starting with standby aeration and emergency oxygen.",
            "Establish a calibration and cleaning routine for every probe, and log every calibration so drift becomes visible.",
            "Log operational data — feed, mortality, grading, treatments, maintenance — alongside the sensor stream, since sensor data alone cannot explain a cycle.",
            "Build baselines from that combined record and describe what normal operation looks like for each unit.",
            "Only then introduce inferential tools, and validate any estimate against physical measurement before relying on it.",
            "Define for every automated loop what happens when its input is missing, stale or implausible.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Log the interventions, not only the readings",
          value:
            "A sensor record without a record of what people did alongside it is uninterpretable. A drop in oxygen means one thing after a grading event and something quite different on an ordinary afternoon, and no model can recover that distinction if the event was never written down.",
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
            "Aquaculture is a difficult environment for instrumentation. Probes sit permanently in warm, nutrient-rich water and acquire biofilm. Sensors and cabling in brackish or marine installations corrode. Enclosures are exposed to humidity, splash and, in Indian conditions, extended high ambient temperature. Reliability in this setting is a matter of mounting, cleaning access and material selection at least as much as of instrument specification.",
        },
        {
          kind: "text",
          value:
            "Biology sets the timescales that matter. Dissolved oxygen requires a response in minutes. Ammonia and nitrite develop over hours to days. Growth and condition trends are meaningful over weeks. Matching sampling frequency, alarm design and analysis window to the timescale of the process avoids both missed events and false alarms generated by ordinary short-term variation.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Every model carries its training context",
          value:
            "A learned model reflects the species, system, water conditions and management practices of the data it was built from. Transferring it to a different farm is an assumption about similarity, and that assumption should be stated and tested rather than left implicit.",
        },
        {
          kind: "text",
          value:
            "Finally, automation changes the skills a farm needs. A system that removes routine manual tasks also removes the routine observation that came with them, so instrumentation should be understood as a supplement to walking the farm rather than a replacement for it.",
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
            "Define the fail-safe state of every automated device before it is commissioned, and test that the device actually reaches that state on loss of signal or power.",
            "Calibrate on a schedule rather than on suspicion, and keep the calibration history so drift patterns become evidence.",
            "Keep manual override available and workable for every automated function, and make sure staff have used it recently enough to remember how.",
            "Treat repeated nuisance alarms as a fault to be fixed. Alarms that are routinely ignored provide no protection.",
            "Review automated decisions periodically against outcomes, and be willing to withdraw a rule that is not earning its place.",
            "Keep the data model stable. Renaming or re-scoping a logged field silently invalidates every historical comparison that uses it.",
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
          caption: "Frequent automation failures and their usual origin",
          columns: ["Observation", "Usual underlying cause"],
          rows: [
            ["Readings look plausible but do not match reference checks", "Probe fouling or drift since the last calibration, uncorrected because calibration is not scheduled"],
            ["Alarms fire constantly and are ignored", "Thresholds set without reference to normal variability, or a noisy signal that has not been filtered"],
            ["Automation stops working when the internet drops", "Protective logic placed in remote infrastructure instead of on local hardware"],
            ["An actuator ran continuously and nobody noticed", "No feedback confirming the commanded action produced the intended physical result"],
            ["Historical data cannot answer a question about a past cycle", "Operational events were never logged alongside the sensor stream"],
            ["A model performs well in testing and poorly on the farm", "Training data drawn from conditions that do not represent the deployment site"],
            ["Staff bypass the system during incidents", "Interface too slow or too unclear to be usable under pressure"],
          ],
          basis:
            "Failure patterns commonly reported in industrial and agricultural instrumentation practice, presented as diagnostic starting points. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Keep life-safety logic for the stock local, simple and independently powered, and keep it simple enough to be verified by inspection.",
            "Instrument for a decision. If no action would follow from a measurement, the measurement is not yet worth automating.",
            "Provide feedback on every actuator so the system knows whether a command produced a physical effect rather than merely being issued.",
            "Timestamp everything to a common clock, because analysis across subsystems is impossible without a shared time base.",
            "Prefer a small number of well-maintained instruments over a large number of neglected ones.",
            "Validate any inferred quantity against direct physical measurement at intervals, and record the comparison.",
            "Write down what each automated rule is for. A rule whose purpose has been forgotten will eventually be removed by someone who assumes it is unnecessary.",
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
            "The more interesting technical questions concern observability. A farm is a partially observed system: the state that matters most — the physiological condition of the stock — is never measured directly, and is instead inferred from proxies such as feed intake, behaviour, oxygen consumption and growth. Improving the inference means either adding proxies that carry independent information or modelling the relationship between existing proxies and the underlying state more carefully.",
        },
        {
          kind: "text",
          value:
            "Oxygen consumption is a useful example. Measured accurately across a culture unit, it responds to biomass, temperature, activity, digestion and health simultaneously. That makes it informative and ambiguous at once, and separating the contributions requires either additional measurements or a model with enough structure to represent them. This is characteristic of the field: the signals available are rich but confounded.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Directions under active investigation",
          value:
            "Work across the sector is exploring sensor fusion for biomass estimation, early detection of health events from behavioural signatures, model-predictive control of water quality, and the use of digital representations of a facility for planning and operator training. These remain research and early deployment directions rather than settled practice.",
        },
        {
          kind: "text",
          value:
            "A final point of engineering judgement concerns autonomy. Increasing autonomy transfers responsibility from operators to designers, because the decisions an automated system makes at three in the morning were made months earlier by whoever wrote the rules. That transfer is defensible when the decision is simple, well instrumented and reversible, and much harder to defend when it is none of those things.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Automation delivers value in a strict order: reliable sensing, then alarms and protective control, then data, and only then inference.",
    "Any function that protects stock must execute on local hardware, because connectivity and remote infrastructure cannot be assumed during an incident.",
    "The limiting factor in farm automation is usually probe fouling and drift, not software, so calibration discipline determines system quality.",
    "Every closed loop needs a defined behaviour for missing, stale or implausible input, and a tested fail-safe state.",
    "Sensor data is uninterpretable without a parallel record of what people did, so operational logging is part of the automation system.",
    "Learned models carry the context of their training data, and transferring one to a different farm is an assumption that must be tested.",
  ],
  related: ["engineering", "water-quality", "ras", "research"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Material on aquaculture technology, monitoring practice and production system management.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute work on farm monitoring, precision aquaculture and technology transfer to Indian producers.",
    },
    {
      organisation: "Bureau of Indian Standards",
      description: "Standards relevant to instrumentation, electrical safety and equipment enclosures used in farm installations.",
    },
  ],
};
