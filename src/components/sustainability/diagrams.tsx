import { energyLoads, energySources, waterStages, rasCycle } from "@/content/sustainability";

/**
 * Technical diagrams for the sustainability page.
 *
 * These are server components. They carry no state and no interactivity — the
 * scroll choreography is applied by the page's GSAP context, which finds them
 * through the `data-stage-track` / `data-draw-path` attributes. Keeping them off
 * the client bundle is why the page ships only four client components.
 *
 * Each diagram is aria-hidden and paired with real text nearby. None of them is
 * the only place a fact appears.
 */

/** Water treatment train, drawn as a pipeline that activates stage by stage. */
export function WaterPipeline() {
  return (
    <div data-stage-track className="grid gap-px overflow-hidden rounded-[18px] border border-hairline bg-hairline md:grid-cols-3 lg:grid-cols-6">
      {waterStages.map((stage, index) => (
        <div key={stage.id} data-stage className="relative bg-surface p-5">
          <div className="flex items-center gap-2.5">
            <span className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-ink-soft">
              {String(index + 1).padStart(2, "0")}
            </span>
            {/* Direction marker. Hidden on the last stage and whenever the grid
                wraps, where a rightward arrow would point at nothing. */}
            {index < waterStages.length - 1 ? (
              <span aria-hidden="true" className="h-px flex-1 bg-hairline-strong" />
            ) : null}
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-deep" />
          </div>

          <h3 className="mt-4 text-[15px] font-medium leading-[1.3]">{stage.label}</h3>
          <p className="mt-2 text-[13.5px] leading-[1.65] text-ink-soft">{stage.body}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * RAS treatment schematic. Drawn as an engineering drawing — thin rules, a
 * single column, and a return path that closes the loop back to the top.
 */
export function RASSchematic() {
  return (
    <div className="relative">
      <ol data-stage-track className="space-y-px overflow-hidden rounded-[18px] border border-hairline bg-hairline">
        {rasCycle.map((item, index) => (
          <li
            key={item.step}
            data-stage
            className="flex flex-col gap-1.5 bg-surface p-5 sm:flex-row sm:items-baseline sm:gap-6 md:p-6"
          >
            <span className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-ink-soft sm:w-8">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[16px] font-medium leading-[1.35] sm:w-[220px] sm:shrink-0">
              {item.step}
            </span>
            <span className="text-[14.5px] leading-[1.7] text-ink-soft">{item.body}</span>
          </li>
        ))}
      </ol>

      <p className="mt-4 flex items-center gap-2.5 text-[13px] text-ink-soft">
        <span aria-hidden="true" className="h-px w-10 bg-accent-deep" />
        Treated water returns to stage 01 and the cycle repeats.
      </p>
    </div>
  );
}

/**
 * Energy flow: sources on one side, loads on the other, drawn as a bipartite
 * routing diagram rather than a chart. There is no share or percentage here
 * because none has been measured.
 */
export function EnergyFlow() {
  const sourceY = (index: number) => 60 + index * 90;
  const loadY = (index: number) => 40 + index * 68;

  return (
    <svg
      viewBox="0 0 560 300"
      aria-hidden="true"
      className="h-auto w-full overflow-visible text-legal-dark-muted"
    >
      {/* Every source can serve every load. The routing is the point: the mix
          is a site decision, not a fixed property of the system. */}
      {energySources.map((source, sourceIndex) =>
        energyLoads.map((load, loadIndex) => (
          <path
            key={`${source}-${load}`}
            data-draw-path
            d={`M 150 ${sourceY(sourceIndex)} C 260 ${sourceY(sourceIndex)}, 300 ${loadY(loadIndex)}, 400 ${loadY(loadIndex)}`}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.16"
            strokeWidth="1"
          />
        )),
      )}

      {energySources.map((source, index) => (
        <g key={source}>
          <circle cx="150" cy={sourceY(index)} r="5" fill="#c9ef77" />
          <text
            x="132"
            y={sourceY(index) + 4}
            textAnchor="end"
            className="fill-current text-[12px] font-medium"
          >
            {source}
          </text>
        </g>
      ))}

      {energyLoads.map((load, index) => (
        <g key={load}>
          <circle
            cx="400"
            cy={loadY(index)}
            r="4"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
          <text x="418" y={loadY(index) + 4} className="fill-current text-[12px] font-medium">
            {load}
          </text>
        </g>
      ))}

      <text x="132" y="24" textAnchor="end" className="fill-current text-[10px] font-semibold uppercase tracking-[0.14em]" opacity="0.6">
        Supply
      </text>
      <text x="418" y="24" className="fill-current text-[10px] font-semibold uppercase tracking-[0.14em]" opacity="0.6">
        Demand
      </text>
    </svg>
  );
}
