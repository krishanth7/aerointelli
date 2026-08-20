"use client";

import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * A card that leans toward the cursor in three dimensions.
 *
 * Same restraint as `MagneticButton`: the effect is small, capped, and absent
 * wherever it would not make sense. Rotation is limited to 5 degrees on each
 * axis — enough to read as depth on a card this size, not enough to shear the
 * type — and the card lifts 6px toward the viewer at the same time so the tilt
 * has somewhere to pivot from.
 *
 * The transform is written straight to the node rather than held in React
 * state. A pointermove handler that calls `setState` re-renders the subtree on
 * every mouse position, which is both wasteful and visibly late; the browser
 * can composite a transform without React involved at all.
 *
 * Reduced motion disables it. Touch does not need to be special-cased here:
 * `pointermove` on a touch device fires only during a drag across the card, and
 * `pointerleave` resets it, so the worst case is a brief lean the user asked
 * for by dragging.
 */
export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node || reduced || event.pointerType !== "mouse") return;

    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    node.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(6px)`;
  }

  function handleLeave() {
    const node = ref.current;
    if (node) node.style.transform = "";
  }

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`transition-transform duration-300 ease-out will-change-transform motion-reduce:!transform-none ${className}`}
    >
      {children}
    </div>
  );
}
