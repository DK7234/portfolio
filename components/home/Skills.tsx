"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 bg-[#020617] px-4 py-20 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="mb-14 text-4xl font-bold text-white md:text-5xl">
            Technologies I work with.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">
                  {skill.category}
                </h3>

                <span
                  className="shrink-0 text-sm font-semibold text-cyan-400"
                  aria-label={`${skill.category} proficiency: ${skill.percentage} percent`}
                >
                  {skill.percentage}%
                </span>
              </div>

              <div
                className="mb-6 h-2 overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-valuenow={skill.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.category} proficiency`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-cyan-400"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}