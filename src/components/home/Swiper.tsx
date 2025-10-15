import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function SwiperSection() {
  const slides = [
    {
      image: "/home/banner/7.png",
      // title: "R.E.E M&E",
      // desc: "Top 500 Doanh nghiệp lớn nhất Việt Nam",
    },
    {
      image: "/home/banner/8.png",
      // title: "Giải pháp cơ điện hàng đầu",
      // desc: "Cung cấp dịch vụ chuyên nghiệp, chất lượng cao",
    },
    {
      image:
        "/home/banner/9.png",
      // title: "Đối tác tin cậy của doanh nghiệp",
      // desc: "Chúng tôi mang đến hiệu quả và bền vững",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation
      pagination={{ clickable: true }}
      effect="fade"
      autoplay={{ delay: 4000 }}
      loop
      className="h-[800px]"
    >
      {slides.map((s, i) => (
        <SwiperSlide key={i}>
          <div
            className="h-[800px] bg-cover bg-center relative transition-all duration-700"
            style={{ backgroundImage: `url(${s.image})` }}
          >
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Ô xanh đã chỉnh */}
            {/* <div className="caption-box absolute left-[35%] bottom-1/3 transform -translate-x-1/2 bg-[#005baa]/50 border-b-4 border-[#d94c00] text-white px-10 py-4 rounded-md opacity-0 transition-opacity duration-700 max-w-3xl text-left">
              <h2 className="text-2xl font-bold mb-2">{s.title}</h2>
              <p className="text-base mb-4">{s.desc}</p>
              <button className="bg-[#d94c00] px-5 py-2 font-semibold rounded hover:bg-[#b23b00] transition">
                Xem chi tiết
              </button>
            </div> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
