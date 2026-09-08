import Link from "next/link";
import type { KnowledgeArea } from "@/content/knowledge/types";

/**
 * The knowledge graph, rendered.
 *
 * Each section declares four neighbours by hand rather than having them
 * inferred from shared tags, because the useful links are the ones that cross a
 * discipline — nutrition to water quality, water quality to health, engineering
 * to automation — and a tag overlap finds the opposite: sections that already
 * say the same thing.
 */
export function KnowledgeRelatedTopics({
  sections,
  base = "/knowledge/aquaculture",
  heading = "Related knowledge",
}: {
  sections: KnowledgeArea[];
  base?: string;
  heading?: string;
}) {
  if (sections.length === 0) return null;

  return (
    <section className="mt-12 border-t border-hairline pt-8">
      <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft">
        {heading}
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {sections.map((section) => (
          <li key={section.slug}>
            <Link
              href={`${base}/${section.slug}`}
              className="flex h-full min-h-[44px] flex-col rounded-[14px] border border-hairline p-4 outline-none transition-colors duration-200 hover:border-ink/35 focus-visible:ring-2 focus-visible:ring-accent-deep"
            >
              <span className="text-[15.5px] font-medium leading-snug text-ink">
                {section.title}
              </span>
              <span className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">
                {section.navSummary}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
