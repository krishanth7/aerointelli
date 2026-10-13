"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import type { SearchEntry } from "@/content/knowledge/navigation";

/**
 * Search across a knowledge center's sections.
 *
 * Client-side and substring-based over a pre-built index of titles, summaries,
 * tags, topics, species and section headings. Thirty entries is small enough
 * that a search service would be ceremony: the whole index is a few kilobytes
 * of strings, matching is instant, and it keeps working with no network.
 *
 * Multi-term queries are treated as AND rather than as one phrase, so "lettuce
 * nutrient" finds the section about both rather than nothing.
 */
export function KnowledgeSearch({
  entries,
  base,
  placeholder,
  label,
}: {
  entries: SearchEntry[];
  /** Route prefix the results link into, e.g. "/knowledge/hydroponics". */
  base: string;
  placeholder: string;
  label: string;
}) {
  const [query, setQuery] = useState("");
  const id = useId();

  const terms = useMemo(() => query.toLowerCase().split(/\s+/).filter(Boolean), [query]);

  const results = useMemo(() => {
    if (terms.length === 0) return [];
    return entries
      .filter((entry) => terms.every((term) => entry.haystack.includes(term)))
      .slice(0, 8);
  }, [entries, terms]);

  const searching = terms.length > 0;

  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="min-h-[52px] w-full rounded-[14px] border border-hairline-strong bg-surface px-4 text-[15.5px] text-ink outline-none transition-colors duration-200 placeholder:text-ink-soft/70 focus-visible:border-ink/35 focus-visible:ring-2 focus-visible:ring-accent-deep"
      />

      {/* Results announced politely rather than assertively: a reader typing
          should not be interrupted mid-word by every intermediate count. */}
      <div aria-live="polite" className="sr-only">
        {searching ? `${results.length} matching sections` : ""}
      </div>

      {searching ? (
        <div className="mt-3 overflow-hidden rounded-[16px] border border-hairline-strong bg-surface">
          {results.length === 0 ? (
            <p className="px-4 py-4 text-[14.5px] text-ink-soft">
              Nothing matches that. Try a broader term — a crop, a parameter or a system type.
            </p>
          ) : (
            <ul className="divide-y divide-hairline">
              {results.map((entry) => (
                <li key={entry.slug}>
                  <Link
                    href={`${base}/${entry.slug}`}
                    className="block px-4 py-3 outline-none transition-colors duration-200 hover:bg-surface-muted focus-visible:ring-2 focus-visible:ring-accent-deep"
                  >
                    <p className="text-[10.5px] font-medium uppercase tracking-[0.12em] text-ink-soft">
                      {entry.category}
                    </p>
                    <p className="mt-1 text-[15.5px] font-medium leading-snug text-ink">
                      {entry.title}
                    </p>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">
                      {entry.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
