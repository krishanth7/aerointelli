import type { LegalBlock, LegalDocumentMeta, LegalSection } from "@/content/legal-types";

export const termsMeta: LegalDocumentMeta = {
  company: "Aero Intelli Private Limited",
  effectiveDate: "10 August 2026",
  lastUpdated: "10 August 2026",
  version: "1.0",
  jurisdiction: "India",
  contactEmail: "contact@aerointelli.com",
};

export const termsSummary =
  "These Terms of Use govern your access to and use of the Aero Intelli website and any services, products or information made available through it.";

export const termsIntro: LegalBlock[] = [
  {
    kind: "text",
    value:
      "These Terms of Use (the “Terms”) form a legally binding agreement between Aero Intelli Private Limited and any person who accesses or uses the Aero Intelli website. They set out the basis on which the Website is made available, the conduct expected of users, and the treatment of information, products and services described on the Website.",
  },
  {
    kind: "text",
    value:
      "Please read these Terms carefully before using the Website. If you do not agree with them, you should not access or use the Website.",
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "introduction",
    number: "1",
    title: "Introduction",
    tocLabel: "Introduction",
    blocks: [
      {
        kind: "clause",
        number: "1.1",
        value:
          "These Terms of Use govern your access to and use of the Aero Intelli website and any services made available through the Website. By accessing or using the Website, you acknowledge that you have read and understood these Terms and agree to be bound by them, subject to applicable law.",
      },
      {
        kind: "clause",
        number: "1.2",
        value:
          "The Website is operated by Aero Intelli Private Limited, a company incorporated in India, engaged in intelligent agriculture, aquaculture, hydroponics, aeroponics, water technology and related engineering and technology activities.",
      },
      {
        kind: "clause",
        number: "1.3",
        value:
          "These Terms apply to all visitors and users of the Website, whether or not you register an account, submit an enquiry or enter into any transaction with the Company.",
      },
    ],
  },
  {
    id: "acceptance-of-terms",
    number: "2",
    title: "Acceptance of Terms",
    tocLabel: "Acceptance of Terms",
    blocks: [
      {
        kind: "clause",
        number: "2.1",
        value:
          "Your access to or use of the Website constitutes your acceptance of these Terms and of any policies referenced within them, including the Privacy Policy.",
      },
      {
        kind: "clause",
        number: "2.2",
        value:
          "If you do not agree to these Terms, you must discontinue use of the Website. Continued use following the publication of revised Terms constitutes acceptance of those revised Terms.",
      },
      {
        kind: "clause",
        number: "2.3",
        value:
          "Where you access the Website on behalf of an organisation, you confirm that you are authorised to accept these Terms on behalf of that organisation, and references to “you” include that organisation.",
      },
    ],
  },
  {
    id: "eligibility",
    number: "3",
    title: "Eligibility",
    tocLabel: "Eligibility",
    blocks: [
      {
        kind: "clause",
        number: "3.1",
        value:
          "The Website is intended for use by persons who are competent to contract under applicable law. If you are not competent to contract, you may use the Website only under the supervision of a parent or legal guardian who accepts these Terms.",
      },
      {
        kind: "clause",
        number: "3.2",
        value:
          "You must not use the Website if you are barred from doing so under any applicable law, or if your access has previously been suspended or withdrawn by the Company.",
      },
      {
        kind: "clause",
        number: "3.3",
        value:
          "You are responsible for ensuring that your use of the Website complies with the laws applicable in your jurisdiction. The Website is operated from India and is not directed at any jurisdiction where such operation would be unlawful.",
      },
    ],
  },
  {
    id: "definitions",
    number: "4",
    title: "Definitions",
    tocLabel: "Definitions",
    blocks: [
      {
        kind: "text",
        value: "In these Terms, unless the context requires otherwise:",
      },
      {
        kind: "list",
        value: [
          "“Company”, “we”, “us” or “our” means Aero Intelli Private Limited and, where the context permits, its authorised representatives.",
          "“Website” means the Aero Intelli website and any related digital properties, pages, interfaces or applications operated by the Company.",
          "“Services” means the services, information, tools and functionality made available by the Company through the Website.",
          "“Products” means goods, systems, equipment or materials offered or described by the Company, whether supplied through the Website or under a separate agreement.",
          "“User Content” means any content, information, material or feedback submitted to the Website or to the Company by a user.",
          "“Project Documents” means quotations, proposals, technical specifications, drawings, purchase orders, supply agreements, installation agreements and warranty documents issued or executed in relation to a specific project.",
        ],
      },
    ],
  },
  {
    id: "use-of-the-website",
    number: "5",
    title: "Use of the Website",
    tocLabel: "Use of the Website",
    blocks: [
      { kind: "subheading", value: "Permitted Use" },
      {
        kind: "clause",
        number: "5.1",
        value:
          "You may access and use the Website for lawful purposes, including reviewing information about the Company, its technology, its products and its services, and making legitimate enquiries.",
      },
      { kind: "subheading", value: "Restrictions" },
      {
        kind: "clause",
        number: "5.2",
        value:
          "You must not interfere with the operation, integrity, security or availability of the Website, or attempt to gain unauthorised access to any part of it, to any account, or to any system or network connected to it.",
      },
      {
        kind: "clause",
        number: "5.3",
        value:
          "You must not reproduce, republish, distribute or commercially exploit any part of the Website except as expressly permitted by these Terms or by applicable law.",
      },
      { kind: "subheading", value: "User Responsibilities" },
      {
        kind: "clause",
        number: "5.4",
        value:
          "You are responsible for the accuracy of the information you submit through the Website and for maintaining the security of the devices and connections you use to access it.",
      },
      {
        kind: "clause",
        number: "5.5",
        value:
          "The Company may modify, suspend or discontinue any part of the Website, including any feature or content, without prior notice, subject to applicable law.",
      },
    ],
  },
  {
    id: "user-accounts",
    number: "6",
    title: "User Accounts",
    tocLabel: "User Accounts",
    blocks: [
      { kind: "subheading", value: "Account Creation" },
      {
        kind: "clause",
        number: "6.1",
        value:
          "Certain features of the Website may require registration. Where you register, you must provide information that is accurate, current and complete, and keep that information updated.",
      },
      { kind: "subheading", value: "Credentials and Account Security" },
      {
        kind: "clause",
        number: "6.2",
        value:
          "You are responsible for maintaining the confidentiality of your account credentials and for all activity carried out through your account. You must notify the Company promptly of any unauthorised use or suspected compromise of your account.",
      },
      { kind: "subheading", value: "Suspension and Closure" },
      {
        kind: "clause",
        number: "6.3",
        value:
          "The Company may suspend, restrict or close an account where it reasonably believes that these Terms have been breached, that the account has been compromised, or that suspension is required to comply with applicable law or to protect the Website or its users.",
      },
    ],
  },
  {
    id: "products-and-services",
    number: "7",
    title: "Products and Services",
    tocLabel: "Products and Services",
    blocks: [
      {
        kind: "clause",
        number: "7.1",
        value:
          "The Company operates across intelligent agriculture, recirculating aquaculture systems, NFT hydroponics, aeroponics, water technology, automation and related digital services. The Website describes these capabilities for information purposes.",
      },
      {
        kind: "clause",
        number: "7.2",
        value:
          "Availability of any product or service is subject to confirmation by the Company. Descriptions published on the Website do not constitute an offer capable of acceptance, and do not create any obligation on the Company to supply.",
      },
      {
        kind: "callout",
        value:
          "Information published on this Website about engineering systems is general in nature and is not a project-specific engineering specification. Where a specific project is undertaken, the applicable Project Documents govern the scope, technical parameters, commercial terms and warranties for that project.",
      },
    ],
  },
  {
    id: "product-information",
    number: "8",
    title: "Product Information",
    tocLabel: "Product Information",
    blocks: [
      {
        kind: "clause",
        number: "8.1",
        value:
          "The Company takes reasonable care to ensure that descriptions, specifications, technical parameters and images published on the Website are accurate at the time of publication.",
      },
      {
        kind: "clause",
        number: "8.2",
        value:
          "Images, renderings and illustrations are indicative. Actual products, systems and installations may vary in appearance, dimensions, configuration or finish according to specification, site conditions and design revisions.",
      },
      {
        kind: "clause",
        number: "8.3",
        value:
          "Specifications may be revised as products and systems are developed. The Company reserves the right to correct errors, inaccuracies or omissions and to update information at any time, subject to applicable law.",
      },
      {
        kind: "clause",
        number: "8.4",
        value:
          "Nothing in this section limits any right or remedy available to a consumer under the Consumer Protection Act, 2019 or other applicable law.",
      },
    ],
  },
  {
    id: "orders-and-order-acceptance",
    number: "9",
    title: "Orders and Order Acceptance",
    tocLabel: "Orders and Order Acceptance",
    blocks: [
      {
        kind: "clause",
        number: "9.1",
        value:
          "Where the Website permits an order to be submitted, your submission of an order constitutes an offer to purchase, and does not by itself create a binding contract.",
      },
      {
        kind: "clause",
        number: "9.2",
        value:
          "A contract is formed only when the Company confirms acceptance of the order in writing, or otherwise dispatches or commences supply against the order, whichever occurs first.",
      },
      {
        kind: "clause",
        number: "9.3",
        value:
          "The Company may decline or cancel an order, in whole or in part, where the product is unavailable, where information relating to the order is inaccurate, where a pricing or description error has occurred, where verification cannot be completed, or where acceptance would be contrary to applicable law. Where an order is declined or cancelled after payment, amounts already received for the cancelled portion will be refunded.",
      },
      {
        kind: "clause",
        number: "9.4",
        value:
          "Systems, equipment and engineering projects are ordinarily supplied under separate Project Documents rather than through a website order, and those documents govern where they apply.",
      },
    ],
  },
  {
    id: "pricing-taxes-and-payments",
    number: "10",
    title: "Pricing, Taxes and Payments",
    tocLabel: "Pricing, Taxes and Payments",
    blocks: [
      {
        kind: "clause",
        number: "10.1",
        value:
          "Prices are stated in Indian Rupees unless expressly indicated otherwise, and are subject to change until an order is accepted or a quotation is issued.",
      },
      {
        kind: "clause",
        number: "10.2",
        value:
          "Applicable taxes, duties, levies and, where relevant, freight, insurance, handling, installation and commissioning charges are payable in addition to the stated price unless the applicable quotation or order confirmation states that they are included.",
      },
      {
        kind: "clause",
        number: "10.3",
        value:
          "Payment must be made through the payment methods made available by the Company. Payments may be processed by third-party payment service providers, and the Company does not store payment card details on the Website.",
      },
      {
        kind: "clause",
        number: "10.4",
        value:
          "Where a manifest pricing error is identified, the Company will contact you before proceeding and you may confirm the order at the corrected price or cancel it without charge.",
      },
      {
        kind: "clause",
        number: "10.5",
        value:
          "Payment terms for projects, systems and engineering supply, including milestones and advances, are set out in the applicable Project Documents.",
      },
    ],
  },
  {
    id: "delivery-and-fulfilment",
    number: "11",
    title: "Delivery and Fulfilment",
    tocLabel: "Delivery and Fulfilment",
    blocks: [
      {
        kind: "clause",
        number: "11.1",
        value:
          "Delivery timelines communicated by the Company are estimates based on information available at the time and are not guaranteed dates unless expressly agreed in writing.",
      },
      {
        kind: "clause",
        number: "11.2",
        value:
          "Where delivery, installation or commissioning at a site is required, you are responsible for site readiness, access, permissions, utilities and any statutory approvals required at the site, unless the applicable Project Documents allocate that responsibility to the Company.",
      },
      {
        kind: "clause",
        number: "11.3",
        value:
          "The Company is not responsible for delays caused by events outside its reasonable control, including transport disruption, supplier delay, regulatory action, site unavailability or natural events. The Company will inform you of material delays and of the revised schedule.",
      },
      {
        kind: "clause",
        number: "11.4",
        value:
          "Further details of dispatch and delivery arrangements are set out in the Delivery & Shipping Policy.",
      },
      {
        kind: "linkList",
        value: [{ label: "Shipping & Delivery Policy", href: "/legal/shipping-policy" }],
      },
    ],
  },
  {
    id: "cancellations-returns-and-refunds",
    number: "12",
    title: "Cancellations, Returns and Refunds",
    tocLabel: "Cancellations and Refunds",
    blocks: [
      {
        kind: "clause",
        number: "12.1",
        value:
          "Requests to cancel an accepted order should be sent to the Company in writing without delay. Whether a cancellation can be accommodated depends on the stage of processing, dispatch, manufacture or customisation at the time the request is received.",
      },
      {
        kind: "clause",
        number: "12.2",
        value:
          "Items that are custom-manufactured, engineered to a specific site, or produced against a specific technical specification are ordinarily not cancellable or returnable once production has commenced, except where the item is defective or does not conform to the agreed specification.",
      },
      {
        kind: "clause",
        number: "12.3",
        value:
          "Where an item is damaged in transit or does not conform to the agreed specification, you should notify the Company promptly on receipt, with supporting details, so that the matter can be examined and an appropriate remedy provided.",
      },
      {
        kind: "clause",
        number: "12.4",
        value:
          "Approved refunds are made to the original payment method. Cancellation and refund arrangements for projects and engineering supply are governed by the applicable Project Documents.",
      },
      {
        kind: "clause",
        number: "12.5",
        value:
          "This section does not limit any right or remedy available to a consumer under applicable law.",
      },
    ],
  },
  {
    id: "engineering-and-technical-services",
    number: "13",
    title: "Engineering and Technical Services",
    tocLabel: "Engineering and Technical Services",
    blocks: [
      {
        kind: "clause",
        number: "13.1",
        value:
          "Recirculating aquaculture systems, aeroponic and NFT hydroponic systems, water treatment systems and related automation are engineered solutions. Their design depends on site conditions, water source, species or crop, target capacity, regulatory requirements and operational practice.",
      },
      {
        kind: "clause",
        number: "13.2",
        value:
          "Information published on the Website is provided for general understanding and does not constitute engineering advice, a design deliverable or a representation of performance for any particular site or operation.",
      },
      {
        kind: "clause",
        number: "13.3",
        value:
          "Any engagement for design, supply, installation, commissioning, training, service or maintenance is governed by the applicable Project Documents, which prevail over the Website in relation to that engagement.",
      },
      {
        kind: "clause",
        number: "13.4",
        value:
          "System performance depends materially on operation, maintenance, input quality, biosecurity and adherence to the operating parameters supplied with the system. Warranties, if any, are those stated in the applicable Project Documents.",
      },
    ],
  },
  {
    id: "ai-and-technology-services",
    number: "14",
    title: "AI and Technology Services",
    tocLabel: "AI and Technology Services",
    blocks: [
      {
        kind: "clause",
        number: "14.1",
        value:
          "The Company develops monitoring, automation, analytics and artificial-intelligence tools intended to support the operation of agricultural, aquaculture and water systems.",
      },
      {
        kind: "clause",
        number: "14.2",
        value:
          "Outputs generated by such tools, including alerts, predictions, recommendations and analytics, are decision-support information. They are not a substitute for professional judgement, statutory compliance, veterinary or agronomic advice, or independent verification by qualified personnel.",
      },
      {
        kind: "clause",
        number: "14.3",
        value:
          "Accuracy of any output depends on sensor condition, calibration, connectivity, data quality and correct installation. You remain responsible for the operation of your facility and for decisions taken in reliance on any output.",
      },
      {
        kind: "clause",
        number: "14.4",
        value:
          "Digital services may require connectivity, scheduled maintenance and periodic updates, and may be modified, interrupted or discontinued in accordance with the applicable service agreement.",
      },
    ],
  },
  {
    id: "intellectual-property",
    number: "15",
    title: "Intellectual Property",
    tocLabel: "Intellectual Property",
    blocks: [
      { kind: "subheading", value: "Ownership" },
      {
        kind: "clause",
        number: "15.1",
        value:
          "The Website and its contents, including text, graphics, layout, design, technical illustrations, system diagrams, software, data compilations and the Aero Intelli name and marks, are owned by or licensed to the Company and are protected by applicable intellectual-property laws.",
      },
      { kind: "subheading", value: "Permitted Access" },
      {
        kind: "clause",
        number: "15.2",
        value:
          "You are granted a limited, non-exclusive, non-transferable and revocable right to access and view the Website for personal or internal business evaluation purposes, subject to these Terms.",
      },
      { kind: "subheading", value: "Restrictions" },
      {
        kind: "clause",
        number: "15.3",
        value:
          "You must not copy, modify, adapt, translate, reverse engineer, republish, distribute, license or create derivative works from any part of the Website, or use automated means to extract content, except as permitted by applicable law or with the Company's prior written consent.",
      },
      { kind: "subheading", value: "Trademarks" },
      {
        kind: "clause",
        number: "15.4",
        value:
          "The Aero Intelli name, logo and any associated marks may not be used without the Company's prior written consent. Third-party marks appearing on the Website remain the property of their respective owners.",
      },
    ],
  },
  {
    id: "user-content-and-feedback",
    number: "16",
    title: "User Content and Feedback",
    tocLabel: "User Content and Feedback",
    blocks: [
      { kind: "subheading", value: "Submission" },
      {
        kind: "clause",
        number: "16.1",
        value:
          "Where the Website allows you to submit enquiries, documents, images, comments or feedback, you are responsible for the content you submit and for ensuring that it is lawful and accurate.",
      },
      { kind: "subheading", value: "Rights and Permissions" },
      {
        kind: "clause",
        number: "16.2",
        value:
          "You retain ownership of your User Content. You grant the Company a non-exclusive, royalty-free right to use, store and reproduce that content to the extent necessary to respond to your enquiry, provide the relevant service and comply with applicable law.",
      },
      {
        kind: "clause",
        number: "16.3",
        value:
          "Where you submit suggestions or feedback about the Website, products or services, the Company may use that feedback to improve its offerings without obligation to you, unless separately agreed in writing.",
      },
      { kind: "subheading", value: "Moderation and Removal" },
      {
        kind: "clause",
        number: "16.4",
        value:
          "The Company may review, decline to publish, edit for length or clarity, or remove User Content that it reasonably considers unlawful, misleading, infringing, offensive or in breach of these Terms.",
      },
      {
        kind: "clause",
        number: "16.5",
        value:
          "You should not submit confidential or sensitive personal information through the Website except where a form or channel is expressly provided for that purpose.",
      },
    ],
  },
  {
    id: "prohibited-activities",
    number: "17",
    title: "Prohibited Activities",
    tocLabel: "Prohibited Activities",
    blocks: [
      { kind: "text", value: "You must not, in connection with the Website:" },
      {
        kind: "list",
        value: [
          "use the Website for any unlawful, fraudulent or deceptive purpose;",
          "attempt to gain unauthorised access to the Website, any account, server, system or network, or bypass any security or authentication measure;",
          "introduce any virus, malicious code, or other material designed to disrupt, damage or impair the Website or any connected system;",
          "impose an unreasonable load on the Website's infrastructure, or use automated tools to scrape, harvest or index content where such use is restricted;",
          "infringe the intellectual-property rights, privacy rights or confidentiality obligations of the Company or any third party;",
          "impersonate any person or organisation, or misrepresent your affiliation with any person or organisation;",
          "misuse enquiry or account functionality to transmit unsolicited commercial communications; or",
          "use information obtained from the Website to develop a competing product or service in breach of applicable law or contract.",
        ],
      },
      {
        kind: "clause",
        number: "17.1",
        value:
          "The Company may investigate suspected breaches of this section, restrict or withdraw access, and report conduct to the appropriate authorities where required by law.",
      },
    ],
  },
  {
    id: "third-party-services-and-links",
    number: "18",
    title: "Third-Party Services and Links",
    tocLabel: "Third-Party Services and Links",
    blocks: [
      {
        kind: "clause",
        number: "18.1",
        value:
          "The Website may use or link to third-party services, including hosting and cloud providers, analytics, payment gateways, maps, embedded media and social platforms.",
      },
      {
        kind: "clause",
        number: "18.2",
        value:
          "Third-party services are governed by the terms and privacy policies of the relevant provider. The Company does not control those services and is not responsible for their content, availability or practices.",
      },
      {
        kind: "clause",
        number: "18.3",
        value:
          "A link to an external website does not imply endorsement. You should review the terms of any third-party service before using it.",
      },
    ],
  },
  {
    id: "disclaimers",
    number: "19",
    title: "Disclaimers",
    tocLabel: "Disclaimers",
    blocks: [
      {
        kind: "clause",
        number: "19.1",
        value:
          "The Website and its content are provided for general information. While the Company takes reasonable care in preparing and maintaining the Website, it does not warrant that the content is complete, current or free from error at all times.",
      },
      {
        kind: "clause",
        number: "19.2",
        value:
          "Content on the Website does not constitute professional, engineering, agronomic, veterinary, financial or legal advice, and should not be relied upon as the sole basis for any operational, investment or compliance decision.",
      },
      {
        kind: "clause",
        number: "19.3",
        value:
          "The Company does not warrant that access to the Website will be uninterrupted or free from defects, or that the Website or the servers that make it available are free from harmful components, although reasonable measures are taken to that end.",
      },
      {
        kind: "clause",
        number: "19.4",
        value:
          "Statements regarding future capability, development or performance are indicative of intention and are not commitments or guarantees.",
      },
      {
        kind: "clause",
        number: "19.5",
        value:
          "Nothing in this section excludes or limits any liability or right that cannot be excluded or limited under applicable law, including under the Consumer Protection Act, 2019.",
      },
    ],
  },
  {
    id: "limitation-of-liability",
    number: "20",
    title: "Limitation of Liability",
    tocLabel: "Limitation of Liability",
    blocks: [
      {
        kind: "clause",
        number: "20.1",
        value:
          "To the extent permitted by applicable law, the Company is not liable for indirect, incidental, special or consequential loss, or for loss of profit, revenue, production, crop, stock, data or goodwill, arising from your access to or use of the Website.",
      },
      {
        kind: "clause",
        number: "20.2",
        value:
          "The Company's liability arising in connection with the supply of any product, system or service is as set out in the applicable Project Documents or service agreement for that supply.",
      },
      {
        kind: "clause",
        number: "20.3",
        value:
          "Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot lawfully be excluded or limited under Indian law, including under the product-liability provisions of the Consumer Protection Act, 2019.",
      },
    ],
  },
  {
    id: "indemnification",
    number: "21",
    title: "Indemnification",
    tocLabel: "Indemnification",
    blocks: [
      {
        kind: "clause",
        number: "21.1",
        value:
          "You agree to indemnify the Company against losses, claims, damages and reasonable costs arising from your breach of these Terms, your misuse of the Website, your infringement of the rights of a third party, or your violation of applicable law.",
      },
      {
        kind: "clause",
        number: "21.2",
        value:
          "The Company will notify you of any claim to which this indemnity applies, allow you a reasonable opportunity to participate in its defence, and will not settle such a claim in a manner that imposes an obligation on you without your consent, such consent not to be unreasonably withheld.",
      },
      {
        kind: "clause",
        number: "21.3",
        value:
          "This indemnity does not apply to the extent that the loss arises from the Company's own breach, negligence or wrongful act.",
      },
    ],
  },
  {
    id: "privacy-and-data-protection",
    number: "22",
    title: "Privacy and Data Protection",
    tocLabel: "Privacy and Data Protection",
    blocks: [
      {
        kind: "clause",
        number: "22.1",
        value:
          "The Company's handling of personal data is described in the Aero Intelli Privacy Policy, which forms part of these Terms by reference. These Terms do not restate that document.",
      },
      {
        kind: "linkList",
        value: [{ label: "Privacy Policy", href: "/privacy-policy" }],
      },
      {
        kind: "clause",
        number: "22.2",
        value:
          "The Company processes personal data in accordance with applicable Indian law, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 as and when its provisions come into force.",
      },
      {
        kind: "clause",
        number: "22.3",
        value:
          "By using the Website, you acknowledge that information you submit will be processed as described in the Privacy Policy.",
      },
    ],
  },
  {
    id: "suspension-and-termination",
    number: "23",
    title: "Suspension and Termination",
    tocLabel: "Suspension and Termination",
    blocks: [
      {
        kind: "clause",
        number: "23.1",
        value:
          "The Company may suspend or withdraw access to the Website, or to any account or feature, where it reasonably believes that these Terms have been breached, that security is at risk, or that suspension is required by applicable law.",
      },
      {
        kind: "clause",
        number: "23.2",
        value:
          "You may discontinue use of the Website at any time, and may request closure of any account you hold by contacting the Company.",
      },
      {
        kind: "clause",
        number: "23.3",
        value:
          "Termination does not affect rights or obligations accrued before termination. The sections concerning intellectual property, disclaimers, limitation of liability, indemnification, governing law and any other provision intended to survive will continue in effect.",
      },
      {
        kind: "clause",
        number: "23.4",
        value:
          "Suspension of Website access does not by itself terminate any separate contract for the supply of products or services, which is governed by its own terms.",
      },
    ],
  },
  {
    id: "changes-to-these-terms",
    number: "24",
    title: "Changes to These Terms",
    tocLabel: "Changes to These Terms",
    blocks: [
      {
        kind: "clause",
        number: "24.1",
        value:
          "The Company may revise these Terms to reflect changes to the Website, its services, its business or applicable law. The revised Terms take effect when published on this page.",
      },
      {
        kind: "clause",
        number: "24.2",
        value:
          "Where a change is material, the Company will take reasonable steps to bring it to the attention of users, which may include a notice on the Website or, where an account exists, a direct communication.",
      },
      {
        kind: "clause",
        number: "24.3",
        value:
          "The version and dates applicable to this document are shown at the top of this page and are reproduced below for reference.",
      },
      {
        kind: "list",
        value: [
          `Effective Date: ${termsMeta.effectiveDate}`,
          `Last Updated: ${termsMeta.lastUpdated}`,
          `Version: ${termsMeta.version}`,
        ],
      },
    ],
  },
  {
    id: "governing-law-and-dispute-resolution",
    number: "25",
    title: "Governing Law and Dispute Resolution",
    tocLabel: "Governing Law and Disputes",
    blocks: [
      {
        kind: "clause",
        number: "25.1",
        value:
          "These Terms and any dispute arising out of or in connection with them, including their existence, validity or termination, are governed by the laws of India.",
      },
      {
        kind: "clause",
        number: "25.2",
        value:
          "The parties will first attempt to resolve any dispute amicably through good-faith discussion following written notice of the dispute.",
      },
      {
        kind: "clause",
        number: "25.3",
        value:
          "Subject to clause 25.2, disputes are subject to the jurisdiction of the competent courts in India. Nothing in this section affects any statutory forum available to a consumer under the Consumer Protection Act, 2019.",
      },
      {
        kind: "callout",
        value:
          "The seat, venue and dispute-resolution mechanism above are stated in general terms and should be confirmed by qualified Indian legal counsel, together with any arbitration clause the Company intends to adopt, before these Terms are relied upon.",
      },
    ],
  },
  {
    id: "severability",
    number: "26",
    title: "Severability",
    tocLabel: "Severability",
    blocks: [
      {
        kind: "clause",
        number: "26.1",
        value:
          "If any provision of these Terms is held to be invalid, unlawful or unenforceable, that provision will be severed or read down to the minimum extent necessary, and the remaining provisions will continue in full force and effect.",
      },
      {
        kind: "clause",
        number: "26.2",
        value:
          "A failure or delay by the Company in exercising any right under these Terms does not operate as a waiver of that right or of any other right.",
      },
    ],
  },
  {
    id: "entire-agreement",
    number: "27",
    title: "Entire Agreement",
    tocLabel: "Entire Agreement",
    blocks: [
      {
        kind: "clause",
        number: "27.1",
        value:
          "These Terms, together with the Privacy Policy and any other policy referenced within them, constitute the entire agreement between you and the Company in relation to your use of the Website.",
      },
      {
        kind: "clause",
        number: "27.2",
        value:
          "Where the Company supplies products, systems or services under separate Project Documents or a service agreement, those documents govern that supply. In the event of a conflict in relation to that supply, the order of precedence is: the executed agreement, then the purchase order, then the quotation and technical specification, then these Terms.",
      },
      {
        kind: "clause",
        number: "27.3",
        value:
          "These Terms do not create any partnership, agency, joint venture or employment relationship between you and the Company.",
      },
    ],
  },
  {
    id: "contact-information",
    number: "28",
    title: "Contact Information",
    tocLabel: "Contact Information",
    blocks: [
      {
        kind: "text",
        value: "For questions regarding these Terms of Use, please contact:",
      },
      {
        kind: "list",
        value: [
          "Aero Intelli Private Limited",
          "Email: contact@aerointelli.com",
          "Registered Office: Bhavani Nagar Colony, Kushiguda, ECIL, Secunderabad, Hyderabad, Telangana - 500062, India",
        ],
      },
    ],
  },
];
