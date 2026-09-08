import type { KnowledgeArea } from "../types";

export const species: KnowledgeArea = {
  number: "03",
  slug: "species",
  title: "Species Knowledge",
  navSummary: "How to read a species as a set of requirements, and how that reading decides the whole farm.",
  summary:
    "Choosing a species is not choosing a product; it is accepting a fixed set of environmental, nutritional and behavioural requirements that the farm must then meet every day for the length of a cycle. Temperature range, salinity tolerance, feeding habit, social behaviour and reliability of seed supply matter more at the planning stage than market price does, because price can be argued with and physiology cannot.",
  difficulty: "beginner",
  topics: ["fish", "biology", "production"],
  tags: ["species selection", "tolerance range", "trophic level", "seed supply", "market fit"],
  species: [
    "Indian major carps",
    "Nile tilapia",
    "Pangasius",
    "Asian seabass",
    "Rainbow trout",
    "Pacific white shrimp",
    "Giant freshwater prawn",
  ],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-19",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Every farmed species comes with a list of conditions it needs and a list of things it will not tolerate. If the site's water can hold those conditions cheaply, the species is a candidate. If it cannot, the species will still grow, but only for as long as the farm keeps paying to fight the site.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Farmed aquatic species span a wide range of biology. Carps are hardy omnivores that convert natural pond productivity efficiently and tolerate a broad band of conditions. Tilapia are robust, fast-growing and reproduce readily, which is both their advantage and their principal management problem. Catfishes such as pangasius tolerate low oxygen and high density. Salmonids require cool, well-oxygenated water and reward that requirement with excellent feed conversion. Marine finfish such as seabass and cobia grow rapidly but need seawater, live-feed hatchery capability and careful health management. Crustaceans — penaeid shrimp and freshwater prawn — moult, which introduces an entirely separate set of mineral and handling requirements.",
        },
        {
          kind: "text",
          value:
            "The useful way to hold all of this is not as a list of animals but as a set of axes. Where does the species sit on temperature, on salinity, on oxygen tolerance, on trophic level, on aggression, on hardiness during handling, and on how mature its hatchery supply chain is. Any candidate can then be positioned against a site, and unsuitable options fall away quickly.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why it matters",
      blocks: [
        {
          kind: "text",
          value:
            "Species choice determines the cost of every other decision. A cool-water species farmed in a warm climate means chilling or a shortened growing season. A carnivorous species means a high-protein diet and a feed bill that dominates the cost structure. A species with an immature hatchery sector means unreliable seed, variable quality and no ability to plan a stocking calendar. None of these are visible in a price comparison, and all of them appear in the accounts.",
        },
        {
          kind: "text",
          value:
            "It also determines what failure looks like. Hardy species forgive operational error and give a farm room to learn; sensitive species convert the same error into mortality. For a first venture, matching species robustness to organisational experience is at least as important as matching it to the market.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Tolerance range and optimum range" },
        {
          kind: "text",
          value:
            "Every environmental variable has two bands for a given species: the range within which the animal survives, and the narrower range within which it grows well. Farms are routinely designed against the tolerance range and then disappointed by the growth rate. Survival is the wrong design target; the optimum range is what the plan should be built on, with the tolerance range reserved as the margin that absorbs incidents.",
        },
        { kind: "subheading", value: "Euryhaline and stenohaline" },
        {
          kind: "text",
          value:
            "Species differ in how much salinity variation they can osmoregulate against. Euryhaline species such as tilapia, seabass and milkfish move between fresh and brackish water and open up sites that stenohaline species cannot use. Stenohaline species require the salinity they evolved in to be held steady, which either restricts siting or imposes a salt cost.",
        },
        { kind: "subheading", value: "Trophic level and feed dependence" },
        {
          kind: "text",
          value:
            "Position in the food chain sets the protein content of the diet, the cost of that diet, and how much of the nutrition can come from the culture system itself. Herbivorous and omnivorous species can draw meaningfully on natural productivity in a pond. Carnivorous species cannot, and everything they eat must be bought.",
        },
        { kind: "subheading", value: "Behaviour under confinement" },
        {
          kind: "text",
          value:
            "Some species school calmly at density, some become territorial, and some cannibalise smaller individuals when size variation develops. Behaviour dictates grading frequency, stocking density, shelter provision and the design of the culture unit far more directly than body size does.",
        },
      ],
    },
    {
      id: "technical-fundamentals",
      heading: "Technical fundamentals",
      blocks: [
        {
          kind: "text",
          value:
            "Two relationships are used constantly when translating species biology into a production plan.",
        },
        {
          kind: "formula",
          name: "Specific growth rate",
          expression: "SGR = 100 x (ln W2 - ln W1) / t",
          terms: [
            { symbol: "SGR", meaning: "Specific growth rate over the interval", unit: "% body weight per day" },
            { symbol: "W1", meaning: "Mean individual weight at the start of the interval", unit: "g" },
            { symbol: "W2", meaning: "Mean individual weight at the end of the interval", unit: "g" },
            { symbol: "t", meaning: "Length of the interval", unit: "days" },
          ],
          example:
            "Consider a hypothetical batch growing from 40 g to 90 g over 60 days. The specific growth rate works out at roughly 1.35 per cent of body weight per day for that interval, which can then be compared with the same species at a different temperature or density.",
          limitations:
            "Specific growth rate falls as animals get larger, so a figure is meaningless without the weight interval and the temperature it was measured over, and it cannot be extrapolated to a different size class. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Condition factor",
          expression: "K = 100 x W / L^3",
          terms: [
            { symbol: "K", meaning: "Condition factor, an index of body form relative to length", unit: "dimensionless" },
            { symbol: "W", meaning: "Individual body weight", unit: "g" },
            { symbol: "L", meaning: "Individual body length", unit: "cm" },
          ],
          example:
            "Consider a hypothetical fish of 210 g measuring 24 cm. The condition factor is about 1.5, a number that is useful only when compared against the same population earlier in the cycle or against a sibling batch under different management.",
          limitations:
            "Condition factor is species-specific and body-shape dependent, so values cannot be compared across species, and it says nothing about health on its own. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "Both are comparative tools. Their value lies in tracking one population over time or comparing two treatments in the same facility, not in matching a number published elsewhere.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Groups of farmed species and the requirements each group imposes on a farm",
          columns: ["Group", "Water requirement", "Feeding habit", "Principal management demand"],
          rows: [
            ["Indian major carps", "Warm fresh water, broad tolerance", "Omnivorous, uses natural pond productivity", "Polyculture balance and pond fertility management"],
            ["Tilapia", "Warm fresh to brackish water, very tolerant", "Omnivorous, accepts formulated diets readily", "Control of unwanted reproduction and resulting size variation"],
            ["Pangasius and other catfishes", "Warm fresh water, tolerant of low oxygen", "Omnivorous to carnivorous", "High density management and effluent handling"],
            ["Salmonids", "Cool, well-oxygenated fresh water", "Carnivorous, high protein diet", "Temperature maintenance and sustained oxygen supply"],
            ["Marine finfish", "Full-strength seawater, stable chemistry", "Carnivorous", "Hatchery live-feed capability and health management"],
            ["Penaeid shrimp", "Brackish to marine, stable mineral balance", "Omnivorous benthic feeder", "Biosecurity, seed quality and pond bottom condition"],
            ["Freshwater prawn", "Warm fresh water for grow-out, brackish for larvae", "Omnivorous benthic feeder", "Territorial behaviour, shelter provision and staggered harvest"],
          ],
          basis:
            "A qualitative grouping of commonly farmed species by the demands they place on a site and an operation. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "Polyculture deserves separate mention because it is the traditional Indian answer to using a pond fully. Stocking species that feed at different depths and on different food organisms — surface feeders, column feeders and bottom feeders together — extracts more production from the same water than any single species could. It also complicates harvest, grading and feed management, and it requires that the species chosen do not compete or predate.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Seed supply is a selection criterion",
          value:
            "A species with an established hatchery sector can be stocked to a calendar with known quality and traceable origin. A species whose seed is collected from the wild or produced irregularly forces the farm to stock when seed appears rather than when the plan requires, which propagates through the entire cycle.",
        },
      ],
    },
    {
      id: "practical-knowledge",
      heading: "Practical knowledge",
      blocks: [
        {
          kind: "text",
          value:
            "Species screening runs from hard constraints to soft ones. Hard constraints are physical: water temperature, salinity and quality at the site, and the legality of culturing the species in that jurisdiction. Soft constraints are commercial: market depth, price stability, feed availability and the farm's own competence. Working in that order avoids the common outcome of falling in love with a species and then discovering the site cannot hold it.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "List the species legally permitted for culture in the location, including any restrictions on exotic or non-native stock.",
            "Overlay the site's annual temperature and salinity profile and remove every species whose optimum range the site cannot hold for most of the year.",
            "Check seed availability from recognised hatcheries, including quantity, timing and health certification of the batches offered.",
            "Check feed availability locally, since a species requiring a diet that must be imported carries a hidden logistics cost.",
            "Assess market depth honestly, distinguishing a real established market from a high price quoted for a small volume.",
            "Match the survivor list against the farm's operational experience, favouring hardier options for a first cycle.",
            "Run the growth and survival assumptions for the leading candidate through the production plan before committing to any construction.",
          ],
        },
      ],
    },
    {
      id: "considerations",
      heading: "Biological and engineering considerations",
      blocks: [
        {
          kind: "text",
          value:
            "Temperature is the dominant biological variable for the ectothermic animals aquaculture farms. It sets metabolic rate, and therefore feed intake, growth rate, oxygen consumption and ammonia excretion simultaneously. A rise in temperature increases the animal's demand for oxygen at the same moment as it reduces the water's ability to hold oxygen. Any species assessment that considers temperature only as a growth question has missed half of it.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Warmer water means more demand and less supply",
          value:
            "Metabolic oxygen demand rises with temperature while the solubility of oxygen in water falls. The same stocking density that is comfortable in the cool season can be marginal in the warm season with no change in management at all.",
        },
        {
          kind: "text",
          value:
            "Engineering follows from these requirements rather than preceding them. A carnivorous species with high feed input generates a proportionally high nitrogen load and needs biological treatment sized accordingly. A benthic species needs floor area rather than volume, so tank depth buys nothing. A moulting crustacean needs stable calcium and alkalinity, and shelter or density management to reduce losses during the vulnerable post-moult period. Each of these translates directly into a design specification.",
        },
        {
          kind: "text",
          value:
            "Non-native species carry an additional consideration that is regulatory and environmental rather than technical. Escapes can establish populations, compete with native fauna and introduce pathogens. Containment design, effluent screening and compliance with national and state rules on permitted species are part of the species decision, not an afterthought to it.",
        },
      ],
    },
    {
      id: "management-principles",
      heading: "Management principles",
      blocks: [
        {
          kind: "list",
          items: [
            "Design the farm around the species' optimum range and keep the tolerance range as the margin for incidents, not as the operating target.",
            "Source seed from hatcheries that can document broodstock origin and health status, and keep records of which batch went into which unit.",
            "Quarantine and acclimatise incoming seed to the receiving water's temperature, salinity and pH gradually rather than by direct transfer.",
            "Grade on a schedule appropriate to the species' tendency towards size variation and, where relevant, cannibalism.",
            "Match feed particle size, sinking rate and presentation to the species' feeding habit, since a correct formulation delivered wrongly is wasted.",
            "Keep species-specific baselines for growth, condition and behaviour from your own farm, and trust them over published figures from elsewhere.",
          ],
        },
      ],
    },
    {
      id: "common-problems",
      heading: "Common problems",
      blocks: [
        {
          kind: "table",
          caption: "Species-related problems and the selection or management decision usually responsible",
          columns: ["Problem", "Usual underlying cause"],
          rows: [
            ["Growth far below the projected curve", "Site temperature sitting in the tolerance range rather than the optimum range for much of the year"],
            ["Wide size variation within a batch", "Uncontrolled reproduction, uneven feed distribution, or grading intervals too long for the species"],
            ["Persistent low-level mortality after stocking", "Seed of unknown health status, or acclimatisation too rapid on arrival"],
            ["Losses concentrated in a particular period each day", "Oxygen demand peaking after feeding in warm water, against a supply sized for average conditions"],
            ["Feed cost dominating the cost structure", "A carnivorous species chosen for price in a system that offers no natural productivity to draw on"],
            ["Stocking dates repeatedly slipping", "Dependence on a seed source that cannot supply reliably to a calendar"],
          ],
          basis:
            "Diagnostic associations commonly reported in extension and hatchery practice, offered as starting points for investigation. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "best-practices",
      heading: "Best-practice guidance",
      blocks: [
        {
          kind: "list",
          items: [
            "Verify the site's water against the species requirement with a full year of measurement before committing capital.",
            "Trial a new species at small scale in the actual system before converting the whole farm to it.",
            "Prefer species with an established local hatchery sector, established feed supply and an established market, particularly for a first venture.",
            "Record growth, survival and feed conversion by batch so that species performance at your site becomes a documented fact rather than a recollection.",
            "Keep exotic and native stock physically separated, and design containment so that escape is prevented rather than merely unlikely.",
            "Review species choice at the end of each cycle against realised margin, not against the price that was expected at stocking.",
          ],
        },
      ],
    },
    {
      id: "advanced",
      heading: "Advanced knowledge",
      blocks: [
        {
          kind: "text",
          value:
            "Species selection eventually becomes a portfolio question. A farm running a single species is exposed to a single market and a single disease profile. Running two species with different harvest windows, different buyers and different pathogen susceptibilities spreads that exposure, at the cost of running two sets of protocols, two feed lines and two sets of staff competence. Whether that is worthwhile depends on scale and on how correlated the two markets actually are.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Domestication is still in progress",
          value:
            "Most farmed aquatic species have been under selection for a small number of generations compared with terrestrial livestock. Selective breeding for growth rate, disease resistance and feed efficiency continues to change what a named species is capable of, so performance expectations set from an older strain may understate what an improved line delivers.",
        },
        {
          kind: "text",
          value:
            "There is also a growing interest in species whose requirements suit a changing climate and a constrained water supply — tolerant of higher temperature, lower quality water or higher density — and in extractive species that can be integrated alongside fed species. These directions are genuinely open, and a farm evaluating them should treat published performance as an indication of possibility rather than as a specification.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "A species is a fixed set of requirements the farm must meet daily, and physiology does not negotiate with a business plan.",
    "Design against the optimum range and reserve the tolerance range as margin, because survival is not a growth target.",
    "Trophic level determines feed cost and how much nutrition the culture system itself can contribute.",
    "Behaviour under confinement drives grading, density and unit design more directly than body size does.",
    "Temperature raises metabolic oxygen demand at the same time as it reduces the water's capacity to supply it.",
    "Reliable seed supply and a real local market are selection criteria on the same footing as biological fit.",
  ],
  related: ["fundamentals", "fish-biology", "breeding-genetics", "hatchery"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Cultured species information programme covering biology, culture methods and production of farmed aquatic species.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Central Marine Fisheries Research Institute",
      description: "Research and extension material on marine and brackishwater species of relevance to Indian aquaculture.",
    },
    {
      organisation: "State fisheries departments and agricultural universities in India",
      description: "Regional guidance on permitted species, locally proven strains and seed sources.",
    },
  ],
};
