"use client";

import { useState, useEffect, useMemo, useCallback } from "react"; // Import useMemo
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from 'react-i18next'; // 1. Import hook

// Keep original items structure for image paths if needed outside useMemo
const originalItems = [
  { image: "/service/hệ thống điều hòa.jpg", keySuffix: "item1" },
  { image: "/service/Mất điện đột ngột.jpg", keySuffix: "item2" },
  { image: "/service/Khó giám sát.jpg", keySuffix: "item3" },
  { image: "/service/hệ thống chống cháy.jpg", keySuffix: "item4" },
  { image: "/service/giám sát và kiểm soát ra vào.jpg", keySuffix: "item5" },
  { image: "/service/tiếp địa và chống sét.jpg", keySuffix: "item6" },
];

export default function ProblemV2() {
  const { t } = useTranslation(); // 2. Get translation function
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // 3. Wrap items array generation in useMemo and use t()
  const items = useMemo(() => originalItems.map(item => ({
      image: item.image, // Keep image path
      text: t(`servicesPage.problems.${item.keySuffix}`) // Use key suffix
  })), [t]); // Depend on t

  // Effect to check mobile status (remains the same)
  useEffect(() => {
    const checkMobile = () => {
      // Ensure window is defined (for SSR safety, though less critical with "use client")
      if (typeof window !== 'undefined') {
          setIsMobile(window.innerWidth < 768);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Slider navigation functions (remain the same)
  const nextSlide = useCallback(() => setCurrentIndex((prev) => (prev + 1) % items.length), [items.length]); // Add items.length dependency
  const prevSlide = useCallback(() => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length), [items.length]); // Add items.length dependency
  const goToSlide = (index: number) => setCurrentIndex(index);

  // Auto slide effect (remains the same, but add nextSlide dependency)
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]); // Add nextSlide dependency

  // Get visible slides (remains the same, but add items.length dependency)
  const getVisibleSlides = useCallback(() => {
    const left = (currentIndex - 1 + items.length) % items.length;
    const right = (currentIndex + 1) % items.length;
    return [left, currentIndex, right];
  }, [currentIndex, items.length]); // Add dependencies


  return (
    <section className="py-16 md:py-20 bg-gray-100 overflow-hidden px-4 sm:px-6 lg:px-8"> {/* Adjusted padding */}
      <motion.h2 // Added motion
        className="text-3xl font-bold mb-10 md:mb-14 text-center text-primary" // Adjusted margin
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* 4. Use t() for title */}
        {t('servicesPage.problems.title')}
      </motion.h2>

      <div className="relative flex items-center justify-center max-w-5xl mx-auto">
        {/* Navigation Buttons (Improved styling and accessibility) */}
        <button
          onClick={prevSlide}
          className="absolute left-0 sm:left-[-10px] md:left-[-20px] z-20 bg-white shadow-md hover:shadow-lg p-2 md:p-3 rounded-full text-gray-600 hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50" // Adjusted positioning, added focus styles
          aria-label={t('common.previousSlide', 'Previous Slide')} // Add translated aria-label
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center w-full h-[280px] sm:h-[320px] md:h-[380px]"> {/* Adjusted height */}
          <AnimatePresence initial={false} mode="popLayout"> {/* Added mode */}
            {getVisibleSlides().map((index, i) => {
              const item = items[index];
              if (!item) return null; // Add check in case items array isn't ready

              // Define positions outside
              const positions = [
                { x: "-60%", scale: 0.7, opacity: 0.4, zIndex: 5 }, // Use percentages for better responsiveness
                { x: "0%", scale: 1, opacity: 1, zIndex: 10 },
                { x: "60%", scale: 0.7, opacity: 0.4, zIndex: 5 },
              ];
              const mobilePositions = [
                { x: "-55%", scale: 0.6, opacity: 0.3, zIndex: 5 },
                { x: "0%", scale: 1, opacity: 1, zIndex: 10 },
                { x: "55%", scale: 0.6, opacity: 0.3, zIndex: 5 },
              ];

              // Determine current style based on screen size (only on client)
              const currentPositions = isMobile ? mobilePositions : positions;
              const { x, scale, opacity, zIndex } = currentPositions[i];

              return (
                <motion.div
                  key={index} // Use index from getVisibleSlides as key for AnimatePresence
                  className="absolute rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer" // Adjusted radius, added cursor
                  style={{
                      width: isMobile ? '75%' : '55%', // Use percentage width
                      maxWidth: isMobile ? '280px' : '400px', // Max width
                      aspectRatio: '4/3', // Maintain aspect ratio
                      zIndex
                  }}
                  initial={{ opacity: 0, scale: 0.8 }} // Start smaller
                  animate={{ x, scale, opacity, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }} // Smoother ease
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeIn" } }} // Add exit animation
                  onClick={() => goToSlide(index)} // Go to slide on click
                >
                  <Image
                    // Use encodeURI only if image paths might contain special chars
                    // src={encodeURI(item.image)}
                    src={item.image}
                    alt={item.text} // 5. Use translated text for alt
                    fill
                    sizes="(max-width: 768px) 75vw, 55vw" // Add sizes prop
                    className="object-cover"
                    priority={i === 1} // Prioritize loading center image
                  />
                  {/* Caption */}
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent p-3 md:p-4 text-white text-center">
                    <p className="text-xs md:text-sm font-medium line-clamp-2"> {/* Added line-clamp */}
                       {/* 5. Use translated item.text */}
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 sm:right-[-10px] md:right-[-20px] z-20 bg-white shadow-md hover:shadow-lg p-2 md:p-3 rounded-full text-gray-600 hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50" // Adjusted positioning, added focus styles
           aria-label={t('common.nextSlide', 'Next Slide')} // Add translated aria-label
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2"> {/* Increased margin top */}
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out ${ // Adjusted size
              index === currentIndex
                ? "bg-primary scale-125" // Scale up active dot
                : "bg-gray-300 hover:bg-gray-400"
            }`}
             aria-label={`${t('common.goToSlide', 'Go to slide')} ${index + 1}`} // Add translated aria-label
          />
        ))}
      </div>
    </section>
  );
}

// Add common translations to your JSON files if they don't exist:
// vi.json:
// {
//   "common": {
//     "previousSlide": "Slide trước",
//     "nextSlide": "Slide tiếp theo",
//     "goToSlide": "Đi đến slide"
//   }
// }
// en.json:
// {
//   "common": {
//     "previousSlide": "Previous Slide",
//     "nextSlide": "Next Slide",
//     "goToSlide": "Go to slide"
//   }
// }