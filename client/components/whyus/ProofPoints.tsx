import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { Users, Briefcase, Trophy } from "lucide-react";

export default function ProofPoints() {
  const [ref, isInView] = useInView();

  const proofPoints = [
    {
      icon: Users,
      title: "Combined Experience",
      color: "from-blue-50 to-blue-100/30",
      borderColor: "border-blue-200",
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-700",
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
      color: "from-red-50 to-red-100/30",
      borderColor: "border-red-200",
      badgeBg: "bg-red-100",
      badgeText: "text-red-700",
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
      color: "from-blue-50 to-blue-100/30",
      borderColor: "border-blue-200",
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-700",
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
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgba(165, 35, 35, 0.06) 0%, rgba(15, 37, 71, 0.08) 50%, rgba(165, 35, 35, 0.06) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm mb-4">
            TRACK RECORD
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Proof Points
          </h2>
          <SectionDivider />
          <p className="text-gray-700 mt-6 max-w-3xl mx-auto">
            Backed by decades of experience and proven success across India's capital markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {proofPoints.map((point, index) => (
            <div
              key={index}
              className={`backdrop-blur-xl bg-gradient-to-br ${point.color} border-2 ${point.borderColor} rounded-xl p-8 hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg ${point.badgeBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <point.icon className={`w-7 h-7 ${point.badgeText}`} strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold ${point.badgeText} mb-6`}>
                {point.title}
              </h3>

              {/* Points List */}
              <ul className="space-y-3">
                {point.points.map((item, i) => (
                  <li key={i} className="text-gray-700 text-sm flex items-start gap-3">
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full ${point.badgeBg} flex items-center justify-center mt-0.5`}>
                      <span className={`text-xs font-bold ${point.badgeText}`}>✓</span>
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
