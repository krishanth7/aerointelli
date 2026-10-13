"use client";

import { useState } from "react";
import { SHELL } from "@/components/shared/shell";
import { researchInfrastructure } from "@/content/research/data";

export function ResearchInfrastructure() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const current = researchInfrastructure[activeTab];

  return (
    <section id="infrastructure" className="border-t border-hairline bg-surface py-20 md:py-28">
      <div className={SHELL}>
        <div className="max-w-[70ch]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            04 / EXPERIMENTAL TESTBEDS
          </p>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px] md:text-[50px]">
            The Infrastructure Behind Innovation.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-soft md:text-[18px]">
            Our physical test cells and simulation clusters provide controlled test environments to
            evaluate hydrodynamic designs, biological respiration, and sensor telemetry.
          </p>
        </div>

        {/* Interactive Desktop Showcase */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-12 lg:gap-10 items-start">
          {/* Left Category Navigation (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {researchInfrastructure.map((item, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left rounded-[18px] p-5 transition-all duration-200 border outline-none ${
                    isSelected
                      ? "border-ink bg-surface shadow-md"
                      : "border-hairline bg-surface-muted hover:border-ink/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold text-[#244638]">
                      FACILITY 0{idx + 1}
                    </span>
                    <span className="rounded-full bg-surface px-2 py-0.5 font-mono text-[10px] uppercase text-ink-soft border border-hairline">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="mt-2 text-[18px] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-[13.5px] text-ink-soft line-clamp-1">{item.subtitle}</p>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Showcase (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-[24px] border border-hairline-strong bg-surface-muted p-8 shadow-sm">
              <div className="flex items-center justify-between border-b border-hairline pb-4">
                <div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
                    TESTBED SPECIFICATION
                  </span>
                  <h3 className="mt-1 text-[24px] font-semibold text-ink">{current.title}</h3>
                </div>
                <span className="rounded-full bg-surface px-3 py-1 font-mono text-[11px] font-medium text-ink border border-hairline">
                  {current.status}
                </span>
              </div>

              <p className="mt-5 text-[15.5px] leading-[1.7] text-ink-soft">
                {current.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="mt-6 rounded-[16px] border border-hairline bg-surface p-5">
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink-soft">
                  Key Technical Specifications
                </p>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  {current.technicalSpecs.map((spec) => (
                    <div key={spec.label} className="border-t border-hairline pt-2">
                      <p className="text-[12px] text-ink-soft">{spec.label}</p>
                      <p className="mt-0.5 font-mono text-[13px] font-medium text-ink">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Capabilities */}
              <div className="mt-6">
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink-soft">
                  Investigational Capabilities
                </p>
                <ul className="mt-3 space-y-2">
                  {current.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="relative pl-5 text-[14px] leading-relaxed text-ink before:absolute before:left-0 before:top-[0.6em] before:h-[5px] before:w-[5px] before:rounded-full before:bg-accent-deep"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Accordion */}
        <div className="mt-10 space-y-4 lg:hidden">
          {researchInfrastructure.map((item, idx) => {
            const isOpen = activeTab === idx;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-[18px] border border-hairline bg-surface"
              >
                <button
                  onClick={() => setActiveTab(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <div>
                    <span className="font-mono text-[10.5px] font-bold text-[#244638]">
                      FACILITY 0{idx + 1} &middot; {item.status}
                    </span>
                    <h3 className="mt-1 text-[17px] font-semibold text-ink">{item.title}</h3>
                  </div>
                  <span className="text-[18px] text-ink-soft">{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && (
                  <div className="border-t border-hairline bg-surface-muted p-5 text-[14px]">
                    <p className="leading-relaxed text-ink-soft">{item.description}</p>
                    <div className="mt-4 space-y-2 border-t border-hairline pt-3">
                      {item.technicalSpecs.map((spec) => (
                        <div key={spec.label} className="flex justify-between text-[13px]">
                          <span className="text-ink-soft">{spec.label}:</span>
                          <span className="font-mono font-medium text-ink">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
