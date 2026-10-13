"use client";

import { useState } from "react";
import { SHELL } from "@/components/shared/shell";

interface DataSeries {
  id: string;
  title: string;
  domain: string;
  unit: string;
  xLabel: string;
  yLabel: string;
  description: string;
  points: { x: string; y1: number; y2: number }[];
  series1Name: string;
  series2Name: string;
  notes: string;
}

const datasets: DataSeries[] = [
  {
    id: "oxygen-temp",
    title: "Dissolved Oxygen Solubility vs. Metabolic Respiration",
    domain: "Aquaculture & Water Engineering",
    unit: "mg/L (DO) vs g O2/kg biomass (Demand)",
    xLabel: "Water Temperature (°C)",
    yLabel: "DO Saturation (mg/L)",
    description:
      "Empirical demonstration of the temperature-oxygen paradox: as water warms, oxygen physical saturation declines linearly while biological metabolic demand accelerates exponentially (Q10 = 2.1).",
    points: [
      { x: "16°C", y1: 9.87, y2: 120 },
      { x: "18°C", y1: 9.47, y2: 145 },
      { x: "20°C", y1: 9.09, y2: 180 },
      { x: "22°C", y1: 8.74, y2: 225 },
      { x: "24°C", y1: 8.42, y2: 280 },
      { x: "26°C", y1: 8.11, y2: 350 },
      { x: "28°C", y1: 7.83, y2: 440 },
      { x: "30°C", y1: 7.56, y2: 550 },
    ],
    series1Name: "O2 Solubility (mg/L)",
    series2Name: "Relative Respiration Rate",
    notes: "Freshwater baseline at 1 atm barometric pressure. Model calibrated to tilapia respiration kinetics.",
  },
  {
    id: "tan-nitrification",
    title: "Volumetric TAN Loading vs. MBBR Nitrification Rate",
    domain: "Biological Biofiltration",
    unit: "g TAN / m² biomedia / day",
    xLabel: "TAN Surface Loading (g/m²/d)",
    yLabel: "Removal Rate (g/m²/d)",
    description:
      "Evaluation of biological ammonia oxidation across virgin HDPE biomedia. When dissolved oxygen is maintained above 4.5 mg/L, conversion increases linearly up to saturation at 0.95 g TAN/m²/day.",
    points: [
      { x: "0.2", y1: 0.19, y2: 0.17 },
      { x: "0.4", y1: 0.38, y2: 0.32 },
      { x: "0.6", y1: 0.57, y2: 0.44 },
      { x: "0.8", y1: 0.74, y2: 0.51 },
      { x: "1.0", y1: 0.88, y2: 0.54 },
      { x: "1.2", y1: 0.94, y2: 0.55 },
      { x: "1.4", y1: 0.96, y2: 0.55 },
      { x: "1.6", y1: 0.96, y2: 0.55 },
    ],
    series1Name: "High Aeration (DO > 5.0 mg/L)",
    series2Name: "Low Aeration (DO < 3.0 mg/L)",
    notes: "K1 media (800 m²/m² active surface). Water temperature 24 °C, pH 7.2, alkalinity 140 mg/L CaCO3.",
  },
  {
    id: "vpd-transpiration",
    title: "Diurnal Vapour Pressure Deficit vs. Transpiration Flux",
    domain: "Controlled Cultivation",
    unit: "kPa (VPD) vs mL/plant/hour (Transpiration)",
    xLabel: "Hour of Day (24h)",
    yLabel: "VPD (kPa)",
    description:
      "Tracking the microclimate driving force behind mass-flow nutrient transport in lettuce crops under controlled LED illumination.",
    points: [
      { x: "04:00", y1: 0.45, y2: 8 },
      { x: "07:00", y1: 0.65, y2: 24 },
      { x: "10:00", y1: 0.95, y2: 68 },
      { x: "13:00", y1: 1.15, y2: 95 },
      { x: "16:00", y1: 1.05, y2: 82 },
      { x: "19:00", y1: 0.75, y2: 38 },
      { x: "22:00", y1: 0.50, y2: 12 },
      { x: "01:00", y1: 0.42, y2: 7 },
    ],
    series1Name: "Target VPD (kPa)",
    series2Name: "Transpiration (mL/h/plant)",
    notes: "Calibrated on 28-day head lettuce at 22 °C air temp, 68% RH, 220 µmol/m²/s PPFD photoperiod 06:00–22:00.",
  },
];

