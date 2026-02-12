import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { useState } from "react";

interface ServiceItem {
  title: string;
  description: string;
  points: string[];
}

interface ServiceCategoryProps {
  categoryNumber: number;
  categoryTitle: string;
  services: ServiceItem[];
  backgroundColor?: string;
}

export default function ServiceCategory({
  categoryNumber,
  categoryTitle,
  services,
}: ServiceCategoryProps) {
  const [ref, isInView] = useInView();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categoryColors = {
    1: {
      bgGradient: "transparent",
      badgeBg: "bg-white/30",
      badgeText: "text-primary",
      accentColor: "",
      borderColor: "border-white/80",
    },
    2: {
      bgGradient: "transparent",
      badgeBg: "bg-white/30",
      badgeText: "text-primary",
      accentColor: "",
      borderColor: "border-white/80",
    },
    3: {
      bgGradient: "transparent",
      badgeBg: "bg-white/30",
      badgeText: "text-primary",
      accentColor: "",
      borderColor: "border-white/80",
    },
  };

  const colors =
    categoryColors[categoryNumber as keyof typeof categoryColors] ||
    categoryColors[1];

  return (
    <section
      ref={ref}
      className={`py-12 md:py-18 transition-all duration-500 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "radial-gradient(circle at 20% 30%, rgba(254, 226, 226, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(254, 240, 242, 0.6) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className={`w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center`}
            >
              <span className={`text-lg font-bold text-accent`}>
                {categoryNumber}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {categoryTitle}
            </h2>
          </div>
          <SectionDivider />
          <h3 className="text-lg md:text-xl font-semibold text-primary mt-6 mb-4 max-w-3xl mx-auto">
            {categoryNumber === 1 &&
              "For companies preparing to access public or private markets, including SME platforms, within the next 12-24 months"}
            {categoryNumber === 2 &&
              "For companies actively engaging with investors, analysts, and the investment community"}
            {categoryNumber === 3 &&
              "For listed mid-sized companies requiring a continuous investor relations partnership"}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              className={`backdrop-blur-xl bg-white/40 border-2 rounded-xl p-6 md:p-8 transition-all duration-300 cursor-pointer group hover:shadow-apple overflow-hidden relative ${
                colors.borderColor
              } ${
                expandedIndex === index
                  ? "ring-2 ring-offset-2 ring-accent"
                  : "hover:border-accent/50"
              }`}
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                style={{
                  background: `radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)`,
                }}
              ></div>

              <div className="relative z-10">
                {/* Service number and title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg ${colors.badgeBg} flex items-center justify-center`}
                  >
                    <span className={`text-sm font-bold text-accent`}>
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-primary leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-4 leading-relaxed font-medium">
                  {service.description}
                </p>

                {/* Expandable content */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-2 mt-4 pt-4 border-t border-gray-300/30">
                    {service.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="text-gray-700 text-sm flex items-start gap-3 animate-fadeIn"
                      >
                        <span className="text-accent flex-shrink-0 font-bold mt-1">
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expand indicator */}
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold transition-colors duration-300 ${
                      expandedIndex === index
                        ? colors.badgeText
                        : "text-gray-500"
                    }`}
                  >
                    {expandedIndex === index ? "Show less" : "View details"}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : ""
                    } ${expandedIndex === index ? colors.badgeText : "text-gray-400"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-fadeIn:nth-child(2) {
          animation-delay: 0.05s;
        }

        .animate-fadeIn:nth-child(3) {
          animation-delay: 0.1s;
        }

        .animate-fadeIn:nth-child(4) {
          animation-delay: 0.15s;
        }

        .animate-fadeIn:nth-child(5) {
          animation-delay: 0.2s;
        }

        .animate-fadeIn:nth-child(6) {
          animation-delay: 0.25s;
        }
      `}</style>
    </section>
  );
}
