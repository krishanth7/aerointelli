import type { LegalBlock, LegalDocumentMeta, LegalSection } from "@/content/legal-types";

export const shippingMeta: LegalDocumentMeta = {
  company: "Aero Intelli Private Limited",
  effectiveDate: "10 August 2026",
  lastUpdated: "10 August 2026",
  version: "1.0",
  jurisdiction: "India",
  contactEmail: "support@aerointelli.com",
};

export const shippingSummary =
  "Clear information about order processing, shipping locations, delivery timelines, project-based equipment delivery, tracking, and delivery requirements.";

export const shippingIntro: LegalBlock[] = [
  {
    kind: "text",
    value:
      "This Shipping & Delivery Policy outlines how Aero Intelli processes, ships, and delivers products purchased through our website and associated sales channels.",
  },
];

/**
 * Delivery windows are quoted from the approved policy text and must not be
 * altered here. The at-a-glance strip and the timelines read from the same
 * constants so the summary can never drift from the policy body.
 */
export const DELIVERY_WINDOWS = {
  processing: "1–3 business days",
  standard: "2–15 business days depending on category and destination",
  organic: "24 hours to 7 business days depending on location",
  ras: "35–60 days after site readiness approval",
} as const;

export const deliveryMatrix = [
  {
    category: "General Hardware & Agricultural Equipment",
    metro: "2–7 business days",
    tier23: "3–10 business days",
    remote: "5–15 business days",
  },
  {
    category: "Organic Food Products & Consumer Goods",
    metro: "Within 24 to 48 hours",
    tier23: "Within 2 to 3 business days",
    remote: "Within 3 to 7 business days",
  },
];

export const siteReadinessRequirements = [
  "Civil and site preparation work completed.",
  "Adequate water supply available at the installation location.",
  "Required electrical infrastructure installed and operational.",
  "Three-phase power connection available where applicable.",
  "Plumbing work completed.",
  "Pipeline installation completed.",
  "Site access available for transportation and installation activities.",
];

export const rasStages = [
  "Site ready",
  "Verification",
  "Manufacturing",
  "Testing",
  "Logistics",
  "Delivery",
];

export const trackingStages = [
  "Order confirmed",
  "Dispatched",
  "Tracking active",
  "In transit",
  "Delivered",
];

