import type { KnowledgeArea } from "../types";

export const pollinationTraining: KnowledgeArea = {
  number: "22",
  slug: "pollination-training",
  title: "Crop Training, Pruning and Pollination",
  navSummary: "Trellising systems, indeterminate stem management, de-leafing, cluster pruning and biological or mechanical pollination.",
  summary:
    "High-wire vine crops such as indeterminate tomatoes, cucumbers, capsicums and eggplants require continuous canopy architecture management. Trellising, lower-leaf removal, apical pinching, side-shoot pruning and cluster thinning direct photosynthetic assimilates to marketable fruit while opening the lower canopy to airflow and light. Managing commercial bumblebee hives or vibrating wands guarantees complete flower fertilization and uniform fruit set.",
  difficulty: "intermediate",
  topics: ["crops", "production", "operations"],
  tags: [
    "crop training",
    "high wire system",
    "trellising",
    "de-leafing",
    "pruning",
    "pollination",
    "bumblebees",
    "fruit thinning",
  ],
  species: ["Tomato", "Cucumber", "Bell Pepper", "Eggplant", "Melon"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-08-04",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Indeterminate vine crops will grow into an unmanageable jungle if left untended. Pruning removes side shoots (suckers) so the plant puts its energy into one main stem. De-leafing removes aging lower leaves to allow air through the base and prevent fungal rot. For greenhouse tomatoes, introducing bumblebees or vibrating flower trusses is required to set fruit.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "In soil-less greenhouse cultivation of indeterminate fruiting species, plants can grow continuously for 9 to 11 months, reaching stem lengths exceeding 10 to 15 metres. Canopy training transforms this potential tangle into an orderly, single-plane vertical wall of foliage and fruit.",
        },
        {
          kind: "text",
          value:
            "Crop training balances the vegetative sink (leaves and stem development) against the generative sink (flower clusters and ripening fruit). Without systematic physical intervention, plants alternate between excessive vegetative vigour and fruit abortion.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why sink-source balance drives long-term yield",
      blocks: [
        {
          kind: "text",
          value:
            "A fruiting vine has a finite pool of photosynthetically fixed sucrose each day. An overloaded plant with too many unpruned fruit trusses starves its root system of carbohydrates, triggering blossom-end rot and root die-back. Conversely, stripping too many leaves starves the fruit of sugars, resulting in low Brix and delayed harvest.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "The high-wire lean-and-lower system",
          value:
            "In high-wire production, plants are supported on twine suspended from crop support wires 3.5 to 4.5 m above the floor. As stems grow past the wire, growers release twine from spools and slide the plants sideways ('leaning and lowering'), laying bare, de-leafed stems horizontally on lower gutter hooks.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Key pruning operations" },
        {
          kind: "table",
          caption: "Weekly canopy management protocol for indeterminate vine crops",
          columns: ["Operation", "Frequency", "Technique & Objective"],
          rows: [
            ["Side-shooting (Desuckering)", "Weekly", "Snap out lateral shoots when <5 cm long to maintain single apical leader"],
            ["De-leafing", "Weekly", "Remove 2–3 lowest aging leaves beneath ripening fruit to optimize air circulation"],
            ["Truss Pruning", "At fruit set", "Thin clusters to uniform count (e.g. 4–5 fruit/truss for beefsteak, 8–10 for cherry)"],
            ["Twisting / Clipping", "Weekly", "Wind twine around stem or attach plastic vine clips beneath each leaf node"],
          ],
          basis: "Standard commercial CEA high-wire crop husbandry protocol.",
        },
        { kind: "subheading", value: "Pollination mechanisms" },
        {
          kind: "text",
          value:
            "Tomato flowers are self-fertile but require vibration (resonance at 400–500 Hz) to release pollen from the anther cone onto the stigma. Commercial CEA facilities utilize hives of commercial bumblebees (Bombus terrestris or Bombus impatiens), whose sonic 'buzz pollination' delivers far higher fruit set, heavier fruit weight and higher seed counts than manual hormone sprays.",
        },
      ],
    },
    {
      id: "practice",
      heading: "Hygiene and worker ergonomics",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            "Perform de-leafing and pruning early in the morning when plants are turgid so wounds snap cleanly and dry quickly before sunset.",
            "Sanitize hands and cutting blades with alcohol or skimmed milk/trisodium phosphate solutions to prevent mechanical transmission of Tobamoviruses (such as ToBRFV).",
            "Utilize electric pipe-rail scissor lifts to position workers safely and ergonomically at the crop wire.",
            "Inspect bumblebee hives weekly: examine freshly opened flowers for distinctive brown 'bruise' marks indicating successful bee visitation.",
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
            "High-tech facilities monitor the 'head thickness' (stem diameter 15–20 cm below the growing apex) as an indicator of plant balance. A head thickness under 8–9 mm indicates excessive generative load requiring de-leafing reduction or truss pruning; a thickness above 12–14 mm indicates vegetative dominance requiring increased 24-hour temperature differentials and higher root-zone EC.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Canopy training directs photosynthetic assimilates into marketable fruit rather than unruly foliage.",
    "The lean-and-lower method allows indeterminate vines to produce continuously for up to a year.",
    "Weekly de-leafing beneath ripening trusses improves air movement and lowers humidity around stems.",
    "Cluster thinning produces uniform fruit size, prevents plant stalling and reduces cull rates.",
    "Commercial bumblebee hives ensure high pollination efficiency and superior fruit shape and seed fill.",
  ],
  related: ["crop-knowledge", "plant-health", "operations", "pest-management"],
  furtherReading: [
    {
      organisation: "Wageningen University and Research",
      description: "Vine crop management manuals covering high-wire tomato, cucumber and sweet pepper production.",
    },
    {
      organisation: "International Society for Horticultural Science",
      description: "Research papers on canopy architecture, light interception and bumblebee pollination in CEA.",
    },
  ],
};
