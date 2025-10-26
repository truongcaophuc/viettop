// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// export default function BlogPage() {
//   const [search, setSearch] = useState("");

//   const recentPosts = [
//     "Ngôi nhà hòa quyện với thiên nhiên tại Venice",
//     "Cải tạo ngôi nhà cũ kỹ thành một không gian độc đáo",
//     "Ngôi nhà mơ ước giữa thiên nhiên hoang sơ",
//     "Ngôi nhà hiện đại hòa hợp với thiên nhiên",
//     "Thiết kế nội thất cao cấp cho không gian sang trọng",
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
//       {/* --- Bài viết chính --- */}
//       <div className="lg:col-span-2">
//         <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
//           Blog
//         </p>
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//           Ngôi nhà hòa quyện với thiên nhiên tại Venice
//         </h1>
//         <p className="text-sm text-gray-500 mb-8">
//           Posted on <span className="font-medium">21/12/2024</span> by{" "}
//           <span className="font-medium text-gray-800">Trang</span>
//         </p>

//         <div className="relative w-full h-[420px] mb-6 rounded-lg overflow-hidden shadow">
//           <Image
//             src="/blog/venice-house.jpg"
//             alt="Ngôi nhà Venice"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute top-3 left-3 bg-white shadow px-3 py-1 text-center rounded">
//             <p className="text-sm font-bold text-blue-600 leading-tight">
//               21 <br /> <span className="text-xs text-gray-600">Dec</span>
//             </p>
//           </div>
//         </div>

//         <p className="text-gray-700 leading-relaxed mb-10">
//           Ngôi nhà bí mật tuyệt đẹp nằm ở Venice, Ý. Ngôi nhà này được thiết kế bởi một nhóm kiến trúc sư
//           và được xây dựng bằng các vật liệu đơn giản. Kiến trúc truyền thống của Venice, tạo cảm giác như
//           ngôi nhà đang hòa mình vào thiên nhiên xung quanh, giúp chủ nhà tận hưởng không gian mở và ánh sáng tự nhiên.
//         </p>

//         <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all">
//           CONTINUE READING →
//         </button>

//         <hr className="my-10 border-gray-300" />

//         <p className="text-sm text-gray-500">
//           Posted in <span className="font-medium text-gray-800">Blog</span>
//         </p>
//       </div>

//       {/* --- Sidebar --- */}
//       <aside className="space-y-10">
//         {/* Search */}
//         <div>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//             <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           </div>
//         </div>

//         {/* Recent Posts */}
//         <div>
//           <h3 className="text-lg font-semibold border-b pb-2 mb-4">
//             Recent Posts
//           </h3>
//           <ul className="space-y-3">
//             {recentPosts.map((post, i) => (
//               <li
//                 key={i}
//                 className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer transition"
//               >
//                 {post}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Comments */}
//         <div>
//           <h3 className="text-lg font-semibold border-b pb-2 mb-4">
//             Recent Comments
//           </h3>
//           <p className="text-sm text-gray-500 italic">No comments yet.</p>
//         </div>

//         {/* Archives */}
//         <div>
//           <h3 className="text-lg font-semibold border-b pb-2 mb-4">Archives</h3>
//           <p className="text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition">
//             December 2024
//           </p>
//         </div>

//         {/* Categories */}
//         <div>
//           <h3 className="text-lg font-semibold border-b pb-2 mb-4">Categories</h3>
//           <p className="text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition">
//             Blog
//           </p>
//         </div>

//         {/* Meta */}
//         <div>
//           <h3 className="text-lg font-semibold border-b pb-2 mb-4">Meta</h3>
//           <ul className="text-sm text-gray-700 space-y-2">
//             <li className="hover:text-blue-600 cursor-pointer">Log in</li>
//             <li className="hover:text-blue-600 cursor-pointer">
//               Entries RSS
//             </li>
//             <li className="hover:text-blue-600 cursor-pointer">
//               Comments RSS
//             </li>
//           </ul>
//         </div>
//       </aside>
//     </section>
//   );
// }
