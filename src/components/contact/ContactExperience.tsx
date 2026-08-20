"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  featuredEnquiryTypes,
  findContactSource,
  matchEnquiryType,
  type EnquiryTypeId,
} from "@/config/contact";
import { ContactForm } from "./ContactForm";

/**
 * Category cards and the form share one piece of state: selecting a card
 * updates the form in place rather than navigating away (`?type=` preselects).
 *
 * A `?source=` parameter lets another page hand over its context — the Knowledge
 * Center sends visitors here from Research, Insights and Case Studies. Nothing
 * about that is shown to the visitor: it only seeds the enquiry type and the
 * subject, both of which stay editable. Any other arrival starts blank.
 */
export function ContactExperience({ shell }: { shell: string }) {
  const params = useSearchParams();
  const context = findContactSource(params.get("source"));
  // An explicit `?type=` wins over the source default; neither means no selection.
  const initial = matchEnquiryType(params.get("type"))?.id ?? context?.enquiryType ?? null;

  const [enquiryType, setEnquiryType] = useState<EnquiryTypeId | null>(initial);

  function select(id: EnquiryTypeId) {
    setEnquiryType(id);
    document.getElementById("enquiry-form")?.scrollIntoView({ block: "start" });
  }

  return (
    <div className={`${shell} py-16 md:py-24`}>
      <section aria-labelledby="enquiry-categories">
        <header className="max-w-[760px]">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-ink-soft">
              01
            </span>
            <span aria-hidden="true" className="h-px w-8 bg-hairline-strong" />
          </div>
          <h2
            id="enquiry-categories"
            className="mt-4 text-[24px] font-medium leading-[1.15] tracking-[-0.025em] md:text-[32px]"
          >
            What can we help with?
          </h2>
          <p className="mt-4 text-[15px] leading-[1.75] text-ink-soft md:text-[16.5px] md:leading-[1.8]">
            Choose the closest match. The form below adapts to ask only what that team needs.
          </p>
        </header>

        {/* Single column on phones, two on tablets, four on wide screens. */}
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
          {featuredEnquiryTypes.map((type, index) => {
            const selected = type.id === enquiryType;

            return (
              <li key={type.id}>
                <button
                  type="button"
                  onClick={() => select(type.id)}
                  aria-pressed={selected}
                  className={`group flex h-full w-full flex-col rounded-[18px] border p-5 text-left transition-[background-color,border-color,transform,box-shadow] duration-200 md:p-6 ${
                    selected
                      ? "border-ink/25 bg-surface shadow-float"
                      : "border-hairline bg-surface/60 hover:-translate-y-px hover:border-hairline-strong hover:bg-surface"
                  }`}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="text-[10.5px] font-semibold tabular-nums tracking-[0.14em] text-ink-soft">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`grid h-6 w-6 place-items-center rounded-full transition-colors duration-200 ${
                        selected ? "bg-accent" : "bg-surface-muted"
                      }`}
                    >
                      <svg viewBox="0 0 12 12" className="h-3 w-3 text-ink">
                        {selected ? (
                          <path
                            d="M2.5 6.4 5 8.9 9.5 3.4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        ) : (
                          <path
                            d="M3 9 9 3M9 3H4.5M9 3v4.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        )}
                      </svg>
                    </span>
                  </span>

                  <span className="mt-5 block text-[16px] font-medium leading-[1.3]">
                    {type.label}
                  </span>
                  <span className="mt-2.5 block text-[13.5px] leading-[1.6] text-ink-soft">
                    {type.summary}
                  </span>

                  {type.scope ? (
                    <span className="mt-4 block border-t border-hairline pt-3 text-[12.5px] leading-[1.55] text-ink-soft/75">
                      {type.scope}
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section
        id="enquiry-form"
        aria-labelledby="enquiry-form-heading"
        className="mt-16 scroll-mt-[110px] border-t border-hairline pt-14 md:mt-24 md:pt-20"
      >
        <header className="max-w-[760px]">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-ink-soft">
              02
            </span>
            <span aria-hidden="true" className="h-px w-8 bg-hairline-strong" />
          </div>
          <h2
            id="enquiry-form-heading"
            className="mt-4 text-[24px] font-medium leading-[1.15] tracking-[-0.025em] md:text-[32px]"
          >
            Send an enquiry
          </h2>
        </header>

        <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 md:mt-10">
          <ContactForm
            enquiryType={enquiryType}
            onEnquiryTypeChange={setEnquiryType}
            initialSubject={context?.subject ?? ""}
          />

          {/* Guidance trails the form on phones, tracks it on desktop. */}
          <aside className="mt-4 lg:sticky lg:top-[110px] lg:mt-0">
            <div className="rounded-[18px] border border-hairline bg-surface/60 p-5 md:p-6">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Before you submit
              </p>
              <ul className="mt-4 space-y-3.5">
                {[
                  "Use an email address you check — replies go there.",
                  "For project enquiries, include site location and available area.",
                  "For orders, include the order reference.",
                  "Do not send confidential technical documents in this form.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[13.5px] leading-[1.6] text-ink-soft"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-deep"
                    />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
