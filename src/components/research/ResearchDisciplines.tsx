import { SHELL } from "@/components/shared/shell";
import { researchDisciplines } from "@/content/research/data";

export function ResearchDisciplines() {
  return (
    <section id="disciplines" className="border-t border-hairline bg-surface-muted py-20 md:py-28">
      <div className={SHELL}>
        <div className="max-w-[70ch]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            09 / MULTIDISCIPLINARY RIGOR
          </p>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px] md:text-[50px]">
            The People Behind the Work.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-soft md:text-[18px]">
            Biological food systems require cross-pollination across mechanical engineering,
            microbial ecology, embedded electronics, and fluid physics.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchDisciplines.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-[20px] border border-hairline-strong bg-surface p-6 shadow-sm transition-all duration-200 hover:border-ink/30"
            >
              <div className="flex items-center justify-between border-b border-hairline pb-3">
                <span className="font-mono text-[11px] font-bold text-[#244638]">
                  DISCIPLINE 0{idx + 1}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent-deep" />
              </div>

              <h3 className="mt-4 text-[19px] font-semibold text-ink">{item.title}</h3>

              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
