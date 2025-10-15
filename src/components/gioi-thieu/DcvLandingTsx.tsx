"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
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

const ARC_TABS: Record<
  ArcKey,
  { title: string; lead: string; body: React.ReactNode; bg?: string }
> = {
  vision: {
    title: "TẦM NHÌN, SỨ MỆNH",
    lead:
      "Sứ mệnh của DCV là đưa công nghệ vận hành thông minh vào từng công trình.",
    body: (
      <p className="mb-0 text-white/[0.85]">
        Sứ mệnh của DCV là đưa công nghệ vận hành thông minh vào từng công
        trình, góp phần kiến tạo tương lai xanh, tiết kiệm năng lượng và nâng
        cao trải nghiệm người dùng. Chúng tôi tin rằng mỗi giải pháp kỹ thuật
        vững chắc hôm nay là nền tảng cho một thế giới kết nối bền vững mai sau.
      </p>
    ),
    bg:
      "https://media.istockphoto.com/id/1166272744/vi/anh/m%C3%A0n-h%C3%ACnh-c%C3%B4ng-ngh%E1%BB%87-k%E1%BB%B9-thu%E1%BA%ADt-s%E1%BB%91-t%C6%B0%C6%A1ng-lai-tr%C3%AAn-m%E1%BA%AFt.jpg?s=612x612&w=0&k=20&c=gQ9Z-ZgrIFrJV93j-2TNVrfE_yY3d5fY6BvDY1g3Uvg=",
  },
  strategy: {
    title: "CHIẾN LƯỢC CỐT LÕI",
    lead:
      "DCV định hướng phát triển bền vững dựa trên chất lượng, công nghệ và con người.",
    body: (
      <p className="mb-0 text-white/[0.85]">
        Đỉnh Cao Việt (DCV) định hướng phát triển bền vững dựa trên chất lượng,
        công nghệ và con người. Chúng tôi tập trung vào đổi mới giải pháp kỹ
        thuật, nâng cao năng lực đội ngũ, hợp tác chiến lược và xây dựng hệ
        thống M&E – Data Center hiện đại, tiết kiệm năng lượng, nhằm mang lại
        giá trị bền vững và hiệu quả tối đa cho khách hàng.
      </p>
    ),
    bg:
      "https://cdn.pixabay.com/photo/2019/09/29/22/06/light-bulb-4514505_1280.jpg",
  },
  customer: {
    title: "ĐỐI VỚI KHÁCH HÀNG",
    lead: "DCV đặt khách hàng ở vị trí trung tâm trong mọi hoạt động.",
    body: (
      <>
        <p className="text-white/[0.85]">
          Đỉnh Cao Việt (DCV) luôn đặt khách hàng ở vị trí trung tâm trong mọi
          hoạt động.
        </p>
        <p className="text-white/[0.85]">
          Chúng tôi cam kết mang đến giải pháp kỹ thuật tối ưu, an toàn và bền
          vững, giúp khách hàng vận hành hiệu quả, tiết kiệm năng lượng và ổn
          định lâu dài.
        </p>
        <p className="mb-0 text-white/[0.85]">
          Với phương châm “Chất lượng – Uy tín – Hiệu quả”, DCV không ngừng hoàn
          thiện để trở thành đối tác tin cậy và đồng hành phát triển cùng khách
          hàng.
        </p>
      </>
    ),
    bg:
      "https://www.pace.edu.vn/uploads/news/2023/04/ky-nang-giao-tiep-voi-khach-hang.jpg",
  },
  team: {
    title: "ĐỘI NGŨ NHÂN SỰ",
    lead:
      "Đội ngũ kỹ sư, chuyên viên, chuyên gia DCV có hơn 20 năm kinh nghiệm trên toàn quốc.",
    body: (
      <>
        <p className="text-white/[0.85]">
          Đội ngũ nhân sự của Đỉnh Cao Việt (DCV) bao gồm các kỹ sư, chuyên viên
          và chuyên gia kỹ thuật có hơn 20 năm kinh nghiệm trong việc tư vấn,
          thiết kế, thi công và bảo trì các hệ thống M&E, HVAC, BMS và Data
          Center trên toàn quốc.
        </p>
        <p className="mb-0 text-white/[0.85]">
          Mỗi thành viên trong đội ngũ DCV đều được đào tạo bài bản và sở hữu
          các chứng chỉ chuyên môn về thiết kế hệ thống điều hòa chính xác
          (PAC), UPS, PCCC, DCIM và quản lý năng lượng thông minh, đảm bảo đáp
          ứng các tiêu chuẩn kỹ thuật khắt khe nhất.
        </p>
      </>
    ),
    bg: "https://drh.vn/FileUpload/Images/bg14.jpg",
  },
};

