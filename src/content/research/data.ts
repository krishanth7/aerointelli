import type {
  ResearchProgram,
  ResearchProject,
  Publication,
  InfrastructureItem,
  ResearchHorizon,
  ResearchUpdate,
} from "./types";

export const researchTaxonomy = [
  { label: "BIOLOGY", desc: "Organism physiology, stress response, and metabolic kinetics" },
  { label: "ENGINEERING", desc: "Hydraulics, filtration geometry, thermodynamics, and structures" },
  { label: "DATA", desc: "Multi-parameter telemetry, time-series logging, and signal extraction" },
  { label: "INTELLIGENCE", desc: "Closed-loop PID control, predictive models, and edge inference" },
  { label: "RESOURCE SYSTEMS", desc: "Water recirculation, mineral conservation, and energy parity" },
];

export const researchMethodologyStages = [
  {
    step: "01",
    title: "Observe",
    subtitle: "Biological & Operational Baselines",
    description:
      "Continuous baseline measurement of biological, environmental, and hydraulic parameters across working production cycles to isolate operational anomalies.",
  },
  {
    step: "02",
    title: "Investigate",
    subtitle: "Principles & Constraints",
    description:
      "Formulate first-principles thermodynamic and physiological models, evaluating mechanical limits, fluid behaviors, and biological sensitivities.",
  },
  {
    step: "03",
    title: "Experiment",
    subtitle: "Controlled Prototypes",
    description:
      "Construct scaled pilot cells, instrumented test benches, and controlled micro-environments to test single-variable hypotheses without risking live commercial acreage.",
  },
  {
    step: "04",
    title: "Validate",
    subtitle: "Empirical Verification",
    description:
      "Cross-examine experimental sensor streams and physical assay results against predefined statistical performance criteria, mass balances, and fail-safes.",
  },
  {
    step: "05",
    title: "Translate",
    subtitle: "Production Engineering",
    description:
      "Incorporate validated models, mechanical designs, and control algorithms directly into Aero Intelli commercial production systems and knowledge documentation.",
  },
];

