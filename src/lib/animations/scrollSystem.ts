import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll choreography shared by the marketing pages.
 *
 * Every animation here is scroll-driven and owned by GSAP. Component and hover
 * state is owned by Framer Motion in the components themselves — the two never
 * animate the same property on the same element, which is what stops them
 * fighting over the transform matrix.
 *
 * Nothing in this file may hide content. Each helper animates from a state the
 * element is already in, so a failure to run leaves the page fully readable
 * rather than blank. The initial hidden state is set here rather than in CSS for
 * exactly that reason.
 */

const DESKTOP = "(prefers-reduced-motion: no-preference) and (min-width: 1024px)";
const MOTION_OK = "(prefers-reduced-motion: no-preference)";

/** Headlines rise a line at a time from behind a clipped mask. */
export function initTextReveals(root: HTMLElement, distance: number) {
  const lines = gsap.utils.toArray<HTMLElement>("[data-reveal-line]", root);

  for (const line of lines) {
    gsap.fromTo(
      line,
      { yPercent: distance, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: line, start: "top 90%", once: true },
      },
    );
  }
}

/**
 * Headlines that rise a character at a time.
 *
 * The stagger is capped by line length rather than fixed per character, so a
 * two-word line and a nine-word line take about the same time to complete and
 * the page keeps one rhythm. Characters animate together with the line's own
 * mask, so nothing is ever visible outside it.
 */
export function initLetterReveals(root: HTMLElement) {
  const lines = gsap.utils.toArray<HTMLElement>("[data-letter-line]", root);

  for (const line of lines) {
    const letters = gsap.utils.toArray<HTMLElement>("[data-letter]", line);
    if (letters.length === 0) continue;

    gsap.fromTo(
      letters,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: Math.min(0.02, 0.5 / letters.length),
        scrollTrigger: { trigger: line, start: "top 88%", once: true },
      },
    );
  }
}

/**
 * Hairline rules draw out from their leading edge.
 *
 * Marked with `data-rule`. Purely structural — a rule that has not drawn yet is
 * still a rule of zero width, so nothing readable depends on this running.
 */
export function initRules(root: HTMLElement) {
  const rules = gsap.utils.toArray<HTMLElement>("[data-rule]", root);

  for (const rule of rules) {
    gsap.fromTo(
      rule,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.9,
        ease: "power3.out",
        transformOrigin: "left center",
        scrollTrigger: { trigger: rule, start: "top 92%", once: true },
      },
    );
  }
}

/** Generic block entrance. Staggered per group so cards never arrive together. */
export function initBlockReveals(root: HTMLElement) {
  const groups = gsap.utils.toArray<HTMLElement>("[data-reveal-group]", root);

  for (const group of groups) {
    const items = gsap.utils.toArray<HTMLElement>("[data-reveal-item]", group);
    if (items.length === 0) continue;

    gsap.fromTo(
      items,
      { y: 22, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: { trigger: group, start: "top 85%", once: true },
      },
    );
  }
}

/**
 * Three-layer depth. The multiplier is the fraction of the scrolled distance the
 * layer travels, so 0.15 is nearly static and 0.6 is clearly foreground.
 */
