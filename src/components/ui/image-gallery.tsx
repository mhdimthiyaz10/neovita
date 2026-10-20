'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Image as ImageIcon, X, ZoomIn } from 'lucide-react';

export interface GalleryItem {
  alt: string;
  src: string;
  ratio: number;
  placeholder?: string;
}

// Function to generate high-resolution SVG placeholder data URLs (kept for backward compatibility)
export const createSvgPlaceholder = (
  title: string = 'Event Photo',
  subtitle: string = 'Neovita Gallery',
  ratio: number = 16 / 9,
  themeIndex: number = 0
): string => {
  const isPortrait = ratio < 1;
  const width = isPortrait ? 1080 : 1920;
  const height = isPortrait ? 1920 : 1080;

  const colorPalettes = [
    { bg: '%23F8FAFC', card: '%23F1F5F9', primary: '%235E239D', secondary: '%238E44AD', border: '%23CBD5E1' },
    { bg: '%23FAF5FF', card: '%23F3E8FF', primary: '%237E22CE', secondary: '%23A855F7', border: '%23D8B4FE' },
    { bg: '%23FFF7ED', card: '%23FFEDD5', primary: '%23EA580C', secondary: '%23F97316', border: '%23FED7AA' },
  ];

  const p = colorPalettes[themeIndex % colorPalettes.length];
  const titleSize = isPortrait ? 42 : 36;
  const subtitleSize = isPortrait ? 26 : 22;

  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="${p.bg}"/><rect x="3%" y="3%" width="94%" height="94%" rx="24" fill="${p.card}" stroke="${p.border}" stroke-width="2.5"/><text x="50%" y="${height / 2 + 10}" font-family="system-ui, -apple-system, sans-serif" font-size="${titleSize}px" fill="${p.primary}" font-weight="700" text-anchor="middle">${encodeURIComponent(title)}</text><text x="50%" y="${height / 2 + 55}" font-family="system-ui, -apple-system, sans-serif" font-size="${subtitleSize}px" fill="%2364748B" font-weight="500" text-anchor="middle">${encodeURIComponent(subtitle)}</text></svg>`;
};

// 3 columns structured to perfectly showcase the 5 real event images with their exact natural aspect ratios:
// Four 3:2 landscape photos (1920x1280) and one 2:3 portrait photo (1920x2878)
export const defaultGalleryColumns: GalleryItem[][] = [
  // Column 1 (Left)
  [
    {
      alt: 'Neovita Event Celebration',
      src: '/0L8A9962_web.jpg',
      ratio: 1920 / 1280, // Natural 3:2 ratio
      placeholder: '/0L8A9962.JPG',
    },
    {
      alt: 'Neovita Clinical Team Moment',
      src: '/0L8A0009_web.jpg',
      ratio: 1920 / 1280, // Natural 3:2 ratio
      placeholder: '/0L8A0009.JPG',
    },
  ],

  // Column 2 (Center)
  [
    {
      alt: 'Neovita Lamp Lighting Ceremony',
      src: '/0L8A9973_web.jpg',
      ratio: 1920 / 1280, // Natural 3:2 ratio
      placeholder: '/0L8A9973.JPG',
    },
    {
      alt: 'Neovita Event Gathering',
      src: '/0L8A9922_web.jpg',
      ratio: 1920 / 1280, // Natural 3:2 ratio
      placeholder: '/0L8A9922.JPG',
    },
  ],

  // Column 3 (Right)
  [
    {
      alt: 'Neovita Keynote Symposium Presentation',
      src: '/0L8A9934_web.jpg',
      ratio: 1920 / 2878, // Natural ~2:3 portrait ratio
      placeholder: '/0L8A9934.JPG',
    },
  ],
];

export interface ImageGalleryProps {
  columns?: GalleryItem[][];
  className?: string;
}

export function ImageGallery({ columns = defaultGalleryColumns, className }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className={cn('relative flex w-full flex-col items-center justify-center py-6 px-4 sm:px-6 lg:px-8', className)}>
      <div className="mx-auto grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
        {columns.map((colItems, col) => (
          <div key={col} className="flex flex-col gap-6 w-full">
            {colItems.map((item, index) => (
              <AnimatedImage
                key={`${col}-${index}`}
                alt={item.alt || `Event Photo ${col + 1}-${index + 1}`}
                src={item.src}
                ratio={item.ratio}
                placeholder={item.placeholder}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 z-50 flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/40 hover:scale-110 cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="size-6" />
          </button>

          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl shadow-2xl transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.placeholder || selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 text-white rounded-b-2xl">
              <p className="text-base sm:text-lg font-semibold tracking-wide">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface AnimatedImageProps {
  alt: string;
  src: string;
  className?: string;
  placeholder?: string;
  ratio: number;
  onClick?: () => void;
}

function AnimatedImage({ alt, src, ratio, placeholder, className, onClick }: AnimatedImageProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [imgSrc, setImgSrc] = React.useState(src);

  const handleError = () => {
    if (placeholder && imgSrc !== placeholder) {
      setImgSrc(placeholder);
    }
    setIsLoading(false);
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        'group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
        className
      )}
      style={{ aspectRatio: `${ratio}` }}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-100 backdrop-blur-sm transition-opacity duration-300">
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <div className="rounded-full bg-slate-200 p-3 animate-pulse">
              <ImageIcon className="size-5 text-slate-500" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Loading...
            </span>
          </div>
        </div>
      )}

      {/* Rendered Image - Fills entire card with 0 gaps or blank areas */}
      <img
        alt={alt}
        src={imgSrc}
        className={cn(
          'block size-full object-cover transition-all duration-500 ease-out group-hover:scale-105',
          isLoading ? 'opacity-0 scale-102' : 'opacity-100 scale-100'
        )}
        onLoad={() => setIsLoading(false)}
        onError={handleError}
        loading="lazy"
      />

      {/* Hover Overlay with Zoom Icon & Title */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex justify-end">
          <div className="flex size-8 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-md">
            <ZoomIn className="size-4" />
          </div>
        </div>
        <div>
          <span className="text-white text-xs sm:text-sm font-medium tracking-wide drop-shadow-md">
            {alt}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
