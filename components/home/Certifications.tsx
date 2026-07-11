"use client";

import { certifications } from "@/data/certifications";
import { Award, ExternalLink } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import StaggerItem from "@/components/ui/StaggerItem";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certifications() {
  return (
    <section
  id="certifications"
  className="scroll-mt-20 border-t border-white/10 bg-[#020617] py-20 md:py-24 lg:py-28"
>
  <Container>
    <Reveal>
      <SectionHeading
        eyebrow="Certifications"
        title="Continuous learning."
        description="Professional certifications that reinforce my knowledge in networking, cybersecurity, and enterprise infrastructure."
      />
    </Reveal>

        <StaggerContainer className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {certifications.map((cert) => (
            <StaggerItem key={cert.title} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                  <Award size={28} aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-white">
                  {cert.title}
                </h3>

                <p className="mt-2 text-sm text-gray-300">
                  {cert.issuer}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                    {cert.year}
                  </span>

                  {cert.credential && (
                    <a
                      href={cert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Verify ${cert.title} credential`}
                      className="flex items-center gap-2 text-sm text-cyan-400 transition hover:text-cyan-300"
                    >
                      Verify
                      <ExternalLink size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}