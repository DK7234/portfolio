"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import ProfileCard from "./ProfileCard";
import Stat from "@/components/ui/Stat";
import Container from "@/components/ui/Container";

const TypeAnimation = dynamic(
  () =>
    import("react-type-animation").then((module) => module.TypeAnimation),
  {
    ssr: false,
  },
);

const roles = [
  "Full-Stack Developer Intern",
  1800,
  "Systems & Network Engineering Student",
  1800,
  "Cloud Computing Enthusiast",
  1800,
  "Cybersecurity Practitioner",
  1800,
];

const statistics = [
  {
    number: 6,
    suffix: "+",
    label: "Projects",
  },
  {
    number: 8,
    suffix: "+",
    label: "Certifications",
  },
  {
    number: 1,
    suffix: "",
    label: "Internship",
  },
  {
    number: 2022,
    suffix: "",
    label: "Engineering Journey",
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
     className="relative isolate min-h-screen w-full overflow-x-clip overflow-y-hidden bg-[#020617] pt-20"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <div className="absolute left-[-10%] top-[15%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/6 blur-[120px]" />

        <div className="absolute right-[-10%] top-[12%] h-[32rem] w-[32rem] rounded-full bg-blue-500/[0.06] blur-[140px]" />

        <div className="absolute bottom-[-20%] left-[35%] h-[26rem] w-[26rem] rounded-full bg-cyan-400/[0.06] blur-[130px]" />
      </div>

      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
      />

      {/* Top radial highlight */}
      <div
  aria-hidden="true"
  className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] xl:hidden bg-[radial-gradient(circle_at_70%_28%,rgba(34,211,238,0.09),transparent_45%)]"
/>

      <Container className="relative">
         <div className="grid min-h-[calc(100vh-5rem)] min-w-0 items-center gap-16 py-16 lg:py-20 xl:grid-cols-[1.1fr_0.9fr]">
          {/* Left side */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 28,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 min-w-0"
          >
            {/* Availability */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -14,
                    }
              }
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.1,
              }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 before:absolute
before:inset-0
before:rounded-3xl
before:border
before:border-white/5
before:pointer-events-none bg-cyan-400/[0.07] px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl xl:hidden"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  aria-hidden="true"
                  className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60 motion-reduce:animate-none"
                />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>

             Available for internships & part-time roles
            </motion.div>

            {/* Eyebrow */}
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm sm:tracking-[0.4em]">
              Systems • Networks • Cloud • Cybersecurity
            </p>

            {/* Main heading */}
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
  Hi, I&apos;m{" "}
  <span className="relative inline-block">
    David Khoury.
    <span
      aria-hidden="true"
      className="absolute -bottom-1 left-0 h-1 w-[92%] rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent"
    />
  </span>
</h1>

            {/* Animated role */}
            <div
              aria-label="Professional roles"
               className="mt-6 min-h-[4.5rem] max-w-full break-words text-xl font-semibold leading-snug text-cyan-300 sm:min-h-[3.5rem] sm:text-2xl md:text-3xl"
            >
              <TypeAnimation
                sequence={roles}
                wrapper="span"
                speed={42}
                repeat={Infinity}
                cursor
              />
            </div>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Computer Engineering student specializing in Systems &amp;
              Network Engineering with professional experience building
              production-ready SaaS applications using Next.js, React,
              TypeScript, Prisma, MySQL, and cloud technologies.
            </p>

            {/* Location */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <MapPin
                  size={16}
                  aria-hidden="true"
                  className="text-cyan-400"
                />
                Lebanon
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-gray-600 sm:block" />

              <span>New Jersey, United States</span>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#020617]"
              >
                View Projects
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href="/resume/david-khoury-us-resume.pdf"
                download
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/[0.07] hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Download
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
                Download U.S. Resume
              </a>
            </div>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/DK7234"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="David Khoury GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FaGithub size={19} aria-hidden="true" />
              </a>

              <a
                href="https://linkedin.com/in/davidkhoury-engineer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="David Khoury LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FaLinkedin size={19} aria-hidden="true" />
              </a>

              <a
                href="mailto:david12khoury@hotmail.com"
                aria-label="Email David Khoury"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Mail size={19} aria-hidden="true" />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {statistics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 16,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35 + index * 0.08,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06]"
                >
                  <Stat
                    number={stat.number}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.94,
                    x: 30,
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden justify-center xl:flex"
          >
            {/* Decorative rings */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[31rem] w-[31rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
            />

            {/* Floating badge */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -12, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-4 top-20 z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#07111f]/90 px-4 py-3 text-sm text-gray-200 shadow-xl backdrop-blur-xl"
            >
              <Sparkles
                size={17}
                aria-hidden="true"
                className="text-cyan-400"
              />
              Building real products
            </motion.div>

            <div className="relative z-10">
              <div
                aria-hidden="true"
                className="absolute -inset-7 rounded-[2.2rem] bg-cyan-400/10 blur-3xl"
              />

              <div className="relative rounded-[2rem] border border-white/10
shadow-[0_0_0_1px_rgba(34,211,238,0.08)] bg-white/[0.035] p-3 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
                <ProfileCard />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, 6, 0],
                }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-500 transition hover:text-cyan-400 xl:flex"
        >
          Scroll
          <ArrowDown size={17} aria-hidden="true" />
        </motion.a>
      </Container>
    </section>
  );
}