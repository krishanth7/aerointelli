import Link from "next/link";
import { SHELL } from "@/components/shared/shell";
import { researchPrograms } from "@/content/research/data";

export function ResearchPrograms() {
  return (
    <section id="programs" className="border-t border-hairline bg-surface py-20 md:py-28">
      <div className={SHELL}>
        <div className="max-w-[72ch]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            OUR RESEARCH DOMAINS
          </p>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px] md:text-[50px]">
            Exploring the Systems That Shape Tomorrow.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-soft md:text-[18px]">
            Our research interests focus on the technologies, biological processes, and intelligent
            systems that can improve resource-intensive production environments.
          </p>
        </div>

        {/* Six Major Programs Editorial Grid */}
        <div className="mt-16 space-y-10 md:space-y-14">
          {researchPrograms.map((program, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={program.id}
                className="group relative overflow-hidden rounded-[26px] border border-hairline-strong bg-surface-muted transition-all duration-300 hover:border-ink/30 hover:shadow-panel"
              >
                <div
                  className={`grid gap-8 p-7 md:p-10 lg:grid-cols-12 lg:gap-12 lg:items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Text Column (7 cols) */}
                  <div className={`lg:col-span-7 ${isEven ? "" : "lg:col-start-6"}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[13px] font-bold text-[#244638]">
                        PROGRAM {program.number}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-ink-soft" />
                      <span className="rounded-full border border-hairline bg-surface px-2.5 py-0.5 font-mono text-[10.5px] uppercase tracking-wider text-ink-soft">
                        {program.status}
                      </span>
                    </div>

                    <h3 className="mt-3 text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[32px]">
                      {program.title}
                    </h3>

                    <p className="mt-4 text-[15.5px] leading-[1.7] text-ink-soft md:text-[17px]">
                      {program.description}
                    </p>

                    <div className="mt-5 rounded-[14px] border border-hairline bg-surface p-4 text-[13.5px] leading-relaxed text-ink-soft">
                      <span className="font-semibold text-ink">Scientific Approach: </span>
                      {program.scientificApproach}
                    </div>

                    {/* Research Focus Tags */}
                    <div className="mt-6">
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft">
                        Primary Lines of Enquiry
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {program.focusTopics.map((topic) => (
                          <span
                            key={topic}
                            className="rounded-full border border-hairline-strong bg-surface px-3 py-1 font-mono text-[11.5px] text-ink"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href={program.ctaHref}
                        className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-ink underline underline-offset-4 transition-colors hover:text-[#244638]"
                      >
                        {program.ctaText}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>

                  {/* Visual Technical Diagram Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "" : "lg:col-start-1"
                    } flex items-center justify-center`}
                  >
                    <div className="w-full aspect-[4/3] rounded-[20px] border border-hairline bg-[#161C18] p-5 text-[#F7F8F4] flex flex-col justify-between relative overflow-hidden">
                      {/* Top status */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="font-mono text-[10px] text-[#A7F3D0]">
                          RESEARCH DOMAIN {program.number}
                        </span>
                        <span className="font-mono text-[10px] text-white/50 uppercase">
                          {program.domain}
                        </span>
                      </div>

                      {/* Schematic Graphics */}
                      <div className="my-auto flex flex-col items-center justify-center text-center py-4">
                        <div className="h-16 w-16 rounded-full border border-[#34D399]/40 bg-[#34D399]/10 flex items-center justify-center mb-3">
                          <span className="font-mono text-[18px] font-bold text-[#E4FEAA]">
                            {program.number}
                          </span>
                        </div>
                        <p className="text-[15px] font-medium text-white max-w-[22ch]">
                          {program.shortTitle}
                        </p>
                        <p className="mt-1 font-mono text-[11px] text-white/60">
                          {program.focusTopics.length} INVESTIGATIONAL VECTORS
                        </p>
                      </div>

                      {/* Bottom telemetry line */}
                      <div className="flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[9.5px] text-white/40">
                        <span>SYS ID: AERO-R-{program.number}</span>
                        <span>VALIDATION: IN PROGRESS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
