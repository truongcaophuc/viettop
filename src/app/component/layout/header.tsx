'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { FaPhoneAlt, FaSearch, FaGlobe } from 'react-icons/fa'

export default function HomePage() {
  const slides = [
    {
      image: 'https://reeme.com.vn/storage/banner/slide-1-191121.jpg',
      title: 'R.E.E M&E',
      desc: 'Top 500 Doanh nghiệp lớn nhất Việt Nam',
    },
    {
      image: 'https://reeme.com.vn/storage/banner/slide-2-191121.jpg',
      title: 'Giải pháp cơ điện hàng đầu',
      desc: 'Cung cấp dịch vụ chuyên nghiệp, chất lượng cao',
    },
    {
      image: 'https://reeme.com.vn/storage/partner/Cac%20toa%20nha%20REE%20final.jpg',
      title: 'Đối tác tin cậy của doanh nghiệp',
      desc: 'Chúng tôi mang đến hiệu quả và bền vững',
    },
  ]

  return (
    <div className="font-sans">
      {/* --- TOP BAR --- */}
      <div className="bg-[#005baa] text-white text-sm py-2 px-4 flex justify-end items-center gap-4">
        <a href="#" className="bg-[#d94c00] px-3 py-1 rounded-sm font-semibold">
          Tin Tức & Sự Kiện
        </a>
        <div className="flex items-center gap-2">
          <FaPhoneAlt /> <span>Hotline: 1900 3339</span>
        </div>
        <span>|</span>
        <span>14/10/2025, 09:55</span>
        <FaSearch className="ml-2 cursor-pointer" />
        <FaGlobe className="ml-2 cursor-pointer" />
      </div>

      {/* --- HEADER / NAV --- */}
      <nav className="bg-white flex items-center justify-center gap-[200px] px-16 py-8 shadow-md border-t-4 border-[#d94c00]">
        {/* Logo + Tiêu đề */}
        <div className="flex items-center gap-2">
          <img src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-sun-illustration-logo-sunny-sunset-horizon-vector-png-image_43736816.jpg" alt="REE Logo" className="h-12" />
          <div className="leading-tight">
            <h2 className="font-bold text-[#005baa] text-[15px]">
              CÔNG TY CỔ PHẦN DỊCH VỤ & KỸ THUẬT
            </h2>
            <p className="font-semibold text-[#d94c00] text-[17px]">CƠ ĐIỆN LẠNH R.E.E</p>
          </div>
        </div>

        {/* Menu điều hướng */}
        <ul className="flex gap-8 text-[#002b5c] font-semibold text-base uppercase">
          <li><a href="#" className="hover:text-[#d94c00] transition-colors">Trang chủ</a></li>
          <li><a href="#" className="hover:text-[#d94c00] transition-colors">Giới thiệu</a></li>
          <li><a href="#" className="hover:text-[#d94c00] transition-colors">Dịch vụ</a></li>
          <li className="relative group">
            <a href="#" className="hover:text-[#d94c00] transition-colors">Công trình tiêu biểu ▾</a>
            <ul className="absolute left-0 hidden group-hover:block bg-white border mt-1 text-sm">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Công trình 1</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Công trình 2</a></li>
            </ul>
          </li>
          <li><a href="#" className="hover:text-[#d94c00] transition-colors">Liên hệ</a></li>
        </ul>
      </nav>




      {/* --- HERO BANNER --- */}
      <section className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          effect="fade"
          autoplay={{ delay: 4000 }}
          loop
          className="h-[720px]"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
            <div
              className="h-[720px] bg-cover bg-center relative transition-all duration-700"
              style={{ backgroundImage: `url(${s.image})` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Ô xanh đã chỉnh */}
              <div className="caption-box absolute left-[35%] bottom-1/3 transform -translate-x-1/2 bg-[#005baa]/50 border-b-4 border-[#d94c00] text-white px-10 py-4 rounded-md opacity-0 transition-opacity duration-700 max-w-3xl text-left">
                <h2 className="text-2xl font-bold mb-2">{s.title}</h2>
                <p className="text-base mb-4">{s.desc}</p>
                <button className="bg-[#d94c00] px-5 py-2 font-semibold rounded hover:bg-[#b23b00] transition">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </SwiperSlide>

          ))}
        </Swiper>
      </section>

      {/* --- CUSTOM CSS --- */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          transition: 0.3s;
        }
          /* Chỉ hiển thị ô xanh cho slide đang active */
        .swiper-slide-active .caption-box {
          opacity: 1;
          animation: fadeInUp 1s ease both;
        }

        .swiper-slide-next .caption-box,
        .swiper-slide-prev .caption-box {
          opacity: 0;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #d94c00;
        }
        .animate-fadeIn {
          animation: fadeInUp 1s ease both;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
