/**
 * Single source of truth for everything the contact page renders.
 *
 * RULE: a value here is published to the public internet. Never invent a phone
 * number, a street address, a business email alias, map coordinates or a social
 * profile. Anything not verified stays `null`, and the component that would
 * render it is hidden rather than showing placeholder text.
 */

export type ContactConfig = {
  /** Verified, monitored inbox. */
  generalEmail: string;
  businessEmail: string | null;
  projectsEmail: string | null;
  partnershipsEmail: string | null;
  supplierEmail: string | null;
  careersEmail: string | null;
  mediaEmail: string | null;
  phone: string | null;
  /** Full postal address. Null until a public address is approved. */
  officeAddress: string | null;
  country: string;
  mapCoordinates: { lat: number; lng: number } | null;
  socialLinks: { label: string; href: string }[];
};

export const contactConfig: ContactConfig = {
  generalEmail: "contact@aerointelli.com",
  businessEmail: null,
  projectsEmail: null,
  partnershipsEmail: null,
  supplierEmail: null,
  careersEmail: null,
  mediaEmail: null,
  phone: null,
  officeAddress: null,
  country: "India",
  mapCoordinates: null,
  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com/aerointelli" },
    { label: "YouTube", href: "https://www.youtube.com/@aerointelli" },
    { label: "X", href: "https://x.com/aerointelli" },
  ],
};

/** Query-param values accepted by `/contact?type=…`. */
export type EnquiryTypeId =
  | "ras"
  | "hydroponics"
  | "aeroponics"
  | "products"
  | "partnership"
  | "supplier"
  | "corporate"
  | "media"
  | "careers"
  | "general";

export type EnquiryField = {
  name: string;
  label: string;
  type: "text" | "number" | "textarea" | "select";
  options?: string[];
  required?: boolean;
  help?: string;
};

export type EnquiryType = {
  id: EnquiryTypeId;
  label: string;
  /** Shown on the category card. */
  summary: string;
  /** Shown as the card's supporting line, kept factual. */
  scope: string;
  /** Card is surfaced in the eight-item selection grid. */
  featured: boolean;
  /** Step 3 fields, specific to the enquiry. */
  fields: EnquiryField[];
};

const SCALE = ["Concept / exploring", "Pilot scale", "Commercial scale", "Expansion of existing site"];
const TIMELINE = ["Immediate", "Within 3 months", "3–6 months", "6–12 months", "Not decided"];

export const enquiryTypes: EnquiryType[] = [
  {
    id: "ras",
    label: "RAS & Aquaculture",
    summary: "Recirculating aquaculture systems, water treatment and fish production.",
    scope: "System design, equipment supply, installation and technical support.",
    featured: true,
    fields: [
      { name: "species", label: "Species of interest", type: "text" },
      { name: "targetCapacity", label: "Target production capacity (tonnes/year)", type: "number" },
      { name: "waterSource", label: "Water source", type: "select", options: ["Borewell", "Municipal", "Surface water", "Not identified"] },
      { name: "landArea", label: "Available land or shed area (sq ft)", type: "number" },
      { name: "projectScale", label: "Project scale", type: "select", options: SCALE },
      { name: "timeline", label: "Expected timeline", type: "select", options: TIMELINE },
    ],
  },
  {
    id: "hydroponics",
    label: "Hydroponics",
    summary: "NFT hydroponic systems for high-density leafy and herb production.",
    scope: "Layout planning, nutrient dosing, structures and controls.",
    featured: true,
    fields: [
      { name: "crops", label: "Crops of interest", type: "text" },
      { name: "growArea", label: "Growing area (sq ft)", type: "number" },
      { name: "structure", label: "Structure type", type: "select", options: ["Polyhouse", "Net house", "Indoor / warehouse", "Open field", "Not decided"] },
      { name: "projectScale", label: "Project scale", type: "select", options: SCALE },
      { name: "timeline", label: "Expected timeline", type: "select", options: TIMELINE },
    ],
  },
  {
    id: "aeroponics",
    label: "Aeroponics",
    summary: "Misted root-zone cultivation with precision dosing and control.",
    scope: "System configuration, environmental control and monitoring.",
    featured: true,
    fields: [
      { name: "crops", label: "Crops of interest", type: "text" },
      { name: "growArea", label: "Growing area (sq ft)", type: "number" },
      { name: "environment", label: "Environment control available", type: "select", options: ["Fully controlled", "Partially controlled", "None", "Not decided"] },
      { name: "projectScale", label: "Project scale", type: "select", options: SCALE },
      { name: "timeline", label: "Expected timeline", type: "select", options: TIMELINE },
    ],
  },
  {
    id: "products",
    label: "Products & Orders",
    summary: "Equipment, components, consumables and organic product orders.",
    scope: "Availability, pricing, order status, delivery and returns.",
    featured: true,
    fields: [
      { name: "product", label: "Product or category", type: "text" },
      { name: "quantity", label: "Quantity required", type: "text" },
      { name: "orderReference", label: "Existing order reference (if any)", type: "text" },
      { name: "deliveryLocation", label: "Delivery city / district", type: "text" },
    ],
  },
  {
    id: "partnership",
    label: "Partnerships",
    summary: "Distribution, integration, research and commercial collaboration.",
    scope: "Proposals are reviewed by the relevant internal team.",
    featured: true,
    fields: [
      { name: "organisation", label: "Organisation", type: "text" },
      { name: "partnershipType", label: "Type of partnership", type: "select", options: ["Distribution", "Technology integration", "Research", "Channel / reseller", "Other"] },
      { name: "regions", label: "Regions covered", type: "text" },
    ],
  },
  {
    id: "supplier",
    label: "Suppliers & Vendors",
    summary: "Component, material, fabrication and service vendor registration.",
    scope: "Share your capability profile for evaluation.",
    featured: true,
    fields: [
      { name: "organisation", label: "Organisation", type: "text" },
      { name: "supplyCategory", label: "Supply category", type: "text" },
      { name: "certifications", label: "Certifications held", type: "text" },
      { name: "gstin", label: "GSTIN", type: "text" },
    ],
  },
  {
    id: "corporate",
    label: "Investors & Corporate",
    summary: "Corporate, financial and institutional correspondence.",
    scope: "Routed to the corporate desk for review.",
    featured: true,
    fields: [
      { name: "organisation", label: "Organisation", type: "text" },
      { name: "interest", label: "Area of interest", type: "select", options: ["Investment", "Corporate development", "Institutional / government", "Other"] },
    ],
  },
  {
    id: "media",
    label: "Media & General",
    summary: "Press, speaking requests and everything not covered above.",
    scope: "Include your publication or context so it can be routed correctly.",
    featured: true,
    fields: [
      { name: "outlet", label: "Publication or organisation", type: "text" },
      { name: "deadline", label: "Deadline (if any)", type: "text" },
    ],
  },
  {
    id: "careers",
    label: "Careers",
    summary: "Roles, internships and speculative applications.",
    scope: "Reachable directly from the careers page.",
    featured: false,
    fields: [
      { name: "role", label: "Role of interest", type: "text" },
      { name: "portfolio", label: "Portfolio or profile link", type: "text" },
    ],
  },
  {
    id: "general",
    label: "General enquiry",
    summary: "Anything else.",
    scope: "",
    featured: false,
    fields: [],
  },
];

