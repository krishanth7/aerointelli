import type { LegalBlock, LegalSection as LegalSectionData } from "@/content/privacy-policy";

export function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.kind === "subheading") {
          return (
            <h3
              key={index}
              className="mt-8 text-[17px] font-semibold tracking-[-0.01em] text-legal-heading md:text-[18px]"
            >
              {block.value}
            </h3>
          );
        }

        if (block.kind === "list") {
          return (
            <ul
              key={index}
              className="mt-4 list-disc space-y-2 pl-5 text-[15.5px] leading-[1.75] text-legal-ink marker:text-legal-muted md:pl-6 md:text-[16.5px]"
            >
              {block.value.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.kind === "clause") {
          return (
            <p
              key={index}
              className="mt-4 flex gap-3 text-[15.5px] leading-[1.8] text-legal-ink md:text-[16.5px]"
            >
              <span className="w-[36px] shrink-0 font-semibold tabular-nums text-legal-heading">
                {block.number}
              </span>
              <span className="min-w-0">{block.value}</span>
            </p>
          );
        }

        if (block.kind === "callout") {
          return (
            <div
              key={index}
              className="mt-6 rounded-[10px] border-l-2 border-l-accent bg-legal-surface p-5 md:p-6"
            >
              <p className="text-[15.5px] leading-[1.8] text-legal-ink md:text-[16.5px]">
                {block.value}
              </p>
            </div>
          );
        }

        if (block.kind === "linkList") {
          return (
            <ul key={index} className="mt-4 space-y-1">
              {block.value.map((link) => {
                const external = link.href.startsWith("http");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group inline-flex min-h-[44px] items-center gap-1.5 text-[15.5px] text-legal-link underline decoration-legal-border underline-offset-4 outline-none transition-colors duration-200 hover:text-legal-link-hover hover:decoration-accent-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-legal-focus md:text-[16px]"
                    >
                      {external ? `${link.label} — Aero Intelli` : link.label}
                      {external ? (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 12 12"
                          className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
                        >
                          <path
                            d="M4 2h6v6M10 2 3 9"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          );
        }

        return (
          <p
            key={index}
            className="mt-5 text-[15.5px] leading-[1.8] text-legal-ink md:text-[16.5px]"
          >
            {block.value}
          </p>
        );
      })}
    </>
  );
}

export function padSectionNumber(value: string) {
  return value.padStart(2, "0");
}

export function LegalSection({
  section,
  children,
}: {
  section: LegalSectionData;
  /** Optional trailing content, e.g. a generated table, inside the reveal group. */
  children?: React.ReactNode;
}) {
  return (
    <section
      id={section.id}
      data-legal-section
      className="scroll-mt-[130px] pt-11 first:pt-0 md:pt-16"
    >
      <p
        data-reveal="number"
        className="text-[11px] tracking-[0.14em] text-legal-muted md:text-[12px]"
      >
        {padSectionNumber(section.number)}
      </p>
      <h2
        data-reveal="heading"
        className="mt-3 text-[24px] font-medium leading-[1.2] tracking-[-0.015em] text-legal-heading md:text-[30px]"
      >
        {section.title}
      </h2>
      <span
        aria-hidden="true"
        data-reveal="divider"
        className="mt-5 block h-px w-full bg-legal-border"
      />
      <div data-reveal="body">
        <LegalBlocks blocks={section.blocks} />
        {children}
      </div>
    </section>
  );
}
