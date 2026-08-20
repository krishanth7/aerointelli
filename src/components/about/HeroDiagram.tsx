"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { heroChain } from "@/content/about";

/**
 * The hero visual: the chain the company works along, assembling itself.
 *
 * water → biology → cultivation → data → intelligence
 *
 * No SVG. Two earlier versions drew this as a diagram and both failed for the
 * same underlying reason: a fixed viewBox has to hold five labels at every
 * rendered width, and the widest of them is wider than the space between two
 * nodes on a phone. The zig-zag version solved that by scattering the labels,
 * which put the upper nodes' captions on top of the lower nodes' rings. The
 * flat version solved it by shrinking everything, which left five words on a
 * hairline in a large empty card — correct geometry, nothing to read.
 *
 * A chain of five ordered links with a sentence each is a list. Setting it as
 * one removes the whole class of bug: labels are real CSS text, they wrap where
 * they need to, and the same markup is right at 320px and at 1600px with no
 * breakpoint-specific geometry to keep in sync. It also earns the space it
 * occupies, which the hairline did not.
 *
 * Nothing is authored hidden: GSAP introduces the hidden state and removes it
 * again, so without JavaScript the chain renders complete. The list is
 * aria-hidden — every link is named in the copy beside it — but the ordered
 * markup is kept because the order is the point.
 */
export function HeroDiagram() {
  const rootRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Each connector draws downward into the link it feeds, and the link
        // arrives just behind it, so the chain reads as a direction of travel
        // rather than as five things appearing at once.
        timeline.fromTo(
          "[data-chain-rail]",
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 0.3,
            ease: "none",
            stagger: 0.14,
            transformOrigin: "top center",
          },
          0.25,
        );

        timeline.fromTo(
          "[data-chain-dot]",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.35, stagger: 0.14 },
          0.2,
        );

        timeline.fromTo(
          "[data-chain-copy]",
          { opacity: 0, x: -12 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.14 },
          0.28,
        );
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-chain-rail]", { scaleY: 1 });
        gsap.set("[data-chain-dot], [data-chain-copy]", { opacity: 1, scale: 1, x: 0 });
      });

      return () => media.revert();
    }, root);

    return () => context.revert();
  }, []);

  return (
    <ol ref={rootRef} aria-hidden="true" className="relative">
      {heroChain.map((link, index) => (
        <li key={link.id} className="relative flex gap-3.5">
          {/* One connector per gap rather than one rail down the whole list.
              The dot column is a fixed 20px wide and the marker is centred in a
              36px box, so a dot centre is always 18px below its row's top. A
              segment running from `18px` to `-18px` therefore spans exactly
              from this dot's centre to the next one's, whatever either row's
              height turns out to be — and the last row gets no segment, so
              nothing hangs below the final link implying a sixth. */}
          {index < heroChain.length - 1 ? (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-[18px] bottom-[-18px] flex w-5 justify-center"
            >
              <span
                data-chain-rail
                className="h-full w-px origin-top bg-hairline-strong"
              />
            </span>
          ) : null}

          <span className="flex h-9 w-5 shrink-0 items-center justify-center">
            <span
              data-chain-dot
              className="h-2.5 w-2.5 rounded-full bg-accent-deep ring-[3px] ring-surface"
            />
          </span>

          <div data-chain-copy className="min-w-0 pb-3">
            <div className="flex items-baseline gap-2.5">
              <span className="text-[10px] font-semibold tabular-nums tracking-[0.12em] text-ink-soft/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] font-medium leading-none tracking-[-0.01em] md:text-[15.5px]">
                {link.label}
              </span>
            </div>
            <p className="mt-1.5 text-[13px] leading-[1.55] text-ink-soft">{link.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
