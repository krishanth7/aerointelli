import { SHELL } from "@/components/shared/shell";
import { researchRoadmapHorizons } from "@/content/research/data";

export function ResearchRoadmap() {
  return (
    <section id="roadmap" className="border-t border-hairline bg-surface-muted py-20 md:py-28">
      <div className={SHELL}>
        <div className="max-w-[70ch]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            11 / STRATEGIC TRAJECTORY
          </p>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px] md:text-[50px]">
            From Exploration to Application.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-soft md:text-[18px]">
            Our research horizons structure near-term mechanical characterisation, mid-term intelligent
            control, and long-term autonomous resource circularity.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {researchRoadmapHorizons.map((horizon, idx) => (
            <div
              key={horizon.number}
              className="relative flex flex-col justify-between rounded-[24px] border border-hairline-strong bg-surface p-7 shadow-sm transition-all duration-200 hover:border-ink/30 hover:shadow-panel"
            >
              <div>
                <div className="flex items-center justify-between border-b border-hairline pb-4">
                  <span className="font-mono text-[12px] font-bold text-[#244638]">
                    {horizon.number.toUpperCase()}
                  </span>
                  <span className="rounded-full bg-surface-muted px-2.5 py-0.5 font-mono text-[10px] uppercase text-ink-soft border border-hairline">
                    {horizon.timeframe}
                  </span>
                </div>

                <h3 className="mt-4 text-[21px] font-semibold tracking-tight text-ink">
                  {horizon.title}
                </h3>

                <p className="mt-3 text-[14.5px] leading-[1.7] text-ink-soft">
                  {horizon.summary}
                </p>

                <div className="mt-6 border-t border-hairline pt-4">
                  <p className="font-mono text-[10.5px] uppercase tracking-wider text-ink-soft font-semibold">
                    Core Investigational Vectors
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {horizon.focusAreas.map((area) => (
                      <li
                        key={area}
                        className="relative pl-4 text-[13px] leading-relaxed text-ink before:absolute before:left-0 before:top-[0.6em] before:h-[4px] before:w-[4px] before:rounded-full before:bg-[#244638]"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-hairline pt-4 font-mono text-[11px] text-ink-soft flex items-center justify-between">
                <span>STAGE: 0{idx + 1} / 03</span>
                <span className="text-emerald-900 font-medium">DOCUMENTED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
