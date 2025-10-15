"use client";

import { motion } from "framer-motion";
import { Wind, Zap, MonitorCog, Flame, Camera, Network } from "lucide-react";
import ServiceCard from "@/components/service/ServiceCard";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.8 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function ServiceList() {
  const services = [
    {
      icon: Wind,
      title: "HVAC SYSTEM",
      description:
        "Hệ thống điều hòa không khí. Đảm bảo làm mát chính xác, duy trì môi trường ổn định cho trung tâm dữ liệu và thiết bị công nghệ. ",
      features: [
        "SmartCool i-drive Inverter Compressor",
        "AireWall ONE Fan Array",
        "PAC / CRAC / Chiller Airedale",
        "Kiểm soát nhiệt độ và độ ẩm chính xác",
        "Tiết kiệm năng lượng tối ưu",
      ],
      url: "https://tse3.mm.bing.net/th/id/OIP.RRLOBRFBrkBVO44KuMKvCgHaC9?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      icon: Zap,
      title: "UPS & POWER DISTRIBUTION SYSTEM",
      description:
        "Nguồn điện liên tục và hệ thống phân phối điện. Cung cấp nguồn điện ổn định, dự phòng kịp thời để tránh gián đoạn hoạt động.",
      features: [
        "UPS công suất cao",
        "Hệ thống ATS tự động",
        "Phân phối điện thông minh",
        "Monitoring & Alert System",
        "Bảo trì định kỳ chuyên nghiệp",
      ],
      url: "https://web.tradekorea.com/product/286/1212286/UPS%20_%20POWER%20SUPPLY_2.gif",
    },
    {
      icon: MonitorCog,
      title: "BMS/DCIM SYSTEM",
      description:
        "Hệ thống quản lý tòa nhà và trung tâm dữ liệu. Giúp giám sát, điều khiển và tối ưu hiệu suất vận hành của toàn bộ hạ tầng.",
      features: [
        "BMS tích hợp đa giao thức",
        "DCIM - Data Center Infrastructure Management",
        "Giao thức Modbus / SNMP / BACnet",
        "Dashboard giám sát real-time",
        "Tự động hóa và tối ưu hóa",
      ],
      url: "https://www.deltapowersolutions.com/media/images/other/technial-article-understanding-the-role-of-DCIM-in-modern-data-centers.jpg",
    },
    {
      icon: Flame,
      title: "FIRE ALARM & FIRE FIGHTING SYSTEM",
      description:
        "Hệ thống phòng cháy chữa cháy và an toàn. Phát hiện sớm nguy cơ cháy nổ, tự động kích hoạt biện pháp bảo vệ an toàn cho người và thiết bị.",
      features: [
        "Báo cháy thông minh",
        "Chữa cháy tự động",
        "Cảm biến khói sớm VESDA",
        "Giám sát nhiệt độ môi trường",
        "Tích hợp BMS",
      ],
      url: "https://th.bing.com/th/id/OIP.oKSeQoMG8s1FPVuzDq5c3AHaGI?w=203&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    },
    {
      icon: Camera,
      title: "ACCESS CONTROL & CCTV SYSTEM",
      description:
        "Giám sát và kiểm soát ra vào. Tăng cường an ninh, quản lý truy cập hiệu quả vào các khu vực quan trọng.",
      features: [
        "Camera giám sát HD/4K",
        "Hệ thống kiểm soát ra vào",
        "Nhận diện khuôn mặt",
        "Lưu trữ đám mây",
        "Cảnh báo thời gian thực",
      ],
      url: "https://www.flexi.co.th/wp-content/uploads/2023/01/shutterstock_272833616-1024x683.webp",
    },
    {
      icon: Network,
      title: "EARTHING & LIGHTNING PROTECTION SYSTEM",
      description:
        "Tiếp địa và chống sét lan truyền. Bảo vệ thiết bị khỏi sét đánh và xung điện đột biến, đảm bảo an toàn cho toàn hệ thống.",
      features: [
        "Tiếp địa công nghiệp",
        "Chống sét lan truyền",
        "SPD - Surge Protection Device",
        "Đo kiểm định kỹ thuật",
        "Tuân thủ tiêu chuẩn quốc tế",
      ],
      url: "https://tse3.mm.bing.net/th/id/OIP.ZgIW842BLtZEYCMEaFfqFQHaEy?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  return (
    <section className="py-20 px-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Giải pháp chuyên nghiệp
          </h2>
          <p className="text-gray-600 text-lg">
            6 nhóm giải pháp kỹ thuật hàng đầu cho công trình của bạn
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants as any}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
