import { jobPostings } from '../mock/careers';
import type { JobPosting } from '../types';

export const careerService = {
  getAll(): JobPosting[] {
    return jobPostings;
  },
  getActive(): JobPosting[] {
    return jobPostings.filter((j) => j.isActive);
  },
  getBySlug(slug: string): JobPosting | undefined {
    return jobPostings.find((j) => j.slug === slug);
  },
  getAllSlugs(): string[] {
    return jobPostings.map((j) => j.slug);
  },
};
