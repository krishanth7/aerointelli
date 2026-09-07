import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/knowledge/ArticleBody";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SHELL } from "@/components/shared/shell";
import { articles, findArticle } from "@/content/knowledge/articles";
import { findCategory } from "@/content/knowledge/categories";
import { difficultyLabel, readingMinutes, statusLabel } from "@/content/knowledge/types";
import { siteUrl } from "@/config/site";

type Params = { category: string; slug: string };

export function generateStaticParams(): Params[] {
  return articles.map((article) => ({ category: article.category, slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const article = findArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/knowledge/ras/${category}/${slug}` },
    openGraph: { type: "article", title: article.title, description: article.summary },
  };
}

/**
 * A knowledge article.
 *
 * Three panes on a desktop — category navigation, the article, the contents
 * rail — collapsing to a single column with the contents inline on a phone.
 * The provenance strip under the title is not decoration: an article that has
 * not been technically reviewed says so before the reader has read a word of
 * it.
 */
export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { category: categorySlug, slug } = await params;
  const article = findArticle(slug);
  const category = findCategory(categorySlug);

  // Guards against a category that does not hold this article, so the same
  // page cannot be reached at two different URLs.
  if (!article || !category || article.category !== categorySlug) notFound();

  const related = article.related
    .map((relatedSlug) => findArticle(relatedSlug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.summary,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "Organization", name: "Aero Intelli" },
    mainEntityOfPage: `${siteUrl}/knowledge/ras/${categorySlug}/${slug}`,
    proficiencyLevel: difficultyLabel[article.difficulty],
  };

  return (
    <article className="bg-surface pb-20 pt-[calc(var(--header-height-mobile)+1rem)] md:pb-28 md:pt-[calc(var(--header-height)+2rem)]">
      <Breadcrumbs />

      <div className={SHELL}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16">
          <div className="min-w-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">
              {category.title}
            </p>
            <h1 className="mt-4 max-w-[22ch] text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[46px]">
              {article.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12.5px] text-ink-soft">
              <Badge>{difficultyLabel[article.difficulty]}</Badge>
              <Badge>{statusLabel[article.status]}</Badge>
              <span>{readingMinutes(article)} min read</span>
              <span aria-hidden="true">&middot;</span>
              <span>Updated {formatDate(article.updatedAt)}</span>
              <span aria-hidden="true">&middot;</span>
              <span>Version {article.version}</span>
            </div>

            {article.status !== "reviewed" ? (
              // Stated at the top rather than buried at the foot. A reader
              // deciding how much weight to give an article should not have to
              // scroll to the end to find out it has not been signed off.
              <p className="mt-6 rounded-[14px] border border-hairline-strong bg-surface-muted p-4 text-[13.5px] leading-relaxed text-ink-soft">
                This article has not yet completed technical review. It is published because it is
                useful, and it is labelled because it is not yet an Aero Intelli technical guide.
              </p>
            ) : null}

            <div className="mt-9 rounded-[18px] border border-hairline-strong bg-surface-muted p-5 md:p-6">
              <p className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                Quick answer
              </p>
              <p className="mt-3 text-[16.5px] leading-[1.7] text-ink">{article.quickAnswer}</p>
            </div>

            {/* Contents inline on a phone, where a sticky rail has nowhere to sit. */}
            <nav aria-label="On this page" className="mt-9 lg:hidden">
              <TableOfContents article={article} />
            </nav>

            <div className="mt-12">
              <ArticleBody sections={article.sections} />
            </div>

            <section className="mt-14 border-t border-hairline pt-8">
              <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                Engineering note
              </h2>
              <p className="mt-3 text-[15.5px] leading-[1.7] text-ink">{article.engineeringNote}</p>
            </section>

            <section className="mt-12 border-t border-hairline pt-8">
              <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                Sources
              </h2>
              <ul className="mt-4 space-y-4">
                {article.sources.map((source) => (
                  <li key={source.id} className="text-[14.5px] leading-relaxed">
                    <span className="font-medium text-ink">{source.title}</span>
                    <span className="block text-ink-soft">
                      {[source.author, source.publisher, source.year].filter(Boolean).join(" · ")}
                    </span>
                    {source.note ? (
                      <span className="mt-1 block text-ink-soft">{source.note}</span>
                    ) : null}
                    {source.url ? (
                      <a
                        href={source.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="mt-1 inline-block text-ink underline underline-offset-4"
                      >
                        {source.url}
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>

            {related.length > 0 ? (
              <section className="mt-12 border-t border-hairline pt-8">
                <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                  Continue learning
                </h2>
                <ul className="mt-4 space-y-3">
                  {related.map((entry) => (
                    <li key={entry.slug}>
                      <Link
                        href={`/knowledge/ras/${entry.category}/${entry.slug}`}
                        className="text-[16px] font-medium text-ink underline underline-offset-4 transition-colors duration-200 hover:text-ink-soft"
                      >
                        {entry.title}
                      </Link>
                      <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">
                        {entry.summary}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section className="mt-12 rounded-[18px] border border-hairline-strong p-6">
              <p className="text-[16px] font-medium text-ink">Planning a commercial RAS system?</p>
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
                <TableOfContents article={article} />
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

function TableOfContents({ article }: { article: ReturnType<typeof findArticle> }) {
  if (!article) return null;

  return (
    <>
      <p className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-soft">
        On this page
      </p>
      <ul className="mt-3 space-y-2 border-l border-hairline pl-4">
        {article.sections.map((section) => (
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
