import type { Metadata } from "next";
import { AnimatedLegalHeader } from "@/components/legal/AnimatedLegalHeader";
import { AnimatedTOC } from "@/components/legal/AnimatedTOC";
import { CookieInventory } from "@/components/legal/CookieInventory";
import { CookieSummary } from "@/components/legal/CookieSummary";
import { LegalBlocks, LegalSection, padSectionNumber } from "@/components/legal/LegalSection";
import { LegalDarkContact } from "@/components/legal/LegalDarkContact";
import { LegalDocumentMotion } from "@/components/legal/LegalDocumentMotion";
import { LegalNavigation } from "@/components/legal/LegalNavigation";
import { LegalReadingProgress } from "@/components/legal/LegalReadingProgress";
import { MobileTOC } from "@/components/legal/MobileTOC";
import { cookieIntro, cookieMeta, cookieSections, cookieSummary } from "@/content/cookie-policy";

export const metadata: Metadata = {
  // No suffix here: the root layout's title template appends " | Aero Intelli".
  title: "Cookie Policy",
  description:
    "Learn how Aero Intelli uses cookies and similar technologies, the purposes for which they are used, and how visitors can manage their cookie preferences.",
  alternates: { canonical: "/cookie-policy" },
};

const tocItems = cookieSections.map((section) => ({
  id: section.id,
  number: padSectionNumber(section.number),
  label: section.tocLabel,
}));

export default function Page() {
  return (
    <div id="legal-document" className="legal-page overflow-x-clip bg-legal-bg">
      <LegalReadingProgress />
      <LegalDocumentMotion targetId="legal-document" />

      {/* Dark opening panel gives the cookie document its own identity within the legal system. */}
      <div className="bg-legal-dark">
        <div className="mx-auto w-full max-w-[1280px] px-4 pb-16 pt-[112px] min-[360px]:px-5 min-[414px]:px-[22px] md:px-8 md:pb-20 md:pt-[140px] lg:px-10 lg:pt-[170px]">
          <AnimatedLegalHeader
            tone="dark"
            label="Cookie / Privacy"
            title="Cookie Policy"
            company={cookieMeta.company}
            status="No cookies currently in use"
            meta={[
              { label: "Effective Date", value: cookieMeta.effectiveDate },
              { label: "Last Updated", value: cookieMeta.lastUpdated },
              { label: "Version", value: cookieMeta.version },
            ]}
            summary={cookieSummary}
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-4 pb-24 min-[360px]:px-5 min-[414px]:px-[22px] md:px-8 lg:px-10">
        <CookieSummary />

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
              <LegalBlocks blocks={cookieIntro} />

              {cookieSections.map((section) => (
                <LegalSection key={section.id} section={section}>
                  {section.id === "cookie-inventory" ? <CookieInventory /> : null}
                </LegalSection>
              ))}

              <LegalDarkContact
                label="Cookie / Privacy"
                heading="Questions about cookies?"
                body="For questions about Aero Intelli's use of cookies and similar technologies, contact Aero Intelli Private Limited through the channel below."
                email={cookieMeta.contactEmail}
              />

              <aside className="mt-10 rounded-[10px] border border-legal-border border-l-2 border-l-accent bg-legal-surface p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-legal-heading">
                  Legal review notice
                </p>
                <p className="mt-3 text-[14.5px] leading-[1.75] text-legal-secondary">
                  The statements in this policy describe the Aero Intelli website as verified on the
                  effective date above: no cookies, no browser storage, no analytics, advertising or
                  third-party embeds. This policy must be revised before any such technology is added
                  to the website.
                </p>
                <p className="mt-3 text-[14.5px] leading-[1.75] text-legal-secondary">
                  The final wording should be reviewed by qualified Indian legal counsel against the
                  Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection
                  Rules, 2025, taking into account the commencement dates applicable to each
                  provision.
                </p>
              </aside>

              <LegalNavigation currentHref="/cookie-policy" />
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
