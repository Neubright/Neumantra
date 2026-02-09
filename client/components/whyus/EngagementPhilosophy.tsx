import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { Search, Target, MessageSquare, Shield, BarChart3, Rocket } from "lucide-react";

export default function EngagementPhilosophy() {
  const [ref, isInView] = useInView();

  const principles = [
    {
      icon: Search,
      title: "We invest deeply in understanding your business",
      color: "from-blue-50 to-blue-100/30",
      borderColor: "border-blue-200",
    },
    {
      icon: Target,
      title: "We remain outcome-focused and client-centric",
      color: "from-red-50 to-red-100/30",
      borderColor: "border-red-200",
    },
    {
      icon: MessageSquare,
      title: "We challenge respectfully and advise candidly",
      color: "from-blue-50 to-blue-100/30",
      borderColor: "border-blue-200",
    },
    {
      icon: Shield,
      title: "We protect long-term market credibility",
      color: "from-red-50 to-red-100/30",
      borderColor: "border-red-200",
    },
    {
      icon: BarChart3,
      title: "We remain accountable through transparent reporting",
      color: "from-blue-50 to-blue-100/30",
      borderColor: "border-blue-200",
    },
    {
      icon: Rocket,
      title: "We enable internal capability through knowledge transfer",
      color: "from-red-50 to-red-100/30",
      borderColor: "border-red-200",
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgba(15, 37, 71, 0.08) 0%, rgba(165, 35, 35, 0.06) 50%, rgba(229, 231, 235, 0.7) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm mb-4">
            HOW WE WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Engagement Philosophy
          </h2>
          <SectionDivider />
        </div>

        {/* Main Philosophy Statement */}
        <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8 mb-12 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Partnership, Not Vendor Relationship
          </h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            Effective investor relations isn't transactional—it's a sustained partnership requiring <span className="font-semibold">trust, transparency, and strategic alignment</span>.
          </p>
          <p className="text-gray-700 font-medium">
            When you engage Neumantra, you get:
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`backdrop-blur-xl bg-gradient-to-br ${principle.color} border-2 ${principle.borderColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300 group`}
            >
              {/* Icon */}
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <principle.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-primary leading-snug">
                {principle.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
