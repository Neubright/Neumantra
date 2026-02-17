import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { TrendingUp, AlertTriangle, Building } from "lucide-react";

export default function MidMarketGap() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-12 md:py-18 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "radial-gradient(circle at 20% 30%, rgba(254, 226, 226, 0.85) 0%, rgba(219, 234, 254, 0.85) 50%, rgba(254, 240, 242, 0.85) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            The Mid-Market IR Gap
          </h2>
          <SectionDivider />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Growth Stories Card */}
          <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8 hover:shadow-apple transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="flex-shrink-0">
                <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-full w-12 h-12 flex items-center justify-center">
                  <TrendingUp
                    className="w-6 h-6 text-accent opacity-75"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="text-left">
                <p className="text-gray-800 leading-relaxed">
                  India's mid-market represents some of the country's most
                  dynamic growth stories - innovative business models, strong
                  fundamentals, ambitious expansion plans. Yet many of these
                  companies struggle to translate operational excellence into
                  sustained market credibility.
                </p>
              </div>
            </div>
          </div>

          {/* The Gap Card */}
          <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="flex-shrink-0">
                <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-full w-12 h-12 flex items-center justify-center">
                  <AlertTriangle
                    className="w-6 h-6 text-accent opacity-75"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-primary mb-2">The Gap</h3>
                <p className="text-gray-800 leading-relaxed font-medium">
                  The gap lies in the absence of a professional investor
                  relations infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Market Segments Card */}
          <div className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-8 hover:shadow-apple transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="flex-shrink-0">
                <div className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-full w-12 h-12 flex items-center justify-center">
                  <Building
                    className="w-6 h-6 text-accent opacity-75"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Market Segments & Support
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <span className="text-lg">✓</span>
                    <p className="text-gray-700">
                      <span className="font-semibold text-primary">
                        Large corporations:
                      </span>{" "}
                      Benefit from dedicated IR teams and long-standing advisory
                      relationships
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-lg">✓</span>
                    <p className="text-gray-700">
                      <span className="font-semibold text-primary">
                        Early-stage startups:
                      </span>{" "}
                      Leverage venture capital networks
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-lg">✓</span>
                    <p className="text-gray-700">
                      <span className="font-semibold text-primary">
                        Mid-market companies:
                      </span>{" "}
                      Those preparing to list, already on SME exchanges, or
                      operating as listed mid-sized entities often navigate
                      capital markets with limited specialised support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
