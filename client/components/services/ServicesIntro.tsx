import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function ServicesIntro() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgba(219, 234, 254, 0.8) 0%, rgba(248, 223, 228, 0.6) 50%, rgba(229, 231, 235, 0.7) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Modern Investor Relations Demands More
          </h2>
          <SectionDivider />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100">
            <div className="space-y-6 text-gray-700">
              <p className="text-base leading-relaxed">
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
      </div>
    </section>
  );
}
