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
    <div className="flex flex-col min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-primary/85 pointer-events-none z-0"></div>
      <div className="relative z-10">
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
    </div>
  );
}
