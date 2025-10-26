"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlogSidebar from "../component/BlogSidebar";

export default function Blog2() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const sections = [
    {
      title: "Giới Thiệu",
      content: (
        <>
          <p>
            Trong lĩnh vực điều hòa không khí, việc phân biệt và lựa chọn đúng hệ
            thống là yếu tố quyết định đến hiệu quả vận hành, chi phí đầu tư và
            trải nghiệm người dùng. Bài viết này sẽ giúp bạn hiểu rõ sự khác biệt
            giữa <strong>HVAC, AHU, FCU</strong> và <strong>PAC</strong> — từ chức
            năng, cấu tạo đến tiêu chí lựa chọn phù hợp.
          </p>
        </>
      ),
    },
    {
      title: "1. HVAC - Hệ Thống Tổng Thể",
      content: (
        <>
          <h3 className="font-semibold mt-4 mb-2">1.1. Định Nghĩa</h3>
          <p>
            <strong>HVAC (Heating, Ventilation, and Air Conditioning)</strong> là
            hệ thống tổng hòa bao gồm tất cả các thiết bị và công nghệ phục vụ cho
            việc điều hòa không khí, sưởi ấm và thông gió trong công trình.
          </p>

          <h3 className="font-semibold mt-4 mb-2">1.2. Chức Năng Chính</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Heating (Sưởi ấm): Duy trì nhiệt độ trong mùa đông</li>
            <li>Ventilation (Thông gió): Đảm bảo không khí trong lành, trao đổi khí</li>
            <li>Air Conditioning (Điều hòa): Làm mát, khử ẩm trong mùa hè</li>
            <li>Kiểm soát chất lượng không khí (lọc bụi, khử khuẩn)</li>
            <li>Điều chỉnh độ ẩm</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">1.3. Các Thành Phần</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Chiller (máy làm lạnh nước)</li>
            <li>Boiler (nồi hơi)</li>
            <li>Cooling Tower (tháp giải nhiệt)</li>
            <li>AHU, FCU, PAC (các thiết bị đầu cuối)</li>
            <li>Hệ thống ống gió và ống nước</li>
            <li>Hệ thống điều khiển BMS</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">1.4. Ứng Dụng</h3>
          <p>
            Toà nhà văn phòng, trung tâm thương mại, bệnh viện, nhà máy, khách sạn
            cao cấp.
          </p>

          <motion.div
            variants={fadeInUp}
            className="relative w-full h-[360px] mt-6 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/blog/blog2/GetImage (1).jpeg"
              alt="HVAC tổng thể"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </>
      ),
    },
    {
      title: "2. AHU - Tủ Xử Lý Không Khí Trung Tâm",
      content: (
        <>
          <h3 className="font-semibold mt-4 mb-2">2.1. Định Nghĩa</h3>
          <p>
            <strong>AHU (Air Handling Unit)</strong> là tủ xử lý không khí trung
            tâm, chịu trách nhiệm xử lý và phân phối không khí cho toàn bộ hoặc
            một phần lớn công trình.
          </p>

          <h3 className="font-semibold mt-4 mb-2">2.2. Cấu Tạo Chi Tiết</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Buồng lọc gió: lọc sơ bộ, lọc tinh, lọc HEPA</li>
            <li>Buồng làm lạnh (Cooling Coil): dàn lạnh nước lạnh</li>
            <li>Buồng sưởi (Heating Coil): dùng nước nóng hoặc điện</li>
            <li>Buồng quạt: cấp và hồi gió</li>
            <li>Buồng tạo ẩm (Humidifier)</li>
            <li>Buồng trộn gió (Mixing Box)</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">2.3. Nguyên Lý Hoạt Động</h3>
          <p>
            Gió tươi từ bên ngoài trộn với gió hồi từ phòng, đi qua bộ lọc, qua dàn
            lạnh hoặc dàn sưởi để điều chỉnh nhiệt độ, sau đó được quạt cấp đẩy
            qua hệ thống ống gió đến các khu vực sử dụng.
          </p>

          <h3 className="font-semibold mt-4 mb-2">2.4. Ưu & Nhược Điểm</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Ưu điểm: Xử lý tập trung, kiểm soát tốt, tiết kiệm năng lượng.</li>
            <li>Nhược điểm: Chi phí cao, cần không gian lớn, ống gió phức tạp.</li>
          </ul>

          {/* <motion.div
            variants={fadeInUp}
            className="relative w-full h-[360px] mt-6 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
              alt="AHU System"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div> */}
        </>
      ),
    },
    {
      title: "3. FCU - Tủ Xử Lý Không Khí Cục Bộ",
      content: (
        <>
          <p>
            <strong>FCU (Fan Coil Unit)</strong> là thiết bị xử lý không khí cục
            bộ, phục vụ từng phòng hoặc khu vực nhỏ độc lập.
          </p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>Dàn trao đổi nhiệt (Coil)</li>
            <li>Quạt ly tâm nhiều tốc độ</li>
            <li>Khay hứng nước ngưng</li>
            <li>Bộ lọc gió đơn giản</li>
            <li>Van điều khiển nước lạnh</li>
          </ul>
          <p className="mt-3">
            FCU phù hợp với các khu vực riêng biệt như phòng khách sạn, văn phòng
            nhỏ, phòng họp.
          </p>

          {/* <motion.div
            variants={fadeInUp}
            className="relative w-full h-[360px] mt-6 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://congcutot.vn/uploads/store/page/article/2023/10/nghe-dien-lanh-la-nghe-gi-dd.jpg"
              alt="FCU Unit"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div> */}
        </>
      ),
    },
   {
  title: "4. PAC - Điều Hòa Tủ Đứng Chính Xác",
  content: (
    <>
      <div className="space-y-6 leading-relaxed">
        <p>
          <strong>PAC (Precision Air Conditioner)</strong> là hệ thống điều hòa chuyên dụng,
          kiểm soát nhiệt độ và độ ẩm cực kỳ chính xác, hoạt động liên tục 24/7 cho các khu vực
          trọng yếu như phòng máy chủ hoặc trung tâm dữ liệu.
        </p>

        {/* 4.1 Định Nghĩa */}
        <section>
          <h3 className="text-lg font-semibold text-600 mb-2">
            4.1. Định Nghĩa
          </h3>
          <p>
            PAC là thiết bị điều hòa chuyên dụng với khả năng kiểm soát nhiệt độ và độ ẩm ở mức chính xác cao,
            đảm bảo môi trường hoạt động ổn định cho các thiết bị công nghệ, đặc biệt trong điều kiện hoạt động 24/7/365.
          </p>
        </section>

        {/* 4.2 Đặc Điểm Kỹ Thuật */}
        <section>
          <h3 className="text-lg font-semibold text-600 mb-2">
            4.2. Đặc Điểm Kỹ Thuật
          </h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Độ chính xác nhiệt độ: ±1°C hoặc ±0.5°C</li>
            <li>Độ ẩm: ±5% RH hoặc ±2% RH</li>
            <li>Hoạt động liên tục 24/7 không gián đoạn</li>
            <li>Công suất: 5 kW – 100+ kW</li>
            <li>Tỷ lệ ẩn nhiệt cao (SHR &gt; 0.9)</li>
          </ul>
        </section>

        {/* 4.3 Cấu Tạo */}
        <section>
          <h3 className="text-lg font-semibold text-600 mb-2">
            4.3. Cấu Tạo
          </h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Compressor kép điều khiển biến tần</li>
            <li>Dàn lạnh hiệu suất cao, van điện tử EEV</li>
            <li>Hệ thống tạo ẩm điện cực hoặc hồng ngoại</li>
            <li>Hệ thống khử ẩm tái nhiệt sâu</li>
            <li>Quạt EC tiết kiệm điện, điều khiển vô cấp</li>
            <li>Kết nối BMS, giám sát từ xa, cảnh báo lỗi</li>
          </ul>
        </section>

        {/* 4.4 Phân Loại */}
        <section>
          <h3 className="text-lg font-semibold text-600 mb-2">
            4.4. Phân Loại PAC
          </h3>
          <p className="font-semibold">Theo phương thức làm mát:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Air-cooled: Giải nhiệt bằng không khí</li>
            <li>Water-cooled: Giải nhiệt bằng nước</li>
            <li>Glycol-cooled: Dùng dung dịch glycol</li>
            <li>Chilled water: Dùng nước lạnh từ Chiller</li>
          </ul>
          <p className="font-semibold mt-3">Theo kiểu lắp đặt:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Up-flow: Gió thổi lên (dưới sàn kỹ thuật)</li>
            <li>Down-flow: Gió thổi xuống</li>
            <li>Horizontal: Gió thổi ngang</li>
          </ul>
        </section>

        {/* 4.5 Nguyên Lý Hoạt Động */}
        <section>
          <h3 className="text-lg font-semibold text-600 mb-2">
            4.5. Nguyên Lý Hoạt Động
          </h3>
          <p>
            PAC liên tục theo dõi nhiệt độ và độ ẩm qua cảm biến chính xác cao. Khi phát hiện sai lệch nhỏ,
            hệ thống sẽ tự động kích hoạt chế độ làm lạnh, tạo ẩm hoặc khử ẩm để khôi phục cân bằng.
            Không khí tuần hoàn liên tục đảm bảo nhiệt độ và độ ẩm đồng đều khắp không gian.
          </p>
          <p>
            Hệ thống PAC cũng có khả năng tự chẩn đoán, cảnh báo sự cố, và ghi log dữ liệu để quản lý bảo trì.
          </p>
        </section>

        {/* 4.6 Ưu & Nhược Điểm */}
        <section>
          <h3 className="text-lg font-semibold text-600 mb-2">
            4.6. Ưu & Nhược Điểm
          </h3>
          <p className="font-semibold">Ưu điểm:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Độ chính xác cực cao</li>
            <li>Vận hành liên tục 24/7, độ tin cậy cao</li>
            <li>Tuổi thọ 15–20 năm</li>
            <li>Tích hợp giám sát thông minh, cảnh báo từ xa</li>
          </ul>
          <p className="font-semibold mt-3">Nhược điểm:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Chi phí đầu tư và bảo trì cao</li>
            <li>Tiêu thụ điện năng lớn</li>
            <li>Yêu cầu kỹ thuật viên có chuyên môn</li>
            <li>Cần hệ thống phụ trợ như UPS hoặc nước làm mát</li>
          </ul>
        </section>

        {/* 4.7 Tiêu Chí Lựa Chọn */}
        <section>
          <h3 className="text-lg font-semibold text-600 mb-2">
            4.7. Tiêu Chí Lựa Chọn
          </h3>
          <p>
            PAC là lựa chọn tối ưu cho các khu vực yêu cầu môi trường kiểm soát chặt chẽ,
            không cho phép gián đoạn như:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Phòng máy chủ (Server Room)</li>
            <li>Data Center</li>
            <li>Phòng điều khiển trung tâm (Control Room)</li>
            <li>Phòng viễn thông (Telecom Room)</li>
            <li>Phòng thí nghiệm chính xác, bảo tàng, kho lưu trữ dữ liệu</li>
          </ul>
        </section>
      </div>
    </>
  ),
},

    {
      title: "5. Hướng Dẫn Lựa Chọn Theo Môi Trường",
      content: (
    <>
      <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">5.1. Văn Phòng</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Văn phòng mở lớn (&gt; 500m²): AHU + hệ thống ống gió</li>
        <li>Văn phòng nhiều phòng riêng: Chiller + FCU cho từng phòng</li>
        <li>Văn phòng nhỏ (&lt; 100m²): VRV/VRF hoặc Multi Split</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">5.2. Bệnh Viện</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Phòng mổ, ICU: AHU chuyên dụng với lọc HEPA</li>
        <li>Phòng bệnh thường: FCU 4 ống</li>
        <li>Phòng máy chủ bệnh viện: PAC</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">5.3. Khách Sạn</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Phòng khách: FCU âm trần</li>
        <li>Sảnh, nhà hàng: AHU</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
        5.4. Nhà Máy &amp; Công Nghiệp
      </h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Phòng sạch sản xuất: AHU với FFU</li>
        <li>Phòng máy chủ nhà máy: PAC</li>
        <li>Khu văn phòng: FCU hoặc AHU tùy diện tích</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">5.5. Data Center</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Server Room nhỏ (&lt; 50m²): PAC 1-2 units với N+1 redundancy</li>
        <li>Data Center trung bình: PAC với Chiller riêng, cấu hình Hot/Cold aisle</li>
        <li>
          Data Center lớn: Hệ thống PAC phân tán + Chiller Plant với công nghệ Free
          Cooling
        </li>
      </ul>
    </>
  ),
    },
    {
      title: "6. Xu Hướng Công Nghệ Mới",
      content: (
        <>
          <div className="space-y-6 leading-relaxed">
            <p>
              Ngành điều hòa không khí (HVAC) đang bước vào thời kỳ đổi mới mạnh mẽ với sự kết hợp của công nghệ tiết kiệm năng lượng,
              trí tuệ nhân tạo và vật liệu tiên tiến. Dưới đây là những xu hướng nổi bật đang định hình tương lai của hệ thống HVAC hiện đại.
            </p>

            {/* 6.1 VRV/VRF */}
            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">
                6.1. VRV/VRF (Variable Refrigerant Volume/Flow)
              </h3>
              <p>
                Hệ thống <strong>VRV/VRF</strong> cho phép điều khiển lưu lượng môi chất lạnh biến thiên theo nhu cầu thực tế của từng khu vực,
                giúp tiết kiệm năng lượng từ 30–50% so với hệ thống truyền thống.
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Hoạt động linh hoạt – mỗi dàn lạnh có thể điều chỉnh độc lập</li>
                <li>Giảm hao phí năng lượng nhờ công nghệ Inverter và cảm biến thông minh</li>
                <li>Thi công gọn gàng, phù hợp cho tòa nhà cao tầng và văn phòng</li>
                <li>Kết hợp ưu điểm giữa hệ thống cục bộ (Multi Split) và trung tâm (Chiller)</li>
              </ul>
              {/* <img
                src="https://hvacr.vn/wp-content/uploads/2024/05/VRV-VRF-system-diagram.jpg"
                alt="Sơ đồ hệ thống VRV VRF"
                className="rounded-xl shadow-md mx-auto w-full max-w-3xl mt-3"
              /> */}
            </section>

            {/* 6.2 Chilled Beam */}
            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">
                6.2. Chilled Beam
              </h3>
              <p>
                <strong>Chilled Beam</strong> là công nghệ làm lạnh bằng nước thông qua các dầm trần (beam) tích hợp ống dẫn nước lạnh.
                Giải pháp này giúp tiết kiệm không gian ống gió và tiêu thụ điện năng thấp hơn nhiều so với hệ thống truyền thống.
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Tối ưu không gian – giảm 40% kích thước trần kỹ thuật</li>
                <li>Hiệu quả năng lượng cao nhờ sử dụng nước làm lạnh</li>
                <li>Vận hành êm ái, bảo trì dễ dàng</li>
                <li>Phù hợp cho bệnh viện, văn phòng cao cấp, trường học</li>
              </ul>
              {/* <img
                src="https://hvacr.vn/wp-content/uploads/2024/05/chilled-beam-hvac.jpg"
                alt="Hệ thống Chilled Beam"
                className="rounded-xl shadow-md mx-auto w-full max-w-3xl mt-3"
              /> */}
            </section>

            {/* 6.3 AI & IoT trong HVAC */}
            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">
                6.3. AI & IoT trong HVAC
              </h3>
              <p>
                Ứng dụng <strong>AI (Trí tuệ nhân tạo)</strong> và <strong>IoT (Internet of Things)</strong> đang thay đổi hoàn toàn cách vận hành
                và quản lý hệ thống HVAC. Dữ liệu từ cảm biến được thu thập liên tục để tối ưu hiệu suất, dự đoán sự cố và giảm chi phí bảo trì.
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Tối ưu năng lượng theo thời gian thực</li>
                <li>Bảo trì dự báo (Predictive Maintenance)</li>
                <li>Phát hiện sớm rò rỉ gas hoặc lỗi cảm biến</li>
                <li>Điều khiển thông minh theo hành vi người dùng và lịch sử sử dụng</li>
              </ul>
              {/* <img
                src="https://hvacr.vn/wp-content/uploads/2024/05/ai-iot-hvac-smart-building.jpg"
                alt="AI và IoT trong hệ thống HVAC"
                className="rounded-xl shadow-md mx-auto w-full max-w-3xl mt-3"
              /> */}
            </section>

            {/* 6.4 Free Cooling */}
            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">
                6.4. Free Cooling
              </h3>
              <p>
                <strong>Free Cooling</strong> là giải pháp sử dụng không khí ngoài trời để làm mát khi điều kiện môi trường cho phép,
                đặc biệt hiệu quả ở vùng khí hậu mát mẻ hoặc ban đêm. Công nghệ này giúp giảm 20–40% chi phí vận hành làm lạnh,
                nhất là cho các trung tâm dữ liệu (Data Center).
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Tận dụng không khí tự nhiên – giảm thời gian hoạt động của Chiller</li>
                <li>Tăng tuổi thọ thiết bị và giảm CO₂ phát thải</li>
                <li>Phù hợp cho Data Center, nhà máy và khu công nghiệp</li>
              </ul>
              {/* <img
                src="https://hvacr.vn/wp-content/uploads/2024/05/free-cooling-data-center.jpg"
                alt="Free Cooling trong trung tâm dữ liệu"
                className="rounded-xl shadow-md mx-auto w-full max-w-3xl mt-3"
              /> */}
            </section>

            {/* Kết luận tổng quan */}
            <section>
              <h3 className="text-lg font-semibold text-600 mb-2">Tổng Kết</h3>
              <p>
                Sự kết hợp của <strong>VRV/VRF, Chilled Beam, AI/IoT</strong> và <strong>Free Cooling</strong> đang định hình tương lai
                ngành HVAC theo hướng bền vững, tiết kiệm năng lượng và thân thiện với môi trường. Các xu hướng này giúp doanh nghiệp giảm chi phí,
                tăng hiệu quả và hướng tới mô hình tòa nhà xanh (Green Building) trong tương lai.
              </p>
            </section>
          </div>
        </>
      ),
    },

    {
      title: "7. Kết Luận",
      content: (
        <>
          <p>
            Lựa chọn hệ thống HVAC phù hợp đòi hỏi hiểu rõ đặc thù công trình, yêu
            cầu vận hành và ngân sách đầu tư. Nguyên tắc vàng: xác định nhu cầu cụ
            thể, đánh giá tổng thể, tư vấn chuyên gia và bảo trì định kỳ.
          </p>

          <motion.div
            variants={fadeInUp}
            className="relative w-full h-[360px] mt-6 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/blog/blog2/GetImage (2).jpeg"
              alt="Kết luận HVAC"
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
      {/* --- LEFT: CONTENT --- */}
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
          HVAC – AHU – FCU – PAC: Hiểu Đúng Để Thiết Kế Chuẩn
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-sm text-gray-500 mb-6">
          Đăng vào ngày <span className="font-medium">22/12/2025</span> bởi{" "}
          <span className="font-medium text-gray-800">Thuật</span>
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="relative w-full h-[420px] mb-6 rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="/blog/blog2/banner.jpeg"
            alt="HVAC Overview"
            fill
            className="object-cover hover:scale-110 transition-transform duration-700"
            priority
          />
        </motion.div>

        {/* --- CONTENT BODY --- */}
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          {sections.map((section, i) => (
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

      {/* --- RIGHT: SIDEBAR --- */}
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
