"use client";

import { useState } from "react";
import { SHELL } from "@/components/shared/shell";
import { researchMethodologyStages } from "@/content/research/data";

export function ResearchMethodology() {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section id="philosophy" className="border-t border-hairline bg-surface py-20 md:py-28">
      <div className={SHELL}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              02 / RESEARCH METHODOLOGY
            </p>
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px] md:text-[50px]">
              From Questions to Working Systems.
            </h2>
          </div>
          <p className="max-w-[46ch] text-[15px] leading-relaxed text-ink-soft">
            A structured five-phase translation protocol that disciplines curiosity into robust,
            measurable engineering.
          </p>
        </div>

        {/* Desktop Horizontal Process Line */}
        <div className="mt-14 hidden lg:block">
          {/* Connecting track */}
          <div className="relative">
            <div className="absolute top-[28px] left-[4%] right-[4%] h-[2px] bg-[#D8DED6]" />
            <div
              className="absolute top-[28px] left-[4%] h-[2px] bg-accent-deep transition-all duration-300"
              style={{ width: `${(activeStage / (researchMethodologyStages.length - 1)) * 92}%` }}
            />

            <div className="grid grid-cols-5 gap-4 relative z-10">
              {researchMethodologyStages.map((stage, idx) => {
                const isActive = activeStage === idx;
                const isPast = activeStage >= idx;

                return (
                  <button
                    key={stage.step}
                    onClick={() => setActiveStage(idx)}
                    className="flex flex-col items-center text-center group outline-none focus-visible:ring-2 focus-visible:ring-accent-deep rounded-[14px] p-2"
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full font-mono text-[14px] font-bold transition-all duration-200 border-2 ${
                        isActive
                          ? "bg-[#244638] text-surface border-[#244638] shadow-md scale-110"
                          : isPast
                          ? "bg-surface text-[#244638] border-[#244638]"
                          : "bg-surface-muted text-ink-soft border-[#D8DED6] group-hover:border-ink/40"
                      }`}
                    >
                      {stage.step}
                    </div>
                    <span className="mt-4 text-[16px] font-semibold tracking-tight text-ink">
                      {stage.title}
                    </span>
                    <span className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                      {stage.subtitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detail Panel */}
          <div className="mt-10 rounded-[22px] border border-hairline-strong bg-surface-muted p-8 shadow-sm">
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="inline-block rounded-md bg-[#244638] px-2.5 py-1 font-mono text-[11px] font-medium text-surface">
                  PHASE {researchMethodologyStages[activeStage].step} &mdash;{" "}
                  {researchMethodologyStages[activeStage].subtitle.toUpperCase()}
                </span>
                <h3 className="mt-3 text-[26px] font-semibold text-ink">
                  {researchMethodologyStages[activeStage].title}:{" "}
                  {researchMethodologyStages[activeStage].subtitle}
                </h3>
                <p className="mt-4 max-w-[78ch] text-[16.5px] leading-[1.75] text-ink-soft">
                  {researchMethodologyStages[activeStage].description}
                </p>
              </div>
              <div className="hidden xl:flex shrink-0 items-center gap-2 font-mono text-[12px] text-ink-soft bg-surface px-4 py-2 rounded-xl border border-hairline">
                <span>STAGE {activeStage + 1} OF 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Flow */}
        <div className="mt-10 space-y-4 lg:hidden">
          {researchMethodologyStages.map((stage, idx) => (
            <div
              key={stage.step}
              onClick={() => setActiveStage(idx)}
              className={`cursor-pointer rounded-[18px] border p-5 transition-colors ${
                activeStage === idx
                  ? "border-[#244638] bg-surface-muted"
                  : "border-hairline bg-surface hover:border-hairline-strong"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full font-mono text-[12px] font-semibold ${
                    activeStage === idx
                      ? "bg-[#244638] text-surface"
                      : "bg-surface-muted text-ink border border-hairline"
                  }`}
                >
                  {stage.step}
                </span>
                <div>
                  <h3 className="text-[17px] font-medium text-ink">{stage.title}</h3>
                  <p className="font-mono text-[10.5px] uppercase tracking-wider text-ink-soft">
                    {stage.subtitle}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
