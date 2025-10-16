import OutstandingSolutions from "@/components/service/OutstandingSolutions";
import Application from "@/components/service/Application";
import CTA from "@/components/service/CTA";
import Hero from "@/components/service/Hero";
import ServiceList from "@/components/service/ServiceList";
import CustomerProblemsSolutions from "@/components/service/CustomerProblemsSolutions";
import BenefitDCV from "@/components/service/BenefitsDCV";
import Process from "@/components/service/Process";
import ContactDock from "@/components/layout/ContactDock";
import Problem from "@/components/service/Problem";
import ProcessNew from "@/components/service/ProcessNew";
import Benefit from "@/components/service/Benefit";
import ProblemV2 from "@/components/service/ProblemV2";
const Services = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemV2/>
      <ServiceList />
      {/* <OutstandingSolutions /> */}
      {/* <Application /> */}
      <ProcessNew />
      <Benefit />
      <CTA />
      <ContactDock />
    </div>
  );
};

export default Services;
