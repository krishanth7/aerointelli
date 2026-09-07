import { claimLabel, type Block, type Section } from "@/content/knowledge/types";

/**
 * Renders an article's typed blocks.
 *
 * Callouts, formulas and tables get distinct treatment because they carry
 * distinct obligations. A callout has to state what kind of claim it is
 * making; a formula has to define every symbol and admit its limitations; a
 * table has to say where its figures came from. The type system makes those
 * fields mandatory, and this component makes them visible.
 */
export function ArticleBody({ sections }: { sections: Section[] }) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-28">
          <h2 className="text-[24px] font-semibold tracking-[-0.02em] text-ink md:text-[30px]">
            {section.heading}
          </h2>
          <div className="mt-5 space-y-5">
            {section.blocks.map((block, index) => (
              <BlockView key={index} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  if (block.kind === "text") {
    return <p className="text-[16px] leading-[1.75] text-ink-soft">{block.value}</p>;
  }

  if (block.kind === "subheading") {
    return (
      <h3 className="pt-2 text-[18px] font-semibold tracking-[-0.01em] text-ink md:text-[20px]">
        {block.value}
      </h3>
    );
  }

  if (block.kind === "list") {
    const items = block.items.map((item, index) => (
      <li key={index} className="pl-1 text-[16px] leading-[1.75] text-ink-soft">
        {item}
      </li>
    ));

    return block.ordered ? (
      <ol className="list-decimal space-y-3 pl-5 marker:text-ink-soft/60">{items}</ol>
    ) : (
      <ul className="list-disc space-y-3 pl-5 marker:text-ink-soft/60">{items}</ul>
    );
  }

  if (block.kind === "callout") {
    return (
      <aside className="rounded-[16px] border border-hairline-strong bg-surface-muted p-5">
        <p className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-soft">
          {claimLabel[block.tone]}
        </p>
        <p className="mt-2 text-[15.5px] font-medium text-ink">{block.title}</p>
        <p className="mt-2 text-[15px] leading-[1.7] text-ink-soft">{block.value}</p>
      </aside>
    );
  }

  if (block.kind === "formula") {
    return (
      <div className="rounded-[16px] border border-hairline-strong bg-surface p-5">
        <p className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-soft">Formula</p>
        <p className="mt-2 text-[15.5px] font-medium text-ink">{block.name}</p>
        <p className="mt-3 overflow-x-auto rounded-[10px] bg-surface-muted px-4 py-3 font-mono text-[13.5px] text-ink">
          {block.expression}
        </p>

        <dl className="mt-4 space-y-2">
          {block.terms.map((term) => (
            <div key={term.symbol} className="flex flex-wrap gap-x-2 text-[14px]">
              <dt className="font-medium text-ink">{term.symbol}</dt>
              <dd className="text-ink-soft">
                {term.meaning} &middot; {term.unit}
              </dd>
            </div>
          ))}
        </dl>

        {block.example ? (
          <p className="mt-4 text-[14.5px] leading-relaxed text-ink-soft">
            <span className="font-medium text-ink">Example. </span>
            {block.example}
          </p>
        ) : null}

        <p className="mt-3 border-t border-hairline pt-3 text-[14px] leading-relaxed text-ink-soft">
          <span className="font-medium text-ink">Limitations. </span>
          {block.limitations}
        </p>
      </div>
    );
  }

  if (block.kind === "flow") {
    return (
      <figure className="rounded-[16px] border border-hairline-strong p-5">
        <ol className="space-y-4">
          {block.steps.map((step, index) => (
            <li key={step.label} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-[3px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-hairline-strong text-[11px] font-medium text-ink-soft"
              >
                {index + 1}
              </span>
              <div className="min-w-0">
                <p className="text-[15.5px] font-medium text-ink">{step.label}</p>
                <p className="mt-1 text-[14.5px] leading-[1.7] text-ink-soft">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <figcaption className="mt-4 border-t border-hairline pt-3 text-[13px] leading-relaxed text-ink-soft">
          {block.caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="rounded-[16px] border border-hairline-strong">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-[14px]">
          <caption className="sr-only">{block.caption}</caption>
          <thead>
            <tr>
              {block.columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="border-b border-hairline-strong px-4 py-3 text-[11px] font-medium uppercase tracking-[0.1em] text-ink-soft"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) => (
                  <td
                    key={index}
                    className={`border-b border-hairline px-4 py-3 align-top leading-relaxed ${
                      index === 0 ? "font-medium text-ink" : "text-ink-soft"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="px-4 py-3 text-[13px] leading-relaxed text-ink-soft">
        <span className="font-medium text-ink">{block.caption}. </span>
        {block.basis}
      </figcaption>
    </figure>
  );
}
