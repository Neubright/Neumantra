import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesIntro from "@/components/services/ServicesIntro";
import ServiceCategory1 from "@/components/services/ServiceCategory1";
import ServiceCategory2 from "@/components/services/ServiceCategory2";
import ServiceCategory3 from "@/components/services/ServiceCategory3";
import ServiceScenarios from "@/components/services/ServiceScenarios";
import ServicesCTA from "@/components/services/ServicesCTA";
import { usePageLoadScroll } from "@/hooks/usePageLoadScroll";

export default function Services() {
  usePageLoadScroll();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ServicesHero />
        <ServicesIntro />
        <ServiceCategory1 />
        <ServiceCategory2 />
        <ServiceCategory3 />
        <ServiceScenarios />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}
