import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CalculatorCategorySection } from "@/components/calculators/CalculatorCategorySection";
import { SHELL } from "@/components/shared/shell";
import { calculatorCategories, calculatorDisclaimer, liveCalculators } from "@/config/calculators";

export const metadata: Metadata = {
  title: "Aero Intelli Calculators | Farm Intelligence",
  description:
    "Model aquaculture, hydroponic and aeroponic systems with transparent engineering calculations, production estimates and farm economics.",
  alternates: { canonical: "/calculators" },
};

/**
 * The calculators landing page.
 *
 * Leads with the flagship rather than a grid of thirty-four equal tiles. A
 * visitor planning a farm wants the system designer; the individual
 * calculators are there for someone who already knows which number they need,
 * and are listed underneath accordingly.
 */
export default function CalculatorsPage() {
  const flagship = liveCalculators().find((entry) => entry.flagship);

  return (
    <>
      <section className="bg-surface pt-[calc(var(--header-height-mobile)+2rem)] md:pt-[calc(var(--header-height)+3.5rem)]">
        {/* Outside the shell wrapper: the component supplies its own. */}
        <Breadcrumbs />
        <div className={SHELL}>
          <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">
            Calculators
          </p>
          <h1 className="mt-5 max-w-[16ch] text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink md:text-[62px] lg:text-[76px]">
            Farm Intelligence, Before You Build.
          </h1>
          <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-ink-soft md:text-[18px]">
            Model aquaculture, hydroponic and aeroponic systems with transparent engineering
            calculations, production estimates and farm economics.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            {flagship?.href ? (
              <Link
                href={flagship.href}
                className="inline-flex min-h-[48px] items-center justify-center rounded-[14px] bg-ink px-6 text-[15px] font-medium text-surface outline-none transition-colors duration-200 hover:bg-ink/90 focus-visible:ring-2 focus-visible:ring-accent-deep"
              >
                Start a Calculation
              </Link>
            ) : null}
            <a
              href="#aquaculture"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[14px] border border-hairline-strong px-6 text-[15px] font-medium text-ink outline-none transition-colors duration-200 hover:border-ink/40 focus-visible:ring-2 focus-visible:ring-accent-deep"
            >
              Explore Engineering Tools
            </a>
          </div>

          {/*
            Said once, at the top, in plain words. A calculator that hides its
            limits behind a footnote is selling certainty it does not have.
          */}
          <p className="mt-12 max-w-[70ch] border-t border-hairline pt-6 text-[13.5px] leading-relaxed text-ink-soft">
            {calculatorDisclaimer}
          </p>
        </div>
      </section>

      {calculatorCategories.map((category, index) => (
        <CalculatorCategorySection
          key={category.id}
          category={category}
          // Light, muted, light — the section rhythm the rest of the site uses.
          tone={index % 2 === 1 ? "muted" : "light"}
        />
      ))}
    </>
  );
}
