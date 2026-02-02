import { BarChart3, Users, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import SectionDivider from "./ui/SectionDivider";

export default function WhoWeServe() {
  const services = [
    {
      icon: BarChart3,
      title: "Pre-IPO & Capital-Raising Companies",
      description:
        "Companies, including SME platform, planning to access public or private markets within 12-24 months who need comprehensive capital-markets readiness - from valuation narrative to governance maturity.",
    },
    {
      icon: Users,
      title: "SME-to-Main Board Transition",
      description:
        "SME-listed companies preparing for main board migration who require enhanced disclosure frameworks, institutional-grade IR capabilities, and governance strengthening.",
    },
    {
      icon: TrendingUp,
      title: "Listed Mid-Sized Companies",
      description:
        "Companies with market capitalizations between ₹1,000-10,000 crore seeking professional IR support to deepen analyst engagement, expand shareholder base, broaden institutional coverage, and unlock inherent value.",
    },
  ];

  const [ref, isInView] = useInView();

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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Who We Serve
          </h2>
          <SectionDivider />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Neumantra works with companies at different stages of their
            capital-markets journey—offering stage-appropriate investor
            relations support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100"
              >
                <Icon
                  className="w-12 h-12 text-accent mb-4 opacity-75"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
