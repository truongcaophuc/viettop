"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from 'react-i18next'; // 1. Import hook
import { useMemo } from 'react'; // Import useMemo

// Keep original structure for image paths if needed outside useMemo
const originalSteps = [
  { keySuffix: "step1", image: "/service/Thiết kế và tư vấn.jpg" },
  { keySuffix: "step2", image: "/service/Cung cấp thiết bị.jpg" },
  { keySuffix: "step3", image: "/service/Quản lí dự án.jpg" },
  { keySuffix: "step4", image: "/service/Triển khai lắp đặt.jpg" },
  { keySuffix: "step5", image: "/service/Đo kiểm cấu hình.jpg" },
  { keySuffix: "step6", image: "/service/Đào tạo và Huấn luyện.jpg" },
  { keySuffix: "step7", image: "/service/Chuyển giao.jpg" },
  { keySuffix: "step8", image: "/service/Bảo trì bảo dưỡng.jpg" },
];

export default function FishboneProcess() {
  const { t } = useTranslation(); // 2. Get translation function

  // 3. Wrap steps array generation in useMemo and use t()
  const steps = useMemo(() => originalSteps.map(item => ({
    title: t(`servicesPage.processDetailed.${item.keySuffix}.title`),
    description: t(`servicesPage.processDetailed.${item.keySuffix}.description`),
    image: item.image, // Keep image path
  })), [t]); // Depend on t

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"> {/* Adjusted padding */}
      <motion.h2 // Added motion
        className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 md:mb-16" // Adjusted size/margin
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* 4. Use t() for title */}
        {t('servicesPage.processDetailed.title')}
      </motion.h2>

      <div className="flex flex-col gap-12 md:gap-20 max-w-5xl mx-auto"> {/* Reduced max-width, adjusted gap */}
        {steps.map((step, index) => (
          // Pass translated step data to StepItem
          <StepItem key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}

// StepItem component receives translated step data via props
function StepItem({
  step,
  index,
}: {
  step: { title: string; description: string; image: string };
  index: number;
}) {
  const { t } = useTranslation(); // Get t function inside StepItem as well
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${ // Increased gap
        !isEven ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }} // Added slight delay
      viewport={{ once: true, amount: 0.3 }} // Trigger earlier
    >
      {/* Cột hình ảnh */}
      <div className="w-full md:w-1/2">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg group"> {/* Use aspect ratio, adjusted radius */}
          <Image
            src={step.image}
            alt={step.title} // 6. Use translated title for alt
            fill
            sizes="(max-width: 768px) 100vw, 50vw" // Added sizes
            className="object-cover transition-transform duration-500 group-hover:scale-105" // Adjusted scale effect
          />
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>

      {/* Cột mô tả */}
      <div className={`w-full md:w-1/2 space-y-3 text-center md:text-left ${!isEven ? 'md:text-right' : ''}`}> {/* Adjust text alignment based on side */}
      <h3 className="text-xl md:text-2xl font-bold text-primary">
  {t('servicesPage.processDetailed.stepPrefix', { stepNum: index + 1 })}
  {step.title}
</h3>

        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {step.description} {/* Use translated description from props */}
        </p>
      </div>
    </motion.div>
  );
}