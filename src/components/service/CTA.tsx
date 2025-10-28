"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useTranslation } from 'react-i18next';
import Link from 'next/link'; // Keep Link import

export default function CTA() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-white to-secondary/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* ... Title and Description ... */}
         <motion.h2
          className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {t('servicesPage.cta.title')}
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {t('servicesPage.cta.description')}
        </motion.p>


        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {/* --- Updated Link Usage --- */}
          <Link href="/lien-he" passHref> {/* Keep passHref for motion.a */}
            <motion.a // motion.a is the direct child
              className="inline-block bg-primary text-white px-7 py-3 md:px-8 md:py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg text-sm md:text-base w-full sm:w-auto cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('servicesPage.cta.buttonContact')}
            </motion.a>
          </Link>

          <Link href="/bao-gia" passHref> {/* Keep passHref */}
            <motion.a
              className="inline-block border-2 border-primary text-primary px-7 py-3 md:px-8 md:py-3.5 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-sm md:text-base w-full sm:w-auto cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('servicesPage.cta.buttonQuote')}
            </motion.a>
          </Link>

          {/* Optional Third Button (Updated) */}
          {/*
          <Link href="/path/to/profile.pdf" target="_blank" passHref>
            <motion.a
              className="inline-flex items-center gap-2 border-2 border-gray-400 text-gray-600 px-7 py-3 md:px-8 md:py-3.5 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-500 hover:text-gray-800 transition-all duration-300 text-sm md:text-base w-full sm:w-auto cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              {t('servicesPage.cta.buttonProfile')}
            </motion.a>
          </Link>
          */}
        </motion.div>
      </div>
    </motion.section>
  );
}