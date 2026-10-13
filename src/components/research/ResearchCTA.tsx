import Link from "next/link";
import { SHELL } from "@/components/shared/shell";

export function ResearchCTA() {
  return (
    <section className="relative overflow-hidden bg-[#171D19] py-24 text-surface md:py-32">
      {/* Background CAD-inspired precision grid subtle lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className={`${SHELL} relative z-10 text-center`}>
        <div className="mx-auto max-w-[68ch]">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
              RESEARCH & COLLABORATION
            </p>
          </div>

          <h2 className="mt-5 text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[46px] md:text-[56px] lg:text-[64px]">
            The Next Breakthrough Begins With a Question.
          </h2>

          <p className="mx-auto mt-6 max-w-[50ch] text-[16.5px] leading-[1.7] text-white/75 md:text-[18px]">
            Explore research opportunities, engineering challenges, and technology collaborations
            with Aero Intelli.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center gap-2 rounded-[14px] bg-[#E4FEAA] px-7 text-[14.5px] font-semibold text-[#171A17] transition-all duration-200 hover:bg-[#c9ef77] focus-visible:ring-2 focus-visible:ring-white"
            >
              Start a Conversation
              <span aria-hidden="true">&rarr;</span>
            </Link>

            <Link
              href="/solutions"
              className="inline-flex min-h-[50px] items-center gap-2 rounded-[14px] border border-white/20 bg-white/5 px-7 text-[14.5px] font-medium text-white transition-colors duration-200 hover:bg-white/10 hover:border-white/35 focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore Our Solutions
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8 font-mono text-[11.5px] text-white/50">
            <span>AERO INTELLI R&D LABS</span>
            <span>&middot;</span>
            <span>HYDERABAD, INDIA</span>
            <span>&middot;</span>
            <span>PEER SCRUTINY WELCOME</span>
          </div>
        </div>
      </div>
    </section>
  );
}
