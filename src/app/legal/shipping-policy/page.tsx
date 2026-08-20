import type { Metadata } from "next";
import { AnimatedLegalHeader } from "@/components/legal/AnimatedLegalHeader";
import { AnimatedTOC } from "@/components/legal/AnimatedTOC";
import { LegalBlocks, LegalSection, padSectionNumber } from "@/components/legal/LegalSection";
import { LegalDarkContact } from "@/components/legal/LegalDarkContact";
import { LegalDocumentMotion } from "@/components/legal/LegalDocumentMotion";
import { LegalNavigation } from "@/components/legal/LegalNavigation";
import { LegalReadingProgress } from "@/components/legal/LegalReadingProgress";
import { MobileTOC } from "@/components/legal/MobileTOC";
import { ProcessTimeline } from "@/components/legal/ProcessTimeline";
import {
  DamagedShipmentNotice,
  ProjectCategoryGrid,
  ShippingGlance,
  SiteReadinessChecklist,
} from "@/components/legal/ShippingBlocks";
import {
  confirmationStages,
  rasStages,
  shippingIntro,
  shippingMeta,
  shippingSections,
  shippingSummary,
} from "@/content/shipping-policy";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description:
    "How Aero Intelli handles dispatch, delivery, site readiness and acceptance for engineered systems supplied under a quotation or project agreement.",
  alternates: { canonical: "/legal/shipping-policy" },
};

const tocItems = shippingSections.map((section) => ({
  id: section.id,
  number: padSectionNumber(section.number),
  label: section.tocLabel,
}));

/** Per-section supporting visuals, keyed by section id. */
function SectionExtras({ id }: { id: string }) {
  if (id === "delivery-time") {
    return (
      <ProcessTimeline
        label="Quotation to delivery"
        stages={["Enquiry", "Quotation", "Order accepted", "Manufacture", "Dispatch", "Delivery"]}
      />
    );
  }

  if (id === "ras-delivery") {
    return (
      <>
        <ProcessTimeline label="Site readiness to delivery" stages={rasStages} />
        <SiteReadinessChecklist />
      </>
    );
  }

  if (id === "damaged-missing") {
    return <DamagedShipmentNotice />;
  }

  if (id === "large-equipment") {
    return <ProjectCategoryGrid />;
  }

  if (id === "confirmation") {
    return <ProcessTimeline label="Completion" stages={confirmationStages} />;
  }

  return null;
}

export default function Page() {
  return (
    <div id="legal-document" className="legal-page overflow-x-clip bg-legal-bg">
      <LegalReadingProgress />
      <LegalDocumentMotion targetId="legal-document" />

      <div className="bg-legal-dark">
        <div className="mx-auto w-full max-w-[1280px] px-4 pb-16 pt-[112px] min-[360px]:px-5 min-[414px]:px-[22px] md:px-8 md:pb-20 md:pt-[140px] lg:px-10 lg:pt-[170px]">
          <AnimatedLegalHeader
            tone="dark"
            label="Legal / Logistics"
            title="Shipping & Delivery Policy"
            company={shippingMeta.company}
            status="Delivery information"
            meta={[
              { label: "Jurisdiction", value: shippingMeta.jurisdiction },
              { label: "Last Updated", value: shippingMeta.lastUpdated },
              { label: "Version", value: shippingMeta.version },
            ]}
            summary={shippingSummary}
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-4 pb-24 min-[360px]:px-5 min-[414px]:px-[22px] md:px-8 lg:px-10">
        <ShippingGlance />

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
              <LegalBlocks blocks={shippingIntro} />

              {shippingSections.map((section) => (
                <LegalSection key={section.id} section={section}>
                  <SectionExtras id={section.id} />
                </LegalSection>
              ))}

              <LegalDarkContact
                label="Shipping / Delivery"
                heading="Need help with a shipment?"
                body="For shipping or delivery-related inquiries, please contact Aero Intelli."
                email={shippingMeta.contactEmail}
              />

              <LegalNavigation currentHref="/legal/shipping-policy" />
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
