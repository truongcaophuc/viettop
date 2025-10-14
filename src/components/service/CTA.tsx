export default function CTA() {
  return (
  <section className="py-20 bg-white">
  <div className="container mx-auto px-6 text-center">
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-4xl font-bold text-gray-900">
        Sẵn sàng bắt đầu dự án?
      </h2>

      <p className="text-lg text-gray-600">
        Liên hệ với chúng tôi để được tư vấn giải pháp phù hợp nhất cho công trình của bạn
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
          Liên hệ tư vấn
        </button>

        <button className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300">
          Tải hồ sơ năng lực
        </button>
      </div>
    </div>
  </div>
</section>
  );
}
