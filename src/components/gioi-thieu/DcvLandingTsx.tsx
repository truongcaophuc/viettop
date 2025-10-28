/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
  Flag,
  TrendingUp,
  Users,
  ThumbsUp,
  PhoneOutgoing,
  GitBranch,
  MessageCircle,
  Mail,
  MapPin,
  PencilLine,
  ChevronUp,
} from "lucide-react";
import { Be_Vietnam_Pro } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ContactDock from "../layout/ContactDock";
import BackToTopButton from "../layout/BackToTopButton";

const bevn = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

/* ===================== Reveal (fade-in + slide-up on scroll) ===================== */
type RevealProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  threshold?: number; // 0..1
};
function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.unobserve(entry.target);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={`will-change-transform transition duration-700 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        motion-reduce:transition-none motion-reduce:transform-none
        ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ===================== Arc tabs data ===================== */
type ArcKey = "vision" | "strategy" | "team" | "customer";
const ARC_KEYS: ArcKey[] = ["vision", "strategy", "team", "customer"];

export default function DcvLandingTsx() {
  const { t, i18n } = useTranslation();

  /* ====== Contact Dock state ====== */
  const dockRef = useRef<HTMLDivElement | null>(null);
  const [dockOpen, setDockOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  /* ====== Arc state ====== */
  const stageRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const nodesWrapRef = useRef<HTMLDivElement | null>(null);
  const [activeKey, setActiveKey] = useState<ArcKey>("customer");
  const autoSlideInterval = useRef<number | null>(null);

  // ARC_TABS dựa trên i18n
  const ARC_TABS = useMemo(
    () => ({
      vision: {
        title: t("aboutPage.strategy.content.vision.title"),
        lead: t("aboutPage.strategy.content.vision.lead"),
        body: (
          <div
            dangerouslySetInnerHTML={{
              __html: t("aboutPage.strategy.content.vision.body"),
            }}
          />
        ),
        bg: "https://media.istockphoto.com/id/1166272744/vi/anh/m%C3%A0n-h%C3%ACnh-c%C3%B4ng-ngh%E1%BB%87-k%E1%BB%B9-thu%E1%BA%ADt-s%E1%BB%91-t%C6%B0%C6%A1ng-lai-tr%C3%AAn-m%E1%BA%AFt.jpg?s=612x612&w=0&k=20&c=gQ9Z-ZgrIFrJV93j-2TNVrfE_yY3d5fY6BvDY1g3Uvg=",
      },
      strategy: {
        title: t("aboutPage.strategy.content.strategy.title"),
        lead: t("aboutPage.strategy.content.strategy.lead"),
        body: (
          <div
            dangerouslySetInnerHTML={{
              __html: t("aboutPage.strategy.content.strategy.body"),
            }}
          />
        ),
        bg: "https://cdn.pixabay.com/photo/2019/09/29/22/06/light-bulb-4514505_1280.jpg",
      },
      customer: {
        title: t("aboutPage.strategy.content.customer.title"),
        lead: t("aboutPage.strategy.content.customer.lead"),
        body: (
          <div
            dangerouslySetInnerHTML={{
              __html: t("aboutPage.strategy.content.customer.body"),
            }}
          />
        ),
        bg: "https://www.pace.edu.vn/uploads/news/2023/04/ky-nang-giao-tiep-voi-khach-hang.jpg",
      },
      team: {
        title: t("aboutPage.strategy.content.team.title"),
        lead: t("aboutPage.strategy.content.team.lead"),
        body: (
          <div
            dangerouslySetInnerHTML={{
              __html: t("aboutPage.strategy.content.team.body"),
            }}
          />
        ),
        bg: "https://drh.vn/FileUpload/Images/bg14.jpg",
      },
    }),
    [t]
  );

  const active = useMemo(() => ARC_TABS[activeKey], [activeKey, ARC_TABS]);
  const arcBg = useMemo(() => {
    const url =
      active?.bg ??
      "https://cdn.pixabay.com/photo/2016/11/18/12/55/light-1834289_1280.jpg";
    return `url('${url}')`;
  }, [active]);

  // Auto slide
  const startAutoSlide = useCallback(() => {
    if (autoSlideInterval.current !== null) {
      window.clearInterval(autoSlideInterval.current);
    }
    const isMobile = window.matchMedia("(max-width: 991.98px)").matches;
    if (isMobile) return;
    autoSlideInterval.current = window.setInterval(() => {
      setActiveKey((prevKey) => {
        const currentIndex = ARC_KEYS.indexOf(prevKey);
        const nextIndex = (currentIndex + 1) % ARC_KEYS.length;
        return ARC_KEYS[nextIndex];
      });
    }, 3000);
  }, []);

  const handleSetActiveKey = (key: ArcKey) => {
    setActiveKey(key);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideInterval.current !== null) {
        window.clearInterval(autoSlideInterval.current);
      }
    };
  }, [startAutoSlide]);

  /* ====== Effects: dock, scroll, outside click ====== */
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();

    const onDocClick = (e: MouseEvent) => {
      if (dockRef.current && !dockRef.current.contains(e.target as Node)) {
        setDockOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDockOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  /* ====== Layout arc nodes along the SVG path ====== */
  const layoutArcNodes = useCallback(() => {
    const stage = stageRef.current;
    const svg = svgRef.current; // ✅ fixed
    const path = pathRef.current;
    const wrap = nodesWrapRef.current;
    if (!stage || !svg || !path || !wrap) return;

    const isMobile = window.matchMedia("(max-width: 991.98px)").matches;
    const nodes = Array.from(wrap.querySelectorAll<HTMLButtonElement>(".node"));

    if (isMobile) {
      nodes.forEach((n) => {
        n.style.left = "";
        n.style.top = "";
      });
      return;
    }

    const rect = stage.getBoundingClientRect();
    const vb = (svg as any).viewBox?.baseVal;
    if (!vb) return;
    const scaleX = rect.width / vb.width;
    const scaleY = rect.height / vb.height;
    const total = path.getTotalLength();
    const step = 1 / (nodes.length + 1);

    nodes.forEach((node, idx) => {
      const tt = (idx + 1) * step;
      const p = path.getPointAtLength(total * tt);
      node.style.left = `${p.x * scaleX}px`;
      node.style.top = `${p.y * scaleY}px`;
    });
  }, []);

  useEffect(() => {
    layoutArcNodes();
    let timeoutId: number | null = null; // ✅ renamed
    const handleResize = () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(layoutArcNodes, 120);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [layoutArcNodes]);

  /* ====== Smooth content switch ====== */
  const ContentSwitch: React.FC<{ k: ArcKey }> = ({ k }) => {
    const data = ARC_TABS[k];
    if (!data) return null;
    return (
      <motion.div
        key={k}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight text-[#c9e265]">
          {data.title}
        </h2>
        <p className="text-white/[0.85] mb-3">{data.lead}</p>
        <div className="mb-3">{data.body}</div>
      </motion.div>
    );
  };

  return (
    <div
      className={`${bevn.className} bg-white text-black antialiased [text-rendering:optimizeLegibility]`}
    >
      {/* Inline styles for Arc/Dock */}
      <style>{`
/* ===== Arc layout & responsiveness ===== */
#arcStage{position:relative;min-height:320px;height:clamp(320px,40vw,420px)}
@media (min-width: 1280px){#arcStage{height:200px}}
#arcSvg{position:absolute;inset:0;pointer-events:none}
#arcNodes{position:absolute;inset:0;pointer-events:none}
#arcNodes .node{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:8px;pointer-events:auto;cursor:pointer;background:transparent;border:0}
#arcNodes .circle{width:78px;height:78px;border-radius:9999px;display:grid;place-items:center;background:#fff;color:#244556;box-shadow:0 12px 28px rgba(0,0,0,.25);transition:transform .18s ease, box-shadow .18s ease, outline-color .18s ease;outline:3px solid transparent}
#arcNodes .node.active .circle{transform:translateY(-2px) scale(1.03);outline-color:rgba(201,226,101,.65)}
#arcNodes .node:hover .circle{transform:translateY(-2px);box-shadow:0 16px 36px rgba(0,0,0,.35)}
#arcNodes .label{font-weight:700;color:#fff;white-space:nowrap;text-shadow:0 2px 6px rgba(0,0,0,.35)}

/* Ẩn tab mobile theo mặc định (desktop) */
#arcTabsMobile{display:none}

@media (max-width: 991.98px){
  /* Thu gọn section & bỏ min-height ở mobile */
  #tong-quan-chien-luoc{padding-top:2rem;padding-bottom:2rem}
  #arcStage{min-height:0 !important;height:auto !important;padding-top:0}

  /* Ẩn cung + nodes ở mobile */
  #arcSvg, #arcNodes{display:none !important}

  /* Hiện pill tabs ở mobile và cho kéo ngang */
  #arcTabsMobile{display:flex}

  /* Ẩn scrollbar ngang */
  .no-scrollbar::-webkit-scrollbar{display:none}
  .no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}
}

/* Contact dock */
#contactDock.open .list{max-height:380px;opacity:1;transform:translateY(0)}
      `}</style>

      {/* ===================== HERO ===================== */}
      <section
        id="home"
        className="relative min-h-[68vh] grid place-items-center text-center text-white overflow-hidden bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(36,69,86,.55), rgba(36,69,86,.55)), url('https://cdn.pixabay.com/photo/2025/08/21/07/24/smart-cabling-9786819_1280.jpg')",
        }}
      >
        <Reveal>
          <div className="max-w-[1000px] px-4 py-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3 tracking-tight">
              {t("aboutPage.hero.title")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6">
              {t("aboutPage.hero.subtitle")}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ===================== GIỚI THIỆU ===================== */}
      <section id="gioi-thieu" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Reveal
                as="h2"
                className="text-brand font-extrabold text-3xl md:text-4xl mb-3 tracking-tight text-[#244556]"
              >
                {t("aboutPage.intro.title")}
              </Reveal>

              <Reveal delay={80} className="text-gray-600 text-lg mb-4">
                {t("aboutPage.intro.p1")}
              </Reveal>
              <Reveal delay={160} className="text-gray-600 mb-4">
                {t("aboutPage.intro.p2")}
              </Reveal>
              <Reveal delay={240} className="text-gray-600 mb-6">
                {t("aboutPage.intro.p3")}
              </Reveal>

              <Reveal delay={320}>
                <div className="flex gap-2 flex-wrap">
                  {/* Primary button */}
                  <a
                    href="#cta-cuoi-trang"
                    className="inline-flex items-center gap-2 font-semibold rounded-full
                    border border-[#244556] bg-[#244556] text-white px-5 py-2.5 shadow-sm
                    hover:bg-white hover:text-[#244556]
                    transition-colors focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-[#244556]/40 active:translate-y-px"
                  >
                    <PhoneOutgoing className="w-5 h-5" />
                    {t("aboutPage.intro.buttonContact")}
                  </a>

                  {/* Secondary */}
                  <a
                    href="/giai-phap"
                    className="inline-flex items-center gap-2 font-semibold rounded-full
                    border border-[#c9e265] bg-[#c9e265] text-[#244556] px-5 py-2.5 shadow-sm
                    hover:bg-white hover:text-[#c9e265] hover:border-[#c9e265]
                    transition-colors focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-[#244556]/40 active:translate-y-px"
                  >
                    <GitBranch className="w-5 h-5" />
                    {t("aboutPage.intro.buttonSolutions")}
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120} className="hidden md:block">
              <div className="relative">
                <img
                  className="w-full min-h-[260px] object-cover rounded-xl shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1280&auto=format&fit=crop"
                  alt={t("aboutPage.intro.imageAlt")}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== ARC STRATEGY ===================== */}
      <section id="tong-quan-chien-luoc" className="py-16 relative overflow-hidden text-white">
        {/* Background crossfade */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center md:bg-fixed"
              style={{ backgroundImage: arcBg }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-[linear-gradient(60deg,rgba(15,27,34,.85),rgba(15,27,34,.55))]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left content with smooth switch */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              {/* Mobile pill tabs */}
              <div id="arcTabsMobile" className="-mt-1 mb-5 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-2 snap-x snap-mandatory py-1">
                  {(
                    [
                      { key: "vision", icon: <Flag className="w-4 h-4" />, label: t("aboutPage.strategy.tabVision") },
                      { key: "strategy", icon: <TrendingUp className="w-4 h-4" />, label: t("aboutPage.strategy.tabStrategy") },
                      { key: "team", icon: <Users className="w-4 h-4" />, label: t("aboutPage.strategy.tabTeam") },
                      { key: "customer", icon: <ThumbsUp className="w-4 h-4" />, label: t("aboutPage.strategy.tabCustomer") },
                    ] as { key: ArcKey; icon: React.ReactNode; label: string }[]
                  ).map(({ key, icon, label }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleSetActiveKey(key)}
                      aria-selected={activeKey === key}
                      className={`snap-start shrink-0 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold transition-all
                        ${
                          activeKey === key
                            ? "bg-[#c9e265] text-[#244556] border-[#c9e265] shadow"
                            : "bg-white/90 text-[#244556] border-white/60 hover:bg-white"
                        }`}
                    >
                      {icon as any}
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <ContentSwitch k={activeKey} />
              </AnimatePresence>
            </div>

            {/* Right arc (desktop only) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div id="arcStage" ref={stageRef}>
                <svg id="arcSvg" ref={svgRef} viewBox="0 0 800 360" preserveAspectRatio="none">
                  <path
                    id="arcPath"
                    ref={pathRef}
                    d="M20,330 C240,20 560,20 780,330"
                    stroke="rgba(201,226,101,.6)"
                    strokeWidth={2}
                    fill="none"
                  />
                </svg>
                <div id="arcNodes" ref={nodesWrapRef} aria-label="Arc tabs">
                  {(
                    [
                      { key: "vision", icon: <Flag className="w-6 h-6" />, label: t("aboutPage.strategy.nodeVision") },
                      { key: "strategy", icon: <TrendingUp className="w-6 h-6" />, label: t("aboutPage.strategy.nodeStrategy") },
                      { key: "team", icon: <Users className="w-6 h-6" />, label: t("aboutPage.strategy.nodeTeam") },
                      { key: "customer", icon: <ThumbsUp className="w-6 h-6" />, label: t("aboutPage.strategy.nodeCustomer") },
                    ] as { key: ArcKey; icon: React.ReactNode; label: string }[]
                  ).map(({ key, icon, label }) => (
                    <button
                      key={key}
                      className={`node ${activeKey === key ? "active" : ""}`}
                      data-key={key}
                      aria-selected={activeKey === key}
                      onClick={() => handleSetActiveKey(key)}
                    >
                      <span className="circle">{icon as any}</span>
                      <span className="label">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section id="cta-cuoi-trang" className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-2xl md:rounded-3xl text-white p-6 md:p-10"
              style={{
                backgroundImage:
                  "linear-gradient(60deg, rgba(15,27,34,.85), rgba(15,27,34,.55)), linear-gradient(to bottom right, #244556, #1b3542)",
              }}
            >
              {/* orbs */}
              <span className="absolute -left-16 -top-10 w-56 h-56 bg-[#38B6FF]/30 rounded-full blur-2xl opacity-50 pointer-events-none" />
              <span className="absolute -right-20 -bottom-16 w-72 h-72 bg-[#c9e265]/25 rounded-full blur-2xl opacity-50 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-4 lg:gap-x-3 relative z-10">
                <Reveal as="div" className="lg:col-span-8">
                  <h2 className="font-extrabold text-2xl md:text-3xl mb-2 tracking-tight">
                    {t("aboutPage.cta.title")}
                  </h2>
                  <p
                    className="text-white/70 text-sm"
                    dangerouslySetInnerHTML={{ __html: t("aboutPage.cta.subtitle") }}
                  />
                </Reveal>

                <Reveal delay={120} className="lg:col-span-4 lg:text-right">
                  <a
                    href="/lien-he"
                    className="inline-flex items-center gap-1 bg-white text-[#244556] font-semibold text-sm md:text-base px-7 py-3 rounded-lg shadow-[0_6px_16px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.10)] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:translate-y-px"
                  >
                    <PencilLine className="w-5 h-5" />
                    <span className="-ml-0.5">{t("aboutPage.cta.button")}</span>
                  </a>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== FLOAT CONTACT DOCK ===================== */}
      <div
        id="contactDock"
        ref={dockRef}
        className={`fixed right-4 bottom-5 z-[1045] flex flex-col items-center gap-2 ${
          dockOpen ? "open" : ""
        }`}
        aria-label={t("aboutPage.contactDock.ariaLabel")}
      >
        <div
          id="contactList"
          aria-hidden={!dockOpen}
          className={`list grid justify-items-center gap-2 transition-all duration-300 ${
            dockOpen ? "opacity-100 translate-y-0 max-h-96" : "opacity-0 translate-y-1 max-h-0 pointer-events-none"
          } overflow-hidden`}
        >
          {[
            {
              icon: <PhoneOutgoing className="w-5 h-5" />,
              href: `tel:${t("footer.contact.hotline", "19003339")}`,
              label: t("aboutPage.contactDock.hotline"),
            },
            { icon: <MessageCircle className="w-5 h-5" />, href: "#", label: t("aboutPage.contactDock.messenger") },
            { icon: "Z", href: "#", label: t("aboutPage.contactDock.zalo") },
            {
              icon: <Mail className="w-5 h-5" />,
              href: `mailto:${t("footer.contact.email", "contact@dinhcaoviet.vn")}`,
              label: t("aboutPage.contactDock.email"),
            },
            { icon: <MapPin className="w-5 h-5" />, href: "#", label: t("aboutPage.contactDock.map") },
          ].map((item, i) => (
            <a
              key={i}
              className="w-12 h-12 rounded-full inline-flex items-center justify-center border border-gray-200 bg-white text-[#244556] hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244556]/40 shadow-sm transition-colors"
              href={item.href}
              target={
                item.href.startsWith("http") || item.href.startsWith("mailto") || item.href.startsWith("tel")
                  ? "_blank"
                  : undefined
              }
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={item.label}
              title={item.label}
            >
              {item.icon === "Z" ? (
                <span className="font-bold text-lg select-none">Z</span>
              ) : (
                (item.icon as any)
              )}
            </a>
          ))}
        </div>

        <BackToTopButton />
        <ContactDock />
      </div>
    </div>
  );
}