export const researchPrograms: ResearchProgram[] = [
  {
    id: "program-01",
    number: "01",
    title: "Intelligent Aquaculture Systems",
    shortTitle: "Aquaculture Systems",
    domain: "aquaculture",
    description:
      "Investigating hydrodynamic flow profiles, total ammonia nitrogen (TAN) kinetics, biomass estimation, and oxygen solubility limits in closed recirculating aquaculture systems (RAS).",
    focusTopics: [
      "Hydrodynamic dual-drain hydraulics",
      "Moving Bed Biofilm Reactor (MBBR) kinetics",
      "Dynamic dissolved oxygen injection",
      "Fish swimming rheotaxis and tank velocity",
      "Metabolic waste excretion modeling",
    ],
    scientificApproach:
      "Coupling computational fluid dynamics (CFD) with biological respiration equations to eliminate hydraulic dead zones and maximize self-cleaning velocity without fatiguing stock.",
    status: "Active Research Domain",
    ctaText: "Explore Aquaculture Research",
    ctaHref: "/knowledge/ras",
  },
  {
    id: "program-02",
    number: "02",
    title: "Advanced Controlled Cultivation",
    shortTitle: "Controlled Cultivation",
    domain: "cultivation",
    description:
      "Precision investigation of boundary-layer dynamics, root-zone dissolved oxygen, nutrient solution chemistry, and spectrum-specific photobiology across soilless cultivation systems.",
    focusTopics: [
      "Nutrient Film Technique (NFT) channel laminar flow",
      "Root-zone hypoxia mitigation",
      "Diurnal electrical conductivity (EC) steering",
      "Dynamic LED PPFD and far-red supplementation",
      "Substrate water-retention curves",
    ],
    scientificApproach:
      "Interrogating the rhizosphere interface using micro-sensors to optimize nutrient ion absorption rates while maintaining root oxygen saturation above critical metabolic thresholds.",
    status: "Active Research Domain",
    ctaText: "Explore Cultivation Research",
    ctaHref: "/knowledge/hydroponics",
  },
  {
    id: "program-03",
    number: "03",
    title: "Intelligent Water Systems",
    shortTitle: "Water Engineering",
    domain: "water",
    description:
      "Engineering closed-loop physical, chemical, and biological water treatment trains capable of 98%+ water retention across high-load aquatic and horticultural facilities.",
    focusTopics: [
      "Fine solids separation (<30 micron)",
      "Counter-current gas stripping & CO2 degassing",
      "High-dose UV-C irradiation kinetics",
      "Ozone micro-flocculation & redox control",
      "Selective mineral ion recovery & ballast salt management",
    ],
    scientificApproach:
      "Designing multi-stage physical separation and biological oxidation trains that treat water as a closed recirculating asset rather than a consumable effluent.",
    status: "Active Research Domain",
    ctaText: "Explore Water Research",
    ctaHref: "/technology/system-architecture",
  },
  {
    id: "program-04",
    number: "04",
    title: "AI for Biological Production",
    shortTitle: "Biological AI",
    domain: "ai",
    description:
      "Developing machine learning models, computer vision phenotyping, and multi-sensor fusion algorithms tailored to complex biological feedback loops and predictive maintenance.",
    focusTopics: [
      "Underwater acoustic and optical biomass tracking",
      "Predictive water-quality anomaly detection",
      "Canopy closure and leaf area index (LAI) vision models",
      "Reinforcement learning climate setpoint steering",
      "Sensor drift calibration & synthetic telemetry",
    ],
    scientificApproach:
      "Training specialized neural networks on synchronized multi-modal sensor telemetry to detect biological stress signals days before physical symptoms manifest.",
    status: "Active Research Domain",
    ctaText: "Explore AI Research",
    ctaHref: "/technology/farm-ai",
  },
  {
    id: "program-05",
    number: "05",
    title: "Connected Production Infrastructure",
    shortTitle: "Automation & IoT",
    domain: "automation",
    description:
      "Designing hardened industrial IoT nodes, deterministic PLC control logic, fail-safe actuator networks, and edge telemetry architectures for harsh biological environments.",
    focusTopics: [
      "Deterministic PLC state-machine design",
      "Sub-second sensor telemetry loops",
      "Fail-safe mechanical interlocks & watchdog circuits",
      "Variable frequency drive (VFD) flow modulation",
      "Autonomous alarming & zero-cloud local fallbacks",
    ],
    scientificApproach:
      "Building mission-critical automation systems that prioritize local hardware determinism, galvanic isolation, and zero-downtime reliability over fragile cloud dependencies.",
    status: "Active Research Domain",
    ctaText: "Explore Automation Research",
    ctaHref: "/technology/automation",
  },
  {
    id: "program-06",
    number: "06",
    title: "Circularity & Resource Efficiency",
    shortTitle: "Resource Circularity",
    domain: "sustainability",
    description:
      "Quantifying mass and energy balances, heat-recovery cycles, spent nutrient valorization, and carbon footprint reduction in controlled-environment production.",
    focusTopics: [
      "Thermal energy recovery from wastewater loops",
      "Solid waste stabilization & mineral extraction",
      "Closed-loop rainwater harvesting integration",
      "Photovoltaic-coupled pumping and lighting schedules",
      "Life-cycle carbon and water footprint accounting",
    ],
    scientificApproach:
      "Mapping mass-energy flow streams to close open resource loops, transforming waste streams into stable agronomic inputs and minimizing external energy demand.",
    status: "Active Research Domain",
    ctaText: "Explore Circularity Research",
    ctaHref: "/sustainability",
  },
];

