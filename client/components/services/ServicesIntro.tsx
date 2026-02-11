import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { BarChart3, FileText, Leaf } from "lucide-react";
import { useState } from "react";

export default function ServicesIntro() {
  const [ref, isInView] = useInView();
  const [selectedService, setSelectedService] = useState(0);

  const serviceDetails = [
    {
      title: "Capital-Markets Readiness",
      description:
        "For companies preparing to access public or private markets, including SME platforms, within the next 12-24 months",
      services: [
        {
          title: "IPO & Public Issue Preparation",
          description:
            "Comprehensive support for companies planning mainboard or SME listings:",
          points: [
            "Pre-IPO Positioning Strategy: Timing considerations, market condition assessment, and investor appetite evaluation",
            "Equity Story Development: Investment thesis articulation, competitive differentiation, and growth narrative development",
            "Valuation Communication Framework: Translating DCF, comparable analysis, and precedent transactions into accessible investor language",
            "Pre-Marketing Coordination: Working with investment banks on pre-IPO investor education within regulatory boundaries",
            "Management Preparation: Leadership coaching for investor presentations, analyst Q&A, and media interactions",
            "Documentation Support: DRHP inputs, investor presentation development, and FAQ preparation",
          ],
        },
        {
          title: "Private Capital Raise Support",
          description:
            "Investor relations for companies approaching PE/VC or institutional investors:",
          points: [
            "Investor Targeting Intelligence: Identifying appropriate funds based on sector focus, ticket size, and investment stage",
            "Management Presentation Development: Pitch deck optimization, data room organization, and due diligence preparation",
            "Valuation Justification Materials: Building credible valuation arguments supported by market comparables and financial projections",
            "Negotiation Support Materials: Term sheet analysis, cap table modeling, and governance implications assessment",
          ],
        },
        {
          title: "Financial Readiness & Governance Review",
          description:
            "Diagnostic assessment identifying gaps that could undermine investor confidence:",
          points: [
            "Disclosure Quality Audit: Evaluation of financial reporting against best practices and regulatory requirements",
            "Governance Framework Assessment: Board composition, committee structures, policy documentation, compliance infrastructure",
            "Related-Party Transaction Review: Transparency of RPTs, approval processes, and disclosure adequacy",
            "Internal Controls Evaluation: Financial controls maturity aligned with public company expectations",
            "Risk Disclosure Development: Comprehensive risk factor articulation for investor materials",
          ],
        },
        {
          title: "Investor-Facing Materials Development",
          description:
            "Professional-grade documentation establishing market credibility:",
          points: [
            "Corporate Presentation: Comprehensive company overview for investor meetings",
            "Investor Fact Book: Detailed operating metrics, historical financials, industry context",
            "Management Discussion & Analysis: Enhanced MD&A exceeding regulatory minimums",
            "ESG Disclosures: Sustainability reporting aligned with investor expectations",
            "Executive Biography Development: Professional leadership profiles for investor confidence",
          ],
        },
      ],
    },
    {
      title: "Investor Relations & Stakeholder Engagement",
      description:
        "For companies actively engaging with investors, analysts, and the investment community",
      services: [
        {
          title: "Analyst Coverage Development",
          description:
            "Strategic program to establish and expand equity research coverage:",
          points: [
            "Coverage Gap Analysis: Identifying analysts and research firms appropriate for company profile",
            "Initiation Targeting Strategy: Prioritized outreach plan with customized analyst engagement approach",
            "Model Support Coordination: Providing financial data, operating metrics, and assumptions to support analyst modeling",
            "Analyst Day Execution: Organizing facility visits, management access, and deep-dive sessions",
            "Coverage Maintenance: Regular analyst updates, quarterly engagement, relationship cultivation",
          ],
        },
        {
          title: "Investor Outreach & Targeting",
          description:
            "Structured engagement with institutional investors and fund managers:",
          points: [
            "Institutional Investor Mapping: Identifying funds with sector mandates, market cap focus, and investment philosophy alignment",
            "Non-Deal Roadshow Planning: Coordinating management meetings with target investors in key financial centers",
            "Investor Conference Participation: Selection of appropriate conferences, presentation preparation, meeting scheduling",
            "Investor Perception Research: Gathering feedback on investment thesis, concerns, competitive positioning",
            "CRM & Engagement Tracking: Systematic recording of investor interactions, follow-ups, relationship history",
          ],
        },
        {
          title: "Quarterly & Annual Earnings Support",
          description:
            "Comprehensive support through results announcement cycle:",
          points: [
            "Earnings Preparation: Results analysis, talking points, Q&A anticipation, scenario planning",
            "Earnings Release Drafting: Professional announcements balancing regulatory requirements and investor communication",
            "Analyst Call Scripting: Management remarks, forward-looking statements, disclosure discipline",
            "Post-Earnings Follow-Up: Addressing analyst questions, model updates, clarification requests",
            "Annual Report Enhancement: Upgrading annual reports beyond compliance to stakeholder engagement tools",
          ],
        },
        {
          title: "Investor Events & Presentations",
          description: "Design and execution of investor engagement events:",
          points: [
            "Annual Investor Day: Comprehensive company update with business unit presentations, facility tours, management Q&A",
            "Virtual Roadshows: Digital investor engagement for geographic reach and efficiency",
            "Industry Conference Presentations: Developing sector-positioning presentations for investor conferences",
            "ESG Investor Forums: Specialized engagement with sustainability-focused investors",
            "Crisis Communication Events: Managing investor communication during unexpected challenges",
          ],
        },
        {
          title: "Corporate Announcements & Disclosure Management",
          description: "Strategic communication support for material events:",
          points: [
            "M&A Communication: Acquisition/divestiture rationale, valuation justification, integration messaging",
            "Strategic Initiative Announcements: New market entry, product launches, capex programs, partnerships",
            "Guidance Management: Forward-looking statement development, guidance methodology, revision communication",
            "Material Information Disclosure: Ensuring compliance while maintaining competitive confidentiality",
            "FAQ Development: Anticipating investor questions and preparing management responses",
          ],
        },
      ],
    },
    {
      title: "Customised IR for Listed Companies",
      description: "For listed mid-sized companies requiring a continuous investor relations partnership",
      services: [
        {
          title: "Comprehensive IR Program Management",
          description:
            "Full-service investor relations as an extension of the company:",
          points: [
            "Quarterly IR Calendar Management: Earnings cycle coordination, analyst meetings, investor events, conference participation",
            "Investor Relations Officer (IRO) Services: Professional IRO representation for companies without full-time IR staff",
            "IR Website Management: Content updates, presentation libraries, financial data, corporate governance disclosures",
            "Investor Database Maintenance: Shareholder analysis, ownership tracking, trading pattern monitoring",
            "IR Budget Planning: Cost management for IR activities, conference participation, perception studies",
          ],
        },
        {
          title: "Relationship Cultivation & Advocacy Building",
          description:
            "Systematic development of investor and analyst relationships:",
          points: [
            "Top Holder Engagement Program: Regular interaction with largest institutional shareholders",
            "New Investor Identification: Monitoring trading activity to identify emerging shareholders for relationship initiation",
            "Sell-Side Analyst Relationships: Continuous engagement maintaining coverage quality and accuracy",
            "Buy-Side Analyst Access: Facilitating portfolio manager and analyst meetings with management",
            "Investor Loyalty Programs: Recognition and engagement strategies for long-term shareholders",
          ],
        },
        {
          title: "Market Intelligence & Feedback",
          description:
            "Continuous monitoring and analysis of market perceptions:",
          points: [
            "Investor Perception Studies: Annual or semi-annual feedback collection from institutional investors and analysts",
            "Peer Benchmarking: Comparative analysis of valuation multiples, disclosure practices, IR programs",
            "Trading Pattern Analysis: Monitoring volume, volatility, and ownership changes for insight into sentiment shifts",
            "Analyst Report Monitoring: Tracking coverage, recommendations, target prices, earnings estimates",
            "Media Monitoring: Financial press coverage analysis and reputation tracking",
          ],
        },
        {
          title: "ESG & Sustainability Communication",
          description: "Integrating ESG into investor relations program:",
          points: [
            "ESG Disclosure Development: Sustainability reporting aligned with investor frameworks (BRSR, GRI, SASB, TCFD)",
            "ESG Investor Targeting: Identifying and engaging with sustainability-focused institutional investors",
            "ESG Rating Engagement: Managing relationships with rating agencies (MSCI, Sustainalytics, CDP)",
            "Climate-Related Financial Disclosures: Supporting TCFD or similar climate disclosure frameworks",
            "Social & Governance Messaging: Communicating diversity initiatives, board composition, stakeholder capitalism approach",
          ],
        },
        {
          title: "Crisis IR & Issue Management",
          description:
            "Preparedness and response for investor-impacting events:",
          points: [
            "Crisis Communication Protocols: Pre-developed frameworks for rapid investor communication during crises",
            "Issue Anticipation: Identifying potential investor concerns before they escalate",
            "Activist Investor Defense: Supporting management in responding to activist campaigns",
            "Short-Seller Response: Coordinating company responses to short-seller reports",
            "Regulatory Investigation Communication: Managing investor communication during enforcement actions or investigations",
          ],
        },
      ],
    },
  ];

  const highlights = [
    {
      icon: BarChart3,
      title: "Market Maturity",
      description:
        "Institutional investors apply global evaluation frameworks with high transparency demands",
    },
    {
      icon: FileText,
      title: "Regulatory Standards",
      description:
        "Analysts demand consistent communication while regulators raise disclosure benchmarks",
    },
    {
      icon: Leaf,
      title: "ESG Focus",
      description:
        "Sustainability considerations increasingly influence capital allocation decisions",
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
            Introduction
          </h2>
          <SectionDivider />
          <h3 className="text-lg md:text-xl font-semibold text-primary mt-6 mb-4">
            Modern Investor Relations Demands More
          </h3>
        </div>

        {/* Main intro paragraph */}
        <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8 mb-12 hover:shadow-xl transition-all duration-300">
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            India's capital markets have matured significantly. Institutional
            investors apply global evaluation frameworks. Analysts demand
            transparent, consistent communication. Regulators continue to raise
            disclosure standards, while ESG considerations increasingly
            influence capital allocation decisions.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            For mid-market companies, meeting these expectations requires
            specialized capability that most organisations do not—and should
            not—build in-house. Investor relations is a professional
            discipline demanding continuous attention, market intelligence,
            and strategic coordination across finance, legal, and leadership
            functions.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Neumantra's services are structured around three distinct company
            journeys, each requiring different investor relations capabilities
          </p>
        </div>

        {/* Three Service Categories Overview */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Three-Part Approach
            </h2>
            <SectionDivider />
            <h3 className="text-xl md:text-2xl font-semibold text-primary mt-6 mb-4 max-w-2xl mx-auto">
              Neumantra's services are structured around three distinct company journeys, each requiring different investor relations capabilities
            </h3>
          </div>

          {/* Service Category Selector */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
            {[
              {
                title: "Capital-Markets Readiness",
                description:
                  "For companies preparing to access public or private markets, including SME platforms, within the next 12-24 months",
              },
              {
                title: "Investor Relations & Stakeholder Engagement",
                description:
                  "For companies actively engaging with investors, analysts, and the investment community",
              },
              {
                title: "Customised IR for Listed Companies",
                description:
                  "For listed mid-sized companies requiring a continuous investor relations partnership",
              },
            ].map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 backdrop-blur-xl border-2 text-center ${
                  selectedService === index
                    ? "bg-accent/20 border-accent text-accent shadow-lg"
                    : "bg-white/20 border-white/50 text-gray-700 hover:border-white/80 hover:bg-white/30"
                }`}
              >
                <span className="text-sm font-bold">{index + 1}</span>
                <span className="hidden sm:inline text-sm">
                  {service.title}
                </span>
                <span className="sm:hidden">Service {index + 1}</span>
              </button>
            ))}
          </div>

          {/* Selected Service Details */}
          <div className="space-y-6">
            {/* Service Overview */}
            <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-accent">
                    {selectedService + 1}
                  </span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-primary text-lg mb-2">
                    {serviceDetails[selectedService].title}
                  </h4>
                  <p className="text-gray-700">
                    {serviceDetails[selectedService].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Service Components */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceDetails[selectedService].services.map(
                (service, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-xl bg-white/30 border-2 border-white/60 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <h5 className="text-base font-bold text-primary mb-2">
                      {service.title}
                    </h5>
                    <p className="text-sm text-gray-700 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="text-sm text-gray-700 flex items-start gap-3"
                        >
                          <span className="text-accent flex-shrink-0 font-bold">
                            ◆
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex justify-center">
            <button className="bg-gradient-to-r from-primary to-primary text-white hover:shadow-lg pl-3 pr-1.5 py-1.5 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-3 backdrop-blur-xl border-2 border-white/80 group">
              Schedule a Confidential Consultation
              <span className="flex-shrink-0 bg-white/25 border border-white/40 rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-white/35 transition-all duration-300">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
