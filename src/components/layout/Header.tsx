"use client";

import { useState, useEffect } from "react";
import { FaPhoneAlt, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../../lib/i18n"; 

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // ====== ANTI-FLASH: CHỈ RENDER KHI ĐÃ CÓ TRANSLATION ======
  const [ready, setReady] = useState(() => {
    // Nếu đã init và có store cho ngôn ngữ hiện tại thì cho render luôn
    const lng = i18n.language || "vi";
    const hasResource =
      i18n.isInitialized &&
      !!i18n.getResourceBundle(lng, "translation"); // namespace default
    return hasResource;
  });

  useEffect(() => {
    const handleReady = () => {
      const lng = i18n.language || "vi";
      const hasResource = !!i18n.getResourceBundle(lng, "translation");
      if (hasResource) setReady(true);
    };

    // Trường hợp init đã xong sau khi mount
    if (i18n.isInitialized) {
      handleReady();
    }

    // Khi backend load xong JSON sẽ bắn "loaded"
    i18n.on("loaded", handleReady);
    i18n.on("initialized", handleReady);

    return () => {
      i18n.off("loaded", handleReady);
      i18n.off("initialized", handleReady);
    };
  }, [i18n]);

  if (!ready) {
    // Không render gì để tránh show key; nếu muốn có thể trả skeleton header
    return null;
  }
  // ==========================================================

  const currentLang = i18n.language || "vi";
  const toggleLang = () => {
    const newLang = currentLang === "vi" ? "en" : "vi";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="font-sans">
      {/* --- TOP BAR --- */}
      <div className="bg-[#005baa] text-white text-sm py-2 px-4 flex justify-between md:justify-end items-center gap-4">
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

        {/* DESKTOP LANG */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 cursor-pointer bg-white/10 hover:bg-white/20 transition-colors px-3 py-1 rounded-md"
            aria-label={t("header.topbar.toggleLanguageLabel")}
            title={t("header.topbar.toggleLanguageTitle")}
            aria-pressed={currentLang === "en"}
          >
            <FaGlobe size={15} />
            <span className="font-semibold tracking-wide text-xs">
              {currentLang}
            </span>
          </button>
        </div>
      </div>

      {/* --- HEADER / NAV --- */}
      <nav className="bg-white flex items-center justify-between md:justify-around lg:justify-center lg:gap-16 xl:gap-32 px-4 sm:px-6 lg:px-16 py-4 md:py-5 shadow-md border-t-4 border-[#d94c00] relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-sun-illustration-logo-sunny-sunset-horizon-vector-png-image_43736816.jpg"
            alt={t("header.nav.logoAlt")}
            className="h-10 md:h-12"
          />
          <div className="leading-tight hidden sm:block">
            <h2 className="font-bold text-[#005baa] text-[11px] md:text-[13px] lg:text-[15px]">
              {t("header.nav.companyName1")}
            </h2>
            <p className="font-semibold text-[#d94c00] text-[13px] md:text-[15px] lg:text-[17px]">
              {t("header.nav.companyName2")}
            </p>
          </div>
        </Link>

        {/* MOBILE [Lang] [Burger] */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 bg-[#005baa] text-white px-3 py-2 rounded-md active:scale-[0.98]"
            aria-label={t("header.topbar.toggleLanguageLabel")}
            title={t("header.topbar.toggleLanguageTitle")}
            aria-pressed={currentLang === "en"}
          >
            <FaGlobe size={16} />
            <span className="font-semibold text-xs uppercase">
              {currentLang}
            </span>
          </button>

          <button
            className="text-2xl text-[#005baa] p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MENU */}
        <ul
          className={`${
            menuOpen
              ? "flex flex-col absolute top-full left-0 w-full bg-white border-t shadow-lg z-[1000]"
              : "hidden"
          } md:flex md:items-center md:static md:flex-row md:gap-4 lg:gap-6 xl:gap-8 text-[#002b5c] font-semibold text-sm lg:text-base uppercase`}
        >
          <li className="md:hidden border-b">
            <button
              onClick={toggleLang}
              className="w-full text-left px-5 py-3 hover:text-[#d94c00] transition-colors flex items-center gap-2"
            >
              <FaGlobe />
              <span>
                {t("header.topbar.toggleLanguageTitle")} •{" "}
                {currentLang.toUpperCase()}
              </span>
            </button>
          </li>

          {[
            { href: "/", labelKey: "header.nav.home" },
            { href: "/gioi-thieu", labelKey: "header.nav.about" },
            { href: "/giai-phap", labelKey: "header.nav.services" },
            { href: "/blog", labelKey: "header.nav.blog" },
            { href: "/cong-trinh", labelKey: "header.nav.projects" },
            { href: "/lien-he", labelKey: "header.nav.contact" },
          ].map((item) => (
            <li key={item.href} className="border-b md:border-none">
              <Link
                href={item.href}
                className="block px-5 py-3 md:px-3 md:py-2 lg:px-4 hover:text-[#d94c00] transition-colors whitespace-nowrap"
                onClick={() => setMenuOpen(false)}
              >
                {t(item.labelKey)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
