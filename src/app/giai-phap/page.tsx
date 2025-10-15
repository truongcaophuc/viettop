import OutstandingSolutions from "@/components/service/OutstandingSolutions";
import Application from "@/components/service/Application";
import CTA from "@/components/service/CTA";
import Hero from "@/components/service/Hero";
import ServiceList from "@/components/service/ServiceList";
import CustomerProblemsSolutions from "@/components/service/CustomerProblemsSolutions";
import BenefitDCV from "@/components/service/BenefitsDCV";
import Process from "@/components/service/Process";
import ContactDock from "@/components/layout/ContactDock";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CustomerProblemsSolutions />
      <ServiceList />
      {/* <OutstandingSolutions /> */}
      {/* <Application /> */}
      <Process />
      <BenefitDCV />
      <CTA />
      <ContactDock />
    </div>
  );
};

export default Services;
