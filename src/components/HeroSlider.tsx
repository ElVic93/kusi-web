
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_IMAGES = [
  '/images/hero/hero-alianza-crowd.jpeg',
  '/images/hero/hero-universitario-friends.jpg',
  '/images/hero/hero-universitario-family.jpeg',
  '/images/hero/hero-stadium-experience.jpeg'
];

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={HERO_IMAGES[currentIndex]}
            alt={`Hero background ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>

      {/* Indicadores (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? 'bg-white w-6' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
