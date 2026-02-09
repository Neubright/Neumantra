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
    <div
      className="flex flex-col min-h-screen"
      style={{
        background:
          "radial-gradient(circle at 20% 30%, rgba(254, 226, 226, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(254, 240, 242, 0.6) 100%)",
      }}
    >
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
  );
}
