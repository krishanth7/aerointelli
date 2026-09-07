export type FooterLink = {
  label: string;
  href: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

/**
 * Footer sitemap.
 *
 * Mirrors `navigationItems` in `src/config/navigation.ts`. A footer that lists
 * a different set of destinations than the header is a footer nobody trusts, so
 * when a section is added to one it belongs in the other.
 *
 * Every href here resolves to a real route — the same rule the header follows.
 */
export const footerNavigation: FooterSection[] = [
  {
    title: "Technology",
    links: [
      { label: "Intelligence RAS", href: "/technology/intelligence-ras" },
      { label: "Hydroponics", href: "/technology/hydroponics" },
      { label: "Aeroponics", href: "/technology/aeroponics" },
      { label: "Farm AI", href: "/technology/farm-ai" },
      { label: "Automation", href: "/technology/automation" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Precision Aquaculture", href: "/solutions/precision-aquaculture" },
      {
        label: "Controlled Environment Farming",
        href: "/solutions/controlled-environment-farming",
      },
      { label: "Commercial Farm", href: "/solutions/commercial-farm" },
      { label: "Smart Agriculture", href: "/solutions/smart-agriculture" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "R&D", href: "/research/r-and-d" },
      { label: "Publications", href: "/research/publications" },
      { label: "Intelligence Engine", href: "/research/intelligence-engine" },
      { label: "Future Technologies", href: "/research/future-technologies" },
    ],
  },
  {
    title: "Knowledge",
    links: [
      { label: "RAS Knowledge", href: "/knowledge/ras" },
      { label: "Aquaculture", href: "/knowledge/aquaculture" },
      { label: "Hydroponics", href: "/knowledge/hydroponics" },
      { label: "Aeroponics", href: "/knowledge/aeroponics" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export type SocialPlatform = "instagram" | "youtube" | "x";

export const footerSocials: { platform: SocialPlatform; label: string; href: string }[] = [
  { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/aerointelli" },
  { platform: "youtube", label: "YouTube", href: "https://www.youtube.com/@aerointelli" },
  { platform: "x", label: "X", href: "https://x.com/aerointelli" },
];

export const footerContact = {
  email: "contact@aerointelli.com",
  location: "Hyderabad, India",
};

export const footerLegalLinks: FooterLink[] = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms-of-use" },
  { label: "Cookies", href: "/cookie-policy" },
  // Matches the page title and the reference in Terms clause 11.4. Two names
  // for one document reads as carelessness on a legal page.
  { label: "Shipping & Delivery", href: "/legal/shipping-policy" },
];
