"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { navigationItems } from "@/config/navigation";
import { isActive } from "./isActive";
import { NavDropdown } from "./NavDropdown";

export function DesktopNav({
  pathname,
  dark = false,
}: {
  pathname: string;
  dark?: boolean;
}) {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenLabel(null), 180);
  }, [cancelClose]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpenLabel(null);
  }

  useEffect(() => {
    if (!openLabel) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenLabel(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openLabel]);

  const itemClass = dark
    ? "relative flex h-9 items-center gap-1 whitespace-nowrap rounded-[11px] px-2 text-[13.5px] font-medium text-white/80 outline-none transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/25 2xl:px-3 2xl:text-[14px]"
    : "relative flex h-9 items-center gap-1 whitespace-nowrap rounded-[11px] px-2 text-[13.5px] font-medium text-ink-soft outline-none transition-colors duration-200 hover:bg-surface-muted hover:text-ink focus-visible:ring-2 focus-visible:ring-ink/25 2xl:px-3 2xl:text-[14px]";

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      className="hidden min-w-0 flex-1 items-center justify-center xl:flex"
      onBlur={(event) => {
        if (!navRef.current?.contains(event.relatedTarget as Node | null)) setOpenLabel(null);
      }}
    >
      <ul className="flex items-center gap-0.5 2xl:gap-1.5">
        {navigationItems.map((item) => {
          const active = isActive(item.href, pathname);
          const activeClass = active
            ? dark
              ? "text-white after:absolute after:inset-x-2 after:bottom-[3px] after:h-[2px] after:rounded-full after:bg-accent"
              : "text-ink after:absolute after:inset-x-2 after:bottom-[3px] after:h-[2px] after:rounded-full after:bg-accent-deep"
            : "";

          if (item.type === "link") {
            return (
              <li key={item.label} onMouseEnter={() => setOpenLabel(null)}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`${itemClass} ${activeClass}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          }

          const open = openLabel === item.label;

          return (
            <li
              key={item.label}
              className="static"
              onMouseEnter={() => {
                cancelClose();
                setOpenLabel(item.label);
              }}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`nav-menu-${item.label.toLowerCase()}`}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpenLabel(open ? null : item.label)}
                className={`${itemClass} ${activeClass} ${
                  open ? (dark ? "bg-white/10 text-white" : "bg-surface-muted text-ink") : ""
                }`}
              >
                <span>{item.label}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 12 12"
                  className={`h-3 w-3 transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  } ${dark ? "text-white/60" : "text-ink-soft/75"}`}
                >
                  <path
                    d="M3 4.75 6 7.75l3-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <NavDropdown
                id={`nav-menu-${item.label.toLowerCase()}`}
                label={item.label}
                href={item.href}
                groups={item.groups}
                open={open}
                pathname={pathname}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
