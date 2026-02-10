import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { BarChart3, FileText, Leaf } from "lucide-react";
import { useState } from "react";

export default function ServicesIntro() {
  const [ref, isInView] = useInView();
  const [selectedService, setSelectedService] = useState(0);

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
            India's capital markets have matured significantly. Institutional
            investors apply global evaluation frameworks. Analysts demand
            transparent, consistent communication. Regulators continue to raise
            disclosure standards, while ESG considerations increasingly
            influence capital allocation decisions.
          </p>

          <div className="border-l-4 border-accent pl-6">
            <p className="text-gray-800 leading-relaxed italic">
              For mid-market companies, meeting these expectations requires
              specialized capability that most organizations do not—and should
              not—build in-house. Investor relations is a professional
              discipline demanding continuous attention, market intelligence,
              and strategic coordination across finance, legal, and leadership
              functions.
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
              <div className="flex justify-center mb-4">
                <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-full w-16 h-16 flex items-center justify-center">
                  <item.icon
                    className="w-8 h-8 text-accent opacity-75"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Three Service Categories Overview */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Three-Part Approach
            </h2>
            <SectionDivider />
            <p className="text-gray-700 mt-6 max-w-2xl mx-auto">
              Neumantra's services are structured around three distinct company
              journeys, each requiring different investor relations capabilities
            </p>
          </div>

          {/* Service Category Selector */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
            {[
              {
                title: "Capital-Markets Readiness",
                description: "For companies preparing to access public or private markets, including SME platforms, within the next 12-24 months",
              },
              {
                title: "Investor Relations & Stakeholder Engagement",
                description: "For companies actively engaging with investors and analysts",
              },
              {
                title: "Customised IR for Listed Companies",
                description: "For listed companies requiring continuous IR partnership",
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
                <span className="hidden sm:inline text-sm">{service.title}</span>
                <span className="sm:hidden">Service {index + 1}</span>
              </button>
            ))}
          </div>

          {/* Selected Service Details */}
          <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8">
            <div className="flex gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-sm font-bold text-accent">{selectedService + 1}</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-primary text-lg mb-2">
                  {selectedService === 0 && "Capital-Markets Readiness"}
                  {selectedService === 1 && "Investor Relations & Stakeholder Engagement"}
                  {selectedService === 2 && "Customised IR for Listed Companies"}
                </h4>
                <p className="text-gray-700">
                  {selectedService === 0 && "For companies preparing to access public or private markets, including SME platforms, within the next 12-24 months"}
                  {selectedService === 1 && "For companies actively engaging with investors and analysts"}
                  {selectedService === 2 && "For listed companies requiring continuous IR partnership"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
