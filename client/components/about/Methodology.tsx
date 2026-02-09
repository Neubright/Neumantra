import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { useState } from "react";
import { Search, Lightbulb, Zap, TrendingUp, ChevronDown } from "lucide-react";

export default function Methodology() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  const phases = [
    {
      number: 1,
      title: "Diagnostic & Discovery",
      icon: Search,
      color: "from-blue-50 to-blue-100/30",
      borderColor: "border-blue-200",
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-700",
      description: "A comprehensive assessment establishing baseline readiness across six dimensions",
      items: [
        "Financial Transparency: Quality of disclosures, reporting clarity, and governance frameworks",
        "Intrinsic Value of Business: Identifying intrinsic value of business for establishing long term potential, clear positioning against markets and market players",
        "Market Positioning: Current investor perceptions, peer comparisons, coverage gaps",
        "Narrative Strength: Clarity of investment thesis, differentiation articulation, and value driver communication",
        "Engagement Infrastructure: IR processes, stakeholder mapping, and communication calendars",
        "Leadership Readiness: Management team comfort with investor dialogue, and message discipline",
      ],
      deliverable: "IR Readiness Report with prioritised recommendations",
    },
    {
      number: 2,
      title: "Strategy Design",
      icon: Lightbulb,
      color: "from-red-50 to-red-100/30",
      borderColor: "border-red-200",
      badgeBg: "bg-red-100",
      badgeText: "text-red-700",
      description: "Development of a comprehensive investor relations strategy tailored to company stage and objectives",
      items: [
        "Investment Narrative Architecture: Core equity story, sector positioning, growth thesis, and defensibility arguments",
        "Target Investor Mapping: Identification of appropriate institutional investors, analysts, and coverage targets",
        "Engagement Calendar: Structured quarterly cadence covering earnings, analyst days, investor meets, and ad-hoc opportunities",
        "Communication Framework: Message hierarchies, disclosure protocols, FAQ development, and scenario planning",
        "Success Metrics: Defined KPIs for coverage expansion, investor base quality, and perception improvement",
      ],
      deliverable: "Strategic IR Blueprint with 12-18 month roadmap",
    },
    {
      number: 3,
      title: "Execution & Engagement",
      icon: Zap,
      color: "from-blue-50 to-blue-100/30",
      borderColor: "border-blue-200",
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-700",
      description: "Hands-on implementation of investor relations programs with continuous refinement",
      items: [
        "Investor Materials: Presentations, fact books, earnings supplements, and management talking points",
        "Analyst Engagement: Initiation coverage targeting, regular updates, facility visits, and model support",
        "Earnings Support: Results preparation, management briefings, Q&A anticipation, and commentary drafting",
        "Investor Meetings: Scheduling, briefing preparation, and follow-up coordination",
        "Governance Signaling: Board composition communication, policy disclosures, and ESG reporting",
        "Market Monitoring: News flow tracking, peer activity analysis, and sentiment shifts",
      ],
      deliverable: "Comprehensive IR operations management",
    },
    {
      number: 4,
      title: "Measurement & Refinement",
      icon: TrendingUp,
      color: "from-red-50 to-red-100/30",
      borderColor: "border-red-200",
      badgeBg: "bg-red-100",
      badgeText: "text-red-700",
      description: "Continuous feedback integration and program optimization",
      items: [
        "Investor Perception Studies: Regular feedback collection from analysts and institutional investors",
        "Coverage Quality Assessment: Depth and accuracy of analyst research, recommendation trends",
        "Engagement Metrics: Meeting quality, follow-up interest, and coverage breadth",
        "Message Effectiveness: Testing narrative resonance and addressing areas of confusion",
        "Benchmark Performance: Valuation multiples, peer positioning, institutional ownership trends",
      ],
      deliverable: "Quarterly IR effectiveness reports with strategic recommendations",
    },
  ];

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
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm mb-4">
            FOUR-PHASE FRAMEWORK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            The Neumantra IR Methodology
          </h2>
          <SectionDivider />
          <p className="text-gray-700 mt-6 max-w-3xl mx-auto">
            A structured, four-phase approach designed to deliver sustained results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <div
              key={index}
              onClick={() => setExpandedPhase(expandedPhase === index ? null : index)}
              className={`backdrop-blur-xl bg-gradient-to-br ${phase.color} border-2 ${phase.borderColor} rounded-xl p-6 transition-all duration-300 cursor-pointer group hover:shadow-lg ${
                expandedPhase === index ? "ring-2 ring-offset-2 ring-accent" : ""
              }`}
            >
              {/* Phase Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4 flex-grow">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${phase.badgeBg} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <phase.icon className={`w-6 h-6 ${phase.badgeText}`} strokeWidth={2} />
                  </div>
                  <div>
                    <div className={`text-xs font-bold ${phase.badgeText} mb-1`}>
                      PHASE {phase.number}
                    </div>
                    <h3 className={`text-lg font-bold ${phase.badgeText}`}>
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                    expandedPhase === index ? "rotate-180" : ""
                  } ${phase.badgeText}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {phase.description}
              </p>

              {/* Expandable Items */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  expandedPhase === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 mb-4 pt-4 border-t border-gray-300/30">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-gray-700 text-xs flex items-start gap-2 animate-fadeIn">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                        <span className="text-xs text-accent font-bold">✓</span>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Deliverable */}
                <div className="pt-4 border-t border-gray-300/30">
                  <p className={`text-xs font-bold ${phase.badgeText} mb-1`}>
                    DELIVERABLE
                  </p>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {phase.deliverable}
                  </p>
                </div>
              </div>

              {/* Collapsed View Info */}
              {expandedPhase !== index && (
                <div className="text-xs text-gray-500 font-medium">
                  {phase.items.length} key components
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-fadeIn:nth-child(2) {
          animation-delay: 0.05s;
        }

        .animate-fadeIn:nth-child(3) {
          animation-delay: 0.1s;
        }

        .animate-fadeIn:nth-child(4) {
          animation-delay: 0.15s;
        }

        .animate-fadeIn:nth-child(5) {
          animation-delay: 0.2s;
        }

        .animate-fadeIn:nth-child(6) {
          animation-delay: 0.25s;
        }
      `}</style>
    </section>
  );
}
