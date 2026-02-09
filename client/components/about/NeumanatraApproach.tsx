import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { Target, Link2, BookOpen, Handshake } from "lucide-react";

export default function NeumanatraApproach() {
  const [ref, isInView] = useInView();

  const principles = [
    {
      icon: Target,
      title: "Precision & Purpose",
      description: "Founded to close the mid-market IR gap with precision",
      color: "from-blue-50 to-blue-100/30",
      borderColor: "border-blue-200",
    },
    {
      icon: Link2,
      title: "Integrated Expertise",
      description: "Purposeful integration of financial and stakeholder engagement capabilities",
      color: "from-red-50 to-red-100/30",
      borderColor: "border-red-200",
    },
    {
      icon: BookOpen,
      title: "Multi-Disciplinary",
      description: "Fluency across financial analysis, capital markets, governance, and communication",
      color: "from-blue-50 to-blue-100/30",
      borderColor: "border-blue-200",
    },
    {
      icon: Handshake,
      title: "Unified Accountability",
      description: "Single partner accountability instead of fragmented vendor relationships",
      color: "from-red-50 to-red-100/30",
      borderColor: "border-red-200",
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 text-gray-900 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(165, 35, 35, 0.06) 0%, rgba(15, 37, 71, 0.08) 50%, rgba(165, 35, 35, 0.06) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm mb-4">
            OUR FOUNDATION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            The Neumantra Approach
          </h2>
          <SectionDivider />
        </div>

        {/* Main narrative */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8">
            <h3 className="text-xl font-bold text-primary mb-4">Founded to Close the Gap</h3>
            <p className="text-gray-800 leading-relaxed">
              Neumantra Capital Advisors was founded to close this gap with precision. <span className="font-semibold">We are not a traditional communications agency learning finance. We are not accountants dabbling in messaging.</span> Neumantra represents the purposeful integration of Mantraa Advisory's financial strategy expertise and Neubright Partners' stakeholder engagement capabilities - two established practices coming together to serve an underserved market segment.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8">
            <h3 className="text-xl font-bold text-primary mb-4">Multiple Disciplines, Single Partner</h3>
            <p className="text-gray-800 leading-relaxed mb-4">
              Our founding teams recognized that effective investor relations demands fluency across multiple disciplines:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">Financial Analysis</span>
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">Capital Markets</span>
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">Governance</span>
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">Communication Strategy</span>
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">Stakeholder Psychology</span>
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">Market Positioning</span>
            </div>
            <p className="text-gray-700">
              Fragmented vendor relationships create inefficiency and inconsistency. <span className="font-semibold text-primary">Neumantra delivers unified accountability.</span>
            </p>
          </div>

          <div className="backdrop-blur-xl bg-gradient-to-r from-accent/10 to-accent/5 border-2 border-accent/30 rounded-xl p-8">
            <p className="text-gray-800 text-lg leading-relaxed">
              We work with companies that are <span className="font-bold">ready to scale, ready to raise, and ready to build a lasting presence in the capital markets.</span>
            </p>
          </div>
        </div>

        {/* Key Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`backdrop-blur-xl bg-gradient-to-br ${principle.color} border-2 ${principle.borderColor} rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {principle.icon}
              </div>
              <h3 className="text-base font-bold text-primary mb-2">
                {principle.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
