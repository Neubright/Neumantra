import { useInView } from "@/hooks/useInView";

export default function Differentiators() {
  const [ref, isInView] = useInView();

  const differentiators = [
    {
      number: 1,
      title: "Dual-Domain Expertise: Finance Meets Communication",
      problem: "Traditional IR advisory often suffers from domain limitations. Communications agencies understand messaging but lack financial depth to engage analytically with investors. Accounting and financial advisory firms have technical expertise but struggle with stakeholder engagement sophistication. Companies end up managing multiple vendors with fragmented accountability.",
      solution: [
        "We are purpose-built as the integration of financial strategy (Mantraa Advisory) and stakeholder engagement (Neubright Partners). Our team includes:",
        "Professionals who have led CFO-level financial analysis, valuation work, and capital markets transactions",
        "Communication strategists who have managed complex stakeholder environments for listed companies",
        "Combined fluency in financial analysis, capital markets dynamics, and institutional investor communication",
        "When we develop your investment narrative, it's financially substantiated AND compellingly communicated. When we engage with analysts, we speak their analytical language while ensuring consistent messaging.",
      ],
    },
    {
      number: 2,
      title: "Mid-Market Specialisation: Built for Your Journey",
      problem: "Large corporations access Big Four advisory and dedicated IR teams. Early-stage startups leverage venture capital networks. But mid-market companies - those preparing to list, transitioning from SME, or operating as ₹1,000-10,000 crore listed entities - often lack appropriate IR support. They are too large for basic compliance, too small for Big Four attention, and underserved by traditional agencies.",
      solution: [
        "Our entire practice is calibrated to the mid-market:",
        "Understanding Your Constraints: We know you don't have dedicated IR teams, unlimited budgets, or brand recognition. Our engagement models are designed for efficiency.",
        "Appropriate Expectations: We don't apply large-cap IR standards inappropriately. Our recommendations match your company stage, resources, and market reality.",
        "Investor Targeting: We know which institutional investors and analysts focus on mid-market opportunities and how to position companies for their consideration.",
        "Governance Realism: We help strengthen governance without imposing unrealistic corporate bureaucracy that slows decision-making.",
        "Mid-market isn't a compromise for us, it's our deliberate focus and expertise.",
      ],
    },
    {
      number: 3,
      title: "Founder-Led Advisory: Senior Attention Throughout",
      problem: "Many advisory firms promise senior expertise but delegate to junior teams after the sales pitch. Companies receive standardized playbooks executed by analysts with limited market experience. Leadership teams lack confidence in guidance and waste time managing the advisory relationship.",
      solution: [
        "Direct Founding Partner Involvement: Every client engagement is managed by Neumantra's founding partners with decades of combined experience",
        "No Template Solutions: Your IR strategy is custom-developed based on deep company understanding, not recycled frameworks",
        "Board-Level Communication: We engage directly with boards, promoters, and senior leadership - our counsel is designed for strategic decision-makers",
        "Institutional Credibility: When we engage with institutional investors and analysts on your behalf, our professional credentials support your company's credibility",
        "You will never wonder if the person advising you actually understands capital markets or has managed complex IR programs.",
      ],
    },
    {
      number: 4,
      title: "End-to-End Capability: Single-Partner Accountability",
      problem: "Effective IR requires coordination across financial analysis, governance frameworks, disclosure preparation, investor communication, analyst relations, and leadership training. Managing separate vendors for each function creates coordination overhead, message inconsistency, and accountability gaps.",
      solution: [
        "We provide comprehensive IR capability under single-partner accountability:",
        "Readiness Diagnostics: Financial, governance, and disclosure assessments identifying gaps",
        "Strategy Development: Investment narrative, target investor mapping, engagement calendars",
        "Materials Creation: Investor presentations, earnings materials, fact books, ESG reports",
        "Stakeholder Engagement: Analyst targeting, investor outreach, meeting coordination",
        "Ongoing Operations: Quarterly earnings support, market monitoring, perception tracking",
        "Advisory Counsel: Strategic guidance on M&A communication, capital allocation, governance evolution",
        "One relationship. One consistent message. One accountability point.",
      ],
    },
    {
      number: 5,
      title: "Outcomes Orientation: Impact Over Activity",
      problem: "Many IR advisors measure success by activity: presentations delivered, meetings scheduled, materials produced. But activity doesn't automatically translate to market impact. Companies need advisors focused on tangible outcomes that matter to business success.",
      solution: [
        "Our engagements are structured around measurable outcomes:",
        "Coverage Expansion: Number and quality of equity research analysts covering your company",
        "Investor Base Quality: Institutional ownership percentage, long-term investor proportion, geographic diversification",
        "Valuation Perception: Comparative P/E multiples, EV/EBITDA positioning versus peers, DCF assumptions in analyst models",
        "Message Penetration: Consistency of investment thesis in analyst reports, investor feedback reflecting strategic priorities",
        "Engagement Quality: Meeting requests from target institutional investors, follow-up dialogue depth",
        "We establish clear success metrics upfront and track progress systematically. Our quarterly reporting focuses on outcomes achieved, not just activities completed.",
      ],
    },
    {
      number: 6,
      title: "Market Credibility: Track Record in Capital Markets",
      problem: "IR requires more than communication skills - it demands deep understanding of how capital markets function, what institutional investors value, how analysts evaluate companies, and what drives valuation. Advisors without authentic capital markets experience provide superficial guidance.",
      solution: [
        "Our founding teams bring genuine capital markets credentials:",
        "Transaction Experience: Supporting multiple companies through IPOs, fundraises, M&A communications",
        "Investor Network: Established relationships with institutional investors and equity research analysts",
        "Financial Expertise: Advanced understanding of valuation methodologies, financial modeling, and analytical frameworks",
        "Governance Knowledge: Deep familiarity with regulatory requirements, disclosure standards, and best practices",
        "Cross-Sector Insight: Experience spanning manufacturing, technology, healthcare, financial services, and consumer sectors",
        "When we advise on analyst engagement strategy or valuation narrative, it's informed by years of capital markets immersion, not marketing theory.",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-gray-50 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">
          What Makes Neumantra Different
        </h2>

        <div className="space-y-16">
          {differentiators.map((diff) => (
            <div key={diff.number} className="max-w-5xl mx-auto border-l-4 border-accent pl-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold">
                    {diff.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  {diff.title}
                </h3>
              </div>

              <div className="ml-14 space-y-4">
                <div>
                  <h4 className="font-bold text-primary mb-2">The Problem We Solve:</h4>
                  <p className="text-gray-700 leading-relaxed">{diff.problem}</p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2">The Neumantra Difference:</h4>
                  <ul className="space-y-2">
                    {diff.solution.map((point, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        {point.includes(":") ? (
                          <span className="font-semibold">{point}</span>
                        ) : (
                          <>
                            <span className="text-accent mr-3 flex-shrink-0">���</span>
                            <span>{point}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
