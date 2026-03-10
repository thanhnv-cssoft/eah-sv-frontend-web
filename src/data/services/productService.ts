import { products } from '../mock/products';
import type { Product, ProductCategory, ProductStatus } from '../types';

export interface ProductFilters {
  category?: ProductCategory;
  status?: ProductStatus;
  minArea?: number;
  maxArea?: number;
}

export const productService = {
  getAll(filters?: ProductFilters): Product[] {
    let result = [...products];
    if (filters?.category) result = result.filter((p) => p.category === filters.category);
    if (filters?.status) result = result.filter((p) => p.status === filters.status);
    if (filters?.minArea) result = result.filter((p) => p.area.max >= (filters.minArea ?? 0));
    if (filters?.maxArea) result = result.filter((p) => p.area.min <= (filters.maxArea ?? Infinity));
    return result;
  },
  getBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug);
  },
  getFeatured(): Product[] {
    return products.filter((p) => p.isFeatured);
  },
  getByCategory(category: ProductCategory): Product[] {
    return products.filter((p) => p.category === category);
  },
  getAllSlugs(): string[] {
    return products.map((p) => p.slug);
  },
};
