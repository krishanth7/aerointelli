import Link from "next/link";
import type { KnowledgeArea } from "@/content/knowledge/types";

/**
 * A compact card for one knowledge section.
 *
 * Deliberately small: number, title, one line, the count of parts inside, and
 * an arrow. A landing page holding thirty of these is an index, and an index
 * that needs scrolling past three cards to see the fourth has stopped being
 * one.
 */
export function KnowledgeSectionCard({
  section,
  base = "/knowledge/aquaculture",
}: {
  section: KnowledgeArea;
  base?: string;
}) {
  return (
    <Link
      href={`${base}/${section.slug}`}
      className="group flex h-full w-full flex-col rounded-[16px] border border-hairline-strong bg-surface p-5 outline-none transition-colors duration-200 hover:border-ink/35 focus-visible:ring-2 focus-visible:ring-accent-deep"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-[11.5px] tabular-nums tracking-[0.1em] text-ink-soft">
          {section.number}
        </span>
        <span
          aria-hidden="true"
          className="text-[14px] leading-none text-ink-soft transition-transform duration-200 group-hover:translate-x-0.5"
        >
          &rarr;
        </span>
      </div>

      <h3 className="mt-3 text-[16.5px] font-medium leading-snug text-ink">{section.title}</h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{section.navSummary}</p>

      <p className="mt-4 pt-1 text-[11.5px] text-ink-soft">
        {section.sections.length} topics
      </p>
    </Link>
  );
}
