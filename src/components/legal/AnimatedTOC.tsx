"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useActiveSection } from "./useActiveSection";

export type TocItem = { id: string; number: string; label: string };

export function AnimatedTOC({ items }: { items: TocItem[] }) {
  const activeId = useActiveSection(items.map((item) => item.id));
  const listRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const indicator = indicatorRef.current;
    if (!list || !indicator) return;

    if (!activeId) {
      gsap.to(indicator, { opacity: 0, duration: 0.2 });
      return;
    }

    const target = list.querySelector<HTMLElement>(`[data-toc-id="${activeId}"]`);
    const container = indicator.parentElement;
    if (!target || !container) return;

    // Rect math keeps the dot on the exact row centre; row heights are fractional.
    const place = () => {
      const rowBox = target.getBoundingClientRect();
      const containerBox = container.getBoundingClientRect();
      const y = rowBox.top - containerBox.top + rowBox.height / 2 - indicator.offsetHeight / 2;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const firstPlacement = gsap.getProperty(indicator, "opacity") === 0;

      gsap.to(indicator, {
        y,
        opacity: 1,
        duration: reduce || firstPlacement ? 0 : 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    place();

    // Fonts and internal nav scrolling both shift row positions.
    const frame = requestAnimationFrame(place);
    const nav = container.closest("nav");
    nav?.addEventListener("scroll", place, { passive: true });
    window.addEventListener("resize", place);

    return () => {
      cancelAnimationFrame(frame);
      nav?.removeEventListener("scroll", place);
      window.removeEventListener("resize", place);
    };
  }, [activeId]);

  return (
    <nav
      aria-label="Document sections"
      className="legal-toc-scroll print-hidden hidden xl:sticky xl:top-[120px] xl:block xl:max-h-[calc(100dvh-140px)] xl:overflow-y-auto"
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-legal-muted">
        Document
      </p>

      <div className="relative mt-5">
        <span
          ref={indicatorRef}
          aria-hidden="true"
          className="absolute -left-[2.5px] top-0 h-[6px] w-[6px] rounded-full bg-accent-deep opacity-0 ring-[3px] ring-legal-bg"
        />
        <ul ref={listRef} className="border-l border-legal-border">
          {items.map((item) => {
            const active = activeId === item.id;
            return (
              <li key={item.id} data-toc-id={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "true" : undefined}
                  className="group flex items-baseline gap-2.5 py-[3px] pl-5 outline-none transition-transform duration-200 hover:translate-x-[2px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-legal-focus"
                >
                  <span
                    className={`w-[16px] shrink-0 text-[10px] tabular-nums transition-colors duration-200 ${
                      active ? "text-legal-heading" : "text-legal-muted"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`truncate text-[13px] leading-[1.35] transition-colors duration-200 ${
                      active
                        ? "font-medium text-legal-heading"
                        : "text-legal-secondary group-hover:text-legal-heading"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
