"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Shared building blocks used across the marketing pages.
 *
 * Anything scroll-driven is marked with a data attribute and animated by
 * `lib/animations/scrollSystem.ts`. Anything state- or hover-driven
 * is animated here with Framer Motion. No element is animated by both.
 */

// `SHELL` deliberately does not live here — see `./shell`. Re-exporting it from a
// client module would hand server components the same broken proxy again.

/**
 * Headline that rises from behind a mask, one line per child.
 *
 * The mask lives on a wrapper and the transform on the inner span, so GSAP owns
 * a element that CSS overflow is not also fighting over.
 */
export function RevealText({
  lines,
  as: Tag = "h2",
  className = "",
  lineClassName = "",
  split = "lines",
}: {
  lines: string[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  lineClassName?: string;
  /**
   * `letters` splits each line into per-character spans so the line can be
   * animated a character at a time. It costs a span per character and makes the
   * text unreadable to assistive technology, so the visible split is marked
   * `aria-hidden` and the whole heading carries the plain string as its label.
   */
  split?: "lines" | "letters";
}) {
  if (split === "letters") {
    return (
      <Tag className={className} aria-label={lines.join(" ")}>
        {lines.map((line) => (
          <span key={line} aria-hidden="true" className="block overflow-hidden pb-[0.12em]">
            <span data-letter-line className={`block ${lineClassName}`}>
              {line.split(" ").map((word, wordIndex, words) => (
                <span key={`${word}-${wordIndex}`}>
                  {/* The word is one inline-block so a character split never
                      introduces a wrap opportunity inside a word. */}
                  <span className="inline-block whitespace-nowrap">
                    {Array.from(word).map((character, characterIndex) => (
                      <span
                        key={`${character}-${characterIndex}`}
                        data-letter
                        className="inline-block"
                      >
                        {character}
                      </span>
                    ))}
                  </span>
                  {wordIndex < words.length - 1 ? " " : null}
                </span>
              ))}
            </span>
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      {lines.map((line) => (
        <span key={line} className="block overflow-hidden pb-[0.08em]">
          <span data-reveal-line className={`block ${lineClassName}`}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/**
 * Depth layer. `depth` is the fraction of scroll distance the layer travels;
 * the actual pixel amount is decided per breakpoint by the animation module.
 */
export function ParallaxLayer({
  depth,
  className = "",
  children,
}: {
  depth: 0.15 | 0.35 | 0.6;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div data-parallax={depth} className={className}>
      {children}
    </div>
  );
}

/**
 * Numeric readout.
 *
 * Renders an em dash when `value` is null, which is every metric until one is
 * measured on an operating project. There is deliberately no fallback or
 * placeholder number — a zero here would read as a measurement.
 */
export function MetricValue({
  value,
  unit,
  className = "",
}: {
  value: number | null;
  unit: string;
  className?: string;
}) {
  return (
    <p className={`flex items-baseline gap-1.5 tabular-nums ${className}`}>
      <span className="text-[30px] font-medium leading-none tracking-[-0.03em] md:text-[38px]">
        {value === null ? "—" : value}
      </span>
      <span className="text-[13px] text-ink-soft">{unit}</span>
    </p>
  );
}

/**
 * Button that leans a few pixels toward the cursor.
 *
 * Movement is capped at 6px and disabled under reduced motion and on touch,
 * where there is no cursor to lean toward and the transform would only fire
 * after the tap.
 */
export function MagneticButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  function handleMove(event: React.MouseEvent<HTMLSpanElement>) {
    const node = ref.current;
    if (!node || reduced) return;

    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
    node.style.transform = `translate(${x * 6}px, ${y * 6}px)`;
  }

  function handleLeave() {
    const node = ref.current;
    if (node) node.style.transform = "";
  }

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block transition-transform duration-300 ease-out motion-reduce:!transform-none ${className}`}
    >
      {children}
    </span>
  );
}

/** Eyebrow with a rule, used above every section heading. */
export function SectionLabel({
  index,
  label,
  tone = "light",
}: {
  index: string;
  label: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <div className="flex items-center gap-3">
      <span
        className={`text-[11px] font-semibold tabular-nums tracking-[0.14em] ${
          dark ? "text-legal-dark-muted" : "text-ink-soft"
        }`}
      >
        {index}
      </span>
      <span aria-hidden="true" className={`h-px w-8 ${dark ? "bg-white/20" : "bg-hairline-strong"}`} />
      <span
        className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
          dark ? "text-legal-dark-muted" : "text-ink-soft"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

/**
 * Status chip. `tone` is derived from the metric status rather than passed in,
 * so an unverified figure cannot be styled as a verified one.
 */
export function StatusChip({ label, verified = false }: { label: string; verified?: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] ${
        verified
          ? "border-accent-deep/50 bg-accent/25 text-ink"
          : "border-hairline text-ink-soft/75"
      }`}
    >
      {label}
    </span>
  );
}

/** Card that lifts slightly on hover. Transform only — no layout properties. */
export function HoverCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
