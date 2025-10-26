"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const blogs = [
  { id: 1, title: "BMS là gì? Giải pháp quản lý tòa nhà thông minh cho Data Center hiện đại" },
  { id: 2, title: "HVAC – AHU – FCU – PAC: Hiểu Đúng Để Thiết Kế Chuẩn" },
  { id: 3, title: "Hệ Thống UPS và Phân Phối Điện Trong Data Center" },
  { id: 4, title: "SmartCool i-drive: Giải pháp làm lạnh chính xác Tiết kiệm và Ổn định" },
  { id: 5, title: "Ứng Dụng Modbus & SNMP Trong BMS và Giám Sát Thiết Bị" },
  { id: 6, title: "Tích Hợp Hệ Thống An Toàn & Giám Sát Vào Nền Tảng DCIM" },
];

export default function BlogSidebar() {
  const [search, setSearch] = useState("");
  const filteredBlogs = blogs.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="space-y-10">
      {/* Search */}
      <div>
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="text-lg font-semibold border-b pb-2 mb-4">TẤT CẢ BÀI VIẾT</h3>
        <ul className="space-y-3">
          {filteredBlogs.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.id}`}
                className="text-[17px] block px-3 py-2 text-sm text-gray-700 rounded transition-all hover:bg-black hover:text-white"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Featured */}
      <div>
        <h3 className="text-lg font-semibold border-b pb-2 mb-4">BÀI VIẾT NỔI BẬT</h3>
        <ul className="space-y-3">
          {blogs
            .filter((post) => post.id === 1 || post.id === 2)
            .map((post) => (
              <li key={post.id}>
                <Link
                  href={`/blog/${post.id}`}
                  className="block text-gray-700 text-[17px] hover:bg-black hover:text-white cursor-pointer rounded px-3 py-2 transition"
                >
                  {post.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      {/* Archives */}
      <div>
        <h3 className="text-lg font-semibold border-b pb-2 mb-4">LƯU TRỮ</h3>
        <p className="text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition">
          Tháng 12 năm 2025
        </p>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold border-b pb-2 mb-4">THỂ LOẠI</h3>
        <p className="text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition">
          Bài viết
        </p>
      </div>
    </aside>
  );
}
