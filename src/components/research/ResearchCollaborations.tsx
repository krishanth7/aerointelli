import Link from "next/link";
import { SHELL } from "@/components/shared/shell";
import { collaborationPillars } from "@/content/research/data";

export function ResearchCollaborations() {
  return (
    <section id="collaborations" className="border-t border-hairline bg-surface py-20 md:py-28">
      <div className={SHELL}>
        <div className="max-w-[70ch]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            08 / OPEN DIALOGUE
          </p>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px] md:text-[50px]">
            Progress Through Collaboration.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-soft md:text-[18px]">
            Meaningful research often benefits from collaboration across scientific disciplines,
            engineering teams, academic institutions, industry partners, and technology
            organizations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collaborationPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col justify-between rounded-[22px] border border-hairline-strong bg-surface-muted p-7 shadow-sm transition-all duration-200 hover:border-ink/30"
            >
              <div>
                <span className="font-mono text-[12px] font-bold text-[#244638]">
                  PILLAR {pillar.number}
                </span>

                <h3 className="mt-3 text-[19px] font-semibold tracking-tight text-ink">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                  {pillar.description}
                </p>

                <div className="mt-5 rounded-[12px] border border-hairline bg-surface p-3 text-[12.5px] leading-relaxed text-ink-soft">
                  <span className="font-semibold text-ink">Scope: </span>
                  {pillar.scope}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[22px] border border-hairline-strong bg-[#171D19] p-8 text-surface sm:flex-row">
          <div>
            <h3 className="text-[20px] font-semibold text-white">
              Explore a Research Partnership with Aero Intelli
            </h3>
            <p className="mt-1 text-[14.5px] text-white/70 max-w-[50ch]">
              Bring complex biological parameters, fluid engineering questions, or pilot deployment
              needs to our engineering team.
            </p>
          </div>

          <Link
            href="/contact?type=partnership"
            className="shrink-0 inline-flex min-h-[46px] items-center gap-2 rounded-[14px] bg-[#E4FEAA] px-6 text-[14px] font-semibold text-[#171A17] transition-all hover:bg-[#c9ef77] focus-visible:ring-2 focus-visible:ring-accent-deep"
          >
            Discuss a Research Collaboration &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
