/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
// 

'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Image from "next/image";
import { motion } from "framer-motion";

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
    {
      icon: "https://www.shutterstock.com/image-vector/green-leaf-initial-letter-g-260nw-1737514385.jpg", // thay icon thực tế nếu có
      value: "20+",
      label: "Năm kinh nghiệm",
      color: "text-[#0B3B60]",
    },
    {
      icon: "https://www.shutterstock.com/image-vector/green-leaf-initial-letter-g-260nw-1737514385.jpg",
      value: "300+",
      label: "Dự án triển khai",
      color: "text-[#E63946]",
    },
    {
      icon: "https://www.shutterstock.com/image-vector/green-leaf-initial-letter-g-260nw-1737514385.jpg",
      value: "100+",
      label: "Khách hàng doanh nghiệp",
      color: "text-[#0B3B60]",
    },
    {
      icon: "https://www.shutterstock.com/image-vector/green-leaf-initial-letter-g-260nw-1737514385.jpg",
      value: "15+",
      label: "Đối tác công nghệ toàn cầu",
      color: "text-[#E63946]",
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

      {/* --- SECTION GIỚI THIỆU --- */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
          
          {/* Cột trái */}
          <div className="w-full md:w-1/2 animate-slideInLeft opacity-0 transition-opacity duration-700">
            <h2 className="text-3xl text-[#003366] mb-4 leading-snug tracking-wide">
              CÔNG TY CỔ PHẦN DỊCH VỤ & KỸ THUẬT CƠ ĐIỆN LẠNH R.E.E
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-justify">
              <strong>R.E.E M&E</strong> là nhà thầu cơ điện công trình hàng đầu tại Việt Nam
              với hơn 45 năm kinh nghiệm trong thi công hệ thống cơ điện cho các dự án dân dụng,
              thương mại và công nghiệp. Chúng tôi luôn hướng tới việc cung cấp các giải pháp tối ưu nhất
              về kỹ thuật, chất lượng và hiệu quả cho khách hàng.
            </p>

            <div className="flex gap-5">
              <button className="px-6 py-3 rounded-full bg-[#004b99] text-white font-medium border-b-4 border-red-600 hover:bg-red-600 hover:border-[#004b99] transition-all duration-300">
                TÌM HIỂU THÊM →
              </button>
              <button className="px-6 py-3 rounded-full bg-[#004b99] text-white font-medium border-b-4 border-red-600 hover:bg-red-600 hover:border-[#004b99] transition-all duration-300">
                HỒ SƠ NĂNG LỰC →
              </button>
            </div>
          </div>

          {/* Cột phải: ảnh */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-5 animate-slideInRight opacity-0 transition-opacity duration-700">
            {[
              { src: 'https://reeme.com.vn/storage/banner/ab1.jpg', title: 'LỊCH SỬ PHÁT TRIỂN' },
              { src: 'https://reeme.com.vn/storage/banner/ab1.jpg', title: 'TẦM NHÌN' },
              { src: 'https://reeme.com.vn/storage/banner/ab1.jpg', title: 'SỨ MỆNH' },
              { src: 'https://reeme.com.vn/storage/banner/ab1.jpg', title: 'GIÁ TRỊ CỐT LÕI' },
            ].map((item, i) => (
              <div key={i} className="relative overflow-hidden rounded-md shadow-md group">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="bg-[#003366]/80 text-white text-center py-3 text-sm font-medium relative z-10">
                  {item.title}
                </div>
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

      <section
        className="relative bg-white py-20"
        style={{
          backgroundImage: "url('/images/bg-pattern-light.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B3B60]">
            Số liệu nhanh
          </h2>
          <p className="text-gray-600 mb-12">
            Những con số thể hiện kinh nghiệm, uy tín và năng lực triển khai của
            DCV.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08, y: -6 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-10 bg-white hover:shadow-2xl transition-all duration-300"
          >
            {/* Vòng tròn chứa icon */}
            <div className="w-28 h-28 flex items-center justify-center rounded-full bg-gray-200 mb-6 shadow-inner">
              <Image
                src={stat.icon}
                alt={stat.label}
                width={64}  // tăng kích thước icon
                height={64}
                className="object-contain"
              />
            </div>

            {/* Số liệu */}
            <h3 className={`text-4xl font-bold ${stat.color} mb-2`}>
              {stat.value}
            </h3>

            {/* Nhãn */}
            <p className="text-gray-700 text-lg">{stat.label}</p>
          </motion.div>
        ))}

          </div>
        </div>
      </section>
      {/* --- SECTION TIÊU CHÍ ĐÁNH GIÁ --- */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ backgroundImage: "url('https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2024_5_20_638518205896977020_hinh-nen-may-tinh-chill-cover.jpeg')" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Tiêu đề */}
          <div className="text-center mb-12 animate-fadeInUp opacity-0 transition-opacity duration-700">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#244556] via-[#38B6FF] to-[#c9e265] text-transparent bg-clip-text drop-shadow-lg">
              <span className="text-[#c9e265]">Tiêu chí</span> đánh giá khi thiết kế website
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
                { title: 'Chuẩn SEO', img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
                { title: 'Tốc độ', img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
                { title: 'Tính năng', img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
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
              <h3 className="text-4xl font-semibold text-white  mb-2">01</h3>
              <h4 className="text-xl font-semibold text-white  mb-4">
                Website chuẩn SEO
              </h4>
              <p className="text-white mb-8 leading-relaxed">
                Thiết kế website chuyên nghiệp chuẩn SEO giúp bạn dễ dàng tối ưu hóa và đưa sản phẩm – Dịch vụ của doanh nghiệp lên TOP tìm kiếm Google.  
                Website được thiết kế chuẩn SEO ngay từ khi xây dựng, từ UI/UX, source code đến tốc độ tải trang.
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
                { title: 'Chuẩn UX/UI', img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
                { title: 'Kết nối', img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
                { title: 'Nền tảng', img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
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
            to { opacity: 1; transform: translateY(1); }
          }
          .animate-fadeInUp.show {
            animation: fadeInUp 1s ease forwards;
            opacity: 1;
          }
             @keyframes slideInLeftIcons {
            from { opacity: 0; transform: translateX(-60px); }
            to { opacity: 1; transform: translateX(1); }
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
            Đối tác & Công nghệ từ các thương hiệu hàng đầu thế giới
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
              className="bg-gray-50 rounded-2xl shadow-sm p-8 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src="https://maisonoffice.vn/wp-content/uploads/2023/10/0-toa-nha-dep-nhat-the-gioi-1.jpg"
                alt="Airedale by Modine"
                width={120}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Airedale by Modine (UK)
              </h3>
              <p className="text-sm text-gray-600">
                Nhà sản xuất hàng đầu thế giới về hệ thống làm lạnh chính xác (PAC, CRAC, CRAH, Chiller)
                cho Data Center và công nghiệp HVAC.
              </p>
            </motion.div>

            {/* Logo 2 */}
            <motion.div
              className="bg-gray-50 rounded-2xl shadow-sm p-8 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src="https://maisonoffice.vn/wp-content/uploads/2023/10/0-toa-nha-dep-nhat-the-gioi-1.jpg"
                alt="AireWall ONE"
                width={120}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                AireWall ONE™ – Data Center Fan Array
              </h3>
              <p className="text-sm text-gray-600">
                Giải pháp tường quạt thông minh công suất 200–650 kW, giúp tăng hiệu suất trao đổi
                nhiệt và tiết kiệm năng lượng tới 30%.
              </p>
            </motion.div>

            {/* Logo 3 */}
            <motion.div
              className="bg-gray-50 rounded-2xl shadow-sm p-8 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src="https://maisonoffice.vn/wp-content/uploads/2023/10/0-toa-nha-dep-nhat-the-gioi-1.jpg"
                alt="SmartCool i-drive"
                width={120}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                SmartCool™ i-drive Inverter Compressor
              </h3>
              <p className="text-sm text-gray-600">
                Máy nén inverter công suất 5–83 kW, tiết kiệm tới 45% điện năng,
                phù hợp trung tâm dữ liệu vừa và nhỏ.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* --- SECTION LIÊN HỆ TƯ VẤN --- */}
      <section
        // className="relative bg-[#244556] text-white py-20 px-6 md:px-0"
        // style={{
        //   backgroundImage: "url('/images/bg-contact.jpg')", 
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
         className="relative bg-white text-[#244556] py-20 px-6 md:px-0"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-[#244556]/80 rounded-3xl p-10 shadow-xl">
          {/* --- Cột trái: Thông tin liên hệ --- */}
          <div className="space-y-6 animate-slideInLeft opacity-0 transition-opacity duration-700">
            <h2 className="text-3xl font-bold leading-snug">
              Cần tư vấn giải pháp <span className="text-[#c9e265]">M&E – HVAC – BMS</span> cho dự án của bạn?
            </h2>
            <p className="text-lg text-gray-100">
              Liên hệ ngay để được hỗ trợ kỹ thuật miễn phí. Liên hệ ngay để được hỗ trợ kỹ thuật miễn phí.Liên hệ ngay để được hỗ trợ kỹ thuật miễn phí.Liên hệ ngay để được hỗ trợ kỹ thuật miễn phí.Liên hệ ngay để được hỗ trợ kỹ thuật miễn phí.
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

    </>
  );
}
