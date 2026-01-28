import ServiceCategory from "./ServiceCategory";

export default function ServiceCategory1() {
  const services = [
    {
      title: "IPO & Public Issue Preparation",
      description: "Comprehensive support for companies planning mainboard or SME listings:",
      points: [
        "Pre-IPO Positioning Strategy: Timing considerations, market condition assessment, investor appetite evaluation",
        "Equity Story Development: Investment thesis articulation, competitive differentiation, growth narrative",
        "Valuation Communication Framework: Translating DCF, comparable analysis, and precedent transactions into accessible investor language",
        "Pre-Marketing Coordination: Working with investment banks on pre-IPO investor education without regulatory violations",
        "Management Preparation: Leadership coaching for investor presentations, analyst Q&A, media interactions",
        "Documentation Support: Red herring prospectus inputs, investor presentation development, FAQ preparation",
      ],
    },
    {
      title: "Private Capital Raise Support",
      description: "Investor relations for companies approaching PE/VC or institutional investors:",
      points: [
        "Investor Targeting Intelligence: Identifying appropriate funds based on sector focus, ticket size, investment stage",
        "Management Presentation Development: Pitch deck optimization, data room organization, due diligence preparation",
        "Valuation Justification Materials: Building credible valuation arguments supported by market comparables and financial projections",
        "Negotiation Support Materials: Term sheet analysis, cap table modeling, governance implications",
      ],
    },
    {
      title: "Financial Readiness & Governance Review",
      description: "Diagnostic assessment identifying gaps that could undermine investor confidence:",
      points: [
        "Disclosure Quality Audit: Evaluation of financial reporting against best practices and regulatory requirements",
        "Governance Framework Assessment: Board composition, committee structure, policy documentation, compliance infrastructure",
        "Related-Party Transaction Review: Transparency of RPTs, approval processes, disclosure adequacy",
        "Internal Controls Evaluation: Financial controls maturity relevant to public company expectations",
        "Risk Disclosure Development: Comprehensive risk factor articulation for investor materials",
      ],
    },
    {
      title: "Investor-Facing Materials Development",
      description: "Professional-grade documentation establishing market credibility:",
      points: [
        "Corporate Presentation: Comprehensive company overview for investor meetings",
        "Investor Fact Book: Detailed operating metrics, historical financials, industry context",
        "Management Discussion & Analysis: Enhanced MD&A exceeding regulatory minimums",
        "ESG Disclosures: Sustainability reporting aligned with investor expectations",
        "Executive Biography Development: Professional leadership profiles for investor confidence",
      ],
    },
  ];

  return (
    <ServiceCategory
      categoryNumber={1}
      categoryTitle="Capital-Markets Readiness"
      services={services}
      backgroundColor="bg-white"
    />
  );
}
