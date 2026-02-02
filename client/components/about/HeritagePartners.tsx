import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function HeritagePartners() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 text-gray-900 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "radial-gradient(circle at 20% 30%, rgba(254, 226, 226, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(254, 240, 242, 0.6) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Heritage Partners
          </h2>
          <SectionDivider />
        </div>

        <div className="space-y-8 max-w-7xl mx-auto">
          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100">
            <div className="flex justify-start mb-6">
              <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-lg p-4 flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0b27405b6ba144e189319268af836d65%2Fde161038493542a5bbd349610b65931a?format=webp&width=800&height=1200"
                  alt="Mantraa Logo"
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              Mantraa Advisory | Financial & Strategic Expertise
            </h3>
            <p className="text-gray-700 text-base mb-4 leading-relaxed">
              Mantraa brings rigorous financial advisory credentials to
              Neumantra's foundation:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span className="text-gray-700 text-base">
                  Capital structure optimization and valuation analysis
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span className="text-gray-700 text-base">
                  IPO preparation and transaction readiness
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span className="text-gray-700 text-base">
                  Financial reporting frameworks and disclosure enhancement
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span className="text-gray-700 text-base">
                  CFO-level strategic guidance
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span className="text-gray-700 text-base">
                  Board advisory and governance strengthening
                </span>
              </li>
            </ul>
            <p className="text-gray-700 text-base leading-relaxed">
              Mantraa's track record of supporting companies through complex
              financial transitions ensures Neumantra's investor relations
              guidance is grounded in financial substance, not marketing
              narratives.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100">
            <div className="flex justify-start mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0b27405b6ba144e189319268af836d65%2F9b6912099ccf4aba935a03dc14a8323f?format=webp&width=800&height=1200"
                alt="Neubright Logo"
                className="h-6 w-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              Neubright Partners | Stakeholder Engagement Excellence
            </h3>
            <p className="text-gray-700 text-base mb-4 leading-relaxed">
              Neubright contributes sophisticated communication and engagement
              capabilities:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span className="text-gray-700 text-base">
                  Stakeholder mapping and engagement strategy
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span className="text-gray-700 text-base">
                  Corporate messaging and narrative development
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span className="text-gray-700 text-base">
                  Reputation management and perception tracking
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span className="text-gray-700 text-base">
                  ESG integration and sustainability communication
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span className="text-gray-700 text-base">
                  Crisis preparedness and issue management
                </span>
              </li>
            </ul>
            <p className="text-gray-700 text-base leading-relaxed">
              Neubright's expertise ensures Neumantra delivers not just accurate
              information, but compelling, consistent, and credible
              communication that resonates with institutional investors and
              analysts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
