import { useInView } from "@/hooks/useInView";
import ArticleCard from "./ArticleCard";

export default function FeaturedArticles() {
  const [ref, isInView] = useInView();

  const articles = [
    {
      title: "Five Critical Steps Before Approaching Capital Markets",
      description: "Most mid-market companies underestimate preparation time for successful market access. This article outlines the essential readiness dimensions: governance frameworks, disclosure quality, financial communication capability, stakeholder infrastructure, and leadership IR competency. Includes diagnostic questions companies should ask themselves 18-24 months before planned listing or fundraise.",
      readTime: "8-minute read",
    },
    {
      title: "SME-to-Main Board: What Actually Changes",
      description: "Transitioning from SME listing to main board isn't just a market cap threshold - it's a fundamental shift in investor expectations, disclosure standards, and stakeholder sophistication. This piece explores the governance, IR infrastructure, and communication enhancements required for successful main board migration.",
      readTime: "10-minute read",
    },
    {
      title: "What Equity Research Analysts Actually Want",
      description: "Mid-market companies often struggle to secure analyst coverage. This article demystifies the analyst initiation process: what triggers coverage decisions, what information analysts need, how companies can facilitate quality research, and common mistakes that undermine coverage development.",
      readTime: "12-minute read",
    },
    {
      title: "Building Investment Narratives That Resonate",
      description: "The difference between functional and compelling equity stories. Explores how to construct investment narratives that balance growth aspirations with credible execution, differentiate from competitors without exaggerating capabilities, and communicate complexity with clarity. Includes real examples of effective and ineffective narrative approaches.",
      readTime: "15-minute read",
    },
    {
      title: "IR During Market Volatility: Maintaining Confidence",
      description: "When markets decline or sector sentiment shifts, investor communication becomes critical. This article provides frameworks for maintaining stakeholder confidence during challenging periods: what to communicate, when to increase engagement, how to balance transparency with competitive prudence, and when to adjust guidance.",
      readTime: "9-minute read",
    },
    {
      title: "ESG Integration in Investor Relations",
      description: "Sustainability is no longer peripheral to IR - it's central to institutional investor evaluation. This piece explains how mid-market companies can integrate ESG into investor relations without overwhelming resources: materiality identification, disclosure frameworks (BRSR, TCFD, GRI), ESG investor targeting, and rating agency engagement.",
      readTime: "14-minute read",
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
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Featured Perspectives
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              readTime={article.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
