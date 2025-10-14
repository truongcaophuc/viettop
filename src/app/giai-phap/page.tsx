import OutstandingSolutions from "@/components/service/OutstandingSolutions";
import Application from "@/components/service/Application";
import CTA from "@/components/service/CTA";
import Hero from "@/components/service/Hero";
import ServiceList from "@/components/service/ServiceList";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Main Services */}
      <ServiceList />

      {/* Outstanding Solutions */}
      <OutstandingSolutions />

      {/* Application */}
      <Application />

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Services;
