import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function IdealClientProfile() {
  const [ref, isInView] = useInView();

  const idealClients = [
    {
      icon: "📈",
      text: "Are mid-market size (₹500-10,000 crore revenue or market cap range)",
    },
    {
      icon: "💪",
      text: "Have strong business fundamentals deserving better market recognition",
    },
    {
      icon: "🚀",
      text: "Are preparing for listing, transitioning from SME, or seeking enhanced IR for existing listing",
    },
    {
      icon: "🎯",
      text: "Value strategic counsel over tactical execution services alone",
    },
    {
      icon: "🏛️",
      text: "Are committed to governance strengthening and professional market engagement",
    },
    {
      icon: "📊",
      text: "Expect accountability, transparency, and measurable outcomes from advisors",
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
          "linear-gradient(135deg, rgba(165, 35, 35, 0.06) 0%, rgba(15, 37, 71, 0.08) 50%, rgba(165, 35, 35, 0.06) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm mb-4">
            FIND THE RIGHT FIT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Is Neumantra Right for Your Company?
          </h2>
          <SectionDivider />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Ideal Client Profile
            </h3>
            <p className="text-gray-700 text-base font-medium">
              Neumantra delivers maximum value for companies that:
            </p>
          </div>

          {/* Criteria Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {idealClients.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/30 border-2 border-white/60 rounded-lg p-6 hover:shadow-lg hover:border-white/90 hover:bg-white/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed pt-1">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="mt-12 backdrop-blur-xl bg-gradient-to-r from-blue-50/40 to-blue-100/20 border-2 border-blue-200/50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-blue-700 mb-3">
              If these characteristics describe your company, let's explore partnership
            </h3>
            <p className="text-blue-900 leading-relaxed">
              We're most effective with companies that recognize IR as a strategic investment, not just a compliance requirement. If you share this perspective, Neumantra could be the right partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
