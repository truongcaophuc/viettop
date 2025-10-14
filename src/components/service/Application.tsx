export default function Application() {
  const solutions = [
    {
      title: "Data Center",
      description:
        "Giải pháp toàn diện cho trung tâm dữ liệu, từ HVAC, UPS đến BMS và DCIM",
      applications: ["Tier III/IV Data Center", "IDC", "Server Room"],
    },
    {
      title: "Nhà máy công nghiệp",
      description:
        "Hệ thống kỹ thuật công nghiệp, HVAC và BMS cho môi trường sản xuất",
      applications: ["Nhà máy điện tử", "Dược phẩm", "Thực phẩm"],
    },
    {
      title: "Cao ốc văn phòng",
      description:
        "Giải pháp tòa nhà thông minh, tiết kiệm năng lượng và thoải mái",
      applications: ["Smart Building", "LEED Certified", "Green Building"],
    },
  ];
  return (
    <section className="py-20 px-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Tiêu đề */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ứng dụng đa dạng
          </h2>
          <p className="text-lg text-gray-600">
            Giải pháp phù hợp cho nhiều loại công trình khác nhau
          </p>
        </div>

        {/* Danh sách ứng dụng */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {solution.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>

              <div className="space-y-2">
                {solution.applications.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                    <span className="text-gray-800">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
