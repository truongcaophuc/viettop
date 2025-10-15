"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cpu,
  Package,
  Monitor,
  Settings,
  CheckCircle,
  BookOpen,
  ArrowRight,
  RefreshCcw,
} from "lucide-react";

const steps = [
  { title: "Thiết kế và tư vấn", icon: Cpu },
  { title: "Cung cấp thiết bị", icon: Package },
  { title: "Quản lí dự án", icon: Monitor },
  { title: "Triển khai lắp đặt", icon: Settings },
  { title: "Đo kiểm cấu hình", icon: CheckCircle },
  { title: "Đào tạo và huấn luyện", icon: BookOpen },
  { title: "Chuyển giao", icon: ArrowRight },
  { title: "Bảo trì & bảo dưỡng", icon: RefreshCcw },
];

export default function FishboneProcess() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-16">
        Quy trình 8 bước
      </h2>

      <div className="relative max-w-6xl mx-auto flex flex-col items-center">
        {/* Trục giữa */}
        <div className="absolute top-0 bottom-0 w-1 bg-gray-300 left-1/2 -translate-x-1/2"></div>

        <div className="flex flex-col gap-16 w-[70%] relative">
          {steps.map((step, index) => (
            <FishboneStep
              key={index}
              step={step}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FishboneStep({
  step,
  index,
  isLeft,
}: {
  step: any;
  index: number;
  isLeft: boolean;
}) {
  console.log("is left", isLeft);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const animation = useAnimation();

  if (inView) {
    animation.start({ opacity: 1, x: 0 });
  }

  const connectorLength = 80; // độ dài connector line từ trục tới cạnh card

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={animation}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex w-full items-center"
    >
      {/* Connector line */}
      <div
        className={`absolute top-1/2 h-1 bg-gradient-to-r ${
          isLeft ? "from-blue-400 to-blue-200 left-1/2" : "from-blue-400 to-blue-200 right-1/2"
        }`}
        style={{
          width: `${connectorLength}px`,
          transform: "translateY(-50%)",
          [isLeft ? "left" : "right"]: "50%",
        }}
      ></div>

      {/* Card */}
      <div
        className={`flex items-center gap-4 p-5 rounded-2xl shadow-md border border-gray-200 w-80 bg-white ${
          isLeft ? "ml-auto justify-start text-right" : "mr-auto justify-start text-right"
        }`}
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
          <step.icon className="text-blue-600 w-6 h-6" />
        </div>
        <p className="text-gray-700 font-medium">{step.title}</p>
      </div>

      {/* Số bước tại trục */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-secondary border-4 text-primary flex items-center justify-center font-bold">
        {index + 1}
      </div>
    </motion.div>
  );
}
