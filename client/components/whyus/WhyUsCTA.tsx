import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { Phone, ClipboardList, Handshake, ArrowRight } from "lucide-react";

export default function WhyUsCTA() {
  const [ref, isInView] = useInView();

  const nextSteps = [
    {
      icon: Phone,
      title: "Initial Conversation",
      description:
        "Share your capital markets objectives and current IR approach",
    },
    {
      icon: ClipboardList,
      title: "Diagnostic Assessment",
      description: "We evaluate your readiness and identify key opportunities",
    },
    {
      icon: Handshake,
      title: "Partnership Proposal",
      description: "Custom engagement approach aligned to your needs",
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-12 md:py-18 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background: "transparent",
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
          <h3 className="text-lg md:text-xl font-semibold text-primary mt-6 mb-4 max-w-3xl mx-auto">
            Let's discuss whether Neumantra's approach aligns with your capital-markets objectives. We're confident that if you value the approach outlined here, we can deliver significant value.
          </h3>
        </div>

        {/* Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-7xl mx-auto">
          {nextSteps.map((step, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/30 border-2 border-white/60 rounded-lg p-6 text-center hover:shadow-apple hover:border-white/90 transition-all duration-300 hover:bg-white/40"
            >
              <div className="flex justify-center mb-4">
                <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-full w-16 h-16 flex items-center justify-center">
                  <step.icon
                    className="w-8 h-8 text-accent opacity-75"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="pl-3 pr-1.5 py-1.5 rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-3 backdrop-blur-3xl text-primary border-2 border-red-300/60 hover:shadow-apple hover:scale-105 hover:border-red-300/80 group" style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.55) 100%)",
            backdropFilter: "blur(30px)",
          }}>
            <span>Schedule a Confidential Consultation</span>
            <span className="flex-shrink-0 bg-primary rounded-lg w-10 h-10 flex items-center justify-center group-hover:bg-primary/90 transition-all duration-300 ml-auto">
              <ArrowRight className="w-5 h-5 text-white" strokeWidth={2} />
            </span>
          </button>
          <button className="backdrop-blur-xl bg-white/40 border-2 border-white/80 text-primary hover:bg-white/60 hover:border-white/100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-apple">
            Request Credentials Presentation
          </button>
        </div>

        {/* Trust indicator */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Neumantra serves India's most ambitious mid-market companies seeking
            to elevate their capital markets presence
          </p>
        </div>
      </div>
    </section>
  );
}
