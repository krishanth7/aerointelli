import Link from "next/link";
import { SHELL } from "@/components/shared/shell";
import { researchDeskUpdates } from "@/content/research/data";

export function ResearchUpdates() {
  return (
    <section id="updates" className="border-t border-hairline bg-surface py-20 md:py-28">
      <div className={SHELL}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              12 / COMMUNICATIONS
            </p>
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px] md:text-[50px]">
              From the Research Desk.
            </h2>
          </div>
          <p className="max-w-[48ch] text-[15px] leading-relaxed text-ink-soft">
            Field dispatches, architectural releases, and technical documentation updates from our
            laboratory testbeds.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchDeskUpdates.map((update) => (
            <div
              key={update.title}
              className="flex flex-col justify-between rounded-[20px] border border-hairline-strong bg-surface-muted p-7 shadow-sm transition-all duration-200 hover:border-ink/30"
            >
              <div>
                <div className="flex items-center justify-between border-b border-hairline pb-3">
                  <span className="font-mono text-[11.5px] text-ink-soft">{update.date}</span>
                  <span className="rounded-full bg-surface px-2.5 py-0.5 font-mono text-[10px] uppercase text-emerald-900 border border-hairline">
                    {update.category}
                  </span>
                </div>

                <h3 className="mt-4 text-[18px] font-semibold leading-snug tracking-tight text-ink">
                  {update.title}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                  {update.summary}
                </p>
              </div>

              <div className="mt-6 border-t border-hairline pt-4 flex items-center justify-between">
                <span className="font-mono text-[11px] text-ink-soft">{update.readTime}</span>
                <Link
                  href={update.href}
                  className="font-semibold text-[13.5px] text-ink underline underline-offset-4 hover:text-[#244638]"
                >
                  Read Update &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
