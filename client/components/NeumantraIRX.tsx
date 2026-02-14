import { useInView } from "@/hooks/useInView";

export default function NeumantraIRX() {
  const [ref, isInView] = useInView();

  const values = ["Experience", "Excellence", "Execution", "Expertise"];

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
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-xl p-6 sm:p-8 md:p-12 hover:shadow-apple transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                Neumantra Investor Relations X
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                X is for…
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/40 border border-white/80 rounded-lg p-4 text-center hover:shadow-apple transition-all duration-300 hover:bg-white/50"
                  style={{
                    animation: isInView
                      ? `slideInUp 0.5s ease-out forwards`
                      : "none",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <p className="text-primary font-bold text-base sm:text-lg">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center border-t border-white/40 pt-8">
              <p className="text-base sm:text-lg text-primary font-semibold">
                The integrated investor relations experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
