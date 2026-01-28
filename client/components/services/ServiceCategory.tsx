import { useInView } from "@/hooks/useInView";

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
  backgroundColor = "bg-white",
}: ServiceCategoryProps) {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 ${backgroundColor} transition-all duration-500 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            SERVICE CATEGORY {categoryNumber}: {categoryTitle}
          </h2>
          <p className="text-lg text-gray-600">
            {categoryNumber === 1 && "For companies preparing to access public or private markets within 12-24 months"}
            {categoryNumber === 2 && "For companies actively engaging with investors, analysts, and the investment community"}
            {categoryNumber === 3 && "For listed mid-sized companies requiring continuous IR partnership"}
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {services.map((service, index) => (
            <div key={index} className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-gray-600 flex items-start">
                    <span className="text-accent font-bold mr-3">−</span>
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
