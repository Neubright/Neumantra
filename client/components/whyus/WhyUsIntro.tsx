import { useInView } from "@/hooks/useInView";

export default function WhyUsIntro() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-white transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            The Professional IR Partner Decision
          </h2>

          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Selecting an investor relations advisor is a strategic decision with lasting implications. The wrong partner can damage credibility, waste leadership time, and miss critical market opportunities. The right partner becomes an essential extension of your leadership team - protecting reputation, expanding access, and enhancing valuation.
            </p>

            <p className="text-base leading-relaxed">
              Neumantra represents a distinctive approach to investor relations advisory, purpose-built for India's mid-market opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
