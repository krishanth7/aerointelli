import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SHELL } from "@/components/shared/shell";
import { articles } from "@/content/knowledge/articles";
import { categoriesByLayer, layerMeta, rasCategories, type Layer } from "@/content/knowledge/categories";
import { difficultyLabel, readingMinutes } from "@/content/knowledge/types";

export const metadata: Metadata = {
  title: "RAS Knowledge Center",
  description:
    "From water chemistry and biofiltration to hydraulics, oxygenation, fish production and farm economics — the engineering behind modern recirculating aquaculture.",
  alternates: { canonical: "/knowledge/ras" },
};

const LAYERS: Layer[] = ["learn", "design", "operate", "calculate"];

/**
 * The RAS Knowledge Center.
 *
 * Organised by the four layers rather than as a feed, because the subject has a
 * shape and a reader arriving at it deserves to see that shape. The full map is
 * published including the sections that hold nothing yet — an engineer
 * evaluating whether to trust this as a reference is better served by knowing
 * what is coming than by a tidy page that hides it.
 */
export default function RasKnowledgePage() {
  const featured = articles.find((article) => article.slug === "what-is-ras");

  return (
    <>
      <section className="bg-surface pt-[calc(var(--header-height-mobile)+1rem)] md:pt-[calc(var(--header-height)+2rem)]">
        <Breadcrumbs />
        <div className={SHELL}>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">
            Knowledge
          </p>
          <h1 className="mt-5 max-w-[14ch] text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink md:text-[62px] lg:text-[72px]">
            RAS Knowledge Center
          </h1>
          <p className="mt-6 max-w-[64ch] text-[16px] leading-relaxed text-ink-soft md:text-[18px]">
            From water chemistry and biofiltration to hydraulics, oxygenation, fish production and
            farm economics — explore the engineering behind modern recirculating aquaculture.
          </p>

          <div className="mt-9">
            <a
              href="#learn"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[14px] bg-ink px-6 text-[15px] font-medium text-surface outline-none transition-colors duration-200 hover:bg-ink/90 focus-visible:ring-2 focus-visible:ring-accent-deep"
            >
              Explore RAS Engineering
            </a>
          </div>

          {/* Said plainly rather than dressed up. A knowledge platform that
              overstates its own coverage on day one has already broken the
              standard it is asking to be judged by. */}
          <p className="mt-12 max-w-[70ch] border-t border-hairline pt-6 text-[13.5px] leading-relaxed text-ink-soft">
            The Knowledge Center is being written in phases. The full map of {rasCategories.length}{" "}
            sections is published below so you can see where it is going. Sections with nothing in
            them are marked as planned rather than filled with a stub.
          </p>
        </div>
      </section>

      {featured ? (
        <section className="bg-surface py-14 md:py-20">
          <div className={SHELL}>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft">
              Start here
            </p>
            <Link
              href={`/knowledge/ras/${featured.category}/${featured.slug}`}
              className="mt-5 block rounded-[22px] border border-hairline-strong p-6 outline-none transition-colors duration-200 hover:border-ink/35 focus-visible:ring-2 focus-visible:ring-accent-deep md:p-9"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] text-ink-soft">
                <span className="uppercase tracking-[0.1em]">
                  {difficultyLabel[featured.difficulty]}
                </span>
                <span aria-hidden="true">&middot;</span>
                <span>{readingMinutes(featured)} min read</span>
              </div>
              <h2 className="mt-3 max-w-[20ch] text-[26px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-[38px]">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-[68ch] text-[15.5px] leading-relaxed text-ink-soft">
                {featured.quickAnswer}
              </p>
              <span className="mt-6 inline-block text-[14px] font-medium text-ink">
                Read the guide
              </span>
            </Link>
          </div>
        </section>
      ) : null}

      {LAYERS.map((layer, index) => (
        <section
          key={layer}
          id={layer}
          className={`scroll-mt-24 py-16 md:py-24 ${index % 2 === 1 ? "bg-surface-muted" : "bg-surface"}`}
        >
          <div className={SHELL}>
            <div className="flex items-baseline gap-4">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] tabular-nums text-ink-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-ink md:text-[38px]">
                {layerMeta[layer].title}
              </h2>
            </div>
            <p className="mt-4 max-w-[62ch] text-[15.5px] leading-relaxed text-ink-soft">
              {layerMeta[layer].intro}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoriesByLayer(layer).map((category) => {
                const count = category.articles.length;

                return (
                  <Link
                    key={category.slug}
                    href={`/knowledge/ras/${category.slug}`}
                    className={`flex h-full flex-col rounded-[18px] border p-5 outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent-deep md:p-6 ${
                      count > 0
                        ? "border-hairline-strong bg-surface hover:border-ink/35"
                        : "border-hairline hover:border-hairline-strong"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[17px] font-medium leading-snug text-ink">
                        {category.title}
                      </h3>
                      {count === 0 ? (
                        <span className="shrink-0 rounded-full border border-hairline-strong px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-soft">
                          Planned
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                      {category.summary}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
