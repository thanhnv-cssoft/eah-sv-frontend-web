import type { LocalizedString, LocalizedStringArray, ImageAsset } from './common';

export enum ProductCategory {
  RBF = 'rbf',
  RBH = 'rbh',
  OFFICE = 'office',
}

export type ProductStatus = 'available' | 'leased' | 'coming-soon';

export interface ProductSpec {
  key: string;
  label: LocalizedString;
  value: string;
  unit?: string;
}

export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  name: LocalizedString;
  shortDescription: LocalizedString;
  description: LocalizedString;
  thumbnail: ImageAsset;
  gallery: ImageAsset[];
  specs: ProductSpec[];
  features: LocalizedStringArray;
  area: { min: number; max: number; unit: string };
  location: string;
  status: ProductStatus;
  isFeatured: boolean;
  createdAt: string;
}
