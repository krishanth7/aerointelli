/**
 * Shared result shape for every calculation in the platform.
 *
 * The rule this file exists to enforce: a number on screen must be able to
 * explain where it came from. Every module returns the inputs it used, the
 * formula in readable form, the assumptions it leaned on, and an honest
 * confidence status — so the interface can render "View Calculation Method"
 * without any component re-deriving anything.
 *
 * Formulas live here and in the sibling modules, never inside React
 * components. A component that owns arithmetic cannot be unit tested and
 * cannot be reused by the report generator.
 */

/**
 * How much weight a reader should give a number.
 *
 * `calculated` is arithmetic on values the user supplied. `estimated` uses a
 * published coefficient. `assumption` uses a value we chose because no input
 * was given. `requires-validation` means the result is indicative only and a
 * real design needs an engineer — sizing that touches life support falls here.
 */
export type Confidence = "calculated" | "estimated" | "assumption" | "requires-validation";

export const confidenceLabel: Record<Confidence, string> = {
  calculated: "Calculated",
  estimated: "Estimated",
  assumption: "Assumption-based",
  "requires-validation": "Requires Engineering Validation",
};

export type WarningLevel = "info" | "caution" | "critical";

export type CalcWarning = {
  level: WarningLevel;
  title: string;
  detail: string;
};

/** One named value that fed a formula, kept so the method view can list it. */
export type CalcInput = {
  label: string;
  value: number | string;
  unit?: string;
};

export type CalcResult = {
  /** Stable identifier, used by analytics and the report generator. */
  id: string;
  label: string;
  value: number;
  unit: string;
  /** Decimal places for display. Kept with the result so formatting is uniform. */
  precision: number;
  confidence: Confidence;
  /** Human-readable formula, e.g. "Biomass = Fish count x Harvest weight". */
  formula: string;
  inputs: CalcInput[];
  /** Assumption identifiers resolved from the assumption library. */
  assumptions: string[];
  warnings: CalcWarning[];
  /** Short "why it matters" line. Longer copy lives in the explanation layer. */
  note?: string;
};

export function result(partial: Omit<CalcResult, "assumptions" | "warnings"> &
  Partial<Pick<CalcResult, "assumptions" | "warnings">>): CalcResult {
  return { assumptions: [], warnings: [], ...partial };
}

/** Rounds for display only. Never used to round a value before further maths. */
export function display(value: number, precision: number): string {
  if (!Number.isFinite(value)) return "—";
  return value.toLocaleString("en-IN", {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  });
}