export const featuredProjects: ResearchProject[] = [
  {
    id: "proj-001",
    code: "RD-AQUA-01",
    title: "RAS Moving Bed Biofilter (MBBR) Kinetic Characterisation",
    domain: "aquaculture",
    programTitle: "Intelligent Aquaculture Systems",
    researchQuestion:
      "How do fluctuating volumetric TAN loadings affect the relative colonization of Nitrosomonas vs Nitrospira under varied dissolved oxygen regimes in high-density culture?",
    objective:
      "Quantify steady-state and dynamic ammonia removal rates across specific surface area media (800–1200 m²/m³) to prevent toxic nitrite spikes during peak feeding intervals.",
    stage: "Development",
    technicalApproach:
      "Instrumented bench-scale MBBR reactors with real-time optical DO, temperature, pH, and ion-selective ammonium/nitrate electrodes recording continuous chemical conversion.",
    methodology:
      "Step-wise incremental TAN loading trials conducted at 20 °C, 24 °C, and 28 °C with controlled hydraulic retention times (HRT) between 15 and 45 minutes.",
    technologies: [
      "Toroidal Conductivity Cells",
      "Optical Dissolved Oxygen Probes",
      "Virgin HDPE K1/K3 Biomedia",
      "High-Resolution Spectrophotometry",
    ],
    findings:
      "Preliminary bench data indicates nitrification capacity stabilizes above 4.5 mg/L DO; kinetic limitations manifest when DO falls below 2.8 mg/L regardless of media surface area.",
    limitations:
      "Simulated synthetic TAN solutions; ongoing validation required with commercial finfish fecal loading and organic carbon background competition.",
    updatedAt: "September 2026",
    relatedSlug: "biofilter-kinetics",
  },
  {
    id: "proj-002",
    code: "RD-AQUA-02",
    title: "Hydrodynamic Self-Cleaning Flow Profiling in Circular Culture Tanks",
    domain: "aquaculture",
    programTitle: "Intelligent Aquaculture Systems",
    researchQuestion:
      "What inlet nozzle jet angles and center-drain bottom velocities balance solid waste settling evacuation without exceeding optimal fish swimming endurance speeds?",
    objective:
      "Engineer inlet manifold geometry that establishes stable rotational vortex flow and rapid solids concentration at the Cornell dual drain across variable diameter-to-depth ratios.",
    stage: "Testing",
    technicalApproach:
      "Particle Image Velocimetry (PIV) and electromagnetic velocity meter sweeps across full-scale 4.0 m circular culture tanks with variable flow injection nozzles.",
    methodology:
      "Empirical mapping of radial and tangential velocity profiles across water column depths from surface to tank floor under flows between 200 and 800 L/min.",
    technologies: [
      "Electromagnetic Water Velocity Meters",
      "Dual-Drain Gravity Separators",
      "CFD Ansys Fluent Modeling",
      "Industrial VFD Booster Pumps",
    ],
    findings:
      "Inlet nozzle angles directed at 45° downward along tank perimeters generate bottom shear stresses sufficient to sweep 92% of settleable solids within 6 minutes.",
    limitations:
      "Tested with inert tracer solids; living fish swimming patterns introduce turbulence that alters boundary layer velocities.",
    updatedAt: "August 2026",
    relatedSlug: "tank-hydraulics",
  },
  {
    id: "proj-003",
    code: "RD-CULT-01",
    title: "NFT Gutter Hydraulic Boundary Layers and Dissolved Oxygen Depletion",
    domain: "cultivation",
    programTitle: "Advanced Controlled Cultivation",
    researchQuestion:
      "At what channel length and slope does dissolved oxygen depletion in recirculating NFT gullies suppress root respiration in mature leafy crops during peak diurnal transpiration?",
    objective:
      "Formulate a predictive hydrodynamic model linking channel slope (1:30 vs 1:40), flow rate (1.0–2.5 L/min), and root mat density to downstream oxygen depletion.",
    stage: "Development",
    technicalApproach:
      "Multi-point optical DO sensors positioned at 2.0 m intervals along 12.0 m experimental NFT channels holding mature Lactuca sativa crops under controlled PAR lighting.",
    methodology:
      "Diurnal telemetry collection logging dissolved oxygen consumption, solution temperature rise, and electrical conductivity changes between channel inlet and discharge.",
    technologies: [
      "Multi-Point Luminescence DO Probes",
      "Flat-Bottom Ribbed PVC Channels",
      "Precision Micro-Turbine Flow Meters",
      "High-Frequency Data Acquisition (1 Hz)",
    ],
    findings:
      "Gutter runs exceeding 10.0 m exhibit up to 35% dissolved oxygen drop from inlet to discharge during peak midday lighting if root mass exceeds 400 g fresh weight.",
    limitations:
      "Evaluated in enclosed indoor lighting conditions; external greenhouse thermal gain will accelerate oxygen depletion rates.",
    updatedAt: "September 2026",
    relatedSlug: "nft-hydraulics",
  },
  {
    id: "proj-004",
    code: "RD-WAT-01",
    title: "Micro-Nanobubble Oxygenation Dynamics and Biofilm Eradication",
    domain: "water",
    programTitle: "Intelligent Water Systems",
    researchQuestion:
      "Can shear-cavitation nanobubble generators sustain dissolved oxygen supersaturation (>15 mg/L) in nutrient solutions without destabilizing chelated trace elements?",
    objective:
      "Determine nanobubble lifetime, negative Zeta potential stability, and oxidation-reduction potential (ORP) influence on iron chelates (Fe-EDTA, Fe-DTPA, Fe-EDDHA).",
    stage: "Research",
    technicalApproach:
      "Bench-top cavitation generator coupled with Dynamic Light Scattering (DLS) measurement of bubble size distribution and ICP-OES elemental analysis of chelate integrity.",
    methodology:
      "Oxygen enrichment runs evaluating DO retention half-life over 72 hours in stagnant vs flowing solutions across temperature ranges from 18 °C to 30 °C.",
    technologies: [
      "Dynamic Light Scattering (DLS)",
      "High-Pressure Cavitation Nozzles",
      "High-Precision Galvanic DO & ORP Sensors",
      "Spectrophotometric Iron Assay",
    ],
    limitations:
      "Phase 1 laboratory investigation; long-term plant root phytotoxicity trials have not yet commenced.",
    updatedAt: "July 2026",
    relatedSlug: "nanobubble-dynamics",
  },
  {
    id: "proj-005",
    code: "RD-AI-01",
    title: "Autonomous Anomaly Detection in Multi-Sensor Recirculation Telemetry",
    domain: "ai",
    programTitle: "AI for Biological Production",
    researchQuestion:
      "Can unsupervised autoencoder neural networks identify sensor drift and incipient equipment failures 12+ hours prior to hard threshold alarm breaches?",
    objective:
      "Train edge-deployable time-series models on historical pH, DO, ORP, flow, and temperature telemetry to detect sensor fouling and pump cavitation signatures.",
    stage: "Concept",
    technicalApproach:
      "Synthetic anomaly injection into 180 days of production telemetry logs to evaluate reconstruction error thresholds and false positive rates.",
    methodology:
      "Comparing classical statistical process control (EWMA, CUSUM) against 1D Convolutional Autoencoders and LSTM networks on edge compute nodes.",
    technologies: [
      "PyTorch Edge Runtime",
      "TimescaleDB Time-Series Engine",
      "Industrial Edge Linux Gateway",
      "MQTT Telemetry Broker",
    ],
    limitations:
      "Currently benchmarked against historical recorded logs; real-time hardware loop testing scheduled for Phase 2.",
    updatedAt: "June 2026",
    relatedSlug: "telemetry-anomalies",
  },
  {
    id: "proj-006",
    code: "RD-AUTO-01",
    title: "Deterministic Multi-Channel Chemical Dosing Control with Physical Interlocks",
    domain: "automation",
    programTitle: "Connected Production Infrastructure",
    researchQuestion:
      "What software state-machine architecture and physical hardware interlocks eliminate runaway acid/fertilizer dosing risks during sensor communication faults?",
    objective:
      "Engineer an open-hardware industrial PLC dosing platform with redundant hardware watchdog timers, volumetric stroke limits, and isolated relay interlocks.",
    stage: "Testing",
    technicalApproach:
      "Dual microcontroller architecture where a primary real-time controller executes dosing PID logic and a secondary isolated supervisor monitors volumetric limits.",
    methodology:
      "Fault injection testing simulating probe disconnection, stuck-open solenoid valves, and buffer overrun scenarios during live water dosing cycles.",
    technologies: [
      "IEC 61131-3 Structured Text PLC",
      "Peristaltic Dosing Heads with Hall Encoders",
      "Electrically Isolated Analog Front-Ends",
      "Hardware Watchdog Timers",
    ],
    findings:
      "Dual supervisor interlocks successfully terminated dosing within 800 ms of simulated analog sensor disconnect, preventing solution pH drop below 5.2.",
    limitations:
      "Laboratory test bench verified; field deployment across chemical concentrate lines pending endurance cycle validation.",
    updatedAt: "September 2026",
    relatedSlug: "dosing-interlocks",
  },
];

