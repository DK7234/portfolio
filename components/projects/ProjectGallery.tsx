"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  ImageIcon,
  X,
} from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpen = activeIndex !== null;
  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  function openLightbox(index: number) {
    setActiveIndex(index);
  }

  function closeLightbox() {
    setActiveIndex(null);
  }

  function showPrevious() {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }

      return (currentIndex - 1 + images.length) % images.length;
    });
  }

  function showNext() {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }

      return (currentIndex + 1) % images.length;
    });
  }

  useEffect(() => {
  if (!isOpen) {
    return;
  }

  const scrollY = window.scrollY;

  const previousBodyOverflow = document.body.style.overflow;
  const previousBodyPosition = document.body.style.position;
  const previousBodyTop = document.body.style.top;
  const previousBodyWidth = document.body.style.width;
  const previousHtmlOverflow = document.documentElement.style.overflow;

  document.documentElement.style.overflow = "hidden";

  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = "100%";

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      showNext();
    }
  }

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    document.documentElement.style.overflow = previousHtmlOverflow;

    document.body.style.overflow = previousBodyOverflow;
    document.body.style.position = previousBodyPosition;
    document.body.style.top = previousBodyTop;
    document.body.style.width = previousBodyWidth;

    window.scrollTo(0, scrollY);

    window.removeEventListener("keydown", handleKeyDown);
  };
}, [isOpen, images.length]);

  if (images.length === 0) {
    return null;
  }

  const [featuredImage, ...remainingImages] = images;

  return (
    <>
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
              <figure className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-cyan-400/30">
                <div className="flex items-center gap-2 border-b border-white/10 bg-black/30 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />

                  <span className="ml-3 truncate text-xs text-gray-400">
                    {featuredImage.title}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => openLightbox(0)}
                  aria-label={`Open ${featuredImage.title} fullscreen`}
                  className="relative block aspect-[16/9] w-full cursor-zoom-in overflow-hidden bg-[#030712] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400"
                >
                  <Image
                    src={featuredImage.src}
                    alt={featuredImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 1280px"
                    className="object-contain transition duration-500 ease-out group-hover:scale-[1.015]"
                  />

                  <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                    <Expand size={19} aria-hidden="true" />
                  </span>
                </button>

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
                {remainingImages.map((image, index) => {
                  const imageIndex = index + 1;

                  return (
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

                        <button
                          type="button"
                          onClick={() => openLightbox(imageIndex)}
                          aria-label={`Open ${image.title} fullscreen`}
                          className="relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden bg-[#030712] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400"
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain transition duration-500 ease-out group-hover:scale-[1.02]"
                          />

                          <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                            <Expand size={17} aria-hidden="true" />
                          </span>
                        </button>

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
                  );
                })}
              </StaggerContainer>
            )}
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {isOpen && activeImage && activeIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${activeImage.title} image viewer`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeLightbox();
              }
            }}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close image viewer"
              className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:right-6 sm:top-6"
            >
              <X size={23} aria-hidden="true" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="View previous screenshot"
                  className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:left-6"
                >
                  <ChevronLeft size={26} aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="View next screenshot"
                  className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:right-6"
                >
                  <ChevronRight size={26} aria-hidden="true" />
                </button>
              </>
            )}

            <motion.div
              key={activeImage.src}
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="flex max-h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#020617] shadow-2xl shadow-cyan-500/10"
            >
              <div className="relative min-h-0 flex-1 bg-black">
                <div className="relative h-[65vh] w-full sm:h-[72vh]">
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-white/10 bg-[#020617] p-4 sm:flex-row sm:items-start sm:justify-between sm:p-5">
                <div>
                  <h3 className="font-semibold text-white">
                    {activeImage.title}
                  </h3>

                  {activeImage.description && (
                    <p className="mt-1 max-w-4xl text-sm leading-6 text-gray-400">
                      {activeImage.description}
                    </p>
                  )}
                </div>

                <p className="shrink-0 text-sm font-medium text-cyan-300">
                  {activeIndex + 1} / {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}