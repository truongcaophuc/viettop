"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlogSidebar from "../component/BlogSidebar"; // Assuming BlogSidebar uses t() internally
import { useTranslation, Trans } from 'react-i18next'; // 1. Import hook and Trans

export default function Blog5() {
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
    const translation = t(contentKey, '');
    if (!translation) return null;
    if (translation.includes('<strong')) { // Check for <strong> tag specifically
      return <Trans i18nKey={contentKey} components={{ strong: <strong /> }} />;
    }
    return translation;
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10 md:gap-12 lg:gap-16"> {/* Adjusted layout */}
      {/* --- CỘT TRÁI: NỘI DUNG CHÍNH --- */}
      <motion.div
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={{ // Stagger children
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
        }}
      >
        <motion.p
          variants={fadeInUp}
          className="text-gray-500 text-xs uppercase tracking-wider mb-1"
        >
          {t('blogPost.blogPost5.category')} {/* 3. Use t() */}
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight"
        >
          {t('blogPost.blogPost5.title')} {/* 3. Use t() */}
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-sm text-gray-500">
          {t('blogPost.blogPost5.publishedOn')}{" "}
          <span className="font-medium text-gray-700">{blogMetaData.date}</span>{" "}
          {t('blogPost.blogPost5.publishedBy')}{" "}
          <span className="font-medium text-gray-800">{blogMetaData.author}</span>
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg group"
        >
          <Image
            src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg" // Consider relevant image
            alt={t('blogPost.blogPost5.bannerAlt')} // 3. Use t()
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.div>

        {/* --- NỘI DUNG CHÍNH --- */}
        <motion.div
            variants={fadeInUp}
            className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed space-y-4 prose-headings:text-gray-800 prose-headings:font-semibold prose-h2:text-2xl prose-h3:text-xl prose-strong:text-gray-800 prose-ul:space-y-1 prose-li:my-0.5"
        >
            {/* Introduction */}
            <h2 id="intro">{t('blogPost.blogPost5.section1Title')}</h2>
            <p>{renderContent('blogPost.blogPost5.section1P1')}</p>
            <p>{renderContent('blogPost.blogPost5.section1P2')}</p>

            {/* Modbus Protocol */}
            <h2 id="modbus">{t('blogPost.blogPost5.section2Title')}</h2>
            <h3 id="modbus-overview">{t('blogPost.blogPost5.section2Sub1Title')}</h3>
            <p>{renderContent('blogPost.blogPost5.section2Sub1P1')}</p>
            <ul>
                <li>{renderContent('blogPost.blogPost5.section2Sub1Item1')}</li>
                <li>{renderContent('blogPost.blogPost5.section2Sub1Item2')}</li>
                <li>{renderContent('blogPost.blogPost5.section2Sub1Item3')}</li>
            </ul>
            <h3 id="modbus-mechanism">{t('blogPost.blogPost5.section2Sub2Title')}</h3>
            <p>{renderContent('blogPost.blogPost5.section2Sub2P1')}</p>
            <ul>
                <li>{renderContent('blogPost.blogPost5.section2Sub2Item1')}</li>
                <li>{renderContent('blogPost.blogPost5.section2Sub2Item2')}</li>
                <li>{renderContent('blogPost.blogPost5.section2Sub2Item3')}</li>
                <li>{renderContent('blogPost.blogPost5.section2Sub2Item4')}</li>
            </ul>
            {/* Image 1 */}
            <div className="relative w-full aspect-video my-6 rounded-lg overflow-hidden shadow-md group">
                <Image
                    src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg" // Replace image
                    alt={t('blogPost.blogPost5.imageAlt1')}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* SNMP Protocol */}
            <h2 id="snmp">{t('blogPost.blogPost5.section3Title')}</h2>
            <h3 id="snmp-overview">{t('blogPost.blogPost5.section3Sub1Title')}</h3>
            <p>{renderContent('blogPost.blogPost5.section3Sub1P1')}</p>
            <ul>
                <li>{renderContent('blogPost.blogPost5.section3Sub1Item1')}</li>
                <li>{renderContent('blogPost.blogPost5.section3Sub1Item2')}</li>
                <li>{renderContent('blogPost.blogPost5.section3Sub1Item3')}</li>
            </ul>
            <h3 id="snmp-mechanism">{t('blogPost.blogPost5.section3Sub2Title')}</h3>
            <p>{renderContent('blogPost.blogPost5.section3Sub2P1')}</p>
            <ul>
                <li>{renderContent('blogPost.blogPost5.section3Sub2Item1')}</li>
                <li>{renderContent('blogPost.blogPost5.section3Sub2Item2')}</li>
                <li>{renderContent('blogPost.blogPost5.section3Sub2Item3')}</li>
                <li>{renderContent('blogPost.blogPost5.section3Sub2Item4')}</li>
            </ul>
             {/* Image 2 */}
            <div className="relative w-full aspect-video my-6 rounded-lg overflow-hidden shadow-md group">
                <Image
                    src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg" // Replace image
                    alt={t('blogPost.blogPost5.imageAlt2')}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Data Transmission */}
            <h2 id="transmission">{t('blogPost.blogPost5.section4Title')}</h2>
            <h3 id="modbus-process">{t('blogPost.blogPost5.section4Sub1Title')}</h3>
            <ul>
                <li>{renderContent('blogPost.blogPost5.section4Sub1Item1')}</li>
                <li>{renderContent('blogPost.blogPost5.section4Sub1Item2')}</li>
                <li>{renderContent('blogPost.blogPost5.section4Sub1Item3')}</li>
                <li>{renderContent('blogPost.blogPost5.section4Sub1Item4')}</li>
            </ul>
            <h3 id="snmp-process">{t('blogPost.blogPost5.section4Sub2Title')}</h3>
             <ul>
                <li>{renderContent('blogPost.blogPost5.section4Sub2Item1')}</li>
                <li>{renderContent('blogPost.blogPost5.section4Sub2Item2')}</li>
                <li>{renderContent('blogPost.blogPost5.section4Sub2Item3')}</li>
                <li>{renderContent('blogPost.blogPost5.section4Sub2Item4')}</li>
            </ul>

             {/* Practical Applications */}
            <h2 id="applications">{t('blogPost.blogPost5.section5Title')}</h2>
            <h3 id="modbus-apps">{t('blogPost.blogPost5.section5Sub1Title')}</h3>
             <ul>
                <li>{renderContent('blogPost.blogPost5.section5Sub1Item1')}</li>
                <li>{renderContent('blogPost.blogPost5.section5Sub1Item2')}</li>
                <li>{renderContent('blogPost.blogPost5.section5Sub1Item3')}</li>
            </ul>
            <h3 id="snmp-apps">{t('blogPost.blogPost5.section5Sub2Title')}</h3>
             <ul>
                <li>{renderContent('blogPost.blogPost5.section5Sub2Item1')}</li>
                <li>{renderContent('blogPost.blogPost5.section5Sub2Item2')}</li>
                <li>{renderContent('blogPost.blogPost5.section5Sub2Item3')}</li>
            </ul>
             <h3 id="combined-apps">{t('blogPost.blogPost5.section5Sub3Title')}</h3>
             <ul>
                <li>{renderContent('blogPost.blogPost5.section5Sub3Item1')}</li>
                <li>{renderContent('blogPost.blogPost5.section5Sub3Item2')}</li>
                <li>{renderContent('blogPost.blogPost5.section5Sub3Item3')}</li>
                <li>{renderContent('blogPost.blogPost5.section5Sub3Item4')}</li>
            </ul>

             {/* Benefits */}
             <h2 id="benefits">{t('blogPost.blogPost5.section6Title')}</h2>
              <ul>
                <li>{renderContent('blogPost.blogPost5.section6Item1')}</li>
                <li>{renderContent('blogPost.blogPost5.section6Item2')}</li>
                <li>{renderContent('blogPost.blogPost5.section6Item3')}</li>
                <li>{renderContent('blogPost.blogPost5.section6Item4')}</li>
                <li>{renderContent('blogPost.blogPost5.section6Item5')}</li>
                <li>{renderContent('blogPost.blogPost5.section6Item6')}</li>
            </ul>

             {/* Conclusion */}
            <h2 id="conclusion">{t('blogPost.blogPost5.section7Title')}</h2>
            <p>{renderContent('blogPost.blogPost5.section7P1')}</p>
            <p>{renderContent('blogPost.blogPost5.section7P2')}</p>
             {/* Image 3 */}
             <div className="relative w-full aspect-video mt-6 rounded-lg overflow-hidden shadow-md group">
                <Image
                    src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg" // Replace image
                    alt={t('blogPost.blogPost5.imageAlt3')}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

        </motion.div>
      </motion.div>

      {/* --- CỘT PHẢI: SIDEBAR --- */}
      <motion.div
        className="lg:col-span-1"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }} // Adjusted delay
        viewport={{ once: true }}
      >
        <div className="sticky top-8">
           {/* Assuming BlogSidebar is translated */}
          <BlogSidebar />
        </div>
      </motion.div>
    </section>
  );
}