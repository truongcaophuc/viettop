"use client";

import { motion } from "framer-motion";
import {
  Snowflake,
  Zap,
  Monitor,
  Flame,
  Shield,
  CloudLightning,
} from "lucide-react";
import { useState } from "react";

const problems = [
  {
    icon: Snowflake,
    text: "Hệ thống làm mát không ổn định, tiêu tốn điện, khó kiểm soát nhiệt độ.",
  },
  {
    icon: Zap,
    text: "Mất điện đột ngột, nguồn dự phòng yếu, ATS hoạt động không ổn định.",
  },
  {
    icon: Monitor,
    text: "Khó giám sát, quản lý hạ tầng trung tâm dữ liệu, hệ thống không đồng bộ.",
  },
  {
    icon: Flame,
    text: "Nguy cơ cháy nổ cao, thiếu cảnh báo sớm và chữa cháy tự động.",
  },
  {
    icon: Shield,
    text: "An ninh kém, khó kiểm soát ra vào và giám sát khu vực quan trọng.",
  },
  {
    icon: CloudLightning,
    text: "Thiết bị dễ hư hỏng do sét, tiếp địa và chống sét không đạt chuẩn.",
  },
];

export default function SemiCircleProblems() {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="py-20 flex flex-col items-center justify-center">
      <motion.h2
        className="text-3xl font-bold text-[--primary] mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Vấn đề của khách hàng
      </motion.h2>

      {/* Khung chứa nửa vòng tròn */}
      <div className="relative w-full h-[400px] flex items-end justify-center bg-gradient-to-br from-[#244556] to-[#c9e265]">
        {problems.map((item, index) => {
          const angle = (Math.PI / (problems.length - 1)) * index;
          const radius = 300;
          const x = Math.cos(Math.PI - angle) * radius;
          const y = Math.sin(Math.PI - angle) * radius;

          const Icon = item.icon;
          const isActive = active === index;

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(100% - ${y + 80}px)`,
                transform: "translate(-50%, -50%)",
              }}
              onHoverStart={() => setActive(index)} // hover là active luôn
              onClick={() => setActive(index)} // click cũng active
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                animate={{
                  backgroundColor: isActive
                    ? "rgba(56, 182, 255, 0.25)"
                    : "rgba(201, 226, 101, 0.25)",
                  borderColor: isActive ? "#38B6FF" : "var(--secondary)",
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 rounded-full border-2 flex items-center justify-center shadow-md cursor-pointer"
              >
                <Icon
                  className={`w-7 h-7 transition-colors duration-300 ${
                    isActive ? "text-[--accent]" : "text-[--primary]"
                  }`}
                />
              </motion.div>
            </motion.div>
          );
        })}

        {/* Mô tả ở giữa */}
        <motion.div
          key={active}
          className="absolute bottom-20 w-[350px] text-center bg-white shadow-xl border border-gray-200 rounded-2xl p-6 min-h-[120px] flex items-center justify-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-gray-700 text-sm md:text-base">
            {problems[active].text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