export const researchInfrastructure: InfrastructureItem[] = [
  {
    id: "infra-01",
    title: "Aquaculture Hydraulics & Filtration Testbed",
    subtitle: "Full-scale hydrodynamic and water quality test facility",
    description:
      "Configured for empirical evaluation of culture tank self-cleaning hydrodynamics, moving-bed biofilm kinetics, and low-head recirculation pumps under high continuous flow.",
    capabilities: [
      "Dual 4.0-meter circular culture tanks with configurable tangential inlet nozzles",
      "Moving Bed Biofilm Reactor (MBBR) with variable air-lift and mechanical diffusers",
      "High-flow low-head axial and centrifugal pumping loops up to 1,200 L/min",
      "Continuous inline monitoring: DO, pH, ORP, Temperature, and Differential Pressure",
    ],
    technicalSpecs: [
      { label: "Water Holding Capacity", value: "24,000 Litres total circulation" },
      { label: "Pumping Architecture", value: "VFD-driven magnetic drive & axial flow" },
      { label: "Filtration Sieve Rating", value: "Continuous 30–60 micron drum filtration" },
      { label: "Oxygenation Infrastructure", value: "PSA Oxygen Generator & Speece Cone" },
    ],
    status: "Active Research Cell",
  },
  {
    id: "infra-02",
    title: "Controlled-Environment Cultivation Cell",
    subtitle: "Precision indoor research grow room with isolated HVAC",
    description:
      "A sealed thermal envelope dedicated to soilless cultivation trials, transpiration modeling, and spectrum-specific horticultural lighting research.",
    capabilities: [
      "Multi-tier experimental NFT and deep-water culture (DWC) benches",
      "Spectrum-tunable LED arrays (380–750 nm) with precision quantum dimming",
      "Decoupled latent and sensible HVAC with precision steam humidification",
      "Automated multi-channel fertilizer concentrate dosing with A/B/Acid manifolds",
    ],
    technicalSpecs: [
      { label: "Cultivation Area", value: "48 m² effective canopy tier footprint" },
      { label: "Maximum PPFD", value: "Up to 600 µmol/m²/s uniform at canopy" },
      { label: "Climate Precision", value: "±0.5 °C Dry Bulb, ±3% Relative Humidity" },
      { label: "CO2 Enrichment", value: "Ambient to 1,500 ppm regulated" },
    ],
    status: "Active Research Cell",
  },
  {
    id: "infra-03",
    title: "Hydraulic & Numerical Modeling Lab",
    subtitle: "Computational fluid dynamics, biological simulation & CAD",
    description:
      "Computational workstation cluster executing numerical simulations of fluid flow, pipe head loss, thermal energy dissipation, and biological metabolic models.",
    capabilities: [
      "3D Computational Fluid Dynamics (CFD) modeling of tank vortex dynamics",
      "Hazen-Williams and Darcy-Weisbach hydraulic distribution network simulation",
      "Dynamic plant transpiration and solar energy balance mathematical modeling",
      "High-precision parametric CAD design for custom manifolds and injection cones",
    ],
    technicalSpecs: [
      { label: "CFD Solvers", value: "Finite volume turbulent multiphase modeling" },
      { label: "Hydraulic Modeling", value: "Closed-loop networked transient solvers" },
      { label: "Sensor Signal Processing", value: "Digital filtering and FFT frequency analysis" },
      { label: "Parametric CAD", value: "SolidWorks & Open-source geometry engines" },
    ],
    status: "Operational",
  },
  {
    id: "infra-04",
    title: "Instrumentation & Edge Electronics Workshop",
    subtitle: "Hardware prototyping, calibration bench & sensor development",
    description:
      "Electronics development facility equipped for precision analog sensor calibration, PCB prototyping, galvanic isolation design, and industrial PLC programming.",
    capabilities: [
      "Precision multi-point chemical buffer calibration (pH, EC, DO standards)",
      "Galvanically isolated 4–20 mA and RS485 Modbus telemetry testing",
      "Microcontroller firmware development with hardware-in-the-loop simulation",
      "High-speed digital oscilloscopes and signal generators for noise diagnosis",
    ],
    technicalSpecs: [
      { label: "Calibration Standards", value: "NIST-traceable conductivity & pH standards" },
      { label: "Signal Integrity", value: "Isolated optical and digital galvanic barriers" },
      { label: "Edge Hardware", value: "ARM Cortex-M and Industrial Linux Gateways" },
      { label: "Communication Protocols", value: "Modbus RTU, MQTT, OPC UA, CANbus" },
    ],
    status: "Operational",
  },
];

