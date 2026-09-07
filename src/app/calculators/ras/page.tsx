import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RasWizard } from "@/components/calculators/RasWizard";
import { SHELL } from "@/components/shared/shell";

export const metadata: Metadata = {
  title: "RAS System Designer",
  description:
    "Size a recirculating aquaculture system step by step: stocking, feed load, ammonia, biofiltration, oxygen, hydraulics, energy and operating economics.",
  alternates: { canonical: "/calculators/ras" },
};

export default function RasCalculatorPage() {
  return (
    <section className="bg-surface pt-[calc(var(--header-height-mobile)+1.5rem)] pb-20 md:pt-[calc(var(--header-height)+2.5rem)] md:pb-28">
      <Breadcrumbs />
      <div className={SHELL}>
        <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">
          Aquaculture
        </p>
        <h1 className="mt-4 max-w-[18ch] text-[34px] font-semibold leading-[1.06] tracking-[-0.03em] text-ink md:text-[52px]">
          RAS System Designer
        </h1>
        <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-ink-soft">
          Ten steps from species to economics. Every result carries its formula, its assumptions and
          an honest statement of how much weight it will bear.
        </p>

        <div className="mt-12">
          <RasWizard />
        </div>
      </div>
    </section>
  );
}
