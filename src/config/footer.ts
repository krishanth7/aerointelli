export type FooterLink = {
  label: string;
  href: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export const footerNavigation: FooterSection[] = [
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
  { label: "Delivery & Shipping Policy", href: "/legal/shipping-policy" },
];
