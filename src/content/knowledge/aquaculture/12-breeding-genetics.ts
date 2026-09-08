import type { KnowledgeArea } from "../types";

export const breedingGenetics: KnowledgeArea = {
  number: "12",
  slug: "breeding-genetics",
  title: "Breeding and Genetics",
  navSummary: "How genetic improvement works in aquatic species, what a breeding programme actually requires, and why most farms are consumers rather than operators of one.",
  summary:
    "Genetic improvement is the only farm input whose benefit is cumulative and permanent: a gain achieved in one generation is carried into every generation after it. Aquatic species are unusually well suited to selection because of their high fecundity, but the same fecundity makes inbreeding easy to accumulate accidentally, and a poorly run programme degrades a population rather than improving it.",
  difficulty: "advanced",
  topics: ["biology", "production", "research", "fish"],
  tags: ["selective breeding", "heritability", "broodstock management", "inbreeding", "genetic gain", "strain selection"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-07",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Some of the difference between fast-growing and slow-growing fish is inherited, so choosing parents carefully makes the next generation better. Because fish produce very large numbers of offspring, it is easy both to select strongly and to accidentally breed from too few parents, which causes long-term damage. Most farms benefit from buying improved seed rather than trying to run a breeding programme themselves.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Quantitative genetics rests on a simple decomposition: the performance an animal displays is the sum of the genes it carries, the environment it experienced, and the interaction between the two. Selection can only act on the genetic part, and the practical work of a breeding programme is the separation of that part from everything else in a set of observations that mix them together.",
        },
        {
          kind: "text",
          value:
            "Aquatic species offer advantages that terrestrial livestock breeders do not have. Fecundity is high, so selection intensity can be extreme. Generation intervals are short in many species. External fertilisation permits controlled crosses and, in some species, the production of full-sibling and half-sibling families for estimating genetic parameters. Against this stands the difficulty of identifying individual animals, the fact that families must often be reared separately before tagging, and the environmental variance introduced by that separate rearing.",
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
            "Genetic gain is permanent and cumulative, which distinguishes it from every other improvement a farm can make. Better feed must be bought again next cycle; better aeration must be maintained and powered; a genetic gain, once fixed in a population, is inherited without further cost. Over many generations this compounds into differences in growth rate, survival and product quality that no husbandry change can match.",
        },
        {
          kind: "text",
          value:
            "The opposite is equally true and rather more common. A hatchery that repeatedly spawns from a small number of readily available parents, or that unknowingly breeds relatives, accumulates inbreeding whose effects appear as reduced survival, deformities and declining growth several generations later. By the time the pattern is visible, the population that would have been needed to correct it has often been lost.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Genetic change is directional either way",
          value:
            "A population under no deliberate management does not stay the same. Unintentional selection through hatchery practice, and loss of variation through small effective population size, move it in a direction nobody chose.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Heritability" },
        {
          kind: "text",
          value:
            "Heritability in the narrow sense is the proportion of the observed variation in a trait that is attributable to additive genetic effects — the part that is transmitted predictably from parent to offspring. It is not a property of a trait in the abstract but of a specific population measured in a specific environment. The same trait can show useful heritability in one setting and almost none in another, usually because environmental variation in the second setting swamps the genetic signal.",
        },
        { kind: "subheading", value: "Breeding value" },
        {
          kind: "text",
          value:
            "An animal's breeding value is the effect its genes are expected to have on its offspring, expressed as a deviation from the population mean. It is what selection should be based on, and it is not directly observable. It is estimated from the animal's own record and the records of its relatives, weighted by the relationship between them and by the heritability of the trait.",
        },
        { kind: "subheading", value: "Selection differential and response" },
        {
          kind: "text",
          value:
            "The selection differential is how far the chosen parents exceed the population mean for the trait. The response is how far their offspring exceed it. The ratio between them is heritability, which is why selecting hard on a trait with low heritability produces disappointment: the parents were exceptional, and most of the reason was environmental.",
        },
        { kind: "subheading", value: "Genetic correlation" },
        {
          kind: "text",
          value:
            "Traits are not independent. Selecting for growth may change body shape, age at maturity, disease resistance or flesh composition, because the same genes influence several traits. Where the correlation is unfavourable, single-trait selection produces a gain accompanied by a loss that may not be noticed for several generations. This is the principal argument for multi-trait selection with an explicit index.",
        },
        { kind: "subheading", value: "Effective population size" },
        {
          kind: "text",
          value:
            "Effective population size describes how many individuals are genuinely contributing genes, as distinct from how many are present. In hatcheries it is frequently far smaller than the broodstock count, because a few dominant spawners contribute disproportionate numbers of offspring and because family survival to tagging varies. It is the single number that governs the rate at which inbreeding accumulates.",
        },
      ],
    },
    {
      id: "technical-fundamentals",
      heading: "Technical fundamentals",
      blocks: [
        {
          kind: "formula",
          name: "Response to selection",
          expression: "R = h2 x S",
          terms: [
            { symbol: "R", meaning: "Genetic response achieved in one generation", unit: "trait units" },
            { symbol: "h2", meaning: "Narrow-sense heritability of the trait in that population and environment", unit: "dimensionless" },
            { symbol: "S", meaning: "Selection differential, the mean of selected parents minus the population mean", unit: "trait units" },
          ],
          example:
            "Consider a hypothetical population with a mean harvest weight of 500 g, from which parents averaging 620 g are selected, in a trait with an estimated heritability of 0.25. The selection differential is 120 g and the expected response in the next generation is about 30 g.",
          limitations:
            "The relationship assumes an unbiased heritability estimate for that population, no selection on correlated traits pulling against the objective, and offspring reared in a comparable environment. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Annual genetic gain",
          expression: "dG = i x r x sigmaA / L",
          terms: [
            { symbol: "dG", meaning: "Genetic gain achieved per year", unit: "trait units per year" },
            { symbol: "i", meaning: "Selection intensity, determined by the proportion of candidates selected", unit: "standard deviations" },
            { symbol: "r", meaning: "Accuracy of the estimated breeding value", unit: "dimensionless" },
            { symbol: "sigmaA", meaning: "Additive genetic standard deviation in the population", unit: "trait units" },
            { symbol: "L", meaning: "Generation interval", unit: "years" },
          ],
          example:
            "Consider a hypothetical programme with a selection intensity of 2.0, an accuracy of 0.6, an additive standard deviation of 45 g and a generation interval of 2 years. Expected gain is about 27 g per year, and the expression makes clear that halving the generation interval would do as much as doubling the additive variation.",
          limitations:
            "The four terms are not independent: raising selection intensity reduces the number of contributing families and therefore raises inbreeding, which must be constrained separately. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Effective population size from unequal sex numbers",
          expression: "Ne = 4 x Nm x Nf / (Nm + Nf)",
          terms: [
            { symbol: "Ne", meaning: "Effective population size", unit: "individuals" },
            { symbol: "Nm", meaning: "Number of males contributing offspring", unit: "individuals" },
            { symbol: "Nf", meaning: "Number of females contributing offspring", unit: "individuals" },
          ],
          example:
            "Consider a hypothetical spawning using 40 females but only 5 males. The effective population size is about 17.8, far below the 45 broodstock actually present, and inbreeding will accumulate at the rate implied by that smaller figure rather than the larger one.",
          limitations:
            "This form assumes random mating and equal family contributions; unequal fecundity, differential family survival and repeated use of the same individuals reduce the effective size further. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "flow",
          caption: "One cycle of a family-based selection programme.",
          steps: [
            { label: "Define the objective", detail: "State which traits are being improved and their relative economic weight, before any animal is selected. An objective assembled retrospectively is not an objective." },
            { label: "Assemble the base population", detail: "Draw founders from several sources or wild populations to maximise the genetic variation the programme will have to work with." },
            { label: "Produce families", detail: "Make defined crosses to create full-sibling and half-sibling families whose relationships are recorded at the moment of spawning." },
            { label: "Rear separately then tag", detail: "Hold families apart until individuals can be physically or genetically identified, accepting that this period introduces environmental differences between families." },
            { label: "Communal test", detail: "Combine tagged individuals into a shared environment so that family differences reflect genetics rather than differences in rearing tank." },
            { label: "Record traits", detail: "Measure the objective traits under conditions resembling commercial production, since gain achieved in an unrepresentative environment may not transfer." },
            { label: "Estimate breeding values", detail: "Analyse the records together with the pedigree to separate additive genetic effects from environmental and common-family effects." },
            { label: "Select and mate", detail: "Choose parents on estimated breeding value while applying an explicit constraint on the relatedness of the resulting matings." },
            { label: "Disseminate", detail: "Multiply selected material through a defined multiplication tier to commercial hatcheries, keeping the nucleus separate from production." },
          ],
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Approaches to genetic improvement and what each involves",
          columns: ["Approach", "Basis", "Practical requirement"],
          rows: [
            ["Strain evaluation", "Comparing existing strains or sources under common conditions", "A fair comparative trial; the cheapest first step and often the largest single gain available"],
            ["Mass selection", "Selecting individuals on their own phenotype", "Simple to run, effective for moderately to highly heritable traits, but prone to inbreeding if numbers are not managed"],
            ["Family-based selection", "Selecting using records of relatives and a maintained pedigree", "Tagging, family rearing capacity and record systems; necessary for traits not measurable on the candidate itself"],
            ["Crossbreeding", "Exploiting heterosis between differentiated lines", "Two or more maintained parent lines; the gain is realised in the cross and is not carried forward by further breeding from it"],
            ["Marker- and genomic-assisted selection", "Using genetic marker information to improve the accuracy of breeding values", "Genotyping infrastructure and a reference population; increasingly used where trait recording is difficult"],
            ["Chromosome set and sex control", "Triploidy, and production of monosex populations by established techniques", "Applied where sterility or a single-sex population has a clear production or regulatory rationale"],
          ],
          basis:
            "A structural comparison of improvement approaches and their operational prerequisites, not a ranking of effectiveness. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        { kind: "subheading", value: "Traits worth selecting for" },
        {
          kind: "text",
          value:
            "Growth rate has historically been the primary objective because it is easy to measure, moderately heritable in most species and directly connected to cycle length. Survival and disease resistance have become at least as important where a specific pathogen constrains the sector, and resistance to several agents has shown sufficient heritability to respond to selection. Beyond these sit feed efficiency, which is difficult to measure on individuals held communally, and quality traits including flesh composition, colour and yield.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Genomic selection in aquaculture species",
          value:
            "Genomic prediction is being applied in an increasing number of farmed aquatic species, particularly for traits such as disease resistance that cannot be measured on the selection candidate. Its cost-effectiveness varies with species value and with the size of the reference population available.",
        },
        { kind: "subheading", value: "Genotype by environment interaction" },
        {
          kind: "text",
          value:
            "A line improved under one set of conditions may not retain its advantage under another. Where the production environments served by a programme differ substantially in temperature, salinity or system type, the interaction has to be measured rather than assumed, and it may justify separate selection lines.",
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
            "Most farms and most hatcheries will never operate a selection programme, and should not attempt one. What they should do is manage their broodstock so that the genetic quality they purchased is not eroded, which is a much smaller task with most of the downside risk attached to it.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Record the origin, date and supplier of every broodstock group, and keep those records for the working life of the animals.",
            "Use as many parents as the facility can practically spawn, and balance the numbers of males and females contributing.",
            "Rotate spawners rather than repeatedly using the individuals that are most convenient or most responsive.",
            "Avoid selecting broodstock from within your own production output unless the pedigree is known, since that is the fastest route to unintended inbreeding.",
            "Introduce unrelated animals from a documented source at planned intervals to maintain variation.",
            "Keep families or spawning batches identified through the nursery stage wherever the facility allows it.",
            "Evaluate purchased seed by keeping a comparison group, so that a supplier's performance is a measurement rather than a reputation.",
            "Record what was crossed with what, even when no selection is intended, because the record is what makes a later correction possible.",
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
            "Broodstock are the most valuable and most demanding animals on a site. They require space, water quality at least as good as any production unit, a diet formulated for reproduction rather than growth, and often the controlled photoperiod and temperature regimes that condition them to spawn on schedule. Under-resourcing broodstock holding while investing in selection is a common inconsistency, and it limits the programme through poor gamete quality rather than through genetics.",
        },
        {
          kind: "text",
          value:
            "Family-based programmes impose specific engineering requirements: many small, independent, individually supplied rearing units for the separate-rearing phase, hydraulic separation between them, and a tagging facility. The number of units required rises with the number of families, and it is normally this, rather than the genetics, that sets the practical scale of the programme.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Common environment effects",
          value:
            "When families are reared separately before tagging, part of the difference later observed between them originates in the tanks rather than in the genes. Programme design and statistical analysis both have to account for this, or heritability will be overestimated and response will fall short.",
        },
        {
          kind: "text",
          value:
            "There are also regulatory and environmental considerations. Movement of improved strains, and any use of genetically modified organisms, is regulated, and escape of farmed animals into waters holding wild populations of the same or related species raises legitimate genetic concerns. Containment is part of the responsibility that comes with holding an improved population.",
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
            "Define the breeding objective in writing, with economic weights, before selecting anything.",
            "Constrain inbreeding explicitly at every generation rather than checking for it afterwards.",
            "Maintain records that allow any animal's ancestry to be reconstructed; a breeding programme without a pedigree is not one.",
            "Test candidates in an environment representative of where their offspring will be produced.",
            "Keep the nucleus population separate from commercial production, both physically and in its management.",
            "Prefer multi-trait selection with an index over sequential single-trait selection, because correlated responses are otherwise invisible until they are large.",
            "Measure realised gain against a control or reference group rather than against the memory of previous cycles.",
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
          caption: "Genetic management failures and their origins",
          columns: ["Observation", "Likely underlying cause"],
          rows: [
            ["Survival and growth declining over several generations", "Accumulated inbreeding from a small effective population size, often much smaller than the broodstock count suggests"],
            ["Deformities increasing in successive batches", "Inbreeding depression, or incubation conditions; the two are distinguished by whether unrelated stock in the same facility is affected"],
            ["Selected line performing no better commercially", "Selection conducted in an environment unlike production, or a genotype by environment interaction that was not measured"],
            ["Growth improved but maturation now occurring earlier", "An unfavourable genetic correlation, which single-trait selection on growth cannot see"],
            ["Purchased improved seed showing no advantage", "Multiplication tier breeding from too few parents, so the improvement did not survive dissemination"],
            ["Heritability estimates unrealistically high", "Common environment effects from separate family rearing being attributed to genetics"],
            ["Broodstock spawning poorly despite good genetics", "Holding conditions, nutrition or conditioning regime rather than any genetic factor"],
          ],
          basis:
            "Patterns described in aquaculture genetics and hatchery management literature, presented as diagnostic starting points. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Begin with strain comparison under your own conditions before contemplating a selection programme, because it is cheap and frequently sufficient.",
            "Build the base population from several sources to maximise the variation available to select on.",
            "Track effective population size as a routine number, not as an occasional calculation.",
            "Maintain a slowly changing reference or control group so that realised gain can be measured rather than assumed.",
            "Resource broodstock holding to a higher standard than production units, since gamete quality limits everything downstream.",
            "Document the dissemination path from nucleus to commercial hatchery, and set minimum parent numbers at every tier.",
            "Where technical capacity is limited, buy improved seed from a documented programme and concentrate effort on not degrading it.",
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
            "The central tension in any breeding programme is between gain and diversity. Selecting more intensely raises the response in the short term while reducing the number of families contributing, which raises inbreeding and erodes the variation that future response depends on. Formal optimum contribution selection resolves this by maximising genetic merit subject to an explicit constraint on the average relatedness of the selected group, which is a better formulation than selecting on merit and hoping the relatedness is acceptable.",
        },
        {
          kind: "text",
          value:
            "A second theme is the economics of the programme itself. Genetic gain accrues to whoever produces the animals, which is often not whoever paid for the programme, so breeding programmes in aquaculture require a dissemination and business structure as carefully designed as the selection scheme. Many technically sound programmes have failed on this rather than on genetics.",
        },
        {
          kind: "text",
          value:
            "Finally, the objective itself should be revisited. A programme selecting for growth in a sector whose binding constraint has become disease, or feed efficiency, or resilience to warmer water, is optimising a variable that no longer limits anything. Because response is cumulative, a misdirected objective compounds just as reliably as a correct one.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Genetic gain is permanent and cumulative, which distinguishes it from every other input a farm buys.",
    "Heritability is a property of a population in an environment, not of a trait in general, and it determines how much of a selection differential is realised.",
    "Effective population size, not broodstock count, governs the rate at which inbreeding accumulates.",
    "Traits are genetically correlated, so single-trait selection produces unintended changes that appear only after several generations.",
    "Testing candidates in an environment unlike commercial production risks gain that does not transfer.",
    "Most farms should buy improved seed from a documented programme and concentrate on not eroding it through hatchery practice.",
  ],
  related: ["hatchery", "fish-biology", "fish-health", "research"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Technical material on aquatic genetic resources, selective breeding programmes and their management.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute programmes on selective breeding and broodstock management for Indian farmed species.",
    },
    {
      organisation: "Central Marine Fisheries Research Institute",
      description: "Research and extension material on broodstock development and seed production for marine species.",
    },
  ],
};
