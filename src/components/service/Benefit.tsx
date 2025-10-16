"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

export default function BenefitsDCV() {
  const benefits = [
    "Vận hành ổn định, giảm thiểu downtime và rủi ro hệ thống.",
    "Tiết kiệm điện năng, tối ưu chi phí vận hành và bảo trì.",
    "Giám sát tập trung 24/7, dễ dàng kiểm soát toàn bộ thiết bị.",
    "Đảm bảo an toàn và đạt chuẩn quốc tế về bảo mật dữ liệu.",
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-20 bg-primary">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Cột hình ảnh bên trái */}
        <motion.div
          className="relative w-full md:w-1/2 h-64 md:h-72 lg:h-96 rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://t4.ftcdn.net/jpg/01/10/13/23/360_F_110132300_gN6niXPZTwIvqfq8r4xqpWCFmW3VVSh2.jpg"
            alt="DCV Data Center"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </motion.div>

        {/* Cột nội dung bên phải */}
        <motion.div
          className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Lợi ích khi lựa chọn <span className="text-secondary">DCV</span>
          </h2>
          <p className="text-white leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
            DCV mang đến giải pháp trung tâm dữ liệu thông minh, an toàn và tiết
            kiệm — giúp doanh nghiệp của bạn vận hành hiệu quả, giảm chi phí và
            đạt chuẩn quốc tế.
          </p>

          <ul className="space-y-4">
            {benefits.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={itemVariants as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-3 items-center"
              >
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
