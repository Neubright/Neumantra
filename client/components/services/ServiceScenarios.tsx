import { useInView } from "@/hooks/useInView";

export default function ServiceScenarios() {
  const [ref, isInView] = useInView();

  const scenarios = [
    {
      title: "Scenario 1: The Pre-IPO Company",
      profile: "₹750 crore revenue manufacturing company planning mainboard IPO in 18 months",
      currentState: [
        "Strong operational performance",
        "Existing debt relationships",
        "No equity investor experience",
        "Basic governance frameworks",
        "Founder-led management",
      ],
      engagement: [
        "Phase 1 (Months 1-3): IR readiness diagnostic, governance gap identification, equity story development",
        "Phase 2 (Months 4-12): Governance strengthening, board appointments, disclosure enhancement, management IR training, Merchant Banker Selection",
        "Phase 3 (Months 13-18): Regulatory Filings & Support, Investor materials development, pre-IPO positioning, analyst education, IPO support",
        "Post-IPO: Transition to ongoing IR partnership",
      ],
      outcome: "Successful IPO with strong institutional demand, analyst coverage from 3 research firms, premium valuation",
    },
    {
      title: "Scenario 2: SME-to-Main Board Transition",
      profile: "Technology company listed on BSE SME for 3 years, planning main board migration",
      currentState: [
        "Basic quarterly compliance",
        "Minimal investor engagement",
        "Founder manages all investor communication",
        "Limited analyst awareness",
      ],
      engagement: [
        "Month 1-2: Assessment of main board readiness gaps",
        "Month 3-6: Enhanced disclosure implementation, governance committee formation, IR infrastructure development",
        "Month 7-12: Analyst initiation campaign, institutional investor targeting, quarterly IR process establishment",
        "Post-Migration: Structured IR program with quarterly analyst engagement",
      ],
      outcome: "Successful main board migration, expanded analyst coverage, 40% increase in institutional ownership within first year",
    },
    {
      title: "Scenario 3: Listed Mid-Sized Company",
      profile: "₹4,500 crore market cap healthcare company, listed for 8 years, experiencing valuation discount to peers",
      currentState: [
        "Compliance-focused IR",
        "Inconsistent investor engagement",
        "Limited analyst relationships",
        "Unclear equity story",
      ],
      engagement: [
        "Quarter 1: Investor perception study, competitive positioning analysis, equity story refinement",
        "Quarter 2-4: Enhanced investor materials, analyst engagement intensification, quarterly earnings process professionalization",
        "Year 2: Sustained engagement program, investor day execution, ESG disclosure enhancement",
        "Ongoing: Continuous IR partnership with quarterly program management",
      ],
      outcome: "Valuation multiple expansion from 12x to 16x P/E over 18 months, analyst coverage expansion from 2 to 6 firms, improved institutional ownership quality",
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-primary text-white transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Client Journey Scenarios
        </h2>

        <div className="space-y-12">
          {scenarios.map((scenario, index) => (
            <div key={index} className="border border-gray-600 rounded-lg p-8 bg-primary/50">
              <h3 className="text-2xl font-bold mb-6 text-accent">{scenario.title}</h3>

              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold text-lg mb-2">Profile</h4>
                  <p className="text-gray-200">{scenario.profile}</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Current State</h4>
                  <ul className="space-y-1">
                    {scenario.currentState.map((item, i) => (
                      <li key={i} className="text-gray-200 flex items-start">
                        <span className="text-accent mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Neumantra Engagement</h4>
                  <ul className="space-y-1">
                    {scenario.engagement.map((item, i) => (
                      <li key={i} className="text-gray-200 flex items-start">
                        <span className="text-accent mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Outcome</h4>
                  <p className="text-gray-200">{scenario.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
