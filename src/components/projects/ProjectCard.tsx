import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { EnvironmentOutlined, ArrowRightOutlined } from '@ant-design/icons';
import OptimizedImage from '@/components/common/OptimizedImage';
import { cn } from '@/utils/cn';
import type { Project } from '@/data/types';

const statusColors: Record<string, string> = {
  completed: 'bg-emerald-500/15 text-emerald-400',
  'in-progress': 'bg-amber-500/15 text-amber-400',
  planned: 'bg-blue-500/15 text-blue-400',
};

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { t } = useTranslation('projects');
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mx-auto max-w-3xl"
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="glass-card overflow-hidden transition-all duration-300 hover:border-primary-500/20">
          {/* Thumbnail */}
          <div className="relative h-64 overflow-hidden md:h-80">
            <OptimizedImage
              src={project.thumbnail.url}
              alt={project.thumbnail.alt[loc]}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 768px"
              wrapperClassName="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />

            {/* Status badge */}
            <span className={cn('absolute right-4 top-4 rounded-lg px-3 py-1 text-xs font-medium', statusColors[project.status])}>
              {t(`card.status_${project.status.replace('-', '_')}`)}
            </span>
          </div>

          {/* Info */}
          <div className="p-6">
            <h3 className="mb-2 font-heading text-xl font-bold text-text-primary group-hover:text-primary-400 transition-colors">
              {project.name[loc]}
            </h3>
            <p className="mb-2 flex items-center gap-1.5 text-sm text-text-tertiary">
              <EnvironmentOutlined className="text-xs" />
              {project.location}
            </p>
            <p className="mb-1 text-sm font-medium text-primary-500">
              {t('card.total_area')}: {project.totalArea}
            </p>
            <p className="mb-4 text-sm leading-relaxed text-text-secondary line-clamp-2">
              {project.shortDescription[loc]}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-400 transition-all group-hover:gap-2">
              {t('card.view_details')} <ArrowRightOutlined className="text-xs" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
