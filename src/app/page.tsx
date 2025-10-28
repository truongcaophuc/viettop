/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useMemo } from 'react'; // Import useMemo
import Head from 'next/head';
import Image from "next/image";
import { motion } from "framer-motion";
import SwiperSection from '../components/home/Swiper'; // Assuming SwiperSection is already translated or doesn't need it
import ArticleSlider from "../components/home/ArticleSlider"; // Assuming ArticleSlider is already translated or doesn't need it
import ContactDock from "@/components/layout/ContactDock"; // Assuming ContactDock is already translated or doesn't need it
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function AboutSection() {
  const { t } = useTranslation(); // <-- Get the translation function

  // Animation useEffect hooks remain the same
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

  // --- Translate static data arrays using useMemo ---
  const stats = useMemo(() => [
    { icon: '🛠️', number: '20+', title: t('homepage.intro.stat1') },
    { icon: '📂', number: '300+', title: t('homepage.intro.stat2') },
    { icon: '👥', number: '100+', title: t('homepage.intro.stat3') },
    { icon: '🌐', number: '15+', title: t('homepage.intro.stat4') },
  ], [t]); // Depend on t

  const solutions = useMemo(() => [
    {
      id: 1,
      title: t('homepage.solutionsList.item1.title'),
      description: t('homepage.solutionsList.item1.description'),
      image: "/home/giải pháp/điện.png",
    },
    {
      id: 2,
      title: t('homepage.solutionsList.item2.title'),
      description: t('homepage.solutionsList.item2.description'),
      image: "/home/giải pháp/thông gió.png",
    },
    {
      id: 3,
      title: t('homepage.solutionsList.item3.title'),
      description: t('homepage.solutionsList.item3.description'),
      image: "/home/giải pháp/toà nhà.png",
    },
    {
      id: 4,
      title: t('homepage.solutionsList.item4.title'),
      description: t('homepage.solutionsList.item4.description'),
      image: "/home/giải pháp/cháy.png",
    },
    {
      id: 5,
      title: t('homepage.solutionsList.item5.title'),
      description: t('homepage.solutionsList.item5.description'),
      image: "/home/giải pháp/hạ tầng.png",
    },
    {
      id: 6,
      title: t('homepage.solutionsList.item6.title'),
      description: t('homepage.solutionsList.item6.description'),
      image: "/home/giải pháp/dịch vụ.png",
    },
  ], [t]); // Depend on t

  // --- Translate criteria lists using useMemo ---
  const leftCriteria = useMemo(() => [
    { title: t('homepage.criteria.left1'), img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
    { title: t('homepage.criteria.left2'), img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
    { title: t('homepage.criteria.left3'), img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
  ], [t]);

  const rightCriteria = useMemo(() => [
    { title: t('homepage.criteria.right1'), img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
    { title: t('homepage.criteria.right2'), img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
    { title: t('homepage.criteria.right3'), img: 'https://img.freepik.com/psd-cao-cap/logo-facebook-tren-mot-vong-tron-mau-xanh-lam_705838-12823.jpg?semt=ais_hybrid&w=740&q=80' },
  ], [t]);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        {/* Add title tag etc. if needed */}
      </Head>

      <section className="relative">
        {/* Assuming SwiperSection uses t() internally or is static */}
        <SwiperSection />
      </section>

      {/* --- SECTION GIỚI THIỆU --- */}
      <section className="bg-white pt-5 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
          {/* Cột trái */}
          <div className="w-full md:w-1/2 animate-slideInLeft opacity-0 transition-opacity duration-700">
            <h2 className="text-4xl text-[#003366] mb-4 leading-snug tracking-wide">
              {t('homepage.intro.title')}
            </h2>
            <p
              className="text-gray-700 mb-8 leading-relaxed text-justify"
              dangerouslySetInnerHTML={{ __html: t('homepage.intro.description') }} // Use dangerouslySetInnerHTML for <strong>
            />
            <div className="flex flex-col sm:flex-row gap-5"> {/* Adjusted flex for smaller screens */}
              <a // Changed to 'a' tag for linking
                href="/giai-phap" // Link to solutions page
                className="px-6 py-3 rounded-full bg-[#004b99] text-white font-medium border-b-4 border-red-600 hover:bg-red-600 hover:border-[#004b99] transition-all duration-300 text-center"
              >
                {t('homepage.intro.buttonSolutions')}
              </a>
              <a // Changed to 'a' tag for linking
                href="/lien-he" // Link to contact page
                className="px-6 py-3 rounded-full bg-[#004b99] text-white font-medium border-b-4 border-red-600 hover:bg-red-600 hover:border-[#004b99] transition-all duration-300 text-center"
              >
                {t('homepage.intro.buttonContact')}
              </a>
            </div>
          </div>

          {/* Cột phải: số liệu nhanh */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"> {/* Added gap */}
            {stats.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 sm:p-7 flex flex-col items-center justify-center text-center animate-slideInRight opacity-0 transition-opacity duration-700" // Added animation
                style={{ animationDelay: `${i * 150}ms` }} // Stagger animation
              >
                {/* <div className="text-4xl mb-4">{item.icon}</div> Remove emoji if not needed */}
                <motion.h3
                  className="text-5xl sm:text-6xl font-bold text-red-600 mb-2" // Removed cursor-pointer if not interactive
                  // whileHover={{ scale: 1.1 }} // Reduced scale effect slightly
                >
                  {item.number}
                </motion.h3>
                <p className="text-gray-600 font-medium text-sm sm:text-base">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CSS Animation (Keep this if Reveal component isn't used for stats) */}
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
            /* opacity: 1; */ /* Let animation handle opacity */
          }
          .animate-slideInRight.show {
            animation: slideInRight 1s ease forwards;
             /* opacity: 1; */ /* Let animation handle opacity */
          }
        `}</style>
      </section>

      {/* --- SECTION TIÊU CHÍ ĐÁNH GIÁ --- */}
      <section
        className="relative py-16 sm:py-20 overflow-hidden bg-fixed" // Added sm breakpoint, bg-fixed
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/home/Phần 3.png')", // Darker overlay
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6"> {/* Adjusted padding */}
          {/* Tiêu đề */}
          <div className="text-center mb-12 animate-fadeInUp opacity-0 transition-opacity duration-700">
            <h2
                className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-blue-300 via-cyan-300 to-[#c9e265] text-transparent bg-clip-text drop-shadow-md" // Adjusted gradient and shadow
                dangerouslySetInnerHTML={{ __html: t('homepage.criteria.title') }} // Use dangerouslySetInnerHTML for <span>
            />
            <p className="text-lg sm:text-xl text-white mt-3 font-medium"> {/* Adjusted size and margin */}
                {t('homepage.criteria.subtitle')}
            </p>
          </div>

          {/* --- Khối nội dung chính --- */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10"> {/* Changed to lg breakpoint */}

            {/* Cột trái */}
            <div className="flex flex-col items-center lg:items-end gap-8 w-full lg:w-1/4 order-2 lg:order-1"> {/* Adjusted gap, alignment, order */}
              {leftCriteria.map((item, i) => (
                <div
                  key={i}
                  className="animate-left opacity-0 group flex flex-row-reverse lg:flex-row items-center justify-center lg:justify-end gap-3 text-white hover:text-[#c9e265] transition-colors duration-300 cursor-default transform hover:scale-105" // Adjusted flex direction, justify, transition, cursor
                  style={{ animationDelay: `${i * 100}ms` }} // Stagger animation
                >
                  <span className="font-medium text-base sm:text-lg text-right lg:text-left">{item.title}</span> {/* Adjusted size and alignment */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/50 group-hover:border-[#c9e265] flex items-center justify-center bg-white overflow-hidden transition-all duration-300 shrink-0"> {/* Adjusted size, border, added shrink-0 */}
                    <img
                      src={item.img}
                      alt={item.title} // Use translated title for alt
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain group-hover:scale-110 transition-transform duration-300" // Adjusted size
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Ô giữa */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-10 shadow-lg text-center transform transition-transform duration-500 hover:scale-[1.03] w-full lg:w-1/2 order-1 lg:order-2 animate-fadeInUp opacity-0" style={{ animationDelay: '200ms' }}> {/* Darker bg, blur, padding, shadow, hover scale, order, animation */}
              <h3 className="text-3xl sm:text-4xl font-semibold text-[#c9e265] mb-2">{t('homepage.criteria.centerTitle')}</h3> {/* Changed color */}
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">
                {t('homepage.criteria.centerSubtitle')}
              </h4>
              <p className="text-white/80 mb-8 leading-relaxed text-sm sm:text-base"> {/* Softer white */}
                {t('homepage.criteria.centerDescription')}
              </p>
              <a // Changed to 'a' tag
                href="/lien-he" // Link to contact page
                className="relative inline-block px-6 py-3 rounded-full border-2 border-[#c9e265] bg-[#c9e265] text-[#244556] font-semibold overflow-hidden group transition-all duration-300 hover:bg-transparent hover:text-[#c9e265]" // Changed style, added inline-block
              >
                {/* <span className="absolute inset-0 bg-[#38B6FF] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span> */}
                <span className="relative z-10">
                  {t('homepage.criteria.centerButton')}
                </span>
              </a>
            </div>

            {/* Cột phải */}
            <div className="flex flex-col items-center lg:items-start gap-8 w-full lg:w-1/4 order-3"> {/* Adjusted gap, alignment, order */}
              {rightCriteria.map((item, i) => (
                <div
                  key={i}
                  className="animate-right opacity-0 group flex items-center justify-center lg:justify-start gap-3 text-white hover:text-[#c9e265] transition-colors duration-300 cursor-default transform hover:scale-105" // Adjusted justify, transition, cursor
                   style={{ animationDelay: `${i * 100}ms` }} // Stagger animation
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/50 group-hover:border-[#c9e265] flex items-center justify-center bg-white overflow-hidden transition-all duration-300 shrink-0"> {/* Adjusted size, border, added shrink-0 */}
                    <img
                      src={item.img}
                      alt={item.title} // Use translated title for alt
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain group-hover:scale-110 transition-transform duration-300" // Adjusted size
                    />
                  </div>
                  <span className="font-medium text-base sm:text-lg">{item.title}</span> {/* Adjusted size */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animation CSS (keep if not using Reveal component for icons) */}
        <style jsx>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp.show {
            animation: fadeInUp 1s ease forwards;
             /* opacity: 1; */
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
            animation: slideInLeftIcons 1s ease forwards;
             /* opacity: 1; */
          }
          .animate-right.show {
            animation: slideInRightIcons 1s ease forwards;
             /* opacity: 1; */
          }
        `}</style>
      </section>

      {/* --- SECTION ĐỐI TÁC --- */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6"> {/* Adjusted padding */}
        <div className="max-w-7xl mx-auto text-center">
          {/* Tiêu đề */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Ensures animation runs only once
            transition={{ duration: 0.6 }}
            dangerouslySetInnerHTML={{ __html: t('homepage.partners.title') }} // Use dangerouslySetInnerHTML for <span>
          />

          {/* Mô tả */}
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto mb-12 sm:mb-16" // Adjusted margin
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }} // Slight delay
          >
            {t('homepage.partners.description')}
          </motion.p>

          {/* 3 khối logo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"> {/* Adjusted gap */}
            {/* Logo 1 */}
            <motion.div
              className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg flex flex-col" // Added flex flex-col
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }} // Stagger delay
            >
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[300px] xl:h-[350px] overflow-hidden"> {/* Adjusted height, added overflow-hidden */}
                 <Image
                    src="/home/Đối tác/sản xuất.png"
                    alt={t('homepage.partners.partner1Title')} // Use translated alt text
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes prop
                    className="object-contain p-4 sm:p-6 transition-transform duration-500 ease-in-out group-hover:scale-105" // Use object-contain, add padding, adjust hover
                 />
              </div>
              <div className="p-5 sm:p-6 flex-grow"> {/* Added flex-grow */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"> {/* Adjusted text color */}
                  {t('homepage.partners.partner1Title')}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed"> {/* Adjusted text size */}
                  {t('homepage.partners.partner1Description')}
                </p>
              </div>
            </motion.div>

            {/* Logo 2 */}
             <motion.div
              className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg flex flex-col"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }} // Stagger delay
            >
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[300px] xl:h-[350px] overflow-hidden">
                 <Image
                    src="/home/Đối tác/tường quạt.png"
                    alt={t('homepage.partners.partner2Title')}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-4 sm:p-6 transition-transform duration-500 ease-in-out group-hover:scale-105"
                 />
              </div>
              <div className="p-5 sm:p-6 flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {t('homepage.partners.partner2Title')}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {t('homepage.partners.partner2Description')}
                </p>
              </div>
            </motion.div>

            {/* Logo 3 */}
             <motion.div
              className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg flex flex-col"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }} // Stagger delay
            >
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[300px] xl:h-[350px] overflow-hidden">
                 <Image
                    src="/home/Đối tác/máy nén.png"
                    alt={t('homepage.partners.partner3Title')}
                    fill
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-4 sm:p-6 transition-transform duration-500 ease-in-out group-hover:scale-105"
                 />
              </div>
              <div className="p-5 sm:p-6 flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {t('homepage.partners.partner3Title')}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {t('homepage.partners.partner3Description')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION GIẢI PHÁP --- */}
      <section className="py-16 bg-gray-100"> {/* Changed background */}
        <div className="container mx-auto px-4 text-center">
          {/* --- Tiêu đề chính + mô tả --- */}
           <motion.h2 // Added motion
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            dangerouslySetInnerHTML={{ __html: t('homepage.solutionsList.title') }} // Use dangerouslySetInnerHTML for <span>
          />
          <motion.p // Added motion
            className="text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('homepage.solutionsList.description')}
          </motion.p>

          {/* --- Section card --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"> {/* Increased gap */}
            {solutions.map((solution, index) => ( // Added index
              <motion.div
                key={solution.id}
                className="bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group" // Added group class
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }} // Trigger animation earlier
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }} // Stagger delay based on index
              >
                 {/* Phần ảnh */}
                <div className="relative w-full h-[220px] sm:h-[250px] overflow-hidden"> {/* Adjusted height */}
                  <Image
                    src={solution.image}
                    alt={solution.title} // Alt text from translated title
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" // Slightly faster scale
                  />
                 </div>
                 {/* Phần số và tiêu đề */}
                <div className="p-5 sm:p-6 text-left flex-grow flex flex-col"> {/* Added flex-grow and flex-col */}
                  <div className='mb-3'> {/* Group number and line */}
                    <h3 className="text-4xl sm:text-5xl font-bold text-gray-300 relative inline-block leading-none"> {/* Lighter number */}
                      0{solution.id}
                    </h3>
                    <span className="block h-0.5 bg-green-500 mt-1 w-10"></span> {/* Shorter line */}
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors"> {/* Adjusted size and hover color */}
                    {solution.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{solution.description}</p> {/* Added flex-grow */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- Cam kết --- */}
           <motion.div // Wrap in motion
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
           >
              <h3 className="text-3xl md:text-4xl font-extrabold text-green-600 mb-4"> {/* Adjusted color */}
                {t('homepage.solutionsList.commitmentTitle')}
              </h3>
              <p className="text-gray-700 mb-4 text-center max-w-4xl mx-auto"> {/* Adjusted max-width */}
                {t('homepage.solutionsList.commitmentP1')}
              </p>
               <p className="text-gray-700 mb-0 text-center max-w-4xl mx-auto">
                 {t('homepage.solutionsList.commitmentP2')}
              </p>
           </motion.div>
        </div>
      </section>

      {/* Assuming ArticleSlider uses t() internally or is static */}
      <ArticleSlider />

      {/* --- SECTION LIÊN HỆ TƯ VẤN --- */}
      <section id="contact" className="relative bg-gray-50 text-[#244556] py-16 sm:py-20 px-4 sm:px-6"> {/* Changed background, padding */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center bg-gradient-to-br from-[#244556] to-[#1a3542] rounded-2xl md:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl overflow-hidden"> {/* Gradient bg, adjusted padding/gap/radius */}
          {/* Overlay elements */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#c9e265]/10 rounded-full filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

          {/* --- Cột trái: Thông tin liên hệ --- */}
          <motion.div // Added motion
            className="space-y-5 sm:space-y-6 relative z-10" // Added relative z-10
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2
              className="text-3xl sm:text-4xl text-white font-bold leading-tight" // Adjusted leading
              dangerouslySetInnerHTML={{ __html: t('homepage.contactForm.title') }} // Use dangerouslySetInnerHTML for <span>
            />
            <p className="text-base sm:text-lg text-gray-200"> {/* Softer text color */}
              {t('homepage.contactForm.subtitle')}
            </p>
            {/* Contact Details */}
            <div className="space-y-2 pt-2 text-sm sm:text-base text-gray-100">
               <p><span className='font-semibold'>{t('homepage.contactForm.addressLabel')}</span> {t('homepage.contactForm.addressValue')}</p>
               <p><span className='font-semibold'>{t('homepage.contactForm.phoneLabel')}</span> {t('homepage.contactForm.phoneValue')}</p>
               <p><span className='font-semibold'>{t('homepage.contactForm.emailLabel')}</span> {t('homepage.contactForm.emailValue')}</p>
            </div>


            {/* Contact Buttons */}
            <div className="space-y-3 sm:space-y-4 pt-4">
              {/* Zalo */}
              <a
                href="#" // Add Zalo link
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-xl shadow-md p-3 sm:p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              >
                <div>
                  <p className="text-xs sm:text-sm font-medium">{t('homepage.contactForm.zaloSub')}</p>
                  <p className="text-base sm:text-lg font-bold">{t('homepage.contactForm.zaloTitle')}</p>
                </div>
                <img
                  src="https://hidosport.vn/wp-content/uploads/2023/09/zalo-icon.png" // Consider hosting locally
                  alt="Zalo"
                  className="w-8 h-8 sm:w-10 sm:h-10 ml-3"
                />
              </a>

              {/* Hotline */}
              <a
                href={`tel:${t('homepage.contactForm.hotlineTitle')}`} // Use translated number
                className="flex items-center justify-between bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-md p-3 sm:p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg" // Changed color
              >
                <div>
                  <p className="text-xs sm:text-sm font-medium">{t('homepage.contactForm.hotlineSub')}</p>
                  <p className="text-base sm:text-lg font-bold">{t('homepage.contactForm.hotlineTitle')}</p>
                </div>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/018/726/054/small_2x/accept-phone-icon-social-icon-set-png.png" // Consider hosting locally or using an icon font
                  alt="Hotline"
                  className="w-8 h-8 sm:w-10 sm:h-10 ml-3"
                />
              </a>

              {/* Facebook */}
              <a
                href="#" // Add Facebook link
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between bg-gradient-to-r from-[#1877F2] to-[#1d6acf] text-white rounded-xl shadow-md p-3 sm:p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg" // Changed color to FB blue
              >
                <div>
                  <p className="text-xs sm:text-sm font-medium">{t('homepage.contactForm.facebookSub')}</p>
                  <p className="text-base sm:text-lg font-bold">{t('homepage.contactForm.facebookTitle')}</p>
                </div>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/018/930/698/small/facebook-logo-facebook-icon-transparent-free-png.png" // Consider hosting locally
                  alt="Facebook"
                  className="w-8 h-8 sm:w-10 sm:h-10 ml-3"
                />
              </a>
            </div>
          </motion.div>

          {/* --- Cột phải: Form liên hệ --- */}
          <motion.div // Added motion
            className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 text-[#244556] shadow-lg relative z-10" // Added relative z-10
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }} // Added delay
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
              {t('homepage.contactForm.formTitle')}
            </h3>
            <form className="space-y-4">
              <input type="text" placeholder={t('homepage.contactForm.formNamePlaceholder')} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#c9e265] focus:border-[#c9e265] outline-none transition-colors" required /> {/* Added required, adjusted py */}
              <input type="text" placeholder={t('homepage.contactForm.formCompanyPlaceholder')} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#c9e265] focus:border-[#c9e265] outline-none transition-colors" />
              <input type="email" placeholder={t('homepage.contactForm.formEmailPlaceholder')} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#c9e265] focus:border-[#c9e265] outline-none transition-colors" required />
              <input type="tel" placeholder={t('homepage.contactForm.formPhonePlaceholder')} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#c9e265] focus:border-[#c9e265] outline-none transition-colors" required />
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-500 focus:text-gray-900 focus:ring-2 focus:ring-[#c9e265] focus:border-[#c9e265] outline-none transition-colors appearance-none bg-white bg-no-repeat bg-right px-8" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.7rem center', backgroundSize: '1.2em 1.2em' }}> {/* Styled select */}
                <option value="">{t('homepage.contactForm.formInterestSelect')}</option>
                <option value="M&E">{t('homepage.contactForm.formInterestOption1')}</option>
                <option value="HVAC">{t('homepage.contactForm.formInterestOption2')}</option>
                <option value="BMS">{t('homepage.contactForm.formInterestOption3')}</option>
              </select>
              <textarea
                placeholder={t('homepage.contactForm.formMessagePlaceholder')}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#c9e265] focus:border-[#c9e265] outline-none transition-colors resize-none" // Added resize-none
              ></textarea>

              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" className="accent-[#c9e265] h-4 w-4 rounded border-gray-300 focus:ring-[#c9e265]/50" required /> {/* Added required, styled checkbox */}
                <span>{t('homepage.contactForm.formAgreement')}</span>
              </label>

              <button
                type="submit"
                className="w-full bg-[#244556] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#2a526b] hover:to-[#1a3542] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#244556]/50" // Adjusted hover, added focus styles
              >
                {t('homepage.contactForm.formButton')}
              </button>
            </form>
          </motion.div>
        </div>

      </section>

      {/* Assuming ContactDock uses t() internally or is static */}
      <ContactDock />
    </>
  );
}