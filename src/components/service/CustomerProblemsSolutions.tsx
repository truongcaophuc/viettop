"use client";

import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'; // 1. Import hook
import { useMemo } from 'react'; // Import useMemo
import Image from "next/image"; // Import Next.js Image

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

export default function CustomerProblemsSolutions() {
  const { t } = useTranslation(); // 2. Get translation function

  // 3. Wrap problems array in useMemo and use t()
  const problems = useMemo(() => [
    {
      text: t('servicesPage.customerProblems.item1'),
      icon: "/cool.svg", // Keep icon path
    },
    {
      text: t('servicesPage.customerProblems.item2'),
      icon: "/electric.svg",
    },
    {
      text: t('servicesPage.customerProblems.item3'),
      icon: "/monitor.svg",
    },
    {
      text: t('servicesPage.customerProblems.item4'),
      icon: "/fire.svg",
    },
    {
      text: t('servicesPage.customerProblems.item5'),
      icon: "/security.svg",
    },
    {
      text: t('servicesPage.customerProblems.item6'),
      icon: "/lightning.svg",
    },
  ], [t]); // Depend on t

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100"> {/* Adjusted padding and bg */}
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-primary mb-10 md:mb-14 text-center" // Adjusted margin and primary color
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* 4. Use t() for title */}
          {t('servicesPage.customerProblems.title')}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" // Adjusted lg columns and gap
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger slightly earlier
        >
          {problems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants} // Use variants for stagger
              whileHover={{
                scale: 1.04, // Slightly reduced scale
                y: -6,      // Slightly reduced lift
                transition: { duration: 0.25 }
              }}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300" // Adjusted radius, shadow, border
            >
              {/* Icon - Use Next/Image for optimization if icons are local */}
              <motion.div
                className="relative h-20 w-20 flex items-center justify-center rounded-full bg-secondary/10 p-3" // Adjusted size, padding, background
                // whileHover={{ rotate: 5 }} // Optional: keep icon hover effect
                // transition={{ duration: 0.3 }}
              >
                {/* Use Next Image if icons are in /public */}
                <Image
                    src={item.icon}
                    alt="" // Alt text is provided by the text below
                    width={48} // Set appropriate width
                    height={48} // Set appropriate height
                    className="text-secondary" // Color might not apply directly to SVG via className
                 />
                 {/* Or keep img if icons are external or need specific handling */}
                {/* <img src={item.icon} alt="" className="text-secondary w-12 h-12" /> */}
              </motion.div>

              {/* Nội dung */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow"> {/* Added flex-grow */}
                {/* 5. Use translated item.text */}
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}