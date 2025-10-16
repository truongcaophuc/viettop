"use client";

import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NextArrow = ({ onClick }: any) => (
  <button
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full hover:bg-green-500 hover:text-white transition"
    onClick={onClick}
  >
    <FaChevronRight size={18} />
  </button>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrevArrow = ({ onClick }: any) => (
  <button
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full hover:bg-green-500 hover:text-white transition"
    onClick={onClick}
  >
    <FaChevronLeft size={18} />
  </button>
);

export default function ArticleSlider() {
  const articles = [
    {
      id: 1,
      title: "Tối ưu hệ thống điều hòa trung tâm VRV/VRF trong công trình lớn",
      category: "Cơ điện",
      description:
        "Hiểu rõ nguyên lý hoạt động và những yếu tố ảnh hưởng đến hiệu suất giúp giảm đến 20% chi phí năng lượng cho hệ thống HVAC.",
      image: "/home/kiến thức/điều hoà.png",
    },
    {
      id: 2,
      title: "5 điểm cần kiểm tra trước khi nghiệm thu hệ thống điện hạ thế",
      category: "Điện",
      description:
        "Kiểm tra tải, dây dẫn, tiếp địa, và thiết bị bảo vệ là bước quan trọng đảm bảo an toàn và tuân thủ tiêu chuẩn TCVN.",
      image: "/home/kiến thức/kiểm tra5.png",
    },
    {
      id: 3,
      title: "Hệ thống PCCC tự động: Những lỗi thường gặp khi thi công",
      category: "Cấp thoát nước",
      description:
        "Các lỗi nhỏ như chọn sai đầu phun sprinkler hay bố trí tủ báo cháy không đúng vị trí có thể ảnh hưởng đến toàn bộ hệ thống.",
      image: "/home/kiến thức/PCCC.png",
    },
    {
      id: 4,
      title: "Ứng dụng BMS trong quản lý tòa nhà thông minh",
      category: "Tự động hóa",
      description:
        "Hệ thống BMS giúp chủ đầu tư giám sát điện năng, điều hòa, ánh sáng và an ninh trên cùng một nền tảng duy nhất.",
      image: "/home/kiến thức/toà nhà.png",
    },
    {
      id: 5,
      title: "Giải pháp tiết kiệm năng lượng cho hệ thống điện",
      category: "Công nghệ",
      description:
        "Tối ưu công suất, chọn thiết bị hiệu suất cao và giám sát từ xa giúp tiết kiệm đáng kể chi phí vận hành.",
      image: "/home/giải pháp/điện.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 4 } },
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="bg-gray-50 py-20 relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          KIẾN THỨC & GIẢI PHÁP CƠ ĐIỆN
          <p className="text-gray-500 text-base mt-2 font-normal max-w-2xl mx-auto">
            Cập nhật xu hướng công nghệ, tiêu chuẩn kỹ thuật và kinh nghiệm thi
            công M&E thực tế – giúp chủ đầu tư, kỹ sư và nhà thầu tối ưu hiệu
            quả dự án.
          </p>
        </motion.h2>

        {/* Desktop Slider */}
        <div className="hidden md:block relative">
          <Slider {...settings}>
            {articles.map((article) => (
              <div key={article.id} className="px-3 md:px-4">
                <motion.div
                  className="overflow-hidden hover:scale-105 transition-all duration-500 bg-white rounded-xl shadow-sm flex flex-col h-full"
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-60 xl:h-64 flex-shrink-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-xs text-orange-500 font-semibold mb-1 uppercase">
                      {article.category}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 hover:text-green-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {article.description.length > 100
                        ? article.description.slice(0, 100) + "..."
                        : article.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Mobile List (không dùng slider để tránh lỗi) */}
        {/* Mobile List (hiệu ứng 1.5s mỗi item) */}
        <div className="block md:hidden space-y-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              className="overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-500"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5, 
                delay: index * 0.6, 
                ease: "easeOut",
              }}
            >
              <div className="relative w-full h-52 sm:h-64">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-orange-500 font-semibold mb-1 uppercase">
                  {article.category}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-green-600 transition">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {article.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
