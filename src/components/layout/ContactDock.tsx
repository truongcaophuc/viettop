"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  PhoneOutgoing,
  MessageCircle,
  Mail,
  MapPin,
  ChevronUp,
} from "lucide-react";

export default function ContactDock() {
  const dockRef = useRef<HTMLDivElement | null>(null);
  const [dockOpen, setDockOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();

    const onDocClick = (e: MouseEvent) => {
      if (!dockRef.current) return;
      if (!dockRef.current.contains(e.target as Node)) setDockOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDockOpen(false);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Inline styles for ContactDock */}
      <style>{`
        #contactDock.open .list{max-height:380px;opacity:1;transform:translateY(0)}
      `}</style>

      {/* FLOAT CONTACT DOCK + Back-to-top */}
      <div
        id="contactDock"
        ref={dockRef}
        className={`fixed right-4 bottom-5 z-[1045] flex flex-col items-center gap-2 ${
          dockOpen ? "open" : ""
        }`}
        aria-label="Liên hệ nhanh"
      >
        <div
          id="contactList"
          aria-hidden={!dockOpen}
          className={`list grid justify-items-center gap-2 transition-all duration-300 ${
            dockOpen
              ? "opacity-100 translate-y-0 max-h-96"
              : "opacity-0 translate-y-1 max-h-0"
          } overflow-hidden`}
        >
          <a
            className="w-12 h-12 rounded-full inline-flex items-center justify-center
             border border-black/10 bg-primary text-secondary hover:bg-primary/80
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
             shadow-none"
            href="tel:+842812345678"
            aria-label="Gọi Hotline"
            title="Gọi Hotline"
          >
            <PhoneOutgoing className="w-5 h-5 text-secondary" />
          </a>

          <a
            className="w-12 h-12 rounded-full inline-flex items-center justify-center
             border border-black/10 bg-primary text-secondary hover:bg-primary/80
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
             shadow-none"
            href="https://zalo.me/0123456789"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat Zalo"
            title="Chat Zalo"
          >
            <MessageCircle className="w-5 h-5 text-secondary" />
          </a>

          <a
            className="w-12 h-12 rounded-full inline-flex items-center justify-center
             border border-black/10 bg-primary text-primary hover:bg-primary/80
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
             shadow-none"
            href="mailto:info@dinhcaoviet.com"
            aria-label="Gửi Email"
            title="Gửi Email"
          >
            <Mail className="w-5 h-5 text-secondary" />
          </a>

          <a
            className="w-12 h-12 rounded-full inline-flex items-center justify-center
             border border-black/10 bg-primary text-primary hover:bg-primary/80
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
             shadow-none"
            href="https://maps.google.com/?q=Đỉnh+Cao+Việt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Xem bản đồ"
            title="Xem bản đồ"
          >
            <MapPin className="w-5 h-5 text-secondary" />
          </a>
        </div>

        {/* Back to top button */}
        {showBackTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full inline-flex items-center justify-center
             border border-black/10 bg-primary text-[#244556] hover:bg-primary/80
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244556]/40
             shadow-lg hover:shadow-xl transition-all duration-200"
            aria-label="Về đầu trang"
            title="Về đầu trang"
          >
            <ChevronUp className="w-5 h-5 text-secondary" />
          </button>
        )}

        {/* Main toggle button */}
        <button
          onClick={() => setDockOpen(!dockOpen)}
          className="w-14 h-14 rounded-full inline-flex items-center justify-center
           bg-[#244556] text-white hover:bg-[#1e3a4a]
           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244556]/40
           shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          aria-label={dockOpen ? "Đóng menu liên hệ" : "Mở menu liên hệ"}
          aria-expanded={dockOpen}
        >
          <PhoneOutgoing className="w-6 h-6 text-secondary" />
        </button>
      </div>
    </>
  );
}