export const researchPublications: Publication[] = [
  {
    id: "pub-01",
    title: "Hydraulic Balancing and Shear-Stress Minimisation in Circular Aquaculture Tanks",
    year: "2026",
    type: "Engineering Report",
    domain: "Aquaculture Engineering",
    abstract:
      "An engineering investigation into the relationship between water inlet orientation, rotational velocity, and bottom shear stress in circular culture tanks. Documents the conditions required to ensure rapid fecal solids concentration at the center drain while preventing excessive swimming fatigue in juvenile teleost fish.",
    authors: ["Aero Intelli Engineering Team"],
    readTime: "12 min read",
    href: "/knowledge/ras/hydraulics",
  },
  {
    id: "pub-02",
    title: "Nitrification Kinetics and Ammonia Removal Profiles in Submerged Biological Filtration",
    year: "2026",
    type: "Technical Note",
    domain: "Water Engineering",
    abstract:
      "Technical analysis of Total Ammonia Nitrogen (TAN) conversion rates in moving-bed biofilters. Evaluates empirical oxygen consumption stoichiometry, bicarbonate buffer consumption, and the critical dissolved oxygen thresholds that govern nitrite accumulation in closed recirculation loops.",
    authors: ["Aero Intelli Engineering Team"],
    readTime: "15 min read",
    href: "/knowledge/ras/biofiltration",
  },
  {
    id: "pub-03",
    title: "Hydrodynamic Velocity and Oxygen Depletion Dynamics in NFT Lettuce Production",
    year: "2026",
    type: "Technical Note",
    domain: "Controlled Cultivation",
    abstract:
      "A study of thin-film water movement in commercial Nutrient Film Technique gullies. Examines the hydraulic resistance introduced by expanding root mats and quantifies downstream dissolved oxygen depletion curves across varying ambient greenhouse thermal loads.",
    authors: ["Aero Intelli Engineering Team"],
    readTime: "14 min read",
    href: "/knowledge/hydroponics/nft",
  },
  {
    id: "pub-04",
    title: "Vapour Pressure Deficit (VPD) Regulation and Transpirational Mass Flow in Protected Cultivation",
    year: "2026",
    type: "Engineering Report",
    domain: "Controlled Cultivation / Climate",
    abstract:
      "Psychrometric analysis of the leaf boundary layer and vapour pressure deficit. Establishes mathematical relationships between ambient relative humidity, leaf temperature, and transpirational calcium transport, providing practical control parameters to eliminate inner tipburn.",
    authors: ["Aero Intelli Engineering Team"],
    readTime: "11 min read",
    href: "/knowledge/hydroponics/climate-control",
  },
  {
    id: "pub-05",
    title: "Sensor Drift, Calibration Decoupling, and Fail-Safe Interlocks in Autonomous Fertigation",
    year: "2026",
    type: "Whitepaper",
    domain: "Automation & AI",
    abstract:
      "An architectural blueprint for industrial chemical dosing automation. Examines electrochemical probe degradation over 90-day intervals and details the redundant software and hardware interlocks required to prevent catastrophic over-acidification.",
    authors: ["Aero Intelli Engineering Team"],
    readTime: "16 min read",
    href: "/knowledge/hydroponics/automation-ai",
  },
  {
    id: "pub-06",
    title: "Closed-Loop Resource Balances: Water, Mineral Fertilizer, and Energy Conservation in CEA",
    year: "2026",
    type: "Research Brief",
    domain: "Sustainability & Circularity",
    abstract:
      "Quantitative mass balance analysis contrasting open run-to-waste agricultural models against closed-loop recirculating infrastructure. Documents an 87% reduction in water consumption and 42% fertilizer recovery alongside the physical barriers imposed by sodium buildup.",
    authors: ["Aero Intelli Engineering Team"],
    readTime: "10 min read",
    href: "/knowledge/hydroponics/sustainable",
  },
];

