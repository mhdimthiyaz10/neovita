'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export interface GalleryItem {
  alt: string;
  src: string;
  ratio: number;
  placeholder?: string;
}

const defaultGalleryColumns: GalleryItem[][] = [
  // Column 1
  [
    {
      alt: 'Gallery Event 1',
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
      ratio: 16 / 9,
      placeholder: 'https://placehold.co/1920x1080/',
    },
    {
      alt: 'Gallery Event 2',
      src: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: 'https://placehold.co/1080x1920/',
    },
    {
      alt: 'Gallery Event 3',
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80',
      ratio: 16 / 9,
      placeholder: 'https://placehold.co/1920x1080/',
    },
    {
      alt: 'Gallery Event 4',
      src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: 'https://placehold.co/1080x1920/',
    },
    {
      alt: 'Gallery Event 5',
      src: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=1200&q=80',
      ratio: 16 / 9,
      placeholder: 'https://placehold.co/1920x1080/',
    },
    {
      alt: 'Gallery Event 6',
      src: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: 'https://placehold.co/1080x1920/',
    },
  ],
  // Column 2
  [
    {
      alt: 'Gallery Event 7',
      src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: 'https://placehold.co/1080x1920/',
    },
    {
      alt: 'Gallery Event 8',
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&q=80',
      ratio: 16 / 9,
      placeholder: 'https://placehold.co/1920x1080/',
    },
    {
      alt: 'Gallery Event 9',
      src: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: 'https://placehold.co/1080x1920/',
    },
    {
      alt: 'Gallery Event 10',
      src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
      ratio: 16 / 9,
      placeholder: 'https://placehold.co/1920x1080/',
    },
    {
      alt: 'Gallery Event 11',
      src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: 'https://placehold.co/1080x1920/',
    },
    {
      alt: 'Gallery Event 12',
      src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80',
      ratio: 16 / 9,
      placeholder: 'https://placehold.co/1920x1080/',
    },
  ],
  // Column 3
  [
    {
      alt: 'Gallery Event 13',
      src: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80',
      ratio: 16 / 9,
      placeholder: 'https://placehold.co/1920x1080/',
    },
    {
      alt: 'Gallery Event 14',
      src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&q=80',
      ratio: 16 / 9,
      placeholder: 'https://placehold.co/1920x1080/',
    },
    {
      alt: 'Gallery Event 15',
      src: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: 'https://placehold.co/1080x1920/',
    },
    {
      alt: 'Gallery Event 16',
      src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: 'https://placehold.co/1080x1920/',
    },
    {
      alt: 'Gallery Event 17',
      src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
      ratio: 16 / 9,
      placeholder: 'https://placehold.co/1920x1080/',
    },
    {
      alt: 'Gallery Event 18',
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: 'https://placehold.co/1080x1920/',
    },
  ],
];

export interface ImageGalleryProps {
  columns?: GalleryItem[][];
  className?: string;
}

export function ImageGallery({ columns = defaultGalleryColumns, className }: ImageGalleryProps) {
  return (
    <div className={cn("relative flex min-h-screen w-full flex-col items-center justify-center py-10 px-4", className)}>
      <div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {columns.map((colItems, col) => (
          <div key={col} className="grid gap-6">
            {colItems.map((item, index) => (
              <AnimatedImage
                key={`${col}-${index}`}
                alt={item.alt || `Image ${col}-${index}`}
                src={item.src}
                ratio={item.ratio}
                placeholder={item.placeholder}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

interface AnimatedImageProps {
  alt: string;
  src: string;
  className?: string;
  placeholder?: string;
  ratio: number;
}

function AnimatedImage({ alt, src, ratio, placeholder, className }: AnimatedImageProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isLoading, setIsLoading] = React.useState(true);
  const [imgSrc, setImgSrc] = React.useState(src);

  const handleError = () => {
    if (placeholder && imgSrc !== placeholder) {
      setImgSrc(placeholder);
    }
  };

  return (
    <AspectRatio
      ref={ref}
      ratio={ratio}
      className={cn("bg-accent relative size-full rounded-lg border overflow-hidden shadow-sm", className)}
    >
      <img
        alt={alt}
        src={imgSrc}
        className={cn(
          'size-full rounded-lg object-cover opacity-0 transition-all duration-1000 ease-in-out',
          {
            'opacity-100': isInView && !isLoading,
          },
        )}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        onError={handleError}
      />
    </AspectRatio>
  );
}

export default ImageGallery;
