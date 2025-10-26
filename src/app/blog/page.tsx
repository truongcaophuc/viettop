"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import BlogSidebar from "./component/BlogSidebar";

const blogs = [
  {
    id: 1,
    title: "BMS là gì? Giải pháp quản lý tòa nhà thông minh cho Data Center hiện đại",
    date: "21/12/2025",
    author: "Thuật",
    image: "/blog/blog1/banner.png",
    excerpt:
      "Ngôi nhà này được thiết kế bởi một nhóm kiến trúc sư Ý, sử dụng vật liệu tự nhiên, tạo cảm giác hòa mình với thiên nhiên xung quanh.",
  },
  {
    id: 2,
    title: "HVAC – AHU – FCU – PAC: Hiểu Đúng Để Thiết Kế Chuẩn",
    date: "10/12/2025",
    author: "Thuật",
    image: "/blog/blog2/banner.jpeg",
    excerpt:
      "Cải tạo không chỉ giúp làm mới không gian sống mà còn mang lại giá trị tinh thần và thẩm mỹ vượt trội cho ngôi nhà của bạn.",
  },
  {
    id: 3,
    title: "Hệ Thống UPS và Phân Phối Điện Trong Data Center",
    date: "02/12/2025",
    author: "Thuật",
    image: "/blog/blog3/banner.jpeg",
    excerpt:
      "Sự kết hợp giữa vật liệu tự nhiên, ánh sáng và màu sắc tinh tế giúp tạo nên phong cách sống sang trọng và hiện đại.",
  },
  {
    id: 4,
    title: "SmartCool i-drive: Giải pháp làm lạnh chính xác Tiết kiệm và Ổn định",
    date: "25/11/2025",
    author: "Thuật",
    image: "/blog/blog4/banner.jpeg",
    excerpt:
      "Một công trình kiến trúc hiện đại nằm giữa rừng, tận dụng ánh sáng tự nhiên và thông gió để mang đến sự thư thái tuyệt đối.",
  },
  {
    id: 5,
    title: "Ứng Dụng Modbus & SNMP Trong BMS và Giám Sát Thiết Bị",
    date: "20/11/2025",
    author: "Thuật",
    image: "/blog/blog5/banner.png",
    excerpt:
      "Những công nghệ tiên tiến giúp ngôi nhà trở nên tiện nghi, tiết kiệm năng lượng và dễ dàng điều khiển từ xa.",
  },
  {
    id: 6,
    title: "Tích Hợp Hệ Thống An Toàn & Giám Sát Vào Nền Tảng DCIM",
    date: "10/11/2025",
    author: "Thuật",
    image: "/blog/blog6/banner.png",
    excerpt:
      "Thiết kế kiến trúc xanh hướng đến sự bền vững, giúp giảm thiểu tác động đến môi trường và mang lại cuộc sống lành mạnh hơn.",
  },
];

export default function BlogPage() {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* --- Bài viết chính --- */}
      <div className="lg:col-span-2 space-y-16">
        {filteredBlogs.map((blog, index) => (
          <motion.article
            key={blog.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border-b pb-10"
          >
            <p className="text-gray-500 text-sm uppercase mb-2">Tin tức</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-3 hover:text-blue-700 transition">
              {blog.title}
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Đăng vào ngày <span className="font-medium">{blog.date}</span> bởi{" "}
              <span className="font-medium text-gray-800">{blog.author}</span>
            </p>

            <div className="relative w-full h-[420px] mb-6 rounded-lg overflow-hidden shadow-md">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">{blog.excerpt}</p>

            <Link href={`/blog/${blog.id}`}>
              <button className="relative inline-block px-8 py-3 border border-blue-700 text-blue-700 font-semibold rounded-full overflow-hidden group transition-all duration-500 ease-in-out shadow-lg hover:shadow-blue-700/100 hover:-translate-y-1">
                <span className="absolute inset-0 bg-blue-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                <span className="relative group-hover:text-white transition-all duration-300">
                  CHI TIẾT BÀI VIẾT →
                </span>
              </button>
            </Link>
          </motion.article>
        ))}
      </div>

      {/* --- Sidebar --- */}
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
