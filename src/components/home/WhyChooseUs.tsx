import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
  EnvironmentOutlined,
  ClusterOutlined,
  SafetyOutlined,
  TeamOutlined,
  GlobalOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import SectionTitle from '@/components/common/SectionTitle';
import TechBackground from '@/components/common/TechBackground';
import { whyChooseUsItems } from '@/data/mock/company';

const iconMap: Record<string, React.ReactNode> = {
  environment: <EnvironmentOutlined />,
  cluster: <ClusterOutlined />,
  safety: <SafetyOutlined />,
  team: <TeamOutlined />,
  global: <GlobalOutlined />,
  solution: <SolutionOutlined />,
};

interface WhyChooseUsProps {
  title?: string;
  subtitle?: string;
}

export default function WhyChooseUs({ title, subtitle }: WhyChooseUsProps = {}) {
  const { t } = useTranslation('home');
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  return (
    <section className="relative section-padding overflow-hidden">
      <TechBackground />
      <div className="container-padding relative z-10 mx-auto max-w-7xl">
        <SectionTitle title={title ?? t('why_choose_us.title')} subtitle={subtitle ?? t('why_choose_us.subtitle')} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-xl text-primary-500">
                {iconMap[item.icon] || <GlobalOutlined />}
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-text-primary">
                {item.title[loc]}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {item.description[loc]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
