"use client";

import { ChevronRight } from "lucide-react";
import { useTranslation } from 'react-i18next'; // 1. Import hook
import { useMemo } from 'react'; // Import useMemo
import { motion } from "framer-motion"; // Import motion for animations

export default function Application() {
  const { t } = useTranslation(); // 2. Get translation function

  // 3. Wrap solutions array in useMemo and use t()
  const solutions = useMemo(() => [
    {
      key: 'card1', // Use a key to reference the JSON object
      applications: [
        t('servicesPage.applications.card1.item1'),
        t('servicesPage.applications.card1.item2'),
        t('servicesPage.applications.card1.item3'),
      ],
    },
    {
      key: 'card2',
      applications: [
        t('servicesPage.applications.card2.item1'),
        t('servicesPage.applications.card2.item2'),
        t('servicesPage.applications.card2.item3'),
      ],
    },
    {
      key: 'card3',
      applications: [
        t('servicesPage.applications.card3.item1'),
        t('servicesPage.applications.card3.item2'),
        t('servicesPage.applications.card3.item3'),
      ],
    },
  ], [t]); // Depend on t

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"> {/* Adjusted padding */}
      <div className="max-w-6xl mx-auto">
        {/* Tiêu đề */}
        <motion.div // Added motion
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14" // Adjusted margin
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3"> {/* Adjusted size and margin */}
             {/* 4. Use t() for title */}
            {t('servicesPage.applications.title')}
          </h2>
          <p className="text-base md:text-lg text-gray-600">
             {/* 5. Use t() for subtitle */}
            {t('servicesPage.applications.subtitle')}
          </p>
        </motion.div>

        {/* Danh sách ứng dụng */}
        <motion.div // Added motion for staggering children
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" // Adjusted gap
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation earlier
          transition={{ staggerChildren: 0.15 }} // Stagger animation
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.key}
              className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col" // Adjusted padding, radius, shadow, added flex
              variants={{ // Variants for staggering
                 hidden: { opacity: 0, y: 50 },
                 visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              whileHover={{ scale: 1.03 }} // Added subtle scale on hover
            >
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3"> {/* Adjusted size/margin */}
                 {/* 6. Use t() for card title */}
                {t(`servicesPage.applications.${solution.key}.title`)}
              </h3>

              <p className="text-gray-600 mb-5 leading-relaxed text-sm flex-grow"> {/* Adjusted size/margin, added flex-grow */}
                 {/* 7. Use t() for card description */}
                {t(`servicesPage.applications.${solution.key}.description`)}
              </p>

              <div className="space-y-2 mt-auto"> {/* Added mt-auto to push items down */}
                {solution.applications.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-accent flex-shrink-0" />
                    {/* App text is already translated from the array */}
                    <span className="text-primary font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}