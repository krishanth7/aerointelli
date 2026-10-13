import { SHELL } from "@/components/shared/shell";
import { researchTaxonomy } from "@/content/research/data";

export function ResearchIntroduction() {
  return (
    <section id="introduction" className="border-t border-hairline bg-surface-muted py-20 md:py-28">
      <div className={SHELL}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading and Editorial Manifesto */}
          <div className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              01 / OUR RESEARCH
            </p>
            <h2 className="mt-4 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px] md:text-[50px]">
              Curiosity Meets Engineering.
            </h2>

            <div className="mt-8 space-y-5 text-[16.5px] leading-[1.75] text-ink-soft md:text-[18px]">
              <p>
                Aero Intelli approaches research as a process of understanding complex biological and
                engineering systems, evaluating new technologies, and translating useful discoveries
                into practical applications.
              </p>
              <p>
                Our research interests span aquaculture, controlled-environment cultivation, water
                treatment, automation, and intelligent resource management. Research is not
                decoration for us; it is the physical foundation of better, more reliable engineering.
              </p>
            </div>

            <div className="mt-8 rounded-[18px] border border-hairline-strong bg-surface p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-deep bg-[#18201B] inline-block px-2.5 py-1 rounded-md">
                CORE PRINCIPLE
              </p>
              <p className="mt-3 text-[15px] italic leading-relaxed text-ink">
                &ldquo;Research is not decoration. Research is the foundation of better engineering.
                Living organisms and precious freshwater supplies tolerate no reckless shortcuts.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Scientific Taxonomy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink-soft">
              SCIENTIFIC TAXONOMY & COGNITIVE SCOPE
            </p>

            <div className="mt-6 divide-y divide-hairline border-y border-hairline">
              {researchTaxonomy.map((item, idx) => (
                <div
                  key={item.label}
                  className="group flex flex-col py-5 transition-colors duration-200 hover:bg-surface/50 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[12px] text-ink-soft">0{idx + 1}</span>
                    <h3 className="text-[17px] font-medium tracking-tight text-ink group-hover:text-emerald-900 transition-colors">
                      {item.label}
                    </h3>
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft sm:mt-0 sm:max-w-[32ch] sm:text-right">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
