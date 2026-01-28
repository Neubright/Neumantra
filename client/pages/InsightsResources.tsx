import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import InsightsIntro from "@/components/insights/InsightsIntro";
import FeaturedArticles from "@/components/insights/FeaturedArticles";
import Newsletter from "@/components/insights/Newsletter";
import { usePageLoadScroll } from "@/hooks/usePageLoadScroll";

export default function InsightsResources() {
  usePageLoadScroll();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <InsightsHero />
        <InsightsIntro />
        <FeaturedArticles />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
