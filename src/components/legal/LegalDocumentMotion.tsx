"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initLegalDocument } from "@/lib/animations/legalDocumentAnimations";

/**
 * Single scroll controller for the Privacy Policy document.
 * Everything runs inside one gsap.context so unmount reverts cleanly.
 */
export function LegalDocumentMotion({ targetId }: { targetId: string }) {
  useEffect(() => {
    const root = document.getElementById(targetId);
    if (!root) return;

    const context = initLegalDocument({
      root,
      progressBars: Array.from(
        document.querySelectorAll<HTMLElement>("[data-progress-bar]"),
      ),
      progressLabel: document.querySelector<HTMLElement>("[data-progress-label]"),
      heroParallax: root.querySelector<HTMLElement>("[data-legal-hero]"),
    });

    // Web fonts change section heights, so re-measure once everything has loaded.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const timer = window.setTimeout(refresh, 600);

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(timer);
      context.revert();
    };
  }, [targetId]);

  return null;
}
