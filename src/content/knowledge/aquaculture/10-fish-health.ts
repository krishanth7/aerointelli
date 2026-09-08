import type { KnowledgeArea } from "../types";

export const fishHealth: KnowledgeArea = {
  number: "10",
  slug: "fish-health",
  title: "Fish Health and Disease",
  navSummary: "How disease arises from the interaction of host, pathogen and environment, and how a farm builds diagnosis and response into normal operation.",
  summary:
    "Disease in aquaculture is rarely the simple arrival of a pathogen. It is the outcome of an interaction between a susceptible host, an agent that is often already present, and environmental conditions that have shifted the balance between them. Health management is therefore mostly husbandry and water management, with diagnosis and intervention as the smaller and later part of the work.",
  difficulty: "advanced",
  topics: ["health", "fish", "biology", "operations"],
  tags: ["disease triangle", "pathogens", "diagnosis", "stress physiology", "mortality investigation", "health monitoring"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-03",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Fish get sick when something weakens them and a pathogen that was already around takes advantage. Most outbreaks follow a handling event, a water quality problem or a temperature change. The useful work is noticing the change in behaviour early, finding out what actually happened, and fixing the cause rather than treating the symptom.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Aquatic animals live immersed in a medium that carries their pathogens, their waste and their food together. Their skin, gill and gut surfaces are in continuous contact with that medium, and the mucus layer covering them is the principal barrier. Anything that damages that barrier — abrasion during handling, fine suspended solids, sustained un-ionised ammonia, an abrupt salinity or temperature change — opens a route for organisms that were previously tolerated.",
        },
        {
          kind: "text",
          value:
            "This is why the classical disease triangle is more than a teaching device in aquaculture. Host susceptibility, pathogen presence and environmental conditions all have to align for clinical disease, and on a farm the environmental corner is the one the operator actually controls. A health programme that concentrates on treatments while leaving the environment unexamined will spend continuously and improve nothing.",
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
            "Disease losses are expensive in a way that is easy to under-count. The visible cost is mortality, but the larger cost is usually the feed already invested in animals that die late in the cycle, the growth lost across the survivors, the delayed harvest, and the disruption to the stocking schedule of every unit downstream. A cycle interrupted near its end loses far more than the same proportional mortality would suggest.",
        },
        {
          kind: "text",
          value:
            "There is a sectoral dimension as well. Disease events propagate between farms through water, movements of stock, shared equipment and shared staff, and several aquaculture sectors worldwide have been reshaped by a single pathogen. Health management on one farm is partly a contribution to the health status of the area it sits in.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Most outbreaks have a precipitating event",
          value:
            "Clinical disease in a previously stable population usually follows an identifiable disturbance: handling, grading, transport, a water quality excursion, a temperature transition or a change of feed. Establishing what happened in the preceding days is part of the diagnosis.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "The stress response" },
        {
          kind: "text",
          value:
            "Stress in fish is a defined physiological cascade rather than a figure of speech. A stressor triggers a rapid catecholamine response affecting circulation and gill permeability, followed by a slower corticosteroid response that mobilises energy reserves. Acutely this is adaptive. Sustained, it diverts energy away from growth and reproduction, alters osmoregulation and suppresses aspects of immune function, which is the mechanistic link between poor conditions and disease.",
        },
        { kind: "subheading", value: "Obligate and opportunistic pathogens" },
        {
          kind: "text",
          value:
            "Some agents cause disease in healthy animals under good conditions; these are the ones that justify exclusion, surveillance and movement control. Many more are ubiquitous organisms that become pathogenic only when the host is compromised. The distinction matters operationally: the first group is a biosecurity problem and the second is a husbandry problem, and confusing them leads to farms disinfecting heavily while the real cause persists.",
        },
        { kind: "subheading", value: "Immunity in fish" },
        {
          kind: "text",
          value:
            "Fish possess both innate and adaptive immunity, with the innate arm carrying proportionally more of the load than in mammals. Adaptive responses develop and are retained, which is the basis for vaccination in the sectors where vaccines exist, but their development is markedly temperature-dependent. A response mounted in warm water may be slow or incomplete in cold water, and this shapes when vaccination or challenge can usefully occur.",
        },
        { kind: "subheading", value: "Prevalence, incidence and case definition" },
        {
          kind: "text",
          value:
            "Investigating a health event requires stating what is being counted. Prevalence is the proportion affected at a point in time; incidence is the rate of new cases; and both depend entirely on a case definition set in advance. Without one, a mortality investigation collects impressions rather than data, and comparison between units or between cycles becomes impossible.",
        },
      ],
    },
    {
      id: "technical-fundamentals",
      heading: "Technical fundamentals",
      blocks: [
        {
          kind: "flow",
          caption: "A structured mortality investigation, in the order that preserves the most information.",
          steps: [
            { label: "Observe before intervening", detail: "Record behaviour, distribution in the unit, feeding response and the position of affected animals before any netting or treatment alters what is visible." },
            { label: "Retrieve the record", detail: "Assemble water quality logs, feed records, temperature, mortality counts, and every handling or movement event over the preceding period." },
            { label: "Sample the right animals", detail: "Examine moribund animals rather than long-dead ones, since post-mortem change destroys the tissue evidence and permits overgrowth by environmental organisms." },
            { label: "Gross examination", detail: "Systematic external and internal inspection covering skin, fins, gill, eyes, body cavity, gut and internal organs, with findings written down as observed rather than as interpreted." },
            { label: "Laboratory confirmation", detail: "Wet mounts, histopathology, bacteriology or molecular testing as appropriate, submitted to a competent diagnostic laboratory with the field history attached." },
            { label: "Reconcile with the environment", detail: "Test whether the laboratory finding explains the pattern and timing observed, or whether it is an incidental finding on top of an environmental cause." },
            { label: "Act on the cause", detail: "Correct the precipitating condition, define what will be monitored to confirm recovery, and record the whole sequence so the next occurrence starts from evidence." },
          ],
        },
        {
          kind: "formula",
          name: "Cumulative mortality",
          expression: "CM = 100 x Dc / N0",
          terms: [
            { symbol: "CM", meaning: "Cumulative mortality over the period", unit: "%" },
            { symbol: "Dc", meaning: "Total deaths recorded since the start of the period", unit: "number" },
            { symbol: "N0", meaning: "Number stocked at the start of the period", unit: "number" },
          ],
          example:
            "Consider a hypothetical unit stocked with 20,000 fingerlings in which 900 deaths have been recorded to date. Cumulative mortality stands at 4.5 per cent, a figure that is only interpretable alongside the daily rate and the stage of the cycle at which the losses occurred.",
          limitations:
            "Cumulative mortality conceals its own shape: a steady low loss and a short severe episode can produce the same total while meaning entirely different things. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Daily mortality rate",
          expression: "DMR = 100 x Dd / Nd",
          terms: [
            { symbol: "DMR", meaning: "Daily mortality rate", unit: "%/day" },
            { symbol: "Dd", meaning: "Deaths recorded on the day", unit: "number" },
            { symbol: "Nd", meaning: "Population alive at the start of that day", unit: "number" },
          ],
          example:
            "Consider a hypothetical population of 18,000 animals in which daily losses move from 6 to 9 to 21 over three days. The absolute numbers are small, but the rate is accelerating, and it is the acceleration rather than the count that signals an emerging event.",
          limitations:
            "The rate depends on the accuracy of the surviving population estimate, which itself degrades through the cycle, and on the diligence with which dead animals are actually recovered. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Broad categories of health problem and how each typically presents",
          columns: ["Category", "Typical presentation", "Principal management approach"],
          rows: [
            ["Environmental and non-infectious", "Whole-unit onset, rapid, affecting all sizes similarly, often gill or behavioural signs", "Identify and correct the water quality, gas or temperature condition responsible"],
            ["Nutritional", "Gradual, population-wide, characteristic tissue or skeletal signs, poor conversion", "Review formulation, storage history and actual intake rather than the printed specification"],
            ["Parasitic, external", "Flashing, rubbing, increased mucus, gill irritation, often size- or unit-specific", "Confirm by direct microscopy of skin and gill; address stocking, water and organic load"],
            ["Parasitic, internal", "Poor condition, uneven growth, findings at post-mortem rather than externally", "Diagnosis through examination of gut and organs; consider the life cycle and its intermediate hosts"],
            ["Bacterial", "Skin lesions, fin erosion, internal organ changes, often secondary to damage or stress", "Confirm by culture with sensitivity testing under veterinary direction; correct the predisposing cause"],
            ["Fungal and oomycete", "Cotton-like external growth, characteristically on damaged tissue or eggs", "Almost always secondary; address the injury, water quality or handling that preceded it"],
            ["Viral", "Sudden onset, often stage- and temperature-specific, frequently high mortality", "Exclusion, surveillance and stock movement control; supportive husbandry, since treatment options are limited"],
          ],
          basis:
            "A structural grouping of health problems by mechanism and typical presentation, not a diagnostic key. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        { kind: "subheading", value: "Diagnostic methods" },
        {
          kind: "text",
          value:
            "The diagnostic toolkit runs from immediate on-farm techniques to specialist laboratory work. Direct microscopy of a fresh skin scrape or gill clip is the fastest and most under-used tool on most farms, because it answers the parasite question in minutes and can be done by trained farm staff. Histopathology reveals tissue-level change that culture cannot. Bacteriology identifies organisms and, importantly, supports sensitivity testing. Molecular methods detect specific agents at very low levels, with the corresponding caution that detection of genetic material is not by itself evidence of disease.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Detection is not diagnosis",
          value:
            "A positive molecular result confirms that an agent is present. Whether it is causing the observed problem is a separate question answered by pathology, by the pattern of the outbreak and by the environmental history.",
        },
        { kind: "subheading", value: "Prevention through vaccination and immune support" },
        {
          kind: "text",
          value:
            "Where licensed vaccines exist for a species and pathogen, vaccination is the most effective preventive tool available, and its use has transformed the health profile of some sectors. Availability is uneven, and for many warm-water species farmed in India no licensed product exists. Where it does not, prevention rests on stock source, environment and husbandry.",
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
            "Routine health surveillance is a daily observational discipline. Most of the signal available to a farm arrives through behaviour rather than through testing, and it arrives before any laboratory would have been consulted.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Observe the feeding response at every meal and record it, because a fall in appetite is the earliest and most reliable general indicator available.",
            "Watch swimming behaviour and distribution: crowding at inlets, surface gasping, isolation from the shoal, flashing or rubbing each point in a different direction.",
            "Count and remove mortalities daily, and examine a proportion of them rather than only recording the number.",
            "Note external condition during any routine sampling — skin, fins, gill colour, eyes, body condition — in a consistent format.",
            "Keep the water quality record alongside the health record, since the interpretation of one always requires the other.",
            "Establish the relationship with a diagnostic laboratory and a qualified aquatic veterinarian before an emergency, not during one.",
            "Submit samples with a full written history; a laboratory given tissue without context can only report what it sees.",
          ],
        },
        { kind: "subheading", value: "Responsible use of veterinary medicines" },
        {
          kind: "text",
          value:
            "Any therapeutic intervention in food animals must be directed by a qualified veterinarian, follow the applicable national regulations, respect withdrawal periods and be recorded. The principles that matter are the ones that hold regardless of the product: treat on a confirmed diagnosis rather than on suspicion, correct the predisposing cause at the same time, complete the course, and record the outcome. Repeated empirical treatment without diagnosis drives antimicrobial resistance, imposes cost without benefit, and delays the discovery of the actual problem.",
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
            "Temperature is the dominant biological variable in fish health. It determines the rate at which a pathogen replicates, the rate at which the host mounts a response, and which agents are active at all. Many diseases have a temperature window outside which they are not seen, and the periods of greatest risk are frequently the transitions rather than the extremes, because the pathogen's optimum and the host's optimum move at different rates.",
        },
        {
          kind: "text",
          value:
            "Density and hydraulics matter as much as any biological factor. Density raises contact rate and shortens the distance between animals, so a transmissible agent spreads faster in a crowded unit. Flow pattern determines whether pathogens and metabolites are carried away or recirculated. In systems with shared water, the design decision about whether units are hydraulically independent is a health decision made years before any outbreak.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Shared water is shared risk",
          value:
            "Where several culture units share a treatment loop, an infectious agent in one unit should be assumed capable of reaching the others unless a barrier has been specifically designed and validated. Physical separation of the water is what confers independence, not physical separation of the tanks.",
        },
        {
          kind: "text",
          value:
            "Handling is the engineering variable most directly under operational control. Net material, crowding duration, air exposure, pumping method and grading equipment all determine how much mucus and scale damage occurs, and therefore how much opportunity is created for opportunistic agents in the days that follow.",
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
            "Treat health as an outcome of environment and husbandry first, and as a pharmaceutical question only after those have been examined.",
            "Investigate before intervening, unless the animals are actively dying from a condition that can be corrected immediately.",
            "Establish a written case definition at the start of an investigation so that counts mean the same thing on day one and day ten.",
            "Keep life stages and batches separated, and work through the farm from youngest and healthiest to oldest or affected.",
            "Record every handling event, because the timing of an outbreak relative to handling is frequently the diagnosis.",
            "Never move stock out of a unit under investigation until the investigation has concluded.",
            "Retain preserved samples from significant events, so that a recurrence can be compared rather than re-guessed.",
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
          caption: "Observed patterns and the direction each points",
          columns: ["Pattern", "What it usually indicates"],
          rows: [
            ["Sudden mortality across all sizes in one unit simultaneously", "Environmental or equipment failure rather than infection; check oxygen, gas supersaturation and any recent chemical addition"],
            ["Losses beginning in one unit and appearing later in others", "A transmissible agent moving with water, equipment or staff between units"],
            ["Mortality starting three to seven days after grading", "Handling damage followed by opportunistic infection of compromised skin and gill"],
            ["Appetite falling for several days before any deaths", "A developing problem, usually water quality or a systemic infection, that is being reported early by behaviour"],
            ["Only the smallest animals affected", "Competition, size-related susceptibility, or a stage-specific agent; consider whether grading was overdue"],
            ["Repeated outbreaks in the same season each year", "A temperature-associated agent, or a recurring management event that coincides with that period"],
            ["Treatment appears effective then the problem returns", "The predisposing environmental cause was never corrected, so the population was re-exposed under the same conditions"],
            ["Laboratory finds an organism but the pattern does not fit", "Likely an incidental or secondary finding; continue the investigation rather than closing it"],
          ],
          basis:
            "Epidemiological patterns commonly described in aquatic animal health literature, offered as directions for investigation rather than as diagnoses. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Write a health plan before stocking, covering routine surveillance, the sampling regime, the escalation path and the contacts to be used.",
            "Source stock from suppliers able to provide a documented health history, and quarantine incoming animals in a separate water circuit.",
            "Train staff to perform and interpret a basic skin scrape and gill clip, since speed of diagnosis usually matters more than sophistication.",
            "Keep basic microscopy and sampling materials on the farm and in working order.",
            "Fix a threshold in advance at which a rising mortality rate triggers a formal investigation, and honour it rather than waiting to see.",
            "Involve a qualified aquatic veterinarian for any diagnosis that will lead to treatment, and follow all regulatory and withdrawal requirements.",
            "Debrief every significant event in writing, including what was not known at the time, and revise the health plan from it.",
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
            "Advanced health management becomes epidemiological rather than clinical. The questions shift from what organism is present to how risk is distributed across the site: which units share water, which share staff and equipment, which receive stock from which source, and where the movement network creates a path that a pathogen could follow. Drawing that network explicitly usually exposes routes that were never intended and never noticed.",
        },
        {
          kind: "text",
          value:
            "The host-side counterpart is selective breeding for disease resistance, which has produced durable gains in several farmed species and is treated more fully in the breeding section. Resistance to some agents shows useful heritability, which makes it a genetic solution to a health problem, with the advantage that it does not require anything to be administered.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Host microbiome and resistance",
          value:
            "The relationship between gut and mucosal microbial communities and resistance to infection is an active field. The association is well described; deliberate and reliable manipulation of those communities as a health tool remains under investigation.",
        },
        {
          kind: "text",
          value:
            "Finally, there is the economics of health decisions. Preventive spending competes with every other use of capital, and the honest way to evaluate it is against the expected cost of the events it prevents, including the probability that they occur at the worst point in the cycle. That calculation nearly always favours prevention, and it is worth performing explicitly rather than asserting, because doing so also identifies which specific preventive measure is worth the most.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Disease requires a susceptible host, a pathogen and permitting conditions, and the environment is the corner the farm actually controls.",
    "Stress is a defined physiological cascade that diverts energy from growth and suppresses immune function when sustained.",
    "Obligate pathogens are a biosecurity problem while opportunists are a husbandry problem, and the two require different responses.",
    "Detection of an agent is not the same as diagnosis of a disease; the pattern and the environmental history must also fit.",
    "Most outbreaks in a previously stable population follow an identifiable disturbance, commonly handling or a water quality excursion.",
    "Therapeutic intervention belongs under veterinary direction, on a confirmed diagnosis, and alongside correction of the predisposing cause.",
  ],
  related: ["biosecurity", "water-quality", "breeding-genetics", "fish-biology"],
  furtherReading: [
    {
      organisation: "World Organisation for Animal Health",
      description: "Standards and diagnostic guidance for aquatic animal health, disease notification and surveillance.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Programme material on aquatic animal health management and responsible use of veterinary medicines.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute diagnostic services and extension material on fish and shrimp health in Indian production systems.",
    },
  ],
};
