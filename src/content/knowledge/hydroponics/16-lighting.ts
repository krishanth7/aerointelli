import type { KnowledgeArea } from "../types";

export const lighting: KnowledgeArea = {
  number: "16",
  slug: "lighting",
  title: "Horticultural Lighting and Photobiology",
  navSummary: "PAR spectrum, PPFD, Daily Light Integral (DLI), luminaire efficiency, thermal dissipation and supplemental photoperiod.",
  summary:
    "Horticultural lighting delivers photosynthetically active radiation (PAR, 400–700 nm) and extended biologically active wavelengths (far-red, 700–750 nm) to fuel plant photosynthesis. Whether providing sole-source lighting in vertical farms or supplemental lighting in commercial greenhouses, matching photosynthetic photon flux density (PPFD), daily light integral (DLI), spectral composition and electrical luminaire efficacy directly governs dry matter production, plant architecture and facility power consumption.",
  difficulty: "intermediate",
  topics: ["lighting", "environment", "engineering", "sustainability"],
  tags: [
    "horticultural lighting",
    "par spectrum",
    "ppfd",
    "daily light integral",
    "led luminaires",
    "luminaire efficacy",
    "photoperiod",
  ],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-20",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Light is the fuel for plant growth. Lumens and lux are calibrated for human eyes, not plants. Horticultural design uses micromoles of photons per second (PPFD). Accumulating these photons over the day gives the Daily Light Integral (DLI). If DLI is insufficient, crops grow slowly and produce loose heads; if excessive, leaves suffer photoinhibition and tipburn.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Plants perceive light not as illuminance (lux) but as discrete quantum photon packets capable of exciting chlorophyll pigments in Photosystems I and II. The standard photosynthetically active radiation (PAR) band spans 400 to 700 nm, though contemporary photobiology extends this to ePAR (400–750 nm) due to the synergistic Emerson enhancement effect of far-red photons.",
        },
        {
          kind: "text",
          value:
            "Modern horticultural lighting has shifted decisively from high-pressure sodium (HPS) fixtures to solid-state light-emitting diodes (LEDs). High-performance LEDs achieve photosynthetic photon efficacy (PPE) exceeding 3.0 to 3.5 µmol/Joule, reducing heat load in the growing space by over 40% per unit photon delivered compared to legacy discharge lamps.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why Daily Light Integral (DLI) governs production schedules",
      blocks: [
        {
          kind: "text",
          value:
            "Daily Light Integral (DLI), expressed in moles of photons per square metre per day (mol/m²/d), determines the maximum photosynthetic carbon fixation achievable in a 24-hour cycle. For most commercial crops, fresh weight accumulation scales linearly with DLI up to the species saturation point.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The 1% rule of thumb",
          value:
            "In commercial greenhouse production under light-limited conditions, a 1% increase in cumulative PAR photon delivery yields approximately a 0.8% to 1.0% increase in harvestable yield for leafy greens and fruiting vegetables.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "DLI calculation formula" },
        {
          kind: "formula",
          name: "Daily Light Integral (DLI)",
          expression: "DLI = PPFD * Photoperiod * 3600 / 1,000,000",
          terms: [
            { symbol: "DLI", meaning: "Daily Light Integral", unit: "mol/m²/d" },
            { symbol: "PPFD", meaning: "Photosynthetic Photon Flux Density", unit: "µmol/m²/s" },
            { symbol: "Photoperiod", meaning: "Duration of illumination per 24-hour day", unit: "hours" },
          ],
          limitations: "Assumes constant instantaneous PPFD over the designated photoperiod.",
        },
        { kind: "subheading", value: "Crop light requirements" },
        {
          kind: "table",
          caption: "Recommended DLI and PPFD ranges for hydroponic crops",
          columns: ["Crop Category", "Target PPFD (µmol/m²/s)", "Target DLI (mol/m²/d)", "Photoperiod (hours)"],
          rows: [
            ["Microgreens & Seedlings", "120 – 180", "8 – 12", "16 – 18"],
            ["Leafy Greens (Lettuce, Bok Choy)", "200 – 250", "14 – 17", "16 – 20"],
            ["Culinary Herbs (Basil, Mint)", "220 – 300", "15 – 18", "16 – 18"],
            ["Fruiting Vine Crops (Tomato, Cucumber)", "400 – 600+", "25 – 35+", "14 – 18"],
          ],
          basis: "Optimal commercial growth targets under adequate CO2 supplementation (800–1000 ppm).",
        },
      ],
    },
    {
      id: "practice",
      heading: "Engineering and layout specifications",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            "Conduct spatial light mapping using calibrated quantum quantum meters to achieve a light uniformity coefficient > 0.85 across the bench canopy.",
            "Account for heat rejection: roughly 50–55% of electrical energy fed to LEDs is converted into convective and conductive sensible heat requiring HVAC or greenhouse venting.",
            "Incorporate a 10–15% far-red (730 nm) component to accelerate canopy expansion and cell enlargement in vegetative crops.",
            "Use broad-spectrum 'white' LEDs (high CRI) in working areas so human operators can accurately detect pests and nutritional deficiencies.",
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
            "Dynamic lighting strategies synchronize artificial lighting with real-time electricity tariff structures and ambient solar levels. DLI-integrating software dims greenhouse LEDs on sunny midday intervals and increases output during overcast hours or off-peak tariff periods, hitting the exact target DLI at the lowest possible kilowatt-hour cost.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Horticultural lighting must be specified in PPFD (µmol/m²/s) and DLI (mol/m²/d), never in lux or lumens.",
    "Daily Light Integral determines photosynthetic carbon fixation and predictable harvest cycles.",
    "High-efficiency LED luminaires achieve efficacy exceeding 3.0 µmol/J, significantly lowering operating heat loads.",
    "Leafy greens saturate around 14–17 mol/m²/d; exceeding this without CO2 and airflow triggers inner tipburn.",
    "Dynamic lighting controllers reduce power expenses by shifting photon delivery to off-peak tariff windows.",
  ],
  related: ["climate-control", "indoor-farming", "energy", "plant-biology"],
  furtherReading: [
    {
      organisation: "Illuminating Engineering Society (IES)",
      description: "Standards and test methods for horticultural lighting systems and quantum flux measurements.",
    },
    {
      organisation: "Wageningen University and Research",
      description: "Photobiology research papers on light spectrum, far-red effects and greenhouse supplemental lighting.",
    },
  ],
};
