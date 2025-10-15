"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function CTA() {
  return (
    <motion.section 
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-primary/5 to-secondary/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sẵn sàng nâng cấp hệ thống của bạn?
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận báo giá 
          chi tiết cho giải pháp phù hợp nhất với doanh nghiệp của bạn.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg 
                       font-semibold flex items-center gap-2 transition-all duration-300 
                       shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Liên hệ tư vấn
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
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
