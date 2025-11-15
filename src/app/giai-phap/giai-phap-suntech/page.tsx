"use client";
import BackToTopButton from "@/components/layout/BackToTopButton";
import ContactDock from "@/components/layout/ContactDock";
import Image from "next/image";
import { useEffect } from "react";

const ServicePage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, index * 120);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-12");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

  const getServiceDescription = (id: number) => {
  const desc = {
    1: "Hội trường, phòng hội nghị trực tuyến là một không gian rộng có thể chứa được hàng trăm người...",
    2: "Phòng phát sóng, đài truyền thanh/truyền hình là một môi trường đặc biệt, với nhiều trang thiết bị hiện đại liên kết chặt chẽ với nhau để có thể đưa ra các chương trình truyền hình có chất lượng hình ảnh tuyệt vời...",
    3: "Phòng điều khiển trung tâm là nơi tập hợp các máy tính/server được kết nối mạng LAN với nhau, và được nối đến các bộ điều khiển, các thiết bị điều khiển của nhà máy qua các đường truyền truyền thông...",
    4: "Studio ảo là một dạng studio truyền hình với màn hình nền có thể điều khiển theo thời gian thực...",
    5: "Màn hình LED đang dần trở thành thiết bị không thể thiếu trong các sự kiện thể thao...",
    6: "Màn hình LED di động thường được sử dụng cho các sân khấu và sự kiện tổ chức ngoài trời...",
  };
  return desc[id as keyof typeof desc] || "Dịch vụ chuyên sâu, tùy chỉnh theo nhu cầu.";
};
  const services = [
  {
    id: 1,
    title: "HỘI TRƯỜNG, PHÒNG HỘI NGHỊ TRỰC TUYẾN",
    img: "https://suntechvn.vn/wp-content/uploads/2023/01/man-hinh-led-hoi-truong-1024x768.jpg",
    href: "https://suntechvn.vn/giai-phap-cho-phong-hoi-truong-hoi-nghi/",
    slug: "phong-hoi-truong-hoi-nghi",
    description: "Giải pháp màn hình LED hiện đại cho hội nghị trực tuyến, hội thảo chuyên nghiệp.",
  },
  {
    id: 2,
    title: "PHÒNG THU, ĐÀI TRUYỀN HÌNH",
    img: "https://suntechvn.vn/wp-content/uploads/2023/01/dai-truyen-hinh-bac-giang-1024x768.jpg",
    href: "https://suntechvn.vn/giai-phap-phong-thu-hinh-dai-truyen-hinh/",
    slug: "phong-thu-dai-truyen-hinh",
    description: "Hệ thống hiển thị chất lượng cao cho phòng thu, phát sóng truyền hình.",
  },
  {
    id: 3,
    title: "PHÒNG ĐIỀU KHIỂN TRUNG TÂM",
    img: "https://suntechvn.vn/wp-content/uploads/2023/02/phong-dieu-khien-trung-tam.jpg",
    href: "https://suntechvn.vn/giai-phap-cho-phong-dieu-khien-va-giam-sat-trung-tam/",
    slug: "phong-dieu-khien-trung-tam",
    description: "Màn hình ghép, video wall cho trung tâm điều hành, giám sát 24/7.",
  },
  {
    id: 4,
    title: "STUDIO ẢO",
    img: "https://suntechvn.vn/wp-content/uploads/2023/03/led-volume.jpg",
    href: "https://suntechvn.vn/giai-phap-cho-phong-studio-ao/",
    slug: "studio-ao",
    description: "Công nghệ LED Volume cho quay phim ảo, hiệu ứng hình ảnh chân thực.",
  },
  {
    id: 5,
    title: "SÂN VẬN ĐỘNG, TRUNG TÂM THỂ THAO",
    img: "https://suntechvn.vn/wp-content/uploads/2023/03/man-led-svd.jpg",
    href: "https://suntechvn.vn/giai-phap-san-van-dong-trung-tam-the-thao/",
    slug: "san-van-dong-the-thao",
    description: "Màn hình LED ngoài trời độ sáng cao cho sân vận động, sự kiện thể thao.",
  },
  {
    id: 6,
    title: "SÂN KHẤU VÀ SỰ KIỆN NGOÀI TRỜI",
    img: "https://suntechvn.vn/wp-content/uploads/2023/03/man-hinh-led-su-kien-ngoai-troi.jpg",
    href: "https://suntechvn.vn/giai-phap-su-kien-ngoai-troi/",
    slug: "su-kien-ngoai-troi",
    description: "Giải pháp màn hình LED chống nước, chịu nhiệt cho sự kiện ngoài trời.",
  },
];

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-12");
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-12");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}, []);

  return (
    <main className="min-h-screen bg-gray-50">
        {/* ====== PHẦN 1: BANNER ====== */}
        <section
          className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
          style={{ backgroundImage: "url('https://suntechvn.vn/wp-content/uploads/2023/02/giai-phap-lap-dat-man-led.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Dịch vụ & Giải pháp <span className="text-cyan-400">SUNTECH</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Bảo vệ doanh nghiệp của bạn với công nghệ an ninh mạng tiên tiến nhất
            </p>
          </div>
        </section>

        {/* ====== PHẦN 2: GRID ĐỀU - SANG TRỌNG ====== */}
        <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Các Dịch Vụ Nổi Bật Của SUNTECH
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Giải pháp màn hình LED toàn diện từ tư vấn, thiết kế đến triển khai và bảo hành
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <a
                key={service.id}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block transform transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden animate-on-scroll opacity-0 translate-y-12 h-full flex flex-col">
                  {/* Ảnh */}
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Nội dung */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Nút */}
                    <div className="flex items-center text-cyan-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Xem chi tiết
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-xs font-bold w-9 h-9 rounded-full flex items-center justify-center shadow-xl border border-white/30">
                    0{service.id}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

        {/* ====== PHẦN 3: TẠI SAO CHỌN CHÚNG TÔI + CTA ====== */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tại sao <span className="text-cyan-300">Suntech</span> là lựa chọn hàng đầu?
            </h2>
            <p className="text-lg text-cyan-100 max-w-3xl mx-auto">
              Hơn 10 năm kinh nghiệm bảo vệ hàng trăm doanh nghiệp khỏi các mối đe dọa mạng tinh vi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "shield-check",
                title: "Chứng nhận quốc tế",
                desc: "ISO 27001, PCI DSS, SOC 2 Type II",
              },
              {
                icon: "clock",
                title: "Hỗ trợ 24/7/365",
                desc: "Đội ngũ chuyên gia luôn sẵn sàng",
              },
              {
                icon: "users",
                title: "500+ khách hàng tin tưởng",
                desc: "Doanh nghiệp lớn nhỏ trên toàn quốc",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-5 bg-cyan-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon === "shield-check" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                    {item.icon === "clock" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                    {item.icon === "users" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H9v-1c0-1.657 1.343-3 3-3h0c1.657 0 3 1.343 3 3v1zm5-9h.01M4 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-cyan-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-10 text-center shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Sẵn sàng bảo vệ doanh nghiệp của bạn?
            </h3>
            <p className="text-cyan-50 mb-8 max-w-2xl mx-auto">
              Nhận <span className="font-bold text-yellow-300">báo giá miễn phí</span> và <span className="font-bold text-yellow-300">đánh giá rủi ro bảo mật trong 24h</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-700 font-bold py-4 px-8 rounded-full hover:bg-cyan-50 transition-all transform hover:scale-105 shadow-lg">
                Yêu cầu tư vấn ngay
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-cyan-700 transition-all">
                Gọi hotline: 096.502.5080
              </button>
            </div>
          </div>
        </div>
      </section>
      <ContactDock />
      <BackToTopButton />
</main>
  );
};

export default ServicePage;
