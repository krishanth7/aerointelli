import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { buildAlternates, defaultLocale, siteName, siteUrl } from "@/config/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  /**
   * Every relative URL in any page's metadata — canonical, alternate, Open
   * Graph image — is resolved against this. Without it Next emitted the raw
   * relative string, which was happening in production: `/contact` was
   * publishing `/contact` as its own canonical, and a canonical that is not
   * absolute tells a crawler nothing.
   */
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Engineering the Future of Food, Water & Sustainability`,
    template: `%s | ${siteName}`,
  },
  description:
    "Aero Intelli engineers intelligent aquaculture, controlled environment agriculture, water technology and automation systems.",
  applicationName: siteName,
  alternates: buildAlternates("/"),
  openGraph: {
    type: "website",
    siteName,
    locale: defaultLocale.tag.replace("-", "_"),
    url: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/**
 * Viewport is its own export in this version of Next, not a key inside
 * `metadata` — putting it there is ignored silently.
 *
 * `width=device-width, initial-scale=1` is the default and is what makes the
 * mobile-first CSS apply at all: without it a phone renders at a ~980px virtual
 * width and shrinks the result, which is the classic "responsive site that
 * isn't". `maximumScale` and `userScalable` are deliberately left alone —
 * blocking pinch-zoom is an accessibility failure and Lighthouse flags it.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16191b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The region matters for search: this site targets India, and `en` alone
    // does not say so. It also has to match the `hreflang` tag emitted for the
    // default locale, or the two signals contradict each other.
    <html lang={defaultLocale.tag} className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {/* Outside `main`, and above it. The trail describes where `main` sits
            in the site rather than being part of the page's own content, and
            keeping it out means a skip-to-content link still lands on the
            page proper. */}
        <Breadcrumbs />
        <main className="flex-1">{children}</main>
        <Footer />
        <OrganizationSchema />
      </body>
    </html>
  );
}
