"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlogSidebar from "../component/BlogSidebar";

export default function Blog4() {
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
        <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
          Data Center Cooling
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          SmartCool i-drive: Giải pháp làm lạnh chính xác – Tiết kiệm và Ổn định
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Đăng vào ngày{" "}
          <span className="font-medium">15/10/2025</span> bởi{" "}
          <span className="font-medium text-gray-800">Thuật</span>
        </p>

        <div className="relative w-full h-[420px] mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
            alt="SmartCool i-drive – hệ thống làm lạnh Data Center"
            fill
            className="object-cover hover:scale-110 transition-transform duration-700"
            priority
          />
        </div>

        {/* --- NỘI DUNG CHÍNH --- */}
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold mt-6 mb-3">1. Giới Thiệu</h2>
          <p>
            <strong>SmartCool i-drive</strong> là hệ thống điều hòa làm lạnh
            chính xác thế hệ mới, được thiết kế đặc biệt cho{" "}
            <strong>phòng server và trung tâm dữ liệu</strong>. Với công nghệ
            biến tần thông minh và khả năng kiểm soát nhiệt độ siêu chính xác,
            SmartCool i-drive mang đến giải pháp tối ưu về{" "}
            <strong>hiệu suất, độ tin cậy và tiết kiệm năng lượng</strong>.
          </p>

          <div className="relative w-full h-[360px] my-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
              alt="Cấu trúc hệ thống SmartCool i-drive"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            2. Cơ Chế Làm Lạnh Thông Minh
          </h2>
          <p>
            SmartCool i-drive sử dụng cảm biến nhiệt độ và độ ẩm{" "}
            <strong>đa điểm</strong>, kết hợp với{" "}
            <strong>thuật toán AI điều khiển tự động</strong> để phân tích tải
            nhiệt và điều chỉnh công suất làm lạnh theo thời gian thực. Nhờ đó,
            hệ thống duy trì môi trường nhiệt độ ổn định, bảo vệ server khỏi sự
            biến động đột ngột.
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Tối ưu vận hành theo mức tải thực tế.</li>
            <li>Phản ứng nhanh với thay đổi nhiệt độ trong phòng server.</li>
            <li>
              Giảm chu kỳ bật/tắt máy nén, giúp <strong>tăng tuổi thọ</strong>{" "}
              thiết bị.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            3. Công Nghệ Biến Tần Tiên Tiến
          </h2>
          <p>
            <strong>Inverter Technology</strong> trên SmartCool i-drive cho phép
            máy nén thay đổi tốc độ từ 10–100%, thay vì chỉ bật/tắt như máy
            truyền thống. Cơ chế này giúp tiết kiệm điện năng, giảm độ ồn và
            đảm bảo nhiệt độ chính xác.
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Vận hành mượt mà, không giật lag.</li>
            <li>Giảm độ ồn xuống dưới <strong>55dB</strong>.</li>
            <li>Kéo dài tuổi thọ máy nén gấp 2 lần.</li>
            <li>Khởi động êm ái, không gây sốc điện áp.</li>
          </ul>

          <div className="relative w-full h-[360px] my-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
              alt="Nguyên lý biến tần của SmartCool i-drive"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            4. Kiểm Soát Nhiệt Độ Siêu Chính Xác ±0.5°C
          </h2>
          <p>
            SmartCool i-drive đạt độ chính xác nhiệt độ ±0.5°C — vượt trội hơn
            nhiều so với các hệ thống làm lạnh thông thường (dao động ±2–3°C).
            Mức kiểm soát này cực kỳ quan trọng trong môi trường Data Center.
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Bảo vệ thiết bị server khỏi stress nhiệt.</li>
            <li>Giảm nguy cơ lỗi phần cứng do biến động nhiệt độ.</li>
            <li>
              Tối ưu hiệu suất hoạt động, giảm điện năng tiêu thụ cho hệ thống
              làm mát.
            </li>
            <li>
              Tuân thủ tiêu chuẩn <strong>ASHRAE</strong> cho trung tâm dữ liệu
              hiện đại.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            5. Tiết Kiệm Điện Năng Vượt Trội
          </h2>
          <p>
            SmartCool i-drive có thể giúp <strong>giảm 40–60%</strong> chi phí
            điện năng so với hệ thống thông thường nhờ các công nghệ thông minh:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>EC Fan:</strong> Quạt tiết kiệm điện, hiệu suất cao.
            </li>
            <li>
              <strong>Smart Capacity Control:</strong> Điều chỉnh công suất theo
              tải nhiệt thực tế.
            </li>
            <li>
              <strong>Free Cooling:</strong> Tận dụng không khí ngoài trời khi
              điều kiện nhiệt độ cho phép.
            </li>
            <li>
              <strong>Sleep Mode:</strong> Tự động giảm công suất trong giờ thấp
              điểm.
            </li>
          </ul>

          <p className="mt-4">
            Với phòng server diện tích <strong>50m²</strong>, hệ thống có thể
            tiết kiệm đến <strong>30–50 triệu đồng/năm</strong> tiền điện.
          </p>

          <div className="relative w-full h-[360px] my-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
              alt="Tiết kiệm năng lượng SmartCool i-drive"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            6. Ưu Điểm Nổi Bật
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Độ chính xác nhiệt độ ±0.5°C – hàng đầu thị trường.</li>
            <li>Tiết kiệm điện 40–60% – hoàn vốn sau 2–3 năm.</li>
            <li>Vận hành êm ái dưới 55dB, thân thiện môi trường.</li>
            <li>Giám sát từ xa 24/7 qua ứng dụng di động hoặc nền tảng DCIM.</li>
            <li>Cảnh báo sớm sự cố, hỗ trợ bảo trì dự phòng.</li>
            <li>Tuổi thọ thiết bị lên tới 15–20 năm.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">7. Kết Luận</h2>
          <p>
            <strong>SmartCool i-drive</strong> là lựa chọn hoàn hảo cho các doanh
            nghiệp đang tìm kiếm giải pháp làm lạnh chính xác, ổn định và tiết
            kiệm năng lượng cho trung tâm dữ liệu. Mặc dù chi phí đầu tư ban đầu
            cao hơn, nhưng hiệu quả kinh tế và độ tin cậy lâu dài là vượt trội.
          </p>
          <p>
            Với việc kết hợp giữa <strong>công nghệ biến tần, trí tuệ nhân tạo và
            giám sát thông minh</strong>, SmartCool i-drive giúp doanh nghiệp
            hướng tới mục tiêu <strong>Data Center xanh – tiết kiệm – hiệu quả</strong>.
          </p>

          <div className="relative w-full h-[360px] mt-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
              alt="SmartCool i-drive Data Center Cooling"
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
