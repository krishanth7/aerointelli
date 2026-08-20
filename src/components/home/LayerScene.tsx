"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { heroLayers } from "@/content/home";

/**
 * The hero's three-dimensional scene: the three layers of an Aero Intelli
 * system, stacked in depth.
 *
 * Real 3D, not a drawing of it. The scene sets a perspective, the plane inside
 * it carries `transform-style: preserve-3d`, and each card is pushed along the
 * Z axis with `translateZ`, so the browser composites genuine depth — cards
 * nearer the viewer are larger and offset more as the plane rotates, which no
 * amount of hand-authored offset reproduces convincingly.
 *
 * The plane leans toward the pointer. Rotation is capped at 9 degrees on each
 * axis: past roughly ten the type on the far edge starts to shear visibly and
 * the panel reads as a gimmick rather than as depth.
 *
 * Three things switch the tilt off entirely:
 *
 *   - `prefers-reduced-motion`, via `gsap.matchMedia`, which also reverts the
 *     transform rather than leaving the plane wherever it stopped.
 *   - Coarse pointers. On a phone there is no cursor to lean toward, and a
 *     touch would only tilt the plane after the finger had already landed.
 *   - Narrow viewports, where the cards are stacked flat and there is no depth
 *     to show.
 *
 * Pointer input is read on the scene and applied with `gsap.quickTo`, so the
 * handler never writes a style directly and the motion is interpolated on
 * GSAP's ticker instead of once per pointer event.
 */
export function LayerScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const plane = planeRef.current;
    if (!scene || !plane) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      // The cards rise into place on load. This runs at every size, including
      // reduced motion's absence — see the reduce branch below, which sets the
      // end state instead of animating to it.
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-layer-card]",
          { opacity: 0, y: 26, rotateX: -12 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
          },
        );
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-layer-card]", { opacity: 1, y: 0, rotateX: 0 });
      });

      media.add(
        "(prefers-reduced-motion: no-preference) and (pointer: fine) and (min-width: 1024px)",
        () => {
          const rotateX = gsap.quickTo(plane, "rotateX", { duration: 0.6, ease: "power3.out" });
          const rotateY = gsap.quickTo(plane, "rotateY", { duration: 0.6, ease: "power3.out" });

          function handleMove(event: PointerEvent) {
            const rect = scene!.getBoundingClientRect();
            // -0.5..0.5 from the centre of the scene, so the sign of the
            // rotation follows which side of centre the pointer is on.
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            rotateY(x * 18);
            rotateX(-y * 18);
          }

          function handleLeave() {
            rotateX(0);
            rotateY(0);
          }

          scene!.addEventListener("pointermove", handleMove);
          scene!.addEventListener("pointerleave", handleLeave);

          return () => {
            scene!.removeEventListener("pointermove", handleMove);
            scene!.removeEventListener("pointerleave", handleLeave);
            gsap.set(plane!, { rotateX: 0, rotateY: 0 });
          };
        },
      );

      return () => media.revert();
    }, scene);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={sceneRef}
      aria-hidden="true"
      className="[perspective:1400px] [perspective-origin:50%_45%]"
    >
      {/* Three nested planes, each owned by exactly one thing.

          The outer plane is rotated by the pointer, on a desktop with a cursor.
          The inner one is rotated by scroll position, in every view — that is
          what gives the scene depth on a phone, where there is no cursor to
          lean toward. Both need `preserve-3d` so the cards' own `translateZ`
          survives down the chain, and both must be separate nodes: GSAP and the
          pointer handler writing to one transform matrix would mean the last
          writer wins and the tilt would fight the scrub. */}
      <div ref={planeRef} className="[transform-style:preserve-3d]">
        <div
          data-scene-3d
          className="grid gap-3 [transform-style:preserve-3d] lg:gap-4"
        >
          {heroLayers.map((layer, index) => (
            <div
              key={layer.id}
              data-layer-card
              /* `translateZ` is what makes this a stack rather than a list: the
                 top card stands 56px in front of the bottom one, so any lean of
                 either plane moves them by different amounts. */
              style={{
                transform: `translateZ(${(heroLayers.length - 1 - index) * 28}px)`,
              }}
              className="rounded-[16px] border border-hairline bg-surface p-4 md:p-5"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[14.5px] font-medium tracking-[-0.01em] md:text-[15px]">
                  {layer.label}
                </span>
                <span className="text-[10px] font-semibold tabular-nums tracking-[0.12em] text-ink-soft/50">
                  {String(heroLayers.length - index).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-1.5 text-[13px] leading-[1.55] text-ink-soft">
                {layer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
