"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlogSidebar from "../component/BlogSidebar"; // Assuming BlogSidebar uses t() internally
import { useTranslation, Trans } from 'react-i18next'; // 1. Import hook and Trans
import { useMemo } from 'react'; // Import useMemo
import ContactDock from "@/components/layout/ContactDock";

export default function Blog4() {
  const { t } = useTranslation(); // 2. Get translation function

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Static data - Assuming date and author don't need translation for now
  const blogMetaData = {
    date: "15/10/2025", // Match the original component date
    author: "Thuật",
  };

  // Helper function to render content with potential HTML
  const renderContent = (contentKey: string) => {
    const translation = t(contentKey, ''); // Get translation, provide fallback
    if (!translation) return null;

    // Check for common HTML tags used in the JSON
    if (translation.includes('<strong') || translation.includes('<span')) {
      // Pass allowed components to Trans
      return <Trans i18nKey={contentKey} components={{ strong: <strong />, span: <span className="font-semibold text-accent" /> }} />;
    }
    return translation;
  };

  return (
    <>
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10 md:gap-12 lg:gap-16"> {/* Adjusted layout */}
      {/* --- CỘT TRÁI: NỘI DUNG CHÍNH --- */}
      <motion.div
        className="space-y-6" // Adjusted spacing
        initial="hidden"
        animate="visible"
        variants={{ // Define container variants for staggering
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } // Faster stagger
        }}
      >
        <motion.p
          variants={fadeInUp} // Use variants for children
          className="text-gray-500 text-xs uppercase tracking-wider mb-1" // Adjusted size/margin/tracking
        >
          {t('blogPost.blogPost4.category')} {/* 3. Use t() */}
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight" // Adjusted color/leading
        >
          {t('blogPost.blogPost4.title')} {/* 3. Use t() */}
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-sm text-gray-500"> {/* Removed mb-6 */}
          {t('blogPost.blogPost4.publishedOn')}{" "}
          <span className="font-medium text-gray-700">{blogMetaData.date}</span>{" "}
          {t('blogPost.blogPost4.publishedBy')}{" "}
          <span className="font-medium text-gray-800">{blogMetaData.author}</span>
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg group" // Use aspect-video, group
        >
          <Image
            src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg" // Consider a more relevant image
            alt={t('blogPost.blogPost4.bannerAlt')} // 3. Use t()
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105" // Hover effect
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> {/* Subtle overlay */}
        </motion.div>

        {/* --- NỘI DUNG CHÍNH --- */}
        {/* Apply prose styles for typography */}
        <motion.div
            variants={fadeInUp} // Apply animation to the content container
            className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed space-y-4 prose-headings:text-gray-800 prose-headings:font-semibold prose-h2:text-2xl prose-h3:text-xl prose-strong:text-gray-800 prose-ul:space-y-1 prose-li:my-0.5" // Added prose styles
        >
            {/* Section 1 */}
            <h2 id="section1">{t('blogPost.blogPost4.section1Title')}</h2>
            <p>{renderContent('blogPost.blogPost4.section1P1')}</p>
            <div className="relative w-full aspect-video my-6 rounded-lg overflow-hidden shadow-md group">
                <Image
                    src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg" // Replace image
                    alt={t('blogPost.blogPost4.imageAlt1')}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Section 2 */}
            <h2 id="section2">{t('blogPost.blogPost4.section2Title')}</h2>
            <p>{renderContent('blogPost.blogPost4.section2P1')}</p>
            <ul>
                <li>{renderContent('blogPost.blogPost4.section2Item1')}</li>
                <li>{renderContent('blogPost.blogPost4.section2Item2')}</li>
                <li>{renderContent('blogPost.blogPost4.section2Item3')}</li>
            </ul>

            {/* Section 3 */}
            <h2 id="section3">{t('blogPost.blogPost4.section3Title')}</h2>
            <p>{renderContent('blogPost.blogPost4.section3P1')}</p>
            <ul>
                <li>{renderContent('blogPost.blogPost4.section3Item1')}</li>
                <li>{renderContent('blogPost.blogPost4.section3Item2')}</li>
                <li>{renderContent('blogPost.blogPost4.section3Item3')}</li>
                <li>{renderContent('blogPost.blogPost4.section3Item4')}</li>
            </ul>
             <div className="relative w-full aspect-video my-6 rounded-lg overflow-hidden shadow-md group">
                <Image
                    src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg" // Replace image
                    alt={t('blogPost.blogPost4.imageAlt2')}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

             {/* Section 4 */}
            <h2 id="section4">{t('blogPost.blogPost4.section4Title')}</h2>
            <p>{renderContent('blogPost.blogPost4.section4P1')}</p>
            <ul>
                <li>{renderContent('blogPost.blogPost4.section4Item1')}</li>
                <li>{renderContent('blogPost.blogPost4.section4Item2')}</li>
                <li>{renderContent('blogPost.blogPost4.section4Item3')}</li>
                <li>{renderContent('blogPost.blogPost4.section4Item4')}</li>
            </ul>

            {/* Section 5 */}
            <h2 id="section5">{t('blogPost.blogPost4.section5Title')}</h2>
            <p>{renderContent('blogPost.blogPost4.section5P1')}</p>
            <ul>
                <li>{renderContent('blogPost.blogPost4.section5Item1')}</li>
                <li>{renderContent('blogPost.blogPost4.section5Item2')}</li>
                <li>{renderContent('blogPost.blogPost4.section5Item3')}</li>
                <li>{renderContent('blogPost.blogPost4.section5Item4')}</li>
            </ul>
            <p>{renderContent('blogPost.blogPost4.section5P2')}</p>
             <div className="relative w-full aspect-video my-6 rounded-lg overflow-hidden shadow-md group">
                <Image
                    src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg" // Replace image
                    alt={t('blogPost.blogPost4.imageAlt3')}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Section 6 */}
            <h2 id="section6">{t('blogPost.blogPost4.section6Title')}</h2>
            <ul>
                <li>{renderContent('blogPost.blogPost4.section6Item1')}</li>
                <li>{renderContent('blogPost.blogPost4.section6Item2')}</li>
                <li>{renderContent('blogPost.blogPost4.section6Item3')}</li>
                <li>{renderContent('blogPost.blogPost4.section6Item4')}</li>
                <li>{renderContent('blogPost.blogPost4.section6Item5')}</li>
                <li>{renderContent('blogPost.blogPost4.section6Item6')}</li>
            </ul>

            {/* Section 7 - Conclusion */}
            <h2 id="section7">{t('blogPost.blogPost4.section7Title')}</h2>
            <p>{renderContent('blogPost.blogPost4.section7P1')}</p>
            <p>{renderContent('blogPost.blogPost4.section7P2')}</p>
             <div className="relative w-full aspect-video mt-6 rounded-lg overflow-hidden shadow-md group"> {/* Use aspect-video, group */}
                <Image
                    src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg" // Replace image
                    alt={t('blogPost.blogPost4.imageAlt4')}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105" // Hover effect
                />
            </div>

        </motion.div>
      </motion.div>

      {/* --- CỘT PHẢI: SIDEBAR --- */}
      <motion.div
        className="lg:col-span-1"
        initial={{ opacity: 0, x: 40 }} // Adjusted x offset
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }} // Added delay
        viewport={{ once: true }}
      >
        <div className="sticky top-8">
           {/* Assuming BlogSidebar is translated */}
          <BlogSidebar />
        </div>
      </motion.div>
    </section>
      <ContactDock />
    </>
  );
}