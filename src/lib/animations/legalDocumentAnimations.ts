import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type LegalAnimationRefs = {
  root: HTMLElement;
  progressBars: HTMLElement[];
  progressLabel: HTMLElement | null;
  heroParallax: HTMLElement | null;
};

/**
 * Reading progress for the legal article.
 * Drives the desktop vertical rail, the mobile horizontal rail and the percentage readout.
 */
export function initReadingProgress({
  root,
  progressBars,
  progressLabel,
}: Pick<LegalAnimationRefs, "root" | "progressBars" | "progressLabel">) {
  if (progressBars.length === 0) return;

  let lastPercent = -1;

  ScrollTrigger.create({
    trigger: root,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      for (const bar of progressBars) {
        const axis = bar.dataset.progressAxis === "y" ? "scaleY" : "scaleX";
        gsap.set(bar, { [axis]: Math.max(progress, 0.004) });
      }
      if (progressLabel) {
        const percent = Math.round(progress * 100);
        if (percent !== lastPercent) {
          lastPercent = percent;
          progressLabel.textContent = `${percent}%`;
        }
      }
    },
  });
}

/**
 * Section choreography: number, heading, divider, then body.
 * One ScrollTrigger per section, never per paragraph.
 */
export function initSectionReveals(root: HTMLElement) {
  const sections = gsap.utils.toArray<HTMLElement>("[data-legal-section]", root);

  for (const section of sections) {
    const number = section.querySelector<HTMLElement>('[data-reveal="number"]');
    const heading = section.querySelector<HTMLElement>('[data-reveal="heading"]');
    const divider = section.querySelector<HTMLElement>('[data-reveal="divider"]');
    const body = section.querySelector<HTMLElement>('[data-reveal="body"]');

    const rising = [number, heading, body].filter(Boolean) as HTMLElement[];
    gsap.set(rising, { opacity: 0, y: 14 });
    if (divider) gsap.set(divider, { scaleX: 0, transformOrigin: "left center" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 88%",
        once: true,
      },
      defaults: { ease: "power2.out" },
    });

    if (number) timeline.to(number, { opacity: 1, y: 0, duration: 0.4 }, 0);
    if (heading) timeline.to(heading, { opacity: 1, y: 0, duration: 0.5 }, 0.06);
    if (divider) timeline.to(divider, { scaleX: 1, duration: 0.6 }, 0.14);
    if (body) timeline.to(body, { opacity: 1, y: 0, duration: 0.5 }, 0.2);
  }
}

/** Contact block: border draws, then the text settles. */
export function initContactReveal(root: HTMLElement) {
  const block = root.querySelector<HTMLElement>("[data-contact-block]");
  if (!block) return;

  const rule = block.querySelector<HTMLElement>("[data-contact-rule]");
  const content = block.querySelector<HTMLElement>("[data-contact-content]");

  if (rule) gsap.set(rule, { scaleX: 0, transformOrigin: "left center" });
  if (content) gsap.set(content, { opacity: 0, y: 12 });

  const timeline = gsap.timeline({
    scrollTrigger: { trigger: block, start: "top 85%", once: true },
    defaults: { ease: "power2.out" },
  });

  if (rule) timeline.to(rule, { scaleX: 1, duration: 0.7 }, 0);
  if (content) timeline.to(content, { opacity: 1, y: 0, duration: 0.55 }, 0.18);
}

/** Desktop-only hero settle. Movement stays under 15px. */
export function initHeroParallax(hero: HTMLElement | null) {
  if (!hero) return;

  const meta = hero.querySelector<HTMLElement>("[data-hero-meta]");

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: 0.4,
    },
  });

  if (meta) timeline.to(meta, { y: 12, ease: "none" }, 0);
  timeline.to(hero, { opacity: 0.85, ease: "none" }, 0);
}

/**
 * Single entry point. Returns a gsap.Context so React can revert on unmount.
 * Reduced motion and small screens get a deliberately reduced set.
 */
export function initLegalDocument(refs: LegalAnimationRefs) {
  return gsap.context(() => {
    const media = gsap.matchMedia();

    // Reading progress is essential and runs everywhere motion is allowed.
    media.add("(prefers-reduced-motion: no-preference)", () => {
      initReadingProgress(refs);
      initSectionReveals(refs.root);
      initContactReveal(refs.root);
    });

    // Parallax is decorative: desktop only.
    media.add(
      "(prefers-reduced-motion: no-preference) and (min-width: 1024px)",
      () => {
        initHeroParallax(refs.heroParallax);
      },
    );

    return () => media.revert();
  }, refs.root);
}
