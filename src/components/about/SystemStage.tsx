import { systemSequence } from "@/content/about";

/**
 * The Aero Intelli system.
 *
 * Two renderings of one sequence, chosen by breakpoint rather than by hiding
 * content:
 *
 *  - Below `lg`, a numbered vertical flow. A ten-node ring at phone width puts
 *    labels at roughly ten pixels and drops the note under each one entirely,
 *    which is not a diagram — it is a picture of a diagram. The list carries the
 *    same order, the same notes and the same closing return to intake.
 *  - At `lg` and above, the ring, in a perspective scene. The plane starts
 *    tilted away and stands up as the section is scrubbed; the labels are real
 *    text on that plane, so they finish square to the viewport and stay
 *    selectable and legible the whole way.
 *
 * Server component throughout. Pinning, node activation and the tilt are applied
 * by the page's GSAP context through `data-pinned-system`, `data-system-node`,
 * `data-system-link`, `data-system-scene` and `data-system-plane`.
 *
 * Coordinates are hard-coded. A value computed from Math.cos at render time can
 * differ in its last bit between Node and the browser, which is a hydration
 * mismatch on the `d` attribute — a bug the sustainability diagram produced once
 * already.
 *
 * The ring closes: the last node feeds the first. That is the whole argument of
 * the section, so the closing arc is drawn like every other one.
 */

const CENTRE = { x: 380, y: 340 };
const RADIUS = 178;

/** Ten points at 36° intervals from the top, in the order a resource travels. */
const POINTS: { x: number; y: number }[] = [
  { x: 380, y: 162 },
  { x: 484.6, y: 196 },
  { x: 549.3, y: 285 },
  { x: 549.3, y: 395 },
  { x: 484.6, y: 484 },
  { x: 380, y: 518 },
  { x: 275.4, y: 484 },
  { x: 210.7, y: 395 },
  { x: 210.7, y: 285 },
  { x: 275.4, y: 196 },
];

const NODES = systemSequence.map((node, index) => ({ ...node, ...POINTS[index] }));

const LINKS = NODES.map((node, index) => {
  const next = NODES[(index + 1) % NODES.length];
  return {
    id: `${node.id}-${next.id}`,
    d: `M ${node.x} ${node.y} A ${RADIUS} ${RADIUS} 0 0 1 ${next.x} ${next.y}`,
  };
});

/**
 * Pushes a label outward from the centre so it never sits on the ring, and
 * anchors it away from the diagram so a long note grows outward into the
 * margin rather than back across the artwork.
 */
function labelFor(x: number, y: number) {
  const dx = x - CENTRE.x;
  const dy = y - CENTRE.y;

  if (Math.abs(dx) < 40) {
    return { anchor: "middle" as const, x, y: dy > 0 ? y + 34 : y - 30 };
  }

  const outward = dx > 0 ? 26 : -26;
  return { anchor: (dx > 0 ? "start" : "end") as "start" | "end", x: x + outward, y: y + 1 };
}

