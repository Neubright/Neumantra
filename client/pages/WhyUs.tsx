import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhyUsHero from "@/components/whyus/WhyUsHero";
import WhyUsIntro from "@/components/whyus/WhyUsIntro";
import Differentiators from "@/components/whyus/Differentiators";
import ProofPoints from "@/components/whyus/ProofPoints";
import EngagementPhilosophy from "@/components/whyus/EngagementPhilosophy";
import IdealClientProfile from "@/components/whyus/IdealClientProfile";
import WhyUsCTA from "@/components/whyus/WhyUsCTA";
import { usePageLoadScroll } from "@/hooks/usePageLoadScroll";

export default function WhyUs() {
  usePageLoadScroll();
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-primary/85 pointer-events-none z-0"></div>
      <div className="relative z-10">
        <Header />
        <main className="flex-grow">
          <WhyUsHero />
          <WhyUsIntro />
          <Differentiators />
          <ProofPoints />
          <EngagementPhilosophy />
          <IdealClientProfile />
          <WhyUsCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
