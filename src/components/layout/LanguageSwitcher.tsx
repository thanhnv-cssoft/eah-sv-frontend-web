import { useRouter } from 'next/router';
import Link from 'next/link';
import { cn } from '@/utils/cn';

export default function LanguageSwitcher() {
  const { locale, locales, asPath } = useRouter();

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-0.5">
      {locales?.map((loc) => (
        <Link key={loc} href={asPath} locale={loc}>
          <span
            className={cn(
              'rounded-full px-3 py-1 text-xs font-medium transition-all',
              locale === loc
                ? 'bg-primary-500 text-white'
                : 'text-text-secondary hover:text-text-primary'
            )}
          >
            {loc.toUpperCase()}
          </span>
        </Link>
      ))}
    </div>
  );
}
