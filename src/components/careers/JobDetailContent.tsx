import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { CheckCircleOutlined } from '@ant-design/icons';
import type { JobPosting } from '@/data/types';

interface JobDetailContentProps {
  job: JobPosting;
}

const sections = ['responsibilities', 'requirements', 'benefits'] as const;

export default function JobDetailContent({ job }: JobDetailContentProps) {
  const { t } = useTranslation('careers');
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {sections.map((section) => (
        <div key={section} className="glass-card p-6">
          <h2 className="mb-4 font-heading text-lg font-semibold text-text-primary">
            {t(`detail.${section}_title`)}
          </h2>
          <ul className="space-y-3">
            {job[section][loc].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircleOutlined className="mt-0.5 text-sm text-primary-400" />
                <span className="text-sm leading-relaxed text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
}
