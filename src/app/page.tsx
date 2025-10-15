/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Image from "next/image";
import { motion } from "framer-motion";
import SwiperSection from '../components/home/Swiper';
import ArticleSlider from "../components/home/ArticleSlider";
import ContactDock from "@/components/layout/ContactDock";

export default function AboutSection() {
  // Animation slideInLeft / slideInRight
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-slideInLeft, .animate-slideInRight');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    });
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Animation fadeInUp
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-fadeInUp');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    });
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const leftIcons = document.querySelectorAll('.animate-left');
    const rightIcons = document.querySelectorAll('.animate-right');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    });

    leftIcons.forEach((el) => observer.observe(el));
    rightIcons.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: '🛠️', number: '20+', title: 'Năm kinh nghiệm' },
    { icon: '📂', number: '300+', title: 'Dự án triển khai' },
    { icon: '👥', number: '100+', title: 'Khách hàng doanh nghiệp' },
    { icon: '🌐', number: '15+', title: 'Đối tác công nghệ toàn cầu' },
  ];

  const solutions = [
    {
      id: 1,
      title: "Hệ thống Điện (Electrical Systems)",
      description: "Thiết kế và thi công hệ thống điện trung thế, hạ thế, chiếu sáng, tiếp địa và chống sét cho các công trình dân dụng – công nghiệp. Chúng tôi đảm bảo tiêu chuẩn an toàn, ổn định tải và tối ưu chi phí vận hành thông qua thiết bị chất lượng cao và giải pháp tiết kiệm điện năng. Ứng dụng: Nhà máy, tòa nhà văn phòng, khu công nghiệp, trung tâm dữ liệu. ",
      image: "/home/giải pháp/điện.png",
    },
    {
      id: 2,
      title: "Hệ thống Điều hòa & Thông gió (HVAC Systems) ",
      description: "Cung cấp giải pháp điều hòa không khí trung tâm (VRV/VRF, Chiller, AHU, FCU) và hệ thống thông gió, hút khói, cấp gió tươi cho công trình. Từ khâu thiết kế đến thi công, chúng tôi luôn chú trọng hiệu suất năng lượng, độ ồn thấp và độ bền thiết bị. Ứng dụng: Cao ốc, khách sạn, bệnh viện, trung tâm thương mại. ",
      image: "/home/giải pháp/thông gió.png",
    },
    {
      id: 3,
      title: "Hệ thống Tự động hóa & Quản lý tòa nhà (BMS) ",
      description: "Triển khai hệ thống điều khiển và giám sát tòa nhà thông minh (BMS) – kết nối các thiết bị điện, HVAC, chiếu sáng, an ninh, PCCC trên cùng nền tảng. Giải pháp giúp tối ưu năng lượng, nâng cao tiện nghi và giảm chi phí vận hành cho chủ đầu tư. Ứng dụng: Building, nhà máy, khu phức hợp, Data Center. ",
      image: "/home/giải pháp/toà nhà.png",
    },
    {
      id: 4,
      title: " Hệ thống Phòng cháy Chữa cháy (Fire Fight Systems)",
      description: "Thiết kế, lắp đặt và nghiệm thu hệ thống PCCC tự động gồm sprinkler, báo cháy địa chỉ, chữa cháy khí FM200/CO₂ theo tiêu chuẩn NFPA, TCVN. Chúng tôi đảm bảo mọi công trình đạt chuẩn an toàn và được cấp phép PCCC bởi cơ quan quản lý nhà nước. Ứng dụng: Nhà xưởng, tòa nhà, khách sạn, trung tâm dữ liệu. ",
      image: "/home/giải pháp/cháy.png",
    },
    {
      id: 5,
      title: "Hạ tầng CNTT & Data Center",
      description: "Cung cấp giải pháp hạ tầng công nghệ thông tin gồm hệ thống mạng LAN, WiFi, camera, Access Control, UPS, Rack, và hệ thống làm mát chuyên dụng cho trung tâm dữ liệu (Data Center). Chúng tôi tích hợp toàn bộ hệ thống điện, lạnh, mạng và bảo mật theo chuẩn TIA-942 / Uptime Tier. Ứng dụng: Doanh nghiệp, nhà máy, trung tâm dữ liệu, văn phòng. ",
      image: "/home/giải pháp/hạ tầng.png",
    },
    {
      id: 6,
      title: " Dịch vụ Bảo trì & Kỹ thuật ",
      description: "Dịch vụ bảo trì định kỳ, kiểm tra, nâng cấp và thay thế thiết bị M&E giúp duy trì hoạt động ổn định và kéo dài tuổi thọ hệ thống. Chúng tôi có đội ngũ kỹ sư trực 24/7, sẵn sàng hỗ trợ khẩn cấp và kiểm tra định kỳ theo hợp đồng bảo trì chuyên nghiệp. Ứng dụng: Tòa nhà, khu công nghiệp, nhà máy sản xuất. ",
      image: "/home/giải pháp/dịch vụ.png",
    },
  ];

  return (
    <>
      {/* --- Nạp Font Awesome vào <head> --- */}
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </Head>
      <section className="relative">
        <SwiperSection />
      </section>
      {/* --- SECTION GIỚI THIỆU --- */}
      <section className="bg-white pt-5 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
          
          {/* Cột trái */}
          <div className="w-full md:w-1/2 animate-slideInLeft opacity-0 transition-opacity duration-700">
            <h2 className="text-4xl text-[#003366] mb-4 leading-snug tracking-wide">
              GIẢI PHÁP CƠ ĐIỆN LẠNH & HẠ TẦNG TRUNG TÂM DỮ LIỆU DCV
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-justify">
              <strong>DCV</strong> chuyên thiết kế, thi công và tích hợp hệ thống Cơ Điện chính xác
              cho Trung tâm dữ liệu, nhà máy và cao ốc thương mại – đạt chuẩn quốc tế về hiệu suất và an toàn. 
            </p>

            <div className="flex gap-5">
              <button className="px-6 py-3 rounded-full bg-[#004b99] text-white font-medium border-b-4 border-red-600 hover:bg-red-600 hover:border-[#004b99] transition-all duration-300">
                XEM GIẢI PHÁP →
              </button>
              <button className="px-6 py-3 rounded-full bg-[#004b99] text-white font-medium border-b-4 border-red-600 hover:bg-red-600 hover:border-[#004b99] transition-all duration-300">
                LIÊN HỆ KỸ SƯ TƯ VẤN →
              </button>
            </div>
          </div>

          {/* Cột phải: số liệu nhanh */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 ">
            {stats.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 flex flex-col items-center justify-center text-center"
              >
                <div className="text-4xl mb-4"></div>
                <motion.h3
                  className="text-6xl font-bold text-red-600 mb-2 cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                >
                  {item.number}
                </motion.h3>
                <p className="text-gray-600 font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CSS Animation */}
        <style jsx>{`
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slideInLeft.show {
            animation: slideInLeft 1s ease forwards;
            opacity: 1;
          }
          .animate-slideInRight.show {
            animation: slideInRight 1s ease forwards;
            opacity: 1;
          }
        `}</style>
      </section>

      {/* --- SECTION TIÊU CHÍ ĐÁNH GIÁ --- */}
      <section
        className="relative py-20 overflow-hidden"
        style={{  backgroundImage:
      "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/home/Phần 3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",}}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Tiêu đề */}
          <div className="text-center mb-12 animate-fadeInUp opacity-0 transition-opacity duration-700">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#244556] via-[#38B6FF] to-[#c9e265] text-transparent bg-clip-text drop-shadow-lg">
              <span className="text-[#c9e265]">TIÊU CHÍ</span> ĐÁNH GIÁ THIẾT KẾ WEBSITE
            </h2>
            <p className="text-xl text-white mt-2 font-medium">
              mang lại hiệu quả cao
            </p>
          </div>

          {/* --- Khối nội dung chính --- */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Cột trái: 3 logo – logo nằm bên phải tiêu đề */}
            <div className="flex flex-col items-end gap-10 w-full md:w-1/4">
              {[
                { title: 'Fire & Safety', img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
                { title: 'CCTV & Access Control ', img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
                { title: 'Ground & Surge Protection', img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="animate-left opacity-0 group flex items-center justify-end gap-3 text-white hover:text-[#c9e265] transition-all duration-500 cursor-pointer transform hover:scale-105"
                >
                  <span className="font-medium text-lg">{item.title}</span>
                  <div className="w-12 h-12 rounded-full border-2 border-[#244556] flex items-center justify-center bg-white overflow-hidden group-hover:border-[#c9e265] transition-all duration-300">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Ô giữa */}
            <div className="bg-[#c9e265]/20 rounded-2xl p-10 shadow-md text-center transform transition-transform duration-500 hover:scale-105 w-full md:w-1/2">
              <h3 className="text-4xl font-semibold text-white  mb-2">DCV</h3>
              <h4 className="text-xl font-semibold text-white  mb-4">
                Giải pháp tổng thể về Cơ Điện & Hạ tầng Trung tâm dữ liệu
              </h4>
              <p className="text-white mb-8 leading-relaxed">
                Cung cấp các giải pháp trong lĩnh vực M&E – HVAC – BMS – DCIM, 
                đáp ứng nhu cầu vận hành ổn định, tiết kiệm năng lượng và an toàn tuyệt đối cho các trung tâm dữ liệu, nhà máy và cao ốc thương mại.
              </p>
              <button className="relative px-6 py-3 rounded-full border-2 border-[#244556] bg-[#244556] text-white font-medium overflow-hidden group">
                <span className="absolute inset-0 bg-[#38B6FF] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                <span className="relative z-10 transition-colors duration-500">
                  Liên hệ tư vấn →
                </span>
              </button>
            </div>

            {/* Cột phải: 3 logo – logo nằm bên trái tiêu đề */}
            <div className="flex flex-col items-start gap-10 w-full md:w-1/4">
              {[
                { title: 'HVAC & SmartCool PAC', img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
                { title: 'UPS & Power System', img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
                { title: 'BMS & DCIM', img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="animate-right opacity-0 group flex items-center justify-start gap-3 text-white hover:text-[#c9e265] transition-all duration-500 cursor-pointer transform hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-[#244556] flex items-center justify-center bg-white overflow-hidden group-hover:border-[#c9e265] transition-all duration-300">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="font-medium text-lg">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp.show {
            animation: fadeInUp 1s ease forwards;
            opacity: 1;
          }
          @keyframes slideInLeftIcons {
            from { opacity: 0; transform: translateX(-60px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes slideInRightIcons {
            from { opacity: 0; transform: translateX(60px); }
            to { opacity: 1; transform: translateX(0); }
          }

          .animate-left.show {
            animation: slideInLeftIcons 1.2s ease forwards;
          }

          .animate-right.show {
            animation: slideInRightIcons 0.8s ease forwards;
          }
        `}</style>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Tiêu đề */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
              ĐỐI TÁC & CÔNG NGHỆ TỪ CÁC{" "}
              <span className="text-red-600">THƯƠNG HIỆU HÀNG ĐẦU THẾ GIỚI</span>
          </motion.h2>

          {/* Mô tả */}
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            DCV hợp tác cùng các thương hiệu hàng đầu thế giới để mang đến giải pháp
            làm lạnh chính xác, tiết kiệm năng lượng và bền vững.
          </motion.p>

          {/* 3 khối logo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Logo 1 */}
            <motion.div
              className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <motion.div
                whileHover={{ scale: 1.09 }}
                className="overflow-hidden"
                transition={{ type: "spring", stiffness: 170, damping: 20 }}
              >
                <div className="relative w-[400px] h-[350px]">
                  <Image src="/home/Đối tác/sản xuất.png" alt="Airedale by Modine" fill />
                </div>

              </motion.div>
              <div className="p-6">
                <h3  className="text-2xl font-bold text-black mb-3 transition-all duration-300 hover:text-green-600 hover:-translate-y-1 hover:scale-105 hover:drop-shadow-md">
                  Airedale by Modine (UK)
                </h3>
                <p className="text-sm text-gray-600">
                  Nhà sản xuất hàng đầu thế giới về hệ thống làm lạnh chính xác (PAC, CRAC, CRAH, Chiller)
                  cho Data Center và công nghiệp HVAC.
                </p>
              </div>
            </motion.div>

            {/* Logo 2 */}
            <motion.div
              className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <motion.div
                whileHover={{ scale: 1.09 }}
                className="overflow-hidden"
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
              >
                <div className="relative w-[400px] h-[350px]">
                  <Image src="/home/Đối tác/tường quạt.png" alt="AireWall ONE" fill />
                </div>
              </motion.div>
              <div className="p-6">
                <h3  className="text-2xl font-bold text-black mb-3 transition-all duration-300 hover:text-green-600 hover:-translate-y-1 hover:scale-105 hover:drop-shadow-md">
                  AireWall ONE™ – Data Center Fan Array 
                </h3>
                <p className="text-sm text-gray-600">
                  Giải pháp tường quạt thông minh công suất 200–650 kW, giúp tăng hiệu suất trao đổi nhiệt và tiết kiệm năng lượng tới 30%. 
                </p>
              </div>
            </motion.div>

            {/* Logo 3 */}
            <motion.div
              className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <motion.div
                whileHover={{ scale: 1.09 }}
                className="overflow-hidden"
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
              >
                <div className="relative w-[400px] h-[350px]">
                  <Image src="/home/Đối tác/máy nén.png" alt="SmartCool" fill />
                </div>
              </motion.div>
              <div className="p-6">
                <h3  className="text-2xl font-bold text-black mb-3 transition-all duration-300 hover:text-green-600 hover:-translate-y-1 hover:scale-105 hover:drop-shadow-md">
                  SmartCool™ i-drive Inverter Compressor 
                </h3>
                <p className="text-sm text-gray-600">
                  Máy nén inverter công suất 5–83 kW, tiết kiệm tới 45% điện năng, phù hợp trung tâm dữ liệu vừa và nhỏ. 
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          {/* --- Tiêu đề chính + mô tả --- */}
          <h2 className=" md:text-4xl font-bold text-gray-800 mb-6">
            <span className="text-green-600">GIẢI PHÁP CƠ ĐIỆN</span> TỔNG THỂ CHO DOANH NGHIỆP & DỰ ÁN
          </h2>
          <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
            Chúng tôi cung cấp giải pháp M&E toàn diện từ tư vấn, thiết kế, thi công đến vận hành – đảm bảo công trình an toàn, tiết kiệm năng lượng và vận hành ổn định theo tiêu chuẩn quốc tế (TCVN, ISO, IEC…).
          </p>

          {/* --- Section card --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <motion.div
                key={solution.id}
                className="relative overflow-hidden rounded-lg flex flex-col"
                initial={{ opacity: 0, y: 50 }}      // ban đầu ẩn + dịch xuống 50px
                whileInView={{ opacity: 1, y: 0 }}   // khi vào view fade-in + slide lên
                viewport={{ once: true, amount: 0.7 }} // chỉ chạy 1 lần khi 30% card vào view
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Phần số và tiêu đề */}
                <div className="p-4 bg-white text-left">
                  <h3 className="text-5xl font-bold text-gray-800 mb-2 relative inline-block">
                    0{solution.id}
                  </h3>
                  <span className="block h-1 bg-green-600 mt-2 w-full"></span>
                  <h4 className="text-lg font-bold text-green-600 mb-2">
                    {solution.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{solution.description}</p>
                </div>

                {/* Phần ảnh */}
                <motion.div
                  className="relative w-full h-[280px] overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                >
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <br />
          <br />
          {/* --- Cam kết --- */}
          <h3 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
            Cam kết
          </h3>
          <p className="text-gray-700 mb-0 text-center max-w-5xl mx-auto">
            Với hơn 10 năm kinh nghiệm trong ngành Cơ Điện, chúng tôi tự tin mang đến giải pháp tối ưu – an toàn – hiệu quả cho từng dự án.
            Liên hệ ngay để được tư vấn kỹ thuật miễn phí và nhận đề xuất giải pháp phù hợp nhất cho công trình của bạn.
          </p>
        </div>
      </section>

      <ArticleSlider />
      {/* --- SECTION LIÊN HỆ TƯ VẤN --- */}
      <section className="relative bg-white text-[#244556] py-20 px-6 md:px-0">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-[#244556]/80 rounded-3xl p-10 shadow-xl">
          {/* --- Cột trái: Thông tin liên hệ --- */}
          <div className="space-y-6 animate-slideInLeft opacity-0 transition-opacity duration-700">
            <h2 className="text-3xl text-white font-bold leading-snug">
              Cần tư vấn giải pháp <span className="text-[#c9e265]">M&E – HVAC – BMS</span> cho dự án của bạn?
            </h2>
            <p className="text-lg text-gray-100">
              Liên hệ ngay để được hỗ trợ kỹ thuật miễn phí. 
            </p>
            <p className="text-sm text-gray-50 leading-none">
              Địa chỉ: 12/42 trường chinh - đà nẵng
            </p>
            <p className="text-sm text-gray-50 leading-none">
              Số điện thoại: 123456789
            </p>
            <p className="text-sm text-gray-50 leading-none">
              Email: 123@gmail.com
            </p>

            <div className="space-y-4">
              {/* Zalo */}
              <a
                href="#"
                className="flex items-center justify-between bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl shadow-md p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div>
                  <p className="text-sm font-medium">Nhắn tin qua</p>
                  <p className="text-lg font-bold">ZALO OFFICIAL CỦA HD AGENCY</p>
                </div>
                <img
                  src="https://hidosport.vn/wp-content/uploads/2023/09/zalo-icon.png"
                  alt="Zalo"
                  className="w-10 h-10 ml-3"
                />
              </a>

              {/* Hotline */}
              <a
                href="tel:0938002776"
                className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-md p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div>
                  <p className="text-sm font-medium">Gọi ngay hotline</p>
                  <p className="text-lg font-bold">0938 002 776</p>
                </div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/003/344/958/non_2x/hotline-symbol-with-headphones-and-customer-icon-vector.jpg"
                  alt="Hotline"
                  className="w-10 h-10 ml-3"
                />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="flex items-center justify-between bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl shadow-md p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div>
                  <p className="text-sm font-medium">Live chat trực tiếp</p>
                  <p className="text-lg font-bold">FACEBOOK OFFICIAL CỦA HD AGENCY</p>
                </div>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/018/930/698/small/facebook-logo-facebook-icon-transparent-free-png.png"
                  alt="Facebook"
                  className="w-10 h-10 ml-3"
                />
              </a>
            </div>
          </div>

          {/* --- Cột phải: Form liên hệ --- */}
          <div className="bg-white rounded-3xl p-8 text-[#244556] shadow-lg animate-slideInRight opacity-0 transition-opacity duration-700">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Nhận tư vấn miễn phí
            </h3>
            <form className="space-y-4">
              <input type="text" placeholder="Họ và tên*" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#c9e265] outline-none" />
              <input type="text" placeholder="Công ty / Dự án" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#c9e265] outline-none" />
              <input type="email" placeholder="Email*" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#c9e265] outline-none" />
              <input type="tel" placeholder="Số điện thoại*" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#c9e265] outline-none" />
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#c9e265] outline-none">
                <option>Loại giải pháp quan tâm</option>
                <option>M&E</option>
                <option>HVAC</option>
                <option>BMS</option>
              </select>
              <textarea
                placeholder="Nội dung yêu cầu"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#c9e265] outline-none"
              ></textarea>

              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-[#c9e265]" />
                <span>Đồng ý liên hệ</span>
              </label>

              <button
                type="submit"
                className="w-full bg-[#244556] text-white font-semibold py-3 rounded-full transition-all duration-500 hover:bg-gradient-to-r hover:from-[#244556] hover:to-[#c9e265]"
              >
                Gửi yêu cầu →
              </button>
            </form>
          </div>
        </div>

        {/* Hiệu ứng xuất hiện khi cuộn */}
        <style jsx>{`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-slideInLeft.show {
            animation: slideInLeft 1s ease forwards;
          }
          .animate-slideInRight.show {
            animation: slideInRight 1s ease forwards;
          }
        `}</style>
      </section>
      <ContactDock />
    </>
  );
}