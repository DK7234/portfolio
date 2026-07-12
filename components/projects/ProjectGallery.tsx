import Image from "next/image";
import { ImageIcon } from "lucide-react";

import type { ProjectGalleryImage } from "@/types/project";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import StaggerItem from "@/components/ui/StaggerItem";

type ProjectGalleryProps = {
  projectTitle: string;
  images: ProjectGalleryImage[];
};

export default function ProjectGallery({
  projectTitle,
  images,
}: ProjectGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  const [featuredImage, ...remainingImages] = images;

  return (
    <section className="border-b border-white/10 bg-[#020617] py-20 md:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
              Project Gallery
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              See the project in action.
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
              Screenshots showing the interface, workflow, and engineering
              environment behind {projectTitle}.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 md:mt-14">
          <Reveal>
            <figure className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <div className="flex items-center gap-2 border-b border-white/10 bg-black/30 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />

                <span className="ml-3 truncate text-xs text-gray-400">
                  {featuredImage.title}
                </span>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden bg-[#030712]">
                <Image
                  src={featuredImage.src}
                  alt={featuredImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 1280px"
                  className="object-contain transition duration-500 ease-out group-hover:scale-[1.015]"
                />
              </div>

              <figcaption className="border-t border-white/10 p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <ImageIcon
                    size={19}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-cyan-400"
                  />

                  <div>
                    <h3 className="font-semibold text-white">
                      {featuredImage.title}
                    </h3>

                    {featuredImage.description && (
                      <p className="mt-2 text-sm leading-6 text-gray-400">
                        {featuredImage.description}
                      </p>
                    )}
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          {remainingImages.length > 0 && (
            <StaggerContainer className="mt-6 grid gap-6 md:grid-cols-2">
              {remainingImages.map((image) => (
                <StaggerItem key={image.src} className="h-full">
                  <figure className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/30">
                    <div className="flex items-center gap-2 border-b border-white/10 bg-black/30 px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

                      <span className="ml-2 truncate text-xs text-gray-400">
                        {image.title}
                      </span>
                    </div>

                    <div className="relative aspect-[16/10] overflow-hidden bg-[#030712]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain transition duration-500 ease-out group-hover:scale-[1.02]"
                      />
                    </div>

                    <figcaption className="flex-1 border-t border-white/10 p-5">
                      <h3 className="font-semibold text-white">
                        {image.title}
                      </h3>

                      {image.description && (
                        <p className="mt-2 text-sm leading-6 text-gray-400">
                          {image.description}
                        </p>
                      )}
                    </figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </Container>
    </section>
  );
}