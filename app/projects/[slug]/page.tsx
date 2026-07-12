import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  ExternalLink,
  FolderGit2,
  Layers3,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ProjectGallery from "@/components/projects/ProjectGallery";
import Container from "@/components/ui/Container";
import {
  getProjectBySlug,
  getProjectSlugs,
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjectSlugs();
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | David Khoury",
    };
  }

  return {
    title: `${project.title} | David Khoury`,
    description: project.shortDescription,

    alternates: {
      canonical: `/projects/${project.slug}`,
    },

    openGraph: {
      title: `${project.title} | David Khoury`,
      description: project.shortDescription,
      url: `/projects/${project.slug}`,
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.title} | David Khoury`,
      description: project.shortDescription,
    },
  };
}

function getRepositoryLabel(status?: string) {
  if (status === "private") {
    return "Private source code";
  }

  if (status === "coming-soon") {
    return "Repository coming soon";
  }

  return "Public repository";
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const hasRepository =
    project.status === "public" && Boolean(project.github);

  const repositoryLabel = getRepositoryLabel(project.status);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#020617] pt-20">
      <section className="relative isolate overflow-hidden border-b border-white/10 py-16 sm:py-20 md:py-24 lg:py-28">
        {/* Background grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]"
        />

        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_25%,rgba(34,211,238,0.12),transparent_36%)]"
        />

        <Container>
          <Link
            href="/#projects"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm font-medium text-gray-300 transition duration-300 ease-out hover:bg-white/[0.05] hover:text-cyan-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Back to projects
          </Link>

          <div className="mt-10 grid items-center gap-12 xl:grid-cols-[1.08fr_0.92fr] xl:gap-16">
            {/* Project information */}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  {project.category}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-300">
                  {project.status === "public" ? (
                    <FolderGit2
                      size={15}
                      aria-hidden="true"
                      className="text-cyan-400"
                    />
                  ) : (
                    <LockKeyhole
                      size={15}
                      aria-hidden="true"
                      className="text-cyan-400"
                    />
                  )}

                  {repositoryLabel}
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-gray-300 transition duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.07] hover:text-cyan-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                {hasRepository && project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <FaGithub size={18} aria-hidden="true" />
                    View source

                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ) : (
                  <div className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-gray-300">
                    <LockKeyhole
                      size={17}
                      aria-hidden="true"
                      className="text-cyan-400"
                    />

                    {repositoryLabel}
                  </div>
                )}

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 font-semibold text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <ExternalLink size={18} aria-hidden="true" />
                    Live demo

                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                )}
              </div>
            </div>

            {/* Premium project overview panel */}
            <div className="relative mx-auto w-full max-w-xl xl:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-[2.5rem] bg-cyan-400/[0.08] blur-3xl"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900/90 to-[#020617] p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px]"
                />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        Project Overview
                      </p>

                      <h2 className="mt-3 text-2xl font-bold text-white">
                        Engineering snapshot
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                      <Boxes size={23} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                      <Layers3
                        size={20}
                        aria-hidden="true"
                        className="text-cyan-400"
                      />

                      <p className="mt-4 text-sm text-gray-400">
                        Technologies
                      </p>

                      <p className="mt-1 text-2xl font-bold text-white">
                        {project.tech.length}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                      <ShieldCheck
                        size={20}
                        aria-hidden="true"
                        className="text-cyan-400"
                      />

                      <p className="mt-4 text-sm text-gray-400">
                        Source access
                      </p>

                      <p className="mt-1 text-lg font-bold text-white">
                        {project.status === "public"
                          ? "Public"
                          : project.status === "coming-soon"
                            ? "Coming soon"
                            : "Private"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-sm text-gray-400">
                      Primary discipline
                    </p>

                    <p className="mt-2 text-xl font-bold text-white">
                      {project.category}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-6">
                    <p className="text-sm leading-7 text-gray-300">
                      This case study documents the project&apos;s engineering
                      context, implementation decisions, technologies, and
                      lessons learned.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Temporary case-study foundation */}
      <section className="border-b border-white/10 bg-[#030712] py-20 md:py-24 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
                Case Study
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Project overview
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <p className="text-base leading-8 text-gray-300 sm:text-lg">
                {project.description}
              </p>

              <p className="mt-5 text-base leading-8 text-gray-400">
                The next Phase 3 steps will expand this page with screenshots,
                key features, architecture, challenges, solutions, and lessons
                learned.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <ProjectGallery
  projectTitle={project.title}
  images={project.gallery ?? []}
/>
    </main>
  );
}