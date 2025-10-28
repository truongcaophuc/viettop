/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useState, useEffect } from "react";
import { FaPhoneAlt, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language || i18n.resolvedLanguage || "vi";
  const toggleLang = () => {
    const newLang = currentLang === "vi" ? "en" : "vi";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="font-sans relative">
      {/* --- THANH TIN TỨC --- */}
      <div className="bg-[#005baa] text-white text-sm py-2 px-4 flex justify-between md:justify-end items-center gap-4 z-40 relative">
        <a
          href="#"
          className="bg-[#d94c00] px-3 py-1 rounded-sm font-semibold hidden md:block hover:bg-[#b23b00] transition-colors"
        >
          {t("header.topbar.news")}
        </a>

        <div className="flex items-center gap-2">
          <FaPhoneAlt size={14} />
          <span>{t("header.topbar.hotline")}</span>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 cursor-pointer bg-white/10 hover:bg-white/20 transition-colors px-3 py-1 rounded-md"
            aria-label={t("header.topbar.toggleLanguageLabel")}
            title={t("header.topbar.toggleLanguageTitle")}
          >
            <FaGlobe size={15} />
            <span className="font-semibold tracking-wide text-xs">
              {currentLang === "vi" ? "VI" : "EN"}
            </span>
          </button>
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
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-sun-illustration-logo-sunny-sunset-horizon-vector-png-image_43736816.jpg"
              alt={t("header.nav.logoAlt", "DCV Logo")}
              className="h-12"
            />
            <div className="leading-tight hidden sm:block">
              <h2
                className={`font-bold text-[13px] md:text-[15px] ${
                  isScrolled ? "text-white" : "text-[#005baa]"
                }`}
              >
                {t("header.nav.companyName1")}
              </h2>
              <p className="font-semibold text-[#d94c00] text-[15px] md:text-[17px]">
                {t("header.nav.companyName2")}
              </p>
            </div>
          </Link>

          {/* Nút mở menu mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? t("header.aria.closeMenu", "Đóng menu")
                : t("header.aria.openMenu", "Mở menu")
            }
            aria-expanded={menuOpen}
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
              { href: "/", labelKey: "header.nav.home" },
              { href: "/gioi-thieu", labelKey: "header.nav.about" },
              { href: "/giai-phap", labelKey: "header.nav.services" },
              { href: "/blog", labelKey: "header.nav.blog" },
              { href: "/lien-he", labelKey: "header.nav.contact" },
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
                  {t(item.labelKey)}
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
        /* Tránh nội dung bị che khi header cố định (tuỳ page, có thể cần padding-top) */
        body {
          padding-top: 0;
        }
        /* (Tùy chọn) Style cho Swiper nếu dùng */
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
