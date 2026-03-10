import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { companyInfo } from '@/data/mock/company';

function AnimatedNumber({ target, start }: { target: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const duration = 2000;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, start]);

  return <>{count}</>;
}

interface StatsCounterProps {
  variant?: 'overlap' | 'inline';
}

export default function StatsCounter({ variant = 'overlap' }: StatsCounterProps) {
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = companyInfo.stats;

  return (
    <section ref={ref} className={variant === 'overlap' ? 'relative z-10 -mt-20' : 'py-12'}>
      <div className="container-padding mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong grid grid-cols-2 gap-6 p-8 md:grid-cols-4 md:gap-8 md:p-10"
        >
          {stats.map((stat, i) => {
            const suffix = typeof stat.suffix === 'string' ? stat.suffix : stat.suffix[loc];
            const numericValue = parseInt(stat.value) || 0;
            return (
              <div key={i} className="text-center">
                <div className="font-heading text-3xl font-bold text-primary-500 md:text-4xl">
                  <AnimatedNumber target={numericValue} start={inView} />
                  <span className="ml-1 text-lg text-primary-400">{suffix}</span>
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wider text-text-secondary md:text-sm">
                  {stat.label[loc]}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
