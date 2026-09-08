import type { KnowledgeArea } from "../types";

export const research: KnowledgeArea = {
  number: "30",
  slug: "research",
  title: "Research and Innovation",
  navSummary: "How aquaculture knowledge is generated, tested and transferred, and how a farm can run trials that mean something.",
  summary:
    "Aquaculture research spans breeding, nutrition, health, engineering and systems work, carried out by institutes, universities and industry. This section describes how that work is organised, how findings move from laboratory to commercial practice, and how a working farm can design its own trials so the results are trustworthy rather than merely encouraging.",
  difficulty: "advanced",
  topics: ["research", "biology", "sustainability"],
  tags: ["experimental design", "trial protocol", "technology transfer", "replication", "knowledge gaps"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-08-12",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Most of what a farm knows came from somebody's experiment. Understanding how those experiments are run makes it possible to judge which findings apply to your own water and species, and to run your own comparisons properly rather than changing several things at once and guessing which one worked.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Aquaculture is a young production sector by agricultural standards, and much of its technical foundation has been laid within living memory. Domestication of most farmed aquatic species is incomplete, nutritional requirements are established for only a fraction of them, and system design conventions vary widely between regions. As a result, the distance between the research frontier and everyday farm practice is unusually short, and a farm that reads the literature can put it to use quickly.",
        },
        {
          kind: "text",
          value:
            "Research in the sector is conducted across several settings. Public institutes and universities carry out fundamental and applied work on species biology, breeding, nutrition, disease and system design. Commercial organisations conduct development work that is closer to product and often not published. Farms themselves generate a large volume of practical knowledge, most of which is never formalised and therefore never travels.",
        },
        {
          kind: "text",
          value:
            "This section describes the structure of that activity in the field generally, and sets out how findings should be read, adapted and tested before they are relied upon on a specific site.",
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
            "The practical reason is transferability. A result obtained with one species, at one temperature, in one system type, on one diet, is not automatically valid elsewhere. Reading a finding and knowing which of its conditions were essential and which were incidental is what separates useful adoption from expensive imitation.",
        },
        {
          kind: "text",
          value:
            "The second reason is that farms make changes constantly — a new feed, a different stocking pattern, a modified aeration arrangement — and almost never evaluate them in a way that could distinguish improvement from ordinary cycle-to-cycle variation. Aquaculture is unusually noisy: temperature, seed quality, weather and water source all vary between cycles, and any of them can produce a difference larger than the change being tested.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Variation between cycles is large",
          value:
            "Biological production systems show substantial variation between replicate units and between successive cycles even when management is unchanged. A single before-and-after comparison therefore cannot attribute a difference to the intervention, because it cannot separate the intervention from that background variation.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Hypothesis and comparison" },
        {
          kind: "text",
          value:
            "A trial answers a specific question stated in advance, in a form that could turn out to be wrong. The comparison is against a control run under identical conditions except for the one factor under test. Without a concurrent control, any observed change is confounded with everything else that differed between the periods being compared.",
        },
        { kind: "subheading", value: "Replication and the experimental unit" },
        {
          kind: "text",
          value:
            "The experimental unit is the smallest entity that could have received a different treatment independently. In a tank trial the unit is the tank, not the individual fish, because all the fish in a tank share the same water and the same equipment. Treating individual animals as replicates when treatments were applied at tank level is the most common statistical error in production research, and it makes differences look far more significant than they are.",
        },
        { kind: "subheading", value: "Randomisation and blinding" },
        {
          kind: "text",
          value:
            "Treatments are assigned to units at random so that systematic differences between units — position, light, proximity to the pump, temperature gradient — do not align with the treatment. Where an assessment involves judgement, such as scoring condition or appearance, the assessor should not know which treatment they are looking at.",
        },
        { kind: "subheading", value: "Effect size and practical significance" },
        {
          kind: "text",
          value:
            "A difference can be real without being worth acting on. The question that matters commercially is whether the size of the effect justifies the cost and disruption of adopting it. A trial should therefore state in advance what magnitude of improvement would change the decision, and be designed with enough replication to detect a difference of that size.",
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
            "Two ideas do most of the work when planning a trial: how confident the design can be in distinguishing a real effect from noise, and how a specific growth measure should be expressed so results can be compared across trials.",
        },
        {
          kind: "formula",
          name: "Detectable difference and replication",
          expression: "d = k x s / sqrt(n)",
          terms: [
            { symbol: "d", meaning: "Smallest difference between treatment means the design can reliably detect", unit: "same units as the measured response" },
            { symbol: "k", meaning: "Factor reflecting the chosen confidence and power of the test", unit: "dimensionless" },
            { symbol: "s", meaning: "Standard deviation of the response between units under identical management", unit: "same units as the response" },
            { symbol: "n", meaning: "Number of independent replicate units per treatment", unit: "count" },
          ],
          example:
            "Consider a hypothetical trial where the variation in final mean weight between identically managed tanks is known from past cycles. Because the detectable difference falls only with the square root of replication, quadrupling the number of tanks halves the difference that can be detected — which is why small trials routinely fail to show effects that are commercially meaningful.",
          limitations:
            "The calculation requires a prior estimate of between-unit variation, which most farms do not have, and it assumes units are genuinely independent rather than sharing water, air supply or handling. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Specific growth rate",
          expression: "SGR = 100 x (ln(W2) - ln(W1)) / t",
          terms: [
            { symbol: "SGR", meaning: "Specific growth rate, a normalised measure of growth", unit: "percent per day" },
            { symbol: "W1", meaning: "Mean weight at the start of the period", unit: "g" },
            { symbol: "W2", meaning: "Mean weight at the end of the period", unit: "g" },
            { symbol: "t", meaning: "Duration of the period", unit: "days" },
          ],
          example:
            "Consider a hypothetical trial period over which mean weight rises from one value to another. Expressing the change as a specific growth rate allows comparison between groups that started at different sizes, which a simple weight gain figure does not, since larger animals gain more absolute weight for the same relative performance.",
          limitations:
            "Specific growth rate declines naturally as animals grow, so it is only comparable between groups over the same size range and the same temperature regime, and it is sensitive to sampling error in the mean weights. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "The recurring lesson from both is that measurement quality determines what a trial can conclude. If sampling introduces more variation than the treatment produces, no amount of analysis afterwards recovers the answer.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Principal research areas in aquaculture and the questions each addresses",
          columns: ["Area", "Typical questions", "Why transfer to farms is difficult"],
          rows: [
            ["Breeding and genetics", "Selection for growth, survival, disease resistance and product quality", "Gains are realised over generations and depend on a maintained breeding programme"],
            ["Nutrition and feeds", "Requirement definition, ingredient substitution, digestibility and feed physical quality", "Results are species, size, temperature and system specific"],
            ["Health and disease", "Pathogen characterisation, diagnostics, vaccines and management interventions", "Field conditions involve mixed challenges rather than the single agent studied"],
            ["Systems and engineering", "Treatment performance, hydraulics, energy use and scale-up behaviour", "Small experimental systems do not behave like commercial ones"],
            ["Reproduction and larval biology", "Broodstock conditioning, spawning control and larval nutrition", "Larval work is sensitive to conditions that are difficult to reproduce"],
            ["Environment and sustainability", "Effluent characterisation, nutrient recovery and resource efficiency", "Impacts depend on the receiving environment as much as on the farm"],
            ["Data and modelling", "Growth prediction, water quality forecasting and decision support", "Models inherit the conditions of the data they were built from"],
          ],
          basis:
            "A structural survey of research areas in the aquaculture field and their characteristic transfer difficulties, not an assessment of any specific programme or result. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        { kind: "subheading", value: "Scale-up as its own problem" },
        {
          kind: "text",
          value:
            "Results obtained in small tanks frequently fail to reproduce at commercial scale. Surface-to-volume ratios, mixing behaviour, thermal inertia, social interactions at different group sizes and the practicalities of feeding a large population all change with scale. Scale-up is not a formality between research and adoption; it is a distinct stage with its own failure modes, and it deserves its own trial.",
        },
        { kind: "subheading", value: "Knowledge transfer" },
        {
          kind: "text",
          value:
            "Findings move from research to practice through extension services, industry publications, supplier technical support, training programmes and farmer-to-farmer contact. Each of these channels compresses the original result, and the conditions attached to it are usually the first thing lost. A recommendation that arrives without its conditions should be treated as a hypothesis for local testing rather than as an instruction.",
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
            "A farm trial does not need to be elaborate, but it does need to be designed before it starts. The following sequence produces a result that can be relied on.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "State the question precisely, including the response that will be measured and the size of difference that would change the decision.",
            "Identify the experimental unit honestly, and count only genuinely independent units as replicates.",
            "Run a concurrent control under the same conditions, rather than comparing against a previous cycle.",
            "Assign treatments to units at random, and record the assignment before the trial begins.",
            "Change one factor only. A trial that changes feed and feeding frequency together cannot attribute its result to either.",
            "Standardise sampling: the same method, the same time of day, the same number of animals, the same person where possible.",
            "Record everything that could confound the result — temperature, water chemistry, mortality, feed delivered, handling events, equipment faults.",
            "Decide the analysis approach before seeing the data, so the method is not chosen to suit the outcome.",
            "Report the result whether or not it favoured the change, and keep the record so a future question can be answered from it.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Negative results are worth recording",
          value:
            "A trial showing that a change made no difference is commercially valuable, because it prevents the cost of adopting it and stops the same idea being retried. Farms rarely record these, which is why the same unproductive changes circulate repeatedly.",
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
            "Biological trials in aquaculture face intrinsic difficulties. The animals are largely unobservable, sampling them is itself a stressor that alters the outcome, and populations within a unit are heterogeneous in size and behaviour. Mortality removes individuals non-randomly, usually the weaker ones, which improves the apparent performance of surviving animals in exactly the treatments that performed worst.",
        },
        {
          kind: "text",
          value:
            "Engineering trials face a different difficulty: independence. Units sharing a water loop, a blower or a filter are not independent, and a treatment applied to one can propagate to the others. Genuine replication in systems research therefore requires independent loops, which is expensive, and this is the main reason systems findings are harder to establish than nutritional ones.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Conditions travel with the result",
          value:
            "Every published finding carries the species, size range, temperature, water chemistry, diet, system type and stocking density under which it was obtained. Applying it to different conditions is an assumption about which of those factors mattered, and that assumption is worth stating explicitly before acting on it.",
        },
        {
          kind: "text",
          value:
            "There is also an ethical dimension. Trials involving live animals should minimise the number used, avoid unnecessary suffering, and be designed well enough that the animals used actually yield an answer. An underpowered trial is an ethical failing as well as a methodological one, because the animals were used for nothing.",
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
            "Keep a written protocol for every trial, agreed before it starts and not modified once data collection is under way.",
            "Nominate someone responsible for the trial record, separate from the person running the units day to day.",
            "Build a baseline of normal variation between units under identical management, because without it no trial can be sized properly.",
            "Run trials on units the farm can afford to lose, and never on the whole production at once.",
            "Keep the raw data, not only the summary, so a later question can be examined against the original observations.",
            "Read findings with attention to the conditions attached, and record which conditions your own site does not match.",
            "Treat supplier claims as hypotheses to be tested locally, with a control, rather than as specifications.",
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
          caption: "Common failures in farm and applied trials, and what causes them",
          columns: ["Observation", "Usual underlying cause"],
          rows: [
            ["A promising trial result does not reproduce in production", "Result reflected background variation rather than the treatment, because there was no concurrent control"],
            ["Differences appear highly significant but are not real", "Individual animals treated as replicates when the treatment was applied at unit level"],
            ["The cause of an improvement cannot be identified", "Several factors changed at once, so the effect cannot be attributed to any of them"],
            ["Results from small tanks fail at commercial scale", "Scale-dependent behaviour in mixing, thermal inertia, feeding and social interaction"],
            ["Treatment groups differed before the trial began", "Units not randomised, or stock allocated by convenience rather than at random"],
            ["Survival differences distort growth comparisons", "Non-random mortality removing smaller animals and inflating the mean weight of the worst-performing group"],
            ["Conclusions change depending on how the data are analysed", "Analysis method chosen after the data were seen rather than specified in advance"],
          ],
          basis:
            "Methodological failure patterns described in applied biological and agricultural research practice, presented as diagnostic starting points. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Write the question, the response measure and the decision threshold down before the trial starts, and do not change them afterwards.",
            "Always run a concurrent control, even when the expected effect seems obvious.",
            "Prefer more replicate units over more animals per unit, since replication is what buys statistical resolution.",
            "Standardise sampling method and timing rigorously, because sampling variation is frequently larger than the effect under test.",
            "Record confounding variables continuously, since they are the only way to explain an anomalous result later.",
            "Repeat an important result at least once before changing production practice on the strength of it.",
            "Publish or at least circulate results within the organisation, including the ones that showed nothing.",
          ],
        },
      ],
    },
    {
      id: "advanced",
      heading: "Advanced knowledge",
      blocks: [
        {
          kind: "flow",
          caption: "How a finding conventionally travels from question to commercial practice. Each stage can invalidate the previous one.",
          steps: [
            { label: "Question", detail: "A specific, falsifiable question arises from an observed problem or an unexplained result in practice." },
            { label: "Controlled study", detail: "The question is tested under tightly controlled conditions in small units where confounding factors can be held constant." },
            { label: "Mechanism", detail: "Where possible the underlying mechanism is identified, which is what allows the result to be extrapolated at all." },
            { label: "Pilot scale", detail: "The effect is retested in larger units where mixing, thermal behaviour and group dynamics resemble commercial conditions." },
            { label: "Commercial trial", detail: "The change is tested on a working farm with a concurrent control and full operational recording." },
            { label: "Economic evaluation", detail: "The effect size is compared against the cost of adoption and the variability of commercial outcomes." },
            { label: "Adoption and monitoring", detail: "The change enters standard practice with continued measurement, since effects can decay or interact with later changes." },
          ],
        },
        {
          kind: "text",
          value:
            "The most valuable stage in that chain is the mechanistic one, because a result without a mechanism can only be applied under conditions closely matching those it was obtained in. A result with a mechanism can be reasoned about — extended to a different temperature, a different size class or a different system — with a defensible argument rather than a hope.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Persistent open questions in the field",
          value:
            "Areas of continuing work across the sector include nutrient requirement definition for the many farmed species where it remains incomplete, alternative ingredients that reduce dependence on marine-derived feed inputs, disease management approaches that reduce reliance on antimicrobials, welfare indicators that can be measured on working farms, non-invasive assessment of stock condition, and closing nutrient and energy loops in intensive systems. These are directions of active investigation rather than resolved questions.",
        },
        {
          kind: "text",
          value:
            "A final observation concerns how a farm should relate to the literature. The realistic aim is not to conduct research but to read it accurately, to identify which findings depend on conditions the farm shares, and to test the remainder locally at a scale the business can afford. That discipline produces more improvement over time than adopting each promising claim as it appears.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Aquaculture is a young sector with an incomplete knowledge base, so the distance between research and practice is short and worth closing deliberately.",
    "The experimental unit is the tank or pond, not the individual animal, and mistaking the two is the most common error in production trials.",
    "Background variation between cycles and between units is large, so a concurrent control is essential rather than optional.",
    "Detectable difference improves only with the square root of replication, which is why small trials miss commercially meaningful effects.",
    "Every finding carries the conditions it was obtained under, and transferring it elsewhere is an assumption that should be stated and tested.",
    "Scale-up is a distinct stage with its own failure modes, because small systems do not behave like commercial ones.",
  ],
  related: ["breeding-genetics", "feed-nutrition", "automation-ai", "sustainable"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Technical papers, sector reviews and guidance covering aquaculture research and development priorities.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Fisheries institutes conducting and publishing research on Indian species, systems and production practice.",
    },
    {
      organisation: "Central Marine Fisheries Research Institute",
      description: "Research programmes and publications on marine and coastal aquaculture in India.",
    },
  ],
};
