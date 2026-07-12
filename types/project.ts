export type ProjectGalleryImage = {
  src: string;
  alt: string;
  title: string;
  description?: string;
};

export type ArchitectureNode = {
  title: string;
  subtitle?: string;
};

export type ArchitectureFlow = {
  title: string;
  description?: string;
  nodes: ArchitectureNode[];
};

export type ProjectArchitecture = {
  title: string;
  description?: string;
  flows: ArchitectureFlow[];
};

export type Project = {
  slug: string;
  relatedProjects?: string[];
  title: string;
  shortDescription: string;
  description: string;
  tech: string[];
  category: string;
  github?: string;
  liveDemo?: string;
  image: string;
  architecture?: ProjectArchitecture;
  status?: "public" | "private" | "coming-soon";
  gallery?: ProjectGalleryImage[];
};