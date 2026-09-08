import type { KnowledgeArea } from "../types";

export const biosecurity: KnowledgeArea = {
  number: "11",
  slug: "biosecurity",
  title: "Biosecurity",
  navSummary: "The system of barriers and procedures that keeps pathogens out of a farm, contains them if they arrive, and prevents their spread onward.",
  summary:
    "Biosecurity is the deliberate management of the routes by which pathogens enter a farm, move within it and leave it. It is built from physical barriers, documented procedures and consistent behaviour rather than from any single measure, and its effectiveness is set by the weakest route rather than by the strongest control.",
  difficulty: "intermediate",
  topics: ["health", "operations", "systems", "environment"],
  tags: ["pathogen exclusion", "quarantine", "disinfection", "zoning", "stock movement", "farm hygiene"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-05",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Biosecurity means controlling everything that comes onto the farm and moves around it: water, stock, people, vehicles, equipment and feed. The aim is to keep disease out, and if it does arrive, to keep it in one place. It works only if the same rules are followed every day by everyone, including on the days when nothing seems to be wrong.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Every farm has a boundary, and biosecurity is the discipline of deciding what crosses it and under what conditions. The routes are finite and can be listed: incoming water, incoming live animals, feed and other consumables, people, vehicles, equipment, wildlife and vectors, and outgoing material including harvested stock, effluent and mortalities. A biosecurity plan is nothing more mysterious than a decision, written down, about how each of those routes is controlled.",
        },
        {
          kind: "text",
          value:
            "What makes it difficult is not complexity but consistency. A disinfection point that is used ninety per cent of the time provides considerably less than ninety per cent of its intended protection, because a single passage is sufficient for introduction. Biosecurity is therefore as much an organisational and training subject as a technical one, and plans that ignore how people actually move through a site tend to fail at exactly the points where they were assumed to work.",
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
            "For several serious aquatic pathogens there is no effective treatment once a population is infected. The only intervention available is exclusion beforehand and containment afterwards, which places the entire weight of the response on measures taken before anything happened. This is an uncomfortable basis for investment because the benefit is invisible when it works.",
        },
        {
          kind: "text",
          value:
            "There is also the matter of scale. A single introduction can affect not just one cycle but the site's future stocking plan, its ability to sell, and in regulated situations its permission to operate. Where farms are clustered along a shared water body, as many are in India, the consequences extend to neighbours, and the biosecurity of any one farm is partly determined by the practices of the farms around it.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Exclusion is cheaper than response",
          value:
            "The cost of preventing an introduction is bounded and predictable. The cost of responding to one is not, because it includes the stock, the interrupted schedule, the cleaning and fallowing period and the loss of the site's health status.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Bio-exclusion, bio-containment and bio-management" },
        {
          kind: "text",
          value:
            "Three objectives sit under the single word. Bio-exclusion keeps agents out of the farm. Bio-containment prevents an agent that has entered from spreading between units, and prevents it leaving the site. Bio-management addresses the organisms already present in a system, keeping their populations and the conditions that favour them under control. Most farms attend to the first, some to the second, and few explicitly to the third.",
        },
        { kind: "subheading", value: "Zoning" },
        {
          kind: "text",
          value:
            "A site is divided into zones of differing status — typically an outside area, a general farm area, a production area and one or more restricted areas such as quarantine, hatchery or an affected unit. Each boundary between zones has a defined crossing procedure. The value of zoning is that it converts a vague instruction to be careful into a specific instruction attached to a specific doorway.",
        },
        { kind: "subheading", value: "Directional flow" },
        {
          kind: "text",
          value:
            "Work is organised so that people, equipment and water move consistently from areas of higher health status to areas of lower status, and never back without a full crossing procedure. In practice this means visiting the youngest and healthiest stock first and any affected or quarantined unit last, and it means designing hydraulic layout so that used water cannot reach a cleaner part of the system.",
        },
        { kind: "subheading", value: "All-in all-out and fallowing" },
        {
          kind: "text",
          value:
            "Where a unit is stocked in a single batch, harvested completely, then cleaned, disinfected and left dry before the next batch, the chain of transmission between successive batches is broken. Continuous stocking, by contrast, maintains a permanently susceptible population and allows an agent to persist indefinitely. The choice between them is one of the most consequential biosecurity decisions a farm makes, and it is generally made for production reasons without the health implication being stated.",
        },
        { kind: "subheading", value: "Cleaning before disinfection" },
        {
          kind: "text",
          value:
            "Disinfectants are inactivated by organic material. A surface that has not been physically cleaned first cannot be reliably disinfected, regardless of the product or the concentration applied. Cleaning is the step that does most of the work, and disinfection finishes it.",
        },
      ],
    },
    {
      id: "technical-fundamentals",
      heading: "Technical fundamentals",
      blocks: [
        {
          kind: "table",
          caption: "Entry routes and the controls that address each",
          columns: ["Route", "Nature of the risk", "Typical control"],
          rows: [
            ["Incoming water", "Carries pathogens, intermediate hosts and wild fish from the source", "Screening, settlement, filtration and disinfection sized to the intake flow; source selection"],
            ["Live stock", "The highest-risk route, since animals can carry agents without visible signs", "Documented source health status, testing where available, quarantine on a separate water circuit"],
            ["People", "Footwear, clothing and hands transfer material between sites and between units", "Defined entry point, changing and footwear procedure, visitor record with a downtime requirement"],
            ["Vehicles", "Wheels and undersides carry water and organic matter from other production sites", "Restricted parking outside the production area, delivery at the boundary, wheel disinfection where justified"],
            ["Equipment", "Nets, graders, buckets and instruments moved between units carry water and tissue", "Colour-coded equipment dedicated to a unit or zone, with cleaning and disinfection between uses"],
            ["Feed and consumables", "Packaging surfaces and shared handling routes rather than the feed itself", "Delivery to a boundary store, outer packaging removed before entering the production area"],
            ["Wildlife and vectors", "Birds, mammals, amphibians and invertebrates move between water bodies", "Netting, fencing, pest control and denying access to mortalities and waste feed"],
            ["Outgoing material", "Effluent, mortalities and harvest transport can carry agents off site", "Effluent treatment appropriate to the situation, controlled mortality disposal, harvest transport that does not return"],
          ],
          basis:
            "A structural enumeration of transmission routes and the classes of control applied to each, without prescribing products or concentrations. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Disinfection contact requirement",
          expression: "CT = C x t",
          terms: [
            { symbol: "CT", meaning: "Product of disinfectant concentration and contact time required for a given inactivation", unit: "mg-min/L" },
            { symbol: "C", meaning: "Concentration of the disinfectant maintained through the contact period", unit: "mg/L" },
            { symbol: "t", meaning: "Contact time at that concentration", unit: "min" },
          ],
          example:
            "Consider a hypothetical intake treatment specified at a CT of 60 mg-min/L. It could be met by holding 3 mg/L for 20 minutes or 6 mg/L for 10 minutes, provided the contact vessel genuinely delivers that residence time rather than allowing flow to short-circuit across it.",
          limitations:
            "The concept assumes measured residual concentration rather than dose applied, and the required CT differs greatly between organism groups and is strongly increased by organic load, turbidity and low temperature. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Ultraviolet dose",
          expression: "D = I x t",
          terms: [
            { symbol: "D", meaning: "Delivered ultraviolet dose", unit: "mJ/cm2" },
            { symbol: "I", meaning: "Effective irradiance in the treated water", unit: "mW/cm2" },
            { symbol: "t", meaning: "Exposure time as water passes the lamps", unit: "s" },
          ],
          example:
            "Consider a hypothetical reactor delivering an effective irradiance of 12 mW/cm2 with a mean exposure of 3 seconds, giving a nominal dose of 36 mJ/cm2. If transmittance falls because the water has become coloured or turbid, the delivered dose falls with it while the equipment reports no fault.",
          limitations:
            "Delivered dose depends on ultraviolet transmittance, lamp ageing, sleeve fouling and the flow distribution within the reactor, so nameplate dose overstates service performance unless those are managed. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        { kind: "subheading", value: "Quarantine" },
        {
          kind: "text",
          value:
            "Quarantine holds incoming animals separately for a defined period under observation before they join the main population. To be meaningful it requires a genuinely separate water circuit, dedicated equipment and staff routing, a defined duration related to the incubation period of the agents of concern, and a stated set of criteria that must be met before release. A quarantine facility sharing a treatment loop with production provides observation but not containment.",
        },
        { kind: "subheading", value: "Water treatment at the intake" },
        {
          kind: "text",
          value:
            "Intake treatment typically combines physical removal with a disinfection step, because disinfection performs poorly against a turbid or organically loaded water. The engineering difficulty is that intake flows are large, so treatment that is trivial at hatchery scale becomes a major capital item at grow-out scale. This is one reason recirculating systems, with their small make-up flow, can achieve a level of exclusion that flow-through systems cannot economically match.",
        },
        { kind: "subheading", value: "Mortality management" },
        {
          kind: "text",
          value:
            "Dead animals are the most concentrated source of pathogen on a farm. Prompt daily removal, collection into a closed and identified container, and disposal by a route that does not return material to the water or attract wildlife are basic requirements. Leaving mortalities in a unit converts a contained problem into an amplifying one.",
        },
        { kind: "subheading", value: "Records and traceability" },
        {
          kind: "text",
          value:
            "Records of stock origin, movements between units, visitors, deliveries and cleaning are the evidence base for any subsequent investigation. Without them, tracing the route of an introduction after the fact is guesswork, and demonstrating health status to a buyer or an authority is impossible.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "The weakest route sets the standard",
          value:
            "Biosecurity does not average. A site with excellent water treatment and an uncontrolled visitor route has the biosecurity of its visitor route, because a pathogen needs only one path.",
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
            "Writing a biosecurity plan is a bounded exercise that most farms can complete in a few sessions, and the discipline of writing it usually exposes more than the document itself contains.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Draw the site accurately, including every water line, every path people take and every point where material enters or leaves.",
            "List the agents of concern for the species and region, distinguishing those that must be excluded from those that will be managed.",
            "Enumerate every entry route on the drawing and assign each a control, a person responsible and a record.",
            "Define the zones and mark the boundaries physically on site, so that a crossing is obvious rather than remembered.",
            "Write the crossing procedure for each boundary in the fewest words that remain unambiguous, and post it at the boundary.",
            "Specify the quarantine protocol including duration, separation, observation and the release criteria.",
            "Define the cleaning and disinfection procedure for equipment, units and vehicles, with cleaning stated as a separate step before disinfection.",
            "Train every member of staff on the routes relevant to their work, and re-train when the layout or the stock changes.",
            "Audit the plan against actual behaviour at intervals, and change whichever of the two is wrong.",
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
            "The system type constrains what is achievable. A cage in a public water body cannot exclude anything from its water, so its biosecurity must rest almost entirely on stock source, equipment discipline and mortality management. A pond can control its intake but shares groundwater and wildlife with its surroundings. A fully recirculating facility can approach genuine exclusion, and the resulting question becomes whether the human and equipment routes have been controlled to the same standard as the water, since they usually have not.",
        },
        {
          kind: "text",
          value:
            "Materials and layout carry the plan. Surfaces that cannot be cleaned will not be cleaned: porous concrete, fabric, timber and corroded metal retain organic material indefinitely. Drainage that pools, pipework that cannot be drained, and floors that slope towards a clean area all defeat procedures that are otherwise correct. These are design decisions, and they are extremely expensive to revise later.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Procedures assume the layout permits them",
          value:
            "A written instruction to disinfect between units assumes a wash point exists where the route requires it. Where it does not, the instruction will be skipped, and the plan will record a control that is not occurring.",
        },
        {
          kind: "text",
          value:
            "Finally, disinfectant selection has to account for the material being treated, the organism of concern, the organic load present, and the consequences of residues entering culture water. Compatibility and neutralisation matter as much as efficacy, since a disinfectant carried into a tank is itself a hazard to the stock.",
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
            "Control the highest-risk route first. Live animal introductions and shared water outrank almost everything else.",
            "Make the correct action the easy action, by placing wash points, footbaths and changing areas exactly where the route passes.",
            "Dedicate equipment to units or zones and mark it unambiguously, because relying on memory under time pressure does not work.",
            "Always work from higher health status to lower, and treat any reverse movement as requiring a full crossing procedure.",
            "Clean before disinfecting, every time, and allow the contact time the procedure specifies rather than the time available.",
            "Keep records that would let somebody reconstruct the previous month's movements without relying on anyone's recollection.",
            "Review the plan whenever the site, the species, the stock source or the staff change, since each of those alters the routes.",
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
          caption: "Where biosecurity plans typically fail in practice",
          columns: ["Failure", "Why it happens"],
          rows: [
            ["Footbaths present but ineffective", "Organic material accumulated, solution not replaced, or the bath sited where it can be stepped around"],
            ["Equipment shared between units", "Insufficient equipment purchased, so sharing becomes necessary during busy periods and then habitual"],
            ["Quarantine sharing water with production", "The facility was built for observation and later described as quarantine without the hydraulic separation being added"],
            ["Visitors entering without record or procedure", "No defined entry point, so arrival happens wherever it is convenient"],
            ["Mortalities left in units through the day", "Collection scheduled once daily for labour reasons, with no interim containment"],
            ["Disinfection applied to visibly dirty surfaces", "Cleaning treated as optional preparation rather than as the principal step"],
            ["Ultraviolet or ozone system underperforming silently", "Transmittance, fouling and lamp ageing not monitored, so the equipment reports running rather than working"],
            ["Plan followed rigorously for a month after an outbreak, then relaxed", "The plan was treated as a response to an event rather than as a permanent operating condition"],
          ],
          basis:
            "Failure modes commonly identified in aquaculture biosecurity auditing and extension material, presented as review prompts. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Write the plan down, keep it current, and make it available at the places where it must be followed rather than in an office file.",
            "Source stock from as few suppliers as practicable, each with documented health history, and quarantine every introduction.",
            "Design hydraulic independence between critical units at the outset, since it cannot be added convincingly afterwards.",
            "Buy enough equipment that dedication by zone is genuinely possible.",
            "Maintain a visitor log with a stated downtime requirement for anyone arriving from another aquaculture site.",
            "Monitor the performance of disinfection equipment, not merely its operating status.",
            "Practise the containment response before it is needed, so that the sequence of actions is familiar under pressure.",
            "Audit periodically by walking the routes as a person or a piece of equipment would, rather than by reading the document.",
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
            "Formal risk assessment turns biosecurity from a checklist into an allocation decision. Each route is characterised by the likelihood of an agent arriving by it and the consequence if it does, and controls are then applied where the product of those two is largest. This makes visible the common situation in which a farm has invested heavily in intake treatment while the live stock route, which carries far more risk, remains largely uncontrolled.",
        },
        {
          kind: "text",
          value:
            "Compartmentalisation extends the same logic to a whole enterprise. A compartment is a group of units under a single management system with a demonstrably distinct health status, defined by common biosecurity practice rather than by geography. Establishing one requires documented procedures, surveillance and records sufficient to withstand external scrutiny, and it is the basis on which health status can be recognised and traded on.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Environmental surveillance",
          value:
            "Detection of pathogen genetic material in water samples offers a route to surveillance that does not require sampling animals. Its sensitivity and its interpretation across system types are still being established, so it is best treated as complementary to conventional surveillance.",
        },
        {
          kind: "text",
          value:
            "The remaining advanced theme is area management. Where farms share a water body, individual biosecurity has a ceiling set by the surrounding practice, and coordinated stocking, fallowing and movement control across an area achieves what no single farm can. It requires agreement between competitors, which is why it is difficult, and it is nonetheless the measure with the largest effect where it has been implemented.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Biosecurity is the control of a finite, listable set of entry routes, and its strength is set by the weakest of them.",
    "Bio-exclusion, bio-containment and bio-management are distinct objectives requiring distinct measures.",
    "Live animal introductions and shared water are normally the highest-risk routes and deserve the first investment.",
    "Cleaning is the step that does most of the work; disinfectants are inactivated by organic material.",
    "Quarantine requires genuine hydraulic separation, dedicated equipment and defined release criteria, not merely a separate room.",
    "Plans fail on consistency rather than on design, so layout should make the correct action the convenient one.",
  ],
  related: ["fish-health", "water-quality", "hatchery", "ras"],
  furtherReading: [
    {
      organisation: "World Organisation for Animal Health",
      description: "Aquatic animal health standards covering biosecurity, surveillance, zoning and compartmentalisation.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Guidance on biosecurity planning and aquatic animal health management at farm and area level.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "State fisheries departments and agricultural universities in India",
      description: "Regional guidance on farm hygiene, stock movement and disease reporting relevant to local conditions.",
    },
  ],
};
