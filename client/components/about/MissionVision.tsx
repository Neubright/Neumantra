import { Target, Eye } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function MissionVision() {
  const [ref, isInView] = useInView();

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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Mission & Vision
          </h2>
          <SectionDivider />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100">
            <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-accent opacity-75" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To partner with India's mid-market growth companies to transform
              financial strength into credible market brands through strategic,
              integrated investor relations built on financial insight,
              disciplined communication, and stakeholder trust.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100">
            <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Eye className="w-8 h-8 text-accent opacity-75" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the trusted investor relations partner for mid-market growth
              companies, integrating financial rigour with strategic brand and
              reputation building expertise to unlock inherent value to support
              long-term growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
