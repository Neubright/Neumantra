import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function WhyUsIntro() {
  const [ref, isInView] = useInView();

  const risks = [
    {
      icon: "⚠️",
      title: "Wrong Partner Risk",
      description: "Damages credibility, wastes leadership time, misses market opportunities",
    },
    {
      icon: "✅",
      title: "Right Partner Benefit",
      description: "Protects reputation, expands access, enhances valuation",
    },
    {
      icon: "🎯",
      title: "Strategic Decision",
      description: "Choosing advisor has lasting implications for your company",
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
          "linear-gradient(135deg, rgba(219, 234, 254, 0.8) 0%, rgba(248, 223, 228, 0.6) 50%, rgba(229, 231, 235, 0.7) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm mb-4">
            MAKING THE RIGHT CHOICE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Choosing Your IR Partner Matters
          </h2>
          <SectionDivider />
          <h3 className="text-xl font-semibold text-gray-800 mt-6 max-w-3xl mx-auto">
            Selecting an investor relations advisor is a strategic decision with lasting implications
          </h3>
        </div>

        {/* Main intro paragraph */}
        <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8 mb-12 hover:shadow-xl transition-all duration-300">
          <p className="text-gray-800 text-lg leading-relaxed">
            The wrong partner can damage credibility, waste leadership time, and miss critical market opportunities. The right partner becomes an essential extension of your leadership team—protecting reputation, expanding access, and enhancing valuation.
          </p>
        </div>

        {/* Risk vs Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {risks.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/30 border-2 border-white/60 rounded-lg p-6 hover:shadow-lg hover:border-white/90 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8 bg-gradient-to-r from-blue-50/30 to-purple-50/30">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent font-bold">
              ✓
            </span>
            Neumantra's Distinctive Approach
          </h3>
          <p className="text-gray-800 leading-relaxed">
            Neumantra represents a <span className="font-semibold text-primary">distinctive approach to investor relations advisory</span>, purpose-built for India's mid-market opportunity. We combine financial expertise, capital markets knowledge, and stakeholder communication excellence into a single integrated partnership designed specifically for companies like yours.
          </p>
        </div>
      </div>
    </section>
  );
}
