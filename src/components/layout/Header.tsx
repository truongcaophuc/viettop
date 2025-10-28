"use client";

import { useState } from "react";
import { FaPhoneAlt, FaSearch, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next"; // <-- Đã import

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation(); // <-- Lấy hàm t và i18n

  const currentLang = i18n.language; // Lấy ngôn ngữ hiện tại

  const toggleLang = () => {
    const newLang = currentLang === "vi" ? "en" : "vi";
    i18n.changeLanguage(newLang); // <-- Dùng hàm của i18next để đổi ngôn ngữ
  };

  return (
    <div className="font-sans">
      {/* --- TOP BAR --- */}
      <div className="bg-[#005baa] text-white text-sm py-2 px-4 flex justify-between md:justify-end items-center gap-4">
        <a
          href="#" // Nên thay đổi href này nếu có trang tin tức
          className="bg-[#d94c00] px-3 py-1 rounded-sm font-semibold hidden md:block hover:bg-[#b23b00] transition-colors" // Thêm hiệu ứng hover
        >
          {t('header.topbar.news')} {/* <-- Dùng t() */}
        </a>
        <div className="flex items-center gap-2">
          <FaPhoneAlt size={14} /> {/* Điều chỉnh kích thước icon nếu cần */}
          <span>{t('header.topbar.hotline')}</span> {/* <-- Dùng t() */}
        </div>
        <div className="hidden md:flex items-center gap-3">
          {/* <span>|</span> */} {/* Có thể bỏ dấu | này nếu không cần */}
          {/* <span>14/10/2025, 09:55</span> */} {/* Thời gian có thể không cần dịch */}
          {/* <FaSearch className="cursor-pointer hover:text-gray-300" /> */} {/* Có thể thêm nút tìm kiếm sau */}
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 cursor-pointer bg-white/10 hover:bg-white/20 transition-colors px-3 py-1 rounded-md" // Giảm gap
            aria-label={t('header.topbar.toggleLanguageLabel')} // <-- Dùng t() cho aria-label
            title={t('header.topbar.toggleLanguageTitle')} // <-- Dùng t() cho title
          >
            <FaGlobe size={15}/> {/* Điều chỉnh kích thước icon */}
            <span className="font-semibold tracking-wide text-xs">{currentLang}</span> {/* Giảm cỡ chữ */}
          </button>
        </div>
      </div>

      {/* --- HEADER / NAV --- */}
      <nav className="bg-white flex items-center justify-between md:justify-around lg:justify-center lg:gap-16 xl:gap-32 px-4 sm:px-6 lg:px-16 py-4 md:py-5 shadow-md border-t-4 border-[#d94c00] relative"> {/* Tăng padding Y, điều chỉnh gap */}
        {/* Logo + Tiêu đề */}
        <Link href="/" className="flex items-center gap-2 shrink-0"> {/* Thêm Link và shrink-0 */}
          <img
            src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-sun-illustration-logo-sunny-sunset-horizon-vector-png-image_43736816.jpg" // Nên dùng ảnh logo của DCV
            alt={t('header.nav.logoAlt')} // <-- Dùng t()
            className="h-10 md:h-12" // Điều chỉnh chiều cao logo
          />
          <div className="leading-tight hidden sm:block"> {/* Ẩn text trên màn hình quá nhỏ */}
            <h2 className="font-bold text-[#005baa] text-[11px] md:text-[13px] lg:text-[15px]"> {/* Giảm cỡ chữ */}
              {t('header.nav.companyName1')} {/* <-- Dùng t() */}
            </h2>
            <p className="font-semibold text-[#d94c00] text-[13px] md:text-[15px] lg:text-[17px]"> {/* Giảm cỡ chữ */}
              {t('header.nav.companyName2')} {/* <-- Dùng t() */}
            </p>
          </div>
        </Link>

        {/* Nút menu mobile */}
        <button
          className="md:hidden text-2xl text-[#005baa] p-2 -mr-2" // Thêm padding, giảm margin
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"} // Thêm aria-label
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu điều hướng */}
        <ul
          className={`${
            menuOpen
              ? "flex flex-col absolute top-full left-0 w-full bg-white border-t shadow-lg z-[1000]" // Tăng z-index
              : "hidden"
          } md:flex md:items-center md:static md:flex-row md:gap-4 lg:gap-6 xl:gap-8 text-[#002b5c] font-semibold text-sm lg:text-base uppercase`} // Giảm gap, giảm cỡ chữ cơ bản
        >
          {/* Sử dụng map để tạo menu items */}
          {[
            { href: "/", labelKey: "header.nav.home" },
            { href: "/gioi-thieu", labelKey: "header.nav.about" },
            { href: "/giai-phap", labelKey: "header.nav.services" },
            { href: "/blog", labelKey: "header.nav.blog" },
            { href: "/cong-trinh", labelKey: "header.nav.projects" }, // Cập nhật href nếu cần
            { href: "/lien-he", labelKey: "header.nav.contact" }   // Cập nhật href nếu cần
          ].map((item) => (
            <li key={item.href} className="border-b md:border-none">
              <Link
                href={item.href}
                className="block px-5 py-3 md:px-3 md:py-2 lg:px-4 hover:text-[#d94c00] transition-colors whitespace-nowrap" // Điều chỉnh padding, thêm whitespace-nowrap
                onClick={() => setMenuOpen(false)} // Đóng menu khi click link
              >
                {t(item.labelKey)} {/* <-- Dùng t() */}
              </Link>
            </li>
          ))}
          {/* Phần dropdown có thể thêm sau nếu cần */}
          {/* <li className="relative border-b md:border-none group"> ... </li> */}
        </ul>
      </nav>

      {/* --- CSS (Thường không cần thiết nếu dùng Tailwind hiệu quả) --- */}
      {/* <style jsx global>{`...`}</style> */}
    </div>
  );
}