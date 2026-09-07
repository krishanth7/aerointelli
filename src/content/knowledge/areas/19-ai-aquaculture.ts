import type { KnowledgeArea } from "../types";

export const aiAquaculture: KnowledgeArea = {
  number: "19",
  slug: "ai-aquaculture",
  title: "AI in Aquaculture",
  navSummary: "What is deployed, what is in research, and the line between the two.",
  summary:
    "Machine learning is genuinely useful in aquaculture where there is a long, clean measurement record and a decision that repeats. It is not useful as a substitute for instrumentation that was never installed.",
  difficulty: "advanced",
  topics: ["automation", "engineering", "operations"],
  tags: ["machine learning", "computer vision", "prediction", "data quality", "decision support"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-04-23",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Software can learn patterns from a farm's history and point out what a person would miss — a slow drift, an early sign of trouble. It only works if the farm has been recording good data for a long time. Without that, there is nothing to learn from.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "In this context, artificial intelligence means statistical and machine learning methods applied to the data a farm already generates: sensor time series, feeding and production records, images and video. The applications are prediction, classification, anomaly detection and decision support.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "A model is a function of its training data",
          value:
            "Machine learning finds patterns in the record it is given. If that record is short, poorly calibrated, inconsistently sampled or drawn from a different system, the resulting model reproduces those limitations with a confident-looking output. Data quality is not a precondition to be handled later; it is the whole of the problem.",
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
            "A recirculating farm produces a continuous multivariate record that no operator can review in full.",
            "Many valuable signals are slow drifts across several parameters at once, which is exactly what human review of individual gauges misses.",
            "Repetitive estimation tasks — counting, sizing, classifying behaviour — are laborious and are performed inconsistently by people.",
            "The economics of the sector reward small persistent improvements in feed conversion and survival, which are the kind of gains statistical methods can find.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "Where it is applied",
      blocks: [
        {
          kind: "table",
          caption: "Application areas and their present state",
          columns: ["Application", "What it does", "State"],
          rows: [
            [
              "Anomaly detection in sensor data",
              "Learns the normal joint behaviour of the parameters and flags departures from it",
              "The most mature and most defensible application, because it requires only the farm's own sensor history and its output is a prompt for human review rather than an action.",
            ],
            [
              "Computer vision for counting and sizing",
              "Estimates fish number and size distribution from images or video",
              "In commercial use, with accuracy strongly dependent on turbidity, density, lighting and species behaviour in the specific installation.",
            ],
            [
              "Feeding response detection",
              "Infers satiation from behaviour, acoustic signal or uneaten pellet detection",
              "Actively developed and commercially offered, addressing the largest source of avoidable waste. Performance is installation-specific.",
            ],
            [
              "Water quality forecasting",
              "Predicts short-horizon parameter movement from history and current state",
              "Demonstrated where a long, well-calibrated record exists. The dependency on data quality is absolute.",
            ],
            [
              "Health and behaviour classification",
              "Detects behavioural change associated with disease or stress",
              "An area of active research, with commercial products emerging. Independent validation in production conditions is limited.",
            ],
            [
              "Growth and production prediction",
              "Projects growth and harvest timing from historical performance",
              "Useful as a planning aid built on a farm's own records; poor when transferred from another system, species or diet.",
            ],
          ],
          basis:
            "A description of application areas and their maturity. No performance figures are given, because published accuracy claims are specific to particular installations and conditions and do not transfer.",
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Engineering principles",
      blocks: [
        {
          kind: "flow",
          caption: "What has to be in place before a model is worth building",
          steps: [
            {
              label: "Calibrated measurement",
              detail:
                "Sensors that are calibrated on schedule and verified against a second method. A model trained on drifting sensors learns the drift.",
            },
            {
              label: "Consistent recording",
              detail:
                "The same parameters, sampled at the same points, at the same intervals, with gaps recorded as gaps rather than interpolated silently.",
            },
            {
              label: "Sufficient history",
              detail:
                "Enough time to cover the conditions the model must handle, including seasonal variation and the events it is meant to detect.",
            },
            {
              label: "Labelled outcomes",
              detail:
                "For anything predicting an event, the events must be recorded accurately and with their timing, or there is nothing to learn against.",
            },
            {
              label: "A decision the output feeds",
              detail:
                "A prediction that changes no decision has no value. The intended action should be defined before the model is built.",
            },
            {
              label: "Human review in the loop",
              detail:
                "Output is treated as a prompt for an operator, not as a control action, unless the failure mode of acting on a wrong output is acceptable.",
            },
          ],
        },
        {
          kind: "list",
          items: [
            "Correlation found in one farm's record does not establish a mechanism, and does not transfer to another farm.",
            "Model performance degrades as the system changes — new species, new diet, new equipment — so monitoring the model is an ongoing task.",
            "Never place a model in a control path where a wrong output has an irreversible consequence for a live biomass.",
            "The uncertainty of a prediction is part of the prediction. An output without it invites misuse.",
          ],
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
            "Design the data infrastructure first: consistent sensor placement, calibration records, timestamped logging, local and remote retention.",
            "Record the context alongside the measurements — feeding, handling, maintenance, stocking, mortality — because those events explain most of the variation a model will encounter.",
            "Keep raw data as well as processed data, since future analysis will want questions that were not anticipated.",
            "Define the decision each analytical output supports before commissioning any modelling work.",
            "Keep models advisory. Retain the deterministic control and alarm layer as the safety system.",
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
            "Continue calibrating instruments; the value of the entire analytical layer rests on them.",
            "Record events accurately and promptly, since retrospective reconstruction is unreliable.",
            "Treat any model output as a prompt to investigate, and record what the investigation found — that record is what improves the model.",
            "Monitor model performance over time and expect it to degrade after any material change to the system.",
            "Be sceptical of vendor performance claims and require validation in the system concerned.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Instrument first, model later",
          value:
            "The most common failure in applying these methods to a farm is attempting them on a record that was never intended to be analysed. Consistent measurement and event recording deliver value on their own, and they are the prerequisite for anything further.",
        },
      ],
    },
    {
      id: "common-problems",
      heading: "Common problems and troubleshooting",
      blocks: [
        {
          kind: "table",
          caption: "Analytical symptoms and first checks",
          columns: ["Symptom", "Check first", "Common direction"],
          rows: [
            [
              "Model performed well in testing, poorly in production",
              "Whether validation used data from a different period or system than training",
              "Overfitting, or evaluation that did not respect the time ordering of the data",
            ],
            [
              "Anomaly detection producing constant alerts",
              "Sensor calibration and noise, and whether normal operating variation was represented in training",
              "The model learning a period of operation unlike the current one",
            ],
            [
              "Vision-based estimates inconsistent",
              "Turbidity, lighting, density, camera position and fouling",
              "Conditions outside those the system was calibrated for",
            ],
            [
              "Predictions degrading over months",
              "Changes in species, diet, equipment or operating regime since training",
              "The system has moved away from the conditions the model represents",
            ],
            [
              "Output disagrees with operator judgement",
              "The underlying measurements, against a manual check",
              "Frequently a sensor problem, which is itself a useful finding",
            ],
          ],
          basis:
            "A diagnostic ordering for analytical systems. Expected performance depends entirely on the installation, data history and conditions concerned.",
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
            "Audit data quality on a schedule: gaps, calibration records, sensor drift, event record completeness.",
            "Re-validate models against recent data periodically, not only at deployment.",
            "Keep a record of model versions, training periods and the changes between them.",
            "Clean and reposition cameras and optical sensors, whose performance degrades with fouling faster than most operators expect.",
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
            "Attempting modelling before establishing reliable, calibrated measurement.",
            "Transferring a model between farms, species or diets and expecting the reported performance.",
            "Placing a model in a control path where a wrong output harms a live biomass.",
            "Evaluating on data that overlaps the training period, and mistaking the result for predictive performance.",
            "Presenting outputs without uncertainty, so they are read as measurements.",
            "Failing to record operational events, leaving the record without the explanations for its own variation.",
            "Treating a discovered correlation as a mechanism.",
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
            "Hybrid approaches combine mechanistic models of the system — mass balance, gas transfer, nitrification kinetics — with statistical models fitted to the farm's data. The mechanistic component constrains the result to physically possible behaviour, which is a meaningful advantage in a domain where a purely statistical model can produce outputs that violate conservation of mass.",
        },
        {
          kind: "text",
          value:
            "Data volume is a constraint the sector faces collectively. Individual farms rarely have enough history to train models for rare events, and pooling data across farms raises questions of comparability, commercial confidentiality and whether systems are similar enough for the pooling to be valid.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Most of this field is still developing",
          value:
            "Outside anomaly detection and vision-based measurement, applications of machine learning in aquaculture remain closer to research than to settled practice, and claims about performance should be treated as installation-specific until independently validated.",
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
            "Machine learning earns its place in aquaculture where a long, calibrated, consistently recorded history supports a decision that repeats. Anomaly detection and vision-based measurement are the most established; most else is developing. Instrument first, record events alongside measurements, keep models advisory rather than in the control path, and validate in the system concerned rather than accepting figures from another one.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "A model reproduces the quality of its training data — calibrated, consistent measurement is the whole prerequisite.",
    "Anomaly detection and vision-based measurement are the most established applications.",
    "Correlation found in one farm's record is not a mechanism and does not transfer.",
    "Keep models advisory; retain deterministic control and alarms as the safety layer.",
    "Record operational events alongside sensor data, or the record cannot explain its own variation.",
    "Model performance degrades as the system changes, so validation is ongoing.",
  ],
  related: ["automation", "operations", "water-quality", "biomass"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical and policy publications on technology adoption and digitalisation in aquaculture.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "University aquaculture engineering research groups",
      description:
        "Peer-reviewed research on sensing, modelling and machine learning applications in aquaculture systems.",
    },
  ],
};
