import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  const [ref, isInView] = useInView();

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
            Mission & Vision
          </h2>
          <SectionDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission */}
          <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8 hover:shadow-xl hover:bg-white/50 transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/40 border border-white/80 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target
                className="w-8 h-8 text-accent opacity-75"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-base">
              To partner with India's mid-market growth companies to transform
              financial strength into credible market brands through strategic,
              integrated investor relations built on{" "}
              <span className="font-semibold">
                financial insight, disciplined communication, and stakeholder
                trust.
              </span>
            </p>
          </div>

          {/* Vision */}
          <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8 hover:shadow-xl hover:bg-white/50 transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/40 border border-white/80 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye
                className="w-8 h-8 text-accent opacity-75"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed text-base">
              To be the trusted investor relations partner for mid-market growth
              companies, integrating{" "}
              <span className="font-semibold">
                financial rigour with strategic brand and reputation building
                expertise
              </span>{" "}
              to unlock inherent value and support long-term growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
