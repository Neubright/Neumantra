import { useInView } from "@/hooks/useInView";

export default function Methodology() {
  const methods = [
    {
      title: "Phase 1: Diagnostic & Discovery",
      description:
        "A comprehensive assessment establishing baseline readiness across six dimensions: Financial Transparency (quality of disclosures, reporting clarity, governance frameworks), Intrinsic Value of Business (identifying long-term potential, market positioning), Market Positioning (investor perceptions, peer comparisons, coverage gaps), Narrative Strength (investment thesis clarity, differentiation, value drivers), Engagement Infrastructure (IR processes, stakeholder mapping, communication calendars), and Leadership Readiness (management comfort with investor dialogue, message discipline). Deliverable: IR Readiness Report with prioritised recommendations.",
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
      description:
        "Development of a comprehensive investor relations strategy tailored to company stage and objectives: Investment Narrative Architecture (core equity story, sector positioning, growth thesis, defensibility arguments), Target Investor Mapping (institutional investors, analysts, coverage targets), Engagement Calendar (structured quarterly cadence covering earnings, analyst days, investor meets), Communication Framework (message hierarchies, disclosure protocols, FAQ development, scenario planning), and Success Metrics (defined KPIs for coverage expansion, investor base quality, perception improvement). Deliverable: Strategic IR Blueprint with 12-18 month roadmap.",
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
      description:
        "Hands-on implementation of investor relations programs with continuous refinement: Investor Materials (presentations, fact books, earnings supplements, talking points), Analyst Engagement (coverage targeting, regular updates, facility visits, model support), Earnings Support (results preparation, management briefings, Q&A anticipation), Investor Meetings (scheduling, briefing preparation, follow-up coordination), Governance Signaling (board composition communication, policy disclosures, ESG reporting), and Market Monitoring (news flow tracking, peer activity analysis, sentiment shifts). Deliverable: Comprehensive IR operations management.",
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
      description:
        "Continuous feedback integration and program optimization: Investor Perception Studies (regular feedback from analysts and institutional investors), Coverage Quality Assessment (depth and accuracy of analyst research, recommendation trends), Engagement Metrics (meeting quality, follow-up interest, coverage breadth), Message Effectiveness (testing narrative resonance, addressing confusion areas), and Benchmark Performance (valuation multiples, peer positioning, institutional ownership trends). Deliverable: Quarterly IR effectiveness reports with strategic recommendations.",
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
      className={`py-16 md:py-24 bg-white transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Approach: The Neumantra IR Methodology
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <div className="mb-4">{method.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-3">
                {method.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
