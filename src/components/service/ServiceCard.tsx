import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group cursor-pointer border border-gray-200 rounded-xl bg-white transition-shadow duration-300 hover:shadow-lg">
      <CardContent className="p-6 space-y-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-1 text-sm text-gray-500">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
