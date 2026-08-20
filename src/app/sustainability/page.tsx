import type { Metadata } from "next";
import Link from "next/link";
import { AISystem } from "@/components/sustainability/AISystem";
import { EnergyFlow, RASSchematic, WaterPipeline } from "@/components/sustainability/diagrams";
import { HeroSystem } from "@/components/sustainability/HeroSystem";
import { MetricsExplorer } from "@/components/sustainability/MetricsExplorer";
import { ProjectRail, SystemStatusPanel } from "@/components/sustainability/ProjectRail";
import { ResourceLoop } from "@/components/sustainability/ResourceLoop";
import { ScrollScaffold } from "@/components/sustainability/ScrollScaffold";
import { MagneticButton, RevealText, SectionLabel } from "@/components/shared/primitives";
import { SHELL } from "@/components/shared/shell";
import {
  approachPrinciples,
  biodiversityCommitments,
  circularityStreams,
  connectedDomains,
  controlledVariables,
  cultivationMethods,
  energyStrategies,
  foodSystemChain,
  foodSystemGoals,
  indexCategories,
  landProgression,
  measurementSequence,
  plannedDisclosures,
  researchAreas,
  sustainabilityPillars,
  waterCapabilities,
} from "@/content/sustainability";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Aero Intelli develops intelligent food, water and resource systems designed around efficiency, circularity, measurable performance and resilient production.",
  alternates: { canonical: "/sustainability" },
};

