import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function EngagementPhilosophy() {
  const [ref, isInView] = useInView();

  const principles = [
    {
      title: "We invest deeply in understanding your business",
      description: "",
    },
    {
      title: "We remain outcome-focused and client-centric",
      description: "",
    },
    {
      title: "We challenge respectfully and advise candidly",
      description: "",
    },
    {
      title: "We protect long-term market credibility",
      description: "",
    },
    {
      title: "We remain accountable through transparent reporting",
      description: "",
    },
    {
      title: "We enable internal capability through knowledge transfer",
      description: "",
    },
  ];

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
            Engagement Philosophy
          </h2>
          <SectionDivider />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100">
            <h3 className="text-xl font-bold text-primary mb-6">Partnership, Not Vendor Relationship</h3>
            <p className="text-gray-700 text-base mb-6 font-semibold">
              When you engage Neumantra:
            </p>
            <ul className="space-y-3">
              {principles.map((principle, index) => (
                <li key={index} className="text-gray-700 text-base flex items-start">
                  <span className="text-accent mr-3 text-lg flex-shrink-0 font-bold">✓</span>
                  <span>{principle.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
