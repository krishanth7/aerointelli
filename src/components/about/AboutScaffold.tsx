"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { initAbout } from "@/lib/animations/scrollSystem";

/**
 * Owns the about page's GSAP context.
 *
 * Same contract as the sustainability scaffold: every scroll trigger on the page
 * is registered from one place and reverted with one call, so navigating away
 * cannot leave triggers attached to detached nodes. Children are server-rendered
 * content passed straight through.
 *
 * There is no side chapter rail. It duplicated the section headings, sat on top
 * of the hero artwork at common desktop widths, and needed a blend mode to stay
 * legible over alternating light and dark sections — three costs for navigation
 * the document already provides. A single progress hairline is left.
 */
export function AboutScaffold({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const bars = [progressBarRef.current].filter(
      (bar): bar is HTMLDivElement => bar !== null,
    );

    const context = initAbout({ root, progressBars: bars });

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
