import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import { companyInfo } from '@/data/mock/company';

export default function Footer() {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  return (
    <footer className="border-t border-white/[0.06] bg-dark-950">
      <div className="container-padding mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <div className="relative mb-4 h-14 w-[220px]">
              <Image
                src="/images/logo/logo-vertical-dark.svg"
                alt="EHA Industrial"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-text-secondary">
              {t('footer.about_text')}
            </p>
            <p className="font-heading text-sm font-medium italic text-primary-500">
              &ldquo;{companyInfo.slogan}&rdquo;
            </p>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-text-primary">
              {t('footer.products')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products?category=rbf" className="text-sm text-text-secondary transition-colors hover:text-primary-500">
                  {t('nav.products_rbf')}
                </Link>
              </li>
              <li>
                <Link href="/products?category=rbh" className="text-sm text-text-secondary transition-colors hover:text-primary-500">
                  {t('nav.products_rbh')}
                </Link>
              </li>
              <li>
                <Link href="/products?category=office" className="text-sm text-text-secondary transition-colors hover:text-primary-500">
                  {t('nav.products_office')}
                </Link>
              </li>
              <li>
                <Link href="/products?category=services" className="text-sm text-text-secondary transition-colors hover:text-primary-500">
                  {t('nav.products_services')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-text-primary">
              {t('footer.quick_links')}
            </h3>
            <ul className="space-y-3">
              {['about', 'projects', 'insights', 'news', 'careers', 'contact'].map((key) => (
                <li key={key}>
                  <Link href={`/${key}`} className="text-sm text-text-secondary transition-colors hover:text-primary-500">
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-text-primary">
              {t('footer.contact_info')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-text-secondary">
                <EnvironmentOutlined className="mt-0.5 text-primary-500" />
                <span>{companyInfo.contact.address[loc]}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <PhoneOutlined className="text-primary-500" />
                <a href={`tel:${companyInfo.contact.phone}`} className="transition-colors hover:text-primary-500">
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <MailOutlined className="text-primary-500" />
                <a href={`mailto:${companyInfo.contact.email}`} className="transition-colors hover:text-primary-500">
                  {companyInfo.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <GlobalOutlined className="text-primary-500" />
                <span>{companyInfo.contact.website}</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              {companyInfo.socialLinks.linkedin && (
                <a
                  href={companyInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-text-secondary transition-all hover:border-primary-500 hover:text-primary-500"
                >
                  <LinkedinOutlined />
                </a>
              )}
              {companyInfo.socialLinks.facebook && (
                <a
                  href={companyInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-text-secondary transition-all hover:border-primary-500 hover:text-primary-500"
                >
                  <FacebookOutlined />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/[0.06] py-6">
        <div className="container-padding mx-auto max-w-7xl text-center text-xs text-text-tertiary">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
