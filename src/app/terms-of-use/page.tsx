import type { Metadata } from "next";
import { AnimatedLegalHeader } from "@/components/legal/AnimatedLegalHeader";
import { AnimatedTOC } from "@/components/legal/AnimatedTOC";
import { LegalBlocks, LegalSection, padSectionNumber } from "@/components/legal/LegalSection";
import { LegalDarkContact } from "@/components/legal/LegalDarkContact";
import { LegalDocumentMotion } from "@/components/legal/LegalDocumentMotion";
import { LegalNavigation } from "@/components/legal/LegalNavigation";
import { LegalReadingProgress } from "@/components/legal/LegalReadingProgress";
import { MobileTOC } from "@/components/legal/MobileTOC";
import { termsIntro, termsMeta, termsSections, termsSummary } from "@/content/terms-of-use";

export const metadata: Metadata = {
  // No suffix here: the root layout's title template appends " | Aero Intelli".
  title: "Terms of Use",
  description:
    "Terms of Use governing access to and use of the Aero Intelli website, services and applicable digital platforms.",
  alternates: { canonical: "/terms-of-use" },
};

const tocItems = termsSections.map((section) => ({
  id: section.id,
  number: padSectionNumber(section.number),
  label: section.tocLabel,
}));

export default function Page() {
  return (
    <div id="legal-document" className="legal-page overflow-x-clip bg-legal-bg">
      <LegalReadingProgress />
      <LegalDocumentMotion targetId="legal-document" />

      <div className="mx-auto w-full max-w-[1280px] px-4 pb-24 pt-[112px] min-[360px]:px-5 min-[414px]:px-[22px] md:px-8 md:pt-[140px] lg:px-10 lg:pt-[170px]">
        <AnimatedLegalHeader
          label="Legal / Terms"
          title="Terms of Use"
          company={termsMeta.company}
          status={`Version ${termsMeta.version} · Current terms`}
          meta={[
            { label: "Effective Date", value: termsMeta.effectiveDate },
            { label: "Last Updated", value: termsMeta.lastUpdated },
            { label: "Version", value: termsMeta.version },
          ]}
          summary={termsSummary}
        />

        <div className="mt-12 flex flex-col gap-8 border-t border-legal-border pt-10 lg:mt-16 lg:pt-14 xl:flex-row xl:gap-[80px]">
          <div className="xl:w-[260px] xl:shrink-0">
            <AnimatedTOC items={tocItems} />
            <MobileTOC items={tocItems} />
          </div>

          <main className="min-w-0 xl:border-l xl:border-legal-border xl:pl-[80px]">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-legal-muted">
              Document content
            </p>

            <article className="legal-article mt-6 min-w-0">
              <LegalBlocks blocks={termsIntro} />

              {termsSections.map((section) => (
                <LegalSection key={section.id} section={section} />
              ))}

              <LegalDarkContact
                label="Questions about these terms?"
                heading="Contact Aero Intelli Private Limited."
                body="For questions regarding these Terms of Use, please contact Aero Intelli Private Limited through the official contact channel provided on this website."
                email={termsMeta.contactEmail}
              />

              <LegalNavigation currentHref="/terms-of-use" />
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
