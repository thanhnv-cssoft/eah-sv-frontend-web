import { type GetStaticPaths, type GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import {
  EnvironmentOutlined,
  CalendarOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import SEOHead from '@/components/common/SEOHead';
import Breadcrumb from '@/components/common/Breadcrumb';
import JobDetailContent from '@/components/careers/JobDetailContent';
import { careerService } from '@/data/services';
import type { JobPosting } from '@/data/types';

interface CareerDetailProps {
  job: JobPosting;
}

export default function CareerDetailPage({ job }: CareerDetailProps) {
  const { t } = useTranslation(['careers', 'common']);
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  const mailtoLink = `mailto:careers@ehaindustrial.com?subject=${encodeURIComponent(job.title[loc])}`;

  return (
    <>
      <SEOHead
        title={`${job.title[loc]} | EHA Industrial`}
        description={job.shortDescription[loc]}
      />
      <Breadcrumb
        items={[
          { label: t('common:nav.home'), href: '/' },
          { label: t('careers:hero.title'), href: '/careers' },
          { label: job.title[loc] },
        ]}
      />

      <section className="section-padding !pt-4">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <h1 className="mb-3 font-heading text-2xl font-bold text-text-primary md:text-3xl">
                  {job.title[loc]}
                </h1>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-primary-500/10 px-2.5 py-0.5 text-xs font-medium text-primary-400">
                    {job.department[loc]}
                  </span>
                  <span className="rounded-md bg-white/5 px-2.5 py-0.5 text-xs text-text-tertiary">
                    {t(`card.${job.employmentType.replace('-', '_')}`)}
                  </span>
                  <span className="rounded-md bg-white/5 px-2.5 py-0.5 text-xs text-text-tertiary">
                    {t(`level.${job.level}`)}
                  </span>
                </div>
              </motion.div>

              <JobDetailContent job={job} />
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="sticky top-24 space-y-6"
              >
                {/* Info card */}
                <div className="glass-card p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <EnvironmentOutlined className="mt-0.5 text-sm text-primary-400" />
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
                          {t('detail.location')}
                        </p>
                        <p className="text-sm text-text-primary">{job.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CalendarOutlined className="mt-0.5 text-sm text-primary-400" />
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
                          {t('detail.posted')}
                        </p>
                        <p className="text-sm text-text-primary">
                          {new Date(job.postedAt).toLocaleDateString(loc === 'vi' ? 'vi-VN' : 'en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Apply card */}
                <div className="glass-card p-6">
                  <h3 className="mb-2 font-heading text-lg font-semibold text-text-primary">
                    {t('detail.apply_title')}
                  </h3>
                  <p className="mb-4 text-sm text-text-tertiary">{t('detail.apply_subtitle')}</p>
                  <div className="space-y-3">
                    <a
                      href={mailtoLink}
                      className="gradient-primary glow-orange flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                    >
                      <MailOutlined /> {t('detail.apply_btn')}
                    </a>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                    >
                      <PhoneOutlined /> {t('detail.contact_btn')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const slugs = careerService.getAllSlugs();
  const paths = slugs.flatMap((slug) =>
    (locales ?? ['vi', 'en']).map((locale) => ({
      params: { slug },
      locale,
    }))
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<CareerDetailProps> = async ({ params, locale }) => {
  const slug = params?.slug as string;
  const job = careerService.getBySlug(slug);
  if (!job) return { notFound: true };

  return {
    props: {
      job,
      ...(await serverSideTranslations(locale ?? 'vi', ['common', 'careers'])),
    },
  };
};
