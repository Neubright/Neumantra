import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function Methodology() {
  const methods = [
    {
      title: "Phase 1: Diagnostic & Discovery",
      description: `A comprehensive assessment establishing baseline readiness across six dimensions:

• Financial Transparency: Quality of disclosures, reporting clarity, and governance frameworks
• Intrinsic Value of Business: Identifying intrinsic value of business for establishing long term potential, clear positioning against markets and market players
• Market Positioning: Current investor perceptions, peer comparisons, coverage gaps
• Narrative Strength: Clarity of investment thesis, differentiation articulation, and value driver communication
• Engagement Infrastructure: IR processes, stakeholder mapping, and communication calendars
• Leadership Readiness: Management team comfort with investor dialogue, and message discipline`,
      deliverable:
        "IR Readiness Report with prioritised recommendations",
      icon: (
        <svg
          className="w-8 h-8 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      title: "Phase 2: Strategy Design",
      description: `Development of a comprehensive investor relations strategy tailored to company stage and objectives:

• Investment Narrative Architecture: Core equity story, sector positioning, growth thesis, and defensibility arguments
• Target Investor Mapping: Identification of appropriate institutional investors, analysts, and coverage targets
• Engagement Calendar: Structured quarterly cadence covering earnings, analyst days, investor meets, and ad-hoc opportunities
• Communication Framework: Message hierarchies, disclosure protocols, FAQ development, and scenario planning
• Success Metrics: Defined KPIs for coverage expansion, investor base quality, and perception improvement`,
      deliverable:
        "Strategic IR Blueprint with 12-18 month roadmap",
      icon: (
        <svg
          className="w-8 h-8 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Phase 3: Execution & Engagement",
      description: `Hands-on implementation of investor relations programs with continuous refinement:

• Investor Materials: Presentations, fact books, earnings supplements, and management talking points
• Analyst Engagement: Initiation coverage targeting, regular updates, facility visits, and model support
• Earnings Support: Results preparation, management briefings, Q&A anticipation, and commentary drafting
• Investor Meetings: Scheduling, briefing preparation, and follow-up coordination
• Governance Signaling: Board composition communication, policy disclosures, and ESG reporting
• Market Monitoring: News flow tracking, peer activity analysis, and sentiment shifts`,
      deliverable:
        "Comprehensive IR operations management",
      icon: (
        <svg
          className="w-8 h-8 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Phase 4: Measurement & Refinement",
      description: `Continuous feedback integration and program optimization:

• Investor Perception Studies: Regular feedback collection from analysts and institutional investors
• Coverage Quality Assessment: Depth and accuracy of analyst research, recommendation trends
• Engagement Metrics: Meeting quality, follow-up interest, and coverage breadth
• Message Effectiveness: Testing narrative resonance and addressing areas of confusion
• Benchmark Performance: Valuation multiples, peer positioning, institutional ownership trends`,
      deliverable:
        "Quarterly IR effectiveness reports with strategic recommendations",
      icon: (
        <svg
          className="w-8 h-8 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Approach: The Neumantra IR Methodology
          </h2>
          <SectionDivider />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {methods.map((method, index) => {
            const lines = method.description.split('\n').filter(line => line.trim());
            const intro = lines[0];
            const bullets = lines.slice(1).filter(line => line.startsWith('•'));

            return (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100"
              >
                <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  {intro}
                </p>
                <ul className="space-y-2 mb-4">
                  {bullets.map((bullet, idx) => {
                    const text = bullet.replace('• ', '').trim();
                    return (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-3 flex-shrink-0">•</span>
                        <span className="text-gray-700 text-base">
                          {text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div
                  className="pt-4 mb-2"
                  style={{
                    borderTop: "1px solid transparent",
                    borderImage:
                      "linear-gradient(to right, hsl(var(--accent)) 0%, transparent 100%)",
                    borderImageSlice: 1,
                  }}
                >
                  <p className="text-xs font-semibold text-primary mb-2">
                    DELIVERABLE
                  </p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {method.deliverable}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
