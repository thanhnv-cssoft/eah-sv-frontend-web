import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { ArrowRightOutlined } from '@ant-design/icons';
import OptimizedImage from '@/components/common/OptimizedImage';
import { cn } from '@/utils/cn';
import type { Product } from '@/data/types';

const categoryColors: Record<string, string> = {
  rbf: 'bg-primary-500/15 text-primary-400',
  rbh: 'bg-blue-500/15 text-blue-400',
  office: 'bg-emerald-500/15 text-emerald-400',
};

const categoryLabels: Record<string, Record<string, string>> = {
  rbf: { vi: 'RBF', en: 'RBF' },
  rbh: { vi: 'RBH', en: 'RBH' },
  office: { vi: 'Văn phòng', en: 'Office' },
};

const statusColors: Record<string, string> = {
  available: 'bg-emerald-500/15 text-emerald-400',
  'coming-soon': 'bg-amber-500/15 text-amber-400',
  leased: 'bg-red-500/15 text-red-400',
};

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { t } = useTranslation('products');
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/products/${product.slug}`} className="group block">
        <div className="glass-card overflow-hidden">
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            <OptimizedImage
              src={product.thumbnail.url}
              alt={product.thumbnail.alt[loc]}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              wrapperClassName="absolute inset-0"
            />
            {/* Category badge */}
            <span className={cn('absolute left-3 top-3 rounded-lg px-2.5 py-1 text-xs font-semibold', categoryColors[product.category])}>
              {categoryLabels[product.category]?.[loc] ?? product.category.toUpperCase()}
            </span>
            {/* Status badge */}
            <span className={cn('absolute right-3 top-3 rounded-lg px-2.5 py-1 text-xs font-medium', statusColors[product.status])}>
              {t(`card.status_${product.status.replace('-', '_')}`)}
            </span>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="mb-1.5 font-heading text-lg font-semibold text-text-primary">
              {product.name[loc]}
            </h3>
            <p className="mb-3 text-xs text-text-tertiary">{product.location}</p>
            <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-text-secondary">
              {product.shortDescription[loc]}
            </p>

            {/* Area + key spec */}
            <div className="mb-4 flex items-center gap-4 text-sm">
              <span className="text-text-tertiary">
                {t('card.area')}: <span className="font-medium text-text-secondary">{product.area.min.toLocaleString()} - {product.area.max.toLocaleString()} {product.area.unit}</span>
              </span>
            </div>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 transition-all group-hover:gap-3">
              {t('card.view_details')}
              <ArrowRightOutlined className="text-xs" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
