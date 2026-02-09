import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function ServicesCTA() {
  const [ref, isInView] = useInView();

  const benefits = [
    {
      icon: "💼",
      title: "Flexible Engagement",
      description: "Models tailored to your stage and resources",
    },
    {
      icon: "🎯",
      title: "Proven Expertise",
      description: "Deep experience across capital markets journey",
    },
    {
      icon: "📈",
      title: "Measurable Results",
      description: "Track success through investor perception metrics",
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
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm mb-4">
            NEXT STEPS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to Elevate Your IR Capability?
          </h2>
          <SectionDivider />
          <p className="text-base text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
            Every company's capital markets journey is unique. Neumantra's flexible engagement models ensure support aligned to your stage, objectives, and resources.
          </p>
        </div>

        {/* Why Choose Neumantra */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/30 border-2 border-white/60 rounded-lg p-6 text-center hover:shadow-lg hover:border-white/90 transition-all duration-300 hover:bg-white/40"
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-gradient-to-r from-accent to-red-600 text-white hover:shadow-lg pl-6 pr-2 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg inline-flex items-center gap-3 group hover:scale-105">
            <span>Schedule a Consultation</span>
            <span className="flex-shrink-0 backdrop-blur-md bg-white/25 border border-white/40 rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-white/35 transition-all duration-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
          <button className="backdrop-blur-xl bg-white/40 border-2 border-white/80 text-primary hover:bg-white/60 hover:border-white/100 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            Download Service Overview
          </button>
        </div>

        {/* Trust indicator */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Join India's leading mid-market companies in elevating their investor relations strategy
          </p>
        </div>
      </div>
    </section>
  );
}
