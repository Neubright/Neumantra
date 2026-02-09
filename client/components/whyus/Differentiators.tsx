import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { useState } from "react";

export default function Differentiators() {
  const [ref, isInView] = useInView();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const differentiators = [
    {
      number: 1,
      title: "Dual-Domain Expertise: Finance Meets Communication",
      icon: "🧩",
      problem:
        "Traditional IR advisory often suffers from domain limitations. Communications agencies understand messaging but lack financial depth to engage analytically with investors. Financial and accounting advisors possess technical expertise but often struggle with stakeholder engagement sophistication. Companies are left managing multiple vendors with fragmented accountability",
      solution: [
        "We are purpose-built as the integration of financial strategy (Mantraa Advisory) and stakeholder engagement (Neubright Partners). Our team brings:",
        "CFO-level experience in financial analysis, valuation, and capital-markets transactions",
        "Communication strategists who have managed complex stakeholder environments for listed companies",
        "Combined fluency in financial analysis, capital markets dynamics, and institutional investor communication",
        "When we develop your investment narrative, it's financially substantiated AND compellingly communicated. When we engage analysts, we speak their analytical language while maintaining message consistency.",
      ],
    },
    {
      number: 2,
      title: "Mid-Market Specialisation: Built for Your Journey",
      icon: "🎯",
      problem:
        "Large corporations benefit from big-firm advisory access and dedicated IR teams. Early-stage startups leverage venture capital networks. Mid-market companies—those preparing to list, transitioning from SME platforms, or operating as ₹1,000–10,000 crore listed entities—are often underserved. They are too complex for basic compliance support and too small for sustained attention from large firms.",
      solution: [
        "Our entire practice is calibrated to the mid-market growth companies:",
        "Understanding Constraints: Engagement models designed for efficiency, not excess",
        "Stage-Appropriate Expectations: No inappropriate large-cap playbooks",
        "Focused Investor Targeting: Knowledge of analysts and institutions active in mid-market opportunities",
        "Governance Realism: Strengthening governance without creating unnecessary bureaucracy",
        "Mid-market isn't a compromise for us, it's our deliberate focus and expertise.",
      ],
    },
    {
      number: 3,
      title: "Founder-Led Advisory: Senior Attention Throughout",
      icon: "👥",
      problem:
        "Many advisory firms promise senior expertise but delegate execution to junior teams after the sales pitch. Companies receive standardized playbooks executed by analysts with limited capital-markets experience, forcing leadership teams to manage the advisory relationship closely.",
      solution: [
        "Direct founding-partner involvement in every engagement",
        "Custom IR strategies developed from deep company immersion",
        "Board- and promoter-level advisory, not operational delegation",
        "Institutional credibility that strengthens client standing with investors and analysts",
        "You will always know who is advising you—and that they have navigated complex capital-markets environments before.",
      ],
    },
    {
      number: 4,
      title: "End-to-End Capability: Single-Partner Accountability",
      icon: "🔗",
      problem:
        "Effective investor relations requires coordination across finance, governance, disclosure, analyst engagement, and leadership communication. Managing multiple vendors leads to inefficiency, message inconsistency, and accountability gaps",
      solution: [
        "We deliver comprehensive IR capability under single-partner accountability:",
        "Readiness Diagnostics: Financial, governance, and disclosure assessments identifying gaps",
        "Strategy Development: Investment narrative, target investor mapping, engagement calendars",
        "Materials Creation: Investor presentations, earnings materials, fact books, ESG reports",
        "Stakeholder Engagement: Analyst targeting, investor outreach, meeting coordination",
        "Ongoing Operations: Quarterly earnings support, market monitoring, perception tracking",
        "Advisory Counsel: Strategic guidance on M&A communication, capital allocation, governance evolution",
        "One relationship. One message. One accountability point.",
      ],
    },
    {
      number: 5,
      title: "Outcomes Orientation: Impact Over Activity",
      icon: "📊",
      problem:
        "Many IR advisors measure success by activity, such as meetings scheduled, decks created, and presentations delivered. Activity does not guarantee market impact.",
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
      icon: "🏆",
      problem:
        "Investor relations requires more than communication skill, it demands deep understanding of capital-markets behaviour, investor decision-making, and valuation drivers.",
      solution: [
        "Our founding teams bring authentic capital markets credentials:",
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
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgba(248, 223, 228, 0.8) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(254, 240, 242, 0.6) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Makes Neumantra Different
          </h2>
          <SectionDivider />
        </div>

        <div className="space-y-8 max-w-7xl mx-auto">
          {differentiators.map((diff) => (
            <div
              key={diff.number}
              className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold text-sm">
                    {diff.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary pt-0.5">
                  {diff.title}
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-primary mb-3 text-base">
                    The Problem We Solve
                  </h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {diff.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-3 text-base">
                    The Neumantra Difference:
                  </h4>
                  <ul className="space-y-2">
                    {diff.solution.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 text-base flex items-start"
                      >
                        {point.includes(":") ? (
                          <span className="font-semibold">{point}</span>
                        ) : (
                          <>
                            <span className="text-accent mr-3 flex-shrink-0 font-bold">
                              −
                            </span>
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
