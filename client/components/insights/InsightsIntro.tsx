import { useInView } from "@/hooks/useInView";

export default function InsightsIntro() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-white transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Capital Markets Are Dynamic
          </h2>

          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Capital markets are dynamic. Regulatory expectations evolve. Investor preferences shift. ESG standards mature. Effective IR requires continuous learning and adaptation.
            </p>

            <p className="text-base leading-relaxed">
              Neumantra shares perspectives on capital markets readiness, investor engagement strategy, and IR best practices for mid-market companies navigating India's evolving investment landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
