import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  url?: string;
}

const ServiceCard = ({ title, description, url }: ServiceCardProps) => {
  return (
    <Card
      className="
        relative h-64 group cursor-pointer rounded-2xl border border-gray-200 
        overflow-hidden transition-all duration-500 
        hover:shadow-2xl hover:-translate-y-1
      "
    >
      {/* Ảnh nền + hiệu ứng zoom */}
      <div
        className="
          absolute inset-0 bg-[url('/image.png')] bg-no-repeat bg-center bg-cover
          scale-100 group-hover:scale-110 transition-transform duration-700
        "
        style={{ backgroundImage: `url('${url}')` }}
      />

      {/* Overlay đen mờ */}
      <div
        className="
          absolute inset-0 bg-black/40 group-hover:bg-black/60 
          transition-colors duration-500
        "
      />

      {/* Nội dung */}
      <CardContent
        className="
          relative z-10 p-6 flex flex-col justify-end h-full
        "
      >
        <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-sm text-gray-100 leading-relaxed line-clamp-3">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
