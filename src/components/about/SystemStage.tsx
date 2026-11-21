"use client";

import { useState } from "react";
import { systemSequence } from "@/content/about";

export type StageDetail = {
  id: string;
  stageNum: string;
  code: string;
  label: string;
  subtitle: string;
  phase: "Hydrology" | "Cultivation" | "Intelligence" | "Circularity";
  phaseColor: string;
  role: string;
  inflow: string;
  outflow: string;
  telemetry: { parameter: string; target: string; status: "Nominal" | "Active" | "Optimized" }[];
  actuation: string;
  highlightMetric: { label: string; value: string };
};

const STAGE_DETAILS: Record<string, StageDetail> = {
  water: {
    id: "water",
    stageNum: "01",
    code: "AE-HYD-01",
    label: "Water Intake & Buffer",
    subtitle: "Sourced volume & thermal conditioning",
    phase: "Hydrology",
    phaseColor: "text-sky-400 border-sky-400/30 bg-sky-500/10",
    role: "Initial water intake conditioning, thermal stabilization, and reserve volume buffering for facility-wide closed loops.",
    inflow: "Fresh supply / Recycled recovery return",
    outflow: "Primary mechanical filtration array",
    telemetry: [
      { parameter: "Water Temperature", target: "21.5°C ± 0.5°C", status: "Nominal" },
      { parameter: "Inlet Static Pressure", target: "2.8 bar", status: "Nominal" },
      { parameter: "Base Electrolyte EC", target: "0.25 mS/cm", status: "Nominal" },
    ],
    actuation: "Automated PID proportional intake valves and heat-exchange thermal trim.",
    highlightMetric: { label: "Circulation State", value: "Primary Intake" },
  },
  treatment: {
    id: "treatment",
    stageNum: "02",
    code: "AE-FLT-02",
    label: "Advanced Multi-Barrier Treatment",
    subtitle: "Solids removal, biofiltration & conditioning",
    phase: "Hydrology",
    phaseColor: "text-sky-400 border-sky-400/30 bg-sky-500/10",
    role: "Removal of particulate matter via micro-drum filtration, biological nitrification of ammonia, and degassing of carbon dioxide.",
    inflow: "Raw buffered water & return effluent",
    outflow: "Biosecure RAS culture tanks",
    telemetry: [
      { parameter: "Drum Filter Differential", target: "< 15 mbar", status: "Nominal" },
      { parameter: "Dissolved CO2", target: "< 12 mg/L", status: "Nominal" },
      { parameter: "Biofilter Dissolved O2", target: "> 8.5 mg/L", status: "Optimized" },
    ],
    actuation: "Automated backwash flush cycles and vacuum degas vent fans.",
    highlightMetric: { label: "Solids Removal", value: "99.2% > 30μm" },
  },
  ras: {
    id: "ras",
    stageNum: "03",
    code: "AE-RAS-03",
    label: "Recirculating Aquaculture (RAS)",
    subtitle: "High-density biosecure fish production",
    phase: "Hydrology",
    phaseColor: "text-emerald-400 border-emerald-400/30 bg-emerald-500/10",
    role: "Self-cleaning circular aquatic habitat providing optimum hydrodynamic velocities, continuous oxygenation, and feed conversion.",
    inflow: "Purified conditioned water stream",
    outflow: "Nutrient-enriched organic effluent",
    telemetry: [
      { parameter: "Dissolved Oxygen (DO)", target: "9.2 mg/L (102%)", status: "Active" },
      { parameter: "Total Ammonia Nitrogen (TAN)", target: "< 0.4 mg/L", status: "Nominal" },
      { parameter: "Aquatic pH Level", target: "7.15 ± 0.1", status: "Nominal" },
    ],
    actuation: "Pure oxygen injection cones and acoustic-feedback automated feed dispensers.",
    highlightMetric: { label: "Survival Rate", value: "High Biosecurity" },
  },
  nutrients: {
    id: "nutrients",
    stageNum: "04",
    code: "AE-NUT-04",
    label: "Nutrient Fractionation & Upcycling",
    subtitle: "Organic nutrient recovery from fish loop",
    phase: "Cultivation",
    phaseColor: "text-emerald-400 border-emerald-400/30 bg-emerald-500/10",
    role: "Biological mineralization of solid aquatic waste into plant-bioavailable nitrate, phosphate, potassium, and micronutrients.",
    inflow: "RAS effluent with organic solids",
    outflow: "Hydroponic & aeroponic fertigation manifolds",
    telemetry: [
      { parameter: "Nitrate (NO3-N)", target: "165 ppm", status: "Optimized" },
      { parameter: "Phosphate (PO4-P)", target: "38 ppm", status: "Nominal" },
      { parameter: "Ionic Potassium (K+)", target: "210 ppm", status: "Nominal" },
    ],
    actuation: "Aerobic microbial digestor aeration and automated chelated iron dosing.",
    highlightMetric: { label: "Nutrient Recovery", value: "Zero Synthetic NPK" },
  },
  cultivation: {
    id: "cultivation",
    stageNum: "05",
    code: "AE-CEA-05",
    label: "Precision Soilless Cultivation",
    subtitle: "NFT hydroponics & ultrasonic aeroponics",
    phase: "Cultivation",
    phaseColor: "text-lime-400 border-lime-400/30 bg-lime-500/10",
    role: "Clean, soil-free crop cultivation using atomized nutrient misting and continuous thin-film laminar flow across root zones.",
    inflow: "Mineralized organic nutrient solution",
    outflow: "Mature agricultural harvest & plant transpiration",
    telemetry: [
      { parameter: "Root Zone Temperature", target: "19.8°C", status: "Nominal" },
      { parameter: "Droplet Mist Size", target: "45 microns", status: "Optimized" },
      { parameter: "Vapor Pressure Deficit (VPD)", target: "1.15 kPa", status: "Nominal" },
    ],
    actuation: "High-pressure aeroponic solenoids (15s on / 180s off) and dynamic spectrum LED rigs.",
    highlightMetric: { label: "Cycle Acceleration", value: "3x vs Soil" },
  },
  food: {
    id: "food",
    stageNum: "06",
    code: "AE-PRD-06",
    label: "High-Density Food Harvest",
    subtitle: "Zero-soil clean produce & aquatic protein",
    phase: "Cultivation",
    phaseColor: "text-lime-400 border-lime-400/30 bg-lime-500/10",
    role: "The ultimate output of the integrated facility: clean, residue-free leafy greens, vine crops, and premium aquatic protein.",
    inflow: "Cultivated biomass ready for extraction",
    outflow: "Distribution channels & local consumer market",
    telemetry: [
      { parameter: "Biomass Harvest Yield", target: "> 95 kg/m²/yr", status: "Nominal" },
      { parameter: "Chemical Residue", target: "0.00% (Undetected)", status: "Optimized" },
      { parameter: "NDVI Vigor Score", target: "0.92 Index", status: "Nominal" },
    ],
    actuation: "Automated conveyor routing and spectral grading inspection.",
    highlightMetric: { label: "Food Purity", value: "100% Pesticide-Free" },
  },
  data: {
    id: "data",
    stageNum: "07",
    code: "AE-IOT-07",
    label: "Continuous Telemetry Acquisition",
    subtitle: "Edge IoT sensory bus & real-time logging",
    phase: "Intelligence",
    phaseColor: "text-purple-400 border-purple-400/30 bg-purple-500/10",
    role: "High-frequency in-situ instrumentation gathering multi-spectral, chemical, hydraulic, and environmental signals across every pipe and root bed.",
    inflow: "Raw physical sensor signals (Modbus/CAN/MQTT)",
    outflow: "Aggregated time-series data lake & edge pipeline",
    telemetry: [
      { parameter: "Telemetry Ingestion Rate", target: "100 Hz per node", status: "Nominal" },
      { parameter: "Network Bus Latency", target: "< 12 ms", status: "Nominal" },
      { parameter: "Sensor Health Status", target: "100% Online", status: "Optimized" },
    ],
    actuation: "Automated sensor self-calibration, cleaning sweeps, and edge failover routing.",
    highlightMetric: { label: "Data Resolution", value: "Sub-Second Ingestion" },
  },
  ai: {
    id: "ai",
    stageNum: "08",
    code: "AE-ML-08",
    label: "Predictive AI Inference Engine",
    subtitle: "Biological modeling & anomaly detection",
    phase: "Intelligence",
    phaseColor: "text-purple-400 border-purple-400/30 bg-purple-500/10",
    role: "Machine learning neural networks forecasting biomass growth trajectories, early disease markers, and chemical equilibrium drift.",
    inflow: "Real-time consolidated telemetry stream",
    outflow: "Predictive setpoint recommendations & alerts",
    telemetry: [
      { parameter: "Model Anomaly Confidence", target: "99.4%", status: "Nominal" },
      { parameter: "Growth Rate Prediction", target: "± 2.5% Error Margin", status: "Optimized" },
      { parameter: "Inference Latency", target: "18 ms", status: "Nominal" },
    ],
    actuation: "Continuous model retraining and automated setpoint threshold modulation.",
    highlightMetric: { label: "Predictive Window", value: "72h Foresight" },
  },
  optimisation: {
    id: "optimisation",
    stageNum: "09",
    code: "AE-CTL-09",
    label: "Autonomous Closed-Loop Control",
    subtitle: "Sub-second physical actuation & tuning",
    phase: "Intelligence",
    phaseColor: "text-amber-400 border-amber-400/30 bg-amber-500/10",
    role: "Direct return path closing the loop: SCADA-level controllers actuating variable pumps, gas diffusers, and nutrient dosing in response to AI decisions.",
    inflow: "Target algorithmic setpoints",
    outflow: "Calibrated physical system state",
    telemetry: [
      { parameter: "Closed-Loop Response Time", target: "< 500 ms", status: "Optimized" },
      { parameter: "Dosing Accuracy", target: "± 0.05 mL", status: "Nominal" },
      { parameter: "Thermal Trim Stability", target: "± 0.1°C", status: "Nominal" },
    ],
    actuation: "Proportional micro-dosing valves and automated variable frequency drives (VFD).",
    highlightMetric: { label: "Control Autonomy", value: "Closed-Loop PID" },
  },
  recovery: {
    id: "recovery",
    stageNum: "10",
    code: "AE-REC-10",
    label: "Closed Reclamation & Intake Return",
    subtitle: "100% Loop Closure & return to Stage 01",
    phase: "Circularity",
    phaseColor: "text-emerald-400 border-emerald-400/30 bg-emerald-500/10",
    role: "Ultra-violet polishing, bio-solids separation, and de-nitrification returning purified water back to Stage 01 with zero environmental runoff.",
    inflow: "Spent cultivation drainage & facility condensate",
    outflow: "Stage 01 Water Intake (100% Loop Closure)",
    telemetry: [
      { parameter: "Water Recovery Rate", target: "98.5% Closed", status: "Optimized" },
      { parameter: "UV Transmittance (UVT)", target: "> 95%", status: "Nominal" },
      { parameter: "Effluent Discharge", target: "0.00 L / Zero Runoff", status: "Optimized" },
    ],
    actuation: "High-intensity UV sterilizers and re-oxygenation Venturi injectors.",
    highlightMetric: { label: "Loop Closure", value: "Zero Runoff (100% Recirc)" },
  },
};

