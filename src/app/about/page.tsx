import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AboutScaffold } from "@/components/about/AboutScaffold";
import {
  BridgeDiagram,
  EcosystemMap,
  EquationDiagram,
  HorizonTimeline,
  ProcessTimeline,
  StackDiagram,
} from "@/components/about/diagrams";
import { HeroDiagram } from "@/components/about/HeroDiagram";
import { HeroVideoBackground } from "@/components/about/HeroVideoBackground";
import { AmbientVideo } from "@/components/about/AmbientVideo";
import { SystemStage } from "@/components/about/SystemStage";
import { ValuesList } from "@/components/about/ValuesList";
import { ComingSoonButton } from "@/components/shared/ComingSoonButton";
import { MagneticButton, RevealText, SectionLabel } from "@/components/shared/primitives";
import { SHELL } from "@/components/shared/shell";
import { findUnreleasedSection } from "@/config/launchStatus";
import {
  buildDomains,
  evidenceBasis,
  focusDomains,
  founder,
  intersectionFields,
  keyFacts,
  missionPillars,
  missionStatement,
  principles,
  researchDirections,
  responseStatement,
  sustainabilityThemes,
  systemPressures,
  teamDisciplines,
  visionStatement,
} from "@/content/about";

export const metadata: Metadata = {
  title: "About Aero Intelli | Corporate Overview & Systems Engineering",
  description:
    "Aero Intelli is an enterprise deep-tech corporation engineering intelligent closed-loop systems for controlled food production, advanced aquaculture, industrial water reclamation, and autonomous resource infrastructure.",
  alternates: { canonical: "/about" },
};

