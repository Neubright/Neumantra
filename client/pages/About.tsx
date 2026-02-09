import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OurStory from "@/components/about/OurStory";
import MidMarketGap from "@/components/about/MidMarketGap";
import NeumanatraApproach from "@/components/about/NeumanatraApproach";
import MissionVision from "@/components/about/MissionVision";
import HeritagePartners from "@/components/about/HeritagePartners";
import Methodology from "@/components/about/Methodology";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import { usePageLoadScroll } from "@/hooks/usePageLoadScroll";

export default function About() {
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
        <OurStory />
        <MidMarketGap />
        <NeumanatraApproach />
        <MissionVision />
        <HeritagePartners />
        <Methodology />
        <LeadershipTeam />
      </main>
      <Footer />
    </div>
  );
}
