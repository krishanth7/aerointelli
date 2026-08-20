import { ComingSoonButton } from "@/components/shared/ComingSoonButton";
import { headerCta } from "@/config/navigation";

/**
 * The header CTA while the store is closed.
 *
 * Thin wrapper over the shared notice: this one exists only to bind the store's
 * copy and its follow-up action, so the header call site stays a single tag.
 */
export function StoreNotice({ className }: { className: string }) {
  return (
    <ComingSoonButton
      className={className}
      label={headerCta.label}
      title={headerCta.comingSoonTitle}
      body={headerCta.comingSoonBody}
      action={{ href: "/contact?type=products#enquiry-form", label: "Ask about a product" }}
    />
  );
}
