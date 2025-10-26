"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlogSidebar from "../component/BlogSidebar";

export default function Blog5() {
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
          Building Management System
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Ứng Dụng Modbus & SNMP Trong BMS và Giám Sát Thiết Bị
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Đăng vào ngày <span className="font-medium">15/10/2025</span> bởi{" "}
          <span className="font-medium text-gray-800">Thuật</span>
        </p>

        <div className="relative w-full h-[420px] mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
            alt="Ứng dụng Modbus và SNMP trong BMS"
            fill
            className="object-cover hover:scale-110 transition-transform duration-700"
            priority
          />
        </div>

        <div className="prose max-w-none text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold mt-6 mb-3">Giới Thiệu</h2>
          <p>
            Trong kỷ nguyên tự động hóa và Internet of Things (IoT), việc giám sát và điều khiển các hệ thống trong tòa nhà trở nên ngày càng quan trọng.{" "}
            <strong>Modbus</strong> và <strong>SNMP</strong> là hai giao thức truyền thông phổ biến nhất được sử dụng trong{" "}
            <strong>BMS (Building Management System)</strong> để thu thập dữ liệu, điều khiển thiết bị và quản lý hạ tầng thông minh. 
          </p>
          <p>
            Modbus thường được ứng dụng cho thiết bị công nghiệp, HVAC, đồng hồ điện, cảm biến môi trường... trong khi SNMP chủ yếu dùng trong giám sát
            thiết bị mạng, máy chủ và UPS. Cả hai kết hợp lại giúp BMS vận hành ổn định, minh bạch và hiệu quả.
          </p>

          {/* --- GIAO THỨC MODBUS --- */}
          <h2 className="text-2xl font-semibold mt-8 mb-3">1. Giao Thức Modbus</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">1.1. Tổng Quan</h3>
          <p>
            <strong>Modbus</strong> là giao thức truyền thông công nghiệp mã nguồn mở, được phát triển bởi Modicon (nay là Schneider Electric). 
            Nhờ tính đơn giản, ổn định và dễ triển khai, Modbus trở thành tiêu chuẩn de-facto trong công nghiệp tự động hóa.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Modbus RTU – hoạt động qua đường truyền RS-485.</li>
            <li>Modbus TCP/IP – truyền dữ liệu qua Ethernet (LAN/WAN).</li>
            <li>Modbus ASCII – dạng ký tự, dễ debug và kiểm tra.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">1.2. Cơ Chế Hoạt Động</h3>
          <p>
            Modbus sử dụng mô hình <strong>Master–Slave</strong> (hoặc Client–Server trong Modbus TCP):
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Master gửi yêu cầu đọc hoặc ghi dữ liệu đến Slave.</li>
            <li>Slave phản hồi bằng dữ liệu trong các thanh ghi (Register).</li>
            <li>Một Master có thể kết nối đến tối đa <strong>247 thiết bị Slave</strong>.</li>
            <li>Dữ liệu được kiểm tra bằng mã <strong>CRC</strong> để đảm bảo chính xác.</li>
          </ul>

          <div className="relative w-full h-[360px] my-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
              alt="Mô hình truyền thông Modbus TCP"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* --- GIAO THỨC SNMP --- */}
          <h2 className="text-2xl font-semibold mt-8 mb-3">2. Giao Thức SNMP</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">2.1. Tổng Quan</h3>
          <p>
            <strong>SNMP (Simple Network Management Protocol)</strong> là giao thức quản lý mạng dùng để giám sát và điều khiển các thiết bị IT như switch, router, server, UPS, camera IP...
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>SNMPv1: Phiên bản đầu tiên, đơn giản nhưng bảo mật yếu.</li>
            <li>SNMPv2c: Cải thiện tốc độ và thêm lệnh GETBULK.</li>
            <li>SNMPv3: Hỗ trợ mã hóa và xác thực người dùng.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">2.2. Cơ Chế Hoạt Động</h3>
          <p>SNMP hoạt động theo mô hình <strong>Manager – Agent</strong>:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Manager gửi lệnh <strong>GET</strong> để lấy thông tin.</li>
            <li>Agent phản hồi dựa trên cơ sở dữ liệu <strong>MIB</strong> (Management Information Base).</li>
            <li>Agent có thể chủ động gửi <strong>Trap</strong> khi có sự cố (mất nguồn, quá nhiệt...).</li>
            <li>Manager có thể dùng lệnh <strong>SET</strong> để thay đổi cấu hình thiết bị.</li>
          </ul>

          <div className="relative w-full h-[360px] my-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
              alt="Mô hình SNMP trong giám sát mạng"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* --- CÁCH TRUYỀN DỮ LIỆU --- */}
          <h2 className="text-2xl font-semibold mt-8 mb-3">3. Cách Truyền Dữ Liệu</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">3.1. Quy Trình Modbus</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Master kết nối tới Slave qua RS-485 hoặc TCP/IP.</li>
            <li>Gửi lệnh đọc/ghi với địa chỉ thanh ghi cụ thể.</li>
            <li>Slave xử lý và trả về dữ liệu thực.</li>
            <li>Phần mềm BMS hiển thị thông tin real-time.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">3.2. Quy Trình SNMP</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Manager gửi lệnh GET request với OID cụ thể.</li>
            <li>Agent truy xuất MIB và phản hồi dữ liệu.</li>
            <li>Manager lưu dữ liệu và cập nhật dashboard.</li>
            <li>Agent gửi Trap khi có cảnh báo hoặc sự kiện bất thường.</li>
          </ul>

          {/* --- ỨNG DỤNG THỰC TẾ --- */}
          <h2 className="text-2xl font-semibold mt-8 mb-3">4. Ứng Dụng Thực Tế Trong BMS</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">4.1. Ứng Dụng Modbus</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Điều hòa trung tâm (HVAC):</strong> Kết nối 50 máy lạnh qua Modbus RTU để thu thập nhiệt độ, độ ẩm, công suất và điều khiển bật/tắt từ xa.</li>
            <li><strong>Giám sát năng lượng:</strong> Đồng hồ điện Modbus TCP truyền dữ liệu tiêu thụ mỗi 5 giây, giúp phát hiện bất thường.</li>
            <li><strong>Phòng server:</strong> Cảm biến nhiệt độ, UPS và PAC điều khiển qua Modbus tích hợp vào DCIM.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">4.2. Ứng Dụng SNMP</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Giám sát mạng:</strong> Monitor hàng trăm switch/router, thu thập CPU, RAM, băng thông, cảnh báo khi interface down.</li>
            <li><strong>Quản lý UPS:</strong> Theo dõi điện áp, tải, nhiệt độ, nhận Trap khi chuyển sang pin, tự động shutdown server khi pin yếu.</li>
            <li><strong>Giám sát môi trường:</strong> Cảm biến nhiệt độ, độ ẩm, khói gửi Trap ngay khi phát hiện bất thường.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">4.3. Kết Hợp Cả Hai Trong BMS</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Modbus cho thiết bị HVAC, đồng hồ điện, cảm biến môi trường.</li>
            <li>SNMP cho hạ tầng mạng, UPS, camera IP.</li>
            <li>Gateway trung gian giúp chuyển đổi hai giao thức.</li>
            <li>Dashboard tổng hợp hiển thị toàn bộ dữ liệu trong BMS.</li>
          </ul>

          {/* --- LỢI ÍCH --- */}
          <h2 className="text-2xl font-semibold mt-8 mb-3">5. Lợi Ích Khi Ứng Dụng Modbus & SNMP</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Tích hợp đa dạng thiết bị từ nhiều nhà sản xuất.</li>
            <li>Giám sát real-time 24/7 với cảnh báo tức thời.</li>
            <li>Phát hiện sự cố sớm, giảm thời gian downtime.</li>
            <li>Điều khiển và cấu hình thiết bị từ xa tiện lợi.</li>
            <li>Dữ liệu tập trung giúp phân tích xu hướng và báo cáo năng lượng.</li>
            <li>Tối ưu hóa vận hành và tiết kiệm chi phí bảo trì.</li>
          </ul>

          {/* --- KẾT LUẬN --- */}
          <h2 className="text-2xl font-semibold mt-8 mb-3">Kết Luận</h2>
          <p>
            <strong>Modbus</strong> và <strong>SNMP</strong> là hai giao thức nền tảng giúp BMS trở nên thông minh và linh hoạt hơn. 
            Modbus phù hợp cho các thiết bị công nghiệp yêu cầu phản hồi tức thời, trong khi SNMP là lựa chọn lý tưởng cho quản lý thiết bị IT và mạng.
          </p>
          <p>
            Khi được tích hợp hợp lý, hai giao thức này tạo nên một hệ thống giám sát tập trung, an toàn và hiệu quả — giúp đội vận hành dễ dàng kiểm soát toàn bộ hạ tầng tòa nhà, từ HVAC đến UPS và mạng nội bộ.
          </p>

          <div className="relative w-full h-[360px] mt-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
              alt="Dashboard BMS với Modbus và SNMP"
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
