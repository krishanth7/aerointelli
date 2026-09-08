"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { domains } from "@/content/knowledge/aquaculture/domains";
import { findSection } from "@/content/knowledge/aquaculture";

/**
 * Section navigation for phones.
 *
 * A sheet rather than a shrunken sidebar. Thirty links inline at the top of an
 * article is a screen and a half of contents before the first sentence, and a
 * sticky rail has nowhere to sit at this width. Closed it is one 44px control;
 * open it is the full list, grouped by domain so the reader can see the shape
 * of the subject rather than a flat run of thirty titles.
 *
 * Rendered as a sheet anchored to the bottom of the viewport because that is
 * where a thumb is. The domain groups collapse independently, and the group
 * containing the current page opens on mount.
 */
export function KnowledgeMobileNavigation() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").filter(Boolean).at(-1) ?? "";
  const currentDomain = domains.find((domain) => domain.sections.includes(currentSlug));

  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(currentDomain?.id ?? domains[0].id);

  // Close on navigation. Without this the sheet survives the route change and
  // the reader lands on the new article behind a panel they already dismissed
  // in intent.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // The page behind a full-height sheet must not scroll under it.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="aquaculture-section-sheet"
        className="flex min-h-[44px] w-full items-center justify-between rounded-[14px] border border-hairline-strong bg-surface px-4 text-[14.5px] font-medium text-ink outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent-deep"
      >
        Explore aquaculture
        <span aria-hidden="true" className="text-[12px] text-ink-soft">
          Thirty sections
        </span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          <button
            type="button"
            aria-label="Close section navigation"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink/35"
          />

          <div
            id="aquaculture-section-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Aquaculture sections"
            className="relative flex max-h-[85vh] flex-col rounded-t-[22px] border-t border-hairline-strong bg-surface"
          >
            <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
              <p className="text-[15px] font-medium text-ink">Explore aquaculture</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="-mr-2 flex min-h-[44px] min-w-[44px] items-center justify-center text-[13px] text-ink-soft outline-none focus-visible:ring-2 focus-visible:ring-accent-deep"
              >
                Close
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-8 pt-2">
              <ul className="divide-y divide-hairline">
                {domains.map((domain) => {
                  const isExpanded = expanded === domain.id;

                  return (
                    <li key={domain.id}>
                      <button
                        type="button"
                        onClick={() => setExpanded(isExpanded ? null : domain.id)}
                        aria-expanded={isExpanded}
                        className="flex min-h-[52px] w-full items-center justify-between gap-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent-deep"
                      >
                        <span className="text-[14.5px] font-medium text-ink">
                          <span className="text-ink-soft">{domain.number}</span> {domain.title}
                        </span>
                        <span aria-hidden="true" className="text-[13px] text-ink-soft">
                          {isExpanded ? "−" : "+"}
                        </span>
                      </button>

                      {isExpanded ? (
                        <ul className="pb-3">
                          {domain.sections.map((slug) => {
                            const section = findSection(slug);
                            if (!section) return null;
                            const href = `/knowledge/aquaculture/${slug}`;
                            const active = pathname === href;

                            return (
                              <li key={slug}>
                                <Link
                                  href={href}
                                  {...(active ? { "aria-current": "page" as const } : {})}
                                  className={`flex min-h-[44px] items-center text-[14.5px] leading-snug outline-none focus-visible:ring-2 focus-visible:ring-accent-deep ${
                                    active ? "font-medium text-ink" : "text-ink-soft"
                                  }`}
                                >
                                  {section.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
