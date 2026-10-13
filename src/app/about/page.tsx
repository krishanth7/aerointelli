import type { Metadata } from "next";
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
  heroMeta,
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
  teamMembers,
  visionStatement,
} from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aero Intelli is a technology company developing intelligent systems for controlled food production, water management, aquaculture, soilless cultivation and resource-efficient infrastructure.",
  alternates: { canonical: "/about" },
};

/**
 * The about page.
 *
 * Structure follows the reader's questions in order: who we are, why we exist,
 * what we build, how it connects, how we think, where we are going, and how we
 * substantiate what we say. Detail belongs on the dedicated pages — this page
 * hands the reader to them rather than restating them.
 *
 * The same integrity rule as the sustainability page applies: no counts, no
 * percentages, no dates, no achievements. Section 18 states the reason in the
 * page's own words, which is the only honest way to hold a marketing page to it.
 *
 * Tone alternates light and dark so a long page never reads as one document.
 * Everything scroll-driven is a `data-*` attribute picked up by the single GSAP
 * context in `AboutScaffold`; only the hero diagram carries its own timeline,
 * because it plays on load rather than on scroll.
 */

/** Section heading. Title reveals a line at a time; the intro follows as a block. */
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

/** Pill list. Used wherever a section is a set of terms rather than prose. */
function TermList({ items, tone = "light" }: { items: string[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";

  return (
    <ul data-reveal-group className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          data-reveal-item
          className={`rounded-full border px-3.5 py-1.5 text-[13px] ${
            dark ? "border-white/15 text-legal-dark-muted" : "border-hairline text-ink-soft"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Primary action. The magnetic lean is capped and disabled under reduced motion. */
/**
 * Copy for a section that is not open yet.
 *
 * Written once here rather than per call site, so all four notices on this page
 * say the same thing in the same voice. No date is given, because none has been
 * committed to — a promised week that slips is worse than no week at all.
 */
function comingSoonCopy(name: string) {
  return {
    title: `${name} is launching soon`,
    body: `The ${name.toLowerCase()} section is being prepared and is not published yet. If there is something specific you want to know about it, ask us directly and we will answer.`,
  };
}

function PrimaryLink({ href, children }: { href: string; children: string }) {
  const className =
    "inline-flex min-h-[46px] items-center rounded-full bg-ink px-6 text-[14px] font-medium text-surface-muted transition-opacity duration-200 hover:opacity-90";

  // Links into an unpublished section are intercepted rather than followed.
  // The check is on the href, so adding or removing a section in
  // `launchStatus.ts` changes this page's behaviour without touching it.
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
          {children}
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

  const className = `inline-flex min-h-[46px] items-center rounded-full border px-6 text-[14px] font-medium transition-colors duration-200 ${
    dark
      ? "border-white/20 text-footer-text hover:border-white/40"
      : "border-hairline-strong hover:border-ink/40"
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
          {children}
        </Link>
      )}
    </MagneticButton>
  );
}

export default function Page() {
  return (
    <AboutScaffold>
      {/* Hero.

          Three column behaviours rather than two. Below `md` the diagram sits
          under the copy; from `md` it is a framed figure at reduced height so a
          tablet does not hand it two thirds of the screen; from `lg` it moves
          beside the headline. The figure is bordered and captioned at every
          width — an unframed line drawing floating in whitespace reads as an
          unfinished sketch rather than as a technical illustration.

          The strip along the bottom is registration fact and domain, both
          already stated elsewhere on the site. It closes the section with an
          edge instead of letting the background simply stop. */}
      <section data-hero-scrub className="bg-surface-muted pt-[104px] md:pt-[128px] lg:pt-[146px]">
        <div className={SHELL}>
          {/* Columns start at `xl`, not `lg`. At 1024 a 400px figure leaves the
              headline about 390px, which wraps a 52px line into six. The stacked
              layout holds until there is room for both.

              There is no right-hand gutter any more. It existed to keep the
              artwork clear of the fixed chapter rail, and the rail is gone. */}
          <div className="grid gap-11 pb-14 md:gap-12 md:pb-16 lg:pb-20 xl:grid-cols-[minmax(0,1fr)_minmax(0,400px)] xl:items-center xl:gap-14 2xl:grid-cols-[minmax(0,1fr)_minmax(0,470px)] 2xl:gap-16">
            <div data-hero-headline>
              <div className="flex items-center gap-4">
                <p className="shrink-0 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  About Aero Intelli
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
                lines={["Engineering the future", "of food, water and", "sustainable production."]}
                /* Sized so the three authored lines stay three lines at every
                   width. A line that wraps defeats the mask reveal, which
                   animates per authored line and not per rendered one. */
                className="mt-6 text-[29px] font-medium leading-[1.1] tracking-[-0.035em] min-[360px]:text-[31px] min-[414px]:text-[35px] md:mt-7 md:text-[50px] lg:text-[52px]"
              />

              <p className="mt-6 max-w-[560px] text-[15.5px] leading-[1.75] text-ink-soft md:mt-7 md:text-[17px] md:leading-[1.8]">
                Aero Intelli is a technology-driven company developing intelligent systems for
                controlled food production, water management, aquaculture, soilless cultivation and
                resource-efficient infrastructure.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 md:mt-9">
                <PrimaryLink href="/technology">Explore our technologies</PrimaryLink>
                <SecondaryLink href="#philosophy">Our approach</SecondaryLink>
              </div>
            </div>

            <figure
              data-hero-visual
              className="mx-auto w-full max-w-[520px] rounded-[18px] border border-hairline bg-surface p-4 min-[414px]:p-5 md:max-w-[560px] md:p-6 xl:mx-0 xl:max-w-none"
            >
              <figcaption className="border-b border-hairline pb-3 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                The chain we work along
              </figcaption>

              <div className="pt-3">
                <HeroDiagram />
              </div>
            </figure>
          </div>
        </div>

        <div className="border-t border-hairline">
          <div className={SHELL}>
            <dl
              data-reveal-group
              className="grid divide-y divide-hairline md:grid-cols-3 md:divide-x md:divide-y-0"
            >
              {heroMeta.map((item, index) => (
                <div
                  key={item.term}
                  data-reveal-item
                  className={`py-5 md:py-6 ${index === 0 ? "md:pr-6" : "md:px-6"}`}
                >
                  <dt className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft/70">
                    {item.term}
                  </dt>
                  <dd className="mt-1.5 text-[14.5px] leading-[1.55] tracking-[-0.01em] md:text-[15px]">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 01 — Who we are */}
      <section id="who" className="border-t border-hairline bg-surface py-20 md:py-28">
        <div className={SHELL}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)] lg:gap-16">
            <div>
              <SectionHeader
                index="01"
                label="Who we are"
                title={["A technology company building", "intelligent production systems."]}
                intro="Aero Intelli works at the point where biological systems, physical engineering and software meet. The production systems we build — aquaculture, hydroponics, aeroponics, water treatment — are engineered together with the instrumentation and the intelligence that operate them, because a system that cannot report on itself cannot be improved."
              />

              <p className="mt-6 max-w-[720px] text-[15px] leading-[1.8] text-ink-soft md:text-[16.5px]">
                That makes us a systems company rather than an agriculture company. The discipline we
                bring is the same whether the resource being managed is water in a fish loop or
                nutrients in a root zone: measure it, design around it, and hold the result to
                evidence.
              </p>

              <div className="mt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  We work across
                </p>
                <div className="mt-4">
                  <TermList items={intersectionFields} />
                </div>
              </div>
            </div>

            <aside className="lg:pt-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Focus
              </p>
              <ul className="mt-4 space-y-2 border-t border-hairline pt-4">
                {focusDomains.map((domain) => (
                  <li key={domain} className="text-[15px] font-medium tracking-[-0.01em]">
                    {domain}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* 02 — Why we exist */}
      <section id="why" className="bg-legal-dark py-20 md:py-28">
        <div className={SHELL}>
          <SectionHeader
            index="02"
            label="Why we exist"
            title={["The systems that produce", "what we need most", "are changing."]}
            tone="dark"
          />

          <ul data-stage-track className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:mt-16">
            {systemPressures.map((pressure) => (
              <li
                key={pressure}
                data-stage
                className="border-b border-white/10 pb-4 text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-footer-text md:text-[26px]"
              >
                {pressure}
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-[760px] text-[17px] leading-[1.7] text-legal-dark-muted md:text-[20px] md:leading-[1.65]">
            {responseStatement}
          </p>
        </div>
      </section>

      {/* 03 — Our response */}
      <section className="bg-surface py-20 md:py-28">
        <div className={SHELL}>
          <SectionHeader
            index="03"
            label="Our response"
            title={["Controlled, measurable,", "connected and intelligent."]}
            intro="The disciplines below are not a list of things we happen to do. Each one is a dependency of the next: biology sets the requirement, engineering meets it, water carries it, data records it and intelligence improves it."
          />

          <div className="mt-10">
            <EquationDiagram />
          </div>
        </div>
      </section>

      {/* 04 — What we build */}
      <section id="build" className="border-t border-hairline bg-surface-muted py-20 md:py-28">
        <div className={SHELL}>
          <SectionHeader
            index="04"
            label="What we build"
            title={["From production systems", "to intelligent infrastructure."]}
          />

          <div className="mt-14 space-y-14 md:mt-20 md:space-y-20">
            {buildDomains.map((domain) => (
              <article
                key={domain.id}
                className="grid gap-6 border-t border-hairline pt-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16"
              >
                <div>
                  <span className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-ink-soft">
                    {domain.index}
                  </span>
                  <h3 className="mt-3 text-[28px] font-medium leading-[1.12] tracking-[-0.03em] md:text-[38px]">
                    {domain.name}
                  </h3>
                </div>

                <div>
                  <p className="max-w-[620px] text-[15px] leading-[1.8] text-ink-soft md:text-[16.5px]">
                    {domain.summary}
                  </p>
                  <ul data-reveal-group className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                    {domain.capabilities.map((capability) => (
                      <li
                        key={capability}
                        data-reveal-item
                        className="flex gap-3 text-[15px] leading-[1.7] text-ink-soft"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-accent-deep"
                        />
                        <span className="min-w-0">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — The Aero Intelli system */}
      <section id="system" className="bg-legal-dark py-20 md:py-28">
        <div className={SHELL}>
          <SectionHeader
            index="05"
            label="The system"
            title={["Everything connects", "back to the resource."]}
            intro="Water enters, is treated, carries a production cycle, gives up its nutrients to a second one, and returns. Data is produced at every stage, interpreted, and acted on. The loop below is the company's argument in one diagram."
            tone="dark"
          />
        </div>

        <div className={`${SHELL} mt-10`}>
          <SystemStage />
        </div>
      </section>

      {/* 06 — Philosophy */}
      <section id="philosophy" className="bg-surface py-20 md:py-28">
        <div className={SHELL}>
          <SectionHeader index="06" label="How we think" title={["We think in systems."]} />

          <ol data-stage-track className="mt-14 space-y-10 md:mt-20 md:space-y-14">
            {principles.map((principle) => (
              <li
                key={principle.index}
                data-stage
                className="grid gap-4 border-t border-hairline pt-7 lg:grid-cols-[minmax(0,160px)_minmax(0,1fr)] lg:gap-12"
              >
                <span className="text-[13px] font-semibold tabular-nums tracking-[0.12em] text-ink-soft lg:sticky lg:top-28 lg:self-start lg:text-[15px]">
                  {principle.index}
                </span>
                <div>
                  <h3 className="text-[24px] font-medium leading-[1.2] tracking-[-0.025em] md:text-[32px]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 max-w-[660px] text-[15px] leading-[1.8] text-ink-soft md:text-[16.5px]">
                    {principle.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 07 — Mission */}
      <section id="mission" className="bg-legal-dark py-24 md:py-32">
        <div className={`${SHELL} text-center`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-legal-dark-muted">
            Our mission
          </p>

          <RevealText
            lines={[missionStatement]}
            className="mx-auto mt-8 max-w-[900px] text-[24px] font-medium leading-[1.35] tracking-[-0.025em] text-footer-text md:text-[38px] md:leading-[1.28]"
          />

          <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {missionPillars.map((pillar) => (
              <li
                key={pillar}
                className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent"
              >
                {pillar}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 08 — Vision */}
      <section id="vision" className="relative overflow-hidden bg-surface py-24 md:py-32">
        {/* Decorative network. Sits behind the copy at every breakpoint. */}
        <div
          aria-hidden="true"
          data-parallax="0.35"
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-[0.35]"
        >
          <svg viewBox="0 0 1200 300" className="h-auto w-full text-ink-soft">
            {[40, 100, 160, 220, 280].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="1200"
                y2={y}
                stroke="currentColor"
                strokeOpacity="0.12"
                strokeWidth="1"
              />
            ))}
            {[120, 320, 520, 720, 920, 1120].map((x) => (
              <line
                key={x}
                x1={x}
                y1="20"
                x2={x}
                y2="300"
                stroke="currentColor"
                strokeOpacity="0.08"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        <div className={`${SHELL} relative`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            Our vision
          </p>

          <RevealText
            lines={[visionStatement]}
            className="mt-8 max-w-[980px] text-[26px] font-medium leading-[1.3] tracking-[-0.03em] md:text-[44px] md:leading-[1.22]"
          />
        </div>
      </section>

      {/* 09 — Values */}
      <section id="values" className="border-t border-hairline bg-surface py-20 md:py-28">
        <div className={SHELL}>
          <SectionHeader index="09" label="What guides us" title={["Six values, not twelve."]} />

          <div className="mt-12">
            <ValuesList />
          </div>
        </div>
      </section>

      {/* 10 — Leadership */}
      <section id="leadership" className="bg-surface-muted py-20 md:py-28">
        <div className={SHELL}>
          <SectionHeader index="10" label="Leadership" title={["Building Aero Intelli."]} />

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-16">
            {/* No portrait is published yet. The plate says so rather than
                standing in a stock photograph of someone else. */}
            <div className="flex aspect-[4/5] max-w-[340px] items-end rounded-[18px] border border-hairline bg-surface p-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-ink-soft/70">
                Portrait to be published
              </p>
            </div>

            <div>
              <h3 className="text-[26px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[34px]">
                {founder.name}
              </h3>
              {/* Same reasoning as the roster below: the title is a full
                  sentence-length phrase now, so it is set as one rather than as
                  a wide-tracked uppercase label. */}
              <p className="mt-2 text-[14px] font-medium leading-[1.4] text-ink-soft">
                {founder.role}
              </p>

              <p className="mt-6 max-w-[680px] text-[16px] leading-[1.8] text-ink-soft md:text-[17px]">
                {founder.message}
              </p>

              <p className="mt-6 max-w-[600px] border-l border-hairline-strong pl-4 text-[14.5px] leading-[1.7] text-ink-soft">
                {founder.caption}
              </p>

              <div className="mt-10 border-t border-hairline pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  Disciplines on the team
                </p>
                <div className="mt-4">
                  <TermList items={teamDisciplines} />
                </div>
              </div>
            </div>
          </div>

          {/* The roster.

              Deliberately a hairline register rather than a grid of cards with
              avatars. There are no portraits to publish, and a card built
              around an empty circle or a set of initials draws the eye straight
              to the thing that is missing. A typographic list has nothing
              missing from it — the name is the content.

              Two columns from `sm` and three from `lg`. Six people divide
              evenly into both, so no row is ever left with a single orphan
              cell. The 1px gaps over a hairline background are the same
              register treatment the ecosystem and evidence sections use. */}
          <div className="mt-14 border-t border-hairline pt-12 md:mt-20 md:pt-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              The team
            </p>

            <ul
              data-reveal-group
              className="mt-6 grid gap-px overflow-hidden rounded-[18px] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3"
            >
              {teamMembers.map((member, index) => (
                <li
                  key={member.name}
                  data-reveal-item
                  className="flex items-start gap-4 bg-surface px-5 py-5 md:px-6 md:py-6"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-[10.5px] font-semibold tabular-nums tracking-[0.1em] text-ink-soft/55"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[16px] font-medium leading-[1.3] tracking-[-0.015em] md:text-[17px]">
                      {member.name}
                    </span>
                    {/* Sentence case, normal tracking — not the uppercase
                        micro-label used elsewhere on this page. Titles are
                        written out in full now, and "CHIEF FINANCIAL OFFICER
                        (CFO) & CHIEF STRATEGY OFFICER (CSO)" set in wide-tracked
                        uppercase runs to three ragged lines in a column this
                        narrow and is genuinely harder to read than the acronym
                        it replaced. Lowercase with a little extra leading keeps
                        it to two clean lines. */}
                    <span className="mt-1.5 block text-[12.5px] font-medium leading-[1.45] text-ink-soft">
                      {member.role}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 11 — Technology philosophy */}
      <section id="stack" className="bg-legal-dark py-20 md:py-28">
        <div className={SHELL}>
          <SectionHeader
            index="11"
            label="Technology philosophy"
            title={["Technology is the infrastructure.", "Intelligence is the layer."]}
            intro="Each layer below exists only because the one under it reports honestly. Instrumentation added after commissioning measures the system it was retrofitted into, not the system that was designed — which is why sensing belongs in the architecture rather than beside it."
            tone="dark"
          />

          <div className="mt-12">
            <StackDiagram />
          </div>

          <p className="mt-8 max-w-[720px] border-t border-white/10 pt-6 text-[14.5px] leading-[1.75] text-legal-dark-muted">
            The decision layer acts on the physical systems it sits above. That return path closes
            the stack into the same loop the system diagram describes.
          </p>
        </div>
      </section>

      {/* 12 — Physical to digital */}
      <section id="bridge" className="bg-surface py-20 md:py-28">
        <div className={SHELL}>
          <SectionHeader
            index="12"
            label="Physical to digital"
            title={["A facility is a physical system", "and a data system at once."]}
            intro="The equipment on the left is what produces food. The layer on the right is what makes its behaviour legible. Neither is the product on its own."
          />

          <div className="mt-12">
            <BridgeDiagram />
          </div>
        </div>
      </section>

      {/* 13 — Ecosystem */}
      <section id="ecosystem" className="border-t border-hairline bg-surface-muted py-20 md:py-28">
        <div className={SHELL}>
          <SectionHeader
            index="13"
            label="Ecosystem"
            title={["The domains we work in."]}
            intro="Deliberately bounded. These are the areas Aero Intelli builds in — not an ambition to operate in every adjacent market."
          />

          <div className="mt-10">
            <EcosystemMap />
          </div>
        </div>
      </section>

      {/* 14 — Sustainability */}
      <section id="sustainability" className="bg-surface py-20 md:py-28">
        <div className={SHELL}>
          <SectionHeader
            index="14"
            label="Sustainability"
            title={["Sustainability is built", "into the architecture."]}
            intro="Resource efficiency is a property of how a system is designed, not a programme run alongside it. The dedicated page sets out the approach in full, including what has and has not been measured."
          />

          <div className="mt-8">
            <TermList items={sustainabilityThemes} />
          </div>

          <div className="mt-9">
            <SecondaryLink href="/sustainability">Explore sustainability</SecondaryLink>
          </div>
        </div>
      </section>

      {/* 15 — Research and development.

          The directions were a single row of pills that ran off the right edge
          and drifted on scroll. It looked busy and it hid its own tail: on a
          phone the last four were simply unreachable. An indexed two-column
          register states the same eight in less vertical space, reads as a
          register of active work rather than as marketing, and has no content
          outside the viewport. */}
      <section id="research" className="bg-legal-dark py-16 md:py-20">
        <div className={SHELL}>
          <div className="grid gap-9 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:items-start lg:gap-16">
            <div>
              <SectionHeader
                index="15"
                label="Research"
                title={["Always building", "what comes next."]}
                intro="Active directions, not announcements. Each is a line of work rather than a shipped capability — where one produces a result worth publishing, it will be published with the measurement behind it."
                tone="dark"
              />

              <div className="mt-7">
                <SecondaryLink href="/knowledge" tone="dark">
                  Explore knowledge
                </SecondaryLink>
              </div>
            </div>

            <ul data-reveal-group className="border-t border-white/10 sm:grid sm:grid-cols-2 sm:gap-x-10">
              {researchDirections.map((direction, index) => (
                <li
                  key={direction}
                  data-reveal-item
                  className="flex items-baseline gap-3.5 border-b border-white/10 py-3"
                >
                  <span className="shrink-0 text-[10.5px] font-semibold tabular-nums tracking-[0.1em] text-accent/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14.5px] leading-[1.5] text-footer-text">{direction}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 16 — How we work */}
      <section id="process" className="bg-surface py-20 md:py-28">
        <div className={SHELL}>
          <SectionHeader
            index="16"
            label="How we work"
            title={["Understand, engineer,", "integrate, monitor, optimise."]}
            intro="The last step returns to the fourth. Optimisation that is not measured again is a change, not an improvement."
          />

          <div className="mt-14">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* 17 — Where we're going */}
      <section id="future" className="bg-legal-dark py-20 md:py-28">
        <div className={SHELL}>
          <SectionHeader
            index="17"
            label="Where we're going"
            title={["Building toward intelligent", "resource infrastructure."]}
            intro="Three horizons, no dates. A year on this page would be a commitment, and these are directions rather than commitments."
            tone="dark"
          />

          <div className="mt-12">
            <HorizonTimeline />
          </div>
        </div>
      </section>

      {/* 18 — Evidence */}
      <section id="evidence" className="bg-surface py-20 md:py-28">
        <div className={SHELL}>
          <SectionHeader
            index="18"
            label="Evidence"
            title={["Built on measurement,", "not claims."]}
            intro="This site publishes no water savings, carbon reductions, energy figures or efficiency percentages, because none has yet been measured on an operating Aero Intelli project. When performance is claimed it will rest on the following, and it will state the baseline it was measured against."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ul data-reveal-group className="grid gap-3">
              {evidenceBasis.map((basis) => (
                <li
                  key={basis}
                  data-reveal-item
                  className="flex gap-3 border-b border-hairline pb-3 text-[15px] text-ink-soft"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-deep"
                  />
                  <span className="min-w-0">{basis}</span>
                </li>
              ))}
            </ul>

            {/* Descriptors, not statistics. Nothing here needs verification to
                publish, which is exactly why it is what the page states. */}
            <dl className="grid gap-px overflow-hidden rounded-[18px] border border-hairline bg-hairline">
              {keyFacts.map((fact) => (
                <div key={fact.term} className="bg-surface p-5">
                  <dt className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft/70">
                    {fact.term}
                  </dt>
                  <dd className="mt-2 text-[15.5px] leading-[1.6]">{fact.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-hairline bg-surface-muted py-20 md:py-28">
        <div className={SHELL}>
          <RevealText
            lines={["We are building systems", "for a more intelligent future."]}
            className="max-w-[900px] text-[30px] font-medium leading-[1.1] tracking-[-0.035em] md:text-[52px]"
          />

          <p className="mt-7 max-w-[720px] text-[16px] leading-[1.8] text-ink-soft md:text-[17px]">
            Aero Intelli brings together engineering, biological systems, water management,
            controlled cultivation and artificial intelligence to develop technologies for the next
            generation of food and resource infrastructure.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <PrimaryLink href="/solutions">Explore solutions</PrimaryLink>
            <SecondaryLink href="/contact">Talk to Aero Intelli</SecondaryLink>
          </div>
        </div>
      </section>
    </AboutScaffold>
  );
}
