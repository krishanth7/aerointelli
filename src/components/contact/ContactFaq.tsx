"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { contactFaqs } from "@/config/contact";

export function ContactFaq() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="mt-6 space-y-2.5">
      {contactFaqs.map((faq, index) => {
        const expanded = open === index;

        return (
          <li
            key={faq.question}
            className={`overflow-hidden rounded-[16px] border transition-[background-color,border-color,box-shadow] duration-250 ${
              expanded
                ? "border-hairline-strong bg-surface shadow-float"
                : "border-hairline bg-surface/70 hover:border-hairline-strong hover:bg-surface"
            }`}
          >
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setOpen(expanded ? null : index)}
                className="flex w-full items-start gap-4 px-5 py-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent-deep/60 md:px-6 md:py-5"
              >
                <span
                  aria-hidden="true"
                  className={`mt-[3px] text-[11px] font-semibold tabular-nums tracking-[0.14em] transition-colors duration-200 ${
                    expanded ? "text-ink" : "text-ink-soft"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="min-w-0 flex-1 text-[15.5px] font-medium leading-[1.5] md:text-[17px]">
                  {faq.question}
                </span>

                <span
                  aria-hidden="true"
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-[background-color,transform] duration-250 ${
                    expanded ? "rotate-45 bg-accent" : "bg-surface-muted"
                  }`}
                >
                  <svg viewBox="0 0 12 12" className="h-3 w-3 text-ink">
                    <path
                      d="M6 1.5v9M1.5 6h9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  id={`faq-panel-${index}`}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 md:px-6 md:pb-6">
                    <p className="max-w-[760px] border-l-2 border-accent pl-4 text-[15px] leading-[1.8] text-ink-soft md:pl-5 md:text-[15.5px]">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
