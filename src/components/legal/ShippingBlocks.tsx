import {
  DELIVERY_WINDOWS,
  deliveryMatrix,
  projectCategories,
  siteReadinessRequirements,
} from "@/content/shipping-policy";

/** Four-item summary strip. Values are read from the policy constants. */
export function ShippingGlance() {
  const items = [
    { label: "Order processing", value: DELIVERY_WINDOWS.processing },
    { label: "Standard products", value: DELIVERY_WINDOWS.standard },
    { label: "Organic products", value: DELIVERY_WINDOWS.organic },
    { label: "RAS machinery", value: DELIVERY_WINDOWS.ras },
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
          RAS machinery and other engineered systems are subject to site-readiness requirements. The
          applicable 35–60 day period begins only after Aero Intelli confirms that required site
          preparations have been completed.
        </p>
      </div>
    </section>
  );
}

/** Delivery matrix: table on desktop, stacked blocks on mobile. */
export function DeliveryMatrix() {
  return (
    <div className="mt-6">
      <table className="hidden w-full border-collapse text-left md:table">
        <thead>
          <tr className="border-b border-legal-border">
            {["Product category", "Metro cities", "Tier 2 & Tier 3", "Remote locations"].map(
              (column) => (
                <th
                  key={column}
                  scope="col"
                  className="py-3 pr-4 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-legal-muted"
                >
                  {column}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {deliveryMatrix.map((row) => (
            <tr key={row.category} className="border-b border-legal-border">
              <th
                scope="row"
                className="py-4 pr-4 text-left align-top text-[14.5px] font-medium text-legal-heading"
              >
                {row.category}
              </th>
              <td className="py-4 pr-4 align-top text-[14.5px] text-legal-secondary">{row.metro}</td>
              <td className="py-4 pr-4 align-top text-[14.5px] text-legal-secondary">
                {row.tier23}
              </td>
              <td className="py-4 align-top text-[14.5px] text-legal-secondary">{row.remote}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="space-y-4 md:hidden">
        {deliveryMatrix.map((row) => (
          <li key={row.category} className="rounded-[10px] border border-legal-border p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-legal-heading">
              {row.category}
            </p>
            <dl className="mt-3 space-y-2 text-[14px]">
              {[
                ["Metro", row.metro],
                ["Tier 2 & 3", row.tier23],
                ["Remote", row.remote],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <dt className="w-[86px] shrink-0 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-legal-muted">
                    {label}
                  </dt>
                  <dd className="min-w-0 leading-[1.6] text-legal-secondary">{value}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-[15.5px] leading-[1.8] text-legal-ink md:text-[16.5px]">
        Actual delivery periods may vary based on product availability, seasonal volume, logistics
        partners, and localized transit conditions.
      </p>
    </div>
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
        The 35 to 60 day manufacturing, testing, logistics, and delivery period shall commence only
        after Aero Intelli confirms that all site readiness requirements have been fulfilled.
      </p>
      <p className="mt-4 text-[15px] leading-[1.8] text-legal-ink">
        Delivery timelines may vary depending on project scope, equipment specifications, logistics
        conditions, regulatory requirements, and force majeure events.
      </p>
    </div>
  );
}

/** Emphasis for the 48-hour notification window. Informational, not a countdown. */
export function DamagedShipmentNotice() {
  return (
    <div className="mt-6 rounded-[10px] border border-legal-border border-l-2 border-l-accent bg-legal-surface p-5 md:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-legal-heading">
        Received a damaged or tampered shipment?
      </p>
      <p className="mt-4 text-[30px] font-medium leading-none tracking-[-0.02em] text-legal-heading md:text-[36px]">
        48 hours
      </p>
      <p className="mt-3 text-[14.5px] leading-[1.7] text-legal-secondary">
        Recommended notification period for visibly damaged, incomplete, or tampered shipments.
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
