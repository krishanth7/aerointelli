"use client";

import { motion, useReducedMotion } from "framer-motion";

type MetaItem = { label: string; value: string };

export function AnimatedLegalHeader({
  label,
  title,
  company,
  meta,
  summary,
  status,
  tone = "light",
}: {
  label: string;
  title: string;
  company: string;
  meta: MetaItem[];
  summary: string;
  status: string;
  tone?: "light" | "dark";
}) {
  const reduceMotion = useReducedMotion();
  const dark = tone === "dark";

  const t = {
    label: dark ? "text-legal-dark-muted" : "text-legal-secondary",
    title: dark ? "text-legal-bg" : "text-legal-heading",
    company: dark ? "text-legal-dark-muted" : "text-legal-secondary",
    chip: dark
      ? "border-white/12 text-legal-dark-muted"
      : "border-legal-border text-legal-secondary",
    meta: dark ? "text-legal-dark-muted/80" : "text-legal-muted",
    summary: dark ? "text-legal-bg" : "text-legal-ink",
  };

  // Content must never wait on animation, so the reduced-motion path renders final state.
  const step = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.22, 0.61, 0.36, 1] as const },
        };

  return (
    <header data-legal-hero className="relative isolate">
      <motion.p
        {...step(0.1)}
        className={`flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] ${t.label}`}
      >
        <motion.span
          aria-hidden="true"
          initial={reduceMotion ? false : { scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="h-[6px] w-[6px] rounded-full bg-accent-deep"
        />
        {label}
      </motion.p>

      <motion.h1
        {...step(0.18)}
        className={`mt-5 text-[38px] font-semibold leading-[1.05] tracking-[-0.025em] sm:text-[46px] md:text-[54px] lg:text-[62px] ${t.title}`}
      >
        {title}
      </motion.h1>

      <motion.p {...step(0.3)} className={`mt-5 text-[15px] font-medium ${t.company}`}>
        {company}
      </motion.p>

      <motion.div {...step(0.42)} data-hero-meta className="mt-5">
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.16em] ${t.chip}`}
        >
          <span aria-hidden="true" className="h-[5px] w-[5px] rounded-full bg-accent-deep" />
          {status}
        </span>

        <ul className={`mt-4 flex flex-col gap-1 text-[12.5px] ${t.meta} sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3`}>
          {meta.map((item, index) => (
            <li key={item.label} className="flex items-center gap-3">
              {index > 0 ? (
                <span aria-hidden="true" className="hidden sm:inline">
                  ·
                </span>
              ) : null}
              <span>
                {item.label}: {item.value}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.p
        {...step(0.55)}
        className={`mt-9 max-w-[720px] border-l-2 border-accent pl-6 text-[19px] leading-[1.6] sm:text-[21px] md:text-[24px] ${t.summary}`}
      >
        {summary}
      </motion.p>
    </header>
  );
}
