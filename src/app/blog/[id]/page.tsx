/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogSidebar from "../component/BlogSidebar";
import ContactDock from "@/components/layout/ContactDock";

// ✅ Đặt mảng blogs RA NGOÀI component, để generateStaticParams có thể truy cập được
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

// ✅ Khai báo trước component
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}
export const revalidate = 0;        
export const dynamic = 'force-dynamic';
export const dynamicParams = false;

export default function BlogDetail({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.id === Number(params.id));
  if (!blog) return notFound();

  return (
    <>
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Nội dung bài viết */}
      <div className="lg:col-span-2">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          Ngày đăng: <span className="font-medium">{blog.date}</span> • Tác giả:{" "}
          <span className="font-medium">{blog.author}</span>
        </p>

        <div className="relative w-full h-[420px] mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          {blog.excerpt} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis repellat aliquam doloremque asperiores perspiciatis quae,
          dolorum tempore obcaecati veritatis magni.
        </p>

        <a
          href="/blog"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-xl"
        >
          ← Quay lại trang Blog
        </a>
      </div>


      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky top-8">
          <BlogSidebar />
        </div>
      </div>
    </section>
     <ContactDock />
    </>
  );
}
