import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SHELL } from "@/components/shared/shell";
import { articlesInCategory } from "@/content/knowledge/articles";
import { findCategory, rasCategories } from "@/content/knowledge/categories";
import { difficultyLabel, readingMinutes } from "@/content/knowledge/types";

type Params = { category: string };

export function generateStaticParams(): Params[] {
  return rasCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = findCategory(slug);
  if (!category) return {};

  return {
    title: `${category.title} | RAS Knowledge`,
    description: category.summary,
    alternates: { canonical: `/knowledge/ras/${slug}` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { category: slug } = await params;
  const category = findCategory(slug);
  if (!category) notFound();

  const articles = articlesInCategory(slug);

  return (
    <section className="bg-surface pb-20 pt-[calc(var(--header-height-mobile)+1rem)] md:pb-28 md:pt-[calc(var(--header-height)+2rem)]">
      <Breadcrumbs />
      <div className={SHELL}>
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">
          RAS Knowledge
        </p>
        <h1 className="mt-4 max-w-[18ch] text-[34px] font-semibold leading-[1.06] tracking-[-0.03em] text-ink md:text-[52px]">
          {category.title}
        </h1>
        <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-ink-soft">
          {category.summary}
        </p>

        {articles.length > 0 ? (
          <ul className="mt-12 divide-y divide-hairline border-y border-hairline">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/knowledge/ras/${category.slug}/${article.slug}`}
                  className="block py-6 outline-none transition-colors duration-200 hover:bg-surface-muted focus-visible:ring-2 focus-visible:ring-accent-deep"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] text-ink-soft">
                    <span className="uppercase tracking-[0.1em]">
                      {difficultyLabel[article.difficulty]}
                    </span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{readingMinutes(article)} min read</span>
                  </div>
                  <p className="mt-2 text-[20px] font-medium leading-snug text-ink md:text-[22px]">
                    {article.title}
                  </p>
                  <p className="mt-2 max-w-[70ch] text-[14.5px] leading-relaxed text-ink-soft">
                    {article.summary}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          // No placeholder article stubs. An empty section says it is empty.
          <div className="mt-12 rounded-[18px] border border-hairline-strong p-6">
            <p className="text-[15.5px] font-medium text-ink">Not yet written.</p>
            <p className="mt-2 max-w-[62ch] text-[14.5px] leading-relaxed text-ink-soft">
              This section is part of the Knowledge Center map but holds no published articles. It
              will be written properly rather than filled quickly.
            </p>
            <Link
              href="/knowledge/ras"
              className="mt-5 inline-flex min-h-[44px] items-center text-[14px] font-medium text-ink underline underline-offset-4"
            >
              Back to the Knowledge Center
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
