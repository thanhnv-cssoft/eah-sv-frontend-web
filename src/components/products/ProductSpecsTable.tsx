import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import type { ProductSpec } from '@/data/types';

interface ProductSpecsTableProps {
  specs: ProductSpec[];
}

export default function ProductSpecsTable({ specs }: ProductSpecsTableProps) {
  const { t } = useTranslation('products');
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="mb-4 font-heading text-xl font-semibold text-text-primary">
        {t('detail.specs_title')}
      </h3>
      <div className="glass-card overflow-hidden">
        {specs.map((spec, i) => (
          <div
            key={spec.key}
            className={cn(
              'flex items-center justify-between px-5 py-3.5',
              i % 2 === 0 ? 'bg-white/[0.02]' : ''
            )}
          >
            <span className="text-sm text-text-secondary">{spec.label[loc]}</span>
            <span className="text-sm font-semibold text-text-primary">
              {spec.value} {spec.unit}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
