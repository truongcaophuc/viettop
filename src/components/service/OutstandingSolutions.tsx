import hvacImage from "@/assets/hvac-system.jpg";

export default function OutstandingSolutions() {
  return (
    <section className="py-20 bg-gray-50 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Hình minh họa */}
        <div className="order-2 md:order-1">
          <img
            src={hvacImage.src}
            alt="HVAC System"
            className="w-full rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
          />
        </div>

        {/* Nội dung */}
        <div className="order-1 md:order-2 space-y-6">
          <div className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-primary text-sm font-medium">
            Giải pháp nổi bật
          </div>

          <h2 className="text-4xl font-extrabold text-primary leading-tight">
            SmartCool i-drive Inverter
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            Công nghệ biến tần tiên tiến từ Airedale by Modine giúp tiết kiệm
            năng lượng lên đến{" "}
            <span className="font-semibold text-accent">40%</span> so với hệ
            thống truyền thống, đồng thời đảm bảo độ chính xác nhiệt độ ±1°C
            cho môi trường Data Center.
          </p>

          <ul className="space-y-3">
            {[
              "Tiết kiệm năng lượng tối ưu",
              "Độ chính xác cao",
              "Vận hành êm ái",
              "Tuổi thọ cao",
              "Tích hợp BMS/DCIM",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-primary hover:text-accent transition-colors duration-300"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-4 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow hover:shadow-lg">
            Tìm hiểu chi tiết
          </button>
        </div>
      </div>
    </section>
  );
}
