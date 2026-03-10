import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';
import { leaderInfo } from '@/data/mock/company';

export default function LeadershipSection() {
  const { t } = useTranslation('about');
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  const initials = leaderInfo.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(-2)
    .toUpperCase();

  return (
    <section className="section-padding">
      <div className="container-padding mx-auto max-w-3xl">
        <SectionTitle title={t('leadership.title')} subtitle={t('leadership.subtitle')} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 text-center md:p-10"
        >
          {/* Avatar initials */}
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary-500/15 font-heading text-2xl font-bold text-primary-500">
            {initials}
          </div>

          <h3 className="mb-1 font-heading text-xl font-bold text-text-primary">
            {leaderInfo.name}
          </h3>
          <p className="mb-4 text-sm font-medium text-primary-400">
            {leaderInfo.title[loc]}
          </p>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-text-secondary">
            {leaderInfo.bio[loc]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
