import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function ScheduleConsultation() {
  const [ref, isInView] = useInView();

  const expectations = [
    "60-minute confidential consultation with Neumantra partners",
    "Discussion of your business context and capital markets goals",
    "Overview of relevant Neumantra capabilities and approach",
    "Preliminary thoughts on potential engagement framework",
    "No obligation, simply an opportunity for mutual exploration",
  ];

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Schedule a Consultation
          </h2>
          <SectionDivider />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100 mb-8">
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              Whether you are beginning to explore capital markets engagement,
              preparing for a significant transaction, or seeking to strengthen
              an existing investor relations function, we welcome a conversation
              about your goals and how Neumantra can support them.
            </p>

            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              Our initial discussions are exploratory and confidential. We take
              time to understand your business, capital markets objectives, and
              current stakeholder engagement approach—then provide perspective
              on how we might add value.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100 mb-8">
            <h3 className="text-xl font-bold text-primary mb-6">
              What to expect:
            </h3>
            <ul className="space-y-3">
              {expectations.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-700 text-base flex items-start"
                >
                  <span className="text-accent mr-3 flex-shrink-0 font-bold">
                    −
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <button className="bg-accent hover:bg-red-700 text-white pl-3 pr-1.5 py-1.5 rounded-full font-semibold transition-all duration-300 shadow-lg inline-flex items-center gap-3">
              Schedule Consultation
              <span className="flex-shrink-0 backdrop-blur-md bg-white/25 border border-white/40 rounded-full w-10 h-10 flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ffcfda2dcaa5c41399e1e44107fdf402a%2Fc76f1a82d1c747c78df66373da84fda9?format=webp&width=800&height=1200"
                  alt="Arrow"
                  style={{
                    filter: "brightness(0) invert(1)",
                    maxWidth: "14px",
                    maxHeight: "22px",
                    objectFit: "contain",
                    marginLeft: "2px",
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
