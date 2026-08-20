import { footerSocials } from "@/config/footer";

import type { LegalBlock, LegalSection } from "@/content/legal-types";

export type { LegalBlock, LegalSection };

export const privacyMeta = {
  company: "Aero Intelli Private Limited",
  effectiveDate: "9 August 2026",
  lastUpdated: "9 August 2026",
  version: "1.0",
  jurisdiction: "India",
  contactEmail: "contact@aerointelli.com",
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
          "When you access our website, certain technical information may be automatically collected, depending on the technologies implemented on the website. This may include:",
      },
      {
        kind: "list",
        value: [
          "IP address",
          "Browser type",
          "Operating system",
          "Device type",
          "Approximate geographic information derived from technical data",
          "Pages visited",
          "Referring pages",
          "Date and time of access",
          "Session information",
          "Website interaction information",
          "Error and diagnostic information",
        ],
      },
      {
        kind: "text",
        value:
          "We use such information primarily for security, functionality, analytics, troubleshooting, and improvement of our website.",
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
          "Our website may use cookies and similar technologies. These technologies may help us:",
      },
      {
        kind: "list",
        value: [
          "Keep the website functioning",
          "Remember preferences",
          "Understand website usage",
          "Improve performance",
          "Protect against abuse",
          "Measure website traffic",
          "Improve user experience",
        ],
      },
      { kind: "subheading", value: "Essential cookies" },
      {
        kind: "text",
        value: "Required for core website functionality, security, or technical operation.",
      },
      { kind: "subheading", value: "Analytics cookies" },
      { kind: "text", value: "Used to understand how visitors interact with the website." },
      { kind: "subheading", value: "Preference cookies" },
      { kind: "text", value: "Used to remember certain settings or preferences." },
      { kind: "subheading", value: "Other technologies" },
      {
        kind: "text",
        value:
          "Depending on the services implemented on our website, similar technologies such as pixels, local storage, tags, or analytics technologies may also be used. Where applicable, we will provide appropriate controls for consent or preference management.",
      },
    ],
  },
  {
    id: "third-party-services",
    number: "8",
    title: "Third-party services",
    tocLabel: "Third-Party Services",
    blocks: [
      {
        kind: "text",
        value:
          "Aero Intelli may use trusted technology providers to operate and improve its website and services. Depending on the actual implementation, these may include providers for:",
      },
      {
        kind: "list",
        value: [
          "Website hosting",
          "Cloud infrastructure",
          "Database services",
          "Content delivery",
          "Security",
          "Analytics",
          "Communications",
          "Email delivery",
          "Customer relationship management",
          "Payment processing",
          "Recruitment services",
        ],
      },
      {
        kind: "text",
        value:
          "Third-party service providers may process personal data on our behalf where necessary to provide their services. We expect such providers to implement appropriate safeguards and process information only for authorized purposes.",
      },
    ],
  },
  {
    id: "infrastructure-providers",
    number: "9",
    title: "Google Cloud, Firebase and Cloudflare",
    tocLabel: "Infrastructure Providers",
    blocks: [
      {
        kind: "text",
        value:
          "Our technology infrastructure may use services such as Google Cloud, Firebase, Cloudflare, or other infrastructure providers. Depending on the specific website functionality implemented, these services may process technical or personal information required to operate the website and related services.",
      },
      {
        kind: "text",
        value:
          "The exact information processed will depend on which services are enabled. Aero Intelli will configure such services in accordance with applicable security, privacy, and data-protection requirements.",
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
          "If Aero Intelli provides online purchasing or payment functionality, payments may be processed through third-party payment service providers.",
      },
      {
        kind: "text",
        value:
          "Unless expressly stated otherwise, Aero Intelli does not intend to store complete payment-card information on its own systems. Payment providers may collect and process payment information under their own terms and privacy policies. Users should review the applicable payment provider's privacy documentation before completing a transaction.",
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
          "If you have a privacy-related concern, complaint, or request, please contact Aero Intelli using the contact information provided below. We will review and address the request in accordance with applicable law and our internal procedures.",
      },
      {
        kind: "text",
        value:
          "Where applicable, individuals may also have rights to approach the relevant statutory authority or Data Protection Board in accordance with Indian law. The Government of India has established the Data Protection Board of India under the DPDP framework.",
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
          "Depending on our technology providers, business operations, or service infrastructure, personal data may potentially be processed or stored outside India.",
      },
      {
        kind: "text",
        value:
          "Where personal data is transferred outside India, Aero Intelli will seek to comply with applicable Indian law and any restrictions or requirements that apply to such transfers.",
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
        value: [
          "Aero Intelli Private Limited",
          "Privacy / Data Protection Contact",
          "Email: contact@aerointelli.com",
          "Registered Office: Bhavani Nagar Colony, Kushiguda, ECIL, Secunderabad, Hyderabad, Telangana - 500062, India",
        ],
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
          "Company: Aero Intelli Private Limited",
          "Jurisdiction: India",
          "Effective Date: 9 August 2026",
          "Last Updated: 9 August 2026",
          "Version: 1.0",
        ],
      },
    ],
  },
];
