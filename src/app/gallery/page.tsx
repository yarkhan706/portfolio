"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const GalleryPage = () => {
  // Generate an array of image paths from 1.jpeg to 26.jpeg
  const images = Array.from({ length: 26 }, (_, i) => `/images/gallery/${i + 1}.jpeg`);
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageErrors, setImageErrors] = useState(new Set());

  const handleImageError = (index) => {
    setImageErrors(prev => new Set([...prev, index]));
  };

  const openLightbox = (src, index) => {
    if (!imageErrors.has(index)) {
      setSelectedImage({ src, index });
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = selectedImage.index;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    }
    
    // Skip error images
    while (imageErrors.has(newIndex) && newIndex !== currentIndex) {
      if (direction === 'next') {
        newIndex = (newIndex + 1) % images.length;
      } else {
        newIndex = newIndex === 0 ? images.length - 1 : newIndex - 1;
      }
    }
    
    if (!imageErrors.has(newIndex)) {
      setSelectedImage({ src: images[newIndex], index: newIndex });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Masonry Grid Layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {images.map((src, index) => (
          !imageErrors.has(index) && (
            <div 
              key={index} 
              className="break-inside-avoid mb-4 group cursor-pointer"
              onClick={() => openLightbox(src, index)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <Image
                  src={src}
                  width={400}
                  height={300}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={() => handleImageError(index)}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl z-10 hover:text-gray-300 transition-colors"
            >
              ×
            </button>
            
            {/* Navigation buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors z-10"
            >
              ‹
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors z-10"
            >
              ›
            </button>
            
            {/* Main image */}
            <div onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage.src}
                width={1200}
                height={800}
                alt={`Gallery Image ${selectedImage.index + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
              {selectedImage.index + 1} / {images.length - imageErrors.size}
            </div>
          </div>
        </div>
      )}

      {/* Loading state for when no images load */}
      {imageErrors.size === images.length && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No images could be loaded. Please check your image paths.</p>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;