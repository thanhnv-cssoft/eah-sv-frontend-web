import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { CalendarOutlined, ArrowRightOutlined } from '@ant-design/icons';
import OptimizedImage from '@/components/common/OptimizedImage';
import type { Article } from '@/data/types';

interface InsightCardProps {
  article: Article;
  index: number;
}

export default function InsightCard({ article, index }: InsightCardProps) {
  const { t } = useTranslation('insights');
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  const readTime = Math.max(2, Math.ceil(article.contentParagraphs[loc].join(' ').split(' ').length / 200));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/insights/${article.slug}`} className="group block">
        <div className="glass-card overflow-hidden transition-all duration-300 hover:border-primary-500/20 md:flex">
          {/* Image */}
          <div className="relative h-48 overflow-hidden md:h-auto md:w-1/3">
            <OptimizedImage
              src={article.thumbnail.url}
              alt={article.thumbnail.alt[loc]}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              wrapperClassName="absolute inset-0"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:w-2/3">
            <div className="mb-2 flex items-center gap-3 text-xs text-text-tertiary">
              <span className="flex items-center gap-1">
                <CalendarOutlined className="text-[10px]" />
                {new Date(article.publishedAt).toLocaleDateString(loc === 'vi' ? 'vi-VN' : 'en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
              <span>{readTime} {t('card.min_read')}</span>
              <span className="text-xs text-primary-400">{article.author.name}</span>
            </div>
            <h3 className="mb-2 font-heading text-lg font-semibold text-text-primary transition-colors group-hover:text-primary-400">
              {article.title[loc]}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-text-secondary line-clamp-3">
              {article.excerpt[loc]}
            </p>
            <div className="mb-3 flex flex-wrap gap-2">
              {article.tags[loc].map((tag, i) => (
                <span key={i} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-text-tertiary">
                  {tag}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-400 transition-all group-hover:gap-2">
              {t('card.read_more')} <ArrowRightOutlined className="text-xs" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
