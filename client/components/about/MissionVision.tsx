import { useInView } from "@/hooks/useInView";

export default function MissionVision() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-white transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Mission & Vision
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower India's capital-growth focused mid-market companies with the strategic communications and investor relations expertise required to build lasting credibility with stakeholders and accelerate their growth trajectories.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To establish Neumantra as the definitive IR partner for high-growth mid-market companies in India - recognized for delivering measurable business impact and becoming the standard-setting approach to professional investor relations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
