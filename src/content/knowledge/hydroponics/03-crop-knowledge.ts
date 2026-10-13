import type { KnowledgeArea } from "../types";

export const cropKnowledge: KnowledgeArea = {
  number: "03",
  slug: "crop-knowledge",
  title: "Hydroponic Crop Knowledge",
  navSummary: "Crop profiles for leafy greens, herbs, fruiting vegetables and strawberry, and why no single setpoint fits them all.",
  summary:
    "A hydroponic crop is a set of requirements, not a plant in a pot. Root habit, cycle length, environmental range, nutrient demand pattern, training regime and harvest method differ between species and between cultivars of the same species, and the system has to be designed around those differences rather than around an average plant.",
  difficulty: "intermediate",
  topics: ["crops", "production", "biology"],
  tags: ["leafy greens", "herbs", "tomato", "capsicum", "cucumber", "strawberry", "crop profiles"],
  species: ["Lactuca sativa", "Ocimum basilicum", "Solanum lycopersicum", "Capsicum annuum", "Cucumis sativus", "Fragaria x ananassa"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-06-20",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "Different crops want different things. Lettuce is a short, light, cool-preferring crop that finishes in weeks. A tomato plant occupies the house for most of a year, carries a heavy fruit load, and needs training, support and pollination. Herbs sit between the two and are usually cut repeatedly. Strawberry needs cool roots and careful runner and crown management. Choosing a crop is choosing a set of obligations.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Crop knowledge is what turns a functioning system into a producing one. The equipment defines what is possible; the crop defines what is required. A grower who understands the crop can compensate for a mediocre system, while a good system operated without crop knowledge produces plants that are alive and unsaleable.",
        },
        {
          kind: "text",
          value:
            "This section describes four groups: leafy greens, culinary herbs, fruiting vegetables and strawberry. Each profile carries the same eighteen fields so that crops can be compared on the same terms. The values given are ranges and tendencies described in general horticultural practice. They are starting points for a specific cultivar trial, not settings to be copied.",
        },
        {
          kind: "callout",
          tone: "practice",
          title: "No parameter suits every cultivar or stage",
          value:
            "Every figure in this section varies with cultivar, growth stage, season, climate, system type and source water. Two cultivars of the same species can differ in temperature tolerance, nutrient demand and bolting behaviour to a degree that outweighs the difference between species groups.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why crop selection decides the farm",
      blocks: [
        {
          kind: "text",
          value:
            "The crop determines the system family, the environmental control burden, the labour profile and the cash-flow pattern. Leafy greens turn over quickly, which means frequent income, frequent transplanting and a house that empties often enough to be cleaned properly. Fruiting vegetables occupy the structure for most of a year, tie up capital, and concentrate labour into training and picking tasks that recur every week for months.",
        },
        {
          kind: "text",
          value:
            "It also determines the tolerance for error. A short crop that is mismanaged for a week is a lost crop. A long crop that is mismanaged for a week carries the consequence into flowering and fruit set weeks later, at which point the cause is hard to identify. Neither situation is more forgiving; they fail on different timescales.",
        },
        {
          kind: "text",
          value:
            "Market fit sits above all of it. The crop that grows most easily on a site is not automatically the crop with a buyer, a price that covers the energy bill and a shelf life that survives the distance to the customer.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts in crop requirements",
      blocks: [
        { kind: "subheading", value: "Vegetative and generative demand" },
        {
          kind: "text",
          value:
            "A crop grown for leaves is asked to stay vegetative for its whole life. A crop grown for fruit must shift from building structure to filling fruit, and then maintain both at once. That shift changes nutrient ratios, water demand, temperature strategy and the consequences of any environmental stress. Managing the balance between vegetative and generative behaviour is the central skill in fruiting crops and is essentially irrelevant in lettuce.",
        },
        { kind: "subheading", value: "Root habit and system fit" },
        {
          kind: "text",
          value:
            "Shallow fibrous root systems that stay small suit thin-film channels and rafts. Extensive root systems that keep expanding for months need substrate volume and per-plant irrigation. Trying to grow a long-cycle fruiting crop in a narrow channel usually ends with the channel blocked by root mass and the downstream plants starved.",
        },
        { kind: "subheading", value: "Cycle length and turnover" },
        {
          kind: "text",
          value:
            "Short-cycle crops let a grower learn quickly, because a mistake and its consequence are separated by weeks rather than months. Long-cycle crops reward experience and punish a season of guesswork. A new operation that intends to grow fruiting vegetables often benefits from running a short crop first purely to shake out the system.",
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
            "Two quantities structure most crop planning: how much light the crop accumulates and how much of it survives to harvest as saleable weight.",
        },
        {
          kind: "formula",
          name: "Plant density and light share",
          expression: "L_plant = DLI x A_plant",
          terms: [
            { symbol: "L_plant", meaning: "Light intercepted per plant per day at full canopy", unit: "mol/plant/day" },
            { symbol: "DLI", meaning: "Daily light integral at the canopy", unit: "mol/m2/day" },
            { symbol: "A_plant", meaning: "Ground area allocated to each plant", unit: "m2" },
          ],
          example:
            "Consider a hypothetical leafy crop at 25 plants per square metre under a canopy daily light integral of 14 mol/m2/day. Each plant receives about 0.56 mol per day at full cover. Halving the density doubles the share per plant but does not double the yield per square metre, because the crop no longer intercepts all the available light.",
          limitations:
            "This assumes a closed canopy and ignores shading geometry, leaf angle and the compensation point of shaded lower leaves. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        {
          kind: "formula",
          name: "Harvest index",
          expression: "HI = M_saleable / M_total",
          terms: [
            { symbol: "HI", meaning: "Fraction of total plant biomass that is saleable", unit: "dimensionless" },
            { symbol: "M_saleable", meaning: "Fresh mass of the harvested portion", unit: "g" },
            { symbol: "M_total", meaning: "Total fresh biomass produced by the plant", unit: "g" },
          ],
          example:
            "Consider a hypothetical comparison between a whole-head lettuce, where nearly all above-ground growth is sold, and a fruiting vine, where leaves, stem and roots are grown to support a fruit fraction. The vine can produce far more total biomass and still return less saleable weight per unit of energy, which is why yield figures are only comparable within a crop type.",
          limitations:
            "Harvest index varies with cultivar, pruning strategy, harvest specification and market grade, and a higher index is not automatically a higher return. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Crop profiles",
      blocks: [
        { kind: "subheading", value: "Leafy greens" },
        {
          kind: "table",
          caption: "Profile: lettuce and related leafy greens",
          columns: ["Field", "Description"],
          rows: [
            ["Common Name", "Lettuce, along with related leafy greens such as pak choi, spinach and rocket"],
            ["Scientific Name", "Lactuca sativa, with related species in the same production group"],
            ["Crop Type", "Short-cycle vegetative leaf crop, harvested whole head or as cut leaf"],
            ["Growth Cycle", "Typically several weeks from transplant to harvest, shorter in warm bright conditions and longer in low light"],
            ["Root Characteristics", "Shallow, fibrous, relatively small root mass that does not expand greatly during the cycle"],
            ["Preferred System", "Nutrient film technique, deep water culture rafts and ebb and flow all suit it; substrate drip is possible but rarely necessary"],
            ["Nutritional Requirements", "Moderate total demand with a nitrogen-led vegetative pattern; calcium supply and its movement to the growing point matter more than total concentration"],
            ["Environmental Requirements", "Cool, well-ventilated conditions with steady air movement over the canopy to keep transpiration active"],
            ["Temperature", "Prefers a cool range; high temperature promotes bolting and bitterness, and the threshold differs sharply between cultivars bred for warm and cool seasons"],
            ["Humidity", "Moderate; persistently high humidity suppresses transpiration and is associated with calcium-related leaf margin disorders"],
            ["Light", "Moderate daily light integral; excessive light with insufficient cooling causes stress rather than extra yield"],
            ["pH considerations", "A mildly acidic solution range is usual, with drift upward or downward affecting micronutrient availability before it affects the major elements"],
            ["EC considerations", "Comparatively low conductivity; raising it does not increase leaf yield and can reduce head size and quality"],
            ["Spacing", "Dense planting is normal, and final spacing is set by head size specification and by the point at which mutual shading begins"],
            ["Training", "None; management is limited to keeping the canopy open and removing damaged outer leaves"],
            ["Harvest", "Single cut for head types, or repeated cutting for baby leaf and loose-leaf types"],
            ["Common Problems", "Bolting under heat, leaf margin necrosis linked to calcium transport, downy mildew in humid still air, and root browning in warm solution"],
            ["Commercial Considerations", "Fast turnover and steady cash flow, but short shelf life, high freight sensitivity and a price that is exposed to field-grown supply"],
          ],
          basis:
            "General crop characteristics as described in horticultural practice; ranges are deliberately qualitative because published figures differ by cultivar and region. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        { kind: "subheading", value: "Culinary herbs" },
        {
          kind: "table",
          caption: "Profile: basil and comparable culinary herbs",
          columns: ["Field", "Description"],
          rows: [
            ["Common Name", "Basil, with mint, coriander, parsley and chives grown on similar principles"],
            ["Scientific Name", "Ocimum basilicum, and related genera for the other herbs in the group"],
            ["Crop Type", "Vegetative aromatic leaf crop, often cut repeatedly from the same plant"],
            ["Growth Cycle", "First cut a few weeks after transplant, with further cuts at intervals until quality declines"],
            ["Root Characteristics", "Fibrous and moderately vigorous; basil roots more strongly than lettuce and tolerates a substrate well"],
            ["Preferred System", "Nutrient film technique, deep water culture and substrate systems are all used; potted living herbs are usually grown in a medium for retail"],
            ["Nutritional Requirements", "Moderate; excessive nitrogen produces soft growth with weaker aroma and poorer shelf life"],
            ["Environmental Requirements", "Warm and bright for basil, cooler for coriander and parsley, so the group cannot share one compartment comfortably"],
            ["Temperature", "Basil is chilling-sensitive and shows damage at temperatures that other leafy crops tolerate; coriander bolts in the heat basil prefers"],
            ["Humidity", "Moderate; high humidity with still air encourages foliar disease on dense herb canopies"],
            ["Light", "Responds well to higher light than lettuce, which supports both yield and aromatic quality"],
            ["pH considerations", "A mildly acidic range as for other leafy crops, with stability mattering more than the exact setpoint"],
            ["EC considerations", "Low to moderate; some growers raise conductivity modestly late in the cycle to firm the tissue, and the response varies by cultivar"],
            ["Spacing", "Set by whether the crop is sold as cut bunches or as a living plant, with living-plant production needing wider spacing"],
            ["Training", "Pinching the growing tip encourages branching and delays flowering, which is the main quality control in basil"],
            ["Harvest", "Repeated cutting above a node pair, with cut height determining regrowth speed and the number of usable cuts"],
            ["Common Problems", "Cold damage and blackening in basil, rapid bolting in coriander, downy mildew, and loss of aroma from over-fertilised soft growth"],
            ["Commercial Considerations", "Higher unit value than leafy greens, strong local demand, but very short post-harvest life and demanding cold-chain requirements that differ by species"],
          ],
          basis:
            "General crop characteristics as described in horticultural practice, aggregated across a group that behaves differently species by species. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        { kind: "subheading", value: "Fruiting vegetables" },
        {
          kind: "table",
          caption: "Profile: tomato, capsicum and cucumber compared field by field",
          columns: ["Field", "Tomato", "Capsicum", "Cucumber"],
          rows: [
            ["Common Name", "Tomato", "Capsicum, sweet pepper", "Cucumber"],
            ["Scientific Name", "Solanum lycopersicum", "Capsicum annuum", "Cucumis sativus"],
            ["Crop Type", "Long-cycle indeterminate fruiting vine", "Long-cycle fruiting shrub", "Fast fruiting vine with a shorter productive life"],
            ["Growth Cycle", "Can occupy the house for most of a year with continuous picking", "Similar length, with a slower start and a more episodic fruit flush", "Shorter cycle, often replanted several times a year"],
            ["Root Characteristics", "Extensive and vigorous, expanding throughout the crop", "Less vigorous than tomato and slower to establish", "Vigorous and fast, with high water demand per unit of root"],
            ["Preferred System", "Drip into substrate with drain recovery", "Drip into substrate", "Drip into substrate, occasionally deep systems for short cycles"],
            ["Nutritional Requirements", "High total demand with a marked shift in ratio once fruit load builds", "High potassium demand during fruit colouring; calcium supply is critical", "High and rapid demand matching its growth rate"],
            ["Environmental Requirements", "Warm, with a day-night difference used deliberately to steer vegetative and generative balance", "Warm and stable; sensitive to sharp swings during fruit set", "Warm and humid, with strong ventilation to manage disease"],
            ["Temperature", "Fruit set fails outside the cultivar's range at both ends, and pollen viability is the first casualty of heat", "Narrower tolerance than tomato around flowering; fruit shape distorts under stress", "Prefers the warmest range of the three and dislikes cold roots"],
            ["Humidity", "Moderate; both extremes harm set, low humidity through desiccated pollen and high humidity through poor pollen release", "Moderate and stable", "Tolerates higher humidity but pays for it in mildew pressure"],
            ["Light", "High requirement; yield tracks accumulated light closely once other factors are adequate", "High, though excessive direct radiation causes sunscald on exposed fruit", "High, with fast response to added light because of its growth rate"],
            ["pH considerations", "Mildly acidic root-zone target, with substrate pH drifting away from tank pH over time", "As tomato, with particular attention because calcium availability affects fruit quality", "As tomato; rapid uptake can move root-zone pH faster than the tank suggests"],
            ["EC considerations", "Conductivity is used deliberately as a steering tool, raised to improve fruit quality and lowered to relieve stress; the workable range differs by cultivar and season", "Moderate; excessive conductivity worsens calcium-related fruit disorders", "Generally lower than tomato, because high conductivity restricts its rapid water uptake"],
            ["Spacing", "Low plant density with high stem density achieved through stem management", "Similar density, usually grown to two or more stems", "Wider spacing for the leaf area each plant carries"],
            ["Training", "Single or double stem on high wire, with layering, deleafing and truss pruning", "Formal two or four stem training with regular deleafing", "Umbrella or high-wire training with frequent lateral and leaf removal"],
            ["Harvest", "Continuous picking over months at a defined colour stage", "Picked green or at full colour, with colouring adding weeks of occupancy", "Frequent picking, sometimes daily, because fruit oversize quickly"],
            ["Common Problems", "Blossom end rot from calcium transport failure, poor set from temperature or humidity extremes, and vigour running vegetative", "Blossom end rot, fruit cracking, sunscald and irregular flushes", "Powdery and downy mildew, fruit abortion under stress, and rapid wilting when irrigation fails"],
            ["Commercial Considerations", "Highest yield potential of the three but the largest labour and energy commitment", "Higher unit price with lower yield per square metre and a longer wait for first income", "Fast return and frequent replanting, with quality highly sensitive to picking discipline"],
          ],
          basis:
            "Comparative crop characteristics as generally described in protected cultivation practice, presented qualitatively because every figure moves with cultivar and season. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
        },
        { kind: "subheading", value: "Strawberry" },
        {
          kind: "list",
          items: [
            "Common Name: Strawberry.",
            "Scientific Name: Fragaria x ananassa.",
            "Crop Type: Perennial herbaceous fruiting crop, grown commercially as an annual or over multiple flushes depending on type.",
            "Growth Cycle: Depends entirely on whether the cultivar is a short-day June-bearing type flowering in response to daylength, or a day-neutral type cropping continuously; the two are managed as different crops.",
            "Root Characteristics: Fine, shallow and sensitive to both saturation and high root temperature, with a crown that must never be buried or waterlogged.",
            "Preferred System: Drip into substrate in raised gutters or troughs, which suits harvest ergonomics as well as root requirements.",
            "Nutritional Requirements: Moderate total demand, with a shift in ratio between runner and crown development and fruiting, and particular sensitivity to calcium and boron supply during fruit development.",
            "Environmental Requirements: Cool to moderate temperatures with good air movement, and pollination that requires either insect activity or a deliberate alternative.",
            "Temperature: Prefers cooler conditions than fruiting vegetables; high root temperature is a common failure in warm climates and often needs gutter shading or solution cooling.",
            "Humidity: Moderate; persistent leaf wetness and high humidity around the fruit strongly increase grey mould pressure.",
            "Light: Moderate to high, with daylength itself acting as a developmental signal in short-day types rather than only as an energy supply.",
            "pH considerations: A mildly acidic root zone is usual, and iron availability is an early casualty of upward drift in this crop.",
            "EC considerations: Comparatively sensitive to high conductivity, which reduces fruit size; the workable range narrows in hot weather when water demand rises.",
            "Spacing: Set by gutter geometry and picking access, since fruit must hang clear of the medium to stay clean and dry.",
            "Training: Runner removal is the principal ongoing task, along with removing old leaves and early flower trusses on young plants.",
            "Harvest: Frequent hand picking at a defined ripeness, with fruit that does not improve after picking and bruises easily.",
            "Common Problems: Grey mould, powdery mildew, poor or misshapen fruit from incomplete pollination, high root temperature, and crown rot from planting depth errors.",
            "Commercial Considerations: High unit value and strong demand, offset by intensive picking labour, very short shelf life and dependence on good planting material.",
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
            "Working from a profile to a plan follows a consistent order regardless of crop.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Confirm the market first: the grade, size and pack the buyer wants, because that specification decides spacing and harvest timing.",
            "Choose the cultivar for the climate and season, not only the species. Cultivar choice determines heat tolerance, disease resistance and cycle length more than any management decision that follows.",
            "Check the crop's temperature range against what the structure can actually hold in the hottest and coldest weeks of the year.",
            "Match root habit and cycle length to the system family before buying anything.",
            "Plan the labour calendar. Training and picking tasks in fruiting crops recur weekly and cannot be deferred.",
            "Set stage-based targets for conductivity, pH and environment in writing before the crop starts, and record deviations against them.",
            "Run a small trial of any new cultivar alongside a known one before committing a whole house to it.",
          ],
        },
        {
          kind: "callout",
          tone: "established",
          title: "Pollination is a requirement, not an option",
          value:
            "Tomato, capsicum, cucumber and strawberry differ in how their flowers are pollinated, and several will not set marketable fruit without insect activity, mechanical vibration or a parthenocarpic cultivar. This must be settled at planning, not discovered at flowering.",
        },
      ],
    },
    {
      id: "considerations",
      heading: "Biological and commercial considerations",
      blocks: [
        {
          kind: "text",
          value:
            "Cultivar differences within a species routinely exceed the differences between species groups in the parameters growers care about. Heat-tolerant lettuce cultivars bolt at temperatures that would end a cool-season type; determinate and indeterminate tomatoes have completely different training and cycle implications; day-neutral and short-day strawberries are managed on different calendars. Any recommendation that names a species without naming a cultivar is incomplete.",
        },
        {
          kind: "text",
          value:
            "Growth stage moves the same parameters again. A young transplant with a small root system and little leaf area cannot use the conductivity or irrigation frequency that suits the same plant carrying a full fruit load. Fixed setpoints applied across a whole crop cycle are a common and expensive simplification.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Mixed cropping in one compartment",
          value:
            "Growing several crops in one environment means every crop is held at a compromise none of them prefers. It can be a reasonable commercial decision, but the yield and quality cost should be treated as real rather than assumed away.",
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
            "Keep a written crop plan per cultivar and per season, with stage-based targets, and revise it after each cycle against what actually happened.",
            "Record plant measurements as well as environment: stem diameter, truss or node development, leaf length and fruit set are the crop's own report on whether the strategy is working.",
            "Separate propagation from production physically, and grade transplants before they enter the house.",
            "Keep the harvest specification visible to the picking team, since grade-out is decided by picking discipline as much as by growing.",
            "Track labour hours per crop task, because training and picking dominate the cost structure of fruiting crops.",
            "Change one steering variable at a time in a long crop and allow the plant a full development interval to respond.",
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
          caption: "Crop-specific symptoms and where the cause usually sits",
          columns: ["Crop", "Symptom", "Usual underlying cause"],
          rows: [
            ["Lettuce", "Leaf margin browning on inner leaves", "Calcium transport to a fast-growing enclosed leaf, driven by humidity and growth rate rather than solution calcium"],
            ["Lettuce", "Early flowering stalk and bitterness", "Temperature above the cultivar's threshold, sometimes combined with root stress"],
            ["Basil", "Blackened patches and collapse after cool nights", "Chilling injury; basil is damaged at temperatures other leafy crops tolerate"],
            ["Tomato", "Sunken dark lesion at the fruit base", "Calcium delivery to the fruit failing under rapid growth or erratic water supply"],
            ["Capsicum", "Misshapen or small fruit after a flush", "Stress at flowering, or plant load exceeding what the current light supports"],
            ["Cucumber", "Young fruit yellowing and aborting", "Plant carrying more fruit than current light and water supply can fill"],
            ["Strawberry", "Misshapen fruit with undeveloped sections", "Incomplete pollination across the receptacle"],
            ["Strawberry", "Wilting with a healthy-looking canopy in warm weather", "Root-zone temperature above the crop's range, or root damage from saturation"],
          ],
          basis:
            "Diagnostic starting points drawn from common horticultural practice; each symptom has more than one possible cause and requires confirmation on the crop. The appropriate design value depends on crop, cultivar, growth stage, climate, system and water chemistry.",
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
            "Select cultivars for the local climate and season before optimising anything else.",
            "Write stage-based targets rather than crop-wide setpoints, and treat every published figure as a starting point for a trial.",
            "Start a new operation with a short-cycle crop to expose system faults on a timescale where they can be learned from.",
            "Buy certified, traceable planting material and inspect it on arrival.",
            "Match the harvest specification to the buyer's grade before setting spacing and planting date.",
            "Keep records at the cultivar level so that a good or bad season can be attributed to something specific.",
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
            "Crop steering in long-cycle fruiting crops is the advanced practice that separates experienced growers. Conductivity, irrigation timing, day-night temperature difference and pruning decisions are used together to push a plant towards vegetative or generative behaviour. The signals are read from the plant, not the sensor: stem diameter, head thickness, truss angle, flowering position relative to the head and fruit set rate.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Cultivar performance in controlled environments",
          value:
            "Most commercial cultivars were selected under field or conventional greenhouse conditions. Which traits matter most under high-light controlled environments, and whether selection under those conditions gives different results, remains an open area.",
        },
        {
          kind: "text",
          value:
            "The second advanced area is grading and uniformity. In a crop sold to a size specification, the value lies in the fraction of the harvest that meets the grade, not the total weight produced. Uniform transplants, uniform irrigation and uniform light are the three inputs to a uniform harvest, and they are usually addressed in the opposite order to their importance.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Crop profiles differ in root habit, cycle length, environmental range and labour pattern, and the system must follow the crop.",
    "Cultivar differences within a species frequently exceed the differences between species, so no figure is meaningful without a cultivar.",
    "Growth stage changes nutrient, conductivity and irrigation requirements, which makes crop-wide fixed setpoints an expensive simplification.",
    "Fruiting vegetables require deliberate management of the balance between vegetative and generative growth; leafy crops do not.",
    "Pollination and training requirements must be settled at planning, since they cannot be retrofitted at flowering.",
    "Value comes from the fraction of the harvest that meets the buyer's grade, not from total biomass produced.",
  ],
  related: ["fundamentals", "systems", "plant-biology", "propagation"],
  furtherReading: [
    {
      organisation: "International Society for Horticultural Science",
      description: "Horticultural science community covering protected cultivation and crop-specific working groups.",
    },
    {
      organisation: "Indian Council of Agricultural Research",
      description: "Institute publications on vegetable and horticultural crops, including cultivar and protected cultivation guidance.",
    },
    {
      organisation: "State agricultural universities and horticulture departments in India",
      description: "Regional cultivar recommendations and crop calendars matched to local climate.",
    },
  ],
};
