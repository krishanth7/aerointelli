import { contactConfig } from "@/config/contact";
import { legalName } from "@/config/site";

/**
 * Verified corporate facts, for the legal pages only.
 *
 * Same rule as `contact.ts`, and it matters more here: a legal page is a
 * representation to the public and to a regulator. An invented CIN or a
 * registered office that does not match what is filed with the Registrar of
 * Companies is not a typo — it is a false statement on a document people are
 * entitled to rely on.
 *
 * So every value that has not been confirmed against the incorporation
 * documents is `null`, and the renderer omits the line entirely rather than
 * printing "N/A" or a placeholder. An absent fact reads as an omission. A
 * fabricated one reads as a lie.
 *
 * A postal address previously appeared on three legal pages while
 * `contactConfig.officeAddress` was null — the site contradicted itself, and
 * nobody could say which half was true. It has been withdrawn pending
 * confirmation.
 */

export type LegalEntity = {
  /** Full legal name, exactly as incorporated. */
  legalName: string;
  /** Entity type, written out. */
  constitution: string;
  /** Country of incorporation. */
  country: string;
  /** Corporate Identity Number, from the Certificate of Incorporation. */
  cin: string | null;
  /** GST registration number. */
  gstin: string | null;
  /** Registered office, as filed with the Registrar of Companies. */
  registeredOffice: string | null;
  /**
   * The courts whose jurisdiction the Terms submit disputes to.
   *
   * Stated as a general reference to the courts of India rather than naming a
   * city. Naming an exclusive venue is a commercial decision with real
   * consequences for where the company can sue and be sued, and it is not one
   * to make on the company's behalf. Counsel should settle this.
   */
  jurisdiction: string;
};

export const legalEntity: LegalEntity = {
  legalName,
  constitution: "a private limited company incorporated in India",
  country: "India",
  cin: null,
  gstin: null,
  registeredOffice: null,
  jurisdiction: "the competent courts in India",
};

/**
 * The grievance channel.
 *
 * India requires a grievance officer to be identified by a body corporate that
 * handles personal data — Rule 5(9) of the Information Technology (Reasonable
 * Security Practices and Procedures and Sensitive Personal Data or Information)
 * Rules 2011 — and the Consumer Protection (E-Commerce) Rules 2020 additionally
 * require a name, designation and contact details once goods are sold online.
 *
 * Published here by role and monitored inbox, without a personal name. That is
 * a deliberate, disclosed shortfall against the naming requirement rather than
 * an oversight, and it is recorded in `nameDisclosed` so the pages can say so
 * plainly instead of implying full compliance. The store is not open, so the
 * E-Commerce Rules are not yet engaged; the IT Rules requirement applies now.
 *
 * `redressalWindow` is the statutory maximum under Rule 5(9), not a marketing
 * promise. It is a ceiling the company is already bound by, which is why it is
 * safe to state where an invented "within 24 hours" would not be.
 */
export type GrievanceContact = {
  role: string;
  email: string;
  phone: string | null;
  acknowledgementWindow: string;
  redressalWindow: string;
  nameDisclosed: boolean;
};

export const grievanceContact: GrievanceContact = {
  role: "Grievance Officer",
  email: contactConfig.generalEmail,
  phone: contactConfig.phone,
  acknowledgementWindow: "forty-eight (48) hours",
  redressalWindow: "one (1) month",
  nameDisclosed: false,
};

/**
 * Processors that receive personal data, named.
 *
 * A privacy policy that says "we may use third-party service providers" tells
 * a reader nothing. These are the ones actually in the request path, verified
 * against the code rather than assumed:
 *
 * - EmailJS: `src/components/contact/ContactForm.tsx` imports
 *   `@emailjs/browser` and calls `emailjs.send()`, which posts the enquiry from
 *   the visitor's own browser to `api.emailjs.com`. The visitor's IP address is
 *   therefore visible to EmailJS. Three earlier statements across the Cookie
 *   Policy denied that any third party was embedded in the pages; they were
 *   wrong, and this entry is why.
 * - Cloudflare: the site is deployed as a Cloudflare Worker, so Cloudflare
 *   terminates TLS and serves every request.
 *
 * Add to this list only after confirming the service is genuinely in use. A
 * named vendor that is not deployed is the same category of error as a fake
 * address, and the previous draft named three that were hedged with "may".
 */
export type Processor = {
  name: string;
  purpose: string;
  dataReceived: string;
  location: string;
};

/**
 * The contact block every legal page ends with.
 *
 * Built rather than written out four times, because four hand-typed copies of
 * an address and an email address are four opportunities to disagree — and they
 * did disagree: three pages published a registered office while the contact
 * configuration held none, and the Shipping Policy used a `support@` alias that
 * appears nowhere else and is not a verified inbox.
 *
 * Lines for facts that are `null` are omitted rather than rendered empty, so
 * adding a confirmed CIN or registered office in one place makes it appear on
 * every legal page at once.
 */
export function legalContactLines(subject: string): string[] {
  return [
    legalEntity.legalName,
    `Attention: ${subject}`,
    `Email: ${contactConfig.generalEmail}`,
    ...(contactConfig.phone ? [`Telephone: ${contactConfig.phone}`] : []),
    ...(legalEntity.registeredOffice ? [`Registered Office: ${legalEntity.registeredOffice}`] : []),
    ...(legalEntity.cin ? [`CIN: ${legalEntity.cin}`] : []),
    ...(legalEntity.gstin ? [`GSTIN: ${legalEntity.gstin}`] : []),
  ];
}

export const processors: Processor[] = [
  {
    name: "EmailJS",
    purpose: "Delivery of enquiries submitted through the website's contact form.",
    dataReceived:
      "The contents of the form you submit, together with your IP address, which is visible to the service because the request is sent from your browser.",
    location: "Outside India.",
  },
  {
    name: "Cloudflare",
    purpose: "Website hosting, content delivery and network security.",
    dataReceived:
      "Standard request data required to serve a page, including IP address, browser user-agent and the URL requested.",
    location: "Globally distributed network, including servers outside India.",
  },
];
