import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function WhyUsCTA() {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Ready for a Strategic IR Partnership?
        </h2>
        <SectionDivider />
        <p className="text-base text-gray-700 mb-8 max-w-4xl mx-auto mt-6">
          Let's discuss whether Neumantra's approach aligns with your
          capital-markets objectives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent text-white hover:bg-red-700 px-8 py-3 rounded-full font-semibold transition-colors">
            Schedule a Confidential Consultation
          </button>
          <button className="backdrop-blur-xl bg-white/40 border-2 border-white/80 text-primary hover:bg-white/50 px-8 py-3 rounded-full font-semibold transition-colors">
            Request Credentials Presentation
          </button>
        </div>
      </div>
    </section>
  );
}
