import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { CalendarOutlined, ArrowRightOutlined } from '@ant-design/icons';
import OptimizedImage from '@/components/common/OptimizedImage';
import type { Article } from '@/data/types';

interface ArticleCardProps {
  article: Article;
  index: number;
  basePath: '/news' | '/insights';
  translationNs: string;
}

export default function ArticleCard({ article, index, basePath, translationNs }: ArticleCardProps) {
  const { t } = useTranslation(translationNs);
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
      <Link href={`${basePath}/${article.slug}`} className="group block">
        <div className="glass-card overflow-hidden transition-all duration-300 hover:border-primary-500/20">
          <div className="relative h-48 overflow-hidden">
            <OptimizedImage
              src={article.thumbnail.url}
              alt={article.thumbnail.alt[loc]}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              wrapperClassName="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
          </div>

          <div className="p-5">
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
            </div>
            <h3 className="mb-2 font-heading text-base font-semibold text-text-primary transition-colors group-hover:text-primary-400 line-clamp-2">
              {article.title[loc]}
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-text-secondary line-clamp-2">
              {article.excerpt[loc]}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-400 transition-all group-hover:gap-2">
              {t('card.read_more')} <ArrowRightOutlined className="text-xs" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
