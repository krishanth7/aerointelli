"use client";

import Link from "next/link";
import type { NavGroup } from "@/config/navigation";
import { isActive } from "./isActive";

type NavDropdownProps = {
  id: string;
  label: string;
  href: string;
  groups: NavGroup[];
  open: boolean;
  pathname: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function NavDropdown({
  id,
  label,
  href,
  groups,
  open,
  pathname,
  onMouseEnter,
  onMouseLeave,
}: NavDropdownProps) {
  const columns = Math.min(groups.length, 3);

  return (
    <div
      id={id}
      aria-label={label}
      hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute left-1/2 top-full z-10 w-[min(920px,calc(100vw-96px))] -translate-x-1/2 pt-3"
    >
      <div className="overflow-hidden rounded-[20px] border border-hairline bg-surface shadow-panel">
        <div className="flex items-center justify-between border-b border-hairline px-7 py-3.5">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-soft">
            {label}
          </p>
          <Link
            href={href}
            className="rounded-[8px] text-[12.5px] font-medium text-ink-soft outline-none transition-colors duration-200 hover:text-ink focus-visible:ring-2 focus-visible:ring-ink/25"
          >
            View all {label.toLowerCase()}
          </Link>
        </div>

        <div
          className="grid gap-y-7 px-7 py-7"
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
          {groups.map((group, index) => (
            <div
              key={group.title}
              className={
                index % columns === 0 ? "pr-7" : "border-l border-hairline pl-7 pr-7 last:pr-0"
              }
            >
              <p className="mb-3 text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-soft/70">
                {group.title}
              </p>
              <ul className="space-y-0.5">
                {group.items.map((leaf) => (
                  <li key={leaf.href}>
                    <Link
                      href={leaf.href}
                      aria-current={isActive(leaf.href, pathname) ? "page" : undefined}
                      className={`block rounded-[10px] px-3 py-2.5 outline-none transition-colors duration-200 hover:bg-surface-muted focus-visible:ring-2 focus-visible:ring-ink/25 ${
                        isActive(leaf.href, pathname) ? "bg-accent/45" : ""
                      }`}
                    >
                      <span className="block text-[13.5px] font-medium leading-snug text-ink">
                        {leaf.label}
                      </span>
                      {leaf.description && (
                        <span className="mt-1 block text-[12px] leading-snug text-ink-soft">
                          {leaf.description}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
