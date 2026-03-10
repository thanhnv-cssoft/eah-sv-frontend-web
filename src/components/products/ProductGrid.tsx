import { useTranslation } from 'next-i18next';
import { InboxOutlined } from '@ant-design/icons';
import ProductCard from './ProductCard';
import type { Product } from '@/data/types';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { t } = useTranslation('products');

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <InboxOutlined className="mb-4 text-4xl text-text-tertiary" />
        <h3 className="mb-2 font-heading text-lg font-semibold text-text-secondary">
          {t('empty.title')}
        </h3>
        <p className="text-sm text-text-tertiary">{t('empty.description')}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  );
}
