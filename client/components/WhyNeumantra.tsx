import { Users, Target, User2, Wrench, Layers, BarChart3 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import SectionDivider from "./ui/SectionDivider";

export default function WhyNeumantra() {
  const [ref, isInView] = useInView();
  const reasons = [
    {
      icon: Users,
      title: "Dual-Domain Mastery",
      description:
        "Unique combination of CFO-level financial expertise and corporate communications excellence - we speak both languages fluently.",
    },
    {
      icon: Target,
      title: "Mid-Market Specialisation",
      description:
        "Purpose-built for companies in the ₹500-10,000 crore opportunity zone where institutional IR is essential but often inaccessible.",
    },
    {
      icon: User2,
      title: "Founder-Led Advisory",
      description:
        "Direct access to seasoned practitioners with decades of combined experience in financial strategy, capital markets, and stakeholder engagement.",
    },
    {
      icon: Wrench,
      title: "Integrated Methodology",
      description:
        "Single-partner accountability across financial narrative, governance signaling, and investor communication - no fragmented vendor management.",
    },
    {
      icon: Layers,
      title: "Stage-Appropriate Solutions",
      description:
        "Flexible engagement models calibrated to company lifecycle - from readiness diagnostics to full-scale IR operations.",
    },
    {
      icon: BarChart3,
      title: "Measurable Impact Focus",
      description:
        "Structured around tangible outcomes: analyst coverage expansion, investor base diversification, valuation perception improvement, and market credibility enhancement.",
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at 70% 50%, rgba(219, 234, 254, 0.7) 0%, rgba(254, 226, 226, 0.6) 40%, rgba(248, 223, 228, 0.6) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Neumantra
          </h2>
          <SectionDivider />
          <p className="text-gray-600 text-lg">
            Differentiation that drives tangible value for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/35 border-2 border-white/80 rounded-lg p-6 text-left hover:shadow-2xl hover:bg-white/50 hover:border-white/100 transition-all duration-300"
              >
                <Icon
                  className="w-12 h-12 text-accent mb-4 opacity-75"
                  strokeWidth={1.5}
                />
                <h3 className="text-base font-bold text-primary mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
