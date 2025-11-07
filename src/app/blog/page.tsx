"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useMemo } from "react"; // Import useMemo
import BlogSidebar from "./component/BlogSidebar"; // Assuming BlogSidebar uses t() internally
import { useTranslation } from 'react-i18next'; // 1. Import hook
import ContactDock from "@/components/layout/ContactDock";

// Keep original data structure for static info if needed, or just IDs
const originalBlogs = [
  { id: 1, date: "21/12/2025", author: "Thuật", image: "/blog/blog1/banner.png" },
  { id: 2, date: "10/12/2025", author: "Thuật", image: "/blog/blog2/banner.jpeg" },
  { id: 3, date: "02/12/2025", author: "Thuật", image: "/blog/blog3/banner.jpeg" },
  { id: 4, date: "25/11/2025", author: "Thuật", image: "/blog/blog4/banner.jpeg" },
  { id: 5, date: "20/11/2025", author: "Thuật", image: "/blog/blog5/banner.png" },
  { id: 6, date: "10/11/2025", author: "Thuật", image: "/blog/blog6/banner.png" },
];

export default function BlogPage() {
  const { t } = useTranslation(); // 2. Get translation function
  const [search, setSearch] = useState(""); // Search state remains

  // 3. Wrap blogs array generation in useMemo and use t()
  const blogs = useMemo(() => originalBlogs.map(blog => ({
    ...blog, // Keep original id, date, author, image
    title: t(`blogPage.post${blog.id}.title`),
    excerpt: t(`blogPage.post${blog.id}.excerpt`),
  })), [t]); // Depend on t

  // Filtering logic remains the same, now filters translated titles
  const filteredBlogs = useMemo(() => blogs.filter((b) =>
      b.title.toLowerCase().includes(search.toLowerCase())
  ), [blogs, search]); // Depend on blogs and search

  return (
    <>
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16"> {/* Adjusted gap */}
      {/* --- Bài viết chính --- */}
      <div className="lg:col-span-2 space-y-12 md:space-y-16"> {/* Adjusted spacing */}
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 60 }} // Slightly less Y movement
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} // Trigger earlier
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }} // Faster duration/delay
              className="border-b border-gray-200 pb-10 md:pb-12" // Lighter border
            >
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2"> {/* Added tracking */}
                 {/* 4. Use t() */}
                {t('blogPage.categoryLabel')}
              </p>
              {/* Wrap title in Link */}
              <Link href={`/blog/${blog.id}`} className="block group">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition duration-300"> {/* Adjusted size */}
                    {blog.title} {/* Already translated */}
                  </h1>
              </Link>
              <p className="text-sm text-gray-500 mb-5"> {/* Adjusted margin */}
                 {/* 4. Use t() */}
                {t('blogPage.publishedOn')}{" "}
                <span className="font-medium text-gray-700">{blog.date}</span> {/* Date might not need translation */}
                {" "}{t('blogPage.publishedBy')}{" "}
                <span className="font-medium text-gray-800">{blog.author}</span> {/* Author might not need translation */}
              </p>

              <Link href={`/blog/${blog.id}`} className="block mb-6 group">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md"> {/* Use aspect-video */}
                    <Image
                      src={blog.image}
                      alt={blog.title} // Use translated title for alt
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw" // Add sizes
                      className="object-cover transition-transform duration-500 group-hover:scale-105" // Slightly faster scale
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> {/* Subtle hover overlay */}
                  </div>
              </Link>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base"> {/* Adjusted color/size */}
                {blog.excerpt} {/* Already translated */}
              </p>

              <Link href={`/blog/${blog.id}`} passHref>
                  <motion.a // Use motion.a for animation on Link
                    className="relative inline-block px-6 py-2.5 border border-blue-600 text-blue-600 font-semibold rounded-full overflow-hidden group transition-all duration-300 ease-in-out shadow hover:shadow-md hover:-translate-y-0.5 text-sm" // Adjusted styles
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      {/* 4. Use t() */}
                      {t('blogPage.readMoreButton')}
                    </span>
                  </motion.a>
              </Link>
            </motion.article>
          ))
        ) : (
          // Optional: Add a message when no blogs match the search
          <p className="text-gray-500 text-center col-span-full">
            {t('blogPage.noResults', 'Không tìm thấy bài viết nào.')}
          </p>
        )}
      </div>

      {/* --- Sidebar --- */}
      <motion.div
        className="lg:col-span-1"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }} // Added delay
        viewport={{ once: true }}
      >
        <div className="sticky top-8 space-y-8"> {/* Added spacing to sticky container */}
           {/* Search input - moved from sidebar to here for better filtering control */}
           {/* <div>
             <div className="relative">
               <input
                 type="text"
                 placeholder={t('blogSidebar.searchPlaceholder')}
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
               />
               <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
             </div>
           </div> */}
           {/* Pass search state and handler down if sidebar needs them */}
          <BlogSidebar />
        </div>
      </motion.div>
    </section>
     <ContactDock />
    </>
  );
}