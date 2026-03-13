import { useState, useEffect } from 'react';
import { PhoneOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useTranslation } from 'next-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '@/data/mock/company';

export default function FloatingActions() {
  const { t } = useTranslation('common');
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-10 right-6 z-50 flex flex-col items-center gap-3">
      <Tooltip title={t('buttons.contact_us')} placement="left">
        <a
          href={`tel:${companyInfo.contact.phone}`}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg shadow-primary-500/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-primary-500/40"
          aria-label="Hotline"
        >
          <PhoneOutlined className="text-xl" />
        </a>
      </Tooltip>

      <AnimatePresence>
        {showGoTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-dark-700/90 text-text-secondary backdrop-blur-lg transition-all hover:border-primary-500/30 hover:text-primary-500"
            aria-label="Go to top"
          >
            <ArrowUpOutlined className="text-lg" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
