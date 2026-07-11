"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import Reveal from "@/components/ui/Reveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import StaggerItem from "@/components/ui/StaggerItem";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section
  id="skills"
  className="scroll-mt-20 border-t border-white/10 bg-[#020617] py-20 md:py-24 lg:py-28"
>
  <Container>
    <Reveal>
      <SectionHeading
        eyebrow="Technical Skills"
        title="Technologies I work with."
      />
    </Reveal>


        <StaggerContainer className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
          {skills.map((skill, index) => (
            <StaggerItem key={skill.category} className="h-full">
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]">
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
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}