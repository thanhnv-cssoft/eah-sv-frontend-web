import type { LocalizedString, CompanyStat } from './common';

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
