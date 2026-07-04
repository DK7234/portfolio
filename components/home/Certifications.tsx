"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-white/10 bg-[#020617] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-400">
          Certifications
        </p>

        <h2 className="mb-5 text-5xl font-bold text-white">
          Continuous Learning.
        </h2>

        <p className="mb-14 max-w-3xl text-lg text-gray-300">
          Professional certifications that reinforce my knowledge in networking,
          cybersecurity, and enterprise infrastructure.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {certifications.map((cert, index) => (

            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .08 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">

                <Award size={28}/>

              </div>

              <h3 className="mt-6 text-lg font-bold">

                {cert.title}

              </h3>

              <p className="mt-2 text-sm text-gray-400">

                {cert.issuer}

              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">

                  {cert.year}

                </span>

                {cert.credential && (

                  <a
                    href={cert.credential}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
                  >

                    Verify

                    <ExternalLink size={16}/>

                  </a>

                )}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}