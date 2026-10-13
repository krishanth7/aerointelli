import type { KnowledgeArea } from "../types";

export const automationAi: KnowledgeArea = {
  number: "24",
  slug: "automation-ai",
  title: "Sensors, Automation and Artificial Intelligence in CEA",
  navSummary: "Industrial PLCs, IoT telemetry, sensor calibration drift, PID control loops and predictive computer vision.",
  summary:
    "Controlled Environment Agriculture relies on real-time sensing and closed-loop feedback control to maintain microclimate and root-zone stability. Modern automation architectures pair industrial Programmable Logic Controllers (PLCs) with edge IoT gateways and computer vision. Applying machine learning over multi-sensor time-series streams enables predictive anomaly detection, dynamic setpoint steering and early pathogen identification.",
  difficulty: "advanced",
  topics: ["automation", "engineering", "research"],
  tags: [
    "automation",
    "plc",
    "iot sensors",
    "pid control",
    "computer vision",
    "artificial intelligence",
    "sensor drift",
  ],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-08-11",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Automation is only as smart as its sensors. If a pH probe drifts or gets fouled by algae, an automatic dosing controller will pump acid until the crop dies. Reliable automation uses industrial-grade PLCs, redundant sensors that cross-check each other, and clear alarm fail-safes. AI models add value by spotting subtle trends in growth and disease days before humans notice them.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Agricultural automation spans three distinct functional tiers: Sensing & Telemetry (capturing physical environmental and root state), Deterministic Control (PLCs executing Proportional-Integral-Derivative loops to adjust actuators), and Analytical Intelligence (cloud or edge algorithms optimizing setpoints based on crop performance models).",
        },
        {
          kind: "text",
          value:
            "A major engineering mistake is attempting to run real-time climate and fertigation dosing through unreliable consumer hobbyist microcontrollers or pure cloud API scripts. Life-support systems require local, deterministic industrial hardware that continues executing safely if internet connectivity drops.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Sensor calibration drift and the dosing hazard",
      blocks: [
        {
          kind: "text",
          value:
            "Glass pH electrodes and toroidal or galvanic EC probes are electrochemical instruments operating in hostile biological solutions. Organic biofilms, mineral scaling and temperature fluctuations introduce measurement drift. If an uncalibrated pH probe reads 6.5 when actual pH is 5.2, an automated system will dose acid until catastrophic root burn occurs.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The principle of hardware interlocks",
          value:
            "Never permit an automation algorithm to dose chemicals without physical time-limit caps and hardware interlocks. Dosing pumps should have physical maximum stroke limits (e.g. maximum 60 seconds of injection per hour) regardless of what the sensor reads.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Primary sensor suites in CEA" },
        {
          kind: "table",
          caption: "Sensor technologies, expected drift intervals and maintenance requirements",
          columns: ["Parameter", "Sensor Technology", "Calibration Interval", "Primary Vulnerability"],
          rows: [
            ["Solution pH", "Glass combination electrode", "Every 7 – 14 days", "Biofilm fouling, bulb dehydration"],
            ["Electrical Conductivity", "Toroidal / 4-electrode conductivity cell", "Monthly", "Mineral scale buildup on electrodes"],
            ["Dissolved Oxygen", "Optical luminescence DO probe", "Every 3 – 6 months", "Cap degradation, surface microbial slime"],
            ["Vapour Pressure Deficit", "Aspirated dual PT1000 / capacitive RH", "Every 6 – 12 months", "Dust accumulation, unshielded solar radiation"],
            ["Carbon Dioxide (CO2)", "Non-Dispersive Infra-Red (NDIR)", "Annual", "Condensation on optical mirrors"],
          ],
          basis: "Operational reliability metrics in commercial greenhouse and vertical farm installations.",
        },
        { kind: "subheading", value: "Closed-loop PID tuning" },
        {
          kind: "text",
          value:
            "Environmental actuators (vent motors, heating valves, variable-speed fans, acid injection pumps) are controlled by PID algorithms. In biological systems with long time constants (thermal inertia of a large greenhouse or water tank), excessive Proportional gain causes violent oscillations, while insufficient Integral action leaves chronic steady-state offsets.",
        },
      ],
    },
    {
      id: "practice",
      heading: "Automation engineering best practices",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            "Use industrial Modbus RTU / RS485 or 4–20 mA current loops for sensor telemetry to eliminate electrical noise over long cable runs.",
            "Implement two out of three (2oo3) voting logic for critical parameters such as pH and boiler temperature.",
            "Equip automation cabinets with independent battery backup (UPS) to guarantee alarm dispatch during mains electrical dropouts.",
            "Store sensor telemetry locally on edge SD/NVMe storage before queuing for cloud transmission.",
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
            "Computer vision pipelines equipped with multi-spectral or RGB cameras mounted on motorized gantries capture top-down canopy imagery daily. Convolutional neural networks extract leaf area index (LAI), detect early spider mite stippling, and measure projected canopy cover. These metrics feed Reinforcement Learning models that dynamically tune photoperiod and PPFD to maximize photosynthetic radiation-use efficiency (RUE).",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Mission-critical control loops must run locally on industrial PLCs, not remote cloud servers.",
    "Electrochemical sensors drift constantly and require strict routine calibration schedules.",
    "Hardware interlocks and maximum dosing time caps prevent runaway chemical injection disasters.",
    "Optical DO and toroidal EC sensors require far less routine cleaning than older galvanic models.",
    "Computer vision provides early, non-destructive monitoring of plant health and canopy growth dynamics.",
  ],
  related: ["engineering", "climate-control", "fertigation", "research"],
  furtherReading: [
    {
      organisation: "International Society for Horticultural Science",
      description: "Working groups on greenhouse automation, sensors, computer vision and robotics in CEA.",
    },
    {
      organisation: "Institute of Electrical and Electronics Engineers (IEEE)",
      description: "Transactions on Agri-Food Electronics, IoT telemetry and automation architectures.",
    },
  ],
};
