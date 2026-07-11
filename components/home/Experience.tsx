"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { experiences } from "@/data/experience";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
   <section
  id="experience"
  className="scroll-mt-20 border-t border-white/10 bg-[#030712] py-20 md:py-24 lg:py-28"
>
  <Container>
    <Reveal>
      <SectionHeading
        eyebrow="Experience"
        title="Professional experience."
        description="Building production software through real-world internship experience."
      />
    </Reveal>

         <div className="relative mt-12 md:mt-14">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[11px] top-3 hidden w-px bg-gradient-to-b from-cyan-400 via-cyan-400/30 to-transparent sm:block"
          />

          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.role}`}
              className="relative sm:pl-12"
            >
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="absolute left-0 top-8 hidden h-6 w-6 rounded-full border-4 border-[#030712] bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.45)] sm:block"
              />

              <Reveal direction="left" delay={0.1}>
                <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 ease-out hover:border-cyan-400/30 hover:bg-white/[0.045] sm:p-8 lg:p-10">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-cyan-400">
                        <BriefcaseBusiness
                          size={20}
                          aria-hidden="true"
                          className="shrink-0"
                        />

                        <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                          {experience.company}
                        </span>
                      </div>

                      <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                        {experience.role}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-3 text-sm text-gray-300 sm:flex-row sm:flex-wrap lg:flex-col lg:items-end">
                      <div className="flex items-center gap-2">
                        <CalendarDays
                          size={17}
                          aria-hidden="true"
                          className="shrink-0 text-cyan-400"
                        />

                        <span>{experience.period}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin
                          size={17}
                          aria-hidden="true"
                          className="shrink-0 text-cyan-400"
                        />

                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-7 max-w-4xl text-base leading-8 text-gray-300">
                    {experience.description}
                  </p>

                  <div className="mt-7">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                      Technologies
                    </h4>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((technology, index) => (
                        <motion.span
                          key={technology}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.35,
                            delay: index * 0.035,
                          }}
                          className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-200"
                        >
                          {technology}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                      Contributions
                    </h4>

                    <ul className="mt-5 grid gap-4 lg:grid-cols-2">
                      {experience.achievements.map((achievement, index) => (
                        <motion.li
                          key={achievement}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.45,
                            delay: index * 0.06,
                          }}
                          className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                        >
                          <CheckCircle2
                            size={18}
                            aria-hidden="true"
                            className="mt-0.5 shrink-0 text-cyan-400"
                          />

                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}