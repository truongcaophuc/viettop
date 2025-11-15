// app/giai-phap/dich-vu-securityzone/page.tsx
'use client';

import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import ContactDock from "@/components/layout/ContactDock";
import BackToTopButton from "@/components/layout/BackToTopButton";

// LINK RA NGOÀI – TRANG THẬT
const externalLinks: Record<number, string> = {
  1: "https://securityzone.vn/giai-phap-ai/",
  2: "https://securityzone.vn/dich-vu-digital-marketing/",
  3: "https://securityzone.vn/giai-phap-doanh-nghiep/",
  4: "https://securityzone.vn/dich-vu-it-ha-tang/",
  5: "https://securityzone.vn/pentesting/",
  6: "https://securityzone.vn/web-hosting/",
  7: "https://securityzone.vn/khoahoc/",
  8: "https://securityzone.vn/forum/",
  9: "https://securityzone.vn/blog-goc-nhin/",
};

const services = [
  { id: 1, title: "Giải pháp AI+", image: "/images/services/Ai.jpeg", description: "Omnichannel + Chatbot AI giúp hợp nhất Facebook, Zalo, TikTok Shop và nhiều kênh khác trong một nơi duy nhất. Chatbot AI tiếng Việt hiểu ngôn ngữ tự nhiên, trả lời tức thì – không bỏ lỡ khách hàng, tăng tỷ lệ chốt đơn nhanh chóng.", color: "from-blue-500 to-cyan-500" },
  { id: 2, title: "Dịch vụ Digital Marketing +", image: "/images/services/Digital Marketing.jpeg", description: "Cung cấp Digital Marketing toàn diện, giúp doanh nghiệp tăng nhận diện thương hiệu, tiếp cận đúng khách hàng mục tiêu và tối ưu hóa doanh thu.", color: "from-pink-500 to-rose-500" },
  { id: 3, title: "Giải pháp doanh nghiệp +", image: "/images/services/Giải pháp doanh nghiệp.png", description: "Giải pháp hoạch định nguồn lực doanh nghiệp, tích hợp các bộ phận như tài chính, nhân sự, sản xuất, kho vận… vào một hệ thống duy nhất để tối ưu vận hành và ra quyết định nhanh hơn.", color: "from-purple-500 to-indigo-500" },
  { id: 4, title: "Dịch vụ Hạ tầng CNTT +", image: "/images/services/Hạ tầng CNTT.jpg", description: "Dịch vụ SI (Tích hợp hệ thống) giúp doanh nghiệp kết nối các phần mềm và hạ tầng hiện có thành một hệ thống đồng bộ, dễ quản lý. Nhờ đó, doanh nghiệp tiết kiệm chi phí, giảm rối loạn dữ liệu và làm việc hiệu quả hơn.", color: "from-teal-500 to-emerald-500" },
  { id: 5, title: "Dịch vụ An ninh mạng +", image: "/images/services/Dịch vụ an ninh mạng.jpg", description: "Thực hiện kiểm thử xâm nhập để phát hiện và khắc phục lỗ hổng bảo mật trong hệ thống của bạn.", color: "from-red-500 to-orange-500" },
  { id: 6, title: "Dịch vụ Hosting & Server +", image: "/images/services/Dịch vụ hosting server.jpg", description: "Cung cấp hạ tầng máy chủ mạnh mẽ, ổn định và bảo mật, đảm bảo website của bạn hoạt động nhanh chóng, an toàn và liên tục 24/7.", color: "from-sky-500 to-blue-600" },
  { id: 7, title: "Đào tạo & Phát triển nhân lực +", image: "/images/services/Đào tạo phát triển nhân lực.jpg", description: "Khóa học CNTT, an ninh mạng, kỹ năng mềm, đào tạo nội bộ.", color: "from-green-500 to-lime-500" },
  { id: 8, title: "Diễn đàn +", image: "/images/services/dien-dan-đi-backlink-1.jpg", description: "Diễn đàn chuyên sâu về mạng và bảo mật, nơi cộng đồng kỹ thuật trao đổi kiến thức từ lý thuyết, lab tới ticket xử lý sự cố trong các lĩnh vực như Switching/Routing, Firewall, hệ thống và server.", color: "from-violet-500 to-purple-600" },
  { id: 9, title: "Blog & Góc nhìn +", image: "/images/services/blog-la-gi.webp", description: "Tin tức công nghệ, xu hướng, bài viết chuyên sâu, case study.", color: "from-amber-500 to-orange-600" },
];

