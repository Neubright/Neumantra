import { useInView } from "@/hooks/useInView";

export default function NeumanatraApproach() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-primary text-white transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Neumantra Approach
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-gray-200 text-lg leading-relaxed">
            Neumantra Capital Advisors was founded to close this gap with precision.
          </p>

          <p className="text-gray-200 text-base leading-relaxed">
            We are not a traditional communications agency learning finance. We are not accountants dabbling in messaging. Neumantra represents the purposeful integration of Mantraa Advisory's financial strategy expertise and Neubright Partners' stakeholder engagement capabilities - two established practices coming together to serve an underserved market segment.
          </p>

          <p className="text-gray-200 text-base leading-relaxed">
            Our founding teams recognized that effective investor relations demands fluency across multiple disciplines: financial analysis, capital markets dynamics, governance frameworks, communication strategy, stakeholder psychology, and market positioning. Fragmented vendor relationships create inefficiency and inconsistency. Neumantra delivers unified accountability.
          </p>

          <p className="text-gray-200 text-base leading-relaxed">
            We work with companies that are ready to scale, ready to raise, and ready to build a lasting presence in the capital markets.
          </p>
        </div>
      </div>
    </section>
  );
}
