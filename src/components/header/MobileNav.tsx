"use client";

import Link from "next/link";
import { useState } from "react";
import { navigationItems } from "@/config/navigation";
import { HeaderCTA } from "./HeaderCTA";
import { isActive } from "./isActive";

type MobileNavProps = {
  id: string;
  open: boolean;
  pathname: string;
  onNavigate: () => void;
};

const rowClass =
  "flex w-full items-center justify-between rounded-[14px] px-4 py-3 text-[15px] font-medium text-ink outline-none transition-colors duration-200 hover:bg-surface-muted focus-visible:ring-2 focus-visible:ring-ink/25";

export function MobileNav({ id, open, pathname, onNavigate }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const [wasOpen, setWasOpen] = useState(open);
  if (wasOpen !== open) {
    setWasOpen(open);
    if (!open) setExpanded(null);
  }

  return (
    <div
      id={id}
      hidden={!open}
      className="absolute inset-x-3 top-full z-10 pt-3 md:inset-x-7 xl:hidden"
    >
      <div className="max-h-[calc(100dvh-110px)] overflow-y-auto overscroll-contain rounded-[22px] border border-hairline bg-surface p-3 shadow-panel">
        <nav aria-label="Mobile primary">
          <ul className="space-y-0.5">
            {navigationItems.map((item) => {
              const active = isActive(item.href, pathname);

              if (item.type === "link") {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      aria-current={active ? "page" : undefined}
                      className={`${rowClass} ${active ? "bg-accent/55" : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const isOpen = expanded === item.label;
              const panelId = `mobile-section-${item.label.toLowerCase()}`;

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    className={`${rowClass} ${active && !isOpen ? "bg-accent/55" : ""}`}
                  >
                    {item.label}
                    <svg aria-hidden="true" viewBox="0 0 14 14" className="h-3.5 w-3.5">
                      <path
                        d="M2.5 7h9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 2.5v9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        className={`origin-center transition-transform duration-200 ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </svg>
                  </button>
                  <div id={panelId} hidden={!isOpen} className="pb-2 pl-2 pr-1 pt-1">
                    {item.groups.map((group) => (
                      <div key={group.title} className="mb-2 last:mb-0">
                        <p className="px-3 py-1 text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-soft/70">
                          {group.title}
                        </p>
                        <ul>
                          {group.items.map((leaf) => (
                            <li key={leaf.href}>
                              <Link
                                href={leaf.href}
                                onClick={onNavigate}
                                aria-current={isActive(leaf.href, pathname) ? "page" : undefined}
                                className={`block rounded-[12px] px-3 py-2.5 text-[14px] text-ink-soft outline-none transition-colors duration-200 hover:bg-surface-muted hover:text-ink focus-visible:ring-2 focus-visible:ring-ink/25 ${
                                  isActive(leaf.href, pathname) ? "bg-accent/45 text-ink" : ""
                                }`}
                              >
                                {leaf.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mt-3 border-t border-hairline px-1 pt-3">
          <HeaderCTA variant="panel" />
        </div>
      </div>
    </div>
  );
}
