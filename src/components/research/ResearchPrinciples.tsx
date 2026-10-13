import { SHELL } from "@/components/shared/shell";
import { researchPrinciples } from "@/content/research/data";

export function ResearchPrinciples() {
  return (
    <section id="principles" className="border-t border-hairline bg-surface py-20 md:py-28">
      <div className={SHELL}>
        <div className="max-w-[70ch]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            10 / ETHICAL & TECHNICAL CHARTER
          </p>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px] md:text-[50px]">
            Research With Responsibility.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-soft md:text-[18px]">
            The ethical commitments that anchor our scientific investigations, ensuring that
            evidence, biological stewardship, and operational honesty precede all commercial claims.
          </p>
        </div>

        <div className="mt-14 divide-y divide-hairline border-y border-hairline">
          {researchPrinciples.map((item) => (
            <div
              key={item.number}
              className="group grid gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-8 transition-colors hover:bg-surface-muted/60 px-2"
            >
              <div className="md:col-span-2">
                <span className="font-mono text-[14px] font-bold text-[#244638]">
                  {item.number}
                </span>
              </div>

              <div className="md:col-span-4">
                <h3 className="text-[20px] font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
              </div>

              <div className="md:col-span-6">
                <p className="text-[15px] leading-[1.7] text-ink-soft">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
