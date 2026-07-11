"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import StaggerItem from "@/components/ui/StaggerItem";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedProjects() {
  return (
   <section
  id="projects"
  className="scroll-mt-20 border-t border-white/10 bg-[#030712] py-20 md:py-24 lg:py-28"
>
  <Container>
    <Reveal>
      <SectionHeading
        eyebrow="Featured Projects"
        title="Real projects I&apos;ve built."
        description="A collection of projects across cybersecurity, networking, cloud, IoT, automation, and full-stack development."
      />
    </Reveal>

         <StaggerContainer className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.title} className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}