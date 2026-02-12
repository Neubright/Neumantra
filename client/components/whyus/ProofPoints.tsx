import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { Users, Briefcase, Trophy } from "lucide-react";

export default function ProofPoints() {
  const [ref, isInView] = useInView();

  const proofPoints = [
    {
      icon: Users,
      title: "Combined Experience",
      color: "transparent",
      borderColor: "border-white/80",
      badgeBg: "bg-white/30",
      badgeText: "text-primary",
      points: [
        "100+ years of collective experience across founding partners in financial advisory, capital markets, and stakeholder engagement",
        "Delivered impeccable valuation analysis and diagnostics for over 200 companies",
        "Supported over a dozen companies through IPO processes across mainboard and SME segments",
        "Advised 200 companies on investor relations and corporate communications",
        "Managed stakeholder engagement for companies spanning multiple sectors",
      ],
    },
    {
      icon: Briefcase,
      title: "Advisory Depth",
      color: "transparent",
      borderColor: "border-white/80",
      badgeBg: "bg-white/30",
      badgeText: "text-primary",
      points: [
        "CFO-level financial advisory and valuation expertise",
        "IR, ESG, crisis management, and reputation strategy capability",
        "Board advisory experience across listed and pre-IPO companies",
        "Recognised thought leadership in capital-markets readiness",
      ],
    },
    {
      icon: Trophy,
      title: "Market Recognition",
      color: "transparent",
      borderColor: "border-white/80",
      badgeBg: "bg-white/30",
      badgeText: "text-primary",
      points: [
        "Relevant industry recognition, speaking engagements, published thought leadership",
        "Professional affiliations: CFA, ICAI, ICSI, industry bodies",
        "Media commentary on capital markets and IR topics",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-12 md:py-18 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "radial-gradient(circle at 20% 30%, rgba(254, 226, 226, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(254, 240, 242, 0.6) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Proof Points
          </h2>
          <SectionDivider />
          <h3 className="text-lg md:text-xl font-semibold text-primary mt-6 mb-4 max-w-3xl mx-auto">
            Backed by decades of experience and proven success across India's capital markets
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {proofPoints.map((point, index) => (
            <div
              key={index}
              className={`backdrop-blur-xl bg-white/40 border-2 ${point.borderColor} rounded-xl p-8 hover:shadow-apple hover:bg-white/50 transition-all duration-300 group`}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/40 border border-white/80 mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <point.icon
                  className={`w-8 h-8 text-accent opacity-75`}
                  strokeWidth={2}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-6">
                {point.title}
              </h3>

              {/* Points List */}
              <ul className="space-y-3">
                {point.points.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-700 text-sm flex items-start gap-3"
                  >
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-full ${point.badgeBg} flex items-center justify-center mt-0.5`}
                    >
                      <span className={`text-xs font-bold ${point.badgeText}`}>
                        ✓
                      </span>
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
