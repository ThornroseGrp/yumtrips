"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhotoCarouselProps {
  photos: string[];
  alt: string;
  size?: "large" | "small";
  className?: string;
}

export function PhotoCarousel({ photos, alt, size = "large", className }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const handleImageError = (index: number) => {
    setFailedImages(prev => new Set(prev).add(index));
  };

  if (!photos || photos.length === 0) {
    return (
      <div className={cn(
        "relative bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl overflow-hidden flex items-center justify-center",
        size === "large" ? "aspect-[4/3]" : "aspect-[3/2]",
        className
      )}>
        <div className="text-center p-8">
          <div className="text-6xl mb-2">🏖️</div>
          <p className="text-sm text-gray-600">Photo coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "relative group rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800",
      size === "large" ? "aspect-[4/3]" : "aspect-[3/2]",
      className
    )}>
      {/* Images */}
      <div className="relative w-full h-full">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
          >
            {failedImages.has(index) ? (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-sm text-gray-400">Image unavailable</p>
              </div>
            ) : (
              <Image
                src={`/photos/${photo}`}
                alt={`${alt} ${index + 1}`}
                fill
                className="object-cover"
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
                priority={index === 0}
                sizes={size === "large" ? "(max-width: 768px) 100vw, 400px" : "(max-width: 768px) 100vw, 300px"}
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Only show if multiple photos */}
      {photos.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-900/90 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-900/90 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next photo"
          >
            <ChevronRight className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/60 hover:bg-white/80"
                )}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
