import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/knowledge/ArticleBody";
import { KnowledgeMobileNavigation } from "@/components/knowledge/KnowledgeMobileNavigation";
import { KnowledgePagination } from "@/components/knowledge/KnowledgePagination";
import { KnowledgeRelatedTopics } from "@/components/knowledge/KnowledgeRelatedTopics";
import { KnowledgeSidebar } from "@/components/knowledge/KnowledgeSidebar";
import { SHELL } from "@/components/shared/shell";
import {
  aquacultureSections,
  domainOf,
  findSection,
  neighbours,
  relatedSections,
} from "@/content/knowledge/aquaculture";
import {
  difficultyLabel,
  readingMinutes,
  topicLabel,
  type KnowledgeArea,
} from "@/content/knowledge/types";
import { siteUrl } from "@/config/site";

type Params = { section: string };

export function generateStaticParams(): Params[] {
  return aquacultureSections.map((entry) => ({ section: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { section: slug } = await params;
  const section = findSection(slug);
  if (!section) return {};

  return {
    title: section.title,
    description: section.summary,
    alternates: { canonical: `/knowledge/aquaculture/${slug}` },
    openGraph: { type: "article", title: section.title, description: section.summary },
  };
}

/**
 * One aquaculture section.
 *
 * Three panes on a wide screen: the thirty-section rail on the left so the
 * reader never loses the shape of the subject, the article in the middle at a
 * measure that stays readable, and the contents of this page on the right.
 * Below the large breakpoint both rails leave — the left becomes a sheet, the
 * right becomes a disclosure above the article — because a documentation
 * layout scaled down is three columns of nothing.
 */
export default async function SectionPage({ params }: { params: Promise<Params> }) {
  const { section: slug } = await params;
  const section = findSection(slug);
  if (!section) notFound();

  const domain = domainOf(slug);
  const related = relatedSections(section);
  const { previous, next } = neighbours(slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: section.title,
    description: section.summary,
    datePublished: section.publishedAt,
    dateModified: section.updatedAt,
    author: { "@type": "Organization", name: section.author },
    publisher: { "@type": "Organization", name: "Aero Intelli" },
    mainEntityOfPage: `${siteUrl}/knowledge/aquaculture/${slug}`,
    proficiencyLevel: difficultyLabel[section.difficulty],
  };

  return (
    <article className="bg-surface pb-20 pt-[calc(var(--header-height-mobile)+1rem)] md:pb-28 md:pt-[calc(var(--header-height)+2rem)]">
      <div className="mx-auto w-full max-w-[1440px] px-5 min-[414px]:px-[22px] md:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[240px_minmax(0,1fr)_220px] xl:gap-14">
          <aside className="hidden lg:block">
            <div className="sticky top-[calc(var(--header-height)+2rem)]">
              <KnowledgeSidebar />
            </div>
          </aside>

          <div className="min-w-0">
            <div className="lg:hidden">
              <KnowledgeMobileNavigation />
            </div>

            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft lg:mt-0">
              {section.number} &middot; {domain ? domain.title : "Aquaculture"}
            </p>
            <h1 className="mt-4 max-w-[22ch] text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[46px] lg:text-[52px]">
              {section.title}
            </h1>
            <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.7] text-ink-soft md:text-[18.5px]">
              {section.summary}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12.5px] text-ink-soft">
              <Badge>{difficultyLabel[section.difficulty]}</Badge>
              {section.topics.map((topic) => (
                <Badge key={topic}>{topicLabel[topic]}</Badge>
              ))}
              <span>{readingMinutes(section)} min read</span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12.5px] text-ink-soft">
              <span>{section.author}</span>
              <span aria-hidden="true">&middot;</span>
              <span>Published {formatDate(section.publishedAt)}</span>
              <span aria-hidden="true">&middot;</span>
              <span>Updated {formatDate(section.updatedAt)}</span>
              <span aria-hidden="true">&middot;</span>
              <span>Version {section.version}</span>
            </div>

            {section.species && section.species.length > 0 ? (
              <p className="mt-4 text-[13px] text-ink-soft">
                Species covered: {section.species.join(", ")}
              </p>
            ) : null}

            <div className="mt-9 rounded-[18px] border border-hairline-strong bg-surface-muted p-5 md:p-6">
              <p className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                Quick understanding
              </p>
              <p className="mt-3 text-[16.5px] leading-[1.7] text-ink">
                {section.quickUnderstanding}
              </p>
            </div>

            {/* Contents inline below the extra-large breakpoint, where the right
                rail is not rendered. A `details` element rather than a list, so
                it costs one line until it is wanted. */}
            <details className="mt-9 rounded-[18px] border border-hairline p-5 xl:hidden">
              <summary className="cursor-pointer text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft outline-none focus-visible:ring-2 focus-visible:ring-accent-deep">
                On this page
              </summary>
              <div className="mt-4">
                <TableOfContents section={section} />
              </div>
            </details>

            <div className="mt-12">
              <ArticleBody sections={section.sections} />
            </div>

            <section className="mt-14 border-t border-hairline pt-8">
              <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                Key takeaways
              </h2>
              <ul className="mt-4 space-y-3">
                {section.keyTakeaways.map((item) => (
                  <li
                    key={item}
                    className="relative pl-5 text-[15.5px] leading-[1.7] text-ink before:absolute before:left-0 before:top-[0.7em] before:h-[5px] before:w-[5px] before:rounded-full before:bg-accent-deep"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <KnowledgeRelatedTopics sections={related} />

            {section.furtherReading && section.furtherReading.length > 0 ? (
              <section className="mt-12 border-t border-hairline pt-8">
                <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                  Further reading
                </h2>
                <ul className="mt-4 space-y-4">
                  {section.furtherReading.map((entry) => (
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

            <KnowledgePagination previous={previous} next={next} />

            <section className="mt-12 border-t border-hairline pt-8">
              <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                Explore aquaculture
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                Thirty sections across eight domains, from the fundamentals through production,
                water, health and systems to economics and research.
              </p>
              <Link
                href="/knowledge/aquaculture"
                className="mt-4 inline-flex min-h-[44px] items-center text-[15px] font-medium text-ink underline underline-offset-4 transition-colors duration-200 hover:text-ink-soft"
              >
                All aquaculture sections
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

          <aside className="hidden xl:block">
            <div className="sticky top-[calc(var(--header-height)+2rem)]">
              <nav aria-label="On this page">
                <TableOfContents section={section} />
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

function TableOfContents({ section }: { section: KnowledgeArea }) {
  return (
    <>
      <p className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-soft">
        On this page
      </p>
      <ul className="mt-3 space-y-2 border-l border-hairline pl-4">
        {section.sections.map((part) => (
          <li key={part.id}>
            <a
              href={`#${part.id}`}
              className="text-[13.5px] leading-snug text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {part.heading}
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
