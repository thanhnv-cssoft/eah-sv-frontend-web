import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SEOHead from '@/components/common/SEOHead';
import PageHero from '@/components/common/PageHero';
import Breadcrumb from '@/components/common/Breadcrumb';
import InsightCard from '@/components/insights/InsightCard';
import { articleService } from '@/data/services';
import type { Article } from '@/data/types';

interface InsightsPageProps {
  articles: Article[];
}

export default function InsightsPage({ articles }: InsightsPageProps) {
  const { t } = useTranslation(['insights', 'common']);

  return (
    <>
      <SEOHead title={t('insights:meta.title')} description={t('insights:meta.description')} />
      <PageHero
        backgroundImage="/images/projects/masterplan-topdown.jpg"
        title={t('insights:hero.title')}
        subtitle={t('insights:hero.subtitle')}
      />
      <Breadcrumb
        items={[
          { label: t('common:nav.home'), href: '/' },
          { label: t('insights:hero.title') },
        ]}
      />
      <section className="section-padding !pt-6">
        <div className="container-padding mx-auto max-w-5xl space-y-6">
          {articles.map((article, i) => (
            <InsightCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const articles = articleService.getByCategory('insight');
  return {
    props: {
      articles,
      ...(await serverSideTranslations(locale ?? 'vi', ['common', 'insights'])),
    },
  };
};
