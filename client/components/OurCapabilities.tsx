import { ClipboardList, Target, Link2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import SectionDivider from "./ui/SectionDivider";

export default function OurCapabilities() {
  const capabilities = [
    {
      icon: ClipboardList,
      title: "Capital-Markets and IPO Readiness",
      description:
        "Comprehensive preparation for market access, including IPO planning, valuation storytelling, governance frameworks, and investor-grade documentation.",
      deliverables:
        "Investment narrative development, IR readiness diagnostics, financial communication frameworks",
    },
    {
      icon: Target,
      title: "Strategic Investor Relations",
      description:
        "Structured engagement with the investment community, including analyst targeting, earnings support, investor presentations, and stakeholder mapping.",
      deliverables:
        "Quarterly IR programs, earnings IR materials, investor days, perception studies",
    },
    {
      icon: Link2,
      title: "Ongoing Investor Relations Support",
      description:
        "Continuous management of market presence through relationship cultivation, sentiment tracking, messaging refinement, and reputation monitoring.",
      deliverables:
        "Investor feedback analysis, communication calendars, market intelligence, ESG integration",
    },
  ];

  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-primary text-white transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Capabilities
          </h2>
          <SectionDivider />
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            End-to-end investor relations services spanning market preparation,
            strategic engagement, and sustained value creation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-md border-2 border-white/20 rounded-lg p-8 hover:border-white/40 transition-all duration-300 shadow-lg"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
                }}
              >
                <Icon
                  className="w-14 h-14 text-white mb-4 opacity-75"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-bold text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  {capability.description}
                </p>
                <div
                  className="pt-4 mb-2"
                  style={{
                    borderTop: "1px solid transparent",
                    borderImage:
                      "linear-gradient(to right, rgb(220, 38, 38) 0%, transparent 100%)",
                    borderImageSlice: 1,
                  }}
                >
                  <p className="text-xs font-semibold text-white mb-2">
                    KEY DELIVERABLES
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {capability.deliverables}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
