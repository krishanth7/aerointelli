"use client";

import { useId, useState } from "react";
import { assume } from "@/lib/calculators/core/assumptions";
import { confidenceLabel, display, type CalcResult, type Confidence } from "@/lib/calculators/core/types";

/**
 * One number, with everything needed to argue with it.
 *
 * The value is the smallest part of this card. The confidence chip, the
 * warnings, the formula and the list of assumptions are what separate a
 * planning tool from a toy, so they are one disclosure away rather than hidden
 * behind a modal or a separate page.
 */

const confidenceTone: Record<Confidence, string> = {
  calculated: "border-hairline-strong text-ink",
  estimated: "border-hairline-strong text-ink-soft",
  assumption: "border-hairline-strong text-ink-soft",
  "requires-validation": "border-ink/30 bg-accent/40 text-ink",
};

export function ResultCard({ result }: { result: CalcResult }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="rounded-[18px] border border-hairline-strong bg-surface p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[13px] font-medium text-ink-soft">{result.label}</p>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.1em] ${confidenceTone[result.confidence]}`}
        >
          {confidenceLabel[result.confidence]}
        </span>
      </div>

      <p className="mt-3 text-[30px] font-semibold leading-none tracking-[-0.02em] text-ink tabular-nums">
        {display(result.value, result.precision)}
        <span className="ml-1.5 text-[14px] font-medium text-ink-soft">{result.unit}</span>
      </p>

      {result.note ? (
        <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">{result.note}</p>
      ) : null}

      {result.warnings.map((warning) => (
        <div
          key={warning.title}
          className={`mt-4 rounded-[12px] border p-3.5 ${
            warning.level === "critical"
              ? "border-ink/25 bg-accent/50"
              : "border-hairline-strong bg-surface-muted"
          }`}
        >
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.1em] text-ink">
            {warning.title}
          </p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-ink">{warning.detail}</p>
        </div>
      ))}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-4 inline-flex min-h-[36px] items-center text-[12.5px] font-medium text-ink underline underline-offset-4 outline-none transition-colors duration-200 hover:text-ink-soft focus-visible:ring-2 focus-visible:ring-accent-deep"
      >
        {open ? "Hide calculation method" : "View calculation method"}
      </button>

      {open ? (
        <div id={panelId} className="mt-4 border-t border-hairline pt-4">
          <Section title="Inputs">
            <ul className="space-y-1.5">
              {result.inputs.map((input) => (
                <li key={input.label} className="flex justify-between gap-4 text-[13px]">
                  <span className="text-ink-soft">{input.label}</span>
                  <span className="tabular-nums text-ink">
                    {typeof input.value === "number"
                      ? input.value.toLocaleString("en-IN")
                      : input.value}
                    {input.unit ? ` ${input.unit}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Formula">
            <p className="font-mono text-[12.5px] leading-relaxed text-ink">{result.formula}</p>
          </Section>

          <Section title="Result">
            <p className="text-[13px] tabular-nums text-ink">
              {display(result.value, result.precision)} {result.unit}
            </p>
          </Section>

          {result.assumptions.length > 0 ? (
            <Section title="Assumptions used">
              <ul className="space-y-3">
                {result.assumptions.map((id) => {
                  const item = assume(id);
                  return (
                    <li key={id} className="text-[13px] leading-relaxed">
                      <span className="text-ink">
                        {item.label}: {item.value} {item.unit}
                      </span>
                      <span className="mt-1 block text-ink-soft">{item.source}</span>
                      <span className="mt-1 block text-ink-soft">{item.rationale}</span>
                    </li>
                  );
                })}
              </ul>
            </Section>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4 last:mb-0">
      <p className="mb-2 text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-soft">
        {title}
      </p>
      {children}
    </div>
  );
}
