"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-[#030712] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-400">
          Featured Projects
        </p>

        <h2 className="mb-6 text-5xl font-bold text-white">
          Real projects I&apos;ve built.
        </h2>

        <p className="mb-14 max-w-3xl text-lg leading-8 text-gray-300">
          A collection of projects across cybersecurity, networking, cloud, IoT,
          automation, and full-stack development.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}