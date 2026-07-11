export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  tech: string[];
  category: string;
  github?: string;
  liveDemo?: string;
  image: string;
  status?: "public" | "private" | "coming-soon";
};