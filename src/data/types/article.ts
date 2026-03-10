import type { LocalizedString, LocalizedStringArray, ImageAsset } from './common';

export type ArticleCategory = 'news' | 'insight';

export interface ArticleAuthor {
  name: string;
  title: LocalizedString;
}

export interface Article {
  id: string;
  slug: string;
  category: ArticleCategory;
  title: LocalizedString;
  excerpt: LocalizedString;
  contentParagraphs: LocalizedStringArray;
  author: ArticleAuthor;
  publishedAt: string;
  thumbnail: ImageAsset;
  tags: LocalizedStringArray;
  isFeatured: boolean;
}
