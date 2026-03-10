import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SEOHead from '@/components/common/SEOHead';
import PageHero from '@/components/common/PageHero';
import Breadcrumb from '@/components/common/Breadcrumb';
import ContactForm from '@/components/contact/ContactForm';
import CompanyInfoCard from '@/components/contact/CompanyInfoCard';

export default function ContactPage() {
  const { t } = useTranslation(['contact', 'common']);

  return (
    <>
      <SEOHead title={t('contact:meta.title')} description={t('contact:meta.description')} />
      <PageHero
        backgroundImage="/images/projects/entrance-gate.jpg"
        title={t('contact:hero.title')}
        subtitle={t('contact:hero.subtitle')}
      />
      <Breadcrumb
        items={[
          { label: t('common:nav.home'), href: '/' },
          { label: t('contact:hero.title') },
        ]}
      />
      <section className="section-padding !pt-6">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <CompanyInfoCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'vi', ['common', 'contact'])),
    },
  };
};