/**
 * Section Header: Refined corporate typography with clear indexing and optional dark mode.
 */
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
    <header className="max-w-[840px]">
      <div className="flex items-center gap-3">
        <SectionLabel index={index} label={label} tone={tone} />
      </div>

      <RevealText
        lines={title}
        split="letters"
        className={`mt-5 text-[28px] font-medium leading-[1.12] tracking-[-0.03em] sm:text-[34px] md:text-[44px] lg:text-[48px] ${
          dark ? "text-footer-text" : "text-ink"
        }`}
      />

      {intro ? (
        <p
          className={`mt-5 max-w-[720px] text-[15.5px] leading-[1.8] md:text-[17px] md:leading-[1.8] ${
            dark ? "text-legal-dark-muted" : "text-ink-soft"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </header>
  );
}

/**
 * Pill list for technical terms and capability registers.
 */
function TermList({
  items,
  tone = "light",
}: {
  items: string[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <ul data-reveal-group className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          data-reveal-item
          className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-colors ${
            dark
              ? "border-white/15 bg-white/[0.04] text-legal-dark-muted hover:border-white/30 hover:text-white"
              : "border-hairline bg-surface text-ink-soft hover:border-hairline-strong hover:text-ink"
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-accent" : "bg-accent-deep"}`}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function comingSoonCopy(name: string) {
  return {
    title: `${name} is launching soon`,
    body: `The ${name.toLowerCase()} section is currently being prepared for enterprise release. For detailed technical inquiries or facility dossiers, contact our systems engineering team directly.`,
  };
}

function PrimaryLink({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  const className = dark
    ? "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-accent text-ink px-7 text-[14px] font-semibold tracking-[-0.01em] shadow-sm transition-all duration-200 hover:bg-accent-deep hover:shadow-md"
    : "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-ink text-surface-muted px-7 text-[14px] font-medium tracking-[-0.01em] shadow-sm transition-all duration-200 hover:bg-ink/90 hover:shadow-md";

  const unreleased = findUnreleasedSection(href);

  return (
    <MagneticButton>
      {unreleased ? (
        <ComingSoonButton
          className={className}
          label={children}
          {...comingSoonCopy(unreleased.name)}
          action={{ href: "/contact", label: "Talk to us" }}
        />
      ) : (
        <Link href={href} className={className}>
          <span>{children}</span>
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.333 8h9.334M8.667 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      )}
    </MagneticButton>
  );
}

function SecondaryLink({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  const className = `inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border px-7 text-[14px] font-medium tracking-[-0.01em] transition-all duration-200 ${
    dark
      ? "border-white/20 bg-white/[0.04] text-white hover:border-white/40 hover:bg-white/[0.08]"
      : "border-hairline-strong bg-surface text-ink hover:border-ink/40 hover:bg-surface-muted"
  }`;

  const unreleased = findUnreleasedSection(href);

  return (
    <MagneticButton>
      {unreleased ? (
        <ComingSoonButton
          className={className}
          label={children}
          {...comingSoonCopy(unreleased.name)}
          action={{ href: "/contact", label: "Talk to us" }}
        />
      ) : (
        <Link href={href} className={className}>
          <span>{children}</span>
        </Link>
      )}
    </MagneticButton>
  );
}

export default function Page() {
  return (
    <AboutScaffold>
      {/* ── 00 · Corporate Hero with Realistic Background Video ────────── */}
      <section
        data-hero-scrub
        className="relative overflow-hidden bg-black text-white pt-[116px] pb-16 md:pt-[140px] md:pb-24 lg:pt-[160px] lg:pb-28"
      >
        {/* Background Video — Bright, vivid, clean, zero text overlaid on top of video */}
        <HeroVideoBackground />

        <div className={`${SHELL} relative z-10`}>
          <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,460px)] xl:items-center xl:gap-14 2xl:grid-cols-[minmax(0,1fr)_minmax(0,500px)] 2xl:gap-16">
            <div data-hero-headline className="relative z-10">
              {/* Executive Announcement Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 shadow-sm backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                  Closed-Loop Agritech &amp; Resource Systems
                </span>
              </div>

              <RevealText
                as="h1"
                split="letters"
                lines={[
                  "Engineering the future",
                  "of food, water and",
                  "intelligent infrastructure.",
                ]}
                className="mt-6 text-[32px] font-medium leading-[1.08] tracking-[-0.035em] text-white min-[360px]:text-[36px] min-[414px]:text-[40px] md:mt-8 md:text-[54px] lg:text-[58px]"
              />

              <p className="mt-6 max-w-[620px] text-[16px] leading-[1.8] text-white/85 md:mt-7 md:text-[17.5px] md:leading-[1.85]">
                Aero Intelli is a deep-tech systems engineering corporation developing
                closed-loop infrastructure for controlled food cultivation, recirculating
                aquaculture, industrial water reclamation, and telemetry-guided biological
                intelligence.
              </p>

              {/* Action buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5 md:mt-10">
                <PrimaryLink href="/technology" tone="dark">Explore our technologies</PrimaryLink>
                <SecondaryLink href="#leadership" tone="dark">Corporate leadership</SecondaryLink>
                <SecondaryLink href="/solutions" tone="dark">View solutions</SecondaryLink>
              </div>

              {/* Quick Jump Navigation Pill Bar */}
              <div className="mt-10 border-t border-white/15 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                  Executive Briefing Directory
                </p>
                <nav
                  aria-label="Section shortcuts"
                  className="mt-3 flex flex-wrap gap-2 text-[12px] font-medium text-white/80"
                >
                  <a
                    href="#who"
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 transition-colors hover:border-white hover:text-white"
                  >
                    01 Identity
                  </a>
                  <a
                    href="#facilities"
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 transition-colors hover:border-white hover:text-white"
                  >
                    02 Facilities
                  </a>
                  <a
                    href="#why"
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 transition-colors hover:border-white hover:text-white"
                  >
                    03 Imperatives
                  </a>
                  <a
                    href="#build"
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 transition-colors hover:border-white hover:text-white"
                  >
                    04 Disciplines
                  </a>
                  <a
                    href="#system"
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 transition-colors hover:border-white hover:text-white"
                  >
                    05 The Loop
                  </a>
                  <a
                    href="#leadership"
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 transition-colors hover:border-white hover:text-white"
                  >
                    06 Leadership
                  </a>
                  <a
                    href="#stack"
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 transition-colors hover:border-white hover:text-white"
                  >
                    07 Tech Stack
                  </a>
                  <a
                    href="#evidence"
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 transition-colors hover:border-white hover:text-white"
                  >
                    08 Governance
                  </a>
                </nav>
              </div>
            </div>

            {/* System Pipeline Architecture Figure */}
            <figure
              data-hero-visual
              className="mx-auto w-full max-w-[540px] rounded-[22px] border border-white/20 bg-black/60 p-5 shadow-panel backdrop-blur-md min-[414px]:p-6 xl:mx-0 xl:max-w-none"
            >
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <figcaption className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                    SYSTEM PIPELINE TOPOLOGY
                  </figcaption>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10.5px] font-semibold text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  CLOSED LOOP
                </span>
              </div>

              <div className="pt-4">
                <HeroDiagram />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* ── 01 · Strategic Positioning & Identity ──────────────────────── */}
      <section id="who" className="border-t border-hairline bg-surface py-20 md:py-28">
        <div className={SHELL}>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:gap-16">
            <div>
              <SectionHeader
                index="01"
                label="Strategic Identity"
                title={["A deep-tech systems corporation,", "not a conventional farm."]}
                intro="Aero Intelli operates precisely where biological systems, physical fluid mechanics, and algorithmic intelligence converge. Every system we deploy — aquaculture, aeroponics, hydroponics, industrial water treatment — is co-engineered alongside the telemetry and sensory intelligence that govern it."
              />

              <div className="mt-8 space-y-4 text-[15.5px] leading-[1.8] text-ink-soft md:text-[17px]">
                <p>
                  Conventional agricultural technology treats farming, water treatment, and software
                  as disjointed vendor silos. We treat them as a single thermodynamic and biological
                  budget: measure the resource, design around its physics, and govern operations
                  with empirical data.
                </p>
                <p>
                  Whether regulating dissolved oxygen within a 500,000-litre recirculating aquaculture
                  tank or micronutrient dosing across an aeroponic root zone, the core philosophy
                  is uniform: instrument completely, close the loop, and automate with integrity.
                </p>
              </div>

              {/* The Intersections Grid */}
              <div className="mt-10 rounded-[18px] border border-hairline bg-surface-muted p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                  Core Engineering Intersections
                </p>
                <div className="mt-4">
                  <TermList items={intersectionFields} />
                </div>
              </div>
            </div>

            {/* Strategic Pillars Sidebar */}
            <aside className="space-y-6 lg:pt-14">
              <div className="rounded-[18px] border border-hairline-strong bg-surface p-6 shadow-sm">
                <div className="flex items-center gap-2 border-b border-hairline pb-3">
                  <span className="h-2 w-2 rounded-full bg-accent-deep" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
                    Primary Operational Focus
                  </p>
                </div>
                <ul className="mt-4 space-y-3">
                  {focusDomains.map((domain, idx) => (
                    <li
                      key={domain}
                      className="flex items-center justify-between text-[15px] font-medium tracking-[-0.01em] text-ink"
                    >
                      <span>{domain}</span>
                      <span className="font-mono text-[11px] text-ink-soft/70">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[18px] border border-hairline bg-surface-muted p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                  Corporate Architecture
                </p>
                <p className="mt-2 text-[14px] leading-[1.7] text-ink-soft">
                  Structured as a unified engineering provider across hardware fabrication,
                  biological cycle design, and facility automation software.
                </p>
                <div className="mt-4 pt-4 border-t border-hairline">
                  <Link
                    href="/technology"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink hover:underline"
                  >
                    <span>Read Technology Architecture</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── 02 · Realistic Corporate Facilities & Engineering Gallery ───── */}
      {/* Clean images with ZERO text overlay on the images */}
      <section id="facilities" className="border-t border-hairline bg-surface-muted py-20 md:py-28">
        <div className={SHELL}>
          <SectionHeader
            index="02"
            label="Facility Infrastructure & Operations"
            title={["Physical hardware engineered for", "controlled biological performance."]}
            intro="A visual look into our operating environments, biosecure aquaculture loops, precision root chambers, and automated instrumentation arrays."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Vertical Farming — Clean, no text on image */}
            <div className="group overflow-hidden rounded-[22px] border border-hairline bg-surface shadow-sm transition-all duration-300 hover:border-hairline-strong hover:shadow-panel">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/images/vertical-farming.jpg"
                  alt="Controlled-Environment Vertical Farm"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[19px] font-medium tracking-[-0.02em] text-ink">
                  Controlled Indoor Cultivation
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-ink-soft">
                  Multi-tier automated vertical farming with dynamic spectral LED tuning,
                  sub-millimeter nutrient misting, and continuous climate regulation.
                </p>
              </div>
            </div>

            {/* Card 2: Aquaculture RAS — Clean, no text on image */}
            <div className="group overflow-hidden rounded-[22px] border border-hairline bg-surface shadow-sm transition-all duration-300 hover:border-hairline-strong hover:shadow-panel">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/images/aquaculture-ras.jpg"
                  alt="Recirculating Aquaculture Tank Systems"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[19px] font-medium tracking-[-0.02em] text-ink">
                  Recirculating Aquaculture (RAS)
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-ink-soft">
                  Circular containment habitats with continuous oxygenation, hydrodynamic
                  self-cleaning velocities, and biological nitrification loops.
                </p>
              </div>
            </div>

            {/* Card 3: Telemetry & Lab Engineering — Clean, no text on image */}
            <div className="group overflow-hidden rounded-[22px] border border-hairline bg-surface shadow-sm transition-all duration-300 hover:border-hairline-strong hover:shadow-panel">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/images/telemetry-engineering.jpg"
                  alt="Telemetry & Systems Engineering Laboratory"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[19px] font-medium tracking-[-0.02em] text-ink">
                  In-Situ Telemetry &amp; Automation
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-ink-soft">
                  Engineers monitoring real-time chemical, electrical, and hydraulic sensor buses,
                  feeding predictive neural networks with continuous ground truth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 · Global Macro Pressures & The Corporate Imperative ─────── */}
      <section id="why" className="relative overflow-hidden bg-legal-dark py-24 md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
        />

        <div className={SHELL}>
          <SectionHeader
            index="03"
            label="Macro Pressures & Imperatives"
            title={[
              "The planetary systems that produce",
              "our vital resources are reaching",
              "critical inflection points.",
            ]}
            tone="dark"
            intro="Industrial farming, open-water aquaculture, and regional municipal reservoirs operate under severe thermodynamic strain. The next decade requires moving from fragile extractive models to biosecure, closed-loop facilities."
          />

          {/* Corporate Challenge & System Imperative Matrix */}
          <div data-stage-track className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {systemPressures.map((pressure, index) => (
              <div
                key={pressure}
                data-stage
                className="group relative rounded-[18px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold text-accent">
                    IMP-{String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/60 group-hover:bg-accent" />
                </div>
                <h3 className="mt-4 text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-footer-text">
                  {pressure}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.65] text-legal-dark-muted">
                  Requires systematic closed-loop redesign, rigorous sensory instrumentation,
                  and automated multi-variable control to guarantee long-term operational resilience.
                </p>
              </div>
            ))}
          </div>

          {/* Response Declaration Panel */}
          <div className="mt-14 rounded-[22px] border border-white/15 bg-white/[0.04] p-8 md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Our Core Thesis
            </p>
            <p className="mt-4 text-[20px] font-medium leading-[1.5] text-footer-text md:text-[24px]">
              &ldquo;{responseStatement}&rdquo;
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
              <span className="text-[12px] font-medium text-legal-dark-muted">
                Executive Action Strategy:
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11.5px] text-footer-text">
                Full Water Recirculation
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11.5px] text-footer-text">
                Zero Soil Leaching
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11.5px] text-footer-text">
                Real-Time Telemetry
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 · What We Build ─────────────────────────────────────────── */}
      {/* "Domain Platform 01,02,03,04,05" removed as requested */}
      {/* Clean images with zero text overlays */}
      <section id="build" className="border-t border-hairline bg-surface-muted py-24 md:py-32">
        <div className={SHELL}>
          <SectionHeader
            index="04"
            label="What We Build"
            title={["Industrial production platforms,", "engineered from first principles."]}
            intro="Aero Intelli engineers five foundational technology domains. Rather than standalone services, these operate as interlocking platforms that convert raw inputs into predictable biological yield."
          />

          <div className="mt-14 space-y-12 md:mt-20 md:space-y-16">
            {buildDomains.map((domain, index) => {
              const domainImages = [
                "/images/vertical-farming.jpg",
                "/images/aquaculture-ras.jpg",
                "/images/water-treatment.jpg",
                "/images/telemetry-engineering.jpg",
                "/images/hydroponics-facility.jpg",
              ];
              const domainImg = domainImages[index] || "/images/vertical-farming.jpg";

              return (
                <article
                  key={domain.id}
                  className="group overflow-hidden rounded-[24px] border border-hairline bg-surface shadow-sm transition-all duration-300 hover:border-hairline-strong hover:shadow-panel"
                >
                  <div className="grid gap-0 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)_minmax(0,340px)]">
                    {/* Left: Domain Intro — no "Domain Platform 01" text */}
                    <div className="p-7 md:p-9">
                      <h3 className="text-[26px] font-medium leading-[1.15] tracking-[-0.03em] text-ink md:text-[32px]">
                        {domain.name}
                      </h3>

                      <p className="mt-4 text-[15px] leading-[1.8] text-ink-soft md:text-[16px]">
                        {domain.summary}
                      </p>

                      <div className="mt-8">
                        <Link
                          href="/solutions"
                          className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-ink transition-colors hover:text-accent-deep"
                        >
                          <span>Explore {domain.name} Solutions</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>

                    {/* Middle: Capabilities */}
                    <div className="border-t border-hairline p-7 md:p-9 lg:border-t-0 lg:border-l">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                        Core Capabilities
                      </p>

                      <ul data-reveal-group className="mt-5 space-y-2.5">
                        {domain.capabilities.map((capability) => (
                          <li
                            key={capability}
                            data-reveal-item
                            className="flex items-center gap-3 rounded-[12px] border border-hairline bg-surface-muted p-3 text-[14px] leading-[1.5] text-ink"
                          >
                            <svg
                              className="h-4 w-4 shrink-0 text-emerald-600"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
                              <path
                                d="M5 8l2 2 4-4"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="font-medium">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Clean Realistic Image without any text on top */}
                    <div className="relative min-h-[220px] border-t border-hairline lg:border-t-0 lg:border-l">
                      <Image
                        src={domainImg}
                        alt={domain.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 05 · The Closed-Loop System Architecture ──────────────────── */}
      {/* Clean video without any text overlays */}
      <section id="system" className="relative bg-legal-dark py-24 md:py-32">
        <div className={SHELL}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:items-end">
            <div>
              <SectionHeader
                index="05"
                label="The System Architecture"
                title={["Every resource stream connects", "back into the production cycle."]}
                intro="Water enters, is conditioned, sustains high-density aquatic biomass, surrenders its enriched nutrient load to soilless cultivation, and is clarified for recirculation. Data is harvested at each node to guide predictive adjustment."
                tone="dark"
              />

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/20 bg-white/[0.05] px-4 py-1.5 text-[12px] text-footer-text">
                  10 Interconnected Stages
                </span>
                <span className="rounded-full border border-white/20 bg-white/[0.05] px-4 py-1.5 text-[12px] text-footer-text">
                  Continuous Mass-Balance Conservation
                </span>
                <span className="rounded-full border border-white/20 bg-white/[0.05] px-4 py-1.5 text-[12px] text-footer-text">
                  Zero Waste Runoff
                </span>
              </div>
            </div>

            {/* Clean Recirculating Water Video Loop — zero text on top */}
            <AmbientVideo
              src="/videos/water-flow.mp4"
              poster="/images/aquaculture-ras.jpg"
              className="aspect-[16/9] w-full border border-white/20 shadow-panel"
            />
          </div>
        </div>

        {/* Interactive 10-Stage System Stage Console */}
        <div className={`${SHELL} mt-12`}>
          <SystemStage />
        </div>
      </section>

      {/* ── 06 · Corporate Governance & Executive Leadership ───────────── */}
      {/* Image removed for Krishanth as requested */}
      {/* "Executive Board & Key Officers Leadership Directory" text removed as requested */}
      <section
        id="leadership"
        className="border-t border-hairline bg-surface-muted py-24 md:py-32"
      >
        <div className={SHELL}>
          <SectionHeader
            index="06"
            label="Corporate Governance & Leadership"
            title={["Executive leadership,", "disciplined engineering."]}
            intro="Aero Intelli is steered by founders and engineers with deep expertise spanning physical hydraulics, biological cycle control, software architectures, and corporate governance."
          />

          {/* Founder & CEO Spotlight Card — Pure Corporate Plate, No Photo */}
          <div className="mt-14 rounded-[26px] border border-hairline-strong bg-surface p-7 shadow-panel md:p-11">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-14">
              {/* Executive Plate & Monogram Crest — No Photo */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-[22px] border border-hairline-strong bg-gradient-to-b from-ink to-legal-dark p-7 text-white shadow-md">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-accent/10 blur-2xl"
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    AERO INTELLI
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    FOUNDER &amp; CEO
                  </span>
                </div>

                {/* Central Corporate Insignia */}
                <div className="relative z-10 my-10 flex flex-col items-center justify-center text-center">
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/25 bg-white/[0.08] shadow-inner">
                    <span className="font-mono text-[34px] font-semibold tracking-[-0.03em] text-accent">
                      KR
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-ink bg-emerald-400"
                    />
                  </div>
                  <h4 className="mt-4 text-[22px] font-semibold tracking-[-0.02em] text-white">
                    {founder.name}
                  </h4>
                  <p className="mt-1 text-[13px] text-accent font-medium">
                    {founder.role}
                  </p>
                </div>

                <div className="relative z-10 border-t border-white/15 pt-4 text-center">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">
                    Systems Architecture &amp; Deep Tech
                  </p>
                </div>
              </div>

              {/* Founder Statement & Credentials */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-muted px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                    Executive Mandate
                  </div>

                  <h3 className="mt-4 text-[28px] font-medium leading-[1.18] tracking-[-0.03em] text-ink md:text-[36px]">
                    {founder.name}
                  </h3>
                  <p className="mt-1.5 text-[15px] font-semibold text-ink-soft">
                    {founder.role}
                  </p>

                  <blockquote className="mt-6 border-l-2 border-ink pl-5 text-[16.5px] leading-[1.8] font-normal text-ink md:text-[18px] md:leading-[1.85]">
                    &ldquo;{founder.message}&rdquo;
                  </blockquote>

                  <p className="mt-5 text-[14.5px] leading-[1.7] text-ink-soft">
                    {founder.caption}
                  </p>
                </div>

                {/* Team Disciplines */}
                <div className="mt-8 border-t border-hairline pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                    Multidisciplinary Engineering Oversight
                  </p>
                  <div className="mt-3.5">
                    <TermList items={teamDisciplines} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07 · Technology Philosophy & Physical-Digital Stack ────────── */}
      <section id="stack" className="bg-legal-dark py-24 md:py-32">
        <div className={SHELL}>
          <SectionHeader
            index="07"
            label="Technology Architecture"
            title={["Physical infrastructure at the base,", "autonomous intelligence at the apex."]}
            intro="Instrumentation retrofitted after construction only reads the system it was bolted onto. We embed multi-variable sensory acquisition into physical fabrication so intelligence is an innate property."
            tone="dark"
          />

          <div className="mt-14">
            <StackDiagram />
          </div>

          <div className="mt-10 rounded-[18px] border border-white/10 bg-white/[0.03] p-6 text-legal-dark-muted">
            <p className="text-[14.5px] leading-[1.75]">
              Every actuation command calculated at the decision tier returns directly to the
              physical valve, heater, aerator, or doser — creating an uncompromised, self-tuning
              closed control loop.
            </p>
          </div>
        </div>
      </section>

      {/* ── 08 · Physical to Digital Bridge ────────────────────────────── */}
      <section id="bridge" className="border-t border-hairline bg-surface py-24 md:py-32">
        <div className={SHELL}>
          <SectionHeader
            index="08"
            label="The Physical-to-Digital Bridge"
            title={["A physical production asset", "and a digital twin at once."]}
            intro="Physical hardware grows the crop and shelters the aquatic stock. Digital models make operating dynamics transparent and predictive. Neither is a complete product without the other."
          />

          <div className="mt-14">
            <BridgeDiagram />
          </div>

          {/* Equation summary */}
          <div className="mt-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
              The Systems Synthesis
            </p>
            <div className="mt-4">
              <EquationDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* ── 09 · Corporate Operating Principles & Values ───────────────── */}
      <section
        id="philosophy"
        className="border-t border-hairline bg-surface-muted py-24 md:py-32"
      >
        <div className={SHELL}>
          <SectionHeader
            index="09"
            label="Operating Principles"
            title={["How we think: Systems first,", "evidence always."]}
            intro="We reject speculative claims and vendor bloat. These five operating principles govern how our engineers design, deploy, and evaluate every facility."
          />

          <ol data-stage-track className="mt-14 space-y-6 md:mt-20 md:space-y-8">
            {principles.map((principle) => (
              <li
                key={principle.index}
                data-stage
                className="rounded-[22px] border border-hairline bg-surface p-7 shadow-sm transition-all duration-300 hover:border-hairline-strong md:p-9"
              >
                <div className="grid gap-4 lg:grid-cols-[minmax(0,180px)_minmax(0,1fr)] lg:gap-12">
                  <div className="flex items-center gap-3 lg:block">
                    <span className="font-mono text-[14px] font-semibold text-emerald-700">
                      PRINCIPLE {principle.index}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[22px] font-medium leading-[1.2] tracking-[-0.025em] text-ink md:text-[28px]">
                      {principle.title}
                    </h3>
                    <p className="mt-3 max-w-[680px] text-[15.5px] leading-[1.8] text-ink-soft md:text-[16.5px]">
                      {principle.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Corporate Core Values */}
          <div className="mt-20">
            <div className="border-t border-hairline pt-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                Corporate Core Values
              </p>
              <h3 className="mt-2 text-[26px] font-medium tracking-[-0.025em] text-ink md:text-[32px]">
                Six Values, Not Twelve
              </h3>
              <p className="mt-2 max-w-[620px] text-[15px] text-ink-soft">
                Clear ethical and technical commitments that guide our client relationships and
                engineering rigor.
              </p>
            </div>

            <div className="mt-8">
              <ValuesList />
            </div>
          </div>
        </div>
      </section>

      {/* ── 10 · Enterprise R&D Roadmap & Innovation Horizons ──────────── */}
      <section id="research" className="bg-legal-dark py-24 md:py-32">
        <div className={SHELL}>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-16">
            <div>
              <SectionHeader
                index="10"
                label="Innovation Pipeline"
                title={["Active R&D,", "measured progression."]}
                intro="Our internal research initiatives represent real engineering pipelines rather than press announcements. Where an innovation yields verifiable results, it is published with empirical baseline data."
                tone="dark"
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <SecondaryLink href="/knowledge" tone="dark">
                  Explore knowledge base
                </SecondaryLink>
              </div>
            </div>

            {/* Research Directions Matrix */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                Active Engineering Vectors
              </p>
              <ul
                data-reveal-group
                className="mt-4 grid gap-3 sm:grid-cols-2"
              >
                {researchDirections.map((direction, index) => (
                  <li
                    key={direction}
                    data-reveal-item
                    className="flex items-center gap-3.5 rounded-[14px] border border-white/10 bg-white/[0.03] p-4 text-footer-text transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <span className="font-mono text-[11px] font-semibold text-accent/80">
                      R&amp;D-{String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14.5px] font-medium leading-[1.4]">
                      {direction}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Three Horizons Roadmap */}
          <div className="mt-20 border-t border-white/10 pt-14">
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                Strategic Horizon Framework
              </p>
              <h3 className="mt-2 text-[26px] font-medium tracking-[-0.025em] text-footer-text md:text-[32px]">
                Long-Term Horizon Architecture
              </h3>
            </div>

            <HorizonTimeline />
          </div>
        </div>
      </section>

      {/* ── 11 · Operational Method: How We Work ───────────────────────── */}
      <section id="process" className="border-t border-hairline bg-surface py-24 md:py-32">
        <div className={SHELL}>
          <SectionHeader
            index="11"
            label="Operational Method"
            title={["Understand, engineer,", "integrate, monitor, optimise."]}
            intro="Our systematic facility delivery methodology ensures that physical fabrication and digital telemetry match the exact biological load of the target crop or aquatic species."
          />

          <div className="mt-16">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* ── 12 · Governance, Evidence & Corporate Integrity ───────────── */}
      <section id="evidence" className="border-t border-hairline bg-surface-muted py-24 md:py-32">
        <div className={SHELL}>
          <SectionHeader
            index="12"
            label="Corporate Integrity & Evidence"
            title={["Committed to empirical evidence,", "not unmeasured claims."]}
            intro="Aero Intelli does not publish inflated marketing percentages or unverified sustainability claims. Performance metrics are released exclusively when validated against empirical operating baselines."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Evidence Verification Pillars */}
            <div className="rounded-[22px] border border-hairline bg-surface p-7 shadow-sm md:p-9">
              <h3 className="text-[20px] font-medium tracking-[-0.02em] text-ink md:text-[22px]">
                The Four Pillars of Verification
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.7] text-ink-soft">
                Before any performance efficiency is verified, our systems must satisfy
                the following empirical audit criteria:
              </p>

              <ul data-reveal-group className="mt-6 space-y-3.5">
                {evidenceBasis.map((basis) => (
                  <li
                    key={basis}
                    data-reveal-item
                    className="flex items-center gap-3 rounded-[12px] border border-hairline bg-surface-muted px-4 py-3 text-[14.5px] text-ink"
                  >
                    <svg
                      className="h-4 w-4 shrink-0 text-emerald-600"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M13.333 4L6 11.333 2.667 8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-medium">{basis}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Operational Framework & System Scope */}
            <div className="rounded-[22px] border border-hairline bg-surface p-7 shadow-sm md:p-9">
              <h3 className="text-[20px] font-medium tracking-[-0.02em] text-ink md:text-[22px]">
                Operational Framework &amp; Technical Scope
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.7] text-ink-soft">
                Continuous measurement, closed-loop engineering, and scalable production disciplines.
              </p>

              <dl className="mt-6 divide-y divide-hairline rounded-[16px] border border-hairline bg-surface-muted overflow-hidden">
                {keyFacts.map((fact) => (
                  <div key={fact.term} className="p-4 sm:flex sm:items-center sm:justify-between">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                      {fact.term}
                    </dt>
                    <dd className="mt-1 font-medium text-[14.5px] text-ink sm:mt-0 sm:text-right">
                      {fact.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── 13 · Executive Call to Action ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink py-24 text-surface-muted md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        />

        <div className={SHELL}>
          <div className="max-w-[860px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Commercial Engagement
            </div>

            <RevealText
              lines={[
                "Ready to engineer more intelligent,",
                "resilient resource infrastructure?",
              ]}
              className="mt-7 text-[32px] font-medium leading-[1.1] tracking-[-0.035em] text-footer-text sm:text-[40px] md:text-[54px]"
            />

            <p className="mt-7 max-w-[720px] text-[16px] leading-[1.8] text-footer-secondary md:text-[18px]">
              Aero Intelli partners with enterprise agriculture operators, commercial aquaculture
              facilities, municipal resource planners, and institutional investors to deploy
              state-of-the-art closed-loop production systems.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PrimaryLink href="/contact" tone="dark">Schedule Executive Consultation</PrimaryLink>
              <SecondaryLink href="/solutions" tone="dark">
                Explore Commercial Solutions
              </SecondaryLink>
              <SecondaryLink href="/sustainability" tone="dark">
                Sustainability Architecture
              </SecondaryLink>
            </div>

            {/* Corporate Contact Note */}
            <div className="mt-14 border-t border-white/15 pt-8 flex flex-wrap items-center justify-between gap-4 text-[13px] text-footer-muted">
              <p>
                Aero Intelli · Intelligent Resource Infrastructure
              </p>
              <Link
                href="/contact"
                className="font-medium text-accent hover:underline"
              >
                Direct Executive Inquiries →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </AboutScaffold>
  );
}
