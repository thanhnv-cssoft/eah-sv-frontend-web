import type { LocalizedString, LocalizedStringArray } from './common';

export type EmploymentType = 'full-time' | 'part-time' | 'contract';
export type JobLevel = 'junior' | 'mid' | 'senior' | 'manager';

export interface JobPosting {
  id: string;
  slug: string;
  title: LocalizedString;
  department: LocalizedString;
  location: string;
  employmentType: EmploymentType;
  level: JobLevel;
  shortDescription: LocalizedString;
  responsibilities: LocalizedStringArray;
  requirements: LocalizedStringArray;
  benefits: LocalizedStringArray;
  postedAt: string;
  isActive: boolean;
}
