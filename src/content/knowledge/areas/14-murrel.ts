import type { KnowledgeArea } from "../types";

export const murrel: KnowledgeArea = {
  number: "14",
  slug: "murrel",
  title: "Murrel and Channa",
  navSummary: "Species-specific culture knowledge for murrel in recirculating systems.",
  summary:
    "Murrel are air-breathing, carnivorous and territorial. Each of those traits changes the engineering: the oxygen case, the feed, the tank and the grading regime are all different from a typical finfish system.",
  difficulty: "intermediate",
  topics: ["fish", "operations", "water"],
  tags: ["murrel", "Channa", "snakehead", "air-breathing", "carnivorous"],
  species: ["Murrel", "Channa"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-04-03",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Murrel breathe air as well as water, so they need to reach the surface. They eat other animals, not plants, so they need a high-protein feed. And they will attack tank-mates that are noticeably smaller than they are, so keeping a batch even in size is a production task, not a preference.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Murrel are freshwater fishes of the genus Channa, known in English as snakeheads. Several species are cultured in South and Southeast Asia, and they hold a strong market position in parts of India, where they command a premium relative to many other freshwater species.",
        },
        {
          kind: "text",
          value:
            "Three biological characteristics dominate their culture. They possess an accessory air-breathing organ and take atmospheric air at the surface. They are carnivorous. And they are territorial and aggressive, particularly where size variation exists within a group.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Species within the genus differ",
          value:
            "Channa is a genus, not a single production animal. Growth pattern, temperature preference, size at maturity and market form differ between species and between regional strains, and culture parameters should be established for the specific species and source being stocked.",
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
            "Murrel is one of the species for which recirculating production is most defensible in the Indian context: it holds a high market value, tolerates intensive conditions better than many species, and benefits from the biosecurity and control a closed system provides. But a system designed for a generic finfish will be wrong for it in several specific ways.",
        },
        {
          kind: "list",
          items: [
            "Air-breathing changes the oxygen risk profile without removing it, and it makes surface access a hard design requirement.",
            "Carnivorous nutrition means a high-protein diet, which raises nitrogen input per unit of feed and therefore the biofilter duty.",
            "Territoriality means size grading is a production necessity rather than a marketing convenience.",
            "Jumping and escape behaviour makes tank covers a standard requirement rather than an option.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "Air-breathing and what it changes",
      blocks: [
        {
          kind: "text",
          value:
            "Murrel supplement gill respiration with an accessory air-breathing organ, taking air at the surface. This gives them a tolerance of low dissolved oxygen that most cultured finfish do not have, and it is frequently cited as a reason the species suits intensive culture.",
        },
        {
          kind: "flow",
          caption: "What air-breathing does and does not change",
          steps: [
            {
              label: "Surface access becomes mandatory",
              detail:
                "The fish must be able to reach an air-water interface. Covers must not seal the surface, and stocking arrangements must not prevent access.",
            },
            {
              label: "Acute oxygen risk is reduced",
              detail:
                "A short interruption in oxygen supply is less immediately catastrophic than it would be for an obligate water-breather.",
            },
            {
              label: "Other parameters are unchanged",
              detail:
                "Air-breathing does nothing about ammonia, nitrite, carbon dioxide in the water or solids. The biofilter duty and water quality obligations remain in full.",
            },
            {
              label: "Chronic low oxygen still costs production",
              detail:
                "Relying on air-breathing to cover a permanently marginal dissolved oxygen level imposes an energetic cost that appears as reduced growth and feed conversion.",
            },
          ],
        },
        {
          kind: "callout",
          tone: "established",
          title: "Air-breathing is not a substitute for oxygen management",
          value:
            "The tolerance is real and is worth having as a safety margin. It is not a licence to under-size oxygenation, because the fish pays for surfacing in energy that would otherwise become growth, and because none of the other water quality obligations are relieved.",
        },
      ],
    },
    {
      id: "system-role",
      heading: "Nutrition and feeding behaviour",
      blocks: [
        {
          kind: "text",
          value:
            "Murrel are carnivorous. Wild diets are animal-based, and cultured fish require diets formulated accordingly, with high protein content and appropriate amino acid composition. This has direct engineering consequences, because nitrogen input per kilogram of feed is higher than for an omnivorous species.",
        },
        {
          kind: "list",
          items: [
            "Higher dietary protein means higher TAN production per unit feed, which increases biofilter duty for the same feeding rate.",
            "Weaning from live or fresh feed onto formulated pellets is a recognised challenge in murrel culture and should be planned as a distinct nursery stage.",
            "Feeding response is strongly influenced by light, disturbance and cover, so feeding practice interacts with tank design.",
            "Feed conversion figures should be established from the specific diet, species and system in use rather than adopted from published values for other species.",
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
            "Provide unobstructed surface access in every tank, and covers that retain fish without sealing the water surface.",
            "Design covers and freeboard for jumping and escape, including at drains, overflows and pipe entries.",
            "Size biofiltration for the nitrogen load of a high-protein carnivorous diet, not for a generic feeding assumption.",
            "Provide grading capability as core infrastructure, since size sorting will be repeated throughout the cycle.",
            "Consider providing structure or shading where it supports the species' behaviour, balanced against the need to keep tanks cleanable and observable.",
            "Plan a nursery stage with the water quality and feeding regime that weaning requires.",
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
            "Grade regularly. Size variation drives aggression, which drives further size variation and, eventually, losses.",
            "Observe feeding closely; a carnivorous species with strong feeding hierarchies rewards attention to distribution rather than to total quantity.",
            "Watch for damage from aggression — fin and body injury — as an early indicator that grading is overdue.",
            "Maintain routine oxygen monitoring despite the species' air-breathing tolerance, because chronic marginal oxygen costs growth silently.",
            "Keep tanks covered at all times, including during handling, when escapes most often occur.",
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
          caption: "Murrel-specific symptoms and first checks",
          columns: ["Symptom", "Observe or measure first", "Common direction"],
          rows: [
            [
              "Fin and body damage across a tank",
              "Size distribution, stocking density, feeding adequacy",
              "Aggression driven by size variation or by competition at feeding",
            ],
            [
              "Growing size divergence within a cohort",
              "Feed distribution, grading history, dominance behaviour",
              "Larger individuals monopolising feed, reinforcing the divergence",
            ],
            [
              "Poor uptake of formulated feed in young fish",
              "Weaning protocol, feed particle size and presentation, light and disturbance",
              "An incomplete transition from live or fresh feed",
            ],
            [
              "Fish escaping or found outside tanks",
              "Cover integrity, freeboard, gaps at pipe and drain entries",
              "The species' jumping behaviour meeting an incomplete containment design",
            ],
            [
              "Growth below expectation with acceptable water quality",
              "Dissolved oxygen trend, dietary protein adequacy, grading state, disturbance",
              "Chronic marginal oxygen, an unsuitable diet, or an energetic cost from aggression",
            ],
          ],
          basis:
            "A diagnostic ordering. Appropriate densities, grading intervals and dietary specifications depend on the Channa species, life stage, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "maintenance",
      heading: "Maintenance and routine practice",
      blocks: [
        {
          kind: "list",
          items: [
            "Inspect covers, screens and freeboard regularly as containment equipment.",
            "Maintain grading equipment and handling gear in condition, because damaged equipment causes injury during a procedure already stressful to the fish.",
            "Record grading events, size distributions and injury observations alongside the standard production log.",
            "Verify feed storage conditions; high-protein diets are more susceptible to quality loss in warm humid storage.",
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
            "Treating air-breathing as a reason to under-size the oxygen system.",
            "Sizing the biofilter using a feeding assumption drawn from an omnivorous species.",
            "Grading reactively, after aggression damage has already appeared.",
            "Underestimating jumping behaviour and losing fish through gaps at pipe entries and overflows.",
            "Applying culture parameters from one Channa species to another without verification.",
            "Attempting weaning without a defined nursery protocol and then attributing the losses to stock quality.",
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
            "Seed supply is the standing constraint on murrel production in much of India. Hatchery propagation of several Channa species is established but not uniformly available, and reliance on wild-collected seed introduces variability in size, health status and biosecurity that a recirculating system is otherwise designed to eliminate.",
        },
        {
          kind: "text",
          value:
            "Diet development is the second. Reducing dependence on fresh and trash-fish inputs in favour of formulated diets is central to both the economics and the environmental case for murrel culture, and it is an area where feed formulation and weaning practice are still advancing.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Murrel-specific RAS parameters are not yet standardised",
          value:
            "Published, verified design parameters for murrel in recirculating systems are considerably less established than for widely farmed species. Design values should be developed from measured performance in the specific system rather than adopted from general aquaculture references.",
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
            "Murrel suit intensive recirculating culture, but on their own terms. Guarantee surface access and containment; size the biofilter for a high-protein carnivorous diet; grade often enough that aggression never becomes the limiting factor; and do not let air-breathing tolerance become an excuse for marginal oxygen management. Where parameters are uncertain, establish them by measurement in the system concerned.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Air-breathing gives real tolerance of low dissolved oxygen but relieves none of the other water quality obligations.",
    "Surface access and secure covers are hard design requirements, not options.",
    "A carnivorous, high-protein diet raises nitrogen load per unit feed and therefore biofilter duty.",
    "Territorial aggression makes routine grading a production necessity.",
    "Channa is a genus: parameters differ between species and strains.",
    "Seed supply and weaning onto formulated feed are the practical constraints on the sector.",
  ],
  related: ["fish-biology", "feed-management", "biomass", "fish-health"],
  furtherReading: [
    {
      organisation: "Indian Council of Agricultural Research (ICAR)",
      description:
        "Research and extension material on murrel breeding, seed production and culture under Indian conditions.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Species and aquaculture information resources covering cultured freshwater species.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "State fisheries departments and agricultural universities in India",
      description:
        "Regional extension guidance on murrel culture practice, seed availability and market conditions.",
    },
  ],
};
