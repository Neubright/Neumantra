import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { Briefcase, Target, TrendingUp, ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  const benefits = [
    {
      icon: Briefcase,
      title: "Flexible Engagement",
      description: "Models tailored to your stage and resources",
    },
    {
      icon: Target,
      title: "Proven Expertise",
      description: "Deep experience across capital markets journey",
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "Track success through investor perception metrics",
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
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm mb-4">
            NEXT STEPS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to Elevate Your IR Capability?
          </h2>
          <SectionDivider />
          <h3 className="text-lg md:text-xl font-semibold text-primary mt-6 mb-4 max-w-3xl mx-auto">
            Every company's capital markets journey is unique. Neumantra's flexible engagement models ensure support aligned to your stage, objectives, and resources.
          </h3>
        </div>

        {/* Why Choose Neumantra */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/30 border-2 border-white/60 rounded-lg p-6 text-center hover:shadow-apple hover:border-white/90 transition-all duration-300 hover:bg-white/40"
            >
              <div className="flex justify-center mb-4">
                <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-full w-16 h-16 flex items-center justify-center">
                  <benefit.icon
                    className="w-8 h-8 text-accent opacity-75"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="pl-3 pr-1.5 py-1.5 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-3 backdrop-blur-3xl text-primary border-2 border-red-300/60 hover:shadow-apple hover:scale-105 hover:border-red-300/80 shadow-apple group" style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.55) 100%)",
            backdropFilter: "blur(30px)",
          }}>
            <span>Schedule a Consultation</span>
            <span className="flex-shrink-0 bg-primary rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-primary/90 transition-all duration-300 ml-auto">
              <ArrowRight className="w-5 h-5 text-white" strokeWidth={2} />
            </span>
          </button>
          <button className="backdrop-blur-xl bg-white/40 border-2 border-white/80 text-primary hover:bg-white/60 hover:border-white/100 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-apple hover:shadow-apple">
            Download Service Overview
          </button>
        </div>

        {/* Trust indicator */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Join India's leading mid-market companies in elevating their
            investor relations strategy
          </p>
        </div>
      </div>
    </section>
  );
}
