import { type GetStaticPaths, type GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { CheckCircleOutlined, EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';
import SEOHead from '@/components/common/SEOHead';
import Breadcrumb from '@/components/common/Breadcrumb';
import ProductGallery from '@/components/products/ProductGallery';
import ProductSpecsTable from '@/components/products/ProductSpecsTable';
import ProductCard from '@/components/products/ProductCard';
import SectionTitle from '@/components/common/SectionTitle';
import { productService } from '@/data/services';
import { companyInfo } from '@/data/mock/company';
import type { Product } from '@/data/types';
import { cn } from '@/utils/cn';

const statusColors: Record<string, string> = {
  available: 'bg-emerald-500/15 text-emerald-400',
  'coming-soon': 'bg-amber-500/15 text-amber-400',
  leased: 'bg-red-500/15 text-red-400',
};

const categoryLabels: Record<string, Record<string, string>> = {
  rbf: { vi: 'Nhà xưởng (RBF)', en: 'Factory (RBF)' },
  rbh: { vi: 'Nhà xưởng-Kho vận (RBH)', en: 'Factory-Warehouse (RBH)' },
  office: { vi: 'Văn phòng', en: 'Office' },
};

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailPage({ product, relatedProducts }: ProductDetailProps) {
  const { t } = useTranslation(['products', 'common']);
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  return (
    <>
      <SEOHead
        title={`${product.name[loc]} | EHA Industrial`}
        description={product.shortDescription[loc]}
      />
      <Breadcrumb
        items={[
          { label: t('common:nav.home'), href: '/' },
          { label: t('common:nav.products'), href: '/products' },
          { label: product.name[loc] },
        ]}
      />

      {/* Hero: Gallery + Info */}
      <section className="pb-12 pt-4">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <ProductGallery images={product.gallery} productName={product.name[loc]} />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              {/* Badges */}
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-lg bg-primary-500/15 px-3 py-1 text-xs font-semibold text-primary-400">
                  {categoryLabels[product.category]?.[loc]}
                </span>
                <span className={cn('rounded-lg px-3 py-1 text-xs font-medium', statusColors[product.status])}>
                  {t(`products:card.status_${product.status.replace('-', '_')}`)}
                </span>
              </div>

              <h1 className="mb-2 font-heading text-2xl font-bold text-text-primary md:text-3xl">
                {product.name[loc]}
              </h1>

              <p className="mb-1 flex items-center gap-1.5 text-sm text-text-tertiary">
                <EnvironmentOutlined className="text-xs" />
                {product.location}
              </p>

              <p className="mb-2 text-sm font-medium text-primary-500">
                {product.area.min.toLocaleString()} - {product.area.max.toLocaleString()} {product.area.unit}
              </p>

              <p className="mb-6 text-base leading-relaxed text-text-secondary">
                {product.description[loc]}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="gradient-primary glow-orange rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                >
                  {t('products:detail.cta_quote')}
                </Link>
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  <PhoneOutlined />
                  {companyInfo.contact.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs + Features */}
      <section className="section-padding bg-dark-800/30 !pt-12">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <ProductSpecsTable specs={product.specs} />

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="mb-4 font-heading text-xl font-semibold text-text-primary">
                {t('products:detail.features_title')}
              </h3>
              <div className="glass-card p-5">
                <ul className="space-y-3">
                  {product.features[loc].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircleOutlined className="mt-0.5 text-sm text-primary-500" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding">
          <div className="container-padding mx-auto max-w-7xl">
            <SectionTitle
              title={t('products:detail.related_title')}
              subtitle={t('products:detail.related_subtitle')}
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const slugs = productService.getAllSlugs();
  const paths = slugs.flatMap((slug) =>
    (locales ?? ['vi', 'en']).map((locale) => ({
      params: { slug },
      locale,
    }))
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProductDetailProps> = async ({ params, locale }) => {
  const slug = params?.slug as string;
  const product = productService.getBySlug(slug);
  if (!product) return { notFound: true };

  const relatedProducts = productService
    .getByCategory(product.category)
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return {
    props: {
      product,
      relatedProducts,
      ...(await serverSideTranslations(locale ?? 'vi', ['common', 'products'])),
    },
  };
};
