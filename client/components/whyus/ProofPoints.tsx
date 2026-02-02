import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { Users, Briefcase, Trophy } from "lucide-react";

export default function ProofPoints() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgba(254, 226, 226, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(254, 240, 242, 0.6) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Proof Points
          </h2>
          <SectionDivider />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100">
            <div className="flex justify-start mb-4">
              <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-full w-16 h-16 flex items-center justify-center">
                <Users className="w-8 h-8 text-accent opacity-75" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary mb-6">Combined Experience</h3>
            <ul className="space-y-4 text-gray-700 text-base">
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0 font-bold">−</span>
                <span>100+ years of collective experience across founding partners in financial advisory, capital markets, and stakeholder engagement</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0 font-bold">−</span>
                <span>Delivered impeccable valuation analysis and diagnostics for over 200 companies</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0 font-bold">−</span>
                <span>Supported over a dozen companies through IPO processes across mainboard and SME segments</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0 font-bold">−</span>
                <span>Advised 200 companies on investor relations and corporate communications</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0 font-bold">−</span>
                <span>Managed stakeholder engagement for companies spanning multiple sectors</span>
              </li>
            </ul>
          </div>

          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100">
            <div className="flex justify-start mb-4">
              <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-full w-16 h-16 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-accent opacity-75" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary mb-6">Advisory Depth</h3>
            <ul className="space-y-4 text-gray-700 text-base">
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0 font-bold">−</span>
                <span>CFO-level financial advisory and valuation expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0 font-bold">−</span>
                <span>IR, ESG, crisis management, and reputation strategy capability</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0 font-bold">−</span>
                <span>Board advisory experience across listed and pre-IPO companies</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0 font-bold">−</span>
                <span>Recognised thought leadership in capital-markets readiness</span>
              </li>
            </ul>
          </div>

          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100">
            <div className="flex justify-start mb-4">
              <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-full w-16 h-16 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-accent opacity-75" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary mb-6">Market Recognition</h3>
            <ul className="space-y-4 text-gray-700 text-base">
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0 font-bold">−</span>
                <span>Relevant industry recognition, speaking engagements, published thought leadership</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0 font-bold">−</span>
                <span>Professional affiliations: CFA, ICAI, ICSI, industry bodies</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0 font-bold">−</span>
                <span>Media commentary on capital markets and IR topics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