export const confirmationStages = ["Shipment", "Delivery", "Received", "Confirmed"];

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
    id: "overview",
    number: "1",
    title: "Overview",
    tocLabel: "Overview",
    blocks: [
      {
        kind: "text",
        value:
          "Aero Intelli is committed to delivering products in a timely and efficient manner. Delivery timelines may vary depending on product availability, shipping location, logistics partner operations, weather conditions, and other external factors.",
      },
    ],
  },
  {
    id: "processing",
    number: "2",
    title: "Order Processing",
    tocLabel: "Order Processing",
    blocks: [
      {
        kind: "text",
        value:
          "All orders are subject to verification and acceptance. Orders are typically processed within 1–3 business days after successful payment confirmation unless otherwise stated on the product page.",
      },
      {
        kind: "text",
        value:
          "Orders placed on weekends, public holidays, or non-working days may be processed on the next business day.",
      },
    ],
  },
  {
    id: "locations",
    number: "3",
    title: "Shipping Locations",
    tocLabel: "Shipping Locations",
    blocks: [
      {
        kind: "text",
        value:
          "Aero Intelli currently delivers to eligible locations within India. Availability of shipping services may vary based on the delivery address and logistics coverage.",
      },
      {
        kind: "text",
        value:
          "International shipping, if offered in the future, will be governed by separate terms and conditions.",
      },
    ],
  },
  {
    id: "delivery-time",
    number: "4",
    title: "Standard Delivery Timelines",
    tocLabel: "Standard Delivery Timelines",
    blocks: [
      {
        kind: "text",
        value:
          "Aero Intelli offers tailored transit periods based on the category of product purchased. Typical delivery windows are detailed below:",
      },
    ],
  },
  {
    id: "ras-delivery",
    number: "5",
    title: "Recirculating Aquaculture System (RAS) Machinery Delivery",
    tocLabel: "RAS Machinery Delivery",
    blocks: [
      {
        kind: "text",
        value:
          "Orders involving Recirculating Aquaculture System (RAS) machinery, aquaculture equipment, custom-engineered systems, or project-based installations are subject to site readiness requirements.",
      },
      {
        kind: "text",
        value:
          "The estimated delivery timeline for RAS machinery is 35 to 60 days from the date all required site preparations have been completed and verified by Aero Intelli.",
      },
    ],
  },
  {
    id: "charges",
    number: "6",
    title: "Shipping Charges",
    tocLabel: "Shipping Charges",
    blocks: [
      {
        kind: "text",
        value:
          "Shipping charges, if applicable, will be displayed during checkout before order confirmation.",
      },
      {
        kind: "text",
        value:
          "Aero Intelli may offer free shipping on selected products, promotional campaigns, or minimum order values at its sole discretion.",
      },
    ],
  },
  {
    id: "tracking",
    number: "7",
    title: "Order Tracking",
    tocLabel: "Order Tracking",
    blocks: [
      {
        kind: "text",
        value:
          "Where available, customers will receive shipment tracking details through email, SMS, WhatsApp, or other communication channels after dispatch.",
      },
      {
        kind: "text",
        value:
          "Tracking information may take up to 24 hours to become active after shipment creation.",
      },
    ],
  },
  {
    id: "attempts",
    number: "8",
    title: "Delivery Attempts",
    tocLabel: "Delivery Attempts",
    blocks: [
      {
        kind: "text",
        value:
          "Delivery partners may make multiple attempts to deliver an order. If delivery cannot be completed due to an incorrect address, customer unavailability, refusal to accept delivery, or other customer-related reasons, additional shipping charges may apply for re-delivery.",
      },
    ],
  },
  {
    id: "address-accuracy",
    number: "9",
    title: "Address Accuracy",
    tocLabel: "Address Accuracy",
    blocks: [
      {
        kind: "text",
        value:
          "Customers are responsible for providing accurate and complete shipping information. Aero Intelli shall not be responsible for delays, losses, or failed deliveries resulting from incorrect, incomplete, or outdated address information provided by the customer.",
      },
    ],
  },
  {
    id: "delays",
    number: "10",
    title: "Delays Beyond Our Control",
    tocLabel: "Delays Beyond Our Control",
    blocks: [
      {
        kind: "text",
        value:
          "Delivery timelines may be affected by circumstances beyond Aero Intelli's reasonable control, including but not limited to natural disasters, floods, cyclones, government restrictions, public emergencies, transportation disruptions, labor shortages, technical failures, and force majeure events. In such cases, delivery schedules may be extended without liability.",
      },
    ],
  },
  {
    id: "damaged-missing",
    number: "11",
    title: "Damaged or Missing Shipments",
    tocLabel: "Damaged or Missing Shipments",
    blocks: [
      {
        kind: "text",
        value:
          "Customers are advised to inspect packages upon delivery. If a shipment arrives visibly damaged, incomplete, or appears tampered with, customers should notify Aero Intelli within 48 hours of delivery.",
      },
      {
        kind: "text",
        value: "Supporting photographs and order details may be required for investigation.",
      },
    ],
  },
  {
    id: "large-equipment",
    number: "12",
    title: "Large Equipment and Custom Orders",
    tocLabel: "Large Equipment & Custom Orders",
    blocks: [
      {
        kind: "text",
        value:
          "Products including Recirculating Aquaculture Systems (RAS), Water Treatment Systems, Hydroponic Systems, Aeroponic Systems, Industrial Equipment, Custom Manufacturing Orders, and Project-Based Installations may require manufacturing, quality testing, engineering validation, logistics planning, and installation scheduling before dispatch.",
      },
      {
        kind: "text",
        value:
          "Specific delivery timelines for such products will be communicated during the quotation, purchase order, or project agreement process.",
      },
      {
        kind: "text",
        value:
          "For RAS machinery, the standard delivery period is generally 35 to 60 days after site readiness approval by Aero Intelli.",
      },
    ],
  },
  {
    id: "confirmation",
    number: "13",
    title: "Delivery Confirmation",
    tocLabel: "Delivery Confirmation",
    blocks: [
      {
        kind: "text",
        value:
          "An order shall be deemed delivered when received at the shipping address provided by the customer or when confirmed by the designated logistics partner.",
      },
    ],
  },
  {
    id: "updates",
    number: "14",
    title: "Policy Updates",
    tocLabel: "Policy Updates",
    blocks: [
      {
        kind: "text",
        value:
          "Aero Intelli reserves the right to modify, update, or revise this Shipping & Delivery Policy at any time without prior notice. Any changes will become effective upon publication on the website.",
      },
      {
        kind: "list",
        value: [
          `Current policy: Shipping & Delivery Policy`,
          `Version: ${shippingMeta.version}`,
          `Last Updated: ${shippingMeta.lastUpdated}`,
        ],
      },
    ],
  },
  {
    id: "contact",
    number: "15",
    title: "Contact Information",
    tocLabel: "Contact Information",
    blocks: [
      {
        kind: "text",
        value: "For shipping or delivery-related inquiries, please contact us:",
      },
      {
        kind: "list",
        value: ["Aero Intelli", "Email: support@aerointelli.com", "Website: aerointelli.com"],
      },
    ],
  },
];
