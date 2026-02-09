import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function WhyUsCTA() {
  const [ref, isInView] = useInView();

  const nextSteps = [
    {
      icon: "📞",
      title: "Initial Conversation",
      description: "Share your capital markets objectives and current IR approach",
    },
    {
      icon: "📋",
      title: "Diagnostic Assessment",
      description: "We evaluate your readiness and identify key opportunities",
    },
    {
      icon: "🤝",
      title: "Partnership Proposal",
      description: "Custom engagement approach aligned to your needs",
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
          "linear-gradient(135deg, rgba(219, 234, 254, 0.8) 0%, rgba(248, 223, 228, 0.6) 50%, rgba(229, 231, 235, 0.7) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm mb-4">
            LET'S CONNECT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready for a Strategic IR Partnership?
          </h2>
          <SectionDivider />
          <p className="text-base text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
            Let's discuss whether Neumantra's approach aligns with your capital-markets objectives. We're confident that if you value the approach outlined here, we can deliver significant value.
          </p>
        </div>

        {/* Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {nextSteps.map((step, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/30 border-2 border-white/60 rounded-lg p-6 text-center hover:shadow-lg hover:border-white/90 transition-all duration-300 hover:bg-white/40"
            >
              <div className="text-4xl mb-3">{step.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-gradient-to-r from-accent to-red-600 text-white hover:shadow-lg pl-6 pr-2 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg inline-flex items-center gap-3 group hover:scale-105">
            <span>Schedule a Confidential Consultation</span>
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
            Request Credentials Presentation
          </button>
        </div>

        {/* Trust indicator */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Neumantra serves India's most ambitious mid-market companies seeking to elevate their capital markets presence
          </p>
        </div>
      </div>
    </section>
  );
}
