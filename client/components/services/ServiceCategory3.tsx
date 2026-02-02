import ServiceCategory from "./ServiceCategory";

export default function ServiceCategory3() {
  const services = [
    {
      title: "Comprehensive IR Program Management",
      description: "Full-service investor relations as an extension of the company:",
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
      description: "Systematic development of investor and analyst relationships:",
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
      description: "Continuous monitoring and analysis of market perceptions:",
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
      description: "Preparedness and response for investor-impacting events:",
      points: [
        "Crisis Communication Protocols: Pre-developed frameworks for rapid investor communication during crises",
        "Issue Anticipation: Identifying potential investor concerns before they escalate",
        "Activist Investor Defense: Supporting management in responding to activist campaigns",
        "Short-Seller Response: Coordinating company responses to short-seller reports",
        "Regulatory Investigation Communication: Managing investor communication during enforcement actions or investigations",
      ],
    },
  ];

  return (
    <ServiceCategory
      categoryNumber={3}
      categoryTitle="Customised IR for Listed Companies"
      services={services}
      backgroundColor="bg-white"
    />
  );
}
