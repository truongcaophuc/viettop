"use client";
import { CheckCircle, AlertTriangle } from "lucide-react";

export default function CustomerProblemsSolutions() {
  const problems = [
    "Hệ thống làm mát không ổn định, tiêu tốn điện năng.",
    "Nguồn điện dự phòng yếu, ATS hoạt động không ổn định.",
    "Khó giám sát, quản lý hạ tầng trung tâm dữ liệu.",
    "Nguy cơ cháy nổ cao, thiếu cảnh báo sớm.",
    "An ninh kém, khó kiểm soát ra vào khu vực quan trọng.",
    "Thiết bị dễ hư hỏng do chống sét và tiếp địa không đạt chuẩn.",
  ];

  const solutions = [
    "Điều hòa chính xác, duy trì môi trường ổn định cho thiết bị CNTT.",
    "Nguồn điện liên tục và hệ thống dự phòng thông minh.",
    "Giám sát – điều khiển – tối ưu vận hành toàn bộ hạ tầng.",
    "Phòng cháy chữa cháy tự động, cảnh báo sớm và an toàn.",
    "Kiểm soát ra vào thông minh, tăng cường an ninh hệ thống.",
    "Tiếp địa – chống sét đạt chuẩn, bảo vệ thiết bị toàn diện.",
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-[--background]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Cột trái: Vấn đề khách hàng */}
        <div className="shadow-lg rounded-2xl p-8 bg-white border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
          <h2 className="text-3xl font-bold text-[--primary] mb-6">
            Vấn đề khách hàng
          </h2>
          <ul className="space-y-4">
            {problems.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:bg-gray-100 transition"
              >
                <AlertTriangle
                  className="text-secondary w-5 h-5 mt-0.5 flex-shrink-0 drop-shadow-sm"
                />
                <p className="text-gray-700">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột phải: Giải pháp Viettop */}
        <div className="shadow-lg rounded-2xl p-8 bg-white border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
          <h2 className="text-3xl font-bold text-[--primary] mb-6">
            Giải pháp từ Viettop
          </h2>
          <ul className="space-y-4">
            {solutions.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-[--primary]/5 p-4 rounded-xl border border-[--primary]/10 hover:bg-[--primary]/10 transition"
              >
                <CheckCircle
                  className="text-success w-5 h-5 mt-0.5 flex-shrink-0 drop-shadow-sm"
                />
                <p className="text-gray-800">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
