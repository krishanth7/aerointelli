import type { KnowledgeArea } from "../types";

export const commissioning: KnowledgeArea = {
  number: "28",
  slug: "commissioning",
  title: "Commissioning",
  navSummary: "Water testing, biofilter maturation, first stocking and handover.",
  summary:
    "Commissioning is where the drawings are tested against reality. The dominant constraint is biological: the biofilter has to be grown before the system can carry fish, and that cannot be hurried.",
  difficulty: "advanced",
  topics: ["operations", "filtration", "engineering"],
  tags: ["startup", "biofilter maturation", "cycling", "testing", "handover"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-05-29",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Before fish go in, the plant is filled, run and tested, and the biofilter is grown by feeding it ammonia until it can handle the waste the fish will produce. Skipping that wait is the most common and most expensive mistake at startup.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Commissioning is the sequence between construction and production: proving the mechanical and electrical installation, filling and running the system on water, establishing the nitrifying biofilm, stocking the first fish, and handing the plant over to the operators with its documentation and procedures.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The biofilter sets the schedule",
          value:
            "Nitrifying bacteria establish at a rate governed by their own growth, which is slow and is further slowed by low temperature, unfavourable pH and inadequate alkalinity. No amount of equipment or commercial pressure accelerates it materially. Every commissioning programme should be planned around this period rather than assuming it can be compressed.",
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
            "Faults found on water are inconvenient; the same faults found with fish in the tanks are losses.",
            "An immature biofilter cannot oxidise the ammonia a full stocking produces, and stocking into one is the classic cause of a failed first cycle.",
            "Commissioning is the only opportunity to test the plant to its limits deliberately, including its failure behaviour.",
            "The baseline recorded during commissioning is what every later performance comparison is made against.",
            "Handover determines whether the operators can run and maintain what was built, or only what they were shown.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "The commissioning sequence",
      blocks: [
        {
          kind: "flow",
          caption: "From construction to production",
          steps: [
            {
              label: "Static and pre-commissioning checks",
              detail:
                "Verify the installation against the drawings: pipe routing, valve positions and labelling, electrical terminations, earthing and bonding, instrument installation, and that every item is accessible for maintenance.",
            },
            {
              label: "Fill and leak test",
              detail:
                "Fill in stages, checking joints, supports and levels as the load comes on. Leaks are cheapest to find now, and pipework settles under water load.",
            },
            {
              label: "Hydraulic commissioning",
              detail:
                "Run the loop on water. Verify flows against design, balance distribution between tanks, purge air from high points, confirm tank hydraulics carry solids to the drain, and record head loss across each process in its clean condition.",
            },
            {
              label: "Equipment and control testing",
              detail:
                "Prove every item on its duty, then test the control logic, the alarm limits, the escalation path, the failure behaviour on sensor loss, the standby changeover and the response to a simulated power failure.",
            },
            {
              label: "Biofilter maturation",
              detail:
                "Dose an ammonia source and monitor ammonia and nitrite until ammonia is oxidised, nitrite has risen and then fallen, and nitrate is accumulating. Maintain temperature, pH and alkalinity in the range that supports the bacteria throughout.",
            },
            {
              label: "First stocking",
              detail:
                "Stock lightly and increase progressively, allowing the biofilter to adapt to each step. Monitor ammonia and nitrite intensively through every increase.",
            },
            {
              label: "Performance verification and handover",
              detail:
                "Confirm the system holds its parameters at the intended loading, then hand over drawings, procedures, records, spares and training.",
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
            "Test on water before testing on fish, and test the failure modes deliberately while there is nothing at risk.",
            "Record the clean-condition baseline for every process — head loss, flow, power — because all later fouling diagnosis is relative to it.",
            "Treat the maturation period as scheduled, funded time with no revenue, not as slack in the programme.",
            "Increase loading in steps and let the biofilter respond to each, rather than stocking to design in one action.",
            "Establish alkalinity and pH management before maturation begins, since nitrification consumes alkalinity and stalls without it.",
            "Verify alarms by causing the condition, not by inspecting the configuration.",
            "Seed with established media where it is available and its health status is known, understanding that this accelerates rather than removes the maturation period.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Commission the failures, not only the functions",
          value:
            "The most valuable commissioning tests are the ones that simulate loss: pull a sensor, stop a pump, cut the supply, block a screen. These prove the fail-safe behaviour, the changeover and the alarm path under the only conditions where they matter, and they are practically impossible to test properly once the tanks hold fish.",
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
            "Plan the commissioning programme during design, including the maturation period and its cost.",
            "Provide the means to dose an ammonia source and to sample the biofilter's inlet and outlet independently.",
            "Provide isolation so individual processes can be tested and proven separately.",
            "Specify what evidence constitutes acceptance for each system, and agree it before construction ends.",
            "Plan for partial operation during commissioning, since the plant will run at low load for an extended period.",
            "Arrange the first stock supply against a realistic maturation schedule rather than a construction completion date.",
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
            "Monitor ammonia and nitrite frequently through maturation and through every subsequent loading increase.",
            "Maintain alkalinity actively during maturation, since it is consumed as nitrification establishes.",
            "Hold temperature and pH in the range that supports the bacteria, which may not be the range that suits the fish.",
            "Record everything from the first fill; this is the baseline the farm will refer back to for years.",
            "Train the operating team during commissioning rather than after it, so they see the plant being proven.",
            "Resist stocking pressure until the biofilter demonstrates that it oxidises the applied load.",
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
          caption: "Commissioning symptoms and first checks",
          columns: ["Symptom", "Check first", "Common direction"],
          rows: [
            [
              "Ammonia not falling after extended dosing",
              "Temperature, pH, alkalinity, flow through the biofilter, any residual disinfectant or chemical",
              "Conditions outside the range the bacteria tolerate, or a chemical residue from construction or cleaning",
            ],
            [
              "Nitrite rising and not clearing",
              "Alkalinity, time elapsed, whether ammonia oxidation is complete",
              "The second nitrification step establishing after the first, which is normal in sequence but must be allowed to complete",
            ],
            [
              "pH falling steadily during maturation",
              "Alkalinity, buffering practice, exchange rate",
              "Alkalinity consumed by nitrification without replacement",
            ],
            [
              "Flow below design on first running",
              "Air at high points, valve positions, distribution balance, pump duty point against the real system curve",
              "Trapped air, or system head higher than the design assumed",
            ],
            [
              "Solids accumulating in tanks",
              "Tank hydraulics, inlet arrangement, drain design, flow distribution",
              "Hydraulics not delivering solids to the drain, which is easiest to correct now",
            ],
            [
              "Alarm did not activate during a simulated fault",
              "Alarm configuration, signal path, notification delivery, power supply to the alarm",
              "A break in the path between detection and the person, found at the only safe time to find it",
            ],
            [
              "Ammonia spike after a stocking increase",
              "Size of the increase, biofilter capacity demonstrated before it, feeding rate applied",
              "Loading increased faster than the biofilm could adapt",
            ],
          ],
          basis:
            "A diagnostic ordering. Maturation duration, dosing and acceptable values depend on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "maintenance",
      heading: "Handover deliverables",
      blocks: [
        {
          kind: "list",
          items: [
            "As-built drawings, including line sizes, materials, valve schedule and electrical single-line diagrams.",
            "Equipment documentation, manufacturers' manuals and the maintenance schedule derived from them.",
            "Control logic documentation, alarm limits and the escalation configuration in a readable form.",
            "The commissioning record: baseline flows, head losses, power figures and the maturation history.",
            "Operating procedures, including the emergency and manual-operation procedures.",
            "A spares holding matched to the equipment actually installed.",
            "Evidence that the operating team has been trained on each system and on the emergency procedures.",
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
            "Stocking before the biofilter demonstrates it can oxidise the applied load.",
            "Treating maturation as programme slack rather than as scheduled cost with no revenue.",
            "Stocking to design capacity in one step instead of increasing progressively.",
            "Allowing alkalinity to fall during maturation and stalling the process.",
            "Testing that alarms are configured rather than causing the condition.",
            "Skipping the simulated power failure, which is the one test that cannot be repeated later.",
            "Recording no clean-condition baseline, leaving future fouling diagnosis without a reference.",
            "Handing over equipment without procedures, spares or training.",
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
            "Seeding with media or biomass from an established system shortens maturation, and it also transfers whatever that system carried. The biosecurity assessment of the source is therefore part of the decision, and a seeded start should not be treated as removing the need to demonstrate performance before stocking.",
        },
        {
          kind: "text",
          value:
            "Commissioning is also the last practical opportunity to correct hydraulic and layout errors. Tank hydraulics that do not move solids, a distribution that is out of balance, a valve that cannot be reached — all are correctable while the plant is empty and very awkward afterwards. The temptation to defer them into production is strong and is almost always regretted.",
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
            "Commissioning proves the plant on water, then grows the biofilter, then stocks in steps. Test the failure modes deliberately while nothing is at risk, record the clean-condition baseline that every later diagnosis will refer to, hold alkalinity and temperature through maturation, and refuse to stock until the biofilter has demonstrated its capacity. Hand over documentation, spares and trained people, not only equipment.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Biofilter maturation sets the schedule and cannot be materially compressed.",
    "Test on water first, and simulate the failures while nothing is at risk.",
    "Record the clean-condition baseline; all later fouling diagnosis is relative to it.",
    "Alkalinity must be maintained through maturation or nitrification stalls.",
    "Stock in progressive steps, letting the biofilm adapt to each increase.",
    "Handover is documentation, spares, procedures and training — not only equipment.",
  ],
  related: ["biofiltration", "tan-ammonia", "operations", "water-quality"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on recirculating aquaculture system establishment and management.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension publications on biofilter establishment and system startup for recirculating aquaculture.",
    },
  ],
};
