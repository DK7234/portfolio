import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/project";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import StaggerItem from "@/components/ui/StaggerItem";

type RelatedProjectsProps = {
  projects: Project[];
};

export default function RelatedProjects({
  projects,
}: RelatedProjectsProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-white/10 bg-[#030712] py-20 md:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
              Explore More
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Related projects.
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
              Continue exploring projects across software engineering,
              cybersecurity, networking, cloud, and automation.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.slug} className="h-full">
              <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    {project.category}
                  </span>

                  <Link
                    href={`/projects/${project.slug}`}
                    aria-label={`View ${project.title} case study`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-400 transition duration-300 hover:-translate-y-1 hover:translate-x-1 hover:border-cyan-400/35 hover:bg-cyan-400/10 hover:text-cyan-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                </div>

                <h3 className="mt-6 text-xl font-bold leading-snug text-white sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-300">
                  {project.shortDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-black transition duration-300 hover:bg-cyan-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    View case study
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}