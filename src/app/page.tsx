import type { Metadata } from "next";
import Link from "next/link";

import { HomeScaffold } from "@/components/home/HomeScaffold";
import { LayerScene } from "@/components/home/LayerScene";
import { TiltCard } from "@/components/home/TiltCard";
import { MagneticButton, RevealText, SectionLabel } from "@/components/shared/primitives";
import { SHELL } from "@/components/shared/shell";
import { buildAlternates } from "@/config/site";
import {
  capabilities,
  evidenceBasis,
  evidenceNote,
  heroHeadline,
  heroLede,
  method,
  positions,
  stack,
} from "@/content/home";

/**
 * Home.
 *
 * The page is a server component throughout. Every animated element is marked
 * with a data attribute and driven from `HomeScaffold`, which is the only client
 * module the route pulls in besides the two that genuinely need pointer state —
 * so the markup, the copy and the layout are all rendered on the server and
 * arrive readable whether or not the JavaScript does.
 *
 * Section rhythm alternates light, muted and dark in the same order the about
 * page uses. That is the whole of the visual system: a shared gutter, a numbered
 * section label, one heading treatment, and hairline registers. Nothing here
 * introduces a component the rest of the site does not already have.
 */

/**
 * The home page keeps the root layout's default title rather than setting its
 * own, because the template would otherwise render "Home | Aero Intelli" — the
 * one page on the site whose title should be the company, not a section.
 */
export const metadata: Metadata = {
  alternates: buildAlternates("/"),
};

