import { type GetStaticPaths, type GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import SEOHead from '@/components/common/SEOHead';
import Breadcrumb from '@/components/common/Breadcrumb';
import OptimizedImage from '@/components/common/OptimizedImage';
import ArticleContent from '@/components/news/ArticleContent';
import InsightCard from '@/components/insights/InsightCard';
import { articleService } from '@/data/services';
import type { Article } from '@/data/types';

interface InsightDetailProps {
  article: Article;
  relatedArticles: Article[];
}

export default function InsightDetailPage({ article, relatedArticles }: InsightDetailProps) {
  const { t } = useTranslation(['insights', 'common']);
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  return (
    <>
      <SEOHead
        title={`${article.title[loc]} | EHA Industrial`}
        description={article.excerpt[loc]}
      />
      <Breadcrumb
        items={[
          { label: t('common:nav.home'), href: '/' },
          { label: t('insights:hero.title'), href: '/insights' },
          { label: article.title[loc] },
        ]}
      />

      {/* Thumbnail */}
      <section className="pb-8 pt-4">
        <div className="container-padding mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-64 overflow-hidden rounded-2xl md:h-96"
          >
            <OptimizedImage
              src={article.thumbnail.url}
              alt={article.thumbnail.alt[loc]}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
              wrapperClassName="absolute inset-0"
              priority
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 font-heading text-2xl font-bold text-text-primary md:text-3xl"
          >
            {article.title[loc]}
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="pb-12">
        <div className="container-padding mx-auto max-w-4xl">
          <ArticleContent article={article} translationNs="insights" />
        </div>
      </section>

      {/* Related */}
      {relatedArticles.length > 0 && (
        <section className="section-padding bg-dark-800/30">
          <div className="container-padding mx-auto max-w-5xl">
            <h2 className="mb-2 text-center font-heading text-2xl font-bold text-text-primary">
              {t('insights:detail.related_title')}
            </h2>
            <p className="mb-8 text-center text-sm text-text-tertiary">
              {t('insights:detail.related_subtitle')}
            </p>
            <div className="space-y-6">
              {relatedArticles.map((a, i) => (
                <InsightCard key={a.id} article={a} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding">
        <div className="container-padding mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary md:text-3xl">
              {t('insights:detail.cta_title')}
            </h2>
            <p className="mb-8 text-text-secondary">{t('insights:detail.cta_subtitle')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="gradient-primary glow-orange rounded-xl px-8 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
              >
                {t('insights:detail.cta_contact')}
              </Link>
              <Link
                href="/news"
                className="rounded-xl border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                {t('insights:detail.cta_news')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const slugs = articleService.getSlugsByCategory('insight');
  const paths = slugs.flatMap((slug) =>
    (locales ?? ['vi', 'en']).map((locale) => ({
      params: { slug },
      locale,
    }))
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<InsightDetailProps> = async ({ params, locale }) => {
  const slug = params?.slug as string;
  const article = articleService.getBySlug(slug);
  if (!article) return { notFound: true };

  const relatedArticles = articleService
    .getByCategory('insight')
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return {
    props: {
      article,
      relatedArticles,
      ...(await serverSideTranslations(locale ?? 'vi', ['common', 'insights'])),
    },
  };
};
