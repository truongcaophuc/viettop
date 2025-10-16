"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-primary text-white py-20 bg-[url('/service/service.png')] bg-no-repeat bg-center bg-cover">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Dịch vụ & Giải pháp
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Cung cấp giải pháp tổng thể cho hạ tầng kỹ thuật công trình, từ tư
            vấn thiết kế đến thi công và bảo trì
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
