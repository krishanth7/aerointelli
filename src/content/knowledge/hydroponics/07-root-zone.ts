import type { KnowledgeArea } from "../types";

export const rootZone: KnowledgeArea = {
  number: "07",
  slug: "root-zone",
  title: "Root-Zone Management and Aeration",
  navSummary: "Dissolved oxygen, root temperature, hydraulic tension, biofilm formation and rhizosphere dynamics.",
  summary:
    "The root zone is where dissolved mineral ions and water are exchanged for respiratory carbon dioxide. In hydroponics, root-zone management entails sustaining adequate dissolved oxygen, moderating temperature to prevent root death, facilitating gas diffusion and controlling competitive biofilms. When root respiration is starved of oxygen, active nutrient uptake stalls and opportunistic pathogens proliferate.",
  difficulty: "intermediate",
  topics: ["biology", "water", "systems", "health"],
  tags: [
    "root zone",
    "dissolved oxygen",
    "root temperature",
    "hypoxia",
    "pythium",
    "aeration",
    "rhizosphere",
  ],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-28",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Roots must breathe to absorb water and fertilizer. In warm solutions, dissolved oxygen levels plunge just as plant oxygen demand doubles. Keep root solution well-aerated and within 18–22 °C. Stagnant, warm or over-saturated root zones cause rapid root die-back and invite Pythium infection.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Plant roots are obligate aerobic organs. They require continuous oxygen to fuel ATP synthesis via cellular respiration, powering the proton-ATPase pumps that transport potassium, nitrate, phosphate and micronutrients against electrochemical gradients into root cells.",
        },
        {
          kind: "text",
          value:
            "In soil, air channels continuously replenish oxygen through atmospheric diffusion. In hydroponics, oxygen must either diffuse through thin water films (NFT), be mechanically dissolved and circulated (DWC), or be pulled into porous media during cyclical dry-back cycles (drip/ebb-and-flow).",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why hypoxia triggers cascade failures",
      blocks: [
        {
          kind: "text",
          value:
            "When dissolved oxygen (DO) falls below 3–4 mg/L (ppm), root cells experience hypoxia. Active ion transport ceases within hours. Calcium transport, which relies on active root pressure and mass flow, drops immediately, leading to blossom-end rot in fruiting vegetables and tipburn in lettuce.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The temperature-oxygen paradox",
          value:
            "As water temperature rises from 20 °C to 30 °C, the maximum solubility of dissolved oxygen in water drops by roughly 20%, while the respiration rate (Q10 rule) of roots and microbial life approximately doubles. Warm water simultaneously accelerates oxygen demand while restricting supply.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Dissolved oxygen targets and saturation" },
        {
          kind: "table",
          caption: "Dissolved oxygen status in hydroponic root environments",
          columns: ["Dissolved Oxygen (mg/L)", "Physiological State", "Impact on Crop Health"],
          rows: [
            ["> 8.0", "Optimal / Saturated", "Vigorous root branching, rapid ion absorption, high pathogen resistance"],
            ["5.0 – 7.5", "Adequate", "Normal vegetative growth; minimal buffer against temperature spikes"],
            ["3.0 – 4.9", "Marginal / Stressed", "Reduced nutrient uptake, adventitious root formation, leaf wilting"],
            ["< 3.0", "Hypoxic / Critical", "Root tip necrosis, Pythium zoospore colonization, plant collapse"],
          ],
          basis: "Tested across commercial CEA crops under moderate ambient transpiration conditions.",
        },
        { kind: "subheading", value: "Root temperature dynamics" },
        {
          kind: "text",
          value:
            "The ideal root zone temperature for most temperate crops is 18–21 °C (sub-tropical species like cucumbers can tolerate 22–24 °C). Exceeding 25 °C drastically suppresses root growth, increases respiration losses of carbohydrates produced by photosynthesis, and accelerates pathogen proliferation.",
        },
      ],
    },
    {
      id: "practice",
      heading: "Engineering and management protocols",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            "Maintain continuous DO measurement using optical luminescence or galvanic DO probes in primary reservoirs and return gullies.",
            "Utilize regenerative blowers with fine-bubble micro-diffusers or Venturi injectors rather than simple aquarium stones.",
            "Insulate exposed delivery pipework, reservoirs and gullies from direct sunlight to prevent radiant thermal gain.",
            "Implement nutrient solution chillers where ambient greenhouse temperatures drive solution above 24 °C.",
            "Establish drainage slopes that guarantee complete drainage without stagnant puddles or dead zones in gutters.",
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
            "Modern research focuses on ultra-fine nanobubble technology (bubbles <200 nm diameter). Nanobubbles maintain neutral buoyancy in solution without rising to the surface, remaining suspended for days and providing sustained oxygen supersaturation (15–25 mg/L DO). High DO levels degrade anaerobic biofilms in delivery lines and alter rhizosphere oxidation-reduction potential (ORP), suppressing motile Pythium zoospores.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Active mineral absorption requires continuous root respiration fueled by dissolved oxygen.",
    "Warm water holds less dissolved oxygen while simultaneously driving up root metabolic demand.",
    "Dissolved oxygen should be maintained above 6–8 mg/L to prevent hypoxia and root rot.",
    "Root zone temperatures above 24 °C compromise plant immunity and drastically raise Pythium risk.",
    "Regular monitoring of drainage DO and temperature provides early warning of irrigation dead zones.",
  ],
  related: ["fundamentals", "plant-biology", "substrates", "water-management", "plant-health"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Technical manuals on hydroponic root zone management and dissolved oxygen control.",
    },
    {
      organisation: "Wageningen University and Research",
      description: "Research papers on root respiration, hypoxia and temperature control in closed soilless systems.",
    },
  ],
};
