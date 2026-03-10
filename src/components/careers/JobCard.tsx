import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { EnvironmentOutlined, ArrowRightOutlined } from '@ant-design/icons';
import type { JobPosting } from '@/data/types';

interface JobCardProps {
  job: JobPosting;
  index: number;
}

export default function JobCard({ job, index }: JobCardProps) {
  const { t } = useTranslation('careers');
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/careers/${job.slug}`} className="group block">
        <div className="glass-card p-6 transition-all duration-300 hover:border-primary-500/20">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-primary-500/10 px-2.5 py-0.5 text-xs font-medium text-primary-400">
              {job.department[loc]}
            </span>
            <span className="rounded-md bg-white/5 px-2.5 py-0.5 text-xs text-text-tertiary">
              {t(`card.${job.employmentType.replace('-', '_')}`)}
            </span>
            <span className="rounded-md bg-white/5 px-2.5 py-0.5 text-xs text-text-tertiary">
              {t(`level.${job.level}`)}
            </span>
          </div>
          <h3 className="mb-2 font-heading text-lg font-semibold text-text-primary transition-colors group-hover:text-primary-400">
            {job.title[loc]}
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-text-secondary line-clamp-2">
            {job.shortDescription[loc]}
          </p>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs text-text-tertiary">
              <EnvironmentOutlined className="text-[10px]" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-400 transition-all group-hover:gap-2">
              {t('card.view_job')} <ArrowRightOutlined className="text-xs" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
