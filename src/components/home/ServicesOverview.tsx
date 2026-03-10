import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { ArrowRightOutlined } from '@ant-design/icons';
import SectionTitle from '@/components/common/SectionTitle';
import OptimizedImage from '@/components/common/OptimizedImage';
import { serviceItems } from '@/data/mock/company';

export default function ServicesOverview() {
  const { t } = useTranslation('home');
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  return (
    <section className="section-padding">
      <div className="container-padding mx-auto max-w-7xl">
        <SectionTitle title={t('services.title')} subtitle={t('services.subtitle')} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link href={item.link} className="group block">
                <div className="glass-card overflow-hidden">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <OptimizedImage
                      src={item.image}
                      alt={item.title[loc]}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      wrapperClassName="absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-3 font-heading text-xl font-semibold text-text-primary">
                      {item.title[loc]}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                      {item.description[loc]}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 transition-all group-hover:gap-3">
                      {t('common:buttons.learn_more')}
                      <ArrowRightOutlined className="text-xs" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
