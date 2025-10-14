import { Wind, Zap, MonitorCog, Flame, Camera, Network } from "lucide-react";
import ServiceCard from "@/components/service/ServiceCard";
import { Button } from "@/components/ui/button";
export default function ServiceList() {
  const services = [
    {
      icon: Wind,
      title: "HVAC - Làm lạnh chính xác",
      description:
        "Hệ thống điều hòa không khí chuyên dụng cho Data Center, phòng máy chủ và môi trường yêu cầu độ chính xác cao",
      features: [
        "SmartCool i-drive Inverter Compressor",
        "AireWall ONE Fan Array",
        "PAC / CRAC / Chiller Airedale",
        "Kiểm soát nhiệt độ và độ ẩm chính xác",
        "Tiết kiệm năng lượng tối ưu",
      ],
    },
    {
      icon: Zap,
      title: "UPS & Power Supply",
      description:
        "Giải pháp nguồn điện dự phòng liên tục, đảm bảo hoạt động không gián đoạn cho hệ thống quan trọng",
      features: [
        "UPS công suất cao",
        "Hệ thống ATS tự động",
        "Phân phối điện thông minh",
        "Monitoring & Alert System",
        "Bảo trì định kỳ chuyên nghiệp",
      ],
    },
    {
      icon: MonitorCog,
      title: "BMS & DCIM",
      description:
        "Hệ thống quản lý tòa nhà tích hợp và quản lý hạ tầng trung tâm dữ liệu toàn diện",
      features: [
        "BMS tích hợp đa giao thức",
        "DCIM - Data Center Infrastructure Management",
        "Giao thức Modbus / SNMP / BACnet",
        "Dashboard giám sát real-time",
        "Tự động hóa và tối ưu hóa",
      ],
    },
    {
      icon: Flame,
      title: "PCCC & An toàn",
      description:
        "Hệ thống phòng cháy chữa cháy tự động, báo động sớm và giám sát môi trường an toàn",
      features: [
        "Báo cháy thông minh",
        "Chữa cháy tự động",
        "Cảm biến khói sớm VESDA",
        "Giám sát nhiệt độ môi trường",
        "Tích hợp BMS",
      ],
    },
    {
      icon: Camera,
      title: "CCTV & Access Control",
      description:
        "Hệ thống giám sát an ninh và kiểm soát truy cập hiện đại cho tòa nhà và khu vực nhạy cảm",
      features: [
        "Camera giám sát HD/4K",
        "Hệ thống kiểm soát ra vào",
        "Nhận diện khuôn mặt",
        "Lưu trữ đám mây",
        "Cảnh báo thời gian thực",
      ],
    },
    {
      icon: Network,
      title: "Tiếp địa & Chống sét",
      description:
        "Hệ thống tiếp địa công nghiệp và chống sét lan truyền, bảo vệ thiết bị và con người",
      features: [
        "Tiếp địa công nghiệp",
        "Chống sét lan truyền",
        "SPD - Surge Protection Device",
        "Đo kiểm định kỹ thuật",
        "Tuân thủ tiêu chuẩn quốc tế",
      ],
    },
  ];

  return (
    <section className="py-20 px-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Dịch vụ chuyên nghiệp
          </h2>
          <p className="text-muted-foreground text-lg">
            6 nhóm giải pháp kỹ thuật hàng đầu cho công trình của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
