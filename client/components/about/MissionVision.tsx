import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background: "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm mb-4">
            OUR PURPOSE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Mission & Vision
          </h2>
          <SectionDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission */}
          <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8 hover:shadow-xl hover:bg-white/50 transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/30 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-base">
              To partner with India's mid-market growth companies to transform financial strength into credible market brands through strategic, integrated investor relations built on <span className="font-semibold">financial insight, disciplined communication, and stakeholder trust.</span>
            </p>
          </div>

          {/* Vision */}
          <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8 hover:shadow-xl hover:bg-white/50 transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/30 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed text-base">
              To be the trusted investor relations partner for mid-market growth companies, integrating <span className="font-semibold">financial rigour with strategic brand and reputation building expertise</span> to unlock inherent value and support long-term growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