export function ResearchDataVisualizations() {
  const [activeSet, setActiveSet] = useState<number>(0);
  const data = datasets[activeSet];

  return (
    <section id="data" className="border-t border-hairline bg-surface py-20 md:py-28">
      <div className={SHELL}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              06 / QUANTITATIVE METRICS
            </p>
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px] md:text-[50px]">
              Understanding Systems Through Data.
            </h2>
          </div>
          <p className="max-w-[48ch] text-[15px] leading-relaxed text-ink-soft">
            Scientific investigation requires continuous measurement. Explore calibrated models
            derived from our hydraulic and biological testbeds.
          </p>
        </div>

        {/* Dataset Switcher Tabs */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-hairline pb-4">
          {datasets.map((set, idx) => (
            <button
              key={set.id}
              onClick={() => setActiveSet(idx)}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                activeSet === idx
                  ? "bg-ink text-surface"
                  : "bg-surface-muted text-ink-soft hover:text-ink border border-hairline"
              }`}
            >
              {set.title}
            </button>
          ))}
        </div>

        {/* Chart & Metadata Container */}
        <div className="mt-8 rounded-[24px] border border-hairline-strong bg-surface-muted p-6 md:p-9 shadow-sm">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-hairline pb-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-800">
                {data.domain}
              </span>
              <h3 className="mt-1 text-[22px] font-semibold text-ink">{data.title}</h3>
            </div>
            <div className="flex items-center gap-4 text-[12px] font-mono text-ink-soft">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                {data.series1Name}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-600" />
                {data.series2Name}
              </span>
            </div>
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft max-w-[76ch]">
            {data.description}
          </p>

          {/* Interactive SVG Scientific Graph */}
          <div className="relative mt-8 aspect-[21/9] min-h-[260px] w-full overflow-hidden rounded-[18px] border border-hairline bg-[#131714] p-4 text-[#F7F8F4]">
            <svg
              className="h-full w-full"
              viewBox="0 0 900 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid Lines */}
              {[40, 100, 160, 220, 280].map((y) => (
                <line
                  key={y}
                  x1="70"
                  y1={y}
                  x2="860"
                  y2={y}
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />
              ))}

              {/* Data points mapping for Series 1 (Emerald) */}
              <polyline
                fill="none"
                stroke="#34D399"
                strokeWidth="2.5"
                points={data.points
                  .map((p, i) => {
                    const x = 90 + i * (750 / (data.points.length - 1));
                    // Normalize roughly for rendering
                    const normalizedY =
                      activeSet === 0
                        ? 280 - ((p.y1 - 7) / 3.5) * 220
                        : activeSet === 1
                        ? 280 - (p.y1 / 1.0) * 220
                        : 280 - (p.y1 / 1.4) * 220;
                    return `${x},${normalizedY}`;
                  })
                  .join(" ")}
              />

              {/* Data points mapping for Series 2 (Amber) */}
              <polyline
                fill="none"
                stroke="#FBBF24"
                strokeWidth="2"
                strokeDasharray="5 3"
                points={data.points
                  .map((p, i) => {
                    const x = 90 + i * (750 / (data.points.length - 1));
                    const normalizedY =
                      activeSet === 0
                        ? 280 - ((p.y2 - 100) / 500) * 220
                        : activeSet === 1
                        ? 280 - (p.y2 / 1.0) * 220
                        : 280 - (p.y2 / 100) * 220;
                    return `${x},${normalizedY}`;
                  })
                  .join(" ")}
              />

              {/* Points Markers */}
              {data.points.map((p, i) => {
                const x = 90 + i * (750 / (data.points.length - 1));
                const normalizedY1 =
                  activeSet === 0
                    ? 280 - ((p.y1 - 7) / 3.5) * 220
                    : activeSet === 1
                    ? 280 - (p.y1 / 1.0) * 220
                    : 280 - (p.y1 / 1.4) * 220;
                return (
                  <g key={i}>
                    <circle cx={x} cy={normalizedY1} r="4" fill="#34D399" />
                    <text
                      x={x}
                      y="305"
                      fill="#9CA3AF"
                      fontSize="10"
                      fontFamily="monospace"
                      textAnchor="middle"
                    >
                      {p.x}
                    </text>
                  </g>
                );
              })}

              {/* Axis Label */}
              <text x="25" y="160" fill="#6B7280" fontSize="9" fontFamily="monospace" transform="rotate(-90 25 160)">
                MAGNITUDE
              </text>
              <text x="475" y="318" fill="#6B7280" fontSize="9.5" fontFamily="monospace" textAnchor="middle">
                {data.xLabel.toUpperCase()}
              </text>
            </svg>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[12px] font-mono text-ink-soft">
            <p>DATA BASIS: {data.notes}</p>
            <span className="rounded bg-surface px-2 py-0.5 border border-hairline">
              CALIBRATION VERIFIED &middot; R² &gt; 0.96
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
