import type { LocalizedString, LocalizedStringArray, ImageAsset } from './common';

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface ProjectHighlight {
  icon: string;
  text: LocalizedString;
}

export interface Project {
  id: string;
  slug: string;
  name: LocalizedString;
  location: string;
  shortDescription: LocalizedString;
  fullDescription: LocalizedString;
  thumbnail: ImageAsset;
  gallery: ImageAsset[];
  totalArea: string;
  status: ProjectStatus;
  highlights: ProjectHighlight[];
  keyFacts: LocalizedStringArray;
  isFeatured: boolean;
}
