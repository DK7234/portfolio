"use client";

import { GraduationCap, Shield, Cloud, Code2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import StaggerItem from "@/components/ui/StaggerItem";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

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
  className="scroll-mt-20 border-t border-white/10 bg-[#030712] py-20 md:py-24 lg:py-28"
>
       <Container>
        <Reveal className="max-w-3xl">
         <SectionHeading
        eyebrow="About"
        title="Building the bridge between software, networks, and security."
        description={
          <>
            I&apos;m David Khoury, a Computer Engineering student specializing
            in Systems &amp; Network Engineering at Antonine University.
            Through my full-stack development internship, academic projects,
            and hands-on cybersecurity labs, I&apos;ve gained practical
            experience building secure, scalable, and modern software
            solutions.
          </>
        }
      />

          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            My interests span software engineering, cloud computing,
            cybersecurity, networking, and DevOps. I enjoy solving real-world
            problems by combining strong engineering foundations with modern
            technologies, while continuously improving through professional
            projects, certifications, and practical learning.
          </p>
        </Reveal>

        <StaggerContainer className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={item.title} className="h-full">
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Icon size={24} aria-hidden="true" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-300">
                    {item.text}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}