export type Locale = 'vi' | 'en';
export type LocalizedString = Record<Locale, string>;
export type LocalizedStringArray = Record<Locale, string[]>;

export interface ImageAsset {
  url: string;
  alt: LocalizedString;
}

export interface SEOMeta {
  title: LocalizedString;
  description: LocalizedString;
  ogImage?: string;
}

export interface CompanyStat {
  label: LocalizedString;
  value: string;
  suffix: LocalizedString | string;
}
