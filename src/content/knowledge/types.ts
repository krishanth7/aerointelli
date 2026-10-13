/**
 * The knowledge base data model.
 *
 * Articles are typed data rather than MDX files for one reason: the related
 * content engine, the search index and the on-this-page rail all need to read
 * an article's structure without rendering it. A markdown blob would force
 * every one of those to parse prose to find out what an article is about.
 *
 * One knowledge area, one article. The thirty areas are the navigation and the
 * content at the same time, so there is no category page that exists only to
 * list a single link.
 */

/** How much a reader is expected to already know. */
export type Difficulty = "beginner" | "intermediate" | "advanced";

export const difficultyLabel: Record<Difficulty, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

/**
 * What kind of claim a passage is making.
 *
 * Verified fact, industry practice, engineering assumption and research
 * direction must never blur into one another. Callouts carry that distinction
 * so a reader sees it inline rather than inferring it from tone.
 */
export type ClaimKind = "established" | "practice" | "assumption" | "research";

export const claimLabel: Record<ClaimKind, string> = {
  established: "Established",
  practice: "Industry practice",
  assumption: "Engineering assumption",
  research: "Research direction",
};

/**
 * Further reading.
 *
 * Organisations and publication programmes rather than specific papers with
 * invented identifiers. Naming a real body a reader can search is honest;
 * fabricating a title, year and DOI to look rigorous is not.
 */
export type Reading = {
  organisation: string;
  description: string;
  url?: string;
};

export type Block =
  | { kind: "text"; value: string }
  | { kind: "subheading"; value: string }
  | { kind: "list"; ordered?: boolean; items: string[] }
  | { kind: "callout"; tone: ClaimKind; title: string; value: string }
  | {
      kind: "formula";
      name: string;
      expression: string;
      /** Every symbol in the expression, so nothing is left to be guessed at. */
      terms: { symbol: string; meaning: string; unit: string }[];
      example?: string;
      limitations: string;
    }
  | {
      kind: "table";
      caption: string;
      columns: string[];
      rows: string[][];
      /** Where the figures came from, or what they depend on. */
      basis: string;
    }
  | {
      kind: "flow";
      caption: string;
      /** A process chain, rendered as a vertical diagram. */
      steps: { label: string; detail: string }[];
    };

export type Section = {
  id: string;
  heading: string;
  blocks: Block[];
};

/** Topics used by the filter strip on the Knowledge Center index. */
export type Topic =
  | "water"
  | "fish"
  | "filtration"
  | "engineering"
  | "operations"
  | "automation"
  | "economics"
  // Added for the Aquaculture Knowledge Center. Shared with the RAS tree rather
  // than duplicated, because both index pages derive their filter strip from
  // the topics their own areas actually use — a topic no RAS area carries never
  // appears there, so widening the union costs that page nothing.
  | "biology"
  | "production"
  | "health"
  | "systems"
  | "environment"
  | "sustainability"
  | "research"
  // Added for the Hydroponics Knowledge Center, on the same reasoning.
  | "crops"
  | "nutrition"
  | "lighting"
  | "climate"
  | "substrate";

export const topicLabel: Record<Topic, string> = {
  water: "Water",
  fish: "Fish",
  filtration: "Filtration",
  engineering: "Engineering",
  operations: "Operations",
  automation: "Automation",
  economics: "Economics",
  biology: "Biology",
  production: "Production",
  health: "Health",
  systems: "Systems",
  environment: "Environment",
  sustainability: "Sustainability",
  research: "Research",
  crops: "Crops",
  nutrition: "Nutrition",
  lighting: "Lighting",
  climate: "Climate",
  substrate: "Substrate",
};

export type KnowledgeArea = {
  /** Two-digit ordinal, used for the navigation index. */
  number: string;
  slug: string;
  title: string;
  /** Short line shown on the index card. */
  navSummary: string;
  /** Metadata description and article standfirst. */
  summary: string;
  difficulty: Difficulty;
  topics: Topic[];
  tags: string[];
  species?: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  version: string;
  /** Plain-language answer for a farmer, before any engineering. */
  quickUnderstanding: string;
  sections: Section[];
  keyTakeaways: string[];
  /** Slugs of related areas. Resolved at render, so a typo cannot ship silently. */
  related: string[];
  furtherReading?: Reading[];
};

/** Rough reading time. */
export function readingMinutes(area: KnowledgeArea): number {
  const words = area.sections
    .flatMap((section) =>
      section.blocks.map((block) => {
        if (block.kind === "text" || block.kind === "subheading") return block.value;
        if (block.kind === "list") return block.items.join(" ");
        if (block.kind === "callout") return block.value;
        if (block.kind === "formula") return `${block.expression} ${block.limitations}`;
        if (block.kind === "flow") return block.steps.map((step) => step.detail).join(" ");
        return block.rows.flat().join(" ");
      }),
    )
    .join(" ")
    .split(/\s+/).length;

  return Math.max(1, Math.round(words / 200));
}
