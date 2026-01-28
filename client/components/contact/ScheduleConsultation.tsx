import { useInView } from "@/hooks/useInView";

export default function ScheduleConsultation() {
  const [ref, isInView] = useInView();

  const expectations = [
    "60-minute confidential consultation with Neumantra partners",
    "Discussion of your business context and capital markets goals",
    "Overview of relevant Neumantra capabilities and approach",
    "Preliminary thoughts on potential engagement framework",
    "No obligation - simply an opportunity for mutual exploration",
  ];

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
            Schedule a Consultation
          </h2>

          <div className="mb-8">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Whether you are beginning to explore capital markets engagement, preparing for a significant transaction, or seeking to strengthen an existing IR function, we would welcome a conversation about your goals and how Neumantra can support them.
            </p>

            <p className="text-base text-gray-700 mb-8 leading-relaxed">
              Our initial discussions are exploratory and confidential. We will take time to understand your business, your capital markets objectives, and your current stakeholder engagement approach—then provide perspective on how we might add value.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-8 border-l-4 border-accent">
            <h3 className="text-xl font-bold text-primary mb-6">What to expect:</h3>
            <ul className="space-y-3">
              {expectations.map((item, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="text-accent mr-3 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="bg-accent hover:bg-red-700 text-white px-8 py-4 rounded font-semibold transition-colors text-lg">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
