/**
 * Horizontal on desktop, vertical on mobile. Purely presentational: it never
 * implies live tracking of a real shipment.
 */
export function ProcessTimeline({
  stages,
  label,
  highlight,
}: {
  stages: string[];
  label?: string;
  /** Optional emphasis chip rendered after the stages, e.g. "35–60 days". */
  highlight?: { value: string; caption: string };
}) {
  return (
    <div className="mt-6">
      {label ? (
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-legal-muted">
          {label}
        </p>
      ) : null}

      <ol className="mt-4 flex flex-col gap-0 md:flex-row md:gap-0">
        {stages.map((stage, index) => (
          <li key={stage} className="relative flex min-w-0 flex-1 gap-3 pb-6 last:pb-0 md:block md:pb-0">
            {/* Mobile: vertical rail. Desktop: horizontal rail. */}
            <div className="flex flex-col items-center md:w-full md:flex-row">
              <span
                aria-hidden="true"
                className="mt-[5px] h-[7px] w-[7px] shrink-0 rounded-full border border-legal-border bg-accent-deep md:mt-0"
              />
              {index < stages.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="w-px flex-1 bg-legal-border md:h-px md:w-full md:flex-1"
                />
              ) : null}
            </div>

            <div className="min-w-0 pb-1 md:mt-3 md:pr-4">
              <p className="text-[10.5px] tabular-nums tracking-[0.14em] text-legal-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-[13.5px] font-medium leading-[1.35] text-legal-heading">
                {stage}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {highlight ? (
        <div className="mt-6 rounded-[10px] border border-legal-border border-l-2 border-l-accent bg-legal-surface p-5">
          <p className="text-[28px] font-medium leading-none tracking-[-0.02em] text-legal-heading md:text-[34px]">
            {highlight.value}
          </p>
          <p className="mt-3 text-[14px] leading-[1.65] text-legal-secondary">
            {highlight.caption}
          </p>
        </div>
      ) : null}
    </div>
  );
}
