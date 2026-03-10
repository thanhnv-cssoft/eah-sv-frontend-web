import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SEOHead from '@/components/common/SEOHead';
import PageHero from '@/components/common/PageHero';
import Breadcrumb from '@/components/common/Breadcrumb';
import ArticleCard from '@/components/news/ArticleCard';
import { articleService } from '@/data/services';
import type { Article } from '@/data/types';

interface NewsPageProps {
  articles: Article[];
}

export default function NewsPage({ articles }: NewsPageProps) {
  const { t } = useTranslation(['news', 'common']);

  return (
    <>
      <SEOHead title={t('news:meta.title')} description={t('news:meta.description')} />
      <PageHero
        backgroundImage="/images/projects/aerial-day-full.jpg"
        title={t('news:hero.title')}
        subtitle={t('news:hero.subtitle')}
      />
      <Breadcrumb
        items={[
          { label: t('common:nav.home'), href: '/' },
          { label: t('news:hero.title') },
        ]}
      />
      <section className="section-padding !pt-6">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <ArticleCard
                key={article.id}
                article={article}
                index={i}
                basePath="/news"
                translationNs="news"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const articles = articleService.getByCategory('news');
  return {
    props: {
      articles,
      ...(await serverSideTranslations(locale ?? 'vi', ['common', 'news'])),
    },
  };
};
