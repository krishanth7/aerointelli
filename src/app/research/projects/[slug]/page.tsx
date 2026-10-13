import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SHELL } from "@/components/shared/shell";
import { featuredProjects } from "@/content/research/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return featuredProjects.map((p) => ({ slug: p.relatedSlug || p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((p) => (p.relatedSlug || p.id) === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Research & Development | Aero Intelli`,
    description: project.objective,
    alternates: { canonical: `/research/projects/${slug}` },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => (p.relatedSlug || p.id) === slug);
  if (!project) notFound();

  return (
    <article className="bg-surface pb-24 pt-[calc(var(--header-height-mobile)+2rem)] md:pb-32 md:pt-[calc(var(--header-height)+3rem)]">
      <div className={SHELL}>
        <div className="max-w-[840px]">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[12.5px] text-ink-soft">
            <Link href="/research/r-and-d" className="hover:text-ink transition-colors">
              R&D
            </Link>
            <span aria-hidden="true">&rsaquo;</span>
            <Link href="/research/r-and-d#projects" className="hover:text-ink transition-colors">
              Projects
            </Link>
            <span aria-hidden="true">&rsaquo;</span>
            <span className="font-mono text-ink">{project.code}</span>
          </nav>

          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[13px] font-bold text-[#244638]">
              PROJECT {project.code}
            </span>
            <span className="h-1 w-1 rounded-full bg-ink-soft" />
            <span className="rounded-full border border-hairline bg-surface-muted px-3 py-0.5 font-mono text-[11px] uppercase tracking-wider text-ink">
              Stage: {project.stage}
            </span>
            <span className="text-[12.5px] text-ink-soft">Updated {project.updatedAt}</span>
          </div>

          <h1 className="mt-4 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[46px]">
            {project.title}
          </h1>

          <p className="mt-4 text-[16.5px] leading-relaxed text-ink-soft">
            Domain: <span className="font-medium text-ink">{project.programTitle}</span>
          </p>

          <div className="mt-8 rounded-[20px] border border-hairline-strong bg-surface-muted p-6 md:p-8">
            <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#244638]">
              PRIMARY HYPOTHESIS & RESEARCH QUESTION
            </p>
            <p className="mt-2 font-serif text-[18px] italic leading-relaxed text-ink">
              &ldquo;{project.researchQuestion}&rdquo;
            </p>
          </div>

          <div className="mt-12 space-y-10 text-[16px] leading-[1.75] text-ink">
            <section>
              <h2 className="text-[20px] font-semibold tracking-tight text-ink border-b border-hairline pb-2">
                Research Objective
              </h2>
              <p className="mt-4 text-ink-soft">{project.objective}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-tight text-ink border-b border-hairline pb-2">
                Technical Approach & Experimental Methodology
              </h2>
              <p className="mt-4 text-ink-soft">{project.technicalApproach}</p>
              <p className="mt-3 text-ink-soft">{project.methodology}</p>
            </section>

            {project.findings && (
              <section className="rounded-[18px] border border-hairline bg-emerald-500/5 p-6">
                <h2 className="text-[18px] font-semibold tracking-tight text-emerald-950">
                  Interim Empirical Observations
                </h2>
                <p className="mt-3 text-emerald-900/90 text-[15px]">{project.findings}</p>
              </section>
            )}

            <section className="rounded-[18px] border border-amber-500/20 bg-amber-500/5 p-6">
              <h2 className="text-[18px] font-semibold tracking-tight text-amber-950">
                Stated Scientific & Physical Limitations
              </h2>
              <p className="mt-3 text-amber-950/85 text-[15px]">{project.limitations}</p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-tight text-ink border-b border-hairline pb-2">
                Technologies & Sensor Suites Involved
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-hairline-strong bg-surface-muted px-3.5 py-1 font-mono text-[12px] text-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-16 border-t border-hairline pt-8 flex items-center justify-between">
            <Link
              href="/research/r-and-d#projects"
              className="text-[14.5px] font-semibold text-ink underline underline-offset-4 hover:text-[#244638]"
            >
              &larr; Return to All R&D Projects
            </Link>

            <Link
              href="/contact?type=research"
              className="rounded-[12px] bg-ink px-5 py-2.5 text-[13.5px] font-medium text-surface hover:bg-ink/90"
            >
              Contact Research Team
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
