import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/utils/cn';
import { blurDataURLs } from '@/data/blurPlaceholders';

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL'> {
  wrapperClassName?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  wrapperClassName,
  ...props
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const srcStr = typeof src === 'string' ? src : '';
  const blurData = blurDataURLs[srcStr];

  return (
    <div className={cn('relative overflow-hidden', wrapperClassName)}>
      {/* Skeleton shimmer while loading */}
      {!loaded && (
        <div className="absolute inset-0 z-10 animate-pulse bg-dark-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_1.5s_infinite]" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        className={cn(
          'transition-all duration-700',
          loaded ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-sm',
          className
        )}
        placeholder={blurData ? 'blur' : 'empty'}
        blurDataURL={blurData}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
}