export default function DcvLandingTsx() {
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

  const active = useMemo(() => ARC_TABS[activeKey], [activeKey]);
  const arcBg = useMemo(() => {
    const url =
      active.bg ??
      "https://cdn.pixabay.com/photo/2016/11/18/12/55/light-1834289_1280.jpg";
    return `url('${url}')`;
  }, [active.bg]);

  /* ====== Effects: dock, scroll, outside click ====== */
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

  /* ====== Layout arc nodes along the SVG path ====== */
  const layoutArcNodes = () => {
    const stage = stageRef.current;
    const svg = svgRef.current;
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
    const vb = (svg as any).viewBox.baseVal as {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    const scaleX = rect.width / vb.width;
    const scaleY = rect.height / vb.height;
    const total = path.getTotalLength();
    const step = 1 / (nodes.length + 1);

    nodes.forEach((node, idx) => {
      const t = (idx + 1) * step;
      const p = path.getPointAtLength(total * t);
      node.style.left = `${p.x * scaleX}px`;
      node.style.top = `${p.y * scaleY}px`;
    });
  };

  useEffect(() => {
    layoutArcNodes();
    let t: number | null = null;
    const onResize = () => {
      if (t) window.clearTimeout(t);
      t = window.setTimeout(layoutArcNodes, 120);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (t) window.clearTimeout(t);
    };
  }, []);

  return (
    <div
      className={`${bevn.className} bg-white text-black antialiased [text-rendering:optimizeLegibility]`}
    >
      {/* Inline styles for Arc/Dock */}
      <style>{`
        #arcStage{position:relative;height:380px}
        #arcSvg{position:absolute;inset:0;pointer-events:none}
        #arcNodes{position:absolute;inset:0;pointer-events:none}
        #arcNodes .node{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:8px;pointer-events:auto;cursor:pointer;background:transparent;border:0}
        #arcNodes .circle{width:78px;height:78px;border-radius:9999px;display:grid;place-items:center;background:#fff;color:#244556;box-shadow:0 12px 28px rgba(0,0,0,.25);transition:transform .18s ease, box-shadow .18s ease, outline-color .18s ease;outline:3px solid transparent}
        #arcNodes .node.active .circle{transform:translateY(-2px) scale(1.03);outline-color:rgba(201,226,101,.65)}
        #arcNodes .node:hover .circle{transform:translateY(-2px);box-shadow:0 16px 36px rgba(0,0,0,.35)}
        #arcNodes .label{font-weight:700;color:#fff;white-space:nowrap;text-shadow:0 2px 6px rgba(0,0,0,.35)}
        @media (max-width: 991.98px){
          #arcStage{height:auto;padding-top:6px}
          #arcSvg{display:none}
          #arcNodes{position:static;display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-start;padding-top:4px}
          #arcNodes .node{position:static;transform:none}
          #arcNodes .circle{width:58px;height:58px}
          #arcNodes .label{white-space:normal;max-width:160px;text-align:left;font-size:.95rem}
        }
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
              ĐỈNH CAO VIỆT – GIẢI PHÁP M&E TOÀN DIỆN CHO HẠ TẦNG CÔNG NGHỆ
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6">
              Đồng hành kiến tạo trung tâm dữ liệu (Data Center) & hạ tầng mạng
              ICT với hiệu suất – an toàn – bền vững.
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
                GIỚI THIỆU VỀ CHÚNG TÔI
              </Reveal>

              <Reveal delay={80} className="text-gray-600 text-lg mb-4">
                Công ty CP Tư Vấn Đầu Tư – Thương Mại ĐỈNH CAO VIỆT được thành
                lập từ 12/2004, tập trung vào các giải pháp M&E cho Data Center
                & hạ tầng ICT.
              </Reveal>
              <Reveal delay={160} className="text-gray-600 mb-4">
                Với gần 20 năm kinh nghiệm, chúng tôi là đối tác tin cậy của
                nhiều tập đoàn, ngân hàng, bệnh viện… cam kết giải pháp tối ưu –
                an toàn – bền vững.
              </Reveal>
              <Reveal delay={240} className="text-gray-600 mb-6">
                Chúng tôi cam kết mang đến giải pháp tối ưu, đảm bảo hiệu suất,
                an toàn và tính bền vững lâu dài trong vận hành hệ thống kỹ
                thuật.
              </Reveal>

              <Reveal delay={320}>
                <div className="flex gap-2 flex-wrap">
                  {/* Primary button */}
                  <a
                    className="inline-flex items-center gap-2 font-semibold rounded-full
                 border border-[#244556] bg-[#244556] text-white px-5 py-2.5 shadow-sm
                 hover:bg-white hover:text-[#244556]
                 transition-colors focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-[#244556]/40 active:translate-y-px"
                  >
                    <PhoneOutgoing className="w-5 h-5" />
                    Liên hệ tư vấn
                  </a>

                  {/* Secondary */}
                  <a
                    className="inline-flex items-center gap-2 font-semibold rounded-full
                  border border-[#c9e265] bg-[#c9e265] text-white px-5 py-2.5 shadow-sm
                  hover:bg-white hover:text-[#c9e265]
                  transition-colors focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-[#244556]/40 active:translate-y-px"
                  >
                    <GitBranch className="w-5 h-5" />
                    Giải pháp
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="relative">
                <img
                  className="w-full min-h-[260px] object-cover rounded-xl shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1280&auto=format&fit=crop"
                  alt="ĐỈNH CAO VIỆT – Giải pháp M&E"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== ARC STRATEGY ===================== */}
      <section
        id="tong-quan-chien-luoc"
        className="py-16 relative overflow-hidden text-white bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: arcBg }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(60deg,rgba(15,27,34,.85),rgba(15,27,34,.55))]" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left content */}
            <Reveal className="lg:col-span-5 order-2 lg:order-1">
              <div id="arcContent">
                <h2
                  id="arcTitle"
                  className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight text-[#c9e265]"
                >
                  {active.title}
                </h2>
                <p id="arcLead" className="text-white/[0.85] mb-3">
                  {active.lead}
                </p>
                <div id="arcBody" className="mb-3">
                  {active.body}
                </div>
              </div>
            </Reveal>

            {/* Right arc */}
            <Reveal delay={120} className="lg:col-span-7 order-1 lg:order-2">
              <div id="arcStage" ref={stageRef}>
                <svg
                  id="arcSvg"
                  ref={svgRef}
                  viewBox="0 0 800 360"
                  preserveAspectRatio="none"
                >
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
                  <button
                    className={`node ${activeKey === "vision" ? "active" : ""}`}
                    data-key="vision"
                    aria-selected={activeKey === "vision"}
                    onClick={() => setActiveKey("vision")}
                  >
                    <span className="circle">
                      <Flag className="w-6 h-6" />
                    </span>
                    <span className="label">Tầm nhìn – Sứ mệnh</span>
                  </button>

                  <button
                    className={`node ${
                      activeKey === "strategy" ? "active" : ""
                    }`}
                    data-key="strategy"
                    aria-selected={activeKey === "strategy"}
                    onClick={() => setActiveKey("strategy")}
                  >
                    <span className="circle">
                      <TrendingUp className="w-6 h-6" />
                    </span>
                    <span className="label">Chiến lược cốt lõi</span>
                  </button>

                  <button
                    className={`node ${activeKey === "team" ? "active" : ""}`}
                    data-key="team"
                    aria-selected={activeKey === "team"}
                    onClick={() => setActiveKey("team")}
                  >
                    <span className="circle">
                      <Users className="w-6 h-6" />
                    </span>
                    <span className="label">Đội ngũ nhân sự</span>
                  </button>

                  <button
                    className={`node ${
                      activeKey === "customer" ? "active" : ""
                    }`}
                    data-key="customer"
                    aria-selected={activeKey === "customer"}
                    onClick={() => setActiveKey("customer")}
                  >
                    <span className="circle">
                      <ThumbsUp className="w-6 h-6" />
                    </span>
                    <span className="label">Đối với khách hàng</span>
                  </button>
                </div>
              </div>
            </Reveal>
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
          <span className="absolute -left-16 -top-10 w-56 h-56 bg-[#38B6FF] rounded-full blur-2xl opacity-30" />
          <span className="absolute -right-20 -bottom-16 w-72 h-72 bg-[#c9e265] rounded-full blur-2xl opacity-25" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-2 lg:gap-x-3 relative">
            <Reveal as="div" className="lg:col-span-8">
              <h2 className="font-extrabold text-2xl md:text-3xl mb-2 tracking-tight">
                Cần một đối tác M&E chuyên nghiệp cho dự án của bạn?
              </h2>
              <p className="text-white/70 text-sm">
                Liên hệ ngay với{" "}
                <strong className="text-white">ĐỈNH CAO VIỆT</strong> để
                được tư vấn giải pháp tối ưu và hiệu quả nhất.
              </p>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-4 lg:text-right">
              <a
                href="contact.html"
                className="inline-flex items-center gap-1 bg-white text-[#244556] font-semibold
                           text-sm md:text-base px-7 py-3 rounded-lg
                           shadow-[0_6px_16px_rgba(0,0,0,0.06)]
                           hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.10)]
                           transition-transform focus-visible:outline-none focus-visible:ring-2
                           focus-visible:ring-white/40 active:translate-y-px"
              >
                <PencilLine className="w-5 h-5" />
                <span className="-ml-0.5">Tư vấn ngay</span>
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
          {[
            { icon: <PhoneOutgoing className="w-5 h-5" />, href: "tel:+842812345678", label: "Gọi Hotline" },
            { icon: <MessageCircle className="w-5 h-5" />, href: "#", label: "Messenger" },
            { icon: "Z", href: "#", label: "Zalo" },
            { icon: <Mail className="w-5 h-5" />, href: "mailto:contact@dinhcaoviet.vn", label: "Email" },
            { icon: <MapPin className="w-5 h-5" />, href: "https://maps.google.com/?q=ĐỈNH+CAO+VIỆT", label: "Bản đồ" },
          ].map((item, i) => (
            <a
              key={i}
              className="w-12 h-12 rounded-full inline-flex items-center justify-center
               border border-black/10 bg-white text-[#244556] hover:bg-white
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244556]/40
               shadow-none"
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener" : undefined}
              aria-label={item.label}
              title={item.label}
            >
              {item.icon as any}
            </a>
          ))}
        </div>

        {/* Toggle button: default (chưa nhấn) bg #c9e265, color #244556 */}
        <button
          id="dockToggle"
          type="button"
          aria-expanded={dockOpen}
          aria-controls="contactList"
          aria-label="Mở danh sách liên hệ"
          onClick={() => setDockOpen((v) => !v)}
          className={`w-14 h-14 rounded-full inline-flex items-center justify-center
              shadow-[0_10px_24px_rgba(0,0,0,0.18)]
              ${
                dockOpen
                  ? "bg-white text-[#244556]"
                  : "bg-[#c9e265] text-[#244556]"
              }
              hover:brightness-95 active:translate-y-px
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244556]/40`}
        >
          <MessageCircle className="w-6 h-6" />
        </button>

        <button
          id="backTop"
          type="button"
          aria-label="Lên đầu trang"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`${
            showBackTop ? "flex" : "hidden"
          } w-12 h-12 rounded-full inline-flex items-center justify-center
              shadow-[0_10px_24px_rgba(0,0,0,0.18)]
              bg-[#c9e265] text-[#244556]
              hover:brightness-95 active:translate-y-px
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244556]/40`}
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
