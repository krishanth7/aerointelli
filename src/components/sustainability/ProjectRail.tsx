import { projectFields, sustainabilityProjects, systemChannels } from "@/content/sustainability";

/**
 * Published project results.
 *
 * The collection is empty and the empty state is the honest render: it states
 * what a published entry will contain rather than showing an invented one. When
 * entries exist the desktop rail is pinned and scrubbed horizontally by the
 * page's GSAP context (`data-horizontal-rail`), which measures its own overflow
 * and does nothing when there is none — so this markup is correct either way.
 */
export function ProjectRail() {
  if (sustainabilityProjects.length === 0) {
    return (
      <div className="rounded-[18px] border border-hairline bg-surface p-6 md:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          No projects published yet
        </p>
        <p className="mt-4 max-w-[720px] text-[15px] leading-[1.8] text-ink-soft">
          Each entry will state the project, the system, the problem it had to solve, the
          engineering approach taken, the measured outcome and the resource impact — against the
          baseline it was measured from, so an improvement can be checked rather than taken on
          trust. None are listed until a project has run long enough to produce data the operator
          has approved for release.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {projectFields.map((field) => (
            <li
              key={field}
              className="rounded-full border border-hairline px-3.5 py-1.5 text-[12.5px] text-ink-soft"
            >
              {field}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div data-horizontal-rail className="overflow-hidden">
      <div data-horizontal-track className="flex gap-5 lg:w-max">
        {sustainabilityProjects.map((project) => (
          <article
            key={project.id}
            className="w-full shrink-0 rounded-[18px] border border-hairline bg-surface p-6 lg:w-[420px]"
          >
            <h3 className="text-[19px] font-medium leading-[1.25]">{project.name}</h3>
            <p className="mt-1.5 text-[12.5px] font-medium uppercase tracking-[0.08em] text-ink-soft/80">
              {project.system}
            </p>

            <dl className="mt-5 space-y-3.5 border-t border-hairline pt-4 text-[14px] leading-[1.7]">
              {[
                ["Challenge", project.challenge],
                ["Approach", project.approach],
                ["Measured outcome", project.outcome],
                ["Resource impact", project.impact],
              ].map(([term, description]) => (
                <div key={term}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft/70">
                    {term}
                  </dt>
                  <dd className="mt-1 text-ink-soft">{description}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}

/**
 * Operations panel.
 *
 * Labelled as an interface concept, and every channel reads "Monitored" rather
 * than a state, because nothing here is bound to a running system. The pulse is
 * on the channel marker, not on a value, so it cannot be mistaken for live data.
 */
export function SystemStatusPanel() {
  return (
    <div className="rounded-[18px] border border-hairline bg-surface p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline pb-4">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          System status
        </p>
        <span className="rounded-full border border-hairline px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-ink-soft/75">
          Interface concept
        </span>
      </div>

      <ul className="mt-4 grid gap-px overflow-hidden rounded-[12px] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {systemChannels.map((channel) => (
          <li key={channel.name} className="flex items-center gap-3 bg-surface px-4 py-3.5">
            <span aria-hidden="true" className="contact-node h-1.5 w-1.5 rounded-full bg-accent-deep" />
            <span className="text-[14px] font-medium">{channel.name}</span>
            <span className="ml-auto text-[11px] uppercase tracking-[0.1em] text-ink-soft/70">
              {channel.state}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-[13.5px] leading-[1.75] text-ink-soft">
        This panel shows the channels the platform is built to report. It is not connected to an
        operating system, and no value shown here is a live reading.
      </p>
    </div>
  );
}
