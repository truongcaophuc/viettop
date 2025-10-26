"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlogSidebar from "../component/BlogSidebar";

export default function Blog6() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-[818.66px_389.34px] gap-10">
      {/* --- CỘT TRÁI: NỘI DUNG CHÍNH --- */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* --- THÔNG TIN BÀI VIẾT --- */}
        <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
          Data Center Infrastructure Management
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Tích Hợp Hệ Thống An Toàn & Giám Sát Vào Nền Tảng DCIM
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Đăng vào ngày <span className="font-medium">15/10/2025</span> bởi{" "}
          <span className="font-medium text-gray-800">Thuật</span>
        </p>

        <div className="relative w-full h-[420px] mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
            alt="Tích hợp hệ thống an toàn và giám sát DCIM"
            fill
            className="object-cover hover:scale-110 transition-transform duration-700"
            priority
          />
        </div>

        {/* --- NỘI DUNG CHÍNH --- */}
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold mt-6 mb-3">Giới Thiệu</h2>
          <p>
            Trong các trung tâm dữ liệu hiện đại, việc đảm bảo{" "}
            <strong>an toàn, an ninh và giám sát tập trung</strong> đóng vai trò
            then chốt. Bằng cách tích hợp các hệ thống như{" "}
            <strong>Fire Alarm, CCTV</strong> và{" "}
            <strong>Access Control</strong> vào nền tảng{" "}
            <strong>DCIM (Data Center Infrastructure Management)</strong>, doanh
            nghiệp có thể quản lý toàn diện hạ tầng, giảm thiểu rủi ro và nâng
            cao hiệu quả vận hành.
          </p>

          {/* --- GIẢI PHÁP QUẢN LÝ TẬP TRUNG --- */}
          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Giải Pháp Quản Lý Tập Trung Toàn Diện
          </h2>
          <p>
            DCIM trở thành “bộ não trung tâm”, kết nối toàn bộ hệ thống an toàn
            và giám sát thông qua các giao thức tiêu chuẩn, giúp hợp nhất dữ
            liệu và hiển thị trên một dashboard duy nhất.
          </p>

          <div className="relative w-full h-[360px] my-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
              alt="Dashboard DCIM quản lý toàn diện"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* --- CÁCH THỨC TÍCH HỢP --- */}
          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Cách Thức Tích Hợp
          </h2>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            1. Kết Nối Qua Giao Thức Chuẩn
          </h3>
          <p>
            Các hệ thống được kết nối với DCIM qua{" "}
            <strong>BACnet, Modbus, SNMP hoặc API</strong>, giúp truyền tải dữ
            liệu thời gian thực về trạng thái thiết bị, sự kiện và cảnh báo.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            2. Giao Diện Quản Lý Duy Nhất
          </h3>
          <p>
            Tất cả thông tin từ các hệ thống an toàn và giám sát được hiển thị
            trên một dashboard tập trung. Điều này giúp người vận hành dễ dàng
            theo dõi, xử lý sự cố và đưa ra quyết định nhanh chóng.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            3. Liên Kết Dữ Liệu Thông Minh
          </h3>
          <p>
            Khi phát hiện khói, hệ thống DCIM có thể{" "}
            <strong>tự động hiển thị camera khu vực liên quan</strong>, kích
            hoạt cảnh báo và{" "}
            <strong>khóa các lối ra vào nguy hiểm</strong>. Đây là nền tảng cho
            mô hình vận hành chủ động và tự động hóa thông minh.
          </p>

          <div className="relative w-full h-[360px] my-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
              alt="Liên kết dữ liệu thông minh giữa Fire Alarm và CCTV"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* --- LỢI ÍCH VẬN HÀNH --- */}
          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Lợi Ích Vận Hành
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Phản ứng nhanh chóng:</strong> Cảnh báo tập trung giúp đội
              ngũ phản ứng kịp thời khi có sự cố cháy nổ, xâm nhập hay mất kết
              nối.
            </li>
            <li>
              <strong>Giảm nhân lực giám sát:</strong> Một nhóm kỹ thuật nhỏ có
              thể quản lý toàn bộ tòa nhà qua giao diện DCIM.
            </li>
            <li>
              <strong>Báo cáo tự động:</strong> Ghi nhận đầy đủ lịch sử ra vào,
              sự cố và báo cháy để phục vụ kiểm toán và tiêu chuẩn an toàn.
            </li>
            <li>
              <strong>Phân tích và dự báo:</strong> Dữ liệu lịch sử giúp phát
              hiện điểm yếu trong hệ thống và xây dựng kế hoạch bảo trì chủ
              động.
            </li>
          </ul>

          {/* --- CẢNH BÁO TẬP TRUNG --- */}
          <h2 className="text-2xl font-semibold mt-8 mb-3">Cảnh Báo Tập Trung</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">1. Ưu Tiên Thông Minh</h3>
          <p>
            DCIM tự động phân loại cảnh báo theo mức độ{" "}
            <strong>khẩn cấp – cảnh báo – thông tin</strong>, giúp người vận
            hành tập trung xử lý các sự cố quan trọng nhất trước.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">2. Thông Báo Đa Kênh</h3>
          <p>
            Cảnh báo được gửi qua nhiều kênh như{" "}
            <strong>email, SMS, app di động</strong> và giao diện dashboard để
            đảm bảo đội ngũ luôn được cập nhật dù ở bất kỳ đâu.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">3. Liên Kết Sự Kiện</h3>
          <p>
            Khi xảy ra sự cố, DCIM hiển thị{" "}
            <strong>vị trí chính xác trên sơ đồ tầng</strong>, kèm hình ảnh từ
            camera và lịch sử ra vào – giúp đánh giá nhanh tình huống tổng thể.
          </p>

          <div className="relative w-full h-[360px] my-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
              alt="Cảnh báo tập trung trong hệ thống DCIM"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* --- KẾT LUẬN --- */}
          <h2 className="text-2xl font-semibold mt-8 mb-3">Kết Luận</h2>
          <p>
            Việc tích hợp các hệ thống an toàn và giám sát vào nền tảng{" "}
            <strong>DCIM</strong> không chỉ giúp{" "}
            <strong>đơn giản hóa quản lý vận hành</strong> mà còn{" "}
            <strong>nâng cao đáng kể khả năng phòng ngừa, phản ứng và bảo mật</strong>.
          </p>
          <p>
            Đây là xu hướng tất yếu để xây dựng{" "}
            <strong>Trung tâm dữ liệu thông minh – an toàn – hiệu quả</strong>,
            đáp ứng yêu cầu khắt khe của doanh nghiệp trong kỷ nguyên chuyển đổi
            số.
          </p>

          <div className="relative w-full h-[360px] mt-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
              alt="Kết luận tích hợp hệ thống DCIM"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </motion.div>

      {/* --- CỘT PHẢI: SIDEBAR --- */}
      <motion.div
        className="lg:col-span-1"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="sticky top-8">
          <BlogSidebar />
        </div>
      </motion.div>
    </section>
  );
}
