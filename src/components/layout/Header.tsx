"use client";

import { useState } from "react";
import { FaPhoneAlt, FaSearch, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* --- TOP BAR --- */}
      <div className="bg-[#005baa] text-white text-sm py-2 px-4 flex justify-between md:justify-end items-center gap-4">
        <a
          href="#"
          className="bg-[#d94c00] px-3 py-1 rounded-sm font-semibold hidden md:block"
        >
          Tin Tức & Sự Kiện
        </a>
        <div className="flex items-center gap-2">
          <FaPhoneAlt /> <span>Hotline: 1900 3339</span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <span>|</span>
          <span>14/10/2025, 09:55</span>
          <FaSearch className="cursor-pointer" />
          <FaGlobe className="cursor-pointer" />
        </div>
      </div>

      {/* --- HEADER / NAV --- */}
      <nav className="bg-white flex items-center justify-between md:justify-center md:gap-[200px] px-6 md:px-16 py-6 shadow-md border-t-4 border-[#d94c00] relative">
        {/* Logo + Tiêu đề */}
        <div className="flex items-center gap-2">
          <img
            src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-sun-illustration-logo-sunny-sunset-horizon-vector-png-image_43736816.jpg"
            alt="REE Logo"
            className="h-12"
          />
          <div className="leading-tight">
            <h2 className="font-bold text-[#005baa] text-[13px] md:text-[15px]">
              CÔNG TY CỔ PHẦN DỊCH VỤ & KỸ THUẬT
            </h2>
            <p className="font-semibold text-[#d94c00] text-[15px] md:text-[17px]">
              CƠ ĐIỆN LẠNH DCV
            </p>
          </div>
        </div>

        {/* Nút menu mobile */}
        <button
          className="md:hidden text-2xl text-[#005baa]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu điều hướng */}
        <ul
          className={`${
            menuOpen
              ? "flex flex-col absolute top-full left-0 w-full bg-white border-t shadow-lg z-50"
              : "hidden"
          } md:flex md:static md:flex-row md:gap-8 text-[#002b5c] font-semibold text-base uppercase`}
        >
          <li className="border-b md:border-none">
            <Link
              href="/"
              className="block px-6 py-3 hover:text-[#d94c00] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Trang chủ
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              href="/gioi-thieu"
              className="block px-6 py-3 hover:text-[#d94c00] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Giới thiệu
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              href="/giai-phap"
              className="block px-6 py-3 hover:text-[#d94c00] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Dịch vụ
            </Link>
          </li>
          <li className="relative border-b md:border-none group">
            <a
              href="#"
              className="block px-6 py-3 hover:text-[#d94c00] transition-colors"
            >
              Công trình tiêu biểu
            </a>
            {/* Dropdown hiển thị khi hover */}
            <ul className="hidden md:absolute md:left-0 md:top-full md:bg-white md:border md:mt-1 md:group-hover:block text-sm shadow-lg">
              <li>
                {/* <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Công trình 1
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Công trình 2
                </Link> */}
              </li>
            </ul>
          </li>
          <li className="border-b md:border-none">
            <Link
              href="#"
              className="block px-6 py-3 hover:text-[#d94c00] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Liên hệ
            </Link>
          </li>
        </ul>
      </nav>

      {/* --- CSS --- */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          transition: 0.3s;
        }
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
