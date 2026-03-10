import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SEOHead from '@/components/common/SEOHead';
import PageHero from '@/components/common/PageHero';
import Breadcrumb from '@/components/common/Breadcrumb';
import ProjectCard from '@/components/projects/ProjectCard';
import { projectService } from '@/data/services';
import type { Project } from '@/data/types';

interface ProjectsPageProps {
  projects: Project[];
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  const { t } = useTranslation(['projects', 'common']);

  return (
    <>
      <SEOHead title={t('projects:meta.title')} description={t('projects:meta.description')} />
      <PageHero
        backgroundImage="/images/projects/aerial-day-full.jpg"
        title={t('projects:hero.title')}
        subtitle={t('projects:hero.subtitle')}
      />
      <Breadcrumb
        items={[
          { label: t('common:nav.home'), href: '/' },
          { label: t('projects:hero.title') },
        ]}
      />
      <section className="section-padding !pt-6">
        <div className="container-padding mx-auto max-w-7xl">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const projects = projectService.getAll();
  return {
    props: {
      projects,
      ...(await serverSideTranslations(locale ?? 'vi', ['common', 'projects'])),
    },
  };
};
