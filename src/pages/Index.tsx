import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CallToAction from "@/components/sections/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <CallToAction />
    </Layout>
  );
};

export default Index;
