import { useInView } from "@/hooks/useInView";

export default function ProofPoints() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-primary text-white transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Proof Points
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="border border-gray-600 rounded-lg p-8 bg-primary/50">
            <h3 className="text-xl font-bold text-accent mb-4">Combined Experience</h3>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span>80+ years of collective experience across founding partners in financial advisory, capital markets, and stakeholder engagement</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span>Supported multiple companies through IPO processes across mainboard and SME segments</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span>Advised listed companies on investor relations and corporate communications</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span>Managed stakeholder engagement for companies spanning multiple sectors</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-600 rounded-lg p-8 bg-primary/50">
            <h3 className="text-xl font-bold text-accent mb-4">Advisory Depth</h3>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span>Financial advisory credentials including valuation, corporate finance, and CFO-level guidance</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span>Communication expertise spanning investor relations, crisis management, ESG reporting, and reputation strategy</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span>Board advisory experience with listed and pre-IPO companies</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span>Recognized thought leadership in capital markets readiness and IR best practices</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-600 rounded-lg p-8 bg-primary/50">
            <h3 className="text-xl font-bold text-accent mb-4">Client Success Indicators</h3>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span>Companies supported achieving successful listings with strong institutional participation</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span>Analyst coverage expansion for clients</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span>Institutional ownership increases for ongoing IR clients</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span>High client retention rate reflecting sustained partnership value</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-600 rounded-lg p-8 bg-primary/50">
            <h3 className="text-xl font-bold text-accent mb-4">Market Recognition</h3>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span>Relevant industry recognition and speaking engagements</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span>Published thought leadership on capital markets topics</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span>Professional affiliations with industry bodies</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span>Media commentary on capital markets and IR topics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
