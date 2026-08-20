"use client";

import Link from "next/link";
import Script from "next/script";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  contactConfig,
  enquiryTypes,
  matchEnquiryType,
  type EnquiryField,
  type EnquiryTypeId,
} from "@/config/contact";

const STEPS = ["About you", "Your enquiry", "Details", "Review & submit"];

/** How long the success screen stays up before the form returns. */
const RESET_SECONDS = 15;

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

// EmailJS delivers the enquiry straight from the browser. All three values are
// public by design; the account's allow-list is what protects the service.
const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

const emailjsConfigured = Boolean(
  EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey,
);

const inputClass =
  "mt-2 h-[46px] w-full rounded-[12px] border border-hairline-strong bg-surface px-3.5 text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-ink-soft/60 focus-visible:border-ink/40 focus-visible:ring-2 focus-visible:ring-accent-deep/50";
const labelClass = "block text-[13px] font-medium text-ink-soft";

type Values = Record<string, string>;

function Field({
  field,
  value,
  onChange,
}: {
  field: EnquiryField;
  value: string;
  onChange: (value: string) => void;
}) {
  const id = `field-${field.name}`;

  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {field.label}
      </label>

      {field.type === "textarea" ? (
        <textarea
          id={id}
          rows={4}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${inputClass} h-auto py-3`}
        />
      ) : field.type === "select" ? (
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={inputClass}
        >
          <option value="">Select</option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={field.type === "number" ? "number" : "text"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={inputClass}
        />
      )}

      {field.help ? <p className="mt-1.5 text-[12.5px] text-ink-soft">{field.help}</p> : null}
    </div>
  );
}

export function ContactForm({
  enquiryType,
  onEnquiryTypeChange,
  initialSubject = "",
}: {
  enquiryType: EnquiryTypeId | null;
  onEnquiryTypeChange: (id: EnquiryTypeId) => void;
  /** Seeded by the referring page. Empty for a direct arrival, and always editable. */
  initialSubject?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const blankValues = (): Values => (initialSubject ? { subject: initialSubject } : {});
  const [values, setValues] = useState<Values>(blankValues);
  const [details, setDetails] = useState<Values>({});
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "unconfigured" | "error">(
    "idle",
  );
  const [reference, setReference] = useState<string | null>(null);
  const headingRef = useRef<HTMLParagraphElement | null>(null);

  // Null until the visitor picks a category, so nothing is preselected on a
  // direct arrival. Step 3 then has no type-specific fields to ask for.
  const type = useMemo(() => matchEnquiryType(enquiryType), [enquiryType]);
  const typeFields = type?.fields ?? [];

  // Dynamic fields belong to the selected enquiry, so stale answers are dropped
  // during render rather than in an effect.
  const [lastType, setLastType] = useState(enquiryType);
  if (lastType !== enquiryType) {
    setLastType(enquiryType);
    setDetails({});
  }

  const set = (key: string, value: string) => setValues((prev) => ({ ...prev, [key]: value }));

  function reset() {
    setValues(blankValues());
    setDetails({});
    setConsent(false);
    setErrors({});
    setReference(null);
    setStep(0);
    setStatus("idle");
  }

  // The success screen returns to an empty form on its own, so the page is not
  // left in a dead end. The countdown is visible, and it can be skipped.
  const [secondsLeft, setSecondsLeft] = useState(RESET_SECONDS);

  useEffect(() => {
    if (status !== "done") return;

    // Two independent timers: one drives the visible countdown, one performs
    // the reset. Keeping them apart avoids mutating state from inside another
    // state updater.
    const tick = setInterval(() => {
      setSecondsLeft((current) => Math.max(current - 1, 0));
    }, 1000);

    // Inlined rather than calling `reset()`, so the effect depends only on
    // `status` and the seeded subject. Every call here is a stable setState.
    const done = setTimeout(() => {
      setValues(initialSubject ? { subject: initialSubject } : ({} as Values));
      setDetails({});
      setConsent(false);
      setErrors({});
      setReference(null);
      setStep(0);
      setStatus("idle");
    }, RESET_SECONDS * 1000);

    return () => {
      clearInterval(tick);
      clearTimeout(done);
    };
  }, [status, initialSubject]);

  function validateStep(index: number) {
    const next: Record<string, string> = {};

    if (index === 0) {
      if (!values.name || values.name.trim().length < 2) next.name = "Enter your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email ?? "")) {
        next.email = "Enter a valid email address.";
      }
    }

    if (index === 1 && !type) next.enquiryType = "Select an enquiry type.";

    if (index === 2 && (values.message ?? "").trim().length < 20) {
      next.message = "Describe your enquiry in at least 20 characters.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() {
    if (!validateStep(step)) return;
    setStep((current) => Math.min(current + 1, STEPS.length - 1));
    headingRef.current?.focus();
  }

  async function submit() {
    if (!consent) {
      setErrors({ consent: "Please confirm before submitting." });
      return;
    }

    if (!emailjsConfigured) {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", { method: "POST" });
      const { reference: issued } = (await response.json()) as { reference: string };

      // Dynamic import keeps the SDK out of the initial page bundle.
      const emailjs = (await import("@emailjs/browser")).default;

      const detailLines = [
        values.role ? `Role: ${values.role}` : null,
        values.country ? `Country: ${values.country}` : null,
        values.city ? `City: ${values.city}` : null,
        values.website ? `Website: ${values.website}` : null,
        values.about ? `About: ${values.about}` : null,
        ...typeFields.map((field) =>
          details[field.name] ? `${field.label}: ${details[field.name]}` : null,
        ),
      ]
        .filter(Boolean)
        .join("\n");

      await emailjs.send(
        EMAILJS.serviceId as string,
        EMAILJS.templateId as string,
        {
          reference: issued,
          name: values.name ?? "",
          email: values.email ?? "",
          phone: values.phone ?? "",
          organisation: values.organisation ?? "",
          enquiry_type: type?.label ?? "General enquiry",
          subject: values.subject || `${type?.label ?? "General"} enquiry`,
          message: values.message ?? "",
          details: detailLines || "—",
          submitted_at: new Date().toISOString(),
        },
        { publicKey: EMAILJS.publicKey as string },
      );

      setReference(issued);
      setSecondsLeft(RESET_SECONDS);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done" || status === "unconfigured") {
    return (
      <div className="rounded-[22px] border border-hairline bg-surface p-6 md:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
          {status === "done" ? "Enquiry submitted" : "Submission unavailable"}
        </p>

        {status === "done" ? (
          <>
            <p className="mt-4 text-[24px] font-medium leading-[1.2] tracking-[-0.02em] md:text-[28px]">
              Thank you. Your enquiry has been sent.
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-ink-soft">
              Keep this reference for any follow-up correspondence.
            </p>

            <div className="mt-5 rounded-[14px] border border-hairline bg-surface-muted px-5 py-4">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Your reference
              </p>
              <p className="mt-2 font-mono text-[22px] tracking-[0.06em] md:text-[24px]">
                {reference}
              </p>
            </div>

            <div className="mt-7 border-t border-hairline pt-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p aria-live="polite" className="text-[13.5px] text-ink-soft">
                  Returning to the form in {secondsLeft}s
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="min-h-[44px] rounded-[12px] border border-hairline-strong px-4 text-[14px] font-medium transition-colors duration-200 hover:bg-surface-muted"
                >
                  Send another enquiry
                </button>
              </div>

              <div
                aria-hidden="true"
                className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-surface-muted"
              >
                <div
                  className="h-full rounded-full bg-accent-deep transition-[width] duration-1000 ease-linear"
                  style={{ width: `${(secondsLeft / RESET_SECONDS) * 100}%` }}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="mt-4 text-[24px] font-medium leading-[1.2] tracking-[-0.02em] md:text-[28px]">
              This form is not accepting submissions yet.
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-ink-soft">
              Nothing was sent, so please email your enquiry directly. Include the same details you
              entered here.
            </p>
            <a
              href={`mailto:${contactConfig.generalEmail}`}
              className="mt-5 inline-flex min-h-[44px] items-center rounded-[12px] bg-ink px-5 text-[14px] font-semibold text-surface-muted"
            >
              {contactConfig.generalEmail}
            </a>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-[22px] border border-hairline bg-surface p-5 md:p-8">
      {TURNSTILE_SITE_KEY ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
        />
      ) : null}

      <ol className="flex flex-wrap gap-x-4 gap-y-2">
        {STEPS.map((label, index) => (
          <li
            key={label}
            aria-current={index === step ? "step" : undefined}
            className={`flex items-center gap-2 text-[12.5px] ${
              index === step ? "text-ink" : "text-ink-soft"
            }`}
          >
            <span
              className={`inline-flex h-[22px] w-[22px] items-center justify-center rounded-full text-[11px] font-semibold ${
                index <= step ? "bg-accent text-ink" : "bg-surface-muted text-ink-soft"
              }`}
            >
              {index + 1}
            </span>
            {label}
          </li>
        ))}
      </ol>

      <p
        ref={headingRef}
        tabIndex={-1}
        className="mt-6 text-[20px] font-medium tracking-[-0.015em] outline-none md:text-[22px]"
      >
        {STEPS[step]}
      </p>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.24, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-5"
        >
          {step === 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  value={values.name ?? ""}
                  onChange={(event) => set("name", event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  className={inputClass}
                />
                {errors.name ? <p className="mt-1.5 text-[12.5px] text-ink">{errors.name}</p> : null}
              </div>

              <div>
                <label className={labelClass} htmlFor="email">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email ?? ""}
                  onChange={(event) => set("email", event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  className={inputClass}
                />
                {errors.email ? (
                  <p className="mt-1.5 text-[12.5px] text-ink">{errors.email}</p>
                ) : null}
              </div>

              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone (optional)
                </label>
                {/* One field. Country code is typed inline, so no dropdown and
                    no country is privileged over another. */}
                <input
                  id="phone"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                  value={values.phone ?? ""}
                  onChange={(event) => set("phone", event.target.value)}
                  className={inputClass}
                />
                <p className="mt-1.5 text-[12.5px] text-ink-soft">
                  Include your country code.
                </p>
              </div>

              <div>
                <label className={labelClass} htmlFor="organisation">
                  Company / organisation (optional)
                </label>
                <input
                  id="organisation"
                  autoComplete="organization"
                  value={values.organisation ?? ""}
                  onChange={(event) => set("organisation", event.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="role">
                  Job title / role (optional)
                </label>
                <input
                  id="role"
                  autoComplete="organization-title"
                  value={values.role ?? ""}
                  onChange={(event) => set("role", event.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="country">
                  Country (optional)
                </label>
                <input
                  id="country"
                  autoComplete="country-name"
                  value={values.country ?? ""}
                  onChange={(event) => set("country", event.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="city">
                  City (optional)
                </label>
                <input
                  id="city"
                  autoComplete="address-level2"
                  value={values.city ?? ""}
                  onChange={(event) => set("city", event.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="website">
                  Website (optional)
                </label>
                <input
                  id="website"
                  inputMode="url"
                  autoComplete="url"
                  placeholder="https://"
                  value={values.website ?? ""}
                  onChange={(event) => set("website", event.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="about">
                  Anything else about you or your organisation (optional)
                </label>
                <textarea
                  id="about"
                  rows={3}
                  value={values.about ?? ""}
                  onChange={(event) => set("about", event.target.value)}
                  className={`${inputClass} h-auto py-3`}
                />
              </div>
            </div>
          ) : null}

          {step === 1 ? (
            <div>
              <fieldset>
                <legend className={labelClass}>What is your enquiry about?</legend>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {enquiryTypes.map((option) => {
                    const selected = option.id === enquiryType;
                    return (
                      <label
                        key={option.id}
                        className={`flex cursor-pointer gap-3 rounded-[14px] border p-3.5 transition-colors duration-200 ${
                          selected
                            ? "border-ink/35 bg-accent/25"
                            : "border-hairline hover:bg-surface-muted"
                        }`}
                      >
                        <input
                          type="radio"
                          name="enquiryType"
                          value={option.id}
                          checked={selected}
                          onChange={() => onEnquiryTypeChange(option.id)}
                          className="mt-1 h-4 w-4 shrink-0 accent-[#16191b]"
                        />
                        <span className="min-w-0">
                          <span className="block text-[14.5px] font-medium">{option.label}</span>
                          <span className="mt-1 block text-[13px] leading-[1.5] text-ink-soft">
                            {option.summary}
                          </span>
                        </span>
                      </label>
                    );
                  })}
                </div>
                {errors.enquiryType ? (
                  <p className="mt-2 text-[12.5px] text-ink">{errors.enquiryType}</p>
                ) : null}
              </fieldset>

              <div className="mt-4">
                <label className={labelClass} htmlFor="subject">
                  Subject (optional)
                </label>
                <input
                  id="subject"
                  placeholder="Enter subject"
                  value={values.subject ?? ""}
                  onChange={(event) => set("subject", event.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {typeFields.map((field) => (
                <Field
                  key={field.name}
                  field={field}
                  value={details[field.name] ?? ""}
                  onChange={(value) => setDetails((prev) => ({ ...prev, [field.name]: value }))}
                />
              ))}

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="message">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us what you would like to discuss…"
                  value={values.message ?? ""}
                  onChange={(event) => set("message", event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  className={`${inputClass} h-auto py-3`}
                />
                {errors.message ? (
                  <p className="mt-1.5 text-[12.5px] text-ink">{errors.message}</p>
                ) : null}
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div>
              <dl className="grid gap-px overflow-hidden rounded-[14px] border border-hairline bg-hairline sm:grid-cols-2">
                {[
                  ["Name", values.name],
                  ["Email", values.email],
                  ["Phone", values.phone],
                  ["Organisation", values.organisation],
                  ["Role", values.role],
                  ["Country", values.country],
                  ["City", values.city],
                  ["Website", values.website],
                  ["About", values.about],
                  ["Enquiry", type?.label],
                  ["Subject", values.subject],
                  ...typeFields.map(
                    (field) => [field.label, details[field.name]] as [string, string | undefined],
                  ),
                ]
                  .filter(([, value]) => Boolean(value))
                  .map(([label, value]) => (
                    <div key={label} className="bg-surface p-3.5">
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                        {label}
                      </dt>
                      <dd className="mt-1.5 break-words text-[14.5px]">{value}</dd>
                    </div>
                  ))}
              </dl>

              <div className="mt-4 rounded-[14px] border border-hairline p-3.5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                  Message
                </p>
                <p className="mt-2 whitespace-pre-wrap text-[14.5px] leading-[1.7]">
                  {values.message}
                </p>
              </div>

              {TURNSTILE_SITE_KEY ? (
                <div
                  className="cf-turnstile mt-5"
                  data-sitekey={TURNSTILE_SITE_KEY}
                  data-theme="light"
                />
              ) : null}

              <label className="mt-5 flex gap-3 text-[14px] leading-[1.65] text-ink-soft">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-[#16191b]"
                />
                <span>
                  I agree that Aero Intelli may use the details above to respond to this enquiry, as
                  described in the{" "}
                  <Link href="/privacy-policy" className="underline underline-offset-2 text-ink">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
              {errors.consent ? (
                <p className="mt-1.5 text-[12.5px] text-ink">{errors.consent}</p>
              ) : null}

              {status === "error" ? (
                <p className="mt-4 text-[14px] text-ink">
                  Your enquiry could not be submitted. Please try again, or email{" "}
                  {contactConfig.generalEmail}.
                </p>
              ) : null}
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>

      <div className="mt-7 flex items-center justify-between gap-3 border-t border-hairline pt-5">
        <button
          type="button"
          onClick={() => setStep((current) => Math.max(current - 1, 0))}
          disabled={step === 0}
          className="min-h-[44px] rounded-[12px] px-4 text-[14px] font-medium text-ink-soft transition-colors duration-200 hover:text-ink disabled:opacity-40"
        >
          Back
        </button>

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="min-h-[44px] rounded-[12px] bg-ink px-5 text-[14px] font-semibold text-surface-muted transition-colors duration-200 hover:bg-[#0f1214]"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={status === "sending"}
            className="min-h-[44px] rounded-[12px] bg-ink px-5 text-[14px] font-semibold text-surface-muted transition-colors duration-200 hover:bg-[#0f1214] disabled:opacity-60"
          >
            {status === "sending" ? "Submitting…" : "Submit enquiry"}
          </button>
        )}
      </div>
    </div>
  );
}
