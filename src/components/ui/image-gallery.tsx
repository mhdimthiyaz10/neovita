'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Image as ImageIcon } from 'lucide-react';

export interface GalleryItem {
  alt: string;
  src: string;
  ratio: number;
  placeholder?: string;
}

// Function to generate high-resolution, instant SVG placeholder data URLs
export const createSvgPlaceholder = (
  title: string = 'Event Photo',
  subtitle: string = 'Neovita Gallery Placeholder',
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
    { bg: '%23F0FDF4', card: '%23DCFCE7', primary: '%2315803D', secondary: '%2322C55E', border: '%23BBF7D0' },
    { bg: '%23F0F9FF', card: '%23E0F2FE', primary: '%230369A1', secondary: '%2338BDF8', border: '%23BAE6FD' },
  ];

  const p = colorPalettes[themeIndex % colorPalettes.length];
  const iconSize = isPortrait ? 100 : 90;
  const titleSize = isPortrait ? 42 : 36;
  const subtitleSize = isPortrait ? 26 : 22;

  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="${p.bg}"/><rect x="3%" y="3%" width="94%" height="94%" rx="24" fill="${p.card}" stroke="${p.border}" stroke-width="2.5" stroke-dasharray="12 12"/><g transform="translate(${width / 2 - iconSize / 2}, ${height / 2 - iconSize - 20})"><rect width="${iconSize}" height="${iconSize}" rx="18" fill="${p.primary}" opacity="0.12"/><path d="M${iconSize * 0.25} ${iconSize * 0.65} L${iconSize * 0.42} ${iconSize * 0.45} L${iconSize * 0.55} ${iconSize * 0.58} L${iconSize * 0.72} ${iconSize * 0.38} L${iconSize * 0.85} ${iconSize * 0.65} Z" fill="${p.primary}" opacity="0.65"/><circle cx="${iconSize * 0.36}" cy="${iconSize * 0.35}" r="${iconSize * 0.08}" fill="${p.secondary}" opacity="0.75"/></g><text x="50%" y="${height / 2 + 30}" font-family="system-ui, -apple-system, sans-serif" font-size="${titleSize}px" fill="${p.primary}" font-weight="700" text-anchor="middle" letter-spacing="0.5px">${encodeURIComponent(title)}</text><text x="50%" y="${height / 2 + 75}" font-family="system-ui, -apple-system, sans-serif" font-size="${subtitleSize}px" fill="%2364748B" font-weight="500" text-anchor="middle">${encodeURIComponent(subtitle)}</text></svg>`;
};

// 3 columns with 10 items each (30 total items with photos and stylish placeholders)
export const defaultGalleryColumns: GalleryItem[][] = [
  // Column 1
  [
    {
      alt: 'Neovita Event Celebration',
      src: '/0L8A9962_web.jpg',
      ratio: 16 / 9,
      placeholder: '/0L8A9962.JPG',
    },
    {
      alt: 'Cleanroom Lab Masterclass',
      src: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: createSvgPlaceholder('Cleanroom Lab Masterclass', 'Embryology Workstation', 9 / 16, 1),
    },
    {
      alt: 'Neovita Clinical Event',
      src: '/0L8A0009_web.jpg',
      ratio: 16 / 9,
      placeholder: '/0L8A0009.JPG',
    },
    {
      alt: 'Doctor Consultation Seminar',
      src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: createSvgPlaceholder('Doctor Consultation Seminar', 'Specialist Case Study', 9 / 16, 3),
    },
    {
      alt: 'Neovita Event Moment',
      src: '/0L8A9922_web.jpg',
      ratio: 16 / 9,
      placeholder: '/0L8A9922.JPG',
    },
    {
      alt: 'Event Photo Placeholder',
      src: createSvgPlaceholder('Hands-on Cryo Workshop', 'Advanced Vitrification Lab', 9 / 16, 0),
      ratio: 9 / 16,
    },
    {
      alt: 'Roundtable Discussion',
      src: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=1200&q=80',
      ratio: 16 / 9,
      placeholder: createSvgPlaceholder('Roundtable Discussion', 'Academic Medical Board', 16 / 9, 1),
    },
    {
      alt: 'Event Photo Placeholder',
      src: createSvgPlaceholder('Patient Hope Circle', 'Wellness & Peer Support', 16 / 9, 2),
      ratio: 16 / 9,
    },
    {
      alt: 'Medical Research Presentation',
      src: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: createSvgPlaceholder('Medical Research Presentation', 'Symposium Lecture', 9 / 16, 3),
    },
    {
      alt: 'Event Photo Placeholder',
      src: createSvgPlaceholder('Excellence Awards Night', 'Honoring Clinical Teams', 16 / 9, 4),
      ratio: 16 / 9,
    },
  ],

  // Column 2
  [
    {
      alt: 'Sterile Vitrification Procedure',
      src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: createSvgPlaceholder('Sterile Vitrification Procedure', 'Laboratory Cleanroom', 9 / 16, 1),
    },
    {
      alt: 'Neovita Event Moment',
      src: '/0L8A9973_web.jpg',
      ratio: 16 / 9,
      placeholder: '/0L8A9973.JPG',
    },
    {
      alt: 'International Patient Symposium',
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&q=80',
      ratio: 16 / 9,
      placeholder: createSvgPlaceholder('International Patient Symposium', 'Cross-border Healthcare', 16 / 9, 3),
    },
    {
      alt: 'Reproductive Endocrinology Panel',
      src: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: createSvgPlaceholder('Reproductive Endocrinology Panel', 'Physicians Roundtable', 9 / 16, 4),
    },
    {
      alt: 'Event Photo Placeholder',
      src: createSvgPlaceholder('Free Fertility Camp', 'Trivandrum Outreach Clinic', 9 / 16, 0),
      ratio: 9 / 16,
    },
    {
      alt: 'Joyous Family Meet',
      src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
      ratio: 16 / 9,
      placeholder: createSvgPlaceholder('Joyous Family Meet', 'Neovita Campus Grounds', 16 / 9, 1),
    },
    {
      alt: 'Healthcare Innovation Forum',
      src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: createSvgPlaceholder('Healthcare Innovation Forum', 'Clinical Director Address', 9 / 16, 2),
    },
    {
      alt: 'Event Photo Placeholder',
      src: createSvgPlaceholder('Semen Health Screening Camp', 'Kollam Diagnostic Centre', 16 / 9, 3),
      ratio: 16 / 9,
    },
    {
      alt: 'Senior Doctor Address',
      src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80',
      ratio: 16 / 9,
      placeholder: createSvgPlaceholder('Senior Doctor Address', 'Keynote Presentation', 16 / 9, 4),
    },
    {
      alt: 'Event Photo Placeholder',
      src: createSvgPlaceholder('Neovita Founders Day', 'Celebrating 15+ Years', 9 / 16, 0),
      ratio: 9 / 16,
    },
  ],

  // Column 3
  [
    {
      alt: 'Neovita Event Presentation',
      src: '/0L8A9934_web.jpg',
      ratio: 9 / 16,
      placeholder: '/0L8A9934.JPG',
    },
    {
      alt: 'Grand Auditorium Keynote',
      src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&q=80',
      ratio: 16 / 9,
      placeholder: createSvgPlaceholder('Grand Auditorium Keynote', 'State ART Conference', 16 / 9, 0),
    },
    {
      alt: 'Patient Care & Wellness Circle',
      src: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: createSvgPlaceholder('Patient Care & Wellness Circle', 'Compassionate Nurse Support', 9 / 16, 1),
    },
    {
      alt: 'Event Photo Placeholder',
      src: createSvgPlaceholder('Embryo Biopsy Demonstration', 'Micromanipulator Training', 16 / 9, 2),
      ratio: 16 / 9,
    },
    {
      alt: 'Cryo-Banking Induction Seminar',
      src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: createSvgPlaceholder('Cryo-Banking Induction Seminar', 'Nitrogen Vapor Storage', 9 / 16, 3),
    },
    {
      alt: 'Event Photo Placeholder',
      src: createSvgPlaceholder('Genetic Screening Workshop', 'PGT-A & NGS Sequencing', 9 / 16, 4),
      ratio: 9 / 16,
    },
    {
      alt: 'Genetics Conference',
      src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
      ratio: 16 / 9,
      placeholder: createSvgPlaceholder('Genetics Conference', 'Pre-implantation Diagnostics', 16 / 9, 0),
    },
    {
      alt: 'Clinical Seminar Discussion',
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
      ratio: 9 / 16,
      placeholder: createSvgPlaceholder('Clinical Seminar Discussion', 'Ovulation Induction Protocols', 9 / 16, 1),
    },
    {
      alt: 'Event Photo Placeholder',
      src: createSvgPlaceholder('ICSI Skill Certification', 'Neovita Academy Hands-on', 16 / 9, 2),
      ratio: 16 / 9,
    },
    {
      alt: 'Event Photo Placeholder',
      src: createSvgPlaceholder('World Embryologist Day', 'Honoring Lab Excellence', 9 / 16, 3),
      ratio: 9 / 16,
    },
  ],
];

export interface ImageGalleryProps {
  columns?: GalleryItem[][];
  className?: string;
}

export function ImageGallery({ columns = defaultGalleryColumns, className }: ImageGalleryProps) {
  return (
    <div className={cn('relative flex min-h-screen w-full flex-col items-center justify-center py-6 px-4', className)}>
      <div className="mx-auto grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {columns.map((colItems, col) => (
          <div key={col} className="grid gap-6 content-start">
            {colItems.map((item, index) => (
              <AnimatedImage
                key={`${col}-${index}`}
                alt={item.alt || `Event Photo ${col + 1}-${index + 1}`}
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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '200px' });
  const [isLoading, setIsLoading] = React.useState(true);
  const [imgSrc, setImgSrc] = React.useState(src);

  // Fallback SVG placeholder if image fails to load
  const fallbackSvg = React.useMemo(() => {
    if (placeholder) return placeholder;
    return createSvgPlaceholder(alt || 'Event Photo', 'Neovita Gallery', ratio, Math.floor(Math.random() * 5));
  }, [placeholder, alt, ratio]);

  const handleError = () => {
    if (imgSrc !== fallbackSvg) {
      setImgSrc(fallbackSvg);
    }
    setIsLoading(false);
  };

  return (
    <div ref={containerRef} className="w-full">
      <AspectRatio
        ratio={ratio}
        className={cn(
          'relative size-full rounded-2xl border border-slate-200/80 bg-slate-100 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5',
          className
        )}
      >
        {/* Shimmer / Skeleton Placeholder while loading */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-100/90 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <div className="p-3 rounded-full bg-slate-200/70 animate-pulse">
                <ImageIcon className="size-6 text-slate-500" />
              </div>
              <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                Loading photo...
              </span>
            </div>
          </div>
        )}

        {/* The rendered image */}
        {isInView && (
          <img
            alt={alt}
            src={imgSrc}
            className={cn(
              'size-full rounded-2xl object-cover transition-all duration-700 ease-out',
              isLoading ? 'opacity-0 scale-102' : 'opacity-100 scale-100',
              'hover:scale-103'
            )}
            onLoad={() => setIsLoading(false)}
            loading="lazy"
            onError={handleError}
          />
        )}
      </AspectRatio>
    </div>
  );
}

export default ImageGallery;
