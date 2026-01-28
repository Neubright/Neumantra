import { useInView } from "@/hooks/useInView";

export default function EngagementPhilosophy() {
  const [ref, isInView] = useInView();

  const principles = [
    {
      title: "We Invest in Understanding",
      description: "Deep immersion in your business model, competitive dynamics, and strategic priorities before any external engagement",
    },
    {
      title: "We Challenge Respectfully",
      description: "Professional obligation to provide candid counsel, even when it's uncomfortable, rather than just validating existing views",
    },
    {
      title: "We Protect Long-Term Interests",
      description: "Recommendations balanced between immediate objectives and sustained market credibility",
    },
    {
      title: "We are Accountable",
      description: "Clear responsibility for outcomes, transparent reporting, and continuous improvement",
    },
    {
      title: "We Enable Internal Capability",
      description: "Knowledge transfer approach that strengthens your team's IR competency over time",
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-white transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Engagement Philosophy
          </h2>
          <h3 className="text-2xl font-semibold text-primary mb-12 text-center">
            Partnership, Not Vendor Relationship
          </h3>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed text-center">
            Effective investor relations isn't transactional - it's a sustained partnership requiring trust, transparency, and strategic alignment.
          </p>

          <p className="text-gray-700 font-semibold text-lg mb-8">
            When you engage Neumantra:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-accent">
                <h4 className="text-lg font-bold text-primary mb-3">{principle.title}</h4>
                <p className="text-gray-700">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
