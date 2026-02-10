import { useInView } from "@/hooks/useInView";
import SectionDivider from "./ui/SectionDivider";

export default function OurHeritage() {
  const [ref, isInView] = useInView();
  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 text-gray-900 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgba(219, 234, 254, 0.8) 0%, rgba(248, 223, 228, 0.6) 50%, rgba(229, 231, 235, 0.7) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Our Heritage
          </h2>
          <SectionDivider />
          <p className="text-gray-700 text-lg mb-8">
            Neumantra's investor relations advisory is built on the combined
            expertise of two established practices.
          </p>
          <h3 className="text-2xl font-bold text-accent mb-8">
            From Proven Expertise to Integrated Excellence
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="backdrop-blur-xl border-2 border-primary/30 rounded-lg p-8 bg-white/40 hover:bg-white/50 transition-all duration-300 shadow-lg">
            <div className="flex justify-start mb-6">
              <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-lg p-4 flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0b27405b6ba144e189319268af836d65%2Fde161038493542a5bbd349610b65931a?format=webp&width=800&height=1200"
                  alt="Mantraa Logo"
                  className="h-8 w-auto"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">
              <a
                href="https://www.mantraa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Mantraa Advisory
              </a>
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Established financial and strategic advisory practice with deep
              capital-markets expertise - supporting companies through
              valuations, IPO preparation, CFO-level guidance, and transaction
              readiness.
            </p>
          </div>

          <div className="backdrop-blur-xl border-2 border-primary/30 rounded-lg p-8 bg-white/40 hover:bg-white/50 transition-all duration-300 shadow-lg">
            <div className="flex justify-start mb-6">
              <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-lg p-4 flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0b27405b6ba144e189319268af836d65%2F9b6912099ccf4aba935a03dc14a8323f?format=webp&width=800&height=1200"
                  alt="Neubright Logo"
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">
              <a
                href="https://www.neubright.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Neubright Partners
              </a>
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Strategic consulting firm specializing in stakeholder engagement,
              corporate communications, reputation management, and ESG
              integration - trusted by leadership teams navigating complex
              stakeholder landscapes.
            </p>
          </div>
        </div>

        <div className="text-center bg-primary text-white rounded-lg p-8 mt-8">
          <h4 className="text-2xl font-bold mb-3">Together as Neumantra</h4>
          <p className="text-white text-lg max-w-3xl mx-auto">
            A new standard in investor relations - where financial substance
            meets communication sophistication, purpose-built for India's
            ambitious mid-market companies.
          </p>
        </div>
      </div>
    </section>
  );
}
