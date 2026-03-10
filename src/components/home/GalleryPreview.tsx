import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';
import OptimizedImage from '@/components/common/OptimizedImage';

const galleryImages = [
  {
    src: '/images/hero/entrance-gate.jpg',
    alt: { vi: 'Cổng vào EHA Industrial', en: 'EHA Industrial entrance gate' },
    span: 'md:col-span-2 md:row-span-2',
    height: 'h-64 md:h-full',
  },
  {
    src: '/images/products/factory-night.jpg',
    alt: { vi: 'Nhà xưởng EHA ban đêm', en: 'EHA factory at night' },
    span: '',
    height: 'h-48 md:h-56',
  },
  {
    src: '/images/products/rbh-internal-road.jpg',
    alt: { vi: 'Đường nội bộ khu công nghiệp', en: 'Industrial park internal road' },
    span: '',
    height: 'h-48 md:h-56',
  },
  {
    src: '/images/about/masterplan-topdown.jpg',
    alt: { vi: 'Mặt bằng tổng thể EHA', en: 'EHA master plan top-down view' },
    span: 'md:col-span-2',
    height: 'h-48 md:h-56',
  },
];

export default function GalleryPreview() {
  const { t } = useTranslation('home');
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  return (
    <section className="section-padding bg-dark-800/30">
      <div className="container-padding mx-auto max-w-7xl">
        <SectionTitle title={t('gallery.title')} subtitle={t('gallery.subtitle')} />

        <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-xl ${img.span} ${img.height}`}
            >
              <OptimizedImage
                src={img.src}
                alt={img.alt[loc]}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                wrapperClassName="absolute inset-0"
              />
              <div className="absolute inset-0 bg-dark-900/0 transition-colors duration-300 group-hover:bg-dark-900/40" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                <span className="text-sm font-medium text-white">{img.alt[loc]}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
