import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm sm:tracking-[0.35em]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}