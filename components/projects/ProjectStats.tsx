import {
  FolderKanban,
  Images,
  Layers3,
  Network,
} from "lucide-react";

import type { Project } from "@/types/project";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import StaggerItem from "@/components/ui/StaggerItem";

type ProjectStatsProps = {
  project: Project;
};

export default function ProjectStats({ project }: ProjectStatsProps) {
  const technologyCount = project.tech.length;
  const screenshotCount = project.gallery?.length ?? 0;
  const workflowCount = project.architecture?.flows.length ?? 0;

  const stats = [
    {
      label: "Technologies",
      value: technologyCount.toString(),
      description: "Tools and platforms used",
      icon: Layers3,
    },
    {
      label: "Screenshots",
      value: screenshotCount.toString(),
      description:
        screenshotCount > 0
          ? "Visual project documentation"
          : "Gallery planned for later",
      icon: Images,
    },
    {
      label: "Workflows",
      value: workflowCount.toString(),
      description:
        workflowCount > 0
          ? "Documented engineering flows"
          : "Architecture planned for later",
      icon: Network,
    },
    {
      label: "Discipline",
      value: project.category,
      description: "Primary project category",
      icon: FolderKanban,
    },
  ];

  return (
    <section className="border-b border-white/10 bg-[#030712] py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
              Project at a Glance
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Engineering statistics.
            </h2>

            <p className="mt-4 text-base leading-8 text-gray-300">
              A concise overview generated directly from this project&apos;s
              technologies, documentation, and architecture.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <StaggerItem key={stat.label} className="h-full">
                <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                    <Icon size={22} aria-hidden="true" />
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    {stat.label}
                  </p>

                  <p className="mt-2 break-words text-2xl font-bold text-white">
                    {stat.value}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {stat.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}