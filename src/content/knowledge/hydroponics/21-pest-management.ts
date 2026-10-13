import type { KnowledgeArea } from "../types";

export const pestManagement: KnowledgeArea = {
  number: "21",
  slug: "pest-management",
  title: "Pest Management and Biosecurity",
  navSummary: "Keeping pests out, finding them early, and managing them as a hierarchy rather than a reflex.",
  summary:
    "Protected cultivation concentrates a uniform crop in a warm, sheltered space with no winter. That is excellent for the crop and equally excellent for the pests that reach it. Effective management is therefore mostly exclusion and monitoring, with intervention as the last and most tightly governed step rather than the first.",
  difficulty: "intermediate",
  topics: ["health", "operations", "biology", "production"],
  tags: ["integrated pest management", "biosecurity", "scouting", "biological control", "exclusion", "quarantine"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-26",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "A pest that never gets in costs nothing to control. Screen the openings, keep incoming plant material in quarantine, control who and what moves through the house, and check sticky traps and plants on a fixed schedule so that a problem is found while it is still a few insects rather than an infestation. Everything after that is more expensive and less certain.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "A greenhouse or indoor farm removes the seasonal interruptions that limit pest populations outdoors. Temperature stays in the range that shortens insect generation times, humidity is often favourable, natural enemies are absent unless introduced, and the crop is a single species planted at high density. Under those conditions a small founding population can become a production problem in weeks.",
        },
        {
          kind: "text",
          value:
            "The response that scales is structural. Exclusion, hygiene and monitoring are cheap, repeatable and effective against every pest at once, and they work before there is a population to fight. Reactive control is expensive, disruptive, constrained by law, and always applied to a population that is already established. The order of effort should follow that difference.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "No product recommendations appear in this article",
          value:
            "This area describes exclusion, monitoring, cultural control and biological control. It names no pesticide, dose or treatment. Any chemical intervention must comply with local registration and label law for that crop and site, and must be decided with a qualified agronomist.",
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
            "Direct feeding damage is often the smaller part of the loss. Several of the common protected-cultivation pests transmit plant viruses, and a virus introduced by a vector cannot be cured — infected plants are removed, and the crop plan absorbs the gap. A pest problem can therefore become a plant-health problem that no amount of subsequent control reverses.",
        },
        {
          kind: "text",
          value:
            "There is also an operational cost that is easy to underestimate. Once a population is established, control activity competes with routine work for the same labour, restricts movement through the house, may impose re-entry and harvest intervals, and can conflict with any biological control programme already running. A single incursion reshapes the working week for a month.",
        },
        {
          kind: "text",
          value:
            "Finally, repeated reactive intervention selects for resistance in the pest population. Every use of a mode of action removes the individuals susceptible to it, so the strategy that seems to work fastest is also the one that erodes its own future effectiveness. This is the strongest technical argument for putting prevention first.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Integrated pest management as a hierarchy" },
        {
          kind: "text",
          value:
            "Integrated pest management is not a mixture of methods applied simultaneously. It is an ordered sequence in which each step is used only when the ones before it have been exhausted. The order reflects cost, reliability and consequence, and skipping to the end is what produces resistance, residues and repeat problems.",
        },
        {
          kind: "flow",
          caption: "The integrated pest management hierarchy, in the order the steps should be attempted.",
          steps: [
            { label: "Exclusion", detail: "Physical and procedural barriers that stop the pest arriving: screening, door discipline, quarantine of incoming plant material, control of vehicles, staff and equipment." },
            { label: "Hygiene", detail: "Removal of crop debris, weeds inside and around the structure, standing water and abandoned plants, so there is no reservoir between crops." },
            { label: "Monitoring", detail: "Sticky traps and structured plant inspection on a fixed schedule, so a population is detected while it is still small and localised." },
            { label: "Cultural control", detail: "Climate, plant spacing, irrigation, deleafing, cultivar choice and crop scheduling adjusted to make conditions less favourable to the pest." },
            { label: "Biological control", detail: "Introduced predators, parasitoids or entomopathogens, released against a known and quantified population, usually preventively or at low pressure." },
            { label: "Targeted intervention", detail: "Localised action confined to the affected area, chosen with a qualified agronomist and compatible with any biological agents in use." },
            { label: "Regulated chemical use", detail: "Only where the preceding steps are insufficient, strictly within local registration and label law for the crop and site, with intervals and records observed." },
            { label: "Review", detail: "Determine how the pest arrived and which step in the hierarchy failed, and correct that step rather than planning to repeat the last one." },
          ],
        },
        { kind: "subheading", value: "Prevention and reaction" },
        {
          kind: "text",
          value:
            "Prevention is applied to the system, is scheduled, has a predictable cost and works against unknown future problems. Reaction is applied to a population, is unscheduled, has an unpredictable cost and works only against the problem already present. The two are not alternatives on equal footing. A farm that finds itself reacting frequently has a prevention defect, and treating the symptom repeatedly will not find it.",
        },
        { kind: "subheading", value: "Action thresholds" },
        {
          kind: "text",
          value:
            "Not every insect found requires a response. An action threshold is the population level at which the expected damage justifies the cost and disruption of intervening. Thresholds differ by pest, by crop, by growth stage, by whether the pest transmits a virus in that crop, and by the market's tolerance for damage on the harvested part. A threshold for a leaf pest on a fruiting crop is not a threshold for the same pest on a leafy crop where the leaf is the product.",
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
            "Two technical relationships underlie most of the practical decisions: how fast a founding population grows, and what mesh is needed to exclude a given insect at an acceptable ventilation penalty.",
        },
        {
          kind: "formula",
          name: "Population growth between inspections",
          expression: "N_t = N_0 x r^(t / g)",
          terms: [
            { symbol: "N_t", meaning: "Population at time t", unit: "individuals" },
            { symbol: "N_0", meaning: "Founding population at detection or introduction", unit: "individuals" },
            { symbol: "r", meaning: "Net multiplication factor per generation under prevailing conditions", unit: "dimensionless" },
            { symbol: "t", meaning: "Elapsed time", unit: "days" },
            { symbol: "g", meaning: "Generation time at the prevailing temperature", unit: "days" },
          ],
          example:
            "Consider a hypothetical pest whose generation time shortens as the house runs warmer through a season. With the same founding population and the same multiplication factor, halving the generation time squares the population reached by a fixed inspection date. This is why the interval between scouting rounds, not the thoroughness of any one round, usually determines whether a problem is caught early.",
          limitations:
            "Multiplication factors and generation times are strongly temperature-dependent and vary with pest species, host plant and natural enemy pressure, so this expresses a rate of change rather than a forecast. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "text",
          value:
            "The practical consequence is that scouting frequency is a design parameter. Weekly inspection in a warm house with a fast-breeding pest can allow several generations between detections; the same interval in cooler conditions may be entirely adequate.",
        },
        {
          kind: "formula",
          name: "Screen area required to offset the airflow penalty",
          expression: "A_screen = A_open / p",
          terms: [
            { symbol: "A_screen", meaning: "Screened vent area required", unit: "m2" },
            { symbol: "A_open", meaning: "Equivalent free vent area needed for the ventilation duty", unit: "m2" },
            { symbol: "p", meaning: "Effective porosity of the screen, the fraction of area that passes air", unit: "dimensionless" },
          ],
          example:
            "Consider a hypothetical vent fitted with a fine insect screen of low effective porosity. To move the same air as the unscreened opening, the screened area must be enlarged in proportion, or the pressure drop absorbed by the fans. A screen retrofitted without enlarging the vent reduces ventilation capacity, which raises house temperature and humidity — conditions that favour both pests and disease.",
          limitations:
            "Effective porosity is not the same as the nominal open area of the fabric and degrades with dust, algae and age; pressure drop also depends on approach velocity and screen geometry. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Screening is a ventilation decision as much as a pest decision",
          value:
            "Mesh fine enough to exclude the smallest target pest carries a real airflow penalty. Adding it without recalculating vent area or fan capacity trades a pest problem for a climate problem.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        { kind: "subheading", value: "The common pests of protected cultivation" },
        {
          kind: "table",
          caption: "Pests frequently encountered in protected horticulture and what they typically present as",
          columns: ["Pest group", "Typical evidence", "Why it matters", "Where it usually enters"],
          rows: [
            ["Thrips", "Silvering and stippling of leaf surfaces, distorted new growth, scarring on fruit and flowers", "Very small, hides in flowers and growing points, and several species transmit plant viruses", "Vents, doors, incoming plant material, cut flowers and staff clothing"],
            ["Whitefly", "Adults disturbed into flight from leaf undersides, sticky honeydew and sooty mould below infested leaves", "Rapid multiplication in warm conditions and virus transmission in several crops", "Vents and doors, and strongly with incoming young plants"],
            ["Aphids", "Colonies on soft new growth and leaf undersides, shed white skins, honeydew, distorted shoots", "Fast reproduction, honeydew fouling the product, and virus transmission", "Vents, weeds around the structure, incoming plants"],
            ["Spider mites", "Fine speckling on the upper leaf surface, webbing at shoot tips in advanced cases, bronzing", "Favoured by hot dry conditions and easily spread on hands, clothing and tools", "Staff movement between houses, incoming plants, adjacent outdoor hosts"],
            ["Leaf miners", "Winding pale mines within the leaf, and puncture marks from adult feeding and egg laying", "Photosynthetic area lost and the leaf itself devalued where it is the product", "Vents and incoming plant material"],
          ],
          basis:
            "General descriptions of pest groups commonly reported in protected horticulture, given for orientation and not as a substitute for identification. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        { kind: "subheading", value: "Exclusion" },
        {
          kind: "text",
          value:
            "Exclusion is the whole perimeter, not just the vents. Insect screening on ventilation openings is the visible element, but the practical failures are usually elsewhere: doors propped open during harvest, an unscreened extraction fan, a gap at a gutter or a floor edge, a torn cladding sheet, drains without traps, and vegetation growing against the outside of the structure acting as a staging post.",
        },
        {
          kind: "list",
          items: [
            "Screen every opening through which air can enter, including fan intakes and evaporative cooling pads, and inspect screens for tears and blockage as a scheduled task.",
            "Use a double-door entry or an airlock where the structure and budget permit, and enforce single-door discipline where they do not.",
            "Keep a vegetation-free margin around the structure. Weeds outside are the reservoir from which the inside is colonised.",
            "Control the movement of tools, trolleys, crates and staff between zones, and work from the cleanest zone to the dirtiest rather than the reverse.",
            "Treat pallets, packaging and returned crates as entry routes, because they are.",
          ],
        },
        { kind: "subheading", value: "Quarantine of incoming plant material" },
        {
          kind: "text",
          value:
            "Incoming young plants are the single highest-risk entry route, because they carry pests directly into the middle of the crop, past every perimeter control. A quarantine area — physically separate, with its own tools and its own traps, inspected on a defined schedule before release — is the control. Plants should be inspected on arrival, held for long enough to allow eggs to hatch and a population to become detectable, and released only after that inspection.",
        },
        {
          kind: "text",
          value:
            "Where a farm propagates its own material, the same discipline applies internally. Propagation should be the cleanest zone on the site and should never be entered after working in production without a change of clothing and hands.",
        },
        { kind: "subheading", value: "Monitoring and scouting" },
        {
          kind: "text",
          value:
            "Sticky traps give a continuous, comparable index of flying adult activity. Coloured traps are placed just above the canopy and raised as the crop grows, distributed on a grid with additional traps at doors, vents and other likely entry points. They are counted and recorded on a fixed day each week, and the number is written down even when it is zero — the value of trap data is entirely in the trend and the map.",
        },
        {
          kind: "text",
          value:
            "Traps do not detect everything. Mites, immature stages and pests that do not fly are found only by looking at plants. Structured plant inspection means a defined number of plants, at defined positions, examined in a defined way — leaf undersides, growing points, flowers — rather than a general walk-through. Both methods are needed, and neither substitutes for the other.",
        },
        { kind: "subheading", value: "Biological control" },
        {
          kind: "text",
          value:
            "Biological control uses natural enemies of the pest: predators that consume it, parasitoids that develop inside it, and entomopathogenic organisms that infect it. It works best when introduced early, against a low and known population, and when the house environment suits the agent as well as the crop. Agents have their own temperature and humidity requirements, their own establishment times, and their own sensitivities to residues left by earlier chemical use.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Biological control is a programme, not an emergency measure",
          value:
            "Natural enemies work by establishing a population over weeks. Introduced into a heavy infestation as a last resort, they usually disappoint. Their selection, timing and compatibility with anything else applied should be planned with a specialist supplier or agronomist before the crop is planted.",
        },
      ],
    },
    {
      id: "practical-knowledge",
      heading: "Practical knowledge",
      blocks: [
        {
          kind: "list",
          ordered: true,
          items: [
            "Map the house and number the trap positions. A count without a location is half a data point.",
            "Fix the scouting day and keep it, so the interval between counts is constant and the trend is interpretable.",
            "Record zero counts. A run of zeros is what makes the first non-zero count meaningful.",
            "Inspect leaf undersides, growing points and open flowers, since these are where several of the common pests are found first.",
            "Mark and revisit any focus found, rather than relying on memory of roughly where it was.",
            "Keep a reference sample or a clear photograph of anything unidentified, and obtain a proper identification before deciding anything.",
            "Review the trap map monthly against the house layout. Repeated first detections at the same door or vent identify the exclusion defect.",
          ],
        },
        {
          kind: "text",
          value:
            "Staff training carries much of this. The people who spend the most hours among the plants are the ones most likely to see the first damage, and a short, specific briefing on what to look for and whom to tell is worth more than an elaborate protocol nobody follows.",
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
            "The structure determines how much pest management is possible. A house with generous screened vent area, sealed gutters, a functioning airlock, a separate quarantine bay and a hard, drainable floor can be run largely on exclusion. A house with none of those will need continual intervention regardless of how competent the grower is, and the shortfall cannot be closed by effort.",
        },
        {
          kind: "text",
          value:
            "Climate control interacts directly with pest pressure. Persistent leaf wetness and stagnant air favour some organisms; hot dry conditions favour others. Adjusting climate for pest reasons has to be weighed against what the crop needs, and the trade-off is genuine rather than free.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Eradication is rarely the right objective",
          value:
            "In a commercial house the realistic aim is to keep populations below the level at which they cause economic damage, using the least disruptive method that achieves it. Pursuing zero insects tends to cost more than the damage prevented and accelerates resistance.",
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
            "Spend on exclusion before spending on control. The perimeter is the only measure that works against pests not yet identified.",
            "Quarantine every incoming plant, without exception, including material from a trusted supplier.",
            "Monitor on a fixed schedule and record everything, including nil returns.",
            "Set action thresholds in advance, per pest and per crop stage, so a decision under pressure is a lookup.",
            "Identify before acting. Control chosen against a misidentified pest is cost without benefit.",
            "Follow local registration and label law for any chemical intervention, observe re-entry and harvest intervals, keep records, and make the decision with a qualified agronomist rather than alone.",
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
          caption: "Recurring failures in pest management programmes",
          columns: ["Problem", "Usual root cause"],
          rows: [
            ["Repeated incursions of the same pest each season", "An unresolved exclusion defect — a fan, a door, a torn screen or vegetation outside the structure"],
            ["Population discovered only when damage is visible", "Scouting interval too long relative to the pest's generation time, or inspection not structured"],
            ["Traps show nothing while the crop is clearly infested", "The pest is a non-flying or immature stage that traps cannot catch; plant inspection was skipped"],
            ["Biological control introduced and no effect seen", "Released too late against too large a population, or into conditions the agent cannot establish in"],
            ["Control effectiveness declining over successive seasons", "Repeated reliance on the same reactive approach selecting for resistance"],
            ["Problem appears first in the quarantine area", "Working as designed — this is the outcome quarantine exists to produce"],
            ["Pest spreading along staff walking routes", "Movement discipline: hands, clothing and tools carrying the pest between zones"],
          ],
          basis:
            "Commonly reported programme failures in protected cultivation, listed as prompts for investigation rather than as diagnoses. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
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
            "Write a biosecurity procedure covering entry, movement, tools, incoming material and waste, and make it short enough to be followed.",
            "Inspect screens, doors and seals on a maintenance schedule, not only when a pest appears.",
            "Clear the crop and the debris completely between cycles, and leave no bridging plants for the pest to survive on.",
            "Keep the quarantine area genuinely separate, with dedicated tools and its own traps.",
            "Plan the biological control programme before planting, with agent selection and timing agreed in advance.",
            "Rotate modes of action where any chemical use occurs, under agronomic advice and within label law, to slow resistance development.",
            "Debrief after every incursion and fix the step in the hierarchy that failed.",
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
            "Advanced practice is largely about the integration between control methods rather than any single method. Compatibility is the hard part: an intervention that suppresses a pest and also removes an established natural enemy population can leave the crop worse off within a fortnight, because the pest usually recovers faster than its predator. Any decision to intervene in a house running biological control has to be assessed against the agents present.",
        },
        {
          kind: "text",
          value:
            "Resistance management is the other structural discipline. Because a protected crop is a closed, uniform population under repeated selection, resistance develops faster there than outdoors. Rotating modes of action, limiting the number of consecutive applications and leaning on non-chemical steps are the standard responses, and all of them are planned across a season rather than decided in the moment.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Automated detection",
          value:
            "Camera-based trap counting, in-canopy imaging and environmental modelling of pest development are under active development and can shorten the effective monitoring interval. They change how often the house is looked at; they do not remove the need for identification or for a trained person to decide what the observation means.",
        },
        {
          kind: "text",
          value:
            "Finally, pest management should be evaluated economically over the whole crop rather than per incident. The right comparison is between the annual cost of prevention — screening, quarantine space, scouting labour, biological control agents — and the annual cost of the losses, disruption and interventions that occur without it. On that basis prevention is usually the cheaper programme, which is the practical reason the hierarchy is ordered as it is.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Exclusion is the cheapest and most general control, because it works against pests that have not yet been identified.",
    "Incoming plant material bypasses every perimeter control, so quarantine is not optional.",
    "Sticky traps track flying adults; only structured plant inspection finds mites, immature stages and non-flying pests.",
    "Scouting interval must be short relative to the pest's generation time, which shortens as the house runs warmer.",
    "Biological control is a planned programme introduced early, not an emergency response to a heavy infestation.",
    "Chemical intervention is the last step in the hierarchy, governed by local registration and label law and decided with a qualified agronomist.",
  ],
  related: ["plant-health", "greenhouse", "climate-control", "operations"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Plant production and protection programme material on integrated pest management and plant health.",
      url: "https://www.fao.org/plant-production-protection/en",
    },
    {
      organisation: "International Organisation for Biological and Integrated Control",
      description: "A scientific organisation publishing working group material on biological and integrated control in protected crops.",
    },
    {
      organisation: "Indian Council of Agricultural Research and state agricultural universities",
      description: "National and regional guidance on integrated pest management and locally registered practice for protected cultivation.",
    },
  ],
};
