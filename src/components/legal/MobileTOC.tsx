"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { TocItem } from "./AnimatedTOC";
import { useActiveSection } from "./useActiveSection";

export function MobileTOC({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const activeId = useActiveSection(items.map((item) => item.id));
  const current = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <div className="print-hidden sticky top-[76px] z-40 md:top-[94px] xl:hidden">
      <div className="overflow-hidden rounded-[10px] border border-legal-border bg-[rgba(248,249,245,0.92)] backdrop-blur-[14px]">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="legal-toc-mobile"
          className="flex min-h-[52px] w-full items-center justify-between gap-3 px-4 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-legal-focus"
        >
          <span className="flex min-w-0 items-center gap-3">
            <span className="text-[11px] tracking-[0.14em] text-legal-muted">
              {current?.number}
            </span>
            <span className="truncate text-[13px] font-medium uppercase tracking-[0.1em] text-legal-heading">
              {current?.label}
            </span>
          </span>
          <span
            aria-hidden="true"
            className={`shrink-0 text-[18px] leading-none text-legal-muted transition-transform duration-[250ms] ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              id="legal-toc-mobile"
              key="panel"
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
              className="overflow-hidden border-t border-legal-border"
            >
              <ul className="max-h-[52dvh] overflow-y-auto px-4 py-2">
                {items.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={activeId === item.id ? "true" : undefined}
                      className={`flex min-h-[44px] items-center gap-3 text-[14px] outline-none transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-legal-focus ${
                        activeId === item.id
                          ? "font-medium text-legal-heading"
                          : "text-legal-secondary"
                      }`}
                    >
                      <span className="text-[10.5px] tracking-[0.14em] text-legal-muted">
                        {item.number}
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
