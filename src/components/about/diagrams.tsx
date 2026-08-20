import {
  digitalWorld,
  ecosystemDomains,
  horizons,
  physicalWorld,
  processSteps,
  responseResult,
  responseTerms,
  technologyStack,
} from "@/content/about";

/**
 * The about page's technical diagrams.
 *
 * All server components. Nothing here holds state or reads the DOM; the scroll
 * choreography is applied by the page's GSAP context through the `data-*`
 * attributes these render (`data-stage-track`, `data-stage`, `data-draw-path`,
 * `data-process-fill`). Every diagram is also readable as plain markup with
 * JavaScript switched off, which is why each one is a list or a table rather
 * than an image.
 */

/** Biology + Engineering + Water + Data + AI = Intelligent systems. */
export function EquationDiagram() {
  return (
    <div
      data-stage-track
      className="flex flex-wrap items-center gap-x-3 gap-y-3 rounded-[18px] border border-hairline bg-surface p-6 md:p-8"
    >
      {responseTerms.map((term, index) => (
        <div key={term} data-stage className="flex items-center gap-3">
          <span className="rounded-full border border-hairline-strong px-4 py-2 text-[14px] font-medium">
            {term}
          </span>
          <span aria-hidden="true" className="text-[15px] text-ink-soft">
            {index < responseTerms.length - 1 ? "+" : "="}
          </span>
        </div>
      ))}

      <span
        data-stage
        className="rounded-full border border-accent-deep bg-accent/40 px-4 py-2 text-[14px] font-medium"
      >
        {responseResult}
      </span>
    </div>
  );
}

/**
 * The technology stack, physical at the base and decisions at the top.
 *
 * Drawn top-down because that is the order the copy reads in, with the return
 * to the plant stated in words at the end rather than drawn as a second arrow —
 * a diagram that loops in two directions stops being legible.
 */
export function StackDiagram() {
  return (
    <div data-stage-track className="space-y-2.5">
      {technologyStack.map((layer, index) => (
        <div key={layer.id}>
          <div
            data-stage
            className="flex flex-col gap-3 rounded-[14px] border border-white/10 bg-white/[0.04] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
              {layer.name}
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
              {layer.items.map((item) => (
                <li key={item} className="text-[13.5px] text-footer-text">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {index < technologyStack.length - 1 ? (
            <div aria-hidden="true" className="flex justify-center py-1">
              <span className="h-4 w-px bg-white/20" />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

/** Physical world on one side, digital on the other, intelligence between them. */
export function BridgeDiagram() {
  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-6">
      <div data-stage-track className="rounded-[18px] border border-hairline bg-surface p-6">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          The physical world
        </p>
        <ul className="mt-4 space-y-1.5">
          {physicalWorld.map((item) => (
            <li
              key={item}
              data-stage
              className="rounded-[10px] border border-hairline px-3.5 py-2 text-[14px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center py-2 lg:py-0">
        <span className="rounded-full border border-accent-deep bg-accent/40 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em]">
          Intelligence
        </span>
      </div>

      <div data-stage-track className="rounded-[18px] border border-hairline bg-surface p-6">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          The digital world
        </p>
        <ul className="mt-4 space-y-1.5">
          {digitalWorld.map((item) => (
            <li
              key={item}
              data-stage
              className="rounded-[10px] border border-hairline px-3.5 py-2 text-[14px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * The ecosystem: the domains the company works in.
 *
 * A register, not a diagram. The previous version was a centred "Aero Intelli"
 * pill above a wrapped row of tags, which read as a word cloud and broke into a
 * different ragged shape at every width — three domains on the last row at one
 * size, one orphan at the next.
 *
 * The nine domains are laid out one per row on a phone and three across from
 * `md` up, so the grid is exactly full at every breakpoint and never leaves a
 * half-empty final row. Cells are separated by a `gap-px` over a hairline
 * background rather than by nine individual borders: that renders one shared
 * 1px rule between neighbours instead of two abutting ones, so the grid stays
 * crisp and even. There is no hub node — these are areas of work, not a
 * hierarchy radiating from a centre, and drawing one implied an order that
 * does not exist.
 */
export function EcosystemMap() {
  return (
    <ul
      data-reveal-group
      className="grid gap-px overflow-hidden rounded-[18px] border border-hairline bg-hairline md:grid-cols-3"
    >
      {ecosystemDomains.map((domain, index) => (
        <li
          key={domain}
          data-reveal-item
          className="flex items-baseline gap-3.5 bg-surface px-5 py-4 md:px-6 md:py-5"
        >
          <span
            aria-hidden="true"
            className="shrink-0 text-[10.5px] font-semibold tabular-nums tracking-[0.1em] text-ink-soft/55"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[15px] leading-[1.5] tracking-[-0.01em] md:text-[15.5px]">
            {domain}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** The five-stage method, with a rule that fills as the section is scrubbed. */
export function ProcessTimeline() {
  return (
    <div data-stage-track className="relative pl-10 md:pl-14">
      {/* The rail is centred by layout rather than by a hand-picked offset.
          The badges occupy a fixed 24px column starting at the track's left
          edge — the gutter widens at `md`, that column does not — so a flex
          box spanning the same column puts the line through their centres at
          every width. `left-3 md:left-4` was right at one breakpoint and
          4.5px off at the other, which is the misalignment that showed. */}
      <div aria-hidden="true" className="absolute inset-y-3 left-0 flex w-6 justify-center">
        <div className="h-full w-px bg-hairline">
          <div data-process-fill className="h-full w-full origin-top bg-accent-deep" />
        </div>
      </div>

      <ol className="space-y-8 md:space-y-10">
        {processSteps.map((step) => (
          <li key={step.index} data-stage className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-10 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-hairline-strong bg-surface text-[10px] font-semibold tabular-nums md:-left-14"
            >
              {step.index}
            </span>
            <h3 className="text-[19px] font-medium leading-[1.25] md:text-[22px]">{step.title}</h3>
            <p className="mt-2 max-w-[620px] text-[15px] leading-[1.8] text-ink-soft">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * Direction, in three horizons.
 *
 * Deliberately no years. A date on this page would be a commitment, and nothing
 * here has been committed to a date.
 */
export function HorizonTimeline() {
  return (
    <div data-stage-track className="grid gap-px overflow-hidden rounded-[18px] border border-white/10 bg-white/10 md:grid-cols-3">
      {horizons.map((horizon) => (
        <div key={horizon.id} data-stage className="bg-legal-dark p-6 md:p-7">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-accent">
            {horizon.label}
          </p>
          <ul className="mt-4 space-y-2">
            {horizon.items.map((item) => (
              <li key={item} className="text-[15px] leading-[1.6] text-footer-text">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
