"use client";

import Reveal from "@/components/ui/Reveal";
import { FileText, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "david12khoury@hotmail.com",
    href: "mailto:david12khoury@hotmail.com",
    external: false,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "davidkhoury-engineer",
    href: "https://linkedin.com/in/davidkhoury-engineer",
    external: true,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "DK7234",
    href: "https://github.com/DK7234",
    external: true,
  },
];

const resumes = [
  {
    label: "U.S. Resume",
    description: "For U.S.-based opportunities",
    href: "/resume/david-khoury-us-resume.pdf",
  },
  {
    label: "Lebanon CV",
    description: "For Lebanon and regional opportunities",
    href: "/resume/david-khoury-lebanon-cv.pdf",
  },
];

export default function Contact() {
  return (
    <section
  id="contact"
  className="scroll-mt-20 border-t border-white/10 bg-[#030712] py-20 md:py-24 lg:py-28"
>
       <Container>
    <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 md:p-10 lg:p-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something together."
          description="I&apos;m open to internship and part-time opportunities in software engineering, cloud computing, networking, and cybersecurity."
        />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {contacts.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  aria-label={`${item.label}: ${item.value}`}
                  className="group rounded-2xl border border-white/10 bg-black/20 p-4 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5 sm:p-5"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                      <Icon size={22} aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm text-gray-400">{item.label}</p>

                      <p className="break-all font-semibold text-white transition group-hover:text-cyan-300">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Resume Downloads
            </p>

            <div className="mt-4 grid gap-5 md:grid-cols-2">
              {resumes.map((resume) => (
                <a
                  key={resume.label}
                  href={resume.href}
                  download
                  aria-label={`Download David Khoury ${resume.label}`}
                  className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                      <FileText size={22} aria-hidden="true" />
                    </div>

                    <div>
                      <p className="font-semibold text-white transition group-hover:text-cyan-300">
                        {resume.label}
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        {resume.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Locations
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-cyan-400"
                />

                <span>Little Ferry, New Jersey, United States</span>
              </div>

              <div className="flex items-start gap-3 text-gray-300">
                <MapPin
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-cyan-400"
                />

                <span>Zahle, Lebanon</span>
              </div>
            </div>
          </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}