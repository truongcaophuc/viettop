"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlogSidebar from "../component/BlogSidebar";
import { useTranslation, Trans } from "react-i18next";
import { useMemo } from "react";
import ContactDock from "@/components/layout/ContactDock";

export default function Blog1() {
  const { t, i18n } = useTranslation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Nội dung các section — dùng i18n + Trans; re-compute khi đổi ngôn ngữ
  const contentSections = useMemo(
    () => [
      {
        key: "section1",
        content: (
          <>
            <p>
              <Trans
                i18nKey="blogPost.blogPost1.section1.p1"
                components={{ strong: <strong /> }}
              />
            </p>
            <p>{t("blogPost.blogPost1.section1.p2")}</p>
          </>
        ),
      },
      {
        key: "section2",
        content: (
          <>
            <h3 className="font-semibold text-lg mt-4 mb-2">
              {t("blogPost.blogPost1.section2.sub1Title")}
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>{t("blogPost.blogPost1.section2.sub1Item1")}</li>
              <li>{t("blogPost.blogPost1.section2.sub1Item2")}</li>
              <li>{t("blogPost.blogPost1.section2.sub1Item3")}</li>
              <li>{t("blogPost.blogPost1.section2.sub1Item4")}</li>
              <li>{t("blogPost.blogPost1.section2.sub1Item5")}</li>
              <li>{t("blogPost.blogPost1.section2.sub1Item6")}</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4 mb-2">
              {t("blogPost.blogPost1.section2.sub2Title")}
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                <Trans
                  i18nKey="blogPost.blogPost1.section2.sub2Item1"
                  components={{ strong: <strong /> }}
                />
              </li>
              <li>
                <Trans
                  i18nKey="blogPost.blogPost1.section2.sub2Item2"
                  components={{ strong: <strong /> }}
                />
              </li>
              <li>
                <Trans
                  i18nKey="blogPost.blogPost1.section2.sub2Item3"
                  components={{ strong: <strong /> }}
                />
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-4 mb-2">
              {t("blogPost.blogPost1.section2.sub3Title")}
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>{t("blogPost.blogPost1.section2.sub3Item1")}</li>
              <li>{t("blogPost.blogPost1.section2.sub3Item2")}</li>
              <li>{t("blogPost.blogPost1.section2.sub3Item3")}</li>
              <li>{t("blogPost.blogPost1.section2.sub3Item4")}</li>
              <li>{t("blogPost.blogPost1.section2.sub3Item5")}</li>
            </ul>
          </>
        ),
      },
      {
        key: "section3",
        content: (
          <>
            <p>{t("blogPost.blogPost1.section3.p1")}</p>
            <ul className="list-disc ml-6 space-y-2 mt-3">
              <li>
                <Trans
                  i18nKey="blogPost.blogPost1.section3.listItem1"
                  components={{ strong: <strong /> }}
                />
              </li>
              <li>
                <Trans
                  i18nKey="blogPost.blogPost1.section3.listItem2"
                  components={{ strong: <strong /> }}
                />
              </li>
              <li>
                <Trans
                  i18nKey="blogPost.blogPost1.section3.listItem3"
                  components={{ strong: <strong /> }}
                />
              </li>
              <li>
                <Trans
                  i18nKey="blogPost.blogPost1.section3.listItem4"
                  components={{ strong: <strong /> }}
                />
              </li>
            </ul>

            <motion.div
              variants={fadeInUp}
              className="relative w-full aspect-video mt-6 rounded-lg overflow-hidden shadow-lg group"
            >
              <Image
                src="/blog/blog1/GetImage (1).png"
                alt={t("blogPost.blogPost1.section3.imageAlt")}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          </>
        ),
      },
      {
        key: "section4",
        content: (
          <>
            <ul className="list-decimal ml-6 space-y-4">
              <li>
                <strong>{t("blogPost.blogPost1.section4.benefit1Title")}</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>{t("blogPost.blogPost1.section4.benefit1Item1")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit1Item2")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit1Item3")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit1Item4")}</li>
                </ul>
              </li>
              <li>
                <strong>{t("blogPost.blogPost1.section4.benefit2Title")}</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>{t("blogPost.blogPost1.section4.benefit2Item1")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit2Item2")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit2Item3")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit2Item4")}</li>
                </ul>
              </li>
              <li>
                <strong>{t("blogPost.blogPost1.section4.benefit3Title")}</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>{t("blogPost.blogPost1.section4.benefit3Item1")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit3Item2")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit3Item3")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit3Item4")}</li>
                </ul>
              </li>
              <li>
                <strong>{t("blogPost.blogPost1.section4.benefit4Title")}</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>{t("blogPost.blogPost1.section4.benefit4Item1")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit4Item2")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit4Item3")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit4Item4")}</li>
                </ul>
              </li>
              <li>
                <strong>{t("blogPost.blogPost1.section4.benefit5Title")}</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>{t("blogPost.blogPost1.section4.benefit5Item1")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit5Item2")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit5Item3")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit5Item4")}</li>
                </ul>
              </li>
              <li>
                <strong>{t("blogPost.blogPost1.section4.benefit6Title")}</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>{t("blogPost.blogPost1.section4.benefit6Item1")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit6Item2")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit6Item3")}</li>
                  <li>{t("blogPost.blogPost1.section4.benefit6Item4")}</li>
                </ul>
              </li>
            </ul>
          </>
        ),
      },
      {
        key: "section5",
        content: (
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <Trans
                i18nKey="blogPost.blogPost1.section5.item1"
                components={{ strong: <strong /> }}
              />
            </li>
            <li>
              <Trans
                i18nKey="blogPost.blogPost1.section5.item2"
                components={{ strong: <strong /> }}
              />
            </li>
            <li>
              <Trans
                i18nKey="blogPost.blogPost1.section5.item3"
                components={{ strong: <strong /> }}
              />
            </li>
            <li>
              <Trans
                i18nKey="blogPost.blogPost1.section5.item4"
                components={{ strong: <strong /> }}
              />
            </li>
            <li>
              <Trans
                i18nKey="blogPost.blogPost1.section5.item5"
                components={{ strong: <strong /> }}
              />
            </li>
          </ul>
        ),
      },
      {
        key: "section6",
        content: (
          <>
            <p>
              <Trans
                i18nKey="blogPost.blogPost1.section6.p1"
                components={{ strong: <strong /> }}
              />
            </p>
            <p className="mt-3">{t("blogPost.blogPost1.section6.p2")}</p>

            <motion.div
              variants={fadeInUp}
              className="relative w-full aspect-video mt-6 rounded-lg overflow-hidden shadow-lg group"
            >
              <Image
                src="/blog/blog1/GetImage (2).png"
                alt={t("blogPost.blogPost1.section6.imageAlt")}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          </>
        ),
      },
    ],
    [t, i18n.language]
  );

  // Static meta (nếu muốn i18n, có thể chuyển vào JSON)
  const blogMetaData = {
    date: "21/12/2025",
    author: "Thuật",
  };

  return (
    <>
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
      {/* CỘT TRÁI: NỘI DUNG */}
      <motion.div
        className="lg:col-span-2 space-y-6"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.p
          variants={fadeInUp}
          className="text-gray-500 text-xs uppercase tracking-wider mb-1"
        >
          {t("blogPost.blogPost1.category")}
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight"
        >
          {t("blogPost.blogPost1.title")}
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-sm text-gray-500">
          {t("blogPost.blogPost1.publishedOn")}{" "}
          <span className="font-medium text-gray-700">{blogMetaData.date}</span>{" "}
          {t("blogPost.blogPost1.publishedBy")}{" "}
          <span className="font-medium text-gray-800">{blogMetaData.author}</span>
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg group"
        >
          <Image
            src="/blog/blog1/banner.png"
            alt={t("blogPost.blogPost1.bannerAlt")}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </motion.div>

        {/* NỘI DUNG CHÍNH */}
        <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed space-y-4">
          {contentSections.map((section) => (
            <motion.div
              key={section.key}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800 !leading-snug">
                {t(`blogPost.blogPost1.${section.key}.title`)}
              </h2>
              <div>{section.content}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CỘT PHẢI: SIDEBAR */}
      <motion.div
        className="lg:col-span-1"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="sticky top-8">
          <BlogSidebar />
        </div>
      </motion.div>

    </section>
      <ContactDock />
    </>
  );
}
