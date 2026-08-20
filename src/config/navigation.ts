export type NavLeaf = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  title: string;
  items: NavLeaf[];
};

export type NavItem =
  | { type: "link"; label: string; href: string }
  | { type: "menu"; label: string; href: string; groups: NavGroup[] };

export const navigationItems: NavItem[] = [
  { type: "link", label: "Home", href: "/" },
  { type: "link", label: "About", href: "/about" },
  { type: "link", label: "Contact", href: "/contact" },
];

export const headerCta = {
  label: "Shop Now",
  href: "/products",
  /**
   * The store is not open yet.
   *
   * While this is true the header CTA does not navigate — it opens a notice
   * saying the store is launching soon. Flip it to `false` on the day the
   * product tree goes live and the button becomes an ordinary link to `href`
   * again; nothing else has to change.
   */
  comingSoon: true,
  comingSoonTitle: "The store is launching soon",
  comingSoonBody:
    "Aero Intelli products are not available to order yet. Until then, tell us what you are looking for and we will come back to you directly.",
};
