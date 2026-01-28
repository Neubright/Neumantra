import { useInView } from "@/hooks/useInView";

export default function HeritagePartners() {
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
            Our Heritage Partners
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white text-primary rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Mantra Advisory</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Mantra Advisory delivers financial advisory practice with deep capital markets experience. We've guided Fortune 500 leaders, mid-sized companies, and high-growth businesses through transformative capital transactions, complex negotiations, and strategic communications.
            </p>
          </div>

          <div className="bg-white text-primary rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Neubright Partners</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Neubright Partners is a strategic consulting firm specializing in stakeholder engagement and corporate communications leadership. We've helped portfolio companies navigate complex transactions, optimize board dynamics, and strengthen engagement strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
