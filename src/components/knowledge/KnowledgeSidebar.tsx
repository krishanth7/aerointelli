"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { domains } from "@/content/knowledge/aquaculture/domains";
import { findSection } from "@/content/knowledge/aquaculture";

/**
 * The persistent left rail of the Aquaculture Knowledge Center.
 *
 * Every one of the thirty sections is listed at every moment, grouped by
 * domain, rather than only the siblings of the page you are on. A
 * documentation reader navigates by scanning the whole contents; hiding
 * twenty-six of thirty entries behind an accordion saves height that a sticky
 * rail with its own scroll does not need to save.
 *
 * Desktop only. The phone gets `KnowledgeMobileNavigation`, which is a
 * different information architecture rather than this list at a smaller size.
 */
export function KnowledgeSidebar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Aquaculture sections" className="text-[13.5px]">
      <p className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-soft">
        Explore aquaculture
      </p>

      {/* Its own scroll, pinned to the viewport height below the header, so a
          long contents list never pushes the page taller than the article. */}
      <div className="mt-4 max-h-[calc(100vh-var(--header-height)-7rem)] overflow-y-auto pr-2">
        <ul className="space-y-6">
          {domains.map((domain) => (
            <li key={domain.id}>
              <p className="text-[10.5px] font-medium uppercase tracking-[0.12em] text-ink-soft/80">
                {domain.number} &middot; {domain.title}
              </p>
              <ul className="mt-2 space-y-px border-l border-hairline">
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
                        className={`-ml-px block border-l py-1.5 pl-3 leading-snug outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent-deep ${
                          active
                            ? "border-ink font-medium text-ink"
                            : "border-transparent text-ink-soft hover:border-hairline-strong hover:text-ink"
                        }`}
                      >
                        {section.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
