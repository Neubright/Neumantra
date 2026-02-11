import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import FeaturedArticles from "@/components/insights/FeaturedArticles";
import Newsletter from "@/components/insights/Newsletter";
import { usePageLoadScroll } from "@/hooks/usePageLoadScroll";

export default function InsightsResources() {
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
        <InsightsHero />
        <FeaturedArticles />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
