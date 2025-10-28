"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";

type BlogItem = { id: number; title: string };

export default function BlogSidebar() {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState("");

  // Lấy mảng blog từ i18n
  const blogs: BlogItem[] = useMemo(() => {
    const arr = t("blogPageSidebar", { returnObjects: true }) as BlogItem[] | string;
    // Nếu key thiếu sẽ trả string; fallback về mảng rỗng
    return Array.isArray(arr) ? arr : [];
  }, [t, i18n.language]);

  const filteredBlogs = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return blogs;
    return blogs.filter((b) => b.title.toLowerCase().includes(q));
  }, [blogs, search]);

  return (
    <aside className="space-y-10">
      {/* Search */}
      <div>
        <div className="relative">
          <input
            type="text"
            placeholder={t("blogSidebar.searchPlaceholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            aria-label={t("blogSidebar.searchAria", { defaultValue: "Search posts" })}
          />
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" aria-hidden />
        </div>
      </div>

      {/* All posts */}
      <div>
        <h3 className="text-lg font-semibold border-b pb-2 mb-4">
          {t("blogSidebar.allPosts")}
        </h3>
        <ul className="space-y-3">
          {filteredBlogs.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.id}`}
                className="block px-3 py-2 text-[17px] text-gray-700 rounded transition-all hover:bg-black hover:text-white"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Featured */}
      <div>
        <h3 className="text-lg font-semibold border-b pb-2 mb-4">
          {t("blogSidebar.featuredPosts")}
        </h3>
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
        <h3 className="text-lg font-semibold border-b pb-2 mb-4">
          {t("blogSidebar.archives")}
        </h3>
        <p className="text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition">
          {t("blogSidebar.archiveDate")}
        </p>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold border-b pb-2 mb-4">
          {t("blogSidebar.categories")}
        </h3>
        <p className="text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition">
          {t("blogSidebar.categoryName")}
        </p>
      </div>
    </aside>
  );
}
