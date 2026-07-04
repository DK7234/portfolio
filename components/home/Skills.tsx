"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 bg-[#020617] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-400">
          Technical Skills
        </p>

        <h2 className="mb-14 text-5xl font-bold">
          Technologies I work with.
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  {skill.category}
                </h3>

                <span className="text-cyan-400">
                  {skill.percentage}%
                </span>
              </div>

              <div className="mb-6 h-2 rounded-full bg-white/10">
                <motion.div
                  whileInView={{
                    width: `${skill.percentage}%`,
                  }}
                  initial={{
                    width: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="h-full rounded-full bg-cyan-400"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}