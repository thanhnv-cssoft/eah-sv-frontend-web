import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
  CompassOutlined,
  SendOutlined,
  HomeOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import type { ProjectHighlight as HighlightType } from '@/data/types';

const iconMap: Record<string, React.ReactNode> = {
  compass: <CompassOutlined />,
  send: <SendOutlined />,
  home: <HomeOutlined />,
  thunderbolt: <ThunderboltOutlined />,
};

interface ProjectHighlightsProps {
  highlights: HighlightType[];
  keyFacts: Record<'vi' | 'en', string[]>;
}

export default function ProjectHighlights({ highlights, keyFacts }: ProjectHighlightsProps) {
  const { t } = useTranslation('projects');
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* Highlights grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="mb-4 font-heading text-xl font-semibold text-text-primary">
          {t('detail.highlights_title')}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <div key={i} className="glass-card flex items-start gap-3 p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
                {iconMap[h.icon] || <CompassOutlined />}
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">{h.text[loc]}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Key facts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="mb-4 font-heading text-xl font-semibold text-text-primary">
          {t('detail.key_facts_title')}
        </h3>
        <div className="glass-card p-5">
          <ul className="space-y-3">
            {keyFacts[loc].map((fact, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircleOutlined className="mt-0.5 text-sm text-primary-500" />
                <span className="text-sm text-text-secondary">{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
