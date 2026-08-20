import type { Metadata } from "next";
import { AnimatedLegalHeader } from "@/components/legal/AnimatedLegalHeader";
import { AnimatedTOC } from "@/components/legal/AnimatedTOC";
import { LegalBlocks, LegalSection, padSectionNumber } from "@/components/legal/LegalSection";
import { LegalContactBlock } from "@/components/legal/LegalContactBlock";
import { LegalNavigation } from "@/components/legal/LegalNavigation";
import { LegalReadingProgress } from "@/components/legal/LegalReadingProgress";
import { MobileTOC } from "@/components/legal/MobileTOC";
import { LegalDocumentMotion } from "@/components/legal/LegalDocumentMotion";
import {
  privacyIntro,
  privacyMeta,
  privacySections,
  privacySummary,
} from "@/content/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Aero Intelli Private Limited explaining how personal information is collected, used, protected and managed.",
  alternates: { canonical: "/privacy-policy" },
};

const tocItems = privacySections.map((section) => ({
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
          label="Legal / Privacy"
          title="Privacy Policy"
          company={privacyMeta.company}
          status={`Version ${privacyMeta.version} · Current policy`}
          meta={[
            { label: "Effective Date", value: privacyMeta.effectiveDate },
            { label: "Last Updated", value: privacyMeta.lastUpdated },
            { label: "Version", value: privacyMeta.version },
          ]}
          summary={privacySummary}
        />

        <div className="mt-12 flex flex-col gap-8 border-t border-legal-border pt-10 lg:mt-16 lg:pt-14 xl:flex-row xl:gap-[80px]">
          <div className="xl:w-[260px] xl:shrink-0">
            <AnimatedTOC items={tocItems} />
            <MobileTOC items={tocItems} />
          </div>

          <main className="min-w-0 xl:border-l xl:border-legal-border xl:pl-[80px]">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-legal-muted">
              Policy content
            </p>

            <article className="legal-article mt-6 min-w-0">
              <LegalBlocks blocks={privacyIntro} />

              {privacySections.map((section) => (
                <LegalSection key={section.id} section={section} />
              ))}

              <LegalContactBlock email={privacyMeta.contactEmail} />

              <LegalNavigation currentHref="/privacy-policy" />
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
