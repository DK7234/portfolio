"use client";

import { motion } from "framer-motion";
import { GraduationCap, Shield, Cloud, Code2 } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Computer Engineering",
    text: "Systems and Networks Engineering student at Antonine University.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    text: "Building tools for recon, IP reputation checks, and network analysis.",
  },
  {
    icon: Cloud,
    title: "Cloud & IoT",
    text: "Hands-on projects using Microsoft Azure, IoT Hub, and cloud services.",
  },
  {
    icon: Code2,
    title: "Full-Stack",
    text: "Experience with React, Next.js, Node.js, Express, MySQL, and MongoDB.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 bg-[#030712] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Building the bridge between software, networks, and security.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            I&apos;m David Khoury, a Computer Engineering student specializing
            in Systems and Networks. I enjoy building practical projects that
            combine cloud, cybersecurity, automation, networking, and modern web
            development.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            My goal is to grow into a strong systems, cloud, and cybersecurity
            engineer who can design, secure, deploy, and maintain real-world
            infrastructure and applications.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Icon size={24} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-gray-400">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}