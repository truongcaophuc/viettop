"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Eye, CheckCircle2 } from "lucide-react";
import { useTranslation } from 'react-i18next'; // 1. Import hook
import { useMemo } from 'react'; // Import useMemo

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Faster stagger
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5, // Faster duration
      ease: [0.6, 0.05, -0.01, 0.9], // Smoother ease
    },
  },
};

export default function BenefitsDCV() {
  const { t } = useTranslation(); // 2. Get translation function

  // 3. Wrap benefits array in useMemo and use t()
  const benefits = useMemo(() => [
    {
      icon: ShieldCheck,
      key: 'card1', // Use key to reference JSON object
      color: "text-blue-500", // Use specific color from Tailwind
    },
    {
      icon: Zap,
      key: 'card2',
      color: "text-green-500", // Use specific color
    },
    {
      icon: Eye,
      key: 'card3',
      color: "text-indigo-500", // Use specific color
    },
    {
      icon: CheckCircle2,
      key: 'card4',
      color: "text-teal-500", // Use specific color
    },
  ], [t]); // Depend on t

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"> {/* Adjusted padding and bg */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-10 md:mb-14" // Adjusted margin
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-primary mb-3" // Adjusted margin
          dangerouslySetInnerHTML={{ __html: t('servicesPage.benefits.title') }} // 4. Use t() for title
        />
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"> {/* Adjusted size */}
           {/* 5. Use t() for description */}
          {t('servicesPage.benefits.description')}
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto" // Changed to lg:grid-cols-4, adjusted gap
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger earlier
      >
        {benefits.map((item, index) => (
          <motion.div
            key={item.key} // Use item.key as key
            variants={itemVariants} // Use variants for staggering
            whileHover={{
              scale: 1.04, // Slightly reduced scale
              y: -8, // Slightly reduced lift
              transition: { duration: 0.25 } // Faster hover transition
            }}
            className="bg-white border border-gray-100 rounded-xl p-6 shadow-md
                       hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center" // Centered content, adjusted styles
          >
            <motion.div
              className="flex justify-center mb-4 p-3 bg-gray-100 rounded-full" // Added background circle
              // whileHover={{ rotate: 10, scale: 1.1 }} // Optional: keep icon hover effect
              // transition={{ duration: 0.3 }}
            >
              <item.icon className={`${item.color} w-8 h-8 drop-shadow-sm`} /> {/* Adjusted icon size */}
            </motion.div>
            <h3 className="text-lg font-semibold text-primary mb-2"> {/* Adjusted margin */}
               {/* 6. Use t() for card title */}
              {t(`servicesPage.benefits.${item.key}.title`)}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow"> {/* Added flex-grow */}
               {/* 7. Use t() for card description */}
              {t(`servicesPage.benefits.${item.key}.description`)}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}