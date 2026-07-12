import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  FolderKanban,
} from "lucide-react";

import type { Project } from "@/types/project";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

type ProjectNavigationProps = {
  previousProject: Project | null;
  nextProject: Project | null;
};

export default function ProjectNavigation({
  previousProject,
  nextProject,
}: ProjectNavigationProps) {
  if (!previousProject && !nextProject) {
    return null;
  }

  return (
    <section className="border-b border-white/10 bg-[#020617] py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
                Continue Exploring
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Browse the project collection.
              </h2>
            </div>

            <Link
              href="/#projects"
              className="inline-flex min-h-11 items-center gap-2 self-start rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-gray-200 transition duration-300 ease-out hover:border-cyan-400/35 hover:bg-cyan-400/10 hover:text-cyan-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <FolderKanban size={17} aria-hidden="true" />
              All projects
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {previousProject ? (
              <Link
                href={`/projects/${previousProject.slug}`}
                aria-label={`View previous project: ${previousProject.title}`}
                className="group flex min-h-44 flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-cyan-500/10 active:translate-y-0 active:scale-[0.99]"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400">
                  <ArrowLeft
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                  Previous project
                </div>

                <span className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {previousProject.category}
                </span>

                <h3 className="mt-2 text-xl font-bold leading-snug text-white transition duration-300 group-hover:text-cyan-100 sm:text-2xl">
                  {previousProject.title}
                </h3>
              </Link>
            ) : (
              <div className="hidden md:block" aria-hidden="true" />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                aria-label={`View next project: ${nextProject.title}`}
                className="group flex min-h-44 flex-col items-end rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-right transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-cyan-500/10 active:translate-y-0 active:scale-[0.99]"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400">
                  Next project
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

                <span className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {nextProject.category}
                </span>

                <h3 className="mt-2 text-xl font-bold leading-snug text-white transition duration-300 group-hover:text-cyan-100 sm:text-2xl">
                  {nextProject.title}
                </h3>
              </Link>
            ) : (
              <div className="hidden md:block" aria-hidden="true" />
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}