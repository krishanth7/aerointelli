import Link from "next/link";
import type { KnowledgeArea } from "@/content/knowledge/types";

/**
 * Previous and next in reading order.
 *
 * The thirty sections were ordered as a syllabus, so a reader who came in at
 * section nine from a search result should be able to keep going without
 * returning to the index to work out what follows. Direction is labelled rather
 * than implied by arrows alone, since an arrow on its own says nothing to a
 * screen reader.
 */
export function KnowledgePagination({
  previous,
  next,
  base = "/knowledge/aquaculture",
}: {
  previous?: KnowledgeArea;
  next?: KnowledgeArea;
  base?: string;
}) {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Section navigation"
      className="mt-12 grid gap-3 border-t border-hairline pt-8 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={`${base}/${previous.slug}`}
          className="flex min-h-[44px] flex-col justify-center rounded-[14px] border border-hairline-strong p-4 outline-none transition-colors duration-200 hover:border-ink/35 focus-visible:ring-2 focus-visible:ring-accent-deep"
        >
          <span className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-soft">
            Previous
          </span>
          <span className="mt-1.5 text-[15.5px] font-medium leading-snug text-ink">
            {previous.title}
          </span>
        </Link>
      ) : (
        <span aria-hidden="true" className="hidden sm:block" />
      )}

      {next ? (
        <Link
          href={`${base}/${next.slug}`}
          className="flex min-h-[44px] flex-col justify-center rounded-[14px] border border-hairline-strong p-4 outline-none transition-colors duration-200 hover:border-ink/35 focus-visible:ring-2 focus-visible:ring-accent-deep sm:items-end sm:text-right"
        >
          <span className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-soft">
            Next
          </span>
          <span className="mt-1.5 text-[15.5px] font-medium leading-snug text-ink">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
