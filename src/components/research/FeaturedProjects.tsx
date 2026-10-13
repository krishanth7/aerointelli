"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SHELL } from "@/components/shared/shell";
import { featuredProjects } from "@/content/research/data";
import type { ResearchProject, DevelopmentStage, ResearchDomainId } from "@/content/research/types";

const domainFilters: { id: "all" | ResearchDomainId; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "aquaculture", label: "Aquaculture" },
  { id: "cultivation", label: "Cultivation" },
  { id: "water", label: "Water Engineering" },
  { id: "ai", label: "Artificial Intelligence" },
  { id: "automation", label: "Automation" },
];

const stageBadgeStyles: Record<DevelopmentStage, string> = {
  Concept: "bg-amber-500/10 text-amber-900 border-amber-500/20",
  Research: "bg-blue-500/10 text-blue-900 border-blue-500/20",
  Development: "bg-emerald-500/10 text-emerald-900 border-emerald-500/20",
  Testing: "bg-indigo-500/10 text-indigo-900 border-indigo-500/20",
  Validation: "bg-purple-500/10 text-purple-900 border-purple-500/20",
  Completed: "bg-teal-500/10 text-teal-900 border-teal-500/20",
  Published: "bg-slate-500/10 text-slate-900 border-slate-500/20",
};

export function FeaturedProjects() {
  const [activeDomain, setActiveDomain] = useState<"all" | ResearchDomainId>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);

  const filteredProjects = useMemo(() => {
    return featuredProjects.filter((proj) => {
      const matchesDomain = activeDomain === "all" || proj.domain === activeDomain;
      const matchesSearch =
        searchQuery.trim() === "" ||
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesDomain && matchesSearch;
    });
  }, [activeDomain, searchQuery]);

  return (
    <section id="projects" className="border-t border-hairline bg-surface-muted py-20 md:py-28">
      <div className={SHELL}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              03 / ACTIVE INVESTIGATION
            </p>
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px] md:text-[50px]">
              Research in Development.
            </h2>
          </div>
          <p className="max-w-[48ch] text-[15px] leading-relaxed text-ink-soft">
            Documented engineering records from our testbeds. Every record explicitly details
            methodology, working hypotheses, and active physical limitations.
          </p>
        </div>

        {/* Filter bar and search input */}
        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-hairline pb-6">
          <div className="flex flex-wrap items-center gap-1.5">
            {domainFilters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveDomain(tab.id)}
                className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors ${
                  activeDomain === tab.id
                    ? "bg-ink text-surface"
                    : "bg-surface text-ink-soft hover:text-ink border border-hairline"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative max-w-xs">
            <input
              type="text"
              placeholder="Search projects or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-[12px] border border-hairline bg-surface px-3.5 py-2 text-[13px] text-ink placeholder:text-ink-soft/60 outline-none focus:border-ink/40"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-[20px] border border-hairline-strong bg-surface p-6 shadow-sm transition-all duration-200 hover:border-ink/35 hover:shadow-panel"
            >
              <div>
                <div className="flex items-center justify-between border-b border-hairline pb-3">
                  <span className="font-mono text-[11px] font-semibold text-ink">
                    {project.code}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                      stageBadgeStyles[project.stage]
                    }`}
                  >
                    {project.stage}
                  </span>
                </div>

                <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                  {project.programTitle}
                </p>

                <h3 className="mt-2 text-[18px] font-semibold leading-snug tracking-tight text-ink">
                  {project.title}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                  {project.objective}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-surface-muted px-2 py-0.5 font-mono text-[10.5px] text-ink-soft border border-hairline"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="font-mono text-[10.5px] text-ink-soft py-0.5">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4 text-[12.5px]">
                <span className="font-mono text-[11px] text-ink-soft">Updated: {project.updatedAt}</span>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="font-semibold text-ink hover:text-[#244638] underline underline-offset-4"
                >
                  View Details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="rounded-[20px] border border-hairline bg-surface p-12 text-center">
            <p className="text-[16px] font-medium text-ink">No matching research records found</p>
            <p className="mt-2 text-[14px] text-ink-soft">
              Try adjusting your domain filter or search query.
            </p>
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
            <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[24px] border border-hairline bg-surface p-7 shadow-2xl md:p-9">
              <div className="flex items-start justify-between border-b border-hairline pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[12px] font-bold text-ink">
                      {selectedProject.code}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                        stageBadgeStyles[selectedProject.stage]
                      }`}
                    >
                      {selectedProject.stage}
                    </span>
                  </div>
                  <h3 className="mt-2 text-[22px] font-semibold text-ink">
                    {selectedProject.title}
                  </h3>
                  <p className="font-mono text-[11.5px] text-ink-soft">
                    Domain: {selectedProject.programTitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-hairline bg-surface-muted p-2 text-ink hover:bg-surface focus-visible:ring-2 focus-visible:ring-accent-deep"
                  aria-label="Close modal"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 space-y-5 text-[14.5px] leading-relaxed">
                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink-soft">
                    RESEARCH QUESTION
                  </p>
                  <p className="mt-1 italic text-ink font-serif text-[15px]">
                    &ldquo;{selectedProject.researchQuestion}&rdquo;
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink-soft">
                    OBJECTIVE
                  </p>
                  <p className="mt-1 text-ink">{selectedProject.objective}</p>
                </div>

                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink-soft">
                    TECHNICAL APPROACH & METHODOLOGY
                  </p>
                  <p className="mt-1 text-ink">{selectedProject.technicalApproach}</p>
                  <p className="mt-2 text-ink-soft">{selectedProject.methodology}</p>
                </div>

                {selectedProject.findings && (
                  <div className="rounded-[14px] border border-hairline bg-surface-muted p-4">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-900">
                      INTERIM OBSERVATIONS
                    </p>
                    <p className="mt-1 text-ink">{selectedProject.findings}</p>
                  </div>
                )}

                <div className="rounded-[14px] border border-amber-500/20 bg-amber-500/5 p-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-900">
                    STATED SCIENTIFIC LIMITATIONS
                  </p>
                  <p className="mt-1 text-amber-950/80 text-[13.5px]">
                    {selectedProject.limitations}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink-soft">
                    INSTRUMENTATION & HARDWARE INVOLVED
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-hairline bg-surface-muted px-3 py-1 font-mono text-[11px] text-ink"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end border-t border-hairline pt-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-[12px] bg-ink px-5 py-2 text-[13px] font-medium text-surface hover:bg-ink/90"
                >
                  Close Record
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
