import type { KnowledgeArea } from "../types";

export const engineering: KnowledgeArea = {
  number: "23",
  slug: "engineering",
  title: "Hydroponic Hydraulic and Facility Engineering",
  navSummary: "Pipe sizing, pump performance curves, frictional head loss, manifold pressure balancing and drain slopes.",
  summary:
    "The physical foundation of any commercial hydroponic facility is its hydraulic distribution network and power infrastructure. Undersized delivery mains cause steep friction head losses and uneven emitter pressures across irrigation zones. Drainage lines lacking adequate slope pool stagnant solution, encouraging anaerobiosis. Robust hydraulic engineering incorporates balanced manifolds, cleanable filter banks and fail-safe dual pumping systems.",
  difficulty: "advanced",
  topics: ["engineering", "operations", "systems"],
  tags: [
    "hydraulic engineering",
    "pump curves",
    "head loss",
    "manifold balancing",
    "pipe sizing",
    "drainage slope",
    "plumbing",
  ],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-08-07",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Water does not flow evenly just because pipes are connected. Friction inside pipes slows water down, so plants at the far end of a greenhouse often receive less water and lower pressure than plants near the pump. Proper hydraulic engineering sizes pipes so flow velocity remains within 1.0–1.8 m/s, keeping emitter output uniform within five percent across the entire facility.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "A hydroponic delivery system is a closed or open hydraulic network designed to supply precise flow and pressure to thousands of discrete discharge points (drippers, NFT spigots or spray nozzles). What appears as an agronomic inconsistency in crop growth is frequently the result of hydraulic pressure variation across the piping network.",
        },
        {
          kind: "text",
          value:
            "Design engineers must calculate flow velocity, static head, dynamic friction loss, fitting losses and emitter discharge characteristics to maintain flow variation below five percent across an entire irrigation sector.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Friction head loss and flow velocity limits",
      blocks: [
        {
          kind: "text",
          value:
            "Fluid velocity inside pressurized irrigation headers should be maintained strictly between 1.0 and 1.8 metres per second. Velocities below 0.8 m/s allow suspended solids and fertilizer salts to settle inside pipes. Velocities above 2.0 m/s cause catastrophic dynamic pressure drops and expose fittings to dangerous water hammer shock waves during solenoid valve closure.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The Hazen-Williams friction principle",
          value:
            "Head loss from friction increases with the 1.85th power of flow rate and inversely with the 4.87th power of inner pipe diameter. Halving the internal diameter of a delivery pipe increases friction loss by roughly thirty times for the same volumetric flow rate.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Hazen-Williams head loss equation" },
        {
          kind: "formula",
          name: "Hazen-Williams Friction Head Loss",
          expression: "h_f = 10.67 * L * Q^1.852 / (C^1.852 * D^4.87)",
          terms: [
            { symbol: "h_f", meaning: "Friction head loss", unit: "m of water" },
            { symbol: "L", meaning: "Pipe length", unit: "m" },
            { symbol: "Q", meaning: "Volumetric flow rate", unit: "m³/s" },
            { symbol: "C", meaning: "Hazen-Williams roughness coefficient (140–150 for PVC/PE)", unit: "dimensionless" },
            { symbol: "D", meaning: "Internal pipe diameter", unit: "m" },
          ],
          limitations: "Applicable to turbulent water flow through smooth plastic pipework under typical ambient irrigation temperatures.",
        },
        { kind: "subheading", value: "Manifold pressure balancing" },
        {
          kind: "text",
          value:
            "To achieve uniform distribution across large bays, commercial designs deploy looped distribution headers or tapered manifolds paired with Pressure Compensating (PC) emitters. PC emitters incorporate silicone diaphragms that regulate output (e.g. exactly 2.0 L/h) across operating pressure variations ranging from 1.0 to 3.5 bar.",
        },
      ],
    },
    {
      id: "practice",
      heading: "Plumbing guidelines and installation standards",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            "Install slow-closing motorized ball valves or hydraulic diaphragm valves rather than instantaneous fast-acting solenoids to suppress water hammer.",
            "Slope main drainage return channels at a minimum gradient of 1:100 (1%) to ensure rapid gravity flow back to the catchment sump without sediment accumulation.",
            "Use food-grade, opaque, UV-stabilized materials (Schedule 40/80 PVC, HDPE PN10/16); never use clear tubing, which allows photosynthetic algae to plug drippers.",
            "Include mechanical pressure relief valves and vacuum relief air vents at the highest points of every manifold run.",
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
            "Modern facilities deploy variable frequency drive (VFD) pressure booster pumps wired to downstream pressure transducers. The VFD continuously modulates impeller rotational speed (RPM) to maintain constant discharge pressure regardless of whether one small sub-zone or four full production bays are irrigating simultaneously, saving 25–40% in pump electrical consumption.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Keep pipe flow velocity between 1.0 and 1.8 m/s to prevent both sedimentation and severe friction losses.",
    "Pressure Compensating (PC) drippers neutralize pressure drops across long crop rows.",
    "Drainage gravity lines require a minimum 1% slope to prevent solution pooling and anaerobic bacteria growth.",
    "Slow-closing valves protect hydraulic pipework from destructive water hammer transients.",
    "VFD-controlled pumps match motor speed to real-time zone flow demand, saving power and stabilizing pressure.",
  ],
  related: ["systems", "water-management", "fertigation", "operations", "automation-ai"],
  furtherReading: [
    {
      organisation: "American Society of Agricultural and Biological Engineers (ASABE)",
      description: "Engineering standards for micro-irrigation system design, pipe sizing and uniformity evaluation.",
    },
    {
      organisation: "Irrigation Association (IA)",
      description: "Technical manuals on agricultural hydraulics, pump selection and drip irrigation engineering.",
    },
  ],
};
