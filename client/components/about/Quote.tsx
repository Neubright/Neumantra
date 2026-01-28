import { useInView } from "@/hooks/useInView";

export default function Quote() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`bg-accent text-white py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-2xl md:text-3xl font-semibold italic leading-relaxed">
          "Together, the team combines financial rigor with communication excellence, creating Neumantra's distinctive approach to professional investor relations."
        </p>
      </div>
    </section>
  );
}
