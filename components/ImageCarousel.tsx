'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://picsum.photos/seed/1/1200/600',
  'https://picsum.photos/seed/2/1200/600',
  'https://picsum.photos/seed/3/1200/600',
  'https://picsum.photos/seed/4/1200/600',
  'https://picsum.photos/seed/5/1200/600',
];

const SLIDE_DURATION = 5000; // 5 seconds per slide
const ANIMATION_DURATION = 500; // 0.5 seconds for fade animation

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    setIsAnimating(true);
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    setProgress(0);
  }, []);

  const previousSlide = useCallback(() => {
    setIsAnimating(true);
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + images.length) % images.length
    );
    setProgress(0);
  }, []);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;

    // Start the progress timer only after animation is complete
    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);

      progressInterval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 100) {
            nextSlide();
            return 0;
          }
          return prevProgress + 100 / (SLIDE_DURATION / 100);
        });
      }, 100);
    }, ANIMATION_DURATION);

    return () => {
      clearTimeout(animationTimeout);
      clearInterval(progressInterval);
    };
  }, [currentIndex, nextSlide]);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl">
      {/* Main Image Container */}
      <div className="relative aspect-[2/1] w-full">
        {/* Current Image */}
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: ANIMATION_DURATION / 1000,
              ease: 'easeInOut',
            }}
            onAnimationComplete={() => setIsAnimating(false)}
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={previousSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="Previous slide"
          disabled={isAnimating}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="Next slide"
          disabled={isAnimating}
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex justify-center gap-3 px-4 py-2 mx-auto w-fit rounded-full bg-black/40 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setProgress(0);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all shadow-[0_0_8px_rgba(255,255,255,0.5)] ${
                  currentIndex === index
                    ? 'bg-white w-6 shadow-[0_0_12px_rgba(255,255,255,0.7)]'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar - Now at the bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
          <div
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