/** Bulleted capability list. Used wherever a section is a set of measures. */
function CapabilityList({ items }: { items: string[] }) {
  return (
    <ul data-reveal-group className="grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          data-reveal-item
          className="flex gap-3 text-[15px] leading-[1.7] text-ink-soft"
        >
          <span aria-hidden="true" className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-accent-deep" />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Left-to-right progression. Wraps to a column on phones without losing order. */
function FlowRail({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-2">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2.5">
          <span className="rounded-full border border-hairline-strong bg-surface px-3.5 py-1.5 text-[13px] font-medium">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <span aria-hidden="true" className="text-[13px] text-ink-soft">
              /
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/** Section heading. The title reveals line by line; the intro follows as a block. */
function SectionHeader({
  index,
  label,
  title,
  intro,
  tone = "light",
}: {
  index: string;
  label: string;
  title: string[];
  intro?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <header className="max-w-[820px]">
      <SectionLabel index={index} label={label} tone={tone} />

      <RevealText
        lines={title}
        className={`mt-5 text-[27px] font-medium leading-[1.12] tracking-[-0.03em] md:text-[42px] lg:text-[48px] ${
          dark ? "text-footer-text" : ""
        }`}
      />

      {intro ? (
        <p
          className={`mt-5 max-w-[720px] text-[15px] leading-[1.8] md:text-[16.5px] md:leading-[1.8] ${
            dark ? "text-legal-dark-muted" : "text-ink-soft"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </header>
  );
}

/** Hedge or qualifier. Visually distinct so a caveat is never mistaken for a claim. */
function Qualifier({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <p
      className={`mt-9 max-w-[760px] rounded-[14px] border border-hairline border-l-2 border-l-accent-deep px-5 py-4 text-[15px] leading-[1.8] text-ink-soft ${
        muted ? "bg-surface-muted" : "bg-surface"
      }`}
    >
      {children}
    </p>
  );
}

export default function Page() {
  return (
    <ScrollScaffold>
      <main>
        {/* --------------------------------------------------------------- hero */}
        <section className="relative overflow-hidden bg-legal-dark">
          <div className={`${SHELL} pb-16 pt-14 md:pb-28 md:pt-24`}>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:items-center lg:gap-16">
              <div>
                <div className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-legal-dark-muted">
                    Sustainability
                  </span>
                </div>

                <RevealText
                  as="h1"
                  lines={[
                    "Engineering more",
                    "sustainable food,",
                    "water and resource",
                    "systems",
                  ]}
                  className="mt-7 text-[36px] font-medium leading-[1.06] tracking-[-0.035em] text-footer-text md:text-[62px] lg:text-[76px]"
                />

                <p className="mt-8 max-w-[620px] border-l-2 border-accent pl-5 text-[16px] leading-[1.8] text-legal-dark-muted md:text-[17.5px]">
                  Aero Intelli develops intelligent production systems designed to use resources
                  more efficiently, reduce waste, recover valuable inputs and build more resilient
                  food and water systems.
                </p>

                <div className="mt-10 flex flex-col gap-2.5 sm:flex-row">
                  <MagneticButton>
                    <a
                      href="#approach"
                      className="inline-flex min-h-[50px] items-center justify-center rounded-[14px] bg-accent px-6 text-[14.5px] font-semibold text-ink transition-colors duration-200 hover:bg-accent-deep"
                    >
                      Explore our approach
                    </a>
                  </MagneticButton>
                  <MagneticButton>
                    <a
                      href="#metrics"
                      className="inline-flex min-h-[50px] items-center justify-center rounded-[14px] border border-white/20 px-6 text-[14.5px] font-semibold text-footer-text transition-colors duration-200 hover:bg-white/[0.06]"
                    >
                      View sustainability metrics
                    </a>
                  </MagneticButton>
                </div>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5 md:p-8">
                <HeroSystem />
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- approach */}
        <section id="approach" aria-labelledby="approach-heading" className="border-b border-hairline">
          <div className={`${SHELL} py-20 md:py-28`}>
            <SectionHeader
              index="01"
              label="Approach"
              title={["Sustainability", "by system design"]}
              intro="Sustainability is not a layer applied after a system is built. Resource efficiency, circularity, intelligent control and measurable performance are decided in the architecture itself."
            />

            <ul
              data-reveal-group
              className="mt-12 grid gap-px overflow-hidden rounded-[18px] border border-hairline bg-hairline lg:grid-cols-3"
            >
              {approachPrinciples.map((principle, index) => (
                <li key={principle.title} data-reveal-item className="bg-surface p-6 md:p-8">
                  <span className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-ink-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[19px] font-medium leading-[1.3]">{principle.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-[1.75] text-ink-soft">
                    {principle.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --------------------------------------------------------------- loop */}
        <section id="loop" aria-labelledby="loop-heading" className="bg-surface-muted">
          <div className={`${SHELL} py-20 md:py-28`}>
            <SectionHeader
              index="02"
              label="Resource loop"
              title={["From linear consumption", "to circular systems"]}
              intro="A conventional production line draws resources in at one end and discharges them at the other. The alternative is to close the path, so each output is examined for what it can still do."
            />

            <div className="mt-12">
              <ResourceLoop />
            </div>

            <p className="mt-10 max-w-[760px] text-[15px] leading-[1.8] text-ink-soft">
              The long-term objective is to connect production systems that are traditionally
              operated separately — aquaculture, cultivation and water treatment — into integrated
              resource loops, where the waste stream of one becomes the input of another.
            </p>
          </div>
        </section>

        {/* -------------------------------------------------------------- water */}
        <section id="water" aria-labelledby="water-heading" className="border-y border-hairline">
          <div className={`${SHELL} py-20 md:py-28`}>
            <SectionHeader
              index="03"
              label="Water"
              title={["Water is a resource,", "not a disposable input"]}
              intro="Water is the shared medium across recirculating aquaculture, hydroponics and aeroponics. Treating it as recoverable rather than consumable is what makes the rest of the system possible."
            />

            <div className="mt-12">
              <WaterPipeline />
            </div>

            <div className="mt-12">
              <CapabilityList items={waterCapabilities} />
            </div>

            <Qualifier>
              These systems are designed for high water-use efficiency through recirculation,
              treatment and controlled replenishment. Measured consumption figures will be
              published when they come from operating projects rather than from design assumptions.
            </Qualifier>
          </div>
        </section>

        {/* --------------------------------------------------------------- land */}
        <section aria-labelledby="land-heading">
          <div className={`${SHELL} py-20 md:py-28`}>
            <SectionHeader
              index="04"
              label="Land"
              title={["Producing more from", "controlled spaces"]}
              intro="Controlled-environment methods change the relationship between ground area and productive area."
            />

            <ol
              data-reveal-group
              className="mt-12 grid gap-px overflow-hidden rounded-[18px] border border-hairline bg-hairline lg:grid-cols-4"
            >
              {landProgression.map((stage, index) => (
                <li key={stage.label} data-reveal-item className="bg-surface p-5 md:p-6">
                  <span className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-ink-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[16.5px] font-medium leading-[1.3]">{stage.label}</h3>
                  <p className="mt-2.5 text-[14px] leading-[1.7] text-ink-soft">{stage.body}</p>
                </li>
              ))}
            </ol>

            <p className="mt-9 max-w-[760px] text-[15px] leading-[1.8] text-ink-soft">
              This is not technology replacing farming. It is technology extending the range of
              environments in which productive agriculture can operate — including places where
              soil, climate or water availability would otherwise rule it out.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- ras */}
        <section
          id="ras"
          aria-labelledby="ras-heading"
          className="border-y border-hairline bg-surface-muted"
        >
          <div className={`${SHELL} py-20 md:py-28`}>
            <SectionHeader
              index="05"
              label="Aquaculture"
              title={["Circular", "aquaculture"]}
              intro="In a recirculating system, the waste a fish population produces is the central engineering problem — and the central opportunity."
            />

            <div className="mt-12">
              <RASSchematic />
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- cultivation */}
        <section id="cultivation" aria-labelledby="cultivation-heading">
          <div className={`${SHELL} py-20 md:py-28`}>
            <SectionHeader
              index="06"
              label="Cultivation"
              title={["Precision cultivation", "with controlled inputs"]}
              intro="Soilless cultivation removes the buffer that soil provides. That raises the demand on control, and in exchange makes every input measurable."
            />

            <ul
              data-reveal-group
              className="mt-12 grid gap-px overflow-hidden rounded-[18px] border border-hairline bg-hairline lg:grid-cols-3"
            >
              {cultivationMethods.map((method) => (
                <li key={method.title} data-reveal-item className="bg-surface p-6 md:p-8">
                  <h3 className="text-[19px] font-medium leading-[1.3]">{method.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-[1.75] text-ink-soft">{method.body}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-[18px] border border-hairline bg-surface-muted p-5 md:p-7">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Controlled continuously
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {controlledVariables.map((variable) => (
                  <li
                    key={variable}
                    className="rounded-full border border-hairline-strong bg-surface px-3.5 py-1.5 text-[13px]"
                  >
                    {variable}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-[640px] text-[15.5px] leading-[1.75]">
                The objective is easy to state and difficult to hold: deliver the right resource,
                in the right quantity, at the right time.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- energy */}
        <section id="energy" aria-labelledby="energy-heading" className="bg-legal-dark">
          <div className={`${SHELL} py-20 md:py-28`}>
            <SectionHeader
              tone="dark"
              index="07"
              label="Energy"
              title={["Designing for", "energy efficiency"]}
              intro="A recirculating system runs continuously, so energy is a permanent operating cost rather than a seasonal one. Most of it is fixed by pump and aeration selection at the design stage."
            />

            <div className="mt-12 rounded-[18px] border border-white/10 bg-white/[0.03] p-5 md:p-8">
              <EnergyFlow />
            </div>

            <ul
              data-reveal-group
              className="mt-10 grid gap-px overflow-hidden rounded-[18px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
            >
              {energyStrategies.map((strategy) => (
                <li key={strategy.title} data-reveal-item className="bg-legal-dark p-6">
                  <h3 className="text-[16.5px] font-medium leading-[1.3] text-footer-text">
                    {strategy.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-legal-dark-muted">
                    {strategy.body}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-9 max-w-[760px] border-l-2 border-accent pl-5 text-[15px] leading-[1.8] text-legal-dark-muted">
              Aero Intelli does not claim its systems run entirely on renewable energy. What share
              a site achieves depends on its load profile and what the operator installs, and no
              figure is published here until it is measured.
            </p>
          </div>
        </section>

        {/* ------------------------------------------------------- intelligence */}
        <section
          id="intelligence"
          aria-labelledby="ai-heading"
          className="border-y border-white/10 bg-legal-dark-secondary"
        >
          <div className={`${SHELL} py-20 md:py-28`}>
            <SectionHeader
              tone="dark"
              index="08"
              label="Intelligence"
              title={["Intelligence that", "optimises resource use"]}
              intro="Most resource waste in a controlled system is not dramatic. It is a pump running harder than it needs to, a set point held too wide, or a fault noticed a day late."
            />

            <div className="mt-12">
              <AISystem />
            </div>

            <p className="mt-10 max-w-[720px] text-[16.5px] leading-[1.75] text-footer-text">
              Applied well, intelligence turns sustainability from a static target into a
              continuously optimised operating system.
            </p>
          </div>
        </section>

        {/* -------------------------------------------------------- circularity */}
        <section id="circularity" aria-labelledby="circularity-heading">
          <div className={`${SHELL} py-20 md:py-28`}>
            <SectionHeader
              index="09"
              label="Circularity"
              title={["Designing waste", "out of the system"]}
              intro="Every stream leaving a system is assessed for what it still contains before it is treated as waste."
            />

            <ul
              data-reveal-group
              className="mt-12 grid gap-px overflow-hidden rounded-[18px] border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3"
            >
              {circularityStreams.map((stream) => (
                <li key={stream.stream} data-reveal-item className="bg-surface p-6 md:p-8">
                  <h3 className="text-[18px] font-medium leading-[1.3]">{stream.stream}</h3>
                  <p className="mt-2.5 text-[12.5px] font-medium uppercase tracking-[0.08em] text-ink-soft/80">
                    {stream.path}
                  </p>
                  <p className="mt-4 text-[14.5px] leading-[1.75] text-ink-soft">{stream.body}</p>
                </li>
              ))}
            </ul>

            <Qualifier muted>
              Aero Intelli does not describe its systems as zero waste. The objective is to
              minimise waste generation and maximise resource recovery wherever it is technically
              and economically feasible.
            </Qualifier>
          </div>
        </section>

        {/* ------------------------------------------------------- biodiversity */}
        <section
          id="biodiversity"
          aria-labelledby="biodiversity-heading"
          className="relative overflow-hidden border-y border-hairline bg-surface-muted"
        >
          {/* Terrain contour lines. Topographic rather than botanical — the point
              is the land the site sits in, not a decorative leaf. */}
          <div
            aria-hidden="true"
            data-parallax="0.15"
            className="pointer-events-none absolute inset-x-0 bottom-0 opacity-[0.5]"
          >
            <svg viewBox="0 0 1200 220" className="h-auto w-full text-hairline-strong">
              {[0, 26, 52, 78, 104, 130].map((offset) => (
                <path
                  key={offset}
                  d={`M 0 ${160 - offset * 0.35} C 200 ${120 - offset * 0.5}, 420 ${190 - offset * 0.3}, 640 ${150 - offset * 0.45} S 1020 ${110 - offset * 0.4}, 1200 ${165 - offset * 0.35}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              ))}
            </svg>
          </div>

          <div className={`${SHELL} relative py-20 md:py-28`}>
            <SectionHeader
              index="10"
              label="Biodiversity"
              title={["Technology that works", "with natural systems"]}
              intro="Controlled production does not exist apart from the landscape around it. Siting, land use and the surrounding catchment are part of the same decision."
            />

            <div className="mt-12">
              <CapabilityList items={biodiversityCommitments} />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------- food systems */}
        <section aria-labelledby="food-heading">
          <div className={`${SHELL} py-20 md:py-28`}>
            <SectionHeader
              index="11"
              label="Food systems"
              title={["Shorter, smarter", "food systems"]}
              intro="Production is one stage of a longer chain. Losses accumulate across all of it."
            />

            <div className="mt-10">
              <FlowRail steps={foodSystemChain} />
            </div>

            <div className="mt-10">
              <CapabilityList items={foodSystemGoals} />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ pillars */}
        <section aria-labelledby="pillars-heading" className="border-y border-hairline">
          <div className={`${SHELL} py-20 md:py-28`}>
            <SectionHeader
              index="12"
              label="Pillars"
              title={["Six pillars"]}
              intro="Every design decision on this page reports into one of these six."
            />

            <ul data-reveal-group className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sustainabilityPillars.map((pillar, index) => (
                <li
                  key={pillar.id}
                  data-reveal-item
                  className="relative overflow-hidden rounded-[18px] border border-hairline bg-surface p-6 md:p-7"
                >
                  {/* The index is a design element, held well below full opacity
                      so it never competes with the name set over it. */}
                  <span
                    aria-hidden="true"
                    data-editorial-number
                    className="pointer-events-none absolute -bottom-8 -right-2 text-[120px] font-medium leading-none tracking-[-0.05em] text-ink opacity-[0.06]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <span className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-ink-soft">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-[22px] font-medium tracking-[-0.02em]">
                      {pillar.name}
                    </h3>
                    <p className="mt-3 border-t border-hairline pt-3.5 text-[14px] leading-[1.7] text-ink-soft">
                      {pillar.focus}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ------------------------------------------------------------ metrics */}
        <section id="metrics" aria-labelledby="metrics-heading" className="bg-surface-muted">
          <div className={`${SHELL} py-20 md:py-28`}>
            <SectionHeader
              index="13"
              label="Measurement"
              title={["Measure what", "matters"]}
              intro="A sustainability claim is only as good as the measurement behind it. This is what Aero Intelli intends to measure, published before there is anything flattering to report."
            />

            <div className="mt-12">
              <MetricsExplorer />
            </div>

            <div className="mt-12">
              <SystemStatusPanel />
            </div>

            <div className="mt-12">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                The sequence
              </p>
              <div className="mt-4">
                <FlowRail steps={measurementSequence} />
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- index */}
        <section aria-labelledby="index-heading" className="border-y border-hairline">
          <div className={`${SHELL} py-20 md:py-28`}>
            <SectionHeader
              index="14"
              label="Index"
              title={["System", "efficiency index"]}
              intro="A composite index drawn from the Aero Intelli platform will report system performance across these categories as operating data accumulates."
            />

            <ul className="mt-12 space-y-4 md:max-w-[760px]">
              {indexCategories.map((category) => (
                <li key={category}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-[14.5px] font-medium">{category}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft/70">
                      Data not yet available
                    </span>
                  </div>
                  {/* Empty rail. It stays empty until the platform reports a value. */}
                  <div
                    aria-hidden="true"
                    className="mt-2 h-[6px] w-full rounded-full border border-hairline bg-surface-muted"
                  />
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[760px] text-[15px] leading-[1.8] text-ink-soft">
              The rails are empty deliberately. Filling them with estimated scores would make this
              section decorative, and would undermine every measured figure published after it.
            </p>
          </div>
        </section>

        {/* ----------------------------------------------------------- projects */}
        <section aria-labelledby="projects-heading" className="bg-surface-muted">
          <div className={`${SHELL} py-20 md:py-28`}>
            <SectionHeader
              index="15"
              label="Projects"
              title={["Sustainability", "in practice"]}
              intro="Project results are published here with the baseline they were measured against, so an improvement can be checked rather than taken on trust."
            />

            <div className="mt-12">
              <ProjectRail />
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- r&d */}
        <section aria-labelledby="research-heading" className="border-y border-hairline">
          <div className={`${SHELL} py-20 md:py-28`}>
            <SectionHeader
              index="16"
              label="Research"
              title={["Engineering the next generation", "of sustainable systems"]}
              intro="Active and intended research directions, each tied to a resource constraint rather than to a technology trend."
            />

            <ul data-reveal-group className="mt-12 flex flex-wrap gap-2.5">
              {researchAreas.map((area) => (
                <li
                  key={area}
                  data-reveal-item
                  className="rounded-full border border-hairline-strong bg-surface px-4 py-2 text-[13.5px]"
                >
                  {area}
                </li>
              ))}
            </ul>

            <Link
              href="/research"
              className="mt-10 inline-flex items-center gap-2 text-[14.5px] font-medium underline-offset-4 hover:underline"
            >
              Research &amp; development
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* -------------------------------------------------------- disclosures */}
        <section aria-labelledby="disclosures-heading">
          <div className={`${SHELL} py-20 md:py-28`}>
            <SectionHeader
              index="17"
              label="Reporting"
              title={["Reports", "and disclosures"]}
              intro="Reporting begins when there is measured performance to report. These are the disclosures planned."
            />

            <ul
              data-reveal-group
              className="mt-12 grid gap-px overflow-hidden rounded-[18px] border border-hairline bg-hairline md:grid-cols-2"
            >
              {plannedDisclosures.map((disclosure) => (
                <li key={disclosure.title} data-reveal-item className="bg-surface p-5 md:p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[16.5px] font-medium leading-[1.3]">{disclosure.title}</h3>
                    <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft/70">
                      Not published
                    </span>
                  </div>
                  <p className="mt-2.5 text-[14px] leading-[1.7] text-ink-soft">
                    {disclosure.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ------------------------------------------------------------- future */}
        <section id="future" aria-labelledby="future-heading" className="bg-legal-dark">
          <div className={`${SHELL} py-20 md:py-32`}>
            <SectionLabel index="18" label="Future" tone="dark" />

            <RevealText
              lines={["The future", "is connected."]}
              className="mt-6 text-[38px] font-medium leading-[1.04] tracking-[-0.035em] text-footer-text md:text-[68px] lg:text-[84px]"
            />

            <ul data-reveal-group className="mt-14 flex flex-wrap gap-x-3 gap-y-3">
              {connectedDomains.map((domain) => (
                <li
                  key={domain}
                  data-reveal-item
                  className="rounded-full border border-white/15 px-5 py-2.5 text-[15px] font-medium text-footer-text md:text-[17px]"
                >
                  {domain}
                </li>
              ))}
            </ul>

            <p className="mt-14 max-w-[820px] border-l-2 border-accent pl-6 text-[18px] leading-[1.65] text-footer-text md:text-[24px] md:leading-[1.55]">
              Systems designed independently create waste between systems. Connected systems create
              opportunities for recovery.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- cta */}
        <section className="border-t border-white/10 bg-legal-dark">
          <div className={`${SHELL} py-20 md:py-28`}>
            <div className="max-w-[820px]">
              <RevealText
                lines={["Build a more resilient", "production system."]}
                className="text-[30px] font-medium leading-[1.1] tracking-[-0.03em] text-footer-text md:text-[46px]"
              />

              <p className="mt-6 text-[16px] leading-[1.8] text-legal-dark-muted md:text-[17.5px]">
                Explore how Aero Intelli&rsquo;s intelligent food, water and cultivation
                technologies can support more efficient and resilient production systems.
              </p>

              <div className="mt-10 flex flex-col gap-2.5 sm:flex-row">
                <MagneticButton>
                  <Link
                    href="/solutions"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-[14px] bg-accent px-6 text-[14.5px] font-semibold text-ink transition-colors duration-200 hover:bg-accent-deep"
                  >
                    Explore solutions
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    href="/contact#enquiry-form"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-[14px] border border-white/20 px-6 text-[14.5px] font-semibold text-footer-text transition-colors duration-200 hover:bg-white/[0.06]"
                  >
                    Talk to Aero Intelli
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ScrollScaffold>
  );
}