export const engineeringCalculators = [
  {
    title: "RAS Biofilter Sizing & TAN Generation",
    description: "Calculates total ammonia nitrogen excretion from feed protein and sizes required MBBR media surface area.",
    domain: "Aquaculture",
    status: "Functional in Knowledge Center",
    href: "/knowledge/ras/biofiltration",
  },
  {
    title: "Culture Tank Volume & Hydraulic Retention Time",
    description: "Determines total tank volume, flow requirements, and exchange rate per hour across culture vessels.",
    domain: "Aquaculture",
    status: "Functional in Knowledge Center",
    href: "/knowledge/ras/hydraulics",
  },
  {
    title: "Dissolved Oxygen Saturation & Demand Model",
    description: "Computes temperature and salinity-adjusted DO saturation and metabolic consumption curves.",
    domain: "Aquaculture",
    status: "Functional in Knowledge Center",
    href: "/knowledge/ras/oxygen",
  },
  {
    title: "NFT Gutter Flow & Channel Slope Calculator",
    description: "Evaluates laminar flow velocity, channel gradient (1:30–1:40), and downstream fluid travel time.",
    domain: "Hydroponics",
    status: "Functional in Knowledge Center",
    href: "/knowledge/hydroponics/nft",
  },
  {
    title: "Vapour Pressure Deficit (VPD) Psychrometric Model",
    description: "Computes saturated and actual vapour pressure from dry-bulb air temperature, relative humidity, and leaf temperature.",
    domain: "Climate",
    status: "Functional in Knowledge Center",
    href: "/knowledge/hydroponics/climate-control",
  },
  {
    title: "Pipe Velocity & Friction Head Loss (Hazen-Williams)",
    description: "Calculates dynamic head loss across delivery headers, determining flow velocity within 1.0–1.8 m/s guidelines.",
    domain: "Engineering",
    status: "Functional in Knowledge Center",
    href: "/knowledge/hydroponics/engineering",
  },
];

