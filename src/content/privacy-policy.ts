import { contactConfig } from "@/config/contact";
import { footerSocials } from "@/config/footer";
import { grievanceContact, legalContactLines, legalEntity, processors } from "@/config/legalEntity";

import type { LegalBlock, LegalDocumentMeta, LegalSection } from "@/content/legal-types";

export type { LegalBlock, LegalSection };

/**
 * 2.0, not 1.1: version 1.0 described analytics that are not deployed and named
 * providers hedged with "may use" that are not in the request path. Those were
 * inaccurate statements about personal data, not wording to be polished, so the
 * major number moves.
 */
export const privacyMeta: LegalDocumentMeta = {
  company: legalEntity.legalName,
  effectiveDate: "20 August 2026",
  lastUpdated: "20 August 2026",
  version: "2.0",
  jurisdiction: legalEntity.country,
  contactEmail: contactConfig.generalEmail,
};

export const privacySummary =
  "Aero Intelli Private Limited respects your privacy and is committed to handling personal data responsibly, transparently and securely.";

export const privacyIntro: LegalBlock[] = [
  {
    kind: "text",
    value:
      "This Privacy Policy explains how Aero Intelli collects, uses, stores, processes, shares, and protects personal information when you access or use our website, products, services, digital platforms, applications, forms, communication channels, or other services that link to this Privacy Policy.",
  },
  {
    kind: "text",
    value:
      "This Privacy Policy is intended primarily for users in India and is designed with applicable Indian data-protection requirements in mind, including the Digital Personal Data Protection Act, 2023 (“DPDP Act”) and applicable rules and regulations made under it, as and when applicable to our processing activities.",
  },
  {
    kind: "text",
    value:
      "It also reflects the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, which remain in force and under which we have designated a Grievance Officer. Section 18 sets out how to reach that Officer and the timelines we are bound by.",
  },
  {
    kind: "text",
    value:
      "Where this Policy describes a technology or a service provider, it describes what is actually deployed on this website today, verified against the source code. Where a capability does not yet exist, this Policy says so rather than reserving a right in advance.",
  },
];

