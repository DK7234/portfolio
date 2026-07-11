"use client";

import { motion } from "framer-motion";
import { GraduationCap, Shield, Cloud, Code2 } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Computer Engineering",
    text: "Systems & Network Engineering student at Antonine University, expected to graduate in 2027.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    text: "Hands-on experience with Active Directory, BloodHound, Kali Linux, Wireshark, Nmap, and security automation.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    text: "Building cloud and IoT solutions with Microsoft Azure, Azure IoT Hub, Docker, and Cloudflare R2.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    text: "Developing modern applications with Next.js, React, TypeScript, Prisma, MySQL, REST APIs, and OAuth.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-[#030712] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-400">
            About
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Building the bridge between software, networks, and security.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            I&apos;m David Khoury, a Computer Engineering student specializing
            in Systems &amp; Network Engineering at Antonine University. Through
            my full-stack development internship, academic projects, and
            hands-on cybersecurity labs, I&apos;ve gained practical experience
            building secure, scalable, and modern software solutions.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            My interests span software engineering, cloud computing,
            cybersecurity, networking, and DevOps. I enjoy solving real-world
            problems by combining strong engineering foundations with modern
            technologies, while continuously improving through professional
            projects, certifications, and practical learning.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Icon size={24} aria-hidden="true" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-gray-300">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}