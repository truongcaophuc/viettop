
"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-white py-16 px-6 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-blue-simple-summary-of-work-poster-background-image_22360.jpg')" // 🔹 Thay ảnh nền của bạn
      }}
    >
      {/* Lớp phủ làm ảnh nền chìm */}
      <div className="absolute inset-0 bg-[#004d61]/85 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Các cột chính */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">
              SẢN PHẨM
            </h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>Máy lọc nước</li>
              <li>Đồ gia dụng</li>
              <li>Điện gia dụng</li>
              <li>Thiết bị nhà bếp</li>
              <li>Điện tử Điện lạnh</li>
              <li>Điện dân dụng</li>
              <li>Thiết bị điện công nghiệp</li>
              <li>Cửa chống cháy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">
              VỀ SUNHOUSE
            </h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>Thông điệp của Chủ tịch HĐQT</li>
              <li>Cơ cấu tổ chức</li>
              <li>Thành tích giải thưởng</li>
              <li>SUNHOUSE TV</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">
              TIN TỨC & SỰ KIỆN
            </h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>Tin hoạt động</li>
              <li>Bí quyết - Mẹo vặt</li>
              <li>Tin thưởng thức</li>
              <li>Khuyến mại HOT</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">
              HỖ TRỢ KHÁCH HÀNG
            </h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>Chính sách bảo hành</li>
              <li>Xác thực sản phẩm chính hãng</li>
              <li>Địa điểm bán hàng</li>
              <li>Liên hệ</li>
            </ul>
          </div>
        </div>

        {/* Thông tin liên hệ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/30 pt-8 text-sm text-white/90">
          <div>
            <h4 className="font-semibold mb-2 border-b border-white/30 pb-1">
              📍 ĐỊA CHỈ
            </h4>
            <p>
              Tầng 12, tòa nhà Richy Tower, Số 35 Mạc Thái Tổ,
              Yên Hòa, Cầu Giấy, Hà Nội
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 border-b border-white/30 pb-1">
              📞 ĐIỆN THOẠI
            </h4>
            <p>024.37366676 / 024.37366686</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 border-b border-white/30 pb-1">
              📧 EMAIL
            </h4>
            <p>info@sunhouse.com.vn</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 border-b border-white/30 pb-1">
              🌐 WEBSITE
            </h4>
            <p>www.sunhouse.com.vn</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
