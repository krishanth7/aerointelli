import type { KnowledgeArea } from "../types";

export const safety: KnowledgeArea = {
  number: "30",
  slug: "safety",
  title: "Safety",
  navSummary: "Hazards to people: electrical, chemical, gas, confined space and drowning.",
  summary:
    "A recirculating farm combines water, electricity, oxygen, ozone and confined spaces. Every one of the serious hazards on the site is capable of killing someone, and most of them give no warning.",
  difficulty: "intermediate",
  topics: ["operations", "engineering"],
  tags: ["personnel safety", "confined space", "oxygen", "ozone", "chemicals"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-06",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "The farm is a working industrial site. Water and power together, gases you cannot see or smell, deep tanks, slippery floors and chemicals. The dangerous ones are dangerous because there is no warning — you notice the problem after it is already serious.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Safety here means the protection of the people who work in and visit the facility. The principal hazard classes are electrical, drowning and fall, gas atmospheres, chemical exposure, confined space entry, mechanical entrapment, and biological exposure. Fish welfare and food safety are related but separate subjects.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The dangerous hazards are the ones without warning",
          value:
            "An oxygen-enriched or oxygen-depleted atmosphere is invisible and odourless. Ozone is detectable by smell only at concentrations already worth avoiding, and the sense of smell fatigues. Stray voltage in water gives no indication until someone is in contact. These hazards cannot be managed by vigilance; they require engineered control and monitoring.",
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
            "The hazards are severe rather than merely unpleasant; several are capable of causing death without warning.",
            "The work is routine, and routine erodes caution around hazards that are present every day.",
            "People work alone, out of hours and in wet areas, which is when the consequences of an incident are worst.",
            "Emergency response times to an aquaculture site are frequently long, so on-site provision matters.",
            "Legal duties toward employees, contractors and visitors apply regardless of the size of the operation.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "Hazards and controls",
      blocks: [
        {
          kind: "table",
          caption: "Principal hazards and their controls",
          columns: ["Hazard", "Where it arises", "Control"],
          rows: [
            [
              "Electrical shock",
              "Wet floors, immersed equipment, washdown near electrical apparatus, damaged cabling",
              "Residual current protection, thorough earthing and bonding, appropriate enclosure ratings, lockable isolation and lock-off before work",
            ],
            [
              "Oxygen-enriched atmosphere",
              "Oxygen storage, generation and leakage in enclosed rooms",
              "Ventilation, atmosphere monitoring with alarm, no ignition sources or oils near oxygen service, correct fittings and materials",
            ],
            [
              "Oxygen-depleted atmosphere",
              "Sumps, pits, tanks, and rooms where another gas displaces air",
              "Treat as confined space, monitor the atmosphere before and during entry, ventilate, and never enter on assumption",
            ],
            [
              "Ozone exposure",
              "Ozone generation, contact vessels, off-gas from treated water",
              "Sealed contact and destruct systems, off-gas destruction, ambient ozone monitoring with alarm, no entry to affected spaces while generating",
            ],
            [
              "Carbon dioxide accumulation",
              "Degassing equipment discharging into an enclosed building",
              "Ducting the discharge outside, building ventilation, monitoring where accumulation is credible",
            ],
            [
              "Drowning and falls",
              "Deep tanks, open channels, walkways, wet and slippery floors",
              "Edge protection, covers and grating, slip-resistant surfaces, drainage, handrails, and rescue provision",
            ],
            [
              "Chemical exposure",
              "Disinfectants, treatment chemicals, pH adjustment, cleaning agents",
              "Safe storage with segregation, correct decanting practice, ventilation, protective equipment, eyewash and shower, and accessible safety data",
            ],
            [
              "Mechanical injury",
              "Pumps, blowers, drum filter drives, augers, feeders",
              "Guarding, isolation and lock-off before intervention, and no maintenance on running equipment",
            ],
            [
              "Manual handling",
              "Feed bags, media, equipment, harvest",
              "Mechanical handling provision, route design and training",
            ],
            [
              "Biological exposure",
              "Culture water, mortalities, sludge, treatment agents",
              "Hygiene facilities, protective equipment, wound care, and immunisation where relevant",
            ],
          ],
          basis:
            "A structural enumeration of hazard classes and control types. Specific limits, monitoring requirements and legal duties depend on the jurisdiction, the substances in use and the installation.",
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
            "Eliminate the hazard by design where possible, before relying on control, and rely on protective equipment last.",
            "Engineer control of the hazards that give no warning, since these cannot be managed by attention.",
            "Monitor atmospheres where oxygen, ozone or carbon dioxide can accumulate, with alarms audible where people are.",
            "Provide lockable isolation at every item of equipment so that lock-off does not depend on a distant board.",
            "Separate incompatible chemicals in storage, and design the store's ventilation and bunding for what it holds.",
            "Design lone working out where possible, and provide a lone worker alarm where it cannot be.",
            "Design rescue provision, not only prevention: reaching equipment, edge protection and access for emergency services.",
            "Treat any sump, pit or tank as a confined space until a competent assessment establishes otherwise.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Confined space entry kills people who intended a two-minute job",
          value:
            "Fatalities in tanks, sumps and pits characteristically involve a short, unplanned task, and frequently a second person who entered to help and was overcome by the same atmosphere. Entry requires assessment, atmosphere testing, ventilation, a permit, an attendant outside and a rescue plan — every time, regardless of how brief the task appears.",
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
            "Ventilate rooms containing oxygen, ozone or degassing equipment, and locate that equipment where accumulation is least likely.",
            "Provide edge protection, covers and grating on tanks and channels from the outset.",
            "Specify slip-resistant surfaces and drainage that removes standing water.",
            "Provide adequate lighting throughout, including emergency lighting on the routes people would use during an outage.",
            "Place chemical storage with segregation, bunding, ventilation, and eyewash and shower facilities nearby.",
            "Design maintenance access so tasks can be done without improvisation, since improvised access is where injuries occur.",
            "Provide clear escape routes and assembly points, and keep them clear of storage.",
            "Provide first aid and rescue equipment appropriate to the hazards actually present.",
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
            "Train everyone on the hazards present, including contractors and visitors, before they work unaccompanied.",
            "Use permits for confined space entry, hot work and work on energised systems.",
            "Isolate and lock off before any intervention on equipment, and prove the isolation rather than assuming it.",
            "Test gas monitors and alarms functionally on a schedule.",
            "Maintain safety data and chemical labelling, and keep incompatible substances apart in practice as well as on the plan.",
            "Report and investigate near misses, since they are the only free information about a hazard.",
            "Review lone working arrangements against what people actually do out of hours.",
            "Practise the emergency procedures, including rescue, rather than only documenting them.",
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
          caption: "Recurring safety failures and their origin",
          columns: ["Failure", "Examine first", "Common direction"],
          rows: [
            [
              "Work carried out on live or unisolated equipment",
              "Availability of local isolation, and the time pressure on the task",
              "Isolation that is inconvenient or distant, so it is skipped under pressure",
            ],
            [
              "Unplanned confined space entry",
              "Whether spaces are identified and controlled, and whether short tasks have a procedure",
              "Spaces not designated, so a brief task is not recognised as an entry",
            ],
            [
              "Gas alarm ignored or disabled",
              "Nuisance alarm history, sensor calibration, alarm siting",
              "Fatigue from repeated false alarms, addressed by silencing rather than by correction",
            ],
            [
              "Slips and falls",
              "Drainage, surface specification, housekeeping, lighting",
              "Standing water and clutter rather than individual carelessness",
            ],
            [
              "Chemical incident during decanting or mixing",
              "Storage segregation, decanting facilities, training, protective equipment",
              "Decanting done without a designated place or method",
            ],
            [
              "Contractor injured on site",
              "Induction, hazard communication, supervision, permit coverage",
              "Contractors treated as outside the safety system rather than inside it",
            ],
          ],
          basis:
            "A description of recurring failure patterns. Specific legal duties, exposure limits and required controls depend on the jurisdiction and the installation.",
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
            "Calibrate and functionally test gas detection and alarms on schedule.",
            "Test residual current devices and record the results.",
            "Inspect edge protection, covers, grating and handrails for damage and removal.",
            "Check eyewash, shower, first aid and rescue equipment for availability and condition.",
            "Inspect and maintain guarding on rotating equipment, particularly after maintenance work.",
            "Review chemical storage, labelling and safety data against what is actually held.",
            "Keep training records current and refresh training on the rare, high-consequence procedures.",
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
            "Entering a sump, pit or tank without treating it as a confined space.",
            "Working on wet-area equipment without proven isolation and lock-off.",
            "Assuming an oxygen or ozone atmosphere would be noticed.",
            "Silencing a nuisance gas alarm instead of correcting its cause.",
            "Storing incompatible chemicals together for convenience.",
            "Allowing lone working on hazardous tasks with no alarm or check-in arrangement.",
            "Excluding contractors and visitors from induction and hazard communication.",
            "Documenting emergency and rescue procedures without ever rehearsing them.",
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
            "Oxygen service deserves separate treatment from other gas systems. An oxygen-enriched atmosphere makes materials ignite and burn that would not otherwise do so, including clothing, and hydrocarbon contamination on fittings or hands is a recognised ignition mechanism. Oxygen systems therefore require dedicated components, specified cleanliness, no oils or greases, and ventilation of the spaces they occupy — the controls are different in kind, not merely in degree.",
        },
        {
          kind: "text",
          value:
            "Safety culture is what determines whether any of the above survives contact with a busy day. The measurable behaviours are whether people report near misses without consequence, whether isolation is used when nobody is watching, and whether stopping an unsafe task is supported. These are management outcomes, and they predict incident rates more reliably than the quality of the written system does.",
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
            "The serious hazards on a recirculating farm — electrical in wet areas, oxygen-enriched and oxygen-depleted atmospheres, ozone, confined spaces, drowning — share the property of giving no warning, so they must be engineered and monitored rather than watched for. Design the controls in, isolate and lock off, treat every pit as a confined space, include contractors in the system, and rehearse the rescue as well as writing it down.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "The severe hazards give no warning, so they need engineered control and monitoring, not vigilance.",
    "Treat every sump, pit and tank as a confined space until assessed otherwise.",
    "Wet-area electrical work requires proven isolation and lock-off, every time.",
    "Oxygen service is a different hazard class: dedicated components, specified cleanliness, no oils.",
    "Silencing a nuisance gas alarm removes the protection rather than the problem.",
    "Rehearse rescue and emergency procedures; documenting them is not the same as having them.",
  ],
  related: ["electrical", "oxygen", "disinfection", "failure-modes"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on aquaculture facility operation, risk and good practice.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension publications on facility safety practice for aquaculture operations.",
    },
    {
      organisation: "Bureau of Indian Standards (BIS)",
      description:
        "National standards relevant to electrical safety, gas handling and chemical storage in India.",
    },
  ],
};
