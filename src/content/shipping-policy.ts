import { contactConfig } from "@/config/contact";
import { grievanceContact, legalContactLines, legalEntity } from "@/config/legalEntity";

import type { LegalBlock, LegalDocumentMeta, LegalSection } from "@/content/legal-types";

/**
 * Shipping & Delivery Policy.
 *
 * Rewritten from a template that described a shop this company does not
 * operate. The previous version promised order processing "within 1–3 business
 * days", organic-food delivery "within 24 to 48 hours" to metro cities, a
 * 35–60 day RAS window, SMS and WhatsApp tracking, and shipping charges shown
 * "during checkout". There is no checkout, no logistics partner, no dispatch
 * operation and no product catalogue. Every one of those was a representation
 * to a consumer about a service that does not exist, which is precisely the
 * kind of statement the Consumer Protection Act, 2019 treats as misleading.
 *
 * The policy is now forward-looking: it states the framework that will govern
 * delivery, and says plainly that online purchasing is not open. Specific
 * timelines belong in a quotation or a purchase order for a specific project,
 * where they can actually be honoured — not on a public page as a blanket
 * promise.
 *
 * The contact email was `support@aerointelli.com`, an alias that appears
 * nowhere else in the codebase and is not a verified inbox. It now reads from
 * `contactConfig` like every other page.
 */

export const shippingMeta: LegalDocumentMeta = {
  company: legalEntity.legalName,
  effectiveDate: "20 August 2026",
  lastUpdated: "20 August 2026",
  version: "2.0",
  jurisdiction: legalEntity.country,
  contactEmail: contactConfig.generalEmail,
};

export const shippingSummary =
  "How Aero Intelli handles dispatch, delivery, site readiness and acceptance for engineered systems supplied under a quotation or project agreement.";

export const shippingIntro: LegalBlock[] = [
  {
    kind: "text",
    value:
      "This Shipping & Delivery Policy sets out the basis on which Aero Intelli Private Limited dispatches and delivers the products and engineered systems it supplies.",
  },
  {
    kind: "callout",
    value:
      "This website does not currently sell products online. It has no catalogue, no cart, no checkout and no payment gateway. Supply is arranged through a quotation, purchase order or project agreement, and the delivery terms for a given supply are the ones recorded in those documents.",
  },
  {
    kind: "text",
    value:
      "This Policy is therefore a statement of framework rather than a schedule of transit times. It is written this way deliberately: a published delivery window that no operating dispatch process stands behind is a promise a buyer could rely on and we could not keep.",
  },
];

/**
 * The physical preconditions for delivering an engineered system to a site.
 * These are genuine engineering requirements, not commitments about timing, so
 * they survive the rewrite unchanged.
 */
export const siteReadinessRequirements = [
  "Civil and site preparation work completed.",
  "Adequate water supply available at the installation location.",
  "Required electrical infrastructure installed and operational.",
  "Three-phase power connection available where applicable.",
  "Plumbing work completed.",
  "Pipeline installation completed.",
  "Site access available for transportation and installation activities.",
];

/** Sequence of stages, without attached durations. */
export const rasStages = [
  "Site ready",
  "Verification",
  "Manufacturing",
  "Testing",
  "Logistics",
  "Delivery",
];

export const confirmationStages = ["Dispatch", "Delivery", "Inspection", "Acceptance"];

export const projectCategories = [
  "Recirculating Aquaculture Systems (RAS)",
  "Water Treatment Systems",
  "Hydroponic Systems",
  "Aeroponic Systems",
  "Industrial Equipment",
  "Custom Manufacturing Orders",
  "Project-Based Installations",
];

