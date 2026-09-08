import type { KnowledgeArea } from "../types";

export const ras: KnowledgeArea = {
  number: "13",
  slug: "ras",
  title: "RAS Aquaculture",
  navSummary: "Recirculating systems: the treatment loop that replaces the river, the unit processes it is built from, and the engineering discipline it demands.",
  summary:
    "A recirculating aquaculture system treats and reuses its water rather than replacing it, which converts almost every biological requirement of the animal into a unit process that has to be sized, powered and maintained. The result is near-complete control of the culture environment, bought with high capital cost, continuous energy dependence and an unforgiving failure profile.",
  difficulty: "advanced",
  topics: ["systems", "filtration", "water", "engineering"],
  tags: ["recirculation", "biofilter", "solids removal", "degassing", "oxygenation", "system design", "control"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-09",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "In a recirculating farm the same water goes round and round through a set of treatment stages that take out the solids, convert the ammonia, strip the carbon dioxide and put the oxygen back. Only a small amount of new water is added each day. Because the water is reused, everything the fish need has to be provided by equipment, and that equipment has to keep running.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "A flow-through farm borrows water from a river or a well, uses it once and returns it. A recirculating system does the same work internally: it removes the solids the animals produce, oxidises their ammonia, strips the carbon dioxide they exhale, replaces the oxygen they consume, and returns the water to them, typically many times per hour. Make-up water is added only to replace what leaves with sludge and backwash and to control the accumulation of nitrate and other dissolved constituents.",
        },
        {
          kind: "text",
          value:
            "That substitution is what makes recirculation an engineering subject in a way that other production approaches are not. In a pond, natural processes provide aeration, nitrification and sedimentation without being designed. In a recirculating system each of those is a named piece of equipment with a capacity, a power draw, a failure mode and a maintenance requirement. The system delivers control precisely because nothing in it is left to happen on its own.",
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
            "Recirculation is chosen when the culture environment must be independent of the surroundings. That includes producing a species outside its natural climate, producing near a market rather than near suitable water, operating where water abstraction or discharge is constrained, achieving a biosecurity standard that open systems cannot, and delivering a predictable harvest date irrespective of season. Each of these is a reason that no amount of skill in pond management can supply.",
        },
        {
          kind: "text",
          value:
            "It matters equally as a cautionary subject. Recirculating projects fail more often through under-appreciated operating cost, insufficient redundancy and inadequate operator capability than through any deficiency in the treatment concept. The technology is well established; the discipline it requires is where projects come apart.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The system fails fast",
          value:
            "A densely stocked recirculating tank without water movement or aeration has a very short buffer, because the dissolved oxygen inventory is small relative to the consumption rate. This governs redundancy, alarming and standby power decisions at design time rather than after an incident.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "The treatment loop" },
        {
          kind: "text",
          value:
            "Water leaves the culture tank carrying solids, dissolved nitrogen and carbon dioxide, and depleted of oxygen. It passes through a sequence of processes that address these in an order determined by their interactions, and returns. The order is not arbitrary: solids are removed first because they otherwise foul and organically overload the biofilter, degassing follows the biofilter because nitrification itself produces carbon dioxide, and oxygenation is placed last so that the water reaching the animals is at its highest oxygen concentration.",
        },
        { kind: "subheading", value: "Recirculation rate and exchange rate" },
        {
          kind: "text",
          value:
            "These two rates are frequently confused and describe different things. The recirculation rate is how often the system volume passes through treatment, which determines how quickly a metabolite is removed after it is produced. The exchange rate is how much new water enters the system, which determines the steady-state concentration of constituents no process removes. A system can recirculate rapidly and still accumulate nitrate, because rapid recirculation does not remove anything the loop does not treat.",
        },
        { kind: "subheading", value: "Hydraulic residence and tank hydraulics" },
        {
          kind: "text",
          value:
            "Tank hydraulics determine whether the treatment loop actually receives the water it is meant to treat. A circular tank with an appropriate inlet arrangement moves settleable solids to a central drain quickly, which is why the design of the inlet and the outlet does more for water quality than the size of the tank does. Poor hydraulics create dead zones where solids accumulate and decompose inside the culture unit.",
        },
        { kind: "subheading", value: "Nitrification as the slow process" },
        {
          kind: "text",
          value:
            "The autotrophic bacteria that oxidise ammonia grow slowly, are sensitive to temperature and pH, and compete for surface area with faster-growing heterotrophs when organic load is high. The biofilter therefore has a response time measured in days to weeks, while every other process in the loop responds in seconds to minutes. Almost every operational rule about ramping feed follows from this single asymmetry.",
        },
      ],
    },
    {
      id: "technical-fundamentals",
      heading: "Technical fundamentals",
      blocks: [
        {
          kind: "flow",
          caption: "The recirculating treatment loop, in the order the processes are normally arranged and the reason for that order.",
          steps: [
            { label: "Culture tank", detail: "The animals consume oxygen and produce ammonia, carbon dioxide and solids. Tank hydraulics determine how quickly settleable material reaches the outlet rather than decomposing in place." },
            { label: "Solids removal", detail: "Settling, swirl separation, screening or drum filtration removes particulate waste while it is still intact, before it disperses into fine solids and dissolved organic load." },
            { label: "Fine solids and organics", detail: "Foam fractionation in saline water, and fine screening or membrane processes elsewhere, capture the fraction that mechanical filtration passes and that would otherwise consume oxygen and foul media." },
            { label: "Biofiltration", detail: "Fixed or moving media supporting nitrifying bacteria oxidise ammonia to nitrite and then to nitrate, consuming oxygen and alkalinity in the process." },
            { label: "Degassing", detail: "Carbon dioxide produced by both the animals and the biofilter is stripped, since it depresses pH and impairs oxygen uptake at the gill even where dissolved oxygen appears sufficient." },
            { label: "Disinfection", detail: "Ultraviolet or ozone treatment reduces the microbial load in the returning water where the biosecurity objective or water clarity requires it." },
            { label: "Oxygenation", detail: "Aeration or dissolved oxygen injection restores oxygen immediately before the water re-enters the culture tank, so the animals receive it at its highest concentration." },
            { label: "Return and make-up", detail: "Treated water returns to the tank while a small make-up flow replaces losses and limits the accumulation of nitrate and other constituents that the loop does not remove." },
          ],
        },
        {
          kind: "formula",
          name: "System recirculation rate",
          expression: "Rr = Q / V",
          terms: [
            { symbol: "Rr", meaning: "Number of system volume turnovers", unit: "turnovers/h" },
            { symbol: "Q", meaning: "Total flow through the treatment loop", unit: "m3/h" },
            { symbol: "V", meaning: "Total system water volume", unit: "m3" },
          ],
          example:
            "Consider a hypothetical system of 400 m3 total volume with a loop flow of 600 m3/h. The recirculation rate is 1.5 turnovers per hour, which sets how quickly a metabolite produced in the tank reaches the treatment stage that removes it.",
          limitations:
            "Turnover describes the loop and says nothing about mixing within the tank, so a nominally high turnover can coexist with poorly flushed zones. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Daily make-up water requirement",
          expression: "Vm = E x V",
          terms: [
            { symbol: "Vm", meaning: "Make-up water added per day", unit: "m3/day" },
            { symbol: "E", meaning: "Daily exchange fraction of the system volume", unit: "fraction/day" },
            { symbol: "V", meaning: "Total system water volume", unit: "m3" },
          ],
          example:
            "Consider a hypothetical 400 m3 system operated at a daily exchange of 5 per cent. Make-up demand is 20 m3 per day, which must be available, treated to the required standard, and brought to temperature before it enters the loop.",
          limitations:
            "Exchange is set by whatever constituent accumulates fastest towards its limit, and by losses to sludge and backwash, so it is an outcome of the treatment design rather than a free choice. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Biofilter media surface required",
          expression: "A = L / VTR",
          terms: [
            { symbol: "A", meaning: "Media surface area required", unit: "m2" },
            { symbol: "L", meaning: "Total ammonia nitrogen load to be oxidised per day", unit: "g/day" },
            { symbol: "VTR", meaning: "Areal nitrification rate achieved by the media under service conditions", unit: "g TAN per m2 per day" },
          ],
          example:
            "Consider a hypothetical system producing 3,000 g of total ammonia nitrogen per day, with an areal rate of 0.4 g per square metre per day assumed for the operating conditions. The required media surface is 7,500 m2, which then converts to a media volume through the specific surface area of the product selected.",
          limitations:
            "Areal nitrification rate is not a fixed property of the media: it falls with temperature, with low pH or alkalinity, with high organic loading and with poor hydraulic distribution, and manufacturer figures are obtained under favourable conditions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Unit processes in the loop and what each is chosen for",
          columns: ["Process", "Common implementations", "Selection considerations"],
          rows: [
            ["Solids capture", "Swirl separator, settling cone, radial flow settler, drum filter", "Particle size captured, water lost with the waste stream, head requirement, and whether solids are removed intact"],
            ["Fine solids and dissolved organics", "Foam fractionation, ozone contact, fine screening", "Foam fractionation depends on ionic strength and works poorly in fresh water; ozone requires careful control and residual management"],
            ["Nitrification", "Moving bed, fixed bed, trickling filter, fluidised sand bed", "Specific surface area, self-cleaning behaviour, oxygen and head demand, and tolerance of organic load"],
            ["Degassing", "Cascade column, packed column, forced ventilation stripper", "Air to water ratio, head available, and whether the space is ventilated to remove the stripped gas"],
            ["Oxygenation", "Diffused aeration, low head oxygenator, oxygen cone, in-line dissolution", "Whether atmospheric transfer suffices for the loading, and the cost and supply security of purchased oxygen"],
            ["Disinfection", "Ultraviolet reactor, ozone contact chamber", "Transmittance and fouling for ultraviolet; contact, control and residual destruction for ozone"],
            ["Nitrate control", "Water exchange, anoxic denitrification, integrated plant uptake", "Exchange is simple but consumes water and heat; denitrification adds a carbon-dosed process requiring its own control"],
            ["Temperature control", "Heat exchange on make-up water, heat pumps, insulation, heat recovery", "Usually a dominant energy cost, and the main reason low exchange rates are pursued in heated systems"],
          ],
          basis:
            "A structural comparison of unit process options and their selection criteria, not a performance ranking or a specification. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        { kind: "subheading", value: "Instrumentation and control" },
        {
          kind: "text",
          value:
            "Continuous measurement of dissolved oxygen and temperature is the minimum, with water level, flow and pump status typically included. Control ranges from simple interlocks to full supervisory systems, and the important design question is not how much is automated but what happens when the automation stops. An alarm chain that reaches a person capable of acting, and that fails safe when its own power or network is lost, is worth more than additional measurement points.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Redundancy is applied per failure consequence",
          value:
            "Duplication is normally concentrated on the processes whose loss is fatal within minutes — water movement and oxygen supply — rather than distributed evenly. A biofilter can be off line briefly; circulation cannot.",
        },
        { kind: "subheading", value: "Waste streams" },
        {
          kind: "text",
          value:
            "Recirculation concentrates waste rather than eliminating it. Sludge from solids removal, backwash water and any denitrification residue all have to be managed, and the discharge consent that governs them frequently determines the site's permitted production. Treating waste handling as an afterthought is one of the more common and more expensive design omissions.",
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
            "Commissioning is where the operating standard of a recirculating facility is set, and it cannot be compressed because the biological part of it proceeds at its own pace.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Fill and run the system on water alone, verifying flows, levels, head losses and pump duties against the design before any biology is introduced.",
            "Prove every alarm and every standby device by simulating the failure it exists to cover, including a full power interruption.",
            "Establish the nitrifying population by dosing an ammonia source and following the ammonia and nitrite response through the full sequence to completion.",
            "Confirm that alkalinity and pH can be held under the dosed load, and establish the buffer addition regime before stock arrive.",
            "Stock conservatively and increase feed in measured steps, holding each step until the water response has settled.",
            "Establish the routine of daily records covering feed, mortality, water chemistry, temperature, alkalinity and equipment status.",
            "Set and document the maintenance intervals for screens, media, ultraviolet sleeves, pumps and blowers, and follow them on schedule rather than on symptom.",
            "Rehearse the emergency response, including the actions to be taken on total power loss, so that the sequence is known rather than improvised.",
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
            "The biological consideration that dominates design is the mismatch of time constants. Feed can be increased instantly, oxygen responds within a minute, carbon dioxide within the residence time of the degasser, and nitrification over days to weeks. A system operated as though all four responded together will experience an ammonia and then a nitrite excursion every time feeding is increased sharply, and the animals will pay for it.",
        },
        {
          kind: "text",
          value:
            "The second consideration is energy. Pumping, oxygen transfer, blowers and heating dominate operating cost, and pumping cost is driven by head, which is set by the vertical arrangement of the treatment stages. A layout that minimises the number of times water must be lifted is worth more over the life of a facility than most equipment selections within it.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Nameplate capacity is not service capacity",
          value:
            "Nitrification rates, oxygen transfer efficiencies and filtration capacities quoted by suppliers are obtained under favourable test conditions. Service performance is lower, and the margin between them is the reason design factors exist rather than spare capacity to be stocked into.",
        },
        {
          kind: "text",
          value:
            "A third consideration is that the system is a single connected volume. A treatment problem, a chemical error or a pathogen introduction reaches every tank sharing the loop. Splitting a facility into independent loops costs capital and reduces the consequence of any single event, and whether that trade is worth making is a decision that has to be taken at design stage.",
        },
        {
          kind: "text",
          value:
            "Finally, staffing. Recirculating facilities require operators who understand both the biology and the plant, who will follow a maintenance schedule when nothing appears wrong, and who can diagnose under pressure. The availability of such people at a given site is a legitimate feasibility question, not a detail to be resolved after construction.",
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
            "Control the feed input, because it is the single lever that sets solids, ammonia and oxygen demand together.",
            "Ramp any load increase at the pace of the slowest process in the loop, which is the biofilter.",
            "Remove solids as early and as intact as possible; every particle that disintegrates becomes a harder problem downstream.",
            "Maintain alkalinity deliberately and continuously, since nitrification consumes it and pH stability depends on it.",
            "Test standby equipment and alarms on a schedule, because equipment that has never been exercised cannot be assumed to work.",
            "Keep a full record of flows, pressures and power draw, so that gradual degradation is visible before it becomes a failure.",
            "Hold critical spares on site, selected by lead time and consequence rather than by cost.",
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
          caption: "Recurring faults in recirculating systems and their usual causes",
          columns: ["Symptom", "Likely underlying cause"],
          rows: [
            ["Ammonia rising after a feed increase", "Nitrifying population has not yet expanded to the new load; the ramp outpaced the biofilter"],
            ["Nitrite peak during start-up or after a disturbance", "The second oxidation step lagging the first, characteristic of an immature or recently disrupted biofilter"],
            ["pH falling steadily", "Alkalinity consumed by nitrification and carbon dioxide accumulating, without adequate buffer replacement"],
            ["Animals lethargic while dissolved oxygen reads normally", "Carbon dioxide accumulation, commonly where pure oxygen is used and degassing capacity was sized for a lower load"],
            ["Biofilter performance declining without a load change", "Organic overloading from poor solids capture, channelling within the media, or fouling of the distribution"],
            ["Solids accumulating in the culture tank", "Tank hydraulics producing dead zones, or an inlet arrangement that does not establish the intended rotational flow"],
            ["Ultraviolet disinfection ineffective despite lamps operating", "Reduced transmittance from coloured or turbid water, sleeve fouling, or lamps past their effective life"],
            ["Foam fractionator producing little foam", "Insufficient ionic strength, as in fresh water, or a surfactant load that has fallen below the operating point of the device"],
            ["Off-flavour reported at harvest", "Compounds produced by microorganisms within the system, requiring a purge period in clean water rather than treatment of production water"],
            ["Repeated pump or blower failures", "Operation off the design point, cavitation, or a maintenance interval that has been extended because nothing appeared wrong"],
          ],
          basis:
            "Failure modes commonly described in recirculating system engineering and operating literature, presented as diagnostic starting points. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Size every process against peak feed load, which coincides with maximum biomass immediately before harvest, rather than against an average.",
            "Design the hydraulic profile to minimise pumping head, since it is a permanent operating cost fixed by layout.",
            "Commission the biology fully and prove it against a simulated load before stock arrive.",
            "Provide standby power and independent oxygen supply for the processes whose loss is fatal within minutes.",
            "Instrument the parameters that move fastest, and route alarms to a person who can reach the site in time to act.",
            "Plan sludge and effluent handling as part of the design, since the discharge route frequently limits permitted production.",
            "Write operating and emergency procedures before start-up, and rehearse the emergency ones.",
            "Recruit and train operators in advance of commissioning, since the plant will be run by whoever is present on the first difficult night.",
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
            "Advanced practice in recirculation is largely about managing what the standard loop does not remove. Nitrate is the obvious case, addressed either by exchange or by an anoxic denitrification stage that trades water and heat savings for an additional carbon-dosed process requiring its own control. Phosphorus, dissolved organic carbon, coloured compounds and accumulating trace elements are the less obvious cases, and they set the practical floor on exchange rate in genuinely low-exchange designs.",
        },
        {
          kind: "text",
          value:
            "A second theme is the microbial ecology of the system as a whole. A recirculating system holds a large and largely invisible microbial population, in the biofilter, on the pipe walls and in the water column, and the stability of that population is closely connected to the stability of the animals. Operating to maintain a settled community, rather than repeatedly disinfecting the whole loop, is the direction current thinking has taken.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Microbial maturation and system stability",
          value:
            "The relationship between water column microbial community structure, organic carbon availability and animal performance in recirculating systems is under active investigation. The principle is well supported; operating protocols that reliably steer it across species and designs are not yet settled.",
        },
        {
          kind: "text",
          value:
            "Finally there is the question of what a recirculating system should be optimised for. Higher density raises output per unit of capital and simultaneously reduces the margin for error, shortens the time available to respond to a failure, and raises the consequence of any single event. The right operating point is the one whose worst credible incident the business can absorb, which is a risk decision rather than a biological one, and it deserves to be taken explicitly.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Recirculation replaces natural processes with unit processes, each of which must be sized, powered, maintained and made redundant where its loss is fatal.",
    "The order of the treatment loop follows from process interactions: solids first, then nitrification, then degassing, with oxygenation immediately before the tank.",
    "Recirculation rate governs how fast metabolites are removed; exchange rate governs what accumulates that no process removes.",
    "The biofilter responds over days while every other process responds in seconds, so feed increases must be ramped to it.",
    "Pumping head is fixed by layout and becomes a permanent operating cost, so hydraulic profile is a first-order design decision.",
    "Failure is fast in a densely stocked system, which makes redundancy, alarming and standby power design decisions rather than later additions.",
  ],
  related: ["water-quality", "systems", "biosecurity", "engineering"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Technical material on recirculating aquaculture systems, water reuse and intensive production design.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Southern Regional Aquaculture Center",
      description: "Extension publications on recirculating system components, biofiltration and system management.",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute work on recirculating and intensive systems adapted to Indian species and conditions.",
    },
  ],
};
