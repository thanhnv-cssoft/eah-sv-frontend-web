import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

const categories = [
  { key: null, labelKey: 'all' },
  { key: 'rbf', labelKey: 'rbf' },
  { key: 'rbh', labelKey: 'rbh' },
  { key: 'office', labelKey: 'office' },
] as const;

interface ProductFilterBarProps {
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  counts: Record<string, number>;
}

export default function ProductFilterBar({ activeCategory, onCategoryChange, counts }: ProductFilterBarProps) {
  const { t } = useTranslation('products');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 flex flex-wrap gap-3"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat.key;
        const count = cat.key ? (counts[cat.key] ?? 0) : (counts['all'] ?? 0);
        return (
          <button
            key={cat.labelKey}
            onClick={() => onCategoryChange(cat.key)}
            className={cn(
              'inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300',
              isActive
                ? 'gradient-primary text-white shadow-lg shadow-primary-500/20'
                : 'glass text-text-secondary hover:border-primary-500/20 hover:text-text-primary'
            )}
          >
            {t(`filter.${cat.labelKey}`)}
            <span
              className={cn(
                'rounded-full px-2 py-0.5 text-xs',
                isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-text-tertiary'
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}
