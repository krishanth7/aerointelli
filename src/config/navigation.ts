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

/**
 * Primary navigation.
 *
 * Every `href` below resolves to a real route. That is not a formality: a
 * dropdown that lists a destination the router cannot serve produces a 404 from
 * the site's own header, which is worse than not listing it at all. Where a
 * page has no content yet it renders the shared "in preparation" placeholder,
 * so the link is honest about its state rather than broken.
 *
 * When adding an entry here, create the route in the same change.
 */
export const navigationItems: NavItem[] = [
  { type: "link", label: "Home", href: "/" },
  {
    type: "menu",
    label: "Knowledge",
    href: "/knowledge",
    groups: [
      {
        title: "Disciplines",
        items: [
          {
            label: "RAS Knowledge",
            href: "/knowledge/ras",
            description: "How recirculating systems work, in plain terms.",
          },
          {
            label: "Aquaculture",
            href: "/knowledge/aquaculture",
            description: "Fundamentals of raising aquatic stock.",
          },
          {
            label: "Hydroponics",
            href: "/knowledge/hydroponics",
            description: "Nutrient solution, media and system types.",
          },
        ],
      },
    ],
  },
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
