import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { useState } from "react";
import { Puzzle, Target, Users, Link2, BookOpen, Trophy } from "lucide-react";

export default function Differentiators() {
  const [ref, isInView] = useInView();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const differentiators = [
    {
      number: 1,
      title: "Dual-Domain Expertise: Finance Meets Communication",
      icon: Puzzle,
      problem:
        "Traditional IR advisory often suffers from domain limitations. Communications agencies understand messaging but lack financial depth to engage analytically with investors. Financial and accounting advisors possess technical expertise but often struggle with stakeholder engagement sophistication. Companies are left managing multiple vendors with fragmented accountability",
      solution: [
        "The Neumantra Difference:",
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
      icon: Target,
      problem:
        "Large corporations benefit from big-firm advisory access and dedicated IR teams. Early-stage startups leverage venture capital networks. Mid-market companies—those preparing to list, transitioning from SME platforms, or operating as ₹1,000–10,000 crore listed entities—are often underserved. They are too complex for basic compliance support and too small for sustained attention from large firms.",
      solution: [
        "The Neumantra Difference:",
        "Our entire practice is calibrated to the mid-market growth companies:",
        "Understanding Constraints – Engagement models designed for efficiency, not excess",
        "Stage-Appropriate Expectations – No inappropriate large-cap playbooks",
        "Focused Investor Targeting – Knowledge of analysts and institutions active in mid-market opportunities",
        "Governance Realism – Strengthening governance without creating unnecessary bureaucracy",
        "Mid-market isn't a compromise for us, it's our deliberate focus and expertise.",
      ],
    },
    {
      number: 3,
      title: "Founder-Led Advisory: Senior Attention Throughout",
      icon: Users,
      problem:
        "Many advisory firms promise senior expertise but delegate execution to junior teams after the sales pitch. Companies receive standardized playbooks executed by analysts with limited capital-markets experience, forcing leadership teams to manage the advisory relationship closely.",
      solution: [
        "The Neumantra Difference:",
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
      icon: Link2,
      problem:
        "Effective investor relations requires coordination across finance, governance, disclosure, analyst engagement, and leadership communication. Managing multiple vendors leads to inefficiency, message inconsistency, and accountability gaps",
      solution: [
        "The Neumantra Difference:",
        "We deliver comprehensive IR capability under single-partner accountability:",
        "Readiness Diagnostics – Financial, governance, and disclosure assessments identifying gaps",
        "Strategy Development – Investment narrative, target investor mapping, engagement calendars",
        "Materials Creation – Investor presentations, earnings materials, fact books, ESG reports",
        "Stakeholder Engagement – Analyst targeting, investor outreach, meeting coordination",
        "Ongoing Operations – Quarterly earnings support, market monitoring, perception tracking",
        "Advisory Counsel – Strategic guidance on M&A communication, capital allocation, governance evolution",
        "One relationship. One message. One accountability point.",
      ],
    },
    {
      number: 5,
      title: "Outcomes Orientation: Impact Over Activity",
      icon: Trophy,
      problem:
        "Many IR advisors measure success by activity, such as meetings scheduled, decks created, and presentations delivered. Activity does not guarantee market impact.",
      solution: [
        "The Neumantra Difference:",
        "Our engagements are structured around measurable outcomes:",
        "Coverage Expansion – Number and quality of equity research analysts covering your company",
        "Investor Base Quality – Institutional ownership percentage, long-term investor proportion, geographic diversification",
        "Valuation Perception – Comparative P/E multiples, EV/EBITDA positioning versus peers, DCF assumptions in analyst models",
        "Message Penetration – Consistency of investment thesis in analyst reports, investor feedback reflecting strategic priorities",
        "Engagement Quality – Meeting requests from target institutional investors, follow-up dialogue depth",
        "We establish clear success metrics upfront and track progress systematically. Our quarterly reporting focuses on outcomes achieved, not just activities completed.",
      ],
    },
    {
      number: 6,
      title: "Market Credibility: Track Record in Capital Markets",
      icon: Trophy,
      problem:
        "Investor relations requires more than communication skill, it demands deep understanding of capital-markets behaviour, investor decision-making, and valuation drivers.",
      solution: [
        "The Neumantra Difference:",
        "Our founding teams bring authentic capital markets credentials:",
        "Transaction Experience – Supporting multiple companies through IPOs, fundraises, M&A communications",
        "Investor Network – Established relationships with institutional investors and equity research analysts",
        "Financial Expertise – Advanced understanding of valuation methodologies, financial modeling, and analytical frameworks",
        "Governance Knowledge – Deep familiarity with regulatory requirements, disclosure standards, and best practices",
        "Cross-Sector Insight – Experience spanning manufacturing, technology, healthcare, financial services, and consumer sectors",
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
          "radial-gradient(circle at 20% 30%, rgba(254, 226, 226, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(254, 240, 242, 0.6) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Makes Neumantra Different
          </h2>
          <SectionDivider />
          <p className="text-gray-700 mt-6 max-w-3xl mx-auto">
            Six core differentiators that set us apart in India's investor
            relations landscape
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {differentiators.map((diff) => (
            <div
              key={diff.number}
              onClick={() =>
                setExpandedIndex(
                  expandedIndex === diff.number - 1 ? null : diff.number - 1,
                )
              }
              className={`backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-6 transition-all duration-300 cursor-pointer group hover:shadow-xl hover:border-white/100 overflow-hidden relative ${
                expandedIndex === diff.number - 1
                  ? "ring-2 ring-offset-2 ring-accent"
                  : ""
              }`}
            >
              {/* Gradient accent */}
              <div
                className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent)",
                }}
              ></div>

              <div className="relative z-10">
                {/* Number and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/40 border border-white/80">
                      <span className="text-lg font-bold text-accent">
                        {diff.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-primary leading-tight">
                      {diff.title}
                    </h3>
                  </div>
                </div>

                {/* Problem Statement */}
                <div className="mb-4 pb-4 border-b border-gray-300/30">
                  <p className="text-gray-700 text-sm leading-relaxed italic">
                    <span className="font-semibold text-primary">
                      The Problem We Solve:
                    </span>{" "}
                    {diff.problem}
                  </p>
                </div>

                {/* Expandable Solution */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedIndex === diff.number - 1
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mt-4 space-y-4">
                    <ul className="space-y-2">
                      {diff.solution.map((point, idx) => {
                        const isLastItem = idx === diff.solution.length - 1;

                        if (isLastItem && !point.includes(":")) {
                          return null;
                        }

                        return (
                          <li
                            key={idx}
                            className="text-gray-700 text-sm flex items-start gap-3 animate-fadeIn"
                          >
                            {point.includes(":") ? (
                              <span className="font-semibold text-primary">
                                {point}
                              </span>
                            ) : (
                              <>
                                <span className="text-accent flex-shrink-0 font-bold mt-1">
                                  ✓
                                </span>
                                <span>{point}</span>
                              </>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                    <p className="text-gray-700 text-sm leading-relaxed mt-4 pt-4 border-t border-gray-300/30">
                      {diff.solution[diff.solution.length - 1]}
                    </p>
                  </div>
                </div>

                {/* Expand indicator */}
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold transition-colors duration-300 ${
                      expandedIndex === diff.number - 1
                        ? "text-primary"
                        : "text-gray-500"
                    }`}
                  >
                    {expandedIndex === diff.number - 1
                      ? "Show less"
                      : "Learn more"}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      expandedIndex === diff.number - 1 ? "rotate-180" : ""
                    } ${
                      expandedIndex === diff.number - 1
                        ? "text-primary"
                        : "text-gray-400"
                    }`}
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
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
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

        .animate-fadeIn:nth-child(7) {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}