export const collaborationPillars = [
  {
    number: "01",
    title: "Academic & University Research",
    description:
      "Joint investigational trials with universities, ICAR institutes, and fisheries faculties to validate biological kinetics and publish open scientific methodology.",
    scope: "Joint grant proposals, student research placements, split-tank trials, and biological peer validation.",
  },
  {
    number: "02",
    title: "Technology & Software Development",
    description:
      "Co-developing specialized IoT sensors, ruggedized submersible probes, computer vision pipelines, and localized edge AI models.",
    scope: "Hardware driver integration, multi-sensor calibration, custom edge AI architectures, and open protocols.",
  },
  {
    number: "03",
    title: "Engineering & Equipment Integration",
    description:
      "Partnering with pump manufacturers, UV/ozone system builders, LED luminaire developers, and membrane manufacturers to evaluate hardware under biological loads.",
    scope: "Component stress-testing, custom manifold fabrication, endurance cycling, and efficiency benchmarking.",
  },
  {
    number: "04",
    title: "Commercial Pilot & Applied Trials",
    description:
      "Deploying instrumented pilot cells directly within operational commercial farms to test engineering models under real-world economic and climatic pressures.",
    scope: "Field validation, commercial off-take trials, farm energy audits, and operational workflow refinement.",
  },
];

export const researchDisciplines = [
  { title: "Aquaculture Engineering", desc: "RAS hydraulics, dual-drain systems, biosecurity & water quality" },
  { title: "Controlled Agriculture", desc: "Soilless media physics, root-zone aeration & canopy architectures" },
  { title: "Water Chemistry", desc: "Nitrification kinetics, alkalinity buffering, mineral chelation & disinfection" },
  { title: "Fluid & Thermal Physics", desc: "CFD modeling, friction loss, heat exchange & psychrometrics" },
  { title: "Hardware Automation", desc: "Industrial PLCs, isolated analog front-ends & fail-safe interlocks" },
  { title: "Machine Intelligence", desc: "Time-series anomaly detection, sensor fusion & predictive modeling" },
];

