import { useState } from 'react';
import { Image as AntImage } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from '@/components/common/OptimizedImage';
import { cn } from '@/utils/cn';
import type { ImageAsset } from '@/data/types';

interface ProjectGalleryProps {
  images: ImageAsset[];
  projectName: string;
}

export default function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <div>
      {/* Main image */}
      <AntImage.PreviewGroup items={images.map((img) => ({ src: img.url }))}>
        <div className="relative mb-3 overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[16/9]"
            >
              <AntImage
                src={images[activeIndex].url}
                alt={projectName}
                className="h-full w-full object-cover"
                style={{ borderRadius: '1rem' }}
                rootClassName="!block h-full w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </AntImage.PreviewGroup>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                'relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all',
                activeIndex === i ? 'border-primary-500' : 'border-transparent opacity-60 hover:opacity-100'
              )}
            >
              <OptimizedImage
                src={img.url}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
                wrapperClassName="absolute inset-0"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
