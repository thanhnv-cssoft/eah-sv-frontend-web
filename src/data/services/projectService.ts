import { projects } from '../mock/projects';
import type { Project } from '../types';

export const projectService = {
  getAll(): Project[] {
    return projects;
  },
  getBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
  },
  getFeatured(): Project | undefined {
    return projects.find((p) => p.isFeatured);
  },
};
