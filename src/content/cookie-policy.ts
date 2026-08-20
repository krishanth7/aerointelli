import { legalContactLines } from "@/config/legalEntity";
import type { LegalBlock, LegalDocumentMeta, LegalSection } from "@/content/legal-types";

export const cookieMeta: LegalDocumentMeta = {
  company: "Aero Intelli Private Limited",
  effectiveDate: "20 August 2026",
  lastUpdated: "20 August 2026",
  // 2.0, not 1.1. Section 10 was factually wrong about third parties, and a
  // correction to a statement a reader may have relied on is a new version of
  // the document, not a revision of the old one.
  version: "2.0",
  jurisdiction: "India",
  contactEmail: "contact@aerointelli.com",
};

export const cookieSummary =
  "This Cookie Policy explains how Aero Intelli Private Limited uses cookies and similar technologies on its website, and how you can control them.";

export const cookieIntro: LegalBlock[] = [
  {
    kind: "text",
    value:
      "Aero Intelli is committed to being precise about what its website does and does not do. This policy describes the technologies the website uses, the purpose each one serves, and the controls available to you.",
  },
  {
    kind: "callout",
    value:
      "As at the date of this policy, the Aero Intelli website does not set cookies and does not use browser storage such as localStorage, sessionStorage or IndexedDB. No analytics, advertising, tag-management or tracking technology is deployed. There is therefore nothing for you to accept, reject or configure at present, and no consent banner is shown.",
  },
  {
    kind: "text",
    value:
      "That statement is about cookies and browser storage, and it is limited to them on purpose. It is not a claim that no third party is involved in operating the website. Two are: the website is hosted and served by Cloudflare, and an enquiry submitted through the contact form is transmitted by EmailJS. Neither sets a cookie, but both necessarily receive data, and Section 10 sets out exactly what. An earlier version of this policy stated more broadly that no third-party service was embedded in these pages. That was inaccurate, and it has been corrected here rather than removed quietly.",
  },
];

