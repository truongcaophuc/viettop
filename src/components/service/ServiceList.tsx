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
      url:"https://tse3.mm.bing.net/th/id/OIP.RRLOBRFBrkBVO44KuMKvCgHaC9?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
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
      url:"https://web.tradekorea.com/product/286/1212286/UPS%20_%20POWER%20SUPPLY_2.gif"
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
      url:"https://www.deltapowersolutions.com/media/images/other/technial-article-understanding-the-role-of-DCIM-in-modern-data-centers.jpg"
    },
    {
      icon: Flame,
      title: "Fire & Safety",
      description:
        "Hệ thống phòng cháy chữa cháy tự động, báo động sớm và giám sát môi trường an toàn",
      features: [
        "Báo cháy thông minh",
        "Chữa cháy tự động",
        "Cảm biến khói sớm VESDA",
        "Giám sát nhiệt độ môi trường",
        "Tích hợp BMS",
      ],
      url:"https://th.bing.com/th/id/OIP.oKSeQoMG8s1FPVuzDq5c3AHaGI?w=203&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3"
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
      url:"https://www.flexi.co.th/wp-content/uploads/2023/01/shutterstock_272833616-1024x683.webp"
    },
    {
      icon: Network,
      title: "Grounding & Surge Protection",
      description:
        "Hệ thống tiếp địa công nghiệp và chống sét lan truyền, bảo vệ thiết bị và con người",
      features: [
        "Tiếp địa công nghiệp",
        "Chống sét lan truyền",
        "SPD - Surge Protection Device",
        "Đo kiểm định kỹ thuật",
        "Tuân thủ tiêu chuẩn quốc tế",
      ],
      url:"https://tse3.mm.bing.net/th/id/OIP.ZgIW842BLtZEYCMEaFfqFQHaEy?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
  ];

  return (
    <section className="py-20 px-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Dịch vụ chuyên nghiệp
          </h2>
          <p className="text-gray-600 text-lg">
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
