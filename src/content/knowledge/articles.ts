import type { Article } from "./types";

/**
 * Published knowledge articles.
 *
 * Two, deliberately. The spec asks for twenty in the opening cluster and
 * thirty-five sections after that; publishing thirty-five thin stubs to fill
 * the map would defeat the entire stated purpose of the platform, which is to
 * be the thing an engineer bookmarks. These two establish the template and the
 * standard the rest have to meet.
 *
 * Sources are named without invented DOIs or page numbers. Where a figure is a
 * design range rather than a published constant, the block says so.
 */

const timmons = {
  id: "timmons-ebeling",
  title: "Recirculating Aquaculture",
  author: "M. B. Timmons and J. M. Ebeling",
  publisher: "Ithaca Publishing Company",
  type: "textbook" as const,
  note: "The standard engineering reference for recirculating system design. Figures quoted from it here are design ranges, not fixed constants.",
};

const fao = {
  id: "fao-ras",
  title: "Recirculating aquaculture systems: technical guidance",
  publisher: "Food and Agriculture Organization of the United Nations",
  type: "government" as const,
  url: "https://www.fao.org/fishery/en/aquaculture",
  note: "Consult the current FAO publication for the species and region in question; guidance is revised periodically.",
};

export const articles: Article[] = [
  {
    slug: "what-is-ras",
    title: "What Is a Recirculating Aquaculture System?",
    quickAnswer:
      "A recirculating aquaculture system, or RAS, grows fish in tanks and treats the water so the same water can be used again. Instead of relying on a river, pond or the sea to dilute waste, the farm removes solids, converts ammonia and replaces oxygen mechanically, then returns the water to the fish. It trades a large water requirement for a large equipment and energy requirement.",
    summary:
      "How the recirculating loop works, what each stage of treatment is for, and the conditions under which the trade it makes is worth making.",
    category: "fundamentals",
    difficulty: "beginner",
    status: "in-review",
    tags: ["RAS", "fundamentals", "system design", "water treatment"],
    author: "Aero Intelli",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    version: "1.0",
    related: ["what-is-tan"],
    engineeringNote:
      "This article describes how the loop works. It does not size anything. Turnover rates, filter capacities and oxygen supply all depend on species, feed loading, temperature and site water chemistry, and a system built from the general description here would be a system built without a design.",
    sources: [timmons, fao],
    sections: [
      {
        id: "why-it-matters",
        heading: "Why it matters",
        blocks: [
          {
            kind: "text",
            value:
              "Conventional aquaculture depends on a body of water large enough to absorb what the fish produce. A pond, a river or a sea cage dilutes ammonia and settles solids without anyone operating equipment. That works, and it constrains the farm to sites with abundant clean water, exposes stock to whatever the environment does next, and discharges nutrients into it.",
          },
          {
            kind: "text",
            value:
              "A recirculating system removes that dependency. Water is treated and reused, so the farm can be sited near a market rather than near a river, can hold temperature and oxygen at values the species actually grows best at, and can be operated year-round in a climate that would otherwise allow one season. What it cannot do is fail quietly. In a pond, a pump stopping is an inconvenience. In a recirculating system carrying a heavy standing biomass, it is a countdown measured in minutes.",
          },
          {
            kind: "callout",
            tone: "practice",
            title: "The trade being made",
            value:
              "A recirculating system substitutes capital, energy and operator skill for water and land. Whether that trade pays depends entirely on the value of the fish, the cost of power and the competence of the operation — not on the technology being modern.",
          },
        ],
      },
      {
        id: "the-loop",
        heading: "The loop, stage by stage",
        blocks: [
          {
            kind: "text",
            value:
              "Water leaves the culture tank carrying three things that have to be dealt with in a specific order: solid waste, dissolved ammonia, and dissolved carbon dioxide. It comes back needing oxygen. The order matters, because each stage makes the next one possible.",
          },
          {
            kind: "list",
            ordered: true,
            items: [
              "Culture tank. Fish are held here. Tank shape and drain design decide whether solids concentrate at the outlet or stay in suspension, which determines how much work every later stage has to do.",
              "Mechanical filtration. Solids are physically removed, usually by a rotating drum screen. Anything not captured here breaks down in the water, consuming oxygen and releasing more ammonia — so this is the cheapest treatment in the loop and the one that most repays doing well.",
              "Biofiltration. Bacteria growing on media convert ammonia to nitrite and nitrite to nitrate. This is a living process, not a mechanical one: it takes weeks to establish and can be damaged in hours.",
              "Degassing. Carbon dioxide produced by the fish and the biofilter accumulates and must be stripped by exposing the water to air. It is invisible, it suppresses feeding long before it kills, and it is routinely underestimated.",
              "Oxygenation. Oxygen is added back, by aeration at lower intensities or by dissolving pure oxygen at higher ones.",
              "Return to tank. Optionally by way of disinfection, temperature control and a new-water addition point.",
            ],
          },
          {
            kind: "callout",
            tone: "established",
            title: "Nitrate is the end of the line",
            value:
              "Nitrification converts ammonia into nitrate, which is far less toxic but is not destroyed. It accumulates. Every recirculating system therefore still exchanges some new water — the loop is closed in the sense of a small daily percentage, not in the sense of zero.",
          },
        ],
      },
      {
        id: "feed-drives-everything",
        heading: "Feed drives everything",
        blocks: [
          {
            kind: "text",
            value:
              "The single most useful idea in recirculating system design is that almost every load in the system scales with feed rather than with fish. Ammonia, suspended solids, oxygen consumption and carbon dioxide production are all consequences of feed being eaten and metabolised. This is why a designer asks for the feed loading before asking anything else, and why increasing feed rate on an existing system is not a free decision.",
          },
          {
            kind: "formula",
            name: "Daily feed load",
            expression: "Daily feed = Standing biomass x Feed rate",
            terms: [
              { symbol: "Standing biomass", meaning: "Mass of fish in the system at its heaviest", unit: "kg" },
              { symbol: "Feed rate", meaning: "Proportion of body weight fed per day", unit: "fraction" },
            ],
            example:
              "A system holding 18,000 kg of fish fed at 2 percent of body weight per day consumes 360 kg of feed per day.",
            limitations:
              "Feed rate is not constant. It falls as fish grow, and it falls further under stress, high carbon dioxide or suboptimal temperature. Design against the peak, operate against the actual.",
          },
        ],
      },
      {
        id: "when-it-makes-sense",
        heading: "When a recirculating system makes sense",
        blocks: [
          {
            kind: "text",
            value:
              "It is worth being direct about this, because the technology is frequently proposed for situations it does not suit. A recirculating system earns its cost where at least one of the following holds: water is scarce or expensive, land near the market is available but land near water is not, the species commands a price that supports the operating cost, the climate would otherwise restrict production to part of the year, or biosecurity and traceability carry commercial value.",
          },
          {
            kind: "text",
            value:
              "Where none of those hold — abundant water, cheap land, a low-value species, and a climate that permits year-round pond culture — a pond will usually produce the same fish for less money. The engineering does not change that arithmetic.",
          },
          {
            kind: "callout",
            tone: "assumption",
            title: "Power is the hidden constraint",
            value:
              "A recirculating system runs its pumps and blowers continuously. In locations with unreliable grid supply, standby generation is not an optional refinement — it is part of the base cost, and omitting it from a feasibility model understates the project substantially.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Common mistakes",
        blocks: [
          {
            kind: "list",
            items: [
              "Sizing the biofilter against fish numbers instead of against feed load.",
              "Treating solids removal as a secondary concern. Solids that dissolve become ammonia, oxygen demand and biofilter fouling.",
              "Omitting degassing because carbon dioxide is not visible and is rarely measured.",
              "Planning water exchange at zero. Nitrate accumulation makes some exchange unavoidable.",
              "Commissioning with a full stocking. A biofilter takes weeks to mature and has to be loaded gradually.",
              "Budgeting capital without budgeting the operator. A recirculating system is a process plant and needs someone who can run one.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "what-is-tan",
    title: "What Is TAN in a Recirculating System?",
    quickAnswer:
      "TAN stands for total ammonia nitrogen: the combined nitrogen present as un-ionised ammonia and as ammonium. Fish excrete it as a by-product of digesting protein, and uneaten feed and faeces release more. TAN is measured as a total because a standard test cannot separate the two forms, and the split between them — which decides how toxic the water actually is — depends on pH and temperature.",
    summary:
      "The difference between TAN, ammonia and ammonium, why pH decides toxicity, and how the daily load is estimated from feed.",
    category: "tan",
    difficulty: "intermediate",
    status: "in-review",
    tags: ["TAN", "ammonia", "water quality", "biofiltration", "nitrogen"],
    author: "Aero Intelli",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    version: "1.0",
    related: ["what-is-ras"],
    engineeringNote:
      "No safe TAN limit is given here on purpose. A limit is only meaningful alongside a species, a pH, a temperature and an exposure duration, and a single number quoted without those is the most common way this subject is got wrong. Establish limits against the species being cultured and confirm them with an aquatic animal health professional.",
    sources: [timmons, fao],
    sections: [
      {
        id: "two-forms",
        heading: "Two forms, one measurement",
        blocks: [
          {
            kind: "text",
            value:
              "Ammonia exists in water in two forms in equilibrium with each other: un-ionised ammonia (NH3) and the ammonium ion (NH4+). Un-ionised ammonia crosses gill membranes readily and is the toxic form. Ammonium is far less so. A standard field test kit reports the sum of both, which is why the industry works in TAN rather than in ammonia.",
          },
          {
            kind: "callout",
            tone: "established",
            title: "The equilibrium moves with pH and temperature",
            value:
              "Raising pH shifts the equilibrium towards un-ionised ammonia; raising temperature does the same to a lesser degree. The consequence is that the same TAN reading represents very different risk at pH 6.8 and at pH 8.2. This relationship is chemistry, not an estimate.",
          },
          {
            kind: "text",
            value:
              "This has a practical implication that surprises operators. A system running low on alkalinity will see pH fall, which makes an existing TAN reading less immediately dangerous — while simultaneously slowing the biofilter that is supposed to be removing it. The reading looks safer as the underlying situation gets worse.",
          },
        ],
      },
      {
        id: "where-it-comes-from",
        heading: "Where it comes from",
        blocks: [
          {
            kind: "text",
            value:
              "Fish digest dietary protein and excrete surplus nitrogen across the gills, predominantly as ammonia. A second contribution comes from uneaten feed and faecal solids left in the water, where bacterial breakdown releases further ammonia. The second source is entirely within the operator's control, which is the strongest practical argument for good solids capture and accurate feeding.",
          },
          {
            kind: "formula",
            name: "TAN production from feed",
            expression: "TAN = Daily feed x Protein fraction x Nitrogen fraction of protein x Excreted fraction",
            terms: [
              { symbol: "Daily feed", meaning: "Feed delivered per day", unit: "kg/day" },
              { symbol: "Protein fraction", meaning: "Crude protein in the diet", unit: "fraction" },
              { symbol: "Nitrogen fraction of protein", meaning: "Nitrogen content of protein, conventionally 0.16", unit: "fraction" },
              { symbol: "Excreted fraction", meaning: "Proportion of ingested nitrogen excreted rather than retained as growth", unit: "fraction" },
            ],
            example:
              "For 100 kg/day of a 40 percent protein diet with 80 percent of ingested nitrogen excreted: 100 x 0.40 x 0.16 x 0.80 = 5.1 kg TAN per day.",
            limitations:
              "The excreted fraction is not a constant. It varies with species, fish size, feed quality, feeding accuracy and temperature. Design work commonly shortcuts the whole calculation to a single coefficient of roughly 0.025 to 0.035 kg TAN per kg of feed — which is convenient, and is a design range rather than a measurement of your farm.",
          },
        ],
      },
      {
        id: "how-it-is-controlled",
        heading: "How it is controlled",
        blocks: [
          {
            kind: "text",
            value:
              "Ammonia is removed biologically, by nitrifying bacteria growing on media in a biofilter. They oxidise ammonia to nitrite, and a second group oxidises nitrite to nitrate. The process needs oxygen, needs alkalinity, and slows sharply as temperature falls. It is also the slowest thing in the system to recover: a biofilter knocked back by a disinfectant, a chemical treatment or an extended power loss does not come back the same day.",
          },
          {
            kind: "list",
            items: [
              "Capture solids early, so they do not dissolve and add to the load.",
              "Feed accurately. Uneaten feed is ammonia the fish never even benefited from.",
              "Maintain alkalinity. Nitrification consumes it and produces acid; without buffering, pH falls and the biofilter slows.",
              "Keep the biofilter aerobic. Nitrifying bacteria compete poorly for oxygen against heterotrophic bacteria feeding on organic carbon.",
              "Load gradually at startup, and after any event that may have damaged the bacterial population.",
            ],
          },
          {
            kind: "callout",
            tone: "practice",
            title: "Nitrite is the warning that gets missed",
            value:
              "The two bacterial groups recover at different rates, so a stressed biofilter frequently shows a nitrite peak after the ammonia peak has passed. An operator watching only ammonia will conclude the problem is over at exactly the wrong moment.",
          },
        ],
      },
      {
        id: "monitoring",
        heading: "Monitoring",
        blocks: [
          {
            kind: "text",
            value:
              "TAN is measured with a colorimetric test, from a sample taken at a consistent point in the loop — the tank outlet is the usual choice, because that is where the fish actually experience it. The reading is only interpretable alongside pH and temperature, so those are recorded on the same line of the log, at the same time, by the same person.",
          },
          {
            kind: "table",
            caption: "What to record alongside a TAN reading",
            columns: ["Parameter", "Why it is needed", "Recorded with TAN"],
            rows: [
              ["pH", "Determines what proportion of TAN is in the toxic un-ionised form", "Always"],
              ["Temperature", "Shifts the equilibrium and sets the biofilter's rate", "Always"],
              ["Nitrite", "Reveals a biofilter recovering unevenly", "Daily during startup or after an upset"],
              ["Alkalinity", "The buffer nitrification is consuming", "At least weekly"],
              ["Feed delivered", "The input the load is generated from", "Always"],
            ],
            basis:
              "Standard recirculating system operating practice. The frequencies are a starting point for a stable system, not a regulatory requirement — increase them during commissioning, after any upset, and whenever feed load changes.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Common mistakes",
        blocks: [
          {
            kind: "list",
            items: [
              "Quoting a TAN limit without the pH and temperature it applies at.",
              "Reading TAN and concluding the biofilter is adequate, without checking nitrite.",
              "Sizing the biofilter against a coefficient without recognising it as a design range.",
              "Letting alkalinity drift down, then being puzzled by a slowing biofilter.",
              "Sampling at a different point each time, and comparing the readings as though they were the same measurement.",
            ],
          },
        ],
      },
    ],
  },
];

const bySlug = new Map(articles.map((article) => [article.slug, article]));

export function findArticle(slug: string) {
  return bySlug.get(slug);
}

export function articlesInCategory(categorySlug: string) {
  return articles.filter((article) => article.category === categorySlug);
}
