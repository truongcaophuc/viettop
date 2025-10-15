"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Thiết kế và tư vấn",
    description:
      "Chúng tôi khảo sát thực tế, phân tích nhu cầu, lên bản vẽ và đề xuất giải pháp tối ưu nhất cho hạ tầng của bạn.",
    image: "/Thiết kế và tư vấn.jpg",
  },
  {
    title: "Cung cấp thiết bị",
    description:
      "Đảm bảo cung cấp thiết bị chính hãng, đồng bộ, đạt tiêu chuẩn kỹ thuật và hiệu năng cao.",
    image: "/Cung cấp thiết bị.jpg",
  },
  {
    title: "Quản lí dự án",
    description:
      "Đội ngũ kỹ sư giám sát tiến độ, chất lượng, phối hợp chặt chẽ giữa các bên để đảm bảo đúng kế hoạch.",
    image: "/Quản lí dự án.jpg",
  },
  {
    title: "Triển khai lắp đặt",
    description:
      "Thực hiện lắp đặt đúng kỹ thuật, an toàn, đảm bảo thẩm mỹ và hiệu suất vận hành tối ưu.",
    image: "/Triển khai lắp đặt.jpg",
  },
  {
    title: "Đo kiểm & cấu hình",
    description:
      "Tiến hành kiểm tra, cân chỉnh và cấu hình chi tiết để hệ thống hoạt động ổn định và chính xác.",
    image: "/Đo kiểm cấu hình.jpg",
  },
  {
    title: "Đào tạo & huấn luyện",
    description:
      "Hướng dẫn đội ngũ kỹ thuật của khách hàng vận hành, giám sát và xử lý tình huống thực tế.",
    image: "/Đào tạo và Huấn luyện.jpg",
  },
  {
    title: "Chuyển giao",
    description:
      "Bàn giao tài liệu, bản vẽ, sơ đồ hệ thống và chứng nhận nghiệm thu đầy đủ.",
    image: "/Chuyển giao.jpg",
  },
  {
    title: "Bảo trì & bảo dưỡng",
    description:
      "Cung cấp dịch vụ bảo trì định kỳ, khắc phục sự cố nhanh chóng để duy trì hệ thống luôn ổn định.",
    image: "/Bảo trì bảo dưỡng.jpg",
  },
];

export default function FishboneProcess() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-16">
        Quy trình 8 bước
      </h2>

      <div className="flex flex-col gap-24 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <StepItem key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}

function StepItem({
  step,
  index,
}: {
  step: { title: string; description: string; image: string };
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center gap-10 ${
        !isEven ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Cột hình ảnh */}
      <div className="w-full md:w-1/2">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>

      {/* Cột mô tả */}
      <div className="w-full md:w-1/2 space-y-3">
        <h3 className="text-2xl font-bold text-primary">
          Bước {index + 1}: {step.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}
