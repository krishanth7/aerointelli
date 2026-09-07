import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SHELL } from "@/components/shared/shell";
import {
  areasByRecency,
  areasByTopic,
  findArea,
  knowledgeAreas,
  topicsInUse,
} from "@/content/knowledge/areas";
import {
  difficultyLabel,
  readingMinutes,
  topicLabel,
  type KnowledgeArea,
} from "@/content/knowledge/types";

export const metadata: Metadata = {
  title: "RAS Knowledge Center",
  description:
    "The science, engineering, operation and technology behind high-performance Recirculating Aquaculture Systems — from culture tanks and filtration to biofiltration, oxygen management, water quality, automation and commercial production.",
  alternates: { canonical: "/knowledge/ras" },
};

const FEATURED = ["fundamentals", "biofiltration", "oxygen", "water-quality"];

/**
 * The RAS Knowledge Center.
 *
 * Presented as a numbered body of thirty areas rather than as a feed, because
 * the subject has a shape and a reader arriving at it deserves to see that
 * shape before choosing where to start.
 */
export default function RasKnowledgePage() {
  const featured = FEATURED.map((slug) => findArea(slug)).filter(
    (entry): entry is KnowledgeArea => Boolean(entry),
  );
  const latest = areasByRecency().slice(0, 6);

  return (
    <>
      <section className="bg-surface pt-[calc(var(--header-height-mobile)+1rem)] md:pt-[calc(var(--header-height)+2rem)]">
        <Breadcrumbs />
        <div className={SHELL}>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">
            Knowledge
          </p>
          <h1 className="mt-5 max-w-[18ch] text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink md:text-[62px] lg:text-[72px]">
            The Engineering Behind Modern Recirculating Aquaculture.
          </h1>
          <p className="mt-6 max-w-[64ch] text-[16px] leading-relaxed text-ink-soft md:text-[18px]">
            Explore the science, engineering, operation and technology behind high-performance
            Recirculating Aquaculture Systems — from culture tanks and filtration to biofiltration,
            oxygen management, water quality, automation and commercial production.
          </p>

          <div className="mt-9">
            <a
              href="#areas"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[14px] bg-ink px-6 text-[15px] font-medium text-surface outline-none transition-colors duration-200 hover:bg-ink/90 focus-visible:ring-2 focus-visible:ring-accent-deep"
            >
              Explore RAS Engineering
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className={SHELL}>
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-ink md:text-[38px]">
            Featured guides
          </h2>
          <p className="mt-4 max-w-[62ch] text-[15.5px] leading-relaxed text-ink-soft">
            Four places to begin, depending on whether you are approaching the subject as a
            newcomer, a designer or an operator.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {featured.map((area) => (
              <AreaCard key={area.slug} area={area} showSummary />
            ))}
          </div>
        </div>
      </section>

      <section
        id="areas"
        className="scroll-mt-24 bg-surface-muted py-16 md:py-24"
      >
        <div className={SHELL}>
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-ink md:text-[38px]">
            Explore RAS engineering
          </h2>
          <p className="mt-4 max-w-[62ch] text-[15.5px] leading-relaxed text-ink-soft">
            Thirty areas, in the order an engineer would work through them: principles first, then
            the unit processes, then the biology, then the plant and the business around it.
          </p>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {knowledgeAreas.map((area) => (
              <li key={area.slug} className="flex">
                <AreaCard area={area} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className={SHELL}>
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-ink md:text-[38px]">
            Latest knowledge
          </h2>
          <p className="mt-4 max-w-[62ch] text-[15.5px] leading-relaxed text-ink-soft">
            The most recently published areas.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((area) => (
              <AreaCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-16 md:py-24">
        <div className={SHELL}>
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-ink md:text-[38px]">
            Explore by topic
          </h2>
          <p className="mt-4 max-w-[62ch] text-[15.5px] leading-relaxed text-ink-soft">
            The same thirty areas, grouped by the discipline they belong to. Several appear under
            more than one, because the subject does not divide cleanly.
          </p>

          <div className="mt-10 space-y-10">
            {topicsInUse.map((topic) => (
              <div key={topic}>
                <h3 className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                  {topicLabel[topic]}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {areasByTopic(topic).map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/knowledge/ras/${area.slug}`}
                        className="inline-flex min-h-[40px] items-center rounded-[12px] border border-hairline-strong bg-surface px-4 text-[14px] text-ink outline-none transition-colors duration-200 hover:border-ink/35 focus-visible:ring-2 focus-visible:ring-accent-deep"
                      >
                        {area.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AreaCard({ area, showSummary }: { area: KnowledgeArea; showSummary?: boolean }) {
  return (
    <Link
      href={`/knowledge/ras/${area.slug}`}
      className="flex h-full w-full flex-col rounded-[18px] border border-hairline-strong bg-surface p-5 outline-none transition-colors duration-200 hover:border-ink/35 focus-visible:ring-2 focus-visible:ring-accent-deep md:p-6"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] text-ink-soft">
        <span className="tabular-nums tracking-[0.1em]">{area.number}</span>
        <span aria-hidden="true">&middot;</span>
        <span className="uppercase tracking-[0.1em]">{difficultyLabel[area.difficulty]}</span>
        <span aria-hidden="true">&middot;</span>
        <span>{readingMinutes(area)} min read</span>
      </div>
      <h3 className="mt-3 text-[17px] font-medium leading-snug text-ink md:text-[19px]">
        {area.title}
      </h3>
      <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
        {showSummary ? area.summary : area.navSummary}
      </p>
    </Link>
  );
}
