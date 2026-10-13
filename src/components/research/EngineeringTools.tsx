import Link from "next/link";
import { SHELL } from "@/components/shared/shell";
import { engineeringCalculators } from "@/content/research/data";

export function EngineeringTools() {
  return (
    <section id="tools" className="border-t border-hairline bg-surface-muted py-20 md:py-28">
      <div className={SHELL}>
        <div className="max-w-[70ch]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            07 / NUMERICAL INSTRUMENTS
          </p>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px] md:text-[50px]">
            Engineering Tools & Models.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-soft md:text-[18px]">
            First-principles engineering calculators developed through our research programs, linking
            mathematical theory directly with commercial farm design and equipment sizing.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringCalculators.map((calc) => (
            <div
              key={calc.title}
              className="flex flex-col justify-between rounded-[20px] border border-hairline-strong bg-surface p-6 shadow-sm transition-all duration-200 hover:border-ink/30 hover:shadow-panel"
            >
              <div>
                <div className="flex items-center justify-between border-b border-hairline pb-3">
                  <span className="font-mono text-[11px] font-bold text-[#244638]">
                    {calc.domain.toUpperCase()} MODEL
                  </span>
                  <span className="rounded-full bg-surface-muted px-2 py-0.5 font-mono text-[9.5px] uppercase text-emerald-900 border border-hairline">
                    Verified
                  </span>
                </div>

                <h3 className="mt-4 text-[18px] font-semibold tracking-tight text-ink">
                  {calc.title}
                </h3>

                <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">
                  {calc.description}
                </p>
              </div>

              <div className="mt-6 border-t border-hairline pt-4">
                <Link
                  href={calc.href}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink underline underline-offset-4 hover:text-[#244638]"
                >
                  Open Engineering Model &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
