import { motion } from 'framer-motion';

/**
 * Subtle animated tech grid background for sections.
 * Renders decorative floating lines and dots for a futuristic feel.
 */
export default function TechBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
      {/* Horizontal scan line */}
      <motion.div
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent"
      />

      {/* Grid dots */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tech-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="rgba(244,121,32,0.3)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-dots)" />
      </svg>

      {/* Corner accents */}
      <div className="absolute left-8 top-8 h-16 w-16">
        <div className="absolute left-0 top-0 h-px w-8 bg-primary-500/30" />
        <div className="absolute left-0 top-0 h-8 w-px bg-primary-500/30" />
      </div>
      <div className="absolute right-8 top-8 h-16 w-16">
        <div className="absolute right-0 top-0 h-px w-8 bg-primary-500/30" />
        <div className="absolute right-0 top-0 h-8 w-px bg-primary-500/30" />
      </div>
      <div className="absolute bottom-8 left-8 h-16 w-16">
        <div className="absolute bottom-0 left-0 h-px w-8 bg-primary-500/30" />
        <div className="absolute bottom-0 left-0 h-8 w-px bg-primary-500/30" />
      </div>
      <div className="absolute bottom-8 right-8 h-16 w-16">
        <div className="absolute bottom-0 right-0 h-px w-8 bg-primary-500/30" />
        <div className="absolute bottom-0 right-0 h-8 w-px bg-primary-500/30" />
      </div>

      {/* Floating data streams */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: ['-10%', '110%'] }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 2,
          }}
          className="absolute w-px"
          style={{ left: `${25 + i * 25}%` }}
        >
          <div className="h-24 bg-gradient-to-b from-transparent via-primary-500/20 to-transparent" />
        </motion.div>
      ))}
    </div>
  );
}
