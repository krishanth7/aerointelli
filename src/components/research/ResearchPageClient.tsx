"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ResearchHero } from "./ResearchHero";
import { ResearchIntroduction } from "./ResearchIntroduction";
import { ResearchMethodology } from "./ResearchMethodology";
import { ResearchPrograms } from "./ResearchPrograms";
import { FeaturedProjects } from "./FeaturedProjects";
import { ResearchInfrastructure } from "./ResearchInfrastructure";
import { ResearchPublications } from "./ResearchPublications";
import { ResearchDataVisualizations } from "./ResearchDataVisualizations";
import { EngineeringTools } from "./EngineeringTools";
import { ResearchCollaborations } from "./ResearchCollaborations";
import { ResearchDisciplines } from "./ResearchDisciplines";
import { ResearchPrinciples } from "./ResearchPrinciples";
import { ResearchRoadmap } from "./ResearchRoadmap";
import { ResearchUpdates } from "./ResearchUpdates";
import { ResearchCTA } from "./ResearchCTA";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ResearchPageClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Subtle section fades on enter
      const sections = containerRef.current?.querySelectorAll("section");
      if (sections) {
        sections.forEach((sec, idx) => {
          if (idx === 0) return; // Skip hero for immediate visibility
          gsap.fromTo(
            sec,
            { opacity: 0.92, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* 01. Research Hero */}
      <ResearchHero />

      {/* 02. Research Introduction & Taxonomy */}
      <ResearchIntroduction />

      {/* 03. Research Philosophy (5-Stage Methodology) */}
      <ResearchMethodology />

      {/* 04. Research Programs (6 Core Domains) */}
      <ResearchPrograms />

      {/* 05. Featured R&D Projects */}
      <FeaturedProjects />

      {/* 06. Research Infrastructure & Testbeds */}
      <ResearchInfrastructure />

      {/* 07. Publications & Technical Insights */}
      <ResearchPublications />

      {/* 08. Research Data & Visualizations */}
      <ResearchDataVisualizations />

      {/* 09. Engineering Tools & Models */}
      <EngineeringTools />

      {/* 10. Research Collaborations */}
      <ResearchCollaborations />

      {/* 11. Research Disciplines */}
      <ResearchDisciplines />

      {/* 12. Research Principles */}
      <ResearchPrinciples />

      {/* 13. Research Roadmap */}
      <ResearchRoadmap />

      {/* 14. Research Updates */}
      <ResearchUpdates />

      {/* 15. Final Research CTA */}
      <ResearchCTA />
    </div>
  );
}
