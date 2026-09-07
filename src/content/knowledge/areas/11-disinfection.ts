import type { KnowledgeArea } from "../types";

export const disinfection: KnowledgeArea = {
  number: "11",
  slug: "disinfection",
  title: "UV and Disinfection",
  navSummary: "UV dose, ozone, ORP, and the difference between disinfection and sterilisation.",
  summary:
    "Disinfection suppresses waterborne pathogens in the loop. It does not sterilise, it depends entirely on water clarity, and applied carelessly it damages the biofilter it shares a system with.",
  difficulty: "advanced",
  topics: ["filtration", "water", "operations"],
  tags: ["UV", "ozone", "ORP", "pathogen control", "disinfection dose"],
  author: "Aero Intelli Engineering",
  publishedAt: "2026-03-22",
  updatedAt: "2026-09-07",
  version: "1.0",
  quickUnderstanding:
    "Because the same water goes back to the fish again and again, anything that makes fish sick circulates with it. Ultraviolet light and ozone knock those organisms back as the water passes. They only work on water that is already clear, and they never make water sterile.",
  sections: [
    {
      id: "definition",
      heading: "Definition",
      blocks: [
        {
          kind: "text",
          value:
            "Disinfection is the reduction of viable micro-organisms in the water passing through a treatment device. In recirculating aquaculture the common methods are ultraviolet irradiation and ozonation, applied either to the full recirculating flow, to a side stream, or to incoming makeup water.",
        },
        {
          kind: "callout",
          tone: "established",
          title: "Disinfection is not sterilisation",
          value:
            "A disinfection unit reduces the concentration of organisms in the water passing through it at that moment. It does not treat the organisms on tank walls, in biofilm, in the biofilter, in sludge or on the fish themselves. A system with UV is a system with a lower waterborne load, not a clean system.",
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
            "Recirculation gives a pathogen repeated access to every fish sharing the loop. Disinfection reduces the rate at which an organism circulates and re-infects, which changes the shape of an outbreak from a rapid amplification into something that can be managed.",
        },
        {
          kind: "list",
          items: [
            "It reduces the waterborne infection pressure on the standing biomass.",
            "It treats incoming water, which is one of the main routes by which a pathogen enters a closed system at all.",
            "Ozone additionally improves water clarity by breaking down fine colloidal organics, which benefits every other process.",
            "It is a supporting measure. Biosecurity, quarantine and stocking practice determine whether a pathogen is present; disinfection determines how fast it spreads once it is.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "How it works",
      blocks: [
        {
          kind: "text",
          value:
            "Ultraviolet disinfection works by delivering radiation at germicidal wavelengths to the organism, damaging its nucleic acids so it cannot reproduce. The effect depends on dose — the product of intensity and exposure time — and both terms are degraded by everything that stands between the lamp and the organism.",
        },
        {
          kind: "flow",
          caption: "What determines the UV dose actually delivered",
          steps: [
            {
              label: "Lamp output",
              detail:
                "Declines over lamp life. A lamp still glowing may be delivering a fraction of its rated germicidal output, which is why lamp hours are tracked rather than lamp appearance.",
            },
            {
              label: "Sleeve condition",
              detail:
                "The quartz sleeve between lamp and water fouls with mineral scale and biofilm. A fouled sleeve attenuates output before the light reaches the water at all.",
            },
            {
              label: "Water transmittance",
              detail:
                "Suspended solids and dissolved organics absorb and scatter ultraviolet. This is why clarification upstream is part of the disinfection design rather than a separate concern.",
            },
            {
              label: "Exposure time",
              detail:
                "Set by flow through the chamber. Higher flow means shorter exposure and lower dose, so a unit rated at one flow does not perform the same at another.",
            },
            {
              label: "Delivered dose",
              detail:
                "The product of the intensity actually reaching the organism and the time it spends there. Only this figure has any relationship to the reduction achieved.",
            },
          ],
        },
        {
          kind: "text",
          value:
            "Ozone works chemically instead, oxidising organic material and micro-organisms. It also breaks down fine colloidal organics, which is why ozonated systems often have visibly clearer water. The same reactivity is the hazard: ozone and its reaction products are toxic to fish and to the nitrifying population, and in saline water it forms persistent brominated oxidants that require particular care.",
        },
      ],
    },
    {
      id: "engineering-principles",
      heading: "Engineering principles",
      blocks: [
        {
          kind: "formula",
          name: "Ultraviolet dose",
          expression: "D = I x t",
          terms: [
            { symbol: "D", meaning: "Delivered ultraviolet dose", unit: "mJ/cm2" },
            { symbol: "I", meaning: "Average germicidal intensity in the water", unit: "mW/cm2" },
            { symbol: "t", meaning: "Exposure time in the chamber", unit: "s" },
          ],
          example:
            "Consider a hypothetical unit whose rated performance is quoted at a stated flow and a stated water transmittance. Operating it at higher flow reduces t; operating it on less transmissive water reduces I. Both reduce the delivered dose from the rated figure.",
          limitations:
            "Rated dose figures assume a specified transmittance, a clean sleeve and a new lamp. Real delivered dose is lower and varies continuously. The dose required for a given reduction differs by organism, and the appropriate design value depends on the target organism, species, loading, water chemistry and system configuration.",
        },
        {
          kind: "list",
          items: [
            "Clarify before disinfecting. Mechanical filtration is a prerequisite, not an optional upstream nicety.",
            "Size for the design flow at the worst expected transmittance, then treat the rated dose as a ceiling rather than an expectation.",
            "Where ozone is used, it must be fully reacted or destroyed before the water reaches fish or biofilter. Contact and residual destruction are part of the process, not accessories.",
            "Oxidation-reduction potential is the practical control signal for ozone dosing, and it must be interpreted in the context of that specific water rather than as an absolute number.",
            "Full-flow and side-stream treatment answer different questions: full flow reduces circulating load, side stream can apply a higher dose to a fraction.",
          ],
        },
      ],
    },
    {
      id: "design-considerations",
      heading: "Design considerations",
      blocks: [
        {
          kind: "list",
          items: [
            "Treat incoming makeup water as a separate and often higher priority than treating the recirculating flow.",
            "Provide isolation and bypass so lamps and sleeves can be serviced without stopping the loop.",
            "Include a UV intensity sensor where the application matters, since lamp hours alone do not measure delivered output.",
            "For ozone, provide a properly sized contact vessel, residual destruction before return, off-gas handling and ambient ozone monitoring for staff safety.",
            "Interlock ozone generation with flow and with residual measurement so that a stopped flow cannot result in a dosed stagnant volume.",
            "Ensure materials downstream of any oxidant are compatible with it.",
          ],
        },
        {
          kind: "callout",
          tone: "practice",
          title: "Protect the biofilter from the disinfection system",
          value:
            "The nitrifying population is as susceptible to oxidants as the organisms being targeted. Any ozone residual reaching the biofilter reduces its capacity, and the resulting ammonia excursion may appear days after the disinfection decision that caused it.",
        },
      ],
    },
    {
      id: "operational-considerations",
      heading: "Operational considerations",
      blocks: [
        {
          kind: "list",
          items: [
            "Record lamp hours and replace on the manufacturer's schedule, not when the lamp fails.",
            "Clean quartz sleeves on a fixed interval; scaling and biofilm accumulate continuously.",
            "Monitor water clarity or transmittance at the UV inlet, because it directly scales the delivered dose.",
            "Where ozone is used, monitor ORP continuously and treat the control loop as safety-critical.",
            "Maintain ambient ozone monitoring and alarms in any room where ozone is generated or contacted.",
            "Never rely on disinfection to compensate for a biosecurity failure at stocking or handling.",
          ],
        },
      ],
    },
    {
      id: "common-problems",
      heading: "Common problems and troubleshooting",
      blocks: [
        {
          kind: "table",
          caption: "Disinfection symptoms and first checks",
          columns: ["Symptom", "Measure or inspect first", "Common direction"],
          rows: [
            [
              "Disease pressure unchanged despite UV in service",
              "Lamp hours, sleeve condition, flow through the unit, water transmittance",
              "Delivered dose far below rated dose, or the reservoir of organisms is in biofilm rather than in the water",
            ],
            [
              "UV intensity reading falling at constant lamp hours",
              "Sleeve fouling, water clarity at the inlet",
              "Sleeve scaling or a rise in suspended solids",
            ],
            [
              "Fish showing irritation after ozone commissioning",
              "ORP and residual oxidant at the point of return to the tanks",
              "Residual not fully destroyed before the water reaches fish",
            ],
            [
              "Biofilter capacity falling after disinfection changes",
              "Residual oxidant reaching the biofilter, TAN and nitrite trend",
              "The nitrifying population suppressed by an oxidant it was not protected from",
            ],
            [
              "Water clarity good but ORP unstable",
              "Ozone control loop, sensor calibration, organic load variation",
              "A control signal being interpreted as an absolute rather than relative to this water",
            ],
          ],
          basis:
            "A diagnostic ordering. Appropriate doses, residuals and ORP values depend on the target organism, species, loading, water chemistry and system configuration.",
        },
      ],
    },
    {
      id: "maintenance",
      heading: "Maintenance",
      blocks: [
        {
          kind: "list",
          items: [
            "Replace UV lamps on elapsed hours and record the replacement.",
            "Clean sleeves mechanically or chemically on schedule, and inspect for cracking while doing so.",
            "Calibrate UV intensity sensors and ORP probes; both drift, and both are the basis for a safety judgement.",
            "Service ozone generators, dryers and air preparation equipment, since inlet air quality governs generator output.",
            "Test ambient ozone alarms functionally, not by checking that they are powered.",
          ],
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
            "Treating a rated dose as a delivered dose regardless of lamp age, sleeve condition and water clarity.",
            "Installing UV without adequate solids removal upstream.",
            "Running lamps past their service life because they still emit visible light.",
            "Allowing ozone residual to reach the biofilter or the fish.",
            "Using ozone in saline water without accounting for the persistent oxidants formed.",
            "Relying on disinfection as the biosecurity plan rather than as one component of it.",
          ],
        },
      ],
    },
    {
      id: "advanced",
      heading: "Advanced considerations",
      blocks: [
        {
          kind: "text",
          value:
            "Disinfection interacts with the microbial community rather than simply reducing it. A recirculating system carries a large and largely beneficial microbial population, and heavy continuous disinfection selects for what regrows fastest in the space created. Managing the loop for a stable mature community, rather than for the lowest possible microbial count, is an approach with real support in practice and one that changes how disinfection is applied.",
        },
        {
          kind: "text",
          value:
            "Ozone's secondary benefits — improved clarity, oxidation of nitrite and of colour-forming organics — are frequently the reason it is installed, with pathogen control as a bonus. That is a legitimate objective, but it should be stated explicitly, because the dose and control regime for water quality improvement differs from the regime for disinfection.",
        },
        {
          kind: "callout",
          tone: "research",
          title: "Microbial community management is an evolving field",
          value:
            "Whether to suppress the microbial community aggressively or to cultivate a stable mature one is an area where commercial practice and research are still converging.",
        },
      ],
    },
    {
      id: "summary",
      heading: "Summary",
      blocks: [
        {
          kind: "text",
          value:
            "Disinfection lowers the circulating pathogen load; it does not sterilise and it does not substitute for biosecurity. UV performance is dose, and dose is destroyed by lamp age, sleeve fouling, high flow and poor clarity. Ozone is more capable and more dangerous, requiring contact, residual destruction and monitoring for the sake of the fish, the biofilter and the staff.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "Disinfection reduces waterborne organisms in the treated flow only — it is not sterilisation.",
    "UV dose is intensity multiplied by exposure time, and both fall with fouling, lamp age, high flow and poor clarity.",
    "Solids removal upstream is part of the disinfection design.",
    "Ozone must be fully reacted or destroyed before reaching fish or biofilter.",
    "The nitrifying population is as vulnerable to oxidants as the target organisms.",
    "Treating incoming makeup water is often more valuable than treating the recirculating flow.",
  ],
  related: ["fish-health", "mechanical-filtration", "water-quality", "safety"],
  furtherReading: [
    {
      organisation: "Southern Regional Aquaculture Center (SRAC)",
      description:
        "Extension fact sheets on ultraviolet and ozone treatment in recirculating aquaculture systems.",
    },
    {
      organisation: "Food and Agriculture Organization of the United Nations (FAO)",
      description:
        "Technical guidance on biosecurity and water treatment for aquaculture production systems.",
      url: "https://www.fao.org/fishery/en/aquaculture",
    },
  ],
};
