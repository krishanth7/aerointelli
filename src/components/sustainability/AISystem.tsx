import { aiInputs, aiLoop, aiOutputs } from "@/content/sustainability";

/**
 * The control layer, drawn as an industrial routing diagram: measured channels
 * on the left, the control engine in the middle, actions on the right, and the
 * whole thing closing back into the plant it is controlling.
 *
 * Server component. The scroll choreography is applied by the page's GSAP
 * context via `data-draw-path` and `data-stage`.
 */
export function AISystem() {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)] lg:items-center lg:gap-12">
      <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center sm:gap-6">
        {/* Inputs */}
        <div data-stage-track>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-legal-dark-muted">
            Measured
          </p>
          <ul className="mt-3.5 space-y-1.5">
            {aiInputs.map((input) => (
              <li
                key={input}
                data-stage
                className="rounded-[10px] border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[13.5px] text-footer-text"
              >
                {input}
              </li>
            ))}
          </ul>
        </div>

        {/* Engine */}
        <div className="flex items-center justify-center py-2 sm:py-0">
          <div className="w-full max-w-[190px] rounded-[14px] border border-accent/40 bg-accent/[0.08] px-4 py-5 text-center sm:w-[170px]">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-accent">
              Control engine
            </p>
            <p className="mt-2.5 text-[13px] leading-[1.6] text-legal-dark-muted">
              Evaluates the current state against the intended operating point.
            </p>
          </div>
        </div>

        {/* Outputs */}
        <div data-stage-track>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-legal-dark-muted">
            Acted on
          </p>
          <ul className="mt-3.5 space-y-1.5">
            {aiOutputs.map((output) => (
              <li
                key={output}
                data-stage
                className="rounded-[10px] border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[13.5px] text-footer-text"
              >
                {output}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* The control cycle, closed. Reads as a list, drawn as a ring. */}
      <div className="rounded-[18px] border border-white/10 p-6">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-legal-dark-muted">
          The cycle
        </p>
        <ol data-stage-track className="mt-4 space-y-2">
          {aiLoop.map((step, index) => (
            <li key={step} data-stage className="flex items-center gap-3">
              <span className="text-[10px] font-semibold tabular-nums tracking-[0.12em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[14px] font-medium text-footer-text">{step}</span>
              {index === aiLoop.length - 1 ? (
                <span className="ml-auto text-[11px] text-legal-dark-muted">↺ 01</span>
              ) : null}
            </li>
          ))}
        </ol>
        <p className="mt-5 border-t border-white/10 pt-4 text-[13px] leading-[1.7] text-legal-dark-muted">
          The last step feeds the first. Each cycle is evidence for the next one.
        </p>
      </div>
    </div>
  );
}
