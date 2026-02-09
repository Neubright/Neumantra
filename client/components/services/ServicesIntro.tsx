import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function ServicesIntro() {
  const [ref, isInView] = useInView();

  const highlights = [
    {
      icon: "📊",
      title: "Market Maturity",
      description: "Institutional investors apply global evaluation frameworks with high transparency demands",
    },
    {
      icon: "📋",
      title: "Regulatory Standards",
      description: "Analysts demand consistent communication while regulators raise disclosure benchmarks",
    },
    {
      icon: "🌱",
      title: "ESG Focus",
      description: "Sustainability considerations increasingly influence capital allocation decisions",
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
          "linear-gradient(135deg, rgba(15, 37, 71, 0.08) 0%, rgba(165, 35, 35, 0.06) 50%, rgba(229, 231, 235, 0.7) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm mb-4">
            WHO WE SERVE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Investor Relations Matters Today
          </h2>
          <SectionDivider />
        </div>

        {/* Main intro paragraph */}
        <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8 mb-12 hover:shadow-xl transition-all duration-300">
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            India's capital markets have matured significantly. Institutional investors apply global evaluation frameworks. Analysts demand transparent, consistent communication. Regulators continue to raise disclosure standards, while ESG considerations increasingly influence capital allocation decisions.
          </p>

          <div className="border-l-4 border-accent pl-6">
            <p className="text-gray-800 leading-relaxed italic">
              For mid-market companies, meeting these expectations requires specialized capability that most organizations do not—and should not—build in-house. Investor relations is a professional discipline demanding continuous attention, market intelligence, and strategic coordination across finance, legal, and leadership functions.
            </p>
          </div>
        </div>

        {/* Key Market Dynamics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/30 border-2 border-white/60 rounded-lg p-6 hover:shadow-lg hover:border-white/90 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Three Service Categories Overview */}
        <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8 bg-gradient-to-r from-blue-50/30 to-red-50/30">
          <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent font-bold">
              ✓
            </span>
            Our Three-Part Approach
          </h3>

          <p className="text-gray-800 leading-relaxed mb-6">
            Neumantra's services are structured around three distinct company journeys, each requiring different investor relations capabilities:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-sm font-bold text-green-700">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">Capital-Markets Readiness</h4>
                <p className="text-sm text-gray-700">For companies preparing to access public or private markets</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-sm font-bold text-blue-700">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">Investor Relations & Engagement</h4>
                <p className="text-sm text-gray-700">For companies actively engaging with investors and analysts</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-sm font-bold text-purple-700">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">Customised IR for Listed</h4>
                <p className="text-sm text-gray-700">For listed companies requiring continuous IR partnership</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
