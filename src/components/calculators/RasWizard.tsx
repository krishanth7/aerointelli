"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ResultCard } from "@/components/calculators/ResultCard";
import { calculatorDisclaimer } from "@/config/calculators";
import { speciesList } from "@/lib/calculators/core/species";
import { display } from "@/lib/calculators/core/types";
import {
  defaultSpecies,
  defaultsForSpecies,
  runRasModel,
  type RasInputs,
} from "@/lib/calculators/ras/model";

/**
 * The ten-step RAS designer.
 *
 * Two things this component deliberately does not do. It does not calculate:
 * every number comes from `runRasModel`, so the arithmetic can be tested and
 * reused without rendering anything. And it does not block on validation it
 * cannot justify — a field is checked for being a positive number and for
 * sitting inside a range the species database can defend, and anything beyond
 * that is surfaced as a warning on the result rather than as a refusal to
 * continue. The visitor knows their site better than the form does.
 */

type FieldSpec = {
  key: keyof RasInputs;
  label: string;
  unit: string;
  step?: number;
  help?: string;
};

type Step = {
  number: string;
  title: string;
  intro: string;
  fields: FieldSpec[];
};

const STEPS: Step[] = [
  { number: "01", title: "Species", intro: "The species sets the density, feed and temperature bands every later step is checked against.", fields: [] },
  {
    number: "02",
    title: "Stocking",
    intro: "How much water the system holds and how heavily it is stocked at harvest.",
    fields: [
      { key: "systemVolume", label: "Culture volume", unit: "m3", help: "Water in the culture tanks, excluding sumps and treatment vessels." },
      { key: "density", label: "Standing density at harvest", unit: "kg/m3" },
      { key: "harvestWeight", label: "Individual harvest weight", unit: "g" },
      { key: "cycleDays", label: "Cycle length", unit: "days" },
    ],
  },
  {
    number: "03",
    title: "Feed",
    intro: "Feed drives ammonia, solids and oxygen demand. It is the most consequential input in the model.",
    fields: [
      { key: "feedRate", label: "Feed rate", unit: "% body weight/day" },
      { key: "fcr", label: "Feed conversion ratio", unit: "kg feed/kg gain", step: 0.05 },
      { key: "feedPrice", label: "Feed price", unit: "INR/kg" },
    ],
  },
  {
    number: "04",
    title: "Tank",
    intro: "Tank size and shape decide how many vessels the volume needs and whether they self-clean.",
    fields: [
      { key: "tankVolume", label: "Volume per tank", unit: "m3" },
      { key: "tankDiameter", label: "Tank diameter", unit: "m", step: 0.5 },
    ],
  },
  {
    number: "05",
    title: "Hydraulics",
    intro: "Turnover sets the flow through treatment; head sets what it costs to move it.",
    fields: [
      { key: "turnover", label: "Turnover rate", unit: "turnovers/hour", step: 0.1 },
      { key: "head", label: "Total dynamic head", unit: "m", step: 0.5, help: "Static lift plus friction through pipe, fittings and filters." },
    ],
  },
  {
    number: "06",
    title: "Biofilter",
    intro: "Media area is sized against the daily ammonia load; specific surface area converts that into a volume.",
    fields: [
      { key: "mediaSpecificArea", label: "Media specific surface area", unit: "m2/m3", help: "From the media manufacturer's data sheet." },
    ],
  },
  {
    number: "07",
    title: "Oxygen",
    intro: "The setpoint the system is held at, checked against the minimum for the species.",
    fields: [
      { key: "dissolvedOxygenSetpoint", label: "Dissolved oxygen setpoint", unit: "mg/L", step: 0.5 },
    ],
  },
  { number: "08", title: "Filtration", intro: "Solids load and daily new water are derived from feed and volume, not entered.", fields: [] },
  {
    number: "09",
    title: "Energy",
    intro: "Pump power is computed; everything else that runs continuously has to be told to the model.",
    fields: [
      { key: "auxiliaryLoad", label: "Auxiliary load", unit: "kW", step: 0.5, help: "Aeration, blowers, oxygen generation, controls, lighting." },
      { key: "runningHours", label: "Running hours", unit: "hours/day" },
      { key: "tariff", label: "Electricity tariff", unit: "INR/kWh", step: 0.5 },
    ],
  },
  {
    number: "10",
    title: "Economics",
    intro: "Operating economics only. Capital cost, finance and land are outside this model and are not guessed at.",
    fields: [
      { key: "salePrice", label: "Farm-gate price", unit: "INR/kg" },
      { key: "otherOperatingCost", label: "Other operating cost per cycle", unit: "INR", help: "Labour, seed, health management, testing, overheads." },
    ],
  },
];

