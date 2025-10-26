"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlogSidebar from "../component/BlogSidebar";

export default function Blog3() {
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
          Data Center
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Hệ Thống UPS và Phân Phối Điện Trong Data Center
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Đăng vào ngày{" "}
          <span className="font-medium">15/10/2025</span> bởi{" "}
          <span className="font-medium text-gray-800">Thuật</span>
        </p>

        <div className="relative w-full h-[420px] mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
            alt="UPS và phân phối điện Data Center"
            fill
            className="object-cover hover:scale-110 transition-transform duration-700"
            priority
          />
        </div>

        {/* --- NỘI DUNG CHÍNH --- */}
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold mt-6 mb-3">
            1. Nguyên Lý Hoạt Động Của Hệ Thống UPS
          </h2>
          <p>
            <strong>UPS (Uninterruptible Power Supply)</strong> là thiết bị cung
            cấp nguồn điện dự phòng không gián đoạn, giúp bảo vệ thiết bị IT
            trong Data Center khỏi các sự cố mất điện đột ngột hoặc sụt áp.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">1.1. UPS Là Gì?</h3>
          <p>
            UPS hoạt động như một “lá chắn năng lượng”, đảm bảo nguồn điện ổn
            định và sạch cho hệ thống máy chủ. Khi nguồn lưới gặp sự cố, UPS
            chuyển sang dùng pin trong chưa đến 4ms.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            1.2. Ba Chế Độ Hoạt Động
          </h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Chế độ bình thường:</strong> Chỉnh lưu AC sang DC để nạp
              pin và cung cấp điện sạch qua nghịch lưu.
            </li>
            <li>
              <strong>Chế độ pin:</strong> Khi mất điện, UPS tự động dùng pin
              để duy trì hệ thống trong 10–30 phút.
            </li>
            <li>
              <strong>Chế độ bypass:</strong> Cấp điện trực tiếp từ lưới khi
              bảo trì hoặc tải quá công suất.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            2. Cơ Chế Bảo Vệ Của UPS
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Chống mất điện: chuyển nguồn trong mili-giây.</li>
            <li>Ổn định điện áp và lọc nhiễu tần số cao.</li>
            <li>Chống sét lan truyền và dao động điện áp.</li>
            <li>Điều chỉnh tần số: duy trì 50Hz/60Hz ổn định.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            3. Cấu Trúc Nguồn: Main – ATS – UPS – PDU
          </h2>

          <p className="text-gray-700 mb-4">
            Hệ thống cấp điện trong <strong>Data Center</strong> được thiết kế với nhiều tầng bảo vệ nhằm đảm bảo nguồn điện 
            luôn <strong>ổn định, sạch và liên tục 24/7</strong>. Sơ đồ dòng điện tổng quát:
          </p>

          <p className="text-gray-700 mb-4">
            <strong>
              NGUỒN LƯỚI → ATS → UPS → PDU → THIẾT BỊ IT
            </strong>{" "}
            <br />
            (Máy phát điện và Pin dự phòng được kết nối song song với <strong>ATS</strong> và <strong>UPS</strong> để bảo đảm không gián đoạn.)
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">3.1. Thành Phần Chính</h3>

          <h4 className="text-lg font-semibold mt-4 mb-1">🔹 Main Power (Nguồn Chính)</h4>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Cung cấp điện từ lưới điện quốc gia hoặc trạm biến áp riêng của doanh nghiệp.</li>
            <li>Tích hợp <strong>máy phát điện dự phòng</strong> khởi động trong 10–15 giây khi mất điện.</li>
            <li>Đảm bảo đầu vào ổn định cho toàn hệ thống ATS – UPS – PDU.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-1">🔹 ATS (Automatic Transfer Switch)</h4>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Thiết bị <strong>tự động chuyển nguồn</strong> giữa lưới điện và máy phát khi xảy ra sự cố mất điện.</li>
            <li>Thời gian chuyển đổi cực nhanh: <strong>&lt; 100ms</strong>, không làm gián đoạn hệ thống IT.</li>
            <li>Có chế độ <strong>bypass thủ công</strong> để bảo trì mà không làm gián đoạn hoạt động.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-1">🔹 UPS (Uninterruptible Power Supply)</h4>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Cung cấp điện tức thời khi mất điện, đảm bảo hoạt động liên tục cho thiết bị CNTT.</li>
            <li>Cấu hình linh hoạt:
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>N+1:</strong> Một UPS dự phòng cho mỗi cụm vận hành.</li>
                <li><strong>2N:</strong> Hai hệ thống độc lập (A-side & B-side), đạt độ tin cậy Tier IV.</li>
              </ul>
            </li>
            <li>Thành phần chính:
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Rectifier:</strong> Chuyển đổi AC → DC để nạp pin.</li>
                <li><strong>Battery Bank:</strong> Lưu trữ năng lượng dự phòng (10–30 phút).</li>
                <li><strong>Inverter:</strong> Chuyển DC → AC cung cấp điện sạch cho tải IT.</li>
                <li><strong>Bypass Circuit:</strong> Cấp điện trực tiếp khi cần bảo trì hoặc quá tải.</li>
              </ul>
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-1">🔹 PDU (Power Distribution Unit)</h4>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Phân phối điện từ UPS đến các tủ rack, thiết bị mạng và server.</li>
            <li>Gồm hai loại:
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Room PDU:</strong> Phân phối điện cho toàn phòng máy.</li>
                <li><strong>Rack PDU:</strong> Gắn trong từng tủ rack (thường 42U), có nhiều ổ cắm.</li>
              </ul>
            </li>
            <li>Tích hợp các tính năng thông minh:
              <ul className="list-disc ml-6 space-y-1">
                <li>Đo công suất tiêu thụ theo ổ cắm hoặc theo rack.</li>
                <li>Cảnh báo quá tải và giám sát nhiệt độ môi trường.</li>
                <li>Điều khiển từ xa qua giao diện web hoặc phần mềm DCIM.</li>
              </ul>
            </li>
          </ul>

          <p className="mt-6 text-gray-700">
            Nhờ thiết kế cấu trúc nhiều tầng như vậy, hệ thống nguồn trong Data Center đảm bảo điện năng 
            <strong>ổn định – an toàn – không gián đoạn</strong>, kể cả trong trường hợp sự cố mất điện lưới hoặc bảo trì hệ thống.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            4. Dòng Điện Liên Tục 24/7 – Quy Trình Hoạt Động
          </h2>

          <p className="mb-4 text-gray-700">
            Hệ thống điện trong Data Center được thiết kế theo nguyên tắc <strong>không gián đoạn (24/7/365)</strong>, đảm bảo thiết bị CNTT luôn nhận điện ổn định, dù xảy ra sự cố mất điện từ lưới. Toàn bộ quá trình được chia thành 4 giai đoạn chính:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">4.1. Hoạt Động Bình Thường</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Lưới điện → ATS → UPS (nạp pin) → PDU → Thiết bị IT.</li>
            <li>UPS vừa cấp điện “sạch” cho tải, vừa sạc đầy pin dự phòng.</li>
            <li>Thời gian hoạt động: <strong>Không giới hạn</strong> khi nguồn lưới ổn định.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">4.2. Mất Điện (0–15s)</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Khi lưới mất điện, UPS lập tức chuyển sang chế độ pin <strong>(không gián đoạn)</strong>.</li>
            <li>Pin UPS duy trì điện cho toàn hệ thống trong 10–30 phút.</li>
            <li>Máy phát điện tự động khởi động trong 10–15 giây.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">4.3. Máy Phát Hoạt Động</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Khi máy phát ổn định, ATS chuyển nguồn sang máy phát.</li>
            <li>Luồng điện: <strong>Máy phát → ATS → UPS → PDU → Thiết bị</strong>.</li>
            <li>UPS tiếp tục sạc pin trong khi cấp điện từ máy phát.</li>
            <li>Thời gian hoạt động: <strong>24–48 giờ</strong> tùy dung lượng nhiên liệu.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">4.4. Phục Hồi Điện Lưới</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Khi điện lưới trở lại, ATS tự động chuyển nguồn về lưới.</li>
            <li>Luồng điện: <strong>Lưới điện → ATS → UPS → PDU → Thiết bị IT</strong>.</li>
            <li>Máy phát ngừng sau 5 phút để đảm bảo điện ổn định.</li>
            <li>Toàn bộ quá trình chuyển đổi <strong></strong> – không ảnh hưởng đến hệ thống CNTT.</li>
          </ul>

          <p className="mt-6 text-gray-700">
            Nhờ quy trình này, hệ thống điện Data Center duy trì hoạt động liên tục, an toàn và ổn định, đáp ứng tiêu chuẩn <strong>uptime 99.995%</strong> của Tier III–IV.
          </p>


          <div className="relative w-full h-[360px] my-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
              alt="Sơ đồ UPS trong Data Center"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            5. Giám Sát & Bảo Trì Hệ Thống
          </h2>
          <p>
            Hệ thống UPS và PDU được giám sát qua phần mềm{" "}
            <strong>DCIM (Data Center Infrastructure Management)</strong>, theo
            dõi tải, điện áp, nhiệt độ và tình trạng pin theo thời gian thực.
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Giám sát qua Dashboard, cảnh báo sự cố qua email/SMS.</li>
            <li>
              UPS kiểm tra hàng tháng, test tải hàng quý, thay pin mỗi 5–7 năm.
            </li>
            <li>
              Máy phát điện test hàng tuần và bảo dưỡng định kỳ 6 tháng/lần.
            </li>
          </ul>

         <h2 className="text-2xl font-semibold mt-8 mb-3">6. Bảo Trì Định Kỳ</h2>
          <p className="text-gray-700 mb-4">
            Để hệ thống điện Data Center hoạt động ổn định và đạt tuổi thọ tối đa, việc bảo trì định kỳ là bắt buộc. Các hạng mục chính bao gồm UPS và máy phát điện.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">6.1. UPS (Uninterruptible Power Supply)</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li><strong>Hàng tháng:</strong> Kiểm tra tình trạng pin, nhật ký sự cố và nhiệt độ thiết bị.</li>
            <li><strong>Hàng quý:</strong> Thực hiện kiểm tra chuyển đổi nguồn giữa chế độ lưới và pin.</li>
            <li><strong>Hàng năm:</strong> Test tải đầy đủ để đánh giá hiệu suất tổng thể của hệ thống UPS.</li>
            <li><strong>Thay pin:</strong> Chu kỳ từ <strong>5–7 năm</strong> tùy theo điều kiện hoạt động và loại pin.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">6.2. Máy Phát Điện Dự Phòng</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li><strong>Hàng tuần:</strong> Chạy thử không tải trong khoảng 15 phút để đảm bảo khả năng khởi động.</li>
            <li><strong>Hàng tháng:</strong> Test có tải trong 30 phút để kiểm tra công suất thực tế và khả năng duy trì điện áp ổn định.</li>
            <li><strong>Mỗi 6 tháng:</strong> Thực hiện bảo dưỡng định kỳ, thay dầu, lọc gió, và kiểm tra mức nhiên liệu.</li>
          </ul>

          <p className="mt-6 text-gray-700">
            Ngoài ra, hệ thống DCIM có thể hỗ trợ tự động ghi nhận lịch bảo trì, nhắc nhở và lưu trữ báo cáo kiểm tra, giúp vận hành viên quản lý lịch trình hiệu quả hơn.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Kết Luận</h2>
          <p className="text-gray-700 mb-4">
            Hệ thống <strong>Main – ATS – UPS – PDU</strong> tạo thành bốn lớp bảo vệ liên tục cho trung tâm dữ liệu, đảm bảo điện năng ổn định, sạch và không gián đoạn.
          </p>
          <p className="text-gray-700 mb-4">
            Với thiết kế <strong>redundancy N+1 hoặc 2N</strong> và quy trình bảo trì định kỳ nghiêm ngặt, hệ thống có thể đạt <strong>độ tin cậy 99.995%</strong> (Tier III – Tier IV).
          </p>
          <p className="text-gray-700">
            Điều này giúp Data Center vận hành 24/7/365, đáp ứng yêu cầu cao nhất của doanh nghiệp trong kỷ nguyên số – nơi <strong>downtime bằng thiệt hại</strong>.
          </p>

          <div className="relative w-full h-[360px] mt-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
              alt="Hệ thống điện Data Center hiện đại"
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
