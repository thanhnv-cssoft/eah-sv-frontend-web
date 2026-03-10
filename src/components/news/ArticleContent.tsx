import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
import type { Article } from '@/data/types';

interface ArticleContentProps {
  article: Article;
  translationNs: string;
}

export default function ArticleContent({ article, translationNs }: ArticleContentProps) {
  const { t } = useTranslation(translationNs);
  const { locale } = useRouter();
  const loc = (locale as 'vi' | 'en') || 'vi';

  const readTime = Math.max(2, Math.ceil(article.contentParagraphs[loc].join(' ').split(' ').length / 200));
  const initials = article.author.name.split(' ').map((w) => w[0]).join('').slice(-2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Author bar */}
      <div className="mb-8 flex items-center gap-4 border-b border-white/10 pb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/15 text-sm font-bold text-primary-500">
          {initials}
        </div>
        <div>
          <p className="text-sm font-medium text-text-primary">{article.author.name}</p>
          <p className="text-xs text-text-tertiary">{article.author.title[loc]}</p>
        </div>
        <div className="ml-auto flex items-center gap-4 text-xs text-text-tertiary">
          <span className="flex items-center gap-1">
            <CalendarOutlined className="text-[10px]" />
            {new Date(article.publishedAt).toLocaleDateString(loc === 'vi' ? 'vi-VN' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1">
            <UserOutlined className="text-[10px]" />
            {readTime} {t('card.min_read')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {article.contentParagraphs[loc].map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-text-secondary">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Tags */}
      <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
        <span className="text-xs font-medium text-text-tertiary">{t('detail.tags')}:</span>
        {article.tags[loc].map((tag, i) => (
          <span key={i} className="rounded-lg bg-white/5 px-3 py-1 text-xs text-text-secondary">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
