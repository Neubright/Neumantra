import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { TrendingDown } from "lucide-react";

export default function MidMarketGap() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgba(219, 234, 254, 0.8) 0%, rgba(248, 223, 228, 0.6) 50%, rgba(229, 231, 235, 0.7) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            The Mid-Market IR Gap
          </h2>
          <SectionDivider />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100 space-y-6">
            <p className="text-gray-700 text-base leading-relaxed">
              India's mid-market represents some of the country's most dynamic
              growth stories - innovative business models, strong fundamentals,
              ambitious expansion plans. Yet many of these companies struggle to
              translate operational excellence into sustained market
              credibility.
            </p>
            <p className="text-gray-700 text-base font-semibold leading-relaxed text-primary">
              The gap lies in the absence of a professional investor relations
              infrastructure.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Large corporations benefit from dedicated IR teams and
              long-standing advisory relationships. Early-stage startups
              leverage venture capital networks. Mid-market companies—those
              preparing to list, already on SME exchanges, or operating as
              listed mid-sized entities—often navigate capital markets with
              limited specialised support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
