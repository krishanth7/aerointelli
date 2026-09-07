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
    label: "Technology",
    href: "/technology",
    groups: [
      {
        title: "Systems",
        items: [
          {
            label: "Intelligence RAS",
            href: "/technology/intelligence-ras",
            description: "Recirculating aquaculture under continuous measurement and control.",
          },
          {
            label: "Hydroponics",
            href: "/technology/hydroponics",
            description: "Soil-free cultivation with managed nutrient delivery.",
          },
          {
            label: "Aeroponics",
            href: "/technology/aeroponics",
            description: "Root-zone misting for crops grown without a substrate.",
          },
        ],
      },
      {
        title: "Intelligence",
        items: [
          {
            label: "Farm AI",
            href: "/technology/farm-ai",
            description: "Models that turn sensor data into an operating decision.",
          },
          {
            label: "Automation",
            href: "/technology/automation",
            description: "Control logic that acts on the readings without waiting for a person.",
          },
        ],
      },
    ],
  },
  {
    type: "menu",
    label: "Solutions",
    href: "/solutions",
    groups: [
      {
        title: "Aquaculture",
        items: [
          {
            label: "Precision Aquaculture",
            href: "/solutions/precision-aquaculture",
            description: "Water quality, feeding and stock health held to a measured standard.",
          },
        ],
      },
      {
        title: "Agriculture",
        items: [
          {
            label: "Controlled Environment Farming",
            href: "/solutions/controlled-environment-farming",
            description: "Growing inside a boundary where climate is set rather than endured.",
          },
          {
            label: "Commercial Farm",
            href: "/solutions/commercial-farm",
            description: "Production-scale deployments engineered to a site.",
          },
          {
            label: "Smart Agriculture",
            href: "/solutions/smart-agriculture",
            description: "Instrumentation and control applied to conventional cultivation.",
          },
        ],
      },
    ],
  },
  {
    type: "menu",
    label: "Research",
    href: "/research",
    groups: [
      {
        title: "Programme",
        items: [
          {
            label: "R&D",
            href: "/research/r-and-d",
            description: "What we are building and testing.",
          },
          {
            label: "Publications",
            href: "/research/publications",
            description: "Written work released for outside scrutiny.",
          },
        ],
      },
      {
        title: "Direction",
        items: [
          {
            label: "Intelligence Engine",
            href: "/research/intelligence-engine",
            description: "The reasoning layer beneath the products.",
          },
          {
            label: "Future Technologies",
            href: "/research/future-technologies",
            description: "Lines of enquiry not yet in a product.",
          },
        ],
      },
    ],
  },
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
          {
            label: "Aeroponics",
            href: "/knowledge/aeroponics",
            description: "Misting cycles, root-zone conditions and equipment.",
          },
        ],
      },
      {
        title: "Tools",
        items: [
          {
            label: "Calculators",
            // Root-level, not under /knowledge. The Knowledge tree is held out
            // of search while it is unreviewed; these tools are live.
            href: "/calculators",
            description: "Sizing and load calculations for planning a system.",
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