export const featuredEnquiryTypes = enquiryTypes.filter((type) => type.featured);

export function findEnquiryType(id: string | null | undefined): EnquiryType {
  return matchEnquiryType(id) ?? enquiryTypes[enquiryTypes.length - 1];
}

/**
 * Strict lookup. Returns null for an unknown or absent id, so the form can stay
 * genuinely unselected instead of silently defaulting to "General enquiry".
 */
export function matchEnquiryType(id: string | null | undefined): EnquiryType | null {
  return enquiryTypes.find((type) => type.id === id) ?? null;
}

/**
 * Pages that lead into the contact form with their own context pass a `source`.
 * Only sources listed here may preselect anything — everything else lands on a
 * blank form. Kept as data so a new entry point cannot invent its own behaviour.
 */
export type ContactSource = {
  enquiryType: EnquiryTypeId;
  subject: string;
};

const CONTACT_SOURCES: Record<string, ContactSource> = {
  "knowledge-center": {
    enquiryType: "general",
    subject: "Research, Insights and Case Studies",
  },
};

export function findContactSource(source: string | null | undefined): ContactSource | null {
  return (source && CONTACT_SOURCES[source]) || null;
}

/** General enquiry handling, described as a sequence — no response-time promise. */
export const generalProcess = [
  { title: "Submission received", body: "Your enquiry is recorded with a reference number shown on screen." },
  { title: "Routing", body: "It is directed to the team responsible for that subject area." },
  { title: "Review", body: "The team reviews the details and identifies what further information is needed." },
  { title: "Reply", body: "A reply is sent to the email address you provided." },
];

/** Project enquiries follow a longer technical route. */
export const projectProcess = [
  { title: "Requirement", body: "Your stated objective, site and scale are captured." },
  { title: "Technical review", body: "Engineering assesses feasibility against the information provided." },
  { title: "Site / project discussion", body: "Remaining site variables are discussed with you directly." },
  { title: "Preliminary assessment", body: "An indicative technical direction is prepared." },
  { title: "Proposal / quotation", body: "A written proposal or quotation is issued for your review." },
];

export const contactFaqs = [
  {
    question: "What information should I include for a project enquiry?",
    answer:
      "Location, available land or shed area, water source, target production or growing area, and your intended scale. The more of these you can provide, the earlier a meaningful technical assessment is possible.",
  },
  {
    question: "Can Aero Intelli give a price from this form?",
    answer:
      "Engineered systems are quoted per project. Pricing follows a technical review, because equipment, capacity, site conditions and scope determine cost. Catalogue products are priced on their product pages.",
  },
  {
    question: "Do you work outside India?",
    answer:
      "Enquiries from outside India are accepted. Feasibility depends on scope, logistics and applicable regulation, and is assessed case by case.",
  },
  {
    question: "How do I follow up on an existing order?",
    answer:
      "Select Products & Orders and include your order reference. Delivery timelines and procedures are set out in the Shipping & Delivery Policy.",
  },
  {
    question: "How is my information handled?",
    answer:
      "Details you submit are used to respond to your enquiry and are handled in line with the Privacy Policy.",
  },
];
