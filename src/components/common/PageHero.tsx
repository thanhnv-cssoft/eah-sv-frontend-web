import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

interface PageHeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHero({ backgroundImage, title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="relative flex h-[50vh] min-h-[400px] items-end overflow-hidden">
      <OptimizedImage
        src={backgroundImage}
        alt=""
        fill
        priority
        className="object-cover"
        quality={75}
        sizes="100vw"
        wrapperClassName="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-dark-900/30" />

      <div className="container-padding relative z-10 mx-auto max-w-7xl pb-12">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-400"
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-lg text-text-secondary"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
