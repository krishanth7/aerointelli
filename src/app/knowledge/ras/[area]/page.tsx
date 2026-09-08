import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/knowledge/ArticleBody";
import { SHELL } from "@/components/shared/shell";
import { knowledgeAreas, findArea, relatedAreas } from "@/content/knowledge/areas";
import {
  difficultyLabel,
  readingMinutes,
  topicLabel,
  type KnowledgeArea,
} from "@/content/knowledge/types";
import { siteUrl } from "@/config/site";

type Params = { area: string };

export function generateStaticParams(): Params[] {
  return knowledgeAreas.map((entry) => ({ area: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const area = findArea(slug);
  if (!area) return {};

  return {
    title: area.title,
    description: area.summary,
    alternates: { canonical: `/knowledge/ras/${slug}` },
    openGraph: { type: "article", title: area.title, description: area.summary },
  };
}

/**
 * One knowledge area.
 *
 * Two panes on a desktop — the article and a contents rail — collapsing to a
 * single column with the contents inline on a phone. The provenance strip
 * under the title states authorship, dates and version so the reader can weigh
 * the material before reading it.
 */
export default async function AreaPage({ params }: { params: Promise<Params> }) {
  const { area: slug } = await params;
  const area = findArea(slug);
  if (!area) notFound();

  const related = relatedAreas(area);

  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: area.title,
    description: area.summary,
    datePublished: area.publishedAt,
    dateModified: area.updatedAt,
    author: { "@type": "Organization", name: area.author },
    publisher: { "@type": "Organization", name: "Aero Intelli" },
    mainEntityOfPage: `${siteUrl}/knowledge/ras/${slug}`,
    proficiencyLevel: difficultyLabel[area.difficulty],
  };

  return (
    <article className="bg-surface pb-20 pt-[calc(var(--header-height-mobile)+1rem)] md:pb-28 md:pt-[calc(var(--header-height)+2rem)]">
      <div className={SHELL}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16">
          <div className="min-w-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">
              {area.number} &middot; RAS Knowledge
            </p>
            <h1 className="mt-4 max-w-[22ch] text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[46px]">
              {area.title}
            </h1>
            <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.7] text-ink-soft md:text-[18.5px]">
              {area.summary}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12.5px] text-ink-soft">
              <Badge>{difficultyLabel[area.difficulty]}</Badge>
              {area.topics.map((topic) => (
                <Badge key={topic}>{topicLabel[topic]}</Badge>
              ))}
              <span>{readingMinutes(area)} min read</span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12.5px] text-ink-soft">
              <span>{area.author}</span>
              <span aria-hidden="true">&middot;</span>
              <span>Published {formatDate(area.publishedAt)}</span>
              <span aria-hidden="true">&middot;</span>
              <span>Updated {formatDate(area.updatedAt)}</span>
              <span aria-hidden="true">&middot;</span>
              <span>Version {area.version}</span>
            </div>

            <div className="mt-9 rounded-[18px] border border-hairline-strong bg-surface-muted p-5 md:p-6">
              <p className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                Quick understanding
              </p>
              <p className="mt-3 text-[16.5px] leading-[1.7] text-ink">{area.quickUnderstanding}</p>
            </div>

            {/* Contents inline on a phone, where a sticky rail has nowhere to sit. */}
            <nav aria-label="On this page" className="mt-9 lg:hidden">
              <TableOfContents area={area} />
            </nav>

            <div className="mt-12">
              <ArticleBody sections={area.sections} />
            </div>

            <section className="mt-14 border-t border-hairline pt-8">
              <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                Key takeaways
              </h2>
              <ul className="mt-4 space-y-3">
                {area.keyTakeaways.map((item) => (
                  <li
                    key={item}
                    className="relative pl-5 text-[15.5px] leading-[1.7] text-ink before:absolute before:left-0 before:top-[0.7em] before:h-[5px] before:w-[5px] before:rounded-full before:bg-accent-deep"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {related.length > 0 ? (
              <section className="mt-12 border-t border-hairline pt-8">
                <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                  Related knowledge
                </h2>
                <ul className="mt-4 space-y-3">
                  {related.map((entry) => (
                    <li key={entry.slug}>
                      <Link
                        href={`/knowledge/ras/${entry.slug}`}
                        className="text-[16px] font-medium text-ink underline underline-offset-4 transition-colors duration-200 hover:text-ink-soft"
                      >
                        {entry.title}
                      </Link>
                      <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">
                        {entry.navSummary}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {area.furtherReading && area.furtherReading.length > 0 ? (
              <section className="mt-12 border-t border-hairline pt-8">
                <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                  Further reading
                </h2>
                <ul className="mt-4 space-y-4">
                  {area.furtherReading.map((entry) => (
                    <li key={entry.organisation}>
                      {entry.url ? (
                        <a
                          href={entry.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-[15.5px] font-medium text-ink underline underline-offset-4 transition-colors duration-200 hover:text-ink-soft"
                        >
                          {entry.organisation}
                        </a>
                      ) : (
                        <span className="text-[15.5px] font-medium text-ink">
                          {entry.organisation}
                        </span>
                      )}
                      <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">
                        {entry.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section className="mt-12 border-t border-hairline pt-8">
              <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                Explore RAS engineering
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                Thirty areas covering the science, engineering, operation and economics of
                recirculating aquaculture.
              </p>
              <Link
                href="/knowledge/ras"
                className="mt-4 inline-flex text-[15px] font-medium text-ink underline underline-offset-4 transition-colors duration-200 hover:text-ink-soft"
              >
                All knowledge areas
              </Link>
            </section>

            <section className="mt-12 rounded-[18px] border border-hairline-strong p-6">
              <p className="text-[16px] font-medium text-ink">Build with Aero Intelli</p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                Bring the constraints of your site — water, power, species and market — and we will
                work through what they imply.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex min-h-[44px] items-center rounded-[12px] bg-ink px-5 text-[14px] font-medium text-surface transition-colors duration-200 hover:bg-ink/90"
              >
                Talk to Aero Intelli
              </Link>
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-[calc(var(--header-height)+2rem)]">
              <nav aria-label="On this page">
                <TableOfContents area={area} />
              </nav>
            </div>
          </aside>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </article>
  );
}

function TableOfContents({ area }: { area: KnowledgeArea }) {
  return (
    <>
      <p className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-soft">
        On this page
      </p>
      <ul className="mt-3 space-y-2 border-l border-hairline pl-4">
        {area.sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-[13.5px] leading-snug text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {section.heading}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-hairline-strong px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-soft">
      {children}
    </span>
  );
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