export const privacySections: LegalSection[] = [
  {
    id: "about-aero-intelli",
    number: "1",
    title: "About Aero Intelli",
    tocLabel: "About Aero Intelli",
    blocks: [
      {
        kind: "text",
        value:
          "Aero Intelli Private Limited is a technology and engineering company working across intelligent food, water, agriculture, aquaculture, controlled-environment cultivation, automation, artificial intelligence, and sustainability systems.",
      },
      { kind: "text", value: "Our website may provide information about:" },
      {
        kind: "list",
        value: [
          "Recirculating Aquaculture Systems (RAS)",
          "NFT Hydroponics",
          "Aeroponics",
          "Intelligent agriculture systems",
          "Water technologies",
          "AI and intelligent monitoring",
          "Automation",
          "Engineering systems",
          "Research and development",
          "Sustainability",
          "Products and services",
          "Projects and case studies",
          "Business partnerships",
          "Technical resources",
        ],
      },
    ],
  },
  {
    id: "scope",
    number: "2",
    title: "Scope of this Privacy Policy",
    tocLabel: "Scope",
    blocks: [
      { kind: "text", value: "This Privacy Policy applies when you:" },
      {
        kind: "list",
        value: [
          "Visit our website",
          "Submit an enquiry",
          "Contact us",
          "Request information",
          "Request a quotation",
          "Submit a business or partnership enquiry",
          "Apply for a career opportunity",
          "Subscribe to communications",
          "Interact with our website forms",
          "Communicate with us electronically",
          "Use services or platforms that specifically link to this Privacy Policy",
        ],
      },
      {
        kind: "text",
        value:
          "This Policy does not automatically apply to third-party websites, applications, platforms, or services that may be linked from our website. Those third parties operate under their own privacy policies and terms.",
      },
    ],
  },
  {
    id: "personal-data",
    number: "3",
    title: "Personal data we may collect",
    tocLabel: "Personal Data",
    blocks: [
      {
        kind: "text",
        value:
          "The only place on this website where you can submit personal data to us is the contact form. Everything below describes the categories of information we may hold, whether it reaches us through that form, by email, or in the course of a commercial or recruitment discussion.",
      },
      {
        kind: "text",
        value: "Depending on how you interact with Aero Intelli, we may collect information such as:",
      },
      { kind: "subheading", value: "3.1 Identity information" },
      {
        kind: "list",
        value: [
          "Full name",
          "Company name",
          "Job title",
          "Professional designation",
          "Business role",
        ],
      },
      { kind: "subheading", value: "3.2 Contact information" },
      {
        kind: "list",
        value: [
          "Email address",
          "Telephone or mobile number",
          "Business address",
          "City",
          "State",
          "Country",
          "Other contact details voluntarily provided by you",
        ],
      },
      { kind: "subheading", value: "3.3 Business information" },
      { kind: "text", value: "When you contact us for business purposes, we may collect:" },
      {
        kind: "list",
        value: [
          "Organization name",
          "Industry",
          "Business requirements",
          "Project requirements",
          "Site information",
          "Technical requirements",
          "Procurement information",
          "Project scale",
          "Budget information where voluntarily provided",
          "Partnership information",
          "Other information necessary to respond to your enquiry",
        ],
      },
      { kind: "subheading", value: "3.4 Career information" },
      { kind: "text", value: "If you apply for a position with Aero Intelli, we may collect:" },
      {
        kind: "list",
        value: [
          "Name",
          "Contact information",
          "Resume / CV",
          "Education information",
          "Employment history",
          "Skills",
          "Professional qualifications",
          "Portfolio information",
          "Information voluntarily provided during the recruitment process",
        ],
      },
      { kind: "subheading", value: "3.5 Website and technical information" },
      {
        kind: "text",
        value:
          "Serving a web page necessarily discloses certain technical information to the server and to the network provider that delivers it. For this website that provider is Cloudflare, and the information is:",
      },
      {
        kind: "list",
        value: [
          "IP address",
          "Browser type",
          "Operating system",
          "Device type",
          "Approximate geographic information derived from technical data",
          "The URL requested",
          "The referring page, where your browser sends one",
          "Date and time of access",
          "Error and diagnostic information where a request fails",
        ],
      },
      {
        kind: "text",
        value:
          "This technical information is generated by the ordinary operation of the web server and is used for security, for serving the site correctly and for diagnosing errors. We do not operate an analytics product, an advertising pixel or a tag manager, and we do not build behavioural profiles from it.",
      },
    ],
  },
  {
    id: "information-you-provide",
    number: "4",
    title: "Information you provide voluntarily",
    tocLabel: "Information You Provide",
    blocks: [
      { kind: "text", value: "You may provide personal data when you:" },
      {
        kind: "list",
        value: [
          "Fill out a contact form",
          "Request a quotation",
          "Request technical information",
          "Contact our team",
          "Submit a partnership enquiry",
          "Submit a project enquiry",
          "Apply for employment",
          "Subscribe to communications",
          "Participate in surveys",
          "Communicate with us through email or other supported channels",
        ],
      },
      {
        kind: "text",
        value:
          "Please do not submit unnecessary sensitive personal information through public website forms.",
      },
    ],
  },
  {
    id: "how-we-use-data",
    number: "5",
    title: "How we use personal data",
    tocLabel: "How We Use Data",
    blocks: [
      {
        kind: "text",
        value: "We may process personal data for legitimate and disclosed purposes, including:",
      },
      { kind: "subheading", value: "Website operations" },
      {
        kind: "list",
        value: [
          "Operate our website",
          "Provide requested information",
          "Maintain website functionality",
          "Improve user experience",
          "Maintain security",
          "Detect technical problems",
        ],
      },
      { kind: "subheading", value: "Business communication" },
      {
        kind: "list",
        value: [
          "Respond to enquiries",
          "Communicate with prospective customers",
          "Prepare proposals",
          "Provide quotations",
          "Discuss technical requirements",
          "Schedule meetings",
          "Follow up on requests",
          "Manage business relationships",
        ],
      },
      { kind: "subheading", value: "Products and services" },
      {
        kind: "list",
        value: [
          "Provide requested products or services",
          "Manage customer relationships",
          "Support projects",
          "Coordinate implementation",
          "Provide technical support",
          "Manage service requests",
        ],
      },
      { kind: "subheading", value: "Recruitment" },
      {
        kind: "list",
        value: [
          "Review applications",
          "Assess qualifications",
          "Contact applicants",
          "Conduct recruitment processes",
          "Communicate regarding employment opportunities",
        ],
      },
      { kind: "subheading", value: "Security" },
      {
        kind: "list",
        value: [
          "Detect fraud",
          "Prevent unauthorized access",
          "Protect our systems",
          "Investigate security incidents",
          "Maintain the integrity of our digital infrastructure",
        ],
      },
      { kind: "subheading", value: "Legal and regulatory purposes" },
      {
        kind: "list",
        value: [
          "Comply with applicable laws",
          "Respond to lawful requests",
          "Protect legal rights",
          "Establish or defend legal claims",
          "Meet regulatory obligations",
        ],
      },
    ],
  },
  {
    id: "basis-for-processing",
    number: "6",
    title: "Basis for processing",
    tocLabel: "Basis for Processing",
    blocks: [
      {
        kind: "text",
        value:
          "Depending on the circumstances and applicable law, Aero Intelli may process personal data:",
      },
      {
        kind: "list",
        value: [
          "With your consent",
          "To provide a service or respond to a request made by you",
          "To take steps requested by you before entering into a business relationship",
          "To comply with applicable legal obligations",
          "For other legally permitted purposes",
        ],
      },
      {
        kind: "text",
        value:
          "Where consent is required, we will seek consent in an appropriate and understandable manner. Under India's DPDP framework, notices and consent mechanisms are intended to provide individuals with clear information about the personal data being processed and the purposes for which it is processed.",
      },
    ],
  },
  {
    id: "cookies",
    number: "7",
    title: "Cookies and similar technologies",
    tocLabel: "Cookies",
    blocks: [
      {
        kind: "text",
        value:
          "This website does not set cookies. It does not write to local storage, session storage or any comparable store on your device, and it carries no advertising pixel, tag manager or analytics SDK. There is consequently nothing for you to consent to and no preference centre to configure.",
      },
      {
        kind: "text",
        value:
          "This is a statement about the site as currently deployed, verified against the source code rather than assumed. If that changes, this Policy and the Cookie Policy will be updated before the technology is introduced, and consent will be obtained where the Digital Personal Data Protection Act, 2023 or the Information Technology Act, 2000 requires it.",
      },
      {
        kind: "linkList",
        value: [{ label: "Cookie Policy", href: "/legal/cookie-policy" }],
      },
    ],
  },
  {
    id: "third-party-services",
    number: "8",
    title: "Service providers who receive personal data",
    tocLabel: "Service Providers",
    blocks: [
      {
        kind: "text",
        value:
          "A privacy policy that says only that a company \"may use third-party service providers\" tells you nothing you can act on. The following are the providers actually in the request path today. Each is named, with what it receives and where it processes it.",
      },
      ...processors.flatMap((processor): LegalBlock[] => [
        { kind: "subheading", value: processor.name },
        { kind: "text", value: `Purpose: ${processor.purpose}` },
        { kind: "text", value: `Data received: ${processor.dataReceived}` },
        { kind: "text", value: `Processing location: ${processor.location}` },
      ]),
      {
        kind: "text",
        value:
          "We do not currently use an analytics provider, an advertising network, a customer relationship management platform, a recruitment platform or a payment gateway. No provider is added to the list above until it is genuinely deployed.",
      },
    ],
  },
  {
    id: "cross-border-transfers-named",
    number: "9",
    title: "Transfers outside India",
    tocLabel: "Transfers Outside India",
    blocks: [
      {
        kind: "text",
        value:
          "Both providers named in Section 8 process data outside India. Submitting the contact form therefore involves a transfer of your enquiry and your IP address outside India, and serving any page of this website involves a transfer of standard request data to Cloudflare's global network.",
      },
      {
        kind: "text",
        value:
          "Such transfers are made in reliance on Section 16 of the Digital Personal Data Protection Act, 2023, which permits transfer to any country other than one restricted by notification of the Central Government. We rely on the contractual terms offered by each provider for the protection of the data transferred.",
      },
    ],
  },
  {
    id: "payment-information",
    number: "10",
    title: "Payment information",
    tocLabel: "Payment Information",
    blocks: [
      {
        kind: "text",
        value:
          "No payment gateway is integrated into this website and no payment can be made through it. We do not collect, receive or store card numbers, bank details, UPI identifiers or any other payment credential through the website.",
      },
      {
        kind: "text",
        value:
          "If online payment is introduced in future, it will be handled by a payment service provider regulated by the Reserve Bank of India, this Policy will be updated to name that provider before the functionality is enabled, and card data will be captured by the provider rather than by us.",
      },
      {
        kind: "callout",
        value:
          "Because no payment page exists, any page or message that asks you to pay Aero Intelli through this website is not ours. Please report it to us at the address in the Contact section.",
      },
    ],
  },
  {
    id: "data-sharing",
    number: "11",
    title: "How we share personal data",
    tocLabel: "Data Sharing",
    blocks: [
      { kind: "text", value: "We do not sell personal data as a commercial product." },
      { kind: "text", value: "We may disclose personal data where reasonably necessary to:" },
      {
        kind: "list",
        value: [
          "Provide requested services",
          "Respond to enquiries",
          "Operate our website",
          "Process transactions",
          "Provide technical support",
          "Maintain security",
          "Work with authorized service providers",
          "Meet legal obligations",
          "Protect our rights",
          "Prevent fraud or abuse",
          "Complete a corporate transaction where legally permitted",
        ],
      },
      {
        kind: "text",
        value:
          "We seek to limit disclosures to information reasonably necessary for the relevant purpose.",
      },
    ],
  },
  {
    id: "business-transactions",
    number: "12",
    title: "Business transactions",
    tocLabel: "Business Transactions",
    blocks: [
      { kind: "text", value: "If Aero Intelli undergoes a:" },
      {
        kind: "list",
        value: [
          "Merger",
          "Acquisition",
          "Corporate restructuring",
          "Financing transaction",
          "Sale of assets",
          "Business transfer",
          "Reorganization",
        ],
      },
      {
        kind: "text",
        value:
          "personal data may be transferred as part of the relevant transaction, subject to applicable law and appropriate safeguards.",
      },
    ],
  },
  {
    id: "data-security",
    number: "13",
    title: "Data security",
    tocLabel: "Data Security",
    blocks: [
      {
        kind: "text",
        value:
          "Aero Intelli takes reasonable technical and organizational measures to protect personal data against:",
      },
      {
        kind: "list",
        value: [
          "Unauthorized access",
          "Unauthorized disclosure",
          "Loss",
          "Misuse",
          "Alteration",
          "Destruction",
          "Accidental disclosure",
        ],
      },
      { kind: "text", value: "Security measures may include:" },
      {
        kind: "list",
        value: [
          "Access controls",
          "Authentication mechanisms",
          "Encryption where appropriate",
          "Secure communication protocols",
          "Infrastructure security",
          "Monitoring",
          "Logging",
          "Backup mechanisms",
          "Security testing",
          "Role-based access",
        ],
      },
      {
        kind: "text",
        value:
          "No internet transmission or storage system can be guaranteed to be completely secure. Accordingly, while we take reasonable precautions, we cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "data-retention",
    number: "14",
    title: "Data retention",
    tocLabel: "Data Retention",
    blocks: [
      {
        kind: "text",
        value:
          "We retain personal data only for as long as reasonably necessary for the purpose for which it was collected or as required or permitted by applicable law.",
      },
      { kind: "text", value: "Retention periods may depend on:" },
      {
        kind: "list",
        value: [
          "The nature of the information",
          "The purpose of processing",
          "The business relationship",
          "Legal requirements",
          "Regulatory requirements",
          "Dispute-resolution requirements",
          "Security requirements",
        ],
      },
      {
        kind: "text",
        value:
          "When personal data is no longer required, we may securely delete, anonymize, or otherwise dispose of it, subject to applicable legal or operational requirements.",
      },
    ],
  },
  {
    id: "your-rights",
    number: "15",
    title: "Your rights",
    tocLabel: "Your Rights",
    blocks: [
      {
        kind: "text",
        value:
          "Subject to applicable law and its conditions, individuals may have rights relating to their personal data. These may include rights to:",
      },
      {
        kind: "list",
        value: [
          "Obtain information about personal data processing",
          "Request access to certain personal data",
          "Request correction of inaccurate information",
          "Request updating of information",
          "Request deletion where legally applicable",
          "Withdraw consent where processing is based on consent",
          "Request grievance redressal",
          "Exercise other rights available under applicable law",
        ],
      },
      {
        kind: "text",
        value:
          "The availability and scope of these rights may depend on the nature of the processing and applicable legal requirements.",
      },
    ],
  },
  {
    id: "withdrawing-consent",
    number: "16",
    title: "Withdrawing consent",
    tocLabel: "Withdrawing Consent",
    blocks: [
      {
        kind: "text",
        value:
          "Where processing is based on consent, you may withdraw your consent through the mechanism provided for that processing or by contacting us.",
      },
      {
        kind: "text",
        value:
          "Withdrawal of consent does not necessarily affect the lawfulness of processing carried out before the withdrawal. Where consent is withdrawn, we may no longer be able to provide certain services or features that depend on that consent.",
      },
    ],
  },
  {
    id: "access-correction-deletion",
    number: "17",
    title: "How to request access, correction or deletion",
    tocLabel: "Access & Correction",
    blocks: [
      {
        kind: "text",
        value:
          "You may contact Aero Intelli to request information regarding your personal data or exercise applicable privacy rights.",
      },
      {
        kind: "text",
        value:
          "Your request should include sufficient information for us to identify the relevant request and verify it where reasonably necessary. We may request additional information where required to protect against unauthorized requests.",
      },
    ],
  },
  {
    id: "grievance-redressal",
    number: "18",
    title: "Grievance redressal",
    tocLabel: "Grievance Redressal",
    blocks: [
      {
        kind: "text",
        value:
          "We have designated a Grievance Officer as required by Rule 5(9) of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and as contemplated by the Digital Personal Data Protection Act, 2023.",
      },
      {
        kind: "list",
        value: [
          `Role: ${grievanceContact.role}`,
          `Email: ${grievanceContact.email}`,
        ],
      },
      {
        kind: "text",
        value: `We will acknowledge a complaint within ${grievanceContact.acknowledgementWindow} of receipt and will redress it within ${grievanceContact.redressalWindow}, that being the period prescribed by Rule 5(9). Please describe the issue and, where you are asking us to act on your personal data, tell us which data you mean so that we can locate it.`,
      },
      {
        kind: "text",
        value:
          "The Grievance Officer is presently identified by role and by a monitored inbox rather than by personal name. We state that plainly rather than implying full conformity with the naming requirement, and we will publish the name and designation of the individual holding the role once appointed.",
      },
      {
        kind: "text",
        value:
          "If you are not satisfied with our response, you may approach the Data Protection Board of India, established under the Digital Personal Data Protection Act, 2023.",
      },
    ],
  },
  {
    id: "childrens-privacy",
    number: "19",
    title: "Children's privacy",
    tocLabel: "Children's Privacy",
    blocks: [
      {
        kind: "text",
        value:
          "Our website is primarily intended for businesses, professionals, organizations, researchers, customers, partners, and general visitors.",
      },
      {
        kind: "text",
        value:
          "We do not knowingly seek to collect personal data from children in circumstances where such collection is restricted by applicable law. Where processing involving children is subject to specific legal requirements, we will implement the applicable safeguards.",
      },
    ],
  },
  {
    id: "international-transfers",
    number: "20",
    title: "International data transfers",
    tocLabel: "International Transfers",
    blocks: [
      {
        kind: "text",
        value:
          "The transfers that actually occur are set out in Section 9, which names each provider, what it receives and where it processes it. This section states the standard we apply to any future transfer.",
      },
      {
        kind: "text",
        value:
          "Before a new provider outside India is introduced, we assess whether the transfer is necessary for the purpose, whether the provider offers contractual commitments on confidentiality and security, and whether the destination country is one restricted by notification of the Central Government under Section 16 of the Digital Personal Data Protection Act, 2023. Section 9 is updated before the provider goes live, not after.",
      },
    ],
  },
  {
    id: "third-party-websites",
    number: "21",
    title: "Third-party websites",
    tocLabel: "Third-Party Websites",
    blocks: [
      {
        kind: "text",
        value:
          "Our website may contain links to third-party websites, including social-media platforms, technology providers, partners, research resources, or other websites. For example, our website may link to Aero Intelli's official social profiles.",
      },
      {
        kind: "text",
        value: "These websites operate independently from Aero Intelli. We are not responsible for:",
      },
      {
        kind: "list",
        value: [
          "Their privacy practices",
          "Their security",
          "Their content",
          "Their cookies",
          "Their data-processing practices",
        ],
      },
      {
        kind: "text",
        value:
          "Please review the privacy policies of third-party websites before providing personal information.",
      },
    ],
  },
  {
    id: "social-media",
    number: "22",
    title: "Social media",
    tocLabel: "Social Media",
    blocks: [
      { kind: "text", value: "Aero Intelli may maintain official profiles on:" },
      {
        kind: "linkList",
        value: footerSocials.map((social) => ({ label: social.label, href: social.href })),
      },
      {
        kind: "text",
        value:
          "Interactions with those platforms are governed by the respective platforms' privacy policies and terms. When you interact with our social-media profiles, the relevant platform may independently collect and process information about you.",
      },
    ],
  },
  {
    id: "email-communications",
    number: "23",
    title: "Email communications",
    tocLabel: "Email Communications",
    blocks: [
      { kind: "text", value: "If you provide your email address, we may use it to:" },
      {
        kind: "list",
        value: [
          "Respond to enquiries",
          "Provide requested information",
          "Communicate about projects",
          "Provide service-related messages",
          "Respond to support requests",
          "Send communications where permitted",
        ],
      },
      {
        kind: "text",
        value:
          "Marketing communications will be handled in accordance with applicable requirements. Where an unsubscribe mechanism is provided, you may use it to stop receiving non-essential marketing communications.",
      },
    ],
  },
  {
    id: "data-accuracy",
    number: "24",
    title: "Data accuracy",
    tocLabel: "Data Accuracy",
    blocks: [
      { kind: "text", value: "We seek to maintain accurate personal information." },
      {
        kind: "text",
        value:
          "You are responsible for providing accurate and current information when submitting information to Aero Intelli. You may contact us if information requires correction or updating.",
      },
    ],
  },
  {
    id: "data-minimization",
    number: "25",
    title: "Data minimization",
    tocLabel: "Data Minimization",
    blocks: [
      {
        kind: "text",
        value:
          "Aero Intelli seeks to collect and process information that is reasonably relevant to the purposes for which it is used.",
      },
      {
        kind: "text",
        value:
          "Please do not provide personal information that is unnecessary for your enquiry or requested service.",
      },
    ],
  },
  {
    id: "changes",
    number: "26",
    title: "Changes to this Privacy Policy",
    tocLabel: "Changes",
    blocks: [
      {
        kind: "text",
        value: "We may update this Privacy Policy from time to time. Changes may be made due to:",
      },
      {
        kind: "list",
        value: [
          "Changes in our services",
          "Changes in technology",
          "Changes in business operations",
          "Changes in applicable law",
          "Regulatory developments",
          "Changes in our privacy practices",
        ],
      },
      {
        kind: "text",
        value:
          "When we make material changes, we may update the “Last Updated” date and, where appropriate, provide additional notice. We encourage visitors to review this page periodically.",
      },
    ],
  },
  {
    id: "governing-law",
    number: "27",
    title: "Governing law",
    tocLabel: "Governing Law",
    blocks: [
      {
        kind: "text",
        value:
          "This Privacy Policy is intended to be governed by and interpreted in accordance with applicable laws of India. Any legal matters relating to this Privacy Policy will be subject to the applicable jurisdiction and laws of India.",
      },
      {
        kind: "text",
        value:
          "Nothing in this section limits any mandatory rights or remedies available to an individual under applicable law.",
      },
    ],
  },
  {
    id: "contact",
    number: "28",
    title: "Contact Aero Intelli",
    tocLabel: "Contact",
    blocks: [
      { kind: "text", value: "For privacy-related questions, requests, or complaints, contact:" },
      {
        kind: "list",
        value: legalContactLines("Privacy and Data Protection"),
      },
    ],
  },
  {
    id: "privacy-requests",
    number: "29",
    title: "Privacy requests",
    tocLabel: "Privacy Requests",
    blocks: [
      { kind: "text", value: "When contacting us regarding personal data, please include:" },
      {
        kind: "list",
        value: [
          "Your name",
          "Contact information",
          "Nature of your request",
          "Relevant account, enquiry, or transaction information where applicable",
          "Any additional information reasonably necessary to identify the relevant data or interaction",
        ],
      },
      {
        kind: "text",
        value:
          "Please do not send passwords, payment-card numbers, authentication codes, or other highly confidential credentials through email.",
      },
    ],
  },
  {
    id: "policy-version",
    number: "30",
    title: "Policy version",
    tocLabel: "Policy Version",
    blocks: [
      {
        kind: "list",
        value: [
          "Policy: Privacy Policy",
          `Company: ${privacyMeta.company}`,
          `Jurisdiction: ${privacyMeta.jurisdiction}`,
          `Effective Date: ${privacyMeta.effectiveDate}`,
          `Last Updated: ${privacyMeta.lastUpdated}`,
          `Version: ${privacyMeta.version}`,
        ],
      },
    ],
  },
];
