export type DevelopmentStage =
  | "Concept"
  | "Research"
  | "Development"
  | "Testing"
  | "Validation"
  | "Completed"
  | "Published";

export type ResearchDomainId =
  | "aquaculture"
  | "cultivation"
  | "water"
  | "ai"
  | "automation"
  | "sustainability";

export interface ResearchProgram {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  domain: ResearchDomainId;
  description: string;
  focusTopics: string[];
  scientificApproach: string;
  status: string;
  ctaText: string;
  ctaHref: string;
}

export interface ResearchProject {
  id: string;
  code: string;
  title: string;
  domain: ResearchDomainId;
  programTitle: string;
  researchQuestion: string;
  objective: string;
  stage: DevelopmentStage;
  technicalApproach: string;
  methodology: string;
  technologies: string[];
  findings?: string;
  limitations: string;
  updatedAt: string;
  relatedSlug?: string;
}

export type PublicationType =
  | "Technical Note"
  | "Engineering Report"
  | "Whitepaper"
  | "Research Brief"
  | "Article";

export interface Publication {
  id: string;
  title: string;
  year: string;
  type: PublicationType;
  domain: string;
  abstract: string;
  authors: string[];
  readTime: string;
  href: string;
}

export interface InfrastructureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  technicalSpecs: { label: string; value: string }[];
  status: "Operational" | "Active Research Cell" | "Pilot Facility" | "Planned";
}

export interface ResearchHorizon {
  number: string;
  title: string;
  timeframe: string;
  summary: string;
  focusAreas: string[];
}

export interface ResearchUpdate {
  date: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  href: string;
}