export function SystemStage() {
  return (
    <div data-pinned-system className="lg:flex lg:min-h-screen lg:flex-col lg:justify-center">
      {/* ── Below lg: the sequence as a readable flow ─────────── */}
      <ol data-stage-track className="relative space-y-0 lg:hidden">
        {NODES.map((node, index) => (
          <li key={node.id} data-stage className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] text-[11px] font-semibold tabular-nums text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              {/* The rule continues past the last node, because the last node
                  returns to the first. */}
              <span aria-hidden="true" className="w-px flex-1 bg-white/15" />
            </div>

            <div className="min-w-0 flex-1 pb-7">
              <p className="text-[19px] font-medium leading-[1.25] tracking-[-0.02em] text-footer-text">
                {node.label}
              </p>
              <p className="mt-1 text-[13.5px] leading-[1.6] text-legal-dark-muted">{node.note}</p>
            </div>
          </li>
        ))}

        <li className="flex gap-4">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/[0.08] text-[12px] text-accent"
          >
            ↺
          </span>
          <p className="flex-1 pt-1.5 text-[13.5px] leading-[1.6] text-legal-dark-muted">
            Recovery returns to intake. The sequence closes into a loop.
          </p>
        </li>
      </ol>

      {/* ── lg and above: the ring, in a perspective scene ─────── */}
      <div
        data-system-scene
        className="hidden lg:block"
        style={{ perspective: "1500px", perspectiveOrigin: "50% 45%" }}
      >
        <div
          data-system-plane
          className="relative mx-auto w-full max-w-[760px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Depth shells. Decorative, behind the diagram, and never carrying
              information the ring does not also carry. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                data-system-shell
                className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
                style={{
                  width: `${360 + index * 96}px`,
                  height: `${360 + index * 96}px`,
                }}
              />
            ))}
          </div>

          <svg
            viewBox="0 0 760 680"
            role="img"
            aria-label="The Aero Intelli system: water, treatment, recirculating aquaculture, nutrients, cultivation, food, data, AI, optimisation and recovery, connected as a closed loop."
            className="relative h-auto w-full text-legal-dark-muted"
          >
            <defs>
              {/* Soft falloff under each node. Gives the ring a light source
                  without putting a drop shadow on text. */}
              <radialGradient id="about-node-glow">
                <stop offset="0%" stopColor="#c9ef77" stopOpacity="0.42" />
                <stop offset="100%" stopColor="#c9ef77" stopOpacity="0" />
              </radialGradient>
            </defs>

            {LINKS.map((link) => (
              <path
                key={link.id}
                data-system-link
                d={link.d}
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.32"
                strokeWidth="1"
              />
            ))}

            {/* Spokes to the centre. Thin enough to read as structure. */}
            {NODES.map((node) => (
              <line
                key={`spoke-${node.id}`}
                x1={CENTRE.x}
                y1={CENTRE.y}
                x2={node.x}
                y2={node.y}
                stroke="currentColor"
                strokeOpacity="0.08"
                strokeWidth="1"
              />
            ))}

            {NODES.map((node) => {
              const label = labelFor(node.x, node.y);

              return (
                <g key={node.id} data-system-node>
                  <circle cx={node.x} cy={node.y} r="30" fill="url(#about-node-glow)" />
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="15"
                    fill="#171a17"
                    stroke="currentColor"
                    strokeOpacity="0.32"
                    strokeWidth="1"
                  />
                  <circle cx={node.x} cy={node.y} r="4.5" fill="#c9ef77" />

                  <text
                    x={label.x}
                    y={label.y}
                    textAnchor={label.anchor}
                    className="fill-footer-text text-[13px] font-medium"
                  >
                    {node.label}
                  </text>
                  <text
                    x={label.x}
                    y={label.y + 15}
                    textAnchor={label.anchor}
                    className="fill-current text-[10.5px]"
                  >
                    {node.note}
                  </text>
                </g>
              );
            })}

            <circle
              cx={CENTRE.x}
              cy={CENTRE.y}
              r="74"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.16"
              strokeWidth="1"
            />
            <text
              x={CENTRE.x}
              y={CENTRE.y - 4}
              textAnchor="middle"
              className="fill-footer-text text-[13px] font-semibold uppercase tracking-[0.2em]"
            >
              Aero
            </text>
            <text
              x={CENTRE.x}
              y={CENTRE.y + 17}
              textAnchor="middle"
              className="fill-footer-text text-[13px] font-semibold uppercase tracking-[0.2em]"
            >
              Intelli
            </text>
          </svg>
        </div>
      </div>

      <p className="mt-8 text-[13.5px] leading-[1.7] text-legal-dark-muted lg:mx-auto lg:mt-6 lg:max-w-[640px] lg:text-center">
        Ten stages, one loop. Recovery returns to intake, which is what makes this a system rather
        than a sequence.
      </p>
    </div>
  );
}
