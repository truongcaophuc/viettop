"use client";

import { FaPhoneAlt, FaSearch, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import SwiperSection from "../home/Swiper";
export default function HomePage() {
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
          <img
            src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-sun-illustration-logo-sunny-sunset-horizon-vector-png-image_43736816.jpg"
            alt="REE Logo"
            className="h-12"
          />
          <div className="leading-tight">
            <h2 className="font-bold text-[#005baa] text-[15px]">
              CÔNG TY CỔ PHẦN DỊCH VỤ & KỸ THUẬT
            </h2>
            <p className="font-semibold text-[#d94c00] text-[17px]">
              CƠ ĐIỆN LẠNH R.E.E
            </p>
          </div>
        </div>

        {/* Menu điều hướng */}
        <ul className="flex gap-8 text-[#002b5c] font-semibold text-base uppercase">
          <li>
            <Link href="/" className="hover:text-[#d94c00] transition-colors">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link
              href="/gioi-thieu"
              className="hover:text-[#d94c00] transition-colors"
            >
              Giới thiệu
            </Link>
          </li>
          <li>
            <Link
              href="/giai-phap"
              className="hover:text-[#d94c00] transition-colors"
            >
              Dịch vụ
            </Link>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-[#d94c00] transition-colors">
              Công trình tiêu biểu ▾
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-white border mt-1 text-sm">
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Công trình 1
                </Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Công trình 2
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#" className="hover:text-[#d94c00] transition-colors">
              Liên hệ
            </Link>
          </li>
        </ul>
      </nav>

      {/* --- HERO BANNER --- */}

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
  );
}
