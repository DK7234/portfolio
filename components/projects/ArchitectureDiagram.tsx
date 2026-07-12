"use client";

import { ArrowDown, ArrowRight, Network, Workflow } from "lucide-react";

import type { ProjectArchitecture } from "@/types/project";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import StaggerItem from "@/components/ui/StaggerItem";

type ArchitectureDiagramProps = {
  architecture: ProjectArchitecture;
};

export default function ArchitectureDiagram({
  architecture,
}: ArchitectureDiagramProps) {
  if (architecture.flows.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-white/10 bg-[#020617] py-20 md:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
              Engineering Architecture
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {architecture.title}
            </h2>

            {architecture.description && (
              <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
                {architecture.description}
              </p>
            )}
          </div>
        </Reveal>

        <div className="mt-12 space-y-8 md:mt-14">
          {architecture.flows.map((flow, flowIndex) => (
            <Reveal key={flow.title} delay={flowIndex * 0.08}>
              <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
                <header className="flex flex-col gap-4 border-b border-white/10 bg-black/20 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-3 text-cyan-400">
                      <Workflow size={20} aria-hidden="true" />

                      <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                        Workflow {flowIndex + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-white">
                      {flow.title}
                    </h3>

                    {flow.description && (
                      <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
                        {flow.description}
                      </p>
                    )}
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                    <Network size={22} aria-hidden="true" />
                  </div>
                </header>

                <StaggerContainer className="p-6 sm:p-8">
                  <div className="flex flex-col items-stretch lg:flex-row lg:items-center">
                    {flow.nodes.map((node, nodeIndex) => (
                      <StaggerItem
                        key={`${flow.title}-${node.title}`}
                        className="contents"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.035] to-transparent p-5 text-center transition duration-300 ease-out hover:border-cyan-400/35 hover:bg-cyan-400/[0.07]">
                            <span className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                            <h4 className="font-semibold text-white">
                              {node.title}
                            </h4>

                            {node.subtitle && (
                              <p className="mt-2 text-xs leading-5 text-gray-400">
                                {node.subtitle}
                              </p>
                            )}
                          </div>
                        </div>

                        {nodeIndex < flow.nodes.length - 1 && (
                          <>
                            <div
                              aria-hidden="true"
                              className="flex h-12 items-center justify-center text-cyan-400 lg:hidden"
                            >
                              <ArrowDown size={20} />
                            </div>

                            <div
                              aria-hidden="true"
                              className="hidden w-12 shrink-0 items-center justify-center text-cyan-400 lg:flex"
                            >
                              <ArrowRight size={20} />
                            </div>
                          </>
                        )}
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}