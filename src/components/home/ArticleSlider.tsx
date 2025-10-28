"use client";

import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next"; // <-- 1. Import hook
import { useMemo } from "react"; // <-- Import useMemo

// ... (NextArrow and PrevArrow components remain the same) ...
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NextArrow = ({ onClick }: any) => (
  <button
    className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full text-gray-600 hover:bg-green-500 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-green-500/50" // Adjusted position, added focus style
    onClick={onClick}
    aria-label="Next Article" // Add aria-label
  >
    <FaChevronRight size={18} />
  </button>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrevArrow = ({ onClick }: any) => (
  <button
    className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full text-gray-600 hover:bg-green-500 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-green-500/50" // Adjusted position, added focus style
    onClick={onClick}
    aria-label="Previous Article" // Add aria-label
  >
    <FaChevronLeft size={18} />
  </button>
);


export default function ArticleSlider() {
  const { t } = useTranslation(); // <-- 2. Get translation function

  // --- 3. Wrap articles array in useMemo and use t() ---
  const articles = useMemo(() => [
    {
      id: 1,
      title: t('homepage.articles.article1.title'),
      category: t('homepage.articles.article1.category'),
      description: t('homepage.articles.article1.description'),
      image: "/home/kiến thức/điều hoà.png", // Keep image paths
    },
    {
      id: 2,
      title: t('homepage.articles.article2.title'),
      category: t('homepage.articles.article2.category'),
      description: t('homepage.articles.article2.description'),
      image: "/home/kiến thức/kiểm tra5.png",
    },
    {
      id: 3,
      title: t('homepage.articles.article3.title'),
      category: t('homepage.articles.article3.category'),
      description: t('homepage.articles.article3.description'),
      image: "/home/kiến thức/PCCC.png",
    },
    {
      id: 4,
      title: t('homepage.articles.article4.title'),
      category: t('homepage.articles.article4.category'),
      description: t('homepage.articles.article4.description'),
      image: "/home/kiến thức/toà nhà.png",
    },
    {
      id: 5,
      title: t('homepage.articles.article5.title'),
      category: t('homepage.articles.article5.category'),
      description: t('homepage.articles.article5.description'),
      image: "/home/giải pháp/điện.png",
    },
  ], [t]); // Depend on t

  const settings = {
    dots: false,
    infinite: articles.length > 4, // Only infinite if more slides than shown
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: Math.min(4, articles.length), infinite: articles.length > 4 } }, // Adjust slidesToShow and infinite
      { breakpoint: 1280, settings: { slidesToShow: Math.min(3, articles.length), infinite: articles.length > 3 } },
      { breakpoint: 1024, settings: { slidesToShow: Math.min(2, articles.length), infinite: articles.length > 2, arrows: articles.length > 2 } }, // Hide arrows if not enough slides
      { breakpoint: 640, settings: { slidesToShow: 1, infinite: articles.length > 1, arrows: articles.length > 1 } }, // Add mobile breakpoint
    ],
    className: "relative article-slider", // Add class for styling arrows
  };

  return (
    <section className="bg-gray-100 py-16 sm:py-20 relative overflow-hidden"> {/* Changed bg, adjusted padding, added overflow */}
      {/* Optional: Add decorative background elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-green-200/30 rounded-full filter blur-3xl opacity-50 -translate-x-1/4"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-200/30 rounded-full filter blur-3xl opacity-50 translate-x-1/4"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* Adjusted padding */}
        <motion.div // Wrap title and subtitle for animation
          className="text-center mb-10 sm:mb-14" // Adjusted margin
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"> {/* Adjusted margin */}
             {/* --- 4. Use t() for section title --- */}
             {t('homepage.articles.sectionTitle')}
          </h2>
          <p className="text-gray-600 text-base mt-2 font-normal max-w-2xl mx-auto"> {/* Adjusted text color */}
            {/* --- 5. Use t() for section subtitle --- */}
            {t('homepage.articles.sectionSubtitle')}
          </p>
        </motion.div>

        {/* Desktop Slider */}
        <div className="hidden md:block relative pb-4"> {/* Added padding bottom for potential focus rings */}
          <Slider {...settings}>
            {articles.map((article, index) => ( // Added index
              <div key={article.id} className="px-3 md:px-4 h-full"> {/* Added h-full */}
                <motion.div
                  className="overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group" // Added group, adjusted shadow
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }} // Trigger earlier
                  transition={{ duration: 0.5, delay: index * 0.05 }} // Faster stagger
                >
                  <div className="relative w-full h-48 sm:h-56 lg:h-60 flex-shrink-0 overflow-hidden"> {/* Adjusted height, added overflow */}
                    <Image
                      src={article.image}
                      alt={article.title} // Alt text uses translated title
                      fill
                      sizes="(max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw" // Adjusted sizes
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" // Slightly faster scale
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-xs text-green-600 font-semibold mb-1 uppercase tracking-wider"> {/* Changed color, added tracking */}
                      {article.category} {/* Category from translated data */}
                    </p>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors flex-grow min-h-[3.5rem]"> {/* Adjusted size, hover color, added flex-grow and min-height for alignment */}
                       {/* Make title clickable (link to article page?) */}
                       <a href="#" className="hover:underline focus:outline-none focus:ring-1 focus:ring-green-500 rounded">
                           {article.title} {/* Title from translated data */}
                       </a>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3"> {/* Added line-clamp */}
                      {article.description} {/* Description from translated data */}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Mobile List */}
        <div className="block md:hidden space-y-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              className="overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group" // Added group
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8, // Slightly faster
                delay: index * 0.1, // Faster stagger
                ease: "easeOut",
              }}
            >
              <div className="relative w-full h-52 sm:h-64 overflow-hidden"> {/* Added overflow */}
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5"> {/* Adjusted padding */}
                <p className="text-xs text-green-600 font-semibold mb-1 uppercase tracking-wider">
                  {article.category}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
                  <a href="#" className="hover:underline focus:outline-none focus:ring-1 focus:ring-green-500 rounded">
                     {article.title}
                  </a>
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {article.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
       {/* Add custom styles for arrow positioning if needed */}
       <style jsx global>{`
          .article-slider .slick-prev {
              left: -10px; /* Adjust as needed */
          }
          .article-slider .slick-next {
              right: -10px; /* Adjust as needed */
          }
          @media (max-width: 640px) {
             .article-slider .slick-prev {
                 left: 5px;
             }
             .article-slider .slick-next {
                  right: 5px;
             }
          }
       `}</style>
    </section>
  );
}