import type { KnowledgeArea } from "../types";

export const economics: KnowledgeArea = {
  number: "28",
  slug: "economics",
  title: "Aquaculture Economics",
  navSummary: "Cost structure, working capital, risk and the arithmetic that decides whether a technically sound farm is also viable.",
  summary:
    "Aquaculture economics concerns how capital and operating costs accumulate across a production cycle, how working capital is tied up in growing stock, and how price, survival and growth rate interact to determine margin. A biologically successful farm can still fail financially, usually because the cycle length and the timing of cash flows were not understood at the outset.",
  difficulty: "intermediate",
  topics: ["economics", "production", "operations"],
  tags: ["cost structure", "working capital", "break-even", "risk", "cash flow", "margin"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-08-08",
  updatedAt: "2026-09-08",
  version: "1.0",
  quickUnderstanding:
    "A farm spends money continuously and earns it only at harvest. Feed is usually the largest recurring cost, and the fish that die still consumed everything spent on them up to that point. Viability comes down to how much biomass survives to be sold, what it cost to produce, and whether the farm can fund the gap between spending and selling.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "text",
          value:
            "Aquaculture combines the capital intensity of manufacturing with the biological risk of agriculture and the price volatility of a commodity market. Money is committed at stocking, spent steadily through the grow-out phase, and recovered in a single concentrated event at harvest. Between those points the farm's assets are alive, cannot be inspected precisely, and can be lost entirely.",
        },
        {
          kind: "text",
          value:
            "That structure produces the characteristic economic problems of the sector. Working capital requirements peak just before revenue arrives. Fixed costs continue whether or not a cycle is running, so idle time between cycles is expensive. And the cost of a mortality event rises with the age of the stock, because everything spent on an animal is lost when it dies late in the cycle rather than early.",
        },
        {
          kind: "text",
          value:
            "This section describes those relationships rather than quoting prices. Input costs, farmgate prices and financing terms differ by species, region, season and year, and any figure presented as a market rate would be misleading. The arithmetic, however, is stable, and it is the arithmetic that determines whether a plan is sound.",
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
            "Most technical decisions on a farm are economic decisions in disguise. Stocking density is a trade between output and risk. Feed choice is a trade between price per kilogram and feed conversion. Aeration capacity is a trade between capital cost and the probability of a catastrophic loss. None of these can be resolved on biological grounds alone, because each has a cost and a return attached.",
        },
        {
          kind: "text",
          value:
            "Understanding the cost structure also changes what a farm measures. If feed dominates operating cost, then feed conversion ratio is the most valuable number on the farm, and small improvements in it outweigh large improvements in cheaper line items. If capital cost dominates, then utilisation and cycle length matter more, because fixed cost is spread over whatever is produced.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Late mortality is the expensive kind",
          value:
            "The cost carried by an animal accumulates with every day it is fed. Losing stock shortly after stocking costs the seed and a little feed; losing the same proportion shortly before harvest costs the entire cycle's investment in those animals and the revenue they would have produced.",
        },
      ],
    },
    {
      id: "core-concepts",
      heading: "Core concepts",
      blocks: [
        { kind: "subheading", value: "Fixed and variable cost" },
        {
          kind: "text",
          value:
            "Fixed costs — depreciation on ponds, tanks and equipment, permanent staff, land, insurance, interest on capital — continue regardless of how much is produced. Variable costs — seed, feed, energy, treatments, casual labour, harvest and transport — scale with production. The distinction matters because fixed cost per kilogram falls as output rises, which is why underutilised capacity is one of the most common causes of poor returns.",
        },
        { kind: "subheading", value: "Working capital and the cash cycle" },
        {
          kind: "text",
          value:
            "Working capital is the money tied up in stock, feed inventory and receivables. In aquaculture it rises steadily through a cycle and is released only at sale. The peak requirement, not the average, is what a farm must be able to fund, and misjudging it is a frequent reason that otherwise workable farms run into difficulty in their first cycles.",
        },
        { kind: "subheading", value: "Cost of production per kilogram" },
        {
          kind: "text",
          value:
            "The single most useful summary figure is total cost divided by kilograms actually sold — not kilograms stocked, and not kilograms harvested before grading losses. Expressing everything on this basis makes otherwise incomparable decisions comparable, because a change in survival, growth rate, feed price or cycle length all move the same number.",
        },
        { kind: "subheading", value: "Risk and variance" },
        {
          kind: "text",
          value:
            "Expected return is only half of an aquaculture investment case. The variance around it matters just as much, because a farm with a good average outcome and a meaningful probability of total loss in any given cycle may not survive long enough to realise the average. Risk management — redundancy, biosecurity, staged stocking, diversification of units — is bought at a cost that shows in the accounts as reduced average return.",
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
            "Three relationships carry most of the analytical weight: what a kilogram costs to produce, where break-even sits, and how much feed cost is embedded in each kilogram sold.",
        },
        {
          kind: "formula",
          name: "Cost of production per kilogram",
          expression: "C = (Cf + Cv) / Q",
          terms: [
            { symbol: "C", meaning: "Cost of production per kilogram sold", unit: "currency per kg" },
            { symbol: "Cf", meaning: "Fixed costs allocated to the cycle", unit: "currency" },
            { symbol: "Cv", meaning: "Variable costs incurred during the cycle", unit: "currency" },
            { symbol: "Q", meaning: "Saleable quantity harvested and accepted by the buyer", unit: "kg" },
          ],
          example:
            "Consider a hypothetical cycle in which fixed and variable costs together amount to 900,000 units of currency and 60,000 kg are sold. The cost of production is 15 units per kilogram. If survival had been lower and only 45,000 kg reached sale against nearly the same spend, the same cycle would carry a cost of 20 units per kilogram — the whole difference arising from survival rather than from any change in spending.",
          limitations:
            "Fixed cost allocation across overlapping cycles is a matter of accounting convention, and grading losses and rejected stock must be excluded from the saleable quantity or the figure flatters the result. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Break-even quantity",
          expression: "Qb = Cf / (P - Cu)",
          terms: [
            { symbol: "Qb", meaning: "Quantity that must be sold to cover fixed costs", unit: "kg" },
            { symbol: "Cf", meaning: "Fixed costs for the period", unit: "currency" },
            { symbol: "P", meaning: "Realised price received per kilogram", unit: "currency per kg" },
            { symbol: "Cu", meaning: "Variable cost per kilogram produced", unit: "currency per kg" },
          ],
          example:
            "Consider a hypothetical farm with fixed costs of 400,000 units for a period, a realised price of 20 units per kilogram and variable costs of 12 units per kilogram. The contribution is 8 units per kilogram, so 50,000 kg must be sold before the farm covers its fixed costs. A narrowing of contribution — through either a lower realised price or higher feed cost — raises that requirement sharply, which is why thin-margin operations are so sensitive to input prices.",
          limitations:
            "Realised price is not list price, since grading, size distribution, rejection and payment terms all reduce it, and variable cost per kilogram itself changes with survival and feed conversion. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "formula",
          name: "Feed cost per kilogram produced",
          expression: "Cfeed = FCR x Pf",
          terms: [
            { symbol: "Cfeed", meaning: "Feed cost embedded in each kilogram of gain", unit: "currency per kg" },
            { symbol: "FCR", meaning: "Feed conversion ratio achieved over the cycle", unit: "dimensionless" },
            { symbol: "Pf", meaning: "Delivered price of feed", unit: "currency per kg" },
          ],
          example:
            "Consider a hypothetical operation achieving a feed conversion ratio of 1.6 on feed costing 40 units per kilogram. Feed contributes 64 units to each kilogram of gain. Improving conversion to 1.4 on the same feed reduces that to 56 units, which is the same effect as a substantial reduction in feed price and is usually more achievable.",
          limitations:
            "Feed conversion is a whole-system outcome affected by mortality, uneaten feed, water quality and grading, so it cannot be improved by feed selection alone, and a cheaper feed with poorer conversion may cost more per kilogram of gain. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "major-subtopics",
      heading: "Major subtopics",
      blocks: [
        {
          kind: "table",
          caption: "Principal cost categories and what each is most sensitive to",
          columns: ["Category", "Nature", "Primary driver"],
          rows: [
            ["Feed", "Variable", "Feed conversion ratio, feeding accuracy and delivered feed price"],
            ["Seed and stocking", "Variable", "Seed quality, stocking number and early survival"],
            ["Energy", "Variable", "Aeration and pumping load, hydraulic head, tariff structure and outage frequency"],
            ["Labour", "Mixed", "System intensity, degree of mechanisation and unit count"],
            ["Health and treatments", "Variable, irregular", "Biosecurity standard and stocking density"],
            ["Harvest and logistics", "Variable", "Distance to market, chilling requirement and batch size"],
            ["Depreciation", "Fixed", "Capital intensity of the system and its service life"],
            ["Finance", "Fixed", "Cycle length, peak working capital and the terms obtained"],
            ["Overheads and compliance", "Fixed", "Regulatory requirements, certification and administration"],
          ],
          basis:
            "A structural classification of aquaculture cost categories and their sensitivities, without reference to any market rate. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        { kind: "subheading", value: "System type and cost shape" },
        {
          kind: "text",
          value:
            "Different production systems place their costs differently. Pond systems tend toward low capital and higher exposure to weather and natural productivity. Recirculating systems concentrate cost in capital and energy while reducing water and land requirement and improving control. Cage systems minimise water treatment cost but accept environmental exposure. The choice is not about which is cheapest in the abstract but about which cost shape a particular site, market and financing structure can support.",
        },
        { kind: "subheading", value: "Price realisation" },
        {
          kind: "text",
          value:
            "Farms are paid for what the buyer accepts, at the size specification the buyer wants, on the buyer's payment terms. Size uniformity, condition on arrival, timing relative to the seasonal supply pattern and reliability of supply all affect realised price. Improving realisation is often more accessible than reducing cost, and it is frequently neglected because it is a commercial rather than a technical activity.",
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
            "A cycle budget should be built in the same direction as the production plan: from the market backward, then checked forward against cost and cash.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Establish what the buyer wants — species, size, volume, timing and payment terms — before assuming any revenue.",
            "Set the production plan that meets that specification, with a conservative survival assumption and a growth curve for the temperature the site will actually deliver.",
            "Cost the plan line by line, separating fixed from variable, and use conversion and survival assumptions the farm has actually achieved rather than published best cases.",
            "Build a month-by-month cash profile, not an annual total, and identify the peak working capital requirement.",
            "Confirm funding exists for that peak, including a margin for a cycle that runs longer than planned.",
            "Test the plan against adverse cases: lower survival, poorer conversion, a delayed harvest and a weaker realised price, individually and together.",
            "Identify which single variable the result is most sensitive to, and concentrate measurement and management effort there.",
            "Reconcile actual costs against the budget at the close of each cycle, and revise the assumptions used for the next one.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Budget the gap between cycles",
          value:
            "Fixed costs continue during drying, disinfection, repair and restocking. A plan that assumes cycles follow one another immediately understates annual fixed cost per kilogram, and the error grows with the number of turnovers assumed.",
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
            "Biology sets the cycle length, and cycle length drives both finance cost and the number of turnovers a facility can achieve in a year. Anything that shortens the cycle without harming survival — better temperature control, better seed quality, better feeding — improves the economics twice over, by reducing interest carried and by spreading fixed cost across more output.",
        },
        {
          kind: "text",
          value:
            "Engineering decisions are capital purchases that buy either capacity or protection. Capacity raises the output over which fixed cost is spread. Protection reduces the probability of losing a cycle. The two compete for the same budget, and the correct balance depends on how much of the farm's value is concentrated in a single unit at peak biomass.",
        },
        {
          kind: "callout",
          tone: "assumption",
          title: "Survival and conversion assumptions dominate the result",
          value:
            "In most farm budgets, the outcome is more sensitive to assumed survival and feed conversion than to any input price. Because both are assumptions rather than quotations, a budget should state them explicitly and show the result across a plausible range rather than at a single value.",
        },
        {
          kind: "text",
          value:
            "In the Indian context there are additional structural factors: variable grid reliability, which places a real cost on standby generation; seasonal water availability, which constrains stocking calendars; and market channels that differ substantially in price and payment terms between local sale, organised procurement and export routes.",
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
            "Record cost against the cycle and the unit that incurred it, not only against the month. Costs pooled across the farm cannot be traced to the decisions that caused them.",
            "Track feed conversion continuously rather than at harvest, because by harvest it is only a historical fact.",
            "Value stock in progress at accumulated cost, so the exposure carried by each unit is visible while it can still be managed.",
            "Reconcile feed purchased, feed issued and feed recorded as fed. Discrepancies here corrupt every conversion figure derived from them.",
            "Treat the mortality record as a financial record, since it determines the denominator in every per-kilogram calculation.",
            "Review realised price against specification after every sale, and identify which quality attribute cost the most in downgrades.",
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
          caption: "Recurring economic failures and their usual origin",
          columns: ["Observation", "Usual underlying cause"],
          rows: [
            ["Cycle was biologically good but financially poor", "Cycle ran longer than planned, adding finance and fixed cost without adding revenue"],
            ["Cash ran out before harvest", "Peak working capital estimated from an average rather than from a month-by-month profile"],
            ["Cost per kilogram far above budget", "Survival below the assumption, so the same spending was spread over less saleable output"],
            ["Feed cost higher than expected despite good feed price", "Poor conversion from overfeeding, distribution problems or water quality limiting intake"],
            ["Realised price below expectation", "Size distribution outside specification, or condition on arrival triggering downgrades"],
            ["Fixed cost per kilogram rising year on year", "Fewer cycles completed than planned, leaving capacity idle between cycles"],
            ["Occasional catastrophic loss wipes out several good cycles", "Redundancy and biosecurity treated as a discretionary cost rather than as risk pricing"],
          ],
          basis:
            "Patterns commonly described in aquaculture extension and farm management literature, presented as diagnostic starting points rather than as measured outcomes. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
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
            "Build every budget on assumptions the farm has itself achieved, and record where each assumption came from.",
            "Present results as a range across plausible survival, conversion and price outcomes rather than as a single figure.",
            "Model cash monthly. Profitability and solvency are different questions and a farm can fail the second while passing the first.",
            "Treat protective capital expenditure as insurance with a calculable premium, and compare it against the value at risk at peak biomass.",
            "Secure the market before securing the stock, and prefer a buyer relationship that specifies size and timing over an assumed spot sale.",
            "Close the loop on every cycle with a reconciliation of plan against actual, and carry the corrected assumptions forward.",
            "Keep enough reserve to fund a full cycle after a total loss, because the ability to restock is what separates a setback from an exit.",
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
            "The advanced questions in farm economics are optimisation problems with genuine trade-offs. Harvest timing is the clearest: fish continue to grow, but conversion typically worsens with size, mortality risk accumulates, and price varies with both size grade and season. There is an economically optimal harvest weight at which the marginal revenue from another day of growth equals the marginal cost of producing it, and it is rarely the maximum weight the animal could reach.",
        },
        {
          kind: "formula",
          name: "Marginal condition for harvest timing",
          expression: "dR/dt = dC/dt",
          terms: [
            { symbol: "dR/dt", meaning: "Rate at which the value of the standing crop increases with time", unit: "currency per day" },
            { symbol: "dC/dt", meaning: "Rate at which cost accrues, including feed, energy, finance and expected mortality", unit: "currency per day" },
            { symbol: "t", meaning: "Time held beyond the current point in the cycle", unit: "days" },
          ],
          example:
            "Consider a hypothetical batch whose value is rising by 4,000 units of currency per day through growth and grade improvement, while feed, energy, finance and expected mortality together accrue 4,000 units per day. At that point additional holding adds nothing, and holding beyond it destroys value even though the fish are still growing.",
          limitations:
            "Both terms are estimates carrying substantial uncertainty, particularly the expected mortality component and any seasonal price movement, and the condition assumes the harvest can actually be scheduled freely. The appropriate design value depends on species, loading, temperature, water chemistry and system configuration.",
        },
        {
          kind: "flow",
          caption: "How value accumulates and is realised across a cycle. Cost accrues continuously while revenue arrives once.",
          steps: [
            { label: "Capital committed", detail: "Construction and equipment create fixed cost that continues irrespective of production." },
            { label: "Stocking", detail: "Seed cost is incurred and the cycle's exposure begins; working capital starts to rise." },
            { label: "Grow-out", detail: "Feed, energy and labour accrue daily, and accumulated cost per animal rises with every day held." },
            { label: "Peak exposure", detail: "Immediately before harvest the farm carries maximum biomass, maximum accumulated cost and maximum loss potential." },
            { label: "Harvest", detail: "Harvest, grading and logistics costs are incurred, and grading determines how much output is saleable at specification." },
            { label: "Realisation", detail: "Revenue arrives on the buyer's terms, releasing working capital and closing the cycle's cost record." },
            { label: "Turnaround", detail: "Drying, disinfection and repair continue to consume fixed cost before the next cycle can begin." },
          ],
        },
        {
          kind: "text",
          value:
            "Portfolio thinking is the other advanced consideration. A farm running several independent units with staggered stocking has a lower variance of annual outcome than one running a single large batch, even if the expected return is identical, because no single event removes the whole year's production. That reduction in variance has real economic value, and it is the reason staged stocking and unit separation are frequently worth their operational inconvenience.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Cost accrues continuously through a cycle while revenue arrives once, so peak working capital rather than average cost determines survivability.",
    "Cost per kilogram sold is the single comparable summary figure, and it is dominated by survival and feed conversion rather than by input prices.",
    "Fixed costs continue between cycles, so idle turnaround time raises the cost of every kilogram the farm eventually sells.",
    "Late mortality is far more expensive than early mortality, because the animals lost carry the whole cycle's accumulated cost.",
    "Protective capital expenditure is priced against the value at risk at peak biomass, not against its own purchase cost.",
    "There is an economically optimal harvest point at which further growth no longer pays for the cost of holding the stock.",
  ],
  related: ["fundamentals", "grow-out", "harvest", "feed-nutrition"],
  furtherReading: [
    {
      organisation: "Food and Agriculture Organization of the United Nations",
      description: "Sector analysis and guidance on aquaculture production economics and farm management.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
    {
      organisation: "National Fisheries Development Board, India",
      description: "Programme documentation and guidance relevant to aquaculture enterprise planning in India.",
    },
    {
      organisation: "State fisheries departments and agricultural universities in India",
      description: "Regional extension material on farm budgeting, input planning and market channels.",
    },
  ],
};
