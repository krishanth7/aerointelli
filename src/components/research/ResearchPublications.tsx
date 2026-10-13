"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SHELL } from "@/components/shared/shell";
import { researchPublications } from "@/content/research/data";
import type { PublicationType } from "@/content/research/types";

const typeFilters: { id: "all" | PublicationType; label: string }[] = [
  { id: "all", label: "All Documents" },
  { id: "Engineering Report", label: "Engineering Reports" },
  { id: "Technical Note", label: "Technical Notes" },
  { id: "Whitepaper", label: "Whitepapers" },
  { id: "Research Brief", label: "Research Briefs" },
];

export function ResearchPublications() {
  const [activeType, setActiveType] = useState<"all" | PublicationType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return researchPublications.filter((doc) => {
      const matchesType = activeType === "all" || doc.type === activeType;
      const matchesSearch =
        searchQuery.trim() === "" ||
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.abstract.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [activeType, searchQuery]);

  return (
    <section id="publications" className="border-t border-hairline bg-surface-muted py-20 md:py-28">
      <div className={SHELL}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              05 / PUBLICATIONS & TECHNICAL INSIGHTS
            </p>
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px] md:text-[50px]">
              Knowledge Worth Sharing.
            </h2>
          </div>
          <p className="max-w-[48ch] text-[15px] leading-relaxed text-ink-soft">
            Open engineering notes, kinetic analyses, and design methodology released for scrutiny
            by the agricultural and aquatic engineering community.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-hairline pb-6">
          <div className="flex flex-wrap items-center gap-1.5">
            {typeFilters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveType(tab.id)}
                className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors ${
                  activeType === tab.id
                    ? "bg-ink text-surface"
                    : "bg-surface text-ink-soft hover:text-ink border border-hairline"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative max-w-xs">
            <input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-[12px] border border-hairline bg-surface px-3.5 py-2 text-[13px] text-ink placeholder:text-ink-soft/60 outline-none focus:border-ink/40"
            />
          </div>
        </div>

        {/* Editorial Publication Records List */}
        <div className="mt-8 divide-y divide-hairline border-y border-hairline">
          {filtered.map((pub) => (
            <div
              key={pub.id}
              className="group py-6 transition-colors duration-200 hover:bg-surface/60"
            >
              <div className="grid gap-4 md:grid-cols-12 md:items-baseline md:gap-8">
                {/* Meta Column (3 cols) */}
                <div className="md:col-span-3 flex items-center gap-3 md:flex-col md:items-start md:gap-1">
                  <span className="font-mono text-[13px] font-semibold text-ink">
                    {pub.year}
                  </span>
                  <span className="rounded-full bg-surface px-2.5 py-0.5 font-mono text-[10.5px] uppercase text-emerald-900 border border-hairline">
                    {pub.type}
                  </span>
                  <span className="text-[12.5px] text-ink-soft">{pub.domain}</span>
                </div>

                {/* Content Column (7 cols) */}
                <div className="md:col-span-7">
                  <h3 className="text-[18px] font-semibold text-ink group-hover:text-emerald-950 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft line-clamp-2">
                    {pub.abstract}
                  </p>
                  <p className="mt-3 text-[12px] font-mono text-ink-soft">
                    Authors: {pub.authors.join(", ")} &middot; {pub.readTime}
                  </p>
                </div>

                {/* Action Link (2 cols) */}
                <div className="md:col-span-2 md:text-right">
                  <Link
                    href={pub.href}
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink underline underline-offset-4 hover:text-emerald-800"
                  >
                    Read Note &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-[20px] border border-hairline bg-surface p-12 text-center mt-6">
            <p className="text-[16px] font-medium text-ink">No documents matching your search</p>
          </div>
        )}
      </div>
    </section>
  );
}
