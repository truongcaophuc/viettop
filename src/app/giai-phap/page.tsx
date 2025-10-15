import OutstandingSolutions from "@/components/service/OutstandingSolutions";
import Application from "@/components/service/Application";
import CTA from "@/components/service/CTA";
import Hero from "@/components/service/Hero";
import ServiceList from "@/components/service/ServiceList";
import CustomerProblemsSolutions from "@/components/service/CustomerProblemsSolutions"
import BenefitDCV from "@/components/service/BenefitsDCV"
const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
       <CustomerProblemsSolutions/>
      {/* Main Services */}
      <ServiceList />

      {/* Outstanding Solutions */}
      <OutstandingSolutions />

      {/* Application */}
      <Application />
      <BenefitDCV/>
      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Services;