export function initParallax(root: HTMLElement, scale: number) {
  const layers = gsap.utils.toArray<HTMLElement>("[data-parallax]", root);

  for (const layer of layers) {
    const depth = Number(layer.dataset.parallax) || 0.2;

    gsap.fromTo(
      layer,
      { yPercent: -depth * scale },
      {
        yPercent: depth * scale,
        ease: "none",
        scrollTrigger: {
          trigger: layer.closest("section") ?? layer,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      },
    );
  }
}

/** SVG flow paths draw themselves in the direction the resource travels. */
export function initPathDraws(root: HTMLElement) {
  const paths = gsap.utils.toArray<SVGPathElement | SVGLineElement>("[data-draw-path]", root);

  for (const path of paths) {
    const length = path.getTotalLength();
    if (!length) continue;

    gsap.fromTo(
      path,
      { strokeDasharray: length, strokeDashoffset: length },
      {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.inOut",
        scrollTrigger: { trigger: path.closest("svg") ?? path, start: "top 80%", once: true },
      },
    );
  }
}

/**
 * Pipeline and schematic stages light up in order as the section is scrubbed.
 * `data-stage-track` marks the container, `data-stage` each step.
 */
export function initStageSequences(root: HTMLElement) {
  const tracks = gsap.utils.toArray<HTMLElement>("[data-stage-track]", root);

  for (const track of tracks) {
    const stages = gsap.utils.toArray<HTMLElement>("[data-stage]", track);
    if (stages.length === 0) continue;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: track,
        start: "top 78%",
        end: "bottom 55%",
        scrub: 0.5,
      },
    });

    // fromTo rather than to: the dimmed state is introduced by GSAP and only
    // exists while GSAP is running. Without JavaScript, or under reduced
    // motion, every stage stays at its authored full opacity.
    stages.forEach((stage, index) => {
      timeline.fromTo(
        stage,
        { opacity: 0.28 },
        { opacity: 1, duration: 0.4, ease: "none" },
        index * 0.3,
      );
    });
  }
}

/**
 * Editorial pillar numbers deepen and drift as they cross the viewport. Kept
 * below full opacity throughout so they never compete with the heading over them.
 */
export function initEditorialNumbers(root: HTMLElement) {
  const numbers = gsap.utils.toArray<HTMLElement>("[data-editorial-number]", root);

  for (const number of numbers) {
    gsap.fromTo(
      number,
      { opacity: 0.05, x: -14 },
      {
        opacity: 0.28,
        x: 10,
        ease: "none",
        scrollTrigger: {
          trigger: number.closest("[data-reveal-item]") ?? number,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.7,
        },
      },
    );
  }
}

/** Case study rail. Desktop only — mobile keeps a normal vertical stack. */
export function initHorizontalRail(root: HTMLElement) {
  const rail = root.querySelector<HTMLElement>("[data-horizontal-rail]");
  const track = rail?.querySelector<HTMLElement>("[data-horizontal-track]");
  if (!rail || !track) return;

  const overflow = track.scrollWidth - rail.clientWidth;
  if (overflow <= 0) return;

  gsap.to(track, {
    x: -overflow,
    ease: "none",
    scrollTrigger: {
      trigger: rail,
      start: "top top+=96",
      end: () => `+=${overflow}`,
      pin: true,
      scrub: 0.6,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });
}

/** Page-level scroll position. Drives the thin progress rail and the chapter nav. */
export function initScrollProgress(
  root: HTMLElement,
  bars: HTMLElement[],
  onProgress?: (progress: number) => void,
) {
  ScrollTrigger.create({
    trigger: root,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      for (const bar of bars) {
        const axis = bar.dataset.progressAxis === "y" ? "scaleY" : "scaleX";
        gsap.set(bar, { [axis]: Math.max(self.progress, 0.004) });
      }
      onProgress?.(self.progress);
    },
  });
}

/** Reports the section currently occupying the upper half of the viewport. */
export function initChapterTracking(ids: string[], onChange: (id: string) => void) {
  for (const id of ids) {
    const section = document.getElementById(id);
    if (!section) continue;

    ScrollTrigger.create({
      trigger: section,
      start: "top 45%",
      end: "bottom 45%",
      onEnter: () => onChange(id),
      onEnterBack: () => onChange(id),
    });
  }
}

export type SustainabilityRefs = {
  root: HTMLElement;
  progressBars: HTMLElement[];
  chapterIds: string[];
  onChapterChange: (id: string) => void;
  onProgress?: (progress: number) => void;
};

/**
 * Single entry point. Returns a gsap.Context so the component can revert every
 * tween and ScrollTrigger on unmount with one call.
 *
 * The tiers are deliberate: progress and chapter tracking are navigation and run
 * even under reduced motion; reveals need motion; parallax and pinning are
 * decorative and desktop-only.
 */
