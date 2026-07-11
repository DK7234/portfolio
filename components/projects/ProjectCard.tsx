import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: string;
  github?: string;
  image: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const hasRepository = Boolean(project.github);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-cyan-500/10">
      {/* Subtle animated glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:scale-125 group-hover:bg-cyan-400/20"
      />

      {/* Project visual */}
      <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-400/15 via-cyan-400/5 to-transparent px-6 text-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px]"
        />

        <span className="relative rounded-full border border-cyan-400/25 bg-[#020617]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 backdrop-blur-md">
          {project.category}
        </span>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-700 group-hover:w-full"
        />
      </div>

      <div className="relative flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold leading-snug text-white transition duration-300 group-hover:text-cyan-100 sm:text-2xl">
            {project.title}
          </h3>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-400 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-cyan-400/30 group-hover:text-cyan-400">
            <ArrowUpRight size={18} aria-hidden="true" />
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-gray-300">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300 transition duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.07] group-hover:text-cyan-200"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-7">
          {hasRepository ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-gray-200 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <FaGithub size={17} aria-hidden="true" />
              View source
              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          ) : (
            <div className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-2.5 text-sm text-gray-400">
              <LockKeyhole size={16} aria-hidden="true" />
              Private internship repository
            </div>
          )}
        </div>
      </div>
    </article>
  );
}