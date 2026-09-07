import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SHELL } from "@/components/shared/shell";

export const metadata: Metadata = {
  title: "Knowledge",
  description:
    "Engineering knowledge for recirculating aquaculture, hydroponics and aeroponics — the science, design, operation and economics behind controlled growing systems.",
  alternates: { canonical: "/knowledge" },
};

/**
 * The knowledge index.
 *
 * A real page rather than a placeholder, because `/knowledge` is now a parent
 * of the live RAS Knowledge Center and a breadcrumb points at it. Only the RAS
 * discipline is written; the other three are named without being linked, since
 * the routes behind them are still placeholders held out of search.
 */
const disciplines = [
  {
    title: "Recirculating Aquaculture",
    summary:
      "Water chemistry, filtration, biofiltration, hydraulics, oxygenation, production and farm economics.",
    href: "/knowledge/ras",
  },
  {
    title: "Aquaculture",
    summary: "Species biology, health, stocking and production management across culture systems.",
  },
  {
    title: "Hydroponics",
    summary: "Nutrient solution, water use, environment control and yield planning.",
  },
  {
    title: "Aeroponics",
    summary: "Misting, pressure, root-zone conditions and equipment selection.",
  },
];

export default function KnowledgePage() {
  return (
    <section className="bg-surface pb-20 pt-[calc(var(--header-height-mobile)+1rem)] md:pb-28 md:pt-[calc(var(--header-height)+2rem)]">
      <Breadcrumbs />
      <div className={SHELL}>
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">
          Knowledge
        </p>
        <h1 className="mt-5 max-w-[16ch] text-[36px] font-semibold leading-[1.06] tracking-[-0.03em] text-ink md:text-[56px]">
          Understand the system before you build the farm.
        </h1>
        <p className="mt-6 max-w-[64ch] text-[16px] leading-relaxed text-ink-soft md:text-[18px]">
          A practical, engineering-focused knowledge base covering the science, design, operation and
          economics of controlled growing systems.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {disciplines.map((discipline) =>
            discipline.href ? (
              <Link
                key={discipline.title}
                href={discipline.href}
                className="flex h-full flex-col rounded-[18px] border border-hairline-strong bg-surface p-6 outline-none transition-colors duration-200 hover:border-ink/35 focus-visible:ring-2 focus-visible:ring-accent-deep"
              >
                <h2 className="text-[19px] font-medium leading-snug text-ink">
                  {discipline.title}
                </h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                  {discipline.summary}
                </p>
                <span className="mt-5 text-[13.5px] font-medium text-ink">
                  Open the Knowledge Center
                </span>
              </Link>
            ) : (
              <div
                key={discipline.title}
                className="flex h-full flex-col rounded-[18px] border border-hairline p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-[19px] font-medium leading-snug text-ink">
                    {discipline.title}
                  </h2>
                  <span className="shrink-0 rounded-full border border-hairline-strong px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-soft">
                    Planned
                  </span>
                </div>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                  {discipline.summary}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
