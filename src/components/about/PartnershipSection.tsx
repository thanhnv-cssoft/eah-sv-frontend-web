import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { CheckCircleOutlined } from '@ant-design/icons';
import SectionTitle from '@/components/common/SectionTitle';
import { partnerInfo } from '@/data/mock/company';

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

export default function PartnershipSection() {
  const { t } = useTranslation('about');
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

  return (
    <section ref={ref} className="section-padding bg-dark-800/30">
      <div className="container-padding mx-auto max-w-7xl">
        <SectionTitle title={t('partnership.title')} subtitle={t('partnership.subtitle')} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong p-8 md:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-3">
            {/* Years count */}
            <div className="text-center md:border-r md:border-white/10">
              <div className="font-heading text-5xl font-bold text-primary-500 md:text-6xl">
                <AnimatedNumber target={partnerInfo.yearsExperience} start={inView} />
                <span className="text-3xl text-primary-400">+</span>
              </div>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-text-tertiary">
                {t('partnership.years_exp')}
              </p>
            </div>

            {/* Info */}
            <div className="md:col-span-2">
              <h3 className="mb-1 font-heading text-xl font-bold text-text-primary">
                {partnerInfo.name}
              </h3>
              <p className="mb-1 text-sm text-primary-400">{partnerInfo.fullName[loc]}</p>
              <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                {partnerInfo.description[loc]}
              </p>
              <ul className="space-y-2">
                {partnerInfo.achievements[loc].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircleOutlined className="text-xs text-primary-500" />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
