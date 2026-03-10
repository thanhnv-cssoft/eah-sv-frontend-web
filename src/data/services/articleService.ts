import { articles } from '../mock/articles';
import type { Article, ArticleCategory } from '../types';

export const articleService = {
  getAll(): Article[] {
    return articles;
  },
  getByCategory(category: ArticleCategory): Article[] {
    return articles.filter((a) => a.category === category);
  },
  getBySlug(slug: string): Article | undefined {
    return articles.find((a) => a.slug === slug);
  },
  getAllSlugs(): string[] {
    return articles.map((a) => a.slug);
  },
  getSlugsByCategory(category: ArticleCategory): string[] {
    return articles.filter((a) => a.category === category).map((a) => a.slug);
  },
  getFeatured(): Article[] {
    return articles.filter((a) => a.isFeatured);
  },
};
