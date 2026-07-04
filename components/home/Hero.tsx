"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Stat from "@/components/ui/Stat";
import dynamic from "next/dynamic";

const ProfileCard = dynamic(() => import("./ProfileCard"), {
  ssr: false,
});

const TypeAnimation = dynamic(
  () =>
    import("react-type-animation").then((mod) => ({
      default: mod.TypeAnimation,
    })),
  {
    ssr: false,
  }
);
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.15),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
            Systems • Networks • Cloud • Cybersecurity
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Hi, I&apos;m David Khoury.
          </h1>

          <div className="mt-4 min-h-[44px] text-2xl font-semibold text-cyan-400 md:text-3xl">
            <TypeAnimation
              sequence={[
                "Systems & Networks",
                1800,
                "Cloud Enthusiast",
                1800,
                "Cybersecurity",
                1800,
                "Full-Stack Developer",
                1800,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Computer Engineering student specializing in Systems & Networks
            Engineering. Passionate about cloud computing, cybersecurity,
            networking, and building scalable full-stack applications that solve
            real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
            >
              View Projects
            </Link>

            <a
              href="/resume/resume.pdf"
              download
              aria-label="Download David Khoury resume"
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:border-cyan-400 hover:text-cyan-400"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
            <Stat number={15} suffix="+" label="Projects" />
            <Stat number={8} suffix="+" label="Certifications" />
            <Stat number={3} label="Internships" />
            <Stat number={4} suffix="+" label="Years Learning" />
          </div>

          <div className="mt-8 flex gap-4 text-gray-300">
            <a
              href="https://github.com/DK7234"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="David Khoury GitHub profile"
            >
              <FaGithub className="text-xl transition hover:text-cyan-400" />
            </a>

            <a
              href="https://linkedin.com/in/davidkhoury-engineer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="David Khoury LinkedIn profile"
            >
              <FaLinkedin className="text-xl transition hover:text-cyan-400" />
            </a>

            <a
              href="mailto:david12khoury@hotmail.com"
              aria-label="Email David Khoury"
            >
              <Mail className="transition hover:text-cyan-400" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9 }}
          className="hidden justify-center lg:flex"
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  );
}