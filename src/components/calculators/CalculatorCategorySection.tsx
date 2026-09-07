import Link from "next/link";
import { SHELL } from "@/components/shared/shell";
import type { CalculatorCategory, CalculatorEntry } from "@/config/calculators";

/**
 * One category of calculators.
 *
 * Live entries are links; entries still in preparation render as plain cards
 * with a status label and no href. That distinction is the reason this
 * component exists — an anchor that goes nowhere is the one thing a page about
 * engineering rigour cannot afford.
 */
export function CalculatorCategorySection({
  category,
  tone,
}: {
  category: CalculatorCategory;
  tone: "light" | "muted";
}) {
  const live = category.calculators.filter((entry) => entry.status === "live");
  const preparing = category.calculators.filter((entry) => entry.status === "preparing");

  return (
    <section
      id={category.id}
      className={`scroll-mt-24 py-16 md:py-24 ${tone === "muted" ? "bg-surface-muted" : "bg-surface"}`}
    >
      <div className={SHELL}>
        <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-ink md:text-[38px]">
          {category.title}
        </h2>
        <p className="mt-4 max-w-[62ch] text-[15.5px] leading-relaxed text-ink-soft">
          {category.intro}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...live, ...preparing].map((entry) => (
            <CalculatorCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CalculatorCard({ entry }: { entry: CalculatorEntry }) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[17px] font-medium leading-snug text-ink">{entry.name}</h3>
        {entry.status === "preparing" ? (
          <span className="shrink-0 rounded-full border border-hairline-strong px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.12em] text-ink-soft">
            In preparation
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{entry.summary}</p>
    </>
  );

  const base =
    "flex h-full flex-col rounded-[18px] border p-5 transition-colors duration-200 md:p-6";

  if (entry.status === "live" && entry.href) {
    return (
      <Link
        href={entry.href}
        className={`${base} border-hairline-strong bg-surface outline-none hover:border-ink/35 focus-visible:ring-2 focus-visible:ring-accent-deep`}
      >
        {body}
        <span className="mt-5 text-[13px] font-medium text-ink">Open calculator</span>
      </Link>
    );
  }

  return <div className={`${base} border-hairline bg-transparent`}>{body}</div>;
}
