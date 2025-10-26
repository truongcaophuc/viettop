"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlogSidebar from "../component/BlogSidebar";

export default function Blog1() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const contentSections = [
    {
      title: "BMS là gì?",
      content: (
        <>
          <p>
            <strong>BMS (Building Management System)</strong> – Hệ thống Quản lý
            Tòa nhà là “bộ não trung tâm” giúp tự động giám sát, điều khiển và
            tối ưu toàn bộ hạ tầng kỹ thuật trong tòa nhà và Data Center. Hệ
            thống này giúp đảm bảo hiệu suất năng lượng, độ an toàn và sự tiện
            nghi ở mức cao nhất.
          </p>
          <p>
            Trong thời đại chuyển đổi số, BMS đóng vai trò nền tảng trong việc
            kết nối hàng trăm thiết bị thông minh – từ hệ thống điện, điều hòa,
            chiếu sáng cho đến an ninh và phòng cháy chữa cháy – tạo nên một môi
            trường vận hành tối ưu, tiết kiệm và bền vững.
          </p>
        </>
      ),
    },
    {
      title: "Cấu trúc BMS: 3 thành phần chính",
      content: (
        <>
          <h3 className="font-semibold text-lg mt-4 mb-2">1. Sensors – Hệ thống cảm biến</h3>
          <ul className="list-disc ml-6">
            <li>Cảm biến nhiệt độ & độ ẩm: Giám sát môi trường phòng server.</li>
            <li>Cảm biến áp suất: Theo dõi hệ thống thông gió và điều hòa.</li>
            <li>Cảm biến năng lượng: Đo công suất tiêu thụ điện.</li>
            <li>Cảm biến rò rỉ nước: Phát hiện sớm nguy cơ rò nước.</li>
            <li>Cảm biến khói & nhiệt: Cảnh báo cháy sớm.</li>
            <li>Cảm biến chất lượng không khí: Giám sát bụi và hạt lơ lửng.</li>
          </ul>

          <h3 className="font-semibold text-lg mt-4 mb-2">2. Controllers – Bộ điều khiển</h3>
          <ul className="list-disc ml-6">
            <li>
              <strong>DDC:</strong> Xử lý logic và điều khiển thiết bị trực tiếp.
            </li>
            <li>
              <strong>PLC:</strong> Điều khiển quy trình tự động phức tạp.
            </li>
            <li>
              <strong>Gateway Controllers:</strong> Kết nối các giao thức khác nhau.
            </li>
          </ul>

          <h3 className="font-semibold text-lg mt-4 mb-2">3. HMI – Giao diện quản lý</h3>
          <ul className="list-disc ml-6">
            <li>Dashboard hiển thị trạng thái toàn hệ thống.</li>
            <li>Đồ họa trực quan theo sơ đồ tầng với mã màu cảnh báo.</li>
            <li>Báo cáo & phân tích xu hướng năng lượng.</li>
            <li>Cảnh báo thông minh qua Email, SMS, App.</li>
            <li>Điều khiển từ xa qua web hoặc mobile app.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Vai trò của BMS trong Data Center",
      content: (
        <>
          <p>
            Trong các trung tâm dữ liệu, nơi yêu cầu tính ổn định và chính xác
            cao, BMS đóng vai trò sống còn trong việc đảm bảo hệ thống vận hành
            an toàn, hiệu quả và liên tục 24/7.
          </p>
          <ul className="list-disc ml-6 space-y-2 mt-3">
            <li>
              <strong>Quản lý hệ thống làm mát:</strong> Duy trì nhiệt độ lý
              tưởng (18–27°C), điều phối hệ thống CRAC/CRAH, ngăn hotspot, tối ưu
              airflow.
            </li>
            <li>
              <strong>Giám sát & tối ưu năng lượng:</strong> Theo dõi PUE
              real-time, phát hiện thiết bị tiêu thụ năng lượng bất thường, và dự
              báo nhu cầu năng lượng.
            </li>
            <li>
              <strong>An toàn & bảo mật:</strong> Tích hợp kiểm soát ra vào, hệ
              thống camera, cảnh báo cháy nổ, và quản lý chữa cháy tự động.
            </li>
            <li>
              <strong>Quản lý nguồn điện dự phòng:</strong> Giám sát UPS, máy
              phát điện diesel và pin dự phòng, tự động kích hoạt khi mất điện.
            </li>
          </ul>

          {/* --- ẢNH MINH HỌA --- */}
          <motion.div
            variants={fadeInUp}
            className="relative w-full h-[360px] mt-6 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/blog/blog1/GetImage (1).png"
              alt="BMS trong Data Center"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </>
      ),
    },
    {
      title: "6. Lợi Ích Vượt Trội Khi Triển Khai BMS",
      content: (
        <>
          <ul className="list-decimal ml-6 space-y-4">
            <li>
              <strong>1. Tối Ưu Hóa Vận Hành</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Tự động hóa các tác vụ lặp đi lặp lại, giảm sai sót thủ công.</li>
                <li>Giảm thời gian phản ứng sự cố từ hàng giờ xuống chỉ vài phút.</li>
                <li>Vận hành liên tục 24/7 mà không cần can thiệp thủ công.</li>
                <li>Điều chỉnh hoạt động thiết bị theo thời gian thực và nhu cầu thực tế.</li>
              </ul>
            </li>

            <li>
              <strong>2. Tiết Kiệm Chi Phí Đáng Kể</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Giảm 20–30% chi phí năng lượng nhờ tối ưu vận hành thiết bị.</li>
                <li>Kéo dài tuổi thọ thiết bị thông qua bảo trì dự đoán (Predictive Maintenance).</li>
                <li>Giảm chi phí nhân công vận hành nhờ tự động hóa.</li>
                <li>Tránh thiệt hại tài chính do downtime hoặc sự cố bất ngờ.</li>
              </ul>
            </li>

            <li>
              <strong>3. Nâng Cao Độ Tin Cậy</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Đảm bảo uptime đạt 99.99% hoặc cao hơn cho các hệ thống quan trọng.</li>
                <li>Phát hiện sớm vấn đề tiềm ẩn trước khi gây ra sự cố nghiêm trọng.</li>
                <li>Tích hợp redundancy và failover tự động đảm bảo liên tục dịch vụ.</li>
                <li>Ghi nhận và phân tích dữ liệu lịch sử để xác định nguyên nhân gốc rễ.</li>
              </ul>
            </li>

            <li>
              <strong>4. Quản Lý Tập Trung</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Một giao diện thống nhất để giám sát toàn bộ hệ thống hạ tầng.</li>
                <li>Quản lý nhiều địa điểm hoặc chi nhánh từ trung tâm điều khiển duy nhất.</li>
                <li>Báo cáo tự động, thống nhất và chuẩn hóa cho các bộ phận kỹ thuật.</li>
                <li>Dễ dàng mở rộng quy mô quản lý khi số lượng thiết bị tăng.</li>
              </ul>
            </li>

            <li>
              <strong>5. Tuân Thủ Tiêu Chuẩn</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Đáp ứng các tiêu chuẩn vận hành quốc tế Tier III, Tier IV.</li>
                <li>Hỗ trợ lưu trữ dữ liệu phục vụ kiểm toán (audit) và compliance.</li>
                <li>Báo cáo tiêu thụ năng lượng và môi trường theo chuẩn ISO 50001.</li>
                <li>Đảm bảo an toàn, bền vững và thân thiện môi trường.</li>
              </ul>
            </li>

            <li>
              <strong>6. Khả Năng Mở Rộng Linh Hoạt</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Dễ dàng tích hợp thêm cảm biến (sensor) hoặc thiết bị mới mà không cần dừng hệ thống.</li>
                <li>Kết nối linh hoạt với DCIM, ITSM, SCADA, hoặc hệ thống giám sát năng lượng.</li>
                <li>Nâng cấp phần mềm, firmware từ xa mà không gây gián đoạn hoạt động.</li>
                <li>Hỗ trợ tích hợp AI, IoT, Machine Learning cho vận hành thông minh trong tương lai.</li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },

    {
      title: "Xu hướng BMS thế hệ mới",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>AI & Machine Learning:</strong> Dự đoán sự cố, tối ưu hiệu
            suất năng lượng.
          </li>
          <li>
            <strong>IoT Integration:</strong> Mật độ cảm biến cao hơn, chi phí
            thấp hơn.
          </li>
          <li>
            <strong>Cloud-based Management:</strong> Quản lý hệ thống từ xa mọi
            lúc, mọi nơi.
          </li>
          <li>
            <strong>Digital Twin:</strong> Mô phỏng ảo toàn bộ trung tâm dữ liệu.
          </li>
          <li>
            <strong>Green Technology:</strong> Tích hợp năng lượng tái tạo, giảm
            carbon footprint.
          </li>
        </ul>
      ),
    },
    {
      title: "Kết luận",
      content: (
        <>
          <p>
            <strong>BMS</strong> không chỉ là công cụ quản lý – mà là yếu tố then
            chốt đảm bảo <strong>Data Center</strong> vận hành hiệu quả, an toàn
            và bền vững. Trong bối cảnh dữ liệu bùng nổ và áp lực năng lượng gia
            tăng, đầu tư vào hệ thống BMS chất lượng là xu hướng tất yếu cho mọi
            trung tâm dữ liệu hiện đại.
          </p>
          <p className="mt-3">
            Với BMS, doanh nghiệp không chỉ “quản lý” – mà đang chủ động kiểm soát
            tương lai của hạ tầng số.
          </p>

          {/* --- ẢNH MINH HỌA --- */}
          <motion.div
            variants={fadeInUp}
            className="relative w-full h-[360px] mt-6 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/blog/blog1/GetImage (2).png"
              alt="BMS quản lý tòa nhà thông minh"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </>
      ),
    },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* --- CỘT TRÁI: NỘI DUNG --- */}
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
          Tin tức
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
        >
          BMS là gì? Giải pháp quản lý tòa nhà thông minh cho Data Center hiện đại
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-sm text-gray-500 mb-6">
          Đăng vào ngày <span className="font-medium">21/12/2025</span> bởi{" "}
          <span className="font-medium text-gray-800">Thuật</span>
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="relative w-full h-[420px] mb-6 rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="/blog/blog1/banner.png"
            alt="BMS hệ thống quản lý tòa nhà"
            fill
            className="object-cover hover:scale-110 transition-transform duration-700"
            priority
          />
        </motion.div>

        {/* --- NỘI DUNG CHÍNH --- */}
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          {contentSections.map((section, i) => (
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

      {/* --- CỘT PHẢI: SIDEBAR --- */}
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
