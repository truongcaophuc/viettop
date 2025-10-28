"use client";

import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'; // 1. Import hook

export default function Hero() {
  const { t } = useTranslation(); // 2. Get translation function

  return (
    // Consider adjusting background image based on language if needed
    <section className="bg-primary text-white py-20 md:py-28 lg:py-32 bg-[url('/service/service.png')] bg-no-repeat bg-center bg-cover relative"> {/* Adjusted padding, added relative */}
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="container mx-auto px-4 relative z-10"> {/* Added relative z-10 */}
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6" // Adjusted spacing
          initial={{ opacity: 0, y: 50 }}
          // Use whileInView for scroll-triggered animation
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% visible
          transition={{ duration: 0.7, ease: "easeOut" }} // Slightly faster
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary drop-shadow-md" // Adjusted size, added shadow
            // Sub-variants for staggering effect (optional but nice)
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }} // Animate driven by parent's whileInView
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} // Adjusted delay
          >
             {/* 3. Use t() for title */}
            {t('servicesPage.hero.title')}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200" // Adjusted color
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} // Adjusted delay
          >
             {/* 4. Use t() for subtitle */}
            {t('servicesPage.hero.subtitle')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}