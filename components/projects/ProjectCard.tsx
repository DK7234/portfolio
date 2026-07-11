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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="flex h-48 items-center justify-center border-b border-white/10 bg-cyan-400/10 px-6 text-center">
        <span className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-cyan-400"
            >
              <FaGithub size={17} aria-hidden="true" />
              View source
            </a>
          ) : (
            <span className="text-sm text-gray-500">
              Repository coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}