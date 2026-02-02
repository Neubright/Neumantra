import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

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

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-500 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          categoryNumber % 2 === 0
            ? "linear-gradient(135deg, rgba(248, 223, 228, 0.8) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(254, 240, 242, 0.6) 100%)"
            : "linear-gradient(135deg, rgba(254, 226, 226, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(254, 240, 242, 0.6) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            SERVICE CATEGORY {categoryNumber}: {categoryTitle}
          </h2>
          <SectionDivider />
          <p className="text-base text-gray-700 mt-6">
            {categoryNumber === 1 &&
              "For companies preparing to access public or private markets, including SME platforms, within the next 12-24 months"}
            {categoryNumber === 2 &&
              "For companies actively engaging with investors, analysts, and the investment community"}
            {categoryNumber === 3 &&
              "For listed mid-sized companies requiring a continuous investor relations partnership"}
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100"
            >
              <h3 className="text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="text-gray-700 text-base flex items-start"
                  >
                    <span className="text-accent mr-3 flex-shrink-0 font-bold">
                      •
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
