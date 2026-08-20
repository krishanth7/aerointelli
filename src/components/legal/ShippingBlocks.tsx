import { projectCategories, siteReadinessRequirements } from "@/content/shipping-policy";

/**
 * Four-item summary strip.
 *
 * Previously quoted `DELIVERY_WINDOWS` — "1–3 business days", "within 24 to 48
 * hours" and so on. Those constants described a dispatch operation that does
 * not exist, so both they and the numbers here are gone. What remains is the
 * shape of the arrangement, which is true.
 */
export function ShippingGlance() {
  const items = [
    { label: "Online purchase", value: "Not currently available. There is no cart or checkout." },
    { label: "How supply is arranged", value: "By quotation, purchase order or project agreement." },
    { label: "Delivery schedule", value: "Agreed per project, in writing, before an order is accepted." },
    { label: "Coverage", value: "Sites within India, confirmed at quotation stage." },
  ];

  return (
    <section aria-labelledby="shipping-glance" className="mt-12 lg:mt-16">
      <h2
        id="shipping-glance"
        className="text-[11px] font-medium uppercase tracking-[0.16em] text-legal-muted"
      >
        Shipping &amp; delivery at a glance
      </h2>

      <ul className="mt-5 grid gap-px overflow-hidden rounded-[10px] border border-legal-border bg-legal-border sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <li key={item.label} className="bg-legal-bg p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-legal-heading">
              {item.label}
            </p>
            <p className="mt-3 text-[14.5px] leading-[1.6] text-legal-secondary">{item.value}</p>
          </li>
        ))}
      </ul>

      <div className="mt-5 rounded-[10px] border border-legal-border border-l-2 border-l-accent bg-legal-surface p-5 md:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-legal-heading">
          Project-based delivery
        </p>
        <p className="mt-3 text-[15.5px] leading-[1.8] text-legal-ink md:text-[16.5px]">
          Engineered systems are subject to site-readiness requirements. The agreed delivery period
          begins only after Aero Intelli confirms that the required site preparations have been
          completed — not from the date an enquiry or order is placed.
        </p>
      </div>
    </section>
  );
}

/** Site readiness checklist. Restrained check marks, not oversized ticks. */
export function SiteReadinessChecklist() {
  return (
    <div className="mt-8 rounded-[10px] border border-legal-border p-5 md:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-legal-heading">
        Site readiness requirements
      </p>
      <ul className="mt-4 space-y-3">
        {siteReadinessRequirements.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-[1.7] text-legal-ink">
            <svg
              aria-hidden="true"
              viewBox="0 0 14 14"
              className="mt-[5px] h-[13px] w-[13px] shrink-0 text-legal-secondary"
            >
              <path
                d="M2.5 7.4 5.6 10.4 11.5 3.8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="min-w-0">{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-[15px] leading-[1.8] text-legal-ink">
        The manufacturing, testing, logistics and delivery period agreed in the project documents
        commences only after Aero Intelli confirms that all site readiness requirements have been
        fulfilled.
      </p>
      <p className="mt-4 text-[15px] leading-[1.8] text-legal-ink">
        Schedules depend on project scope, equipment specification, logistics conditions, regulatory
        requirements and events outside reasonable control.
      </p>
    </div>
  );
}

/**
 * Guidance for a damaged consignment.
 *
 * Previously displayed "48 hours" at display size. No carrier contract exists
 * that makes forty-eight hours the operative window, and a large number reads
 * as a deadline after which a buyer might believe their claim is dead. Replaced
 * with the action that actually protects the claim.
 */
export function DamagedShipmentNotice() {
  return (
    <div className="mt-6 rounded-[10px] border border-legal-border border-l-2 border-l-accent bg-legal-surface p-5 md:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-legal-heading">
        Received a damaged or tampered consignment?
      </p>
      <p className="mt-4 text-[15.5px] leading-[1.8] text-legal-ink md:text-[16.5px]">
        Record the damage on the carrier&rsquo;s delivery documentation before you sign, photograph
        the packaging and the goods as received, and tell us promptly. A carrier&rsquo;s own
        liability window is short, and a late claim can be refused on that basis alone.
      </p>
      <p className="mt-3 text-[14.5px] leading-[1.7] text-legal-secondary">
        Reporting late does not remove your statutory rights in respect of goods that do not conform
        to the contract.
      </p>
    </div>
  );
}

/** Text-first category grid for project-based products. */
export function ProjectCategoryGrid() {
  return (
    <ul className="mt-6 grid gap-px overflow-hidden rounded-[10px] border border-legal-border bg-legal-border sm:grid-cols-2">
      {projectCategories.map((category) => (
        <li key={category} className="bg-legal-bg p-4 text-[14.5px] leading-[1.5] text-legal-ink">
          {category}
        </li>
      ))}
    </ul>
  );
}
