"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function CTA() {
  return (
    <motion.section 
      className="py-12 md:py-20 px-4 md:px-6 lg:px-20 bg-gradient-to-br from-primary/5 to-secondary/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sẵn sàng nâng cấp hệ thống của bạn?
        </motion.h2>
        
        <motion.p 
          className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận báo giá 
          chi tiết cho giải pháp phù hợp nhất với doanh nghiệp của bạn.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button 
            className="bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm md:text-base w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Liên hệ tư vấn
          </motion.button>
          
          <motion.button 
            className="border-2 border-primary text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-sm md:text-base w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Xem báo giá
          </motion.button>

          {/* <motion.button 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white 
                       px-8 py-4 rounded-lg font-semibold flex items-center gap-2 
                       transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "var(--color-primary)",
              color: "white"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Download className="w-5 h-5" />
            </motion.div>
            Tải hồ sơ năng lực
          </motion.button> */}
        </motion.div>
      </div>
    </motion.section>
  );
}
