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
            Neumantra Capital Advisors was founded to close this gap with precision. We are a traditional communication advisory firm focused on investor relations. We work with fast-growing, operationally sophisticated mid-market companies.
          </p>
          
          <p className="text-gray-200 text-base leading-relaxed">
            Our founding team recognized that effective investor relations demands deep financial expertise alongside strategic communications capability. We've spent decades helping companies build market credibility. We've engineered companies through complex transactions and sophisticated communications campaigns. We've built investor intelligence. We work with high-growth capital models and specialized investor support.
          </p>

          <p className="text-gray-200 text-base leading-relaxed">
            We work with companies that are ready to scale, ready to raise, and ready to build capital markets credibility. We're disciplined in our approach to professional investor relations.
          </p>
        </div>
      </div>
    </section>
  );
}
