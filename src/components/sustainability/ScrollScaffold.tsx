"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { chapters } from "@/content/sustainability";
import { initSustainability } from "@/lib/animations/scrollSystem";

/**
 * Owns the page's GSAP context.
 *
 * Everything scroll-driven on this page is registered from one place and
 * reverted with one call, so a navigation away cannot leave ScrollTriggers
 * attached to detached nodes. The children are server-rendered content passed
 * straight through — this component adds behaviour, not markup around content.
 */
export function ScrollScaffold({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const desktopBarRef = useRef<HTMLDivElement>(null);
  const mobileBarRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState(chapters[0].id);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const bars = [desktopBarRef.current, mobileBarRef.current].filter(
      (bar): bar is HTMLDivElement => bar !== null,
    );

    const context = initSustainability({
      root,
      progressBars: bars,
      chapterIds: chapters.map((chapter) => chapter.id),
      onChapterChange: setActiveChapter,
    });

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative">
      {/* Mobile progress: a hairline pinned under the header. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[2px] bg-transparent lg:hidden"
      >
        <div
          ref={mobileBarRef}
          data-progress-axis="x"
          className="h-full origin-left scale-x-0 bg-accent-deep"
        />
      </div>

      {/* Desktop chapter rail. Presentational: every chapter is also a real
          section heading in the document, so nothing here is the only route to
          the content. */}
      <nav
        aria-label="Page sections"
        className="pointer-events-none fixed right-6 top-1/2 z-[70] hidden -translate-y-1/2 lg:block"
      >
        <div className="flex items-start gap-3">
          <div aria-hidden="true" className="mt-1 h-24 w-px overflow-hidden bg-hairline">
            <div
              ref={desktopBarRef}
              data-progress-axis="y"
              className="h-full w-full origin-top scale-y-0 bg-accent-deep"
            />
          </div>

          <ul className="space-y-2">
            {chapters.map((chapter, index) => {
              const active = chapter.id === activeChapter;

              return (
                <li key={chapter.id} className="pointer-events-auto">
                  <a
                    href={`#${chapter.id}`}
                    aria-current={active ? "true" : undefined}
                    className="group flex items-center gap-2.5 py-0.5"
                  >
                    <span
                      className={`text-[10px] font-semibold tabular-nums tracking-[0.12em] transition-colors duration-300 ${
                        active ? "text-ink" : "text-ink-soft/45 group-hover:text-ink-soft"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <AnimatePresence initial={false}>
                      {active ? (
                        <motion.span
                          initial={{ opacity: 0, x: -4 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -4 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="text-[11px] font-medium tracking-[0.04em]"
                        >
                          {chapter.label}
                        </motion.span>
                      ) : null}
                    </AnimatePresence>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {children}
    </div>
  );
}
