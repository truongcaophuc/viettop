"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    image: "/service/hệ thống điều hòa.jpg",
    text: "Hệ thống làm mát không ổn định, tiêu tốn điện, khó kiểm soát nhiệt độ.",
  },
  {
    image: "/service/Mất điện đột ngột.jpg",
    text: "Mất điện đột ngột, nguồn dự phòng yếu, ATS hoạt động không ổn định.",
  },
  {
    image: "/service/Khó giám sát.jpg",
    text: "Khó giám sát, quản lý hạ tầng trung tâm dữ liệu, hệ thống không đồng bộ.",
  },
  {
    image: "/service/hệ thống chống cháy.jpg",
    text: "Nguy cơ cháy nổ cao, thiếu cảnh báo sớm và chữa cháy tự động.",
  },
  {
    image: "/service/giám sát và kiểm soát ra vào.jpg",
    text: "An ninh kém, khó kiểm soát ra vào và giám sát khu vực quan trọng.",
  },
  {
    image: "/service/tiếp địa và chống sét.jpg",
    text: "Thiết bị dễ hư hỏng do sét, tiếp địa và chống sét không đạt chuẩn.",
  },
];

export default function CenterActiveCarousel() {
  const [active, setActive] = useState(0);

  const nextSlide = () => setActive((prev) => (prev + 1) % items.length);
  const prevSlide = () =>
    setActive((prev) => (prev - 1 + items.length) % items.length);

  // Tự động chuyển slide (tuỳ chọn)
  // useEffect(() => {
  //   const timer = setInterval(nextSlide, 4000);
  //   return () => clearInterval(timer);
  // }, []);

  // Lấy ra 3 slide cần hiển thị (left - center - right)
  const getVisibleSlides = () => {
    const left = (active - 1 + items.length) % items.length;
    const right = (active + 1) % items.length;
    return [left, active, right];
  };

  return (
    <section className="py-12 md:py-20 bg-gray-100 overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-primary px-4">
        Vấn đề bạn đang mắc phải 
      </h2>

      <div className="relative flex items-center justify-center max-w-5xl mx-auto px-4">
        {/* Nút điều hướng */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-0 z-10 bg-white shadow-lg p-2 md:p-3 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Carousel */}
        <div className="relative flex items-center justify-center w-full h-[200px] md:h-[300px]">
          <AnimatePresence initial={false}>
            {getVisibleSlides().map((index, i) => {
              const item = items[index];
              const isCenter = i === 1;

              const positions = [
                { x: "-200px", scale: 0.7, opacity: 0.5, zIndex: 5 },
                { x: "0px", scale: 1, opacity: 1, zIndex: 10 },
                { x: "200px", scale: 0.7, opacity: 0.5, zIndex: 5 },
              ];

              // Responsive positions for mobile
              const mobilePositions = [
                { x: "-120px", scale: 0.6, opacity: 0.4, zIndex: 5 },
                { x: "0px", scale: 1, opacity: 1, zIndex: 10 },
                { x: "120px", scale: 0.6, opacity: 0.4, zIndex: 5 },
              ];

              const { x, scale, opacity, zIndex } = window.innerWidth < 768 ? mobilePositions[i] : positions[i];

              return (
                <motion.div
                  key={index}
                  className="absolute rounded-2xl overflow-hidden shadow-lg bg-white"
                  style={{ width: window.innerWidth < 768 ? 240 : 320, height: window.innerWidth < 768 ? 180 : 240, zIndex }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ x, scale, opacity }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Image
                    src={encodeURI(item.image)}
                    alt={item.text}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/50 text-white text-center p-2 md:p-3 text-xs md:text-sm">
                    {item.text}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-0 z-10 bg-white shadow-lg p-2 md:p-3 rounded-full hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </section>
  );
}
