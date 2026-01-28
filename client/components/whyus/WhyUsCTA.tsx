import { useInView } from "@/hooks/useInView";

export default function WhyUsCTA() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`bg-accent text-white py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready for a Strategic IR Partnership?
        </h2>
        <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
          Let's discuss whether Neumantra's approach aligns with your capital markets objectives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-accent hover:bg-gray-100 px-8 py-3 rounded font-semibold transition-colors">
            Schedule a Confidential Consultation
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-3 rounded font-semibold transition-colors">
            Request Credentials Presentation
          </button>
        </div>
      </div>
    </section>
  );
}
