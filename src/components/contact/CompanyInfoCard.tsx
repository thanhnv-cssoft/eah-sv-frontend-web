import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  ClockCircleOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import { companyInfo } from '@/data/mock/company';

export default function CompanyInfoCard() {
  const { t } = useTranslation('contact');
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  const items = [
    { icon: <EnvironmentOutlined />, label: t('info.address_title'), value: companyInfo.contact.address[loc] },
    { icon: <PhoneOutlined />, label: t('info.phone_title'), value: companyInfo.contact.phone },
    { icon: <MailOutlined />, label: t('info.email_title'), value: companyInfo.contact.email },
    { icon: <GlobalOutlined />, label: t('info.website_title'), value: companyInfo.contact.website },
    { icon: <ClockCircleOutlined />, label: t('info.hours_title'), value: t('info.hours_value') },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="glass-card p-8"
    >
      <h2 className="mb-6 font-heading text-xl font-semibold text-text-primary">
        {t('info.title')}
      </h2>
      <div className="space-y-5">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-0.5 text-base text-primary-400">{item.icon}</span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
                {item.label}
              </p>
              <p className="text-sm text-text-primary">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Social links */}
      <div className="mt-6 flex gap-3 border-t border-white/10 pt-6">
        {companyInfo.socialLinks.linkedin && (
          <a
            href={companyInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-text-tertiary transition-colors hover:bg-primary-500/15 hover:text-primary-400"
          >
            <LinkedinOutlined />
          </a>
        )}
        {companyInfo.socialLinks.facebook && companyInfo.socialLinks.facebook !== '#' && (
          <a
            href={companyInfo.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-text-tertiary transition-colors hover:bg-primary-500/15 hover:text-primary-400"
          >
            <FacebookOutlined />
          </a>
        )}
      </div>
    </motion.div>
  );
}
