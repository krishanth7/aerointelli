import type { KnowledgeArea } from "../types";

export const electrical: KnowledgeArea = {
  number: "25",
  slug: "electrical",
  title: "Electrical",
  navSummary: "Supply, distribution, standby power, protection and wet-environment safety.",
  summary:
    "Electricity is the farm's life support and its principal hazard at the same time. The design question is what remains energised when the supply fails, and whether anyone can be hurt by what does.",
  difficulty: "advanced",
  topics: ["engineering", "operations"],
  tags: ["power supply", "standby generation", "protection", "earthing", "safety"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-05-17",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Everything that keeps the fish alive runs on power. When the mains go off, only the things on backup keep working, so deciding what those are is the whole design. Water and electricity together also make the farm a place where mistakes hurt people, not only fish.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "The electrical system covers the incoming supply, distribution around the facility, protection devices, standby and uninterruptible sources, motor control, and the earthing and bonding that make the installation safe in a wet environment. It is the service on which every other system depends.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Loss of power is loss of life support",
          value:
            "In a recirculating system, oxygen supply, water movement and filtration all stop when the power stops. The time available before the standing biomass is harmed is short and depends on loading and temperature. Standby provision is therefore not a convenience but the principal protection of the stock.",
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
            "Every continuous process in the plant is electrically driven, so supply reliability sets the risk to the biomass directly.",
            "The environment is wet, humid and often corrosive, which is the condition electrical installations tolerate least well.",
            "People work around water with energised equipment, so protection and isolation are life-safety matters, not compliance formalities.",
            "Electricity is a major and continuous operating cost, so distribution design and metering feed the economics.",
            "Restart behaviour after an outage determines whether the plant recovers automatically or requires an attended sequence.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "Supply, standby and load priority",
      blocks: [
        {
          kind: "flow",
          caption: "What has to remain powered, in order of priority",
          steps: [
            {
              label: "Monitoring and alarms",
              detail:
                "Powered from an uninterruptible source independent of the plant, so that a failure is detected and announced even when everything else is dark.",
            },
            {
              label: "Emergency oxygen supply",
              detail:
                "Where possible arranged so that it does not depend on electrical power at all, using stored oxygen with a passive or battery-driven delivery path.",
            },
            {
              label: "Recirculation and gas transfer",
              detail:
                "The core life-support loads, carried by standby generation and started in a controlled sequence rather than all at once.",
            },
            {
              label: "Filtration and thermal control",
              detail:
                "Important over hours rather than minutes, so they may be sequenced later or shed to protect generator capacity.",
            },
            {
              label: "Ancillary and building loads",
              detail:
                "Lighting outside working areas, offices and non-essential services, which are shed first and restored last.",
            },
          ],
        },
        {
          kind: "text",
          value:
            "The two provisions serve different timescales. An uninterruptible supply covers the seconds between supply loss and standby generation coming on load, and it is what keeps the alarm working if the generator itself fails to start. Standby generation covers the hours or days of an extended outage. Neither substitutes for the other.",
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
            "Classify every load by how long the fish survive without it, and design standby provision from that classification.",
            "Keep the alarm and monitoring supply independent of the plant supply it monitors, including its own battery.",
            "Provide residual current protection on circuits accessible to people in wet areas, and discriminate it so a single fault does not trip life-support circuits.",
            "Earth and bond thoroughly, including tanks, pipework, walkways and metallic structures, because stray voltage in water is both a fish welfare and a personnel issue.",
            "Specify enclosures, glands and terminations for the actual humidity, condensation and corrosion, not for a dry occupancy.",
            "Design the restart sequence explicitly, so that motors do not all attempt to start simultaneously when supply returns.",
            "Provide local isolation at every item of equipment, lockable, so maintenance does not depend on a distant board.",
            "Sub-meter major loads so that energy management and fault detection have data to work from.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "A generator that has never been load tested is an assumption",
          value:
            "Standby generation fails on demand more often than expected, and the usual causes are a flat starting battery, stale or contaminated fuel, a blocked cooling path, or a changeover scheme that has never been exercised. Off-load running proves the engine starts; it does not prove the set will carry the plant. Testing on load, on a schedule, is the only meaningful verification.",
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
            "Establish the supply's actual reliability at the site, including interruption frequency and duration, before sizing standby provision.",
            "Size standby generation for the classified essential load with margin for motor starting, not for the sum of nameplate ratings.",
            "Provide automatic changeover with an alarm on operation, and a manual changeover path that works if the automatic one does not.",
            "Provide fuel storage sized against a realistic outage duration and a means of replenishing it.",
            "Separate control and instrument wiring from power cabling to limit electrical noise on measurement signals.",
            "Provide variable speed drives where the duty varies, and account for their harmonic behaviour and heat rejection.",
            "Locate switchgear and drives in a dry, ventilated, accessible room, away from washdown and from corrosive atmospheres.",
            "Document the distribution, protection settings and load classification in a form operators can use during an incident.",
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
            "Test standby generation on load on a schedule, and record the result including the changeover time.",
            "Test residual current devices by their test function and record it.",
            "Verify uninterruptible supplies by discharging them under load rather than reading their indicator.",
            "Inspect enclosures and glands for water ingress and corrosion, particularly after washdown changes.",
            "Keep fuel fresh and the fuel level known, since a generator with stale fuel is not a standby supply.",
            "Practise the outage procedure with the people who would actually be on site when it happens.",
            "Never work on wet-area equipment without proven isolation and lock-off.",
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
          caption: "Electrical symptoms and first checks",
          columns: ["Symptom", "Check first", "Common direction"],
          rows: [
            [
              "Standby set failed to take the load",
              "Starting battery, fuel, cooling, changeover scheme, load at the moment of transfer",
              "A set never tested on load, or motor starting current exceeding what the set can supply",
            ],
            [
              "Nuisance tripping of a residual current device",
              "Moisture ingress at a specific circuit, cable condition, accumulated leakage across several loads",
              "Water in an enclosure or gland, or too many loads sharing one protective device",
            ],
            [
              "Repeated motor or drive failure in one location",
              "Enclosure rating, ventilation, condensation, corrosive atmosphere, supply quality",
              "Equipment specified for a drier or cleaner environment than the one it occupies",
            ],
            [
              "Instrument readings noisy or unstable",
              "Cable routing against power circuits, screening, earthing arrangement",
              "Signal cabling run alongside power cabling, or a screen earthed at both ends",
            ],
            [
              "Fish showing avoidance or distress with normal water quality",
              "Stray voltage in the water, earthing and bonding of tanks and immersed equipment",
              "A leakage path through immersed metalwork, which is also a personnel hazard",
            ],
            [
              "Plant fails to restart cleanly after an outage",
              "Restart sequencing, motor starting current, control power restoration order",
              "All loads attempting to start together, tripping protection on restoration",
            ],
          ],
          basis:
            "A diagnostic ordering. Appropriate protection settings, ratings and standby sizing depend on the installation, local regulation, loading and system configuration.",
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
            "Run standby generation on load on schedule and log run hours, changeover time and any faults.",
            "Service the generator engine, including fuel, filters, coolant and starting battery.",
            "Thermally inspect switchgear and terminations, since loose connections heat before they fail.",
            "Test protective devices and record the results.",
            "Inspect enclosures, glands and cable entries for ingress and corrosion.",
            "Verify earthing and bonding continuity periodically, particularly after any modification involving immersed metalwork.",
            "Keep single-line diagrams and load classification current with the installation.",
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
            "Powering the alarm system from the supply it is meant to monitor.",
            "Sizing standby generation on nameplate totals without allowing for motor starting.",
            "Testing the generator off load and treating that as proof of availability.",
            "Using enclosures and glands rated for a dry environment in a washdown area.",
            "Placing all wet-area circuits behind a single residual current device, so one fault removes several.",
            "Omitting local lockable isolation, so maintenance relies on someone not switching a distant board.",
            "Running instrument cabling alongside power cabling and then treating the resulting noise as a sensor fault.",
            "Leaving no defined restart sequence, so restoration trips the supply again.",
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
            "Power quality deserves attention where variable speed drives are numerous. Drives draw non-sinusoidal current, which produces harmonic distortion that can heat transformers and neutral conductors and interfere with sensitive instrumentation. Mitigation by choke, filter or drive selection is straightforward when considered at design and awkward afterwards. The same drives also complicate residual current protection, which must be of a type suited to the waveform involved.",
        },
        {
          kind: "text",
          value:
            "Renewable generation and storage change the resilience picture as well as the cost. Battery storage sized for the essential load can cover short interruptions without engaging a generator at all, and it removes the starting-reliability question for the most common class of outage. Whether that is worthwhile depends on the site's interruption profile, the tariff, and the cost of the storage against the value of the biomass it protects.",
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
            "The electrical design is decided by what must stay energised and for how long. Classify loads by survival time, keep alarms on an independent uninterruptible supply, size and sequence standby generation for real starting behaviour, and test it on load. Specify for a wet, corrosive environment, earth and bond immersed metalwork, provide lockable local isolation, and write the restart sequence before the first outage rather than during it.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Classify every load by how long the fish survive without it; standby design follows from that.",
    "Alarms and monitoring need a supply independent of the plant they watch.",
    "An untested-on-load generator is an assumption, not a standby supply.",
    "Wet, corrosive conditions dictate enclosure, gland and material specification throughout.",
    "Stray voltage from poor bonding harms fish and endangers people.",
    "Define the restart sequence, or restoration trips the supply again.",
  ],
  related: ["automation", "oxygen", "failure-modes", "safety"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on aquaculture facility services, infrastructure and risk management.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension publications on electrical service, standby power and emergency preparedness for aquaculture facilities.",
    },
    {
      organisation: "Bureau of Indian Standards (BIS)",
      description:
        "National standards governing electrical installation, protection and safety practice in India.",
    },
  ],
};
