import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { RocketOutlined, EyeOutlined } from '@ant-design/icons';
import OptimizedImage from '@/components/common/OptimizedImage';

export default function CompanyStory() {
  const { t } = useTranslation('about');

  return (
    <section className="section-padding">
      <div className="container-padding mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <h2 className="mb-2 font-heading text-3xl font-bold text-text-primary md:text-4xl">
              {t('story.title')}
            </h2>
            <p className="mb-6 text-xl font-semibold gradient-text">
              {t('story.subtitle')}
            </p>

            <p className="mb-4 text-base leading-relaxed text-text-secondary">
              {t('story.content_1')}
            </p>
            <p className="mb-8 text-base leading-relaxed text-text-secondary">
              {t('story.content_2')}
            </p>

            {/* Mission & Vision */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
                  <RocketOutlined />
                </div>
                <h3 className="mb-1 font-heading text-base font-semibold text-text-primary">
                  {t('story.mission_title')}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {t('story.mission')}
                </p>
              </div>
              <div className="glass-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
                  <EyeOutlined />
                </div>
                <h3 className="mb-1 font-heading text-base font-semibold text-text-primary">
                  {t('story.vision_title')}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {t('story.vision')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <OptimizedImage
                src="/images/about/masterplan-topdown.jpg"
                alt="EHA Industrial masterplan"
                width={600}
                height={750}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
