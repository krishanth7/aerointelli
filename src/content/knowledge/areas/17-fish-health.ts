import type { KnowledgeArea } from "../types";

export const fishHealth: KnowledgeArea = {
  number: "17",
  slug: "fish-health",
  title: "Fish Health and Biosecurity",
  navSummary: "Quarantine, handling, prevention and mortality investigation.",
  summary:
    "In a closed loop, health management is mostly exclusion and prevention. Once a pathogen is inside a recirculating system it has repeated access to every fish sharing that water.",
  difficulty: "advanced",
  topics: ["fish", "operations"],
  tags: ["biosecurity", "quarantine", "disease", "mortality investigation", "treatment"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-04-15",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Keeping fish healthy in a closed system is mostly about keeping problems out, because once something gets in, the same water carries it to every fish repeatedly. Most disease outbreaks begin with stress, poor water quality or an infected batch of new fish.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Fish health management in a recirculating system covers biosecurity — the exclusion of pathogens — together with husbandry that avoids the stress that permits infection, surveillance that detects problems early, and a response capability for when something is nevertheless established.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Disease is usually an interaction, not an arrival",
          value:
            "Clinical disease generally requires a pathogen, a susceptible host and conditions favouring infection at the same time. Many potential pathogens are present in most systems without causing disease. What changes is usually the host's condition, and what changes that is usually stress or water quality.",
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
            "A shared loop gives a pathogen repeated contact with the entire standing biomass.",
            "Treatment options are constrained, because most therapeutants that would clear an infection also damage the nitrifying population.",
            "A health event destroys value in two ways at once: mortality, and the growth lost by every surviving fish during the event and its recovery.",
            "Recovery of a biofilter suppressed during treatment takes weeks, so the water quality consequences outlast the disease.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "How pathogens enter and establish",
      blocks: [
        {
          kind: "flow",
          caption: "Entry routes, in the order they matter",
          steps: [
            {
              label: "Incoming stock",
              detail:
                "New fish are the principal route by which a pathogen enters a closed facility. This is why quarantine is the central biosecurity control rather than one measure among many.",
            },
            {
              label: "Incoming water",
              detail:
                "Source and makeup water can carry organisms. Treating incoming water is often more valuable than treating the recirculating flow.",
            },
            {
              label: "Equipment and people",
              detail:
                "Nets, buckets, boots, hands and vehicles move organisms between zones and between farms. This route is entirely a matter of procedure.",
            },
            {
              label: "Feed and materials",
              detail:
                "Fresh and live feeds carry a higher risk than formulated dry feeds. Storage and handling determine whether that risk is realised.",
            },
            {
              label: "Establishment",
              detail:
                "Once inside, an organism persists in biofilm, sludge and on the fish. Disinfection of the water reduces circulation but does not eliminate these reservoirs.",
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
            "Zone the facility so that clean and dirty areas are physically distinct, and so that people, equipment and water each move in one direction only.",
            "Provide quarantine with genuinely separate water, equipment and access, not a tank in the same loop.",
            "Independent loops limit the spread of a waterborne pathogen, which is one of the principal reasons to build them.",
            "Treat incoming water as a design case in its own right, including chlorine, metals and gas supersaturation as well as organisms.",
            "Any therapeutant introduced into the loop is a biofilter exposure and must be planned as one.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Plan treatment around the biofilter before it is needed",
          value:
            "The decision about how a system will be treated — in the loop, in an isolated tank, or by transferring fish — should be made during design, when the isolation valves and treatment tanks can still be included. Made during an outbreak, it is made under pressure and usually costs the biofilter.",
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
            "Include a quarantine facility with independent water treatment and its own equipment set.",
            "Provide hygiene barriers at zone boundaries: footbaths, hand hygiene, dedicated clothing and equipment.",
            "Provide disinfection of incoming makeup water.",
            "Design tanks and equipment to be cleanable and disinfectable, without crevices that retain organic material.",
            "Provide an isolated treatment capability so that a tank can be dosed without dosing the loop.",
            "Ensure mortality removal and disposal routes do not cross clean areas.",
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
            "Quarantine every incoming batch, for a defined period, with defined observation and testing.",
            "Observe fish daily, deliberately, and record behaviour, appetite and any lesions.",
            "Record mortality daily by tank, and investigate a rising trend before it becomes an event.",
            "Keep equipment dedicated to zones, and colour-code it so misuse is visible.",
            "Minimise handling, and where handling occurs, plan oxygen provision and recovery.",
            "Involve a qualified aquatic veterinarian for diagnosis and for any therapeutic decision, and follow the regulatory requirements applying to any product used.",
          ],
        },
      ],
    },
    {
      id: "common-problems",
      heading: "Mortality investigation",
      blocks: [
        {
          kind: "table",
          caption: "Investigating a mortality event: what the pattern suggests",
          columns: ["Pattern", "Check first", "Common direction"],
          rows: [
            [
              "Sudden mortality across a whole tank",
              "Dissolved oxygen record, flow, recent chemical additions, total dissolved gas",
              "An acute environmental or equipment event rather than disease",
            ],
            [
              "Mortality rising gradually over days",
              "Water quality trend, feeding record, behavioural observations, external signs",
              "A developing infection or a chronic water quality problem",
            ],
            [
              "Mortality confined to one tank on a shared loop",
              "That tank's flow, oxygen, feeding and handling history",
              "A local hydraulic, feeding or handling cause rather than a loop-wide one",
            ],
            [
              "Mortality following handling or grading",
              "Handling method, duration, oxygen during handling, recovery conditions",
              "Handling stress, often with a secondary infection following",
            ],
            [
              "Largest or smallest fish dying preferentially",
              "Size distribution, aggression, feed access",
              "Competition and aggression rather than infection",
            ],
          ],
          basis:
            "A diagnostic ordering. Any conclusion about disease requires professional diagnosis; this table indicates what to establish before that consultation.",
        },
        {
          kind: "text",
          value:
            "The first question in any mortality investigation is whether the cause is environmental or infectious, because the two demand entirely different responses. The water quality record, the equipment record and the handling record answer that question faster than any examination of the fish.",
        },
      ],
    },
    {
      id: "maintenance",
      heading: "Routine health practice",
      blocks: [
        {
          kind: "list",
          items: [
            "Remove mortalities promptly and record them; a decomposing fish is both a water quality load and an infection reservoir.",
            "Disinfect equipment between zones and between tanks according to a written procedure.",
            "Clean and disinfect tanks between batches where the biosecurity policy requires it, and record it.",
            "Maintain the quarantine facility to the same standard as production, even when it is empty.",
            "Review the health record with the water quality record on a scheduled basis, not only after an event.",
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
            "Quarantining new stock in a tank connected to the production loop.",
            "Sharing nets and equipment between tanks or zones.",
            "Treating the whole loop when an isolated tank treatment was possible, and losing the biofilter as a result.",
            "Treating before diagnosis, and obscuring the evidence needed to diagnose.",
            "Attributing an environmental mortality event to disease, and vice versa, without checking the records.",
            "Relying on UV or ozone as the biosecurity plan.",
            "Leaving mortalities in the tank until the next scheduled check.",
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
            "Microbial community management is an alternative frame to suppression. A recirculating system supports a large microbial population, most of it benign or beneficial, and a stable mature community is thought to resist colonisation by opportunists better than a repeatedly disinfected one. This changes how disinfection intensity is chosen and how a system is managed after any disturbance.",
        },
        {
          kind: "text",
          value:
            "Health monitoring is also moving toward earlier detection: environmental sampling for pathogen presence, and behavioural monitoring for the changes that precede clinical signs. Both aim to shift the response from outbreak management to intervention before an outbreak occurs.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Early detection methods are developing",
          value:
            "Environmental pathogen detection and automated behavioural monitoring for early disease indication are areas of active development, and their reliability in commercial conditions should be established rather than assumed.",
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
            "Health management in a closed system is exclusion, prevention and early detection. Quarantine incoming stock, treat incoming water, zone the facility and dedicate equipment. Reduce the stress and water quality problems that turn a present organism into a clinical disease. And design the treatment capability, including the ability to isolate a tank, before it is needed.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "A shared loop gives any pathogen repeated access to the whole standing biomass.",
    "Incoming stock is the principal entry route, which makes quarantine the central control.",
    "Disease is usually an interaction of pathogen, host condition and environment — stress and water quality are the levers.",
    "Most in-loop treatments damage the nitrifying population, so isolated treatment capability is a design decision.",
    "Establish whether a mortality event is environmental or infectious before anything else.",
    "Disinfection reduces circulating load but does not reach biofilm, sludge or the fish themselves.",
  ],
  related: ["disinfection", "fish-biology", "operations", "murrel"],
  furtherReading: [
    {
      organisation: "World Organisation for Animal Health (WOAH)",
      description:
        "International standards and guidance on aquatic animal health, disease surveillance and biosecurity.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on aquaculture biosecurity, health management and responsible practice.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research (ICAR)",
      description: "Research and extension material on aquatic animal health in Indian aquaculture.",
    },
  ],
};
