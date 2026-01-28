import { useInView } from "@/hooks/useInView";

export default function MidMarketGap() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-white transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            The Mid-Market IR Gap
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            India's mid-market represents some of the country's most dynamic
            growth stories - innovative business models, strong fundamentals,
            ambitious expansion plans. Yet many of these companies struggle to
            translate operational excellence into sustained market credibility.
          </p>
          <p className="text-gray-700 text-lg font-semibold mb-6 leading-relaxed text-primary">
            The gap lies in the absence of a professional investor relations
            infrastructure.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            Large corporations benefit from dedicated IR teams and long-standing
            advisory relationships. Early-stage startups leverage venture
            capital networks. Mid-market companies—those preparing to list,
            already on SME exchanges, or operating as listed mid-sized
            entities—often navigate capital markets with limited specialised
            support.
          </p>
        </div>
      </div>
    </section>
  );
}
