"use client"
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

const GalleryPage = () => {
  // Generate an array of image paths from 1.jpeg to 26.jpeg
  const images = Array.from({ length: 26 }, (_, i) => `/images/gallery/${i + 1}.jpeg`);
  
  const [selectedImage, setSelectedImage] = useState<{ src: string; index: number } | null>(null);
  const [imageErrors, setImageErrors] = useState(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set([...prev, index]));
  };

  const openLightbox = (src: string, index: number) => {
    if (!imageErrors.has(index)) {
      setSelectedImage({ src, index });
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = useCallback(
    (direction: 'next' | 'prev') => {
      setSelectedImage((current) => {
        if (!current) return current;
        const currentIndex = current.index;
        let newIndex =
          direction === 'next'
            ? (currentIndex + 1) % images.length
            : currentIndex === 0
              ? images.length - 1
              : currentIndex - 1;

        // Skip error images
        while (imageErrors.has(newIndex) && newIndex !== currentIndex) {
          newIndex =
            direction === 'next'
              ? (newIndex + 1) % images.length
              : newIndex === 0
                ? images.length - 1
                : newIndex - 1;
        }
        if (imageErrors.has(newIndex)) return current;
        return { src: images[newIndex], index: newIndex };
      });
    },
    [images, imageErrors]
  );

  // Keyboard navigation while the viewer is open.
  useEffect(() => {
    if (!selectedImage) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') navigateImage('next');
      else if (e.key === 'ArrowLeft') navigateImage('prev');
    };
    document.addEventListener('keydown', onKey);
    // Lock background scroll while the viewer is open.
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selectedImage, navigateImage]);

  return (
    <main className="max-w-[1440px] mx-auto px-6 md:px-10">
      <section className="pf-page">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 items-end pt-[52px] pb-7">
          <h1 className="col-span-12 md:col-span-9 m-0 font-bold uppercase text-[clamp(48px,9vw,128px)] leading-[0.86] tracking-[-0.035em]">
            Off the clock
          </h1>
          <div className="col-span-12 md:col-span-3 md:pb-2.5 md:text-right">
            <a
              href="https://www.instagram.com/yarkhan706/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.12em] uppercase text-[var(--ink)] no-underline hover:text-[var(--accent)] transition-colors"
            >
              @yarkhan706 →
            </a>
          </div>
        </div>

        <div className="border-t-2 border-[var(--ink)]" />

        {/* Masonry — full photos, no cropping. One column on mobile,
            scaling up on wider screens via CSS columns. */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 py-11 pb-[60px]">
          {images.map((src, index) => (
            !imageErrors.has(index) && (
              <div
                key={index}
                className="mb-2 break-inside-avoid group cursor-pointer bg-[var(--slot)] overflow-hidden"
                onClick={() => openLightbox(src, index)}
              >
                <Image
                  src={src}
                  width={400}
                  height={400}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  onError={() => handleImageError(index)}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            )
          ))}
        </div>

      {/* Lightbox — Swiss viewer. Portalled to <body> so it escapes the
          pf-page transform (a transformed ancestor breaks position:fixed). */}
      {mounted && selectedImage && createPortal(
        <div
          className="fixed inset-0 z-[110] bg-[var(--paper)] flex flex-col"
          onClick={closeLightbox}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between px-6 md:px-10 pt-[22px] pb-4 border-b-2 border-[var(--ink)] shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-[11px] tracking-[0.12em] uppercase text-[var(--muted)]">
              {String(selectedImage.index + 1).padStart(2, '0')} /{' '}
              {String(images.length - imageErrors.size).padStart(2, '0')}
            </span>
            <button
              onClick={closeLightbox}
              className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
              aria-label="Close viewer"
            >
              Close <span className="text-[18px] leading-none">✕</span>
            </button>
          </div>

          {/* Image stage */}
          <div
            className="flex-1 flex items-center justify-center gap-4 md:gap-8 px-4 md:px-10 py-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Side arrows — desktop only */}
            <button
              onClick={() => navigateImage('prev')}
              className="hidden md:block shrink-0 text-[var(--ink)] hover:text-[var(--accent)] transition-colors text-5xl leading-none"
              aria-label="Previous image"
            >
              ‹
            </button>

            <Image
              src={selectedImage.src}
              width={1400}
              height={1000}
              alt={`Gallery image ${selectedImage.index + 1}`}
              className="max-w-full max-h-full w-auto h-auto object-contain border-2 border-[var(--ink)]"
              style={{ maxHeight: 'calc(100vh - 200px)' }}
            />

            <button
              onClick={() => navigateImage('next')}
              className="hidden md:block shrink-0 text-[var(--ink)] hover:text-[var(--accent)] transition-colors text-5xl leading-none"
              aria-label="Next image"
            >
              ›
            </button>
          </div>

          {/* Bottom Prev / Next bar — mobile only */}
          <div
            className="md:hidden flex items-stretch border-t-2 border-[var(--ink)] shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => navigateImage('prev')}
              className="flex-1 flex items-center justify-center gap-2 py-4 text-[12px] tracking-[0.14em] uppercase text-[var(--ink)] active:text-[var(--accent)] border-r border-[var(--line-soft)]"
              aria-label="Previous image"
            >
              <span className="text-lg leading-none">‹</span> Prev
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="flex-1 flex items-center justify-center gap-2 py-4 text-[12px] tracking-[0.14em] uppercase text-[var(--ink)] active:text-[var(--accent)]"
              aria-label="Next image"
            >
              Next <span className="text-lg leading-none">›</span>
            </button>
          </div>
        </div>,
        document.body
      )}

        {/* Loading state for when no images load */}
        {imageErrors.size === images.length && (
          <div className="text-center py-12">
            <p className="text-[var(--muted)] text-lg">No images could be loaded.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default GalleryPage;