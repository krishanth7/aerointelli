"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { loopStages } from "@/content/sustainability";

/**
 * The loop is the argument of this page, so it is navigable rather than
 * decorative: each stage can be selected and explains its own role.
 *
 * The diagram is presentational and the readable content lives in the list
 * beside it, so nothing here is available only to sighted users. Selection is
 * driven from the list buttons — the SVG nodes mirror that state rather than
 * owning it, which keeps the keyboard path and the pointer path identical.
 */

const SIZE = 420;
const CENTRE = SIZE / 2;
const RADIUS = 148;
const ARC_RADIUS = RADIUS + 26;

/**
 * Position on the ring, starting at the top and going clockwise. Rounded
 * because Node and the browser disagree on the last bit of Math.cos, which is
 * enough to make the server and client `d` attributes differ and trigger a
 * hydration mismatch.
 */
function pointAt(index: number, count: number, radius = RADIUS) {
  const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
  return {
    x: Math.round((CENTRE + Math.cos(angle) * radius) * 100) / 100,
    y: Math.round((CENTRE + Math.sin(angle) * radius) * 100) / 100,
  };
}

export function ResourceLoop() {
  const [active, setActive] = useState(loopStages[0].id);
  const count = loopStages.length;
  const activeIndex = loopStages.findIndex((stage) => stage.id === active);
  const activeStage = loopStages[activeIndex] ?? loopStages[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-center lg:gap-14">
      <div className="mx-auto w-full max-w-[420px]">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          aria-hidden="true"
          className="h-auto w-full overflow-visible"
        >
          <circle
            cx={CENTRE}
            cy={CENTRE}
            r={RADIUS}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-hairline-strong"
          />

          {/* Direction of travel. The arc leaving the selected stage carries the
              accent, so the eye is pointed at where the resource goes next. */}
          {loopStages.map((stage, index) => {
            const from = pointAt(index, count, ARC_RADIUS);
            const to = pointAt(index + 0.5, count, ARC_RADIUS);
            const outgoing = index === activeIndex;

            return (
              <path
                key={`arc-${stage.id}`}
                d={`M ${from.x} ${from.y} A ${ARC_RADIUS} ${ARC_RADIUS} 0 0 1 ${to.x} ${to.y}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={outgoing ? 2 : 1}
                strokeLinecap="round"
                className={`transition-colors duration-300 ${
                  outgoing ? "text-accent-deep" : "text-hairline"
                }`}
              />
            );
          })}

          {loopStages.map((stage, index) => {
            const point = pointAt(index, count);
            const selected = stage.id === active;

            return (
              <g key={stage.id}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={selected ? 13 : 8}
                  className={`transition-all duration-300 ${
                    selected ? "fill-accent-deep" : "fill-hairline-strong"
                  }`}
                />
                {selected ? (
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={22}
                    fill="none"
                    strokeWidth="1"
                    className="loop-pulse stroke-accent-deep"
                  />
                ) : null}
              </g>
            );
          })}

          <text
            x={CENTRE}
            y={CENTRE - 6}
            textAnchor="middle"
            className="fill-ink-soft text-[11px] font-semibold uppercase tracking-[0.16em]"
          >
            Closed
          </text>
          <text
            x={CENTRE}
            y={CENTRE + 14}
            textAnchor="middle"
            className="fill-ink-soft text-[11px] font-semibold uppercase tracking-[0.16em]"
          >
            Loop
          </text>
        </svg>

        {/* Restates the selection as text, so the diagram's meaning survives on
            a screen reader and at small sizes where the ring is cramped. */}
        <p className="mt-4 text-center text-[13px] text-ink-soft lg:hidden">
          Stage {activeIndex + 1} of {count} — {activeStage.label}
        </p>
      </div>

      <ol className="space-y-1.5">
        {loopStages.map((stage, index) => {
          const selected = stage.id === active;

          return (
            <li key={stage.id}>
              <button
                type="button"
                aria-expanded={selected}
                onClick={() => setActive(stage.id)}
                className={`flex w-full items-start gap-4 rounded-[14px] border px-4 py-3.5 text-left transition-[background-color,border-color] duration-200 md:px-5 ${
                  selected
                    ? "border-hairline-strong bg-surface"
                    : "border-transparent hover:bg-surface"
                }`}
              >
                <span
                  className={`mt-[3px] text-[11px] font-semibold tabular-nums tracking-[0.12em] ${
                    selected ? "text-ink" : "text-ink-soft"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[15.5px] font-medium leading-[1.35]">
                    {stage.label}
                  </span>

                  <AnimatePresence initial={false}>
                    {selected ? (
                      <motion.span
                        key="body"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="block overflow-hidden"
                      >
                        <span className="mt-2 block border-l-2 border-accent pl-4 text-[14px] leading-[1.75] text-ink-soft">
                          {stage.body}
                        </span>
                      </motion.span>
                    ) : null}
                  </AnimatePresence>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
