"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlogSidebar from "../component/BlogSidebar";
import { useTranslation, Trans } from "react-i18next";

export default function Blog2() {
  const { t } = useTranslation(); // hoặc useTranslation('blog') nếu bạn dùng namespace riêng

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Dự liệu nội dung được build bằng t()/Trans để tự động theo ngôn ngữ
  const sections = [
    {
      title: t("blogPost.blogPost2.section1.title"),
      content: (
        <>
          <p>
            <Trans
              i18nKey="blogPost.blogPost2.section1.p1"
              components={{ strong: <strong /> }}
            />
          </p>
        </>
      ),
    },
    {
      title: t("blogPost.blogPost2.section2.title"),
      content: (
        <>
          <h3 className="font-semibold mt-4 mb-2">
            {t("blogPost.blogPost2.section2.sub1Title")}
          </h3>
          <p>
            <Trans
              i18nKey="blogPost.blogPost2.section2.sub1P"
              components={{ strong: <strong /> }}
            />
          </p>

          <h3 className="font-semibold mt-4 mb-2">
            {t("blogPost.blogPost2.section2.sub2Title")}
          </h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>{t("blogPost.blogPost2.section2.sub2List1")}</li>
            <li>{t("blogPost.blogPost2.section2.sub2List2")}</li>
            <li>{t("blogPost.blogPost2.section2.sub2List3")}</li>
            <li>{t("blogPost.blogPost2.section2.sub2List4")}</li>
            <li>{t("blogPost.blogPost2.section2.sub2List5")}</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">
            {t("blogPost.blogPost2.section2.sub3Title")}
          </h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>{t("blogPost.blogPost2.section2.sub3List1")}</li>
            <li>{t("blogPost.blogPost2.section2.sub3List2")}</li>
            <li>{t("blogPost.blogPost2.section2.sub3List3")}</li>
            <li>{t("blogPost.blogPost2.section2.sub3List4")}</li>
            <li>{t("blogPost.blogPost2.section2.sub3List5")}</li>
            <li>{t("blogPost.blogPost2.section2.sub3List6")}</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">
            {t("blogPost.blogPost2.section2.sub4Title")}
          </h3>
          <p>{t("blogPost.blogPost2.section2.sub4P")}</p>

          <motion.div
            variants={fadeInUp}
            className="relative w-full h-[360px] mt-6 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/blog/blog2/GetImage (1).jpeg"
              alt={t("blogPost.blogPost2.section2.imageAlt")}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </>
      ),
    },
    {
      title: t("blogPost.blogPost2.section3.title"),
      content: (
        <>
          <h3 className="font-semibold mt-4 mb-2">
            {t("blogPost.blogPost2.section3.sub1Title")}
          </h3>
          <p>
            <Trans
              i18nKey="blogPost.blogPost2.section3.sub1P"
              components={{ strong: <strong /> }}
            />
          </p>

          <h3 className="font-semibold mt-4 mb-2">
            {t("blogPost.blogPost2.section3.sub2Title")}
          </h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>{t("blogPost.blogPost2.section3.sub2List1")}</li>
            <li>{t("blogPost.blogPost2.section3.sub2List2")}</li>
            <li>{t("blogPost.blogPost2.section3.sub2List3")}</li>
            <li>{t("blogPost.blogPost2.section3.sub2List4")}</li>
            <li>{t("blogPost.blogPost2.section3.sub2List5")}</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">
            {t("blogPost.blogPost2.section3.sub3Title")}
          </h3>
          <p>{t("blogPost.blogPost2.section3.sub3P")}</p>

          <h3 className="font-semibold mt-4 mb-2">
            {t("blogPost.blogPost2.section3.sub4Title")}
          </h3>
          <p>
            <strong>{t("blogPost.blogPost2.section3.sub4ProsTitle")}</strong>
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>{t("blogPost.blogPost2.section3.sub4Pros")}</li>
          </ul>
          <p className="mt-2">
            <strong>{t("blogPost.blogPost2.section3.sub4ConsTitle")}</strong>
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>{t("blogPost.blogPost2.section3.sub4Cons")}</li>
          </ul>
        </>
      ),
    },
    {
      title: t("blogPost.blogPost2.section4.title"),
      content: (
        <>
          <p>
            <Trans
              i18nKey="blogPost.blogPost2.section4.p1"
              components={{ strong: <strong /> }}
            />
          </p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>{t("blogPost.blogPost2.section4.list1")}</li>
            <li>{t("blogPost.blogPost2.section4.list2")}</li>
            <li>{t("blogPost.blogPost2.section4.list3")}</li>
            <li>{t("blogPost.blogPost2.section4.list4")}</li>
            <li>{t("blogPost.blogPost2.section4.list5")}</li>
          </ul>
          <p className="mt-3">{t("blogPost.blogPost2.section4.p2")}</p>
        </>
      ),
    },
    {
      title: t("blogPost.blogPost2.section5.title"),
      content: (
        <>
          <div className="space-y-6 leading-relaxed">
            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">
                {t("blogPost.blogPost2.section5.sub1Title")}
              </h3>
              <p>{t("blogPost.blogPost2.section5.sub1P")}</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">
                {t("blogPost.blogPost2.section5.sub2Title")}
              </h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t("blogPost.blogPost2.section5.sub2List1")}</li>
                <li>{t("blogPost.blogPost2.section5.sub2List2")}</li>
                <li>{t("blogPost.blogPost2.section5.sub2List3")}</li>
                <li>{t("blogPost.blogPost2.section5.sub2List4")}</li>
                <li>{t("blogPost.blogPost2.section5.sub2List5")}</li>
                <li>{t("blogPost.blogPost2.section5.sub2List6")}</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">
                {t("blogPost.blogPost2.section5.sub3Title")}
              </h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t("blogPost.blogPost2.section5.sub3List1")}</li>
                <li>{t("blogPost.blogPost2.section5.sub3List2")}</li>
                <li>{t("blogPost.blogPost2.section5.sub3List3")}</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">
                {t("blogPost.blogPost2.section5.sub4Title")}
              </h3>
              <p className="font-semibold">
                {t("blogPost.blogPost2.section5.sub4P1")}
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t("blogPost.blogPost2.section5.sub4P1List1")}</li>
                <li>{t("blogPost.blogPost2.section5.sub4P1List2")}</li>
                <li>{t("blogPost.blogPost2.section5.sub4P1List3")}</li>
                <li>{t("blogPost.blogPost2.section5.sub4P1List4")}</li>
              </ul>
              <p className="font-semibold mt-3">
                {t("blogPost.blogPost2.section5.sub4P2")}
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t("blogPost.blogPost2.section5.sub4P2List1")}</li>
                <li>{t("blogPost.blogPost2.section5.sub4P2List2")}</li>
                <li>{t("blogPost.blogPost2.section5.sub4P2List3")}</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">
                {t("blogPost.blogPost2.section5.sub5Title")}
              </h3>
              <p>{t("blogPost.blogPost2.section5.sub5P1")}</p>
              <p>{t("blogPost.blogPost2.section5.sub5P2")}</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">
                {t("blogPost.blogPost2.section5.sub6Title")}
              </h3>
              <p className="font-semibold">
                {t("blogPost.blogPost2.section5.sub6ProsTitle")}
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t("blogPost.blogPost2.section5.sub6Pros1")}</li>
                <li>{t("blogPost.blogPost2.section5.sub6Pros2")}</li>
                <li>{t("blogPost.blogPost2.section5.sub6Pros3")}</li>
                <li>{t("blogPost.blogPost2.section5.sub6Pros4")}</li>
              </ul>
              <p className="font-semibold mt-3">
                {t("blogPost.blogPost2.section5.sub6ConsTitle")}
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t("blogPost.blogPost2.section5.sub6Cons1")}</li>
                <li>{t("blogPost.blogPost2.section5.sub6Cons2")}</li>
                <li>{t("blogPost.blogPost2.section5.sub6Cons3")}</li>
                <li>{t("blogPost.blogPost2.section5.sub6Cons4")}</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">
                {t("blogPost.blogPost2.section5.sub7Title")}
              </h3>
              <p>{t("blogPost.blogPost2.section5.sub7Intro")}</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t("blogPost.blogPost2.section5.sub7List1")}</li>
                <li>{t("blogPost.blogPost2.section5.sub7List2")}</li>
                <li>{t("blogPost.blogPost2.section5.sub7List3")}</li>
                <li>{t("blogPost.blogPost2.section5.sub7List4")}</li>
                <li>{t("blogPost.blogPost2.section5.sub7List5")}</li>
              </ul>
            </section>
          </div>
        </>
      ),
    },
    {
      title: t("blogPost.blogPost2.section6.title"),
      content: (
        <>
          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">
            {t("blogPost.blogPost2.section6.officeTitle")}
          </h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>{t("blogPost.blogPost2.section6.officeList1")}</li>
            <li>{t("blogPost.blogPost2.section6.officeList2")}</li>
            <li>{t("blogPost.blogPost2.section6.officeList3")}</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
            {t("blogPost.blogPost2.section6.hospitalTitle")}
          </h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>{t("blogPost.blogPost2.section6.hospitalList1")}</li>
            <li>{t("blogPost.blogPost2.section6.hospitalList2")}</li>
            <li>{t("blogPost.blogPost2.section6.hospitalList3")}</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
            {t("blogPost.blogPost2.section6.hotelTitle")}
          </h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>{t("blogPost.blogPost2.section6.hotelList1")}</li>
            <li>{t("blogPost.blogPost2.section6.hotelList2")}</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
            {t("blogPost.blogPost2.section6.factoryTitle")}
          </h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>{t("blogPost.blogPost2.section6.factoryList1")}</li>
            <li>{t("blogPost.blogPost2.section6.factoryList2")}</li>
            <li>{t("blogPost.blogPost2.section6.factoryList3")}</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
            {t("blogPost.blogPost2.section6.dcTitle")}
          </h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>{t("blogPost.blogPost2.section6.dcList1")}</li>
            <li>{t("blogPost.blogPost2.section6.dcList2")}</li>
            <li>{t("blogPost.blogPost2.section6.dcList3")}</li>
          </ul>
        </>
      ),
    },
    {
      title: t("blogPost.blogPost2.section7.title"),
      content: (
        <>
          <div className="space-y-6 leading-relaxed">
            <p>
              <Trans
                i18nKey="blogPost.blogPost2.section7.vrvP"
                components={{ strong: <strong /> }}
              />
            </p>

            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">
                {t("blogPost.blogPost2.section7.vrvTitle")}
              </h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t("blogPost.blogPost2.section7.vrvList1")}</li>
                <li>{t("blogPost.blogPost2.section7.vrvList2")}</li>
                <li>{t("blogPost.blogPost2.section7.vrvList3")}</li>
                <li>{t("blogPost.blogPost2.section7.vrvList4")}</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">
                {t("blogPost.blogPost2.section7.beamTitle")}
              </h3>
              <p>
                <Trans
                  i18nKey="blogPost.blogPost2.section7.beamP"
                  components={{ strong: <strong /> }}
                />
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t("blogPost.blogPost2.section7.beamList1")}</li>
                <li>{t("blogPost.blogPost2.section7.beamList2")}</li>
                <li>{t("blogPost.blogPost2.section7.beamList3")}</li>
                <li>{t("blogPost.blogPost2.section7.beamList4")}</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">
                {t("blogPost.blogPost2.section7.aiTitle")}
              </h3>
              <p>
                <Trans
                  i18nKey="blogPost.blogPost2.section7.aiP"
                  components={{ strong: <strong /> }}
                />
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t("blogPost.blogPost2.section7.aiList1")}</li>
                <li>{t("blogPost.blogPost2.section7.aiList2")}</li>
                <li>{t("blogPost.blogPost2.section7.aiList3")}</li>
                <li>{t("blogPost.blogPost2.section7.aiList4")}</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">
                {t("blogPost.blogPost2.section7.freeTitle")}
              </h3>
              <p>
                <Trans
                  i18nKey="blogPost.blogPost2.section7.freeP"
                  components={{ strong: <strong /> }}
                />
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t("blogPost.blogPost2.section7.freeList1")}</li>
                <li>{t("blogPost.blogPost2.section7.freeList2")}</li>
                <li>{t("blogPost.blogPost2.section7.freeList3")}</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">
                {t("blogPost.blogPost2.section7.summaryTitle")}
              </h3>
              <p>
                <Trans
                  i18nKey="blogPost.blogPost2.section7.summaryP"
                  components={{ strong: <strong /> }}
                />
              </p>
            </section>
          </div>
        </>
      ),
    },
    {
      title: t("blogPost.blogPost2.section8.title"),
      content: (
        <>
          <p>{t("blogPost.blogPost2.section8.p1")}</p>
          <motion.div
            variants={fadeInUp}
            className="relative w-full h-[360px] mt-6 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/blog/blog2/GetImage (2).jpeg"
              alt={t("blogPost.blogPost2.section8.imageAlt")}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </>
      ),
    },
  ];

  // Meta hiển thị
  const metaDate = "22/12/2025";
  const metaAuthor = "Thuật";

  return (
    <section className="max-w-[1280px] mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* LEFT: CONTENT */}
      <motion.div
        className="lg:col-span-2 space-y-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.p
          variants={fadeInUp}
          className="text-gray-500 text-sm uppercase tracking-widest mb-2"
        >
          {t("blogPost.blogPost2.category")}
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
        >
          {t("blogPost.blogPost2.title")}
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-sm text-gray-500 mb-6">
          {t("blogPost.blogPost2.publishedOn")}{" "}
          <span className="font-medium">{metaDate}</span> {t("blogPost.blogPost2.publishedBy")}{" "}
          <span className="font-medium text-gray-800">{metaAuthor}</span>
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="relative w-full h-[420px] mb-6 rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="/blog/blog2/banner.jpeg"
            alt={t("blogPost.blogPost2.bannerAlt")}
            fill
            className="object-cover hover:scale-110 transition-transform duration-700"
            priority
          />
        </motion.div>

        {/* BODY */}
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-900">
                {section.title}
              </h2>
              <div>{section.content}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT: SIDEBAR */}
      <motion.div
        className="lg:col-span-1"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="sticky top-8">
          <BlogSidebar />
        </div>
      </motion.div>
    </section>
  );
}
