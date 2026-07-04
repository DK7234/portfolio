import { ExternalLink } from "lucide-react";
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
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="flex h-48 items-center justify-center border-b border-white/10 bg-cyan-400/10">
        <span className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>

        <p className="mt-3 text-sm leading-6 text-gray-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400"
            >
              <FaGithub size={17} />
              View source
            </a>
          )}

          <button
            type="button"
            aria-label={`View ${project.title} project details`}
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400"
          >
            <ExternalLink size={17} />
            Details
          </button>
        </div>
      </div>
    </div>
  );
}