"use client";

import { useState } from "react";
import Link from "next/link";
import { SHELL } from "@/components/shared/shell";

const visualLayers = [
  { id: "fluid", label: "Fluid Dynamics", color: "#60A5FA" },
  { id: "bio", label: "Biological Substrate", color: "#34D399" },
  { id: "sensors", label: "Sensor Telemetry", color: "#E4FEAA" },
  { id: "opt", label: "Control Loop", color: "#FBBF24" },
];

export function ResearchHero() {
  const [activeLayer, setActiveLayer] = useState<string>("all");

  return (
    <section className="relative overflow-hidden bg-surface pb-16 pt-[calc(var(--header-height-mobile)+1.5rem)] md:pb-24 md:pt-[calc(var(--header-height)+2.5rem)] lg:min-h-[92vh] lg:flex lg:items-center">
      {/* Background CAD-inspired precision grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#171A17 1px, transparent 1px), linear-gradient(90deg, #171A17 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className={`${SHELL} relative z-10 w-full`}>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column (45%) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-deep" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
                RESEARCH & DEVELOPMENT
              </p>
            </div>

            <h1 className="mt-5 text-[38px] font-semibold leading-[1.04] tracking-[-0.035em] text-ink sm:text-[48px] md:text-[58px] lg:text-[68px] xl:text-[76px]">
              Engineering What Comes Next.
            </h1>

            <p className="mt-6 max-w-[48ch] text-[16.5px] leading-[1.7] text-ink-soft md:text-[18px]">
              At Aero Intelli, research connects biology, engineering, data, and intelligent systems to
              explore new possibilities in food production, water management, aquaculture, and
              controlled cultivation.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#programs"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-[14px] bg-ink px-6 text-[14px] font-medium text-surface transition-all duration-200 hover:bg-ink/90 focus-visible:ring-2 focus-visible:ring-accent-deep"
              >
                Explore Research Programs
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#philosophy"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-[14px] border border-hairline-strong bg-surface-muted px-6 text-[14px] font-medium text-ink transition-colors duration-200 hover:bg-surface hover:border-ink/30 focus-visible:ring-2 focus-visible:ring-accent-deep"
              >
                Our Research Approach
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Micro scientific metrics */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-hairline pt-6 text-left">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">Focus Areas</p>
                <p className="mt-1 font-mono text-[18px] font-semibold text-ink">6 Domains</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">Methodology</p>
                <p className="mt-1 font-mono text-[18px] font-semibold text-ink">5 Stages</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">Target Closure</p>
                <p className="mt-1 font-mono text-[18px] font-semibold text-ink">98% Water</p>
              </div>
            </div>
          </div>

          {/* Right Column (55%): Scientific System Visualization */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[28px] border border-hairline-strong bg-gradient-to-br from-surface to-surface-muted p-5 shadow-panel md:p-8">
              {/* Top header bar of the visualization */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent-deep animate-pulse" />
                  <span className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink">
                    SYSTEM SIMULATION & TELEMETRY LAB
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveLayer("all")}
                    className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                      activeLayer === "all"
                        ? "bg-ink text-surface"
                        : "bg-surface text-ink-soft hover:text-ink border border-hairline"
                    }`}
                  >
                    Composite
                  </button>
                  {visualLayers.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => setActiveLayer(l.id)}
                      className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                        activeLayer === l.id
                          ? "bg-ink text-surface"
                          : "bg-surface text-ink-soft hover:text-ink border border-hairline"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main SVG Scientific Architecture Diagram */}
              <div className="relative my-4 aspect-[16/11] w-full overflow-hidden rounded-[20px] bg-[#121614] p-4 text-[#F7F8F4]">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 800 550"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="waterFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0284C7" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="bioGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#34D399" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
                    </linearGradient>
                    <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#E4FEAA" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#E4FEAA" stopOpacity="0" />
                    </radialGradient>
                    <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    </pattern>
                  </defs>

                  {/* Grid base */}
                  <rect width="800" height="550" fill="url(#gridPattern)" />

                  {/* Fluid Dynamics Layer */}
                  {(activeLayer === "all" || activeLayer === "fluid") && (
                    <g className="transition-opacity duration-300">
                      {/* Recirculation loops */}
                      <path
                        d="M 160 220 C 160 120, 360 120, 360 220 C 360 320, 160 320, 160 220 Z"
                        stroke="#38BDF8"
                        strokeWidth="2.5"
                        strokeDasharray="6 4"
                        opacity="0.75"
                      />
                      <path
                        d="M 440 220 C 440 100, 660 100, 660 220 C 660 340, 440 340, 440 220 Z"
                        stroke="#0284C7"
                        strokeWidth="2"
                        strokeDasharray="8 6"
                        opacity="0.65"
                      />
                      {/* Primary Hydrodynamic Dual-Drain Vector */}
                      <circle cx="260" cy="220" r="85" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
                      <circle cx="260" cy="220" r="50" stroke="rgba(56, 189, 248, 0.7)" strokeWidth="2" />
                      <circle cx="260" cy="220" r="18" fill="#0284C7" />
                      <text x="260" y="224" fill="#FFFFFF" fontSize="9" fontFamily="monospace" textAnchor="middle">
                        CORE DRAIN
                      </text>
                      <path d="M 260 135 L 260 305" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
                      <path d="M 175 220 L 345 220" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
                    </g>
                  )}

                  {/* Biological Substrate & Crop Layer */}
                  {(activeLayer === "all" || activeLayer === "bio") && (
                    <g className="transition-opacity duration-300">
                      {/* NFT Gutters & Root matrix */}
                      <rect x="460" y="160" width="220" height="24" rx="6" fill="#1C2720" stroke="#34D399" strokeWidth="1.5" />
                      <rect x="460" y="210" width="220" height="24" rx="6" fill="#1C2720" stroke="#34D399" strokeWidth="1.5" />
                      <rect x="460" y="260" width="220" height="24" rx="6" fill="#1C2720" stroke="#34D399" strokeWidth="1.5" />

                      {/* Plant / Canopy points */}
                      {[490, 530, 570, 610, 650].map((x, idx) => (
                        <g key={idx}>
                          <circle cx={x} cy="154" r="5" fill="#34D399" />
                          <circle cx={x} cy="204" r="5" fill="#34D399" />
                          <circle cx={x} cy="254" r="5" fill="#34D399" />
                          <line x1={x} y1="160" x2={x} y2="182" stroke="#6EE7B7" strokeWidth="1.5" />
                          <line x1={x} y1="210" x2={x} y2="232" stroke="#6EE7B7" strokeWidth="1.5" />
                          <line x1={x} y1="260" x2={x} y2="282" stroke="#6EE7B7" strokeWidth="1.5" />
                        </g>
                      ))}
                      <text x="570" y="138" fill="#34D399" fontSize="10" fontFamily="monospace" textAnchor="middle">
                        NFT CANOPY & RHIZOSPHERE MATRIX
                      </text>
                    </g>
                  )}

                  {/* Sensor Telemetry Nodes Layer */}
                  {(activeLayer === "all" || activeLayer === "sensors") && (
                    <g className="transition-opacity duration-300">
                      {/* Sensor nodes with pulsed coordinate pins */}
                      <g transform="translate(190, 160)">
                        <circle cx="0" cy="0" r="12" fill="url(#nodeGlow)" />
                        <circle cx="0" cy="0" r="4" fill="#E4FEAA" />
                        <text x="16" y="4" fill="#E4FEAA" fontSize="9.5" fontFamily="monospace">DO: 8.24 mg/L</text>
                      </g>
                      <g transform="translate(330, 270)">
                        <circle cx="0" cy="0" r="12" fill="url(#nodeGlow)" />
                        <circle cx="0" cy="0" r="4" fill="#E4FEAA" />
                        <text x="16" y="4" fill="#E4FEAA" fontSize="9.5" fontFamily="monospace">pH: 6.82 (±0.02)</text>
                      </g>
                      <g transform="translate(480, 320)">
                        <circle cx="0" cy="0" r="12" fill="url(#nodeGlow)" />
                        <circle cx="0" cy="0" r="4" fill="#E4FEAA" />
                        <text x="16" y="4" fill="#E4FEAA" fontSize="9.5" fontFamily="monospace">EC: 1.84 mS/cm</text>
                      </g>
                      <g transform="translate(630, 190)">
                        <circle cx="0" cy="0" r="12" fill="url(#nodeGlow)" />
                        <circle cx="0" cy="0" r="4" fill="#E4FEAA" />
                        <text x="16" y="4" fill="#E4FEAA" fontSize="9.5" fontFamily="monospace">VPD: 1.08 kPa</text>
                      </g>

                      {/* Interconnected data bus telemetry lines */}
                      <path
                        d="M 190 160 L 260 220 L 330 270 L 480 320 L 630 190"
                        stroke="#E4FEAA"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        opacity="0.5"
                      />
                    </g>
                  )}

                  {/* Control Loop & AI Layer */}
                  {(activeLayer === "all" || activeLayer === "opt") && (
                    <g className="transition-opacity duration-300">
                      {/* Bottom Edge Intelligence & Actuator Loop */}
                      <rect x="180" y="400" width="440" height="70" rx="10" fill="#18201B" stroke="#FBBF24" strokeWidth="1.5" />
                      <text x="200" y="425" fill="#FBBF24" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
                        CLOSED-LOOP DETERMINISTIC CONTROLLER (PLC + EDGE)
                      </text>
                      <text x="200" y="445" fill="#9CA3AF" fontSize="9" fontFamily="monospace">
                        STATE: DETERMINISTIC PID ACTIVE | RESIDUAL RECONSTRUCTION ERROR &lt; 0.02%
                      </text>
                      <text x="200" y="458" fill="#9CA3AF" fontSize="9" fontFamily="monospace">
                        FLOW BALANCING: 450 L/min NOMINAL | HARDWARE WATCHDOG: ARMED
                      </text>

                      {/* Connection bus to control box */}
                      <path d="M 260 305 L 260 400" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="3 3" />
                      <path d="M 570 284 L 570 400" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="3 3" />
                    </g>
                  )}

                  {/* Calibration Coordinates and Scale Markings */}
                  <text x="20" y="30" fill="#6B7280" fontSize="9" fontFamily="monospace">
                    COORD: LAT 17.3850 N / LON 78.4867 E &middot; ELEVATION 542m
                  </text>
                  <text x="20" y="525" fill="#6B7280" fontSize="9" fontFamily="monospace">
                    SCALE: 1:25 NOMINAL &middot; RECIRCULATION RATE: 98.4% RETENTION
                  </text>
                  <text x="780" y="525" fill="#6B7280" fontSize="9" fontFamily="monospace" textAnchor="end">
                    AERO INTELLI RESEARCH SPECIFICATION R-26
                  </text>
                </svg>
              </div>

              {/* Status bar beneath the visualization */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-3 text-[12px] text-ink-soft">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-ink">ACTIVE SCHEMATIC:</span>
                  <span>Physical-Biological Integrated Production Loop</span>
                </div>
                <div className="flex items-center gap-4 font-mono text-[11.5px]">
                  <span>PUMP LOSS: 4.2%</span>
                  <span>&middot;</span>
                  <span>DO SOLUBILITY: 98%</span>
                  <span>&middot;</span>
                  <span className="text-emerald-700 font-semibold">STATUS: NOMINAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
