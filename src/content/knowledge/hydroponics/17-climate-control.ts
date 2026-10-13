import type { KnowledgeArea } from "../types";

export const climateControl: KnowledgeArea = {
  number: "17",
  slug: "climate-control",
  title: "Greenhouse and Indoor Climate Control",
  navSummary: "Vapour pressure deficit (VPD), psychrometrics, ventilation, evaporative cooling and dehumidification.",
  summary:
    "Climate control regulates the physical boundary conditions that dictate plant transpiration, stomatal conductance and latent heat exchange. Temperature and relative humidity interact according to psychrometric principles to establish vapour pressure deficit (VPD). When VPD is suppressed, transpiration ceases and calcium deficiencies develop; when excessive, stomata close to prevent desiccation, stopping photosynthesis.",
  difficulty: "intermediate",
  topics: ["climate", "environment", "engineering"],
  tags: [
    "climate control",
    "vapour pressure deficit",
    "vpd",
    "relative humidity",
    "evaporative cooling",
    "dehumidification",
    "psychrometrics",
  ],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-22",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Plants do not care about relative humidity in isolation; they respond to Vapour Pressure Deficit (VPD), which is the drying power of the air. If the air is too dry (high VPD > 1.5 kPa), plants shut their leaf pores to conserve water and stop growing. If the air is too wet (low VPD < 0.4 kPa), plants cannot transpire, leading to calcium deficiency and fungal outbreaks.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Controlled Environment Agriculture relies on manipulating the aerial microclimate surrounding plant canopies. While growers historically focused on dry-bulb temperature and relative humidity independently, modern environmental physics unites them via psychrometrics into Vapour Pressure Deficit (VPD).",
        },
        {
          kind: "text",
          value:
            "VPD represents the difference between the saturation vapour pressure inside the humid substomatal cavity of the leaf (assumed to be 100% RH at leaf temperature) and the actual vapour pressure of the greenhouse air. It is the direct thermodynamic driving force pulling water and dissolved calcium from the roots through the xylem to the shoot tips.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why VPD governs transpiration and disease",
      blocks: [
        {
          kind: "text",
          value:
            "Transpiration serves two indispensable physiological roles: evaporative cooling of foliage under solar radiation, and mass-flow delivery of non-mobile mineral nutrients—predominantly calcium and boron. Under low VPD conditions (<0.4 kPa), the air cannot accept water vapour; transpiration stalls, root water uptake drops, and calcium cannot reach rapid-growing leaf margins.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The microclimate boundary layer",
          value:
            "Air immediately adjacent to a leaf surface forms an unstirred humid boundary layer. Without adequate horizontal air circulation (0.3–0.5 m/s), leaf boundary layer resistance traps transpired moisture, dropping local VPD far below ambient room readings and facilitating Botrytis fungal germination.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Optimal VPD ranges by growth stage" },
        {
          kind: "table",
          caption: "Target Vapour Pressure Deficit across crop development stages",
          columns: ["Growth Stage", "Target VPD (kPa)", "Target Temperature (°C)", "Target RH (%)"],
          rows: [
            ["Propagation / Rooting", "0.4 – 0.8", "22 – 24", "75 – 85"],
            ["Vegetative Canopy Growth", "0.8 – 1.1", "20 – 24", "65 – 75"],
            ["Generative / Fruiting", "1.0 – 1.4", "19 – 23", "60 – 70"],
            ["Critical Stress Thresholds", "< 0.3 (Stagnant) or > 1.8 (Extreme)", "Varies", "Risk of tipburn / stomatal closure"],
          ],
          basis: "Standard horticultural engineering guidelines for controlled environment facilities.",
        },
        { kind: "subheading", value: "Sensible and latent heat exchange" },
        {
          kind: "text",
          value:
            "In closed CEA systems, a growing crop acts as an evaporative humidifier. Over 90% of the water delivered by irrigation is converted into latent heat through transpiration. Environmental conditioning systems must remove this latent load through active mechanical dehumidification or controlled outdoor air exchange.",
        },
      ],
    },
    {
      id: "practice",
      heading: "Engineering and HVAC practice",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            "Install aspirated sensor psychrometer boxes (with shielded fans) positioned at crop canopy height, not against perimeter walls.",
            "Utilize infrared leaf temperature sensors (IRT) to calculate actual leaf-to-air VPD rather than assuming leaf and air temperatures are identical.",
            "Deploy Horizontal Air Flow (HAF) fans arranged in a racetrack pattern to eliminate dead air pockets and break leaf boundary layers.",
            "Coordinate evaporative cooling pads and exhaust fans to ensure staging steps do not cause drastic temperature and humidity oscillations.",
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
            "Advanced greenhouse climate computers utilize enthalpy-based control algorithms. Enthalpy accounts for both sensible (temperature) and latent (moisture content) energy of the air. Instead of venting strictly based on dry-bulb temperature, the system compares indoor and outdoor air enthalpy to determine whether venting or heating/dehumidifying consumes fewer kilowatt-hours.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Vapour Pressure Deficit (VPD) is the true metric governing plant transpiration and stomatal opening.",
    "Target vegetative VPD is 0.8–1.1 kPa; target generative VPD is 1.0–1.4 kPa.",
    "Low VPD (<0.4 kPa) induces calcium deficiency (tipburn) and promotes fungal sporulation.",
    "Horizontal Air Flow (HAF) fans are critical to dismantle humid boundary layers around leaves.",
    "Over 90% of irrigation water becomes latent cooling load that must be dehumidified or vented.",
  ],
  related: ["greenhouse", "indoor-farming", "lighting", "energy", "plant-health"],
  furtherReading: [
    {
      organisation: "American Society of Agricultural and Biological Engineers (ASABE)",
      description: "Standards on greenhouse environmental control, heating, cooling and ventilation sizing.",
    },
    {
      organisation: "Wageningen University and Research",
      description: "Next Generation Growing (NGG) manuals on humidity management and energy-efficient climate control.",
    },
  ],
};
