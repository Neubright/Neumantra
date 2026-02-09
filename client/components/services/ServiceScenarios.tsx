import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { useState } from "react";
import { Rocket, TrendingUp, Briefcase } from "lucide-react";

export default function ServiceScenarios() {
  const [ref, isInView] = useInView();
  const [selectedScenario, setSelectedScenario] = useState(0);

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      rocket: <Rocket className="w-6 h-6" strokeWidth={1.5} />,
      trending: <TrendingUp className="w-6 h-6" strokeWidth={1.5} />,
      briefcase: <Briefcase className="w-6 h-6" strokeWidth={1.5} />,
    };
    return icons[iconName];
  };

  const scenarios = [
    {
      title: "The Pre-IPO Company",
      icon: "rocket",
      profile: "₹750 crore revenue manufacturing company planning mainboard IPO in 18 months",
      currentState: [
        "Strong operational performance",
        "Existing debt relationships",
        "No equity investor experience",
        "Basic governance frameworks",
        "Founder-led management",
      ],
      engagement: [
        { phase: "Phase 1", duration: "Months 1-3", tasks: "IR readiness diagnostic, governance gap identification, equity story development" },
        { phase: "Phase 2", duration: "Months 4-12", tasks: "Governance strengthening, board appointments, disclosure enhancement, management IR training, Merchant Banker Selection" },
        { phase: "Phase 3", duration: "Months 13-18", tasks: "Regulatory Filings & Support, Investor materials development, pre-IPO positioning, analyst education, IPO support" },
        { phase: "Post-IPO", duration: "Ongoing", tasks: "Transition to ongoing IR partnership" },
      ],
      outcome: "Successful IPO with strong institutional demand, analyst coverage from 3 research firms, premium valuation",
    },
    {
      title: "SME-to-Main Board Transition",
      icon: "trending",
      profile: "Technology company listed on BSE SME for 3 years, planning main board migration",
      currentState: [
        "Basic quarterly compliance",
        "Minimal investor engagement",
        "Founder manages all investor communication",
        "Limited analyst awareness",
      ],
      engagement: [
        { phase: "Phase 1", duration: "Month 1-2", tasks: "Assessment of main board readiness gaps" },
        { phase: "Phase 2", duration: "Month 3-6", tasks: "Enhanced disclosure implementation, governance committee formation, IR infrastructure development" },
        { phase: "Phase 3", duration: "Month 7-12", tasks: "Analyst initiation campaign, institutional investor targeting, quarterly IR process establishment" },
        { phase: "Phase 4", duration: "Post-Migration", tasks: "Structured IR program with quarterly analyst engagement" },
      ],
      outcome: "Successful main board migration, expanded analyst coverage, 40% increase in institutional ownership within first year",
    },
    {
      title: "Listed Mid-Sized Company",
      icon: "briefcase",
      profile: "₹4,500 crore market cap healthcare company, listed for 8 years, experiencing valuation discount to peers",
      currentState: [
        "Compliance-focused IR",
        "Inconsistent investor engagement",
        "Limited analyst relationships",
        "Unclear equity story",
      ],
      engagement: [
        { phase: "Quarter 1", duration: "Q1", tasks: "Investor perception study, competitive positioning analysis, equity story refinement" },
        { phase: "Quarters 2-4", duration: "Q2-Q4", tasks: "Enhanced investor materials, analyst engagement intensification, quarterly earnings process professionalization" },
        { phase: "Year 2", duration: "Year 2", tasks: "Sustained engagement program, investor day execution, ESG disclosure enhancement" },
        { phase: "Ongoing", duration: "Continuous", tasks: "Continuous IR partnership with quarterly program management" },
      ],
      outcome: "Valuation multiple expansion from 12x to 16x P/E over 18 months, analyst coverage expansion from 2 to 6 firms, improved institutional ownership quality",
    },
  ];

  const scenario = scenarios[selectedScenario];

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background: "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Client Journey Scenarios
          </h2>
          <SectionDivider />
          <p className="text-gray-700 mt-6 max-w-2xl mx-auto">
            Explore how different companies at various stages benefit from Neumantra's tailored solutions
          </p>
        </div>

        {/* Scenario Selector */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
          {scenarios.map((s, index) => (
            <button
              key={index}
              onClick={() => setSelectedScenario(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 backdrop-blur-xl border-2 ${
                selectedScenario === index
                  ? "bg-accent/20 border-accent text-accent shadow-lg"
                  : "bg-white/20 border-white/50 text-gray-700 hover:border-white/80 hover:bg-white/30"
              }`}
            >
              <span className={selectedScenario === index ? "text-accent" : "text-gray-700"}>
                {getIcon(s.icon)}
              </span>
              <span className="hidden sm:inline">{s.title}</span>
              <span className="sm:hidden">Scenario {index + 1}</span>
            </button>
          ))}
        </div>

        {/* Active Scenario Details */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Column - Context */}
            <div className="space-y-6">
              <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="text-primary">{getIcon(scenario.icon)}</span>
                  Company Profile
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 font-medium">
                  {scenario.profile}
                </p>

                <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide">Current State</h4>
                <ul className="space-y-2">
                  {scenario.currentState.map((item, i) => (
                    <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-accent flex-shrink-0 font-bold mt-1">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Expected Outcome */}
            <div className="space-y-6">
              <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Expected Outcome
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  {scenario.outcome}
                </p>
              </div>
            </div>
          </div>

          {/* Engagement Timeline */}
          <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8">
            <h3 className="text-lg font-bold text-primary mb-8">Neumantra Engagement Timeline</h3>

            <div className="space-y-4">
              {scenario.engagement.map((item, index) => (
                <div key={index} className="relative pl-10 pb-4">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-5 h-5 bg-accent rounded-full border-4 border-white shadow-lg"></div>

                  {/* Connector line */}
                  {index !== scenario.engagement.length - 1 && (
                    <div className="absolute left-2.5 top-8 w-0.5 h-12 bg-gradient-to-b from-accent to-accent/30"></div>
                  )}

                  {/* Content */}
                  <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h4 className="font-bold text-primary">{item.phase}</h4>
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{item.tasks}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