const STORAGE_KEY = "aero-ras-model-draft";

const inputClass =
  "mt-2 h-[46px] w-full rounded-[12px] border border-hairline-strong bg-surface px-3.5 text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-ink-soft/60 focus-visible:border-ink/40 focus-visible:ring-2 focus-visible:ring-accent-deep/50";
const labelClass = "block text-[13px] font-medium text-ink-soft";

export function RasWizard() {
  const [inputs, setInputs] = useState<RasInputs>(() => defaultsForSpecies(defaultSpecies));
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Partial<Record<keyof RasInputs, string>>>({});
  const [restored, setRestored] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Autosave. A ten-step form that loses everything on a refresh is a form
  // nobody finishes, and this draft never leaves the browser.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setInputs((current) => ({ ...current, ...(JSON.parse(saved) as Partial<RasInputs>) }));
        setRestored(true);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
  }, [inputs]);

  useEffect(() => {
    headingRef.current?.focus();
  }, [step]);

  const model = useMemo(() => runRasModel(inputs), [inputs]);
  const current = STEPS[step];
  const criticalWarnings = model.all.flatMap((entry) =>
    entry.warnings.filter((warning) => warning.level === "critical"),
  );

  function setField(key: keyof RasInputs, raw: string) {
    const value = Number(raw);
    setInputs((previous) => ({ ...previous, [key]: raw === "" ? 0 : value }));
    setErrors((previous) => ({ ...previous, [key]: undefined }));
  }

  /** Rejects only what cannot produce a meaningful result: zero and negatives. */
  function validateStep(index: number): boolean {
    const next: Partial<Record<keyof RasInputs, string>> = {};
    for (const field of STEPS[index].fields) {
      const value = inputs[field.key];
      if (typeof value === "number" && !(value > 0)) {
        next[field.key] = "Enter a number greater than zero.";
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() {
    if (!validateStep(step)) return;
    setStep((value) => Math.min(value + 1, STEPS.length - 1));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-12">
      <div>
        <ol className="flex flex-wrap gap-1.5" aria-label="Calculation steps">
          {STEPS.map((item, index) => (
            <li key={item.number}>
              <button
                type="button"
                onClick={() => setStep(index)}
                aria-current={index === step ? "step" : undefined}
                className={`min-h-[32px] rounded-[9px] border px-2.5 text-[11.5px] font-medium tabular-nums outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent-deep ${
                  index === step
                    ? "border-ink bg-ink text-surface"
                    : "border-hairline-strong text-ink-soft hover:border-ink/35"
                }`}
              >
                {item.number}
              </button>
            </li>
          ))}
        </ol>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            className="mt-6"
          >
            <h2
              ref={headingRef}
              tabIndex={-1}
              className="text-[24px] font-semibold tracking-[-0.02em] text-ink outline-none md:text-[28px]"
            >
              {current.title}
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{current.intro}</p>

            {step === 0 ? (
              <div className="mt-6 space-y-2">
                {speciesList.map((species) => {
                  const selected = species.id === inputs.speciesId;
                  return (
                    <button
                      key={species.id}
                      type="button"
                      // Changing species resets the bands, so the whole input set
                      // is rebuilt from that species rather than left holding
                      // defaults that belonged to a different animal.
                      onClick={() => setInputs(defaultsForSpecies(species))}
                      className={`flex w-full min-h-[64px] flex-col items-start rounded-[14px] border p-4 text-left outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent-deep ${
                        selected ? "border-ink bg-surface-muted" : "border-hairline-strong hover:border-ink/35"
                      }`}
                    >
                      <span className="text-[15px] font-medium text-ink">{species.name}</span>
                      <span className="mt-1 text-[12.5px] italic text-ink-soft">
                        {species.scientificName}
                      </span>
                      <span className="mt-2 text-[12.5px] text-ink-soft">
                        {species.density.min}–{species.density.max} kg/m3 &middot; {species.temperature.min}–
                        {species.temperature.max} &deg;C &middot; FCR {species.fcr.min}–{species.fcr.max}
                      </span>
                    </button>
                  );
                })}
                <p className="pt-2 text-[12.5px] leading-relaxed text-ink-soft">
                  Source: {model.species.source}
                </p>
              </div>
            ) : null}

            {current.fields.length > 0 ? (
              <div className="mt-6 space-y-5">
                {current.fields.map((field) => (
                  <div key={field.key}>
                    <label className={labelClass} htmlFor={`field-${field.key}`}>
                      {field.label} <span className="text-ink-soft/70">({field.unit})</span>
                    </label>
                    <input
                      id={`field-${field.key}`}
                      type="number"
                      inputMode="decimal"
                      step={field.step ?? 1}
                      min={0}
                      value={String(inputs[field.key])}
                      onChange={(event) => setField(field.key, event.target.value)}
                      className={inputClass}
                    />
                    {field.help ? (
                      <p className="mt-1.5 text-[12.5px] text-ink-soft">{field.help}</p>
                    ) : null}
                    {errors[field.key] ? (
                      <p className="mt-1.5 text-[12.5px] text-ink">{errors[field.key]}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}

            {step === 7 ? (
              <div className="mt-6 space-y-4">
                {model.groups
                  .find((group) => group.id === "water-quality")
                  ?.results.filter((entry) => entry.id === "tss-production")
                  .map((entry) => (
                    <ResultCard key={entry.id} result={entry} />
                  ))}
                {model.groups
                  .find((group) => group.id === "tanks")
                  ?.results.filter((entry) => entry.id === "make-up-water")
                  .map((entry) => (
                    <ResultCard key={entry.id} result={entry} />
                  ))}
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>

        <div className="sticky bottom-0 mt-8 flex gap-3 bg-surface py-4 lg:static lg:bg-transparent">
          <button
            type="button"
            onClick={() => setStep((value) => Math.max(value - 1, 0))}
            disabled={step === 0}
            className="min-h-[44px] rounded-[12px] border border-hairline-strong px-5 text-[14px] font-medium text-ink outline-none transition-colors duration-200 hover:border-ink/40 focus-visible:ring-2 focus-visible:ring-accent-deep disabled:opacity-40"
          >
            Back
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={step === STEPS.length - 1}
            className="min-h-[44px] flex-1 rounded-[12px] bg-ink px-5 text-[14px] font-medium text-surface outline-none transition-colors duration-200 hover:bg-ink/90 focus-visible:ring-2 focus-visible:ring-accent-deep disabled:opacity-40"
          >
            Continue
          </button>
        </div>

        {restored ? (
          <p className="text-[12.5px] text-ink-soft">
            Restored from your last session on this device.
          </p>
        ) : null}
      </div>

      {/* Results are live from the first step rather than gated behind a submit.
          Watching a number move as an input changes is the whole value of a
          model; a reveal at the end turns it into a quiz. */}
      <div>
        <div className="rounded-[22px] border border-hairline-strong bg-surface-muted p-5 md:p-7">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft">
            Live results
          </p>
          <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.02em] text-ink">
            {model.species.name} &middot; {display(inputs.systemVolume, 0)} m3
          </h2>

          {criticalWarnings.length > 0 ? (
            <div className="mt-5 rounded-[14px] border border-ink/25 bg-accent/50 p-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink">
                Attention
              </p>
              <ul className="mt-2 space-y-1.5">
                {criticalWarnings.map((warning) => (
                  <li key={warning.title} className="text-[13px] leading-relaxed text-ink">
                    {warning.title}. {warning.detail}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {model.scenarios.map((entry) => (
              <div
                key={entry.id}
                className="rounded-[14px] border border-hairline-strong bg-surface p-4"
              >
                <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ink-soft">
                  {entry.label} case
                </p>
                <p className="mt-2 text-[20px] font-semibold tabular-nums text-ink">
                  {display(entry.margin.value, 0)}
                  <span className="ml-1 text-[12px] font-medium text-ink-soft">INR/cycle</span>
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[12.5px] leading-relaxed text-ink-soft">
            Cases vary farm-gate price and realised yield around the base model. Operating margin
            only — capital, finance and land are excluded.
          </p>
        </div>

        {model.groups.map((group) => (
          <div key={group.id} className="mt-10">
            <h3 className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft">
              {group.title}
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {group.results.map((entry) => (
                <ResultCard key={entry.id} result={entry} />
              ))}
            </div>
          </div>
        ))}

        <p className="mt-10 border-t border-hairline pt-6 text-[13px] leading-relaxed text-ink-soft">
          {calculatorDisclaimer}
        </p>
      </div>
    </div>
  );
}
