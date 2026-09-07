import type { KnowledgeArea } from "../types";

export const automation: KnowledgeArea = {
  number: "18",
  slug: "automation",
  title: "Automation",
  navSummary: "Sensors, control, alarms, logging and fail-safe behaviour.",
  summary:
    "Automation on a fish farm is a life-support system before it is a convenience. What matters most is not what it controls when working, but how it behaves when part of it fails.",
  difficulty: "advanced",
  topics: ["automation", "engineering", "operations"],
  tags: ["sensors", "control", "alarms", "SCADA", "fail-safe", "logging"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-04-19",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Automation watches the system when nobody is in the building, and calls someone when something is wrong. The useful question is not what it does when everything works — it is what happens when a sensor lies, a signal drops, or the power goes out at three in the morning.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Automation covers the sensors that measure the system, the controllers that act on those measurements, the alarms that summon a person, and the records that make the whole history reviewable. In aquaculture it spans a range from simple standalone alarms to fully supervised control of every process in the loop.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "This is life support, not building management",
          value:
            "In most industrial control applications a failure produces lost production. In a recirculating system with a live standing biomass, a failure of oxygen supply that goes undetected produces total loss within a short period. The design standard is accordingly different.",
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
            "Continuous monitoring detects fast-acting problems — oxygen, flow, level — in the interval between routine checks, which is when they mostly occur.",
            "Alarms convert a detected problem into a human response, which is the only part that actually saves fish.",
            "Logging turns operation into evidence, so trends are visible and post-event analysis is possible.",
            "Control stabilises parameters more tightly than manual intervention can, improving both fish performance and energy use.",
            "Automation reduces the number of routine tasks competing for operator attention, so attention goes to the things that need judgement.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "How it works",
      blocks: [
        {
          kind: "flow",
          caption: "The monitoring and control chain",
          steps: [
            {
              label: "Sensing",
              detail:
                "A sensor converts a physical property into a signal. Its accuracy depends on calibration, on its condition, and on whether it is located where the measurement is meaningful.",
            },
            {
              label: "Signal transmission",
              detail:
                "The signal reaches a controller. In a wet, electrically noisy environment this path is a common failure point, and a failed signal must be distinguishable from a valid reading.",
            },
            {
              label: "Control logic",
              detail:
                "The controller compares against a set point and acts. What it does when the input is implausible or missing is the most important part of its design.",
            },
            {
              label: "Actuation",
              detail:
                "A valve, pump, feeder or dosing system responds. Actuation should be verified by an independent measurement rather than assumed from the command.",
            },
            {
              label: "Alarm and escalation",
              detail:
                "Where a condition is outside limits, an alarm is raised and escalated until acknowledged by a person who can act.",
            },
            {
              label: "Logging",
              detail:
                "Every measurement, alarm and control action is recorded with a timestamp, forming the record on which later analysis depends.",
            },
          ],
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
            "Fail-safe by design. Every control loop must have a defined behaviour on sensor failure, signal loss and power loss, and that behaviour must be the safe one for the fish.",
            "Independence of critical alarms. The oxygen alarm should not depend on the same controller, power supply or network as the oxygen control.",
            "Redundant measurement for critical parameters, so a single drifting sensor cannot silently misrepresent the system.",
            "Alarm escalation with acknowledgement. An unacknowledged alarm must escalate to another person rather than repeating into an empty building.",
            "Plausibility checking. A reading that is physically impossible should raise a sensor fault, not drive a control action.",
            "Manual override on every automated function, accessible without the control system.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "The most dangerous sensor is one that fails plausibly",
          value:
            "A sensor reading zero is obviously broken and will be investigated. A fouled oxygen probe reading a comfortable value is trusted, and both the control system and the operator act on it. Cross-checking against a second measurement is the only defence.",
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
            "Identify the critical parameters first — oxygen, flow, level, temperature, power — and design their monitoring, alarming and redundancy before anything else.",
            "Provide alarm annunciation that reaches a person off site, with escalation and acknowledgement, and test the full path.",
            "Provide uninterruptible power to the monitoring and alarm system, independent of the plant it monitors.",
            "Place sensors where the measurement means something, and where they can be reached for cleaning and calibration.",
            "Specify enclosures, cabling and materials for a wet, corrosive environment.",
            "Keep the log locally as well as remotely, so a network failure does not create a gap in the record.",
            "Document the control logic in a form the operators can read.",
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
            "Calibrate sensors on a written schedule and record every calibration.",
            "Cross-check automated readings against a manual measurement regularly.",
            "Test alarms functionally, including the escalation path and the out-of-hours route, rather than checking that they are enabled.",
            "Review the alarm log for repeated nuisance alarms; alarm fatigue is the mechanism by which a real alarm gets ignored.",
            "Keep manual operating procedures current, and practise running the plant without the control system.",
            "Review trend data as a scheduled activity, because the value of logging is realised in review rather than in collection.",
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
          caption: "Automation symptoms and first checks",
          columns: ["Symptom", "Check first", "Common direction"],
          rows: [
            [
              "Reading stable and plausible while fish show distress",
              "Sensor calibration and fouling, against a manual measurement",
              "A fouled or drifted sensor reporting a value the water does not have",
            ],
            [
              "Control loop hunting or oscillating",
              "Tuning parameters, sensor response time, actuator lag",
              "Control tuned faster than the process it controls can respond",
            ],
            [
              "Frequent nuisance alarms",
              "Alarm limits against normal operating variation, sensor noise",
              "Limits set too tightly, producing fatigue that will mask a real alarm",
            ],
            [
              "An event occurred with no alarm raised",
              "Alarm configuration, escalation path, notification delivery, power to the alarm system",
              "The alarm path broken somewhere between detection and the person",
            ],
            [
              "Gaps in the logged record",
              "Local logging, network reliability, storage capacity",
              "Logging dependent on a network or a service that was unavailable",
            ],
            [
              "Actuator commanded but process unchanged",
              "Independent verification of the actual physical state",
              "A failed actuator with the control system reporting its command rather than reality",
            ],
          ],
          basis:
            "A diagnostic ordering. Appropriate alarm limits and control settings depend on species, loading, temperature, water chemistry and system configuration.",
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
            "Clean and calibrate sensors on schedule; fouling is continuous in culture water.",
            "Test the alarm and escalation path functionally at a fixed interval, including out-of-hours delivery.",
            "Verify uninterruptible supplies by loading them, not by checking their indicator lights.",
            "Check backup and retention of the logged data.",
            "Review and update control documentation whenever logic is changed, and keep a change record.",
            "Inspect enclosures, glands and cabling for water ingress and corrosion.",
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
            "Automating control before establishing reliable, calibrated measurement.",
            "Powering the alarm system from the same supply as the plant it monitors.",
            "Setting alarm limits so tight that nuisance alarms train everyone to ignore them.",
            "Trusting a single sensor for a critical parameter.",
            "Assuming a control command was executed, without independent verification.",
            "Testing that alarms are enabled rather than testing that they arrive.",
            "Collecting logs that nobody ever reviews.",
            "Leaving no documented manual procedure for running the plant without automation.",
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
            "Predictive and model-based control uses the system's own history to anticipate load rather than react to it — for instance adjusting oxygenation ahead of a scheduled feeding rather than after the resulting demand appears. The benefit is tighter parameter stability and lower energy use; the requirement is a trustworthy measurement record long enough to characterise the system.",
        },
        {
          kind: "text",
          value:
            "Connectivity introduces a security consideration that a purely local system does not have. Remote access is genuinely valuable for out-of-hours response, and it also creates a path into a control system that is holding a live biomass. Network segregation, authentication and controlled remote access belong in the design.",
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
            "Automation in a recirculating system is life support. Design it around failure: defined fail-safe behaviour, independent critical alarms, redundant measurement, escalation until acknowledged, and manual override throughout. Calibrate relentlessly, test the alarm path rather than the alarm, and review the log — because the record is only worth what someone reads from it.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Automation here is life support: design around failure behaviour, not normal behaviour.",
    "Critical alarms must be independent of the control system and its power supply.",
    "A sensor that fails plausibly is more dangerous than one that fails obviously.",
    "Alarms only save fish if they escalate to a person who can act, and are acknowledged.",
    "Nuisance alarms cause fatigue, which is how real alarms get ignored.",
    "Every automated function needs a documented manual override and procedure.",
  ],
  related: ["ai-aquaculture", "oxygen", "electrical", "operations"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on aquaculture system monitoring and management practice.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension fact sheets on monitoring, alarm systems and emergency preparedness for aquaculture facilities.",
    },
  ],
};