export function initSustainability(refs: SustainabilityRefs) {
  return gsap.context(() => {
    const media = gsap.matchMedia();

    // Navigation aids. These run regardless of motion preference because they
    // report position rather than animate for effect.
    initScrollProgress(refs.root, refs.progressBars, refs.onProgress);
    initChapterTracking(refs.chapterIds, refs.onChapterChange);

    media.add(MOTION_OK, () => {
      initPathDraws(refs.root);
      initStageSequences(refs.root);
      initBlockReveals(refs.root);
    });

    // Mobile gets a shorter travel distance so reveals do not read as jumps.
    media.add("(prefers-reduced-motion: no-preference) and (max-width: 1023px)", () => {
      initTextReveals(refs.root, 60);
      initParallax(refs.root, 3);
    });

    media.add(DESKTOP, () => {
      initTextReveals(refs.root, 110);
      initParallax(refs.root, 8);
      initEditorialNumbers(refs.root);
      initHorizontalRail(refs.root);
    });

    // See the note in `initAbout`: triggers created on a remount can keep a null
    // `end` until something forces a measurement.
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(frame);
      media.revert();
    };
  }, refs.root);
}

/**
 * Hero settle. The headline gives up a little scale and the visual drifts up as
 * the first section takes over, so the two screens read as one movement rather
 * than a cut. Scale only — never opacity, because the headline must stay legible
 * through the whole transition.
 */
export function initHeroScrub(root: HTMLElement) {
  const hero = root.querySelector<HTMLElement>("[data-hero-scrub]");
  if (!hero) return;

  const headline = hero.querySelector<HTMLElement>("[data-hero-headline]");
  const visual = hero.querySelector<HTMLElement>("[data-hero-visual]");

  const timeline = gsap.timeline({
    scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.6 },
  });

  if (headline) {
    timeline.fromTo(headline, { scale: 1 }, { scale: 0.92, ease: "none", transformOrigin: "left top" }, 0);
  }
  if (visual) {
    timeline.fromTo(visual, { yPercent: 0 }, { yPercent: -12, ease: "none" }, 0);
  }
}

/**
 * The pinned system diagram.
 *
 * Nodes come up in the order a resource actually travels, and each connecting
 * link draws only after the node it feeds is lit. Pinned on desktop only: on a
 * phone the same markup scrolls normally and every node stays fully visible.
 */
export function initPinnedSystem(root: HTMLElement) {
  const stage = root.querySelector<HTMLElement>("[data-pinned-system]");
  if (!stage) return;

  const nodes = gsap.utils.toArray<HTMLElement>("[data-system-node]", stage);
  const links = gsap.utils.toArray<SVGPathElement | SVGLineElement>("[data-system-link]", stage);
  const plane = stage.querySelector<HTMLElement>("[data-system-plane]");
  const shells = gsap.utils.toArray<HTMLElement>("[data-system-shell]", stage);
  if (nodes.length === 0) return;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: stage,
      start: "top top",
      end: () => `+=${nodes.length * 220 + 320}`,
      pin: true,
      scrub: 0.6,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });

  // Depth first. The ring starts tilted away and stands up into a flat plane
  // before any node lights, so the reader is looking at a square diagram by the
  // time it starts carrying information.
  //
  // This has to live on the pinned timeline rather than a trigger of its own: a
  // pinned element's top never travels through the viewport, so an independent
  // scrub would complete the instant the pin engaged.
  if (plane) {
    timeline.fromTo(
      plane,
      { rotateX: 32, scale: 0.92, y: 24 },
      { rotateX: 0, scale: 1, y: 0, duration: 1, ease: "power2.out" },
      0,
    );
  }

  shells.forEach((shell, index) => {
    timeline.fromTo(
      shell,
      { scale: 1.14 - index * 0.04, opacity: 0.12 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
      index * 0.12,
    );
  });

  // Nodes light in travel order, offset past the tilt so the two never overlap.
  nodes.forEach((node, index) => {
    timeline.fromTo(
      node,
      { opacity: 0.22 },
      { opacity: 1, duration: 0.5, ease: "none" },
      1 + index * 0.5,
    );
  });

  links.forEach((link, index) => {
    const length = link.getTotalLength();
    if (!length) return;

    timeline.fromTo(
      link,
      { strokeDasharray: length, strokeDashoffset: length },
      { strokeDashoffset: 0, duration: 0.5, ease: "none" },
      1.25 + index * 0.5,
    );
  });
}

