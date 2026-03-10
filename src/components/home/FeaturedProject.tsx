import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
  ArrowRightOutlined,
  CompassOutlined,
  SendOutlined,
  HomeOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import OptimizedImage from '@/components/common/OptimizedImage';
import { projectService } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  compass: <CompassOutlined />,
  send: <SendOutlined />,
  home: <HomeOutlined />,
  thunderbolt: <ThunderboltOutlined />,
};

export default function FeaturedProject() {
  const { t } = useTranslation('home');
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';
  const project = projectService.getFeatured();

  if (!project) return null;

  return (
    <section className="section-padding bg-dark-800/30">
      <div className="container-padding mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Image - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <OptimizedImage
                src={project.thumbnail.url}
                alt={project.thumbnail.alt[loc]}
                width={900}
                height={550}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900/60 to-transparent p-6">
                <span className="text-sm font-medium text-white/70">{project.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Content - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <span className="mb-3 inline-block rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-500">
              {t('featured_project.badge')}
            </span>

            <h2 className="mb-2 font-heading text-3xl font-bold text-text-primary md:text-4xl">
              {project.name[loc]}
            </h2>

            <p className="mb-1 text-sm text-text-tertiary">{project.location}</p>
            <p className="mb-2 text-sm font-medium text-primary-500">{project.totalArea}</p>

            <p className="mb-6 text-base leading-relaxed text-text-secondary">
              {project.shortDescription[loc]}
            </p>

            {/* Key Facts */}
            <div className="mb-8 space-y-3">
              {project.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-sm text-primary-500">
                    {iconMap[highlight.icon] || <CompassOutlined />}
                  </span>
                  <span className="text-sm text-text-secondary">
                    {highlight.text[loc]}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="group inline-flex items-center gap-2 font-heading text-base font-semibold text-primary-500 transition-all hover:gap-3"
            >
              {t('featured_project.cta')}
              <ArrowRightOutlined className="text-sm" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
