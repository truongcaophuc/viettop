"use client";

import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 🔹 Kiểu dữ liệu
interface Partner {
  id: number;
  image: string;
  title: string;
  description: string;
}

// 🔹 Dữ liệu
const partners: Partner[] = [
  {
    id: 1,
    image: "/home/Đối tác/sản xuất.png",
    title: "Airedale by Modine (UK)",
    description:
      "Nhà sản xuất hàng đầu thế giới về hệ thống làm lạnh chính xác (PAC, CRAC, CRAH, Chiller) cho Data Center và công nghiệp HVAC.",
  },
  {
    id: 2,
    image: "/home/Đối tác/tường quạt.png",
    title: "AireWall ONE™ – Data Center Fan Array",
    description:
      "Giải pháp tường quạt thông minh công suất 200–650 kW, giúp tăng hiệu suất trao đổi nhiệt và tiết kiệm năng lượng tới 30%.",
  },
  {
    id: 3,
    image: "/home/Đối tác/máy nén.png",
    title: "SmartCool™ i-drive Inverter Compressor",
    description:
      "Máy nén inverter công suất 5–83 kW, tiết kiệm tới 45% điện năng, phù hợp trung tâm dữ liệu vừa và nhỏ.",
  },
];

// 🔹 Cấu hình slider (mượt hơn cho mobile)
const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1000, // ⏳ tăng tốc độ chuyển slide cho mượt
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  cssEase: "ease-in-out", // 💫 hiệu ứng trượt mượt
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        speed: 1200,
        autoplaySpeed: 2200,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        speed: 1300, // ⏳ mượt hơn khi chuyển slide
        autoplaySpeed: 1800, // mỗi slide 1.8s
        cssEase: "ease-in-out",
        centerMode: true,
        centerPadding: "0px",
      },
    },
  ],
};

export default function PartnerSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Tiêu đề */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ĐỐI TÁC & CÔNG NGHỆ TỪ CÁC{" "}
          <span className="text-red-600">
            THƯƠNG HIỆU HÀNG ĐẦU THẾ GIỚI
          </span>
        </motion.h2>

        {/* Mô tả */}
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          DCV hợp tác cùng các thương hiệu hàng đầu thế giới để mang đến giải
          pháp làm lạnh chính xác, tiết kiệm năng lượng và bền vững.
        </motion.p>

        {/* ✅ Slide */}
        <Slider {...settings} className="partner-slider">
          {partners.map((item: Partner, index: number) => (
            <motion.div
              key={item.id}
              className="px-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  className="overflow-hidden"
                >
                  <div className="relative w-full h-[350px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                    />
                  </div>
                </motion.div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3 transition-all duration-300 hover:text-green-600 hover:-translate-y-1 hover:scale-105 hover:drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* ✅ CSS fix cho mobile */}
      <style jsx global>{`
        .partner-slider .slick-slide {
          display: flex !important;
          justify-content: center;
          transition: transform 0.8s ease-in-out;
        }
        .partner-slider .slick-dots {
          bottom: -40px;
        }
        .partner-slider .slick-dots li button:before {
          color: #16a34a;
        }
      `}</style>
    </section>
  );
}