/**
 * Vertical rule that fills as a numbered process is scrubbed. Purely an
 * indicator — the steps beside it are readable whether or not it runs.
 */
export function initProcessFill(root: HTMLElement) {
  const fills = gsap.utils.toArray<HTMLElement>("[data-process-fill]", root);

  for (const fill of fills) {
    const track = fill.closest("[data-stage-track]") ?? fill;

    gsap.fromTo(
      fill,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        transformOrigin: "top center",
        scrollTrigger: { trigger: track, start: "top 75%", end: "bottom 60%", scrub: 0.5 },
      },
    );
  }
}

export type AboutRefs = {
  root: HTMLElement;
  progressBars: HTMLElement[];
  /**
   * Only the sustainability scaffold still reports a chapter; the about page's
   * rail is gone. Optional rather than removed so one entry point serves both.
   */
  chapterIds?: string[];
  onChapterChange?: (id: string) => void;
};

/**
 * Single entry point for the about page. Same tiering rule as the sustainability
 * page: position reporting always runs, reveals need motion, and anything that
 * pins or parallaxes is desktop-only because it costs layout on a phone.
 */
export function initAbout(refs: AboutRefs) {
  return gsap.context(() => {
    const media = gsap.matchMedia();

    initScrollProgress(refs.root, refs.progressBars);
    const { chapterIds, onChapterChange } = refs;
    if (chapterIds && onChapterChange) initChapterTracking(chapterIds, onChapterChange);

    media.add(MOTION_OK, () => {
      initPathDraws(refs.root);
      initStageSequences(refs.root);
      initBlockReveals(refs.root);
      initProcessFill(refs.root);
      initLetterReveals(refs.root);
      initRules(refs.root);
    });

    media.add("(prefers-reduced-motion: no-preference) and (max-width: 1023px)", () => {
      initTextReveals(refs.root, 60);
      initParallax(refs.root, 3);
    });

    media.add(DESKTOP, () => {
      initTextReveals(refs.root, 110);
      initParallax(refs.root, 8);
      initEditorialNumbers(refs.root);
      initHeroScrub(refs.root);
      initPinnedSystem(refs.root);
    });

    // React mounts, unmounts and remounts this effect in development, and the
    // second mount lands after ScrollTrigger's own start-up refresh has already
    // run. Triggers created then keep a null `end` until something forces a
    // measurement — which is why the pinned system reserved no scroll distance
    // and every scrub sat at progress 0. One frame later the layout is settled
    // and a single refresh resolves every trigger on the page. A timeout rather
    // than a frame callback: rAF is suspended while the tab is hidden, so the
    // refresh would never land on a page opened in a background tab.
    const settle = window.setTimeout(() => ScrollTrigger.refresh(), 0);

    return () => {
      window.clearTimeout(settle);
      media.revert();
    };
  }, refs.root);
}

/**
 * Depth cards that rotate out of the page as their section arrives.
 *
 * Distinct from `initBlockReveals` in that the card rotates on the X axis
 * rather than only translating, which needs a perspective on the container to
 * mean anything — the markup supplies it.
 *
 * Played once at a threshold rather than scrubbed. A scrubbed entrance ties the
 * card's opacity to scroll position, and a reader who stops mid-section is left
 * looking at half-faded text; the depth is worth having, a half-legible card is
 * not.
 */
export function initDepthCards(root: HTMLElement) {
  const groups = gsap.utils.toArray<HTMLElement>("[data-depth-group]", root);

  for (const group of groups) {
    const cards = gsap.utils.toArray<HTMLElement>("[data-depth-card]", group);
    if (cards.length === 0) continue;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 46, rotateX: 14, transformOrigin: "center bottom" },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.09,
        scrollTrigger: { trigger: group, start: "top 85%", once: true },
      },
    );
  }
}

