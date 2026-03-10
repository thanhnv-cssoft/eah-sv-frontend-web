import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
  FlagOutlined,
  TeamOutlined,
  BuildOutlined,
  CheckCircleOutlined,
  RiseOutlined,
} from '@ant-design/icons';
import SectionTitle from '@/components/common/SectionTitle';
import TechBackground from '@/components/common/TechBackground';
import { companyTimeline } from '@/data/mock/company';

const iconMap: Record<string, React.ReactNode> = {
  flag: <FlagOutlined />,
  team: <TeamOutlined />,
  build: <BuildOutlined />,
  'check-circle': <CheckCircleOutlined />,
  rise: <RiseOutlined />,
};

export default function TimelineSection() {
  const { t } = useTranslation('about');
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  return (
    <section className="relative section-padding overflow-hidden">
      <TechBackground />
      <div className="container-padding relative z-10 mx-auto max-w-4xl">
        <SectionTitle title={t('timeline.title')} subtitle={t('timeline.subtitle')} />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-primary-500/30 md:left-1/2 md:-translate-x-px" />

          {companyTimeline.map((milestone, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-10 last:mb-0"
              >
                {/* Dot */}
                <div className="absolute left-4 top-1 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary-500 bg-dark-900 text-xs text-primary-500 md:left-1/2">
                  {milestone.icon ? iconMap[milestone.icon] || <FlagOutlined /> : <FlagOutlined />}
                </div>

                {/* Content card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isEven ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'
                  }`}
                >
                  <div className="glass-card p-5">
                    <span className="mb-1 inline-block text-xs font-bold uppercase tracking-wider text-primary-500">
                      {milestone.year}
                    </span>
                    <h3 className="mb-1 font-heading text-base font-semibold text-text-primary">
                      {milestone.title[loc]}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {milestone.description[loc]}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
