"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { initHome } from "@/lib/animations/scrollSystem";

/**
 * Owns the home page's GSAP context.
 *
 * Same contract as the about and sustainability scaffolds: every scroll trigger
 * on the page is registered from one place and reverted with one call, so
 * navigating away cannot leave triggers attached to detached nodes. Children are
 * server-rendered content passed straight through, which keeps the page itself a
 * server component — only this wrapper ships to the browser.
 */
export function HomeScaffold({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const bars = [progressBarRef.current].filter(
      (bar): bar is HTMLDivElement => bar !== null,
    );

    const context = initHome({ root, progressBars: bars });

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[2px] bg-transparent"
      >
        <div
          ref={progressBarRef}
          data-progress-axis="x"
          className="h-full origin-left scale-x-0 bg-accent-deep"
        />
      </div>

      {children}
    </div>
  );
}
