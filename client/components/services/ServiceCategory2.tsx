import ServiceCategory from "./ServiceCategory";

export default function ServiceCategory2() {
  const services = [
    {
      title: "Analyst Coverage Development",
      description: "Strategic program to establish and expand equity research coverage:",
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
      description: "Structured engagement with institutional investors and fund managers:",
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
      description: "Comprehensive support through results announcement cycle:",
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
  ];

  return (
    <ServiceCategory
      categoryNumber={2}
      categoryTitle="Investor Relations & Stakeholder Engagement"
      services={services}
      backgroundColor="bg-gray-50"
    />
  );
}
