"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * The hero visual: an abstract resource system that assembles itself.
 *
 * Coordinates are hard-coded rather than derived from Math.cos at render time.
 * Node and the browser disagree on the last bit of the result, which is enough
 * to make the server and client `d` attributes differ and trigger a hydration
 * mismatch — a bug this diagram has already produced once.
 *
 * The whole thing is aria-hidden. It carries no information that is not also
 * stated in the headline and body copy beside it.
 */

const CENTRE = { x: 280, y: 210 };

const NODES = [
  { id: "water", label: "Water", x: 280, y: 60 },
  { id: "energy", label: "Energy", x: 409.9, y: 135 },
  { id: "biology", label: "Biology", x: 409.9, y: 285 },
  { id: "food", label: "Food", x: 280, y: 360 },
  { id: "data", label: "Data", x: 150.1, y: 285 },
  { id: "recovery", label: "Recovery", x: 150.1, y: 135 },
];

/** Ring arcs between consecutive nodes, in travel order. */
const ARCS = NODES.map((node, index) => {
  const next = NODES[(index + 1) % NODES.length];
  return { id: `${node.id}-${next.id}`, d: `M ${node.x} ${node.y} A 150 150 0 0 1 ${next.x} ${next.y}` };
});

export function HeroSystem() {
  const rootRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

        // 1. Nodes appear as points.
        timeline.fromTo(
          "[data-hero-node]",
          { opacity: 0, scale: 0.4 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.09, transformOrigin: "center" },
          0,
        );

        // 2. Spokes connect them to the centre.
        timeline.fromTo(
          "[data-hero-spoke]",
          { opacity: 0, scaleX: 0.6, scaleY: 0.6 },
          { opacity: 1, scaleX: 1, scaleY: 1, duration: 0.5, stagger: 0.07, transformOrigin: `${CENTRE.x}px ${CENTRE.y}px` },
          0.35,
        );

        // 3. The ring closes, drawn in the direction resources travel.
        const arcs = gsap.utils.toArray<SVGPathElement>("[data-hero-arc]", root);
        arcs.forEach((arc, index) => {
          const length = arc.getTotalLength();
          timeline.fromTo(
            arc,
            { strokeDasharray: length, strokeDashoffset: length, opacity: 1 },
            { strokeDashoffset: 0, duration: 0.5, ease: "none" },
            0.7 + index * 0.13,
          );
        });

        // 4. Labels and the centre resolve last.
        timeline.fromTo(
          "[data-hero-label]",
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.06 },
          1.1,
        );
        timeline.fromTo(
          "[data-hero-core]",
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.7, transformOrigin: "center" },
          1.3,
        );

        // 5. A pulse then circulates continuously, slowly.
        timeline.to(
          "[data-hero-pulse]",
          { strokeDashoffset: -942, duration: 14, ease: "none", repeat: -1 },
          1.6,
        );
      });

      // Reduced motion: the system is simply present, fully drawn.
      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-hero-node], [data-hero-label], [data-hero-core], [data-hero-arc]", {
          opacity: 1,
        });
      });

      return () => media.revert();
    }, root);

    return () => context.revert();
  }, []);

  return (
    <svg
      ref={rootRef}
      viewBox="0 0 560 420"
      aria-hidden="true"
      className="h-auto w-full overflow-visible text-legal-dark-muted"
    >
      {/* Spokes sit underneath the ring. */}
      {NODES.map((node) => (
        <line
          key={`spoke-${node.id}`}
          data-hero-spoke
          x1={CENTRE.x}
          y1={CENTRE.y}
          x2={node.x}
          y2={node.y}
          stroke="currentColor"
          strokeOpacity="0.16"
          strokeWidth="1"
        />
      ))}

      {ARCS.map((arc) => (
        <path
          key={arc.id}
          data-hero-arc
          d={arc.d}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
      ))}

      {/* Circulating pulse. A short dash chasing the full circumference (2πr ≈ 942). */}
      <circle
        data-hero-pulse
        cx={CENTRE.x}
        cy={CENTRE.y}
        r="150"
        fill="none"
        stroke="#c9ef77"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="26 916"
        opacity="0.9"
      />

      {NODES.map((node) => (
        <g key={node.id}>
          <circle
            data-hero-node
            cx={node.x}
            cy={node.y}
            r="5"
            fill="#c9ef77"
          />
          <circle
            data-hero-node
            cx={node.x}
            cy={node.y}
            r="15"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <text
            data-hero-label
            x={node.x}
            y={node.y - 26}
            textAnchor="middle"
            className="fill-current text-[11px] font-medium"
          >
            {node.label}
          </text>
        </g>
      ))}

      <g data-hero-core>
        <circle
          cx={CENTRE.x}
          cy={CENTRE.y}
          r="46"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.2"
          strokeWidth="1"
        />
        <text
          x={CENTRE.x}
          y={CENTRE.y - 2}
          textAnchor="middle"
          className="fill-current text-[10px] font-semibold uppercase tracking-[0.14em]"
          opacity="0.8"
        >
          Closed
        </text>
        <text
          x={CENTRE.x}
          y={CENTRE.y + 14}
          textAnchor="middle"
          className="fill-current text-[10px] font-semibold uppercase tracking-[0.14em]"
          opacity="0.8"
        >
          Loop
        </text>
      </g>
    </svg>
  );
}
