import type { LocalizedString, LocalizedStringArray, CompanyStat } from './common';

export interface CompanyInfo {
  name: string;
  fullName: LocalizedString;
  slogan: string;
  description: LocalizedString;
  stats: CompanyStat[];
  contact: {
    address: LocalizedString;
    phone: string;
    email: string;
    website: string;
  };
  socialLinks: {
    linkedin?: string;
    facebook?: string;
  };
}

export interface WhyChooseUsItem {
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface ServiceItem {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  link: string;
}

export interface TimelineMilestone {
  year: string;
  title: LocalizedString;
  description: LocalizedString;
  icon?: string;
}

export interface LeaderInfo {
  name: string;
  title: LocalizedString;
  bio: LocalizedString;
}

export interface PartnerInfo {
  name: string;
  fullName: LocalizedString;
  yearsExperience: number;
  description: LocalizedString;
  achievements: LocalizedStringArray;
}
