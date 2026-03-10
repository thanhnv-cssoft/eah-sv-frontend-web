import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { PhoneOutlined } from '@ant-design/icons';
import OptimizedImage from '@/components/common/OptimizedImage';
import { companyInfo } from '@/data/mock/company';

export default function CTASection() {
  const { t } = useTranslation('home');

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <OptimizedImage
          src="/images/about/aerial-night-far.jpg"
          alt="EHA Industrial Park"
          fill
          className="object-cover"
          sizes="100vw"
          wrapperClassName="absolute inset-0"
        />
        <div className="absolute inset-0 bg-dark-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/50 via-transparent to-dark-900/50" />
      </div>

      <div className="container-padding relative z-10 mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl"
        >
          {t('cta.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8 text-lg text-text-secondary"
        >
          {t('cta.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="gradient-primary glow-orange rounded-xl px-8 py-3.5 text-base font-semibold text-white transition-all hover:opacity-90"
          >
            {t('cta.btn_quote')}
          </Link>
          <a
            href={`tel:${companyInfo.contact.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            <PhoneOutlined />
            {t('cta.btn_call')}: {companyInfo.contact.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
