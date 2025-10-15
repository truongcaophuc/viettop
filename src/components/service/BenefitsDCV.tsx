"use client";
import { ShieldCheck, Zap, Eye, CheckCircle2 } from "lucide-react";

export default function BenefitsDCV() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Vận hành ổn định",
      description:
        "Hệ thống hoạt động tin cậy, giảm tối đa rủi ro và downtime.",
      color: "text-secondary",
    },
    {
      icon: Zap,
      title: "Tiết kiệm chi phí",
      description:
        "Tối ưu điện năng tiêu thụ và giảm chi phí bảo trì định kỳ.",
      color: "text-accent",
    },
    {
      icon: Eye,
      title: "Giám sát 24/7",
      description:
        "Dễ dàng quản lý và theo dõi thiết bị tập trung, mọi lúc mọi nơi.",
      color: "text-primary",
    },
    {
      icon: CheckCircle2,
      title: "An toàn – đạt chuẩn",
      description:
        "Đảm bảo tiêu chuẩn quốc tế về độ an toàn, bảo mật và tin cậy.",
      color: "text-success",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-background">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Lợi ích khi lựa chọn <span className="text-secondary">DCV</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          DCV mang đến hệ thống trung tâm dữ liệu thông minh, tiết kiệm và ổn định –
          đảm bảo an toàn, hiệu quả và đạt chuẩn quốc tế cho doanh nghiệp của bạn.
        </p>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md 
                       hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex justify-center mb-5">
              <item.icon className={`${item.color} w-10 h-10 drop-shadow-sm`} />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