export function SystemStage() {
  const [selectedId, setSelectedId] = useState<string>("water");
  const selectedStage = STAGE_DETAILS[selectedId] ?? STAGE_DETAILS.water;

  const stageKeys = Object.keys(STAGE_DETAILS);
  const currentIndex = stageKeys.indexOf(selectedId);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + stageKeys.length) % stageKeys.length;
    setSelectedId(stageKeys[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % stageKeys.length;
    setSelectedId(stageKeys[nextIndex]);
  };

  return (
    <div className="w-full">
      {/* ── Top Status & Overview Bar ───────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-[20px] border border-white/15 bg-white/[0.04] p-5 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 items-center justify-center">
            <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative h-2 w-2 rounded-full bg-accent" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              AERO INTELLI ENTERPRISE TOPOLOGY SCHEMATIC
            </p>
            <p className="text-[13px] text-footer-secondary">
              Continuous 10-Stage Thermodynamic &amp; Mass-Balance Cycle
            </p>
          </div>
        </div>

        {/* Global Architecture Metrics */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-footer-text">
            EFFLUENT RUNOFF: <span className="text-accent font-semibold">0.00%</span>
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-footer-text">
            WATER CIRCULARITY: <span className="text-accent font-semibold">98.5%+</span>
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-footer-text">
            SOIL REQUIRED: <span className="text-accent font-semibold">0 SQM</span>
          </span>
        </div>
      </div>

      {/* ── Stage Navigation Carousel Ribbon (10 Nodes) ─────────────── */}
      <div className="mt-8 overflow-x-auto pb-2 scrollbar-none">
        <nav
          aria-label="System Stages Flow"
          className="flex min-w-[900px] items-center justify-between gap-1.5 rounded-[16px] border border-white/10 bg-black/40 p-2"
        >
          {systemSequence.map((item, index) => {
            const isSelected = item.id === selectedId;
            const details = STAGE_DETAILS[item.id];

            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`group relative flex flex-1 flex-col items-center rounded-[12px] px-2.5 py-3 text-center transition-all duration-200 ${
                  isSelected
                    ? "border border-accent/40 bg-white/[0.12] shadow-lg shadow-accent/10"
                    : "border border-transparent bg-transparent hover:border-white/15 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className={`font-mono text-[10px] font-semibold transition-colors ${
                      isSelected ? "text-accent" : "text-white/40 group-hover:text-white/70"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  {isSelected && (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  )}
                </div>

                <span
                  className={`mt-1 text-[13px] font-medium tracking-[-0.01em] transition-colors ${
                    isSelected ? "text-white font-semibold" : "text-white/70 group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>

                <span className="mt-0.5 text-[10px] text-white/40 truncate max-w-[80px]">
                  {details?.phase}
                </span>

                {/* Connecting arrow indicator between stages */}
                {index < systemSequence.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 text-[10px] text-white/20"
                  >
                    →
                  </span>
                ) : (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 text-[10px] text-accent/60"
                  >
                    ↺
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* ── Interactive Command Console Inspection Window ───────────── */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
        {/* Left: Stage Directory & Functional Pipeline */}
        <div className="flex flex-col justify-between rounded-[24px] border border-white/15 bg-white/[0.03] p-6 backdrop-blur-md">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                STAGE PIPELINE REGISTRY
              </span>
              <span className="font-mono text-[11px] text-white/40">
                NODE {selectedStage.stageNum} / 10
              </span>
            </div>

            <p className="mt-3 text-[13px] leading-[1.6] text-legal-dark-muted">
              Select any node in the closed cycle to inspect its operational role,
              sensory acquisition parameters, and automated actuation response.
            </p>

            {/* Quick Selector List */}
            <ul className="mt-5 space-y-2 max-h-[360px] overflow-y-auto pr-1">
              {systemSequence.map((item, index) => {
                const isSelected = item.id === selectedId;
                const details = STAGE_DETAILS[item.id];

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setSelectedId(item.id)}
                      className={`flex w-full items-center justify-between rounded-[12px] border px-3.5 py-2.5 text-left transition-all ${
                        isSelected
                          ? "border-accent/40 bg-white/[0.09] text-white"
                          : "border-white/5 bg-white/[0.02] text-white/60 hover:border-white/15 hover:bg-white/[0.05] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-[11px] font-semibold ${
                            isSelected ? "text-accent" : "text-white/40"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="text-[13.5px] font-medium leading-[1.2]">
                            {item.label}
                          </p>
                          <p className="text-[11px] text-white/40">{item.note}</p>
                        </div>
                      </div>

                      <span
                        className={`rounded-full border px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.06em] ${
                          details?.phaseColor ?? "text-white/60 border-white/10"
                        }`}
                      >
                        {details?.phase}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Stepper Controls */}
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
            <button
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-1.5 text-[12px] font-medium text-white transition-colors hover:border-white/30 hover:bg-white/10"
            >
              <span>←</span>
              <span>Previous Stage</span>
            </button>

            <span className="font-mono text-[11px] text-white/40">
              {selectedStage.stageNum} of 10
            </span>

            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-[12px] font-medium text-accent transition-colors hover:border-accent hover:bg-accent/20"
            >
              <span>Next Stage</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Right: Selected Node Deep-Dive Inspection Terminal */}
        <div className="flex flex-col justify-between rounded-[24px] border border-white/15 bg-white/[0.04] p-7 shadow-panel backdrop-blur-md md:p-8">
          <div>
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[12px] font-semibold text-accent">
                  {selectedStage.code}
                </span>
                <span className="text-white/20">|</span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.08em] ${selectedStage.phaseColor}`}
                >
                  {selectedStage.phase}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-emerald-300">
                  {selectedStage.highlightMetric.label}: {selectedStage.highlightMetric.value}
                </span>
              </div>
            </div>

            {/* Stage Title and Summary */}
            <div className="mt-5">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[22px] font-bold text-accent">
                  {selectedStage.stageNum}
                </span>
                <h3 className="text-[26px] font-medium leading-[1.2] tracking-[-0.025em] text-footer-text md:text-[32px]">
                  {selectedStage.label}
                </h3>
              </div>
              <p className="mt-1 text-[14px] text-legal-dark-muted">
                {selectedStage.subtitle}
              </p>

              <p className="mt-4 text-[15px] leading-[1.8] text-footer-secondary md:text-[16px]">
                {selectedStage.role}
              </p>
            </div>

            {/* Inflow & Outflow Vector Cards */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[14px] border border-white/10 bg-white/[0.02] p-4">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                  <span className="text-sky-400">↓</span>
                  <span>Inflow Stream</span>
                </div>
                <p className="mt-1.5 text-[14px] font-medium text-white/90">
                  {selectedStage.inflow}
                </p>
              </div>

              <div className="rounded-[14px] border border-white/10 bg-white/[0.02] p-4">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                  <span className="text-emerald-400">↑</span>
                  <span>Outflow Destination</span>
                </div>
                <p className="mt-1.5 text-[14px] font-medium text-white/90">
                  {selectedStage.outflow}
                </p>
              </div>
            </div>

            {/* Live Sensory Telemetry Monitored */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                  In-Situ Multi-Parameter Telemetry
                </p>
                <span className="font-mono text-[10.5px] text-white/40">
                  Calibrated Target Setpoints
                </span>
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {selectedStage.telemetry.map((t) => (
                  <div
                    key={t.parameter}
                    className="rounded-[12px] border border-white/10 bg-white/[0.03] p-3 transition-colors hover:border-white/20"
                  >
                    <p className="text-[11px] text-white/60 truncate">{t.parameter}</p>
                    <p className="mt-1 font-mono text-[13px] font-semibold text-white">
                      {t.target}
                    </p>
                    <div className="mt-2 flex items-center justify-between border-t border-white/5 pt-1.5">
                      <span className="text-[9.5px] uppercase tracking-[0.06em] text-white/40">
                        Status
                      </span>
                      <span className="font-mono text-[10px] font-medium text-accent">
                        {t.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closed Loop Control Actuation */}
            <div className="mt-6 rounded-[14px] border border-white/10 bg-white/[0.02] p-4">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/50">
                Automated Closed-Loop Actuation Routine
              </p>
              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-white/80">
                {selectedStage.actuation}
              </p>
            </div>
          </div>

          {/* Loop Continuity Banner */}
          <div className="mt-7 rounded-[14px] border border-accent/20 bg-accent/[0.06] p-3.5 flex items-center justify-between text-[12px]">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 font-mono text-[11px] text-accent">
                ↺
              </span>
              <span className="text-white/80">
                Stage 10 returns 100% of purified volume back to Stage 01.
              </span>
            </div>
            <span className="font-mono font-semibold text-accent">Closed-Loop Topology</span>
          </div>
        </div>
      </div>
    </div>
  );
}
