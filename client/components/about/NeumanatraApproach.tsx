import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function NeumanatraApproach() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 text-gray-900 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(254, 226, 226, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(254, 240, 242, 0.6) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            The Neumantra Approach
          </h2>
          <SectionDivider />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100">
            <p className="text-gray-700 text-lg leading-relaxed">
              Neumantra Capital Advisors was founded to close this gap with
              precision.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100">
            <p className="text-gray-700 text-base leading-relaxed">
              We are not a traditional communications agency learning finance. We
              are not accountants dabbling in messaging. Neumantra represents the
              purposeful integration of Mantraa Advisory's financial strategy
              expertise and Neubright Partners' stakeholder engagement
              capabilities - two established practices coming together to serve an
              underserved market segment.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100">
            <p className="text-gray-700 text-base leading-relaxed">
              Our founding teams recognized that effective investor relations
              demands fluency across multiple disciplines: financial analysis,
              capital markets dynamics, governance frameworks, communication
              strategy, stakeholder psychology, and market positioning. Fragmented
              vendor relationships create inefficiency and inconsistency.
              Neumantra delivers unified accountability.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100">
            <p className="text-gray-700 text-base leading-relaxed">
              We work with companies that are ready to scale, ready to raise, and
              ready to build a lasting presence in the capital markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
