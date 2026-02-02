import { useInView } from "@/hooks/useInView";

export default function ServicesIntro() {
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
            Modern Investor Relations Demands More
          </h2>

          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              India's capital markets have matured significantly. Institutional investors apply global evaluation frameworks. Analysts demand transparent, consistent communication. Regulators continue to raise disclosure standards, while ESG considerations increasingly influence capital allocation decisions.
            </p>

            <p className="text-base leading-relaxed">
              For mid-market companies, meeting these expectations requires specialized capability that most organisations do not—and should not—build in-house. Investor relations is a professional discipline demanding continuous attention, market intelligence, and strategic coordination across finance, legal, and leadership functions.
            </p>

            <p className="text-base leading-relaxed font-semibold text-primary">
              Neumantra's services are structured around three distinct company journeys, each requiring different investor relations capabilities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