/** Section heading. Local to this route, matching the about page's treatment. */
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
        split="letters"
        className={`mt-5 text-[27px] font-medium leading-[1.12] tracking-[-0.03em] md:text-[42px] lg:text-[46px] ${
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

function PrimaryLink({ href, children }: { href: string; children: string }) {
  return (
    <MagneticButton>
      <Link
        href={href}
        className="inline-flex min-h-[46px] items-center rounded-full bg-ink px-6 text-[14px] font-medium text-surface-muted transition-opacity duration-200 hover:opacity-90"
      >
        {children}
      </Link>
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

  return (
    <MagneticButton>
      <Link
        href={href}
        className={`inline-flex min-h-[46px] items-center rounded-full border px-6 text-[14px] font-medium transition-colors duration-200 ${
          dark
            ? "border-white/20 text-footer-text hover:border-white/40"
            : "border-hairline-strong hover:border-ink/40"
        }`}
      >
        {children}
      </Link>
    </MagneticButton>
  );
}

export default function Page() {
  return (
    <HomeScaffold>
      {/* 01 — Hero.

          Columns start at `xl` for the same reason the about page's do: at 1024
          a 440px scene leaves the headline too little width and the authored
          three lines wrap into five, which defeats a reveal that animates per
          authored line. */}
      <section className="bg-surface-muted pt-[104px] md:pt-[128px] lg:pt-[146px]">
        <div className={SHELL}>
          <div className="grid gap-12 pb-16 md:pb-20 lg:pb-24 xl:grid-cols-[minmax(0,1fr)_minmax(0,420px)] xl:items-center xl:gap-16 2xl:grid-cols-[minmax(0,1fr)_minmax(0,460px)]">
            <div>
              <div className="flex items-center gap-4">
                <p className="shrink-0 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  Aero Intelli
                </p>
                <span
                  aria-hidden="true"
                  data-rule
                  className="h-px flex-1 bg-hairline-strong lg:max-w-[140px]"
                />
              </div>

              <RevealText
                as="h1"
                split="letters"
                lines={heroHeadline}
                /* Sized so the three authored lines stay three lines at every
                   width. A wrapped line defeats the per-line mask. */
                className="mt-6 text-[29px] font-medium leading-[1.1] tracking-[-0.035em] min-[360px]:text-[31px] min-[414px]:text-[35px] md:mt-7 md:text-[50px] lg:text-[52px]"
              />

              <p className="mt-6 max-w-[560px] text-[15px] leading-[1.8] text-ink-soft md:mt-7 md:text-[16.5px]">
                {heroLede}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 md:mt-9">
                <PrimaryLink href="/contact">Talk to Aero Intelli</PrimaryLink>
                <SecondaryLink href="/about">How we work</SecondaryLink>
              </div>
            </div>

            <LayerScene />
          </div>
        </div>
      </section>

      {/* 02 — What we build. The tilt is a hover affordance and lives in the
          card component; the entrance is scroll-driven and lives in the scroll
          system. No element is animated by both. */}
      <section id="capabilities" className="border-t border-hairline bg-surface py-16 md:py-24">
        <div className={SHELL}>
          <SectionHeader
            index="01"
            label="What we build"
            title={["Four systems,", "engineered as one."]}
            intro="Each is a discipline in its own right. Aero Intelli's position is that they are worth specifying against each other rather than buying separately."
          />

          <div
            data-depth-group
            className="mt-11 grid gap-4 [perspective:1200px] sm:grid-cols-2 md:mt-14 lg:grid-cols-4"
          >
            {capabilities.map((capability) => (
              /* Two nested elements on purpose. The outer one is what the
                 scroll system rotates into place; the inner one is what leans
                 toward the cursor. Sharing a node would put GSAP and the
                 pointer handler on the same transform matrix, and the last
                 writer would win. */
              <div key={capability.id} data-depth-card className="h-full">
                <TiltCard className="h-full">
                  <Link
                    href={capability.href}
                    className="flex h-full flex-col rounded-[18px] border border-hairline bg-surface p-5 transition-colors duration-200 hover:border-hairline-strong md:p-6"
                  >
                    <span className="text-[10.5px] font-semibold tabular-nums tracking-[0.12em] text-ink-soft/55">
                      {capability.index}
                    </span>
                    <h3 className="mt-4 text-[17px] font-medium leading-[1.25] tracking-[-0.015em] md:text-[18px]">
                      {capability.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-[1.65] text-ink-soft">
                      {capability.description}
                    </p>
                  </Link>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Position. Held views, not measured results — the copy says so. */}
      <section id="position" className="bg-surface-muted py-16 md:py-24">
        <div className={SHELL}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:items-start lg:gap-16">
            <SectionHeader
              index="02"
              label="Position"
              title={["Why one", "engineered system."]}
            />

            <ul data-reveal-group className="border-t border-hairline">
              {positions.map((position) => (
                <li
                  key={position.id}
                  data-reveal-item
                  className="border-b border-hairline py-6 md:py-7"
                >
                  <h3 className="text-[17px] font-medium tracking-[-0.015em] md:text-[19px]">
                    {position.title}
                  </h3>
                  <p className="mt-2.5 max-w-[620px] text-[14.5px] leading-[1.75] text-ink-soft md:text-[15px]">
                    {position.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 04 — The stack.

          Previously this section pinned and advanced its rows under scrub. The
          pin was registered at `lg` and up, which meant every row on a phone
          sat at `opacity: 1, transform: none` — the one inert section on a page
          where everything else moved. Rather than add a second mobile-only
          animation, the section is now a literal stack: four cards separated in
          depth, entering with the same `data-depth-card` treatment the
          capability grid uses and leaning with the same `data-scene-3d` scrub as
          the hero. One behaviour, defined once, identical in all three views. */}
      <section id="stack" className="bg-legal-dark py-16 md:py-24">
        <div className={SHELL}>
          <div className="grid gap-11 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:items-start lg:gap-16">
            <SectionHeader
              index="03"
              label="The stack"
              title={["From the", "water up."]}
              intro="Read bottom to top. Each layer is only as good as the one beneath it, which is why the software is specified last and never first."
              tone="dark"
            />

            <div className="[perspective:1300px] [perspective-origin:50%_40%]">
              <div
                data-scene-3d
                data-depth-group
                className="grid gap-3 [transform-style:preserve-3d]"
              >
                {stack.map((layer, index) => (
                  <article
                    key={layer.id}
                    data-depth-card
                    /* The topmost layer stands furthest forward, so the stack
                       reads in the same direction the copy asks for — decision
                       nearest the reader, water furthest away. GSAP parses this
                       inline transform before its first tween, so the Z offset
                       survives the entrance rather than being overwritten. */
                    style={{ transform: `translateZ(${(stack.length - 1 - index) * 22}px)` }}
                    className="rounded-[16px] border border-white/10 bg-white/[0.035] p-5 md:p-6"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-[17px] font-medium tracking-[-0.015em] text-footer-text md:text-[19px]">
                        {layer.layer}
                      </h3>
                      <span className="shrink-0 text-[10px] font-semibold tabular-nums tracking-[0.12em] text-accent/70">
                        {String(stack.length - index).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Set as text rather than as pills. Twelve outlined
                        capsules was the busiest thing on the page and gave each
                        word a border it had not earned; a spaced list reads as
                        a specification instead. */}
                    <ul className="mt-2.5 flex flex-wrap items-baseline gap-x-5 gap-y-1.5">
                      {layer.items.map((item) => (
                        <li key={item} className="text-[13.5px] text-legal-dark-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Method. The rail fills as the section is scrubbed. */}
      <section id="method" className="bg-surface py-16 md:py-24">
        <div className={SHELL}>
          <SectionHeader
            index="04"
            label="How we work"
            title={["Understand, engineer,", "integrate, monitor, optimise."]}
            intro="The last step returns to the fourth. Optimisation that is not measured again is a change, not an improvement."
          />

          <div data-stage-track className="relative mt-12 pl-10 md:mt-14 md:pl-14">
            {/* The rail is centred by layout over the 24px marker column rather
                than by a hand-picked offset, so it stays on the markers at
                every breakpoint even though the gutter widens at `md`. */}
            <div aria-hidden="true" className="absolute inset-y-3 left-0 flex w-6 justify-center">
              <div className="h-full w-px bg-hairline">
                <div data-process-fill className="h-full w-full origin-top bg-accent-deep" />
              </div>
            </div>

            <ol className="space-y-8 md:space-y-10">
              {method.map((step) => (
                <li key={step.index} data-stage className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-10 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-hairline-strong bg-surface text-[10px] font-semibold tabular-nums md:-left-14"
                  >
                    {step.index}
                  </span>
                  <h3 className="text-[19px] font-medium leading-[1.25] md:text-[22px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[620px] text-[15px] leading-[1.8] text-ink-soft">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 06 — Evidence. Kept on the home page on purpose: it is the most
          differentiating thing the company can say while it has published no
          measurements, and burying it on a policy page would waste it. */}
      <section id="evidence" className="bg-surface-muted py-16 md:py-24">
        <div className={SHELL}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
            <div>
              <SectionHeader
                index="05"
                label="Evidence"
                title={["Built on measurement,", "not claims."]}
                intro={evidenceNote}
              />
            </div>

            <ul
              data-reveal-group
              className="grid gap-px self-start overflow-hidden rounded-[18px] border border-hairline bg-hairline"
            >
              {evidenceBasis.map((basis, index) => (
                <li
                  key={basis}
                  data-reveal-item
                  className="flex items-baseline gap-3.5 bg-surface px-5 py-4"
                >
                  <span className="shrink-0 text-[10.5px] font-semibold tabular-nums tracking-[0.1em] text-ink-soft/55">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14.5px] leading-[1.5]">{basis}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 07 — Close. */}
      <section className="border-t border-hairline bg-surface py-16 md:py-24">
        <div className={SHELL}>
          <div className="max-w-[720px]">
            <RevealText
              lines={["Tell us what you are", "trying to produce."]}
              split="letters"
              className="text-[27px] font-medium leading-[1.12] tracking-[-0.03em] md:text-[42px] lg:text-[46px]"
            />
            <p className="mt-5 text-[15px] leading-[1.8] text-ink-soft md:text-[16.5px]">
              Site, species or crop, water source and constraints. That is enough to say whether
              there is a system worth engineering.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryLink href="/contact">Start a conversation</PrimaryLink>
              <SecondaryLink href="/about">About Aero Intelli</SecondaryLink>
            </div>
          </div>
        </div>
      </section>
    </HomeScaffold>
  );
}
