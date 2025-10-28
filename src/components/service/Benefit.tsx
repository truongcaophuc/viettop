"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image"; // Import Next.js Image
import { useTranslation } from 'react-i18next'; // 1. Import hook
import { useMemo } from 'react'; // Import useMemo

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15, // Stagger animation
      ease: "easeOut",
    },
  }),
};

export default function BenefitsDCV() {
  const { t } = useTranslation(); // 2. Get translation function

  // 3. Wrap benefits array in useMemo and use t()
  const benefits = useMemo(() => [
    t('servicesPage.benefits.item1'),
    t('servicesPage.benefits.item2'),
    t('servicesPage.benefits.item3'),
    t('servicesPage.benefits.item4'),
  ], [t]); // Depend on t

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary"> {/* Adjusted padding */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16"> {/* Adjusted gap */}
        {/* Cột hình ảnh bên trái */}
        <motion.div
          className="relative w-full md:w-5/12 h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg" // Adjusted width, radius
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // Trigger animation earlier
        >
           {/* Use Next.js Image component for optimization */}
          <Image
            src="https://t4.ftcdn.net/jpg/01/10/13/23/360_F_110132300_gN6niXPZTwIvqfq8r4xqpWCFmW3VVSh2.jpg" // Replace with a higher-res image if possible
            alt={t('servicesPage.benefits.imageAlt')} // 4. Use t() for alt text
            fill // Use fill layout
            sizes="(max-width: 768px) 100vw, 50vw" // Add sizes prop
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> {/* Darker gradient */}
        </motion.div>

        {/* Cột nội dung bên phải */}
        <motion.div
          className="w-full md:w-7/12 space-y-4 md:space-y-6 text-center md:text-left" // Adjusted width
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} // Added slight delay
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            dangerouslySetInnerHTML={{ __html: t('servicesPage.benefits.title') }} // 5. Use t() and dangerouslySetInnerHTML for title
          />
          <p className="text-gray-200 leading-relaxed mb-6 md:mb-8 text-base"> {/* Adjusted color/size */}
             {/* 6. Use t() for description */}
            {t('servicesPage.benefits.description')}
          </p>

          <ul className="space-y-3"> {/* Reduced spacing slightly */}
            {benefits.map((item, i) => (
              <motion.li
                key={i}
                custom={i} // Pass index for stagger delay
                variants={itemVariants} // Use defined variants
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }} // Trigger when half visible
                className="flex gap-3 items-start md:items-center text-left" // Align left, align items start on small screens
              >
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-400 flex-shrink-0 mt-0.5 md:mt-0" /> {/* Adjusted color */}
                 {/* 7. Use item (already translated) */}
                <span className="text-gray-100 text-sm md:text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}