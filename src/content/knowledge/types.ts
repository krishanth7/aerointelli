/**
 * The knowledge base data model.
 *
 * Articles are typed data rather than MDX files for one reason: the related
 * content engine, the search index and the on-this-page rail all need to read
 * an article's structure without rendering it. A markdown blob would force
 * every one of those to parse prose to find out what an article is about.
 *
 * The fields that look like bureaucracy — `status`, `reviewedAt`,
 * `technicalReviewer`, `sources` — are the point of the whole system. A
 * technical claim on this site should be traceable to the person who checked it
 * and the reference it came from, and an article that has not been reviewed
 * should not be able to pretend that it has.
 */

/** How much a reader is expected to already know. */
export type Difficulty = "beginner" | "intermediate" | "advanced";

export const difficultyLabel: Record<Difficulty, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

/**
 * Editorial state.
 *
 * Only `reviewed` earns the "Aero Intelli technical guide" label. Everything
 * else says what it is, in the open, at the top of the article.
 */
export type ArticleStatus = "draft" | "in-review" | "reviewed" | "archived";

export const statusLabel: Record<ArticleStatus, string> = {
  draft: "Draft",
  "in-review": "Under technical review",
  reviewed: "Technically reviewed",
  archived: "Archived",
};

/**
 * What kind of claim a passage is making.
 *
 * The spec's most important instruction is that verified fact, industry
 * practice, engineering assumption and research direction must never blur into
 * one another. Blocks carry that distinction so the reader sees it inline
 * rather than having to infer it from tone.
 */
export type ClaimKind = "established" | "practice" | "assumption" | "research";

export const claimLabel: Record<ClaimKind, string> = {
  established: "Established",
  practice: "Industry practice",
  assumption: "Engineering assumption",
  research: "Research direction",
};

export type Source = {
  id: string;
  title: string;
  publisher: string;
  author?: string;
  year?: string;
  url?: string;
  /** Primary research, a standard, a textbook, or a manufacturer's data sheet. */
  type: "research" | "government" | "standard" | "textbook" | "manufacturer" | "industry";
  note?: string;
};

export type Block =
  | { kind: "text"; value: string }
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
      /** Where the figures came from. A table without this does not get published. */
      basis: string;
    };

export type Section = {
  id: string;
  heading: string;
  blocks: Block[];
};

export type Article = {
  slug: string;
  title: string;
  /** The two-to-four sentence answer, shown before anything else. */
  quickAnswer: string;
  summary: string;
  category: string;
  difficulty: Difficulty;
  status: ArticleStatus;
  tags: string[];
  species?: string[];
  author: string;
  technicalReviewer?: string;
  publishedAt: string;
  updatedAt: string;
  reviewedAt?: string;
  version: string;
  sections: Section[];
  sources: Source[];
  /** Slugs of other articles. Resolved at render so a typo cannot ship silently. */
  related: string[];
  /** What the article cannot tell you. Rendered at the foot, always. */
  engineeringNote: string;
};

/** Rough reading time. Stated as an estimate because that is what it is. */
export function readingMinutes(article: Article): number {
  const words = article.sections
    .flatMap((section) =>
      section.blocks.map((block) => {
        if (block.kind === "text") return block.value;
        if (block.kind === "list") return block.items.join(" ");
        if (block.kind === "callout") return block.value;
        if (block.kind === "formula") return `${block.expression} ${block.limitations}`;
        return block.rows.flat().join(" ");
      }),
    )
    .join(" ")
    .split(/\s+/).length;

  return Math.max(1, Math.round(words / 200));
}
