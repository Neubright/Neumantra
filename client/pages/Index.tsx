import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NeumantraIRX from "@/components/NeumantraIRX";
import WhoWeServe from "@/components/WhoWeServe";
import OurCapabilities from "@/components/OurCapabilities";
import WhyNeumantra from "@/components/WhyNeumantra";
import OurHeritage from "@/components/OurHeritage";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhoWeServe />
        <OurCapabilities />
        <WhyNeumantra />
        <OurHeritage />
        <CTA />
      </main>
      <NeumantraIRX />
      <Footer />
    </div>
  );
}
