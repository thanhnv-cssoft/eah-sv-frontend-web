import { useState, useMemo } from 'react';
import { type GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SEOHead from '@/components/common/SEOHead';
import PageHero from '@/components/common/PageHero';
import Breadcrumb from '@/components/common/Breadcrumb';
import ProductFilterBar from '@/components/products/ProductFilterBar';
import ProductGrid from '@/components/products/ProductGrid';
import { productService } from '@/data/services';
import type { Product } from '@/data/types';

interface ProductsPageProps {
  products: Product[];
}

export default function ProductsPage({ products }: ProductsPageProps) {
  const { t } = useTranslation(['products', 'common']);
  const router = useRouter();

  const initialCategory = (router.query.category as string) || null;
  const [activeCategory, setActiveCategory] = useState<string | null>(initialCategory);

  const filteredProducts = useMemo(() => {
    if (!activeCategory) return products;
    return products.filter((p) => p.category === activeCategory);
  }, [products, activeCategory]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: products.length };
    products.forEach((p) => {
      c[p.category] = (c[p.category] || 0) + 1;
    });
    return c;
  }, [products]);

  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
    const query = category ? { category } : {};
    router.push({ pathname: '/products', query }, undefined, { shallow: true });
  };

  return (
    <>
      <SEOHead title={t('products:meta.title')} description={t('products:meta.description')} />
      <PageHero
        backgroundImage="/images/products/factory-night.jpg"
        title={t('products:hero.title')}
        subtitle={t('products:hero.subtitle')}
      />
      <Breadcrumb
        items={[
          { label: t('common:nav.home'), href: '/' },
          { label: t('products:hero.title') },
        ]}
      />
      <section className="section-padding !pt-6">
        <div className="container-padding mx-auto max-w-7xl">
          <ProductFilterBar
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            counts={counts}
          />
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const products = productService.getAll();
  return {
    props: {
      products,
      ...(await serverSideTranslations(locale ?? 'vi', ['common', 'products'])),
    },
  };
};
