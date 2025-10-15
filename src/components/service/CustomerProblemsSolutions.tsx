"use client";

import { motion } from "framer-motion";

const problems = [
  {
    text: "Hệ thống làm mát không ổn định, tiêu tốn điện, khó kiểm soát nhiệt độ.",
    icon: "/cool.svg",
  },
  {
    text: "Mất điện đột ngột, nguồn dự phòng yếu, ATS hoạt động không ổn định.",
    icon: "/electric.svg",
  },
  {
    text: "Khó giám sát, quản lý hạ tầng trung tâm dữ liệu, hệ thống không đồng bộ.",
    icon: "/monitor.svg",
  },
  {
    text: "Nguy cơ cháy nổ cao, thiếu cảnh báo sớm và chữa cháy tự động.",
    icon: "/fire.svg", // dùng thay Fire
  },
  {
    text: "An ninh kém, khó kiểm soát ra vào và giám sát khu vực quan trọng.",
    icon: "/security.svg",
  },
  {
    text: "Thiết bị dễ hư hỏng do sét, tiếp địa và chống sét không đạt chuẩn.",
    icon: "/lightning.svg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function CustomerProblemsSolutions() {
  return (
    <section className="py-20 px-6 md:px-20 bg-[--background]">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-[--primary] mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Vấn đề của khách hàng
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {problems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants as any}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Icon */}
              <motion.div 
                className="h-50 flex items-center justify-center rounded-full bg-[--secondary]/20"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img src={item.icon} alt={item.text} className="text-[--secondary] w-full h-full" />
              </motion.div>

              {/* Nội dung */}
              <p className="text-gray-700 text-sm md:text-base">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
