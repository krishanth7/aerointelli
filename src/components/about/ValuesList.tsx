import { coreValues } from "@/content/about";

/**
 * The six values, as an editorial list rather than six cards.
 *
 * Server component, and deliberately not animated by either library.
 *
 * The row reacts to the pointer, but the reaction is a hover state on a static
 * list — not a disclosure. The description is always in the document and always
 * readable; on a wide screen it starts dimmed and comes up to full contrast
 * under the pointer. Nothing is hidden behind an interaction, so there is no
 * keyboard trap to solve and nothing for a screen reader to miss. Under
 * `prefers-reduced-motion` the colour transition is dropped and the list is
 * simply present.
 */
export function ValuesList() {
  return (
    <ul data-reveal-group className="border-t border-hairline">
      {coreValues.map((value) => (
        <li
          key={value.index}
          data-reveal-item
          className="group border-b border-hairline transition-colors duration-300 hover:bg-surface-muted"
        >
          <div className="flex items-baseline gap-5 px-3 py-6 md:gap-8 md:px-5 md:py-8">
            <span className="shrink-0 text-[13px] font-semibold tabular-nums tracking-[0.08em] text-ink-soft/60 transition-colors duration-300 group-hover:text-ink lg:text-[15px]">
              {value.index}
            </span>

            <div className="min-w-0 flex-1">
              <h3 className="text-[22px] font-medium leading-[1.2] tracking-[-0.02em] transition-transform duration-300 motion-reduce:transition-none md:text-[30px] lg:group-hover:translate-x-1.5">
                {value.title}
              </h3>
              <p className="mt-2.5 max-w-[560px] text-[15px] leading-[1.8] text-ink-soft transition-colors duration-300 motion-reduce:transition-none lg:text-ink-soft/70 lg:group-hover:text-ink-soft">
                {value.body}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
