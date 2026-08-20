export type LegalBlock =
  | { kind: "text"; value: string }
  | { kind: "subheading"; value: string }
  | { kind: "list"; value: string[] }
  | { kind: "callout"; value: string }
  /** Hierarchical legal clause, e.g. number "3.1" or "3.3(a)". */
  | { kind: "clause"; number: string; value: string }
  | { kind: "linkList"; value: { label: string; href: string }[] };

export type LegalSection = {
  id: string;
  number: string;
  title: string;
  tocLabel: string;
  blocks: LegalBlock[];
};

export type LegalDocumentMeta = {
  company: string;
  effectiveDate: string;
  lastUpdated: string;
  version: string;
  jurisdiction: string;
  contactEmail: string;
};
