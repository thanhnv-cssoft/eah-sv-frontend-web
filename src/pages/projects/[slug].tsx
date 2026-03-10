import { type GetStaticPaths, type GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { EnvironmentOutlined } from '@ant-design/icons';
import SEOHead from '@/components/common/SEOHead';
import Breadcrumb from '@/components/common/Breadcrumb';
import SectionTitle from '@/components/common/SectionTitle';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectHighlights from '@/components/projects/ProjectHighlights';
import { projectService } from '@/data/services';
import type { Project } from '@/data/types';
import { cn } from '@/utils/cn';

const statusColors: Record<string, string> = {
  completed: 'bg-emerald-500/15 text-emerald-400',
  'in-progress': 'bg-amber-500/15 text-amber-400',
  planned: 'bg-blue-500/15 text-blue-400',
};

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetailPage({ project }: ProjectDetailProps) {
  const { t } = useTranslation(['projects', 'common']);
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  return (
    <>
      <SEOHead
        title={`${project.name[loc]} | EHA Industrial`}
        description={project.shortDescription[loc]}
      />
      <Breadcrumb
        items={[
          { label: t('common:nav.home'), href: '/' },
          { label: t('projects:hero.title'), href: '/projects' },
          { label: project.name[loc] },
        ]}
      />

      {/* Overview: Description + Sidebar */}
      <section className="pb-12 pt-4">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h1 className="mb-2 font-heading text-2xl font-bold text-text-primary md:text-3xl">
                {project.name[loc]}
              </h1>
              <p className="mb-4 flex items-center gap-1.5 text-sm text-text-tertiary">
                <EnvironmentOutlined className="text-xs" />
                {project.location}
              </p>
              <p className="text-base leading-relaxed text-text-secondary">
                {project.fullDescription[loc]}
              </p>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="glass-card p-6">
                <h3 className="mb-4 font-heading text-lg font-semibold text-text-primary">
                  {t('projects:detail.overview_title')}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
                      {t('projects:detail.total_area_title')}
                    </p>
                    <p className="text-sm font-semibold text-text-primary">{project.totalArea}</p>
                  </div>
                  {project.investment && (
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
                        {t('projects:detail.investment_title')}
                      </p>
                      <p className="text-sm font-semibold text-primary-500">{project.investment[loc]}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
                      {t('projects:detail.status_title')}
                    </p>
                    <span className={cn('mt-1 inline-block rounded-lg px-3 py-1 text-xs font-medium', statusColors[project.status])}>
                      {t(`projects:card.status_${project.status.replace('-', '_')}`)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-dark-800/30 !pt-12">
        <div className="container-padding mx-auto max-w-5xl">
          <SectionTitle title={t('projects:detail.gallery_title')} />
          <ProjectGallery images={project.gallery} projectName={project.name[loc]} />
        </div>
      </section>

      {/* Highlights + Key Facts */}
      <section className="section-padding">
        <div className="container-padding mx-auto max-w-7xl">
          <ProjectHighlights highlights={project.highlights} keyFacts={project.keyFacts as Record<'vi' | 'en', string[]>} />
        </div>
      </section>

      {/* Infrastructure */}
      {project.infrastructure && project.infrastructure.length > 0 && (
        <section className="section-padding bg-dark-800/30 !pt-12">
          <div className="container-padding mx-auto max-w-7xl">
            <SectionTitle title={t('projects:detail.infrastructure_title')} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.infrastructure.map((infra) => (
                <motion.div
                  key={infra.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="glass-card p-5"
                >
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-text-tertiary">
                    {infra.label[loc]}
                  </p>
                  <p className="text-base font-semibold text-primary-500">{infra.value}</p>
                </motion.div>
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
              {t('projects:detail.cta_title')}
            </h2>
            <p className="mb-8 text-text-secondary">{t('projects:detail.cta_subtitle')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="gradient-primary glow-orange rounded-xl px-8 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
              >
                {t('projects:detail.cta_contact')}
              </Link>
              <Link
                href="/products"
                className="rounded-xl border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                {t('projects:detail.cta_products')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const slugs = projectService.getAllSlugs();
  const paths = slugs.flatMap((slug) =>
    (locales ?? ['vi', 'en']).map((locale) => ({
      params: { slug },
      locale,
    }))
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProjectDetailProps> = async ({ params, locale }) => {
  const slug = params?.slug as string;
  const project = projectService.getBySlug(slug);
  if (!project) return { notFound: true };

  return {
    props: {
      project,
      ...(await serverSideTranslations(locale ?? 'vi', ['common', 'projects'])),
    },
  };
};
