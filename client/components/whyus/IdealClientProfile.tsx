import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import {
  TrendingUp,
  Zap,
  Rocket,
  Target,
  Building2,
  BarChart3,
} from "lucide-react";

export default function IdealClientProfile() {
  const [ref, isInView] = useInView();

  const idealClients = [
    {
      icon: TrendingUp,
      text: "Are mid-market size (₹500-10,000 crore revenue or market cap range)",
    },
    {
      icon: Zap,
      text: "Have strong business fundamentals deserving better market recognition",
    },
    {
      icon: Rocket,
      text: "Are preparing for listing, transitioning from SME, or seeking enhanced IR for existing listing",
    },
    {
      icon: Target,
      text: "Value strategic counsel over tactical execution services alone",
    },
    {
      icon: Building2,
      text: "Are committed to governance strengthening and professional market engagement",
    },
    {
      icon: BarChart3,
      text: "Expect accountability, transparency, and measurable outcomes from advisors",
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
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-full w-10 h-10 flex items-center justify-center">
                      <item.icon
                        className="w-5 h-5 text-accent opacity-75"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed pt-1">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
