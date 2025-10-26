/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useState, useEffect } from "react";
import { FaPhoneAlt, FaSearch, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Theo dõi trạng thái cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="font-sans relative">
      {/* --- THANH TIN TỨC --- */}
      <div className="bg-[#005baa] text-white text-sm py-2 px-4 flex justify-between md:justify-end items-center gap-4 z-40 relative">
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

      {/* --- THANH ĐIỀU HƯỚNG --- */}
      <nav
        className={`w-full top-0 left-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "fixed bg-black text-white shadow-lg backdrop-blur-sm"
            : "relative bg-white text-[#002b5c] shadow-md border-t-4 border-[#d94c00]"
        }`}
      >
        <div className="flex items-center justify-between md:justify-center md:gap-[200px] px-6 md:px-16 py-4 md:py-6">
          {/* Logo + Tiêu đề */}
          <div className="flex items-center gap-2">
            <img
              src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-sun-illustration-logo-sunny-sunset-horizon-vector-png-image_43736816.jpg"
              alt="REE Logo"
              className="h-12"
            />
            <div className="leading-tight">
              <h2
                className={`font-bold text-[13px] md:text-[15px] ${
                  isScrolled ? "text-white" : "text-[#005baa]"
                }`}
              >
                CÔNG TY CỔ PHẦN DỊCH VỤ & KỸ THUẬT
              </h2>
              <p className="font-semibold text-[#d94c00] text-[15px] md:text-[17px]">
                CƠ ĐIỆN LẠNH DCV
              </p>
            </div>
          </div>

          {/* Nút mở menu mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Menu điều hướng */}
          <ul
            className={`${
              menuOpen
                ? `flex flex-col absolute top-full left-0 w-full border-t shadow-lg z-50 ${
                    isScrolled ? "bg-black" : "bg-white"
                  }`
                : "hidden"
            } md:flex md:static md:flex-row md:gap-8 font-semibold text-base uppercase`}
          >
            {[
              { href: "/", label: "Trang chủ" },
              { href: "/gioi-thieu", label: "Giới thiệu" },
              { href: "/giai-phap", label: "Dịch vụ" },
              { href: "/blog", label: "Tin tức" },
              { href: "#", label: "Liên hệ" },
            ].map((item) => (
              <li key={item.href} className="border-b md:border-none">
                <Link
                  href={item.href}
                  className={`block px-6 py-3 transition-colors ${
                    isScrolled
                      ? "hover:text-[#d94c00] text-white"
                      : "hover:text-[#d94c00] text-[#002b5c]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* --- CSS BỔ SUNG --- */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        /* Tránh nội dung bị che khi header cố định */
        body {
          padding-top: 0;
        }

        /* Animation & style Swiper nếu bạn dùng */
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
    </header>
  );
}