export default function ServicesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0", "rotate-0");
            entry.target.classList.remove("opacity-0", "translate-y-16");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".stagger-card").forEach((el, i) => {
      el.style.transitionDelay = `${i * 70}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ====== PHẦN 1: BANNER – NGẮN ====== */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/ai-in-hospitality.jpg"
            alt="SecurityZone.vn - Giải pháp công nghệ"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight drop-shadow-2xl">
              Các Dịch Vụ & Giải Pháp Tại{" "}
              <span className="text-cyan-400 drop-shadow-glow">SecurityZone.vn</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg mb-8">
              Chúng tôi đồng hành cùng hàng trăm doanh nghiệp với giải pháp từ hạ tầng CNTT, an ninh mạng, AI, marketing đến đào tạo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://securityzone.vn/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 text-blue-900 font-bold py-3 px-7 rounded-full hover:bg-cyan-400 transition-all transform hover:scale-105 shadow-xl text-center"
              >
                Nhận tư vấn miễn phí
              </a>
              <a
                href="https://securityzone.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white font-bold py-3 px-7 rounded-full hover:bg-white hover:text-blue-900 transition-all text-center"
              >
                Xem tất cả dịch vụ
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ====== PHẦN 2: GRID + LINK RA NGOÀI ====== */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Khám Phá Tất Cả Dịch Vụ Và Giải Pháp
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chúng tôi đồng hành cùng hàng trăm doanh nghiệp với giải pháp từ hạ tầng CNTT, tự động hóa, bảo mật, marketing đến hệ thống quản trị – giúp tối ưu vận hành và thúc đẩy tăng trưởng bền vững.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const url = externalLinks[service.id];
              return (
                <div
                  key={service.id}
                  className="stagger-card opacity-0 translate-y-16"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? '' : '-'}2deg) translateX(${index % 3 === 0 ? '8' : index % 3 === 1 ? '-4' : '12'}px) translateY(${index < 3 ? '-16' : index < 6 ? '32' : '-24'}px)`,
                  }}
                >
                  <ServiceCard service={service} externalUrl={url} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== PHẦN 3: CTA ====== */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sẵn sàng bắt đầu dự án của bạn?</h2>
            <p className="text-xl text-blue-100 mb-10">Liên hệ ngay để nhận tư vấn miễn phí và giải pháp phù hợp nhất.</p>
            <div className="space-y-6 text-lg">
              <div className="flex items-center space-x-4"><Phone className="w-6 h-6 text-cyan-400" /><span>1800 646850</span></div>
              <div className="flex items-center space-x-4"><Mail className="w-6 h-6 text-cyan-400" /><span>info@securityzone.vn</span></div>
              <div className="flex items-center space-x-4"><MapPin className="w-6 h-6 text-cyan-400" /><span>84 Nguyễn Hữu Dật, Hải Châu, Đà Nẵng</span></div>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://securityzone.vn/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 text-blue-900 font-bold py-4 px-8 rounded-full hover:bg-cyan-400 transition-all transform hover:scale-105 shadow-2xl text-center"
              >
                Gửi yêu cầu tư vấn
              </a>
              <a
                href="https://securityzone.vn/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-cyan-400 text-cyan-400 font-bold py-4 px-8 rounded-full hover:bg-cyan-400 hover:text-blue-900 transition-all text-center"
              >
                Xem case study
              </a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Nhận báo giá trong 2 phút</h3>
            <form className="space-y-6">
              <input type="text" placeholder="Họ & tên" className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:border-cyan-400 transition-all text-lg" />
              <input type="email" placeholder="Email" className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:border-cyan-400 transition-all text-lg" />
              <input type="tel" placeholder="Số điện thoại" className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:border-cyan-400 transition-all text-lg" />
              <textarea placeholder="Mô tả nhu cầu..." rows={5} className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:border-cyan-400 resize-none transition-all text-lg" />
              <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-2xl text-lg">
                Gửi yêu cầu ngay
              </button>
            </form>
          </div>
        </div>
      </section>

        <ContactDock />
        <BackToTopButton />
    </>
  );
}

// COMPONENT CARD – DÙNG <a> + target="_blank"
function ServiceCard({ service, externalUrl }: { service: typeof services[0]; externalUrl: string }) {
  return (
    <a
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full group"
    >
      <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden h-full border border-gray-100 group-hover:-translate-y-6 group-hover:rotate-1">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-2xl -z-10" />

        <div className="relative w-full h-64 overflow-hidden rounded-t-3xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-500">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
            {service.description}
          </p>
          <div className="flex items-center text-cyan-600 font-bold text-sm group-hover:translate-x-2 transition-all duration-300">
            Xem chi tiết <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </a>
    
  );
}