export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            Sẵn sàng bắt đầu dự án?
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn giải pháp phù hợp nhất cho công trình của bạn
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {/* Nút chính */}
            <button className="px-8 py-3 bg-accent text-white font-semibold rounded-lg shadow-lg 
                               hover:bg-accent/90 hover:scale-105 transition-all duration-300">
              Liên hệ tư vấn
            </button>

            {/* Nút phụ */}
            <button className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg 
                               hover:bg-primary/10 hover:scale-105 transition-all duration-300">
              Tải hồ sơ năng lực
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
