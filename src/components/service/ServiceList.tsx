"use client";

import { motion } from "framer-motion";
import { Wind, Zap, MonitorCog, Flame, Camera, Network } from "lucide-react";
import ServiceCard from "@/components/service/ServiceCard";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

type ServiceKey =
  | "card1"
  | "card2"
  | "card3"
  | "card4"
  | "card5"
  | "card6";

const ICONS: Record<ServiceKey, any> = {
  card1: Wind,
  card2: Zap,
  card3: MonitorCog,
  card4: Flame,
  card5: Camera,
  card6: Network,
};

const IMAGES: Record<ServiceKey, string> = {
  card1: "/service/hvac.jpg",
  card2: "/service/ups.jpg",
  card3: "/service/bms.jpg",
  card4: "/service/fire_alarm.jpg",
  card5: "/service/access_control.jpg",
  card6: "/service/lightning.jpg",
};

export default function ServiceList() {
  const { t } = useTranslation();

  // Helper: lấy mảng 5 feature từ i18n (feature1..feature5), bỏ qua key trống
  const getFeatures = (baseKey: string) => {
    const arr: string[] = [];
    for (let i = 1; i <= 5; i++) {
      const val = t(`${baseKey}.feature${i}`);
      if (val && typeof val === "string" && val.trim().length > 0) {
        arr.push(val);
      }
    }
    return arr;
  };

  const serviceKeys: ServiceKey[] = [
    "card1",
    "card2",
    "card3",
    "card4",
    "card5",
    "card6",
  ];

  const services = serviceKeys.map((key) => ({
    icon: ICONS[key],
    title: t(`servicesPage.serviceList.${key}.title`),
    description: t(`servicesPage.serviceList.${key}.description`),
    features: getFeatures(`servicesPage.serviceList.${key}`),
    url: IMAGES[key],
  }));

  return (
    <section className="py-12 md:py-20 px-4 md:px-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            {t("servicesPage.serviceList.title")}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            {t("servicesPage.serviceList.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants as any}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