export const shippingSections: LegalSection[] = [
  {
    id: "scope",
    number: "1",
    title: "Scope and Status",
    tocLabel: "Scope and Status",
    blocks: [
      {
        kind: "clause",
        number: "1.1",
        value:
          "This Policy applies to the dispatch and delivery of products and engineered systems supplied by Aero Intelli Private Limited (the \"Company\") in India.",
      },
      {
        kind: "clause",
        number: "1.2",
        value:
          "Online purchasing is not presently available. No order can be placed, and no payment can be made, through this website. Where you wish to procure a system, please contact the Company and a quotation will be issued for the specific scope.",
      },
      {
        kind: "clause",
        number: "1.3",
        value:
          "Where a quotation, purchase order or project agreement (together, the \"Project Documents\") records delivery terms for a particular supply, those terms govern that supply. This Policy applies to the extent the Project Documents are silent.",
      },
      {
        kind: "clause",
        number: "1.4",
        value:
          "This Policy is published as part of the Company's disclosures under the Consumer Protection (E-Commerce) Rules, 2020, and should be read together with the Terms of Use.",
      },
      {
        kind: "linkList",
        value: [{ label: "Terms of Use", href: "/legal/terms-of-use" }],
      },
    ],
  },
  {
    id: "delivery-locations",
    number: "2",
    title: "Delivery Locations",
    tocLabel: "Delivery Locations",
    blocks: [
      {
        kind: "clause",
        number: "2.1",
        value:
          "The Company supplies to locations within India. Whether a particular site can be served depends on access, transport route and the nature of the equipment, and is confirmed at quotation stage rather than assumed.",
      },
      {
        kind: "clause",
        number: "2.2",
        value:
          "Supply outside India is not offered. If it is offered in future, it will be governed by separate terms addressing export documentation, customs clearance and incoterms, and this Policy will be updated before any such supply is accepted.",
      },
    ],
  },
  {
    id: "delivery-time",
    number: "3",
    title: "Delivery Schedules",
    tocLabel: "Delivery Schedules",
    blocks: [
      {
        kind: "clause",
        number: "3.1",
        value:
          "The Company does not publish standard transit windows. The equipment it supplies is engineered to a site, and a period that is realistic for one configuration is misleading for another.",
      },
      {
        kind: "clause",
        number: "3.2",
        value:
          "The delivery schedule for a supply is stated in the applicable Project Documents, agreed before the order is accepted, and is calculated from a defined starting point recorded in those documents rather than from the date of enquiry.",
      },
      {
        kind: "clause",
        number: "3.3",
        value:
          "Where a schedule is agreed, the Company will notify you of any material change to it, together with the revised dates and the reason, as soon as the change is known.",
      },
    ],
  },
  {
    id: "ras-delivery",
    number: "4",
    title: "Site Readiness for Engineered Systems",
    tocLabel: "Site Readiness",
    blocks: [
      {
        kind: "clause",
        number: "4.1",
        value:
          "Recirculating Aquaculture Systems, water treatment systems, hydroponic and aeroponic systems and comparable engineered installations cannot be delivered to a site that is not physically ready to receive them.",
      },
      {
        kind: "clause",
        number: "4.2",
        value:
          "Unless the Project Documents allocate the responsibility to the Company, site readiness is the customer's responsibility, and the agreed delivery period begins only once the Company has verified that the requirements below have been met.",
      },
      {
        kind: "clause",
        number: "4.3",
        value:
          "Delay in achieving site readiness moves the delivery schedule by a corresponding period. The Company will confirm the revised dates in writing.",
      },
    ],
  },
  {
    id: "charges",
    number: "5",
    title: "Freight, Handling and Taxes",
    tocLabel: "Freight and Taxes",
    blocks: [
      {
        kind: "clause",
        number: "5.1",
        value:
          "Freight, handling, insurance, unloading and any special lifting or access arrangements are quoted as part of the applicable Project Documents. There is no checkout at which charges are displayed, because no online purchase is possible.",
      },
      {
        kind: "clause",
        number: "5.2",
        value:
          "Prices are exclusive of Goods and Services Tax and other statutory levies unless the quotation states otherwise. Applicable taxes are charged at the rate in force on the date of invoice.",
      },
      {
        kind: "clause",
        number: "5.3",
        value:
          "Where a site requires access arrangements that were not disclosed at quotation stage and that materially change the cost of delivery, the Company will inform you before incurring the cost and will not charge it without your agreement.",
      },
    ],
  },
  {
    id: "tracking",
    number: "6",
    title: "Dispatch Notification",
    tocLabel: "Dispatch Notification",
    blocks: [
      {
        kind: "clause",
        number: "6.1",
        value:
          "The Company does not operate an automated tracking portal and does not send SMS or messaging-application notifications.",
      },
      {
        kind: "clause",
        number: "6.2",
        value: `Dispatch is confirmed by email to the address recorded in the Project Documents, together with the carrier's reference where one exists. Enquiries about a consignment in transit may be sent to ${contactConfig.generalEmail}.`,
      },
    ],
  },
  {
    id: "attempts",
    number: "7",
    title: "Delivery, Access and Address Accuracy",
    tocLabel: "Delivery and Access",
    blocks: [
      {
        kind: "clause",
        number: "7.1",
        value:
          "You are responsible for providing an accurate delivery address, for ensuring that a person authorised to take delivery is present at the agreed time, and for ensuring that the site is accessible to the transport required.",
      },
      {
        kind: "clause",
        number: "7.2",
        value:
          "Where delivery cannot be completed for a reason attributable to you, the Company will contact you to arrange a further attempt. Demurrage, storage or re-delivery costs actually incurred may be charged, and will be evidenced before they are invoiced.",
      },
    ],
  },
  {
    id: "delays",
    number: "8",
    title: "Delays Beyond Reasonable Control",
    tocLabel: "Delays",
    blocks: [
      {
        kind: "clause",
        number: "8.1",
        value:
          "Delivery may be affected by events outside the Company's reasonable control, including natural events, flooding, cyclone, government restriction, public emergency, transport disruption, supplier failure and industrial action.",
      },
      {
        kind: "clause",
        number: "8.2",
        value:
          "In such circumstances the schedule is extended by a period corresponding to the disruption. This clause does not excuse the Company from telling you what has happened, nor does it limit any right you have under the Consumer Protection Act, 2019.",
      },
    ],
  },
  {
    id: "damaged-missing",
    number: "9",
    title: "Damaged, Short or Tampered Consignments",
    tocLabel: "Damaged Consignments",
    blocks: [
      {
        kind: "clause",
        number: "9.1",
        value:
          "Please inspect a consignment on delivery. Where packaging is visibly damaged, a consignment is short, or a seal appears to have been broken, record it on the carrier's delivery documentation before signing and notify the Company promptly.",
      },
      {
        kind: "clause",
        number: "9.2",
        value:
          "Prompt notice matters because a carrier's own liability window is short, and a claim made late may be refused by the carrier regardless of its merits. Photographs of the packaging and of the goods as received assist the investigation.",
      },
      {
        kind: "clause",
        number: "9.3",
        value:
          "Damage that is not apparent on inspection should be reported as soon as it is discovered. Nothing in this section limits your statutory rights in respect of goods that do not conform to the contract.",
      },
    ],
  },
  {
    id: "large-equipment",
    number: "10",
    title: "Engineered and Custom Supply",
    tocLabel: "Engineered Supply",
    blocks: [
      {
        kind: "clause",
        number: "10.1",
        value:
          "The following categories are manufactured, tested and scheduled against a specific project rather than held as stock, and are supplied only under Project Documents:",
      },
      {
        kind: "clause",
        number: "10.2",
        value:
          "Because each is built to a specification, these categories are not returnable as a change of mind once manufacture has begun. The cancellation and refund position for a given supply is set out in Section 12 of the Terms of Use and in the applicable Project Documents.",
      },
    ],
  },
  {
    id: "confirmation",
    number: "11",
    title: "Delivery Confirmation and Acceptance",
    tocLabel: "Delivery Confirmation",
    blocks: [
      {
        kind: "clause",
        number: "11.1",
        value:
          "Delivery is complete when the goods are received at the agreed address and the delivery documentation is signed, or when the carrier records delivery in accordance with the Project Documents.",
      },
      {
        kind: "clause",
        number: "11.2",
        value:
          "Delivery is distinct from acceptance. Where the Project Documents provide for commissioning or an acceptance test, acceptance occurs on completion of that test, and signing for a consignment is not an acknowledgement that the system performs to specification.",
      },
    ],
  },
  {
    id: "grievance",
    number: "12",
    title: "Grievance Redressal",
    tocLabel: "Grievance Redressal",
    blocks: [
      {
        kind: "clause",
        number: "12.1",
        value:
          "A complaint concerning dispatch or delivery may be sent to the Grievance Officer designated under the Consumer Protection (E-Commerce) Rules, 2020.",
      },
      {
        kind: "list",
        value: [`Role: ${grievanceContact.role}`, `Email: ${grievanceContact.email}`],
      },
      {
        kind: "clause",
        number: "12.2",
        value: `The Company will acknowledge a complaint within ${grievanceContact.acknowledgementWindow} and will endeavour to resolve it within ${grievanceContact.redressalWindow} of receipt.`,
      },
      {
        kind: "clause",
        number: "12.3",
        value:
          "The Officer is presently identified by role and monitored inbox rather than by personal name. The Company states this openly and will publish the name and designation of the individual holding the role once appointed.",
      },
    ],
  },
  {
    id: "updates",
    number: "13",
    title: "Changes to this Policy",
    tocLabel: "Changes",
    blocks: [
      {
        kind: "clause",
        number: "13.1",
        value:
          "This Policy will be revised when the Company's delivery arrangements change, and in particular before online purchasing is enabled. The version and date below identify the text currently in force.",
      },
      {
        kind: "clause",
        number: "13.2",
        value:
          "A supply already accepted is governed by the version of this Policy in force when it was accepted, together with the applicable Project Documents.",
      },
      {
        kind: "list",
        value: [
          "Current policy: Shipping & Delivery Policy",
          `Version: ${shippingMeta.version}`,
          `Effective Date: ${shippingMeta.effectiveDate}`,
          `Last Updated: ${shippingMeta.lastUpdated}`,
        ],
      },
    ],
  },
  {
    id: "contact",
    number: "14",
    title: "Contact Information",
    tocLabel: "Contact Information",
    blocks: [
      {
        kind: "text",
        value: "For questions about dispatch or delivery, please contact:",
      },
      {
        kind: "list",
        value: legalContactLines("Shipping and Delivery"),
      },
    ],
  },
];