/**
 * Scroll-driven depth for a 3D plane.
 *
 * The pointer tilt in `LayerScene` needs a cursor and a wide viewport, which
 * means on a phone or a tablet the scene was flat — the perspective and the
 * `translateZ` on the cards were still there, but nothing ever rotated the
 * plane, so none of that depth was visible. This drives the same two rotations
 * from scroll position instead, so the layers separate and close again as the
 * section passes and the effect is present in every view rather than only on a
 * desktop with a mouse.
 *
 * Scrubbed, unlike the card entrances: this animates transform only. A reader
 * who stops halfway is looking at a plane at a slight angle, which is a
 * legitimate resting state, not half-faded text.
 *
 * The rotation is small and crosses zero in the middle of the travel, so the
 * scene is square to the reader exactly when it is centred in the viewport —
 * the point at which they are most likely to be reading it.
 */
export function initScene3D(root: HTMLElement) {
  const planes = gsap.utils.toArray<HTMLElement>("[data-scene-3d]", root);

  for (const plane of planes) {
    gsap.fromTo(
      plane,
      { rotateX: 13, y: 10 },
      {
        rotateX: -7,
        y: -10,
        ease: "none",
        scrollTrigger: {
          trigger: plane,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      },
    );
  }
}

export type ContactRefs = {
  root: HTMLElement;
  progressBars: HTMLElement[];
};

/**
 * Single entry point for the contact page.
 *
 * The contact page is mostly a form, so the motion budget is deliberately
 * smaller than the home page's: no parallax, no pinning, nothing that moves
 * while somebody is typing. What it does get is the depth treatment — the hero
 * diagram and the process cards sit on real Z offsets and rotate with scroll —
 * which reads at every width because `initScene3D` is registered under
 * `MOTION_OK` rather than the desktop tier.
 */
export function initContact(refs: ContactRefs) {
  return gsap.context(() => {
    const media = gsap.matchMedia();

    initScrollProgress(refs.root, refs.progressBars);

    media.add(MOTION_OK, () => {
      initBlockReveals(refs.root);
      initLetterReveals(refs.root);
      initRules(refs.root);
      initDepthCards(refs.root);
      initScene3D(refs.root);
    });

    media.add("(prefers-reduced-motion: no-preference) and (max-width: 1023px)", () => {
      initTextReveals(refs.root, 60);
    });

    media.add(DESKTOP, () => {
      initTextReveals(refs.root, 110);
    });

    const settle = window.setTimeout(() => ScrollTrigger.refresh(), 0);

    return () => {
      window.clearTimeout(settle);
      media.revert();
    };
  }, refs.root);
}

export type HomeRefs = {
  root: HTMLElement;
  progressBars: HTMLElement[];
};

/**
 * Single entry point for the home page.
 *
 * Same tiering rule as the other two orchestrators: position reporting always
 * runs, reveals need motion, and anything that pins or parallaxes is
 * desktop-only because it costs layout on a phone.
 */
export function initHome(refs: HomeRefs) {
  return gsap.context(() => {
    const media = gsap.matchMedia();

    initScrollProgress(refs.root, refs.progressBars);

    media.add(MOTION_OK, () => {
      initBlockReveals(refs.root);
      initLetterReveals(refs.root);
      initRules(refs.root);
      initDepthCards(refs.root);
      initProcessFill(refs.root);
      // Every view, not just desktop: this is what makes the hero scene read as
      // three dimensional without a cursor.
      initScene3D(refs.root);
    });

    media.add("(prefers-reduced-motion: no-preference) and (max-width: 1023px)", () => {
      initTextReveals(refs.root, 60);
      initParallax(refs.root, 3);
    });

    media.add(DESKTOP, () => {
      initTextReveals(refs.root, 110);
      initParallax(refs.root, 8);
      initEditorialNumbers(refs.root);
    });

    // See the note in `initAbout`: triggers created on a development remount
    // land after ScrollTrigger's start-up refresh and keep a null `end` until
    // something forces a measurement. A timeout rather than a frame callback,
    // because rAF is suspended while the tab is hidden.
    const settle = window.setTimeout(() => ScrollTrigger.refresh(), 0);

    return () => {
      window.clearTimeout(settle);
      media.revert();
    };
  }, refs.root);
}
