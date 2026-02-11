import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import {
  Search,
  Target,
  MessageSquare,
  Shield,
  BarChart3,
  Rocket,
} from "lucide-react";

export default function EngagementPhilosophy() {
  const [ref, isInView] = useInView();

  const principles = [
    {
      icon: Search,
      title: "We invest deeply in understanding your business",
      color: "transparent",
      borderColor: "border-white/80",
    },
    {
      icon: Target,
      title: "We remain outcome-focused and client-centric",
      color: "transparent",
      borderColor: "border-white/80",
    },
    {
      icon: MessageSquare,
      title: "We challenge respectfully and advise candidly",
      color: "transparent",
      borderColor: "border-white/80",
    },
    {
      icon: Shield,
      title: "We protect long-term market credibility",
      color: "transparent",
      borderColor: "border-white/80",
    },
    {
      icon: BarChart3,
      title: "We remain accountable through transparent reporting",
      color: "transparent",
      borderColor: "border-white/80",
    },
    {
      icon: Rocket,
      title: "We enable internal capability through knowledge transfer",
      color: "transparent",
      borderColor: "border-white/80",
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-12 md:py-18 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "radial-gradient(circle at 20% 30%, rgba(254, 226, 226, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(254, 240, 242, 0.6) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Engagement Philosophy
          </h2>
          <SectionDivider />
        </div>

        {/* Main Philosophy Section */}
        <div className="max-w-7xl mx-auto">
          {/* Partnership Statement */}
          <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Partnership, Not Vendor Relationship
            </h3>
            <p className="text-gray-800 leading-relaxed mb-4">
              Effective investor relations isn't transactional—it's a sustained
              partnership requiring{" "}
              <span className="font-semibold">
                trust, transparency, and strategic alignment
              </span>
              .
            </p>
          </div>

          {/* When you engage Neumantra */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-6 text-center">
              When you engage Neumantra:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/30 border-2 border-white/60 rounded-lg p-6 hover:shadow-lg hover:border-white/90 hover:bg-white/40 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-full w-10 h-10 flex items-center justify-center">
                        <principle.icon
                          className="w-5 h-5 text-accent opacity-75"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed font-medium pt-1">
                      {principle.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
