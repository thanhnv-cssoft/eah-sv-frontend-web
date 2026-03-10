import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SEOHead from '@/components/common/SEOHead';
import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter';
import ServicesOverview from '@/components/home/ServicesOverview';
import FeaturedProject from '@/components/home/FeaturedProject';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import GalleryPreview from '@/components/home/GalleryPreview';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  const { t } = useTranslation('common');

  return (
    <>
      <SEOHead title={t('meta.title')} description={t('meta.description')} />
      <HeroSection />
      <StatsCounter />
      <ServicesOverview />
      <FeaturedProject />
      <WhyChooseUs />
      <GalleryPreview />
      <CTASection />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'vi', ['common', 'home'])),
    },
  };
};