export const researchPrinciples = [
  {
    number: "01",
    title: "Scientific Integrity",
    summary:
      "Every performance claim must be grounded in physical mass balances, thermodynamic laws, and empirical measurement. We never fabricate laboratory achievements or claim commercial validation without documented testing.",
  },
  {
    number: "02",
    title: "Engineering Discipline",
    summary:
      "A biological model is only as good as the machine that delivers it. We prioritize reliability, operational simplicity, material durability, and clear failure modes over fragile technological complexity.",
  },
  {
    number: "03",
    title: "Responsible Innovation",
    summary:
      "Living organisms and precious freshwater supplies tolerate no reckless shortcuts. We rigorously evaluate biological welfare, chemical hazards, and environmental risks prior to introducing new techniques.",
  },
  {
    number: "04",
    title: "Measurable Performance",
    summary:
      "If an improvement cannot be quantified in kilograms of yield, kilowatt-hours saved, or litres of water retained, it does not leave the research desk. We define objective verification metrics for every project.",
  },
  {
    number: "05",
    title: "Continuous Translation",
    summary:
      "Research exists to build better production systems, not to accumulate shelf-bound theory. Validated discoveries are engineered immediately into our commercial designs and shared with the agricultural community.",
  },
];

export const researchRoadmapHorizons: ResearchHorizon[] = [
  {
    number: "Horizon 1",
    title: "Current Research & Characterisation",
    timeframe: "Active Core Focus",
    summary:
      "Empirical characterisation of baseline system physics: biofilter kinetics, tank vortex hydrodynamics, NFT root hypoxia, and multi-channel chemical dosing safety.",
    focusAreas: [
      "Physical dual-drain self-cleaning velocity profiles",
      "MBBR volumetric TAN conversion rates under variable organic loading",
      "Sensor drift decay rates in raw water and nutrient solutions",
      "Low-head high-flow recirculation pump energy efficiency audits",
    ],
  },
  {
    number: "Horizon 2",
    title: "Emerging Development & Intelligent Control",
    timeframe: "Active Prototyping & Field Trials",
    summary:
      "Integrating continuous telemetry streams with predictive edge models, autonomous VFD modulation, and closed-loop environmental adaptation.",
    focusAreas: [
      "Edge-deployed anomaly detection on multi-parameter water sensor streams",
      "Continuous optical dissolved oxygen modulation with variable speed injection",
      "Micro-nanobubble persistent supersaturation in warm-water culture",
      "Integrated closed-loop drain-water recirculation with UV-C disinfection",
    ],
  },
  {
    number: "Horizon 3",
    title: "Long-Term Exploration & Autonomous Systems",
    timeframe: "Strategic Research Direction",
    summary:
      "Developing digital twin plant models, non-invasive plant sap telemetry, synthetic root microbiomes, and semi-autonomous biological production networks.",
    focusAreas: [
      "Real-time physiological sap-flow and chlorophyll fluorescence telemetry",
      "Engineered rhizosphere microbial consortia for biological pathogen suppression",
      "Multi-system nutrient recovery transforming aquaculture effluent into hydroponic feed",
      "Autonomous life-support circular models for extreme and resource-constrained environments",
    ],
  },
];

export const researchDeskUpdates: ResearchUpdate[] = [
  {
    date: "September 2026",
    category: "Technical Release",
    title: "Hydroponics Knowledge Center Architecture Published",
    summary:
      "Completed engineering documentation covering thirty core disciplines in soilless cultivation, from root-zone oxygenation to commercial farm master planning.",
    readTime: "4 min read",
    href: "/knowledge/hydroponics",
  },
  {
    date: "August 2026",
    category: "Engineering Analysis",
    title: "Dual-Drain Hydraulic Shear Stress Optimization in Circular Tanks",
    summary:
      "Empirical findings on tangential nozzle angles and bottom shear stress required to sweep settleable aquaculture solids without stock fatigue.",
    readTime: "8 min read",
    href: "/knowledge/ras/hydraulics",
  },
  {
    date: "July 2026",
    category: "Methodology",
    title: "Five-Stage Scientific Development Framework Established",
    summary:
      "Aero Intelli formalizes its research translation protocol from initial biological observation through controlled prototyping to field deployment.",
    readTime: "5 min read",
    href: "/research/r-and-d",
  },
];
