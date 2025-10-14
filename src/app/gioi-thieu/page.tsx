import { Users, Award, Target, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import teamImage from "@/assets/team-engineers.jpg";

const About = () => {
  const values = [
    { icon: Target, title: "Chất lượng", description: "Cam kết cung cấp giải pháp chất lượng cao, đáp ứng tiêu chuẩn quốc tế" },
    { icon: Zap, title: "Hiệu quả", description: "Tối ưu hóa chi phí và năng lượng, mang lại giá trị lâu dài" },
    { icon: Users, title: "Tận tâm", description: "Đội ngũ chuyên nghiệp, luôn đồng hành cùng khách hàng" },
    { icon: Award, title: "Uy tín", description: "Xây dựng niềm tin qua từng dự án thành công" },
  ];

  const expertise = [
    "Hơn 10 năm kinh nghiệm trong lĩnh vực hạ tầng kỹ thuật",
    "Đội ngũ kỹ sư được đào tạo bài bản",
    "Chứng chỉ từ các đối tác công nghệ hàng đầu",
    "Hơn 100 dự án Data Center thành công",
    "Dịch vụ bảo trì 24/7 toàn quốc",
    "Đối tác chính thức của Airedale by Modine",
  ];

  const certifications = [
    "ISO 9001:2015",
    "Airedale Certified Partner",
    "Schneider Electric Certified",
    "LEED Accredited Professional",
  ];

  const team = [
    { name: "Kỹ sư HVAC", count: "15+", description: "Chuyên gia thiết kế & vận hành hệ thống làm lạnh" },
    { name: "Kỹ sư Điện", count: "12+", description: "Chuyên môn về UPS, phân phối điện và tiếp địa" },
    { name: "Kỹ sư BMS", count: "8+", description: "Lập trình và tích hợp hệ thống BMS/DCIM" },
    { name: "Kỹ sư PCCC", count: "6+", description: "Thiết kế hệ thống phòng cháy chữa cháy" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#035474] text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl space-y-6">
          <h1 className="text-5xl font-bold">Về DCV</h1>
          <p className="text-xl text-white/90">
            Đối tác tin cậy cho giải pháp hạ tầng kỹ thuật công trình
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="p-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-[#035474]/10 text-[#035474] text-sm font-medium">
              Sứ mệnh
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Mang công nghệ tiên tiến đến mọi công trình
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              DCV được thành lập với sứ mệnh cung cấp giải pháp tổng thể cho hạ tầng kỹ thuật công trình, 
              từ Data Center, nhà máy công nghiệp đến cao ốc văn phòng. Chúng tôi kết hợp công nghệ 
              tiên tiến từ các đối tác toàn cầu với chuyên môn địa phương để mang đến giải pháp 
              tối ưu nhất cho từng dự án.
            </p>
            <div className="space-y-3">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#035474] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src={teamImage.src}
              alt="DCV Engineering Team"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="p-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h2>
            <p className="text-gray-600 text-lg">
              Những giá trị định hướng mọi hoạt động của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#035474]/10 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-[#035474]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="p-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Đội ngũ kỹ sư</h2>
            <p className="text-gray-600 text-lg">
              Chuyên gia giàu kinh nghiệm trong từng lĩnh vực kỹ thuật
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 text-center space-y-3 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl font-bold text-[#035474]">{member.count}</div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="p-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Chứng nhận & Giấy phép</h2>
            <p className="text-gray-600 text-lg">
              Đạt tiêu chuẩn quốc tế và chứng nhận từ các đối tác công nghệ
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center border border-gray-200"
              >
                <span className="text-sm font-semibold text-gray-800 text-center">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="p-20 bg-[#035474] text-white">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10+", label: "Năm kinh nghiệm" },
            { number: "100+", label: "Dự án hoàn thành" },
            { number: "50+", label: "Khách hàng tin tưởng" },
            { number: "24/7", label: "Hỗ trợ kỹ thuật" },
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl font-bold text-yellow-300">{stat.number}</div>
              <div className="text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-gray-50 rounded-lg p-12 shadow-sm">
            <h2 className="text-4xl font-bold text-gray-900">Hợp tác cùng DCV</h2>
            <p className="text-gray-600 text-lg">
              Chúng tôi luôn tìm kiếm những kỹ sư tài năng và đối tác uy tín để cùng phát triển
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#035474] text-white hover:bg-[#02445d]"
              >
                Liên hệ hợp tác
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#035474] text-[#035474] hover:bg-[#035474]/10"
              >
                Tuyển dụng
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
