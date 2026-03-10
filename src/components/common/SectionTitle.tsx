import { cn } from '@/utils/cn';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('mb-12 md:mb-16', align === 'center' && 'text-center', className)}>
      <div className="mb-4 inline-block h-1 w-12 rounded-full bg-primary-500" />
      <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">{subtitle}</p>
      )}
    </div>
  );
}
