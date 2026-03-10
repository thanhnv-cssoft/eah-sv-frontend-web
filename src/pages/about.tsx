import { type GetStaticProps } from 'next';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import SEOHead from '@/components/common/SEOHead';
import PageHero from '@/components/common/PageHero';
import CompanyStory from '@/components/about/CompanyStory';
import StatsCounter from '@/components/home/StatsCounter';
import PartnershipSection from '@/components/about/PartnershipSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TimelineSection from '@/components/about/TimelineSection';
import LeadershipSection from '@/components/about/LeadershipSection';

export default function AboutPage() {
  const { t } = useTranslation(['about', 'common']);

  return (
    <>
      <SEOHead title={t('about:meta.title')} description={t('about:meta.description')} />
      <PageHero
        backgroundImage="/images/about/masterplan-topdown.jpg"
        title={t('about:hero.title')}
        subtitle={t('about:hero.subtitle')}
      />

      <CompanyStory />

      <StatsCounter variant="inline" />

      <PartnershipSection />

      <WhyChooseUs
        title={t('about:why_choose_us.title')}
        subtitle={t('about:why_choose_us.subtitle')}
      />

      <TimelineSection />

      <LeadershipSection />

      {/* CTA Section */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-padding mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary md:text-3xl">
              {t('about:cta.title')}
            </h2>
            <p className="mb-8 text-text-secondary">{t('about:cta.subtitle')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="gradient-primary glow-orange rounded-xl px-8 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
              >
                {t('about:cta.btn_contact')}
              </Link>
              <Link
                href="/products"
                className="rounded-xl border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                {t('about:cta.btn_products')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'vi', ['common', 'about', 'home'])),
    },
  };
};