export const cookieSections: LegalSection[] = [
  {
    id: "what-are-cookies",
    number: "1",
    title: "What Are Cookies?",
    tocLabel: "What Are Cookies?",
    blocks: [
      {
        kind: "clause",
        number: "1.1",
        value:
          "A cookie is a small text file that a website asks your browser to store on your device. When you return, the browser can send that file back, allowing the website to recognise the session, remember a setting or maintain security.",
      },
      {
        kind: "clause",
        number: "1.2",
        value:
          "Cookies are described as first-party where they are set by the website you are visiting, and third-party where they are set by another organisation whose service is embedded in that website.",
      },
      {
        kind: "clause",
        number: "1.3",
        value:
          "A session cookie is removed when the browser closes. A persistent cookie remains for a defined period or until it is deleted.",
      },
    ],
  },
  {
    id: "how-aero-intelli-uses-cookies",
    number: "2",
    title: "How Aero Intelli Uses Cookies",
    tocLabel: "How Aero Intelli Uses Cookies",
    blocks: [
      {
        kind: "clause",
        number: "2.1",
        value:
          "The Aero Intelli website is currently a corporate information website. It presents information about the company, its technology, and its work in intelligent agriculture, recirculating aquaculture, hydroponics, aeroponics and water systems.",
      },
      {
        kind: "clause",
        number: "2.2",
        value:
          "Delivering that content does not require cookies. Accordingly, the website does not set any cookie of its own, and does not read or write browser storage.",
      },
      {
        kind: "clause",
        number: "2.3",
        value:
          "If cookies or similar technologies are introduced in future — for example to support an account area, an enquiry workflow, a payment process or website analytics — this policy will be updated before or at the time those technologies are deployed, and an appropriate consent mechanism will be provided where required.",
      },
      {
        kind: "clause",
        number: "2.4",
        value:
          "India has no standalone cookie legislation. Where a cookie or similar technology processes personal data, the relevant framework is the Digital Personal Data Protection Act, 2023, together with the Information Technology Act, 2000 and the rules made under it. Consent under that framework must be free, specific, informed, unconditional and unambiguous, and must be as easy to withdraw as to give. Aero Intelli's position is that no optional technology will be loaded before that standard is met.",
      },
    ],
  },
  {
    id: "cookies-and-similar-technologies",
    number: "3",
    title: "Cookies and Similar Technologies",
    tocLabel: "Similar Technologies",
    blocks: [
      {
        kind: "clause",
        number: "3.1",
        value:
          "Technologies other than cookies can perform comparable functions. These include localStorage and sessionStorage, IndexedDB, tracking pixels, software development kits embedded in an application, and device or browser fingerprinting.",
      },
      {
        kind: "clause",
        number: "3.2",
        value:
          "These technologies are not cookies and behave differently, but they raise similar considerations. Where this policy refers to cookies, it should be read as including similar technologies where relevant.",
      },
      {
        kind: "clause",
        number: "3.3",
        value:
          "The Aero Intelli website does not store or read information on your device using any of these technologies, and does not use fingerprinting of any kind.",
      },
      {
        kind: "clause",
        number: "3.4",
        value:
          "One qualification is required, because a software development kit is named above. The contact form loads a component supplied by EmailJS in order to transmit your enquiry, and that component runs in your browser. It does not store anything on your device and does not track you across websites, but it does mean your enquiry and your IP address reach EmailJS directly. It is described in Section 10.",
      },
    ],
  },
  {
    id: "types-of-cookies",
    number: "4",
    title: "Types of Cookies",
    tocLabel: "Types of Cookies",
    blocks: [
      {
        kind: "text",
        value:
          "The sections that follow describe the four categories used across the industry. Each category records whether it is currently in use on this website. Categories are documented here so that the framework and controls are already defined if a technology is introduced later.",
      },
    ],
  },
  {
    id: "essential-cookies",
    number: "5",
    title: "Essential Cookies",
    tocLabel: "Essential Cookies",
    blocks: [
      {
        kind: "clause",
        number: "5.1",
        value:
          "Essential cookies are those without which a website cannot operate securely or correctly. Typical purposes include maintaining a session, protecting against cross-site request forgery, load balancing, and recording a consent choice.",
      },
      {
        kind: "clause",
        number: "5.2",
        value:
          "Status on this website: not currently used. The website has no login, no session state and no consent record to store, so no essential cookie is set.",
      },
      {
        kind: "clause",
        number: "5.3",
        value:
          "Where an essential technology is introduced, it will be documented in the cookie inventory below and identified as always active, because disabling it would prevent the relevant function from working.",
      },
    ],
  },
  {
    id: "preference-cookies",
    number: "6",
    title: "Preference Cookies",
    tocLabel: "Preference Cookies",
    blocks: [
      {
        kind: "clause",
        number: "6.1",
        value:
          "Preference cookies remember choices you make, such as a language, a region or an interface setting, so that they persist across visits.",
      },
      {
        kind: "clause",
        number: "6.2",
        value:
          "Status on this website: not currently used. The website does not store any interface preference on your device.",
      },
    ],
  },
  {
    id: "analytics-cookies",
    number: "7",
    title: "Analytics Cookies",
    tocLabel: "Analytics Cookies",
    blocks: [
      {
        kind: "clause",
        number: "7.1",
        value:
          "Analytics technologies help a website operator understand, in aggregate, which pages are visited, how visitors navigate, how the site performs and where errors occur.",
      },
      {
        kind: "clause",
        number: "7.2",
        value:
          "Status on this website: not currently used. No analytics product, measurement script or tag-management container is installed on this website.",
      },
      {
        kind: "clause",
        number: "7.3",
        value:
          "If analytics is introduced, the provider and the specific technologies it uses will be named in this policy. Aero Intelli will not describe an analytics provider in this document unless that provider is actually deployed.",
      },
    ],
  },
  {
    id: "marketing-cookies",
    number: "8",
    title: "Marketing and Advertising Cookies",
    tocLabel: "Marketing Cookies",
    blocks: [
      {
        kind: "clause",
        number: "8.1",
        value:
          "Marketing technologies are used to measure advertising campaigns, attribute responses, build audiences or deliver targeted advertising.",
      },
      {
        kind: "clause",
        number: "8.2",
        value:
          "Status on this website: not currently used. Aero Intelli does not operate advertising pixels, remarketing tags or cross-site tracking on this website, and does not sell or share website data for advertising purposes.",
      },
    ],
  },
  {
    id: "cookie-inventory",
    number: "9",
    title: "Cookie Inventory",
    tocLabel: "Cookie Inventory",
    blocks: [
      {
        kind: "text",
        value:
          "The table below is generated from Aero Intelli's cookie registry, which is maintained alongside the website itself. This keeps the policy aligned with what the website actually does rather than with a template.",
      },
    ],
  },
  {
    id: "third-party-technologies",
    number: "10",
    title: "Third-Party Technologies",
    tocLabel: "Third-Party Technologies",
    blocks: [
      {
        kind: "clause",
        number: "10.1",
        value:
          "Websites commonly rely on third parties for analytics, authentication, payments, maps, embedded video, social widgets, customer support and content delivery. Such services frequently set their own cookies.",
      },
      {
        kind: "clause",
        number: "10.2",
        value:
          "Status on this website: no third party sets a cookie or writes browser storage here. There is no map, no embedded video player, no social media widget, no chat tool, no payment gateway, no authentication provider, no analytics product and no advertising technology.",
      },
      {
        kind: "clause",
        number: "10.3",
        value:
          "Two third parties are nevertheless involved in operating the website, and are named here in full because a policy that describes them only as \"service providers\" tells you nothing you can act on.",
      },
      {
        kind: "clause",
        number: "10.3(a)",
        value:
          "EmailJS transmits enquiries submitted through the contact form. The submission is sent from your browser directly to EmailJS, which means the service receives what you typed into the form and can also see your IP address. It is used only when you actively submit the form. If you never submit it, no data reaches EmailJS. It sets no cookie and stores nothing on your device.",
      },
      {
        kind: "clause",
        number: "10.3(b)",
        value:
          "Cloudflare hosts and serves this website. Every request for a page necessarily passes through it, so it processes technical request information including your IP address, your browser's user-agent string and the address of the page requested, in order to deliver the page and protect the site against attack. This happens on the server side and sets nothing on your device.",
      },
      {
        kind: "clause",
        number: "10.4",
        value:
          "Both services are located outside India, so using this website involves a transfer of that data outside India. The Privacy Policy sets out what each service receives and why.",
      },
      {
        kind: "clause",
        number: "10.5",
        value:
          "Links to Aero Intelli's social media profiles are ordinary outbound links. They do not load third-party content into this website and set nothing on your device unless you choose to follow the link, at which point the destination platform's own policies apply.",
      },
    ],
  },
  {
    id: "your-choices-and-controls",
    number: "11",
    title: "Your Choices and Controls",
    tocLabel: "Your Choices and Controls",
    blocks: [
      {
        kind: "clause",
        number: "11.1",
        value:
          "Because no optional technology is deployed, there is currently no preference centre and no consent banner on this website. Presenting one would ask you to make a choice that has no effect.",
      },
      {
        kind: "clause",
        number: "11.2",
        value:
          "If optional cookies or similar technologies are introduced, Aero Intelli will provide a control that allows you to accept optional categories, reject optional categories, or select categories individually, with rejection presented as clearly as acceptance.",
      },
      {
        kind: "callout",
        value:
          "Aero Intelli will not use interface design to steer you toward accepting optional technologies. Where a choice is offered, accepting and rejecting will be equally easy to find and equally easy to use.",
      },
      {
        kind: "clause",
        number: "11.3",
        value:
          "Any such control will be reachable at any time from the website footer, so that a decision can be reviewed or changed without having to locate the original notice.",
      },
    ],
  },
  {
    id: "browser-controls",
    number: "12",
    title: "Managing Cookies Through Your Browser",
    tocLabel: "Browser Controls",
    blocks: [
      {
        kind: "text",
        value:
          "Independently of any website control, browsers generally provide settings that allow you to:",
      },
      {
        kind: "list",
        value: [
          "view the cookies and storage held for a particular site;",
          "block cookies generally, or block third-party cookies only;",
          "delete existing cookies and clear stored site data;",
          "clear browsing data automatically when the browser closes; and",
          "browse in a private or incognito window, which discards site data at the end of the session.",
        ],
      },
      {
        kind: "clause",
        number: "12.1",
        value:
          "These settings are found in the privacy or security section of your browser, and the exact steps differ between browsers and versions.",
      },
      {
        kind: "clause",
        number: "12.2",
        value:
          "Browser controls operate on your device and are not equivalent to a website consent mechanism. Blocking cookies on other websites may affect features such as sign-in, saved preferences, security checks and site performance. It will not affect this website, which does not rely on cookies.",
      },
    ],
  },
  {
    id: "do-not-track",
    number: "13",
    title: "Do Not Track Signals",
    tocLabel: "Do Not Track",
    blocks: [
      {
        kind: "clause",
        number: "13.1",
        value:
          "Some browsers can transmit a Do Not Track signal. There is no uniform industry standard governing how such signals must be interpreted.",
      },
      {
        kind: "clause",
        number: "13.2",
        value:
          "This website does not track visitors across websites or over time, so no tracking behaviour changes according to such a signal. If tracking technologies are introduced, Aero Intelli's position on these signals will be stated in this policy at that time.",
      },
    ],
  },
  {
    id: "children",
    number: "14",
    title: "Children",
    tocLabel: "Children",
    blocks: [
      {
        kind: "clause",
        number: "14.1",
        value:
          "This website presents corporate, technical and commercial information and is not directed at children.",
      },
      {
        kind: "clause",
        number: "14.2",
        value:
          "Aero Intelli's position on the personal data of children is set out in the Privacy Policy, which should be read alongside this document.",
      },
    ],
  },
  {
    id: "related-documents",
    number: "15",
    title: "Privacy Policy and Terms of Use",
    tocLabel: "Related Documents",
    blocks: [
      {
        kind: "clause",
        number: "15.1",
        value:
          "Cookie technologies can interact with information addressed in the Privacy Policy, which explains how Aero Intelli handles personal data more generally.",
      },
      {
        kind: "clause",
        number: "15.2",
        value:
          "Your use of this website is also governed by the Terms of Use.",
      },
      {
        kind: "linkList",
        value: [
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Terms of Use", href: "/terms-of-use" },
        ],
      },
    ],
  },
  {
    id: "changes-to-this-policy",
    number: "16",
    title: "Changes to This Cookie Policy",
    tocLabel: "Changes to This Policy",
    blocks: [
      {
        kind: "clause",
        number: "16.1",
        value:
          "This policy will be updated when the technologies used by the website change, or when a change is required by applicable law. The revised policy takes effect when published on this page.",
      },
      {
        kind: "clause",
        number: "16.2",
        value:
          "Where a material change is made — in particular the introduction of an optional technology — Aero Intelli will take reasonable steps to bring it to the attention of visitors and, where required, obtain consent before that technology is loaded.",
      },
      {
        kind: "list",
        value: [
          `Effective Date: ${cookieMeta.effectiveDate}`,
          `Last Updated: ${cookieMeta.lastUpdated}`,
          `Version: ${cookieMeta.version}`,
        ],
      },
    ],
  },
  {
    id: "contact",
    number: "17",
    title: "Contact",
    tocLabel: "Contact",
    blocks: [
      {
        kind: "text",
        value:
          "For questions about Aero Intelli's use of cookies and similar technologies, contact:",
      },
      {
        kind: "list",
        value: legalContactLines("Cookies and Website Technologies"),
      },
    ],
  },
];
