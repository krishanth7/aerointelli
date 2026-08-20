"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { metricGroups, metricStatusLabels } from "@/content/sustainability";
import { MetricValue, StatusChip } from "@/components/shared/primitives";

/**
 * The measurement framework, as a data interface.
 *
 * Every metric renders its value, unit, period, source and verification status.
 * No value has been measured on an operating project yet, so every value reads
 * as an em dash — publishing a number here before it exists would be the exact
 * failure this page argues against. The component does not distinguish between
 * "no data" and "zero", because a zero would be a claim.
 */
export function MetricsExplorer() {
  const [active, setActive] = useState(metricGroups[0].id);
  const group = metricGroups.find((item) => item.id === active) ?? metricGroups[0];

  return (
    <div>
      <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul role="tablist" className="flex w-max gap-2 md:w-auto md:flex-wrap">
          {metricGroups.map((item) => {
            const selected = item.id === active;

            return (
              <li key={item.id}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(item.id)}
                  className={`relative inline-flex min-h-[38px] items-center whitespace-nowrap rounded-full border px-4 text-[13px] font-medium transition-colors duration-200 ${
                    selected
                      ? "border-ink/25 text-surface-muted"
                      : "border-hairline bg-surface text-ink-soft hover:border-hairline-strong hover:text-ink"
                  }`}
                >
                  {/* The moving pill is the shared layout element, so the
                      selection slides between tabs instead of blinking. */}
                  {selected ? (
                    <motion.span
                      layoutId="metric-tab"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      className="absolute inset-0 rounded-full bg-ink"
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-6 rounded-[18px] border border-hairline bg-surface p-5 md:p-7">
        <p className="max-w-[680px] text-[15px] leading-[1.8] text-ink-soft">{group.intro}</p>

        <ul className="mt-6 grid gap-px overflow-hidden rounded-[14px] border border-hairline bg-hairline sm:grid-cols-2">
          {group.metrics.map((metric) => (
            <li key={metric.id} className="bg-surface p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="text-[14px] font-medium leading-[1.45]">{metric.name}</p>
                <StatusChip
                  label={metricStatusLabels[metric.status]}
                  verified={metric.status === "verified"}
                />
              </div>

              <MetricValue value={metric.value} unit={metric.unit} className="mt-4" />

              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 border-t border-hairline pt-3.5 text-[12px]">
                <div>
                  <dt className="text-ink-soft/70">Period</dt>
                  <dd className="mt-0.5">{metric.period ?? "—"}</dd>
                </div>
                <div>
                  <dt className="text-ink-soft/70">Source</dt>
                  <dd className="mt-0.5">{metric.source ?? "—"}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
