import type { KnowledgeArea } from "../types";

export const ornamental: KnowledgeArea = {
  number: "24",
  slug: "ornamental",
  title: "Ornamental Fish Production",
  navSummary: "Breeding and growing fish sold live and by the piece, where appearance is the product.",
  summary:
    "Ornamental fish production is aquaculture in which the product is a live animal sold individually for its appearance. That single difference reorganises everything: value is per fish rather than per kilogram, colour and finnage are quality attributes, the animal must survive transport to a distant buyer, and a facility produces many small batches of many species rather than one large batch of one. It is the part of the sector most accessible at small scale and the part where husbandry skill matters most relative to capital.",
  difficulty: "intermediate",
  topics: ["fish", "production", "biology"],
  tags: ["aquarium trade", "live fish transport", "breeding units", "backyard hatchery", "colour quality"],
  species: [
    "Poecilia reticulata (guppy)",
    "Xiphophorus helleri (swordtail)",
    "Poecilia sphenops (molly)",
    "Xiphophorus maculatus (platy)",
    "Carassius auratus (goldfish)",
    "Trichogaster lalius (dwarf gourami)",
    "Betta splendens (Siamese fighting fish)",
    "Pterophyllum scalare (angelfish)",
    "Puntigrus tetrazona (tiger barb)",
    "Corydoras species (armoured catfish)",
  ],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-07-31",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Ornamental fish are bred and raised to be sold live for aquariums, so they are counted in pieces rather than weighed in kilograms. Because buyers pay for how the fish looks and it has to arrive alive, colour, shape and careful packing matter as much as growth.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "The ornamental fish sector covers hundreds of species across freshwater and marine trade, produced in facilities ranging from a few tanks in a domestic backyard to organised farms with dedicated breeding, rearing, conditioning and packing areas. In India, production is concentrated in West Bengal, Kerala, Tamil Nadu and Maharashtra, supplying a substantial domestic hobbyist market and a smaller export trade.",
        },
        {
          kind: "text",
          value:
            "Most commercially produced freshwater ornamentals fall into a few reproductive categories that determine how a facility is laid out. Livebearers such as guppy, molly, platy and swordtail produce free-swimming young directly and breed readily. Egg-scatterers such as barbs and danios spawn into vegetation or over substrate and eat their own eggs unless separated. Substrate spawners such as angelfish and many cichlids tend eggs as pairs. Bubble-nest builders such as gourami and Betta require specific conditions and, in the case of Betta, individual housing of males.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "The unit of production is a fish, not a kilogram",
          value:
            "Because ornamentals are sold by the piece at a size where growth to a larger mass adds nothing, feed conversion is a minor concern and survival, uniformity, colour and finnage are the outputs that matter. Production planning that borrows food-fish metrics measures the wrong things.",
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
            "Ornamental production has the lowest entry cost in aquaculture. A viable breeding unit can be established in a small covered area with modest tankage, and the species that begin most operations reproduce readily on simple diets. This makes it genuinely available as a supplementary livelihood, particularly for households with limited land, and it is one of the few aquaculture activities that can be operated at meaningful scale indoors.",
        },
        {
          kind: "text",
          value:
            "It also matters because it is a value-addition rather than a volume business. Selective breeding for colour and form, careful conditioning, honest grading and reliable live delivery all raise the price of the same fish substantially, and none of them require capital equipment. The skill differential between a competent and an indifferent ornamental producer shows up directly in the price obtained.",
        },
        {
          kind: "text",
          value:
            "There is a conservation dimension as well. A share of the trade, particularly in marine species and in some indigenous freshwater species, is supplied by wild collection. Establishing captive breeding for those species reduces collection pressure and creates a domestic supply that is traceable, and work in this direction has been a stated priority for Indian institutions.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Breeding strategy determines facility layout" },
        {
          kind: "text",
          value:
            "The reproductive mode of a species dictates the tanks required. Livebearers need a way to separate gravid females and to protect fry from adults. Egg-scatterers need spawning units with a substrate or mesh that lets eggs fall out of reach. Pair spawners need pair tanks and a means of removing the pair or the eggs. Mouthbrooders need holding for incubating females. A facility working several species is really several small facilities sharing water and staff.",
        },
        { kind: "subheading", value: "Colour and its sources" },
        {
          kind: "text",
          value:
            "Colour in ornamental fish arises from pigment cells whose expression depends on genetics, on dietary carotenoids, and on the environment the fish is held in. Genetics set the potential, diet supplies the raw material for red, orange and yellow pigmentation, and background colour, lighting and stress determine how much of that potential is displayed at the moment of sale. A well-bred fish held on a poor diet against a bright background presents as an ordinary fish.",
        },
        { kind: "subheading", value: "Live feed" },
        {
          kind: "text",
          value:
            "Newly hatched ornamental fry are often too small to take formulated feed and require live organisms of an appropriate size — infusoria, rotifers, Artemia nauplii, Moina and later Tubifex or chopped worms. A facility therefore runs live feed culture as a parallel and equally critical production line, and a failure in that line has consequences a day later in the fry tanks.",
        },
        { kind: "subheading", value: "Conditioning before dispatch" },
        {
          kind: "text",
          value:
            "Fish are not packed straight from a rearing tank. They are held without feed for a period so that the gut empties, which sharply reduces the ammonia they excrete in a sealed bag, and they are graded and inspected during that period. Conditioning is what makes long transport survivable, and skipping it is the commonest reason for a consignment arriving in poor condition.",
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
            "Two calculations govern the commercial side of ornamental production: what a batch is worth, and how many fish a transport bag can carry.",
        },
        {
          kind: "formula",
          name: "Batch value per unit",
          expression: "V = (Nf x p x g) / U",
          terms: [
            { symbol: "V", meaning: "Realised value per rearing unit over the batch", unit: "currency per unit" },
            { symbol: "Nf", meaning: "Number of fish reaching saleable size", unit: "count" },
            { symbol: "p", meaning: "Price per fish for the grade achieved", unit: "currency" },
            { symbol: "g", meaning: "Proportion of the batch meeting the top grade specification", unit: "fraction" },
            { symbol: "U", meaning: "Number of rearing units occupied for the batch duration", unit: "count" },
          ],
          example:
            "Consider a hypothetical batch of 1,200 saleable fish occupying four rearing tanks, of which 0.6 meet the top grade priced at 30 currency units each. Value per tank for the batch is (1,200 x 30 x 0.6) / 4, which is 5,400. Raising the grade proportion from 0.6 to 0.75 by better feeding and lower stocking increases that figure by a quarter without producing a single additional fish.",
          limitations:
            "Grade proportion depends on genetics, nutrition, density and handling in ways that are not separable from records alone, and prices for ornamental grades vary between buyers and seasons. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Transport packing density",
          expression: "N = (Vw x k) / m",
          terms: [
            { symbol: "N", meaning: "Number of fish that can be packed in one bag", unit: "count" },
            { symbol: "Vw", meaning: "Volume of water in the bag", unit: "L" },
            { symbol: "k", meaning: "Permissible biomass per litre for the species and journey duration", unit: "g/L" },
            { symbol: "m", meaning: "Mean individual fish mass", unit: "g" },
          ],
          example:
            "Consider a hypothetical consignment of fish averaging 1.5 g each, packed in bags holding 3 L of water, where the operator has established from experience that 8 g/L is safe for the journey concerned. Each bag takes (3 x 8) / 1.5, which is 16 fish. Doubling the journey time without changing anything else means the same bag should carry materially fewer.",
          limitations:
            "The permissible loading term is an operator-established value that depends on species robustness, temperature during transit, journey duration, oxygen headspace and whether the fish were properly conditioned. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "text",
          value:
            "Water quality management in an ornamental facility is conventional in principle but operates at small scale and across many separate units. Most facilities run either individual tanks with sponge filters, changed manually, or a shared recirculating rack with a common biofilter. The first isolates disease well and consumes labour; the second is efficient and distributes a problem across everything connected to it.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Reproductive strategies of commonly produced ornamentals and what each requires",
          columns: ["Strategy", "Representative species", "Facility requirement", "Main difficulty"],
          rows: [
            [
              "Livebearing",
              "Guppy, molly, platy, swordtail",
              "Breeding tanks with fry refuges or separation of gravid females",
              "Adults predate fry; continuous production makes size mixing likely",
            ],
            [
              "Egg scattering",
              "Tiger barb, danio, rasbora",
              "Spawning tanks with substrate or mesh that removes eggs from the parents",
              "Parents consume eggs within minutes if not separated",
            ],
            [
              "Substrate spawning in pairs",
              "Angelfish, several cichlids",
              "Pair tanks with a spawning surface and space for the pair to hold territory",
              "Pair compatibility is unpredictable; parental egg-eating is common early",
            ],
            [
              "Bubble-nest building",
              "Gourami, Betta",
              "Shallow still water, individual housing for aggressive males",
              "Male aggression; conditions must be very stable during nest tending",
            ],
            [
              "Mouthbrooding",
              "Several African cichlids",
              "Holding for incubating females and a means of stripping if practised",
              "Incubating females stop feeding; timing of removal matters",
            ],
            [
              "Egg burying and specialised spawners",
              "Certain killifish and specialist species",
              "Species-specific media and incubation conditions",
              "Narrow tolerance and limited husbandry information for many species",
            ],
          ],
          basis:
            "A qualitative summary of reproductive strategies and their facility implications as described in ornamental fish culture literature, not a difficulty ranking. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "flow",
          caption:
            "The path from broodstock to a delivered consignment. The last three stages determine as much of the commercial outcome as the first five.",
          steps: [
            { label: "Broodstock selection", detail: "Choosing parents on colour, finnage, vigour and conformation, and maintaining separate lines to control the traits being propagated." },
            { label: "Conditioning", detail: "Feeding broodstock a rich, varied diet ahead of spawning, since egg quality is set before spawning rather than after." },
            { label: "Spawning", detail: "Pairing or group spawning under the conditions the reproductive strategy requires, with a means of protecting eggs or fry from adults." },
            { label: "Hatching and fry rearing", detail: "Small, stable units with gentle filtration and live feed of a size the fry can physically take." },
            { label: "Weaning and grow-on", detail: "Transition to formulated feed, with carotenoid-supplying components introduced as colour begins to develop." },
            { label: "Grading", detail: "Repeated size and quality grading, which controls cannibalism and competition and separates the batch into the grades it will be sold as." },
            { label: "Conditioning for dispatch", detail: "Holding without feed in clean water so the gut empties, while inspecting for disease and confirming grade." },
            { label: "Packing and transport", detail: "Bagging with oxygen at a loading matched to species, size and journey duration, insulated against temperature swing." },
          ],
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
            "A small ornamental unit succeeds or fails on routine rather than on equipment. The following sequence describes establishing a species line and keeping it productive.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Choose species that the local market actually buys and that reproduce reliably under the water and temperature the facility can hold without heating or chilling.",
            "Acquire broodstock from more than one source so that a line can be maintained without close inbreeding, and record which fish came from where.",
            "Establish live feed culture before the first spawning, since fry appear on their own schedule and cannot wait for a culture to mature.",
            "Set up separate spawning, fry, grow-on and conditioning areas, even if each is only a few tanks, so that stages are not mixed.",
            "Grade at short intervals during grow-on, because size disparity produces both cannibalism and a wide, unsaleable spread.",
            "Introduce carotenoid-containing feed components as colour develops, and hold fish against darker backgrounds where the species displays better on them.",
            "Quarantine every incoming fish, without exception, in a system that shares no water with production.",
            "Condition and grade before packing, and pack against the actual journey rather than the intended one.",
          ],
        },
        {
          kind: "text",
          value:
            "Record keeping in ornamental production is genealogical as much as operational. Which pair produced which batch, which line carries which trait, and how many generations a line has been maintained without outcrossing are the facts that determine whether quality improves or drifts. A facility without those records is selecting blindly.",
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
            "The dominant biological consideration is genetic. Ornamental lines are maintained as small populations selected hard for appearance, which makes inbreeding depression a real and gradually accumulating risk: reduced fertility, deformity, poor growth and loss of vigour appear generations after the practice that caused them. Managing an outcrossing schedule and keeping enough unrelated stock to do it with is a long-horizon discipline that shows no immediate return.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Quarantine everything that arrives",
          value:
            "An ornamental facility handles many species from many sources, which is the highest-risk pattern in aquaculture for pathogen introduction. Separate quarantine holding with its own equipment, water and servicing order is standard practice in the trade, and the interval is set by the diseases of concern rather than by convenience.",
        },
        {
          kind: "text",
          value:
            "Engineering in this setting is about many small volumes rather than a few large ones. Small tanks have low thermal inertia and little chemical buffering, so ambient temperature swings and feeding errors show up quickly. Facilities in the Indian plains commonly need shading and evaporative or ventilated cooling in summer as much as heating in winter, and tropical species held in an unheated shed through a north Indian winter will stop breeding regardless of how well they are fed.",
        },
        {
          kind: "text",
          value:
            "Water source chemistry matters more here than in food-fish culture because species originate from very different waters. Soft, acidic water suits some spawning requirements; harder, more alkaline water suits others such as livebearers. A facility either selects species to match its water or invests in modifying it, and the second is a recurring cost that should be recognised at planning rather than discovered later.",
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
            "Service tanks in a fixed order from cleanest to most suspect, and keep nets, siphons and buckets dedicated to specific areas rather than shared.",
            "Feed small amounts frequently and remove uneaten food, since small volumes accumulate waste rapidly and fry feed continuously.",
            "Grade often enough that size disparity never becomes large, because it is far easier to prevent than to correct.",
            "Maintain broodstock records by line and generation, and plan outcrossing before signs of inbreeding depression appear.",
            "Run live feed cultures in duplicate so that the failure of one does not interrupt fry feeding.",
            "Withhold feed and hold in clean water before packing, and never dispatch a fish that has not been individually looked at.",
            "Keep a dispatch and arrival record with the buyer, so that packing density and conditioning practice are corrected by evidence rather than by assumption.",
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
          caption: "Recurring ornamental production problems and their usual underlying causes",
          columns: ["Symptom", "Usual underlying cause"],
          rows: [
            [
              "Fry disappear within days of hatching",
              "Live feed of the wrong size or unavailable at first feeding, or predation by adults not fully separated",
            ],
            [
              "Colour is dull compared with the same line last year",
              "Carotenoid-poor diet, bright backgrounds during holding, or genetic drift in a line kept closed too long",
            ],
            [
              "Deformities and falling fertility over successive generations",
              "Inbreeding depression in a small closed line maintained without outcrossing",
            ],
            [
              "Losses on arrival at the buyer despite healthy fish at packing",
              "Gut not emptied before packing, packing density too high for the journey, or temperature swing in transit",
            ],
            [
              "Breeding stops seasonally without an obvious cause",
              "Ambient temperature or photoperiod outside the range the species requires to spawn",
            ],
            [
              "Disease spreading rapidly across many species at once",
              "New arrivals not quarantined, or shared equipment and a common recirculating system distributing the pathogen",
            ],
          ],
          basis:
            "Patterns commonly described in ornamental fish culture literature and trade practice, offered as diagnostic starting points rather than conclusions. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Match species selection to the facility's natural water chemistry and temperature range before deciding to modify either.",
            "Maintain quarantine as a physically separate system, serviced last, with equipment that never enters the production area.",
            "Keep written broodstock lines with dates and origins, and treat outcrossing as a scheduled activity rather than a response to a problem.",
            "Run live feed culture as a production line in its own right, with redundancy and its own routine.",
            "Grade repeatedly and honestly, and sell each grade as what it is rather than mixing grades into a single consignment.",
            "Condition every fish before dispatch, and set packing density from journey duration and recorded arrival outcomes.",
            "Comply with the regulations governing species that may be traded and exported, and avoid handling species whose collection or movement is restricted.",
            "Label and record consignments so that a buyer's complaint can be traced back to a specific batch, tank and packing date.",
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
            "Serious ornamental breeding is applied population genetics conducted with a notebook. The producer is selecting on traits of varying heritability — some colour patterns segregate cleanly, others are polygenic and respond slowly — while simultaneously trying to avoid narrowing the population to the point of depression. Practical management means keeping several parallel lines, recording performance by line, and outcrossing on a schedule that is followed even in a year when the line looks excellent.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Captive breeding of indigenous and marine ornamentals",
          value:
            "Developing reliable hatchery protocols for indigenous freshwater ornamentals and for marine species currently supplied by wild collection is an ongoing area of institutional work in India. Larval feeding requirements are the usual obstacle, and protocols established for one species rarely transfer directly to another.",
        },
        {
          kind: "text",
          value:
            "The commercial frontier is in reliability rather than in volume. Buyers, particularly export buyers, value consistent grade, predictable availability and low arrival mortality more than they value a large batch of variable quality. A producer who can supply the same specification every month at a stated grade occupies a much stronger position than one whose output fluctuates with whatever spawned, and building that consistency is a matter of scheduling broodstock, live feed and rearing capacity as a system rather than reacting to each spawning.",
        },
        {
          kind: "text",
          value:
            "Finally, transport is worth treating as an engineering problem rather than a packing habit. Bag volume, oxygen headspace, insulation, buffering of the transport water and the duration between packing and unpacking interact, and their combined effect on arrival condition can be improved systematically if arrival outcomes are recorded and fed back. Most producers who dispatch regularly discover that a modest reduction in packing density pays for itself in avoided mortality and in the buyer relationship it protects.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Ornamentals are sold by the piece for their appearance, so survival, uniformity and colour replace feed conversion as the measures that matter.",
    "Reproductive strategy determines facility layout, and a multi-species unit is effectively several small facilities sharing water and staff.",
    "Live feed culture is a parallel production line whose failure appears in the fry tanks within a day.",
    "Colour is genetics, diet and holding environment together, and a well-bred fish can present poorly if the last two are neglected.",
    "Small closed breeding lines accumulate inbreeding depression silently, so outcrossing must be scheduled rather than triggered by symptoms.",
    "Conditioning before dispatch and packing density matched to the real journey determine arrival condition more than anything done in the rearing tank.",
  ],
  related: ["breeding-genetics", "hatchery", "fish-health", "economics"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Programme material on ornamental fish culture, live fish trade and small-scale aquaculture enterprises.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute publications and extension material on ornamental fish breeding, live feed culture and indigenous species.",
    },
    {
      organisation: "State fisheries departments and agricultural universities in India",
      description: "Training material, species guidance and enterprise support for small-scale ornamental fish units.",
    },
  ],
};
