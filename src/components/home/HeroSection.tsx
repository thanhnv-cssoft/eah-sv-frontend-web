import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/common/OptimizedImage';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => null,
});

export default function HeroSection() {
  const { t } = useTranslation('home');

  return (
    <section className="relative flex h-screen min-h-[700px] items-center overflow-hidden">
      {/* Layer 1: Background Image with blur placeholder */}
      <OptimizedImage
        src="/images/hero/aerial-night-full.jpg"
        alt="EHA Industrial Park aerial view at night"
        fill
        priority
        className="object-cover"
        quality={75}
        sizes="100vw"
        wrapperClassName="absolute inset-0"
      />

      {/* Layer 2: Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/70 to-dark-900/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-dark-900/40" />

      {/* Layer 3: 3D Scene overlay */}
      <div className="absolute inset-0 z-[1]">
        <HeroScene />
      </div>

      {/* Layer 4: Content */}
      <div className="container-padding relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {/* Glowing tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-400 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-500" />
              {t('hero.tagline')}
            </span>
          </motion.div>

          {/* Title with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="text-white">{t('hero.title').split(' ').slice(0, -2).join(' ')} </span>
            <span className="gradient-text">{t('hero.title').split(' ').slice(-2).join(' ')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="group relative overflow-hidden rounded-xl px-8 py-4 text-base font-semibold text-white transition-all"
            >
              <span className="gradient-primary absolute inset-0 transition-opacity group-hover:opacity-90" />
              <span className="glow-orange absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative flex items-center gap-2">
                {t('hero.cta_primary')}
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              className="glass group rounded-xl px-8 py-4 text-base font-semibold text-white transition-all hover:border-primary-500/30 hover:bg-white/10"
            >
              {t('hero.cta_secondary')}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-tertiary">Scroll</span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 pt-1.5">
            <motion.div
              animate={{ opacity: [1, 0], y: [0, 8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1 rounded-full bg-primary-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
