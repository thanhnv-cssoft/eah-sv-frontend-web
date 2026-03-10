import { type GetStaticProps } from 'next';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import SEOHead from '@/components/common/SEOHead';
import PageHero from '@/components/common/PageHero';
import Breadcrumb from '@/components/common/Breadcrumb';
import JobCard from '@/components/careers/JobCard';
import { careerService } from '@/data/services';
import type { JobPosting } from '@/data/types';

interface CareersPageProps {
  jobs: JobPosting[];
}

export default function CareersPage({ jobs }: CareersPageProps) {
  const { t } = useTranslation(['careers', 'common']);

  return (
    <>
      <SEOHead title={t('careers:meta.title')} description={t('careers:meta.description')} />
      <PageHero
        backgroundImage="/images/projects/aerial-night-far.jpg"
        title={t('careers:hero.title')}
        subtitle={t('careers:hero.subtitle')}
      />
      <Breadcrumb
        items={[
          { label: t('common:nav.home'), href: '/' },
          { label: t('careers:hero.title') },
        ]}
      />
      <section className="section-padding !pt-6">
        <div className="container-padding mx-auto max-w-4xl">
          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center text-base leading-relaxed text-text-secondary"
          >
            {t('careers:intro')}
          </motion.p>

          {/* Job listing */}
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <JobCard key={job.id} job={job} index={i} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <h2 className="mb-4 font-heading text-xl font-bold text-text-primary md:text-2xl">
              {t('careers:cta.title')}
            </h2>
            <p className="mb-6 text-sm text-text-secondary">{t('careers:cta.subtitle')}</p>
            <Link
              href="mailto:careers@ehaindustrial.com"
              className="gradient-primary glow-orange inline-block rounded-xl px-8 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
            >
              {t('careers:cta.btn_contact')}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const jobs = careerService.getActive();
  return {
    props: {
      jobs,
      ...(await serverSideTranslations(locale ?? 'vi', ['common', 'careers'])),
    },
  };
};
