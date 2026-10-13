import type { Metadata } from "next";
import { KnowledgeSearch } from "@/components/knowledge/KnowledgeSearch";
import { KnowledgeSectionCard } from "@/components/knowledge/KnowledgeSectionCard";
import { SHELL } from "@/components/shared/shell";
import { domains, searchIndex, sectionsIn } from "@/content/knowledge/aquaculture";

export const metadata: Metadata = {
  title: "Aquaculture Knowledge",
  description:
    "A technical knowledge system covering the science, engineering, biology, production and future of aquaculture — from fundamentals and species to water quality, health, farming systems, automation and economics.",
  alternates: { canonical: "/knowledge/aquaculture" },
};

/**
 * The Aquaculture Knowledge Center index.
 *
 * Thirty sections presented as eight domains rather than as one list of thirty,
 * because the grouping is the argument: foundations before production, water
 * and health before the systems that manage them, and the business at the end
 * rather than the beginning. A flat list would be the same links and none of
 * that.
 */
export default function AquacultureKnowledgePage() {
  return (
    <>
      <section className="bg-surface pt-[calc(var(--header-height-mobile)+1rem)] md:pt-[calc(var(--header-height)+2rem)]">
        <div className={SHELL}>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">
            Knowledge
          </p>
          <h1 className="mt-5 max-w-[16ch] text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink md:text-[52px] lg:text-[60px]">
            Aquaculture Knowledge
          </h1>
          <p className="mt-6 max-w-[64ch] text-[16.5px] leading-[1.7] text-ink-soft md:text-[18.5px]">
            A comprehensive technical knowledge system covering the science, engineering, biology,
            production and future of aquaculture.
          </p>

          <div className="mt-9 max-w-[560px]">
            <KnowledgeSearch
              entries={searchIndex}
              base="/knowledge/aquaculture"
              label="Search the aquaculture knowledge base"
              placeholder="Search species, water chemistry, systems"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className={SHELL}>
          <div className="space-y-14 md:space-y-20">
            {domains.map((domain) => {
              const sections = sectionsIn(domain);
              if (sections.length === 0) return null;

              return (
                <div key={domain.id}>
                  <div className="flex flex-col gap-2 border-b border-hairline pb-5 md:flex-row md:items-end md:justify-between md:gap-8">
                    <div>
                      <p className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                        Domain {domain.number}
                      </p>
                      <h2 className="mt-2 text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[34px]">
                        {domain.title}
                      </h2>
                    </div>
                    <p className="max-w-[52ch] text-[14.5px] leading-relaxed text-ink-soft">
                      {domain.summary}
                    </p>
                  </div>

                  <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {sections.map((section) => (
                      <li key={section.slug} className="flex">
                        <KnowledgeSectionCard section={section} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
